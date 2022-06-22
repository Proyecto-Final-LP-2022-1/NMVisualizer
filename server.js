import antlr4 from 'antlr4';
import matlabLexer from './matlabLexer.js';
import matlabParser from './matlabParser.js';
import visualizerVisitor from './visualizerVisitor.js';
import path from 'path';
const __dirname = path.resolve();
import express from 'express';
import bodyParser from 'body-parser';

var input;
var chars;
var lexer;
var tokens;
var parser;
var tree;
var visitor;

var f; // funcion interpretada de matlab
var xi; // xi de biseccion, xi de newton
var xf; // xf de biseccion
var xs = []; // coordenadas x's de puntos para pintar la funcion
var ys = []; // coordenadas y's de puntos para pintar la funcion
var x; // aproximacion de raiz
var epsilon; // epsilon para ambos
var functionTxt; // para guardar texto de funcion enviado por el cliente
const resolution = 1000; // puntos que se generan para pintar la funcion
var newtonPad; // padding para definir rango para pintar funcion cuando se usa newton

const bisecAlg = 'x = (xi+xf)/2;\n'
                +'while(((xf-xi)^ 2) ^ 0.5 > epsilon)\n'
                +'  if( (f(xf) > 0) & (f(xi) < 0))\n'
                +'    if(f(x) > 0)\n'
                +'      xf = x;\n'
                +'    else\n'
                +'      xi = x;\n'
                +'    end;\n'
                +'  else\n'
                +'    if(f(x) < 0)\n'
                +'      xf = x;\n'
                +'    else\n'
                +'      xi = x;\n'
                +'    end;\n'
                +'  end;\n'
                +'  x = (xi+xf)/2;\n'
                +'end;'

const newtonAlg = 'x = xi - ( f(xi) / ((f(xi + epsilon)- f(xi - epsilon))/(2*epsilon)) );\n'
                 +'while((((x-xi) ^ 2) ^ 0.5) > epsilon)\n'
                 +'    xi = x;\n'
                 +'    x = xi - ( f(xi) / ((f(xi + epsilon)- f(xi - epsilon))/(2*epsilon)) );\n'
                 +'end;'
            

var steps = [];

console.log('Server-side code running');


const app = express();

// serve files from the public directory
app.use(express.static('public'));

// needed to parse JSON data in the body of POST requests
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('listening on 3000');
});

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// example after receiving a PUT request, update the database with
// the new x, y coords in the request body
// app.put('/circle', (req, res) => {
//   console.log('Data received: ' + JSON.stringify(req.body));
//   res.sendStatus(200); // respond to the client indicating everything was ok
// });

app.put('/reset', (req, res) => {
    console.log('Reseting');
    epsilon = '';
    functionTxt = '';
    input = '';
    chars = '';
    lexer = '';
    tokens = '';
    parser = '';
    tree = '';
    visitor = '';
    f = '';
    xs = [];
    ys = [];
    xi = '';
    xf = '';
    x = '';
    res.sendStatus(200); // respond to the client indicating everything was ok
});

app.put('/bisection', (req, res) => {
    console.log('Data received:');
    console.log(req.body);
    epsilon = 1*req.body.epsilon;
    functionTxt = req.body.function;
    input = 'xi_init = '+req.body.xi+';\n'
            +'xf_init = '+req.body.xf+';\n'
            +'xi = xi_init;\n'
            +'xf = xf_init;\n'
            +'epsilon = '+epsilon+';\n'
            +'f = @(x) '+functionTxt+';\n' + bisecAlg;
    chars = new antlr4.InputStream(input);
    lexer = new matlabLexer(chars);
    tokens = new antlr4.CommonTokenStream(lexer);
    parser = new matlabParser(tokens);
    parser.buildParseTrees = true;
    tree = parser.translation_unit();
    visitor = new visualizerVisitor();
    visitor.visitTranslation_unit(tree);
    console.log('Symbols table:');
    console.log(visitor.simbTable);
    xs = [];
    ys = [];
    xi = 1*visitor.simbTable.xi_init; 
    xf = 1*visitor.simbTable.xf_init;
    f = visitor.simbTable.f;
    for (let i = 0; i<=resolution; i++) {
        //console.log('i: '+i.toString());
        var x = (i*((xf-xi)/resolution)+xi).toFixed(3);
        xs.push(x);
        ys.push(f(x).toFixed(18));
    }
    res.sendStatus(200); // respond to the client indicating everything was ok
});

// respond to GET requests with xs and ys (coords of points from function), x mid point on interval from xi to xf
app.get('/bisection', (req, res) => {
    steps.length = 0;
    x = ((xf-xi)/2)+xi;
    //console.log('xi: '+xi.toString()+', x: '+x.toString()+', xf: '+xf.toString());
    res.send(JSON.stringify({xs: xs, ys: ys, x: x, xi: xi, xf: xf}));
});

