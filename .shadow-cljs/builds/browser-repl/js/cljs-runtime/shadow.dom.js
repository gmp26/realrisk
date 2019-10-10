goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33453 = coll;
var G__33454 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33453,G__33454) : shadow.dom.lazy_native_coll_seq.call(null,G__33453,G__33454));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33457 = arguments.length;
switch (G__33457) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33459 = arguments.length;
switch (G__33459) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33461 = arguments.length;
switch (G__33461) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33467 = arguments.length;
switch (G__33467) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33471 = arguments.length;
switch (G__33471) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__33475 = document;
var G__33476 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33475,G__33476);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__33479 = shadow.dom.dom_node(parent);
var G__33480 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33479,G__33480);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__33482 = shadow.dom.dom_node(el);
var G__33483 = cls;
return goog.dom.classlist.add(G__33482,G__33483);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__33489 = shadow.dom.dom_node(el);
var G__33490 = cls;
return goog.dom.classlist.remove(G__33489,G__33490);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33495 = arguments.length;
switch (G__33495) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__33496 = shadow.dom.dom_node(el);
var G__33497 = cls;
return goog.dom.classlist.toggle(G__33496,G__33497);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33498){if((e33498 instanceof Object)){
var e = e33498;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33498;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33499 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33500 = null;
var count__33501 = (0);
var i__33502 = (0);
while(true){
if((i__33502 < count__33501)){
var el = chunk__33500.cljs$core$IIndexed$_nth$arity$2(null,i__33502);
var handler_34004__$1 = ((function (seq__33499,chunk__33500,count__33501,i__33502,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33499,chunk__33500,count__33501,i__33502,el))
;
var G__33509_34006 = el;
var G__33510_34007 = cljs.core.name(ev);
var G__33511_34008 = handler_34004__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33509_34006,G__33510_34007,G__33511_34008) : shadow.dom.dom_listen.call(null,G__33509_34006,G__33510_34007,G__33511_34008));


var G__34009 = seq__33499;
var G__34010 = chunk__33500;
var G__34011 = count__33501;
var G__34012 = (i__33502 + (1));
seq__33499 = G__34009;
chunk__33500 = G__34010;
count__33501 = G__34011;
i__33502 = G__34012;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33499);
if(temp__5735__auto__){
var seq__33499__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33499__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33499__$1);
var G__34015 = cljs.core.chunk_rest(seq__33499__$1);
var G__34016 = c__4550__auto__;
var G__34017 = cljs.core.count(c__4550__auto__);
var G__34018 = (0);
seq__33499 = G__34015;
chunk__33500 = G__34016;
count__33501 = G__34017;
i__33502 = G__34018;
continue;
} else {
var el = cljs.core.first(seq__33499__$1);
var handler_34019__$1 = ((function (seq__33499,chunk__33500,count__33501,i__33502,el,seq__33499__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33499,chunk__33500,count__33501,i__33502,el,seq__33499__$1,temp__5735__auto__))
;
var G__33512_34020 = el;
var G__33513_34021 = cljs.core.name(ev);
var G__33514_34022 = handler_34019__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33512_34020,G__33513_34021,G__33514_34022) : shadow.dom.dom_listen.call(null,G__33512_34020,G__33513_34021,G__33514_34022));


var G__34023 = cljs.core.next(seq__33499__$1);
var G__34024 = null;
var G__34025 = (0);
var G__34026 = (0);
seq__33499 = G__34023;
chunk__33500 = G__34024;
count__33501 = G__34025;
i__33502 = G__34026;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33518 = arguments.length;
switch (G__33518) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__33520 = shadow.dom.dom_node(el);
var G__33521 = cljs.core.name(ev);
var G__33522 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33520,G__33521,G__33522) : shadow.dom.dom_listen.call(null,G__33520,G__33521,G__33522));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__33523 = shadow.dom.dom_node(el);
var G__33524 = cljs.core.name(ev);
var G__33525 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__33523,G__33524,G__33525) : shadow.dom.dom_listen_remove.call(null,G__33523,G__33524,G__33525));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33528 = cljs.core.seq(events);
var chunk__33529 = null;
var count__33530 = (0);
var i__33531 = (0);
while(true){
if((i__33531 < count__33530)){
var vec__33544 = chunk__33529.cljs$core$IIndexed$_nth$arity$2(null,i__33531);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33544,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33544,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34036 = seq__33528;
var G__34037 = chunk__33529;
var G__34038 = count__33530;
var G__34039 = (i__33531 + (1));
seq__33528 = G__34036;
chunk__33529 = G__34037;
count__33530 = G__34038;
i__33531 = G__34039;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33528);
if(temp__5735__auto__){
var seq__33528__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33528__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33528__$1);
var G__34041 = cljs.core.chunk_rest(seq__33528__$1);
var G__34042 = c__4550__auto__;
var G__34043 = cljs.core.count(c__4550__auto__);
var G__34044 = (0);
seq__33528 = G__34041;
chunk__33529 = G__34042;
count__33530 = G__34043;
i__33531 = G__34044;
continue;
} else {
var vec__33547 = cljs.core.first(seq__33528__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33547,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33547,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34046 = cljs.core.next(seq__33528__$1);
var G__34047 = null;
var G__34048 = (0);
var G__34049 = (0);
seq__33528 = G__34046;
chunk__33529 = G__34047;
count__33530 = G__34048;
i__33531 = G__34049;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33552 = cljs.core.seq(styles);
var chunk__33553 = null;
var count__33554 = (0);
var i__33555 = (0);
while(true){
if((i__33555 < count__33554)){
var vec__33574 = chunk__33553.cljs$core$IIndexed$_nth$arity$2(null,i__33555);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33574,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33574,(1),null);
var G__33577_34054 = dom;
var G__33578_34055 = cljs.core.name(k);
var G__33579_34056 = (((v == null))?"":v);
goog.style.setStyle(G__33577_34054,G__33578_34055,G__33579_34056);


var G__34057 = seq__33552;
var G__34058 = chunk__33553;
var G__34059 = count__33554;
var G__34060 = (i__33555 + (1));
seq__33552 = G__34057;
chunk__33553 = G__34058;
count__33554 = G__34059;
i__33555 = G__34060;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33552);
if(temp__5735__auto__){
var seq__33552__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33552__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33552__$1);
var G__34063 = cljs.core.chunk_rest(seq__33552__$1);
var G__34064 = c__4550__auto__;
var G__34065 = cljs.core.count(c__4550__auto__);
var G__34066 = (0);
seq__33552 = G__34063;
chunk__33553 = G__34064;
count__33554 = G__34065;
i__33555 = G__34066;
continue;
} else {
var vec__33581 = cljs.core.first(seq__33552__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33581,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33581,(1),null);
var G__33584_34068 = dom;
var G__33585_34069 = cljs.core.name(k);
var G__33586_34070 = (((v == null))?"":v);
goog.style.setStyle(G__33584_34068,G__33585_34069,G__33586_34070);


var G__34071 = cljs.core.next(seq__33552__$1);
var G__34072 = null;
var G__34073 = (0);
var G__34074 = (0);
seq__33552 = G__34071;
chunk__33553 = G__34072;
count__33554 = G__34073;
i__33555 = G__34074;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33587_34075 = key;
var G__33587_34076__$1 = (((G__33587_34075 instanceof cljs.core.Keyword))?G__33587_34075.fqn:null);
switch (G__33587_34076__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34078 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_34078,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_34078,"aria-");
}
})())){
el.setAttribute(ks_34078,value);
} else {
(el[ks_34078] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__33588 = shadow.dom.dom_node(el);
var G__33589 = cls;
return goog.dom.classlist.contains(G__33588,G__33589);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33590){
var map__33591 = p__33590;
var map__33591__$1 = (((((!((map__33591 == null))))?(((((map__33591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33591):map__33591);
var props = map__33591__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33591__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33593 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33593,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33593,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33593,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33596 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33596,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33596;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33599 = arguments.length;
switch (G__33599) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33607){
var vec__33608 = p__33607;
var seq__33609 = cljs.core.seq(vec__33608);
var first__33610 = cljs.core.first(seq__33609);
var seq__33609__$1 = cljs.core.next(seq__33609);
var nn = first__33610;
var first__33610__$1 = cljs.core.first(seq__33609__$1);
var seq__33609__$2 = cljs.core.next(seq__33609__$1);
var np = first__33610__$1;
var nc = seq__33609__$2;
var node = vec__33608;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33613 = nn;
var G__33614 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33613,G__33614) : create_fn.call(null,G__33613,G__33614));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33616 = nn;
var G__33617 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33616,G__33617) : create_fn.call(null,G__33616,G__33617));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33621 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33621,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33621,(1),null);
var seq__33624_34080 = cljs.core.seq(node_children);
var chunk__33625_34081 = null;
var count__33626_34082 = (0);
var i__33627_34083 = (0);
while(true){
if((i__33627_34083 < count__33626_34082)){
var child_struct_34084 = chunk__33625_34081.cljs$core$IIndexed$_nth$arity$2(null,i__33627_34083);
var children_34085 = shadow.dom.dom_node(child_struct_34084);
if(cljs.core.seq_QMARK_(children_34085)){
var seq__33650_34086 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34085));
var chunk__33652_34087 = null;
var count__33653_34088 = (0);
var i__33654_34089 = (0);
while(true){
if((i__33654_34089 < count__33653_34088)){
var child_34090 = chunk__33652_34087.cljs$core$IIndexed$_nth$arity$2(null,i__33654_34089);
if(cljs.core.truth_(child_34090)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34090);


var G__34092 = seq__33650_34086;
var G__34093 = chunk__33652_34087;
var G__34094 = count__33653_34088;
var G__34095 = (i__33654_34089 + (1));
seq__33650_34086 = G__34092;
chunk__33652_34087 = G__34093;
count__33653_34088 = G__34094;
i__33654_34089 = G__34095;
continue;
} else {
var G__34097 = seq__33650_34086;
var G__34098 = chunk__33652_34087;
var G__34099 = count__33653_34088;
var G__34100 = (i__33654_34089 + (1));
seq__33650_34086 = G__34097;
chunk__33652_34087 = G__34098;
count__33653_34088 = G__34099;
i__33654_34089 = G__34100;
continue;
}
} else {
var temp__5735__auto___34102 = cljs.core.seq(seq__33650_34086);
if(temp__5735__auto___34102){
var seq__33650_34103__$1 = temp__5735__auto___34102;
if(cljs.core.chunked_seq_QMARK_(seq__33650_34103__$1)){
var c__4550__auto___34104 = cljs.core.chunk_first(seq__33650_34103__$1);
var G__34105 = cljs.core.chunk_rest(seq__33650_34103__$1);
var G__34106 = c__4550__auto___34104;
var G__34107 = cljs.core.count(c__4550__auto___34104);
var G__34108 = (0);
seq__33650_34086 = G__34105;
chunk__33652_34087 = G__34106;
count__33653_34088 = G__34107;
i__33654_34089 = G__34108;
continue;
} else {
var child_34110 = cljs.core.first(seq__33650_34103__$1);
if(cljs.core.truth_(child_34110)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34110);


var G__34111 = cljs.core.next(seq__33650_34103__$1);
var G__34112 = null;
var G__34113 = (0);
var G__34114 = (0);
seq__33650_34086 = G__34111;
chunk__33652_34087 = G__34112;
count__33653_34088 = G__34113;
i__33654_34089 = G__34114;
continue;
} else {
var G__34116 = cljs.core.next(seq__33650_34103__$1);
var G__34117 = null;
var G__34118 = (0);
var G__34119 = (0);
seq__33650_34086 = G__34116;
chunk__33652_34087 = G__34117;
count__33653_34088 = G__34118;
i__33654_34089 = G__34119;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34085);
}


var G__34120 = seq__33624_34080;
var G__34121 = chunk__33625_34081;
var G__34122 = count__33626_34082;
var G__34123 = (i__33627_34083 + (1));
seq__33624_34080 = G__34120;
chunk__33625_34081 = G__34121;
count__33626_34082 = G__34122;
i__33627_34083 = G__34123;
continue;
} else {
var temp__5735__auto___34125 = cljs.core.seq(seq__33624_34080);
if(temp__5735__auto___34125){
var seq__33624_34126__$1 = temp__5735__auto___34125;
if(cljs.core.chunked_seq_QMARK_(seq__33624_34126__$1)){
var c__4550__auto___34128 = cljs.core.chunk_first(seq__33624_34126__$1);
var G__34129 = cljs.core.chunk_rest(seq__33624_34126__$1);
var G__34130 = c__4550__auto___34128;
var G__34131 = cljs.core.count(c__4550__auto___34128);
var G__34132 = (0);
seq__33624_34080 = G__34129;
chunk__33625_34081 = G__34130;
count__33626_34082 = G__34131;
i__33627_34083 = G__34132;
continue;
} else {
var child_struct_34134 = cljs.core.first(seq__33624_34126__$1);
var children_34135 = shadow.dom.dom_node(child_struct_34134);
if(cljs.core.seq_QMARK_(children_34135)){
var seq__33656_34136 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34135));
var chunk__33658_34137 = null;
var count__33659_34138 = (0);
var i__33660_34139 = (0);
while(true){
if((i__33660_34139 < count__33659_34138)){
var child_34140 = chunk__33658_34137.cljs$core$IIndexed$_nth$arity$2(null,i__33660_34139);
if(cljs.core.truth_(child_34140)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34140);


var G__34142 = seq__33656_34136;
var G__34143 = chunk__33658_34137;
var G__34144 = count__33659_34138;
var G__34145 = (i__33660_34139 + (1));
seq__33656_34136 = G__34142;
chunk__33658_34137 = G__34143;
count__33659_34138 = G__34144;
i__33660_34139 = G__34145;
continue;
} else {
var G__34146 = seq__33656_34136;
var G__34147 = chunk__33658_34137;
var G__34148 = count__33659_34138;
var G__34149 = (i__33660_34139 + (1));
seq__33656_34136 = G__34146;
chunk__33658_34137 = G__34147;
count__33659_34138 = G__34148;
i__33660_34139 = G__34149;
continue;
}
} else {
var temp__5735__auto___34150__$1 = cljs.core.seq(seq__33656_34136);
if(temp__5735__auto___34150__$1){
var seq__33656_34151__$1 = temp__5735__auto___34150__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33656_34151__$1)){
var c__4550__auto___34152 = cljs.core.chunk_first(seq__33656_34151__$1);
var G__34153 = cljs.core.chunk_rest(seq__33656_34151__$1);
var G__34154 = c__4550__auto___34152;
var G__34155 = cljs.core.count(c__4550__auto___34152);
var G__34156 = (0);
seq__33656_34136 = G__34153;
chunk__33658_34137 = G__34154;
count__33659_34138 = G__34155;
i__33660_34139 = G__34156;
continue;
} else {
var child_34157 = cljs.core.first(seq__33656_34151__$1);
if(cljs.core.truth_(child_34157)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34157);


var G__34159 = cljs.core.next(seq__33656_34151__$1);
var G__34160 = null;
var G__34161 = (0);
var G__34162 = (0);
seq__33656_34136 = G__34159;
chunk__33658_34137 = G__34160;
count__33659_34138 = G__34161;
i__33660_34139 = G__34162;
continue;
} else {
var G__34163 = cljs.core.next(seq__33656_34151__$1);
var G__34164 = null;
var G__34165 = (0);
var G__34166 = (0);
seq__33656_34136 = G__34163;
chunk__33658_34137 = G__34164;
count__33659_34138 = G__34165;
i__33660_34139 = G__34166;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34135);
}


var G__34168 = cljs.core.next(seq__33624_34126__$1);
var G__34169 = null;
var G__34170 = (0);
var G__34171 = (0);
seq__33624_34080 = G__34168;
chunk__33625_34081 = G__34169;
count__33626_34082 = G__34170;
i__33627_34083 = G__34171;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__33670 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__33670);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33676 = cljs.core.seq(node);
var chunk__33677 = null;
var count__33678 = (0);
var i__33679 = (0);
while(true){
if((i__33679 < count__33678)){
var n = chunk__33677.cljs$core$IIndexed$_nth$arity$2(null,i__33679);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34176 = seq__33676;
var G__34177 = chunk__33677;
var G__34178 = count__33678;
var G__34179 = (i__33679 + (1));
seq__33676 = G__34176;
chunk__33677 = G__34177;
count__33678 = G__34178;
i__33679 = G__34179;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33676);
if(temp__5735__auto__){
var seq__33676__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33676__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33676__$1);
var G__34180 = cljs.core.chunk_rest(seq__33676__$1);
var G__34181 = c__4550__auto__;
var G__34182 = cljs.core.count(c__4550__auto__);
var G__34183 = (0);
seq__33676 = G__34180;
chunk__33677 = G__34181;
count__33678 = G__34182;
i__33679 = G__34183;
continue;
} else {
var n = cljs.core.first(seq__33676__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34184 = cljs.core.next(seq__33676__$1);
var G__34185 = null;
var G__34186 = (0);
var G__34187 = (0);
seq__33676 = G__34184;
chunk__33677 = G__34185;
count__33678 = G__34186;
i__33679 = G__34187;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__33690 = shadow.dom.dom_node(new$);
var G__33691 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__33690,G__33691);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33698 = arguments.length;
switch (G__33698) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33703 = arguments.length;
switch (G__33703) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33713 = arguments.length;
switch (G__33713) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34191 = arguments.length;
var i__4731__auto___34192 = (0);
while(true){
if((i__4731__auto___34192 < len__4730__auto___34191)){
args__4736__auto__.push((arguments[i__4731__auto___34192]));

var G__34193 = (i__4731__auto___34192 + (1));
i__4731__auto___34192 = G__34193;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33724_34194 = cljs.core.seq(nodes);
var chunk__33725_34195 = null;
var count__33726_34196 = (0);
var i__33727_34197 = (0);
while(true){
if((i__33727_34197 < count__33726_34196)){
var node_34198 = chunk__33725_34195.cljs$core$IIndexed$_nth$arity$2(null,i__33727_34197);
fragment.appendChild(shadow.dom._to_dom(node_34198));


var G__34199 = seq__33724_34194;
var G__34200 = chunk__33725_34195;
var G__34201 = count__33726_34196;
var G__34202 = (i__33727_34197 + (1));
seq__33724_34194 = G__34199;
chunk__33725_34195 = G__34200;
count__33726_34196 = G__34201;
i__33727_34197 = G__34202;
continue;
} else {
var temp__5735__auto___34203 = cljs.core.seq(seq__33724_34194);
if(temp__5735__auto___34203){
var seq__33724_34204__$1 = temp__5735__auto___34203;
if(cljs.core.chunked_seq_QMARK_(seq__33724_34204__$1)){
var c__4550__auto___34205 = cljs.core.chunk_first(seq__33724_34204__$1);
var G__34206 = cljs.core.chunk_rest(seq__33724_34204__$1);
var G__34207 = c__4550__auto___34205;
var G__34208 = cljs.core.count(c__4550__auto___34205);
var G__34209 = (0);
seq__33724_34194 = G__34206;
chunk__33725_34195 = G__34207;
count__33726_34196 = G__34208;
i__33727_34197 = G__34209;
continue;
} else {
var node_34210 = cljs.core.first(seq__33724_34204__$1);
fragment.appendChild(shadow.dom._to_dom(node_34210));


var G__34211 = cljs.core.next(seq__33724_34204__$1);
var G__34212 = null;
var G__34213 = (0);
var G__34214 = (0);
seq__33724_34194 = G__34211;
chunk__33725_34195 = G__34212;
count__33726_34196 = G__34213;
i__33727_34197 = G__34214;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq33722){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33722));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33728_34215 = cljs.core.seq(scripts);
var chunk__33729_34216 = null;
var count__33730_34217 = (0);
var i__33731_34218 = (0);
while(true){
if((i__33731_34218 < count__33730_34217)){
var vec__33739_34219 = chunk__33729_34216.cljs$core$IIndexed$_nth$arity$2(null,i__33731_34218);
var script_tag_34220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33739_34219,(0),null);
var script_body_34221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33739_34219,(1),null);
eval(script_body_34221);


var G__34222 = seq__33728_34215;
var G__34223 = chunk__33729_34216;
var G__34224 = count__33730_34217;
var G__34225 = (i__33731_34218 + (1));
seq__33728_34215 = G__34222;
chunk__33729_34216 = G__34223;
count__33730_34217 = G__34224;
i__33731_34218 = G__34225;
continue;
} else {
var temp__5735__auto___34226 = cljs.core.seq(seq__33728_34215);
if(temp__5735__auto___34226){
var seq__33728_34227__$1 = temp__5735__auto___34226;
if(cljs.core.chunked_seq_QMARK_(seq__33728_34227__$1)){
var c__4550__auto___34228 = cljs.core.chunk_first(seq__33728_34227__$1);
var G__34229 = cljs.core.chunk_rest(seq__33728_34227__$1);
var G__34230 = c__4550__auto___34228;
var G__34231 = cljs.core.count(c__4550__auto___34228);
var G__34232 = (0);
seq__33728_34215 = G__34229;
chunk__33729_34216 = G__34230;
count__33730_34217 = G__34231;
i__33731_34218 = G__34232;
continue;
} else {
var vec__33742_34233 = cljs.core.first(seq__33728_34227__$1);
var script_tag_34234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33742_34233,(0),null);
var script_body_34235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33742_34233,(1),null);
eval(script_body_34235);


var G__34237 = cljs.core.next(seq__33728_34227__$1);
var G__34238 = null;
var G__34239 = (0);
var G__34240 = (0);
seq__33728_34215 = G__34237;
chunk__33729_34216 = G__34238;
count__33730_34217 = G__34239;
i__33731_34218 = G__34240;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__33745){
var vec__33746 = p__33745;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33746,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33746,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__33752 = shadow.dom.dom_node(el);
var G__33753 = cls;
return goog.dom.getAncestorByClass(G__33752,G__33753);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33755 = arguments.length;
switch (G__33755) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__33758 = shadow.dom.dom_node(el);
var G__33759 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__33758,G__33759);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__33761 = shadow.dom.dom_node(el);
var G__33762 = cljs.core.name(tag);
var G__33763 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__33761,G__33762,G__33763);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__33766 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__33766);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__33770 = shadow.dom.dom_node(dom);
var G__33771 = value;
return goog.dom.forms.setValue(G__33770,G__33771);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33779 = cljs.core.seq(style_keys);
var chunk__33780 = null;
var count__33781 = (0);
var i__33782 = (0);
while(true){
if((i__33782 < count__33781)){
var it = chunk__33780.cljs$core$IIndexed$_nth$arity$2(null,i__33782);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34243 = seq__33779;
var G__34244 = chunk__33780;
var G__34245 = count__33781;
var G__34246 = (i__33782 + (1));
seq__33779 = G__34243;
chunk__33780 = G__34244;
count__33781 = G__34245;
i__33782 = G__34246;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33779);
if(temp__5735__auto__){
var seq__33779__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33779__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33779__$1);
var G__34247 = cljs.core.chunk_rest(seq__33779__$1);
var G__34248 = c__4550__auto__;
var G__34249 = cljs.core.count(c__4550__auto__);
var G__34250 = (0);
seq__33779 = G__34247;
chunk__33780 = G__34248;
count__33781 = G__34249;
i__33782 = G__34250;
continue;
} else {
var it = cljs.core.first(seq__33779__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34251 = cljs.core.next(seq__33779__$1);
var G__34252 = null;
var G__34253 = (0);
var G__34254 = (0);
seq__33779 = G__34251;
chunk__33780 = G__34252;
count__33781 = G__34253;
i__33782 = G__34254;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33785,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33789 = k33785;
var G__33789__$1 = (((G__33789 instanceof cljs.core.Keyword))?G__33789.fqn:null);
switch (G__33789__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33785,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33790){
var vec__33791 = p__33790;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33791,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33791,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33784){
var self__ = this;
var G__33784__$1 = this;
return (new cljs.core.RecordIter((0),G__33784__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__33794 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33794(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33786,other33787){
var self__ = this;
var this33786__$1 = this;
return (((!((other33787 == null)))) && ((this33786__$1.constructor === other33787.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33786__$1.x,other33787.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33786__$1.y,other33787.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33786__$1.__extmap,other33787.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33784){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33795 = cljs.core.keyword_identical_QMARK_;
var expr__33796 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33798 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__33799 = expr__33796;
return (pred__33795.cljs$core$IFn$_invoke$arity$2 ? pred__33795.cljs$core$IFn$_invoke$arity$2(G__33798,G__33799) : pred__33795.call(null,G__33798,G__33799));
})())){
return (new shadow.dom.Coordinate(G__33784,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33800 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__33801 = expr__33796;
return (pred__33795.cljs$core$IFn$_invoke$arity$2 ? pred__33795.cljs$core$IFn$_invoke$arity$2(G__33800,G__33801) : pred__33795.call(null,G__33800,G__33801));
})())){
return (new shadow.dom.Coordinate(self__.x,G__33784,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33784),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33784){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33784,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33788){
var extmap__4424__auto__ = (function (){var G__33802 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33788,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33788)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33802);
} else {
return G__33802;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33788),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33788),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__33803 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__33803);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__33804 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__33804);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__33805 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__33805);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33807,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33811 = k33807;
var G__33811__$1 = (((G__33811 instanceof cljs.core.Keyword))?G__33811.fqn:null);
switch (G__33811__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33807,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33812){
var vec__33813 = p__33812;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33813,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33813,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33806){
var self__ = this;
var G__33806__$1 = this;
return (new cljs.core.RecordIter((0),G__33806__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__33827 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33827(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33808,other33809){
var self__ = this;
var this33808__$1 = this;
return (((!((other33809 == null)))) && ((this33808__$1.constructor === other33809.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33808__$1.w,other33809.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33808__$1.h,other33809.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33808__$1.__extmap,other33809.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33806){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33831 = cljs.core.keyword_identical_QMARK_;
var expr__33832 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33834 = new cljs.core.Keyword(null,"w","w",354169001);
var G__33835 = expr__33832;
return (pred__33831.cljs$core$IFn$_invoke$arity$2 ? pred__33831.cljs$core$IFn$_invoke$arity$2(G__33834,G__33835) : pred__33831.call(null,G__33834,G__33835));
})())){
return (new shadow.dom.Size(G__33806,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33837 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__33838 = expr__33832;
return (pred__33831.cljs$core$IFn$_invoke$arity$2 ? pred__33831.cljs$core$IFn$_invoke$arity$2(G__33837,G__33838) : pred__33831.call(null,G__33837,G__33838));
})())){
return (new shadow.dom.Size(self__.w,G__33806,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33806),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33806){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33806,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33810){
var extmap__4424__auto__ = (function (){var G__33845 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33810,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33810)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33845);
} else {
return G__33845;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33810),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33810),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__33850 = shadow.dom.dom_node(el);
return goog.style.getSize(G__33850);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__34286 = (i + (1));
var G__34287 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34286;
ret = G__34287;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33866){
var vec__33867 = p__33866;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33867,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33867,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33872 = arguments.length;
switch (G__33872) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33880_34289 = new_node;
var G__33881_34290 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__33880_34289,G__33881_34290);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33885_34291 = new_node;
var G__33886_34292 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__33885_34291,G__33886_34292);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34295 = ps;
var G__34296 = (i + (1));
el__$1 = G__34295;
i = G__34296;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__33893 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__33893);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__33897 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__33897);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__33899 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__33899);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33901 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33901,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33901,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33901,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33904_34304 = cljs.core.seq(props);
var chunk__33905_34305 = null;
var count__33906_34306 = (0);
var i__33907_34307 = (0);
while(true){
if((i__33907_34307 < count__33906_34306)){
var vec__33914_34333 = chunk__33905_34305.cljs$core$IIndexed$_nth$arity$2(null,i__33907_34307);
var k_34334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33914_34333,(0),null);
var v_34335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33914_34333,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34334);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34334),v_34335);


var G__34336 = seq__33904_34304;
var G__34337 = chunk__33905_34305;
var G__34338 = count__33906_34306;
var G__34339 = (i__33907_34307 + (1));
seq__33904_34304 = G__34336;
chunk__33905_34305 = G__34337;
count__33906_34306 = G__34338;
i__33907_34307 = G__34339;
continue;
} else {
var temp__5735__auto___34340 = cljs.core.seq(seq__33904_34304);
if(temp__5735__auto___34340){
var seq__33904_34341__$1 = temp__5735__auto___34340;
if(cljs.core.chunked_seq_QMARK_(seq__33904_34341__$1)){
var c__4550__auto___34342 = cljs.core.chunk_first(seq__33904_34341__$1);
var G__34343 = cljs.core.chunk_rest(seq__33904_34341__$1);
var G__34344 = c__4550__auto___34342;
var G__34345 = cljs.core.count(c__4550__auto___34342);
var G__34346 = (0);
seq__33904_34304 = G__34343;
chunk__33905_34305 = G__34344;
count__33906_34306 = G__34345;
i__33907_34307 = G__34346;
continue;
} else {
var vec__33917_34347 = cljs.core.first(seq__33904_34341__$1);
var k_34348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33917_34347,(0),null);
var v_34349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33917_34347,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34348);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34348),v_34349);


