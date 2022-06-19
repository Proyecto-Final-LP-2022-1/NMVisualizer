// Generated from matlab.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import matlabVisitor from './matlabVisitor.js';

const serializedATN = [4,1,45,436,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,1,0,1,0,
1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,82,8,0,1,1,1,1,1,1,3,1,87,
8,1,1,1,1,1,1,1,1,1,5,1,93,8,1,10,1,12,1,96,9,1,1,2,1,2,3,2,100,8,2,1,3,
1,3,1,3,1,3,1,3,1,3,5,3,108,8,3,10,3,12,3,111,9,3,1,4,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,1,4,1,4,3,4,124,8,4,1,5,1,5,1,5,1,5,3,5,130,8,5,1,6,1,6,1,
7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,161,8,7,10,7,12,7,164,9,7,1,8,1,8,
1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,175,8,8,10,8,12,8,178,9,8,1,9,1,9,1,9,1,
9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,195,8,9,10,9,12,9,198,
9,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,5,10,209,8,10,10,10,12,
10,212,9,10,1,11,1,11,1,11,1,11,1,11,1,11,5,11,220,8,11,10,11,12,11,223,
9,11,1,12,1,12,1,12,1,12,1,12,1,12,5,12,231,8,12,10,12,12,12,234,9,12,1,
13,1,13,1,13,1,13,1,13,1,13,5,13,242,8,13,10,13,12,13,245,9,13,1,14,1,14,
1,14,1,14,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,260,8,16,1,17,
1,17,1,17,1,17,1,17,5,17,267,8,17,10,17,12,17,270,9,17,1,18,1,18,1,18,1,
18,1,18,5,18,277,8,18,10,18,12,18,280,9,18,1,19,1,19,1,19,1,19,1,20,1,20,
1,20,1,20,1,21,1,21,1,21,1,21,3,21,294,8,21,1,22,1,22,1,22,1,23,1,23,3,23,
301,8,23,1,24,1,24,1,24,1,24,1,24,5,24,308,8,24,10,24,12,24,311,9,24,1,25,
1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,
25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
3,25,343,8,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,5,26,355,
8,26,10,26,12,26,358,9,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,
27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,
3,27,384,8,27,1,28,1,28,1,28,1,28,3,28,390,8,28,1,29,1,29,1,29,1,29,1,29,
1,29,3,29,398,8,29,1,30,1,30,1,30,1,30,1,30,1,30,5,30,406,8,30,10,30,12,
30,409,9,30,1,31,1,31,1,31,1,31,1,31,3,31,416,8,31,1,32,1,32,1,32,1,32,1,
32,1,32,1,32,1,32,1,32,3,32,427,8,32,1,33,1,33,1,33,1,33,1,33,3,33,434,8,
33,1,33,0,14,2,6,14,16,18,20,22,24,26,34,36,48,52,60,34,0,2,4,6,8,10,12,
14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,
62,64,66,0,2,3,0,14,14,36,36,38,38,3,0,6,6,13,13,44,44,456,0,81,1,0,0,0,
2,86,1,0,0,0,4,99,1,0,0,0,6,101,1,0,0,0,8,123,1,0,0,0,10,129,1,0,0,0,12,
131,1,0,0,0,14,133,1,0,0,0,16,165,1,0,0,0,18,179,1,0,0,0,20,199,1,0,0,0,
22,213,1,0,0,0,24,224,1,0,0,0,26,235,1,0,0,0,28,246,1,0,0,0,30,250,1,0,0,
0,32,259,1,0,0,0,34,261,1,0,0,0,36,271,1,0,0,0,38,281,1,0,0,0,40,285,1,0,
0,0,42,293,1,0,0,0,44,295,1,0,0,0,46,300,1,0,0,0,48,302,1,0,0,0,50,342,1,
0,0,0,52,344,1,0,0,0,54,383,1,0,0,0,56,389,1,0,0,0,58,397,1,0,0,0,60,399,
1,0,0,0,62,415,1,0,0,0,64,426,1,0,0,0,66,433,1,0,0,0,68,82,5,42,0,0,69,82,
5,43,0,0,70,82,5,41,0,0,71,72,5,1,0,0,72,73,3,26,13,0,73,74,5,2,0,0,74,82,
1,0,0,0,75,76,5,3,0,0,76,82,5,4,0,0,77,78,5,3,0,0,78,79,3,48,24,0,79,80,
5,4,0,0,80,82,1,0,0,0,81,68,1,0,0,0,81,69,1,0,0,0,81,70,1,0,0,0,81,71,1,
0,0,0,81,75,1,0,0,0,81,77,1,0,0,0,82,1,1,0,0,0,83,84,6,1,-1,0,84,87,3,0,
0,0,85,87,3,8,4,0,86,83,1,0,0,0,86,85,1,0,0,0,87,94,1,0,0,0,88,89,10,2,0,
0,89,93,5,39,0,0,90,91,10,1,0,0,91,93,5,40,0,0,92,88,1,0,0,0,92,90,1,0,0,
0,93,96,1,0,0,0,94,92,1,0,0,0,94,95,1,0,0,0,95,3,1,0,0,0,96,94,1,0,0,0,97,
100,5,5,0,0,98,100,3,26,13,0,99,97,1,0,0,0,99,98,1,0,0,0,100,5,1,0,0,0,101,
102,6,3,-1,0,102,103,3,4,2,0,103,109,1,0,0,0,104,105,10,1,0,0,105,106,5,
6,0,0,106,108,3,4,2,0,107,104,1,0,0,0,108,111,1,0,0,0,109,107,1,0,0,0,109,
110,1,0,0,0,110,7,1,0,0,0,111,109,1,0,0,0,112,113,5,42,0,0,113,114,5,1,0,
0,114,115,3,6,3,0,115,116,5,2,0,0,116,124,1,0,0,0,117,118,5,42,0,0,118,119,
5,1,0,0,119,120,3,0,0,0,120,121,5,2,0,0,121,122,3,26,13,0,122,124,1,0,0,
0,123,112,1,0,0,0,123,117,1,0,0,0,124,9,1,0,0,0,125,130,3,2,1,0,126,127,
3,12,6,0,127,128,3,2,1,0,128,130,1,0,0,0,129,125,1,0,0,0,129,126,1,0,0,0,
130,11,1,0,0,0,131,132,7,0,0,0,132,13,1,0,0,0,133,134,6,7,-1,0,134,135,3,
10,5,0,135,162,1,0,0,0,136,137,10,8,0,0,137,138,5,34,0,0,138,161,3,10,5,
0,139,140,10,7,0,0,140,141,5,20,0,0,141,161,3,10,5,0,142,143,10,6,0,0,143,
144,5,7,0,0,144,161,3,10,5,0,145,146,10,5,0,0,146,147,5,37,0,0,147,161,3,
10,5,0,148,149,10,4,0,0,149,150,5,15,0,0,150,161,3,10,5,0,151,152,10,3,0,
0,152,153,5,16,0,0,153,161,3,10,5,0,154,155,10,2,0,0,155,156,5,17,0,0,156,
161,3,10,5,0,157,158,10,1,0,0,158,159,5,18,0,0,159,161,3,10,5,0,160,136,
1,0,0,0,160,139,1,0,0,0,160,142,1,0,0,0,160,145,1,0,0,0,160,148,1,0,0,0,
160,151,1,0,0,0,160,154,1,0,0,0,160,157,1,0,0,0,161,164,1,0,0,0,162,160,
1,0,0,0,162,163,1,0,0,0,163,15,1,0,0,0,164,162,1,0,0,0,165,166,6,8,-1,0,
166,167,3,14,7,0,167,176,1,0,0,0,168,169,10,2,0,0,169,170,5,14,0,0,170,175,
3,14,7,0,171,172,10,1,0,0,172,173,5,38,0,0,173,175,3,14,7,0,174,168,1,0,
0,0,174,171,1,0,0,0,175,178,1,0,0,0,176,174,1,0,0,0,176,177,1,0,0,0,177,
17,1,0,0,0,178,176,1,0,0,0,179,180,6,9,-1,0,180,181,3,16,8,0,181,196,1,0,
0,0,182,183,10,4,0,0,183,184,5,8,0,0,184,195,3,16,8,0,185,186,10,3,0,0,186,
187,5,9,0,0,187,195,3,16,8,0,188,189,10,2,0,0,189,190,5,31,0,0,190,195,3,
16,8,0,191,192,10,1,0,0,192,193,5,32,0,0,193,195,3,16,8,0,194,182,1,0,0,
0,194,185,1,0,0,0,194,188,1,0,0,0,194,191,1,0,0,0,195,198,1,0,0,0,196,194,
1,0,0,0,196,197,1,0,0,0,197,19,1,0,0,0,198,196,1,0,0,0,199,200,6,10,-1,0,
200,201,3,18,9,0,201,210,1,0,0,0,202,203,10,2,0,0,203,204,5,33,0,0,204,209,
3,18,9,0,205,206,10,1,0,0,206,207,5,35,0,0,207,209,3,18,9,0,208,202,1,0,
0,0,208,205,1,0,0,0,209,212,1,0,0,0,210,208,1,0,0,0,210,211,1,0,0,0,211,
21,1,0,0,0,212,210,1,0,0,0,213,214,6,11,-1,0,214,215,3,20,10,0,215,221,1,
0,0,0,216,217,10,1,0,0,217,218,5,10,0,0,218,220,3,20,10,0,219,216,1,0,0,
0,220,223,1,0,0,0,221,219,1,0,0,0,221,222,1,0,0,0,222,23,1,0,0,0,223,221,
1,0,0,0,224,225,6,12,-1,0,225,226,3,22,11,0,226,232,1,0,0,0,227,228,10,1,
0,0,228,229,5,11,0,0,229,231,3,22,11,0,230,227,1,0,0,0,231,234,1,0,0,0,232,
230,1,0,0,0,232,233,1,0,0,0,233,25,1,0,0,0,234,232,1,0,0,0,235,236,6,13,
-1,0,236,237,3,24,12,0,237,243,1,0,0,0,238,239,10,1,0,0,239,240,5,5,0,0,
240,242,3,24,12,0,241,238,1,0,0,0,242,245,1,0,0,0,243,241,1,0,0,0,243,244,
1,0,0,0,244,27,1,0,0,0,245,243,1,0,0,0,246,247,3,2,1,0,247,248,5,12,0,0,
248,249,3,26,13,0,249,29,1,0,0,0,250,251,7,1,0,0,251,31,1,0,0,0,252,260,
3,38,19,0,253,260,3,40,20,0,254,260,3,44,22,0,255,260,3,42,21,0,256,260,
3,50,25,0,257,260,3,54,27,0,258,260,3,56,28,0,259,252,1,0,0,0,259,253,1,
0,0,0,259,254,1,0,0,0,259,255,1,0,0,0,259,256,1,0,0,0,259,257,1,0,0,0,259,
258,1,0,0,0,260,33,1,0,0,0,261,262,6,17,-1,0,262,263,3,32,16,0,263,268,1,
0,0,0,264,265,10,1,0,0,265,267,3,32,16,0,266,264,1,0,0,0,267,270,1,0,0,0,
268,266,1,0,0,0,268,269,1,0,0,0,269,35,1,0,0,0,270,268,1,0,0,0,271,272,6,
18,-1,0,272,273,5,42,0,0,273,278,1,0,0,0,274,275,10,1,0,0,275,277,5,42,0,
0,276,274,1,0,0,0,277,280,1,0,0,0,278,276,1,0,0,0,278,279,1,0,0,0,279,37,
1,0,0,0,280,278,1,0,0,0,281,282,5,26,0,0,282,283,3,36,18,0,283,284,3,30,
15,0,284,39,1,0,0,0,285,286,5,28,0,0,286,287,3,36,18,0,287,288,3,30,15,0,
288,41,1,0,0,0,289,294,3,30,15,0,290,291,3,26,13,0,291,292,3,30,15,0,292,
294,1,0,0,0,293,289,1,0,0,0,293,290,1,0,0,0,294,43,1,0,0,0,295,296,3,28,
14,0,296,297,3,30,15,0,297,45,1,0,0,0,298,301,3,26,13,0,299,301,3,42,21,
0,300,298,1,0,0,0,300,299,1,0,0,0,301,47,1,0,0,0,302,303,6,24,-1,0,303,304,
3,46,23,0,304,309,1,0,0,0,305,306,10,1,0,0,306,308,3,46,23,0,307,305,1,0,
0,0,308,311,1,0,0,0,309,307,1,0,0,0,309,310,1,0,0,0,310,49,1,0,0,0,311,309,
1,0,0,0,312,313,5,27,0,0,313,314,3,26,13,0,314,315,3,34,17,0,315,316,5,25,
0,0,316,317,3,30,15,0,317,343,1,0,0,0,318,319,5,27,0,0,319,320,3,26,13,0,
320,321,3,34,17,0,321,322,5,29,0,0,322,323,3,34,17,0,323,324,5,25,0,0,324,
325,3,30,15,0,325,343,1,0,0,0,326,327,5,27,0,0,327,328,3,26,13,0,328,329,
3,34,17,0,329,330,3,52,26,0,330,331,5,25,0,0,331,332,3,30,15,0,332,343,1,
0,0,0,333,334,5,27,0,0,334,335,3,26,13,0,335,336,3,34,17,0,336,337,3,52,
26,0,337,338,5,29,0,0,338,339,3,34,17,0,339,340,5,25,0,0,340,341,3,30,15,
0,341,343,1,0,0,0,342,312,1,0,0,0,342,318,1,0,0,0,342,326,1,0,0,0,342,333,
1,0,0,0,343,51,1,0,0,0,344,345,6,26,-1,0,345,346,5,30,0,0,346,347,3,26,13,
0,347,348,3,34,17,0,348,356,1,0,0,0,349,350,10,1,0,0,350,351,5,30,0,0,351,
352,3,26,13,0,352,353,3,34,17,0,353,355,1,0,0,0,354,349,1,0,0,0,355,358,
1,0,0,0,356,354,1,0,0,0,356,357,1,0,0,0,357,53,1,0,0,0,358,356,1,0,0,0,359,
360,5,24,0,0,360,361,3,26,13,0,361,362,3,34,17,0,362,363,5,25,0,0,363,364,
3,30,15,0,364,384,1,0,0,0,365,366,5,23,0,0,366,367,5,42,0,0,367,368,5,12,
0,0,368,369,3,26,13,0,369,370,3,34,17,0,370,371,5,25,0,0,371,372,3,30,15,
0,372,384,1,0,0,0,373,374,5,23,0,0,374,375,5,1,0,0,375,376,5,42,0,0,376,
377,5,12,0,0,377,378,3,26,13,0,378,379,5,2,0,0,379,380,3,34,17,0,380,381,
5,25,0,0,381,382,3,30,15,0,382,384,1,0,0,0,383,359,1,0,0,0,383,365,1,0,0,
0,383,373,1,0,0,0,384,55,1,0,0,0,385,386,5,19,0,0,386,390,3,30,15,0,387,
388,5,21,0,0,388,390,3,30,15,0,389,385,1,0,0,0,389,387,1,0,0,0,390,57,1,
0,0,0,391,398,3,34,17,0,392,393,5,22,0,0,393,394,3,66,33,0,394,395,3,30,
15,0,395,396,3,34,17,0,396,398,1,0,0,0,397,391,1,0,0,0,397,392,1,0,0,0,398,
59,1,0,0,0,399,400,6,30,-1,0,400,401,5,42,0,0,401,407,1,0,0,0,402,403,10,
1,0,0,403,404,5,6,0,0,404,406,5,42,0,0,405,402,1,0,0,0,406,409,1,0,0,0,407,
405,1,0,0,0,407,408,1,0,0,0,408,61,1,0,0,0,409,407,1,0,0,0,410,416,5,42,
0,0,411,412,5,3,0,0,412,413,3,60,30,0,413,414,5,4,0,0,414,416,1,0,0,0,415,
410,1,0,0,0,415,411,1,0,0,0,416,63,1,0,0,0,417,427,5,42,0,0,418,419,5,42,
0,0,419,420,5,1,0,0,420,427,5,2,0,0,421,422,5,42,0,0,422,423,5,1,0,0,423,
424,3,60,30,0,424,425,5,2,0,0,425,427,1,0,0,0,426,417,1,0,0,0,426,418,1,
0,0,0,426,421,1,0,0,0,427,65,1,0,0,0,428,434,3,64,32,0,429,430,3,62,31,0,
430,431,5,12,0,0,431,432,3,64,32,0,432,434,1,0,0,0,433,428,1,0,0,0,433,429,
1,0,0,0,434,67,1,0,0,0,34,81,86,92,94,99,109,123,129,160,162,174,176,194,
196,208,210,221,232,243,259,268,278,293,300,309,342,356,383,389,397,407,
415,426,433];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class matlabParser extends antlr4.Parser {

    static grammarFileName = "matlab.g4";
    static literalNames = [ null, "'('", "')'", "'['", "']'", "':'", "','", 
                            "'\\'", "'<'", "'>'", "'&'", "'|'", "'='", "';'", 
                            "'+'", "'.*'", "'.\\'", "'./'", "'.^'", "'break'", 
                            "'/'", "'return'", "'function'", "'for'", "'while'", 
                            "'end'", "'global'", "'if'", "'clear'", "'else'", 
                            "'elseif'", "'<='", "'>='", "'=='", "'*'", "'~='", 
                            "'~'", "'^'", "'-'", "'transpose'", "'.''" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "ADD_OP", 
                             "ARRAYMUL", "ARRAYDIV", "ARRAYRDIV", "ARRAYPOW", 
                             "BREAK", "DIV_OP", "RETURN", "FUNCTION", "FOR", 
                             "WHILE", "END", "GLOBAL", "IF", "CLEAR", "ELSE", 
                             "ELSEIF", "LE_OP", "GE_OP", "EQ_OP", "MUL_OP", 
                             "NE_OP", "NEG_OP", "POW_OP", "SUB_OP", "TRANSPOSE", 
                             "NCTRANSPOSE", "STRING_LITERAL", "IDENTIFIER", 
                             "CONSTANT", "CR", "WS" ];
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
	        case matlabParser.ADD_OP:
	        case matlabParser.NEG_OP:
	        case matlabParser.SUB_OP:
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
	        this.state = 123;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 112;
	            this.match(matlabParser.IDENTIFIER);
	            this.state = 113;
	            this.match(matlabParser.T__0);
	            this.state = 114;
	            this.index_expression_list(0);
	            this.state = 115;
	            this.match(matlabParser.T__1);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 117;
	            this.match(matlabParser.IDENTIFIER);
	            this.state = 118;
	            this.match(matlabParser.T__0);
	            this.state = 119;
	            this.primary_expression();
	            this.state = 120;
	            this.match(matlabParser.T__1);
	            this.state = 121;
	            this.expression(0);
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



	unary_expression() {
	    let localctx = new Unary_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, matlabParser.RULE_unary_expression);
	    try {
	        this.state = 129;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case matlabParser.T__0:
	        case matlabParser.T__2:
	        case matlabParser.STRING_LITERAL:
	        case matlabParser.IDENTIFIER:
	        case matlabParser.CONSTANT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 125;
	            this.postfix_expression(0);
	            break;
	        case matlabParser.ADD_OP:
	        case matlabParser.NEG_OP:
	        case matlabParser.SUB_OP:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 126;
	            this.unary_operator();
	            this.state = 127;
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
	        this.state = 131;
	        _la = this._input.LA(1);
	        if(!(((((_la - 14)) & ~0x1f) == 0 && ((1 << (_la - 14)) & ((1 << (matlabParser.ADD_OP - 14)) | (1 << (matlabParser.NEG_OP - 14)) | (1 << (matlabParser.SUB_OP - 14)))) !== 0))) {
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
	        this.state = 134;
	        this.unary_expression();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 162;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 160;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 136;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 137;
	                    this.match(matlabParser.MUL_OP);
	                    this.state = 138;
	                    this.unary_expression();
	                    break;

	                case 2:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 139;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 140;
	                    this.match(matlabParser.DIV_OP);
	                    this.state = 141;
	                    this.unary_expression();
	                    break;

	                case 3:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 142;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 143;
	                    this.match(matlabParser.T__6);
	                    this.state = 144;
	                    this.unary_expression();
	                    break;

	                case 4:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 145;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 146;
	                    this.match(matlabParser.POW_OP);
	                    this.state = 147;
	                    this.unary_expression();
	                    break;

	                case 5:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 148;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 149;
	                    this.match(matlabParser.ARRAYMUL);
	                    this.state = 150;
	                    this.unary_expression();
	                    break;

	                case 6:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 151;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 152;
	                    this.match(matlabParser.ARRAYDIV);
	                    this.state = 153;
	                    this.unary_expression();
	                    break;

	                case 7:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 154;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 155;
	                    this.match(matlabParser.ARRAYRDIV);
	                    this.state = 156;
	                    this.unary_expression();
	                    break;

	                case 8:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 157;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 158;
	                    this.match(matlabParser.ARRAYPOW);
	                    this.state = 159;
	                    this.unary_expression();
	                    break;

	                } 
	            }
	            this.state = 164;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
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
	        this.state = 166;
	        this.multiplicative_expression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 176;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 174;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Additive_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_additive_expression);
	                    this.state = 168;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 169;
	                    this.match(matlabParser.ADD_OP);
	                    this.state = 170;
	                    this.multiplicative_expression(0);
	                    break;

	                case 2:
	                    localctx = new Additive_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_additive_expression);
	                    this.state = 171;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 172;
	                    this.match(matlabParser.SUB_OP);
	                    this.state = 173;
	                    this.multiplicative_expression(0);
	                    break;

	                } 
	            }
	            this.state = 178;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
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
	        this.state = 180;
	        this.additive_expression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 196;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 194;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Relational_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_relational_expression);
	                    this.state = 182;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 183;
	                    this.match(matlabParser.T__7);
	                    this.state = 184;
	                    this.additive_expression(0);
	                    break;

	                case 2:
	                    localctx = new Relational_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_relational_expression);
	                    this.state = 185;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 186;
	                    this.match(matlabParser.T__8);
	                    this.state = 187;
	                    this.additive_expression(0);
	                    break;

	                case 3:
	                    localctx = new Relational_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_relational_expression);
	                    this.state = 188;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 189;
	                    this.match(matlabParser.LE_OP);
	                    this.state = 190;
	                    this.additive_expression(0);
	                    break;

	                case 4:
	                    localctx = new Relational_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_relational_expression);
	                    this.state = 191;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 192;
	                    this.match(matlabParser.GE_OP);
	                    this.state = 193;
	                    this.additive_expression(0);
	                    break;

	                } 
	            }
	            this.state = 198;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
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
	        this.state = 200;
	        this.relational_expression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 210;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 208;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Equality_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_equality_expression);
	                    this.state = 202;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 203;
	                    this.match(matlabParser.EQ_OP);
	                    this.state = 204;
	                    this.relational_expression(0);
	                    break;

	                case 2:
	                    localctx = new Equality_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_equality_expression);
	                    this.state = 205;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 206;
	                    this.match(matlabParser.NE_OP);
	                    this.state = 207;
	                    this.relational_expression(0);
	                    break;

	                } 
	            }
	            this.state = 212;
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
	        this.state = 214;
	        this.equality_expression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 221;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new And_expressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_and_expression);
	                this.state = 216;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 217;
	                this.match(matlabParser.T__9);
	                this.state = 218;
	                this.equality_expression(0); 
	            }
	            this.state = 223;
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
	        this.state = 225;
	        this.and_expression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 232;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Or_expressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_or_expression);
	                this.state = 227;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 228;
	                this.match(matlabParser.T__10);
	                this.state = 229;
	                this.and_expression(0); 
	            }
	            this.state = 234;
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
	        this.state = 236;
	        this.or_expression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 243;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExpressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_expression);
	                this.state = 238;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 239;
	                this.match(matlabParser.T__4);
	                this.state = 240;
	                this.or_expression(0); 
	            }
	            this.state = 245;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
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
	        this.state = 246;
	        this.postfix_expression(0);
	        this.state = 247;
	        this.match(matlabParser.T__11);
	        this.state = 248;
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
	        this.state = 250;
	        _la = this._input.LA(1);
	        if(!(_la===matlabParser.T__5 || _la===matlabParser.T__12 || _la===matlabParser.CR)) {
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
	        this.state = 259;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 252;
	            this.global_statement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 253;
	            this.clear_statement();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 254;
	            this.assignment_statement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 255;
	            this.expression_statement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 256;
	            this.selection_statement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 257;
	            this.iteration_statement();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 258;
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
	        this.state = 262;
	        this.statement();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 268;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Statement_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_statement_list);
	                this.state = 264;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 265;
	                this.statement(); 
	            }
	            this.state = 270;
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
	        this.state = 272;
	        this.match(matlabParser.IDENTIFIER);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 278;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Identifier_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_identifier_list);
	                this.state = 274;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 275;
	                this.match(matlabParser.IDENTIFIER); 
	            }
	            this.state = 280;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
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
	        this.state = 281;
	        this.match(matlabParser.GLOBAL);
	        this.state = 282;
	        this.identifier_list(0);
	        this.state = 283;
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
	        this.state = 285;
	        this.match(matlabParser.CLEAR);
	        this.state = 286;
	        this.identifier_list(0);
	        this.state = 287;
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
	        this.state = 293;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case matlabParser.T__5:
	        case matlabParser.T__12:
	        case matlabParser.CR:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 289;
	            this.eostmt();
	            break;
	        case matlabParser.T__0:
	        case matlabParser.T__2:
	        case matlabParser.ADD_OP:
	        case matlabParser.NEG_OP:
	        case matlabParser.SUB_OP:
	        case matlabParser.STRING_LITERAL:
	        case matlabParser.IDENTIFIER:
	        case matlabParser.CONSTANT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 290;
	            this.expression(0);
	            this.state = 291;
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
	        this.state = 295;
	        this.assignment_expression();
	        this.state = 296;
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
	        this.state = 300;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 298;
	            this.expression(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 299;
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
	        this.state = 303;
	        this.array_element();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 309;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Array_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_array_list);
	                this.state = 305;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 306;
	                this.array_element(); 
	            }
	            this.state = 311;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
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
	        this.state = 342;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 312;
	            this.match(matlabParser.IF);
	            this.state = 313;
	            this.expression(0);
	            this.state = 314;
	            this.statement_list(0);
	            this.state = 315;
	            this.match(matlabParser.END);
	            this.state = 316;
	            this.eostmt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 318;
	            this.match(matlabParser.IF);
	            this.state = 319;
	            this.expression(0);
	            this.state = 320;
	            this.statement_list(0);
	            this.state = 321;
	            this.match(matlabParser.ELSE);
	            this.state = 322;
	            this.statement_list(0);
	            this.state = 323;
	            this.match(matlabParser.END);
	            this.state = 324;
	            this.eostmt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 326;
	            this.match(matlabParser.IF);
	            this.state = 327;
	            this.expression(0);
	            this.state = 328;
	            this.statement_list(0);
	            this.state = 329;
	            this.elseif_clause(0);
	            this.state = 330;
	            this.match(matlabParser.END);
	            this.state = 331;
	            this.eostmt();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 333;
	            this.match(matlabParser.IF);
	            this.state = 334;
	            this.expression(0);
	            this.state = 335;
	            this.statement_list(0);
	            this.state = 336;
	            this.elseif_clause(0);
	            this.state = 337;
	            this.match(matlabParser.ELSE);
	            this.state = 338;
	            this.statement_list(0);
	            this.state = 339;
	            this.match(matlabParser.END);
	            this.state = 340;
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
	        this.state = 345;
	        this.match(matlabParser.ELSEIF);
	        this.state = 346;
	        this.expression(0);
	        this.state = 347;
	        this.statement_list(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 356;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Elseif_clauseContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_elseif_clause);
	                this.state = 349;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 350;
	                this.match(matlabParser.ELSEIF);
	                this.state = 351;
	                this.expression(0);
	                this.state = 352;
	                this.statement_list(0); 
	            }
	            this.state = 358;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
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
	        this.state = 383;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 359;
	            this.match(matlabParser.WHILE);
	            this.state = 360;
	            this.expression(0);
	            this.state = 361;
	            this.statement_list(0);
	            this.state = 362;
	            this.match(matlabParser.END);
	            this.state = 363;
	            this.eostmt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 365;
	            this.match(matlabParser.FOR);
	            this.state = 366;
	            this.match(matlabParser.IDENTIFIER);
	            this.state = 367;
	            this.match(matlabParser.T__11);
	            this.state = 368;
	            this.expression(0);
	            this.state = 369;
	            this.statement_list(0);
	            this.state = 370;
	            this.match(matlabParser.END);
	            this.state = 371;
	            this.eostmt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 373;
	            this.match(matlabParser.FOR);
	            this.state = 374;
	            this.match(matlabParser.T__0);
	            this.state = 375;
	            this.match(matlabParser.IDENTIFIER);
	            this.state = 376;
	            this.match(matlabParser.T__11);
	            this.state = 377;
	            this.expression(0);
	            this.state = 378;
	            this.match(matlabParser.T__1);
	            this.state = 379;
	            this.statement_list(0);
	            this.state = 380;
	            this.match(matlabParser.END);
	            this.state = 381;
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
	        this.state = 389;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case matlabParser.BREAK:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 385;
	            this.match(matlabParser.BREAK);
	            this.state = 386;
	            this.eostmt();
	            break;
	        case matlabParser.RETURN:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 387;
	            this.match(matlabParser.RETURN);
	            this.state = 388;
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
	        this.state = 397;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case matlabParser.T__0:
	        case matlabParser.T__2:
	        case matlabParser.T__5:
	        case matlabParser.T__12:
	        case matlabParser.ADD_OP:
	        case matlabParser.BREAK:
	        case matlabParser.RETURN:
	        case matlabParser.FOR:
	        case matlabParser.WHILE:
	        case matlabParser.GLOBAL:
	        case matlabParser.IF:
	        case matlabParser.CLEAR:
	        case matlabParser.NEG_OP:
	        case matlabParser.SUB_OP:
	        case matlabParser.STRING_LITERAL:
	        case matlabParser.IDENTIFIER:
	        case matlabParser.CONSTANT:
	        case matlabParser.CR:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 391;
	            this.statement_list(0);
	            break;
	        case matlabParser.FUNCTION:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 392;
	            this.match(matlabParser.FUNCTION);
	            this.state = 393;
	            this.function_declare();
	            this.state = 394;
	            this.eostmt();
	            this.state = 395;
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
	        this.state = 400;
	        this.match(matlabParser.IDENTIFIER);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 407;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,30,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Func_ident_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_func_ident_list);
	                this.state = 402;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 403;
	                this.match(matlabParser.T__5);
	                this.state = 404;
	                this.match(matlabParser.IDENTIFIER); 
	            }
	            this.state = 409;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,30,this._ctx);
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
	        this.state = 415;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case matlabParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 410;
	            this.match(matlabParser.IDENTIFIER);
	            break;
	        case matlabParser.T__2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 411;
	            this.match(matlabParser.T__2);
	            this.state = 412;
	            this.func_ident_list(0);
	            this.state = 413;
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
	        this.state = 426;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 417;
	            this.match(matlabParser.IDENTIFIER);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 418;
	            this.match(matlabParser.IDENTIFIER);
	            this.state = 419;
	            this.match(matlabParser.T__0);
	            this.state = 420;
	            this.match(matlabParser.T__1);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 421;
	            this.match(matlabParser.IDENTIFIER);
	            this.state = 422;
	            this.match(matlabParser.T__0);
	            this.state = 423;
	            this.func_ident_list(0);
	            this.state = 424;
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
	        this.state = 433;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 428;
	            this.function_declare_lhs();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 429;
	            this.func_return_list();
	            this.state = 430;
	            this.match(matlabParser.T__11);
	            this.state = 431;
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
matlabParser.ADD_OP = 14;
matlabParser.ARRAYMUL = 15;
matlabParser.ARRAYDIV = 16;
matlabParser.ARRAYRDIV = 17;
matlabParser.ARRAYPOW = 18;
matlabParser.BREAK = 19;
matlabParser.DIV_OP = 20;
matlabParser.RETURN = 21;
matlabParser.FUNCTION = 22;
matlabParser.FOR = 23;
matlabParser.WHILE = 24;
matlabParser.END = 25;
matlabParser.GLOBAL = 26;
matlabParser.IF = 27;
matlabParser.CLEAR = 28;
matlabParser.ELSE = 29;
matlabParser.ELSEIF = 30;
matlabParser.LE_OP = 31;
matlabParser.GE_OP = 32;
matlabParser.EQ_OP = 33;
matlabParser.MUL_OP = 34;
matlabParser.NE_OP = 35;
matlabParser.NEG_OP = 36;
matlabParser.POW_OP = 37;
matlabParser.SUB_OP = 38;
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

	primary_expression() {
	    return this.getTypedRuleContext(Primary_expressionContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
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

	ADD_OP() {
	    return this.getToken(matlabParser.ADD_OP, 0);
	};

	SUB_OP() {
	    return this.getToken(matlabParser.SUB_OP, 0);
	};

	NEG_OP() {
	    return this.getToken(matlabParser.NEG_OP, 0);
	};

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

	MUL_OP() {
	    return this.getToken(matlabParser.MUL_OP, 0);
	};

	DIV_OP() {
	    return this.getToken(matlabParser.DIV_OP, 0);
	};

	POW_OP() {
	    return this.getToken(matlabParser.POW_OP, 0);
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

	ADD_OP() {
	    return this.getToken(matlabParser.ADD_OP, 0);
	};

	SUB_OP() {
	    return this.getToken(matlabParser.SUB_OP, 0);
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
