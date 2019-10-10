goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31526 = arguments.length;
switch (G__31526) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31528 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31528 = (function (f,blockable,meta31529){
this.f = f;
this.blockable = blockable;
this.meta31529 = meta31529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31530,meta31529__$1){
var self__ = this;
var _31530__$1 = this;
return (new cljs.core.async.t_cljs$core$async31528(self__.f,self__.blockable,meta31529__$1));
});

cljs.core.async.t_cljs$core$async31528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31530){
var self__ = this;
var _31530__$1 = this;
return self__.meta31529;
});

cljs.core.async.t_cljs$core$async31528.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31528.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31528.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31528.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31528.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31529","meta31529",545644159,null)], null);
});

cljs.core.async.t_cljs$core$async31528.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31528.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31528";

cljs.core.async.t_cljs$core$async31528.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31528");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31528.
 */
cljs.core.async.__GT_t_cljs$core$async31528 = (function cljs$core$async$__GT_t_cljs$core$async31528(f__$1,blockable__$1,meta31529){
return (new cljs.core.async.t_cljs$core$async31528(f__$1,blockable__$1,meta31529));
});

}

return (new cljs.core.async.t_cljs$core$async31528(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31569 = arguments.length;
switch (G__31569) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31571 = arguments.length;
switch (G__31571) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31573 = arguments.length;
switch (G__31573) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33439 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33439) : fn1.call(null,val_33439));
} else {
cljs.core.async.impl.dispatch.run(((function (val_33439,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33439) : fn1.call(null,val_33439));
});})(val_33439,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31577 = arguments.length;
switch (G__31577) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___33448 = n;
var x_33449 = (0);
while(true){
if((x_33449 < n__4607__auto___33448)){
(a[x_33449] = x_33449);

var G__33452 = (x_33449 + (1));
x_33449 = G__33452;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31578 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31578 = (function (flag,meta31579){
this.flag = flag;
this.meta31579 = meta31579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31580,meta31579__$1){
var self__ = this;
var _31580__$1 = this;
return (new cljs.core.async.t_cljs$core$async31578(self__.flag,meta31579__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31580){
var self__ = this;
var _31580__$1 = this;
return self__.meta31579;
});})(flag))
;

cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31578.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31578.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31579","meta31579",1370404953,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31578.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31578.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31578";

cljs.core.async.t_cljs$core$async31578.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31578");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31578.
 */
cljs.core.async.__GT_t_cljs$core$async31578 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31578(flag__$1,meta31579){
return (new cljs.core.async.t_cljs$core$async31578(flag__$1,meta31579));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31578(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31581 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31581 = (function (flag,cb,meta31582){
this.flag = flag;
this.cb = cb;
this.meta31582 = meta31582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31583,meta31582__$1){
var self__ = this;
var _31583__$1 = this;
return (new cljs.core.async.t_cljs$core$async31581(self__.flag,self__.cb,meta31582__$1));
});

cljs.core.async.t_cljs$core$async31581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31583){
var self__ = this;
var _31583__$1 = this;
return self__.meta31582;
});

cljs.core.async.t_cljs$core$async31581.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31581.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async31581.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31581.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31581.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31582","meta31582",-1174191442,null)], null);
});

cljs.core.async.t_cljs$core$async31581.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31581";

cljs.core.async.t_cljs$core$async31581.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31581");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31581.
 */
cljs.core.async.__GT_t_cljs$core$async31581 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31581(flag__$1,cb__$1,meta31582){
return (new cljs.core.async.t_cljs$core$async31581(flag__$1,cb__$1,meta31582));
});

}

