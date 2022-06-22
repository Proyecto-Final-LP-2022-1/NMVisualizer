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
var epsilon; // epsilon para ambos
var functionTxt; // para guardar texto de funcion enviado por el cliente
const resolution = 1000; // puntos que se generan para pintar la funcion
var newtonPad; // padding para definir rango para pintar funcion cuando se usa newton
var step = 0; // step in while loop
var xi_step = 0;
var xf_step = 0;

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

const newtonAlg = 'slope = ((f(xi + epsilon)- f(xi - epsilon))/(2*epsilon));\n'
                 +'x = xi - ( f(xi) / ((f(xi + epsilon)- f(xi - epsilon))/(2*epsilon)) );\n'
                 +'while((((x-xi) ^ 2) ^ 0.5) > epsilon)\n'
                 +'    xi = x;\n'
                 +'    slope = ((f(xi + epsilon)- f(xi - epsilon))/(2*epsilon));\n'
                 +'    x = xi - ( f(xi) / (slope) );\n'
                 +'end;'
            
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
    step = 0;
    xi_step = 0;
    xf_step = 0;
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
    res.sendStatus(200); // respond to the client indicating everything was ok
});

app.put('/bisection', (req, res) => {
    console.log('Data received:');
    console.log(req.body);
    epsilon = 1*req.body.epsilon;
    functionTxt = req.body.function;
    input = 'xi = '+req.body.xi+'; '
            +'xf = '+req.body.xf+'; '
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
    xi = 1*visitor.simbTable.xi[0]; 
    xf = 1*visitor.simbTable.xf[0];
    f = visitor.simbTable.f[0];
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
    step = 0;
    xi_step = 0;
    xf_step = 0;
    //console.log('xi: '+visitor.simbTable.xi[xi_step].toString()+', x: '+visitor.simbTable.x[step].toString()+', xf: '+visitor.simbTable.xf[xf_step].toString());
    res.send(JSON.stringify({xs: xs, ys: ys, x: visitor.simbTable.x[step], xi: visitor.simbTable.xi[xi_step], xf: visitor.simbTable.xf[xf_step], done: false}));
});

// respond to GET requests with xs and ys (coords of points from function), x mid point on interval from xi to xf
app.get('/bisection/update/next', (req, res) => {
    if (1*step === 1*visitor.simbTable.x.length-1) {
        console.log('DONE IN '+(step+2).toString()+' STEPS');
        res.send(JSON.stringify({x: visitor.simbTable.x[step], xi: visitor.simbTable.xi[xi_step], xf: visitor.simbTable.xf[xf_step], done: true, steps: step+2}));
        return;
    }else {
        step++;
        if (visitor.simbTable.x[step-1] === visitor.simbTable.xf[xf_step+1]){
            xf_step++;
        } else if (visitor.simbTable.x[step-1] === visitor.simbTable.xi[xi_step+1]){
            xi_step++;
        }
        //console.log('xi: '+visitor.simbTable.xi[xi_step].toString()+', x: '+visitor.simbTable.x[step].toString()+', xf: '+visitor.simbTable.xf[xf_step].toString());
        res.send(JSON.stringify({x: visitor.simbTable.x[step], xi: visitor.simbTable.xi[xi_step], xf: visitor.simbTable.xf[xf_step], done: false}));
        return;
    }
});

app.get('/bisection/update/prev', (req, res) => {
    if (1*step === 0) {
        console.log('BACK AT START');
        res.send(JSON.stringify({x: visitor.simbTable.x[step], xi: visitor.simbTable.xi[xi_step], xf: visitor.simbTable.xf[xf_step], done: true, steps: step+2}));
        return;
    }else {
        step--;
        if (visitor.simbTable.x[step] === visitor.simbTable.xf[xf_step]){
            xf_step--;
        } else if (visitor.simbTable.x[step] === visitor.simbTable.xi[xi_step]){
            xi_step--;
        }
        //console.log('xi: '+visitor.simbTable.xi[xi_step].toString()+', x: '+visitor.simbTable.x[step].toString()+', xf: '+visitor.simbTable.xf[xf_step].toString());
        res.send(JSON.stringify({x: visitor.simbTable.x[step], xi: visitor.simbTable.xi[xi_step], xf: visitor.simbTable.xf[xf_step], done: false}));
        return;
    }
});

app.get('/bisection/code', (req, res) => {
    res.send(JSON.stringify({code: input}));
});

app.put('/newton', (req, res) => {
    console.log('Data received:');
    console.log(req.body);
    epsilon = 1*req.body.epsilon;
    functionTxt = req.body.function;
    newtonPad = 1*req.body.pad;
    input = 'xi = '+req.body.xi+';\n'
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
    xi = 1*visitor.simbTable.xi[0];
    f = visitor.simbTable.f[0];
    for (let i = 0; i<=resolution; i++) {
        //console.log('i: '+i.toString());
        var x = (i*(((xi+newtonPad)-(xi-newtonPad))/resolution)+(xi-newtonPad)).toFixed(3);
        xs.push(x);
        ys.push(f(x).toFixed(18));
    }
    res.sendStatus(200); // respond to the client indicating everything was ok
});

app.get('/newton', (req, res) => {
    step = 0;
    //console.log('initial xi: '+visitor.simbTable.xi[step].toString()+', x: '+visitor.simbTable.x[step].toString()+', slope: '+visitor.simbTable.slope[step].toString());
    res.send(JSON.stringify({xs: xs, ys: ys, x: visitor.simbTable.x[step], xi: visitor.simbTable.xi[step], slope: visitor.simbTable.slope[step], done: false}));
});

app.get('/newton/update/next', (req, res) => {
    if (1*step === 1*visitor.simbTable.x.length-1) {
        console.log('DONE IN '+(step+2).toString()+' STEPS');
        res.send(JSON.stringify({x: visitor.simbTable.x[step], xi: visitor.simbTable.xi[step], slope: visitor.simbTable.slope[step], done: true, steps: step+2}));
        return;
    }else {
        step++;
        //console.log('xi: '+xi.toString()+', x: '+x.toString());
        res.send(JSON.stringify({x: visitor.simbTable.x[step], xi: visitor.simbTable.xi[step], slope: visitor.simbTable.slope[step], done: false}));
        return;
    }
});

app.get('/newton/update/prev', (req, res) => {    
    if (1*step === 0) {
        console.log('BACK AT START');
        res.send(JSON.stringify({x: visitor.simbTable.x[step], xi: visitor.simbTable.xi[step], slope: visitor.simbTable.slope[step], done: true}));
        return;
    }else { 
        step--;
        //console.log('xi: '+xi.toString()+', x: '+x.toString());
        res.send(JSON.stringify({x: visitor.simbTable.x[step], xi: visitor.simbTable.xi[step], slope: visitor.simbTable.slope[step], done: false}));
        return;
    }
});

app.get('/newton/code', (req, res) => {
    res.send(JSON.stringify({code: input}));
});