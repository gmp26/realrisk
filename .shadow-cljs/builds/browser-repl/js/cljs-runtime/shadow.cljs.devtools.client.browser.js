goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35828 = arguments.length;
var i__4731__auto___35829 = (0);
while(true){
if((i__4731__auto___35829 < len__4730__auto___35828)){
args__4736__auto__.push((arguments[i__4731__auto___35829]));

var G__35830 = (i__4731__auto___35829 + (1));
i__4731__auto___35829 = G__35830;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35649){
var G__35650 = cljs.core.first(seq35649);
var seq35649__$1 = cljs.core.next(seq35649);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35650,seq35649__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__35662){
var map__35663 = p__35662;
var map__35663__$1 = (((((!((map__35663 == null))))?(((((map__35663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35663):map__35663);
var src = map__35663__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35663__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35663__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35665 = cljs.core.seq(sources);
var chunk__35666 = null;
var count__35667 = (0);
var i__35668 = (0);
while(true){
if((i__35668 < count__35667)){
var map__35677 = chunk__35666.cljs$core$IIndexed$_nth$arity$2(null,i__35668);
var map__35677__$1 = (((((!((map__35677 == null))))?(((((map__35677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35677):map__35677);
var src = map__35677__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35677__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35677__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35677__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35677__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35679){var e_35831 = e35679;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35831);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35831.message)].join('')));
}

var G__35832 = seq__35665;
var G__35833 = chunk__35666;
var G__35834 = count__35667;
var G__35835 = (i__35668 + (1));
seq__35665 = G__35832;
chunk__35666 = G__35833;
count__35667 = G__35834;
i__35668 = G__35835;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35665);
if(temp__5735__auto__){
var seq__35665__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35665__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35665__$1);
var G__35836 = cljs.core.chunk_rest(seq__35665__$1);
var G__35837 = c__4550__auto__;
var G__35838 = cljs.core.count(c__4550__auto__);
var G__35839 = (0);
seq__35665 = G__35836;
chunk__35666 = G__35837;
count__35667 = G__35838;
i__35668 = G__35839;
continue;
} else {
var map__35680 = cljs.core.first(seq__35665__$1);
var map__35680__$1 = (((((!((map__35680 == null))))?(((((map__35680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35680):map__35680);
var src = map__35680__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35680__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35680__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35680__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35680__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35683){var e_35840 = e35683;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35840);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35840.message)].join('')));
}

var G__35841 = cljs.core.next(seq__35665__$1);
var G__35842 = null;
var G__35843 = (0);
var G__35844 = (0);
seq__35665 = G__35841;
chunk__35666 = G__35842;
count__35667 = G__35843;
i__35668 = G__35844;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35685 = cljs.core.seq(js_requires);
var chunk__35686 = null;
var count__35687 = (0);
var i__35688 = (0);
while(true){
if((i__35688 < count__35687)){
var js_ns = chunk__35686.cljs$core$IIndexed$_nth$arity$2(null,i__35688);
var require_str_35845 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35845);


var G__35846 = seq__35685;
var G__35847 = chunk__35686;
var G__35848 = count__35687;
var G__35849 = (i__35688 + (1));
seq__35685 = G__35846;
chunk__35686 = G__35847;
count__35687 = G__35848;
i__35688 = G__35849;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35685);
if(temp__5735__auto__){
var seq__35685__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35685__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35685__$1);
var G__35850 = cljs.core.chunk_rest(seq__35685__$1);
var G__35851 = c__4550__auto__;
var G__35852 = cljs.core.count(c__4550__auto__);
var G__35853 = (0);
seq__35685 = G__35850;
chunk__35686 = G__35851;
count__35687 = G__35852;
i__35688 = G__35853;
continue;
} else {
var js_ns = cljs.core.first(seq__35685__$1);
var require_str_35854 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35854);


var G__35855 = cljs.core.next(seq__35685__$1);
var G__35856 = null;
var G__35857 = (0);
var G__35858 = (0);
seq__35685 = G__35855;
chunk__35686 = G__35856;
count__35687 = G__35857;
i__35688 = G__35858;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__35691 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35691) : callback.call(null,G__35691));
} else {
var G__35693 = shadow.cljs.devtools.client.env.files_url();
var G__35694 = ((function (G__35693){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__35693))
;
var G__35695 = "POST";
var G__35696 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__35697 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35693,G__35694,G__35695,G__35696,G__35697);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35705){
var map__35706 = p__35705;
var map__35706__$1 = (((((!((map__35706 == null))))?(((((map__35706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35706):map__35706);
var msg = map__35706__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35706__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35706__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__35708 = info;
var map__35708__$1 = (((((!((map__35708 == null))))?(((((map__35708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35708):map__35708);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35708__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35708__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__35708,map__35708__$1,sources,compiled,map__35706,map__35706__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35710(s__35711){
return (new cljs.core.LazySeq(null,((function (map__35708,map__35708__$1,sources,compiled,map__35706,map__35706__$1,msg,info,reload_info){
return (function (){
var s__35711__$1 = s__35711;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35711__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35716 = cljs.core.first(xs__6292__auto__);
var map__35716__$1 = (((((!((map__35716 == null))))?(((((map__35716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35716):map__35716);
var src = map__35716__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35716__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35716__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__35711__$1,map__35716,map__35716__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35708,map__35708__$1,sources,compiled,map__35706,map__35706__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35710_$_iter__35712(s__35713){
return (new cljs.core.LazySeq(null,((function (s__35711__$1,map__35716,map__35716__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35708,map__35708__$1,sources,compiled,map__35706,map__35706__$1,msg,info,reload_info){
return (function (){
var s__35713__$1 = s__35713;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35713__$1);
if(temp__5735__auto____$1){
var s__35713__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35713__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35713__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35715 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35714 = (0);
while(true){
if((i__35714 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35714);
cljs.core.chunk_append(b__35715,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35859 = (i__35714 + (1));
i__35714 = G__35859;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35715),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35710_$_iter__35712(cljs.core.chunk_rest(s__35713__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35715),null);
}
} else {
var warning = cljs.core.first(s__35713__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35710_$_iter__35712(cljs.core.rest(s__35713__$2)));
}
} else {
return null;
}
break;
}
});})(s__35711__$1,map__35716,map__35716__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35708,map__35708__$1,sources,compiled,map__35706,map__35706__$1,msg,info,reload_info))
,null,null));
});})(s__35711__$1,map__35716,map__35716__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35708,map__35708__$1,sources,compiled,map__35706,map__35706__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35710(cljs.core.rest(s__35711__$1)));
} else {
var G__35860 = cljs.core.rest(s__35711__$1);
s__35711__$1 = G__35860;
continue;
}
} else {
var G__35861 = cljs.core.rest(s__35711__$1);
s__35711__$1 = G__35861;
continue;
}
} else {
return null;
}
break;
}
});})(map__35708,map__35708__$1,sources,compiled,map__35706,map__35706__$1,msg,info,reload_info))
,null,null));
});})(map__35708,map__35708__$1,sources,compiled,map__35706,map__35706__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__35720_35862 = cljs.core.seq(warnings);
var chunk__35721_35863 = null;
var count__35722_35864 = (0);
var i__35723_35865 = (0);
while(true){
if((i__35723_35865 < count__35722_35864)){
var map__35731_35866 = chunk__35721_35863.cljs$core$IIndexed$_nth$arity$2(null,i__35723_35865);
var map__35731_35867__$1 = (((((!((map__35731_35866 == null))))?(((((map__35731_35866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35731_35866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35731_35866):map__35731_35866);
var w_35868 = map__35731_35867__$1;
var msg_35869__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35731_35867__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35731_35867__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35731_35867__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35731_35867__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35872)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35870),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35871),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35869__$1)].join(''));


var G__35873 = seq__35720_35862;
var G__35874 = chunk__35721_35863;
var G__35875 = count__35722_35864;
var G__35876 = (i__35723_35865 + (1));
seq__35720_35862 = G__35873;
chunk__35721_35863 = G__35874;
count__35722_35864 = G__35875;
i__35723_35865 = G__35876;
continue;
} else {
var temp__5735__auto___35877 = cljs.core.seq(seq__35720_35862);
if(temp__5735__auto___35877){
var seq__35720_35878__$1 = temp__5735__auto___35877;
if(cljs.core.chunked_seq_QMARK_(seq__35720_35878__$1)){
var c__4550__auto___35879 = cljs.core.chunk_first(seq__35720_35878__$1);
var G__35880 = cljs.core.chunk_rest(seq__35720_35878__$1);
var G__35881 = c__4550__auto___35879;
var G__35882 = cljs.core.count(c__4550__auto___35879);
var G__35883 = (0);
seq__35720_35862 = G__35880;
chunk__35721_35863 = G__35881;
count__35722_35864 = G__35882;
i__35723_35865 = G__35883;
continue;
} else {
var map__35733_35884 = cljs.core.first(seq__35720_35878__$1);
var map__35733_35885__$1 = (((((!((map__35733_35884 == null))))?(((((map__35733_35884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35733_35884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35733_35884):map__35733_35884);
var w_35886 = map__35733_35885__$1;
var msg_35887__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35733_35885__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35733_35885__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35733_35885__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35733_35885__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35890)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35888),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35889),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35887__$1)].join(''));


var G__35891 = cljs.core.next(seq__35720_35878__$1);
var G__35892 = null;
var G__35893 = (0);
var G__35894 = (0);
seq__35720_35862 = G__35891;
chunk__35721_35863 = G__35892;
count__35722_35864 = G__35893;
i__35723_35865 = G__35894;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35708,map__35708__$1,sources,compiled,warnings,map__35706,map__35706__$1,msg,info,reload_info){
return (function (p__35736){
var map__35737 = p__35736;
var map__35737__$1 = (((((!((map__35737 == null))))?(((((map__35737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35737):map__35737);
var src = map__35737__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35737__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35737__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__35708,map__35708__$1,sources,compiled,warnings,map__35706,map__35706__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35708,map__35708__$1,sources,compiled,warnings,map__35706,map__35706__$1,msg,info,reload_info){
return (function (p__35739){
var map__35740 = p__35739;
var map__35740__$1 = (((((!((map__35740 == null))))?(((((map__35740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35740):map__35740);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35740__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__35708,map__35708__$1,sources,compiled,warnings,map__35706,map__35706__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35708,map__35708__$1,sources,compiled,warnings,map__35706,map__35706__$1,msg,info,reload_info){
return (function (p__35742){
var map__35743 = p__35742;
var map__35743__$1 = (((((!((map__35743 == null))))?(((((map__35743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35743):map__35743);
var rc = map__35743__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35743__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__35708,map__35708__$1,sources,compiled,warnings,map__35706,map__35706__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__35708,map__35708__$1,sources,compiled,warnings,map__35706,map__35706__$1,msg,info,reload_info){
return (function (p1__35704_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35704_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__35708,map__35708__$1,sources,compiled,warnings,map__35706,map__35706__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35745){
var map__35746 = p__35745;
var map__35746__$1 = (((((!((map__35746 == null))))?(((((map__35746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35746):map__35746);
var msg = map__35746__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35746__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35748 = cljs.core.seq(updates);
var chunk__35750 = null;
var count__35751 = (0);
var i__35752 = (0);
while(true){
if((i__35752 < count__35751)){
var path = chunk__35750.cljs$core$IIndexed$_nth$arity$2(null,i__35752);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35778_35895 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35781_35896 = null;
var count__35782_35897 = (0);
var i__35783_35898 = (0);
while(true){
if((i__35783_35898 < count__35782_35897)){
var node_35899 = chunk__35781_35896.cljs$core$IIndexed$_nth$arity$2(null,i__35783_35898);
var path_match_35900 = shadow.cljs.devtools.client.browser.match_paths(node_35899.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35900)){
var new_link_35901 = (function (){var G__35788 = node_35899.cloneNode(true);
G__35788.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35900),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35788;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35900], 0));

goog.dom.insertSiblingAfter(new_link_35901,node_35899);

goog.dom.removeNode(node_35899);


var G__35902 = seq__35778_35895;
var G__35903 = chunk__35781_35896;
var G__35904 = count__35782_35897;
var G__35905 = (i__35783_35898 + (1));
seq__35778_35895 = G__35902;
chunk__35781_35896 = G__35903;
count__35782_35897 = G__35904;
i__35783_35898 = G__35905;
continue;
} else {
var G__35906 = seq__35778_35895;
var G__35907 = chunk__35781_35896;
var G__35908 = count__35782_35897;
var G__35909 = (i__35783_35898 + (1));
seq__35778_35895 = G__35906;
chunk__35781_35896 = G__35907;
count__35782_35897 = G__35908;
i__35783_35898 = G__35909;
continue;
}
} else {
var temp__5735__auto___35910 = cljs.core.seq(seq__35778_35895);
if(temp__5735__auto___35910){
var seq__35778_35911__$1 = temp__5735__auto___35910;
if(cljs.core.chunked_seq_QMARK_(seq__35778_35911__$1)){
var c__4550__auto___35912 = cljs.core.chunk_first(seq__35778_35911__$1);
var G__35913 = cljs.core.chunk_rest(seq__35778_35911__$1);
var G__35914 = c__4550__auto___35912;
var G__35915 = cljs.core.count(c__4550__auto___35912);
var G__35916 = (0);
seq__35778_35895 = G__35913;
chunk__35781_35896 = G__35914;
count__35782_35897 = G__35915;
i__35783_35898 = G__35916;
continue;
} else {
var node_35917 = cljs.core.first(seq__35778_35911__$1);
var path_match_35918 = shadow.cljs.devtools.client.browser.match_paths(node_35917.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35918)){
var new_link_35919 = (function (){var G__35789 = node_35917.cloneNode(true);
G__35789.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35918),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35789;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35918], 0));

goog.dom.insertSiblingAfter(new_link_35919,node_35917);

goog.dom.removeNode(node_35917);


var G__35920 = cljs.core.next(seq__35778_35911__$1);
var G__35921 = null;
var G__35922 = (0);
var G__35923 = (0);
seq__35778_35895 = G__35920;
chunk__35781_35896 = G__35921;
count__35782_35897 = G__35922;
i__35783_35898 = G__35923;
continue;
} else {
var G__35924 = cljs.core.next(seq__35778_35911__$1);
var G__35925 = null;
var G__35926 = (0);
var G__35927 = (0);
seq__35778_35895 = G__35924;
chunk__35781_35896 = G__35925;
count__35782_35897 = G__35926;
i__35783_35898 = G__35927;
continue;
}
}
} else {
}
}
break;
}


var G__35928 = seq__35748;
var G__35929 = chunk__35750;
var G__35930 = count__35751;
var G__35931 = (i__35752 + (1));
seq__35748 = G__35928;
chunk__35750 = G__35929;
count__35751 = G__35930;
i__35752 = G__35931;
continue;
} else {
var G__35932 = seq__35748;
var G__35933 = chunk__35750;
var G__35934 = count__35751;
var G__35935 = (i__35752 + (1));
seq__35748 = G__35932;
chunk__35750 = G__35933;
count__35751 = G__35934;
i__35752 = G__35935;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35748);
if(temp__5735__auto__){
var seq__35748__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35748__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35748__$1);
var G__35936 = cljs.core.chunk_rest(seq__35748__$1);
var G__35937 = c__4550__auto__;
var G__35938 = cljs.core.count(c__4550__auto__);
var G__35939 = (0);
seq__35748 = G__35936;
chunk__35750 = G__35937;
count__35751 = G__35938;
i__35752 = G__35939;
continue;
} else {
var path = cljs.core.first(seq__35748__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35790_35940 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35793_35941 = null;
var count__35794_35942 = (0);
var i__35795_35943 = (0);
while(true){
if((i__35795_35943 < count__35794_35942)){
var node_35944 = chunk__35793_35941.cljs$core$IIndexed$_nth$arity$2(null,i__35795_35943);
var path_match_35945 = shadow.cljs.devtools.client.browser.match_paths(node_35944.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35945)){
var new_link_35946 = (function (){var G__35800 = node_35944.cloneNode(true);
G__35800.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35945),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35800;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35945], 0));

goog.dom.insertSiblingAfter(new_link_35946,node_35944);

goog.dom.removeNode(node_35944);


var G__35947 = seq__35790_35940;
var G__35948 = chunk__35793_35941;
var G__35949 = count__35794_35942;
var G__35950 = (i__35795_35943 + (1));
seq__35790_35940 = G__35947;
chunk__35793_35941 = G__35948;
count__35794_35942 = G__35949;
i__35795_35943 = G__35950;
continue;
} else {
var G__35951 = seq__35790_35940;
var G__35952 = chunk__35793_35941;
var G__35953 = count__35794_35942;
var G__35954 = (i__35795_35943 + (1));
seq__35790_35940 = G__35951;
chunk__35793_35941 = G__35952;
count__35794_35942 = G__35953;
i__35795_35943 = G__35954;
continue;
}
} else {
var temp__5735__auto___35955__$1 = cljs.core.seq(seq__35790_35940);
if(temp__5735__auto___35955__$1){
var seq__35790_35956__$1 = temp__5735__auto___35955__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35790_35956__$1)){
var c__4550__auto___35957 = cljs.core.chunk_first(seq__35790_35956__$1);
var G__35958 = cljs.core.chunk_rest(seq__35790_35956__$1);
var G__35959 = c__4550__auto___35957;
var G__35960 = cljs.core.count(c__4550__auto___35957);
var G__35961 = (0);
seq__35790_35940 = G__35958;
chunk__35793_35941 = G__35959;
count__35794_35942 = G__35960;
i__35795_35943 = G__35961;
continue;
} else {
var node_35962 = cljs.core.first(seq__35790_35956__$1);
var path_match_35963 = shadow.cljs.devtools.client.browser.match_paths(node_35962.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35963)){
var new_link_35964 = (function (){var G__35801 = node_35962.cloneNode(true);
G__35801.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35963),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35801;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35963], 0));

goog.dom.insertSiblingAfter(new_link_35964,node_35962);

goog.dom.removeNode(node_35962);


var G__35965 = cljs.core.next(seq__35790_35956__$1);
var G__35966 = null;
var G__35967 = (0);
var G__35968 = (0);
seq__35790_35940 = G__35965;
chunk__35793_35941 = G__35966;
count__35794_35942 = G__35967;
i__35795_35943 = G__35968;
continue;
} else {
var G__35969 = cljs.core.next(seq__35790_35956__$1);
var G__35970 = null;
var G__35971 = (0);
var G__35972 = (0);
seq__35790_35940 = G__35969;
chunk__35793_35941 = G__35970;
count__35794_35942 = G__35971;
i__35795_35943 = G__35972;
continue;
}
}
} else {
}
}
break;
}


var G__35973 = cljs.core.next(seq__35748__$1);
var G__35974 = null;
var G__35975 = (0);
var G__35976 = (0);
seq__35748 = G__35973;
chunk__35750 = G__35974;
count__35751 = G__35975;
i__35752 = G__35976;
continue;
} else {
var G__35977 = cljs.core.next(seq__35748__$1);
var G__35978 = null;
var G__35979 = (0);
var G__35980 = (0);
seq__35748 = G__35977;
chunk__35750 = G__35978;
count__35751 = G__35979;
i__35752 = G__35980;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
return (0,eval)(js);;
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__35802){
var map__35803 = p__35802;
var map__35803__$1 = (((((!((map__35803 == null))))?(((((map__35803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35803):map__35803);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35803__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35803__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__35803,map__35803__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__35803,map__35803__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__35805,done){
var map__35806 = p__35805;
var map__35806__$1 = (((((!((map__35806 == null))))?(((((map__35806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35806):map__35806);
var msg = map__35806__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35806__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35806__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35806__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35806__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35806,map__35806__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__35808){
var map__35809 = p__35808;
var map__35809__$1 = (((((!((map__35809 == null))))?(((((map__35809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35809):map__35809);
var src = map__35809__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35809__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__35806,map__35806__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__35806,map__35806__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e35811){var e = e35811;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__35806,map__35806__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__35812,done){
var map__35813 = p__35812;
var map__35813__$1 = (((((!((map__35813 == null))))?(((((map__35813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35813):map__35813);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35813__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35813__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__35813,map__35813__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__35813,map__35813__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35815){
var map__35816 = p__35815;
var map__35816__$1 = (((((!((map__35816 == null))))?(((((map__35816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35816):map__35816);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35816__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35816__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35818,done){
var map__35819 = p__35818;
var map__35819__$1 = (((((!((map__35819 == null))))?(((((map__35819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35819):map__35819);
var msg = map__35819__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35819__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35821_35981 = type;
var G__35821_35982__$1 = (((G__35821_35981 instanceof cljs.core.Keyword))?G__35821_35981.fqn:null);
switch (G__35821_35982__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__35822 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__35823 = ((function (G__35822){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__35822))
;
var G__35824 = "POST";
var G__35825 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__35826 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35822,G__35823,G__35824,G__35825,G__35826);
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

return socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;
}catch (e35827){var e = e35827;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___35984 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___35984)){
var s_35985 = temp__5735__auto___35984;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_35985.onclose = ((function (s_35985,temp__5735__auto___35984){
return (function (e){
return null;
});})(s_35985,temp__5735__auto___35984))
;

s_35985.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
