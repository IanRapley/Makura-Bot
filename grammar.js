// Generated automatically by nearley, version 2.16.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "main$subexpression$1", "symbols": ["ADJNOUN", {"literal":"\n"}, "ADJNOUN", {"literal":"\n"}, "ADJNOUN"]},
    {"name": "main", "symbols": ["main$subexpression$1"]},
    {"name": "ADJNOUN", "symbols": [{"literal":"A"}, "ITEM"]},
    {"name": "ADJNOUN$ebnf$1", "symbols": ["TIMING"], "postprocess": id},
    {"name": "ADJNOUN$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ADJNOUN", "symbols": ["CONTACT", "ADJNOUN$ebnf$1"]},
    {"name": "ITEM$ebnf$1", "symbols": ["POSSESSION"], "postprocess": id},
    {"name": "ITEM$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ITEM", "symbols": ["ITEM$ebnf$1", "PEOPLE"]},
    {"name": "ITEM$ebnf$2", "symbols": ["COLOUR"], "postprocess": id},
    {"name": "ITEM$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ITEM", "symbols": ["ITEM$ebnf$2", "OBJECT"]},
    {"name": "ITEM", "symbols": ["LITERATURE"]},
    {"name": "ITEM", "symbols": ["ANIMAL"]},
    {"name": "ITEM", "symbols": ["BIRD"]},
    {"name": "ITEM$ebnf$3", "symbols": ["SEASON"], "postprocess": id},
    {"name": "ITEM$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ITEM", "symbols": ["ITEM$ebnf$3", "WEATHER"]},
    {"name": "ITEM$ebnf$4", "symbols": ["COLOUR"], "postprocess": id},
    {"name": "ITEM$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ITEM$ebnf$5", "symbols": ["TEXTURE"], "postprocess": id},
    {"name": "ITEM$ebnf$5", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ITEM", "symbols": ["ITEM$ebnf$4", "ITEM$ebnf$5", "CLOTHING"]},
    {"name": "ITEM", "symbols": ["INSTRUMENT"]},
    {"name": "SONIC$string$1", "symbols": [{"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"d"}, {"literal":" "}, {"literal":"b"}, {"literal":"y"}, {"literal":" "}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SONIC", "symbols": ["LITERATURE", "SONIC$string$1", "PEOPLE"]},
    {"name": "SONIC", "symbols": ["BIRDSONG", "BIRD"]},
    {"name": "SONIC$ebnf$1", "symbols": ["COLOUR"], "postprocess": id},
    {"name": "SONIC$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "SONIC$ebnf$2", "symbols": ["TEXTURE"], "postprocess": id},
    {"name": "SONIC$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "SONIC", "symbols": ["CLOTHINGSOUND", "SONIC$ebnf$1", "SONIC$ebnf$2", "CLOTHING"]},
    {"name": "SONIC$string$2", "symbols": [{"literal":" "}, {"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"y"}, {"literal":"e"}, {"literal":"d"}, {"literal":" "}, {"literal":"b"}, {"literal":"y"}, {"literal":" "}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SONIC", "symbols": ["INSTRUMENT", "SONIC$string$2", "PEOPLE"]},
    {"name": "VITEM$ebnf$1", "symbols": ["POSSESSION"], "postprocess": id},
    {"name": "VITEM$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "VITEM", "symbols": ["VITEM$ebnf$1", "PEOPLE"]},
    {"name": "VITEM$ebnf$2", "symbols": ["COLOUR"], "postprocess": id},
    {"name": "VITEM$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "VITEM", "symbols": ["VITEM$ebnf$2", "OBJECT"]},
    {"name": "VITEM", "symbols": ["ANIMAL"]},
    {"name": "VITEM", "symbols": ["BIRD"]},
    {"name": "VITEM$ebnf$3", "symbols": ["SEASON"], "postprocess": id},
    {"name": "VITEM$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "VITEM", "symbols": ["VITEM$ebnf$3", "WEATHER"]},
    {"name": "VITEM$ebnf$4", "symbols": ["COLOUR"], "postprocess": id},
    {"name": "VITEM$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "VITEM$ebnf$5", "symbols": ["TEXTURE"], "postprocess": id},
    {"name": "VITEM$ebnf$5", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "VITEM", "symbols": ["VITEM$ebnf$4", "VITEM$ebnf$5", "CLOTHING"]},
    {"name": "VITEM", "symbols": ["INSTRUMENT"]},
    {"name": "CONTACT$string$1", "symbols": [{"literal":"A"}, {"literal":" "}, {"literal":"G"}, {"literal":"l"}, {"literal":"i"}, {"literal":"m"}, {"literal":"p"}, {"literal":"s"}, {"literal":"e"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONTACT", "symbols": ["CONTACT$string$1", "VITEM"]},
    {"name": "CONTACT$string$2", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONTACT", "symbols": ["CONTACT$string$2", "VITEM"]},
    {"name": "CONTACT$string$3", "symbols": [{"literal":"T"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":"u"}, {"literal":"n"}, {"literal":"d"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CONTACT", "symbols": ["CONTACT$string$3", "SONIC"]},
    {"name": "TIMING$string$1", "symbols": [{"literal":" "}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TIMING$ebnf$1", "symbols": ["WEATHER"], "postprocess": id},
    {"name": "TIMING$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "TIMING", "symbols": ["TIMING$string$1", "SEASON", "TIMING$ebnf$1"]},
    {"name": "BIRDSONG$string$1", "symbols": [{"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"c"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BIRDSONG", "symbols": ["BIRDSONG$string$1"]},
    {"name": "BIRDSONG$string$2", "symbols": [{"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"o"}, {"literal":"n"}, {"literal":"g"}, {"literal":" "}, {"literal":"o"}, {"literal":"f"}, {"literal":" "}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BIRDSONG", "symbols": ["BIRDSONG$string$2"]},
    {"name": "BIRDSONG$string$3", "symbols": [{"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"s"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BIRDSONG", "symbols": ["BIRDSONG$string$3"]},
    {"name": "CLOTHINGSOUND$string$1", "symbols": [{"literal":" "}, {"literal":"a"}, {"literal":" "}, {"literal":"r"}, {"literal":"u"}, {"literal":"s"}, {"literal":"t"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLOTHINGSOUND", "symbols": ["CLOTHINGSOUND$string$1"]},
    {"name": "CLOTHINGSOUND$string$2", "symbols": [{"literal":"a"}, {"literal":" "}, {"literal":"s"}, {"literal":"w"}, {"literal":"i"}, {"literal":"s"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLOTHINGSOUND", "symbols": ["CLOTHINGSOUND$string$2"]},
    {"name": "COLOUR$string$1", "symbols": [{"literal":" "}, {"literal":"R"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COLOUR", "symbols": ["COLOUR$string$1"]},
    {"name": "COLOUR$string$2", "symbols": [{"literal":" "}, {"literal":"Y"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"o"}, {"literal":"w"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COLOUR", "symbols": ["COLOUR$string$2"]},
    {"name": "COLOUR$string$3", "symbols": [{"literal":" "}, {"literal":"P"}, {"literal":"u"}, {"literal":"r"}, {"literal":"p"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COLOUR", "symbols": ["COLOUR$string$3"]},
    {"name": "COLOUR$string$4", "symbols": [{"literal":" "}, {"literal":"G"}, {"literal":"r"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COLOUR", "symbols": ["COLOUR$string$4"]},
    {"name": "COLOUR$string$5", "symbols": [{"literal":" "}, {"literal":"D"}, {"literal":"u"}, {"literal":"s"}, {"literal":"k"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COLOUR", "symbols": ["COLOUR$string$5", "COLOUR"]},
    {"name": "COLOUR$string$6", "symbols": [{"literal":" "}, {"literal":"G"}, {"literal":"r"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COLOUR", "symbols": ["COLOUR$string$6"]},
    {"name": "COLOUR$string$7", "symbols": [{"literal":" "}, {"literal":"R"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COLOUR", "symbols": ["COLOUR$string$7"]},
    {"name": "COLOUR$string$8", "symbols": [{"literal":" "}, {"literal":"B"}, {"literal":"l"}, {"literal":"u"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COLOUR", "symbols": ["COLOUR$string$8"]},
    {"name": "COLOUR$string$9", "symbols": [{"literal":" "}, {"literal":"S"}, {"literal":"h"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COLOUR", "symbols": ["COLOUR$string$9"]},
    {"name": "COLOUR$string$10", "symbols": [{"literal":" "}, {"literal":"F"}, {"literal":"l"}, {"literal":"o"}, {"literal":"w"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COLOUR", "symbols": ["COLOUR$string$10"]},
    {"name": "COLOUR$string$11", "symbols": [{"literal":" "}, {"literal":"W"}, {"literal":"h"}, {"literal":"i"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COLOUR", "symbols": ["COLOUR$string$11"]},
    {"name": "COLOUR$string$12", "symbols": [{"literal":" "}, {"literal":"P"}, {"literal":"a"}, {"literal":"t"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":"n"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COLOUR", "symbols": ["COLOUR$string$12"]},
    {"name": "COLOUR$string$13", "symbols": [{"literal":" "}, {"literal":"S"}, {"literal":"i"}, {"literal":"l"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COLOUR", "symbols": ["COLOUR$string$13"]},
    {"name": "COLOUR$string$14", "symbols": [{"literal":" "}, {"literal":"G"}, {"literal":"o"}, {"literal":"l"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COLOUR", "symbols": ["COLOUR$string$14"]},
    {"name": "COLOUR$string$15", "symbols": [{"literal":" "}, {"literal":"B"}, {"literal":"r"}, {"literal":"o"}, {"literal":"n"}, {"literal":"z"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COLOUR", "symbols": ["COLOUR$string$15"]},
    {"name": "COLOUR$string$16", "symbols": [{"literal":" "}, {"literal":"B"}, {"literal":"r"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "COLOUR", "symbols": ["COLOUR$string$16"]},
    {"name": "SEASON$string$1", "symbols": [{"literal":" "}, {"literal":"M"}, {"literal":"o"}, {"literal":"r"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SEASON", "symbols": ["SEASON$string$1"]},
    {"name": "SEASON$string$2", "symbols": [{"literal":" "}, {"literal":"D"}, {"literal":"u"}, {"literal":"s"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SEASON", "symbols": ["SEASON$string$2"]},
    {"name": "SEASON$string$3", "symbols": [{"literal":" "}, {"literal":"S"}, {"literal":"p"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SEASON", "symbols": ["SEASON$string$3"]},
    {"name": "SEASON$string$4", "symbols": [{"literal":" "}, {"literal":"S"}, {"literal":"u"}, {"literal":"m"}, {"literal":"m"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SEASON", "symbols": ["SEASON$string$4"]},
    {"name": "SEASON$string$5", "symbols": [{"literal":" "}, {"literal":"W"}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SEASON", "symbols": ["SEASON$string$5"]},
    {"name": "SEASON$string$6", "symbols": [{"literal":" "}, {"literal":"D"}, {"literal":"a"}, {"literal":"w"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SEASON", "symbols": ["SEASON$string$6"]},
    {"name": "TEXTURE$string$1", "symbols": [{"literal":" "}, {"literal":"C"}, {"literal":"h"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TEXTURE", "symbols": ["TEXTURE$string$1"]},
    {"name": "TEXTURE$string$2", "symbols": [{"literal":" "}, {"literal":"K"}, {"literal":"o"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TEXTURE", "symbols": ["TEXTURE$string$2"]},
    {"name": "TEXTURE$string$3", "symbols": [{"literal":" "}, {"literal":"N"}, {"literal":"o"}, {"literal":"r"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TEXTURE", "symbols": ["TEXTURE$string$3"]},
    {"name": "TEXTURE$string$4", "symbols": [{"literal":" "}, {"literal":"S"}, {"literal":"m"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TEXTURE", "symbols": ["TEXTURE$string$4"]},
    {"name": "TEXTURE$string$5", "symbols": [{"literal":" "}, {"literal":"S"}, {"literal":"i"}, {"literal":"l"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TEXTURE", "symbols": ["TEXTURE$string$5"]},
    {"name": "TEXTURE$string$6", "symbols": [{"literal":" "}, {"literal":"D"}, {"literal":"a"}, {"literal":"m"}, {"literal":"a"}, {"literal":"s"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "TEXTURE", "symbols": ["TEXTURE$string$6"]},
    {"name": "SEASON$string$7", "symbols": [{"literal":" "}, {"literal":"M"}, {"literal":"o"}, {"literal":"r"}, {"literal":"n"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SEASON", "symbols": ["SEASON$string$7"]},
    {"name": "SEASON$string$8", "symbols": [{"literal":" "}, {"literal":"D"}, {"literal":"u"}, {"literal":"s"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SEASON", "symbols": ["SEASON$string$8"]},
    {"name": "SEASON$string$9", "symbols": [{"literal":" "}, {"literal":"S"}, {"literal":"p"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SEASON", "symbols": ["SEASON$string$9"]},
    {"name": "SEASON$string$10", "symbols": [{"literal":" "}, {"literal":"S"}, {"literal":"u"}, {"literal":"m"}, {"literal":"m"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SEASON", "symbols": ["SEASON$string$10"]},
    {"name": "SEASON$string$11", "symbols": [{"literal":" "}, {"literal":"W"}, {"literal":"i"}, {"literal":"n"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SEASON", "symbols": ["SEASON$string$11"]},
    {"name": "SEASON$string$12", "symbols": [{"literal":" "}, {"literal":"D"}, {"literal":"a"}, {"literal":"w"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "SEASON", "symbols": ["SEASON$string$12"]},
    {"name": "POSSESSION$string$1", "symbols": [{"literal":"'"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "POSSESSION", "symbols": ["PEOPLE", "POSSESSION$string$1"]},
    {"name": "PEOPLE$string$1", "symbols": [{"literal":" "}, {"literal":"L"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$1"]},
    {"name": "PEOPLE$string$2", "symbols": [{"literal":" "}, {"literal":"S"}, {"literal":"e"}, {"literal":"r"}, {"literal":"v"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$2"]},
    {"name": "PEOPLE$string$3", "symbols": [{"literal":" "}, {"literal":"G"}, {"literal":"i"}, {"literal":"r"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$3"]},
    {"name": "PEOPLE$string$4", "symbols": [{"literal":" "}, {"literal":"B"}, {"literal":"o"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$4"]},
    {"name": "PEOPLE$string$5", "symbols": [{"literal":" "}, {"literal":"E"}, {"literal":"m"}, {"literal":"p"}, {"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$5"]},
    {"name": "PEOPLE$string$6", "symbols": [{"literal":" "}, {"literal":"S"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$6"]},
    {"name": "PEOPLE$string$7", "symbols": [{"literal":" "}, {"literal":"L"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$7"]},
    {"name": "PEOPLE$string$8", "symbols": [{"literal":" "}, {"literal":"F"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$8"]},
    {"name": "PEOPLE$string$9", "symbols": [{"literal":" "}, {"literal":"P"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$9"]},
    {"name": "PEOPLE$string$10", "symbols": [{"literal":" "}, {"literal":"P"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "PEOPLE", "symbols": ["PEOPLE$string$10"]},
    {"name": "OBJECT$string$1", "symbols": [{"literal":" "}, {"literal":"B"}, {"literal":"o"}, {"literal":"x"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECT", "symbols": ["OBJECT$string$1"]},
    {"name": "OBJECT$string$2", "symbols": [{"literal":" "}, {"literal":"E"}, {"literal":"n"}, {"literal":"v"}, {"literal":"e"}, {"literal":"l"}, {"literal":"o"}, {"literal":"p"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECT", "symbols": ["OBJECT$string$2"]},
    {"name": "OBJECT$string$3", "symbols": [{"literal":" "}, {"literal":"I"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}, {"literal":"n"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECT", "symbols": ["OBJECT$string$3"]},
    {"name": "OBJECT$string$4", "symbols": [{"literal":" "}, {"literal":"F"}, {"literal":"l"}, {"literal":"o"}, {"literal":"w"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECT", "symbols": ["OBJECT$string$4"]},
    {"name": "OBJECT$string$5", "symbols": [{"literal":" "}, {"literal":"V"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECT", "symbols": ["OBJECT$string$5"]},
    {"name": "OBJECT$string$6", "symbols": [{"literal":" "}, {"literal":"C"}, {"literal":"u"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECT", "symbols": ["OBJECT$string$6"]},
    {"name": "OBJECT$string$7", "symbols": [{"literal":" "}, {"literal":"f"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECT", "symbols": ["OBJECT$string$7"]},
    {"name": "OBJECT$string$8", "symbols": [{"literal":" "}, {"literal":"s"}, {"literal":"c"}, {"literal":"r"}, {"literal":"o"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECT", "symbols": ["OBJECT$string$8"]},
    {"name": "OBJECT$string$9", "symbols": [{"literal":" "}, {"literal":"p"}, {"literal":"l"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECT", "symbols": ["OBJECT$string$9"]},
    {"name": "OBJECT$string$10", "symbols": [{"literal":" "}, {"literal":"r"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OBJECT", "symbols": ["OBJECT$string$10"]},
    {"name": "LITERATURE$string$1", "symbols": [{"literal":" "}, {"literal":"L"}, {"literal":"e"}, {"literal":"t"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LITERATURE", "symbols": ["LITERATURE$string$1"]},
    {"name": "LITERATURE$string$2", "symbols": [{"literal":" "}, {"literal":"P"}, {"literal":"o"}, {"literal":"e"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LITERATURE", "symbols": ["LITERATURE$string$2"]},
    {"name": "LITERATURE$string$3", "symbols": [{"literal":" "}, {"literal":"S"}, {"literal":"u"}, {"literal":"t"}, {"literal":"r"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LITERATURE", "symbols": ["LITERATURE$string$3"]},
    {"name": "LITERATURE$string$4", "symbols": [{"literal":" "}, {"literal":"T"}, {"literal":"a"}, {"literal":"n"}, {"literal":"k"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "LITERATURE", "symbols": ["LITERATURE$string$4"]},
    {"name": "INSTRUMENT$string$1", "symbols": [{"literal":" "}, {"literal":"K"}, {"literal":"o"}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INSTRUMENT", "symbols": ["INSTRUMENT$string$1"]},
    {"name": "INSTRUMENT$string$2", "symbols": [{"literal":" "}, {"literal":"S"}, {"literal":"h"}, {"literal":"a"}, {"literal":"m"}, {"literal":"i"}, {"literal":"n"}, {"literal":"s"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INSTRUMENT", "symbols": ["INSTRUMENT$string$2"]},
    {"name": "INSTRUMENT$string$3", "symbols": [{"literal":" "}, {"literal":"F"}, {"literal":"l"}, {"literal":"u"}, {"literal":"t"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "INSTRUMENT", "symbols": ["INSTRUMENT$string$3"]},
    {"name": "ANIMAL$string$1", "symbols": [{"literal":" "}, {"literal":"G"}, {"literal":"o"}, {"literal":"o"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ANIMAL", "symbols": ["ANIMAL$string$1"]},
    {"name": "ANIMAL$string$2", "symbols": [{"literal":" "}, {"literal":"O"}, {"literal":"x"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ANIMAL", "symbols": ["ANIMAL$string$2"]},
    {"name": "ANIMAL$string$3", "symbols": [{"literal":" "}, {"literal":"B"}, {"literal":"i"}, {"literal":"r"}, {"literal":"d"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ANIMAL", "symbols": ["ANIMAL$string$3"]},
    {"name": "ANIMAL$string$4", "symbols": [{"literal":" "}, {"literal":"C"}, {"literal":"r"}, {"literal":"a"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ANIMAL", "symbols": ["ANIMAL$string$4"]},
    {"name": "ANIMAL$string$5", "symbols": [{"literal":" "}, {"literal":"C"}, {"literal":"a"}, {"literal":"r"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ANIMAL", "symbols": ["ANIMAL$string$5"]},
    {"name": "ANIMAL$string$6", "symbols": [{"literal":" "}, {"literal":"T"}, {"literal":"u"}, {"literal":"r"}, {"literal":"t"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ANIMAL", "symbols": ["ANIMAL$string$6"]},
    {"name": "ANIMAL$string$7", "symbols": [{"literal":" "}, {"literal":"C"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ANIMAL", "symbols": ["ANIMAL$string$7"]},
    {"name": "ANIMAL$string$8", "symbols": [{"literal":" "}, {"literal":"D"}, {"literal":"o"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ANIMAL", "symbols": ["ANIMAL$string$8"]},
    {"name": "ANIMAL$string$9", "symbols": [{"literal":" "}, {"literal":"C"}, {"literal":"r"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ANIMAL", "symbols": ["ANIMAL$string$9"]},
    {"name": "ANIMAL$string$10", "symbols": [{"literal":" "}, {"literal":"S"}, {"literal":"a"}, {"literal":"l"}, {"literal":"m"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ANIMAL", "symbols": ["ANIMAL$string$10"]},
    {"name": "ANIMAL$string$11", "symbols": [{"literal":" "}, {"literal":"M"}, {"literal":"o"}, {"literal":"n"}, {"literal":"k"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ANIMAL", "symbols": ["ANIMAL$string$11"]},
    {"name": "ANIMAL$string$12", "symbols": [{"literal":" "}, {"literal":"B"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ANIMAL", "symbols": ["ANIMAL$string$12"]},
    {"name": "ANIMAL$string$13", "symbols": [{"literal":" "}, {"literal":"B"}, {"literal":"o"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ANIMAL", "symbols": ["ANIMAL$string$13"]},
    {"name": "ANIMAL$string$14", "symbols": [{"literal":" "}, {"literal":"N"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":"a"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ANIMAL", "symbols": ["ANIMAL$string$14"]},
    {"name": "ANIMAL$string$15", "symbols": [{"literal":" "}, {"literal":"E"}, {"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ANIMAL", "symbols": ["ANIMAL$string$15"]},
    {"name": "BIRD$string$1", "symbols": [{"literal":" "}, {"literal":"G"}, {"literal":"o"}, {"literal":"o"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BIRD", "symbols": ["BIRD$string$1"]},
    {"name": "BIRD$string$2", "symbols": [{"literal":" "}, {"literal":"O"}, {"literal":"x"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BIRD", "symbols": ["BIRD$string$2"]},
    {"name": "BIRD$string$3", "symbols": [{"literal":" "}, {"literal":"B"}, {"literal":"i"}, {"literal":"r"}, {"literal":"d"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BIRD", "symbols": ["BIRD$string$3"]},
    {"name": "BIRD$string$4", "symbols": [{"literal":" "}, {"literal":"C"}, {"literal":"r"}, {"literal":"a"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BIRD", "symbols": ["BIRD$string$4"]},
    {"name": "BIRD$string$5", "symbols": [{"literal":" "}, {"literal":"C"}, {"literal":"a"}, {"literal":"r"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BIRD", "symbols": ["BIRD$string$5"]},
    {"name": "BIRD$string$6", "symbols": [{"literal":" "}, {"literal":"T"}, {"literal":"u"}, {"literal":"r"}, {"literal":"t"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BIRD", "symbols": ["BIRD$string$6"]},
    {"name": "BIRD$string$7", "symbols": [{"literal":" "}, {"literal":"C"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BIRD", "symbols": ["BIRD$string$7"]},
    {"name": "BIRD$string$8", "symbols": [{"literal":" "}, {"literal":"D"}, {"literal":"o"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BIRD", "symbols": ["BIRD$string$8"]},
    {"name": "BIRD$string$9", "symbols": [{"literal":" "}, {"literal":"C"}, {"literal":"r"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BIRD", "symbols": ["BIRD$string$9"]},
    {"name": "BIRD$string$10", "symbols": [{"literal":" "}, {"literal":"S"}, {"literal":"a"}, {"literal":"l"}, {"literal":"m"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BIRD", "symbols": ["BIRD$string$10"]},
    {"name": "BIRD$string$11", "symbols": [{"literal":" "}, {"literal":"M"}, {"literal":"o"}, {"literal":"n"}, {"literal":"k"}, {"literal":"e"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BIRD", "symbols": ["BIRD$string$11"]},
    {"name": "BIRD$string$12", "symbols": [{"literal":" "}, {"literal":"B"}, {"literal":"e"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BIRD", "symbols": ["BIRD$string$12"]},
    {"name": "BIRD$string$13", "symbols": [{"literal":" "}, {"literal":"B"}, {"literal":"o"}, {"literal":"a"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BIRD", "symbols": ["BIRD$string$13"]},
    {"name": "BIRD$string$14", "symbols": [{"literal":" "}, {"literal":"N"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}, {"literal":"a"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BIRD", "symbols": ["BIRD$string$14"]},
    {"name": "BIRD$string$15", "symbols": [{"literal":" "}, {"literal":"E"}, {"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "BIRD", "symbols": ["BIRD$string$15"]},
    {"name": "WEATHER$string$1", "symbols": [{"literal":" "}, {"literal":"S"}, {"literal":"n"}, {"literal":"o"}, {"literal":"w"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WEATHER", "symbols": ["WEATHER$string$1"]},
    {"name": "WEATHER$string$2", "symbols": [{"literal":" "}, {"literal":"R"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WEATHER", "symbols": ["WEATHER$string$2"]},
    {"name": "WEATHER$string$3", "symbols": [{"literal":" "}, {"literal":"N"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WEATHER", "symbols": ["WEATHER$string$3"]},
    {"name": "WEATHER$string$4", "symbols": [{"literal":" "}, {"literal":"S"}, {"literal":"u"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WEATHER", "symbols": ["WEATHER$string$4"]},
    {"name": "WEATHER$string$5", "symbols": [{"literal":" "}, {"literal":"S"}, {"literal":"h"}, {"literal":"a"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WEATHER", "symbols": ["WEATHER$string$5"]},
    {"name": "WEATHER$string$6", "symbols": [{"literal":" "}, {"literal":"C"}, {"literal":"l"}, {"literal":"o"}, {"literal":"u"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "WEATHER", "symbols": ["WEATHER$string$6"]},
    {"name": "CLOTHING$string$1", "symbols": [{"literal":" "}, {"literal":"R"}, {"literal":"o"}, {"literal":"b"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLOTHING", "symbols": ["CLOTHING$string$1"]},
    {"name": "CLOTHING$string$2", "symbols": [{"literal":" "}, {"literal":"S"}, {"literal":"l"}, {"literal":"e"}, {"literal":"e"}, {"literal":"v"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLOTHING", "symbols": ["CLOTHING$string$2"]},
    {"name": "CLOTHING$string$3", "symbols": [{"literal":" "}, {"literal":"G"}, {"literal":"o"}, {"literal":"w"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLOTHING", "symbols": ["CLOTHING$string$3"]},
    {"name": "CLOTHING$string$4", "symbols": [{"literal":" "}, {"literal":"H"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLOTHING", "symbols": ["CLOTHING$string$4"]},
    {"name": "CLOTHING$string$5", "symbols": [{"literal":" "}, {"literal":"C"}, {"literal":"o"}, {"literal":"w"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLOTHING", "symbols": ["CLOTHING$string$5"]},
    {"name": "CLOTHING$string$6", "symbols": [{"literal":" "}, {"literal":"V"}, {"literal":"e"}, {"literal":"i"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLOTHING", "symbols": ["CLOTHING$string$6"]},
    {"name": "CLOTHING$string$7", "symbols": [{"literal":" "}, {"literal":"S"}, {"literal":"h"}, {"literal":"a"}, {"literal":"w"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLOTHING", "symbols": ["CLOTHING$string$7"]},
    {"name": "CLOTHING$string$8", "symbols": [{"literal":" "}, {"literal":"S"}, {"literal":"l"}, {"literal":"i"}, {"literal":"p"}, {"literal":"p"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLOTHING", "symbols": ["CLOTHING$string$8"]},
    {"name": "CLOTHING$string$9", "symbols": [{"literal":" "}, {"literal":"S"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLOTHING", "symbols": ["CLOTHING$string$9"]}
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
