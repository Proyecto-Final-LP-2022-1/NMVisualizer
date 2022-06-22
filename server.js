import fs from 'fs';
import antlr4 from 'antlr4';
import matlabLexer from './matlabLexer.js';
import matlabParser from './matlabParser.js';
import visualizerVisitor from './visualizerVisitor.js';
import http from 'http';
import path from 'path';
const __dirname = path.resolve();
import express from 'express';
import bodyParser from 'body-parser';

// var input = fs.readFileSync('input.txt','UTF-8');
// var chars = new antlr4.InputStream(input);
// var lexer = new matlabLexer(chars);
// var tokens = new antlr4.CommonTokenStream(lexer);
// var parser = new matlabParser(tokens);
// parser.buildParseTrees = true;
// var tree = parser.translation_unit();
// var visitor = new visualizerVisitor();
// visitor.visitTranslation_unit(tree);
// console.log(visitor.simbTable);

var input;
var chars;
var lexer;
var tokens;
var parser;
var tree;
var visitor;

// para biseccion
// idea es que estos valores se generen drante la pasada con el Visitor,
// podria ser que genere de a un paso (como por una iteracion de while) llamando algun metodo, 
// o que interprete todo el alg y guarde en la tabla de simbolos no solo el valor final si no un arreglo con todos los valores para determinado simbolo
var f; // funcion a evaluar
var xi; // xi de biseccion
var xf; // xf de biseccion
var xs = []; // coordenadas x's de puntos para pintar la funcion
var ys = []; // coordenadas y's de puntos para pintar la funcion
var x; // punto medio, aproximacion de biseccion
const resolution = 1000; // puntos que se generan para pintar la funcion

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

app.put('/bisection', (req, res) => {
    console.log('Data received:\n' + req.body.in);
    input = req.body.in;
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
    xi = visitor.simbTable.xi_init; 
    xf = visitor.simbTable.xf_init;
    const f = visitor.simbTable.f;
    for (let i = 0; i<=resolution; i++) {
        //console.log('i: '+i.toString());
        var x = (i*((xf-xi)/resolution)).toFixed(3);
        xs.push(x);
        ys.push(f(x).toFixed(9));
    }
    res.sendStatus(200); // respond to the client indicating everything was ok
});

app.put('/bisection/reset', (req, res) => {
    res.sendStatus(200); // respond to the client indicating everything was ok
});

app.get('/bisection/simbTable', (req, res) => {
    res.send(JSON.stringify({table: visitor.simbTable}));
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
    if (x === visitor.simbTable.x) {
        console.log('DONE');
        console.log(steps);
        res.send(JSON.stringify({x: x, xi: xi, xf: xf, done: true}));
    }else if (x < visitor.simbTable.x) {
        xi = x;
        steps.push('R');        
        x = ((xf-xi)/2)+xi;
        //console.log('xi: '+xi.toString()+', x: '+x.toString()+', xf: '+xf.toString());
        res.send(JSON.stringify({x: x, xi: xi, xf: xf, done: false}));
    } else if (x > visitor.simbTable.x) {
        xf = x;
        steps.push('L');
        x = ((xf-xi)/2)+xi;
        //console.log('xi: '+xi.toString()+', x: '+x.toString()+', xf: '+xf.toString());
        res.send(JSON.stringify({x: x, xi: xi, xf: xf, done: false}));
    } else {
        console.log('weird place');
        res.send(JSON.stringify({x: x, xi: xi, xf: xf, done: false}));
    }
});

// // respond to GET requests with xs and ys (coords of points from function), x mid point on interval from xi to xf
// app.get('/bisection/cutR', (req, res) => {
//     xi = x;
//     x = ((xf-xi)/2)+xi;
//     steps.push('R');
//     console.log(steps);
//     //console.log('xi: '+xi.toString()+', x: '+x.toString()+', xf: '+xf.toString());
//     res.send(JSON.stringify({x: x, xi: xi, xf: xf}));
// });

// // respond to GET requests with xs and ys (coords of points from function), x mid point on interval from xi to xf
// app.get('/bisection/cutL', (req, res) => {
//     xf = x;
//     x = ((xf-xi)/2)+xi;
//     steps.push('L');
//     console.log(steps);
//     //console.log('xi: '+xi.toString()+', x: '+x.toString()+', xf: '+xf.toString());
//     res.send(JSON.stringify({x: x, xi: xi, xf: xf}));
// });