return (new cljs.core.async.t_cljs$core$async31581(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31585_SHARP_){
var G__31587 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31585_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31587) : fret.call(null,G__31587));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31586_SHARP_){
var G__31588 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31586_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31588) : fret.call(null,G__31588));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33462 = (i + (1));
i = G__33462;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33463 = arguments.length;
var i__4731__auto___33464 = (0);
while(true){
if((i__4731__auto___33464 < len__4730__auto___33463)){
args__4736__auto__.push((arguments[i__4731__auto___33464]));

var G__33466 = (i__4731__auto___33464 + (1));
i__4731__auto___33464 = G__33466;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31591){
var map__31592 = p__31591;
var map__31592__$1 = (((((!((map__31592 == null))))?(((((map__31592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31592):map__31592);
var opts = map__31592__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31589){
var G__31590 = cljs.core.first(seq31589);
var seq31589__$1 = cljs.core.next(seq31589);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31590,seq31589__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31596 = arguments.length;
switch (G__31596) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31424__auto___33469 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31424__auto___33469){
return (function (){
var f__31425__auto__ = (function (){var switch__31166__auto__ = ((function (c__31424__auto___33469){
return (function (state_31620){
var state_val_31621 = (state_31620[(1)]);
if((state_val_31621 === (7))){
var inst_31616 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
var statearr_31623_33472 = state_31620__$1;
(statearr_31623_33472[(2)] = inst_31616);

(statearr_31623_33472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (1))){
var state_31620__$1 = state_31620;
var statearr_31624_33473 = state_31620__$1;
(statearr_31624_33473[(2)] = null);

(statearr_31624_33473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (4))){
var inst_31599 = (state_31620[(7)]);
var inst_31599__$1 = (state_31620[(2)]);
var inst_31600 = (inst_31599__$1 == null);
var state_31620__$1 = (function (){var statearr_31625 = state_31620;
(statearr_31625[(7)] = inst_31599__$1);

return statearr_31625;
})();
if(cljs.core.truth_(inst_31600)){
var statearr_31626_33474 = state_31620__$1;
(statearr_31626_33474[(1)] = (5));

} else {
var statearr_31627_33477 = state_31620__$1;
(statearr_31627_33477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (13))){
var state_31620__$1 = state_31620;
var statearr_31628_33478 = state_31620__$1;
(statearr_31628_33478[(2)] = null);

(statearr_31628_33478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (6))){
var inst_31599 = (state_31620[(7)]);
var state_31620__$1 = state_31620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31620__$1,(11),to,inst_31599);
} else {
if((state_val_31621 === (3))){
var inst_31618 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31620__$1,inst_31618);
} else {
if((state_val_31621 === (12))){
var state_31620__$1 = state_31620;
var statearr_31629_33481 = state_31620__$1;
(statearr_31629_33481[(2)] = null);

(statearr_31629_33481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (2))){
var state_31620__$1 = state_31620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31620__$1,(4),from);
} else {
if((state_val_31621 === (11))){
var inst_31609 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
if(cljs.core.truth_(inst_31609)){
var statearr_31630_33484 = state_31620__$1;
(statearr_31630_33484[(1)] = (12));

} else {
var statearr_31631_33485 = state_31620__$1;
(statearr_31631_33485[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (9))){
var state_31620__$1 = state_31620;
var statearr_31632_33486 = state_31620__$1;
(statearr_31632_33486[(2)] = null);

(statearr_31632_33486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (5))){
var state_31620__$1 = state_31620;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31633_33487 = state_31620__$1;
(statearr_31633_33487[(1)] = (8));

} else {
var statearr_31634_33488 = state_31620__$1;
(statearr_31634_33488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (14))){
var inst_31614 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
var statearr_31635_33491 = state_31620__$1;
(statearr_31635_33491[(2)] = inst_31614);

(statearr_31635_33491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (10))){
var inst_31606 = (state_31620[(2)]);
var state_31620__$1 = state_31620;
var statearr_31636_33492 = state_31620__$1;
(statearr_31636_33492[(2)] = inst_31606);

(statearr_31636_33492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31621 === (8))){
var inst_31603 = cljs.core.async.close_BANG_(to);
var state_31620__$1 = state_31620;
var statearr_31638_33494 = state_31620__$1;
(statearr_31638_33494[(2)] = inst_31603);

(statearr_31638_33494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31424__auto___33469))
;
return ((function (switch__31166__auto__,c__31424__auto___33469){
return (function() {
var cljs$core$async$state_machine__31167__auto__ = null;
var cljs$core$async$state_machine__31167__auto____0 = (function (){
var statearr_31639 = [null,null,null,null,null,null,null,null];
(statearr_31639[(0)] = cljs$core$async$state_machine__31167__auto__);

(statearr_31639[(1)] = (1));

return statearr_31639;
});
var cljs$core$async$state_machine__31167__auto____1 = (function (state_31620){
while(true){
var ret_value__31168__auto__ = (function (){try{while(true){
var result__31169__auto__ = switch__31166__auto__(state_31620);
if(cljs.core.keyword_identical_QMARK_(result__31169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31169__auto__;
}
break;
}
}catch (e31640){if((e31640 instanceof Object)){
var ex__31170__auto__ = e31640;
var statearr_31641_33515 = state_31620;
(statearr_31641_33515[(5)] = ex__31170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31640;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33516 = state_31620;
state_31620 = G__33516;
continue;
} else {
return ret_value__31168__auto__;
}
break;
}
});
cljs$core$async$state_machine__31167__auto__ = function(state_31620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31167__auto____1.call(this,state_31620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31167__auto____0;
cljs$core$async$state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31167__auto____1;
return cljs$core$async$state_machine__31167__auto__;
})()
;})(switch__31166__auto__,c__31424__auto___33469))
})();
var state__31426__auto__ = (function (){var statearr_31642 = (f__31425__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31425__auto__.cljs$core$IFn$_invoke$arity$0() : f__31425__auto__.call(null));
(statearr_31642[(6)] = c__31424__auto___33469);

return statearr_31642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31426__auto__);
});})(c__31424__auto___33469))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__31643){
var vec__31644 = p__31643;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31644,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31644,(1),null);
var job = vec__31644;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31424__auto___33519 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31424__auto___33519,res,vec__31644,v,p,job,jobs,results){
return (function (){
var f__31425__auto__ = (function (){var switch__31166__auto__ = ((function (c__31424__auto___33519,res,vec__31644,v,p,job,jobs,results){
return (function (state_31651){
var state_val_31652 = (state_31651[(1)]);
if((state_val_31652 === (1))){
var state_31651__$1 = state_31651;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31651__$1,(2),res,v);
} else {
if((state_val_31652 === (2))){
var inst_31648 = (state_31651[(2)]);
var inst_31649 = cljs.core.async.close_BANG_(res);
var state_31651__$1 = (function (){var statearr_31653 = state_31651;
(statearr_31653[(7)] = inst_31648);

return statearr_31653;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31651__$1,inst_31649);
} else {
return null;
}
}
});})(c__31424__auto___33519,res,vec__31644,v,p,job,jobs,results))
;
return ((function (switch__31166__auto__,c__31424__auto___33519,res,vec__31644,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____0 = (function (){
var statearr_31654 = [null,null,null,null,null,null,null,null];
(statearr_31654[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__);

(statearr_31654[(1)] = (1));

return statearr_31654;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____1 = (function (state_31651){
while(true){
var ret_value__31168__auto__ = (function (){try{while(true){
var result__31169__auto__ = switch__31166__auto__(state_31651);
if(cljs.core.keyword_identical_QMARK_(result__31169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31169__auto__;
}
break;
}
}catch (e31655){if((e31655 instanceof Object)){
var ex__31170__auto__ = e31655;
var statearr_31656_33526 = state_31651;
(statearr_31656_33526[(5)] = ex__31170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31655;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33527 = state_31651;
state_31651 = G__33527;
continue;
} else {
return ret_value__31168__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__ = function(state_31651){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____1.call(this,state_31651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__;
})()
;})(switch__31166__auto__,c__31424__auto___33519,res,vec__31644,v,p,job,jobs,results))
})();
var state__31426__auto__ = (function (){var statearr_31657 = (f__31425__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31425__auto__.cljs$core$IFn$_invoke$arity$0() : f__31425__auto__.call(null));
(statearr_31657[(6)] = c__31424__auto___33519);

return statearr_31657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31426__auto__);
});})(c__31424__auto___33519,res,vec__31644,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31658){
var vec__31659 = p__31658;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31659,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31659,(1),null);
var job = vec__31659;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___33538 = n;
var __33539 = (0);
while(true){
if((__33539 < n__4607__auto___33538)){
var G__31662_33540 = type;
var G__31662_33541__$1 = (((G__31662_33540 instanceof cljs.core.Keyword))?G__31662_33540.fqn:null);
switch (G__31662_33541__$1) {
case "compute":
var c__31424__auto___33543 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33539,c__31424__auto___33543,G__31662_33540,G__31662_33541__$1,n__4607__auto___33538,jobs,results,process,async){
return (function (){
var f__31425__auto__ = (function (){var switch__31166__auto__ = ((function (__33539,c__31424__auto___33543,G__31662_33540,G__31662_33541__$1,n__4607__auto___33538,jobs,results,process,async){
return (function (state_31675){
var state_val_31676 = (state_31675[(1)]);
if((state_val_31676 === (1))){
var state_31675__$1 = state_31675;
var statearr_31677_33550 = state_31675__$1;
(statearr_31677_33550[(2)] = null);

(statearr_31677_33550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31676 === (2))){
var state_31675__$1 = state_31675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31675__$1,(4),jobs);
} else {
if((state_val_31676 === (3))){
var inst_31673 = (state_31675[(2)]);
var state_31675__$1 = state_31675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31675__$1,inst_31673);
} else {
if((state_val_31676 === (4))){
var inst_31665 = (state_31675[(2)]);
var inst_31666 = process(inst_31665);
var state_31675__$1 = state_31675;
if(cljs.core.truth_(inst_31666)){
var statearr_31678_33551 = state_31675__$1;
(statearr_31678_33551[(1)] = (5));

} else {
var statearr_31679_33556 = state_31675__$1;
(statearr_31679_33556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31676 === (5))){
var state_31675__$1 = state_31675;
var statearr_31680_33557 = state_31675__$1;
(statearr_31680_33557[(2)] = null);

(statearr_31680_33557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31676 === (6))){
var state_31675__$1 = state_31675;
var statearr_31681_33564 = state_31675__$1;
(statearr_31681_33564[(2)] = null);

(statearr_31681_33564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31676 === (7))){
var inst_31671 = (state_31675[(2)]);
var state_31675__$1 = state_31675;
var statearr_31682_33565 = state_31675__$1;
(statearr_31682_33565[(2)] = inst_31671);

(statearr_31682_33565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33539,c__31424__auto___33543,G__31662_33540,G__31662_33541__$1,n__4607__auto___33538,jobs,results,process,async))
;
return ((function (__33539,switch__31166__auto__,c__31424__auto___33543,G__31662_33540,G__31662_33541__$1,n__4607__auto___33538,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____0 = (function (){
var statearr_31683 = [null,null,null,null,null,null,null];
(statearr_31683[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__);

(statearr_31683[(1)] = (1));

return statearr_31683;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____1 = (function (state_31675){
while(true){
var ret_value__31168__auto__ = (function (){try{while(true){
var result__31169__auto__ = switch__31166__auto__(state_31675);
if(cljs.core.keyword_identical_QMARK_(result__31169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31169__auto__;
}
break;
}
}catch (e31684){if((e31684 instanceof Object)){
var ex__31170__auto__ = e31684;
var statearr_31685_33572 = state_31675;
(statearr_31685_33572[(5)] = ex__31170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31684;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33573 = state_31675;
state_31675 = G__33573;
continue;
} else {
return ret_value__31168__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__ = function(state_31675){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____1.call(this,state_31675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__;
})()
;})(__33539,switch__31166__auto__,c__31424__auto___33543,G__31662_33540,G__31662_33541__$1,n__4607__auto___33538,jobs,results,process,async))
})();
var state__31426__auto__ = (function (){var statearr_31686 = (f__31425__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31425__auto__.cljs$core$IFn$_invoke$arity$0() : f__31425__auto__.call(null));
(statearr_31686[(6)] = c__31424__auto___33543);

return statearr_31686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31426__auto__);
});})(__33539,c__31424__auto___33543,G__31662_33540,G__31662_33541__$1,n__4607__auto___33538,jobs,results,process,async))
);


break;
case "async":
var c__31424__auto___33580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33539,c__31424__auto___33580,G__31662_33540,G__31662_33541__$1,n__4607__auto___33538,jobs,results,process,async){
return (function (){
var f__31425__auto__ = (function (){var switch__31166__auto__ = ((function (__33539,c__31424__auto___33580,G__31662_33540,G__31662_33541__$1,n__4607__auto___33538,jobs,results,process,async){
return (function (state_31699){
var state_val_31700 = (state_31699[(1)]);
if((state_val_31700 === (1))){
var state_31699__$1 = state_31699;
var statearr_31701_33597 = state_31699__$1;
(statearr_31701_33597[(2)] = null);

(statearr_31701_33597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31700 === (2))){
var state_31699__$1 = state_31699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31699__$1,(4),jobs);
} else {
if((state_val_31700 === (3))){
var inst_31697 = (state_31699[(2)]);
var state_31699__$1 = state_31699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31699__$1,inst_31697);
} else {
if((state_val_31700 === (4))){
var inst_31689 = (state_31699[(2)]);
var inst_31690 = async(inst_31689);
var state_31699__$1 = state_31699;
if(cljs.core.truth_(inst_31690)){
var statearr_31702_33600 = state_31699__$1;
(statearr_31702_33600[(1)] = (5));

} else {
var statearr_31703_33601 = state_31699__$1;
(statearr_31703_33601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31700 === (5))){
var state_31699__$1 = state_31699;
var statearr_31704_33602 = state_31699__$1;
(statearr_31704_33602[(2)] = null);

(statearr_31704_33602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31700 === (6))){
var state_31699__$1 = state_31699;
var statearr_31705_33603 = state_31699__$1;
(statearr_31705_33603[(2)] = null);

(statearr_31705_33603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31700 === (7))){
var inst_31695 = (state_31699[(2)]);
var state_31699__$1 = state_31699;
var statearr_31706_33604 = state_31699__$1;
(statearr_31706_33604[(2)] = inst_31695);

(statearr_31706_33604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33539,c__31424__auto___33580,G__31662_33540,G__31662_33541__$1,n__4607__auto___33538,jobs,results,process,async))
;
return ((function (__33539,switch__31166__auto__,c__31424__auto___33580,G__31662_33540,G__31662_33541__$1,n__4607__auto___33538,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____0 = (function (){
var statearr_31711 = [null,null,null,null,null,null,null];
(statearr_31711[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__);

(statearr_31711[(1)] = (1));

return statearr_31711;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____1 = (function (state_31699){
while(true){
var ret_value__31168__auto__ = (function (){try{while(true){
var result__31169__auto__ = switch__31166__auto__(state_31699);
if(cljs.core.keyword_identical_QMARK_(result__31169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31169__auto__;
}
break;
}
}catch (e31713){if((e31713 instanceof Object)){
var ex__31170__auto__ = e31713;
var statearr_31714_33605 = state_31699;
(statearr_31714_33605[(5)] = ex__31170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31713;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33606 = state_31699;
state_31699 = G__33606;
continue;
} else {
return ret_value__31168__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__ = function(state_31699){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____1.call(this,state_31699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__;
})()
;})(__33539,switch__31166__auto__,c__31424__auto___33580,G__31662_33540,G__31662_33541__$1,n__4607__auto___33538,jobs,results,process,async))
})();
var state__31426__auto__ = (function (){var statearr_31718 = (f__31425__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31425__auto__.cljs$core$IFn$_invoke$arity$0() : f__31425__auto__.call(null));
(statearr_31718[(6)] = c__31424__auto___33580);

return statearr_31718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31426__auto__);
});})(__33539,c__31424__auto___33580,G__31662_33540,G__31662_33541__$1,n__4607__auto___33538,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31662_33541__$1)].join('')));

}

var G__33611 = (__33539 + (1));
__33539 = G__33611;
continue;
} else {
}
break;
}

var c__31424__auto___33612 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31424__auto___33612,jobs,results,process,async){
return (function (){
var f__31425__auto__ = (function (){var switch__31166__auto__ = ((function (c__31424__auto___33612,jobs,results,process,async){
return (function (state_31740){
var state_val_31741 = (state_31740[(1)]);
if((state_val_31741 === (7))){
var inst_31736 = (state_31740[(2)]);
var state_31740__$1 = state_31740;
var statearr_31742_33615 = state_31740__$1;
(statearr_31742_33615[(2)] = inst_31736);

(statearr_31742_33615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (1))){
var state_31740__$1 = state_31740;
var statearr_31745_33618 = state_31740__$1;
(statearr_31745_33618[(2)] = null);

(statearr_31745_33618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (4))){
var inst_31721 = (state_31740[(7)]);
var inst_31721__$1 = (state_31740[(2)]);
var inst_31722 = (inst_31721__$1 == null);
var state_31740__$1 = (function (){var statearr_31746 = state_31740;
(statearr_31746[(7)] = inst_31721__$1);

return statearr_31746;
})();
if(cljs.core.truth_(inst_31722)){
var statearr_31747_33619 = state_31740__$1;
(statearr_31747_33619[(1)] = (5));

} else {
var statearr_31748_33620 = state_31740__$1;
(statearr_31748_33620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (6))){
var inst_31721 = (state_31740[(7)]);
var inst_31726 = (state_31740[(8)]);
var inst_31726__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31727 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31728 = [inst_31721,inst_31726__$1];
var inst_31729 = (new cljs.core.PersistentVector(null,2,(5),inst_31727,inst_31728,null));
var state_31740__$1 = (function (){var statearr_31751 = state_31740;
(statearr_31751[(8)] = inst_31726__$1);

return statearr_31751;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31740__$1,(8),jobs,inst_31729);
} else {
if((state_val_31741 === (3))){
var inst_31738 = (state_31740[(2)]);
var state_31740__$1 = state_31740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31740__$1,inst_31738);
} else {
if((state_val_31741 === (2))){
var state_31740__$1 = state_31740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31740__$1,(4),from);
} else {
if((state_val_31741 === (9))){
var inst_31733 = (state_31740[(2)]);
var state_31740__$1 = (function (){var statearr_31761 = state_31740;
(statearr_31761[(9)] = inst_31733);

return statearr_31761;
})();
var statearr_31762_33634 = state_31740__$1;
(statearr_31762_33634[(2)] = null);

(statearr_31762_33634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (5))){
var inst_31724 = cljs.core.async.close_BANG_(jobs);
var state_31740__$1 = state_31740;
var statearr_31766_33635 = state_31740__$1;
(statearr_31766_33635[(2)] = inst_31724);

(statearr_31766_33635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (8))){
var inst_31726 = (state_31740[(8)]);
var inst_31731 = (state_31740[(2)]);
var state_31740__$1 = (function (){var statearr_31767 = state_31740;
(statearr_31767[(10)] = inst_31731);

return statearr_31767;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31740__$1,(9),results,inst_31726);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__31424__auto___33612,jobs,results,process,async))
;
return ((function (switch__31166__auto__,c__31424__auto___33612,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____0 = (function (){
var statearr_31772 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31772[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__);

(statearr_31772[(1)] = (1));

return statearr_31772;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____1 = (function (state_31740){
while(true){
var ret_value__31168__auto__ = (function (){try{while(true){
var result__31169__auto__ = switch__31166__auto__(state_31740);
if(cljs.core.keyword_identical_QMARK_(result__31169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31169__auto__;
}
break;
}
}catch (e31773){if((e31773 instanceof Object)){
var ex__31170__auto__ = e31773;
var statearr_31774_33636 = state_31740;
(statearr_31774_33636[(5)] = ex__31170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31773;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33637 = state_31740;
state_31740 = G__33637;
continue;
} else {
return ret_value__31168__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__ = function(state_31740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____1.call(this,state_31740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__;
})()
;})(switch__31166__auto__,c__31424__auto___33612,jobs,results,process,async))
})();
var state__31426__auto__ = (function (){var statearr_31775 = (f__31425__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31425__auto__.cljs$core$IFn$_invoke$arity$0() : f__31425__auto__.call(null));
(statearr_31775[(6)] = c__31424__auto___33612);

return statearr_31775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31426__auto__);
});})(c__31424__auto___33612,jobs,results,process,async))
);


var c__31424__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31424__auto__,jobs,results,process,async){
return (function (){
var f__31425__auto__ = (function (){var switch__31166__auto__ = ((function (c__31424__auto__,jobs,results,process,async){
return (function (state_31813){
var state_val_31814 = (state_31813[(1)]);
if((state_val_31814 === (7))){
var inst_31809 = (state_31813[(2)]);
var state_31813__$1 = state_31813;
var statearr_31815_33644 = state_31813__$1;
(statearr_31815_33644[(2)] = inst_31809);

(statearr_31815_33644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (20))){
var state_31813__$1 = state_31813;
var statearr_31816_33645 = state_31813__$1;
(statearr_31816_33645[(2)] = null);

(statearr_31816_33645[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (1))){
var state_31813__$1 = state_31813;
var statearr_31817_33646 = state_31813__$1;
(statearr_31817_33646[(2)] = null);

(statearr_31817_33646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (4))){
var inst_31778 = (state_31813[(7)]);
var inst_31778__$1 = (state_31813[(2)]);
var inst_31779 = (inst_31778__$1 == null);
var state_31813__$1 = (function (){var statearr_31818 = state_31813;
(statearr_31818[(7)] = inst_31778__$1);

return statearr_31818;
})();
if(cljs.core.truth_(inst_31779)){
var statearr_31820_33647 = state_31813__$1;
(statearr_31820_33647[(1)] = (5));

} else {
var statearr_31821_33648 = state_31813__$1;
(statearr_31821_33648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (15))){
var inst_31791 = (state_31813[(8)]);
var state_31813__$1 = state_31813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31813__$1,(18),to,inst_31791);
} else {
if((state_val_31814 === (21))){
var inst_31804 = (state_31813[(2)]);
var state_31813__$1 = state_31813;
var statearr_31823_33649 = state_31813__$1;
(statearr_31823_33649[(2)] = inst_31804);

(statearr_31823_33649[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (13))){
var inst_31806 = (state_31813[(2)]);
var state_31813__$1 = (function (){var statearr_31824 = state_31813;
(statearr_31824[(9)] = inst_31806);

return statearr_31824;
})();
var statearr_31825_33662 = state_31813__$1;
(statearr_31825_33662[(2)] = null);

(statearr_31825_33662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (6))){
var inst_31778 = (state_31813[(7)]);
var state_31813__$1 = state_31813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31813__$1,(11),inst_31778);
} else {
if((state_val_31814 === (17))){
var inst_31799 = (state_31813[(2)]);
var state_31813__$1 = state_31813;
if(cljs.core.truth_(inst_31799)){
var statearr_31826_33663 = state_31813__$1;
(statearr_31826_33663[(1)] = (19));

} else {
var statearr_31827_33664 = state_31813__$1;
(statearr_31827_33664[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (3))){
var inst_31811 = (state_31813[(2)]);
var state_31813__$1 = state_31813;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31813__$1,inst_31811);
} else {
if((state_val_31814 === (12))){
var inst_31788 = (state_31813[(10)]);
var state_31813__$1 = state_31813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31813__$1,(14),inst_31788);
} else {
if((state_val_31814 === (2))){
var state_31813__$1 = state_31813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31813__$1,(4),results);
} else {
if((state_val_31814 === (19))){
var state_31813__$1 = state_31813;
var statearr_31828_33665 = state_31813__$1;
(statearr_31828_33665[(2)] = null);

(statearr_31828_33665[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (11))){
var inst_31788 = (state_31813[(2)]);
var state_31813__$1 = (function (){var statearr_31829 = state_31813;
(statearr_31829[(10)] = inst_31788);

return statearr_31829;
})();
var statearr_31830_33666 = state_31813__$1;
(statearr_31830_33666[(2)] = null);

(statearr_31830_33666[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (9))){
var state_31813__$1 = state_31813;
var statearr_31855_33667 = state_31813__$1;
(statearr_31855_33667[(2)] = null);

(statearr_31855_33667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (5))){
var state_31813__$1 = state_31813;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31856_33668 = state_31813__$1;
(statearr_31856_33668[(1)] = (8));

} else {
var statearr_31857_33669 = state_31813__$1;
(statearr_31857_33669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (14))){
var inst_31791 = (state_31813[(8)]);
var inst_31793 = (state_31813[(11)]);
var inst_31791__$1 = (state_31813[(2)]);
var inst_31792 = (inst_31791__$1 == null);
var inst_31793__$1 = cljs.core.not(inst_31792);
var state_31813__$1 = (function (){var statearr_31858 = state_31813;
(statearr_31858[(8)] = inst_31791__$1);

(statearr_31858[(11)] = inst_31793__$1);

return statearr_31858;
})();
if(inst_31793__$1){
var statearr_31859_33671 = state_31813__$1;
(statearr_31859_33671[(1)] = (15));

} else {
var statearr_31860_33672 = state_31813__$1;
(statearr_31860_33672[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (16))){
var inst_31793 = (state_31813[(11)]);
var state_31813__$1 = state_31813;
var statearr_31861_33674 = state_31813__$1;
(statearr_31861_33674[(2)] = inst_31793);

(statearr_31861_33674[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (10))){
var inst_31785 = (state_31813[(2)]);
var state_31813__$1 = state_31813;
var statearr_31862_33675 = state_31813__$1;
(statearr_31862_33675[(2)] = inst_31785);

(statearr_31862_33675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (18))){
var inst_31796 = (state_31813[(2)]);
var state_31813__$1 = state_31813;
var statearr_31863_33680 = state_31813__$1;
(statearr_31863_33680[(2)] = inst_31796);

(statearr_31863_33680[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31814 === (8))){
var inst_31782 = cljs.core.async.close_BANG_(to);
var state_31813__$1 = state_31813;
var statearr_31864_33681 = state_31813__$1;
(statearr_31864_33681[(2)] = inst_31782);

(statearr_31864_33681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31424__auto__,jobs,results,process,async))
;
return ((function (switch__31166__auto__,c__31424__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____0 = (function (){
var statearr_31865 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31865[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__);

(statearr_31865[(1)] = (1));

return statearr_31865;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____1 = (function (state_31813){
while(true){
var ret_value__31168__auto__ = (function (){try{while(true){
var result__31169__auto__ = switch__31166__auto__(state_31813);
if(cljs.core.keyword_identical_QMARK_(result__31169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31169__auto__;
}
break;
}
}catch (e31866){if((e31866 instanceof Object)){
var ex__31170__auto__ = e31866;
var statearr_31867_33682 = state_31813;
(statearr_31867_33682[(5)] = ex__31170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31866;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33683 = state_31813;
state_31813 = G__33683;
continue;
} else {
return ret_value__31168__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__ = function(state_31813){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____1.call(this,state_31813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31167__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31167__auto__;
})()
;})(switch__31166__auto__,c__31424__auto__,jobs,results,process,async))
})();
var state__31426__auto__ = (function (){var statearr_31868 = (f__31425__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31425__auto__.cljs$core$IFn$_invoke$arity$0() : f__31425__auto__.call(null));
(statearr_31868[(6)] = c__31424__auto__);

return statearr_31868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31426__auto__);
});})(c__31424__auto__,jobs,results,process,async))
);

return c__31424__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31870 = arguments.length;
switch (G__31870) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31875 = arguments.length;
switch (G__31875) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31882 = arguments.length;
switch (G__31882) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__31424__auto___33687 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31424__auto___33687,tc,fc){
return (function (){
var f__31425__auto__ = (function (){var switch__31166__auto__ = ((function (c__31424__auto___33687,tc,fc){
return (function (state_31908){
var state_val_31909 = (state_31908[(1)]);
if((state_val_31909 === (7))){
var inst_31904 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
var statearr_31910_33688 = state_31908__$1;
(statearr_31910_33688[(2)] = inst_31904);

(statearr_31910_33688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (1))){
var state_31908__$1 = state_31908;
var statearr_31911_33689 = state_31908__$1;
(statearr_31911_33689[(2)] = null);

(statearr_31911_33689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (4))){
var inst_31885 = (state_31908[(7)]);
var inst_31885__$1 = (state_31908[(2)]);
var inst_31886 = (inst_31885__$1 == null);
var state_31908__$1 = (function (){var statearr_31912 = state_31908;
(statearr_31912[(7)] = inst_31885__$1);

return statearr_31912;
})();
if(cljs.core.truth_(inst_31886)){
var statearr_31913_33692 = state_31908__$1;
(statearr_31913_33692[(1)] = (5));

} else {
var statearr_31914_33693 = state_31908__$1;
(statearr_31914_33693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (13))){
var state_31908__$1 = state_31908;
var statearr_31915_33694 = state_31908__$1;
(statearr_31915_33694[(2)] = null);

(statearr_31915_33694[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (6))){
var inst_31885 = (state_31908[(7)]);
var inst_31891 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31885) : p.call(null,inst_31885));
var state_31908__$1 = state_31908;
if(cljs.core.truth_(inst_31891)){
var statearr_31916_33696 = state_31908__$1;
(statearr_31916_33696[(1)] = (9));

} else {
var statearr_31917_33697 = state_31908__$1;
(statearr_31917_33697[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (3))){
var inst_31906 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31908__$1,inst_31906);
} else {
if((state_val_31909 === (12))){
var state_31908__$1 = state_31908;
var statearr_31918_33699 = state_31908__$1;
(statearr_31918_33699[(2)] = null);

(statearr_31918_33699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (2))){
var state_31908__$1 = state_31908;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31908__$1,(4),ch);
} else {
if((state_val_31909 === (11))){
var inst_31885 = (state_31908[(7)]);
var inst_31895 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31908__$1,(8),inst_31895,inst_31885);
} else {
if((state_val_31909 === (9))){
var state_31908__$1 = state_31908;
var statearr_31919_33700 = state_31908__$1;
(statearr_31919_33700[(2)] = tc);

(statearr_31919_33700[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (5))){
var inst_31888 = cljs.core.async.close_BANG_(tc);
var inst_31889 = cljs.core.async.close_BANG_(fc);
var state_31908__$1 = (function (){var statearr_31920 = state_31908;
(statearr_31920[(8)] = inst_31888);

return statearr_31920;
})();
var statearr_31921_33701 = state_31908__$1;
(statearr_31921_33701[(2)] = inst_31889);

(statearr_31921_33701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (14))){
var inst_31902 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
var statearr_31922_33704 = state_31908__$1;
(statearr_31922_33704[(2)] = inst_31902);

(statearr_31922_33704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (10))){
var state_31908__$1 = state_31908;
var statearr_31923_33705 = state_31908__$1;
(statearr_31923_33705[(2)] = fc);

(statearr_31923_33705[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (8))){
var inst_31897 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
if(cljs.core.truth_(inst_31897)){
var statearr_31924_33706 = state_31908__$1;
(statearr_31924_33706[(1)] = (12));

} else {
var statearr_31925_33707 = state_31908__$1;
(statearr_31925_33707[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31424__auto___33687,tc,fc))
;
return ((function (switch__31166__auto__,c__31424__auto___33687,tc,fc){
return (function() {
var cljs$core$async$state_machine__31167__auto__ = null;
var cljs$core$async$state_machine__31167__auto____0 = (function (){
var statearr_31926 = [null,null,null,null,null,null,null,null,null];
(statearr_31926[(0)] = cljs$core$async$state_machine__31167__auto__);

(statearr_31926[(1)] = (1));

return statearr_31926;
});
var cljs$core$async$state_machine__31167__auto____1 = (function (state_31908){
while(true){
var ret_value__31168__auto__ = (function (){try{while(true){
var result__31169__auto__ = switch__31166__auto__(state_31908);
if(cljs.core.keyword_identical_QMARK_(result__31169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31169__auto__;
}
break;
}
}catch (e31927){if((e31927 instanceof Object)){
var ex__31170__auto__ = e31927;
var statearr_31928_33708 = state_31908;
(statearr_31928_33708[(5)] = ex__31170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31927;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33709 = state_31908;
state_31908 = G__33709;
continue;
} else {
return ret_value__31168__auto__;
}
break;
}
});
cljs$core$async$state_machine__31167__auto__ = function(state_31908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31167__auto____1.call(this,state_31908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31167__auto____0;
cljs$core$async$state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31167__auto____1;
return cljs$core$async$state_machine__31167__auto__;
})()
;})(switch__31166__auto__,c__31424__auto___33687,tc,fc))
})();
var state__31426__auto__ = (function (){var statearr_31932 = (f__31425__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31425__auto__.cljs$core$IFn$_invoke$arity$0() : f__31425__auto__.call(null));
(statearr_31932[(6)] = c__31424__auto___33687);

return statearr_31932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31426__auto__);
});})(c__31424__auto___33687,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31424__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31424__auto__){
return (function (){
var f__31425__auto__ = (function (){var switch__31166__auto__ = ((function (c__31424__auto__){
return (function (state_31953){
var state_val_31954 = (state_31953[(1)]);
if((state_val_31954 === (7))){
var inst_31949 = (state_31953[(2)]);
var state_31953__$1 = state_31953;
var statearr_31959_33710 = state_31953__$1;
(statearr_31959_33710[(2)] = inst_31949);

(statearr_31959_33710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (1))){
var inst_31933 = init;
var state_31953__$1 = (function (){var statearr_31962 = state_31953;
(statearr_31962[(7)] = inst_31933);

return statearr_31962;
})();
var statearr_31963_33712 = state_31953__$1;
(statearr_31963_33712[(2)] = null);

(statearr_31963_33712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (4))){
var inst_31936 = (state_31953[(8)]);
var inst_31936__$1 = (state_31953[(2)]);
var inst_31937 = (inst_31936__$1 == null);
var state_31953__$1 = (function (){var statearr_31964 = state_31953;
(statearr_31964[(8)] = inst_31936__$1);

return statearr_31964;
})();
if(cljs.core.truth_(inst_31937)){
var statearr_31965_33714 = state_31953__$1;
(statearr_31965_33714[(1)] = (5));

} else {
var statearr_31966_33715 = state_31953__$1;
(statearr_31966_33715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (6))){
var inst_31936 = (state_31953[(8)]);
var inst_31940 = (state_31953[(9)]);
var inst_31933 = (state_31953[(7)]);
var inst_31940__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31933,inst_31936) : f.call(null,inst_31933,inst_31936));
var inst_31941 = cljs.core.reduced_QMARK_(inst_31940__$1);
var state_31953__$1 = (function (){var statearr_31967 = state_31953;
(statearr_31967[(9)] = inst_31940__$1);

return statearr_31967;
})();
if(inst_31941){
var statearr_31969_33716 = state_31953__$1;
(statearr_31969_33716[(1)] = (8));

} else {
var statearr_31970_33717 = state_31953__$1;
(statearr_31970_33717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (3))){
var inst_31951 = (state_31953[(2)]);
var state_31953__$1 = state_31953;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31953__$1,inst_31951);
} else {
if((state_val_31954 === (2))){
var state_31953__$1 = state_31953;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31953__$1,(4),ch);
} else {
if((state_val_31954 === (9))){
var inst_31940 = (state_31953[(9)]);
var inst_31933 = inst_31940;
var state_31953__$1 = (function (){var statearr_31971 = state_31953;
(statearr_31971[(7)] = inst_31933);

return statearr_31971;
})();
var statearr_31972_33718 = state_31953__$1;
(statearr_31972_33718[(2)] = null);

(statearr_31972_33718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (5))){
var inst_31933 = (state_31953[(7)]);
var state_31953__$1 = state_31953;
var statearr_31975_33719 = state_31953__$1;
(statearr_31975_33719[(2)] = inst_31933);

(statearr_31975_33719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (10))){
var inst_31947 = (state_31953[(2)]);
var state_31953__$1 = state_31953;
var statearr_31976_33720 = state_31953__$1;
(statearr_31976_33720[(2)] = inst_31947);

(statearr_31976_33720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (8))){
var inst_31940 = (state_31953[(9)]);
var inst_31943 = cljs.core.deref(inst_31940);
var state_31953__$1 = state_31953;
var statearr_31977_33721 = state_31953__$1;
(statearr_31977_33721[(2)] = inst_31943);

(statearr_31977_33721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__31424__auto__))
;
return ((function (switch__31166__auto__,c__31424__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31167__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31167__auto____0 = (function (){
var statearr_31978 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31978[(0)] = cljs$core$async$reduce_$_state_machine__31167__auto__);

(statearr_31978[(1)] = (1));

return statearr_31978;
});
var cljs$core$async$reduce_$_state_machine__31167__auto____1 = (function (state_31953){
while(true){
var ret_value__31168__auto__ = (function (){try{while(true){
var result__31169__auto__ = switch__31166__auto__(state_31953);
if(cljs.core.keyword_identical_QMARK_(result__31169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31169__auto__;
}
break;
}
}catch (e31979){if((e31979 instanceof Object)){
var ex__31170__auto__ = e31979;
var statearr_31981_33723 = state_31953;
(statearr_31981_33723[(5)] = ex__31170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31979;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33738 = state_31953;
state_31953 = G__33738;
continue;
} else {
return ret_value__31168__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31167__auto__ = function(state_31953){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31167__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31167__auto____1.call(this,state_31953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31167__auto____0;
cljs$core$async$reduce_$_state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31167__auto____1;
return cljs$core$async$reduce_$_state_machine__31167__auto__;
})()
;})(switch__31166__auto__,c__31424__auto__))
})();
var state__31426__auto__ = (function (){var statearr_31984 = (f__31425__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31425__auto__.cljs$core$IFn$_invoke$arity$0() : f__31425__auto__.call(null));
(statearr_31984[(6)] = c__31424__auto__);

return statearr_31984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31426__auto__);
});})(c__31424__auto__))
);

return c__31424__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31424__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31424__auto__,f__$1){
return (function (){
var f__31425__auto__ = (function (){var switch__31166__auto__ = ((function (c__31424__auto__,f__$1){
return (function (state_31991){
var state_val_31992 = (state_31991[(1)]);
if((state_val_31992 === (1))){
var inst_31986 = cljs.core.async.reduce(f__$1,init,ch);
var state_31991__$1 = state_31991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31991__$1,(2),inst_31986);
} else {
if((state_val_31992 === (2))){
var inst_31988 = (state_31991[(2)]);
var inst_31989 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31988) : f__$1.call(null,inst_31988));
var state_31991__$1 = state_31991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31991__$1,inst_31989);
} else {
return null;
}
}
});})(c__31424__auto__,f__$1))
;
return ((function (switch__31166__auto__,c__31424__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31167__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31167__auto____0 = (function (){
var statearr_31993 = [null,null,null,null,null,null,null];
(statearr_31993[(0)] = cljs$core$async$transduce_$_state_machine__31167__auto__);

(statearr_31993[(1)] = (1));

return statearr_31993;
});
var cljs$core$async$transduce_$_state_machine__31167__auto____1 = (function (state_31991){
while(true){
var ret_value__31168__auto__ = (function (){try{while(true){
var result__31169__auto__ = switch__31166__auto__(state_31991);
if(cljs.core.keyword_identical_QMARK_(result__31169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31169__auto__;
}
break;
}
}catch (e31994){if((e31994 instanceof Object)){
var ex__31170__auto__ = e31994;
var statearr_31995_33749 = state_31991;
(statearr_31995_33749[(5)] = ex__31170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31994;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33750 = state_31991;
state_31991 = G__33750;
continue;
} else {
return ret_value__31168__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31167__auto__ = function(state_31991){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31167__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31167__auto____1.call(this,state_31991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31167__auto____0;
cljs$core$async$transduce_$_state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31167__auto____1;
return cljs$core$async$transduce_$_state_machine__31167__auto__;
})()
;})(switch__31166__auto__,c__31424__auto__,f__$1))
})();
var state__31426__auto__ = (function (){var statearr_31996 = (f__31425__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31425__auto__.cljs$core$IFn$_invoke$arity$0() : f__31425__auto__.call(null));
(statearr_31996[(6)] = c__31424__auto__);

return statearr_31996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31426__auto__);
});})(c__31424__auto__,f__$1))
);

return c__31424__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31998 = arguments.length;
switch (G__31998) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31424__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31424__auto__){
return (function (){
var f__31425__auto__ = (function (){var switch__31166__auto__ = ((function (c__31424__auto__){
return (function (state_32023){
var state_val_32024 = (state_32023[(1)]);
if((state_val_32024 === (7))){
var inst_32005 = (state_32023[(2)]);
var state_32023__$1 = state_32023;
var statearr_32025_33756 = state_32023__$1;
(statearr_32025_33756[(2)] = inst_32005);

(statearr_32025_33756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (1))){
var inst_31999 = cljs.core.seq(coll);
var inst_32000 = inst_31999;
var state_32023__$1 = (function (){var statearr_32027 = state_32023;
(statearr_32027[(7)] = inst_32000);

return statearr_32027;
})();
var statearr_32028_33757 = state_32023__$1;
(statearr_32028_33757[(2)] = null);

(statearr_32028_33757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (4))){
var inst_32000 = (state_32023[(7)]);
var inst_32003 = cljs.core.first(inst_32000);
var state_32023__$1 = state_32023;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32023__$1,(7),ch,inst_32003);
} else {
if((state_val_32024 === (13))){
var inst_32017 = (state_32023[(2)]);
var state_32023__$1 = state_32023;
var statearr_32029_33760 = state_32023__$1;
(statearr_32029_33760[(2)] = inst_32017);

(statearr_32029_33760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (6))){
var inst_32008 = (state_32023[(2)]);
var state_32023__$1 = state_32023;
if(cljs.core.truth_(inst_32008)){
var statearr_32030_33764 = state_32023__$1;
(statearr_32030_33764[(1)] = (8));

} else {
var statearr_32031_33765 = state_32023__$1;
(statearr_32031_33765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (3))){
var inst_32021 = (state_32023[(2)]);
var state_32023__$1 = state_32023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32023__$1,inst_32021);
} else {
if((state_val_32024 === (12))){
var state_32023__$1 = state_32023;
var statearr_32032_33767 = state_32023__$1;
(statearr_32032_33767[(2)] = null);

(statearr_32032_33767[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (2))){
var inst_32000 = (state_32023[(7)]);
var state_32023__$1 = state_32023;
if(cljs.core.truth_(inst_32000)){
var statearr_32033_33768 = state_32023__$1;
(statearr_32033_33768[(1)] = (4));

} else {
var statearr_32034_33769 = state_32023__$1;
(statearr_32034_33769[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (11))){
var inst_32014 = cljs.core.async.close_BANG_(ch);
var state_32023__$1 = state_32023;
var statearr_32035_33772 = state_32023__$1;
(statearr_32035_33772[(2)] = inst_32014);

(statearr_32035_33772[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (9))){
var state_32023__$1 = state_32023;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32036_33773 = state_32023__$1;
(statearr_32036_33773[(1)] = (11));

} else {
var statearr_32037_33774 = state_32023__$1;
(statearr_32037_33774[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (5))){
var inst_32000 = (state_32023[(7)]);
var state_32023__$1 = state_32023;
var statearr_32038_33775 = state_32023__$1;
(statearr_32038_33775[(2)] = inst_32000);

(statearr_32038_33775[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (10))){
var inst_32019 = (state_32023[(2)]);
var state_32023__$1 = state_32023;
var statearr_32039_33776 = state_32023__$1;
(statearr_32039_33776[(2)] = inst_32019);

(statearr_32039_33776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32024 === (8))){
var inst_32000 = (state_32023[(7)]);
var inst_32010 = cljs.core.next(inst_32000);
var inst_32000__$1 = inst_32010;
var state_32023__$1 = (function (){var statearr_32040 = state_32023;
(statearr_32040[(7)] = inst_32000__$1);

return statearr_32040;
})();
var statearr_32041_33777 = state_32023__$1;
(statearr_32041_33777[(2)] = null);

(statearr_32041_33777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31424__auto__))
;
return ((function (switch__31166__auto__,c__31424__auto__){
return (function() {
var cljs$core$async$state_machine__31167__auto__ = null;
var cljs$core$async$state_machine__31167__auto____0 = (function (){
var statearr_32042 = [null,null,null,null,null,null,null,null];
(statearr_32042[(0)] = cljs$core$async$state_machine__31167__auto__);

(statearr_32042[(1)] = (1));

return statearr_32042;
});
var cljs$core$async$state_machine__31167__auto____1 = (function (state_32023){
while(true){
var ret_value__31168__auto__ = (function (){try{while(true){
var result__31169__auto__ = switch__31166__auto__(state_32023);
if(cljs.core.keyword_identical_QMARK_(result__31169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31169__auto__;
}
break;
}
}catch (e32043){if((e32043 instanceof Object)){
var ex__31170__auto__ = e32043;
var statearr_32044_33778 = state_32023;
(statearr_32044_33778[(5)] = ex__31170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32043;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33783 = state_32023;
state_32023 = G__33783;
continue;
} else {
return ret_value__31168__auto__;
}
break;
}
});
cljs$core$async$state_machine__31167__auto__ = function(state_32023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31167__auto____1.call(this,state_32023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31167__auto____0;
cljs$core$async$state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31167__auto____1;
return cljs$core$async$state_machine__31167__auto__;
})()
;})(switch__31166__auto__,c__31424__auto__))
})();
var state__31426__auto__ = (function (){var statearr_32045 = (f__31425__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31425__auto__.cljs$core$IFn$_invoke$arity$0() : f__31425__auto__.call(null));
(statearr_32045[(6)] = c__31424__auto__);

return statearr_32045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31426__auto__);
});})(c__31424__auto__))
);

return c__31424__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32052 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32052 = (function (ch,cs,meta32053){
this.ch = ch;
this.cs = cs;
this.meta32053 = meta32053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32054,meta32053__$1){
var self__ = this;
var _32054__$1 = this;
return (new cljs.core.async.t_cljs$core$async32052(self__.ch,self__.cs,meta32053__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32052.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32054){
var self__ = this;
var _32054__$1 = this;
return self__.meta32053;
});})(cs))
;

cljs.core.async.t_cljs$core$async32052.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32052.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32052.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32052.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32052.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32052.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32052.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32053","meta32053",-701742881,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32052.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32052";

cljs.core.async.t_cljs$core$async32052.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32052");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32052.
 */
cljs.core.async.__GT_t_cljs$core$async32052 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32052(ch__$1,cs__$1,meta32053){
return (new cljs.core.async.t_cljs$core$async32052(ch__$1,cs__$1,meta32053));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32052(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31424__auto___33816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31424__auto___33816,cs,m,dchan,dctr,done){
return (function (){
var f__31425__auto__ = (function (){var switch__31166__auto__ = ((function (c__31424__auto___33816,cs,m,dchan,dctr,done){
return (function (state_32197){
var state_val_32198 = (state_32197[(1)]);
if((state_val_32198 === (7))){
var inst_32193 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32204_33817 = state_32197__$1;
(statearr_32204_33817[(2)] = inst_32193);

(statearr_32204_33817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (20))){
var inst_32088 = (state_32197[(7)]);
var inst_32100 = cljs.core.first(inst_32088);
var inst_32101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32100,(0),null);
var inst_32102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32100,(1),null);
var state_32197__$1 = (function (){var statearr_32205 = state_32197;
(statearr_32205[(8)] = inst_32101);

return statearr_32205;
})();
if(cljs.core.truth_(inst_32102)){
var statearr_32206_33818 = state_32197__$1;
(statearr_32206_33818[(1)] = (22));

} else {
var statearr_32207_33819 = state_32197__$1;
(statearr_32207_33819[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (27))){
var inst_32134 = (state_32197[(9)]);
var inst_32057 = (state_32197[(10)]);
var inst_32136 = (state_32197[(11)]);
var inst_32141 = (state_32197[(12)]);
var inst_32141__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32134,inst_32136);
var inst_32142 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32141__$1,inst_32057,done);
var state_32197__$1 = (function (){var statearr_32211 = state_32197;
(statearr_32211[(12)] = inst_32141__$1);

return statearr_32211;
})();
if(cljs.core.truth_(inst_32142)){
var statearr_32212_33820 = state_32197__$1;
(statearr_32212_33820[(1)] = (30));

} else {
var statearr_32213_33821 = state_32197__$1;
(statearr_32213_33821[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (1))){
var state_32197__$1 = state_32197;
var statearr_32214_33822 = state_32197__$1;
(statearr_32214_33822[(2)] = null);

(statearr_32214_33822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (24))){
var inst_32088 = (state_32197[(7)]);
var inst_32107 = (state_32197[(2)]);
var inst_32108 = cljs.core.next(inst_32088);
var inst_32066 = inst_32108;
var inst_32067 = null;
var inst_32068 = (0);
var inst_32069 = (0);
var state_32197__$1 = (function (){var statearr_32215 = state_32197;
(statearr_32215[(13)] = inst_32069);

(statearr_32215[(14)] = inst_32068);

(statearr_32215[(15)] = inst_32067);

(statearr_32215[(16)] = inst_32107);

(statearr_32215[(17)] = inst_32066);

return statearr_32215;
})();
var statearr_32216_33823 = state_32197__$1;
(statearr_32216_33823[(2)] = null);

(statearr_32216_33823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (39))){
var state_32197__$1 = state_32197;
var statearr_32228_33824 = state_32197__$1;
(statearr_32228_33824[(2)] = null);

(statearr_32228_33824[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (4))){
var inst_32057 = (state_32197[(10)]);
var inst_32057__$1 = (state_32197[(2)]);
var inst_32058 = (inst_32057__$1 == null);
var state_32197__$1 = (function (){var statearr_32231 = state_32197;
(statearr_32231[(10)] = inst_32057__$1);

return statearr_32231;
})();
if(cljs.core.truth_(inst_32058)){
var statearr_32232_33825 = state_32197__$1;
(statearr_32232_33825[(1)] = (5));

} else {
var statearr_32233_33826 = state_32197__$1;
(statearr_32233_33826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (15))){
var inst_32069 = (state_32197[(13)]);
var inst_32068 = (state_32197[(14)]);
var inst_32067 = (state_32197[(15)]);
var inst_32066 = (state_32197[(17)]);
var inst_32084 = (state_32197[(2)]);
var inst_32085 = (inst_32069 + (1));
var tmp32225 = inst_32068;
var tmp32226 = inst_32067;
var tmp32227 = inst_32066;
var inst_32066__$1 = tmp32227;
var inst_32067__$1 = tmp32226;
var inst_32068__$1 = tmp32225;
var inst_32069__$1 = inst_32085;
var state_32197__$1 = (function (){var statearr_32234 = state_32197;
(statearr_32234[(18)] = inst_32084);

(statearr_32234[(13)] = inst_32069__$1);

(statearr_32234[(14)] = inst_32068__$1);

(statearr_32234[(15)] = inst_32067__$1);

(statearr_32234[(17)] = inst_32066__$1);

return statearr_32234;
})();
var statearr_32235_33828 = state_32197__$1;
(statearr_32235_33828[(2)] = null);

(statearr_32235_33828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (21))){
var inst_32111 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32239_33829 = state_32197__$1;
(statearr_32239_33829[(2)] = inst_32111);

(statearr_32239_33829[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (31))){
var inst_32141 = (state_32197[(12)]);
var inst_32145 = done(null);
var inst_32146 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32141);
var state_32197__$1 = (function (){var statearr_32240 = state_32197;
(statearr_32240[(19)] = inst_32145);

return statearr_32240;
})();
var statearr_32241_33830 = state_32197__$1;
(statearr_32241_33830[(2)] = inst_32146);

(statearr_32241_33830[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (32))){
var inst_32134 = (state_32197[(9)]);
var inst_32135 = (state_32197[(20)]);
var inst_32136 = (state_32197[(11)]);
var inst_32133 = (state_32197[(21)]);
var inst_32148 = (state_32197[(2)]);
var inst_32149 = (inst_32136 + (1));
var tmp32236 = inst_32134;
var tmp32237 = inst_32135;
var tmp32238 = inst_32133;
var inst_32133__$1 = tmp32238;
var inst_32134__$1 = tmp32236;
var inst_32135__$1 = tmp32237;
var inst_32136__$1 = inst_32149;
var state_32197__$1 = (function (){var statearr_32242 = state_32197;
(statearr_32242[(9)] = inst_32134__$1);

(statearr_32242[(20)] = inst_32135__$1);

(statearr_32242[(11)] = inst_32136__$1);

(statearr_32242[(22)] = inst_32148);

(statearr_32242[(21)] = inst_32133__$1);

return statearr_32242;
})();
var statearr_32243_33836 = state_32197__$1;
(statearr_32243_33836[(2)] = null);

(statearr_32243_33836[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (40))){
var inst_32165 = (state_32197[(23)]);
var inst_32169 = done(null);
var inst_32170 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32165);
var state_32197__$1 = (function (){var statearr_32244 = state_32197;
(statearr_32244[(24)] = inst_32169);

return statearr_32244;
})();
var statearr_32245_33839 = state_32197__$1;
(statearr_32245_33839[(2)] = inst_32170);

(statearr_32245_33839[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (33))){
var inst_32156 = (state_32197[(25)]);
var inst_32158 = cljs.core.chunked_seq_QMARK_(inst_32156);
var state_32197__$1 = state_32197;
if(inst_32158){
var statearr_32246_33840 = state_32197__$1;
(statearr_32246_33840[(1)] = (36));

} else {
var statearr_32247_33841 = state_32197__$1;
(statearr_32247_33841[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (13))){
var inst_32078 = (state_32197[(26)]);
var inst_32081 = cljs.core.async.close_BANG_(inst_32078);
var state_32197__$1 = state_32197;
var statearr_32248_33842 = state_32197__$1;
(statearr_32248_33842[(2)] = inst_32081);

(statearr_32248_33842[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (22))){
var inst_32101 = (state_32197[(8)]);
var inst_32104 = cljs.core.async.close_BANG_(inst_32101);
var state_32197__$1 = state_32197;
var statearr_32249_33843 = state_32197__$1;
(statearr_32249_33843[(2)] = inst_32104);

(statearr_32249_33843[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (36))){
var inst_32156 = (state_32197[(25)]);
var inst_32160 = cljs.core.chunk_first(inst_32156);
var inst_32161 = cljs.core.chunk_rest(inst_32156);
var inst_32162 = cljs.core.count(inst_32160);
var inst_32133 = inst_32161;
var inst_32134 = inst_32160;
var inst_32135 = inst_32162;
var inst_32136 = (0);
var state_32197__$1 = (function (){var statearr_32250 = state_32197;
(statearr_32250[(9)] = inst_32134);

(statearr_32250[(20)] = inst_32135);

(statearr_32250[(11)] = inst_32136);

(statearr_32250[(21)] = inst_32133);

return statearr_32250;
})();
var statearr_32251_33844 = state_32197__$1;
(statearr_32251_33844[(2)] = null);

(statearr_32251_33844[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (41))){
var inst_32156 = (state_32197[(25)]);
var inst_32172 = (state_32197[(2)]);
var inst_32173 = cljs.core.next(inst_32156);
var inst_32133 = inst_32173;
var inst_32134 = null;
var inst_32135 = (0);
var inst_32136 = (0);
var state_32197__$1 = (function (){var statearr_32253 = state_32197;
(statearr_32253[(9)] = inst_32134);

(statearr_32253[(20)] = inst_32135);

(statearr_32253[(11)] = inst_32136);

(statearr_32253[(21)] = inst_32133);

(statearr_32253[(27)] = inst_32172);

return statearr_32253;
})();
var statearr_32254_33846 = state_32197__$1;
(statearr_32254_33846[(2)] = null);

(statearr_32254_33846[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (43))){
var state_32197__$1 = state_32197;
var statearr_32255_33847 = state_32197__$1;
(statearr_32255_33847[(2)] = null);

(statearr_32255_33847[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (29))){
var inst_32181 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32256_33848 = state_32197__$1;
(statearr_32256_33848[(2)] = inst_32181);

(statearr_32256_33848[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (44))){
var inst_32190 = (state_32197[(2)]);
var state_32197__$1 = (function (){var statearr_32257 = state_32197;
(statearr_32257[(28)] = inst_32190);

return statearr_32257;
})();
var statearr_32258_33849 = state_32197__$1;
(statearr_32258_33849[(2)] = null);

(statearr_32258_33849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (6))){
var inst_32121 = (state_32197[(29)]);
var inst_32120 = cljs.core.deref(cs);
var inst_32121__$1 = cljs.core.keys(inst_32120);
var inst_32122 = cljs.core.count(inst_32121__$1);
var inst_32123 = cljs.core.reset_BANG_(dctr,inst_32122);
var inst_32132 = cljs.core.seq(inst_32121__$1);
var inst_32133 = inst_32132;
var inst_32134 = null;
var inst_32135 = (0);
var inst_32136 = (0);
var state_32197__$1 = (function (){var statearr_32259 = state_32197;
(statearr_32259[(9)] = inst_32134);

(statearr_32259[(20)] = inst_32135);

(statearr_32259[(11)] = inst_32136);

(statearr_32259[(29)] = inst_32121__$1);

(statearr_32259[(30)] = inst_32123);

(statearr_32259[(21)] = inst_32133);

return statearr_32259;
})();
var statearr_32260_33851 = state_32197__$1;
(statearr_32260_33851[(2)] = null);

(statearr_32260_33851[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (28))){
var inst_32156 = (state_32197[(25)]);
var inst_32133 = (state_32197[(21)]);
var inst_32156__$1 = cljs.core.seq(inst_32133);
var state_32197__$1 = (function (){var statearr_32261 = state_32197;
(statearr_32261[(25)] = inst_32156__$1);

return statearr_32261;
})();
if(inst_32156__$1){
var statearr_32262_33852 = state_32197__$1;
(statearr_32262_33852[(1)] = (33));

} else {
var statearr_32263_33853 = state_32197__$1;
(statearr_32263_33853[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (25))){
var inst_32135 = (state_32197[(20)]);
var inst_32136 = (state_32197[(11)]);
var inst_32138 = (inst_32136 < inst_32135);
var inst_32139 = inst_32138;
var state_32197__$1 = state_32197;
if(cljs.core.truth_(inst_32139)){
var statearr_32264_33854 = state_32197__$1;
(statearr_32264_33854[(1)] = (27));

} else {
var statearr_32265_33855 = state_32197__$1;
(statearr_32265_33855[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (34))){
var state_32197__$1 = state_32197;
var statearr_32266_33856 = state_32197__$1;
(statearr_32266_33856[(2)] = null);

(statearr_32266_33856[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (17))){
var state_32197__$1 = state_32197;
var statearr_32267_33857 = state_32197__$1;
(statearr_32267_33857[(2)] = null);

(statearr_32267_33857[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (3))){
var inst_32195 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32197__$1,inst_32195);
} else {
if((state_val_32198 === (12))){
var inst_32116 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32268_33858 = state_32197__$1;
(statearr_32268_33858[(2)] = inst_32116);

(statearr_32268_33858[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (2))){
var state_32197__$1 = state_32197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32197__$1,(4),ch);
} else {
if((state_val_32198 === (23))){
var state_32197__$1 = state_32197;
var statearr_32269_33859 = state_32197__$1;
(statearr_32269_33859[(2)] = null);

(statearr_32269_33859[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (35))){
var inst_32179 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32270_33860 = state_32197__$1;
(statearr_32270_33860[(2)] = inst_32179);

(statearr_32270_33860[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (19))){
var inst_32088 = (state_32197[(7)]);
var inst_32092 = cljs.core.chunk_first(inst_32088);
var inst_32093 = cljs.core.chunk_rest(inst_32088);
var inst_32094 = cljs.core.count(inst_32092);
var inst_32066 = inst_32093;
var inst_32067 = inst_32092;
var inst_32068 = inst_32094;
var inst_32069 = (0);
var state_32197__$1 = (function (){var statearr_32276 = state_32197;
(statearr_32276[(13)] = inst_32069);

(statearr_32276[(14)] = inst_32068);

(statearr_32276[(15)] = inst_32067);

(statearr_32276[(17)] = inst_32066);

return statearr_32276;
})();
var statearr_32277_33865 = state_32197__$1;
(statearr_32277_33865[(2)] = null);

(statearr_32277_33865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (11))){
var inst_32088 = (state_32197[(7)]);
var inst_32066 = (state_32197[(17)]);
var inst_32088__$1 = cljs.core.seq(inst_32066);
var state_32197__$1 = (function (){var statearr_32278 = state_32197;
(statearr_32278[(7)] = inst_32088__$1);

return statearr_32278;
})();
if(inst_32088__$1){
var statearr_32279_33871 = state_32197__$1;
(statearr_32279_33871[(1)] = (16));

} else {
var statearr_32280_33873 = state_32197__$1;
(statearr_32280_33873[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (9))){
var inst_32118 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32285_33874 = state_32197__$1;
(statearr_32285_33874[(2)] = inst_32118);

(statearr_32285_33874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (5))){
var inst_32064 = cljs.core.deref(cs);
var inst_32065 = cljs.core.seq(inst_32064);
var inst_32066 = inst_32065;
var inst_32067 = null;
var inst_32068 = (0);
var inst_32069 = (0);
var state_32197__$1 = (function (){var statearr_32290 = state_32197;
(statearr_32290[(13)] = inst_32069);

(statearr_32290[(14)] = inst_32068);

(statearr_32290[(15)] = inst_32067);

(statearr_32290[(17)] = inst_32066);

return statearr_32290;
})();
var statearr_32311_33875 = state_32197__$1;
(statearr_32311_33875[(2)] = null);

(statearr_32311_33875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (14))){
var state_32197__$1 = state_32197;
var statearr_32312_33876 = state_32197__$1;
(statearr_32312_33876[(2)] = null);

(statearr_32312_33876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (45))){
var inst_32187 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32313_33877 = state_32197__$1;
(statearr_32313_33877[(2)] = inst_32187);

(statearr_32313_33877[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (26))){
var inst_32121 = (state_32197[(29)]);
var inst_32183 = (state_32197[(2)]);
var inst_32184 = cljs.core.seq(inst_32121);
var state_32197__$1 = (function (){var statearr_32314 = state_32197;
(statearr_32314[(31)] = inst_32183);

return statearr_32314;
})();
if(inst_32184){
var statearr_32315_33878 = state_32197__$1;
(statearr_32315_33878[(1)] = (42));

} else {
var statearr_32316_33879 = state_32197__$1;
(statearr_32316_33879[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (16))){
var inst_32088 = (state_32197[(7)]);
var inst_32090 = cljs.core.chunked_seq_QMARK_(inst_32088);
var state_32197__$1 = state_32197;
if(inst_32090){
var statearr_32317_33882 = state_32197__$1;
(statearr_32317_33882[(1)] = (19));

} else {
var statearr_32318_33883 = state_32197__$1;
(statearr_32318_33883[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (38))){
var inst_32176 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32319_33884 = state_32197__$1;
(statearr_32319_33884[(2)] = inst_32176);

(statearr_32319_33884[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (30))){
var state_32197__$1 = state_32197;
var statearr_32320_33887 = state_32197__$1;
(statearr_32320_33887[(2)] = null);

(statearr_32320_33887[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (10))){
var inst_32069 = (state_32197[(13)]);
var inst_32067 = (state_32197[(15)]);
var inst_32077 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32067,inst_32069);
var inst_32078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32077,(0),null);
var inst_32079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32077,(1),null);
var state_32197__$1 = (function (){var statearr_32321 = state_32197;
(statearr_32321[(26)] = inst_32078);

return statearr_32321;
})();
if(cljs.core.truth_(inst_32079)){
var statearr_32322_33888 = state_32197__$1;
(statearr_32322_33888[(1)] = (13));

} else {
var statearr_32329_33889 = state_32197__$1;
(statearr_32329_33889[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (18))){
var inst_32114 = (state_32197[(2)]);
var state_32197__$1 = state_32197;
var statearr_32330_33890 = state_32197__$1;
(statearr_32330_33890[(2)] = inst_32114);

(statearr_32330_33890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (42))){
var state_32197__$1 = state_32197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32197__$1,(45),dchan);
} else {
if((state_val_32198 === (37))){
var inst_32057 = (state_32197[(10)]);
var inst_32156 = (state_32197[(25)]);
var inst_32165 = (state_32197[(23)]);
var inst_32165__$1 = cljs.core.first(inst_32156);
var inst_32166 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32165__$1,inst_32057,done);
var state_32197__$1 = (function (){var statearr_32331 = state_32197;
(statearr_32331[(23)] = inst_32165__$1);

return statearr_32331;
})();
if(cljs.core.truth_(inst_32166)){
var statearr_32332_33891 = state_32197__$1;
(statearr_32332_33891[(1)] = (39));

} else {
var statearr_32333_33892 = state_32197__$1;
(statearr_32333_33892[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32198 === (8))){
var inst_32069 = (state_32197[(13)]);
var inst_32068 = (state_32197[(14)]);
var inst_32071 = (inst_32069 < inst_32068);
var inst_32072 = inst_32071;
var state_32197__$1 = state_32197;
if(cljs.core.truth_(inst_32072)){
var statearr_32334_33894 = state_32197__$1;
(statearr_32334_33894[(1)] = (10));

} else {
var statearr_32335_33895 = state_32197__$1;
(statearr_32335_33895[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31424__auto___33816,cs,m,dchan,dctr,done))
;
return ((function (switch__31166__auto__,c__31424__auto___33816,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31167__auto__ = null;
var cljs$core$async$mult_$_state_machine__31167__auto____0 = (function (){
var statearr_32336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32336[(0)] = cljs$core$async$mult_$_state_machine__31167__auto__);

(statearr_32336[(1)] = (1));

return statearr_32336;
});
var cljs$core$async$mult_$_state_machine__31167__auto____1 = (function (state_32197){
while(true){
var ret_value__31168__auto__ = (function (){try{while(true){
var result__31169__auto__ = switch__31166__auto__(state_32197);
if(cljs.core.keyword_identical_QMARK_(result__31169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31169__auto__;
}
break;
}
}catch (e32337){if((e32337 instanceof Object)){
var ex__31170__auto__ = e32337;
var statearr_32338_33896 = state_32197;
(statearr_32338_33896[(5)] = ex__31170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32337;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33898 = state_32197;
state_32197 = G__33898;
continue;
} else {
return ret_value__31168__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31167__auto__ = function(state_32197){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31167__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31167__auto____1.call(this,state_32197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31167__auto____0;
cljs$core$async$mult_$_state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31167__auto____1;
return cljs$core$async$mult_$_state_machine__31167__auto__;
})()
;})(switch__31166__auto__,c__31424__auto___33816,cs,m,dchan,dctr,done))
})();
var state__31426__auto__ = (function (){var statearr_32339 = (f__31425__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31425__auto__.cljs$core$IFn$_invoke$arity$0() : f__31425__auto__.call(null));
(statearr_32339[(6)] = c__31424__auto___33816);

return statearr_32339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31426__auto__);
});})(c__31424__auto___33816,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32341 = arguments.length;
switch (G__32341) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33921 = arguments.length;
var i__4731__auto___33922 = (0);
while(true){
if((i__4731__auto___33922 < len__4730__auto___33921)){
args__4736__auto__.push((arguments[i__4731__auto___33922]));

var G__33923 = (i__4731__auto___33922 + (1));
i__4731__auto___33922 = G__33923;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32356){
var map__32357 = p__32356;
var map__32357__$1 = (((((!((map__32357 == null))))?(((((map__32357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32357):map__32357);
var opts = map__32357__$1;
var statearr_32359_33933 = state;
(statearr_32359_33933[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__32357,map__32357__$1,opts){
return (function (val){
var statearr_32360_33934 = state;
(statearr_32360_33934[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__32357,map__32357__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_32361_33935 = state;
(statearr_32361_33935[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32352){
var G__32353 = cljs.core.first(seq32352);
var seq32352__$1 = cljs.core.next(seq32352);
var G__32354 = cljs.core.first(seq32352__$1);
var seq32352__$2 = cljs.core.next(seq32352__$1);
var G__32355 = cljs.core.first(seq32352__$2);
var seq32352__$3 = cljs.core.next(seq32352__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32353,G__32354,G__32355,seq32352__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32365 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32365 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32366){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32366 = meta32366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32367,meta32366__$1){
var self__ = this;
var _32367__$1 = this;
return (new cljs.core.async.t_cljs$core$async32365(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32366__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32367){
var self__ = this;
var _32367__$1 = this;
return self__.meta32366;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32365.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32366","meta32366",1490354130,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32365.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32365";

cljs.core.async.t_cljs$core$async32365.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32365");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32365.
 */
cljs.core.async.__GT_t_cljs$core$async32365 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32365(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32366){
return (new cljs.core.async.t_cljs$core$async32365(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32366));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32365(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31424__auto___33984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31424__auto___33984,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31425__auto__ = (function (){var switch__31166__auto__ = ((function (c__31424__auto___33984,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32477){
var state_val_32478 = (state_32477[(1)]);
if((state_val_32478 === (7))){
var inst_32392 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
var statearr_32479_33985 = state_32477__$1;
(statearr_32479_33985[(2)] = inst_32392);

(statearr_32479_33985[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (20))){
var inst_32404 = (state_32477[(7)]);
var state_32477__$1 = state_32477;
var statearr_32480_33986 = state_32477__$1;
(statearr_32480_33986[(2)] = inst_32404);

(statearr_32480_33986[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (27))){
var state_32477__$1 = state_32477;
var statearr_32481_33987 = state_32477__$1;
(statearr_32481_33987[(2)] = null);

(statearr_32481_33987[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (1))){
var inst_32379 = (state_32477[(8)]);
var inst_32379__$1 = calc_state();
var inst_32381 = (inst_32379__$1 == null);
var inst_32382 = cljs.core.not(inst_32381);
var state_32477__$1 = (function (){var statearr_32482 = state_32477;
(statearr_32482[(8)] = inst_32379__$1);

return statearr_32482;
})();
if(inst_32382){
var statearr_32483_33993 = state_32477__$1;
(statearr_32483_33993[(1)] = (2));

} else {
var statearr_32484_33994 = state_32477__$1;
(statearr_32484_33994[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (24))){
var inst_32428 = (state_32477[(9)]);
var inst_32437 = (state_32477[(10)]);
var inst_32451 = (state_32477[(11)]);
var inst_32451__$1 = (inst_32428.cljs$core$IFn$_invoke$arity$1 ? inst_32428.cljs$core$IFn$_invoke$arity$1(inst_32437) : inst_32428.call(null,inst_32437));
var state_32477__$1 = (function (){var statearr_32485 = state_32477;
(statearr_32485[(11)] = inst_32451__$1);

return statearr_32485;
})();
if(cljs.core.truth_(inst_32451__$1)){
var statearr_32486_33996 = state_32477__$1;
(statearr_32486_33996[(1)] = (29));

} else {
var statearr_32487_33997 = state_32477__$1;
(statearr_32487_33997[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (4))){
var inst_32395 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
if(cljs.core.truth_(inst_32395)){
var statearr_32488_33998 = state_32477__$1;
(statearr_32488_33998[(1)] = (8));

} else {
var statearr_32489_33999 = state_32477__$1;
(statearr_32489_33999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (15))){
var inst_32422 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
if(cljs.core.truth_(inst_32422)){
var statearr_32490_34000 = state_32477__$1;
(statearr_32490_34000[(1)] = (19));

} else {
var statearr_32491_34001 = state_32477__$1;
(statearr_32491_34001[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (21))){
var inst_32427 = (state_32477[(12)]);
var inst_32427__$1 = (state_32477[(2)]);
var inst_32428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32427__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32427__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32427__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32477__$1 = (function (){var statearr_32492 = state_32477;
(statearr_32492[(9)] = inst_32428);

(statearr_32492[(12)] = inst_32427__$1);

(statearr_32492[(13)] = inst_32429);

return statearr_32492;
})();
return cljs.core.async.ioc_alts_BANG_(state_32477__$1,(22),inst_32430);
} else {
if((state_val_32478 === (31))){
var inst_32459 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
if(cljs.core.truth_(inst_32459)){
var statearr_32493_34002 = state_32477__$1;
(statearr_32493_34002[(1)] = (32));

} else {
var statearr_32494_34003 = state_32477__$1;
(statearr_32494_34003[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (32))){
var inst_32436 = (state_32477[(14)]);
var state_32477__$1 = state_32477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32477__$1,(35),out,inst_32436);
} else {
if((state_val_32478 === (33))){
var inst_32427 = (state_32477[(12)]);
var inst_32404 = inst_32427;
var state_32477__$1 = (function (){var statearr_32495 = state_32477;
(statearr_32495[(7)] = inst_32404);

return statearr_32495;
})();
var statearr_32496_34005 = state_32477__$1;
(statearr_32496_34005[(2)] = null);

(statearr_32496_34005[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (13))){
var inst_32404 = (state_32477[(7)]);
var inst_32411 = inst_32404.cljs$lang$protocol_mask$partition0$;
var inst_32412 = (inst_32411 & (64));
var inst_32413 = inst_32404.cljs$core$ISeq$;
var inst_32414 = (cljs.core.PROTOCOL_SENTINEL === inst_32413);
var inst_32415 = ((inst_32412) || (inst_32414));
var state_32477__$1 = state_32477;
if(cljs.core.truth_(inst_32415)){
var statearr_32497_34013 = state_32477__$1;
(statearr_32497_34013[(1)] = (16));

} else {
var statearr_32498_34014 = state_32477__$1;
(statearr_32498_34014[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (22))){
var inst_32436 = (state_32477[(14)]);
var inst_32437 = (state_32477[(10)]);
var inst_32435 = (state_32477[(2)]);
var inst_32436__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32435,(0),null);
var inst_32437__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32435,(1),null);
var inst_32438 = (inst_32436__$1 == null);
var inst_32439 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32437__$1,change);
var inst_32440 = ((inst_32438) || (inst_32439));
var state_32477__$1 = (function (){var statearr_32499 = state_32477;
(statearr_32499[(14)] = inst_32436__$1);

(statearr_32499[(10)] = inst_32437__$1);

return statearr_32499;
})();
if(cljs.core.truth_(inst_32440)){
var statearr_32500_34028 = state_32477__$1;
(statearr_32500_34028[(1)] = (23));

} else {
var statearr_32501_34029 = state_32477__$1;
(statearr_32501_34029[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (36))){
var inst_32427 = (state_32477[(12)]);
var inst_32404 = inst_32427;
var state_32477__$1 = (function (){var statearr_32502 = state_32477;
(statearr_32502[(7)] = inst_32404);

return statearr_32502;
})();
var statearr_32503_34030 = state_32477__$1;
(statearr_32503_34030[(2)] = null);

(statearr_32503_34030[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (29))){
var inst_32451 = (state_32477[(11)]);
var state_32477__$1 = state_32477;
var statearr_32504_34031 = state_32477__$1;
(statearr_32504_34031[(2)] = inst_32451);

(statearr_32504_34031[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (6))){
var state_32477__$1 = state_32477;
var statearr_32505_34032 = state_32477__$1;
(statearr_32505_34032[(2)] = false);

(statearr_32505_34032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (28))){
var inst_32447 = (state_32477[(2)]);
var inst_32448 = calc_state();
var inst_32404 = inst_32448;
var state_32477__$1 = (function (){var statearr_32506 = state_32477;
(statearr_32506[(7)] = inst_32404);

(statearr_32506[(15)] = inst_32447);

return statearr_32506;
})();
var statearr_32507_34033 = state_32477__$1;
(statearr_32507_34033[(2)] = null);

(statearr_32507_34033[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (25))){
var inst_32473 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
var statearr_32508_34034 = state_32477__$1;
(statearr_32508_34034[(2)] = inst_32473);

(statearr_32508_34034[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (34))){
var inst_32471 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
var statearr_32509_34035 = state_32477__$1;
(statearr_32509_34035[(2)] = inst_32471);

(statearr_32509_34035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (17))){
var state_32477__$1 = state_32477;
var statearr_32510_34040 = state_32477__$1;
(statearr_32510_34040[(2)] = false);

(statearr_32510_34040[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (3))){
var state_32477__$1 = state_32477;
var statearr_32511_34045 = state_32477__$1;
(statearr_32511_34045[(2)] = false);

(statearr_32511_34045[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (12))){
var inst_32475 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32477__$1,inst_32475);
} else {
if((state_val_32478 === (2))){
var inst_32379 = (state_32477[(8)]);
var inst_32384 = inst_32379.cljs$lang$protocol_mask$partition0$;
var inst_32385 = (inst_32384 & (64));
var inst_32386 = inst_32379.cljs$core$ISeq$;
var inst_32387 = (cljs.core.PROTOCOL_SENTINEL === inst_32386);
var inst_32388 = ((inst_32385) || (inst_32387));
var state_32477__$1 = state_32477;
if(cljs.core.truth_(inst_32388)){
var statearr_32512_34050 = state_32477__$1;
(statearr_32512_34050[(1)] = (5));

} else {
var statearr_32513_34051 = state_32477__$1;
(statearr_32513_34051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (23))){
var inst_32436 = (state_32477[(14)]);
var inst_32442 = (inst_32436 == null);
var state_32477__$1 = state_32477;
if(cljs.core.truth_(inst_32442)){
var statearr_32514_34052 = state_32477__$1;
(statearr_32514_34052[(1)] = (26));

} else {
var statearr_32515_34053 = state_32477__$1;
(statearr_32515_34053[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (35))){
var inst_32462 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
if(cljs.core.truth_(inst_32462)){
var statearr_32516_34061 = state_32477__$1;
(statearr_32516_34061[(1)] = (36));

} else {
var statearr_32517_34062 = state_32477__$1;
(statearr_32517_34062[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (19))){
var inst_32404 = (state_32477[(7)]);
var inst_32424 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32404);
var state_32477__$1 = state_32477;
var statearr_32518_34067 = state_32477__$1;
(statearr_32518_34067[(2)] = inst_32424);

(statearr_32518_34067[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (11))){
var inst_32404 = (state_32477[(7)]);
var inst_32408 = (inst_32404 == null);
var inst_32409 = cljs.core.not(inst_32408);
var state_32477__$1 = state_32477;
if(inst_32409){
var statearr_32519_34091 = state_32477__$1;
(statearr_32519_34091[(1)] = (13));

} else {
var statearr_32520_34096 = state_32477__$1;
(statearr_32520_34096[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (9))){
var inst_32379 = (state_32477[(8)]);
var state_32477__$1 = state_32477;
var statearr_32521_34101 = state_32477__$1;
(statearr_32521_34101[(2)] = inst_32379);

(statearr_32521_34101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (5))){
var state_32477__$1 = state_32477;
var statearr_32522_34109 = state_32477__$1;
(statearr_32522_34109[(2)] = true);

(statearr_32522_34109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (14))){
var state_32477__$1 = state_32477;
var statearr_32523_34115 = state_32477__$1;
(statearr_32523_34115[(2)] = false);

(statearr_32523_34115[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (26))){
var inst_32437 = (state_32477[(10)]);
var inst_32444 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32437);
var state_32477__$1 = state_32477;
var statearr_32524_34124 = state_32477__$1;
(statearr_32524_34124[(2)] = inst_32444);

(statearr_32524_34124[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (16))){
var state_32477__$1 = state_32477;
var statearr_32529_34127 = state_32477__$1;
(statearr_32529_34127[(2)] = true);

(statearr_32529_34127[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (38))){
var inst_32467 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
var statearr_32530_34133 = state_32477__$1;
(statearr_32530_34133[(2)] = inst_32467);

(statearr_32530_34133[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (30))){
var inst_32428 = (state_32477[(9)]);
var inst_32437 = (state_32477[(10)]);
var inst_32429 = (state_32477[(13)]);
var inst_32454 = cljs.core.empty_QMARK_(inst_32428);
var inst_32455 = (inst_32429.cljs$core$IFn$_invoke$arity$1 ? inst_32429.cljs$core$IFn$_invoke$arity$1(inst_32437) : inst_32429.call(null,inst_32437));
var inst_32456 = cljs.core.not(inst_32455);
var inst_32457 = ((inst_32454) && (inst_32456));
var state_32477__$1 = state_32477;
var statearr_32536_34141 = state_32477__$1;
(statearr_32536_34141[(2)] = inst_32457);

(statearr_32536_34141[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (10))){
var inst_32379 = (state_32477[(8)]);
var inst_32400 = (state_32477[(2)]);
var inst_32401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32400,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32400,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32400,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32404 = inst_32379;
var state_32477__$1 = (function (){var statearr_32537 = state_32477;
(statearr_32537[(16)] = inst_32401);

(statearr_32537[(7)] = inst_32404);

(statearr_32537[(17)] = inst_32402);

(statearr_32537[(18)] = inst_32403);

return statearr_32537;
})();
var statearr_32538_34158 = state_32477__$1;
(statearr_32538_34158[(2)] = null);

(statearr_32538_34158[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (18))){
var inst_32419 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
var statearr_32539_34167 = state_32477__$1;
(statearr_32539_34167[(2)] = inst_32419);

(statearr_32539_34167[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (37))){
var state_32477__$1 = state_32477;
var statearr_32540_34172 = state_32477__$1;
(statearr_32540_34172[(2)] = null);

(statearr_32540_34172[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (8))){
var inst_32379 = (state_32477[(8)]);
var inst_32397 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32379);
var state_32477__$1 = state_32477;
var statearr_32541_34173 = state_32477__$1;
(statearr_32541_34173[(2)] = inst_32397);

(statearr_32541_34173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31424__auto___33984,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31166__auto__,c__31424__auto___33984,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31167__auto__ = null;
var cljs$core$async$mix_$_state_machine__31167__auto____0 = (function (){
var statearr_32546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32546[(0)] = cljs$core$async$mix_$_state_machine__31167__auto__);

(statearr_32546[(1)] = (1));

return statearr_32546;
});
var cljs$core$async$mix_$_state_machine__31167__auto____1 = (function (state_32477){
while(true){
var ret_value__31168__auto__ = (function (){try{while(true){
var result__31169__auto__ = switch__31166__auto__(state_32477);
if(cljs.core.keyword_identical_QMARK_(result__31169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31169__auto__;
}
break;
}
}catch (e32547){if((e32547 instanceof Object)){
var ex__31170__auto__ = e32547;
var statearr_32548_34174 = state_32477;
(statearr_32548_34174[(5)] = ex__31170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32547;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34175 = state_32477;
state_32477 = G__34175;
continue;
} else {
return ret_value__31168__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31167__auto__ = function(state_32477){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31167__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31167__auto____1.call(this,state_32477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31167__auto____0;
cljs$core$async$mix_$_state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31167__auto____1;
return cljs$core$async$mix_$_state_machine__31167__auto__;
})()
;})(switch__31166__auto__,c__31424__auto___33984,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31426__auto__ = (function (){var statearr_32549 = (f__31425__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31425__auto__.cljs$core$IFn$_invoke$arity$0() : f__31425__auto__.call(null));
(statearr_32549[(6)] = c__31424__auto___33984);

return statearr_32549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31426__auto__);
});})(c__31424__auto___33984,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32551 = arguments.length;
switch (G__32551) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32564 = arguments.length;
switch (G__32564) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__32552_SHARP_){
if(cljs.core.truth_((p1__32552_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32552_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32552_SHARP_.call(null,topic)))){
return p1__32552_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32552_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32565 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32565 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32566){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32566 = meta32566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32567,meta32566__$1){
var self__ = this;
var _32567__$1 = this;
return (new cljs.core.async.t_cljs$core$async32565(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32566__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32565.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32567){
var self__ = this;
var _32567__$1 = this;
return self__.meta32566;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32565.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32565.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32565.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32565.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32565.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32565.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32565.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32565.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32566","meta32566",-697831658,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32565.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32565.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32565";

cljs.core.async.t_cljs$core$async32565.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32565");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32565.
 */
cljs.core.async.__GT_t_cljs$core$async32565 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32565(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32566){
return (new cljs.core.async.t_cljs$core$async32565(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32566));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32565(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31424__auto___34256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31424__auto___34256,mults,ensure_mult,p){
return (function (){
var f__31425__auto__ = (function (){var switch__31166__auto__ = ((function (c__31424__auto___34256,mults,ensure_mult,p){
return (function (state_32639){
var state_val_32640 = (state_32639[(1)]);
if((state_val_32640 === (7))){
var inst_32635 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
var statearr_32641_34257 = state_32639__$1;
(statearr_32641_34257[(2)] = inst_32635);

(statearr_32641_34257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (20))){
var state_32639__$1 = state_32639;
var statearr_32642_34258 = state_32639__$1;
(statearr_32642_34258[(2)] = null);

(statearr_32642_34258[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (1))){
var state_32639__$1 = state_32639;
var statearr_32643_34259 = state_32639__$1;
(statearr_32643_34259[(2)] = null);

(statearr_32643_34259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (24))){
var inst_32618 = (state_32639[(7)]);
var inst_32627 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32618);
var state_32639__$1 = state_32639;
var statearr_32644_34260 = state_32639__$1;
(statearr_32644_34260[(2)] = inst_32627);

(statearr_32644_34260[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (4))){
var inst_32570 = (state_32639[(8)]);
var inst_32570__$1 = (state_32639[(2)]);
var inst_32571 = (inst_32570__$1 == null);
var state_32639__$1 = (function (){var statearr_32645 = state_32639;
(statearr_32645[(8)] = inst_32570__$1);

return statearr_32645;
})();
if(cljs.core.truth_(inst_32571)){
var statearr_32646_34261 = state_32639__$1;
(statearr_32646_34261[(1)] = (5));

} else {
var statearr_32647_34262 = state_32639__$1;
(statearr_32647_34262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (15))){
var inst_32612 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
var statearr_32648_34263 = state_32639__$1;
(statearr_32648_34263[(2)] = inst_32612);

(statearr_32648_34263[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (21))){
var inst_32632 = (state_32639[(2)]);
var state_32639__$1 = (function (){var statearr_32649 = state_32639;
(statearr_32649[(9)] = inst_32632);

return statearr_32649;
})();
var statearr_32650_34265 = state_32639__$1;
(statearr_32650_34265[(2)] = null);

(statearr_32650_34265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (13))){
var inst_32594 = (state_32639[(10)]);
var inst_32596 = cljs.core.chunked_seq_QMARK_(inst_32594);
var state_32639__$1 = state_32639;
if(inst_32596){
var statearr_32651_34266 = state_32639__$1;
(statearr_32651_34266[(1)] = (16));

} else {
var statearr_32652_34267 = state_32639__$1;
(statearr_32652_34267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (22))){
var inst_32624 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
if(cljs.core.truth_(inst_32624)){
var statearr_32653_34268 = state_32639__$1;
(statearr_32653_34268[(1)] = (23));

} else {
var statearr_32654_34269 = state_32639__$1;
(statearr_32654_34269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (6))){
var inst_32620 = (state_32639[(11)]);
var inst_32618 = (state_32639[(7)]);
var inst_32570 = (state_32639[(8)]);
var inst_32618__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32570) : topic_fn.call(null,inst_32570));
var inst_32619 = cljs.core.deref(mults);
var inst_32620__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32619,inst_32618__$1);
var state_32639__$1 = (function (){var statearr_32655 = state_32639;
(statearr_32655[(11)] = inst_32620__$1);

(statearr_32655[(7)] = inst_32618__$1);

return statearr_32655;
})();
if(cljs.core.truth_(inst_32620__$1)){
var statearr_32656_34270 = state_32639__$1;
(statearr_32656_34270[(1)] = (19));

} else {
var statearr_32657_34271 = state_32639__$1;
(statearr_32657_34271[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (25))){
var inst_32629 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
var statearr_32658_34272 = state_32639__$1;
(statearr_32658_34272[(2)] = inst_32629);

(statearr_32658_34272[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (17))){
var inst_32594 = (state_32639[(10)]);
var inst_32603 = cljs.core.first(inst_32594);
var inst_32604 = cljs.core.async.muxch_STAR_(inst_32603);
var inst_32605 = cljs.core.async.close_BANG_(inst_32604);
var inst_32606 = cljs.core.next(inst_32594);
var inst_32580 = inst_32606;
var inst_32581 = null;
var inst_32582 = (0);
var inst_32583 = (0);
var state_32639__$1 = (function (){var statearr_32659 = state_32639;
(statearr_32659[(12)] = inst_32605);

(statearr_32659[(13)] = inst_32583);

(statearr_32659[(14)] = inst_32581);

(statearr_32659[(15)] = inst_32580);

(statearr_32659[(16)] = inst_32582);

return statearr_32659;
})();
var statearr_32660_34273 = state_32639__$1;
(statearr_32660_34273[(2)] = null);

(statearr_32660_34273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (3))){
var inst_32637 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32639__$1,inst_32637);
} else {
if((state_val_32640 === (12))){
var inst_32614 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
var statearr_32661_34274 = state_32639__$1;
(statearr_32661_34274[(2)] = inst_32614);

(statearr_32661_34274[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (2))){
var state_32639__$1 = state_32639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32639__$1,(4),ch);
} else {
if((state_val_32640 === (23))){
var state_32639__$1 = state_32639;
var statearr_32662_34275 = state_32639__$1;
(statearr_32662_34275[(2)] = null);

(statearr_32662_34275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (19))){
var inst_32620 = (state_32639[(11)]);
var inst_32570 = (state_32639[(8)]);
var inst_32622 = cljs.core.async.muxch_STAR_(inst_32620);
var state_32639__$1 = state_32639;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32639__$1,(22),inst_32622,inst_32570);
} else {
if((state_val_32640 === (11))){
var inst_32594 = (state_32639[(10)]);
var inst_32580 = (state_32639[(15)]);
var inst_32594__$1 = cljs.core.seq(inst_32580);
var state_32639__$1 = (function (){var statearr_32663 = state_32639;
(statearr_32663[(10)] = inst_32594__$1);

return statearr_32663;
})();
if(inst_32594__$1){
var statearr_32664_34276 = state_32639__$1;
(statearr_32664_34276[(1)] = (13));

} else {
var statearr_32665_34277 = state_32639__$1;
(statearr_32665_34277[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (9))){
var inst_32616 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
var statearr_32666_34278 = state_32639__$1;
(statearr_32666_34278[(2)] = inst_32616);

(statearr_32666_34278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (5))){
var inst_32577 = cljs.core.deref(mults);
var inst_32578 = cljs.core.vals(inst_32577);
var inst_32579 = cljs.core.seq(inst_32578);
var inst_32580 = inst_32579;
var inst_32581 = null;
var inst_32582 = (0);
var inst_32583 = (0);
var state_32639__$1 = (function (){var statearr_32667 = state_32639;
(statearr_32667[(13)] = inst_32583);

(statearr_32667[(14)] = inst_32581);

(statearr_32667[(15)] = inst_32580);

(statearr_32667[(16)] = inst_32582);

return statearr_32667;
})();
var statearr_32668_34279 = state_32639__$1;
(statearr_32668_34279[(2)] = null);

(statearr_32668_34279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (14))){
var state_32639__$1 = state_32639;
var statearr_32672_34280 = state_32639__$1;
(statearr_32672_34280[(2)] = null);

(statearr_32672_34280[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (16))){
var inst_32594 = (state_32639[(10)]);
var inst_32598 = cljs.core.chunk_first(inst_32594);
var inst_32599 = cljs.core.chunk_rest(inst_32594);
var inst_32600 = cljs.core.count(inst_32598);
var inst_32580 = inst_32599;
var inst_32581 = inst_32598;
var inst_32582 = inst_32600;
var inst_32583 = (0);
var state_32639__$1 = (function (){var statearr_32673 = state_32639;
(statearr_32673[(13)] = inst_32583);

(statearr_32673[(14)] = inst_32581);

(statearr_32673[(15)] = inst_32580);

(statearr_32673[(16)] = inst_32582);

return statearr_32673;
})();
var statearr_32674_34281 = state_32639__$1;
(statearr_32674_34281[(2)] = null);

(statearr_32674_34281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (10))){
var inst_32583 = (state_32639[(13)]);
var inst_32581 = (state_32639[(14)]);
var inst_32580 = (state_32639[(15)]);
var inst_32582 = (state_32639[(16)]);
var inst_32588 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32581,inst_32583);
var inst_32589 = cljs.core.async.muxch_STAR_(inst_32588);
var inst_32590 = cljs.core.async.close_BANG_(inst_32589);
var inst_32591 = (inst_32583 + (1));
var tmp32669 = inst_32581;
var tmp32670 = inst_32580;
var tmp32671 = inst_32582;
var inst_32580__$1 = tmp32670;
var inst_32581__$1 = tmp32669;
var inst_32582__$1 = tmp32671;
var inst_32583__$1 = inst_32591;
var state_32639__$1 = (function (){var statearr_32675 = state_32639;
(statearr_32675[(13)] = inst_32583__$1);

(statearr_32675[(14)] = inst_32581__$1);

(statearr_32675[(15)] = inst_32580__$1);

(statearr_32675[(16)] = inst_32582__$1);

(statearr_32675[(17)] = inst_32590);

return statearr_32675;
})();
var statearr_32676_34282 = state_32639__$1;
(statearr_32676_34282[(2)] = null);

(statearr_32676_34282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (18))){
var inst_32609 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
var statearr_32677_34283 = state_32639__$1;
(statearr_32677_34283[(2)] = inst_32609);

(statearr_32677_34283[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (8))){
var inst_32583 = (state_32639[(13)]);
var inst_32582 = (state_32639[(16)]);
var inst_32585 = (inst_32583 < inst_32582);
var inst_32586 = inst_32585;
var state_32639__$1 = state_32639;
if(cljs.core.truth_(inst_32586)){
var statearr_32678_34284 = state_32639__$1;
(statearr_32678_34284[(1)] = (10));

} else {
var statearr_32679_34285 = state_32639__$1;
(statearr_32679_34285[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31424__auto___34256,mults,ensure_mult,p))
;
return ((function (switch__31166__auto__,c__31424__auto___34256,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31167__auto__ = null;
var cljs$core$async$state_machine__31167__auto____0 = (function (){
var statearr_32680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32680[(0)] = cljs$core$async$state_machine__31167__auto__);

(statearr_32680[(1)] = (1));

return statearr_32680;
});
var cljs$core$async$state_machine__31167__auto____1 = (function (state_32639){
while(true){
var ret_value__31168__auto__ = (function (){try{while(true){
var result__31169__auto__ = switch__31166__auto__(state_32639);
if(cljs.core.keyword_identical_QMARK_(result__31169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31169__auto__;
}
break;
}
}catch (e32681){if((e32681 instanceof Object)){
var ex__31170__auto__ = e32681;
var statearr_32682_34293 = state_32639;
(statearr_32682_34293[(5)] = ex__31170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32681;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34294 = state_32639;
state_32639 = G__34294;
continue;
} else {
return ret_value__31168__auto__;
}
break;
}
});
cljs$core$async$state_machine__31167__auto__ = function(state_32639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31167__auto____1.call(this,state_32639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31167__auto____0;
cljs$core$async$state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31167__auto____1;
return cljs$core$async$state_machine__31167__auto__;
})()
;})(switch__31166__auto__,c__31424__auto___34256,mults,ensure_mult,p))
})();
var state__31426__auto__ = (function (){var statearr_32683 = (f__31425__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31425__auto__.cljs$core$IFn$_invoke$arity$0() : f__31425__auto__.call(null));
(statearr_32683[(6)] = c__31424__auto___34256);

return statearr_32683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31426__auto__);
});})(c__31424__auto___34256,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32685 = arguments.length;
switch (G__32685) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32687 = arguments.length;
switch (G__32687) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32690 = arguments.length;
switch (G__32690) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__31424__auto___34316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31424__auto___34316,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31425__auto__ = (function (){var switch__31166__auto__ = ((function (c__31424__auto___34316,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32729){
var state_val_32730 = (state_32729[(1)]);
if((state_val_32730 === (7))){
var state_32729__$1 = state_32729;
var statearr_32731_34317 = state_32729__$1;
(statearr_32731_34317[(2)] = null);

(statearr_32731_34317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (1))){
var state_32729__$1 = state_32729;
var statearr_32732_34318 = state_32729__$1;
(statearr_32732_34318[(2)] = null);

(statearr_32732_34318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (4))){
var inst_32693 = (state_32729[(7)]);
var inst_32695 = (inst_32693 < cnt);
var state_32729__$1 = state_32729;
if(cljs.core.truth_(inst_32695)){
var statearr_32733_34319 = state_32729__$1;
(statearr_32733_34319[(1)] = (6));

} else {
var statearr_32734_34320 = state_32729__$1;
(statearr_32734_34320[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (15))){
var inst_32725 = (state_32729[(2)]);
var state_32729__$1 = state_32729;
var statearr_32735_34321 = state_32729__$1;
(statearr_32735_34321[(2)] = inst_32725);

(statearr_32735_34321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (13))){
var inst_32718 = cljs.core.async.close_BANG_(out);
var state_32729__$1 = state_32729;
var statearr_32736_34322 = state_32729__$1;
(statearr_32736_34322[(2)] = inst_32718);

(statearr_32736_34322[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (6))){
var state_32729__$1 = state_32729;
var statearr_32737_34323 = state_32729__$1;
(statearr_32737_34323[(2)] = null);

(statearr_32737_34323[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (3))){
var inst_32727 = (state_32729[(2)]);
var state_32729__$1 = state_32729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32729__$1,inst_32727);
} else {
if((state_val_32730 === (12))){
var inst_32715 = (state_32729[(8)]);
var inst_32715__$1 = (state_32729[(2)]);
var inst_32716 = cljs.core.some(cljs.core.nil_QMARK_,inst_32715__$1);
var state_32729__$1 = (function (){var statearr_32740 = state_32729;
(statearr_32740[(8)] = inst_32715__$1);

return statearr_32740;
})();
if(cljs.core.truth_(inst_32716)){
var statearr_32741_34324 = state_32729__$1;
(statearr_32741_34324[(1)] = (13));

} else {
var statearr_32742_34325 = state_32729__$1;
(statearr_32742_34325[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (2))){
var inst_32692 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32693 = (0);
var state_32729__$1 = (function (){var statearr_32743 = state_32729;
(statearr_32743[(7)] = inst_32693);

(statearr_32743[(9)] = inst_32692);

return statearr_32743;
})();
var statearr_32744_34331 = state_32729__$1;
(statearr_32744_34331[(2)] = null);

(statearr_32744_34331[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (11))){
var inst_32693 = (state_32729[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32729,(10),Object,null,(9));
var inst_32702 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32693) : chs__$1.call(null,inst_32693));
var inst_32703 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32693) : done.call(null,inst_32693));
var inst_32704 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32702,inst_32703);
var state_32729__$1 = state_32729;
var statearr_32745_34332 = state_32729__$1;
(statearr_32745_34332[(2)] = inst_32704);


cljs.core.async.impl.ioc_helpers.process_exception(state_32729__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (9))){
var inst_32693 = (state_32729[(7)]);
var inst_32706 = (state_32729[(2)]);
var inst_32707 = (inst_32693 + (1));
var inst_32693__$1 = inst_32707;
var state_32729__$1 = (function (){var statearr_32746 = state_32729;
(statearr_32746[(7)] = inst_32693__$1);

(statearr_32746[(10)] = inst_32706);

return statearr_32746;
})();
var statearr_32747_34448 = state_32729__$1;
(statearr_32747_34448[(2)] = null);

(statearr_32747_34448[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (5))){
var inst_32713 = (state_32729[(2)]);
var state_32729__$1 = (function (){var statearr_32752 = state_32729;
(statearr_32752[(11)] = inst_32713);

return statearr_32752;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32729__$1,(12),dchan);
} else {
if((state_val_32730 === (14))){
var inst_32715 = (state_32729[(8)]);
var inst_32720 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32715);
var state_32729__$1 = state_32729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32729__$1,(16),out,inst_32720);
} else {
if((state_val_32730 === (16))){
var inst_32722 = (state_32729[(2)]);
var state_32729__$1 = (function (){var statearr_32757 = state_32729;
(statearr_32757[(12)] = inst_32722);

return statearr_32757;
})();
var statearr_32758_34452 = state_32729__$1;
(statearr_32758_34452[(2)] = null);

(statearr_32758_34452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (10))){
var inst_32697 = (state_32729[(2)]);
var inst_32698 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32729__$1 = (function (){var statearr_32759 = state_32729;
(statearr_32759[(13)] = inst_32697);

return statearr_32759;
})();
var statearr_32760_34453 = state_32729__$1;
(statearr_32760_34453[(2)] = inst_32698);


cljs.core.async.impl.ioc_helpers.process_exception(state_32729__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (8))){
var inst_32711 = (state_32729[(2)]);
var state_32729__$1 = state_32729;
var statearr_32761_34454 = state_32729__$1;
(statearr_32761_34454[(2)] = inst_32711);

(statearr_32761_34454[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31424__auto___34316,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31166__auto__,c__31424__auto___34316,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31167__auto__ = null;
var cljs$core$async$state_machine__31167__auto____0 = (function (){
var statearr_32768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32768[(0)] = cljs$core$async$state_machine__31167__auto__);

(statearr_32768[(1)] = (1));

return statearr_32768;
});
var cljs$core$async$state_machine__31167__auto____1 = (function (state_32729){
while(true){
var ret_value__31168__auto__ = (function (){try{while(true){
var result__31169__auto__ = switch__31166__auto__(state_32729);
if(cljs.core.keyword_identical_QMARK_(result__31169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31169__auto__;
}
break;
}
}catch (e32769){if((e32769 instanceof Object)){
var ex__31170__auto__ = e32769;
var statearr_32772_34455 = state_32729;
(statearr_32772_34455[(5)] = ex__31170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32769;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34456 = state_32729;
state_32729 = G__34456;
continue;
} else {
return ret_value__31168__auto__;
}
break;
}
});
cljs$core$async$state_machine__31167__auto__ = function(state_32729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31167__auto____1.call(this,state_32729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31167__auto____0;
cljs$core$async$state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31167__auto____1;
return cljs$core$async$state_machine__31167__auto__;
})()
;})(switch__31166__auto__,c__31424__auto___34316,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31426__auto__ = (function (){var statearr_32774 = (f__31425__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31425__auto__.cljs$core$IFn$_invoke$arity$0() : f__31425__auto__.call(null));
(statearr_32774[(6)] = c__31424__auto___34316);

return statearr_32774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31426__auto__);
});})(c__31424__auto___34316,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32779 = arguments.length;
switch (G__32779) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31424__auto___34458 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31424__auto___34458,out){
return (function (){
var f__31425__auto__ = (function (){var switch__31166__auto__ = ((function (c__31424__auto___34458,out){
return (function (state_32823){
var state_val_32824 = (state_32823[(1)]);
if((state_val_32824 === (7))){
var inst_32801 = (state_32823[(7)]);
var inst_32800 = (state_32823[(8)]);
var inst_32800__$1 = (state_32823[(2)]);
var inst_32801__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32800__$1,(0),null);
var inst_32802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32800__$1,(1),null);
var inst_32803 = (inst_32801__$1 == null);
var state_32823__$1 = (function (){var statearr_32828 = state_32823;
(statearr_32828[(9)] = inst_32802);

(statearr_32828[(7)] = inst_32801__$1);

(statearr_32828[(8)] = inst_32800__$1);

return statearr_32828;
})();
if(cljs.core.truth_(inst_32803)){
var statearr_32829_34459 = state_32823__$1;
(statearr_32829_34459[(1)] = (8));

} else {
var statearr_32830_34460 = state_32823__$1;
(statearr_32830_34460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32824 === (1))){
var inst_32786 = cljs.core.vec(chs);
var inst_32787 = inst_32786;
var state_32823__$1 = (function (){var statearr_32831 = state_32823;
(statearr_32831[(10)] = inst_32787);

return statearr_32831;
})();
var statearr_32832_34461 = state_32823__$1;
(statearr_32832_34461[(2)] = null);

(statearr_32832_34461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32824 === (4))){
var inst_32787 = (state_32823[(10)]);
var state_32823__$1 = state_32823;
return cljs.core.async.ioc_alts_BANG_(state_32823__$1,(7),inst_32787);
} else {
if((state_val_32824 === (6))){
var inst_32819 = (state_32823[(2)]);
var state_32823__$1 = state_32823;
var statearr_32833_34462 = state_32823__$1;
(statearr_32833_34462[(2)] = inst_32819);

(statearr_32833_34462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32824 === (3))){
var inst_32821 = (state_32823[(2)]);
var state_32823__$1 = state_32823;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32823__$1,inst_32821);
} else {
if((state_val_32824 === (2))){
var inst_32787 = (state_32823[(10)]);
var inst_32793 = cljs.core.count(inst_32787);
var inst_32794 = (inst_32793 > (0));
var state_32823__$1 = state_32823;
if(cljs.core.truth_(inst_32794)){
var statearr_32839_34463 = state_32823__$1;
(statearr_32839_34463[(1)] = (4));

} else {
var statearr_32840_34464 = state_32823__$1;
(statearr_32840_34464[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32824 === (11))){
var inst_32787 = (state_32823[(10)]);
var inst_32810 = (state_32823[(2)]);
var tmp32838 = inst_32787;
var inst_32787__$1 = tmp32838;
var state_32823__$1 = (function (){var statearr_32842 = state_32823;
(statearr_32842[(10)] = inst_32787__$1);

(statearr_32842[(11)] = inst_32810);

return statearr_32842;
})();
var statearr_32845_34465 = state_32823__$1;
(statearr_32845_34465[(2)] = null);

(statearr_32845_34465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32824 === (9))){
var inst_32801 = (state_32823[(7)]);
var state_32823__$1 = state_32823;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32823__$1,(11),out,inst_32801);
} else {
if((state_val_32824 === (5))){
var inst_32817 = cljs.core.async.close_BANG_(out);
var state_32823__$1 = state_32823;
var statearr_32846_34466 = state_32823__$1;
(statearr_32846_34466[(2)] = inst_32817);

(statearr_32846_34466[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32824 === (10))){
var inst_32813 = (state_32823[(2)]);
var state_32823__$1 = state_32823;
var statearr_32847_34467 = state_32823__$1;
(statearr_32847_34467[(2)] = inst_32813);

(statearr_32847_34467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32824 === (8))){
var inst_32787 = (state_32823[(10)]);
var inst_32802 = (state_32823[(9)]);
var inst_32801 = (state_32823[(7)]);
var inst_32800 = (state_32823[(8)]);
var inst_32805 = (function (){var cs = inst_32787;
var vec__32796 = inst_32800;
var v = inst_32801;
var c = inst_32802;
return ((function (cs,vec__32796,v,c,inst_32787,inst_32802,inst_32801,inst_32800,state_val_32824,c__31424__auto___34458,out){
return (function (p1__32777_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32777_SHARP_);
});
;})(cs,vec__32796,v,c,inst_32787,inst_32802,inst_32801,inst_32800,state_val_32824,c__31424__auto___34458,out))
})();
var inst_32806 = cljs.core.filterv(inst_32805,inst_32787);
var inst_32787__$1 = inst_32806;
var state_32823__$1 = (function (){var statearr_32848 = state_32823;
(statearr_32848[(10)] = inst_32787__$1);

return statearr_32848;
})();
var statearr_32849_34468 = state_32823__$1;
(statearr_32849_34468[(2)] = null);

(statearr_32849_34468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31424__auto___34458,out))
;
return ((function (switch__31166__auto__,c__31424__auto___34458,out){
return (function() {
var cljs$core$async$state_machine__31167__auto__ = null;
var cljs$core$async$state_machine__31167__auto____0 = (function (){
var statearr_32850 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32850[(0)] = cljs$core$async$state_machine__31167__auto__);

(statearr_32850[(1)] = (1));

return statearr_32850;
});
var cljs$core$async$state_machine__31167__auto____1 = (function (state_32823){
while(true){
var ret_value__31168__auto__ = (function (){try{while(true){
var result__31169__auto__ = switch__31166__auto__(state_32823);
if(cljs.core.keyword_identical_QMARK_(result__31169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31169__auto__;
}
break;
}
}catch (e32851){if((e32851 instanceof Object)){
var ex__31170__auto__ = e32851;
var statearr_32852_34485 = state_32823;
(statearr_32852_34485[(5)] = ex__31170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32851;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34487 = state_32823;
state_32823 = G__34487;
continue;
} else {
return ret_value__31168__auto__;
}
break;
}
});
cljs$core$async$state_machine__31167__auto__ = function(state_32823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31167__auto____1.call(this,state_32823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31167__auto____0;
cljs$core$async$state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31167__auto____1;
return cljs$core$async$state_machine__31167__auto__;
})()
;})(switch__31166__auto__,c__31424__auto___34458,out))
})();
var state__31426__auto__ = (function (){var statearr_32858 = (f__31425__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31425__auto__.cljs$core$IFn$_invoke$arity$0() : f__31425__auto__.call(null));
(statearr_32858[(6)] = c__31424__auto___34458);

return statearr_32858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31426__auto__);
});})(c__31424__auto___34458,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32868 = arguments.length;
switch (G__32868) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31424__auto___34498 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31424__auto___34498,out){
return (function (){
var f__31425__auto__ = (function (){var switch__31166__auto__ = ((function (c__31424__auto___34498,out){
return (function (state_32906){
var state_val_32907 = (state_32906[(1)]);
if((state_val_32907 === (7))){
var inst_32887 = (state_32906[(7)]);
var inst_32887__$1 = (state_32906[(2)]);
var inst_32888 = (inst_32887__$1 == null);
var inst_32889 = cljs.core.not(inst_32888);
var state_32906__$1 = (function (){var statearr_32924 = state_32906;
(statearr_32924[(7)] = inst_32887__$1);

return statearr_32924;
})();
if(inst_32889){
var statearr_32926_34502 = state_32906__$1;
(statearr_32926_34502[(1)] = (8));

} else {
var statearr_32928_34503 = state_32906__$1;
(statearr_32928_34503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (1))){
var inst_32881 = (0);
var state_32906__$1 = (function (){var statearr_32929 = state_32906;
(statearr_32929[(8)] = inst_32881);

return statearr_32929;
})();
var statearr_32930_34504 = state_32906__$1;
(statearr_32930_34504[(2)] = null);

(statearr_32930_34504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (4))){
var state_32906__$1 = state_32906;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32906__$1,(7),ch);
} else {
if((state_val_32907 === (6))){
var inst_32900 = (state_32906[(2)]);
var state_32906__$1 = state_32906;
var statearr_32931_34505 = state_32906__$1;
(statearr_32931_34505[(2)] = inst_32900);

(statearr_32931_34505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (3))){
var inst_32902 = (state_32906[(2)]);
var inst_32904 = cljs.core.async.close_BANG_(out);
var state_32906__$1 = (function (){var statearr_32932 = state_32906;
(statearr_32932[(9)] = inst_32902);

return statearr_32932;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32906__$1,inst_32904);
} else {
if((state_val_32907 === (2))){
var inst_32881 = (state_32906[(8)]);
var inst_32884 = (inst_32881 < n);
var state_32906__$1 = state_32906;
if(cljs.core.truth_(inst_32884)){
var statearr_32937_34506 = state_32906__$1;
(statearr_32937_34506[(1)] = (4));

} else {
var statearr_32938_34507 = state_32906__$1;
(statearr_32938_34507[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (11))){
var inst_32881 = (state_32906[(8)]);
var inst_32892 = (state_32906[(2)]);
var inst_32893 = (inst_32881 + (1));
var inst_32881__$1 = inst_32893;
var state_32906__$1 = (function (){var statearr_32940 = state_32906;
(statearr_32940[(10)] = inst_32892);

(statearr_32940[(8)] = inst_32881__$1);

return statearr_32940;
})();
var statearr_32941_34508 = state_32906__$1;
(statearr_32941_34508[(2)] = null);

(statearr_32941_34508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (9))){
var state_32906__$1 = state_32906;
var statearr_32944_34509 = state_32906__$1;
(statearr_32944_34509[(2)] = null);

(statearr_32944_34509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (5))){
var state_32906__$1 = state_32906;
var statearr_32946_34510 = state_32906__$1;
(statearr_32946_34510[(2)] = null);

(statearr_32946_34510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (10))){
var inst_32897 = (state_32906[(2)]);
var state_32906__$1 = state_32906;
var statearr_32947_34511 = state_32906__$1;
(statearr_32947_34511[(2)] = inst_32897);

(statearr_32947_34511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32907 === (8))){
var inst_32887 = (state_32906[(7)]);
var state_32906__$1 = state_32906;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32906__$1,(11),out,inst_32887);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31424__auto___34498,out))
;
return ((function (switch__31166__auto__,c__31424__auto___34498,out){
return (function() {
var cljs$core$async$state_machine__31167__auto__ = null;
var cljs$core$async$state_machine__31167__auto____0 = (function (){
var statearr_32951 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32951[(0)] = cljs$core$async$state_machine__31167__auto__);

(statearr_32951[(1)] = (1));

return statearr_32951;
});
var cljs$core$async$state_machine__31167__auto____1 = (function (state_32906){
while(true){
var ret_value__31168__auto__ = (function (){try{while(true){
var result__31169__auto__ = switch__31166__auto__(state_32906);
if(cljs.core.keyword_identical_QMARK_(result__31169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31169__auto__;
}
break;
}
}catch (e32953){if((e32953 instanceof Object)){
var ex__31170__auto__ = e32953;
var statearr_32954_34512 = state_32906;
(statearr_32954_34512[(5)] = ex__31170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32953;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34513 = state_32906;
state_32906 = G__34513;
continue;
} else {
return ret_value__31168__auto__;
}
break;
}
});
cljs$core$async$state_machine__31167__auto__ = function(state_32906){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31167__auto____1.call(this,state_32906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31167__auto____0;
cljs$core$async$state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31167__auto____1;
return cljs$core$async$state_machine__31167__auto__;
})()
;})(switch__31166__auto__,c__31424__auto___34498,out))
})();
var state__31426__auto__ = (function (){var statearr_32958 = (f__31425__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31425__auto__.cljs$core$IFn$_invoke$arity$0() : f__31425__auto__.call(null));
(statearr_32958[(6)] = c__31424__auto___34498);

return statearr_32958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31426__auto__);
});})(c__31424__auto___34498,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32960 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32960 = (function (f,ch,meta32961){
this.f = f;
this.ch = ch;
this.meta32961 = meta32961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32962,meta32961__$1){
var self__ = this;
var _32962__$1 = this;
return (new cljs.core.async.t_cljs$core$async32960(self__.f,self__.ch,meta32961__$1));
});

cljs.core.async.t_cljs$core$async32960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32962){
var self__ = this;
var _32962__$1 = this;
return self__.meta32961;
});

cljs.core.async.t_cljs$core$async32960.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32960.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32960.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32960.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32960.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32963 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32963 = (function (f,ch,meta32961,_,fn1,meta32964){
this.f = f;
this.ch = ch;
this.meta32961 = meta32961;
this._ = _;
this.fn1 = fn1;
this.meta32964 = meta32964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32965,meta32964__$1){
var self__ = this;
var _32965__$1 = this;
return (new cljs.core.async.t_cljs$core$async32963(self__.f,self__.ch,self__.meta32961,self__._,self__.fn1,meta32964__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32963.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32965){
var self__ = this;
var _32965__$1 = this;
return self__.meta32964;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32963.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32963.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32963.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32963.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32959_SHARP_){
var G__32973 = (((p1__32959_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32959_SHARP_) : self__.f.call(null,p1__32959_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32973) : f1.call(null,G__32973));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32963.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32961","meta32961",988968621,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32960","cljs.core.async/t_cljs$core$async32960",-323518385,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32964","meta32964",749024933,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32963.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32963.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32963";

cljs.core.async.t_cljs$core$async32963.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32963");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32963.
 */
cljs.core.async.__GT_t_cljs$core$async32963 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32963(f__$1,ch__$1,meta32961__$1,___$2,fn1__$1,meta32964){
return (new cljs.core.async.t_cljs$core$async32963(f__$1,ch__$1,meta32961__$1,___$2,fn1__$1,meta32964));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32963(self__.f,self__.ch,self__.meta32961,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32981 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32981) : self__.f.call(null,G__32981));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32960.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32960.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32960.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32961","meta32961",988968621,null)], null);
});

cljs.core.async.t_cljs$core$async32960.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32960";

cljs.core.async.t_cljs$core$async32960.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32960");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32960.
 */
cljs.core.async.__GT_t_cljs$core$async32960 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32960(f__$1,ch__$1,meta32961){
return (new cljs.core.async.t_cljs$core$async32960(f__$1,ch__$1,meta32961));
});

}

return (new cljs.core.async.t_cljs$core$async32960(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32992 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32992 = (function (f,ch,meta32993){
this.f = f;
this.ch = ch;
this.meta32993 = meta32993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32994,meta32993__$1){
var self__ = this;
var _32994__$1 = this;
return (new cljs.core.async.t_cljs$core$async32992(self__.f,self__.ch,meta32993__$1));
});

cljs.core.async.t_cljs$core$async32992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32994){
var self__ = this;
var _32994__$1 = this;
return self__.meta32993;
});

cljs.core.async.t_cljs$core$async32992.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32992.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32992.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32992.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32992.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32992.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async32992.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32993","meta32993",-108591952,null)], null);
});

cljs.core.async.t_cljs$core$async32992.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32992.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32992";

cljs.core.async.t_cljs$core$async32992.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32992");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32992.
 */
cljs.core.async.__GT_t_cljs$core$async32992 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32992(f__$1,ch__$1,meta32993){
return (new cljs.core.async.t_cljs$core$async32992(f__$1,ch__$1,meta32993));
});

}

return (new cljs.core.async.t_cljs$core$async32992(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33008 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33008 = (function (p,ch,meta33009){
this.p = p;
this.ch = ch;
this.meta33009 = meta33009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33010,meta33009__$1){
var self__ = this;
var _33010__$1 = this;
return (new cljs.core.async.t_cljs$core$async33008(self__.p,self__.ch,meta33009__$1));
});

cljs.core.async.t_cljs$core$async33008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33010){
var self__ = this;
var _33010__$1 = this;
return self__.meta33009;
});

cljs.core.async.t_cljs$core$async33008.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33008.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async33008.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async33008.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33008.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33008.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33008.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33009","meta33009",-581503541,null)], null);
});

cljs.core.async.t_cljs$core$async33008.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33008.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33008";

cljs.core.async.t_cljs$core$async33008.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33008");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33008.
 */
cljs.core.async.__GT_t_cljs$core$async33008 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33008(p__$1,ch__$1,meta33009){
return (new cljs.core.async.t_cljs$core$async33008(p__$1,ch__$1,meta33009));
});

}

return (new cljs.core.async.t_cljs$core$async33008(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33034 = arguments.length;
switch (G__33034) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31424__auto___34536 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31424__auto___34536,out){
return (function (){
var f__31425__auto__ = (function (){var switch__31166__auto__ = ((function (c__31424__auto___34536,out){
return (function (state_33064){
var state_val_33065 = (state_33064[(1)]);
if((state_val_33065 === (7))){
var inst_33059 = (state_33064[(2)]);
var state_33064__$1 = state_33064;
var statearr_33072_34537 = state_33064__$1;
(statearr_33072_34537[(2)] = inst_33059);

(statearr_33072_34537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33065 === (1))){
var state_33064__$1 = state_33064;
var statearr_33073_34538 = state_33064__$1;
(statearr_33073_34538[(2)] = null);

(statearr_33073_34538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33065 === (4))){
var inst_33043 = (state_33064[(7)]);
var inst_33043__$1 = (state_33064[(2)]);
var inst_33044 = (inst_33043__$1 == null);
var state_33064__$1 = (function (){var statearr_33078 = state_33064;
(statearr_33078[(7)] = inst_33043__$1);

return statearr_33078;
})();
if(cljs.core.truth_(inst_33044)){
var statearr_33079_34540 = state_33064__$1;
(statearr_33079_34540[(1)] = (5));

} else {
var statearr_33080_34541 = state_33064__$1;
(statearr_33080_34541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33065 === (6))){
var inst_33043 = (state_33064[(7)]);
var inst_33049 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33043) : p.call(null,inst_33043));
var state_33064__$1 = state_33064;
if(cljs.core.truth_(inst_33049)){
var statearr_33081_34542 = state_33064__$1;
(statearr_33081_34542[(1)] = (8));

} else {
var statearr_33084_34543 = state_33064__$1;
(statearr_33084_34543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33065 === (3))){
var inst_33061 = (state_33064[(2)]);
var state_33064__$1 = state_33064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33064__$1,inst_33061);
} else {
if((state_val_33065 === (2))){
var state_33064__$1 = state_33064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33064__$1,(4),ch);
} else {
if((state_val_33065 === (11))){
var inst_33052 = (state_33064[(2)]);
var state_33064__$1 = state_33064;
var statearr_33089_34544 = state_33064__$1;
(statearr_33089_34544[(2)] = inst_33052);

(statearr_33089_34544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33065 === (9))){
var state_33064__$1 = state_33064;
var statearr_33090_34545 = state_33064__$1;
(statearr_33090_34545[(2)] = null);

(statearr_33090_34545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33065 === (5))){
var inst_33047 = cljs.core.async.close_BANG_(out);
var state_33064__$1 = state_33064;
var statearr_33114_34546 = state_33064__$1;
(statearr_33114_34546[(2)] = inst_33047);

(statearr_33114_34546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33065 === (10))){
var inst_33055 = (state_33064[(2)]);
var state_33064__$1 = (function (){var statearr_33115 = state_33064;
(statearr_33115[(8)] = inst_33055);

return statearr_33115;
})();
var statearr_33116_34547 = state_33064__$1;
(statearr_33116_34547[(2)] = null);

(statearr_33116_34547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33065 === (8))){
var inst_33043 = (state_33064[(7)]);
var state_33064__$1 = state_33064;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33064__$1,(11),out,inst_33043);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31424__auto___34536,out))
;
return ((function (switch__31166__auto__,c__31424__auto___34536,out){
return (function() {
var cljs$core$async$state_machine__31167__auto__ = null;
var cljs$core$async$state_machine__31167__auto____0 = (function (){
var statearr_33117 = [null,null,null,null,null,null,null,null,null];
(statearr_33117[(0)] = cljs$core$async$state_machine__31167__auto__);

(statearr_33117[(1)] = (1));

return statearr_33117;
});
var cljs$core$async$state_machine__31167__auto____1 = (function (state_33064){
while(true){
var ret_value__31168__auto__ = (function (){try{while(true){
var result__31169__auto__ = switch__31166__auto__(state_33064);
if(cljs.core.keyword_identical_QMARK_(result__31169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31169__auto__;
}
break;
}
}catch (e33118){if((e33118 instanceof Object)){
var ex__31170__auto__ = e33118;
var statearr_33119_34548 = state_33064;
(statearr_33119_34548[(5)] = ex__31170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33118;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34549 = state_33064;
state_33064 = G__34549;
continue;
} else {
return ret_value__31168__auto__;
}
break;
}
});
cljs$core$async$state_machine__31167__auto__ = function(state_33064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31167__auto____1.call(this,state_33064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31167__auto____0;
cljs$core$async$state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31167__auto____1;
return cljs$core$async$state_machine__31167__auto__;
})()
;})(switch__31166__auto__,c__31424__auto___34536,out))
})();
var state__31426__auto__ = (function (){var statearr_33120 = (f__31425__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31425__auto__.cljs$core$IFn$_invoke$arity$0() : f__31425__auto__.call(null));
(statearr_33120[(6)] = c__31424__auto___34536);

return statearr_33120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31426__auto__);
});})(c__31424__auto___34536,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33122 = arguments.length;
switch (G__33122) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31424__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31424__auto__){
return (function (){
var f__31425__auto__ = (function (){var switch__31166__auto__ = ((function (c__31424__auto__){
return (function (state_33184){
var state_val_33185 = (state_33184[(1)]);
if((state_val_33185 === (7))){
var inst_33180 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
var statearr_33186_34551 = state_33184__$1;
(statearr_33186_34551[(2)] = inst_33180);

(statearr_33186_34551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (20))){
var inst_33150 = (state_33184[(7)]);
var inst_33161 = (state_33184[(2)]);
var inst_33162 = cljs.core.next(inst_33150);
var inst_33136 = inst_33162;
var inst_33137 = null;
var inst_33138 = (0);
var inst_33139 = (0);
var state_33184__$1 = (function (){var statearr_33187 = state_33184;
(statearr_33187[(8)] = inst_33136);

(statearr_33187[(9)] = inst_33137);

(statearr_33187[(10)] = inst_33139);

(statearr_33187[(11)] = inst_33138);

(statearr_33187[(12)] = inst_33161);

return statearr_33187;
})();
var statearr_33188_34552 = state_33184__$1;
(statearr_33188_34552[(2)] = null);

(statearr_33188_34552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (1))){
var state_33184__$1 = state_33184;
var statearr_33189_34553 = state_33184__$1;
(statearr_33189_34553[(2)] = null);

(statearr_33189_34553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (4))){
var inst_33125 = (state_33184[(13)]);
var inst_33125__$1 = (state_33184[(2)]);
var inst_33126 = (inst_33125__$1 == null);
var state_33184__$1 = (function (){var statearr_33190 = state_33184;
(statearr_33190[(13)] = inst_33125__$1);

return statearr_33190;
})();
if(cljs.core.truth_(inst_33126)){
var statearr_33201_34554 = state_33184__$1;
(statearr_33201_34554[(1)] = (5));

} else {
var statearr_33202_34555 = state_33184__$1;
(statearr_33202_34555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (15))){
var state_33184__$1 = state_33184;
var statearr_33210_34556 = state_33184__$1;
(statearr_33210_34556[(2)] = null);

(statearr_33210_34556[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (21))){
var state_33184__$1 = state_33184;
var statearr_33211_34557 = state_33184__$1;
(statearr_33211_34557[(2)] = null);

(statearr_33211_34557[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (13))){
var inst_33136 = (state_33184[(8)]);
var inst_33137 = (state_33184[(9)]);
var inst_33139 = (state_33184[(10)]);
var inst_33138 = (state_33184[(11)]);
var inst_33146 = (state_33184[(2)]);
var inst_33147 = (inst_33139 + (1));
var tmp33207 = inst_33136;
var tmp33208 = inst_33137;
var tmp33209 = inst_33138;
var inst_33136__$1 = tmp33207;
var inst_33137__$1 = tmp33208;
var inst_33138__$1 = tmp33209;
var inst_33139__$1 = inst_33147;
var state_33184__$1 = (function (){var statearr_33212 = state_33184;
(statearr_33212[(8)] = inst_33136__$1);

(statearr_33212[(9)] = inst_33137__$1);

(statearr_33212[(14)] = inst_33146);

(statearr_33212[(10)] = inst_33139__$1);

(statearr_33212[(11)] = inst_33138__$1);

return statearr_33212;
})();
var statearr_33213_34558 = state_33184__$1;
(statearr_33213_34558[(2)] = null);

(statearr_33213_34558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (22))){
var state_33184__$1 = state_33184;
var statearr_33214_34559 = state_33184__$1;
(statearr_33214_34559[(2)] = null);

(statearr_33214_34559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (6))){
var inst_33125 = (state_33184[(13)]);
var inst_33134 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33125) : f.call(null,inst_33125));
var inst_33135 = cljs.core.seq(inst_33134);
var inst_33136 = inst_33135;
var inst_33137 = null;
var inst_33138 = (0);
var inst_33139 = (0);
var state_33184__$1 = (function (){var statearr_33215 = state_33184;
(statearr_33215[(8)] = inst_33136);

(statearr_33215[(9)] = inst_33137);

(statearr_33215[(10)] = inst_33139);

(statearr_33215[(11)] = inst_33138);

return statearr_33215;
})();
var statearr_33216_34560 = state_33184__$1;
(statearr_33216_34560[(2)] = null);

(statearr_33216_34560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (17))){
var inst_33150 = (state_33184[(7)]);
var inst_33154 = cljs.core.chunk_first(inst_33150);
var inst_33155 = cljs.core.chunk_rest(inst_33150);
var inst_33156 = cljs.core.count(inst_33154);
var inst_33136 = inst_33155;
var inst_33137 = inst_33154;
var inst_33138 = inst_33156;
var inst_33139 = (0);
var state_33184__$1 = (function (){var statearr_33217 = state_33184;
(statearr_33217[(8)] = inst_33136);

(statearr_33217[(9)] = inst_33137);

(statearr_33217[(10)] = inst_33139);

(statearr_33217[(11)] = inst_33138);

return statearr_33217;
})();
var statearr_33218_34561 = state_33184__$1;
(statearr_33218_34561[(2)] = null);

(statearr_33218_34561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (3))){
var inst_33182 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33184__$1,inst_33182);
} else {
if((state_val_33185 === (12))){
var inst_33170 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
var statearr_33219_34562 = state_33184__$1;
(statearr_33219_34562[(2)] = inst_33170);

(statearr_33219_34562[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (2))){
var state_33184__$1 = state_33184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33184__$1,(4),in$);
} else {
if((state_val_33185 === (23))){
var inst_33178 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
var statearr_33220_34563 = state_33184__$1;
(statearr_33220_34563[(2)] = inst_33178);

(statearr_33220_34563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (19))){
var inst_33165 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
var statearr_33221_34564 = state_33184__$1;
(statearr_33221_34564[(2)] = inst_33165);

(statearr_33221_34564[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (11))){
var inst_33136 = (state_33184[(8)]);
var inst_33150 = (state_33184[(7)]);
var inst_33150__$1 = cljs.core.seq(inst_33136);
var state_33184__$1 = (function (){var statearr_33222 = state_33184;
(statearr_33222[(7)] = inst_33150__$1);

return statearr_33222;
})();
if(inst_33150__$1){
var statearr_33223_34565 = state_33184__$1;
(statearr_33223_34565[(1)] = (14));

} else {
var statearr_33224_34566 = state_33184__$1;
(statearr_33224_34566[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (9))){
var inst_33172 = (state_33184[(2)]);
var inst_33173 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33184__$1 = (function (){var statearr_33225 = state_33184;
(statearr_33225[(15)] = inst_33172);

return statearr_33225;
})();
if(cljs.core.truth_(inst_33173)){
var statearr_33226_34567 = state_33184__$1;
(statearr_33226_34567[(1)] = (21));

} else {
var statearr_33227_34568 = state_33184__$1;
(statearr_33227_34568[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (5))){
var inst_33128 = cljs.core.async.close_BANG_(out);
var state_33184__$1 = state_33184;
var statearr_33228_34569 = state_33184__$1;
(statearr_33228_34569[(2)] = inst_33128);

(statearr_33228_34569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (14))){
var inst_33150 = (state_33184[(7)]);
var inst_33152 = cljs.core.chunked_seq_QMARK_(inst_33150);
var state_33184__$1 = state_33184;
if(inst_33152){
var statearr_33229_34570 = state_33184__$1;
(statearr_33229_34570[(1)] = (17));

} else {
var statearr_33230_34571 = state_33184__$1;
(statearr_33230_34571[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (16))){
var inst_33168 = (state_33184[(2)]);
var state_33184__$1 = state_33184;
var statearr_33231_34572 = state_33184__$1;
(statearr_33231_34572[(2)] = inst_33168);

(statearr_33231_34572[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33185 === (10))){
var inst_33137 = (state_33184[(9)]);
var inst_33139 = (state_33184[(10)]);
var inst_33144 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33137,inst_33139);
var state_33184__$1 = state_33184;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33184__$1,(13),out,inst_33144);
} else {
if((state_val_33185 === (18))){
var inst_33150 = (state_33184[(7)]);
var inst_33159 = cljs.core.first(inst_33150);
var state_33184__$1 = state_33184;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33184__$1,(20),out,inst_33159);
} else {
if((state_val_33185 === (8))){
var inst_33139 = (state_33184[(10)]);
var inst_33138 = (state_33184[(11)]);
var inst_33141 = (inst_33139 < inst_33138);
var inst_33142 = inst_33141;
var state_33184__$1 = state_33184;
if(cljs.core.truth_(inst_33142)){
var statearr_33232_34573 = state_33184__$1;
(statearr_33232_34573[(1)] = (10));

} else {
var statearr_33233_34574 = state_33184__$1;
(statearr_33233_34574[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31424__auto__))
;
return ((function (switch__31166__auto__,c__31424__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31167__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31167__auto____0 = (function (){
var statearr_33234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33234[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31167__auto__);

(statearr_33234[(1)] = (1));

return statearr_33234;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31167__auto____1 = (function (state_33184){
while(true){
var ret_value__31168__auto__ = (function (){try{while(true){
var result__31169__auto__ = switch__31166__auto__(state_33184);
if(cljs.core.keyword_identical_QMARK_(result__31169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31169__auto__;
}
break;
}
}catch (e33235){if((e33235 instanceof Object)){
var ex__31170__auto__ = e33235;
var statearr_33236_34575 = state_33184;
(statearr_33236_34575[(5)] = ex__31170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33235;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34576 = state_33184;
state_33184 = G__34576;
continue;
} else {
return ret_value__31168__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31167__auto__ = function(state_33184){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31167__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31167__auto____1.call(this,state_33184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31167__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31167__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31167__auto__;
})()
;})(switch__31166__auto__,c__31424__auto__))
})();
var state__31426__auto__ = (function (){var statearr_33237 = (f__31425__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31425__auto__.cljs$core$IFn$_invoke$arity$0() : f__31425__auto__.call(null));
(statearr_33237[(6)] = c__31424__auto__);

return statearr_33237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31426__auto__);
});})(c__31424__auto__))
);

return c__31424__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33239 = arguments.length;
switch (G__33239) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33241 = arguments.length;
switch (G__33241) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33243 = arguments.length;
switch (G__33243) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31424__auto___34580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31424__auto___34580,out){
return (function (){
var f__31425__auto__ = (function (){var switch__31166__auto__ = ((function (c__31424__auto___34580,out){
return (function (state_33267){
var state_val_33268 = (state_33267[(1)]);
if((state_val_33268 === (7))){
var inst_33262 = (state_33267[(2)]);
var state_33267__$1 = state_33267;
var statearr_33269_34581 = state_33267__$1;
(statearr_33269_34581[(2)] = inst_33262);

(statearr_33269_34581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (1))){
var inst_33244 = null;
var state_33267__$1 = (function (){var statearr_33270 = state_33267;
(statearr_33270[(7)] = inst_33244);

return statearr_33270;
})();
var statearr_33271_34582 = state_33267__$1;
(statearr_33271_34582[(2)] = null);

(statearr_33271_34582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (4))){
var inst_33247 = (state_33267[(8)]);
var inst_33247__$1 = (state_33267[(2)]);
var inst_33248 = (inst_33247__$1 == null);
var inst_33249 = cljs.core.not(inst_33248);
var state_33267__$1 = (function (){var statearr_33272 = state_33267;
(statearr_33272[(8)] = inst_33247__$1);

return statearr_33272;
})();
if(inst_33249){
var statearr_33273_34583 = state_33267__$1;
(statearr_33273_34583[(1)] = (5));

} else {
var statearr_33274_34584 = state_33267__$1;
(statearr_33274_34584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (6))){
var state_33267__$1 = state_33267;
var statearr_33275_34585 = state_33267__$1;
(statearr_33275_34585[(2)] = null);

(statearr_33275_34585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (3))){
var inst_33264 = (state_33267[(2)]);
var inst_33265 = cljs.core.async.close_BANG_(out);
var state_33267__$1 = (function (){var statearr_33276 = state_33267;
(statearr_33276[(9)] = inst_33264);

return statearr_33276;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33267__$1,inst_33265);
} else {
if((state_val_33268 === (2))){
var state_33267__$1 = state_33267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33267__$1,(4),ch);
} else {
if((state_val_33268 === (11))){
var inst_33247 = (state_33267[(8)]);
var inst_33256 = (state_33267[(2)]);
var inst_33244 = inst_33247;
var state_33267__$1 = (function (){var statearr_33277 = state_33267;
(statearr_33277[(10)] = inst_33256);

(statearr_33277[(7)] = inst_33244);

return statearr_33277;
})();
var statearr_33278_34586 = state_33267__$1;
(statearr_33278_34586[(2)] = null);

(statearr_33278_34586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (9))){
var inst_33247 = (state_33267[(8)]);
var state_33267__$1 = state_33267;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33267__$1,(11),out,inst_33247);
} else {
if((state_val_33268 === (5))){
var inst_33247 = (state_33267[(8)]);
var inst_33244 = (state_33267[(7)]);
var inst_33251 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33247,inst_33244);
var state_33267__$1 = state_33267;
if(inst_33251){
var statearr_33280_34587 = state_33267__$1;
(statearr_33280_34587[(1)] = (8));

} else {
var statearr_33281_34588 = state_33267__$1;
(statearr_33281_34588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (10))){
var inst_33259 = (state_33267[(2)]);
var state_33267__$1 = state_33267;
var statearr_33282_34589 = state_33267__$1;
(statearr_33282_34589[(2)] = inst_33259);

(statearr_33282_34589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33268 === (8))){
var inst_33244 = (state_33267[(7)]);
var tmp33279 = inst_33244;
var inst_33244__$1 = tmp33279;
var state_33267__$1 = (function (){var statearr_33283 = state_33267;
(statearr_33283[(7)] = inst_33244__$1);

return statearr_33283;
})();
var statearr_33284_34590 = state_33267__$1;
(statearr_33284_34590[(2)] = null);

(statearr_33284_34590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31424__auto___34580,out))
;
return ((function (switch__31166__auto__,c__31424__auto___34580,out){
return (function() {
var cljs$core$async$state_machine__31167__auto__ = null;
var cljs$core$async$state_machine__31167__auto____0 = (function (){
var statearr_33285 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33285[(0)] = cljs$core$async$state_machine__31167__auto__);

(statearr_33285[(1)] = (1));

return statearr_33285;
});
var cljs$core$async$state_machine__31167__auto____1 = (function (state_33267){
while(true){
var ret_value__31168__auto__ = (function (){try{while(true){
var result__31169__auto__ = switch__31166__auto__(state_33267);
if(cljs.core.keyword_identical_QMARK_(result__31169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31169__auto__;
}
break;
}
}catch (e33286){if((e33286 instanceof Object)){
var ex__31170__auto__ = e33286;
var statearr_33287_34591 = state_33267;
(statearr_33287_34591[(5)] = ex__31170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33286;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34592 = state_33267;
state_33267 = G__34592;
continue;
} else {
return ret_value__31168__auto__;
}
break;
}
});
cljs$core$async$state_machine__31167__auto__ = function(state_33267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31167__auto____1.call(this,state_33267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31167__auto____0;
cljs$core$async$state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31167__auto____1;
return cljs$core$async$state_machine__31167__auto__;
})()
;})(switch__31166__auto__,c__31424__auto___34580,out))
})();
var state__31426__auto__ = (function (){var statearr_33288 = (f__31425__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31425__auto__.cljs$core$IFn$_invoke$arity$0() : f__31425__auto__.call(null));
(statearr_33288[(6)] = c__31424__auto___34580);

return statearr_33288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31426__auto__);
});})(c__31424__auto___34580,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33290 = arguments.length;
switch (G__33290) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31424__auto___34594 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31424__auto___34594,out){
return (function (){
var f__31425__auto__ = (function (){var switch__31166__auto__ = ((function (c__31424__auto___34594,out){
return (function (state_33328){
var state_val_33329 = (state_33328[(1)]);
if((state_val_33329 === (7))){
var inst_33324 = (state_33328[(2)]);
var state_33328__$1 = state_33328;
var statearr_33330_34595 = state_33328__$1;
(statearr_33330_34595[(2)] = inst_33324);

(statearr_33330_34595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (1))){
var inst_33291 = (new Array(n));
var inst_33292 = inst_33291;
var inst_33293 = (0);
var state_33328__$1 = (function (){var statearr_33331 = state_33328;
(statearr_33331[(7)] = inst_33292);

(statearr_33331[(8)] = inst_33293);

return statearr_33331;
})();
var statearr_33332_34596 = state_33328__$1;
(statearr_33332_34596[(2)] = null);

(statearr_33332_34596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (4))){
var inst_33296 = (state_33328[(9)]);
var inst_33296__$1 = (state_33328[(2)]);
var inst_33297 = (inst_33296__$1 == null);
var inst_33298 = cljs.core.not(inst_33297);
var state_33328__$1 = (function (){var statearr_33333 = state_33328;
(statearr_33333[(9)] = inst_33296__$1);

return statearr_33333;
})();
if(inst_33298){
var statearr_33334_34597 = state_33328__$1;
(statearr_33334_34597[(1)] = (5));

} else {
var statearr_33335_34598 = state_33328__$1;
(statearr_33335_34598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (15))){
var inst_33318 = (state_33328[(2)]);
var state_33328__$1 = state_33328;
var statearr_33336_34599 = state_33328__$1;
(statearr_33336_34599[(2)] = inst_33318);

(statearr_33336_34599[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (13))){
var state_33328__$1 = state_33328;
var statearr_33337_34600 = state_33328__$1;
(statearr_33337_34600[(2)] = null);

(statearr_33337_34600[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (6))){
var inst_33293 = (state_33328[(8)]);
var inst_33314 = (inst_33293 > (0));
var state_33328__$1 = state_33328;
if(cljs.core.truth_(inst_33314)){
var statearr_33338_34601 = state_33328__$1;
(statearr_33338_34601[(1)] = (12));

} else {
var statearr_33339_34602 = state_33328__$1;
(statearr_33339_34602[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (3))){
var inst_33326 = (state_33328[(2)]);
var state_33328__$1 = state_33328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33328__$1,inst_33326);
} else {
if((state_val_33329 === (12))){
var inst_33292 = (state_33328[(7)]);
var inst_33316 = cljs.core.vec(inst_33292);
var state_33328__$1 = state_33328;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33328__$1,(15),out,inst_33316);
} else {
if((state_val_33329 === (2))){
var state_33328__$1 = state_33328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33328__$1,(4),ch);
} else {
if((state_val_33329 === (11))){
var inst_33308 = (state_33328[(2)]);
var inst_33309 = (new Array(n));
var inst_33292 = inst_33309;
var inst_33293 = (0);
var state_33328__$1 = (function (){var statearr_33340 = state_33328;
(statearr_33340[(7)] = inst_33292);

(statearr_33340[(10)] = inst_33308);

(statearr_33340[(8)] = inst_33293);

return statearr_33340;
})();
var statearr_33341_34603 = state_33328__$1;
(statearr_33341_34603[(2)] = null);

(statearr_33341_34603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (9))){
var inst_33292 = (state_33328[(7)]);
var inst_33306 = cljs.core.vec(inst_33292);
var state_33328__$1 = state_33328;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33328__$1,(11),out,inst_33306);
} else {
if((state_val_33329 === (5))){
var inst_33292 = (state_33328[(7)]);
var inst_33296 = (state_33328[(9)]);
var inst_33293 = (state_33328[(8)]);
var inst_33301 = (state_33328[(11)]);
var inst_33300 = (inst_33292[inst_33293] = inst_33296);
var inst_33301__$1 = (inst_33293 + (1));
var inst_33302 = (inst_33301__$1 < n);
var state_33328__$1 = (function (){var statearr_33342 = state_33328;
(statearr_33342[(12)] = inst_33300);

(statearr_33342[(11)] = inst_33301__$1);

return statearr_33342;
})();
if(cljs.core.truth_(inst_33302)){
var statearr_33343_34604 = state_33328__$1;
(statearr_33343_34604[(1)] = (8));

} else {
var statearr_33344_34605 = state_33328__$1;
(statearr_33344_34605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (14))){
var inst_33321 = (state_33328[(2)]);
var inst_33322 = cljs.core.async.close_BANG_(out);
var state_33328__$1 = (function (){var statearr_33346 = state_33328;
(statearr_33346[(13)] = inst_33321);

return statearr_33346;
})();
var statearr_33347_34606 = state_33328__$1;
(statearr_33347_34606[(2)] = inst_33322);

(statearr_33347_34606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (10))){
var inst_33312 = (state_33328[(2)]);
var state_33328__$1 = state_33328;
var statearr_33348_34607 = state_33328__$1;
(statearr_33348_34607[(2)] = inst_33312);

(statearr_33348_34607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (8))){
var inst_33292 = (state_33328[(7)]);
var inst_33301 = (state_33328[(11)]);
var tmp33345 = inst_33292;
var inst_33292__$1 = tmp33345;
var inst_33293 = inst_33301;
var state_33328__$1 = (function (){var statearr_33349 = state_33328;
(statearr_33349[(7)] = inst_33292__$1);

(statearr_33349[(8)] = inst_33293);

return statearr_33349;
})();
var statearr_33350_34608 = state_33328__$1;
(statearr_33350_34608[(2)] = null);

(statearr_33350_34608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31424__auto___34594,out))
;
return ((function (switch__31166__auto__,c__31424__auto___34594,out){
return (function() {
var cljs$core$async$state_machine__31167__auto__ = null;
var cljs$core$async$state_machine__31167__auto____0 = (function (){
var statearr_33351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33351[(0)] = cljs$core$async$state_machine__31167__auto__);

(statearr_33351[(1)] = (1));

return statearr_33351;
});
var cljs$core$async$state_machine__31167__auto____1 = (function (state_33328){
while(true){
var ret_value__31168__auto__ = (function (){try{while(true){
var result__31169__auto__ = switch__31166__auto__(state_33328);
if(cljs.core.keyword_identical_QMARK_(result__31169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31169__auto__;
}
break;
}
}catch (e33352){if((e33352 instanceof Object)){
var ex__31170__auto__ = e33352;
var statearr_33353_34609 = state_33328;
(statearr_33353_34609[(5)] = ex__31170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33352;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34610 = state_33328;
state_33328 = G__34610;
continue;
} else {
return ret_value__31168__auto__;
}
break;
}
});
cljs$core$async$state_machine__31167__auto__ = function(state_33328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31167__auto____1.call(this,state_33328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31167__auto____0;
cljs$core$async$state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31167__auto____1;
return cljs$core$async$state_machine__31167__auto__;
})()
;})(switch__31166__auto__,c__31424__auto___34594,out))
})();
var state__31426__auto__ = (function (){var statearr_33354 = (f__31425__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31425__auto__.cljs$core$IFn$_invoke$arity$0() : f__31425__auto__.call(null));
(statearr_33354[(6)] = c__31424__auto___34594);

return statearr_33354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31426__auto__);
});})(c__31424__auto___34594,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33356 = arguments.length;
switch (G__33356) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31424__auto___34612 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31424__auto___34612,out){
return (function (){
var f__31425__auto__ = (function (){var switch__31166__auto__ = ((function (c__31424__auto___34612,out){
return (function (state_33398){
var state_val_33399 = (state_33398[(1)]);
if((state_val_33399 === (7))){
var inst_33394 = (state_33398[(2)]);
var state_33398__$1 = state_33398;
var statearr_33400_34613 = state_33398__$1;
(statearr_33400_34613[(2)] = inst_33394);

(statearr_33400_34613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (1))){
var inst_33357 = [];
var inst_33358 = inst_33357;
var inst_33359 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33398__$1 = (function (){var statearr_33401 = state_33398;
(statearr_33401[(7)] = inst_33359);

(statearr_33401[(8)] = inst_33358);

return statearr_33401;
})();
var statearr_33402_34623 = state_33398__$1;
(statearr_33402_34623[(2)] = null);

(statearr_33402_34623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (4))){
var inst_33362 = (state_33398[(9)]);
var inst_33362__$1 = (state_33398[(2)]);
var inst_33363 = (inst_33362__$1 == null);
var inst_33364 = cljs.core.not(inst_33363);
var state_33398__$1 = (function (){var statearr_33403 = state_33398;
(statearr_33403[(9)] = inst_33362__$1);

return statearr_33403;
})();
if(inst_33364){
var statearr_33404_34624 = state_33398__$1;
(statearr_33404_34624[(1)] = (5));

} else {
var statearr_33405_34625 = state_33398__$1;
(statearr_33405_34625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (15))){
var inst_33388 = (state_33398[(2)]);
var state_33398__$1 = state_33398;
var statearr_33406_34626 = state_33398__$1;
(statearr_33406_34626[(2)] = inst_33388);

(statearr_33406_34626[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (13))){
var state_33398__$1 = state_33398;
var statearr_33407_34627 = state_33398__$1;
(statearr_33407_34627[(2)] = null);

(statearr_33407_34627[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (6))){
var inst_33358 = (state_33398[(8)]);
var inst_33383 = inst_33358.length;
var inst_33384 = (inst_33383 > (0));
var state_33398__$1 = state_33398;
if(cljs.core.truth_(inst_33384)){
var statearr_33408_34628 = state_33398__$1;
(statearr_33408_34628[(1)] = (12));

} else {
var statearr_33409_34629 = state_33398__$1;
(statearr_33409_34629[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (3))){
var inst_33396 = (state_33398[(2)]);
var state_33398__$1 = state_33398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33398__$1,inst_33396);
} else {
if((state_val_33399 === (12))){
var inst_33358 = (state_33398[(8)]);
var inst_33386 = cljs.core.vec(inst_33358);
var state_33398__$1 = state_33398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33398__$1,(15),out,inst_33386);
} else {
if((state_val_33399 === (2))){
var state_33398__$1 = state_33398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33398__$1,(4),ch);
} else {
if((state_val_33399 === (11))){
var inst_33366 = (state_33398[(10)]);
var inst_33362 = (state_33398[(9)]);
var inst_33376 = (state_33398[(2)]);
var inst_33377 = [];
var inst_33378 = inst_33377.push(inst_33362);
var inst_33358 = inst_33377;
var inst_33359 = inst_33366;
var state_33398__$1 = (function (){var statearr_33410 = state_33398;
(statearr_33410[(7)] = inst_33359);

(statearr_33410[(8)] = inst_33358);

(statearr_33410[(11)] = inst_33376);

(statearr_33410[(12)] = inst_33378);

return statearr_33410;
})();
var statearr_33411_34630 = state_33398__$1;
(statearr_33411_34630[(2)] = null);

(statearr_33411_34630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (9))){
var inst_33358 = (state_33398[(8)]);
var inst_33374 = cljs.core.vec(inst_33358);
var state_33398__$1 = state_33398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33398__$1,(11),out,inst_33374);
} else {
if((state_val_33399 === (5))){
var inst_33366 = (state_33398[(10)]);
var inst_33359 = (state_33398[(7)]);
var inst_33362 = (state_33398[(9)]);
var inst_33366__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33362) : f.call(null,inst_33362));
var inst_33367 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33366__$1,inst_33359);
var inst_33368 = cljs.core.keyword_identical_QMARK_(inst_33359,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33369 = ((inst_33367) || (inst_33368));
var state_33398__$1 = (function (){var statearr_33412 = state_33398;
(statearr_33412[(10)] = inst_33366__$1);

return statearr_33412;
})();
if(cljs.core.truth_(inst_33369)){
var statearr_33413_34634 = state_33398__$1;
(statearr_33413_34634[(1)] = (8));

} else {
var statearr_33414_34635 = state_33398__$1;
(statearr_33414_34635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (14))){
var inst_33391 = (state_33398[(2)]);
var inst_33392 = cljs.core.async.close_BANG_(out);
var state_33398__$1 = (function (){var statearr_33416 = state_33398;
(statearr_33416[(13)] = inst_33391);

return statearr_33416;
})();
var statearr_33417_34639 = state_33398__$1;
(statearr_33417_34639[(2)] = inst_33392);

(statearr_33417_34639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (10))){
var inst_33381 = (state_33398[(2)]);
var state_33398__$1 = state_33398;
var statearr_33418_34640 = state_33398__$1;
(statearr_33418_34640[(2)] = inst_33381);

(statearr_33418_34640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33399 === (8))){
var inst_33366 = (state_33398[(10)]);
var inst_33362 = (state_33398[(9)]);
var inst_33358 = (state_33398[(8)]);
var inst_33371 = inst_33358.push(inst_33362);
var tmp33415 = inst_33358;
var inst_33358__$1 = tmp33415;
var inst_33359 = inst_33366;
var state_33398__$1 = (function (){var statearr_33419 = state_33398;
(statearr_33419[(14)] = inst_33371);

(statearr_33419[(7)] = inst_33359);

(statearr_33419[(8)] = inst_33358__$1);

return statearr_33419;
})();
var statearr_33420_34647 = state_33398__$1;
(statearr_33420_34647[(2)] = null);

(statearr_33420_34647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31424__auto___34612,out))
;
return ((function (switch__31166__auto__,c__31424__auto___34612,out){
return (function() {
var cljs$core$async$state_machine__31167__auto__ = null;
var cljs$core$async$state_machine__31167__auto____0 = (function (){
var statearr_33421 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33421[(0)] = cljs$core$async$state_machine__31167__auto__);

(statearr_33421[(1)] = (1));

return statearr_33421;
});
var cljs$core$async$state_machine__31167__auto____1 = (function (state_33398){
while(true){
var ret_value__31168__auto__ = (function (){try{while(true){
var result__31169__auto__ = switch__31166__auto__(state_33398);
if(cljs.core.keyword_identical_QMARK_(result__31169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31169__auto__;
}
break;
}
}catch (e33422){if((e33422 instanceof Object)){
var ex__31170__auto__ = e33422;
var statearr_33423_34654 = state_33398;
(statearr_33423_34654[(5)] = ex__31170__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33422;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31168__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34658 = state_33398;
state_33398 = G__34658;
continue;
} else {
return ret_value__31168__auto__;
}
break;
}
});
cljs$core$async$state_machine__31167__auto__ = function(state_33398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31167__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31167__auto____1.call(this,state_33398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31167__auto____0;
cljs$core$async$state_machine__31167__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31167__auto____1;
return cljs$core$async$state_machine__31167__auto__;
})()
;})(switch__31166__auto__,c__31424__auto___34612,out))
})();
var state__31426__auto__ = (function (){var statearr_33424 = (f__31425__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31425__auto__.cljs$core$IFn$_invoke$arity$0() : f__31425__auto__.call(null));
(statearr_33424[(6)] = c__31424__auto___34612);

return statearr_33424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31426__auto__);
});})(c__31424__auto___34612,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
