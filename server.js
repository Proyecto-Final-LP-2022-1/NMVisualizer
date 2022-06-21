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

var xi = 0.0; // xi de biseccion
var xf = 10.0; // xf de biseccion
var xs = []; // coordenadas x's de puntos para pintar la funcion
var ys = []; // coordenadas y's de puntos para pintar la funcion
var x = ((xf-xi)/2)+xi; // punto medio, aproximacion de biseccion
const res = 999; // res+1 puntos que se generan para pintar la funcion
for (let i = xi; i<xf; i += ((xf-xi)/res)) {
    xs.push(i);
    ys.push(Math.sin(i));
}
var step = 5; // control para reiniciar biseccion despues de 6 pasos

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
    console.log('Data received: ' + req.body.in);
    input = req.body.in;
    chars = new antlr4.InputStream(input);
    lexer = new matlabLexer(chars);
    tokens = new antlr4.CommonTokenStream(lexer);
    parser = new matlabParser(tokens);
    parser.buildParseTrees = true;
    tree = parser.translation_unit();
    visitor = new visualizerVisitor();
    visitor.visitTranslation_unit(tree);
    console.log(visitor.simbTable);
    res.sendStatus(200); // respond to the client indicating everything was ok
});

app.get('/bisection/simbTable', (req, res) => {
    res.send(JSON.stringify({table: visitor.simbTable}));
});

// respond to GET requests with xs and ys (coords of points from function), x mid point on interval from xi to xf
app.get('/bisection', (req, res) => {
    //generando random x, xi y xf, la idea es que se calculen con el visitor del while
    if (Math.floor(Math.random()*10)<5){
        xf = x;
    }else {
        xi = x;
    }
    if (step === 5) {
        step = 0;
        xi = 0.0;
        xf = 10.0;
    }
    x = ((xf-xi)/2)+xi;
    step ++;
    //console.log('xi: '+xi.toString()+', x: '+x.toString()+', xf: '+xf.toString());
    res.send(JSON.stringify({xs: xs, ys: ys, x: x, xi: xi, xf: xf}));
});