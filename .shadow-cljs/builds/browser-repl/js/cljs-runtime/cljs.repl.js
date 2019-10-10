goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26904){
var map__26905 = p__26904;
var map__26905__$1 = (((((!((map__26905 == null))))?(((((map__26905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26905):map__26905);
var m = map__26905__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26905__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26905__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26907_27060 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26908_27061 = null;
var count__26909_27062 = (0);
var i__26910_27063 = (0);
while(true){
if((i__26910_27063 < count__26909_27062)){
var f_27064 = chunk__26908_27061.cljs$core$IIndexed$_nth$arity$2(null,i__26910_27063);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27064], 0));


var G__27065 = seq__26907_27060;
var G__27066 = chunk__26908_27061;
var G__27067 = count__26909_27062;
var G__27068 = (i__26910_27063 + (1));
seq__26907_27060 = G__27065;
chunk__26908_27061 = G__27066;
count__26909_27062 = G__27067;
i__26910_27063 = G__27068;
continue;
} else {
var temp__5735__auto___27069 = cljs.core.seq(seq__26907_27060);
if(temp__5735__auto___27069){
var seq__26907_27070__$1 = temp__5735__auto___27069;
if(cljs.core.chunked_seq_QMARK_(seq__26907_27070__$1)){
var c__4550__auto___27071 = cljs.core.chunk_first(seq__26907_27070__$1);
var G__27072 = cljs.core.chunk_rest(seq__26907_27070__$1);
var G__27073 = c__4550__auto___27071;
var G__27074 = cljs.core.count(c__4550__auto___27071);
var G__27075 = (0);
seq__26907_27060 = G__27072;
chunk__26908_27061 = G__27073;
count__26909_27062 = G__27074;
i__26910_27063 = G__27075;
continue;
} else {
var f_27076 = cljs.core.first(seq__26907_27070__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27076], 0));


var G__27077 = cljs.core.next(seq__26907_27070__$1);
var G__27078 = null;
var G__27079 = (0);
var G__27080 = (0);
seq__26907_27060 = G__27077;
chunk__26908_27061 = G__27078;
count__26909_27062 = G__27079;
i__26910_27063 = G__27080;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27084 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_27084], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_27084)))?cljs.core.second(arglists_27084):arglists_27084)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26915_27110 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26916_27111 = null;
var count__26917_27112 = (0);
var i__26918_27113 = (0);
while(true){
if((i__26918_27113 < count__26917_27112)){
var vec__26932_27114 = chunk__26916_27111.cljs$core$IIndexed$_nth$arity$2(null,i__26918_27113);
var name_27115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26932_27114,(0),null);
var map__26935_27116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26932_27114,(1),null);
var map__26935_27117__$1 = (((((!((map__26935_27116 == null))))?(((((map__26935_27116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26935_27116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26935_27116):map__26935_27116);
var doc_27118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26935_27117__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26935_27117__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27115], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27119], 0));

if(cljs.core.truth_(doc_27118)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27118], 0));
} else {
}


var G__27120 = seq__26915_27110;
var G__27121 = chunk__26916_27111;
var G__27122 = count__26917_27112;
var G__27123 = (i__26918_27113 + (1));
seq__26915_27110 = G__27120;
chunk__26916_27111 = G__27121;
count__26917_27112 = G__27122;
i__26918_27113 = G__27123;
continue;
} else {
var temp__5735__auto___27124 = cljs.core.seq(seq__26915_27110);
if(temp__5735__auto___27124){
var seq__26915_27129__$1 = temp__5735__auto___27124;
if(cljs.core.chunked_seq_QMARK_(seq__26915_27129__$1)){
var c__4550__auto___27130 = cljs.core.chunk_first(seq__26915_27129__$1);
var G__27134 = cljs.core.chunk_rest(seq__26915_27129__$1);
var G__27135 = c__4550__auto___27130;
var G__27136 = cljs.core.count(c__4550__auto___27130);
var G__27137 = (0);
seq__26915_27110 = G__27134;
chunk__26916_27111 = G__27135;
count__26917_27112 = G__27136;
i__26918_27113 = G__27137;
continue;
} else {
var vec__26938_27138 = cljs.core.first(seq__26915_27129__$1);
var name_27139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26938_27138,(0),null);
var map__26941_27140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26938_27138,(1),null);
var map__26941_27141__$1 = (((((!((map__26941_27140 == null))))?(((((map__26941_27140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26941_27140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26941_27140):map__26941_27140);
var doc_27142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26941_27141__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26941_27141__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27139], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27143], 0));

if(cljs.core.truth_(doc_27142)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27142], 0));
} else {
}


