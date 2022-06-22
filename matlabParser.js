// Generated from matlab.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import matlabVisitor from './matlabVisitor.js';

const serializedATN = [4,1,45,447,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,1,0,1,0,
1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,82,8,0,1,1,1,1,1,1,3,1,87,
8,1,1,1,1,1,1,1,1,1,5,1,93,8,1,10,1,12,1,96,9,1,1,2,1,2,3,2,100,8,2,1,3,
1,3,1,3,1,3,1,3,1,3,5,3,108,8,3,10,3,12,3,111,9,3,1,4,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,135,
8,4,1,5,1,5,1,5,1,5,3,5,141,8,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,5,7,172,8,7,10,7,12,7,175,9,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,
8,186,8,8,10,8,12,8,189,9,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
1,9,1,9,1,9,1,9,5,9,206,8,9,10,9,12,9,209,9,9,1,10,1,10,1,10,1,10,1,10,1,
10,1,10,1,10,1,10,5,10,220,8,10,10,10,12,10,223,9,10,1,11,1,11,1,11,1,11,
1,11,1,11,5,11,231,8,11,10,11,12,11,234,9,11,1,12,1,12,1,12,1,12,1,12,1,
12,5,12,242,8,12,10,12,12,12,245,9,12,1,13,1,13,1,13,1,13,1,13,1,13,5,13,
253,8,13,10,13,12,13,256,9,13,1,14,1,14,1,14,1,14,1,15,1,15,1,16,1,16,1,
16,1,16,1,16,1,16,1,16,3,16,271,8,16,1,17,1,17,1,17,1,17,1,17,5,17,278,8,
17,10,17,12,17,281,9,17,1,18,1,18,1,18,1,18,1,18,5,18,288,8,18,10,18,12,
18,291,9,18,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,
3,21,305,8,21,1,22,1,22,1,22,1,23,1,23,3,23,312,8,23,1,24,1,24,1,24,1,24,
1,24,5,24,319,8,24,10,24,12,24,322,9,24,1,25,1,25,1,25,1,25,1,25,1,25,1,
25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,3,25,354,8,25,1,26,1,26,1,26,
1,26,1,26,1,26,1,26,1,26,1,26,1,26,5,26,366,8,26,10,26,12,26,369,9,26,1,
27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,
1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,395,8,27,1,28,1,28,1,28,
1,28,3,28,401,8,28,1,29,1,29,1,29,1,29,1,29,1,29,3,29,409,8,29,1,30,1,30,
1,30,1,30,1,30,1,30,5,30,417,8,30,10,30,12,30,420,9,30,1,31,1,31,1,31,1,
31,1,31,3,31,427,8,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,3,32,
438,8,32,1,33,1,33,1,33,1,33,1,33,3,33,445,8,33,1,33,0,14,2,6,14,16,18,20,
22,24,26,34,36,48,52,60,34,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,0,2,3,0,10,10,35,35,38,
38,3,0,6,6,9,9,44,44,469,0,81,1,0,0,0,2,86,1,0,0,0,4,99,1,0,0,0,6,101,1,
0,0,0,8,134,1,0,0,0,10,140,1,0,0,0,12,142,1,0,0,0,14,144,1,0,0,0,16,176,
1,0,0,0,18,190,1,0,0,0,20,210,1,0,0,0,22,224,1,0,0,0,24,235,1,0,0,0,26,246,
1,0,0,0,28,257,1,0,0,0,30,261,1,0,0,0,32,270,1,0,0,0,34,272,1,0,0,0,36,282,
1,0,0,0,38,292,1,0,0,0,40,296,1,0,0,0,42,304,1,0,0,0,44,306,1,0,0,0,46,311,
1,0,0,0,48,313,1,0,0,0,50,353,1,0,0,0,52,355,1,0,0,0,54,394,1,0,0,0,56,400,
1,0,0,0,58,408,1,0,0,0,60,410,1,0,0,0,62,426,1,0,0,0,64,437,1,0,0,0,66,444,
1,0,0,0,68,82,5,42,0,0,69,82,5,43,0,0,70,82,5,41,0,0,71,72,5,1,0,0,72,73,
3,26,13,0,73,74,5,2,0,0,74,82,1,0,0,0,75,76,5,3,0,0,76,82,5,4,0,0,77,78,
5,3,0,0,78,79,3,48,24,0,79,80,5,4,0,0,80,82,1,0,0,0,81,68,1,0,0,0,81,69,
1,0,0,0,81,70,1,0,0,0,81,71,1,0,0,0,81,75,1,0,0,0,81,77,1,0,0,0,82,1,1,0,
0,0,83,84,6,1,-1,0,84,87,3,0,0,0,85,87,3,8,4,0,86,83,1,0,0,0,86,85,1,0,0,
0,87,94,1,0,0,0,88,89,10,2,0,0,89,93,5,39,0,0,90,91,10,1,0,0,91,93,5,40,
0,0,92,88,1,0,0,0,92,90,1,0,0,0,93,96,1,0,0,0,94,92,1,0,0,0,94,95,1,0,0,
0,95,3,1,0,0,0,96,94,1,0,0,0,97,100,5,5,0,0,98,100,3,26,13,0,99,97,1,0,0,
0,99,98,1,0,0,0,100,5,1,0,0,0,101,102,6,3,-1,0,102,103,3,4,2,0,103,109,1,
0,0,0,104,105,10,1,0,0,105,106,5,6,0,0,106,108,3,4,2,0,107,104,1,0,0,0,108,
111,1,0,0,0,109,107,1,0,0,0,109,110,1,0,0,0,110,7,1,0,0,0,111,109,1,0,0,
0,112,113,5,42,0,0,113,114,5,1,0,0,114,115,3,0,0,0,115,116,5,2,0,0,116,117,
3,8,4,0,117,135,1,0,0,0,118,119,5,42,0,0,119,120,5,1,0,0,120,121,3,0,0,0,
121,122,5,2,0,0,122,123,3,26,13,0,123,135,1,0,0,0,124,125,5,42,0,0,125,126,
5,1,0,0,126,127,3,0,0,0,127,128,5,2,0,0,128,135,1,0,0,0,129,130,5,42,0,0,
130,131,5,1,0,0,131,132,3,26,13,0,132,133,5,2,0,0,133,135,1,0,0,0,134,112,
1,0,0,0,134,118,1,0,0,0,134,124,1,0,0,0,134,129,1,0,0,0,135,9,1,0,0,0,136,
141,3,2,1,0,137,138,3,12,6,0,138,139,3,2,1,0,139,141,1,0,0,0,140,136,1,0,
0,0,140,137,1,0,0,0,141,11,1,0,0,0,142,143,7,0,0,0,143,13,1,0,0,0,144,145,
6,7,-1,0,145,146,3,10,5,0,146,173,1,0,0,0,147,148,10,8,0,0,148,149,5,33,
0,0,149,172,3,10,5,0,150,151,10,7,0,0,151,152,5,17,0,0,152,172,3,10,5,0,
153,154,10,6,0,0,154,155,5,7,0,0,155,172,3,10,5,0,156,157,10,5,0,0,157,158,
5,37,0,0,158,172,3,10,5,0,159,160,10,4,0,0,160,161,5,12,0,0,161,172,3,10,
5,0,162,163,10,3,0,0,163,164,5,13,0,0,164,172,3,10,5,0,165,166,10,2,0,0,
166,167,5,14,0,0,167,172,3,10,5,0,168,169,10,1,0,0,169,170,5,15,0,0,170,
172,3,10,5,0,171,147,1,0,0,0,171,150,1,0,0,0,171,153,1,0,0,0,171,156,1,0,
0,0,171,159,1,0,0,0,171,162,1,0,0,0,171,165,1,0,0,0,171,168,1,0,0,0,172,
175,1,0,0,0,173,171,1,0,0,0,173,174,1,0,0,0,174,15,1,0,0,0,175,173,1,0,0,
0,176,177,6,8,-1,0,177,178,3,14,7,0,178,187,1,0,0,0,179,180,10,2,0,0,180,
181,5,10,0,0,181,186,3,14,7,0,182,183,10,1,0,0,183,184,5,38,0,0,184,186,
3,14,7,0,185,179,1,0,0,0,185,182,1,0,0,0,186,189,1,0,0,0,187,185,1,0,0,0,
187,188,1,0,0,0,188,17,1,0,0,0,189,187,1,0,0,0,190,191,6,9,-1,0,191,192,
3,16,8,0,192,207,1,0,0,0,193,194,10,4,0,0,194,195,5,28,0,0,195,206,3,16,
8,0,196,197,10,3,0,0,197,198,5,30,0,0,198,206,3,16,8,0,199,200,10,2,0,0,
200,201,5,29,0,0,201,206,3,16,8,0,202,203,10,1,0,0,203,204,5,31,0,0,204,
206,3,16,8,0,205,193,1,0,0,0,205,196,1,0,0,0,205,199,1,0,0,0,205,202,1,0,
0,0,206,209,1,0,0,0,207,205,1,0,0,0,207,208,1,0,0,0,208,19,1,0,0,0,209,207,
1,0,0,0,210,211,6,10,-1,0,211,212,3,18,9,0,212,221,1,0,0,0,213,214,10,2,
0,0,214,215,5,32,0,0,215,220,3,18,9,0,216,217,10,1,0,0,217,218,5,34,0,0,
218,220,3,18,9,0,219,213,1,0,0,0,219,216,1,0,0,0,220,223,1,0,0,0,221,219,
1,0,0,0,221,222,1,0,0,0,222,21,1,0,0,0,223,221,1,0,0,0,224,225,6,11,-1,0,
225,226,3,20,10,0,226,232,1,0,0,0,227,228,10,1,0,0,228,229,5,11,0,0,229,
231,3,20,10,0,230,227,1,0,0,0,231,234,1,0,0,0,232,230,1,0,0,0,232,233,1,
0,0,0,233,23,1,0,0,0,234,232,1,0,0,0,235,236,6,12,-1,0,236,237,3,22,11,0,
237,243,1,0,0,0,238,239,10,1,0,0,239,240,5,36,0,0,240,242,3,22,11,0,241,
238,1,0,0,0,242,245,1,0,0,0,243,241,1,0,0,0,243,244,1,0,0,0,244,25,1,0,0,
0,245,243,1,0,0,0,246,247,6,13,-1,0,247,248,3,24,12,0,248,254,1,0,0,0,249,
250,10,1,0,0,250,251,5,5,0,0,251,253,3,24,12,0,252,249,1,0,0,0,253,256,1,
0,0,0,254,252,1,0,0,0,254,255,1,0,0,0,255,27,1,0,0,0,256,254,1,0,0,0,257,
258,3,2,1,0,258,259,5,8,0,0,259,260,3,26,13,0,260,29,1,0,0,0,261,262,7,1,
0,0,262,31,1,0,0,0,263,271,3,38,19,0,264,271,3,40,20,0,265,271,3,44,22,0,
266,271,3,42,21,0,267,271,3,50,25,0,268,271,3,54,27,0,269,271,3,56,28,0,
270,263,1,0,0,0,270,264,1,0,0,0,270,265,1,0,0,0,270,266,1,0,0,0,270,267,
1,0,0,0,270,268,1,0,0,0,270,269,1,0,0,0,271,33,1,0,0,0,272,273,6,17,-1,0,
273,274,3,32,16,0,274,279,1,0,0,0,275,276,10,1,0,0,276,278,3,32,16,0,277,
275,1,0,0,0,278,281,1,0,0,0,279,277,1,0,0,0,279,280,1,0,0,0,280,35,1,0,0,
0,281,279,1,0,0,0,282,283,6,18,-1,0,283,284,5,42,0,0,284,289,1,0,0,0,285,
286,10,1,0,0,286,288,5,42,0,0,287,285,1,0,0,0,288,291,1,0,0,0,289,287,1,
0,0,0,289,290,1,0,0,0,290,37,1,0,0,0,291,289,1,0,0,0,292,293,5,23,0,0,293,
294,3,36,18,0,294,295,3,30,15,0,295,39,1,0,0,0,296,297,5,25,0,0,297,298,
3,36,18,0,298,299,3,30,15,0,299,41,1,0,0,0,300,305,3,30,15,0,301,302,3,26,
13,0,302,303,3,30,15,0,303,305,1,0,0,0,304,300,1,0,0,0,304,301,1,0,0,0,305,
43,1,0,0,0,306,307,3,28,14,0,307,308,3,30,15,0,308,45,1,0,0,0,309,312,3,
26,13,0,310,312,3,42,21,0,311,309,1,0,0,0,311,310,1,0,0,0,312,47,1,0,0,0,
313,314,6,24,-1,0,314,315,3,46,23,0,315,320,1,0,0,0,316,317,10,1,0,0,317,
319,3,46,23,0,318,316,1,0,0,0,319,322,1,0,0,0,320,318,1,0,0,0,320,321,1,
0,0,0,321,49,1,0,0,0,322,320,1,0,0,0,323,324,5,24,0,0,324,325,3,26,13,0,
325,326,3,34,17,0,326,327,5,22,0,0,327,328,3,30,15,0,328,354,1,0,0,0,329,
330,5,24,0,0,330,331,3,26,13,0,331,332,3,34,17,0,332,333,5,26,0,0,333,334,
3,34,17,0,334,335,5,22,0,0,335,336,3,30,15,0,336,354,1,0,0,0,337,338,5,24,
0,0,338,339,3,26,13,0,339,340,3,34,17,0,340,341,3,52,26,0,341,342,5,22,0,
0,342,343,3,30,15,0,343,354,1,0,0,0,344,345,5,24,0,0,345,346,3,26,13,0,346,
347,3,34,17,0,347,348,3,52,26,0,348,349,5,26,0,0,349,350,3,34,17,0,350,351,
5,22,0,0,351,352,3,30,15,0,352,354,1,0,0,0,353,323,1,0,0,0,353,329,1,0,0,
0,353,337,1,0,0,0,353,344,1,0,0,0,354,51,1,0,0,0,355,356,6,26,-1,0,356,357,
5,27,0,0,357,358,3,26,13,0,358,359,3,34,17,0,359,367,1,0,0,0,360,361,10,
1,0,0,361,362,5,27,0,0,362,363,3,26,13,0,363,364,3,34,17,0,364,366,1,0,0,
0,365,360,1,0,0,0,366,369,1,0,0,0,367,365,1,0,0,0,367,368,1,0,0,0,368,53,
1,0,0,0,369,367,1,0,0,0,370,371,5,21,0,0,371,372,3,26,13,0,372,373,3,34,
17,0,373,374,5,22,0,0,374,375,3,30,15,0,375,395,1,0,0,0,376,377,5,20,0,0,
377,378,5,42,0,0,378,379,5,8,0,0,379,380,3,26,13,0,380,381,3,34,17,0,381,
382,5,22,0,0,382,383,3,30,15,0,383,395,1,0,0,0,384,385,5,20,0,0,385,386,
5,1,0,0,386,387,5,42,0,0,387,388,5,8,0,0,388,389,3,26,13,0,389,390,5,2,0,
0,390,391,3,34,17,0,391,392,5,22,0,0,392,393,3,30,15,0,393,395,1,0,0,0,394,
370,1,0,0,0,394,376,1,0,0,0,394,384,1,0,0,0,395,55,1,0,0,0,396,397,5,16,
0,0,397,401,3,30,15,0,398,399,5,18,0,0,399,401,3,30,15,0,400,396,1,0,0,0,
400,398,1,0,0,0,401,57,1,0,0,0,402,409,3,34,17,0,403,404,5,19,0,0,404,405,
3,66,33,0,405,406,3,30,15,0,406,407,3,34,17,0,407,409,1,0,0,0,408,402,1,
0,0,0,408,403,1,0,0,0,409,59,1,0,0,0,410,411,6,30,-1,0,411,412,5,42,0,0,
412,418,1,0,0,0,413,414,10,1,0,0,414,415,5,6,0,0,415,417,5,42,0,0,416,413,
1,0,0,0,417,420,1,0,0,0,418,416,1,0,0,0,418,419,1,0,0,0,419,61,1,0,0,0,420,
418,1,0,0,0,421,427,5,42,0,0,422,423,5,3,0,0,423,424,3,60,30,0,424,425,5,
4,0,0,425,427,1,0,0,0,426,421,1,0,0,0,426,422,1,0,0,0,427,63,1,0,0,0,428,
438,5,42,0,0,429,430,5,42,0,0,430,431,5,1,0,0,431,438,5,2,0,0,432,433,5,
42,0,0,433,434,5,1,0,0,434,435,3,60,30,0,435,436,5,2,0,0,436,438,1,0,0,0,
437,428,1,0,0,0,437,429,1,0,0,0,437,432,1,0,0,0,438,65,1,0,0,0,439,445,3,
64,32,0,440,441,3,62,31,0,441,442,5,8,0,0,442,443,3,64,32,0,443,445,1,0,
0,0,444,439,1,0,0,0,444,440,1,0,0,0,445,67,1,0,0,0,34,81,86,92,94,99,109,
134,140,171,173,185,187,205,207,219,221,232,243,254,270,279,289,304,311,
320,353,367,394,400,408,418,426,437,444];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class matlabParser extends antlr4.Parser {

    static grammarFileName = "matlab.g4";
    static literalNames = [ null, "'('", "')'", "'['", "']'", "':'", "','", 
                            "'\\'", "'='", "';'", "'+'", "'&'", "'.*'", 
                            "'.\\'", "'./'", "'.^'", "'break'", "'/'", "'return'", 
                            "'function'", "'for'", "'while'", "'end'", "'global'", 
                            "'if'", "'clear'", "'else'", "'elseif'", "'<'", 
                            "'<='", "'>'", "'>='", "'=='", "'*'", "'~='", 
                            "'~'", "'|'", "'^'", "'-'", "'transpose'", "'.''" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "ADD_OP", "AND_OP", "ARRAYMUL", 
                             "ARRAYDIV", "ARRAYRDIV", "ARRAYPOW", "BREAK", 
                             "DIV_OP", "RETURN", "FUNCTION", "FOR", "WHILE", 
                             "END", "GLOBAL", "IF", "CLEAR", "ELSE", "ELSEIF", 
                             "L_OP", "LE_OP", "G_OP", "GE_OP", "EQ_OP", 
                             "MUL_OP", "NE_OP", "NEG_OP", "OR_OP", "POW_OP", 
                             "SUB_OP", "TRANSPOSE", "NCTRANSPOSE", "STRING_LITERAL", 
                             "IDENTIFIER", "CONSTANT", "CR", "WS" ];
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
	        this.state = 134;
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
	            this.primary_expression();
	            this.state = 115;
	            this.match(matlabParser.T__1);
	            this.state = 116;
	            this.array_expression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 118;
	            this.match(matlabParser.IDENTIFIER);
	            this.state = 119;
	            this.match(matlabParser.T__0);
	            this.state = 120;
	            this.primary_expression();
	            this.state = 121;
	            this.match(matlabParser.T__1);
	            this.state = 122;
	            this.expression(0);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 124;
	            this.match(matlabParser.IDENTIFIER);
	            this.state = 125;
	            this.match(matlabParser.T__0);
	            this.state = 126;
	            this.primary_expression();
	            this.state = 127;
	            this.match(matlabParser.T__1);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 129;
	            this.match(matlabParser.IDENTIFIER);
	            this.state = 130;
	            this.match(matlabParser.T__0);
	            this.state = 131;
	            this.expression(0);
	            this.state = 132;
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



	unary_expression() {
	    let localctx = new Unary_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, matlabParser.RULE_unary_expression);
	    try {
	        this.state = 140;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case matlabParser.T__0:
	        case matlabParser.T__2:
	        case matlabParser.STRING_LITERAL:
	        case matlabParser.IDENTIFIER:
	        case matlabParser.CONSTANT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 136;
	            this.postfix_expression(0);
	            break;
	        case matlabParser.ADD_OP:
	        case matlabParser.NEG_OP:
	        case matlabParser.SUB_OP:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 137;
	            this.unary_operator();
	            this.state = 138;
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
	        this.state = 142;
	        _la = this._input.LA(1);
	        if(!(((((_la - 10)) & ~0x1f) == 0 && ((1 << (_la - 10)) & ((1 << (matlabParser.ADD_OP - 10)) | (1 << (matlabParser.NEG_OP - 10)) | (1 << (matlabParser.SUB_OP - 10)))) !== 0))) {
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
	        this.state = 145;
	        this.unary_expression();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 173;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 171;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 147;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 148;
	                    this.match(matlabParser.MUL_OP);
	                    this.state = 149;
	                    this.unary_expression();
	                    break;

	                case 2:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 150;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 151;
	                    this.match(matlabParser.DIV_OP);
	                    this.state = 152;
	                    this.unary_expression();
	                    break;

	                case 3:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 153;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 154;
	                    this.match(matlabParser.T__6);
	                    this.state = 155;
	                    this.unary_expression();
	                    break;

	                case 4:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 156;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 157;
	                    this.match(matlabParser.POW_OP);
	                    this.state = 158;
	                    this.unary_expression();
	                    break;

	                case 5:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 159;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 160;
	                    this.match(matlabParser.ARRAYMUL);
	                    this.state = 161;
	                    this.unary_expression();
	                    break;

	                case 6:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 162;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 163;
	                    this.match(matlabParser.ARRAYDIV);
	                    this.state = 164;
	                    this.unary_expression();
	                    break;

	                case 7:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 165;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 166;
	                    this.match(matlabParser.ARRAYRDIV);
	                    this.state = 167;
	                    this.unary_expression();
	                    break;

	                case 8:
	                    localctx = new Multiplicative_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_multiplicative_expression);
	                    this.state = 168;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 169;
	                    this.match(matlabParser.ARRAYPOW);
	                    this.state = 170;
	                    this.unary_expression();
	                    break;

	                } 
	            }
	            this.state = 175;
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
	        this.state = 177;
	        this.multiplicative_expression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 187;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 185;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Additive_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_additive_expression);
	                    this.state = 179;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 180;
	                    this.match(matlabParser.ADD_OP);
	                    this.state = 181;
	                    this.multiplicative_expression(0);
	                    break;

	                case 2:
	                    localctx = new Additive_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_additive_expression);
	                    this.state = 182;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 183;
	                    this.match(matlabParser.SUB_OP);
	                    this.state = 184;
	                    this.multiplicative_expression(0);
	                    break;

	                } 
	            }
	            this.state = 189;
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
	        this.state = 191;
	        this.additive_expression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 207;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 205;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Relational_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_relational_expression);
	                    this.state = 193;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 194;
	                    this.match(matlabParser.L_OP);
	                    this.state = 195;
	                    this.additive_expression(0);
	                    break;

	                case 2:
	                    localctx = new Relational_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_relational_expression);
	                    this.state = 196;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 197;
	                    this.match(matlabParser.G_OP);
	                    this.state = 198;
	                    this.additive_expression(0);
	                    break;

	                case 3:
	                    localctx = new Relational_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_relational_expression);
	                    this.state = 199;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 200;
	                    this.match(matlabParser.LE_OP);
	                    this.state = 201;
	                    this.additive_expression(0);
	                    break;

	                case 4:
	                    localctx = new Relational_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_relational_expression);
	                    this.state = 202;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 203;
	                    this.match(matlabParser.GE_OP);
	                    this.state = 204;
	                    this.additive_expression(0);
	                    break;

	                } 
	            }
	            this.state = 209;
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
	        this.state = 211;
	        this.relational_expression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 221;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 219;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Equality_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_equality_expression);
	                    this.state = 213;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 214;
	                    this.match(matlabParser.EQ_OP);
	                    this.state = 215;
	                    this.relational_expression(0);
	                    break;

	                case 2:
	                    localctx = new Equality_expressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, matlabParser.RULE_equality_expression);
	                    this.state = 216;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 217;
	                    this.match(matlabParser.NE_OP);
	                    this.state = 218;
	                    this.relational_expression(0);
	                    break;

	                } 
	            }
	            this.state = 223;
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
	        this.state = 225;
	        this.equality_expression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 232;
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
	                this.state = 227;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 228;
	                this.match(matlabParser.AND_OP);
	                this.state = 229;
	                this.equality_expression(0); 
	            }
	            this.state = 234;
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
	        this.state = 236;
	        this.and_expression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 243;
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
	                this.state = 238;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 239;
	                this.match(matlabParser.OR_OP);
	                this.state = 240;
	                this.and_expression(0); 
	            }
	            this.state = 245;
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
	        this.state = 247;
	        this.or_expression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 254;
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
	                this.state = 249;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 250;
	                this.match(matlabParser.T__4);
	                this.state = 251;
	                this.or_expression(0); 
	            }
	            this.state = 256;
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
	        this.state = 257;
	        this.postfix_expression(0);
	        this.state = 258;
	        this.match(matlabParser.T__7);
	        this.state = 259;
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
	        this.state = 261;
	        _la = this._input.LA(1);
	        if(!(_la===matlabParser.T__5 || _la===matlabParser.T__8 || _la===matlabParser.CR)) {
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
	        this.state = 270;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 263;
	            this.global_statement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 264;
	            this.clear_statement();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 265;
	            this.assignment_statement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 266;
	            this.expression_statement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 267;
	            this.selection_statement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 268;
	            this.iteration_statement();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 269;
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
	        this.state = 273;
	        this.statement();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 279;
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
	                this.state = 275;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 276;
	                this.statement(); 
	            }
	            this.state = 281;
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
	        this.state = 283;
	        this.match(matlabParser.IDENTIFIER);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 289;
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
	                this.state = 285;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 286;
	                this.match(matlabParser.IDENTIFIER); 
	            }
	            this.state = 291;
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
	        this.state = 292;
	        this.match(matlabParser.GLOBAL);
	        this.state = 293;
	        this.identifier_list(0);
	        this.state = 294;
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
	        this.state = 296;
	        this.match(matlabParser.CLEAR);
	        this.state = 297;
	        this.identifier_list(0);
	        this.state = 298;
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
	        this.state = 304;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case matlabParser.T__5:
	        case matlabParser.T__8:
	        case matlabParser.CR:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 300;
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
	            this.state = 301;
	            this.expression(0);
	            this.state = 302;
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
	        this.state = 306;
	        this.assignment_expression();
	        this.state = 307;
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
	        this.state = 311;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 309;
	            this.expression(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 310;
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
	        this.state = 314;
	        this.array_element();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 320;
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
	                this.state = 316;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 317;
	                this.array_element(); 
	            }
	            this.state = 322;
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
	        this.state = 353;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 323;
	            this.match(matlabParser.IF);
	            this.state = 324;
	            this.expression(0);
	            this.state = 325;
	            this.statement_list(0);
	            this.state = 326;
	            this.match(matlabParser.END);
	            this.state = 327;
	            this.eostmt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 329;
	            this.match(matlabParser.IF);
	            this.state = 330;
	            this.expression(0);
	            this.state = 331;
	            this.statement_list(0);
	            this.state = 332;
	            this.match(matlabParser.ELSE);
	            this.state = 333;
	            this.statement_list(0);
	            this.state = 334;
	            this.match(matlabParser.END);
	            this.state = 335;
	            this.eostmt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 337;
	            this.match(matlabParser.IF);
	            this.state = 338;
	            this.expression(0);
	            this.state = 339;
	            this.statement_list(0);
	            this.state = 340;
	            this.elseif_clause(0);
	            this.state = 341;
	            this.match(matlabParser.END);
	            this.state = 342;
	            this.eostmt();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 344;
	            this.match(matlabParser.IF);
	            this.state = 345;
	            this.expression(0);
	            this.state = 346;
	            this.statement_list(0);
	            this.state = 347;
	            this.elseif_clause(0);
	            this.state = 348;
	            this.match(matlabParser.ELSE);
	            this.state = 349;
	            this.statement_list(0);
	            this.state = 350;
	            this.match(matlabParser.END);
	            this.state = 351;
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
	        this.state = 356;
	        this.match(matlabParser.ELSEIF);
	        this.state = 357;
	        this.expression(0);
	        this.state = 358;
	        this.statement_list(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 367;
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
	                this.state = 360;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 361;
	                this.match(matlabParser.ELSEIF);
	                this.state = 362;
	                this.expression(0);
	                this.state = 363;
	                this.statement_list(0); 
	            }
	            this.state = 369;
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
	        this.state = 394;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 370;
	            this.match(matlabParser.WHILE);
	            this.state = 371;
	            this.expression(0);
	            this.state = 372;
	            this.statement_list(0);
	            this.state = 373;
	            this.match(matlabParser.END);
	            this.state = 374;
	            this.eostmt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 376;
	            this.match(matlabParser.FOR);
	            this.state = 377;
	            this.match(matlabParser.IDENTIFIER);
	            this.state = 378;
	            this.match(matlabParser.T__7);
	            this.state = 379;
	            this.expression(0);
	            this.state = 380;
	            this.statement_list(0);
	            this.state = 381;
	            this.match(matlabParser.END);
	            this.state = 382;
	            this.eostmt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 384;
	            this.match(matlabParser.FOR);
	            this.state = 385;
	            this.match(matlabParser.T__0);
	            this.state = 386;
	            this.match(matlabParser.IDENTIFIER);
	            this.state = 387;
	            this.match(matlabParser.T__7);
	            this.state = 388;
	            this.expression(0);
	            this.state = 389;
	            this.match(matlabParser.T__1);
	            this.state = 390;
	            this.statement_list(0);
	            this.state = 391;
	            this.match(matlabParser.END);
	            this.state = 392;
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
	        this.state = 400;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case matlabParser.BREAK:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 396;
	            this.match(matlabParser.BREAK);
	            this.state = 397;
	            this.eostmt();
	            break;
	        case matlabParser.RETURN:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 398;
	            this.match(matlabParser.RETURN);
	            this.state = 399;
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
	        this.state = 408;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case matlabParser.T__0:
	        case matlabParser.T__2:
	        case matlabParser.T__5:
	        case matlabParser.T__8:
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
	            this.state = 402;
	            this.statement_list(0);
	            break;
	        case matlabParser.FUNCTION:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 403;
	            this.match(matlabParser.FUNCTION);
	            this.state = 404;
	            this.function_declare();
	            this.state = 405;
	            this.eostmt();
	            this.state = 406;
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
	        this.state = 411;
	        this.match(matlabParser.IDENTIFIER);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 418;
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
	                this.state = 413;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 414;
	                this.match(matlabParser.T__5);
	                this.state = 415;
	                this.match(matlabParser.IDENTIFIER); 
	            }
	            this.state = 420;
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
	        this.state = 426;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case matlabParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 421;
	            this.match(matlabParser.IDENTIFIER);
	            break;
	        case matlabParser.T__2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 422;
	            this.match(matlabParser.T__2);
	            this.state = 423;
	            this.func_ident_list(0);
	            this.state = 424;
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
	        this.state = 437;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 428;
	            this.match(matlabParser.IDENTIFIER);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 429;
	            this.match(matlabParser.IDENTIFIER);
	            this.state = 430;
	            this.match(matlabParser.T__0);
	            this.state = 431;
	            this.match(matlabParser.T__1);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 432;
	            this.match(matlabParser.IDENTIFIER);
	            this.state = 433;
	            this.match(matlabParser.T__0);
	            this.state = 434;
	            this.func_ident_list(0);
	            this.state = 435;
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
	        this.state = 444;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 439;
	            this.function_declare_lhs();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 440;
	            this.func_return_list();
	            this.state = 441;
	            this.match(matlabParser.T__7);
	            this.state = 442;
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
matlabParser.ADD_OP = 10;
matlabParser.AND_OP = 11;
matlabParser.ARRAYMUL = 12;
matlabParser.ARRAYDIV = 13;
matlabParser.ARRAYRDIV = 14;
matlabParser.ARRAYPOW = 15;
matlabParser.BREAK = 16;
matlabParser.DIV_OP = 17;
matlabParser.RETURN = 18;
matlabParser.FUNCTION = 19;
matlabParser.FOR = 20;
matlabParser.WHILE = 21;
matlabParser.END = 22;
matlabParser.GLOBAL = 23;
matlabParser.IF = 24;
matlabParser.CLEAR = 25;
matlabParser.ELSE = 26;
matlabParser.ELSEIF = 27;
matlabParser.L_OP = 28;
matlabParser.LE_OP = 29;
matlabParser.G_OP = 30;
matlabParser.GE_OP = 31;
matlabParser.EQ_OP = 32;
matlabParser.MUL_OP = 33;
matlabParser.NE_OP = 34;
matlabParser.NEG_OP = 35;
matlabParser.OR_OP = 36;
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

	primary_expression() {
	    return this.getTypedRuleContext(Primary_expressionContext,0);
	};

	array_expression() {
	    return this.getTypedRuleContext(Array_expressionContext,0);
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

	L_OP() {
	    return this.getToken(matlabParser.L_OP, 0);
	};

	G_OP() {
	    return this.getToken(matlabParser.G_OP, 0);
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

	AND_OP() {
	    return this.getToken(matlabParser.AND_OP, 0);
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

	OR_OP() {
	    return this.getToken(matlabParser.OR_OP, 0);
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