var G__34350 = cljs.core.next(seq__33904_34341__$1);
var G__34351 = null;
var G__34352 = (0);
var G__34353 = (0);
seq__33904_34304 = G__34350;
chunk__33905_34305 = G__34351;
count__33906_34306 = G__34352;
i__33907_34307 = G__34353;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33924 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33924,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33924,(1),null);
var seq__33927_34354 = cljs.core.seq(node_children);
var chunk__33929_34355 = null;
var count__33930_34356 = (0);
var i__33931_34357 = (0);
while(true){
if((i__33931_34357 < count__33930_34356)){
var child_struct_34358 = chunk__33929_34355.cljs$core$IIndexed$_nth$arity$2(null,i__33931_34357);
if((!((child_struct_34358 == null)))){
if(typeof child_struct_34358 === 'string'){
var text_34359 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34359),child_struct_34358].join(''));
} else {
var children_34360 = shadow.dom.svg_node(child_struct_34358);
if(cljs.core.seq_QMARK_(children_34360)){
var seq__33948_34361 = cljs.core.seq(children_34360);
var chunk__33950_34362 = null;
var count__33951_34363 = (0);
var i__33952_34364 = (0);
while(true){
if((i__33952_34364 < count__33951_34363)){
var child_34365 = chunk__33950_34362.cljs$core$IIndexed$_nth$arity$2(null,i__33952_34364);
if(cljs.core.truth_(child_34365)){
node.appendChild(child_34365);


var G__34366 = seq__33948_34361;
var G__34367 = chunk__33950_34362;
var G__34368 = count__33951_34363;
var G__34369 = (i__33952_34364 + (1));
seq__33948_34361 = G__34366;
chunk__33950_34362 = G__34367;
count__33951_34363 = G__34368;
i__33952_34364 = G__34369;
continue;
} else {
var G__34370 = seq__33948_34361;
var G__34371 = chunk__33950_34362;
var G__34372 = count__33951_34363;
var G__34373 = (i__33952_34364 + (1));
seq__33948_34361 = G__34370;
chunk__33950_34362 = G__34371;
count__33951_34363 = G__34372;
i__33952_34364 = G__34373;
continue;
}
} else {
var temp__5735__auto___34374 = cljs.core.seq(seq__33948_34361);
if(temp__5735__auto___34374){
var seq__33948_34375__$1 = temp__5735__auto___34374;
if(cljs.core.chunked_seq_QMARK_(seq__33948_34375__$1)){
var c__4550__auto___34376 = cljs.core.chunk_first(seq__33948_34375__$1);
var G__34377 = cljs.core.chunk_rest(seq__33948_34375__$1);
var G__34378 = c__4550__auto___34376;
var G__34379 = cljs.core.count(c__4550__auto___34376);
var G__34380 = (0);
seq__33948_34361 = G__34377;
chunk__33950_34362 = G__34378;
count__33951_34363 = G__34379;
i__33952_34364 = G__34380;
continue;
} else {
var child_34381 = cljs.core.first(seq__33948_34375__$1);
if(cljs.core.truth_(child_34381)){
node.appendChild(child_34381);


var G__34382 = cljs.core.next(seq__33948_34375__$1);
var G__34383 = null;
var G__34384 = (0);
var G__34385 = (0);
seq__33948_34361 = G__34382;
chunk__33950_34362 = G__34383;
count__33951_34363 = G__34384;
i__33952_34364 = G__34385;
continue;
} else {
var G__34386 = cljs.core.next(seq__33948_34375__$1);
var G__34387 = null;
var G__34388 = (0);
var G__34389 = (0);
seq__33948_34361 = G__34386;
chunk__33950_34362 = G__34387;
count__33951_34363 = G__34388;
i__33952_34364 = G__34389;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34360);
}
}


var G__34390 = seq__33927_34354;
var G__34391 = chunk__33929_34355;
var G__34392 = count__33930_34356;
var G__34393 = (i__33931_34357 + (1));
seq__33927_34354 = G__34390;
chunk__33929_34355 = G__34391;
count__33930_34356 = G__34392;
i__33931_34357 = G__34393;
continue;
} else {
var G__34394 = seq__33927_34354;
var G__34395 = chunk__33929_34355;
var G__34396 = count__33930_34356;
var G__34397 = (i__33931_34357 + (1));
seq__33927_34354 = G__34394;
chunk__33929_34355 = G__34395;
count__33930_34356 = G__34396;
i__33931_34357 = G__34397;
continue;
}
} else {
var temp__5735__auto___34398 = cljs.core.seq(seq__33927_34354);
if(temp__5735__auto___34398){
var seq__33927_34399__$1 = temp__5735__auto___34398;
if(cljs.core.chunked_seq_QMARK_(seq__33927_34399__$1)){
var c__4550__auto___34400 = cljs.core.chunk_first(seq__33927_34399__$1);
var G__34401 = cljs.core.chunk_rest(seq__33927_34399__$1);
var G__34402 = c__4550__auto___34400;
var G__34403 = cljs.core.count(c__4550__auto___34400);
var G__34404 = (0);
seq__33927_34354 = G__34401;
chunk__33929_34355 = G__34402;
count__33930_34356 = G__34403;
i__33931_34357 = G__34404;
continue;
} else {
var child_struct_34405 = cljs.core.first(seq__33927_34399__$1);
if((!((child_struct_34405 == null)))){
if(typeof child_struct_34405 === 'string'){
var text_34406 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34406),child_struct_34405].join(''));
} else {
var children_34407 = shadow.dom.svg_node(child_struct_34405);
if(cljs.core.seq_QMARK_(children_34407)){
var seq__33954_34408 = cljs.core.seq(children_34407);
var chunk__33956_34409 = null;
var count__33957_34410 = (0);
var i__33958_34411 = (0);
while(true){
if((i__33958_34411 < count__33957_34410)){
var child_34412 = chunk__33956_34409.cljs$core$IIndexed$_nth$arity$2(null,i__33958_34411);
if(cljs.core.truth_(child_34412)){
node.appendChild(child_34412);


var G__34413 = seq__33954_34408;
var G__34414 = chunk__33956_34409;
var G__34415 = count__33957_34410;
var G__34416 = (i__33958_34411 + (1));
seq__33954_34408 = G__34413;
chunk__33956_34409 = G__34414;
count__33957_34410 = G__34415;
i__33958_34411 = G__34416;
continue;
} else {
var G__34417 = seq__33954_34408;
var G__34418 = chunk__33956_34409;
var G__34419 = count__33957_34410;
var G__34420 = (i__33958_34411 + (1));
seq__33954_34408 = G__34417;
chunk__33956_34409 = G__34418;
count__33957_34410 = G__34419;
i__33958_34411 = G__34420;
continue;
}
} else {
var temp__5735__auto___34421__$1 = cljs.core.seq(seq__33954_34408);
if(temp__5735__auto___34421__$1){
var seq__33954_34422__$1 = temp__5735__auto___34421__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33954_34422__$1)){
var c__4550__auto___34423 = cljs.core.chunk_first(seq__33954_34422__$1);
var G__34424 = cljs.core.chunk_rest(seq__33954_34422__$1);
var G__34425 = c__4550__auto___34423;
var G__34426 = cljs.core.count(c__4550__auto___34423);
var G__34427 = (0);
seq__33954_34408 = G__34424;
chunk__33956_34409 = G__34425;
count__33957_34410 = G__34426;
i__33958_34411 = G__34427;
continue;
} else {
var child_34428 = cljs.core.first(seq__33954_34422__$1);
if(cljs.core.truth_(child_34428)){
node.appendChild(child_34428);


var G__34429 = cljs.core.next(seq__33954_34422__$1);
var G__34430 = null;
var G__34431 = (0);
var G__34432 = (0);
seq__33954_34408 = G__34429;
chunk__33956_34409 = G__34430;
count__33957_34410 = G__34431;
i__33958_34411 = G__34432;
continue;
} else {
var G__34433 = cljs.core.next(seq__33954_34422__$1);
var G__34434 = null;
var G__34435 = (0);
var G__34436 = (0);
seq__33954_34408 = G__34433;
chunk__33956_34409 = G__34434;
count__33957_34410 = G__34435;
i__33958_34411 = G__34436;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34407);
}
}


var G__34437 = cljs.core.next(seq__33927_34399__$1);
var G__34438 = null;
var G__34439 = (0);
var G__34440 = (0);
seq__33927_34354 = G__34437;
chunk__33929_34355 = G__34438;
count__33930_34356 = G__34439;
i__33931_34357 = G__34440;
continue;
} else {
var G__34441 = cljs.core.next(seq__33927_34399__$1);
var G__34442 = null;
var G__34443 = (0);
var G__34444 = (0);
seq__33927_34354 = G__34441;
chunk__33929_34355 = G__34442;
count__33930_34356 = G__34443;
i__33931_34357 = G__34444;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__33960_34445 = shadow.dom._to_svg;
var G__33961_34446 = "string";
var G__33962_34447 = ((function (G__33960_34445,G__33961_34446){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__33960_34445,G__33961_34446))
;
goog.object.set(G__33960_34445,G__33961_34446,G__33962_34447);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__33963_34449 = shadow.dom._to_svg;
var G__33964_34450 = "null";
var G__33965_34451 = ((function (G__33963_34449,G__33964_34450){
return (function (_){
return null;
});})(G__33963_34449,G__33964_34450))
;
goog.object.set(G__33963_34449,G__33964_34450,G__33965_34451);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34469 = arguments.length;
var i__4731__auto___34470 = (0);
while(true){
if((i__4731__auto___34470 < len__4730__auto___34469)){
args__4736__auto__.push((arguments[i__4731__auto___34470]));

var G__34471 = (i__4731__auto___34470 + (1));
i__4731__auto___34470 = G__34471;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq33966){
var G__33967 = cljs.core.first(seq33966);
var seq33966__$1 = cljs.core.next(seq33966);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33967,seq33966__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33969 = arguments.length;
switch (G__33969) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__33970_34473 = shadow.dom.dom_node(el);
var G__33971_34474 = cljs.core.name(event);
var G__33972_34475 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33970_34473,G__33971_34474,G__33972_34475) : shadow.dom.dom_listen.call(null,G__33970_34473,G__33971_34474,G__33972_34475));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__31424__auto___34477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31424__auto___34477,buf,chan,event_fn){
return (function (){
var f__31425__auto__ = (function (){var switch__31166__auto__ = ((function (c__31424__auto___34477,buf,chan,event_fn){
return (function (state_33977){
var state_val_33978 = (state_33977[(1)]);
if((state_val_33978 === (1))){
var state_33977__$1 = state_33977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33977__$1,(2),once_or_cleanup);
} else {
if((state_val_33978 === (2))){
var inst_33974 = (state_33977[(2)]);
var inst_33975 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33977__$1 = (function (){var statearr_33979 = state_33977;
(statearr_33979[(7)] = inst_33974);

return statearr_33979;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33977__$1,inst_33975);
} else {
return null;
}
}
});})(c__31424__auto___34477,buf,chan,event_fn))
;
return ((function (switch__31166__auto__,c__31424__auto___34477,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__31167__auto__ = null;
var shadow$dom$state_machine__31167__auto____0 = (function (){
var statearr_33980 = [null,null,null,null,null,null,null,null];
(statearr_33980[(0)] = shadow$dom$state_machine__31167__auto__);

(statearr_33980[(1)] = (1));

return statearr_33980;
});
var shadow$dom$state_machine__31167__auto____1 = (function (state_33977){
while(true){
var ret_value__31168__auto__ = (function (){try{while(true){
var result__31169__auto__ = switch__31166__auto__(state_33977);
if(cljs.core.keyword_identical_QMARK_(result__31169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31169__auto__;
}
break;
}
}catch (e33981){if((e33981 instanceof Object)){
var ex__31170__auto__ = e33981;
var statearr_33982_34483 = state_33977;
(statearr_33982_34483[(5)] = ex__31170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33981;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34484 = state_33977;
state_33977 = G__34484;
continue;
} else {
return ret_value__31168__auto__;
}
break;
}
});
shadow$dom$state_machine__31167__auto__ = function(state_33977){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__31167__auto____0.call(this);
case 1:
return shadow$dom$state_machine__31167__auto____1.call(this,state_33977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__31167__auto____0;
shadow$dom$state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__31167__auto____1;
return shadow$dom$state_machine__31167__auto__;
})()
;})(switch__31166__auto__,c__31424__auto___34477,buf,chan,event_fn))
})();
var state__31426__auto__ = (function (){var statearr_33983 = (f__31425__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31425__auto__.cljs$core$IFn$_invoke$arity$0() : f__31425__auto__.call(null));
(statearr_33983[(6)] = c__31424__auto___34477);

return statearr_33983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31426__auto__);
});})(c__31424__auto___34477,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
