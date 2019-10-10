goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__34614){
var vec__34615 = p__34614;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34615,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34615,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__34618 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34618,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34618,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34618,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__34622 = arguments.length;
switch (G__34622) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__34631_34687 = clojure.data.equality_partition;
var G__34632_34688 = "null";
var G__34633_34689 = ((function (G__34631_34687,G__34632_34688){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__34631_34687,G__34632_34688))
;
goog.object.set(G__34631_34687,G__34632_34688,G__34633_34689);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__34636_34690 = clojure.data.equality_partition;
var G__34637_34691 = "string";
var G__34638_34692 = ((function (G__34636_34690,G__34637_34691){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__34636_34690,G__34637_34691))
;
goog.object.set(G__34636_34690,G__34637_34691,G__34638_34692);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__34641_34693 = clojure.data.equality_partition;
var G__34642_34694 = "number";
var G__34643_34695 = ((function (G__34641_34693,G__34642_34694){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__34641_34693,G__34642_34694))
;
goog.object.set(G__34641_34693,G__34642_34694,G__34643_34695);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__34644_34696 = clojure.data.equality_partition;
var G__34645_34697 = "array";
var G__34646_34698 = ((function (G__34644_34696,G__34645_34697){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__34644_34696,G__34645_34697))
;
goog.object.set(G__34644_34696,G__34645_34697,G__34646_34698);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__34648_34699 = clojure.data.equality_partition;
var G__34649_34700 = "function";
var G__34650_34701 = ((function (G__34648_34699,G__34649_34700){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__34648_34699,G__34649_34700))
;
goog.object.set(G__34648_34699,G__34649_34700,G__34650_34701);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__34651_34702 = clojure.data.equality_partition;
var G__34652_34703 = "boolean";
var G__34653_34704 = ((function (G__34651_34702,G__34652_34703){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__34651_34702,G__34652_34703))
;
goog.object.set(G__34651_34702,G__34652_34703,G__34653_34704);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__34655_34705 = clojure.data.equality_partition;
var G__34656_34706 = "_";
var G__34657_34707 = ((function (G__34655_34705,G__34656_34706){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__34655_34705,G__34656_34706))
;
goog.object.set(G__34655_34705,G__34656_34706,G__34657_34707);
goog.object.set(clojure.data.Diff,"null",true);

var G__34662_34708 = clojure.data.diff_similar;
var G__34663_34709 = "null";
var G__34664_34710 = ((function (G__34662_34708,G__34663_34709){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__34662_34708,G__34663_34709))
;
goog.object.set(G__34662_34708,G__34663_34709,G__34664_34710);

goog.object.set(clojure.data.Diff,"string",true);

var G__34665_34711 = clojure.data.diff_similar;
var G__34666_34712 = "string";
var G__34667_34713 = ((function (G__34665_34711,G__34666_34712){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__34665_34711,G__34666_34712))
;
goog.object.set(G__34665_34711,G__34666_34712,G__34667_34713);

goog.object.set(clojure.data.Diff,"number",true);

var G__34668_34714 = clojure.data.diff_similar;
var G__34669_34715 = "number";
var G__34670_34716 = ((function (G__34668_34714,G__34669_34715){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__34668_34714,G__34669_34715))
;
goog.object.set(G__34668_34714,G__34669_34715,G__34670_34716);

goog.object.set(clojure.data.Diff,"array",true);

var G__34671_34717 = clojure.data.diff_similar;
var G__34672_34718 = "array";
var G__34673_34719 = ((function (G__34671_34717,G__34672_34718){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__34671_34717,G__34672_34718))
;
goog.object.set(G__34671_34717,G__34672_34718,G__34673_34719);

goog.object.set(clojure.data.Diff,"function",true);

var G__34674_34720 = clojure.data.diff_similar;
var G__34675_34721 = "function";
var G__34676_34722 = ((function (G__34674_34720,G__34675_34721){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__34674_34720,G__34675_34721))
;
goog.object.set(G__34674_34720,G__34675_34721,G__34676_34722);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__34677_34723 = clojure.data.diff_similar;
var G__34678_34724 = "boolean";
var G__34679_34725 = ((function (G__34677_34723,G__34678_34724){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__34677_34723,G__34678_34724))
;
goog.object.set(G__34677_34723,G__34678_34724,G__34679_34725);

goog.object.set(clojure.data.Diff,"_",true);

var G__34680_34726 = clojure.data.diff_similar;
var G__34681_34727 = "_";
var G__34682_34728 = ((function (G__34680_34726,G__34681_34727){
return (function (a,b){
var fexpr__34684 = (function (){var G__34685 = clojure.data.equality_partition(a);
var G__34685__$1 = (((G__34685 instanceof cljs.core.Keyword))?G__34685.fqn:null);
switch (G__34685__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34685__$1)].join('')));

}
})();
return (fexpr__34684.cljs$core$IFn$_invoke$arity$2 ? fexpr__34684.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__34684.call(null,a,b));
});})(G__34680_34726,G__34681_34727))
;
goog.object.set(G__34680_34726,G__34681_34727,G__34682_34728);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