var G__27149 = cljs.core.next(seq__26915_27129__$1);
var G__27150 = null;
var G__27151 = (0);
var G__27152 = (0);
seq__26915_27110 = G__27149;
chunk__26916_27111 = G__27150;
count__26917_27112 = G__27151;
i__26918_27113 = G__27152;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__26947 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__26948 = null;
var count__26949 = (0);
var i__26950 = (0);
while(true){
if((i__26950 < count__26949)){
var role = chunk__26948.cljs$core$IIndexed$_nth$arity$2(null,i__26950);
var temp__5735__auto___27164__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___27164__$1)){
var spec_27165 = temp__5735__auto___27164__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27165)], 0));
} else {
}


var G__27166 = seq__26947;
var G__27167 = chunk__26948;
var G__27168 = count__26949;
var G__27169 = (i__26950 + (1));
seq__26947 = G__27166;
chunk__26948 = G__27167;
count__26949 = G__27168;
i__26950 = G__27169;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__26947);
if(temp__5735__auto____$1){
var seq__26947__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__26947__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__26947__$1);
var G__27170 = cljs.core.chunk_rest(seq__26947__$1);
var G__27171 = c__4550__auto__;
var G__27172 = cljs.core.count(c__4550__auto__);
var G__27173 = (0);
seq__26947 = G__27170;
chunk__26948 = G__27171;
count__26949 = G__27172;
i__26950 = G__27173;
continue;
} else {
var role = cljs.core.first(seq__26947__$1);
var temp__5735__auto___27186__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___27186__$2)){
var spec_27187 = temp__5735__auto___27186__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27187)], 0));
} else {
}


