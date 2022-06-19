import fs from 'fs';
import antlr4 from 'antlr4';
import matlabLexer from './matlabLexer.js';
import matlabParser from './matlabParser.js';
import visualizerVisitor from './visualizerVisitor.js';

var input = fs.readFileSync('input.txt','UTF-8');
var chars = new antlr4.InputStream(input);
var lexer = new matlabLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new matlabParser(tokens);
parser.buildParseTrees = true;
var tree = parser.translation_unit();
var visitor = new visualizerVisitor();
visitor.visitTranslation_unit(tree);
console.log(visitor.simbTable);