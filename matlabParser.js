// Generated from matlab.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import matlabVisitor from './matlabVisitor.js';

const serializedATN = [4,1,45,428,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,1,0,1,0,
1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,82,8,0,1,1,1,1,1,1,3,1,87,
8,1,1,1,1,1,1,1,1,1,5,1,93,8,1,10,1,12,1,96,9,1,1,2,1,2,3,2,100,8,2,1,3,
1,3,1,3,1,3,1,3,1,3,5,3,108,8,3,10,3,12,3,111,9,3,1,4,1,4,1,4,1,4,1,4,1,
5,1,5,1,5,1,5,3,5,122,8,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,
7,153,8,7,10,7,12,7,156,9,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,167,
8,8,10,8,12,8,170,9,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
9,1,9,1,9,5,9,187,8,9,10,9,12,9,190,9,9,1,10,1,10,1,10,1,10,1,10,1,10,1,
10,1,10,1,10,5,10,201,8,10,10,10,12,10,204,9,10,1,11,1,11,1,11,1,11,1,11,
1,11,5,11,212,8,11,10,11,12,11,215,9,11,1,12,1,12,1,12,1,12,1,12,1,12,5,
12,223,8,12,10,12,12,12,226,9,12,1,13,1,13,1,13,1,13,1,13,1,13,5,13,234,
8,13,10,13,12,13,237,9,13,1,14,1,14,1,14,1,14,1,15,1,15,1,16,1,16,1,16,1,
16,1,16,1,16,1,16,3,16,252,8,16,1,17,1,17,1,17,1,17,1,17,5,17,259,8,17,10,
17,12,17,262,9,17,1,18,1,18,1,18,1,18,1,18,5,18,269,8,18,10,18,12,18,272,
9,18,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,3,21,286,
8,21,1,22,1,22,1,22,1,23,1,23,3,23,293,8,23,1,24,1,24,1,24,1,24,1,24,5,24,
300,8,24,10,24,12,24,303,9,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,
25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
1,25,1,25,1,25,1,25,1,25,1,25,1,25,3,25,335,8,25,1,26,1,26,1,26,1,26,1,26,
1,26,1,26,1,26,1,26,1,26,5,26,347,8,26,10,26,12,26,350,9,26,1,27,1,27,1,
27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,
1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,376,8,27,1,28,1,28,1,28,1,28,3,28,
382,8,28,1,29,1,29,1,29,1,29,1,29,1,29,3,29,390,8,29,1,30,1,30,1,30,1,30,
1,30,1,30,5,30,398,8,30,10,30,12,30,401,9,30,1,31,1,31,1,31,1,31,1,31,3,
31,408,8,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,3,32,419,8,32,1,
33,1,33,1,33,1,33,1,33,3,33,426,8,33,1,33,0,14,2,6,14,16,18,20,22,24,26,
34,36,48,52,60,34,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
40,42,44,46,48,50,52,54,56,58,60,62,64,66,0,2,1,0,7,9,3,0,6,6,19,19,44,44,
447,0,81,1,0,0,0,2,86,1,0,0,0,4,99,1,0,0,0,6,101,1,0,0,0,8,112,1,0,0,0,10,
121,1,0,0,0,12,123,1,0,0,0,14,125,1,0,0,0,16,157,1,0,0,0,18,171,1,0,0,0,
20,191,1,0,0,0,22,205,1,0,0,0,24,216,1,0,0,0,26,227,1,0,0,0,28,238,1,0,0,
0,30,242,1,0,0,0,32,251,1,0,0,0,34,253,1,0,0,0,36,263,1,0,0,0,38,273,1,0,
0,0,40,277,1,0,0,0,42,285,1,0,0,0,44,287,1,0,0,0,46,292,1,0,0,0,48,294,1,
0,0,0,50,334,1,0,0,0,52,336,1,0,0,0,54,375,1,0,0,0,56,381,1,0,0,0,58,389,
1,0,0,0,60,391,1,0,0,0,62,407,1,0,0,0,64,418,1,0,0,0,66,425,1,0,0,0,68,82,
5,42,0,0,69,82,5,43,0,0,70,82,5,41,0,0,71,72,5,1,0,0,72,73,3,26,13,0,73,
74,5,2,0,0,74,82,1,0,0,0,75,76,5,3,0,0,76,82,5,4,0,0,77,78,5,3,0,0,78,79,
3,48,24,0,79,80,5,4,0,0,80,82,1,0,0,0,81,68,1,0,0,0,81,69,1,0,0,0,81,70,
1,0,0,0,81,71,1,0,0,0,81,75,1,0,0,0,81,77,1,0,0,0,82,1,1,0,0,0,83,84,6,1,
-1,0,84,87,3,0,0,0,85,87,3,8,4,0,86,83,1,0,0,0,86,85,1,0,0,0,87,94,1,0,0,
0,88,89,10,2,0,0,89,93,5,39,0,0,90,91,10,1,0,0,91,93,5,40,0,0,92,88,1,0,
0,0,92,90,1,0,0,0,93,96,1,0,0,0,94,92,1,0,0,0,94,95,1,0,0,0,95,3,1,0,0,0,
96,94,1,0,0,0,97,100,5,5,0,0,98,100,3,26,13,0,99,97,1,0,0,0,99,98,1,0,0,
0,100,5,1,0,0,0,101,102,6,3,-1,0,102,103,3,4,2,0,103,109,1,0,0,0,104,105,
10,1,0,0,105,106,5,6,0,0,106,108,3,4,2,0,107,104,1,0,0,0,108,111,1,0,0,0,
109,107,1,0,0,0,109,110,1,0,0,0,110,7,1,0,0,0,111,109,1,0,0,0,112,113,5,
42,0,0,113,114,5,1,0,0,114,115,3,6,3,0,115,116,5,2,0,0,116,9,1,0,0,0,117,
122,3,2,1,0,118,119,3,12,6,0,119,120,3,2,1,0,120,122,1,0,0,0,121,117,1,0,
0,0,121,118,1,0,0,0,122,11,1,0,0,0,123,124,7,0,0,0,124,13,1,0,0,0,125,126,
6,7,-1,0,126,127,3,10,5,0,127,154,1,0,0,0,128,129,10,8,0,0,129,130,5,10,
0,0,130,153,3,10,5,0,131,132,10,7,0,0,132,133,5,11,0,0,133,153,3,10,5,0,
134,135,10,6,0,0,135,136,5,12,0,0,136,153,3,10,5,0,137,138,10,5,0,0,138,
139,5,13,0,0,139,153,3,10,5,0,140,141,10,4,0,0,141,142,5,20,0,0,142,153,
3,10,5,0,143,144,10,3,0,0,144,145,5,21,0,0,145,153,3,10,5,0,146,147,10,2,
0,0,147,148,5,22,0,0,148,153,3,10,5,0,149,150,10,1,0,0,150,151,5,23,0,0,
151,153,3,10,5,0,152,128,1,0,0,0,152,131,1,0,0,0,152,134,1,0,0,0,152,137,
1,0,0,0,152,140,1,0,0,0,152,143,1,0,0,0,152,146,1,0,0,0,152,149,1,0,0,0,
153,156,1,0,0,0,154,152,1,0,0,0,154,155,1,0,0,0,155,15,1,0,0,0,156,154,1,
0,0,0,157,158,6,8,-1,0,158,159,3,14,7,0,159,168,1,0,0,0,160,161,10,2,0,0,
161,162,5,7,0,0,162,167,3,14,7,0,163,164,10,1,0,0,164,165,5,8,0,0,165,167,
3,14,7,0,166,160,1,0,0,0,166,163,1,0,0,0,167,170,1,0,0,0,168,166,1,0,0,0,
168,169,1,0,0,0,169,17,1,0,0,0,170,168,1,0,0,0,171,172,6,9,-1,0,172,173,
3,16,8,0,173,188,1,0,0,0,174,175,10,4,0,0,175,176,5,14,0,0,176,187,3,16,
8,0,177,178,10,3,0,0,178,179,5,15,0,0,179,187,3,16,8,0,180,181,10,2,0,0,
181,182,5,35,0,0,182,187,3,16,8,0,183,184,10,1,0,0,184,185,5,36,0,0,185,
187,3,16,8,0,186,174,1,0,0,0,186,177,1,0,0,0,186,180,1,0,0,0,186,183,1,0,
0,0,187,190,1,0,0,0,188,186,1,0,0,0,188,189,1,0,0,0,189,19,1,0,0,0,190,188,
1,0,0,0,191,192,6,10,-1,0,192,193,3,18,9,0,193,202,1,0,0,0,194,195,10,2,
0,0,195,196,5,37,0,0,196,201,3,18,9,0,197,198,10,1,0,0,198,199,5,38,0,0,
199,201,3,18,9,0,200,194,1,0,0,0,200,197,1,0,0,0,201,204,1,0,0,0,202,200,
1,0,0,0,202,203,1,0,0,0,203,21,1,0,0,0,204,202,1,0,0,0,205,206,6,11,-1,0,
206,207,3,20,10,0,207,213,1,0,0,0,208,209,10,1,0,0,209,210,5,16,0,0,210,
212,3,20,10,0,211,208,1,0,0,0,212,215,1,0,0,0,213,211,1,0,0,0,213,214,1,
0,0,0,214,23,1,0,0,0,215,213,1,0,0,0,216,217,6,12,-1,0,217,218,3,22,11,0,
218,224,1,0,0,0,219,220,10,1,0,0,220,221,5,17,0,0,221,223,3,22,11,0,222,
219,1,0,0,0,223,226,1,0,0,0,224,222,1,0,0,0,224,225,1,0,0,0,225,25,1,0,0,
0,226,224,1,0,0,0,227,228,6,13,-1,0,228,229,3,24,12,0,229,235,1,0,0,0,230,
231,10,1,0,0,231,232,5,5,0,0,232,234,3,24,12,0,233,230,1,0,0,0,234,237,1,
0,0,0,235,233,1,0,0,0,235,236,1,0,0,0,236,27,1,0,0,0,237,235,1,0,0,0,238,
239,3,2,1,0,239,240,5,18,0,0,240,241,3,26,13,0,241,29,1,0,0,0,242,243,7,
1,0,0,243,31,1,0,0,0,244,252,3,38,19,0,245,252,3,40,20,0,246,252,3,44,22,
0,247,252,3,42,21,0,248,252,3,50,25,0,249,252,3,54,27,0,250,252,3,56,28,
0,251,244,1,0,0,0,251,245,1,0,0,0,251,246,1,0,0,0,251,247,1,0,0,0,251,248,
1,0,0,0,251,249,1,0,0,0,251,250,1,0,0,0,252,33,1,0,0,0,253,254,6,17,-1,0,
254,255,3,32,16,0,255,260,1,0,0,0,256,257,10,1,0,0,257,259,3,32,16,0,258,
256,1,0,0,0,259,262,1,0,0,0,260,258,1,0,0,0,260,261,1,0,0,0,261,35,1,0,0,
0,262,260,1,0,0,0,263,264,6,18,-1,0,264,265,5,42,0,0,265,270,1,0,0,0,266,
267,10,1,0,0,267,269,5,42,0,0,268,266,1,0,0,0,269,272,1,0,0,0,270,268,1,
0,0,0,270,271,1,0,0,0,271,37,1,0,0,0,272,270,1,0,0,0,273,274,5,30,0,0,274,
275,3,36,18,0,275,276,3,30,15,0,276,39,1,0,0,0,277,278,5,32,0,0,278,279,
3,36,18,0,279,280,3,30,15,0,280,41,1,0,0,0,281,286,3,30,15,0,282,283,3,26,
13,0,283,284,3,30,15,0,284,286,1,0,0,0,285,281,1,0,0,0,285,282,1,0,0,0,286,
43,1,0,0,0,287,288,3,28,14,0,288,289,3,30,15,0,289,45,1,0,0,0,290,293,3,
26,13,0,291,293,3,42,21,0,292,290,1,0,0,0,292,291,1,0,0,0,293,47,1,0,0,0,
294,295,6,24,-1,0,295,296,3,46,23,0,296,301,1,0,0,0,297,298,10,1,0,0,298,
300,3,46,23,0,299,297,1,0,0,0,300,303,1,0,0,0,301,299,1,0,0,0,301,302,1,
0,0,0,302,49,1,0,0,0,303,301,1,0,0,0,304,305,5,31,0,0,305,306,3,26,13,0,
306,307,3,34,17,0,307,308,5,29,0,0,308,309,3,30,15,0,309,335,1,0,0,0,310,
311,5,31,0,0,311,312,3,26,13,0,312,313,3,34,17,0,313,314,5,33,0,0,314,315,
3,34,17,0,315,316,5,29,0,0,316,317,3,30,15,0,317,335,1,0,0,0,318,319,5,31,
0,0,319,320,3,26,13,0,320,321,3,34,17,0,321,322,3,52,26,0,322,323,5,29,0,
0,323,324,3,30,15,0,324,335,1,0,0,0,325,326,5,31,0,0,326,327,3,26,13,0,327,
328,3,34,17,0,328,329,3,52,26,0,329,330,5,33,0,0,330,331,3,34,17,0,331,332,
5,29,0,0,332,333,3,30,15,0,333,335,1,0,0,0,334,304,1,0,0,0,334,310,1,0,0,
0,334,318,1,0,0,0,334,325,1,0,0,0,335,51,1,0,0,0,336,337,6,26,-1,0,337,338,
5,34,0,0,338,339,3,26,13,0,339,340,3,34,17,0,340,348,1,0,0,0,341,342,10,
1,0,0,342,343,5,34,0,0,343,344,3,26,13,0,344,345,3,34,17,0,345,347,1,0,0,
0,346,341,1,0,0,0,347,350,1,0,0,0,348,346,1,0,0,0,348,349,1,0,0,0,349,53,
1,0,0,0,350,348,1,0,0,0,351,352,5,28,0,0,352,353,3,26,13,0,353,354,3,34,
17,0,354,355,5,29,0,0,355,356,3,30,15,0,356,376,1,0,0,0,357,358,5,27,0,0,
358,359,5,42,0,0,359,360,5,18,0,0,360,361,3,26,13,0,361,362,3,34,17,0,362,
363,5,29,0,0,363,364,3,30,15,0,364,376,1,0,0,0,365,366,5,27,0,0,366,367,
5,1,0,0,367,368,5,42,0,0,368,369,5,18,0,0,369,370,3,26,13,0,370,371,5,2,
0,0,371,372,3,34,17,0,372,373,5,29,0,0,373,374,3,30,15,0,374,376,1,0,0,0,
375,351,1,0,0,0,375,357,1,0,0,0,375,365,1,0,0,0,376,55,1,0,0,0,377,378,5,
24,0,0,378,382,3,30,15,0,379,380,5,25,0,0,380,382,3,30,15,0,381,377,1,0,
0,0,381,379,1,0,0,0,382,57,1,0,0,0,383,390,3,34,17,0,384,385,5,26,0,0,385,
386,3,66,33,0,386,387,3,30,15,0,387,388,3,34,17,0,388,390,1,0,0,0,389,383,
1,0,0,0,389,384,1,0,0,0,390,59,1,0,0,0,391,392,6,30,-1,0,392,393,5,42,0,
0,393,399,1,0,0,0,394,395,10,1,0,0,395,396,5,6,0,0,396,398,5,42,0,0,397,
394,1,0,0,0,398,401,1,0,0,0,399,397,1,0,0,0,399,400,1,0,0,0,400,61,1,0,0,
0,401,399,1,0,0,0,402,408,5,42,0,0,403,404,5,3,0,0,404,405,3,60,30,0,405,
406,5,4,0,0,406,408,1,0,0,0,407,402,1,0,0,0,407,403,1,0,0,0,408,63,1,0,0,
0,409,419,5,42,0,0,410,411,5,42,0,0,411,412,5,1,0,0,412,419,5,2,0,0,413,
414,5,42,0,0,414,415,5,1,0,0,415,416,3,60,30,0,416,417,5,2,0,0,417,419,1,
0,0,0,418,409,1,0,0,0,418,410,1,0,0,0,418,413,1,0,0,0,419,65,1,0,0,0,420,
426,3,64,32,0,421,422,3,62,31,0,422,423,5,18,0,0,423,424,3,64,32,0,424,426,
1,0,0,0,425,420,1,0,0,0,425,421,1,0,0,0,426,67,1,0,0,0,33,81,86,92,94,99,
109,121,152,154,166,168,186,188,200,202,213,224,235,251,260,270,285,292,
301,334,348,375,381,389,399,407,418,425];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class matlabParser extends antlr4.Parser {

    static grammarFileName = "matlab.g4";
    static literalNames = [ null, "'('", "')'", "'['", "']'", "':'", "','", 
                            "'+'", "'-'", "'~'", "'*'", "'/'", "'\\'", "'^'", 
                            "'<'", "'>'", "'&'", "'|'", "'='", "';'", "'.*'", 
                            "'.\\'", "'./'", "'.^'", "'break'", "'return'", 
                            "'function'", "'for'", "'while'", "'end'", "'global'", 
                            "'if'", "'clear'", "'else'", "'elseif'", "'<='", 
                            "'>='", "'=='", "'~='", "'transpose'", "'.''" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, "ARRAYMUL", "ARRAYDIV", 
                             "ARRAYRDIV", "ARRAYPOW", "BREAK", "RETURN", 
                             "FUNCTION", "FOR", "WHILE", "END", "GLOBAL", 
                             "IF", "CLEAR", "ELSE", "ELSEIF", "LE_OP", "GE_OP", 
                             "EQ_OP", "NE_OP", "TRANSPOSE", "NCTRANSPOSE", 
                             "STRING_LITERAL", "IDENTIFIER", "CONSTANT", 
                             "CR", "WS" ];
    static ruleNames = [ "primary_expression", "postfix_expression", "index_expression", 
                         "index_expression_list", "array_expression", "unary_expression", 
                         "unary_operator", "multiplicative_expression", 
                         "additive_expression", "relational_expression", 
                         "equality_expression", "and_expression", "or_expression", 
                         "expression", "assignment_expression", "eostmt", 
                         "statement", "statement_list", "identifier_list", 
                         "global_statement", "clear_statement", "expression_statement", 
                         "assignment_statement", "array_element", "array_list", 
                         "selection_statement", "elseif_clause", "iteration_statement", 
                         "jump_statement", "translation_unit", "func_ident_list", 
                         "func_return_list", "function_declare_lhs", "function_declare" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = matlabParser.ruleNames;
        this.literalNames = matlabParser.literalNames;
        this.symbolicNames = matlabParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.postfix_expression_sempred(localctx, predIndex);
    	case 3:
    	    		return this.index_expression_list_sempred(localctx, predIndex);
    	case 7:
    	    		return this.multiplicative_expression_sempred(localctx, predIndex);
    	case 8:
    	    		return this.additive_expression_sempred(localctx, predIndex);
    	case 9:
    	    		return this.relational_expression_sempred(localctx, predIndex);
    	case 10:
    	    		return this.equality_expression_sempred(localctx, predIndex);
    	case 11:
    	    		return this.and_expression_sempred(localctx, predIndex);
    	case 12:
    	    		return this.or_expression_sempred(localctx, predIndex);
    	case 13:
    	    		return this.expression_sempred(localctx, predIndex);
    	case 17:
    	    		return this.statement_list_sempred(localctx, predIndex);
    	case 18:
    	    		return this.identifier_list_sempred(localctx, predIndex);
    	case 24:
    	    		return this.array_list_sempred(localctx, predIndex);
    	case 26:
    	    		return this.elseif_clause_sempred(localctx, predIndex);
    	case 30:
    	    		return this.func_ident_list_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    postfix_expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    index_expression_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    multiplicative_expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 3:
    			return this.precpred(this._ctx, 8);
    		case 4:
    			return this.precpred(this._ctx, 7);
    		case 5:
    			return this.precpred(this._ctx, 6);
    		case 6:
    			return this.precpred(this._ctx, 5);
    		case 7:
    			return this.precpred(this._ctx, 4);
    		case 8:
    			return this.precpred(this._ctx, 3);
    		case 9:
    			return this.precpred(this._ctx, 2);
    		case 10:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    additive_expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 11:
    			return this.precpred(this._ctx, 2);
    		case 12:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    relational_expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 13:
    			return this.precpred(this._ctx, 4);
    		case 14:
    			return this.precpred(this._ctx, 3);
    		case 15:
    			return this.precpred(this._ctx, 2);
    		case 16:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    equality_expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 17:
    			return this.precpred(this._ctx, 2);
    		case 18:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    and_expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 19:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    or_expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 20:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 21:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    statement_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 22:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    identifier_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 23:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    array_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 24:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    elseif_clause_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 25:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    func_ident_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 26:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	primary_expression() {
	    let localctx = new Primary_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, matlabParser.RULE_primary_expression);
	    try {
	        this.state = 81;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 68;
	            this.match(matlabParser.IDENTIFIER);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 69;
	            this.match(matlabParser.CONSTANT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 70;
	            this.match(matlabParser.STRING_LITERAL);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 71;
	            this.match(matlabParser.T__0);
	            this.state = 72;
	            this.expression(0);
	            this.state = 73;
	            this.match(matlabParser.T__1);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 75;
	            this.match(matlabParser.T__2);
	            this.state = 76;
	            this.match(matlabParser.T__3);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 77;
	            this.match(matlabParser.T__2);
	            this.state = 78;
	            this.array_list(0);
	            this.state = 79;
	            this.match(matlabParser.T__3);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	postfix_expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Postfix_expressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, matlabParser.RULE_postfix_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 84;
	            this.primary_expression();
	            break;

	        case 2:
	            this.state = 85;
	            this.array_expression();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 94;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 92;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Postfix_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_postfix_expression);
	                    this.state = 88;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 89;
	                    this.match(matlabParser.TRANSPOSE);
	                    break;

	                case 2:
	                    localctx = new Postfix_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_postfix_expression);
	                    this.state = 90;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 91;
	                    this.match(matlabParser.NCTRANSPOSE);
	                    break;

	                } 
	            }
	            this.state = 96;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	index_expression() {
	    let localctx = new Index_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, matlabParser.RULE_index_expression);
	    try {
	        this.state = 99;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case matlabParser.T__4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 97;
	            this.match(matlabParser.T__4);
	            break;
	        case matlabParser.T__0:
	        case matlabParser.T__2:
	        case matlabParser.T__6:
	        case matlabParser.T__7:
	        case matlabParser.T__8:
	        case matlabParser.STRING_LITERAL:
	        case matlabParser.IDENTIFIER:
	        case matlabParser.CONSTANT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 98;
	            this.expression(0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	index_expression_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Index_expression_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 6;
	    this.enterRecursionRule(localctx, 6, matlabParser.RULE_index_expression_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.index_expression();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 109;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Index_expression_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_index_expression_list);
	                this.state = 104;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 105;
	                this.match(matlabParser.T__5);
	                this.state = 106;
	                this.index_expression(); 
	            }
	            this.state = 111;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	array_expression() {
	    let localctx = new Array_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, matlabParser.RULE_array_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.match(matlabParser.IDENTIFIER);
	        this.state = 113;
	        this.match(matlabParser.T__0);
	        this.state = 114;
	        this.index_expression_list(0);
	        this.state = 115;
	        this.match(matlabParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unary_expression() {
	    let localctx = new Unary_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, matlabParser.RULE_unary_expression);
	    try {
	        this.state = 121;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case matlabParser.T__0:
	        case matlabParser.T__2:
	        case matlabParser.STRING_LITERAL:
	        case matlabParser.IDENTIFIER:
	        case matlabParser.CONSTANT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 117;
	            this.postfix_expression(0);
	            break;
	        case matlabParser.T__6:
	        case matlabParser.T__7:
	        case matlabParser.T__8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 118;
	            this.unary_operator();
	            this.state = 119;
	            this.postfix_expression(0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unary_operator() {
	    let localctx = new Unary_operatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, matlabParser.RULE_unary_operator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << matlabParser.T__6) | (1 << matlabParser.T__7) | (1 << matlabParser.T__8))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	multiplicative_expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Multiplicative_expressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, matlabParser.RULE_multiplicative_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.unary_expression();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 154;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 152;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 128;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 129;
	                    this.match(matlabParser.T__9);
	                    this.state = 130;
	                    this.unary_expression();
	                    break;

	                case 2:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 131;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 132;
	                    this.match(matlabParser.T__10);
	                    this.state = 133;
	                    this.unary_expression();
	                    break;

	                case 3:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 134;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 135;
	                    this.match(matlabParser.T__11);
	                    this.state = 136;
	                    this.unary_expression();
	                    break;

	                case 4:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 137;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 138;
	                    this.match(matlabParser.T__12);
	                    this.state = 139;
	                    this.unary_expression();
	                    break;

	                case 5:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 140;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 141;
	                    this.match(matlabParser.ARRAYMUL);
	                    this.state = 142;
	                    this.unary_expression();
	                    break;

	                case 6:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 143;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 144;
	                    this.match(matlabParser.ARRAYDIV);
	                    this.state = 145;
	                    this.unary_expression();
	                    break;

	                case 7:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 146;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 147;
	                    this.match(matlabParser.ARRAYRDIV);
	                    this.state = 148;
	                    this.unary_expression();
	                    break;

	                case 8:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 149;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 150;
	                    this.match(matlabParser.ARRAYPOW);
	                    this.state = 151;
	                    this.unary_expression();
	                    break;

	                } 
	            }
	            this.state = 156;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	additive_expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Additive_expressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 16;
	    this.enterRecursionRule(localctx, 16, matlabParser.RULE_additive_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.multiplicative_expression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 168;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 166;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Additive_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_additive_expression);
	                    this.state = 160;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 161;
	                    this.match(matlabParser.T__6);
	                    this.state = 162;
	                    this.multiplicative_expression(0);
	                    break;

	                case 2:
	                    localctx = new Additive_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_additive_expression);
	                    this.state = 163;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 164;
	                    this.match(matlabParser.T__7);
	                    this.state = 165;
	                    this.multiplicative_expression(0);
	                    break;

	                } 
	            }
	            this.state = 170;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	relational_expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Relational_expressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, matlabParser.RULE_relational_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this.additive_expression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 188;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 186;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Relational_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_relational_expression);
	                    this.state = 174;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 175;
	                    this.match(matlabParser.T__13);
	                    this.state = 176;
	                    this.additive_expression(0);
	                    break;

	                case 2:
	                    localctx = new Relational_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_relational_expression);
	                    this.state = 177;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 178;
	                    this.match(matlabParser.T__14);
	                    this.state = 179;
	                    this.additive_expression(0);
	                    break;

	                case 3:
	                    localctx = new Relational_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_relational_expression);
	                    this.state = 180;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 181;
	                    this.match(matlabParser.LE_OP);
	                    this.state = 182;
	                    this.additive_expression(0);
	                    break;

	                case 4:
	                    localctx = new Relational_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_relational_expression);
	                    this.state = 183;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 184;
	                    this.match(matlabParser.GE_OP);
	                    this.state = 185;
	                    this.additive_expression(0);
	                    break;

	                } 
	            }
	            this.state = 190;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	equality_expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Equality_expressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 20;
	    this.enterRecursionRule(localctx, 20, matlabParser.RULE_equality_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this.relational_expression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 202;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 200;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Equality_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_equality_expression);
	                    this.state = 194;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 195;
	                    this.match(matlabParser.EQ_OP);
	                    this.state = 196;
	                    this.relational_expression(0);
	                    break;

	                case 2:
	                    localctx = new Equality_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_equality_expression);
	                    this.state = 197;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 198;
	                    this.match(matlabParser.NE_OP);
	                    this.state = 199;
	                    this.relational_expression(0);
	                    break;

	                } 
	            }
	            this.state = 204;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	and_expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new And_expressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 22;
	    this.enterRecursionRule(localctx, 22, matlabParser.RULE_and_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.equality_expression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 213;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new And_expressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_and_expression);
	                this.state = 208;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 209;
	                this.match(matlabParser.T__15);
	                this.state = 210;
	                this.equality_expression(0); 
	            }
	            this.state = 215;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	or_expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Or_expressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 24;
	    this.enterRecursionRule(localctx, 24, matlabParser.RULE_or_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.and_expression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 224;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Or_expressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_or_expression);
	                this.state = 219;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 220;
	                this.match(matlabParser.T__16);
	                this.state = 221;
	                this.and_expression(0); 
	            }
	            this.state = 226;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 26;
	    this.enterRecursionRule(localctx, 26, matlabParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        this.or_expression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 235;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExpressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_expression);
	                this.state = 230;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 231;
	                this.match(matlabParser.T__4);
	                this.state = 232;
	                this.or_expression(0); 
	            }
	            this.state = 237;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	assignment_expression() {
	    let localctx = new Assignment_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, matlabParser.RULE_assignment_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.postfix_expression(0);
	        this.state = 239;
	        this.match(matlabParser.T__17);
	        this.state = 240;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	eostmt() {
	    let localctx = new EostmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, matlabParser.RULE_eostmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        _la = this._input.LA(1);
	        if(!(_la===matlabParser.T__5 || _la===matlabParser.T__18 || _la===matlabParser.CR)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, matlabParser.RULE_statement);
	    try {
	        this.state = 251;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 244;
	            this.global_statement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 245;
	            this.clear_statement();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 246;
	            this.assignment_statement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 247;
	            this.expression_statement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 248;
	            this.selection_statement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 249;
	            this.iteration_statement();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 250;
	            this.jump_statement();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	statement_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Statement_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 34;
	    this.enterRecursionRule(localctx, 34, matlabParser.RULE_statement_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        this.statement();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 260;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Statement_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_statement_list);
	                this.state = 256;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 257;
	                this.statement(); 
	            }
	            this.state = 262;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	identifier_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Identifier_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 36;
	    this.enterRecursionRule(localctx, 36, matlabParser.RULE_identifier_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 264;
	        this.match(matlabParser.IDENTIFIER);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 270;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Identifier_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_identifier_list);
	                this.state = 266;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 267;
	                this.match(matlabParser.IDENTIFIER); 
	            }
	            this.state = 272;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	global_statement() {
	    let localctx = new Global_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, matlabParser.RULE_global_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 273;
	        this.match(matlabParser.GLOBAL);
	        this.state = 274;
	        this.identifier_list(0);
	        this.state = 275;
	        this.eostmt();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	clear_statement() {
	    let localctx = new Clear_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, matlabParser.RULE_clear_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
	        this.match(matlabParser.CLEAR);
	        this.state = 278;
	        this.identifier_list(0);
	        this.state = 279;
	        this.eostmt();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression_statement() {
	    let localctx = new Expression_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, matlabParser.RULE_expression_statement);
	    try {
	        this.state = 285;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case matlabParser.T__5:
	        case matlabParser.T__18:
	        case matlabParser.CR:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 281;
	            this.eostmt();
	            break;
	        case matlabParser.T__0:
	        case matlabParser.T__2:
	        case matlabParser.T__6:
	        case matlabParser.T__7:
	        case matlabParser.T__8:
	        case matlabParser.STRING_LITERAL:
	        case matlabParser.IDENTIFIER:
	        case matlabParser.CONSTANT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 282;
	            this.expression(0);
	            this.state = 283;
	            this.eostmt();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment_statement() {
	    let localctx = new Assignment_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, matlabParser.RULE_assignment_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 287;
	        this.assignment_expression();
	        this.state = 288;
	        this.eostmt();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	array_element() {
	    let localctx = new Array_elementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, matlabParser.RULE_array_element);
	    try {
	        this.state = 292;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 290;
	            this.expression(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 291;
	            this.expression_statement();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	array_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Array_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 48;
	    this.enterRecursionRule(localctx, 48, matlabParser.RULE_array_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 295;
	        this.array_element();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 301;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Array_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_array_list);
	                this.state = 297;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 298;
	                this.array_element(); 
	            }
	            this.state = 303;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	selection_statement() {
	    let localctx = new Selection_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, matlabParser.RULE_selection_statement);
	    try {
	        this.state = 334;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 304;
	            this.match(matlabParser.IF);
	            this.state = 305;
	            this.expression(0);
	            this.state = 306;
	            this.statement_list(0);
	            this.state = 307;
	            this.match(matlabParser.END);
	            this.state = 308;
	            this.eostmt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 310;
	            this.match(matlabParser.IF);
	            this.state = 311;
	            this.expression(0);
	            this.state = 312;
	            this.statement_list(0);
	            this.state = 313;
	            this.match(matlabParser.ELSE);
	            this.state = 314;
	            this.statement_list(0);
	            this.state = 315;
	            this.match(matlabParser.END);
	            this.state = 316;
	            this.eostmt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 318;
	            this.match(matlabParser.IF);
	            this.state = 319;
	            this.expression(0);
	            this.state = 320;
	            this.statement_list(0);
	            this.state = 321;
	            this.elseif_clause(0);
	            this.state = 322;
	            this.match(matlabParser.END);
	            this.state = 323;
	            this.eostmt();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 325;
	            this.match(matlabParser.IF);
	            this.state = 326;
	            this.expression(0);
	            this.state = 327;
	            this.statement_list(0);
	            this.state = 328;
	            this.elseif_clause(0);
	            this.state = 329;
	            this.match(matlabParser.ELSE);
	            this.state = 330;
	            this.statement_list(0);
	            this.state = 331;
	            this.match(matlabParser.END);
	            this.state = 332;
	            this.eostmt();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	elseif_clause(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Elseif_clauseContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 52;
	    this.enterRecursionRule(localctx, 52, matlabParser.RULE_elseif_clause, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 337;
	        this.match(matlabParser.ELSEIF);
	        this.state = 338;
	        this.expression(0);
	        this.state = 339;
	        this.statement_list(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 348;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Elseif_clauseContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_elseif_clause);
	                this.state = 341;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 342;
	                this.match(matlabParser.ELSEIF);
	                this.state = 343;
	                this.expression(0);
	                this.state = 344;
	                this.statement_list(0); 
	            }
	            this.state = 350;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	iteration_statement() {
	    let localctx = new Iteration_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, matlabParser.RULE_iteration_statement);
	    try {
	        this.state = 375;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 351;
	            this.match(matlabParser.WHILE);
	            this.state = 352;
	            this.expression(0);
	            this.state = 353;
	            this.statement_list(0);
	            this.state = 354;
	            this.match(matlabParser.END);
	            this.state = 355;
	            this.eostmt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 357;
	            this.match(matlabParser.FOR);
	            this.state = 358;
	            this.match(matlabParser.IDENTIFIER);
	            this.state = 359;
	            this.match(matlabParser.T__17);
	            this.state = 360;
	            this.expression(0);
	            this.state = 361;
	            this.statement_list(0);
	            this.state = 362;
	            this.match(matlabParser.END);
	            this.state = 363;
	            this.eostmt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 365;
	            this.match(matlabParser.FOR);
	            this.state = 366;
	            this.match(matlabParser.T__0);
	            this.state = 367;
	            this.match(matlabParser.IDENTIFIER);
	            this.state = 368;
	            this.match(matlabParser.T__17);
	            this.state = 369;
	            this.expression(0);
	            this.state = 370;
	            this.match(matlabParser.T__1);
	            this.state = 371;
	            this.statement_list(0);
	            this.state = 372;
	            this.match(matlabParser.END);
	            this.state = 373;
	            this.eostmt();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	jump_statement() {
	    let localctx = new Jump_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, matlabParser.RULE_jump_statement);
	    try {
	        this.state = 381;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case matlabParser.BREAK:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 377;
	            this.match(matlabParser.BREAK);
	            this.state = 378;
	            this.eostmt();
	            break;
	        case matlabParser.RETURN:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 379;
	            this.match(matlabParser.RETURN);
	            this.state = 380;
	            this.eostmt();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	translation_unit() {
	    let localctx = new Translation_unitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, matlabParser.RULE_translation_unit);
	    try {
	        this.state = 389;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case matlabParser.T__0:
	        case matlabParser.T__2:
	        case matlabParser.T__5:
	        case matlabParser.T__6:
	        case matlabParser.T__7:
	        case matlabParser.T__8:
	        case matlabParser.T__18:
	        case matlabParser.BREAK:
	        case matlabParser.RETURN:
	        case matlabParser.FOR:
	        case matlabParser.WHILE:
	        case matlabParser.GLOBAL:
	        case matlabParser.IF:
	        case matlabParser.CLEAR:
	        case matlabParser.STRING_LITERAL:
	        case matlabParser.IDENTIFIER:
	        case matlabParser.CONSTANT:
	        case matlabParser.CR:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 383;
	            this.statement_list(0);
	            break;
	        case matlabParser.FUNCTION:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 384;
	            this.match(matlabParser.FUNCTION);
	            this.state = 385;
	            this.function_declare();
	            this.state = 386;
	            this.eostmt();
	            this.state = 387;
	            this.statement_list(0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	func_ident_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Func_ident_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 60;
	    this.enterRecursionRule(localctx, 60, matlabParser.RULE_func_ident_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 392;
	        this.match(matlabParser.IDENTIFIER);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 399;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,29,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Func_ident_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_func_ident_list);
	                this.state = 394;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 395;
	                this.match(matlabParser.T__5);
	                this.state = 396;
	                this.match(matlabParser.IDENTIFIER); 
	            }
	            this.state = 401;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,29,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	func_return_list() {
	    let localctx = new Func_return_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, matlabParser.RULE_func_return_list);
	    try {
	        this.state = 407;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case matlabParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 402;
	            this.match(matlabParser.IDENTIFIER);
	            break;
	        case matlabParser.T__2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 403;
	            this.match(matlabParser.T__2);
	            this.state = 404;
	            this.func_ident_list(0);
	            this.state = 405;
	            this.match(matlabParser.T__3);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_declare_lhs() {
	    let localctx = new Function_declare_lhsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, matlabParser.RULE_function_declare_lhs);
	    try {
	        this.state = 418;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 409;
	            this.match(matlabParser.IDENTIFIER);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 410;
	            this.match(matlabParser.IDENTIFIER);
	            this.state = 411;
	            this.match(matlabParser.T__0);
	            this.state = 412;
	            this.match(matlabParser.T__1);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 413;
	            this.match(matlabParser.IDENTIFIER);
	            this.state = 414;
	            this.match(matlabParser.T__0);
	            this.state = 415;
	            this.func_ident_list(0);
	            this.state = 416;
	            this.match(matlabParser.T__1);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_declare() {
	    let localctx = new Function_declareContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, matlabParser.RULE_function_declare);
	    try {
	        this.state = 425;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 420;
	            this.function_declare_lhs();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 421;
	            this.func_return_list();
	            this.state = 422;
	            this.match(matlabParser.T__17);
	            this.state = 423;
	            this.function_declare_lhs();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

matlabParser.EOF = antlr4.Token.EOF;
matlabParser.T__0 = 1;
matlabParser.T__1 = 2;
matlabParser.T__2 = 3;
matlabParser.T__3 = 4;
matlabParser.T__4 = 5;
matlabParser.T__5 = 6;
matlabParser.T__6 = 7;
matlabParser.T__7 = 8;
matlabParser.T__8 = 9;
matlabParser.T__9 = 10;
matlabParser.T__10 = 11;
matlabParser.T__11 = 12;
matlabParser.T__12 = 13;
matlabParser.T__13 = 14;
matlabParser.T__14 = 15;
matlabParser.T__15 = 16;
matlabParser.T__16 = 17;
matlabParser.T__17 = 18;
matlabParser.T__18 = 19;
matlabParser.ARRAYMUL = 20;
matlabParser.ARRAYDIV = 21;
matlabParser.ARRAYRDIV = 22;
matlabParser.ARRAYPOW = 23;
matlabParser.BREAK = 24;
matlabParser.RETURN = 25;
matlabParser.FUNCTION = 26;
matlabParser.FOR = 27;
matlabParser.WHILE = 28;
matlabParser.END = 29;
matlabParser.GLOBAL = 30;
matlabParser.IF = 31;
matlabParser.CLEAR = 32;
matlabParser.ELSE = 33;
matlabParser.ELSEIF = 34;
matlabParser.LE_OP = 35;
matlabParser.GE_OP = 36;
matlabParser.EQ_OP = 37;
matlabParser.NE_OP = 38;
matlabParser.TRANSPOSE = 39;
matlabParser.NCTRANSPOSE = 40;
matlabParser.STRING_LITERAL = 41;
matlabParser.IDENTIFIER = 42;
matlabParser.CONSTANT = 43;
matlabParser.CR = 44;
matlabParser.WS = 45;

matlabParser.RULE_primary_expression = 0;
matlabParser.RULE_postfix_expression = 1;
matlabParser.RULE_index_expression = 2;
matlabParser.RULE_index_expression_list = 3;
matlabParser.RULE_array_expression = 4;
matlabParser.RULE_unary_expression = 5;
matlabParser.RULE_unary_operator = 6;
matlabParser.RULE_multiplicative_expression = 7;
matlabParser.RULE_additive_expression = 8;
matlabParser.RULE_relational_expression = 9;
matlabParser.RULE_equality_expression = 10;
matlabParser.RULE_and_expression = 11;
matlabParser.RULE_or_expression = 12;
matlabParser.RULE_expression = 13;
matlabParser.RULE_assignment_expression = 14;
matlabParser.RULE_eostmt = 15;
matlabParser.RULE_statement = 16;
matlabParser.RULE_statement_list = 17;
matlabParser.RULE_identifier_list = 18;
matlabParser.RULE_global_statement = 19;
matlabParser.RULE_clear_statement = 20;
matlabParser.RULE_expression_statement = 21;
matlabParser.RULE_assignment_statement = 22;
matlabParser.RULE_array_element = 23;
matlabParser.RULE_array_list = 24;
matlabParser.RULE_selection_statement = 25;
matlabParser.RULE_elseif_clause = 26;
matlabParser.RULE_iteration_statement = 27;
matlabParser.RULE_jump_statement = 28;
matlabParser.RULE_translation_unit = 29;
matlabParser.RULE_func_ident_list = 30;
matlabParser.RULE_func_return_list = 31;
matlabParser.RULE_function_declare_lhs = 32;
matlabParser.RULE_function_declare = 33;

class Primary_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_primary_expression;
    }

	IDENTIFIER() {
	    return this.getToken(matlabParser.IDENTIFIER, 0);
	};

	CONSTANT() {
	    return this.getToken(matlabParser.CONSTANT, 0);
	};

	STRING_LITERAL() {
	    return this.getToken(matlabParser.STRING_LITERAL, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	array_list() {
	    return this.getTypedRuleContext(Array_listContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitPrimary_expression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Postfix_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_postfix_expression;
    }

	primary_expression() {
	    return this.getTypedRuleContext(Primary_expressionContext,0);
	};

	array_expression() {
	    return this.getTypedRuleContext(Array_expressionContext,0);
	};

	postfix_expression() {
	    return this.getTypedRuleContext(Postfix_expressionContext,0);
	};

	TRANSPOSE() {
	    return this.getToken(matlabParser.TRANSPOSE, 0);
	};

	NCTRANSPOSE() {
	    return this.getToken(matlabParser.NCTRANSPOSE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitPostfix_expression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Index_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_index_expression;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitIndex_expression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Index_expression_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_index_expression_list;
    }

	index_expression() {
	    return this.getTypedRuleContext(Index_expressionContext,0);
	};

	index_expression_list() {
	    return this.getTypedRuleContext(Index_expression_listContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitIndex_expression_list(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Array_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_array_expression;
    }

	IDENTIFIER() {
	    return this.getToken(matlabParser.IDENTIFIER, 0);
	};

	index_expression_list() {
	    return this.getTypedRuleContext(Index_expression_listContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitArray_expression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Unary_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_unary_expression;
    }

	postfix_expression() {
	    return this.getTypedRuleContext(Postfix_expressionContext,0);
	};

	unary_operator() {
	    return this.getTypedRuleContext(Unary_operatorContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitUnary_expression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Unary_operatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_unary_operator;
    }


	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitUnary_operator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Multiplicative_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_multiplicative_expression;
    }

	unary_expression() {
	    return this.getTypedRuleContext(Unary_expressionContext,0);
	};

	multiplicative_expression() {
	    return this.getTypedRuleContext(Multiplicative_expressionContext,0);
	};

	ARRAYMUL() {
	    return this.getToken(matlabParser.ARRAYMUL, 0);
	};

	ARRAYDIV() {
	    return this.getToken(matlabParser.ARRAYDIV, 0);
	};

	ARRAYRDIV() {
	    return this.getToken(matlabParser.ARRAYRDIV, 0);
	};

	ARRAYPOW() {
	    return this.getToken(matlabParser.ARRAYPOW, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitMultiplicative_expression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Additive_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_additive_expression;
    }

	multiplicative_expression() {
	    return this.getTypedRuleContext(Multiplicative_expressionContext,0);
	};

	additive_expression() {
	    return this.getTypedRuleContext(Additive_expressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAdditive_expression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Relational_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_relational_expression;
    }

	additive_expression() {
	    return this.getTypedRuleContext(Additive_expressionContext,0);
	};

	relational_expression() {
	    return this.getTypedRuleContext(Relational_expressionContext,0);
	};

	LE_OP() {
	    return this.getToken(matlabParser.LE_OP, 0);
	};

	GE_OP() {
	    return this.getToken(matlabParser.GE_OP, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitRelational_expression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Equality_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_equality_expression;
    }

	relational_expression() {
	    return this.getTypedRuleContext(Relational_expressionContext,0);
	};

	equality_expression() {
	    return this.getTypedRuleContext(Equality_expressionContext,0);
	};

	EQ_OP() {
	    return this.getToken(matlabParser.EQ_OP, 0);
	};

	NE_OP() {
	    return this.getToken(matlabParser.NE_OP, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitEquality_expression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class And_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_and_expression;
    }

	equality_expression() {
	    return this.getTypedRuleContext(Equality_expressionContext,0);
	};

	and_expression() {
	    return this.getTypedRuleContext(And_expressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAnd_expression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Or_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_or_expression;
    }

	and_expression() {
	    return this.getTypedRuleContext(And_expressionContext,0);
	};

	or_expression() {
	    return this.getTypedRuleContext(Or_expressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitOr_expression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_expression;
    }

	or_expression() {
	    return this.getTypedRuleContext(Or_expressionContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Assignment_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_assignment_expression;
    }

	postfix_expression() {
	    return this.getTypedRuleContext(Postfix_expressionContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAssignment_expression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EostmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_eostmt;
    }

	CR() {
	    return this.getToken(matlabParser.CR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitEostmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_statement;
    }

	global_statement() {
	    return this.getTypedRuleContext(Global_statementContext,0);
	};

	clear_statement() {
	    return this.getTypedRuleContext(Clear_statementContext,0);
	};

	assignment_statement() {
	    return this.getTypedRuleContext(Assignment_statementContext,0);
	};

	expression_statement() {
	    return this.getTypedRuleContext(Expression_statementContext,0);
	};

	selection_statement() {
	    return this.getTypedRuleContext(Selection_statementContext,0);
	};

	iteration_statement() {
	    return this.getTypedRuleContext(Iteration_statementContext,0);
	};

	jump_statement() {
	    return this.getTypedRuleContext(Jump_statementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Statement_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_statement_list;
    }

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	statement_list() {
	    return this.getTypedRuleContext(Statement_listContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitStatement_list(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Identifier_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_identifier_list;
    }

	IDENTIFIER() {
	    return this.getToken(matlabParser.IDENTIFIER, 0);
	};

	identifier_list() {
	    return this.getTypedRuleContext(Identifier_listContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitIdentifier_list(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Global_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_global_statement;
    }

	GLOBAL() {
	    return this.getToken(matlabParser.GLOBAL, 0);
	};

	identifier_list() {
	    return this.getTypedRuleContext(Identifier_listContext,0);
	};

	eostmt() {
	    return this.getTypedRuleContext(EostmtContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitGlobal_statement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Clear_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_clear_statement;
    }

	CLEAR() {
	    return this.getToken(matlabParser.CLEAR, 0);
	};

	identifier_list() {
	    return this.getTypedRuleContext(Identifier_listContext,0);
	};

	eostmt() {
	    return this.getTypedRuleContext(EostmtContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitClear_statement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Expression_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_expression_statement;
    }

	eostmt() {
	    return this.getTypedRuleContext(EostmtContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitExpression_statement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Assignment_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_assignment_statement;
    }

	assignment_expression() {
	    return this.getTypedRuleContext(Assignment_expressionContext,0);
	};

	eostmt() {
	    return this.getTypedRuleContext(EostmtContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitAssignment_statement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Array_elementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_array_element;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	expression_statement() {
	    return this.getTypedRuleContext(Expression_statementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitArray_element(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Array_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_array_list;
    }

	array_element() {
	    return this.getTypedRuleContext(Array_elementContext,0);
	};

	array_list() {
	    return this.getTypedRuleContext(Array_listContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitArray_list(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Selection_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_selection_statement;
    }

	IF() {
	    return this.getToken(matlabParser.IF, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statement_list = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Statement_listContext);
	    } else {
	        return this.getTypedRuleContext(Statement_listContext,i);
	    }
	};

	END() {
	    return this.getToken(matlabParser.END, 0);
	};

	eostmt() {
	    return this.getTypedRuleContext(EostmtContext,0);
	};

	ELSE() {
	    return this.getToken(matlabParser.ELSE, 0);
	};

	elseif_clause() {
	    return this.getTypedRuleContext(Elseif_clauseContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitSelection_statement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Elseif_clauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_elseif_clause;
    }

	ELSEIF() {
	    return this.getToken(matlabParser.ELSEIF, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statement_list() {
	    return this.getTypedRuleContext(Statement_listContext,0);
	};

	elseif_clause() {
	    return this.getTypedRuleContext(Elseif_clauseContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitElseif_clause(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Iteration_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_iteration_statement;
    }

	WHILE() {
	    return this.getToken(matlabParser.WHILE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statement_list() {
	    return this.getTypedRuleContext(Statement_listContext,0);
	};

	END() {
	    return this.getToken(matlabParser.END, 0);
	};

	eostmt() {
	    return this.getTypedRuleContext(EostmtContext,0);
	};

	FOR() {
	    return this.getToken(matlabParser.FOR, 0);
	};

	IDENTIFIER() {
	    return this.getToken(matlabParser.IDENTIFIER, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitIteration_statement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Jump_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_jump_statement;
    }

	BREAK() {
	    return this.getToken(matlabParser.BREAK, 0);
	};

	eostmt() {
	    return this.getTypedRuleContext(EostmtContext,0);
	};

	RETURN() {
	    return this.getToken(matlabParser.RETURN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitJump_statement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Translation_unitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_translation_unit;
    }

	statement_list() {
	    return this.getTypedRuleContext(Statement_listContext,0);
	};

	FUNCTION() {
	    return this.getToken(matlabParser.FUNCTION, 0);
	};

	function_declare() {
	    return this.getTypedRuleContext(Function_declareContext,0);
	};

	eostmt() {
	    return this.getTypedRuleContext(EostmtContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitTranslation_unit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Func_ident_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_func_ident_list;
    }

	IDENTIFIER() {
	    return this.getToken(matlabParser.IDENTIFIER, 0);
	};

	func_ident_list() {
	    return this.getTypedRuleContext(Func_ident_listContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitFunc_ident_list(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Func_return_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_func_return_list;
    }

	IDENTIFIER() {
	    return this.getToken(matlabParser.IDENTIFIER, 0);
	};

	func_ident_list() {
	    return this.getTypedRuleContext(Func_ident_listContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitFunc_return_list(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Function_declare_lhsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_function_declare_lhs;
    }

	IDENTIFIER() {
	    return this.getToken(matlabParser.IDENTIFIER, 0);
	};

	func_ident_list() {
	    return this.getTypedRuleContext(Func_ident_listContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitFunction_declare_lhs(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Function_declareContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = matlabParser.RULE_function_declare;
    }

	function_declare_lhs() {
	    return this.getTypedRuleContext(Function_declare_lhsContext,0);
	};

	func_return_list() {
	    return this.getTypedRuleContext(Func_return_listContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof matlabVisitor ) {
	        return visitor.visitFunction_declare(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




matlabParser.Primary_expressionContext = Primary_expressionContext; 
matlabParser.Postfix_expressionContext = Postfix_expressionContext; 
matlabParser.Index_expressionContext = Index_expressionContext; 
matlabParser.Index_expression_listContext = Index_expression_listContext; 
matlabParser.Array_expressionContext = Array_expressionContext; 
matlabParser.Unary_expressionContext = Unary_expressionContext; 
matlabParser.Unary_operatorContext = Unary_operatorContext; 
matlabParser.Multiplicative_expressionContext = Multiplicative_expressionContext; 
matlabParser.Additive_expressionContext = Additive_expressionContext; 
matlabParser.Relational_expressionContext = Relational_expressionContext; 
matlabParser.Equality_expressionContext = Equality_expressionContext; 
matlabParser.And_expressionContext = And_expressionContext; 
matlabParser.Or_expressionContext = Or_expressionContext; 
matlabParser.ExpressionContext = ExpressionContext; 
matlabParser.Assignment_expressionContext = Assignment_expressionContext; 
matlabParser.EostmtContext = EostmtContext; 
matlabParser.StatementContext = StatementContext; 
matlabParser.Statement_listContext = Statement_listContext; 
matlabParser.Identifier_listContext = Identifier_listContext; 
matlabParser.Global_statementContext = Global_statementContext; 
matlabParser.Clear_statementContext = Clear_statementContext; 
matlabParser.Expression_statementContext = Expression_statementContext; 
matlabParser.Assignment_statementContext = Assignment_statementContext; 
matlabParser.Array_elementContext = Array_elementContext; 
matlabParser.Array_listContext = Array_listContext; 
matlabParser.Selection_statementContext = Selection_statementContext; 
matlabParser.Elseif_clauseContext = Elseif_clauseContext; 
matlabParser.Iteration_statementContext = Iteration_statementContext; 
matlabParser.Jump_statementContext = Jump_statementContext; 
matlabParser.Translation_unitContext = Translation_unitContext; 
matlabParser.Func_ident_listContext = Func_ident_listContext; 
matlabParser.Func_return_listContext = Func_return_listContext; 
matlabParser.Function_declare_lhsContext = Function_declare_lhsContext; 
matlabParser.Function_declareContext = Function_declareContext; 