var G__27190 = cljs.core.next(seq__26947__$1);
var G__27191 = null;
var G__27192 = (0);
var G__27194 = (0);
seq__26947 = G__27190;
chunk__26948 = G__27191;
count__26949 = G__27192;
i__26950 = G__27194;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__27208 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__27209 = cljs.core.ex_cause(t);
via = G__27208;
t = G__27209;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__26964 = datafied_throwable;
var map__26964__$1 = (((((!((map__26964 == null))))?(((((map__26964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26964):map__26964);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26964__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26964__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26964__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__26965 = cljs.core.last(via);
var map__26965__$1 = (((((!((map__26965 == null))))?(((((map__26965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26965):map__26965);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26965__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26965__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26965__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__26966 = data;
var map__26966__$1 = (((((!((map__26966 == null))))?(((((map__26966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26966):map__26966);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26966__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26966__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26966__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__26967 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__26967__$1 = (((((!((map__26967 == null))))?(((((map__26967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26967):map__26967);
var top_data = map__26967__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26967__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__26972 = phase;
var G__26972__$1 = (((G__26972 instanceof cljs.core.Keyword))?G__26972.fqn:null);
switch (G__26972__$1) {
case "read-source":
var map__26973 = data;
var map__26973__$1 = (((((!((map__26973 == null))))?(((((map__26973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26973):map__26973);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26973__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26973__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__26975 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__26975__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26975,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26975);
var G__26975__$2 = (cljs.core.truth_((function (){var fexpr__26977 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26977.cljs$core$IFn$_invoke$arity$1 ? fexpr__26977.cljs$core$IFn$_invoke$arity$1(source) : fexpr__26977.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26975__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26975__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26975__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26975__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__26978 = top_data;
var G__26978__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26978,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26978);
var G__26978__$2 = (cljs.core.truth_((function (){var fexpr__26979 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26979.cljs$core$IFn$_invoke$arity$1 ? fexpr__26979.cljs$core$IFn$_invoke$arity$1(source) : fexpr__26979.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26978__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26978__$1);
var G__26978__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26978__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26978__$2);
var G__26978__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26978__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26978__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26978__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26978__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__26981 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26981,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26981,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26981,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26981,(3),null);
var G__26984 = top_data;
var G__26984__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26984,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__26984);
var G__26984__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26984__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__26984__$1);
var G__26984__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26984__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__26984__$2);
var G__26984__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26984__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26984__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26984__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26984__$4;
}

break;
case "execution":
var vec__26987 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26987,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26987,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26987,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26987,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__26987,source__$1,method,file,line,G__26972,G__26972__$1,map__26964,map__26964__$1,via,trace,phase,map__26965,map__26965__$1,type,message,data,map__26966,map__26966__$1,problems,fn,caller,map__26967,map__26967__$1,top_data,source){
return (function (p1__26961_SHARP_){
var or__4131__auto__ = (p1__26961_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__26991 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__26991.cljs$core$IFn$_invoke$arity$1 ? fexpr__26991.cljs$core$IFn$_invoke$arity$1(p1__26961_SHARP_) : fexpr__26991.call(null,p1__26961_SHARP_));
}
});})(vec__26987,source__$1,method,file,line,G__26972,G__26972__$1,map__26964,map__26964__$1,via,trace,phase,map__26965,map__26965__$1,type,message,data,map__26966,map__26966__$1,problems,fn,caller,map__26967,map__26967__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__26993 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__26993__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26993,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__26993);
var G__26993__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26993__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26993__$1);
var G__26993__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26993__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__26993__$2);
var G__26993__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26993__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__26993__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26993__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26993__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26972__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27000){
var map__27002 = p__27000;
var map__27002__$1 = (((((!((map__27002 == null))))?(((((map__27002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27002):map__27002);
var triage_data = map__27002__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27002__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27002__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27002__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27002__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27002__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27002__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27002__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27002__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__27006 = phase;
var G__27006__$1 = (((G__27006 instanceof cljs.core.Keyword))?G__27006.fqn:null);
switch (G__27006__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__27008 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__27009 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27010 = loc;
var G__27011 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27014_27303 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27015_27304 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27016_27305 = true;
var _STAR_print_fn_STAR__temp_val__27017_27306 = ((function (_STAR_print_newline_STAR__orig_val__27014_27303,_STAR_print_fn_STAR__orig_val__27015_27304,_STAR_print_newline_STAR__temp_val__27016_27305,sb__4661__auto__,G__27008,G__27009,G__27010,G__27006,G__27006__$1,loc,class_name,simple_class,cause_type,format,map__27002,map__27002__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27014_27303,_STAR_print_fn_STAR__orig_val__27015_27304,_STAR_print_newline_STAR__temp_val__27016_27305,sb__4661__auto__,G__27008,G__27009,G__27010,G__27006,G__27006__$1,loc,class_name,simple_class,cause_type,format,map__27002,map__27002__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27016_27305;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27017_27306;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__27014_27303,_STAR_print_fn_STAR__orig_val__27015_27304,_STAR_print_newline_STAR__temp_val__27016_27305,_STAR_print_fn_STAR__temp_val__27017_27306,sb__4661__auto__,G__27008,G__27009,G__27010,G__27006,G__27006__$1,loc,class_name,simple_class,cause_type,format,map__27002,map__27002__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__27014_27303,_STAR_print_fn_STAR__orig_val__27015_27304,_STAR_print_newline_STAR__temp_val__27016_27305,_STAR_print_fn_STAR__temp_val__27017_27306,sb__4661__auto__,G__27008,G__27009,G__27010,G__27006,G__27006__$1,loc,class_name,simple_class,cause_type,format,map__27002,map__27002__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__26997_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26997_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__27014_27303,_STAR_print_fn_STAR__orig_val__27015_27304,_STAR_print_newline_STAR__temp_val__27016_27305,_STAR_print_fn_STAR__temp_val__27017_27306,sb__4661__auto__,G__27008,G__27009,G__27010,G__27006,G__27006__$1,loc,class_name,simple_class,cause_type,format,map__27002,map__27002__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__27014_27303,_STAR_print_fn_STAR__orig_val__27015_27304,_STAR_print_newline_STAR__temp_val__27016_27305,_STAR_print_fn_STAR__temp_val__27017_27306,sb__4661__auto__,G__27008,G__27009,G__27010,G__27006,G__27006__$1,loc,class_name,simple_class,cause_type,format,map__27002,map__27002__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27015_27304;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27014_27303;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27008,G__27009,G__27010,G__27011) : format.call(null,G__27008,G__27009,G__27010,G__27011));

break;
case "macroexpansion":
var G__27023 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__27024 = cause_type;
var G__27025 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27026 = loc;
var G__27027 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27023,G__27024,G__27025,G__27026,G__27027) : format.call(null,G__27023,G__27024,G__27025,G__27026,G__27027));

break;
case "compile-syntax-check":
var G__27028 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__27029 = cause_type;
var G__27030 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27031 = loc;
var G__27032 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27028,G__27029,G__27030,G__27031,G__27032) : format.call(null,G__27028,G__27029,G__27030,G__27031,G__27032));

break;
case "compilation":
var G__27033 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__27034 = cause_type;
var G__27035 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27036 = loc;
var G__27037 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27033,G__27034,G__27035,G__27036,G__27037) : format.call(null,G__27033,G__27034,G__27035,G__27036,G__27037));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__27040 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__27041 = symbol;
var G__27042 = loc;
var G__27043 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27046_27315 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27047_27316 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27048_27317 = true;
var _STAR_print_fn_STAR__temp_val__27049_27318 = ((function (_STAR_print_newline_STAR__orig_val__27046_27315,_STAR_print_fn_STAR__orig_val__27047_27316,_STAR_print_newline_STAR__temp_val__27048_27317,sb__4661__auto__,G__27040,G__27041,G__27042,G__27006,G__27006__$1,loc,class_name,simple_class,cause_type,format,map__27002,map__27002__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27046_27315,_STAR_print_fn_STAR__orig_val__27047_27316,_STAR_print_newline_STAR__temp_val__27048_27317,sb__4661__auto__,G__27040,G__27041,G__27042,G__27006,G__27006__$1,loc,class_name,simple_class,cause_type,format,map__27002,map__27002__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27048_27317;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27049_27318;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__27046_27315,_STAR_print_fn_STAR__orig_val__27047_27316,_STAR_print_newline_STAR__temp_val__27048_27317,_STAR_print_fn_STAR__temp_val__27049_27318,sb__4661__auto__,G__27040,G__27041,G__27042,G__27006,G__27006__$1,loc,class_name,simple_class,cause_type,format,map__27002,map__27002__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__27046_27315,_STAR_print_fn_STAR__orig_val__27047_27316,_STAR_print_newline_STAR__temp_val__27048_27317,_STAR_print_fn_STAR__temp_val__27049_27318,sb__4661__auto__,G__27040,G__27041,G__27042,G__27006,G__27006__$1,loc,class_name,simple_class,cause_type,format,map__27002,map__27002__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__26998_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26998_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__27046_27315,_STAR_print_fn_STAR__orig_val__27047_27316,_STAR_print_newline_STAR__temp_val__27048_27317,_STAR_print_fn_STAR__temp_val__27049_27318,sb__4661__auto__,G__27040,G__27041,G__27042,G__27006,G__27006__$1,loc,class_name,simple_class,cause_type,format,map__27002,map__27002__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__27046_27315,_STAR_print_fn_STAR__orig_val__27047_27316,_STAR_print_newline_STAR__temp_val__27048_27317,_STAR_print_fn_STAR__temp_val__27049_27318,sb__4661__auto__,G__27040,G__27041,G__27042,G__27006,G__27006__$1,loc,class_name,simple_class,cause_type,format,map__27002,map__27002__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27047_27316;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27046_27315;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27040,G__27041,G__27042,G__27043) : format.call(null,G__27040,G__27041,G__27042,G__27043));
} else {
var G__27051 = "Execution error%s at %s(%s).\n%s\n";
var G__27052 = cause_type;
var G__27053 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27054 = loc;
var G__27055 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27051,G__27052,G__27053,G__27054,G__27055) : format.call(null,G__27051,G__27052,G__27053,G__27054,G__27055));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27006__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