// respond to GET requests with xs and ys (coords of points from function), x mid point on interval from xi to xf
app.get('/bisection/update', (req, res) => {
    // se vuelve a hacer el proceso de biseccion
    // pero ahora comparando el x actual de la grafica 'x'
    // con el valor calculado por el interprete visitor.simbTable.x
    if (x === 1*visitor.simbTable.x) {
        console.log('DONE IN '+steps.length+' STEPS');
        console.log(steps);
        res.send(JSON.stringify({x: x, xi: xi, xf: xf, done: true, steps: steps.length}));
        return;
    }else if (x < 1*visitor.simbTable.x) {
        xi = x;
        steps.push('R');        
        x = ((xf-xi)/2)+xi;
        //console.log('xi: '+xi.toString()+', x: '+x.toString()+', xf: '+xf.toString());
        res.send(JSON.stringify({x: x, xi: xi, xf: xf, done: false}));
        return;
    } else if (x > 1*visitor.simbTable.x) {
        xf = x;
        steps.push('L');
        x = ((xf-xi)/2)+xi;
        //console.log('xi: '+xi.toString()+', x: '+x.toString()+', xf: '+xf.toString());
        res.send(JSON.stringify({x: x, xi: xi, xf: xf, done: false}));
        return;
    } else {
        console.log('weird place');
        res.send(JSON.stringify({x: x, xi: xi, xf: xf, done: false}));
        return;
    }
});

app.get('/bisection/code', (req, res) => {
    res.send(JSON.stringify({code: 'xi = '+xi+'; '
                                    +'xf = '+xf+'; '
                                    +'epsilon = '+epsilon+';\n'
                                    +'f = @(x) '+functionTxt+';\n' + bisecAlg}));
});

app.put('/newton', (req, res) => {
    console.log('Data received:');
    console.log(req.body);
    epsilon = 1*req.body.epsilon;
    functionTxt = req.body.function;
    newtonPad = 1*req.body.pad;
    input = 'xi_init = '+req.body.xi+';\n'
            +'xi = xi_init;\n'
            +'epsilon = '+epsilon+';\n'
            +'f = @(x) '+functionTxt+';\n' + newtonAlg;
    chars = new antlr4.InputStream(input);
    lexer = new matlabLexer(chars);
    tokens = new antlr4.CommonTokenStream(lexer);
    parser = new matlabParser(tokens);
    parser.buildParseTrees = true;
    tree = parser.translation_unit();
    visitor = new visualizerVisitor();
    visitor.visitTranslation_unit(tree);
    console.log('Symbols table:');
    console.log(visitor.simbTable);
    xs = [];
    ys = [];
    xi = 1*visitor.simbTable.xi_init;
    f = visitor.simbTable.f;
    for (let i = 0; i<=resolution; i++) {
        //console.log('i: '+i.toString());
        var x = (i*(((xi+newtonPad)-(xi-newtonPad))/resolution)+(xi-newtonPad)).toFixed(3);
        xs.push(x);
        ys.push(f(x).toFixed(18));
    }
    res.sendStatus(200); // respond to the client indicating everything was ok
});

app.get('/newton', (req, res) => {
    steps.length = 0;
    x = xi - ( f(xi) / ((f(xi + epsilon)- f(xi - epsilon))/(2*epsilon)) ); 
    console.log('initial xi: '+xi.toString()+', x: '+x.toString());
    res.send(JSON.stringify({xs: xs, ys: ys, x: x, xi: xi, slope: ((f(xi + epsilon)- f(xi - epsilon))/(2*epsilon))}));
});

app.get('/newton/update', (req, res) => {
    if (x === 1*visitor.simbTable.x) {
        console.log('DONE IN '+steps.length+' STEPS');
        console.log(steps);
        res.send(JSON.stringify({x: x, xi: xi, slope : ((f(xi + epsilon)- f(xi - epsilon))/(2*epsilon)), done: true, steps: steps.length}));
        return;
    }else {
        xi = x;
        x = xi - ( f(xi) / ((f(xi + epsilon)- f(xi - epsilon))/(2*epsilon)) );
        steps.push({x: x});
        //console.log('xi: '+xi.toString()+', x: '+x.toString());
        res.send(JSON.stringify({x: x, xi: xi, slope: ((f(xi + epsilon)- f(xi - epsilon))/(2*epsilon)), done: false}));
        return;
    }
});

app.get('/newton/code', (req, res) => {
    res.send(JSON.stringify({code: 'xi = '+xi+'; '
                                    +'epsilon = '+epsilon+';\n'
                                    +'f = @(x) '+functionTxt+';\n' + newtonAlg}));
});