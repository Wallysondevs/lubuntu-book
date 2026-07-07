function mx(s,i){for(var r=0;r<i.length;r++){const u=i[r];if(typeof u!="string"&&!Array.isArray(u)){for(const c in u)if(c!=="default"&&!(c in s)){const p=Object.getOwnPropertyDescriptor(u,c);p&&Object.defineProperty(s,c,p.get?p:{enumerable:!0,get:()=>u[c]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const p of c)if(p.type==="childList")for(const m of p.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&u(m)}).observe(document,{childList:!0,subtree:!0});function r(c){const p={};return c.integrity&&(p.integrity=c.integrity),c.referrerPolicy&&(p.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?p.credentials="include":c.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(c){if(c.ep)return;c.ep=!0;const p=r(c);fetch(c.href,p)}})();function px(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Bl={exports:{}},ci={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mh;function fx(){if(mh)return ci;mh=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(u,c,p){var m=null;if(p!==void 0&&(m=""+p),c.key!==void 0&&(m=""+c.key),"key"in c){p={};for(var g in c)g!=="key"&&(p[g]=c[g])}else p=c;return c=p.ref,{$$typeof:s,type:u,key:m,ref:c!==void 0?c:null,props:p}}return ci.Fragment=i,ci.jsx=r,ci.jsxs=r,ci}var ph;function hx(){return ph||(ph=1,Bl.exports=fx()),Bl.exports}var x=hx(),Vl={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fh;function gx(){if(fh)return oe;fh=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),m=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),q=Symbol.iterator;function T(E){return E===null||typeof E!="object"?null:(E=q&&E[q]||E["@@iterator"],typeof E=="function"?E:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,B={};function U(E,P,_){this.props=E,this.context=P,this.refs=B,this.updater=_||j}U.prototype.isReactComponent={},U.prototype.setState=function(E,P){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,P,"setState")},U.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function I(){}I.prototype=U.prototype;function H(E,P,_){this.props=E,this.context=P,this.refs=B,this.updater=_||j}var ae=H.prototype=new I;ae.constructor=H,R(ae,U.prototype),ae.isPureReactComponent=!0;var Y=Array.isArray;function te(){}var Z={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function Te(E,P,_){var Q=_.ref;return{$$typeof:s,type:E,key:P,ref:Q!==void 0?Q:null,props:_}}function Ie(E,P){return Te(E.type,P,E.props)}function Xe(E){return typeof E=="object"&&E!==null&&E.$$typeof===s}function Ke(E){var P={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(_){return P[_]})}var Za=/\/+/g;function Ca(E,P){return typeof E=="object"&&E!==null&&E.key!=null?Ke(""+E.key):P.toString(36)}function Ta(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(te,te):(E.status="pending",E.then(function(P){E.status==="pending"&&(E.status="fulfilled",E.value=P)},function(P){E.status==="pending"&&(E.status="rejected",E.reason=P)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function k(E,P,_,Q,se){var re=typeof E;(re==="undefined"||re==="boolean")&&(E=null);var ye=!1;if(E===null)ye=!0;else switch(re){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(E.$$typeof){case s:case i:ye=!0;break;case b:return ye=E._init,k(ye(E._payload),P,_,Q,se)}}if(ye)return se=se(E),ye=Q===""?"."+Ca(E,0):Q,Y(se)?(_="",ye!=null&&(_=ye.replace(Za,"$&/")+"/"),k(se,P,_,"",function(vs){return vs})):se!=null&&(Xe(se)&&(se=Ie(se,_+(se.key==null||E&&E.key===se.key?"":(""+se.key).replace(Za,"$&/")+"/")+ye)),P.push(se)),1;ye=0;var sa=Q===""?".":Q+":";if(Y(E))for(var Ne=0;Ne<E.length;Ne++)Q=E[Ne],re=sa+Ca(Q,Ne),ye+=k(Q,P,_,re,se);else if(Ne=T(E),typeof Ne=="function")for(E=Ne.call(E),Ne=0;!(Q=E.next()).done;)Q=Q.value,re=sa+Ca(Q,Ne++),ye+=k(Q,P,_,re,se);else if(re==="object"){if(typeof E.then=="function")return k(Ta(E),P,_,Q,se);throw P=String(E),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.")}return ye}function V(E,P,_){if(E==null)return E;var Q=[],se=0;return k(E,Q,"","",function(re){return P.call(_,re,se++)}),Q}function K(E){if(E._status===-1){var P=E._result;P=P(),P.then(function(_){(E._status===0||E._status===-1)&&(E._status=1,E._result=_)},function(_){(E._status===0||E._status===-1)&&(E._status=2,E._result=_)}),E._status===-1&&(E._status=0,E._result=P)}if(E._status===1)return E._result.default;throw E._result}var fe=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var P=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(P))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},ve={map:V,forEach:function(E,P,_){V(E,function(){P.apply(this,arguments)},_)},count:function(E){var P=0;return V(E,function(){P++}),P},toArray:function(E){return V(E,function(P){return P})||[]},only:function(E){if(!Xe(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return oe.Activity=y,oe.Children=ve,oe.Component=U,oe.Fragment=r,oe.Profiler=c,oe.PureComponent=H,oe.StrictMode=u,oe.Suspense=h,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,oe.__COMPILER_RUNTIME={__proto__:null,c:function(E){return Z.H.useMemoCache(E)}},oe.cache=function(E){return function(){return E.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(E,P,_){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var Q=R({},E.props),se=E.key;if(P!=null)for(re in P.key!==void 0&&(se=""+P.key),P)!J.call(P,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&P.ref===void 0||(Q[re]=P[re]);var re=arguments.length-2;if(re===1)Q.children=_;else if(1<re){for(var ye=Array(re),sa=0;sa<re;sa++)ye[sa]=arguments[sa+2];Q.children=ye}return Te(E.type,se,Q)},oe.createContext=function(E){return E={$$typeof:m,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:p,_context:E},E},oe.createElement=function(E,P,_){var Q,se={},re=null;if(P!=null)for(Q in P.key!==void 0&&(re=""+P.key),P)J.call(P,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(se[Q]=P[Q]);var ye=arguments.length-2;if(ye===1)se.children=_;else if(1<ye){for(var sa=Array(ye),Ne=0;Ne<ye;Ne++)sa[Ne]=arguments[Ne+2];se.children=sa}if(E&&E.defaultProps)for(Q in ye=E.defaultProps,ye)se[Q]===void 0&&(se[Q]=ye[Q]);return Te(E,re,se)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(E){return{$$typeof:g,render:E}},oe.isValidElement=Xe,oe.lazy=function(E){return{$$typeof:b,_payload:{_status:-1,_result:E},_init:K}},oe.memo=function(E,P){return{$$typeof:f,type:E,compare:P===void 0?null:P}},oe.startTransition=function(E){var P=Z.T,_={};Z.T=_;try{var Q=E(),se=Z.S;se!==null&&se(_,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(te,fe)}catch(re){fe(re)}finally{P!==null&&_.types!==null&&(P.types=_.types),Z.T=P}},oe.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},oe.use=function(E){return Z.H.use(E)},oe.useActionState=function(E,P,_){return Z.H.useActionState(E,P,_)},oe.useCallback=function(E,P){return Z.H.useCallback(E,P)},oe.useContext=function(E){return Z.H.useContext(E)},oe.useDebugValue=function(){},oe.useDeferredValue=function(E,P){return Z.H.useDeferredValue(E,P)},oe.useEffect=function(E,P){return Z.H.useEffect(E,P)},oe.useEffectEvent=function(E){return Z.H.useEffectEvent(E)},oe.useId=function(){return Z.H.useId()},oe.useImperativeHandle=function(E,P,_){return Z.H.useImperativeHandle(E,P,_)},oe.useInsertionEffect=function(E,P){return Z.H.useInsertionEffect(E,P)},oe.useLayoutEffect=function(E,P){return Z.H.useLayoutEffect(E,P)},oe.useMemo=function(E,P){return Z.H.useMemo(E,P)},oe.useOptimistic=function(E,P){return Z.H.useOptimistic(E,P)},oe.useReducer=function(E,P,_){return Z.H.useReducer(E,P,_)},oe.useRef=function(E){return Z.H.useRef(E)},oe.useState=function(E){return Z.H.useState(E)},oe.useSyncExternalStore=function(E,P,_){return Z.H.useSyncExternalStore(E,P,_)},oe.useTransition=function(){return Z.H.useTransition()},oe.version="19.2.5",oe}var hh;function fr(){return hh||(hh=1,Vl.exports=gx()),Vl.exports}var G=fr();const vx=px(G),bx=mx({__proto__:null,default:vx},[G]);var Gl={exports:{}},di={},_l={exports:{}},Il={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gh;function yx(){return gh||(gh=1,(function(s){function i(k,V){var K=k.length;k.push(V);e:for(;0<K;){var fe=K-1>>>1,ve=k[fe];if(0<c(ve,V))k[fe]=V,k[K]=ve,K=fe;else break e}}function r(k){return k.length===0?null:k[0]}function u(k){if(k.length===0)return null;var V=k[0],K=k.pop();if(K!==V){k[0]=K;e:for(var fe=0,ve=k.length,E=ve>>>1;fe<E;){var P=2*(fe+1)-1,_=k[P],Q=P+1,se=k[Q];if(0>c(_,K))Q<ve&&0>c(se,_)?(k[fe]=se,k[Q]=K,fe=Q):(k[fe]=_,k[P]=K,fe=P);else if(Q<ve&&0>c(se,K))k[fe]=se,k[Q]=K,fe=Q;else break e}}return V}function c(k,V){var K=k.sortIndex-V.sortIndex;return K!==0?K:k.id-V.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;s.unstable_now=function(){return p.now()}}else{var m=Date,g=m.now();s.unstable_now=function(){return m.now()-g}}var h=[],f=[],b=1,y=null,q=3,T=!1,j=!1,R=!1,B=!1,U=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function ae(k){for(var V=r(f);V!==null;){if(V.callback===null)u(f);else if(V.startTime<=k)u(f),V.sortIndex=V.expirationTime,i(h,V);else break;V=r(f)}}function Y(k){if(R=!1,ae(k),!j)if(r(h)!==null)j=!0,te||(te=!0,Ke());else{var V=r(f);V!==null&&Ta(Y,V.startTime-k)}}var te=!1,Z=-1,J=5,Te=-1;function Ie(){return B?!0:!(s.unstable_now()-Te<J)}function Xe(){if(B=!1,te){var k=s.unstable_now();Te=k;var V=!0;try{e:{j=!1,R&&(R=!1,I(Z),Z=-1),T=!0;var K=q;try{a:{for(ae(k),y=r(h);y!==null&&!(y.expirationTime>k&&Ie());){var fe=y.callback;if(typeof fe=="function"){y.callback=null,q=y.priorityLevel;var ve=fe(y.expirationTime<=k);if(k=s.unstable_now(),typeof ve=="function"){y.callback=ve,ae(k),V=!0;break a}y===r(h)&&u(h),ae(k)}else u(h);y=r(h)}if(y!==null)V=!0;else{var E=r(f);E!==null&&Ta(Y,E.startTime-k),V=!1}}break e}finally{y=null,q=K,T=!1}V=void 0}}finally{V?Ke():te=!1}}}var Ke;if(typeof H=="function")Ke=function(){H(Xe)};else if(typeof MessageChannel<"u"){var Za=new MessageChannel,Ca=Za.port2;Za.port1.onmessage=Xe,Ke=function(){Ca.postMessage(null)}}else Ke=function(){U(Xe,0)};function Ta(k,V){Z=U(function(){k(s.unstable_now())},V)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(k){k.callback=null},s.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<k?Math.floor(1e3/k):5},s.unstable_getCurrentPriorityLevel=function(){return q},s.unstable_next=function(k){switch(q){case 1:case 2:case 3:var V=3;break;default:V=q}var K=q;q=V;try{return k()}finally{q=K}},s.unstable_requestPaint=function(){B=!0},s.unstable_runWithPriority=function(k,V){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var K=q;q=k;try{return V()}finally{q=K}},s.unstable_scheduleCallback=function(k,V,K){var fe=s.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?fe+K:fe):K=fe,k){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=K+ve,k={id:b++,callback:V,priorityLevel:k,startTime:K,expirationTime:ve,sortIndex:-1},K>fe?(k.sortIndex=K,i(f,k),r(h)===null&&k===r(f)&&(R?(I(Z),Z=-1):R=!0,Ta(Y,K-fe))):(k.sortIndex=ve,i(h,k),j||T||(j=!0,te||(te=!0,Ke()))),k},s.unstable_shouldYield=Ie,s.unstable_wrapCallback=function(k){var V=q;return function(){var K=q;q=V;try{return k.apply(this,arguments)}finally{q=K}}}})(Il)),Il}var vh;function xx(){return vh||(vh=1,_l.exports=yx()),_l.exports}var Hl={exports:{}},aa={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bh;function qx(){if(bh)return aa;bh=1;var s=fr();function i(h){var f="https://react.dev/errors/"+h;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)f+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+h+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var u={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},c=Symbol.for("react.portal");function p(h,f,b){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:y==null?null:""+y,children:h,containerInfo:f,implementation:b}}var m=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(h,f){if(h==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return aa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,aa.createPortal=function(h,f){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(i(299));return p(h,f,null,b)},aa.flushSync=function(h){var f=m.T,b=u.p;try{if(m.T=null,u.p=2,h)return h()}finally{m.T=f,u.p=b,u.d.f()}},aa.preconnect=function(h,f){typeof h=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,u.d.C(h,f))},aa.prefetchDNS=function(h){typeof h=="string"&&u.d.D(h)},aa.preinit=function(h,f){if(typeof h=="string"&&f&&typeof f.as=="string"){var b=f.as,y=g(b,f.crossOrigin),q=typeof f.integrity=="string"?f.integrity:void 0,T=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;b==="style"?u.d.S(h,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:y,integrity:q,fetchPriority:T}):b==="script"&&u.d.X(h,{crossOrigin:y,integrity:q,fetchPriority:T,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},aa.preinitModule=function(h,f){if(typeof h=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var b=g(f.as,f.crossOrigin);u.d.M(h,{crossOrigin:b,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&u.d.M(h)},aa.preload=function(h,f){if(typeof h=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var b=f.as,y=g(b,f.crossOrigin);u.d.L(h,b,{crossOrigin:y,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},aa.preloadModule=function(h,f){if(typeof h=="string")if(f){var b=g(f.as,f.crossOrigin);u.d.m(h,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:b,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else u.d.m(h)},aa.requestFormReset=function(h){u.d.r(h)},aa.unstable_batchedUpdates=function(h,f){return h(f)},aa.useFormState=function(h,f,b){return m.H.useFormState(h,f,b)},aa.useFormStatus=function(){return m.H.useHostTransitionStatus()},aa.version="19.2.5",aa}var yh;function Sx(){if(yh)return Hl.exports;yh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),Hl.exports=qx(),Hl.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh;function Ax(){if(xh)return di;xh=1;var s=xx(),i=fr(),r=Sx();function u(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)a+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var a=e,o=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(o=a.return),e=a.return;while(e)}return a.tag===3?o:null}function m(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function g(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function h(e){if(p(e)!==e)throw Error(u(188))}function f(e){var a=e.alternate;if(!a){if(a=p(e),a===null)throw Error(u(188));return a!==e?null:e}for(var o=e,t=a;;){var n=o.return;if(n===null)break;var l=n.alternate;if(l===null){if(t=n.return,t!==null){o=t;continue}break}if(n.child===l.child){for(l=n.child;l;){if(l===o)return h(n),e;if(l===t)return h(n),a;l=l.sibling}throw Error(u(188))}if(o.return!==t.return)o=n,t=l;else{for(var d=!1,v=n.child;v;){if(v===o){d=!0,o=n,t=l;break}if(v===t){d=!0,t=n,o=l;break}v=v.sibling}if(!d){for(v=l.child;v;){if(v===o){d=!0,o=l,t=n;break}if(v===t){d=!0,t=l,o=n;break}v=v.sibling}if(!d)throw Error(u(189))}}if(o.alternate!==t)throw Error(u(190))}if(o.tag!==3)throw Error(u(188));return o.stateNode.current===o?e:a}function b(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=b(e),a!==null)return a;e=e.sibling}return null}var y=Object.assign,q=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),H=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),Te=Symbol.for("react.activity"),Ie=Symbol.for("react.memo_cache_sentinel"),Xe=Symbol.iterator;function Ke(e){return e===null||typeof e!="object"?null:(e=Xe&&e[Xe]||e["@@iterator"],typeof e=="function"?e:null)}var Za=Symbol.for("react.client.reference");function Ca(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Za?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case U:return"Profiler";case B:return"StrictMode";case Y:return"Suspense";case te:return"SuspenseList";case Te:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case j:return"Portal";case H:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case ae:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return a=e.displayName||null,a!==null?a:Ca(e.type)||"Memo";case J:a=e._payload,e=e._init;try{return Ca(e(a))}catch{}}return null}var Ta=Array.isArray,k=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},fe=[],ve=-1;function E(e){return{current:e}}function P(e){0>ve||(e.current=fe[ve],fe[ve]=null,ve--)}function _(e,a){ve++,fe[ve]=e.current,e.current=a}var Q=E(null),se=E(null),re=E(null),ye=E(null);function sa(e,a){switch(_(re,a),_(se,e),_(Q,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?Nf(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=Nf(a),e=Pf(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}P(Q),_(Q,e)}function Ne(){P(Q),P(se),P(re)}function vs(e){e.memoizedState!==null&&_(ye,e);var a=Q.current,o=Pf(a,e.type);a!==o&&(_(se,e),_(Q,o))}function Oi(e){se.current===e&&(P(Q),P(se)),ye.current===e&&(P(ye),ni._currentValue=K)}var qr,cd;function Wo(e){if(qr===void 0)try{throw Error()}catch(o){var a=o.stack.trim().match(/\n( *(at )?)/);qr=a&&a[1]||"",cd=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qr+e+cd}var Sr=!1;function Ar(e,a){if(!e||Sr)return"";Sr=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(a){var N=function(){throw Error()};if(Object.defineProperty(N.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(N,[])}catch(L){var D=L}Reflect.construct(e,[],N)}else{try{N.call()}catch(L){D=L}e.call(N.prototype)}}else{try{throw Error()}catch(L){D=L}(N=e())&&typeof N.catch=="function"&&N.catch(function(){})}}catch(L){if(L&&D&&typeof L.stack=="string")return[L.stack,D.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=t.DetermineComponentFrameRoot(),d=l[0],v=l[1];if(d&&v){var S=d.split(`
`),z=v.split(`
`);for(n=t=0;t<S.length&&!S[t].includes("DetermineComponentFrameRoot");)t++;for(;n<z.length&&!z[n].includes("DetermineComponentFrameRoot");)n++;if(t===S.length||n===z.length)for(t=S.length-1,n=z.length-1;1<=t&&0<=n&&S[t]!==z[n];)n--;for(;1<=t&&0<=n;t--,n--)if(S[t]!==z[n]){if(t!==1||n!==1)do if(t--,n--,0>n||S[t]!==z[n]){var w=`
`+S[t].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=t&&0<=n);break}}}finally{Sr=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?Wo(o):""}function Ib(e,a){switch(e.tag){case 26:case 27:case 5:return Wo(e.type);case 16:return Wo("Lazy");case 13:return e.child!==a&&a!==null?Wo("Suspense Fallback"):Wo("Suspense");case 19:return Wo("SuspenseList");case 0:case 15:return Ar(e.type,!1);case 11:return Ar(e.type.render,!1);case 1:return Ar(e.type,!0);case 31:return Wo("Activity");default:return""}}function dd(e){try{var a="",o=null;do a+=Ib(e,o),o=e,e=e.return;while(e);return a}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}var Er=Object.prototype.hasOwnProperty,Cr=s.unstable_scheduleCallback,Tr=s.unstable_cancelCallback,Hb=s.unstable_shouldYield,Fb=s.unstable_requestPaint,pa=s.unstable_now,Qb=s.unstable_getCurrentPriorityLevel,md=s.unstable_ImmediatePriority,pd=s.unstable_UserBlockingPriority,ji=s.unstable_NormalPriority,Xb=s.unstable_LowPriority,fd=s.unstable_IdlePriority,Kb=s.log,Yb=s.unstable_setDisableYieldValue,bs=null,fa=null;function xo(e){if(typeof Kb=="function"&&Yb(e),fa&&typeof fa.setStrictMode=="function")try{fa.setStrictMode(bs,e)}catch{}}var ha=Math.clz32?Math.clz32:Jb,Wb=Math.log,Zb=Math.LN2;function Jb(e){return e>>>=0,e===0?32:31-(Wb(e)/Zb|0)|0}var Ni=256,Pi=262144,Ri=4194304;function Zo(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ui(e,a,o){var t=e.pendingLanes;if(t===0)return 0;var n=0,l=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var v=t&134217727;return v!==0?(t=v&~l,t!==0?n=Zo(t):(d&=v,d!==0?n=Zo(d):o||(o=v&~e,o!==0&&(n=Zo(o))))):(v=t&~l,v!==0?n=Zo(v):d!==0?n=Zo(d):o||(o=t&~e,o!==0&&(n=Zo(o)))),n===0?0:a!==0&&a!==n&&(a&l)===0&&(l=n&-n,o=a&-a,l>=o||l===32&&(o&4194048)!==0)?a:n}function ys(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function $b(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hd(){var e=Ri;return Ri<<=1,(Ri&62914560)===0&&(Ri=4194304),e}function Mr(e){for(var a=[],o=0;31>o;o++)a.push(e);return a}function xs(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function e0(e,a,o,t,n,l){var d=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var v=e.entanglements,S=e.expirationTimes,z=e.hiddenUpdates;for(o=d&~o;0<o;){var w=31-ha(o),N=1<<w;v[w]=0,S[w]=-1;var D=z[w];if(D!==null)for(z[w]=null,w=0;w<D.length;w++){var L=D[w];L!==null&&(L.lane&=-536870913)}o&=~N}t!==0&&gd(e,t,0),l!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=l&~(d&~a))}function gd(e,a,o){e.pendingLanes|=a,e.suspendedLanes&=~a;var t=31-ha(a);e.entangledLanes|=a,e.entanglements[t]=e.entanglements[t]|1073741824|o&261930}function vd(e,a){var o=e.entangledLanes|=a;for(e=e.entanglements;o;){var t=31-ha(o),n=1<<t;n&a|e[t]&a&&(e[t]|=a),o&=~n}}function bd(e,a){var o=a&-a;return o=(o&42)!==0?1:zr(o),(o&(e.suspendedLanes|a))!==0?0:o}function zr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Dr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function yd(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:ih(e.type))}function xd(e,a){var o=V.p;try{return V.p=e,a()}finally{V.p=o}}var qo=Math.random().toString(36).slice(2),Ye="__reactFiber$"+qo,na="__reactProps$"+qo,qt="__reactContainer$"+qo,Lr="__reactEvents$"+qo,a0="__reactListeners$"+qo,o0="__reactHandles$"+qo,qd="__reactResources$"+qo,qs="__reactMarker$"+qo;function wr(e){delete e[Ye],delete e[na],delete e[Lr],delete e[a0],delete e[o0]}function St(e){var a=e[Ye];if(a)return a;for(var o=e.parentNode;o;){if(a=o[qt]||o[Ye]){if(o=a.alternate,a.child!==null||o!==null&&o.child!==null)for(e=If(e);e!==null;){if(o=e[Ye])return o;e=If(e)}return a}e=o,o=e.parentNode}return null}function At(e){if(e=e[Ye]||e[qt]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function Ss(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(u(33))}function Et(e){var a=e[qd];return a||(a=e[qd]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Fe(e){e[qs]=!0}var Sd=new Set,Ad={};function Jo(e,a){Ct(e,a),Ct(e+"Capture",a)}function Ct(e,a){for(Ad[e]=a,e=0;e<a.length;e++)Sd.add(a[e])}var t0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ed={},Cd={};function s0(e){return Er.call(Cd,e)?!0:Er.call(Ed,e)?!1:t0.test(e)?Cd[e]=!0:(Ed[e]=!0,!1)}function Bi(e,a,o){if(s0(a))if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var t=a.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+o)}}function Vi(e,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+o)}}function Ja(e,a,o,t){if(t===null)e.removeAttribute(o);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(a,o,""+t)}}function Ma(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Td(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function i0(e,a,o){var t=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var n=t.get,l=t.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return n.call(this)},set:function(d){o=""+d,l.call(this,d)}}),Object.defineProperty(e,a,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function kr(e){if(!e._valueTracker){var a=Td(e)?"checked":"value";e._valueTracker=i0(e,a,""+e[a])}}function Md(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var o=a.getValue(),t="";return e&&(t=Td(e)?e.checked?"true":"false":e.value),e=t,e!==o?(a.setValue(e),!0):!1}function Gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var n0=/[\n"\\]/g;function za(e){return e.replace(n0,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Or(e,a,o,t,n,l,d,v){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),a!=null?d==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Ma(a)):e.value!==""+Ma(a)&&(e.value=""+Ma(a)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),a!=null?jr(e,d,Ma(a)):o!=null?jr(e,d,Ma(o)):t!=null&&e.removeAttribute("value"),n==null&&l!=null&&(e.defaultChecked=!!l),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+Ma(v):e.removeAttribute("name")}function zd(e,a,o,t,n,l,d,v){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),a!=null||o!=null){if(!(l!=="submit"&&l!=="reset"||a!=null)){kr(e);return}o=o!=null?""+Ma(o):"",a=a!=null?""+Ma(a):o,v||a===e.value||(e.value=a),e.defaultValue=a}t=t??n,t=typeof t!="function"&&typeof t!="symbol"&&!!t,e.checked=v?e.checked:!!t,e.defaultChecked=!!t,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),kr(e)}function jr(e,a,o){a==="number"&&Gi(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function Tt(e,a,o,t){if(e=e.options,a){a={};for(var n=0;n<o.length;n++)a["$"+o[n]]=!0;for(o=0;o<e.length;o++)n=a.hasOwnProperty("$"+e[o].value),e[o].selected!==n&&(e[o].selected=n),n&&t&&(e[o].defaultSelected=!0)}else{for(o=""+Ma(o),a=null,n=0;n<e.length;n++){if(e[n].value===o){e[n].selected=!0,t&&(e[n].defaultSelected=!0);return}a!==null||e[n].disabled||(a=e[n])}a!==null&&(a.selected=!0)}}function Dd(e,a,o){if(a!=null&&(a=""+Ma(a),a!==e.value&&(e.value=a),o==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=o!=null?""+Ma(o):""}function Ld(e,a,o,t){if(a==null){if(t!=null){if(o!=null)throw Error(u(92));if(Ta(t)){if(1<t.length)throw Error(u(93));t=t[0]}o=t}o==null&&(o=""),a=o}o=Ma(a),e.defaultValue=o,t=e.textContent,t===o&&t!==""&&t!==null&&(e.value=t),kr(e)}function Mt(e,a){if(a){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=a;return}}e.textContent=a}var r0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wd(e,a,o){var t=a.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?t?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":t?e.setProperty(a,o):typeof o!="number"||o===0||r0.has(a)?a==="float"?e.cssFloat=o:e[a]=(""+o).trim():e[a]=o+"px"}function kd(e,a,o){if(a!=null&&typeof a!="object")throw Error(u(62));if(e=e.style,o!=null){for(var t in o)!o.hasOwnProperty(t)||a!=null&&a.hasOwnProperty(t)||(t.indexOf("--")===0?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="");for(var n in a)t=a[n],a.hasOwnProperty(n)&&o[n]!==t&&wd(e,n,t)}else for(var l in a)a.hasOwnProperty(l)&&wd(e,l,a[l])}function Nr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var u0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),l0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _i(e){return l0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $a(){}var Pr=null;function Rr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zt=null,Dt=null;function Od(e){var a=At(e);if(a&&(e=a.stateNode)){var o=e[na]||null;e:switch(e=a.stateNode,a.type){case"input":if(Or(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),a=o.name,o.type==="radio"&&a!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+za(""+a)+'"][type="radio"]'),a=0;a<o.length;a++){var t=o[a];if(t!==e&&t.form===e.form){var n=t[na]||null;if(!n)throw Error(u(90));Or(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(a=0;a<o.length;a++)t=o[a],t.form===e.form&&Md(t)}break e;case"textarea":Dd(e,o.value,o.defaultValue);break e;case"select":a=o.value,a!=null&&Tt(e,!!o.multiple,a,!1)}}}var Ur=!1;function jd(e,a,o){if(Ur)return e(a,o);Ur=!0;try{var t=e(a);return t}finally{if(Ur=!1,(zt!==null||Dt!==null)&&(Ln(),zt&&(a=zt,e=Dt,Dt=zt=null,Od(a),e)))for(a=0;a<e.length;a++)Od(e[a])}}function As(e,a){var o=e.stateNode;if(o===null)return null;var t=o[na]||null;if(t===null)return null;o=t[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(u(231,a,typeof o));return o}var eo=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Br=!1;if(eo)try{var Es={};Object.defineProperty(Es,"passive",{get:function(){Br=!0}}),window.addEventListener("test",Es,Es),window.removeEventListener("test",Es,Es)}catch{Br=!1}var So=null,Vr=null,Ii=null;function Nd(){if(Ii)return Ii;var e,a=Vr,o=a.length,t,n="value"in So?So.value:So.textContent,l=n.length;for(e=0;e<o&&a[e]===n[e];e++);var d=o-e;for(t=1;t<=d&&a[o-t]===n[l-t];t++);return Ii=n.slice(e,1<t?1-t:void 0)}function Hi(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function Fi(){return!0}function Pd(){return!1}function ra(e){function a(o,t,n,l,d){this._reactName=o,this._targetInst=n,this.type=t,this.nativeEvent=l,this.target=d,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(o=e[v],this[v]=o?o(l):l[v]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Fi:Pd,this.isPropagationStopped=Pd,this}return y(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Fi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Fi)},persist:function(){},isPersistent:Fi}),a}var $o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qi=ra($o),Cs=y({},$o,{view:0,detail:0}),c0=ra(Cs),Gr,_r,Ts,Xi=y({},Cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ts&&(Ts&&e.type==="mousemove"?(Gr=e.screenX-Ts.screenX,_r=e.screenY-Ts.screenY):_r=Gr=0,Ts=e),Gr)},movementY:function(e){return"movementY"in e?e.movementY:_r}}),Rd=ra(Xi),d0=y({},Xi,{dataTransfer:0}),m0=ra(d0),p0=y({},Cs,{relatedTarget:0}),Ir=ra(p0),f0=y({},$o,{animationName:0,elapsedTime:0,pseudoElement:0}),h0=ra(f0),g0=y({},$o,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),v0=ra(g0),b0=y({},$o,{data:0}),Ud=ra(b0),y0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S0(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=q0[e])?!!a[e]:!1}function Hr(){return S0}var A0=y({},Cs,{key:function(e){if(e.key){var a=y0[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=Hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?x0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hr,charCode:function(e){return e.type==="keypress"?Hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),E0=ra(A0),C0=y({},Xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bd=ra(C0),T0=y({},Cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hr}),M0=ra(T0),z0=y({},$o,{propertyName:0,elapsedTime:0,pseudoElement:0}),D0=ra(z0),L0=y({},Xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),w0=ra(L0),k0=y({},$o,{newState:0,oldState:0}),O0=ra(k0),j0=[9,13,27,32],Fr=eo&&"CompositionEvent"in window,Ms=null;eo&&"documentMode"in document&&(Ms=document.documentMode);var N0=eo&&"TextEvent"in window&&!Ms,Vd=eo&&(!Fr||Ms&&8<Ms&&11>=Ms),Gd=" ",_d=!1;function Id(e,a){switch(e){case"keyup":return j0.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lt=!1;function P0(e,a){switch(e){case"compositionend":return Hd(a);case"keypress":return a.which!==32?null:(_d=!0,Gd);case"textInput":return e=a.data,e===Gd&&_d?null:e;default:return null}}function R0(e,a){if(Lt)return e==="compositionend"||!Fr&&Id(e,a)?(e=Nd(),Ii=Vr=So=null,Lt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Vd&&a.locale!=="ko"?null:a.data;default:return null}}var U0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fd(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!U0[e.type]:a==="textarea"}function Qd(e,a,o,t){zt?Dt?Dt.push(t):Dt=[t]:zt=t,a=Rn(a,"onChange"),0<a.length&&(o=new Qi("onChange","change",null,o,t),e.push({event:o,listeners:a}))}var zs=null,Ds=null;function B0(e){Df(e,0)}function Ki(e){var a=Ss(e);if(Md(a))return e}function Xd(e,a){if(e==="change")return a}var Kd=!1;if(eo){var Qr;if(eo){var Xr="oninput"in document;if(!Xr){var Yd=document.createElement("div");Yd.setAttribute("oninput","return;"),Xr=typeof Yd.oninput=="function"}Qr=Xr}else Qr=!1;Kd=Qr&&(!document.documentMode||9<document.documentMode)}function Wd(){zs&&(zs.detachEvent("onpropertychange",Zd),Ds=zs=null)}function Zd(e){if(e.propertyName==="value"&&Ki(Ds)){var a=[];Qd(a,Ds,e,Rr(e)),jd(B0,a)}}function V0(e,a,o){e==="focusin"?(Wd(),zs=a,Ds=o,zs.attachEvent("onpropertychange",Zd)):e==="focusout"&&Wd()}function G0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ki(Ds)}function _0(e,a){if(e==="click")return Ki(a)}function I0(e,a){if(e==="input"||e==="change")return Ki(a)}function H0(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ga=typeof Object.is=="function"?Object.is:H0;function Ls(e,a){if(ga(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var o=Object.keys(e),t=Object.keys(a);if(o.length!==t.length)return!1;for(t=0;t<o.length;t++){var n=o[t];if(!Er.call(a,n)||!ga(e[n],a[n]))return!1}return!0}function Jd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $d(e,a){var o=Jd(e);e=0;for(var t;o;){if(o.nodeType===3){if(t=e+o.textContent.length,e<=a&&t>=a)return{node:o,offset:a-e};e=t}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Jd(o)}}function em(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?em(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function am(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=Gi(e.document);a instanceof e.HTMLIFrameElement;){try{var o=typeof a.contentWindow.location.href=="string"}catch{o=!1}if(o)e=a.contentWindow;else break;a=Gi(e.document)}return a}function Kr(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var F0=eo&&"documentMode"in document&&11>=document.documentMode,wt=null,Yr=null,ws=null,Wr=!1;function om(e,a,o){var t=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Wr||wt==null||wt!==Gi(t)||(t=wt,"selectionStart"in t&&Kr(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),ws&&Ls(ws,t)||(ws=t,t=Rn(Yr,"onSelect"),0<t.length&&(a=new Qi("onSelect","select",null,a,o),e.push({event:a,listeners:t}),a.target=wt)))}function et(e,a){var o={};return o[e.toLowerCase()]=a.toLowerCase(),o["Webkit"+e]="webkit"+a,o["Moz"+e]="moz"+a,o}var kt={animationend:et("Animation","AnimationEnd"),animationiteration:et("Animation","AnimationIteration"),animationstart:et("Animation","AnimationStart"),transitionrun:et("Transition","TransitionRun"),transitionstart:et("Transition","TransitionStart"),transitioncancel:et("Transition","TransitionCancel"),transitionend:et("Transition","TransitionEnd")},Zr={},tm={};eo&&(tm=document.createElement("div").style,"AnimationEvent"in window||(delete kt.animationend.animation,delete kt.animationiteration.animation,delete kt.animationstart.animation),"TransitionEvent"in window||delete kt.transitionend.transition);function at(e){if(Zr[e])return Zr[e];if(!kt[e])return e;var a=kt[e],o;for(o in a)if(a.hasOwnProperty(o)&&o in tm)return Zr[e]=a[o];return e}var sm=at("animationend"),im=at("animationiteration"),nm=at("animationstart"),Q0=at("transitionrun"),X0=at("transitionstart"),K0=at("transitioncancel"),rm=at("transitionend"),um=new Map,Jr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jr.push("scrollEnd");function Ba(e,a){um.set(e,a),Jo(a,[e])}var Yi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Da=[],Ot=0,$r=0;function Wi(){for(var e=Ot,a=$r=Ot=0;a<e;){var o=Da[a];Da[a++]=null;var t=Da[a];Da[a++]=null;var n=Da[a];Da[a++]=null;var l=Da[a];if(Da[a++]=null,t!==null&&n!==null){var d=t.pending;d===null?n.next=n:(n.next=d.next,d.next=n),t.pending=n}l!==0&&lm(o,n,l)}}function Zi(e,a,o,t){Da[Ot++]=e,Da[Ot++]=a,Da[Ot++]=o,Da[Ot++]=t,$r|=t,e.lanes|=t,e=e.alternate,e!==null&&(e.lanes|=t)}function eu(e,a,o,t){return Zi(e,a,o,t),Ji(e)}function ot(e,a){return Zi(e,null,null,a),Ji(e)}function lm(e,a,o){e.lanes|=o;var t=e.alternate;t!==null&&(t.lanes|=o);for(var n=!1,l=e.return;l!==null;)l.childLanes|=o,t=l.alternate,t!==null&&(t.childLanes|=o),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(n=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,n&&a!==null&&(n=31-ha(o),e=l.hiddenUpdates,t=e[n],t===null?e[n]=[a]:t.push(a),a.lane=o|536870912),l):null}function Ji(e){if(50<$s)throw $s=0,ll=null,Error(u(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var jt={};function Y0(e,a,o,t){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function va(e,a,o,t){return new Y0(e,a,o,t)}function au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ao(e,a){var o=e.alternate;return o===null?(o=va(e.tag,a,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=a,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,a=e.dependencies,o.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function cm(e,a){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,a=o.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function $i(e,a,o,t,n,l){var d=0;if(t=e,typeof e=="function")au(e)&&(d=1);else if(typeof e=="string")d=ex(e,o,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Te:return e=va(31,o,a,n),e.elementType=Te,e.lanes=l,e;case R:return tt(o.children,n,l,a);case B:d=8,n|=24;break;case U:return e=va(12,o,a,n|2),e.elementType=U,e.lanes=l,e;case Y:return e=va(13,o,a,n),e.elementType=Y,e.lanes=l,e;case te:return e=va(19,o,a,n),e.elementType=te,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:d=10;break e;case I:d=9;break e;case ae:d=11;break e;case Z:d=14;break e;case J:d=16,t=null;break e}d=29,o=Error(u(130,e===null?"null":typeof e,"")),t=null}return a=va(d,o,a,n),a.elementType=e,a.type=t,a.lanes=l,a}function tt(e,a,o,t){return e=va(7,e,t,a),e.lanes=o,e}function ou(e,a,o){return e=va(6,e,null,a),e.lanes=o,e}function dm(e){var a=va(18,null,null,0);return a.stateNode=e,a}function tu(e,a,o){return a=va(4,e.children!==null?e.children:[],e.key,a),a.lanes=o,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var mm=new WeakMap;function La(e,a){if(typeof e=="object"&&e!==null){var o=mm.get(e);return o!==void 0?o:(a={value:e,source:a,stack:dd(a)},mm.set(e,a),a)}return{value:e,source:a,stack:dd(a)}}var Nt=[],Pt=0,en=null,ks=0,wa=[],ka=0,Ao=null,Ha=1,Fa="";function oo(e,a){Nt[Pt++]=ks,Nt[Pt++]=en,en=e,ks=a}function pm(e,a,o){wa[ka++]=Ha,wa[ka++]=Fa,wa[ka++]=Ao,Ao=e;var t=Ha;e=Fa;var n=32-ha(t)-1;t&=~(1<<n),o+=1;var l=32-ha(a)+n;if(30<l){var d=n-n%5;l=(t&(1<<d)-1).toString(32),t>>=d,n-=d,Ha=1<<32-ha(a)+n|o<<n|t,Fa=l+e}else Ha=1<<l|o<<n|t,Fa=e}function su(e){e.return!==null&&(oo(e,1),pm(e,1,0))}function iu(e){for(;e===en;)en=Nt[--Pt],Nt[Pt]=null,ks=Nt[--Pt],Nt[Pt]=null;for(;e===Ao;)Ao=wa[--ka],wa[ka]=null,Fa=wa[--ka],wa[ka]=null,Ha=wa[--ka],wa[ka]=null}function fm(e,a){wa[ka++]=Ha,wa[ka++]=Fa,wa[ka++]=Ao,Ha=a.id,Fa=a.overflow,Ao=e}var We=null,Me=null,me=!1,Eo=null,Oa=!1,nu=Error(u(519));function Co(e){var a=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Os(La(a,e)),nu}function hm(e){var a=e.stateNode,o=e.type,t=e.memoizedProps;switch(a[Ye]=e,a[na]=t,o){case"dialog":le("cancel",a),le("close",a);break;case"iframe":case"object":case"embed":le("load",a);break;case"video":case"audio":for(o=0;o<ai.length;o++)le(ai[o],a);break;case"source":le("error",a);break;case"img":case"image":case"link":le("error",a),le("load",a);break;case"details":le("toggle",a);break;case"input":le("invalid",a),zd(a,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0);break;case"select":le("invalid",a);break;case"textarea":le("invalid",a),Ld(a,t.value,t.defaultValue,t.children)}o=t.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||a.textContent===""+o||t.suppressHydrationWarning===!0||Of(a.textContent,o)?(t.popover!=null&&(le("beforetoggle",a),le("toggle",a)),t.onScroll!=null&&le("scroll",a),t.onScrollEnd!=null&&le("scrollend",a),t.onClick!=null&&(a.onclick=$a),a=!0):a=!1,a||Co(e,!0)}function gm(e){for(We=e.return;We;)switch(We.tag){case 5:case 31:case 13:Oa=!1;return;case 27:case 3:Oa=!0;return;default:We=We.return}}function Rt(e){if(e!==We)return!1;if(!me)return gm(e),me=!0,!1;var a=e.tag,o;if((o=a!==3&&a!==27)&&((o=a===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||El(e.type,e.memoizedProps)),o=!o),o&&Me&&Co(e),gm(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Me=_f(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Me=_f(e)}else a===27?(a=Me,Bo(e.type)?(e=Dl,Dl=null,Me=e):Me=a):Me=We?Na(e.stateNode.nextSibling):null;return!0}function st(){Me=We=null,me=!1}function ru(){var e=Eo;return e!==null&&(da===null?da=e:da.push.apply(da,e),Eo=null),e}function Os(e){Eo===null?Eo=[e]:Eo.push(e)}var uu=E(null),it=null,to=null;function To(e,a,o){_(uu,a._currentValue),a._currentValue=o}function so(e){e._currentValue=uu.current,P(uu)}function lu(e,a,o){for(;e!==null;){var t=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,t!==null&&(t.childLanes|=a)):t!==null&&(t.childLanes&a)!==a&&(t.childLanes|=a),e===o)break;e=e.return}}function cu(e,a,o,t){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var l=n.dependencies;if(l!==null){var d=n.child;l=l.firstContext;e:for(;l!==null;){var v=l;l=n;for(var S=0;S<a.length;S++)if(v.context===a[S]){l.lanes|=o,v=l.alternate,v!==null&&(v.lanes|=o),lu(l.return,o,e),t||(d=null);break e}l=v.next}}else if(n.tag===18){if(d=n.return,d===null)throw Error(u(341));d.lanes|=o,l=d.alternate,l!==null&&(l.lanes|=o),lu(d,o,e),d=null}else d=n.child;if(d!==null)d.return=n;else for(d=n;d!==null;){if(d===e){d=null;break}if(n=d.sibling,n!==null){n.return=d.return,d=n;break}d=d.return}n=d}}function Ut(e,a,o,t){e=null;for(var n=a,l=!1;n!==null;){if(!l){if((n.flags&524288)!==0)l=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var d=n.alternate;if(d===null)throw Error(u(387));if(d=d.memoizedProps,d!==null){var v=n.type;ga(n.pendingProps.value,d.value)||(e!==null?e.push(v):e=[v])}}else if(n===ye.current){if(d=n.alternate,d===null)throw Error(u(387));d.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(ni):e=[ni])}n=n.return}e!==null&&cu(a,e,o,t),a.flags|=262144}function an(e){for(e=e.firstContext;e!==null;){if(!ga(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function nt(e){it=e,to=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ze(e){return vm(it,e)}function on(e,a){return it===null&&nt(e),vm(e,a)}function vm(e,a){var o=a._currentValue;if(a={context:a,memoizedValue:o,next:null},to===null){if(e===null)throw Error(u(308));to=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else to=to.next=a;return o}var W0=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(o,t){e.push(t)}};this.abort=function(){a.aborted=!0,e.forEach(function(o){return o()})}},Z0=s.unstable_scheduleCallback,J0=s.unstable_NormalPriority,Be={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function du(){return{controller:new W0,data:new Map,refCount:0}}function js(e){e.refCount--,e.refCount===0&&Z0(J0,function(){e.controller.abort()})}var Ns=null,mu=0,Bt=0,Vt=null;function $0(e,a){if(Ns===null){var o=Ns=[];mu=0,Bt=hl(),Vt={status:"pending",value:void 0,then:function(t){o.push(t)}}}return mu++,a.then(bm,bm),a}function bm(){if(--mu===0&&Ns!==null){Vt!==null&&(Vt.status="fulfilled");var e=Ns;Ns=null,Bt=0,Vt=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function ey(e,a){var o=[],t={status:"pending",value:null,reason:null,then:function(n){o.push(n)}};return e.then(function(){t.status="fulfilled",t.value=a;for(var n=0;n<o.length;n++)(0,o[n])(a)},function(n){for(t.status="rejected",t.reason=n,n=0;n<o.length;n++)(0,o[n])(void 0)}),t}var ym=k.S;k.S=function(e,a){of=pa(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&$0(e,a),ym!==null&&ym(e,a)};var rt=E(null);function pu(){var e=rt.current;return e!==null?e:Ce.pooledCache}function tn(e,a){a===null?_(rt,rt.current):_(rt,a.pool)}function xm(){var e=pu();return e===null?null:{parent:Be._currentValue,pool:e}}var Gt=Error(u(460)),fu=Error(u(474)),sn=Error(u(542)),nn={then:function(){}};function qm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Sm(e,a,o){switch(o=e[o],o===void 0?e.push(a):o!==a&&(a.then($a,$a),a=o),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Em(e),e;default:if(typeof a.status=="string")a.then($a,$a);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=a,e.status="pending",e.then(function(t){if(a.status==="pending"){var n=a;n.status="fulfilled",n.value=t}},function(t){if(a.status==="pending"){var n=a;n.status="rejected",n.reason=t}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Em(e),e}throw lt=a,Gt}}function ut(e){try{var a=e._init;return a(e._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(lt=o,Gt):o}}var lt=null;function Am(){if(lt===null)throw Error(u(459));var e=lt;return lt=null,e}function Em(e){if(e===Gt||e===sn)throw Error(u(483))}var _t=null,Ps=0;function rn(e){var a=Ps;return Ps+=1,_t===null&&(_t=[]),Sm(_t,e,a)}function Rs(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function un(e,a){throw a.$$typeof===q?Error(u(525)):(e=Object.prototype.toString.call(a),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Cm(e){function a(C,A){if(e){var M=C.deletions;M===null?(C.deletions=[A],C.flags|=16):M.push(A)}}function o(C,A){if(!e)return null;for(;A!==null;)a(C,A),A=A.sibling;return null}function t(C){for(var A=new Map;C!==null;)C.key!==null?A.set(C.key,C):A.set(C.index,C),C=C.sibling;return A}function n(C,A){return C=ao(C,A),C.index=0,C.sibling=null,C}function l(C,A,M){return C.index=M,e?(M=C.alternate,M!==null?(M=M.index,M<A?(C.flags|=67108866,A):M):(C.flags|=67108866,A)):(C.flags|=1048576,A)}function d(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function v(C,A,M,O){return A===null||A.tag!==6?(A=ou(M,C.mode,O),A.return=C,A):(A=n(A,M),A.return=C,A)}function S(C,A,M,O){var W=M.type;return W===R?w(C,A,M.props.children,O,M.key):A!==null&&(A.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===J&&ut(W)===A.type)?(A=n(A,M.props),Rs(A,M),A.return=C,A):(A=$i(M.type,M.key,M.props,null,C.mode,O),Rs(A,M),A.return=C,A)}function z(C,A,M,O){return A===null||A.tag!==4||A.stateNode.containerInfo!==M.containerInfo||A.stateNode.implementation!==M.implementation?(A=tu(M,C.mode,O),A.return=C,A):(A=n(A,M.children||[]),A.return=C,A)}function w(C,A,M,O,W){return A===null||A.tag!==7?(A=tt(M,C.mode,O,W),A.return=C,A):(A=n(A,M),A.return=C,A)}function N(C,A,M){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=ou(""+A,C.mode,M),A.return=C,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case T:return M=$i(A.type,A.key,A.props,null,C.mode,M),Rs(M,A),M.return=C,M;case j:return A=tu(A,C.mode,M),A.return=C,A;case J:return A=ut(A),N(C,A,M)}if(Ta(A)||Ke(A))return A=tt(A,C.mode,M,null),A.return=C,A;if(typeof A.then=="function")return N(C,rn(A),M);if(A.$$typeof===H)return N(C,on(C,A),M);un(C,A)}return null}function D(C,A,M,O){var W=A!==null?A.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return W!==null?null:v(C,A,""+M,O);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case T:return M.key===W?S(C,A,M,O):null;case j:return M.key===W?z(C,A,M,O):null;case J:return M=ut(M),D(C,A,M,O)}if(Ta(M)||Ke(M))return W!==null?null:w(C,A,M,O,null);if(typeof M.then=="function")return D(C,A,rn(M),O);if(M.$$typeof===H)return D(C,A,on(C,M),O);un(C,M)}return null}function L(C,A,M,O,W){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return C=C.get(M)||null,v(A,C,""+O,W);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case T:return C=C.get(O.key===null?M:O.key)||null,S(A,C,O,W);case j:return C=C.get(O.key===null?M:O.key)||null,z(A,C,O,W);case J:return O=ut(O),L(C,A,M,O,W)}if(Ta(O)||Ke(O))return C=C.get(M)||null,w(A,C,O,W,null);if(typeof O.then=="function")return L(C,A,M,rn(O),W);if(O.$$typeof===H)return L(C,A,M,on(A,O),W);un(A,O)}return null}function F(C,A,M,O){for(var W=null,he=null,X=A,ne=A=0,de=null;X!==null&&ne<M.length;ne++){X.index>ne?(de=X,X=null):de=X.sibling;var ge=D(C,X,M[ne],O);if(ge===null){X===null&&(X=de);break}e&&X&&ge.alternate===null&&a(C,X),A=l(ge,A,ne),he===null?W=ge:he.sibling=ge,he=ge,X=de}if(ne===M.length)return o(C,X),me&&oo(C,ne),W;if(X===null){for(;ne<M.length;ne++)X=N(C,M[ne],O),X!==null&&(A=l(X,A,ne),he===null?W=X:he.sibling=X,he=X);return me&&oo(C,ne),W}for(X=t(X);ne<M.length;ne++)de=L(X,C,ne,M[ne],O),de!==null&&(e&&de.alternate!==null&&X.delete(de.key===null?ne:de.key),A=l(de,A,ne),he===null?W=de:he.sibling=de,he=de);return e&&X.forEach(function(Ho){return a(C,Ho)}),me&&oo(C,ne),W}function $(C,A,M,O){if(M==null)throw Error(u(151));for(var W=null,he=null,X=A,ne=A=0,de=null,ge=M.next();X!==null&&!ge.done;ne++,ge=M.next()){X.index>ne?(de=X,X=null):de=X.sibling;var Ho=D(C,X,ge.value,O);if(Ho===null){X===null&&(X=de);break}e&&X&&Ho.alternate===null&&a(C,X),A=l(Ho,A,ne),he===null?W=Ho:he.sibling=Ho,he=Ho,X=de}if(ge.done)return o(C,X),me&&oo(C,ne),W;if(X===null){for(;!ge.done;ne++,ge=M.next())ge=N(C,ge.value,O),ge!==null&&(A=l(ge,A,ne),he===null?W=ge:he.sibling=ge,he=ge);return me&&oo(C,ne),W}for(X=t(X);!ge.done;ne++,ge=M.next())ge=L(X,C,ne,ge.value,O),ge!==null&&(e&&ge.alternate!==null&&X.delete(ge.key===null?ne:ge.key),A=l(ge,A,ne),he===null?W=ge:he.sibling=ge,he=ge);return e&&X.forEach(function(dx){return a(C,dx)}),me&&oo(C,ne),W}function Ee(C,A,M,O){if(typeof M=="object"&&M!==null&&M.type===R&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case T:e:{for(var W=M.key;A!==null;){if(A.key===W){if(W=M.type,W===R){if(A.tag===7){o(C,A.sibling),O=n(A,M.props.children),O.return=C,C=O;break e}}else if(A.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===J&&ut(W)===A.type){o(C,A.sibling),O=n(A,M.props),Rs(O,M),O.return=C,C=O;break e}o(C,A);break}else a(C,A);A=A.sibling}M.type===R?(O=tt(M.props.children,C.mode,O,M.key),O.return=C,C=O):(O=$i(M.type,M.key,M.props,null,C.mode,O),Rs(O,M),O.return=C,C=O)}return d(C);case j:e:{for(W=M.key;A!==null;){if(A.key===W)if(A.tag===4&&A.stateNode.containerInfo===M.containerInfo&&A.stateNode.implementation===M.implementation){o(C,A.sibling),O=n(A,M.children||[]),O.return=C,C=O;break e}else{o(C,A);break}else a(C,A);A=A.sibling}O=tu(M,C.mode,O),O.return=C,C=O}return d(C);case J:return M=ut(M),Ee(C,A,M,O)}if(Ta(M))return F(C,A,M,O);if(Ke(M)){if(W=Ke(M),typeof W!="function")throw Error(u(150));return M=W.call(M),$(C,A,M,O)}if(typeof M.then=="function")return Ee(C,A,rn(M),O);if(M.$$typeof===H)return Ee(C,A,on(C,M),O);un(C,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,A!==null&&A.tag===6?(o(C,A.sibling),O=n(A,M),O.return=C,C=O):(o(C,A),O=ou(M,C.mode,O),O.return=C,C=O),d(C)):o(C,A)}return function(C,A,M,O){try{Ps=0;var W=Ee(C,A,M,O);return _t=null,W}catch(X){if(X===Gt||X===sn)throw X;var he=va(29,X,null,C.mode);return he.lanes=O,he.return=C,he}finally{}}}var ct=Cm(!0),Tm=Cm(!1),Mo=!1;function hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gu(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function zo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Do(e,a,o){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,(be&2)!==0){var n=t.pending;return n===null?a.next=a:(a.next=n.next,n.next=a),t.pending=a,a=Ji(e),lm(e,null,o),a}return Zi(e,t,a,o),Ji(e)}function Us(e,a,o){if(a=a.updateQueue,a!==null&&(a=a.shared,(o&4194048)!==0)){var t=a.lanes;t&=e.pendingLanes,o|=t,a.lanes=o,vd(e,o)}}function vu(e,a){var o=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,o===t)){var n=null,l=null;if(o=o.firstBaseUpdate,o!==null){do{var d={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};l===null?n=l=d:l=l.next=d,o=o.next}while(o!==null);l===null?n=l=a:l=l.next=a}else n=l=a;o={baseState:t.baseState,firstBaseUpdate:n,lastBaseUpdate:l,shared:t.shared,callbacks:t.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=a:e.next=a,o.lastBaseUpdate=a}var bu=!1;function Bs(){if(bu){var e=Vt;if(e!==null)throw e}}function Vs(e,a,o,t){bu=!1;var n=e.updateQueue;Mo=!1;var l=n.firstBaseUpdate,d=n.lastBaseUpdate,v=n.shared.pending;if(v!==null){n.shared.pending=null;var S=v,z=S.next;S.next=null,d===null?l=z:d.next=z,d=S;var w=e.alternate;w!==null&&(w=w.updateQueue,v=w.lastBaseUpdate,v!==d&&(v===null?w.firstBaseUpdate=z:v.next=z,w.lastBaseUpdate=S))}if(l!==null){var N=n.baseState;d=0,w=z=S=null,v=l;do{var D=v.lane&-536870913,L=D!==v.lane;if(L?(ce&D)===D:(t&D)===D){D!==0&&D===Bt&&(bu=!0),w!==null&&(w=w.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var F=e,$=v;D=a;var Ee=o;switch($.tag){case 1:if(F=$.payload,typeof F=="function"){N=F.call(Ee,N,D);break e}N=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=$.payload,D=typeof F=="function"?F.call(Ee,N,D):F,D==null)break e;N=y({},N,D);break e;case 2:Mo=!0}}D=v.callback,D!==null&&(e.flags|=64,L&&(e.flags|=8192),L=n.callbacks,L===null?n.callbacks=[D]:L.push(D))}else L={lane:D,tag:v.tag,payload:v.payload,callback:v.callback,next:null},w===null?(z=w=L,S=N):w=w.next=L,d|=D;if(v=v.next,v===null){if(v=n.shared.pending,v===null)break;L=v,v=L.next,L.next=null,n.lastBaseUpdate=L,n.shared.pending=null}}while(!0);w===null&&(S=N),n.baseState=S,n.firstBaseUpdate=z,n.lastBaseUpdate=w,l===null&&(n.shared.lanes=0),jo|=d,e.lanes=d,e.memoizedState=N}}function Mm(e,a){if(typeof e!="function")throw Error(u(191,e));e.call(a)}function zm(e,a){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)Mm(o[e],a)}var It=E(null),ln=E(0);function Dm(e,a){e=fo,_(ln,e),_(It,a),fo=e|a.baseLanes}function yu(){_(ln,fo),_(It,It.current)}function xu(){fo=ln.current,P(It),P(ln)}var ba=E(null),ja=null;function Lo(e){var a=e.alternate;_(Pe,Pe.current&1),_(ba,e),ja===null&&(a===null||It.current!==null||a.memoizedState!==null)&&(ja=e)}function qu(e){_(Pe,Pe.current),_(ba,e),ja===null&&(ja=e)}function Lm(e){e.tag===22?(_(Pe,Pe.current),_(ba,e),ja===null&&(ja=e)):wo()}function wo(){_(Pe,Pe.current),_(ba,ba.current)}function ya(e){P(ba),ja===e&&(ja=null),P(Pe)}var Pe=E(0);function cn(e){for(var a=e;a!==null;){if(a.tag===13){var o=a.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Ml(o)||zl(o)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var io=0,ie=null,Se=null,Ve=null,dn=!1,Ht=!1,dt=!1,mn=0,Gs=0,Ft=null,ay=0;function ke(){throw Error(u(321))}function Su(e,a){if(a===null)return!1;for(var o=0;o<a.length&&o<e.length;o++)if(!ga(e[o],a[o]))return!1;return!0}function Au(e,a,o,t,n,l){return io=l,ie=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,k.H=e===null||e.memoizedState===null?pp:Uu,dt=!1,l=o(t,n),dt=!1,Ht&&(l=km(a,o,t,n)),wm(e),l}function wm(e){k.H=Hs;var a=Se!==null&&Se.next!==null;if(io=0,Ve=Se=ie=null,dn=!1,Gs=0,Ft=null,a)throw Error(u(300));e===null||Ge||(e=e.dependencies,e!==null&&an(e)&&(Ge=!0))}function km(e,a,o,t){ie=e;var n=0;do{if(Ht&&(Ft=null),Gs=0,Ht=!1,25<=n)throw Error(u(301));if(n+=1,Ve=Se=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}k.H=fp,l=a(o,t)}while(Ht);return l}function oy(){var e=k.H,a=e.useState()[0];return a=typeof a.then=="function"?_s(a):a,e=e.useState()[0],(Se!==null?Se.memoizedState:null)!==e&&(ie.flags|=1024),a}function Eu(){var e=mn!==0;return mn=0,e}function Cu(e,a,o){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~o}function Tu(e){if(dn){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}dn=!1}io=0,Ve=Se=ie=null,Ht=!1,Gs=mn=0,Ft=null}function ia(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?ie.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Re(){if(Se===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var a=Ve===null?ie.memoizedState:Ve.next;if(a!==null)Ve=a,Se=e;else{if(e===null)throw ie.alternate===null?Error(u(467)):Error(u(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Ve===null?ie.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function pn(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _s(e){var a=Gs;return Gs+=1,Ft===null&&(Ft=[]),e=Sm(Ft,e,a),a=ie,(Ve===null?a.memoizedState:Ve.next)===null&&(a=a.alternate,k.H=a===null||a.memoizedState===null?pp:Uu),e}function fn(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return _s(e);if(e.$$typeof===H)return Ze(e)}throw Error(u(438,String(e)))}function Mu(e){var a=null,o=ie.updateQueue;if(o!==null&&(a=o.memoCache),a==null){var t=ie.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(a={data:t.data.map(function(n){return n.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),o===null&&(o=pn(),ie.updateQueue=o),o.memoCache=a,o=a.data[a.index],o===void 0)for(o=a.data[a.index]=Array(e),t=0;t<e;t++)o[t]=Ie;return a.index++,o}function no(e,a){return typeof a=="function"?a(e):a}function hn(e){var a=Re();return zu(a,Se,e)}function zu(e,a,o){var t=e.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=o;var n=e.baseQueue,l=t.pending;if(l!==null){if(n!==null){var d=n.next;n.next=l.next,l.next=d}a.baseQueue=n=l,t.pending=null}if(l=e.baseState,n===null)e.memoizedState=l;else{a=n.next;var v=d=null,S=null,z=a,w=!1;do{var N=z.lane&-536870913;if(N!==z.lane?(ce&N)===N:(io&N)===N){var D=z.revertLane;if(D===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),N===Bt&&(w=!0);else if((io&D)===D){z=z.next,D===Bt&&(w=!0);continue}else N={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},S===null?(v=S=N,d=l):S=S.next=N,ie.lanes|=D,jo|=D;N=z.action,dt&&o(l,N),l=z.hasEagerState?z.eagerState:o(l,N)}else D={lane:N,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},S===null?(v=S=D,d=l):S=S.next=D,ie.lanes|=N,jo|=N;z=z.next}while(z!==null&&z!==a);if(S===null?d=l:S.next=v,!ga(l,e.memoizedState)&&(Ge=!0,w&&(o=Vt,o!==null)))throw o;e.memoizedState=l,e.baseState=d,e.baseQueue=S,t.lastRenderedState=l}return n===null&&(t.lanes=0),[e.memoizedState,t.dispatch]}function Du(e){var a=Re(),o=a.queue;if(o===null)throw Error(u(311));o.lastRenderedReducer=e;var t=o.dispatch,n=o.pending,l=a.memoizedState;if(n!==null){o.pending=null;var d=n=n.next;do l=e(l,d.action),d=d.next;while(d!==n);ga(l,a.memoizedState)||(Ge=!0),a.memoizedState=l,a.baseQueue===null&&(a.baseState=l),o.lastRenderedState=l}return[l,t]}function Om(e,a,o){var t=ie,n=Re(),l=me;if(l){if(o===void 0)throw Error(u(407));o=o()}else o=a();var d=!ga((Se||n).memoizedState,o);if(d&&(n.memoizedState=o,Ge=!0),n=n.queue,ku(Pm.bind(null,t,n,e),[e]),n.getSnapshot!==a||d||Ve!==null&&Ve.memoizedState.tag&1){if(t.flags|=2048,Qt(9,{destroy:void 0},Nm.bind(null,t,n,o,a),null),Ce===null)throw Error(u(349));l||(io&127)!==0||jm(t,a,o)}return o}function jm(e,a,o){e.flags|=16384,e={getSnapshot:a,value:o},a=ie.updateQueue,a===null?(a=pn(),ie.updateQueue=a,a.stores=[e]):(o=a.stores,o===null?a.stores=[e]:o.push(e))}function Nm(e,a,o,t){a.value=o,a.getSnapshot=t,Rm(a)&&Um(e)}function Pm(e,a,o){return o(function(){Rm(a)&&Um(e)})}function Rm(e){var a=e.getSnapshot;e=e.value;try{var o=a();return!ga(e,o)}catch{return!0}}function Um(e){var a=ot(e,2);a!==null&&ma(a,e,2)}function Lu(e){var a=ia();if(typeof e=="function"){var o=e;if(e=o(),dt){xo(!0);try{o()}finally{xo(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:no,lastRenderedState:e},a}function Bm(e,a,o,t){return e.baseState=o,zu(e,Se,typeof t=="function"?t:no)}function ty(e,a,o,t,n){if(bn(e))throw Error(u(485));if(e=a.action,e!==null){var l={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){l.listeners.push(d)}};k.T!==null?o(!0):l.isTransition=!1,t(l),o=a.pending,o===null?(l.next=a.pending=l,Vm(a,l)):(l.next=o.next,a.pending=o.next=l)}}function Vm(e,a){var o=a.action,t=a.payload,n=e.state;if(a.isTransition){var l=k.T,d={};k.T=d;try{var v=o(n,t),S=k.S;S!==null&&S(d,v),Gm(e,a,v)}catch(z){wu(e,a,z)}finally{l!==null&&d.types!==null&&(l.types=d.types),k.T=l}}else try{l=o(n,t),Gm(e,a,l)}catch(z){wu(e,a,z)}}function Gm(e,a,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(t){_m(e,a,t)},function(t){return wu(e,a,t)}):_m(e,a,o)}function _m(e,a,o){a.status="fulfilled",a.value=o,Im(a),e.state=o,a=e.pending,a!==null&&(o=a.next,o===a?e.pending=null:(o=o.next,a.next=o,Vm(e,o)))}function wu(e,a,o){var t=e.pending;if(e.pending=null,t!==null){t=t.next;do a.status="rejected",a.reason=o,Im(a),a=a.next;while(a!==t)}e.action=null}function Im(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Hm(e,a){return a}function Fm(e,a){if(me){var o=Ce.formState;if(o!==null){e:{var t=ie;if(me){if(Me){a:{for(var n=Me,l=Oa;n.nodeType!==8;){if(!l){n=null;break a}if(n=Na(n.nextSibling),n===null){n=null;break a}}l=n.data,n=l==="F!"||l==="F"?n:null}if(n){Me=Na(n.nextSibling),t=n.data==="F!";break e}}Co(t)}t=!1}t&&(a=o[0])}}return o=ia(),o.memoizedState=o.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hm,lastRenderedState:a},o.queue=t,o=cp.bind(null,ie,t),t.dispatch=o,t=Lu(!1),l=Ru.bind(null,ie,!1,t.queue),t=ia(),n={state:a,dispatch:null,action:e,pending:null},t.queue=n,o=ty.bind(null,ie,n,l,o),n.dispatch=o,t.memoizedState=e,[a,o,!1]}function Qm(e){var a=Re();return Xm(a,Se,e)}function Xm(e,a,o){if(a=zu(e,a,Hm)[0],e=hn(no)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var t=_s(a)}catch(d){throw d===Gt?sn:d}else t=a;a=Re();var n=a.queue,l=n.dispatch;return o!==a.memoizedState&&(ie.flags|=2048,Qt(9,{destroy:void 0},sy.bind(null,n,o),null)),[t,l,e]}function sy(e,a){e.action=a}function Km(e){var a=Re(),o=Se;if(o!==null)return Xm(a,o,e);Re(),a=a.memoizedState,o=Re();var t=o.queue.dispatch;return o.memoizedState=e,[a,t,!1]}function Qt(e,a,o,t){return e={tag:e,create:o,deps:t,inst:a,next:null},a=ie.updateQueue,a===null&&(a=pn(),ie.updateQueue=a),o=a.lastEffect,o===null?a.lastEffect=e.next=e:(t=o.next,o.next=e,e.next=t,a.lastEffect=e),e}function Ym(){return Re().memoizedState}function gn(e,a,o,t){var n=ia();ie.flags|=e,n.memoizedState=Qt(1|a,{destroy:void 0},o,t===void 0?null:t)}function vn(e,a,o,t){var n=Re();t=t===void 0?null:t;var l=n.memoizedState.inst;Se!==null&&t!==null&&Su(t,Se.memoizedState.deps)?n.memoizedState=Qt(a,l,o,t):(ie.flags|=e,n.memoizedState=Qt(1|a,l,o,t))}function Wm(e,a){gn(8390656,8,e,a)}function ku(e,a){vn(2048,8,e,a)}function iy(e){ie.flags|=4;var a=ie.updateQueue;if(a===null)a=pn(),ie.updateQueue=a,a.events=[e];else{var o=a.events;o===null?a.events=[e]:o.push(e)}}function Zm(e){var a=Re().memoizedState;return iy({ref:a,nextImpl:e}),function(){if((be&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}function Jm(e,a){return vn(4,2,e,a)}function $m(e,a){return vn(4,4,e,a)}function ep(e,a){if(typeof a=="function"){e=e();var o=a(e);return function(){typeof o=="function"?o():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function ap(e,a,o){o=o!=null?o.concat([e]):null,vn(4,4,ep.bind(null,a,e),o)}function Ou(){}function op(e,a){var o=Re();a=a===void 0?null:a;var t=o.memoizedState;return a!==null&&Su(a,t[1])?t[0]:(o.memoizedState=[e,a],e)}function tp(e,a){var o=Re();a=a===void 0?null:a;var t=o.memoizedState;if(a!==null&&Su(a,t[1]))return t[0];if(t=e(),dt){xo(!0);try{e()}finally{xo(!1)}}return o.memoizedState=[t,a],t}function ju(e,a,o){return o===void 0||(io&1073741824)!==0&&(ce&261930)===0?e.memoizedState=a:(e.memoizedState=o,e=sf(),ie.lanes|=e,jo|=e,o)}function sp(e,a,o,t){return ga(o,a)?o:It.current!==null?(e=ju(e,o,t),ga(e,a)||(Ge=!0),e):(io&42)===0||(io&1073741824)!==0&&(ce&261930)===0?(Ge=!0,e.memoizedState=o):(e=sf(),ie.lanes|=e,jo|=e,a)}function ip(e,a,o,t,n){var l=V.p;V.p=l!==0&&8>l?l:8;var d=k.T,v={};k.T=v,Ru(e,!1,a,o);try{var S=n(),z=k.S;if(z!==null&&z(v,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var w=ey(S,t);Is(e,a,w,Sa(e))}else Is(e,a,t,Sa(e))}catch(N){Is(e,a,{then:function(){},status:"rejected",reason:N},Sa())}finally{V.p=l,d!==null&&v.types!==null&&(d.types=v.types),k.T=d}}function ny(){}function Nu(e,a,o,t){if(e.tag!==5)throw Error(u(476));var n=np(e).queue;ip(e,n,a,K,o===null?ny:function(){return rp(e),o(t)})}function np(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:no,lastRenderedState:K},next:null};var o={};return a.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:no,lastRenderedState:o},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function rp(e){var a=np(e);a.next===null&&(a=e.alternate.memoizedState),Is(e,a.next.queue,{},Sa())}function Pu(){return Ze(ni)}function up(){return Re().memoizedState}function lp(){return Re().memoizedState}function ry(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var o=Sa();e=zo(o);var t=Do(a,e,o);t!==null&&(ma(t,a,o),Us(t,a,o)),a={cache:du()},e.payload=a;return}a=a.return}}function uy(e,a,o){var t=Sa();o={lane:t,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},bn(e)?dp(a,o):(o=eu(e,a,o,t),o!==null&&(ma(o,e,t),mp(o,a,t)))}function cp(e,a,o){var t=Sa();Is(e,a,o,t)}function Is(e,a,o,t){var n={lane:t,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(bn(e))dp(a,n);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=a.lastRenderedReducer,l!==null))try{var d=a.lastRenderedState,v=l(d,o);if(n.hasEagerState=!0,n.eagerState=v,ga(v,d))return Zi(e,a,n,0),Ce===null&&Wi(),!1}catch{}finally{}if(o=eu(e,a,n,t),o!==null)return ma(o,e,t),mp(o,a,t),!0}return!1}function Ru(e,a,o,t){if(t={lane:2,revertLane:hl(),gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},bn(e)){if(a)throw Error(u(479))}else a=eu(e,o,t,2),a!==null&&ma(a,e,2)}function bn(e){var a=e.alternate;return e===ie||a!==null&&a===ie}function dp(e,a){Ht=dn=!0;var o=e.pending;o===null?a.next=a:(a.next=o.next,o.next=a),e.pending=a}function mp(e,a,o){if((o&4194048)!==0){var t=a.lanes;t&=e.pendingLanes,o|=t,a.lanes=o,vd(e,o)}}var Hs={readContext:Ze,use:fn,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useLayoutEffect:ke,useInsertionEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useSyncExternalStore:ke,useId:ke,useHostTransitionStatus:ke,useFormState:ke,useActionState:ke,useOptimistic:ke,useMemoCache:ke,useCacheRefresh:ke};Hs.useEffectEvent=ke;var pp={readContext:Ze,use:fn,useCallback:function(e,a){return ia().memoizedState=[e,a===void 0?null:a],e},useContext:Ze,useEffect:Wm,useImperativeHandle:function(e,a,o){o=o!=null?o.concat([e]):null,gn(4194308,4,ep.bind(null,a,e),o)},useLayoutEffect:function(e,a){return gn(4194308,4,e,a)},useInsertionEffect:function(e,a){gn(4,2,e,a)},useMemo:function(e,a){var o=ia();a=a===void 0?null:a;var t=e();if(dt){xo(!0);try{e()}finally{xo(!1)}}return o.memoizedState=[t,a],t},useReducer:function(e,a,o){var t=ia();if(o!==void 0){var n=o(a);if(dt){xo(!0);try{o(a)}finally{xo(!1)}}}else n=a;return t.memoizedState=t.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},t.queue=e,e=e.dispatch=uy.bind(null,ie,e),[t.memoizedState,e]},useRef:function(e){var a=ia();return e={current:e},a.memoizedState=e},useState:function(e){e=Lu(e);var a=e.queue,o=cp.bind(null,ie,a);return a.dispatch=o,[e.memoizedState,o]},useDebugValue:Ou,useDeferredValue:function(e,a){var o=ia();return ju(o,e,a)},useTransition:function(){var e=Lu(!1);return e=ip.bind(null,ie,e.queue,!0,!1),ia().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,o){var t=ie,n=ia();if(me){if(o===void 0)throw Error(u(407));o=o()}else{if(o=a(),Ce===null)throw Error(u(349));(ce&127)!==0||jm(t,a,o)}n.memoizedState=o;var l={value:o,getSnapshot:a};return n.queue=l,Wm(Pm.bind(null,t,l,e),[e]),t.flags|=2048,Qt(9,{destroy:void 0},Nm.bind(null,t,l,o,a),null),o},useId:function(){var e=ia(),a=Ce.identifierPrefix;if(me){var o=Fa,t=Ha;o=(t&~(1<<32-ha(t)-1)).toString(32)+o,a="_"+a+"R_"+o,o=mn++,0<o&&(a+="H"+o.toString(32)),a+="_"}else o=ay++,a="_"+a+"r_"+o.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Pu,useFormState:Fm,useActionState:Fm,useOptimistic:function(e){var a=ia();a.memoizedState=a.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=o,a=Ru.bind(null,ie,!0,o),o.dispatch=a,[e,a]},useMemoCache:Mu,useCacheRefresh:function(){return ia().memoizedState=ry.bind(null,ie)},useEffectEvent:function(e){var a=ia(),o={impl:e};return a.memoizedState=o,function(){if((be&2)!==0)throw Error(u(440));return o.impl.apply(void 0,arguments)}}},Uu={readContext:Ze,use:fn,useCallback:op,useContext:Ze,useEffect:ku,useImperativeHandle:ap,useInsertionEffect:Jm,useLayoutEffect:$m,useMemo:tp,useReducer:hn,useRef:Ym,useState:function(){return hn(no)},useDebugValue:Ou,useDeferredValue:function(e,a){var o=Re();return sp(o,Se.memoizedState,e,a)},useTransition:function(){var e=hn(no)[0],a=Re().memoizedState;return[typeof e=="boolean"?e:_s(e),a]},useSyncExternalStore:Om,useId:up,useHostTransitionStatus:Pu,useFormState:Qm,useActionState:Qm,useOptimistic:function(e,a){var o=Re();return Bm(o,Se,e,a)},useMemoCache:Mu,useCacheRefresh:lp};Uu.useEffectEvent=Zm;var fp={readContext:Ze,use:fn,useCallback:op,useContext:Ze,useEffect:ku,useImperativeHandle:ap,useInsertionEffect:Jm,useLayoutEffect:$m,useMemo:tp,useReducer:Du,useRef:Ym,useState:function(){return Du(no)},useDebugValue:Ou,useDeferredValue:function(e,a){var o=Re();return Se===null?ju(o,e,a):sp(o,Se.memoizedState,e,a)},useTransition:function(){var e=Du(no)[0],a=Re().memoizedState;return[typeof e=="boolean"?e:_s(e),a]},useSyncExternalStore:Om,useId:up,useHostTransitionStatus:Pu,useFormState:Km,useActionState:Km,useOptimistic:function(e,a){var o=Re();return Se!==null?Bm(o,Se,e,a):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:Mu,useCacheRefresh:lp};fp.useEffectEvent=Zm;function Bu(e,a,o,t){a=e.memoizedState,o=o(t,a),o=o==null?a:y({},a,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Vu={enqueueSetState:function(e,a,o){e=e._reactInternals;var t=Sa(),n=zo(t);n.payload=a,o!=null&&(n.callback=o),a=Do(e,n,t),a!==null&&(ma(a,e,t),Us(a,e,t))},enqueueReplaceState:function(e,a,o){e=e._reactInternals;var t=Sa(),n=zo(t);n.tag=1,n.payload=a,o!=null&&(n.callback=o),a=Do(e,n,t),a!==null&&(ma(a,e,t),Us(a,e,t))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var o=Sa(),t=zo(o);t.tag=2,a!=null&&(t.callback=a),a=Do(e,t,o),a!==null&&(ma(a,e,o),Us(a,e,o))}};function hp(e,a,o,t,n,l,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,l,d):a.prototype&&a.prototype.isPureReactComponent?!Ls(o,t)||!Ls(n,l):!0}function gp(e,a,o,t){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(o,t),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(o,t),a.state!==e&&Vu.enqueueReplaceState(a,a.state,null)}function mt(e,a){var o=a;if("ref"in a){o={};for(var t in a)t!=="ref"&&(o[t]=a[t])}if(e=e.defaultProps){o===a&&(o=y({},o));for(var n in e)o[n]===void 0&&(o[n]=e[n])}return o}function vp(e){Yi(e)}function bp(e){console.error(e)}function yp(e){Yi(e)}function yn(e,a){try{var o=e.onUncaughtError;o(a.value,{componentStack:a.stack})}catch(t){setTimeout(function(){throw t})}}function xp(e,a,o){try{var t=e.onCaughtError;t(o.value,{componentStack:o.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Gu(e,a,o){return o=zo(o),o.tag=3,o.payload={element:null},o.callback=function(){yn(e,a)},o}function qp(e){return e=zo(e),e.tag=3,e}function Sp(e,a,o,t){var n=o.type.getDerivedStateFromError;if(typeof n=="function"){var l=t.value;e.payload=function(){return n(l)},e.callback=function(){xp(a,o,t)}}var d=o.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){xp(a,o,t),typeof n!="function"&&(No===null?No=new Set([this]):No.add(this));var v=t.stack;this.componentDidCatch(t.value,{componentStack:v!==null?v:""})})}function ly(e,a,o,t,n){if(o.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(a=o.alternate,a!==null&&Ut(a,o,n,!0),o=ba.current,o!==null){switch(o.tag){case 31:case 13:return ja===null?wn():o.alternate===null&&Oe===0&&(Oe=3),o.flags&=-257,o.flags|=65536,o.lanes=n,t===nn?o.flags|=16384:(a=o.updateQueue,a===null?o.updateQueue=new Set([t]):a.add(t),ml(e,t,n)),!1;case 22:return o.flags|=65536,t===nn?o.flags|=16384:(a=o.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([t])},o.updateQueue=a):(o=a.retryQueue,o===null?a.retryQueue=new Set([t]):o.add(t)),ml(e,t,n)),!1}throw Error(u(435,o.tag))}return ml(e,t,n),wn(),!1}if(me)return a=ba.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=n,t!==nu&&(e=Error(u(422),{cause:t}),Os(La(e,o)))):(t!==nu&&(a=Error(u(423),{cause:t}),Os(La(a,o))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,t=La(t,o),n=Gu(e.stateNode,t,n),vu(e,n),Oe!==4&&(Oe=2)),!1;var l=Error(u(520),{cause:t});if(l=La(l,o),Js===null?Js=[l]:Js.push(l),Oe!==4&&(Oe=2),a===null)return!0;t=La(t,o),o=a;do{switch(o.tag){case 3:return o.flags|=65536,e=n&-n,o.lanes|=e,e=Gu(o.stateNode,t,e),vu(o,e),!1;case 1:if(a=o.type,l=o.stateNode,(o.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(No===null||!No.has(l))))return o.flags|=65536,n&=-n,o.lanes|=n,n=qp(n),Sp(n,e,o,t),vu(o,n),!1}o=o.return}while(o!==null);return!1}var _u=Error(u(461)),Ge=!1;function Je(e,a,o,t){a.child=e===null?Tm(a,null,o,t):ct(a,e.child,o,t)}function Ap(e,a,o,t,n){o=o.render;var l=a.ref;if("ref"in t){var d={};for(var v in t)v!=="ref"&&(d[v]=t[v])}else d=t;return nt(a),t=Au(e,a,o,d,l,n),v=Eu(),e!==null&&!Ge?(Cu(e,a,n),ro(e,a,n)):(me&&v&&su(a),a.flags|=1,Je(e,a,t,n),a.child)}function Ep(e,a,o,t,n){if(e===null){var l=o.type;return typeof l=="function"&&!au(l)&&l.defaultProps===void 0&&o.compare===null?(a.tag=15,a.type=l,Cp(e,a,l,t,n)):(e=$i(o.type,null,t,a,a.mode,n),e.ref=a.ref,e.return=a,a.child=e)}if(l=e.child,!Wu(e,n)){var d=l.memoizedProps;if(o=o.compare,o=o!==null?o:Ls,o(d,t)&&e.ref===a.ref)return ro(e,a,n)}return a.flags|=1,e=ao(l,t),e.ref=a.ref,e.return=a,a.child=e}function Cp(e,a,o,t,n){if(e!==null){var l=e.memoizedProps;if(Ls(l,t)&&e.ref===a.ref)if(Ge=!1,a.pendingProps=t=l,Wu(e,n))(e.flags&131072)!==0&&(Ge=!0);else return a.lanes=e.lanes,ro(e,a,n)}return Iu(e,a,o,t,n)}function Tp(e,a,o,t){var n=t.children,l=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.mode==="hidden"){if((a.flags&128)!==0){if(l=l!==null?l.baseLanes|o:o,e!==null){for(t=a.child=e.child,n=0;t!==null;)n=n|t.lanes|t.childLanes,t=t.sibling;t=n&~l}else t=0,a.child=null;return Mp(e,a,l,o,t)}if((o&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&tn(a,l!==null?l.cachePool:null),l!==null?Dm(a,l):yu(),Lm(a);else return t=a.lanes=536870912,Mp(e,a,l!==null?l.baseLanes|o:o,o,t)}else l!==null?(tn(a,l.cachePool),Dm(a,l),wo(),a.memoizedState=null):(e!==null&&tn(a,null),yu(),wo());return Je(e,a,n,o),a.child}function Fs(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Mp(e,a,o,t,n){var l=pu();return l=l===null?null:{parent:Be._currentValue,pool:l},a.memoizedState={baseLanes:o,cachePool:l},e!==null&&tn(a,null),yu(),Lm(a),e!==null&&Ut(e,a,t,!0),a.childLanes=n,null}function xn(e,a){return a=Sn({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function zp(e,a,o){return ct(a,e.child,null,o),e=xn(a,a.pendingProps),e.flags|=2,ya(a),a.memoizedState=null,e}function cy(e,a,o){var t=a.pendingProps,n=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(me){if(t.mode==="hidden")return e=xn(a,t),a.lanes=536870912,Fs(null,e);if(qu(a),(e=Me)?(e=Gf(e,Oa),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Ao!==null?{id:Ha,overflow:Fa}:null,retryLane:536870912,hydrationErrors:null},o=dm(e),o.return=a,a.child=o,We=a,Me=null)):e=null,e===null)throw Co(a);return a.lanes=536870912,null}return xn(a,t)}var l=e.memoizedState;if(l!==null){var d=l.dehydrated;if(qu(a),n)if(a.flags&256)a.flags&=-257,a=zp(e,a,o);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(u(558));else if(Ge||Ut(e,a,o,!1),n=(o&e.childLanes)!==0,Ge||n){if(t=Ce,t!==null&&(d=bd(t,o),d!==0&&d!==l.retryLane))throw l.retryLane=d,ot(e,d),ma(t,e,d),_u;wn(),a=zp(e,a,o)}else e=l.treeContext,Me=Na(d.nextSibling),We=a,me=!0,Eo=null,Oa=!1,e!==null&&fm(a,e),a=xn(a,t),a.flags|=4096;return a}return e=ao(e.child,{mode:t.mode,children:t.children}),e.ref=a.ref,a.child=e,e.return=a,e}function qn(e,a){var o=a.ref;if(o===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(u(284));(e===null||e.ref!==o)&&(a.flags|=4194816)}}function Iu(e,a,o,t,n){return nt(a),o=Au(e,a,o,t,void 0,n),t=Eu(),e!==null&&!Ge?(Cu(e,a,n),ro(e,a,n)):(me&&t&&su(a),a.flags|=1,Je(e,a,o,n),a.child)}function Dp(e,a,o,t,n,l){return nt(a),a.updateQueue=null,o=km(a,t,o,n),wm(e),t=Eu(),e!==null&&!Ge?(Cu(e,a,l),ro(e,a,l)):(me&&t&&su(a),a.flags|=1,Je(e,a,o,l),a.child)}function Lp(e,a,o,t,n){if(nt(a),a.stateNode===null){var l=jt,d=o.contextType;typeof d=="object"&&d!==null&&(l=Ze(d)),l=new o(t,l),a.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Vu,a.stateNode=l,l._reactInternals=a,l=a.stateNode,l.props=t,l.state=a.memoizedState,l.refs={},hu(a),d=o.contextType,l.context=typeof d=="object"&&d!==null?Ze(d):jt,l.state=a.memoizedState,d=o.getDerivedStateFromProps,typeof d=="function"&&(Bu(a,o,d,t),l.state=a.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(d=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),d!==l.state&&Vu.enqueueReplaceState(l,l.state,null),Vs(a,t,l,n),Bs(),l.state=a.memoizedState),typeof l.componentDidMount=="function"&&(a.flags|=4194308),t=!0}else if(e===null){l=a.stateNode;var v=a.memoizedProps,S=mt(o,v);l.props=S;var z=l.context,w=o.contextType;d=jt,typeof w=="object"&&w!==null&&(d=Ze(w));var N=o.getDerivedStateFromProps;w=typeof N=="function"||typeof l.getSnapshotBeforeUpdate=="function",v=a.pendingProps!==v,w||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(v||z!==d)&&gp(a,l,t,d),Mo=!1;var D=a.memoizedState;l.state=D,Vs(a,t,l,n),Bs(),z=a.memoizedState,v||D!==z||Mo?(typeof N=="function"&&(Bu(a,o,N,t),z=a.memoizedState),(S=Mo||hp(a,o,S,t,D,z,d))?(w||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(a.flags|=4194308)):(typeof l.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=t,a.memoizedState=z),l.props=t,l.state=z,l.context=d,t=S):(typeof l.componentDidMount=="function"&&(a.flags|=4194308),t=!1)}else{l=a.stateNode,gu(e,a),d=a.memoizedProps,w=mt(o,d),l.props=w,N=a.pendingProps,D=l.context,z=o.contextType,S=jt,typeof z=="object"&&z!==null&&(S=Ze(z)),v=o.getDerivedStateFromProps,(z=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(d!==N||D!==S)&&gp(a,l,t,S),Mo=!1,D=a.memoizedState,l.state=D,Vs(a,t,l,n),Bs();var L=a.memoizedState;d!==N||D!==L||Mo||e!==null&&e.dependencies!==null&&an(e.dependencies)?(typeof v=="function"&&(Bu(a,o,v,t),L=a.memoizedState),(w=Mo||hp(a,o,w,t,D,L,S)||e!==null&&e.dependencies!==null&&an(e.dependencies))?(z||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(t,L,S),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(t,L,S)),typeof l.componentDidUpdate=="function"&&(a.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof l.componentDidUpdate!="function"||d===e.memoizedProps&&D===e.memoizedState||(a.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&D===e.memoizedState||(a.flags|=1024),a.memoizedProps=t,a.memoizedState=L),l.props=t,l.state=L,l.context=S,t=w):(typeof l.componentDidUpdate!="function"||d===e.memoizedProps&&D===e.memoizedState||(a.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&D===e.memoizedState||(a.flags|=1024),t=!1)}return l=t,qn(e,a),t=(a.flags&128)!==0,l||t?(l=a.stateNode,o=t&&typeof o.getDerivedStateFromError!="function"?null:l.render(),a.flags|=1,e!==null&&t?(a.child=ct(a,e.child,null,n),a.child=ct(a,null,o,n)):Je(e,a,o,n),a.memoizedState=l.state,e=a.child):e=ro(e,a,n),e}function wp(e,a,o,t){return st(),a.flags|=256,Je(e,a,o,t),a.child}var Hu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fu(e){return{baseLanes:e,cachePool:xm()}}function Qu(e,a,o){return e=e!==null?e.childLanes&~o:0,a&&(e|=qa),e}function kp(e,a,o){var t=a.pendingProps,n=!1,l=(a.flags&128)!==0,d;if((d=l)||(d=e!==null&&e.memoizedState===null?!1:(Pe.current&2)!==0),d&&(n=!0,a.flags&=-129),d=(a.flags&32)!==0,a.flags&=-33,e===null){if(me){if(n?Lo(a):wo(),(e=Me)?(e=Gf(e,Oa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:Ao!==null?{id:Ha,overflow:Fa}:null,retryLane:536870912,hydrationErrors:null},o=dm(e),o.return=a,a.child=o,We=a,Me=null)):e=null,e===null)throw Co(a);return zl(e)?a.lanes=32:a.lanes=536870912,null}var v=t.children;return t=t.fallback,n?(wo(),n=a.mode,v=Sn({mode:"hidden",children:v},n),t=tt(t,n,o,null),v.return=a,t.return=a,v.sibling=t,a.child=v,t=a.child,t.memoizedState=Fu(o),t.childLanes=Qu(e,d,o),a.memoizedState=Hu,Fs(null,t)):(Lo(a),Xu(a,v))}var S=e.memoizedState;if(S!==null&&(v=S.dehydrated,v!==null)){if(l)a.flags&256?(Lo(a),a.flags&=-257,a=Ku(e,a,o)):a.memoizedState!==null?(wo(),a.child=e.child,a.flags|=128,a=null):(wo(),v=t.fallback,n=a.mode,t=Sn({mode:"visible",children:t.children},n),v=tt(v,n,o,null),v.flags|=2,t.return=a,v.return=a,t.sibling=v,a.child=t,ct(a,e.child,null,o),t=a.child,t.memoizedState=Fu(o),t.childLanes=Qu(e,d,o),a.memoizedState=Hu,a=Fs(null,t));else if(Lo(a),zl(v)){if(d=v.nextSibling&&v.nextSibling.dataset,d)var z=d.dgst;d=z,t=Error(u(419)),t.stack="",t.digest=d,Os({value:t,source:null,stack:null}),a=Ku(e,a,o)}else if(Ge||Ut(e,a,o,!1),d=(o&e.childLanes)!==0,Ge||d){if(d=Ce,d!==null&&(t=bd(d,o),t!==0&&t!==S.retryLane))throw S.retryLane=t,ot(e,t),ma(d,e,t),_u;Ml(v)||wn(),a=Ku(e,a,o)}else Ml(v)?(a.flags|=192,a.child=e.child,a=null):(e=S.treeContext,Me=Na(v.nextSibling),We=a,me=!0,Eo=null,Oa=!1,e!==null&&fm(a,e),a=Xu(a,t.children),a.flags|=4096);return a}return n?(wo(),v=t.fallback,n=a.mode,S=e.child,z=S.sibling,t=ao(S,{mode:"hidden",children:t.children}),t.subtreeFlags=S.subtreeFlags&65011712,z!==null?v=ao(z,v):(v=tt(v,n,o,null),v.flags|=2),v.return=a,t.return=a,t.sibling=v,a.child=t,Fs(null,t),t=a.child,v=e.child.memoizedState,v===null?v=Fu(o):(n=v.cachePool,n!==null?(S=Be._currentValue,n=n.parent!==S?{parent:S,pool:S}:n):n=xm(),v={baseLanes:v.baseLanes|o,cachePool:n}),t.memoizedState=v,t.childLanes=Qu(e,d,o),a.memoizedState=Hu,Fs(e.child,t)):(Lo(a),o=e.child,e=o.sibling,o=ao(o,{mode:"visible",children:t.children}),o.return=a,o.sibling=null,e!==null&&(d=a.deletions,d===null?(a.deletions=[e],a.flags|=16):d.push(e)),a.child=o,a.memoizedState=null,o)}function Xu(e,a){return a=Sn({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Sn(e,a){return e=va(22,e,null,a),e.lanes=0,e}function Ku(e,a,o){return ct(a,e.child,null,o),e=Xu(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Op(e,a,o){e.lanes|=a;var t=e.alternate;t!==null&&(t.lanes|=a),lu(e.return,a,o)}function Yu(e,a,o,t,n,l){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:t,tail:o,tailMode:n,treeForkCount:l}:(d.isBackwards=a,d.rendering=null,d.renderingStartTime=0,d.last=t,d.tail=o,d.tailMode=n,d.treeForkCount=l)}function jp(e,a,o){var t=a.pendingProps,n=t.revealOrder,l=t.tail;t=t.children;var d=Pe.current,v=(d&2)!==0;if(v?(d=d&1|2,a.flags|=128):d&=1,_(Pe,d),Je(e,a,t,o),t=me?ks:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Op(e,o,a);else if(e.tag===19)Op(e,o,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(o=a.child,n=null;o!==null;)e=o.alternate,e!==null&&cn(e)===null&&(n=o),o=o.sibling;o=n,o===null?(n=a.child,a.child=null):(n=o.sibling,o.sibling=null),Yu(a,!1,n,o,l,t);break;case"backwards":case"unstable_legacy-backwards":for(o=null,n=a.child,a.child=null;n!==null;){if(e=n.alternate,e!==null&&cn(e)===null){a.child=n;break}e=n.sibling,n.sibling=o,o=n,n=e}Yu(a,!0,o,null,l,t);break;case"together":Yu(a,!1,null,null,void 0,t);break;default:a.memoizedState=null}return a.child}function ro(e,a,o){if(e!==null&&(a.dependencies=e.dependencies),jo|=a.lanes,(o&a.childLanes)===0)if(e!==null){if(Ut(e,a,o,!1),(o&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(u(153));if(a.child!==null){for(e=a.child,o=ao(e,e.pendingProps),a.child=o,o.return=a;e.sibling!==null;)e=e.sibling,o=o.sibling=ao(e,e.pendingProps),o.return=a;o.sibling=null}return a.child}function Wu(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&an(e)))}function dy(e,a,o){switch(a.tag){case 3:sa(a,a.stateNode.containerInfo),To(a,Be,e.memoizedState.cache),st();break;case 27:case 5:vs(a);break;case 4:sa(a,a.stateNode.containerInfo);break;case 10:To(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,qu(a),null;break;case 13:var t=a.memoizedState;if(t!==null)return t.dehydrated!==null?(Lo(a),a.flags|=128,null):(o&a.child.childLanes)!==0?kp(e,a,o):(Lo(a),e=ro(e,a,o),e!==null?e.sibling:null);Lo(a);break;case 19:var n=(e.flags&128)!==0;if(t=(o&a.childLanes)!==0,t||(Ut(e,a,o,!1),t=(o&a.childLanes)!==0),n){if(t)return jp(e,a,o);a.flags|=128}if(n=a.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),_(Pe,Pe.current),t)break;return null;case 22:return a.lanes=0,Tp(e,a,o,a.pendingProps);case 24:To(a,Be,e.memoizedState.cache)}return ro(e,a,o)}function Np(e,a,o){if(e!==null)if(e.memoizedProps!==a.pendingProps)Ge=!0;else{if(!Wu(e,o)&&(a.flags&128)===0)return Ge=!1,dy(e,a,o);Ge=(e.flags&131072)!==0}else Ge=!1,me&&(a.flags&1048576)!==0&&pm(a,ks,a.index);switch(a.lanes=0,a.tag){case 16:e:{var t=a.pendingProps;if(e=ut(a.elementType),a.type=e,typeof e=="function")au(e)?(t=mt(e,t),a.tag=1,a=Lp(null,a,e,t,o)):(a.tag=0,a=Iu(null,a,e,t,o));else{if(e!=null){var n=e.$$typeof;if(n===ae){a.tag=11,a=Ap(null,a,e,t,o);break e}else if(n===Z){a.tag=14,a=Ep(null,a,e,t,o);break e}}throw a=Ca(e)||e,Error(u(306,a,""))}}return a;case 0:return Iu(e,a,a.type,a.pendingProps,o);case 1:return t=a.type,n=mt(t,a.pendingProps),Lp(e,a,t,n,o);case 3:e:{if(sa(a,a.stateNode.containerInfo),e===null)throw Error(u(387));t=a.pendingProps;var l=a.memoizedState;n=l.element,gu(e,a),Vs(a,t,null,o);var d=a.memoizedState;if(t=d.cache,To(a,Be,t),t!==l.cache&&cu(a,[Be],o,!0),Bs(),t=d.element,l.isDehydrated)if(l={element:t,isDehydrated:!1,cache:d.cache},a.updateQueue.baseState=l,a.memoizedState=l,a.flags&256){a=wp(e,a,t,o);break e}else if(t!==n){n=La(Error(u(424)),a),Os(n),a=wp(e,a,t,o);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Me=Na(e.firstChild),We=a,me=!0,Eo=null,Oa=!0,o=Tm(a,null,t,o),a.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(st(),t===n){a=ro(e,a,o);break e}Je(e,a,t,o)}a=a.child}return a;case 26:return qn(e,a),e===null?(o=Xf(a.type,null,a.pendingProps,null))?a.memoizedState=o:me||(o=a.type,e=a.pendingProps,t=Un(re.current).createElement(o),t[Ye]=a,t[na]=e,$e(t,o,e),Fe(t),a.stateNode=t):a.memoizedState=Xf(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return vs(a),e===null&&me&&(t=a.stateNode=Hf(a.type,a.pendingProps,re.current),We=a,Oa=!0,n=Me,Bo(a.type)?(Dl=n,Me=Na(t.firstChild)):Me=n),Je(e,a,a.pendingProps.children,o),qn(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&me&&((n=t=Me)&&(t=Gy(t,a.type,a.pendingProps,Oa),t!==null?(a.stateNode=t,We=a,Me=Na(t.firstChild),Oa=!1,n=!0):n=!1),n||Co(a)),vs(a),n=a.type,l=a.pendingProps,d=e!==null?e.memoizedProps:null,t=l.children,El(n,l)?t=null:d!==null&&El(n,d)&&(a.flags|=32),a.memoizedState!==null&&(n=Au(e,a,oy,null,null,o),ni._currentValue=n),qn(e,a),Je(e,a,t,o),a.child;case 6:return e===null&&me&&((e=o=Me)&&(o=_y(o,a.pendingProps,Oa),o!==null?(a.stateNode=o,We=a,Me=null,e=!0):e=!1),e||Co(a)),null;case 13:return kp(e,a,o);case 4:return sa(a,a.stateNode.containerInfo),t=a.pendingProps,e===null?a.child=ct(a,null,t,o):Je(e,a,t,o),a.child;case 11:return Ap(e,a,a.type,a.pendingProps,o);case 7:return Je(e,a,a.pendingProps,o),a.child;case 8:return Je(e,a,a.pendingProps.children,o),a.child;case 12:return Je(e,a,a.pendingProps.children,o),a.child;case 10:return t=a.pendingProps,To(a,a.type,t.value),Je(e,a,t.children,o),a.child;case 9:return n=a.type._context,t=a.pendingProps.children,nt(a),n=Ze(n),t=t(n),a.flags|=1,Je(e,a,t,o),a.child;case 14:return Ep(e,a,a.type,a.pendingProps,o);case 15:return Cp(e,a,a.type,a.pendingProps,o);case 19:return jp(e,a,o);case 31:return cy(e,a,o);case 22:return Tp(e,a,o,a.pendingProps);case 24:return nt(a),t=Ze(Be),e===null?(n=pu(),n===null&&(n=Ce,l=du(),n.pooledCache=l,l.refCount++,l!==null&&(n.pooledCacheLanes|=o),n=l),a.memoizedState={parent:t,cache:n},hu(a),To(a,Be,n)):((e.lanes&o)!==0&&(gu(e,a),Vs(a,null,null,o),Bs()),n=e.memoizedState,l=a.memoizedState,n.parent!==t?(n={parent:t,cache:t},a.memoizedState=n,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=n),To(a,Be,t)):(t=l.cache,To(a,Be,t),t!==n.cache&&cu(a,[Be],o,!0))),Je(e,a,a.pendingProps.children,o),a.child;case 29:throw a.pendingProps}throw Error(u(156,a.tag))}function uo(e){e.flags|=4}function Zu(e,a,o,t,n){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(lf())e.flags|=8192;else throw lt=nn,fu}else e.flags&=-16777217}function Pp(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Jf(a))if(lf())e.flags|=8192;else throw lt=nn,fu}function An(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?hd():536870912,e.lanes|=a,Wt|=a)}function Qs(e,a){if(!me)switch(e.tailMode){case"hidden":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var t=null;o!==null;)o.alternate!==null&&(t=o),o=o.sibling;t===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function ze(e){var a=e.alternate!==null&&e.alternate.child===e.child,o=0,t=0;if(a)for(var n=e.child;n!==null;)o|=n.lanes|n.childLanes,t|=n.subtreeFlags&65011712,t|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)o|=n.lanes|n.childLanes,t|=n.subtreeFlags,t|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=t,e.childLanes=o,a}function my(e,a,o){var t=a.pendingProps;switch(iu(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(a),null;case 1:return ze(a),null;case 3:return o=a.stateNode,t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),so(Be),Ne(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Rt(a)?uo(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,ru())),ze(a),null;case 26:var n=a.type,l=a.memoizedState;return e===null?(uo(a),l!==null?(ze(a),Pp(a,l)):(ze(a),Zu(a,n,null,t,o))):l?l!==e.memoizedState?(uo(a),ze(a),Pp(a,l)):(ze(a),a.flags&=-16777217):(e=e.memoizedProps,e!==t&&uo(a),ze(a),Zu(a,n,e,t,o)),null;case 27:if(Oi(a),o=re.current,n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==t&&uo(a);else{if(!t){if(a.stateNode===null)throw Error(u(166));return ze(a),null}e=Q.current,Rt(a)?hm(a):(e=Hf(n,t,o),a.stateNode=e,uo(a))}return ze(a),null;case 5:if(Oi(a),n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==t&&uo(a);else{if(!t){if(a.stateNode===null)throw Error(u(166));return ze(a),null}if(l=Q.current,Rt(a))hm(a);else{var d=Un(re.current);switch(l){case 1:l=d.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:l=d.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":l=d.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":l=d.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":l=d.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof t.is=="string"?d.createElement("select",{is:t.is}):d.createElement("select"),t.multiple?l.multiple=!0:t.size&&(l.size=t.size);break;default:l=typeof t.is=="string"?d.createElement(n,{is:t.is}):d.createElement(n)}}l[Ye]=a,l[na]=t;e:for(d=a.child;d!==null;){if(d.tag===5||d.tag===6)l.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===a)break e;for(;d.sibling===null;){if(d.return===null||d.return===a)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}a.stateNode=l;e:switch($e(l,n,t),n){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&uo(a)}}return ze(a),Zu(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,o),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==t&&uo(a);else{if(typeof t!="string"&&a.stateNode===null)throw Error(u(166));if(e=re.current,Rt(a)){if(e=a.stateNode,o=a.memoizedProps,t=null,n=We,n!==null)switch(n.tag){case 27:case 5:t=n.memoizedProps}e[Ye]=a,e=!!(e.nodeValue===o||t!==null&&t.suppressHydrationWarning===!0||Of(e.nodeValue,o)),e||Co(a,!0)}else e=Un(e).createTextNode(t),e[Ye]=a,a.stateNode=e}return ze(a),null;case 31:if(o=a.memoizedState,e===null||e.memoizedState!==null){if(t=Rt(a),o!==null){if(e===null){if(!t)throw Error(u(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Ye]=a}else st(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ze(a),e=!1}else o=ru(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),e=!0;if(!e)return a.flags&256?(ya(a),a):(ya(a),null);if((a.flags&128)!==0)throw Error(u(558))}return ze(a),null;case 13:if(t=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Rt(a),t!==null&&t.dehydrated!==null){if(e===null){if(!n)throw Error(u(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));n[Ye]=a}else st(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ze(a),n=!1}else n=ru(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return a.flags&256?(ya(a),a):(ya(a),null)}return ya(a),(a.flags&128)!==0?(a.lanes=o,a):(o=t!==null,e=e!==null&&e.memoizedState!==null,o&&(t=a.child,n=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(n=t.alternate.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048)),o!==e&&o&&(a.child.flags|=8192),An(a,a.updateQueue),ze(a),null);case 4:return Ne(),e===null&&yl(a.stateNode.containerInfo),ze(a),null;case 10:return so(a.type),ze(a),null;case 19:if(P(Pe),t=a.memoizedState,t===null)return ze(a),null;if(n=(a.flags&128)!==0,l=t.rendering,l===null)if(n)Qs(t,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(l=cn(e),l!==null){for(a.flags|=128,Qs(t,!1),e=l.updateQueue,a.updateQueue=e,An(a,e),a.subtreeFlags=0,e=o,o=a.child;o!==null;)cm(o,e),o=o.sibling;return _(Pe,Pe.current&1|2),me&&oo(a,t.treeForkCount),a.child}e=e.sibling}t.tail!==null&&pa()>zn&&(a.flags|=128,n=!0,Qs(t,!1),a.lanes=4194304)}else{if(!n)if(e=cn(l),e!==null){if(a.flags|=128,n=!0,e=e.updateQueue,a.updateQueue=e,An(a,e),Qs(t,!0),t.tail===null&&t.tailMode==="hidden"&&!l.alternate&&!me)return ze(a),null}else 2*pa()-t.renderingStartTime>zn&&o!==536870912&&(a.flags|=128,n=!0,Qs(t,!1),a.lanes=4194304);t.isBackwards?(l.sibling=a.child,a.child=l):(e=t.last,e!==null?e.sibling=l:a.child=l,t.last=l)}return t.tail!==null?(e=t.tail,t.rendering=e,t.tail=e.sibling,t.renderingStartTime=pa(),e.sibling=null,o=Pe.current,_(Pe,n?o&1|2:o&1),me&&oo(a,t.treeForkCount),e):(ze(a),null);case 22:case 23:return ya(a),xu(),t=a.memoizedState!==null,e!==null?e.memoizedState!==null!==t&&(a.flags|=8192):t&&(a.flags|=8192),t?(o&536870912)!==0&&(a.flags&128)===0&&(ze(a),a.subtreeFlags&6&&(a.flags|=8192)):ze(a),o=a.updateQueue,o!==null&&An(a,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==o&&(a.flags|=2048),e!==null&&P(rt),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),a.memoizedState.cache!==o&&(a.flags|=2048),so(Be),ze(a),null;case 25:return null;case 30:return null}throw Error(u(156,a.tag))}function py(e,a){switch(iu(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return so(Be),Ne(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Oi(a),null;case 31:if(a.memoizedState!==null){if(ya(a),a.alternate===null)throw Error(u(340));st()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(ya(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(u(340));st()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return P(Pe),null;case 4:return Ne(),null;case 10:return so(a.type),null;case 22:case 23:return ya(a),xu(),e!==null&&P(rt),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return so(Be),null;case 25:return null;default:return null}}function Rp(e,a){switch(iu(a),a.tag){case 3:so(Be),Ne();break;case 26:case 27:case 5:Oi(a);break;case 4:Ne();break;case 31:a.memoizedState!==null&&ya(a);break;case 13:ya(a);break;case 19:P(Pe);break;case 10:so(a.type);break;case 22:case 23:ya(a),xu(),e!==null&&P(rt);break;case 24:so(Be)}}function Xs(e,a){try{var o=a.updateQueue,t=o!==null?o.lastEffect:null;if(t!==null){var n=t.next;o=n;do{if((o.tag&e)===e){t=void 0;var l=o.create,d=o.inst;t=l(),d.destroy=t}o=o.next}while(o!==n)}}catch(v){qe(a,a.return,v)}}function ko(e,a,o){try{var t=a.updateQueue,n=t!==null?t.lastEffect:null;if(n!==null){var l=n.next;t=l;do{if((t.tag&e)===e){var d=t.inst,v=d.destroy;if(v!==void 0){d.destroy=void 0,n=a;var S=o,z=v;try{z()}catch(w){qe(n,S,w)}}}t=t.next}while(t!==l)}}catch(w){qe(a,a.return,w)}}function Up(e){var a=e.updateQueue;if(a!==null){var o=e.stateNode;try{zm(a,o)}catch(t){qe(e,e.return,t)}}}function Bp(e,a,o){o.props=mt(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(t){qe(e,a,t)}}function Ks(e,a){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var t=e.stateNode;break;case 30:t=e.stateNode;break;default:t=e.stateNode}typeof o=="function"?e.refCleanup=o(t):o.current=t}}catch(n){qe(e,a,n)}}function Qa(e,a){var o=e.ref,t=e.refCleanup;if(o!==null)if(typeof t=="function")try{t()}catch(n){qe(e,a,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(n){qe(e,a,n)}else o.current=null}function Vp(e){var a=e.type,o=e.memoizedProps,t=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":o.autoFocus&&t.focus();break e;case"img":o.src?t.src=o.src:o.srcSet&&(t.srcset=o.srcSet)}}catch(n){qe(e,e.return,n)}}function Ju(e,a,o){try{var t=e.stateNode;Ny(t,e.type,o,a),t[na]=a}catch(n){qe(e,e.return,n)}}function Gp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Bo(e.type)||e.tag===4}function $u(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Bo(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,a,o){var t=e.tag;if(t===5||t===6)e=e.stateNode,a?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,a):(a=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,a.appendChild(e),o=o._reactRootContainer,o!=null||a.onclick!==null||(a.onclick=$a));else if(t!==4&&(t===27&&Bo(e.type)&&(o=e.stateNode,a=null),e=e.child,e!==null))for(el(e,a,o),e=e.sibling;e!==null;)el(e,a,o),e=e.sibling}function En(e,a,o){var t=e.tag;if(t===5||t===6)e=e.stateNode,a?o.insertBefore(e,a):o.appendChild(e);else if(t!==4&&(t===27&&Bo(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(En(e,a,o),e=e.sibling;e!==null;)En(e,a,o),e=e.sibling}function _p(e){var a=e.stateNode,o=e.memoizedProps;try{for(var t=e.type,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);$e(a,t,o),a[Ye]=e,a[na]=o}catch(l){qe(e,e.return,l)}}var lo=!1,_e=!1,al=!1,Ip=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function fy(e,a){if(e=e.containerInfo,Sl=Fn,e=am(e),Kr(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var t=o.getSelection&&o.getSelection();if(t&&t.rangeCount!==0){o=t.anchorNode;var n=t.anchorOffset,l=t.focusNode;t=t.focusOffset;try{o.nodeType,l.nodeType}catch{o=null;break e}var d=0,v=-1,S=-1,z=0,w=0,N=e,D=null;a:for(;;){for(var L;N!==o||n!==0&&N.nodeType!==3||(v=d+n),N!==l||t!==0&&N.nodeType!==3||(S=d+t),N.nodeType===3&&(d+=N.nodeValue.length),(L=N.firstChild)!==null;)D=N,N=L;for(;;){if(N===e)break a;if(D===o&&++z===n&&(v=d),D===l&&++w===t&&(S=d),(L=N.nextSibling)!==null)break;N=D,D=N.parentNode}N=L}o=v===-1||S===-1?null:{start:v,end:S}}else o=null}o=o||{start:0,end:0}}else o=null;for(Al={focusedElem:e,selectionRange:o},Fn=!1,Qe=a;Qe!==null;)if(a=Qe,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Qe=e;else for(;Qe!==null;){switch(a=Qe,l=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(o=0;o<e.length;o++)n=e[o],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,o=a,n=l.memoizedProps,l=l.memoizedState,t=o.stateNode;try{var F=mt(o.type,n);e=t.getSnapshotBeforeUpdate(F,l),t.__reactInternalSnapshotBeforeUpdate=e}catch($){qe(o,o.return,$)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,o=e.nodeType,o===9)Tl(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Tl(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=a.sibling,e!==null){e.return=a.return,Qe=e;break}Qe=a.return}}function Hp(e,a,o){var t=o.flags;switch(o.tag){case 0:case 11:case 15:mo(e,o),t&4&&Xs(5,o);break;case 1:if(mo(e,o),t&4)if(e=o.stateNode,a===null)try{e.componentDidMount()}catch(d){qe(o,o.return,d)}else{var n=mt(o.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(n,a,e.__reactInternalSnapshotBeforeUpdate)}catch(d){qe(o,o.return,d)}}t&64&&Up(o),t&512&&Ks(o,o.return);break;case 3:if(mo(e,o),t&64&&(e=o.updateQueue,e!==null)){if(a=null,o.child!==null)switch(o.child.tag){case 27:case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}try{zm(e,a)}catch(d){qe(o,o.return,d)}}break;case 27:a===null&&t&4&&_p(o);case 26:case 5:mo(e,o),a===null&&t&4&&Vp(o),t&512&&Ks(o,o.return);break;case 12:mo(e,o);break;case 31:mo(e,o),t&4&&Xp(e,o);break;case 13:mo(e,o),t&4&&Kp(e,o),t&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=Ay.bind(null,o),Iy(e,o))));break;case 22:if(t=o.memoizedState!==null||lo,!t){a=a!==null&&a.memoizedState!==null||_e,n=lo;var l=_e;lo=t,(_e=a)&&!l?po(e,o,(o.subtreeFlags&8772)!==0):mo(e,o),lo=n,_e=l}break;case 30:break;default:mo(e,o)}}function Fp(e){var a=e.alternate;a!==null&&(e.alternate=null,Fp(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&wr(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Le=null,ua=!1;function co(e,a,o){for(o=o.child;o!==null;)Qp(e,a,o),o=o.sibling}function Qp(e,a,o){if(fa&&typeof fa.onCommitFiberUnmount=="function")try{fa.onCommitFiberUnmount(bs,o)}catch{}switch(o.tag){case 26:_e||Qa(o,a),co(e,a,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:_e||Qa(o,a);var t=Le,n=ua;Bo(o.type)&&(Le=o.stateNode,ua=!1),co(e,a,o),ti(o.stateNode),Le=t,ua=n;break;case 5:_e||Qa(o,a);case 6:if(t=Le,n=ua,Le=null,co(e,a,o),Le=t,ua=n,Le!==null)if(ua)try{(Le.nodeType===9?Le.body:Le.nodeName==="HTML"?Le.ownerDocument.body:Le).removeChild(o.stateNode)}catch(l){qe(o,a,l)}else try{Le.removeChild(o.stateNode)}catch(l){qe(o,a,l)}break;case 18:Le!==null&&(ua?(e=Le,Bf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),ss(e)):Bf(Le,o.stateNode));break;case 4:t=Le,n=ua,Le=o.stateNode.containerInfo,ua=!0,co(e,a,o),Le=t,ua=n;break;case 0:case 11:case 14:case 15:ko(2,o,a),_e||ko(4,o,a),co(e,a,o);break;case 1:_e||(Qa(o,a),t=o.stateNode,typeof t.componentWillUnmount=="function"&&Bp(o,a,t)),co(e,a,o);break;case 21:co(e,a,o);break;case 22:_e=(t=_e)||o.memoizedState!==null,co(e,a,o),_e=t;break;default:co(e,a,o)}}function Xp(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ss(e)}catch(o){qe(a,a.return,o)}}}function Kp(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ss(e)}catch(o){qe(a,a.return,o)}}function hy(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Ip),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Ip),a;default:throw Error(u(435,e.tag))}}function Cn(e,a){var o=hy(e);a.forEach(function(t){if(!o.has(t)){o.add(t);var n=Ey.bind(null,e,t);t.then(n,n)}})}function la(e,a){var o=a.deletions;if(o!==null)for(var t=0;t<o.length;t++){var n=o[t],l=e,d=a,v=d;e:for(;v!==null;){switch(v.tag){case 27:if(Bo(v.type)){Le=v.stateNode,ua=!1;break e}break;case 5:Le=v.stateNode,ua=!1;break e;case 3:case 4:Le=v.stateNode.containerInfo,ua=!0;break e}v=v.return}if(Le===null)throw Error(u(160));Qp(l,d,n),Le=null,ua=!1,l=n.alternate,l!==null&&(l.return=null),n.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Yp(a,e),a=a.sibling}var Va=null;function Yp(e,a){var o=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:la(a,e),ca(e),t&4&&(ko(3,e,e.return),Xs(3,e),ko(5,e,e.return));break;case 1:la(a,e),ca(e),t&512&&(_e||o===null||Qa(o,o.return)),t&64&&lo&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?t:o.concat(t))));break;case 26:var n=Va;if(la(a,e),ca(e),t&512&&(_e||o===null||Qa(o,o.return)),t&4){var l=o!==null?o.memoizedState:null;if(t=e.memoizedState,o===null)if(t===null)if(e.stateNode===null){e:{t=e.type,o=e.memoizedProps,n=n.ownerDocument||n;a:switch(t){case"title":l=n.getElementsByTagName("title")[0],(!l||l[qs]||l[Ye]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=n.createElement(t),n.head.insertBefore(l,n.querySelector("head > title"))),$e(l,t,o),l[Ye]=e,Fe(l),t=l;break e;case"link":var d=Wf("link","href",n).get(t+(o.href||""));if(d){for(var v=0;v<d.length;v++)if(l=d[v],l.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&l.getAttribute("rel")===(o.rel==null?null:o.rel)&&l.getAttribute("title")===(o.title==null?null:o.title)&&l.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){d.splice(v,1);break a}}l=n.createElement(t),$e(l,t,o),n.head.appendChild(l);break;case"meta":if(d=Wf("meta","content",n).get(t+(o.content||""))){for(v=0;v<d.length;v++)if(l=d[v],l.getAttribute("content")===(o.content==null?null:""+o.content)&&l.getAttribute("name")===(o.name==null?null:o.name)&&l.getAttribute("property")===(o.property==null?null:o.property)&&l.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&l.getAttribute("charset")===(o.charSet==null?null:o.charSet)){d.splice(v,1);break a}}l=n.createElement(t),$e(l,t,o),n.head.appendChild(l);break;default:throw Error(u(468,t))}l[Ye]=e,Fe(l),t=l}e.stateNode=t}else Zf(n,e.type,e.stateNode);else e.stateNode=Yf(n,t,e.memoizedProps);else l!==t?(l===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):l.count--,t===null?Zf(n,e.type,e.stateNode):Yf(n,t,e.memoizedProps)):t===null&&e.stateNode!==null&&Ju(e,e.memoizedProps,o.memoizedProps)}break;case 27:la(a,e),ca(e),t&512&&(_e||o===null||Qa(o,o.return)),o!==null&&t&4&&Ju(e,e.memoizedProps,o.memoizedProps);break;case 5:if(la(a,e),ca(e),t&512&&(_e||o===null||Qa(o,o.return)),e.flags&32){n=e.stateNode;try{Mt(n,"")}catch(F){qe(e,e.return,F)}}t&4&&e.stateNode!=null&&(n=e.memoizedProps,Ju(e,n,o!==null?o.memoizedProps:n)),t&1024&&(al=!0);break;case 6:if(la(a,e),ca(e),t&4){if(e.stateNode===null)throw Error(u(162));t=e.memoizedProps,o=e.stateNode;try{o.nodeValue=t}catch(F){qe(e,e.return,F)}}break;case 3:if(Gn=null,n=Va,Va=Bn(a.containerInfo),la(a,e),Va=n,ca(e),t&4&&o!==null&&o.memoizedState.isDehydrated)try{ss(a.containerInfo)}catch(F){qe(e,e.return,F)}al&&(al=!1,Wp(e));break;case 4:t=Va,Va=Bn(e.stateNode.containerInfo),la(a,e),ca(e),Va=t;break;case 12:la(a,e),ca(e);break;case 31:la(a,e),ca(e),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Cn(e,t)));break;case 13:la(a,e),ca(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Mn=pa()),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Cn(e,t)));break;case 22:n=e.memoizedState!==null;var S=o!==null&&o.memoizedState!==null,z=lo,w=_e;if(lo=z||n,_e=w||S,la(a,e),_e=w,lo=z,ca(e),t&8192)e:for(a=e.stateNode,a._visibility=n?a._visibility&-2:a._visibility|1,n&&(o===null||S||lo||_e||pt(e)),o=null,a=e;;){if(a.tag===5||a.tag===26){if(o===null){S=o=a;try{if(l=S.stateNode,n)d=l.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{v=S.stateNode;var N=S.memoizedProps.style,D=N!=null&&N.hasOwnProperty("display")?N.display:null;v.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(F){qe(S,S.return,F)}}}else if(a.tag===6){if(o===null){S=a;try{S.stateNode.nodeValue=n?"":S.memoizedProps}catch(F){qe(S,S.return,F)}}}else if(a.tag===18){if(o===null){S=a;try{var L=S.stateNode;n?Vf(L,!0):Vf(S.stateNode,!1)}catch(F){qe(S,S.return,F)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;o===a&&(o=null),a=a.return}o===a&&(o=null),a.sibling.return=a.return,a=a.sibling}t&4&&(t=e.updateQueue,t!==null&&(o=t.retryQueue,o!==null&&(t.retryQueue=null,Cn(e,o))));break;case 19:la(a,e),ca(e),t&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Cn(e,t)));break;case 30:break;case 21:break;default:la(a,e),ca(e)}}function ca(e){var a=e.flags;if(a&2){try{for(var o,t=e.return;t!==null;){if(Gp(t)){o=t;break}t=t.return}if(o==null)throw Error(u(160));switch(o.tag){case 27:var n=o.stateNode,l=$u(e);En(e,l,n);break;case 5:var d=o.stateNode;o.flags&32&&(Mt(d,""),o.flags&=-33);var v=$u(e);En(e,v,d);break;case 3:case 4:var S=o.stateNode.containerInfo,z=$u(e);el(e,z,S);break;default:throw Error(u(161))}}catch(w){qe(e,e.return,w)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Wp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Wp(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function mo(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Hp(e,a.alternate,a),a=a.sibling}function pt(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:ko(4,a,a.return),pt(a);break;case 1:Qa(a,a.return);var o=a.stateNode;typeof o.componentWillUnmount=="function"&&Bp(a,a.return,o),pt(a);break;case 27:ti(a.stateNode);case 26:case 5:Qa(a,a.return),pt(a);break;case 22:a.memoizedState===null&&pt(a);break;case 30:pt(a);break;default:pt(a)}e=e.sibling}}function po(e,a,o){for(o=o&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var t=a.alternate,n=e,l=a,d=l.flags;switch(l.tag){case 0:case 11:case 15:po(n,l,o),Xs(4,l);break;case 1:if(po(n,l,o),t=l,n=t.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(z){qe(t,t.return,z)}if(t=l,n=t.updateQueue,n!==null){var v=t.stateNode;try{var S=n.shared.hiddenCallbacks;if(S!==null)for(n.shared.hiddenCallbacks=null,n=0;n<S.length;n++)Mm(S[n],v)}catch(z){qe(t,t.return,z)}}o&&d&64&&Up(l),Ks(l,l.return);break;case 27:_p(l);case 26:case 5:po(n,l,o),o&&t===null&&d&4&&Vp(l),Ks(l,l.return);break;case 12:po(n,l,o);break;case 31:po(n,l,o),o&&d&4&&Xp(n,l);break;case 13:po(n,l,o),o&&d&4&&Kp(n,l);break;case 22:l.memoizedState===null&&po(n,l,o),Ks(l,l.return);break;case 30:break;default:po(n,l,o)}a=a.sibling}}function ol(e,a){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&js(o))}function tl(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&js(e))}function Ga(e,a,o,t){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Zp(e,a,o,t),a=a.sibling}function Zp(e,a,o,t){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Ga(e,a,o,t),n&2048&&Xs(9,a);break;case 1:Ga(e,a,o,t);break;case 3:Ga(e,a,o,t),n&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&js(e)));break;case 12:if(n&2048){Ga(e,a,o,t),e=a.stateNode;try{var l=a.memoizedProps,d=l.id,v=l.onPostCommit;typeof v=="function"&&v(d,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){qe(a,a.return,S)}}else Ga(e,a,o,t);break;case 31:Ga(e,a,o,t);break;case 13:Ga(e,a,o,t);break;case 23:break;case 22:l=a.stateNode,d=a.alternate,a.memoizedState!==null?l._visibility&2?Ga(e,a,o,t):Ys(e,a):l._visibility&2?Ga(e,a,o,t):(l._visibility|=2,Xt(e,a,o,t,(a.subtreeFlags&10256)!==0||!1)),n&2048&&ol(d,a);break;case 24:Ga(e,a,o,t),n&2048&&tl(a.alternate,a);break;default:Ga(e,a,o,t)}}function Xt(e,a,o,t,n){for(n=n&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var l=e,d=a,v=o,S=t,z=d.flags;switch(d.tag){case 0:case 11:case 15:Xt(l,d,v,S,n),Xs(8,d);break;case 23:break;case 22:var w=d.stateNode;d.memoizedState!==null?w._visibility&2?Xt(l,d,v,S,n):Ys(l,d):(w._visibility|=2,Xt(l,d,v,S,n)),n&&z&2048&&ol(d.alternate,d);break;case 24:Xt(l,d,v,S,n),n&&z&2048&&tl(d.alternate,d);break;default:Xt(l,d,v,S,n)}a=a.sibling}}function Ys(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var o=e,t=a,n=t.flags;switch(t.tag){case 22:Ys(o,t),n&2048&&ol(t.alternate,t);break;case 24:Ys(o,t),n&2048&&tl(t.alternate,t);break;default:Ys(o,t)}a=a.sibling}}var Ws=8192;function Kt(e,a,o){if(e.subtreeFlags&Ws)for(e=e.child;e!==null;)Jp(e,a,o),e=e.sibling}function Jp(e,a,o){switch(e.tag){case 26:Kt(e,a,o),e.flags&Ws&&e.memoizedState!==null&&ax(o,Va,e.memoizedState,e.memoizedProps);break;case 5:Kt(e,a,o);break;case 3:case 4:var t=Va;Va=Bn(e.stateNode.containerInfo),Kt(e,a,o),Va=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Ws,Ws=16777216,Kt(e,a,o),Ws=t):Kt(e,a,o));break;default:Kt(e,a,o)}}function $p(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Zs(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var t=a[o];Qe=t,af(t,e)}$p(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ef(e),e=e.sibling}function ef(e){switch(e.tag){case 0:case 11:case 15:Zs(e),e.flags&2048&&ko(9,e,e.return);break;case 3:Zs(e);break;case 12:Zs(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Tn(e)):Zs(e);break;default:Zs(e)}}function Tn(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var t=a[o];Qe=t,af(t,e)}$p(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:ko(8,a,a.return),Tn(a);break;case 22:o=a.stateNode,o._visibility&2&&(o._visibility&=-3,Tn(a));break;default:Tn(a)}e=e.sibling}}function af(e,a){for(;Qe!==null;){var o=Qe;switch(o.tag){case 0:case 11:case 15:ko(8,o,a);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var t=o.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:js(o.memoizedState.cache)}if(t=o.child,t!==null)t.return=o,Qe=t;else e:for(o=e;Qe!==null;){t=Qe;var n=t.sibling,l=t.return;if(Fp(t),t===o){Qe=null;break e}if(n!==null){n.return=l,Qe=n;break e}Qe=l}}}var gy={getCacheForType:function(e){var a=Ze(Be),o=a.data.get(e);return o===void 0&&(o=e(),a.data.set(e,o)),o},cacheSignal:function(){return Ze(Be).controller.signal}},vy=typeof WeakMap=="function"?WeakMap:Map,be=0,Ce=null,ue=null,ce=0,xe=0,xa=null,Oo=!1,Yt=!1,sl=!1,fo=0,Oe=0,jo=0,ft=0,il=0,qa=0,Wt=0,Js=null,da=null,nl=!1,Mn=0,of=0,zn=1/0,Dn=null,No=null,He=0,Po=null,Zt=null,ho=0,rl=0,ul=null,tf=null,$s=0,ll=null;function Sa(){return(be&2)!==0&&ce!==0?ce&-ce:k.T!==null?hl():yd()}function sf(){if(qa===0)if((ce&536870912)===0||me){var e=Pi;Pi<<=1,(Pi&3932160)===0&&(Pi=262144),qa=e}else qa=536870912;return e=ba.current,e!==null&&(e.flags|=32),qa}function ma(e,a,o){(e===Ce&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(Jt(e,0),Ro(e,ce,qa,!1)),xs(e,o),((be&2)===0||e!==Ce)&&(e===Ce&&((be&2)===0&&(ft|=o),Oe===4&&Ro(e,ce,qa,!1)),Xa(e))}function nf(e,a,o){if((be&6)!==0)throw Error(u(327));var t=!o&&(a&127)===0&&(a&e.expiredLanes)===0||ys(e,a),n=t?xy(e,a):dl(e,a,!0),l=t;do{if(n===0){Yt&&!t&&Ro(e,a,0,!1);break}else{if(o=e.current.alternate,l&&!by(o)){n=dl(e,a,!1),l=!1;continue}if(n===2){if(l=a,e.errorRecoveryDisabledLanes&l)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){a=d;e:{var v=e;n=Js;var S=v.current.memoizedState.isDehydrated;if(S&&(Jt(v,d).flags|=256),d=dl(v,d,!1),d!==2){if(sl&&!S){v.errorRecoveryDisabledLanes|=l,ft|=l,n=4;break e}l=da,da=n,l!==null&&(da===null?da=l:da.push.apply(da,l))}n=d}if(l=!1,n!==2)continue}}if(n===1){Jt(e,0),Ro(e,a,0,!0);break}e:{switch(t=e,l=n,l){case 0:case 1:throw Error(u(345));case 4:if((a&4194048)!==a)break;case 6:Ro(t,a,qa,!Oo);break e;case 2:da=null;break;case 3:case 5:break;default:throw Error(u(329))}if((a&62914560)===a&&(n=Mn+300-pa(),10<n)){if(Ro(t,a,qa,!Oo),Ui(t,0,!0)!==0)break e;ho=a,t.timeoutHandle=Rf(rf.bind(null,t,o,da,Dn,nl,a,qa,ft,Wt,Oo,l,"Throttled",-0,0),n);break e}rf(t,o,da,Dn,nl,a,qa,ft,Wt,Oo,l,null,-0,0)}}break}while(!0);Xa(e)}function rf(e,a,o,t,n,l,d,v,S,z,w,N,D,L){if(e.timeoutHandle=-1,N=a.subtreeFlags,N&8192||(N&16785408)===16785408){N={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$a},Jp(a,l,N);var F=(l&62914560)===l?Mn-pa():(l&4194048)===l?of-pa():0;if(F=ox(N,F),F!==null){ho=l,e.cancelPendingCommit=F(hf.bind(null,e,a,l,o,t,n,d,v,S,w,N,null,D,L)),Ro(e,l,d,!z);return}}hf(e,a,l,o,t,n,d,v,S)}function by(e){for(var a=e;;){var o=a.tag;if((o===0||o===11||o===15)&&a.flags&16384&&(o=a.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var t=0;t<o.length;t++){var n=o[t],l=n.getSnapshot;n=n.value;try{if(!ga(l(),n))return!1}catch{return!1}}if(o=a.child,a.subtreeFlags&16384&&o!==null)o.return=a,a=o;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ro(e,a,o,t){a&=~il,a&=~ft,e.suspendedLanes|=a,e.pingedLanes&=~a,t&&(e.warmLanes|=a),t=e.expirationTimes;for(var n=a;0<n;){var l=31-ha(n),d=1<<l;t[l]=-1,n&=~d}o!==0&&gd(e,o,a)}function Ln(){return(be&6)===0?(ei(0),!1):!0}function cl(){if(ue!==null){if(xe===0)var e=ue.return;else e=ue,to=it=null,Tu(e),_t=null,Ps=0,e=ue;for(;e!==null;)Rp(e.alternate,e),e=e.return;ue=null}}function Jt(e,a){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,Uy(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),ho=0,cl(),Ce=e,ue=o=ao(e.current,null),ce=a,xe=0,xa=null,Oo=!1,Yt=ys(e,a),sl=!1,Wt=qa=il=ft=jo=Oe=0,da=Js=null,nl=!1,(a&8)!==0&&(a|=a&32);var t=e.entangledLanes;if(t!==0)for(e=e.entanglements,t&=a;0<t;){var n=31-ha(t),l=1<<n;a|=e[n],t&=~l}return fo=a,Wi(),o}function uf(e,a){ie=null,k.H=Hs,a===Gt||a===sn?(a=Am(),xe=3):a===fu?(a=Am(),xe=4):xe=a===_u?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,xa=a,ue===null&&(Oe=1,yn(e,La(a,e.current)))}function lf(){var e=ba.current;return e===null?!0:(ce&4194048)===ce?ja===null:(ce&62914560)===ce||(ce&536870912)!==0?e===ja:!1}function cf(){var e=k.H;return k.H=Hs,e===null?Hs:e}function df(){var e=k.A;return k.A=gy,e}function wn(){Oe=4,Oo||(ce&4194048)!==ce&&ba.current!==null||(Yt=!0),(jo&134217727)===0&&(ft&134217727)===0||Ce===null||Ro(Ce,ce,qa,!1)}function dl(e,a,o){var t=be;be|=2;var n=cf(),l=df();(Ce!==e||ce!==a)&&(Dn=null,Jt(e,a)),a=!1;var d=Oe;e:do try{if(xe!==0&&ue!==null){var v=ue,S=xa;switch(xe){case 8:cl(),d=6;break e;case 3:case 2:case 9:case 6:ba.current===null&&(a=!0);var z=xe;if(xe=0,xa=null,$t(e,v,S,z),o&&Yt){d=0;break e}break;default:z=xe,xe=0,xa=null,$t(e,v,S,z)}}yy(),d=Oe;break}catch(w){uf(e,w)}while(!0);return a&&e.shellSuspendCounter++,to=it=null,be=t,k.H=n,k.A=l,ue===null&&(Ce=null,ce=0,Wi()),d}function yy(){for(;ue!==null;)mf(ue)}function xy(e,a){var o=be;be|=2;var t=cf(),n=df();Ce!==e||ce!==a?(Dn=null,zn=pa()+500,Jt(e,a)):Yt=ys(e,a);e:do try{if(xe!==0&&ue!==null){a=ue;var l=xa;a:switch(xe){case 1:xe=0,xa=null,$t(e,a,l,1);break;case 2:case 9:if(qm(l)){xe=0,xa=null,pf(a);break}a=function(){xe!==2&&xe!==9||Ce!==e||(xe=7),Xa(e)},l.then(a,a);break e;case 3:xe=7;break e;case 4:xe=5;break e;case 7:qm(l)?(xe=0,xa=null,pf(a)):(xe=0,xa=null,$t(e,a,l,7));break;case 5:var d=null;switch(ue.tag){case 26:d=ue.memoizedState;case 5:case 27:var v=ue;if(d?Jf(d):v.stateNode.complete){xe=0,xa=null;var S=v.sibling;if(S!==null)ue=S;else{var z=v.return;z!==null?(ue=z,kn(z)):ue=null}break a}}xe=0,xa=null,$t(e,a,l,5);break;case 6:xe=0,xa=null,$t(e,a,l,6);break;case 8:cl(),Oe=6;break e;default:throw Error(u(462))}}qy();break}catch(w){uf(e,w)}while(!0);return to=it=null,k.H=t,k.A=n,be=o,ue!==null?0:(Ce=null,ce=0,Wi(),Oe)}function qy(){for(;ue!==null&&!Hb();)mf(ue)}function mf(e){var a=Np(e.alternate,e,fo);e.memoizedProps=e.pendingProps,a===null?kn(e):ue=a}function pf(e){var a=e,o=a.alternate;switch(a.tag){case 15:case 0:a=Dp(o,a,a.pendingProps,a.type,void 0,ce);break;case 11:a=Dp(o,a,a.pendingProps,a.type.render,a.ref,ce);break;case 5:Tu(a);default:Rp(o,a),a=ue=cm(a,fo),a=Np(o,a,fo)}e.memoizedProps=e.pendingProps,a===null?kn(e):ue=a}function $t(e,a,o,t){to=it=null,Tu(a),_t=null,Ps=0;var n=a.return;try{if(ly(e,n,a,o,ce)){Oe=1,yn(e,La(o,e.current)),ue=null;return}}catch(l){if(n!==null)throw ue=n,l;Oe=1,yn(e,La(o,e.current)),ue=null;return}a.flags&32768?(me||t===1?e=!0:Yt||(ce&536870912)!==0?e=!1:(Oo=e=!0,(t===2||t===9||t===3||t===6)&&(t=ba.current,t!==null&&t.tag===13&&(t.flags|=16384))),ff(a,e)):kn(a)}function kn(e){var a=e;do{if((a.flags&32768)!==0){ff(a,Oo);return}e=a.return;var o=my(a.alternate,a,fo);if(o!==null){ue=o;return}if(a=a.sibling,a!==null){ue=a;return}ue=a=e}while(a!==null);Oe===0&&(Oe=5)}function ff(e,a){do{var o=py(e.alternate,e);if(o!==null){o.flags&=32767,ue=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!a&&(e=e.sibling,e!==null)){ue=e;return}ue=e=o}while(e!==null);Oe=6,ue=null}function hf(e,a,o,t,n,l,d,v,S){e.cancelPendingCommit=null;do On();while(He!==0);if((be&6)!==0)throw Error(u(327));if(a!==null){if(a===e.current)throw Error(u(177));if(l=a.lanes|a.childLanes,l|=$r,e0(e,o,l,d,v,S),e===Ce&&(ue=Ce=null,ce=0),Zt=a,Po=e,ho=o,rl=l,ul=n,tf=t,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Cy(ji,function(){return xf(),null})):(e.callbackNode=null,e.callbackPriority=0),t=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||t){t=k.T,k.T=null,n=V.p,V.p=2,d=be,be|=4;try{fy(e,a,o)}finally{be=d,V.p=n,k.T=t}}He=1,gf(),vf(),bf()}}function gf(){if(He===1){He=0;var e=Po,a=Zt,o=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||o){o=k.T,k.T=null;var t=V.p;V.p=2;var n=be;be|=4;try{Yp(a,e);var l=Al,d=am(e.containerInfo),v=l.focusedElem,S=l.selectionRange;if(d!==v&&v&&v.ownerDocument&&em(v.ownerDocument.documentElement,v)){if(S!==null&&Kr(v)){var z=S.start,w=S.end;if(w===void 0&&(w=z),"selectionStart"in v)v.selectionStart=z,v.selectionEnd=Math.min(w,v.value.length);else{var N=v.ownerDocument||document,D=N&&N.defaultView||window;if(D.getSelection){var L=D.getSelection(),F=v.textContent.length,$=Math.min(S.start,F),Ee=S.end===void 0?$:Math.min(S.end,F);!L.extend&&$>Ee&&(d=Ee,Ee=$,$=d);var C=$d(v,$),A=$d(v,Ee);if(C&&A&&(L.rangeCount!==1||L.anchorNode!==C.node||L.anchorOffset!==C.offset||L.focusNode!==A.node||L.focusOffset!==A.offset)){var M=N.createRange();M.setStart(C.node,C.offset),L.removeAllRanges(),$>Ee?(L.addRange(M),L.extend(A.node,A.offset)):(M.setEnd(A.node,A.offset),L.addRange(M))}}}}for(N=[],L=v;L=L.parentNode;)L.nodeType===1&&N.push({element:L,left:L.scrollLeft,top:L.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<N.length;v++){var O=N[v];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}Fn=!!Sl,Al=Sl=null}finally{be=n,V.p=t,k.T=o}}e.current=a,He=2}}function vf(){if(He===2){He=0;var e=Po,a=Zt,o=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||o){o=k.T,k.T=null;var t=V.p;V.p=2;var n=be;be|=4;try{Hp(e,a.alternate,a)}finally{be=n,V.p=t,k.T=o}}He=3}}function bf(){if(He===4||He===3){He=0,Fb();var e=Po,a=Zt,o=ho,t=tf;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?He=5:(He=0,Zt=Po=null,yf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(No=null),Dr(o),a=a.stateNode,fa&&typeof fa.onCommitFiberRoot=="function")try{fa.onCommitFiberRoot(bs,a,void 0,(a.current.flags&128)===128)}catch{}if(t!==null){a=k.T,n=V.p,V.p=2,k.T=null;try{for(var l=e.onRecoverableError,d=0;d<t.length;d++){var v=t[d];l(v.value,{componentStack:v.stack})}}finally{k.T=a,V.p=n}}(ho&3)!==0&&On(),Xa(e),n=e.pendingLanes,(o&261930)!==0&&(n&42)!==0?e===ll?$s++:($s=0,ll=e):$s=0,ei(0)}}function yf(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,js(a)))}function On(){return gf(),vf(),bf(),xf()}function xf(){if(He!==5)return!1;var e=Po,a=rl;rl=0;var o=Dr(ho),t=k.T,n=V.p;try{V.p=32>o?32:o,k.T=null,o=ul,ul=null;var l=Po,d=ho;if(He=0,Zt=Po=null,ho=0,(be&6)!==0)throw Error(u(331));var v=be;if(be|=4,ef(l.current),Zp(l,l.current,d,o),be=v,ei(0,!1),fa&&typeof fa.onPostCommitFiberRoot=="function")try{fa.onPostCommitFiberRoot(bs,l)}catch{}return!0}finally{V.p=n,k.T=t,yf(e,a)}}function qf(e,a,o){a=La(o,a),a=Gu(e.stateNode,a,2),e=Do(e,a,2),e!==null&&(xs(e,2),Xa(e))}function qe(e,a,o){if(e.tag===3)qf(e,e,o);else for(;a!==null;){if(a.tag===3){qf(a,e,o);break}else if(a.tag===1){var t=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(No===null||!No.has(t))){e=La(o,e),o=qp(2),t=Do(a,o,2),t!==null&&(Sp(o,t,a,e),xs(t,2),Xa(t));break}}a=a.return}}function ml(e,a,o){var t=e.pingCache;if(t===null){t=e.pingCache=new vy;var n=new Set;t.set(a,n)}else n=t.get(a),n===void 0&&(n=new Set,t.set(a,n));n.has(o)||(sl=!0,n.add(o),e=Sy.bind(null,e,a,o),a.then(e,e))}function Sy(e,a,o){var t=e.pingCache;t!==null&&t.delete(a),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,Ce===e&&(ce&o)===o&&(Oe===4||Oe===3&&(ce&62914560)===ce&&300>pa()-Mn?(be&2)===0&&Jt(e,0):il|=o,Wt===ce&&(Wt=0)),Xa(e)}function Sf(e,a){a===0&&(a=hd()),e=ot(e,a),e!==null&&(xs(e,a),Xa(e))}function Ay(e){var a=e.memoizedState,o=0;a!==null&&(o=a.retryLane),Sf(e,o)}function Ey(e,a){var o=0;switch(e.tag){case 31:case 13:var t=e.stateNode,n=e.memoizedState;n!==null&&(o=n.retryLane);break;case 19:t=e.stateNode;break;case 22:t=e.stateNode._retryCache;break;default:throw Error(u(314))}t!==null&&t.delete(a),Sf(e,o)}function Cy(e,a){return Cr(e,a)}var jn=null,es=null,pl=!1,Nn=!1,fl=!1,Uo=0;function Xa(e){e!==es&&e.next===null&&(es===null?jn=es=e:es=es.next=e),Nn=!0,pl||(pl=!0,My())}function ei(e,a){if(!fl&&Nn){fl=!0;do for(var o=!1,t=jn;t!==null;){if(e!==0){var n=t.pendingLanes;if(n===0)var l=0;else{var d=t.suspendedLanes,v=t.pingedLanes;l=(1<<31-ha(42|e)+1)-1,l&=n&~(d&~v),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(o=!0,Tf(t,l))}else l=ce,l=Ui(t,t===Ce?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(l&3)===0||ys(t,l)||(o=!0,Tf(t,l));t=t.next}while(o);fl=!1}}function Ty(){Af()}function Af(){Nn=pl=!1;var e=0;Uo!==0&&Ry()&&(e=Uo);for(var a=pa(),o=null,t=jn;t!==null;){var n=t.next,l=Ef(t,a);l===0?(t.next=null,o===null?jn=n:o.next=n,n===null&&(es=o)):(o=t,(e!==0||(l&3)!==0)&&(Nn=!0)),t=n}He!==0&&He!==5||ei(e),Uo!==0&&(Uo=0)}function Ef(e,a){for(var o=e.suspendedLanes,t=e.pingedLanes,n=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var d=31-ha(l),v=1<<d,S=n[d];S===-1?((v&o)===0||(v&t)!==0)&&(n[d]=$b(v,a)):S<=a&&(e.expiredLanes|=v),l&=~v}if(a=Ce,o=ce,o=Ui(e,e===a?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),t=e.callbackNode,o===0||e===a&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return t!==null&&t!==null&&Tr(t),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||ys(e,o)){if(a=o&-o,a===e.callbackPriority)return a;switch(t!==null&&Tr(t),Dr(o)){case 2:case 8:o=pd;break;case 32:o=ji;break;case 268435456:o=fd;break;default:o=ji}return t=Cf.bind(null,e),o=Cr(o,t),e.callbackPriority=a,e.callbackNode=o,a}return t!==null&&t!==null&&Tr(t),e.callbackPriority=2,e.callbackNode=null,2}function Cf(e,a){if(He!==0&&He!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(On()&&e.callbackNode!==o)return null;var t=ce;return t=Ui(e,e===Ce?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),t===0?null:(nf(e,t,a),Ef(e,pa()),e.callbackNode!=null&&e.callbackNode===o?Cf.bind(null,e):null)}function Tf(e,a){if(On())return null;nf(e,a,!0)}function My(){By(function(){(be&6)!==0?Cr(md,Ty):Af()})}function hl(){if(Uo===0){var e=Bt;e===0&&(e=Ni,Ni<<=1,(Ni&261888)===0&&(Ni=256)),Uo=e}return Uo}function Mf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_i(""+e)}function zf(e,a){var o=a.ownerDocument.createElement("input");return o.name=a.name,o.value=a.value,e.id&&o.setAttribute("form",e.id),a.parentNode.insertBefore(o,a),e=new FormData(e),o.parentNode.removeChild(o),e}function zy(e,a,o,t,n){if(a==="submit"&&o&&o.stateNode===n){var l=Mf((n[na]||null).action),d=t.submitter;d&&(a=(a=d[na]||null)?Mf(a.formAction):d.getAttribute("formAction"),a!==null&&(l=a,d=null));var v=new Qi("action","action",null,t,n);e.push({event:v,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(Uo!==0){var S=d?zf(n,d):new FormData(n);Nu(o,{pending:!0,data:S,method:n.method,action:l},null,S)}}else typeof l=="function"&&(v.preventDefault(),S=d?zf(n,d):new FormData(n),Nu(o,{pending:!0,data:S,method:n.method,action:l},l,S))},currentTarget:n}]})}}for(var gl=0;gl<Jr.length;gl++){var vl=Jr[gl],Dy=vl.toLowerCase(),Ly=vl[0].toUpperCase()+vl.slice(1);Ba(Dy,"on"+Ly)}Ba(sm,"onAnimationEnd"),Ba(im,"onAnimationIteration"),Ba(nm,"onAnimationStart"),Ba("dblclick","onDoubleClick"),Ba("focusin","onFocus"),Ba("focusout","onBlur"),Ba(Q0,"onTransitionRun"),Ba(X0,"onTransitionStart"),Ba(K0,"onTransitionCancel"),Ba(rm,"onTransitionEnd"),Ct("onMouseEnter",["mouseout","mouseover"]),Ct("onMouseLeave",["mouseout","mouseover"]),Ct("onPointerEnter",["pointerout","pointerover"]),Ct("onPointerLeave",["pointerout","pointerover"]),Jo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Jo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Jo("onBeforeInput",["compositionend","keypress","textInput","paste"]),Jo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Jo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Jo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ai));function Df(e,a){a=(a&4)!==0;for(var o=0;o<e.length;o++){var t=e[o],n=t.event;t=t.listeners;e:{var l=void 0;if(a)for(var d=t.length-1;0<=d;d--){var v=t[d],S=v.instance,z=v.currentTarget;if(v=v.listener,S!==l&&n.isPropagationStopped())break e;l=v,n.currentTarget=z;try{l(n)}catch(w){Yi(w)}n.currentTarget=null,l=S}else for(d=0;d<t.length;d++){if(v=t[d],S=v.instance,z=v.currentTarget,v=v.listener,S!==l&&n.isPropagationStopped())break e;l=v,n.currentTarget=z;try{l(n)}catch(w){Yi(w)}n.currentTarget=null,l=S}}}}function le(e,a){var o=a[Lr];o===void 0&&(o=a[Lr]=new Set);var t=e+"__bubble";o.has(t)||(Lf(a,e,2,!1),o.add(t))}function bl(e,a,o){var t=0;a&&(t|=4),Lf(o,e,t,a)}var Pn="_reactListening"+Math.random().toString(36).slice(2);function yl(e){if(!e[Pn]){e[Pn]=!0,Sd.forEach(function(o){o!=="selectionchange"&&(wy.has(o)||bl(o,!1,e),bl(o,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Pn]||(a[Pn]=!0,bl("selectionchange",!1,a))}}function Lf(e,a,o,t){switch(ih(a)){case 2:var n=ix;break;case 8:n=nx;break;default:n=jl}o=n.bind(null,a,o,e),n=void 0,!Br||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(n=!0),t?n!==void 0?e.addEventListener(a,o,{capture:!0,passive:n}):e.addEventListener(a,o,!0):n!==void 0?e.addEventListener(a,o,{passive:n}):e.addEventListener(a,o,!1)}function xl(e,a,o,t,n){var l=t;if((a&1)===0&&(a&2)===0&&t!==null)e:for(;;){if(t===null)return;var d=t.tag;if(d===3||d===4){var v=t.stateNode.containerInfo;if(v===n)break;if(d===4)for(d=t.return;d!==null;){var S=d.tag;if((S===3||S===4)&&d.stateNode.containerInfo===n)return;d=d.return}for(;v!==null;){if(d=St(v),d===null)return;if(S=d.tag,S===5||S===6||S===26||S===27){t=l=d;continue e}v=v.parentNode}}t=t.return}jd(function(){var z=l,w=Rr(o),N=[];e:{var D=um.get(e);if(D!==void 0){var L=Qi,F=e;switch(e){case"keypress":if(Hi(o)===0)break e;case"keydown":case"keyup":L=E0;break;case"focusin":F="focus",L=Ir;break;case"focusout":F="blur",L=Ir;break;case"beforeblur":case"afterblur":L=Ir;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=Rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=m0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=M0;break;case sm:case im:case nm:L=h0;break;case rm:L=D0;break;case"scroll":case"scrollend":L=c0;break;case"wheel":L=w0;break;case"copy":case"cut":case"paste":L=v0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=Bd;break;case"toggle":case"beforetoggle":L=O0}var $=(a&4)!==0,Ee=!$&&(e==="scroll"||e==="scrollend"),C=$?D!==null?D+"Capture":null:D;$=[];for(var A=z,M;A!==null;){var O=A;if(M=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||M===null||C===null||(O=As(A,C),O!=null&&$.push(oi(A,O,M))),Ee)break;A=A.return}0<$.length&&(D=new L(D,F,null,o,w),N.push({event:D,listeners:$}))}}if((a&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",D&&o!==Pr&&(F=o.relatedTarget||o.fromElement)&&(St(F)||F[qt]))break e;if((L||D)&&(D=w.window===w?w:(D=w.ownerDocument)?D.defaultView||D.parentWindow:window,L?(F=o.relatedTarget||o.toElement,L=z,F=F?St(F):null,F!==null&&(Ee=p(F),$=F.tag,F!==Ee||$!==5&&$!==27&&$!==6)&&(F=null)):(L=null,F=z),L!==F)){if($=Rd,O="onMouseLeave",C="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&($=Bd,O="onPointerLeave",C="onPointerEnter",A="pointer"),Ee=L==null?D:Ss(L),M=F==null?D:Ss(F),D=new $(O,A+"leave",L,o,w),D.target=Ee,D.relatedTarget=M,O=null,St(w)===z&&($=new $(C,A+"enter",F,o,w),$.target=M,$.relatedTarget=Ee,O=$),Ee=O,L&&F)a:{for($=ky,C=L,A=F,M=0,O=C;O;O=$(O))M++;O=0;for(var W=A;W;W=$(W))O++;for(;0<M-O;)C=$(C),M--;for(;0<O-M;)A=$(A),O--;for(;M--;){if(C===A||A!==null&&C===A.alternate){$=C;break a}C=$(C),A=$(A)}$=null}else $=null;L!==null&&wf(N,D,L,$,!1),F!==null&&Ee!==null&&wf(N,Ee,F,$,!0)}}e:{if(D=z?Ss(z):window,L=D.nodeName&&D.nodeName.toLowerCase(),L==="select"||L==="input"&&D.type==="file")var he=Xd;else if(Fd(D))if(Kd)he=I0;else{he=G0;var X=V0}else L=D.nodeName,!L||L.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?z&&Nr(z.elementType)&&(he=Xd):he=_0;if(he&&(he=he(e,z))){Qd(N,he,o,w);break e}X&&X(e,D,z),e==="focusout"&&z&&D.type==="number"&&z.memoizedProps.value!=null&&jr(D,"number",D.value)}switch(X=z?Ss(z):window,e){case"focusin":(Fd(X)||X.contentEditable==="true")&&(wt=X,Yr=z,ws=null);break;case"focusout":ws=Yr=wt=null;break;case"mousedown":Wr=!0;break;case"contextmenu":case"mouseup":case"dragend":Wr=!1,om(N,o,w);break;case"selectionchange":if(F0)break;case"keydown":case"keyup":om(N,o,w)}var ne;if(Fr)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else Lt?Id(e,o)&&(de="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(de="onCompositionStart");de&&(Vd&&o.locale!=="ko"&&(Lt||de!=="onCompositionStart"?de==="onCompositionEnd"&&Lt&&(ne=Nd()):(So=w,Vr="value"in So?So.value:So.textContent,Lt=!0)),X=Rn(z,de),0<X.length&&(de=new Ud(de,e,null,o,w),N.push({event:de,listeners:X}),ne?de.data=ne:(ne=Hd(o),ne!==null&&(de.data=ne)))),(ne=N0?P0(e,o):R0(e,o))&&(de=Rn(z,"onBeforeInput"),0<de.length&&(X=new Ud("onBeforeInput","beforeinput",null,o,w),N.push({event:X,listeners:de}),X.data=ne)),zy(N,e,z,o,w)}Df(N,a)})}function oi(e,a,o){return{instance:e,listener:a,currentTarget:o}}function Rn(e,a){for(var o=a+"Capture",t=[];e!==null;){var n=e,l=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||l===null||(n=As(e,o),n!=null&&t.unshift(oi(e,n,l)),n=As(e,a),n!=null&&t.push(oi(e,n,l))),e.tag===3)return t;e=e.return}return[]}function ky(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function wf(e,a,o,t,n){for(var l=a._reactName,d=[];o!==null&&o!==t;){var v=o,S=v.alternate,z=v.stateNode;if(v=v.tag,S!==null&&S===t)break;v!==5&&v!==26&&v!==27||z===null||(S=z,n?(z=As(o,l),z!=null&&d.unshift(oi(o,z,S))):n||(z=As(o,l),z!=null&&d.push(oi(o,z,S)))),o=o.return}d.length!==0&&e.push({event:a,listeners:d})}var Oy=/\r\n?/g,jy=/\u0000|\uFFFD/g;function kf(e){return(typeof e=="string"?e:""+e).replace(Oy,`
`).replace(jy,"")}function Of(e,a){return a=kf(a),kf(e)===a}function Ae(e,a,o,t,n,l){switch(o){case"children":typeof t=="string"?a==="body"||a==="textarea"&&t===""||Mt(e,t):(typeof t=="number"||typeof t=="bigint")&&a!=="body"&&Mt(e,""+t);break;case"className":Vi(e,"class",t);break;case"tabIndex":Vi(e,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":Vi(e,o,t);break;case"style":kd(e,t,l);break;case"data":if(a!=="object"){Vi(e,"data",t);break}case"src":case"href":if(t===""&&(a!=="a"||o!=="href")){e.removeAttribute(o);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){e.removeAttribute(o);break}t=_i(""+t),e.setAttribute(o,t);break;case"action":case"formAction":if(typeof t=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(o==="formAction"?(a!=="input"&&Ae(e,a,"name",n.name,n,null),Ae(e,a,"formEncType",n.formEncType,n,null),Ae(e,a,"formMethod",n.formMethod,n,null),Ae(e,a,"formTarget",n.formTarget,n,null)):(Ae(e,a,"encType",n.encType,n,null),Ae(e,a,"method",n.method,n,null),Ae(e,a,"target",n.target,n,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){e.removeAttribute(o);break}t=_i(""+t),e.setAttribute(o,t);break;case"onClick":t!=null&&(e.onclick=$a);break;case"onScroll":t!=null&&le("scroll",e);break;case"onScrollEnd":t!=null&&le("scrollend",e);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(u(61));if(o=t.__html,o!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=o}}break;case"multiple":e.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":e.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){e.removeAttribute("xlink:href");break}o=_i(""+t),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(o,""+t):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":t===!0?e.setAttribute(o,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?e.setAttribute(o,t):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?e.setAttribute(o,t):e.removeAttribute(o);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?e.removeAttribute(o):e.setAttribute(o,t);break;case"popover":le("beforetoggle",e),le("toggle",e),Bi(e,"popover",t);break;case"xlinkActuate":Ja(e,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":Ja(e,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":Ja(e,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":Ja(e,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":Ja(e,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":Ja(e,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":Ja(e,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":Ja(e,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":Ja(e,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":Bi(e,"is",t);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=u0.get(o)||o,Bi(e,o,t))}}function ql(e,a,o,t,n,l){switch(o){case"style":kd(e,t,l);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(u(61));if(o=t.__html,o!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=o}}break;case"children":typeof t=="string"?Mt(e,t):(typeof t=="number"||typeof t=="bigint")&&Mt(e,""+t);break;case"onScroll":t!=null&&le("scroll",e);break;case"onScrollEnd":t!=null&&le("scrollend",e);break;case"onClick":t!=null&&(e.onclick=$a);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ad.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(n=o.endsWith("Capture"),a=o.slice(2,n?o.length-7:void 0),l=e[na]||null,l=l!=null?l[o]:null,typeof l=="function"&&e.removeEventListener(a,l,n),typeof t=="function")){typeof l!="function"&&l!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(a,t,n);break e}o in e?e[o]=t:t===!0?e.setAttribute(o,""):Bi(e,o,t)}}}function $e(e,a,o){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var t=!1,n=!1,l;for(l in o)if(o.hasOwnProperty(l)){var d=o[l];if(d!=null)switch(l){case"src":t=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,a));default:Ae(e,a,l,d,o,null)}}n&&Ae(e,a,"srcSet",o.srcSet,o,null),t&&Ae(e,a,"src",o.src,o,null);return;case"input":le("invalid",e);var v=l=d=n=null,S=null,z=null;for(t in o)if(o.hasOwnProperty(t)){var w=o[t];if(w!=null)switch(t){case"name":n=w;break;case"type":d=w;break;case"checked":S=w;break;case"defaultChecked":z=w;break;case"value":l=w;break;case"defaultValue":v=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(u(137,a));break;default:Ae(e,a,t,w,o,null)}}zd(e,l,v,S,z,d,n,!1);return;case"select":le("invalid",e),t=d=l=null;for(n in o)if(o.hasOwnProperty(n)&&(v=o[n],v!=null))switch(n){case"value":l=v;break;case"defaultValue":d=v;break;case"multiple":t=v;default:Ae(e,a,n,v,o,null)}a=l,o=d,e.multiple=!!t,a!=null?Tt(e,!!t,a,!1):o!=null&&Tt(e,!!t,o,!0);return;case"textarea":le("invalid",e),l=n=t=null;for(d in o)if(o.hasOwnProperty(d)&&(v=o[d],v!=null))switch(d){case"value":t=v;break;case"defaultValue":n=v;break;case"children":l=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(u(91));break;default:Ae(e,a,d,v,o,null)}Ld(e,t,n,l);return;case"option":for(S in o)if(o.hasOwnProperty(S)&&(t=o[S],t!=null))switch(S){case"selected":e.selected=t&&typeof t!="function"&&typeof t!="symbol";break;default:Ae(e,a,S,t,o,null)}return;case"dialog":le("beforetoggle",e),le("toggle",e),le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(t=0;t<ai.length;t++)le(ai[t],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in o)if(o.hasOwnProperty(z)&&(t=o[z],t!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,a));default:Ae(e,a,z,t,o,null)}return;default:if(Nr(a)){for(w in o)o.hasOwnProperty(w)&&(t=o[w],t!==void 0&&ql(e,a,w,t,o,void 0));return}}for(v in o)o.hasOwnProperty(v)&&(t=o[v],t!=null&&Ae(e,a,v,t,o,null))}function Ny(e,a,o,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,l=null,d=null,v=null,S=null,z=null,w=null;for(L in o){var N=o[L];if(o.hasOwnProperty(L)&&N!=null)switch(L){case"checked":break;case"value":break;case"defaultValue":S=N;default:t.hasOwnProperty(L)||Ae(e,a,L,null,t,N)}}for(var D in t){var L=t[D];if(N=o[D],t.hasOwnProperty(D)&&(L!=null||N!=null))switch(D){case"type":l=L;break;case"name":n=L;break;case"checked":z=L;break;case"defaultChecked":w=L;break;case"value":d=L;break;case"defaultValue":v=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(u(137,a));break;default:L!==N&&Ae(e,a,D,L,t,N)}}Or(e,d,v,S,z,w,l,n);return;case"select":L=d=v=D=null;for(l in o)if(S=o[l],o.hasOwnProperty(l)&&S!=null)switch(l){case"value":break;case"multiple":L=S;default:t.hasOwnProperty(l)||Ae(e,a,l,null,t,S)}for(n in t)if(l=t[n],S=o[n],t.hasOwnProperty(n)&&(l!=null||S!=null))switch(n){case"value":D=l;break;case"defaultValue":v=l;break;case"multiple":d=l;default:l!==S&&Ae(e,a,n,l,t,S)}a=v,o=d,t=L,D!=null?Tt(e,!!o,D,!1):!!t!=!!o&&(a!=null?Tt(e,!!o,a,!0):Tt(e,!!o,o?[]:"",!1));return;case"textarea":L=D=null;for(v in o)if(n=o[v],o.hasOwnProperty(v)&&n!=null&&!t.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Ae(e,a,v,null,t,n)}for(d in t)if(n=t[d],l=o[d],t.hasOwnProperty(d)&&(n!=null||l!=null))switch(d){case"value":D=n;break;case"defaultValue":L=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(u(91));break;default:n!==l&&Ae(e,a,d,n,t,l)}Dd(e,D,L);return;case"option":for(var F in o)if(D=o[F],o.hasOwnProperty(F)&&D!=null&&!t.hasOwnProperty(F))switch(F){case"selected":e.selected=!1;break;default:Ae(e,a,F,null,t,D)}for(S in t)if(D=t[S],L=o[S],t.hasOwnProperty(S)&&D!==L&&(D!=null||L!=null))switch(S){case"selected":e.selected=D&&typeof D!="function"&&typeof D!="symbol";break;default:Ae(e,a,S,D,t,L)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in o)D=o[$],o.hasOwnProperty($)&&D!=null&&!t.hasOwnProperty($)&&Ae(e,a,$,null,t,D);for(z in t)if(D=t[z],L=o[z],t.hasOwnProperty(z)&&D!==L&&(D!=null||L!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(u(137,a));break;default:Ae(e,a,z,D,t,L)}return;default:if(Nr(a)){for(var Ee in o)D=o[Ee],o.hasOwnProperty(Ee)&&D!==void 0&&!t.hasOwnProperty(Ee)&&ql(e,a,Ee,void 0,t,D);for(w in t)D=t[w],L=o[w],!t.hasOwnProperty(w)||D===L||D===void 0&&L===void 0||ql(e,a,w,D,t,L);return}}for(var C in o)D=o[C],o.hasOwnProperty(C)&&D!=null&&!t.hasOwnProperty(C)&&Ae(e,a,C,null,t,D);for(N in t)D=t[N],L=o[N],!t.hasOwnProperty(N)||D===L||D==null&&L==null||Ae(e,a,N,D,t,L)}function jf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Py(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,o=performance.getEntriesByType("resource"),t=0;t<o.length;t++){var n=o[t],l=n.transferSize,d=n.initiatorType,v=n.duration;if(l&&v&&jf(d)){for(d=0,v=n.responseEnd,t+=1;t<o.length;t++){var S=o[t],z=S.startTime;if(z>v)break;var w=S.transferSize,N=S.initiatorType;w&&jf(N)&&(S=S.responseEnd,d+=w*(S<v?1:(v-z)/(S-z)))}if(--t,a+=8*(l+d)/(n.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Sl=null,Al=null;function Un(e){return e.nodeType===9?e:e.ownerDocument}function Nf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Pf(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function El(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Cl=null;function Ry(){var e=window.event;return e&&e.type==="popstate"?e===Cl?!1:(Cl=e,!0):(Cl=null,!1)}var Rf=typeof setTimeout=="function"?setTimeout:void 0,Uy=typeof clearTimeout=="function"?clearTimeout:void 0,Uf=typeof Promise=="function"?Promise:void 0,By=typeof queueMicrotask=="function"?queueMicrotask:typeof Uf<"u"?function(e){return Uf.resolve(null).then(e).catch(Vy)}:Rf;function Vy(e){setTimeout(function(){throw e})}function Bo(e){return e==="head"}function Bf(e,a){var o=a,t=0;do{var n=o.nextSibling;if(e.removeChild(o),n&&n.nodeType===8)if(o=n.data,o==="/$"||o==="/&"){if(t===0){e.removeChild(n),ss(a);return}t--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")t++;else if(o==="html")ti(e.ownerDocument.documentElement);else if(o==="head"){o=e.ownerDocument.head,ti(o);for(var l=o.firstChild;l;){var d=l.nextSibling,v=l.nodeName;l[qs]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&l.rel.toLowerCase()==="stylesheet"||o.removeChild(l),l=d}}else o==="body"&&ti(e.ownerDocument.body);o=n}while(o);ss(a)}function Vf(e,a){var o=e;e=0;do{var t=o.nextSibling;if(o.nodeType===1?a?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(a?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),t&&t.nodeType===8)if(o=t.data,o==="/$"){if(e===0)break;e--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||e++;o=t}while(o)}function Tl(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var o=a;switch(a=a.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Tl(o),wr(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function Gy(e,a,o,t){for(;e.nodeType===1;){var n=o;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!t&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(t){if(!e[qs])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var l=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=Na(e.nextSibling),e===null)break}return null}function _y(e,a,o){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=Na(e.nextSibling),e===null))return null;return e}function Gf(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Na(e.nextSibling),e===null))return null;return e}function Ml(e){return e.data==="$?"||e.data==="$~"}function zl(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Iy(e,a){var o=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||o.readyState!=="loading")a();else{var t=function(){a(),o.removeEventListener("DOMContentLoaded",t)};o.addEventListener("DOMContentLoaded",t),e._reactRetry=t}}function Na(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var Dl=null;function _f(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"||o==="/&"){if(a===0)return Na(e.nextSibling);a--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||a++}e=e.nextSibling}return null}function If(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(a===0)return e;a--}else o!=="/$"&&o!=="/&"||a++}e=e.previousSibling}return null}function Hf(e,a,o){switch(a=Un(o),e){case"html":if(e=a.documentElement,!e)throw Error(u(452));return e;case"head":if(e=a.head,!e)throw Error(u(453));return e;case"body":if(e=a.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function ti(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);wr(e)}var Pa=new Map,Ff=new Set;function Bn(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var go=V.d;V.d={f:Hy,r:Fy,D:Qy,C:Xy,L:Ky,m:Yy,X:Zy,S:Wy,M:Jy};function Hy(){var e=go.f(),a=Ln();return e||a}function Fy(e){var a=At(e);a!==null&&a.tag===5&&a.type==="form"?rp(a):go.r(e)}var as=typeof document>"u"?null:document;function Qf(e,a,o){var t=as;if(t&&typeof a=="string"&&a){var n=za(a);n='link[rel="'+e+'"][href="'+n+'"]',typeof o=="string"&&(n+='[crossorigin="'+o+'"]'),Ff.has(n)||(Ff.add(n),e={rel:e,crossOrigin:o,href:a},t.querySelector(n)===null&&(a=t.createElement("link"),$e(a,"link",e),Fe(a),t.head.appendChild(a)))}}function Qy(e){go.D(e),Qf("dns-prefetch",e,null)}function Xy(e,a){go.C(e,a),Qf("preconnect",e,a)}function Ky(e,a,o){go.L(e,a,o);var t=as;if(t&&e&&a){var n='link[rel="preload"][as="'+za(a)+'"]';a==="image"&&o&&o.imageSrcSet?(n+='[imagesrcset="'+za(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(n+='[imagesizes="'+za(o.imageSizes)+'"]')):n+='[href="'+za(e)+'"]';var l=n;switch(a){case"style":l=os(e);break;case"script":l=ts(e)}Pa.has(l)||(e=y({rel:"preload",href:a==="image"&&o&&o.imageSrcSet?void 0:e,as:a},o),Pa.set(l,e),t.querySelector(n)!==null||a==="style"&&t.querySelector(si(l))||a==="script"&&t.querySelector(ii(l))||(a=t.createElement("link"),$e(a,"link",e),Fe(a),t.head.appendChild(a)))}}function Yy(e,a){go.m(e,a);var o=as;if(o&&e){var t=a&&typeof a.as=="string"?a.as:"script",n='link[rel="modulepreload"][as="'+za(t)+'"][href="'+za(e)+'"]',l=n;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=ts(e)}if(!Pa.has(l)&&(e=y({rel:"modulepreload",href:e},a),Pa.set(l,e),o.querySelector(n)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(ii(l)))return}t=o.createElement("link"),$e(t,"link",e),Fe(t),o.head.appendChild(t)}}}function Wy(e,a,o){go.S(e,a,o);var t=as;if(t&&e){var n=Et(t).hoistableStyles,l=os(e);a=a||"default";var d=n.get(l);if(!d){var v={loading:0,preload:null};if(d=t.querySelector(si(l)))v.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":a},o),(o=Pa.get(l))&&Ll(e,o);var S=d=t.createElement("link");Fe(S),$e(S,"link",e),S._p=new Promise(function(z,w){S.onload=z,S.onerror=w}),S.addEventListener("load",function(){v.loading|=1}),S.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Vn(d,a,t)}d={type:"stylesheet",instance:d,count:1,state:v},n.set(l,d)}}}function Zy(e,a){go.X(e,a);var o=as;if(o&&e){var t=Et(o).hoistableScripts,n=ts(e),l=t.get(n);l||(l=o.querySelector(ii(n)),l||(e=y({src:e,async:!0},a),(a=Pa.get(n))&&wl(e,a),l=o.createElement("script"),Fe(l),$e(l,"link",e),o.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},t.set(n,l))}}function Jy(e,a){go.M(e,a);var o=as;if(o&&e){var t=Et(o).hoistableScripts,n=ts(e),l=t.get(n);l||(l=o.querySelector(ii(n)),l||(e=y({src:e,async:!0,type:"module"},a),(a=Pa.get(n))&&wl(e,a),l=o.createElement("script"),Fe(l),$e(l,"link",e),o.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},t.set(n,l))}}function Xf(e,a,o,t){var n=(n=re.current)?Bn(n):null;if(!n)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(a=os(o.href),o=Et(n).hoistableStyles,t=o.get(a),t||(t={type:"style",instance:null,count:0,state:null},o.set(a,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=os(o.href);var l=Et(n).hoistableStyles,d=l.get(e);if(d||(n=n.ownerDocument||n,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,d),(l=n.querySelector(si(e)))&&!l._p&&(d.instance=l,d.state.loading=5),Pa.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Pa.set(e,o),l||$y(n,e,o,d.state))),a&&t===null)throw Error(u(528,""));return d}if(a&&t!==null)throw Error(u(529,""));return null;case"script":return a=o.async,o=o.src,typeof o=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=ts(o),o=Et(n).hoistableScripts,t=o.get(a),t||(t={type:"script",instance:null,count:0,state:null},o.set(a,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function os(e){return'href="'+za(e)+'"'}function si(e){return'link[rel="stylesheet"]['+e+"]"}function Kf(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function $y(e,a,o,t){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?t.loading=1:(a=e.createElement("link"),t.preload=a,a.addEventListener("load",function(){return t.loading|=1}),a.addEventListener("error",function(){return t.loading|=2}),$e(a,"link",o),Fe(a),e.head.appendChild(a))}function ts(e){return'[src="'+za(e)+'"]'}function ii(e){return"script[async]"+e}function Yf(e,a,o){if(a.count++,a.instance===null)switch(a.type){case"style":var t=e.querySelector('style[data-href~="'+za(o.href)+'"]');if(t)return a.instance=t,Fe(t),t;var n=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return t=(e.ownerDocument||e).createElement("style"),Fe(t),$e(t,"style",n),Vn(t,o.precedence,e),a.instance=t;case"stylesheet":n=os(o.href);var l=e.querySelector(si(n));if(l)return a.state.loading|=4,a.instance=l,Fe(l),l;t=Kf(o),(n=Pa.get(n))&&Ll(t,n),l=(e.ownerDocument||e).createElement("link"),Fe(l);var d=l;return d._p=new Promise(function(v,S){d.onload=v,d.onerror=S}),$e(l,"link",t),a.state.loading|=4,Vn(l,o.precedence,e),a.instance=l;case"script":return l=ts(o.src),(n=e.querySelector(ii(l)))?(a.instance=n,Fe(n),n):(t=o,(n=Pa.get(l))&&(t=y({},o),wl(t,n)),e=e.ownerDocument||e,n=e.createElement("script"),Fe(n),$e(n,"link",t),e.head.appendChild(n),a.instance=n);case"void":return null;default:throw Error(u(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(t=a.instance,a.state.loading|=4,Vn(t,o.precedence,e));return a.instance}function Vn(e,a,o){for(var t=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=t.length?t[t.length-1]:null,l=n,d=0;d<t.length;d++){var v=t[d];if(v.dataset.precedence===a)l=v;else if(l!==n)break}l?l.parentNode.insertBefore(e,l.nextSibling):(a=o.nodeType===9?o.head:o,a.insertBefore(e,a.firstChild))}function Ll(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function wl(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Gn=null;function Wf(e,a,o){if(Gn===null){var t=new Map,n=Gn=new Map;n.set(o,t)}else n=Gn,t=n.get(o),t||(t=new Map,n.set(o,t));if(t.has(e))return t;for(t.set(e,null),o=o.getElementsByTagName(e),n=0;n<o.length;n++){var l=o[n];if(!(l[qs]||l[Ye]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var d=l.getAttribute(a)||"";d=e+d;var v=t.get(d);v?v.push(l):t.set(d,[l])}}return t}function Zf(e,a,o){e=e.ownerDocument||e,e.head.insertBefore(o,a==="title"?e.querySelector("head > title"):null)}function ex(e,a,o){if(o===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Jf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ax(e,a,o,t){if(o.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var n=os(t.href),l=a.querySelector(si(n));if(l){a=l._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=_n.bind(e),a.then(e,e)),o.state.loading|=4,o.instance=l,Fe(l);return}l=a.ownerDocument||a,t=Kf(t),(n=Pa.get(n))&&Ll(t,n),l=l.createElement("link"),Fe(l);var d=l;d._p=new Promise(function(v,S){d.onload=v,d.onerror=S}),$e(l,"link",t),o.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(o,a),(a=o.state.preload)&&(o.state.loading&3)===0&&(e.count++,o=_n.bind(e),a.addEventListener("load",o),a.addEventListener("error",o))}}var kl=0;function ox(e,a){return e.stylesheets&&e.count===0&&Hn(e,e.stylesheets),0<e.count||0<e.imgCount?function(o){var t=setTimeout(function(){if(e.stylesheets&&Hn(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+a);0<e.imgBytes&&kl===0&&(kl=62500*Py());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Hn(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>kl?50:800)+a);return e.unsuspend=o,function(){e.unsuspend=null,clearTimeout(t),clearTimeout(n)}}:null}function _n(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hn(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var In=null;function Hn(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,In=new Map,a.forEach(tx,e),In=null,_n.call(e))}function tx(e,a){if(!(a.state.loading&4)){var o=In.get(e);if(o)var t=o.get(null);else{o=new Map,In.set(e,o);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<n.length;l++){var d=n[l];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(o.set(d.dataset.precedence,d),t=d)}t&&o.set(null,t)}n=a.instance,d=n.getAttribute("data-precedence"),l=o.get(d)||t,l===t&&o.set(null,n),o.set(d,n),this.count++,t=_n.bind(this),n.addEventListener("load",t),n.addEventListener("error",t),l?l.parentNode.insertBefore(n,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),a.state.loading|=4}}var ni={$$typeof:H,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function sx(e,a,o,t,n,l,d,v,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mr(0),this.hiddenUpdates=Mr(null),this.identifierPrefix=t,this.onUncaughtError=n,this.onCaughtError=l,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function $f(e,a,o,t,n,l,d,v,S,z,w,N){return e=new sx(e,a,o,d,S,z,w,N,v),a=1,l===!0&&(a|=24),l=va(3,null,null,a),e.current=l,l.stateNode=e,a=du(),a.refCount++,e.pooledCache=a,a.refCount++,l.memoizedState={element:t,isDehydrated:o,cache:a},hu(l),e}function eh(e){return e?(e=jt,e):jt}function ah(e,a,o,t,n,l){n=eh(n),t.context===null?t.context=n:t.pendingContext=n,t=zo(a),t.payload={element:o},l=l===void 0?null:l,l!==null&&(t.callback=l),o=Do(e,t,a),o!==null&&(ma(o,e,a),Us(o,e,a))}function oh(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<a?o:a}}function Ol(e,a){oh(e,a),(e=e.alternate)&&oh(e,a)}function th(e){if(e.tag===13||e.tag===31){var a=ot(e,67108864);a!==null&&ma(a,e,67108864),Ol(e,67108864)}}function sh(e){if(e.tag===13||e.tag===31){var a=Sa();a=zr(a);var o=ot(e,a);o!==null&&ma(o,e,a),Ol(e,a)}}var Fn=!0;function ix(e,a,o,t){var n=k.T;k.T=null;var l=V.p;try{V.p=2,jl(e,a,o,t)}finally{V.p=l,k.T=n}}function nx(e,a,o,t){var n=k.T;k.T=null;var l=V.p;try{V.p=8,jl(e,a,o,t)}finally{V.p=l,k.T=n}}function jl(e,a,o,t){if(Fn){var n=Nl(t);if(n===null)xl(e,a,t,Qn,o),nh(e,t);else if(ux(n,e,a,o,t))t.stopPropagation();else if(nh(e,t),a&4&&-1<rx.indexOf(e)){for(;n!==null;){var l=At(n);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var d=Zo(l.pendingLanes);if(d!==0){var v=l;for(v.pendingLanes|=2,v.entangledLanes|=2;d;){var S=1<<31-ha(d);v.entanglements[1]|=S,d&=~S}Xa(l),(be&6)===0&&(zn=pa()+500,ei(0))}}break;case 31:case 13:v=ot(l,2),v!==null&&ma(v,l,2),Ln(),Ol(l,2)}if(l=Nl(t),l===null&&xl(e,a,t,Qn,o),l===n)break;n=l}n!==null&&t.stopPropagation()}else xl(e,a,t,null,o)}}function Nl(e){return e=Rr(e),Pl(e)}var Qn=null;function Pl(e){if(Qn=null,e=St(e),e!==null){var a=p(e);if(a===null)e=null;else{var o=a.tag;if(o===13){if(e=m(a),e!==null)return e;e=null}else if(o===31){if(e=g(a),e!==null)return e;e=null}else if(o===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Qn=e,null}function ih(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qb()){case md:return 2;case pd:return 8;case ji:case Xb:return 32;case fd:return 268435456;default:return 32}default:return 32}}var Rl=!1,Vo=null,Go=null,_o=null,ri=new Map,ui=new Map,Io=[],rx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function nh(e,a){switch(e){case"focusin":case"focusout":Vo=null;break;case"dragenter":case"dragleave":Go=null;break;case"mouseover":case"mouseout":_o=null;break;case"pointerover":case"pointerout":ri.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":ui.delete(a.pointerId)}}function li(e,a,o,t,n,l){return e===null||e.nativeEvent!==l?(e={blockedOn:a,domEventName:o,eventSystemFlags:t,nativeEvent:l,targetContainers:[n]},a!==null&&(a=At(a),a!==null&&th(a)),e):(e.eventSystemFlags|=t,a=e.targetContainers,n!==null&&a.indexOf(n)===-1&&a.push(n),e)}function ux(e,a,o,t,n){switch(a){case"focusin":return Vo=li(Vo,e,a,o,t,n),!0;case"dragenter":return Go=li(Go,e,a,o,t,n),!0;case"mouseover":return _o=li(_o,e,a,o,t,n),!0;case"pointerover":var l=n.pointerId;return ri.set(l,li(ri.get(l)||null,e,a,o,t,n)),!0;case"gotpointercapture":return l=n.pointerId,ui.set(l,li(ui.get(l)||null,e,a,o,t,n)),!0}return!1}function rh(e){var a=St(e.target);if(a!==null){var o=p(a);if(o!==null){if(a=o.tag,a===13){if(a=m(o),a!==null){e.blockedOn=a,xd(e.priority,function(){sh(o)});return}}else if(a===31){if(a=g(o),a!==null){e.blockedOn=a,xd(e.priority,function(){sh(o)});return}}else if(a===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xn(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var o=Nl(e.nativeEvent);if(o===null){o=e.nativeEvent;var t=new o.constructor(o.type,o);Pr=t,o.target.dispatchEvent(t),Pr=null}else return a=At(o),a!==null&&th(a),e.blockedOn=o,!1;a.shift()}return!0}function uh(e,a,o){Xn(e)&&o.delete(a)}function lx(){Rl=!1,Vo!==null&&Xn(Vo)&&(Vo=null),Go!==null&&Xn(Go)&&(Go=null),_o!==null&&Xn(_o)&&(_o=null),ri.forEach(uh),ui.forEach(uh)}function Kn(e,a){e.blockedOn===a&&(e.blockedOn=null,Rl||(Rl=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,lx)))}var Yn=null;function lh(e){Yn!==e&&(Yn=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Yn===e&&(Yn=null);for(var a=0;a<e.length;a+=3){var o=e[a],t=e[a+1],n=e[a+2];if(typeof t!="function"){if(Pl(t||o)===null)continue;break}var l=At(o);l!==null&&(e.splice(a,3),a-=3,Nu(l,{pending:!0,data:n,method:o.method,action:t},t,n))}}))}function ss(e){function a(S){return Kn(S,e)}Vo!==null&&Kn(Vo,e),Go!==null&&Kn(Go,e),_o!==null&&Kn(_o,e),ri.forEach(a),ui.forEach(a);for(var o=0;o<Io.length;o++){var t=Io[o];t.blockedOn===e&&(t.blockedOn=null)}for(;0<Io.length&&(o=Io[0],o.blockedOn===null);)rh(o),o.blockedOn===null&&Io.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(t=0;t<o.length;t+=3){var n=o[t],l=o[t+1],d=n[na]||null;if(typeof l=="function")d||lh(o);else if(d){var v=null;if(l&&l.hasAttribute("formAction")){if(n=l,d=l[na]||null)v=d.formAction;else if(Pl(n)!==null)continue}else v=d.action;typeof v=="function"?o[t+1]=v:(o.splice(t,3),t-=3),lh(o)}}}function ch(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(d){return n=d})},focusReset:"manual",scroll:"manual"})}function a(){n!==null&&(n(),n=null),t||setTimeout(o,20)}function o(){if(!t&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var t=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(o,100),function(){t=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),n!==null&&(n(),n=null)}}}function Ul(e){this._internalRoot=e}Wn.prototype.render=Ul.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(u(409));var o=a.current,t=Sa();ah(o,t,e,a,null,null)},Wn.prototype.unmount=Ul.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;ah(e.current,2,null,e,null,null),Ln(),a[qt]=null}};function Wn(e){this._internalRoot=e}Wn.prototype.unstable_scheduleHydration=function(e){if(e){var a=yd();e={blockedOn:null,target:e,priority:a};for(var o=0;o<Io.length&&a!==0&&a<Io[o].priority;o++);Io.splice(o,0,e),o===0&&rh(e)}};var dh=i.version;if(dh!=="19.2.5")throw Error(u(527,dh,"19.2.5"));V.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=f(a),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var cx={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zn.isDisabled&&Zn.supportsFiber)try{bs=Zn.inject(cx),fa=Zn}catch{}}return di.createRoot=function(e,a){if(!c(e))throw Error(u(299));var o=!1,t="",n=vp,l=bp,d=yp;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(t=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(l=a.onCaughtError),a.onRecoverableError!==void 0&&(d=a.onRecoverableError)),a=$f(e,1,!1,null,null,o,t,null,n,l,d,ch),e[qt]=a.current,yl(e),new Ul(a)},di.hydrateRoot=function(e,a,o){if(!c(e))throw Error(u(299));var t=!1,n="",l=vp,d=bp,v=yp,S=null;return o!=null&&(o.unstable_strictMode===!0&&(t=!0),o.identifierPrefix!==void 0&&(n=o.identifierPrefix),o.onUncaughtError!==void 0&&(l=o.onUncaughtError),o.onCaughtError!==void 0&&(d=o.onCaughtError),o.onRecoverableError!==void 0&&(v=o.onRecoverableError),o.formState!==void 0&&(S=o.formState)),a=$f(e,1,!0,a,o??null,t,n,S,l,d,v,ch),a.context=eh(null),o=a.current,t=Sa(),t=zr(t),n=zo(t),n.callback=null,Do(o,n,t),o=t,a.current.lanes=o,xs(a,o),Xa(a),e[qt]=a.current,yl(e),new Wn(a)},di.version="19.2.5",di}var qh;function Ex(){if(qh)return Gl.exports;qh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),Gl.exports=Ax(),Gl.exports}var Cx=Ex();function Tx(s,i){if(s instanceof RegExp)return{keys:!1,pattern:s};var r,u,c,p,m=[],g="",h=s.split("/");for(h[0]||h.shift();c=h.shift();)r=c[0],r==="*"?(m.push(r),g+=c[1]==="?"?"(?:/(.*))?":"/(.*)"):r===":"?(u=c.indexOf("?",1),p=c.indexOf(".",1),m.push(c.substring(1,~u?u:~p?p:c.length)),g+=~u&&!~p?"(?:/([^/]+?))?":"/([^/]+?)",~p&&(g+=(~u?"?":"")+"\\"+c.substring(p))):g+="/"+c;return{keys:m,pattern:new RegExp("^"+g+(i?"(?=$|/)":"/?$"),"i")}}var Fl={exports:{}},Ql={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sh;function Mx(){if(Sh)return Ql;Sh=1;var s=fr();function i(y,q){return y===q&&(y!==0||1/y===1/q)||y!==y&&q!==q}var r=typeof Object.is=="function"?Object.is:i,u=s.useState,c=s.useEffect,p=s.useLayoutEffect,m=s.useDebugValue;function g(y,q){var T=q(),j=u({inst:{value:T,getSnapshot:q}}),R=j[0].inst,B=j[1];return p(function(){R.value=T,R.getSnapshot=q,h(R)&&B({inst:R})},[y,T,q]),c(function(){return h(R)&&B({inst:R}),y(function(){h(R)&&B({inst:R})})},[y]),m(T),T}function h(y){var q=y.getSnapshot;y=y.value;try{var T=q();return!r(y,T)}catch{return!0}}function f(y,q){return q()}var b=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?f:g;return Ql.useSyncExternalStore=s.useSyncExternalStore!==void 0?s.useSyncExternalStore:b,Ql}var Ah;function zx(){return Ah||(Ah=1,Fl.exports=Mx()),Fl.exports}var Yg=zx();const Dx=bx.useInsertionEffect,Lx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wx=Lx?G.useLayoutEffect:G.useEffect,kx=Dx||wx,Wg=s=>{const i=G.useRef([s,(...r)=>i[0](...r)]).current;return kx(()=>{i[0]=s}),i[1]},Ox="popstate",Mc="pushState",zc="replaceState",jx="hashchange",Eh=[Ox,Mc,zc,jx],Nx=s=>{for(const i of Eh)addEventListener(i,s);return()=>{for(const i of Eh)removeEventListener(i,s)}},Zg=(s,i)=>Yg.useSyncExternalStore(Nx,s,i),Ch=()=>location.search,Px=({ssrSearch:s}={})=>Zg(Ch,s!=null?()=>s:Ch),Th=()=>location.pathname,Rx=({ssrPath:s}={})=>Zg(Th,s!=null?()=>s:Th),Ux=(s,{replace:i=!1,state:r=null}={})=>history[i?zc:Mc](r,"",s),Bx=(s={})=>[Rx(s),Ux],Mh=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[Mh]>"u"){for(const s of[Mc,zc]){const i=history[s];history[s]=function(){const r=i.apply(this,arguments),u=new Event(s);return u.arguments=arguments,dispatchEvent(u),r}}Object.defineProperty(window,Mh,{value:!0})}const Vx=(s,i)=>i.toLowerCase().indexOf(s.toLowerCase())?"~"+i:i.slice(s.length)||"/",Jg=(s="")=>s==="/"?"":s,Gx=(s,i)=>s[0]==="~"?s.slice(1):Jg(i)+s,_x=(s="",i)=>Vx(zh(Jg(s)),zh(i)),zh=s=>{try{return decodeURI(s)}catch{return s}},$g={hook:Bx,searchHook:Px,parser:Tx,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:s=>s,aroundNav:(s,i,r)=>s(i,r)},ev=G.createContext($g),fs=()=>G.useContext(ev),av={},ov=G.createContext(av),Ix=()=>G.useContext(ov),hr=s=>{const[i,r]=s.hook(s);return[_x(s.base,i),Wg((u,c)=>s.aroundNav(r,Gx(u,s.base),c))]},Dc=()=>hr(fs()),Lc=(s,i,r,u)=>{const{pattern:c,keys:p}=i instanceof RegExp?{keys:!1,pattern:i}:s(i||"*",u),m=c.exec(r)||[],[g,...h]=m;return g!==void 0?[!0,(()=>{const f=p!==!1?Object.fromEntries(p.map((y,q)=>[y,h[q]])):m.groups;let b={...h};return f&&Object.assign(b,f),b})(),...u?[g]:[]]:[!1,null]},Hx=s=>Lc(fs().parser,s,Dc()[0]),tv=({children:s,...i})=>{var b,y,q;const r=fs(),u=i.hook?$g:r;let c=u;const[p,m=i.ssrSearch??""]=((b=i.ssrPath)==null?void 0:b.split("?"))??[];p&&(i.ssrSearch=m,i.ssrPath=p),i.hrefs=i.hrefs??((y=i.hook)==null?void 0:y.hrefs),i.searchHook=i.searchHook??((q=i.hook)==null?void 0:q.searchHook);let g=G.useRef({}),h=g.current,f=h;for(let T in u){const j=T==="base"?u[T]+(i[T]??""):i[T]??u[T];h===f&&j!==f[T]&&(g.current=f={...f}),f[T]=j,(j!==u[T]||j!==c[T])&&(c=f)}return G.createElement(ev.Provider,{value:c,children:s})},Dh=({children:s,component:i},r)=>i?G.createElement(i,{params:r}):typeof s=="function"?s(r):s,Fx=s=>{let i=G.useRef(av);const r=i.current;return i.current=Object.keys(s).length!==Object.keys(r).length||Object.entries(s).some(([u,c])=>c!==r[u])?s:r},Xl=({path:s,nest:i,match:r,...u})=>{const c=fs(),[p]=hr(c),[m,g,h]=r??Lc(c.parser,s,p,i),f=Fx({...Ix(),...g});if(!m)return null;const b=h?G.createElement(tv,{base:h},Dh(u,f)):Dh(u,f);return G.createElement(ov.Provider,{value:f,children:b})},Ia=G.forwardRef((s,i)=>{const r=fs(),[u,c]=hr(r),{to:p="",href:m=p,onClick:g,asChild:h,children:f,className:b,replace:y,state:q,transition:T,...j}=s,R=Wg(U=>{U.ctrlKey||U.metaKey||U.altKey||U.shiftKey||U.button!==0||(g==null||g(U),U.defaultPrevented||(U.preventDefault(),c(m,s)))}),B=r.hrefs(m[0]==="~"?m.slice(1):r.base+m,r);return h&&G.isValidElement(f)?G.cloneElement(f,{onClick:R,href:B}):G.createElement("a",{...j,onClick:R,href:B,className:b!=null&&b.call?b(u===m):b,children:f,ref:i})}),sv=s=>Array.isArray(s)?s.flatMap(i=>sv(i&&i.type===G.Fragment?i.props.children:i)):[s],Qx=({children:s,location:i})=>{const r=fs(),[u]=hr(r);for(const c of sv(s)){let p=0;if(G.isValidElement(c)&&(p=Lc(r.parser,c.props.path,i||u,c.props.nest))[0])return G.cloneElement(c,{match:p})}return null},pi={v:[]},Lh=()=>pi.v.forEach(s=>s()),Xx=s=>(pi.v.push(s)===1&&addEventListener("hashchange",Lh),()=>{pi.v=pi.v.filter(i=>i!==s),pi.v.length||removeEventListener("hashchange",Lh)}),Kx=()=>"/"+location.hash.replace(/^#?\/?/,""),Yx=(s,{state:i=null,replace:r=!1}={})=>{const u=location.href,[c,p]=s.replace(/^#?\/?/,"").split("?"),m=new URL(location.href);m.hash=`/${c}`,p&&(m.search=p);const g=m.href;r?history.replaceState(i,"",g):history.pushState(i,"",g);const h=typeof HashChangeEvent<"u"?new HashChangeEvent("hashchange",{oldURL:u,newURL:g}):new Event("hashchange",{detail:{oldURL:u,newURL:g}});dispatchEvent(h)},iv=({ssrPath:s="/"}={})=>[Yg.useSyncExternalStore(Xx,Kx,()=>s),Yx];iv.hrefs=s=>"#"+s;/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),nv=(...s)=>s.filter((i,r,u)=>!!i&&i.trim()!==""&&u.indexOf(i)===r).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Zx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=G.forwardRef(({color:s="currentColor",size:i=24,strokeWidth:r=2,absoluteStrokeWidth:u,className:c="",children:p,iconNode:m,...g},h)=>G.createElement("svg",{ref:h,...Zx,width:i,height:i,stroke:s,strokeWidth:u?Number(r)*24/Number(i):r,className:nv("lucide",c),...g},[...m.map(([f,b])=>G.createElement(f,b)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=(s,i)=>{const r=G.forwardRef(({className:u,...c},p)=>G.createElement(Jx,{ref:p,iconNode:i,className:nv(`lucide-${Wx(s)}`,u),...c}));return r.displayName=`${s}`,r};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=pe("AppWindow",[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eq=pe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=pe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=pe("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=pe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aq=pe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oq=pe("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tq=pe("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sq=pe("CirclePlay",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iq=pe("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nq=pe("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rq=pe("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=pe("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=pe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uq=pe("Feather",[["path",{d:"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z",key:"18jl4k"}],["path",{d:"M16 8 2 22",key:"vp34q"}],["path",{d:"M17.5 15H9",key:"1oz8nu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lq=pe("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=pe("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cq=pe("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=pe("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dq=pe("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mq=pe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pq=pe("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fq=pe("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hq=pe("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gq=pe("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vq=pe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bq=pe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yq=pe("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=pe("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xq=pe("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qq=pe("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sq=pe("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aq=pe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function nr({size:s=32,className:i="",glow:r=!1}){return x.jsxs("svg",{width:s,height:s,viewBox:"0 0 64 64",className:i,role:"img","aria-label":"Lubuntu",style:r?{filter:"drop-shadow(0 0 14px rgba(0,104,200,0.55))"}:void 0,children:[x.jsx("defs",{children:x.jsxs("linearGradient",{id:"lu-disc",x1:"0",y1:"0",x2:"1",y2:"1",children:[x.jsx("stop",{offset:"0",stopColor:"#3b9ae0"}),x.jsx("stop",{offset:"0.55",stopColor:"#0068c8"}),x.jsx("stop",{offset:"1",stopColor:"#004b91"})]})}),x.jsx("circle",{cx:"32",cy:"32",r:"30",fill:"url(#lu-disc)"}),x.jsx("path",{d:"M15 39 C 26 41, 36 37, 44 27 C 41 34, 34 42, 23 45 C 20 46, 16 44, 15 39 Z",fill:"#ffffff",opacity:"0.97"}),x.jsx("path",{d:"M33 21 C 41 20, 47 23, 51 29 C 45 27, 39 27, 33 30 C 30 27, 30 23, 33 21 Z",fill:"#ffffff",opacity:"0.9"}),x.jsx("circle",{cx:"46.5",cy:"24.5",r:"2.4",fill:"#ffffff"})]})}function Eq({onMenu:s}){return x.jsx("header",{className:"sticky top-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur border-b border-slate-200 dark:border-slate-800 shadow-sm",children:x.jsxs("div",{className:"flex items-center gap-3 px-4 h-14",children:[x.jsx("button",{onClick:s,className:"lg:hidden p-2 -ml-2 text-slate-700 dark:text-slate-200","aria-label":"Menu",children:x.jsx(mq,{size:22})}),x.jsxs(Ia,{href:"/",className:"flex items-center gap-2 font-bold text-lg group",children:[x.jsx(nr,{size:30,className:"transition-transform group-hover:scale-110"}),x.jsxs("span",{className:"text-lubuntu-blue dark:text-lubuntu-blue-light",children:["Lubuntu ",x.jsx("span",{className:"hidden sm:inline",children:"— Curso do Zero ao Domínio"})]})]}),x.jsx("div",{className:"ml-auto",children:x.jsxs("a",{href:"https://github.com/Wallysondevs/lubuntu-book",target:"_blank",rel:"noreferrer",className:"flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-300 hover:text-lubuntu-blue dark:hover:text-lubuntu-blue-light transition-colors",children:[x.jsx(lq,{size:18}),x.jsx("span",{className:"hidden sm:inline",children:"GitHub"})]})})]})})}const Cq=[{slug:"bem-vindo",section:"boas-vindas",title:"Bem-vindo ao mundo Lubuntu",difficulty:"iniciante",subtitle:"Uma carta de boas-vindas para quem nunca tocou em Linux.",intro:`Se você está lendo isto, parabéns: você decidiu dar uma chance para um sistema operacional diferente. Talvez seu computador esteja velho, talvez você esteja cansado de pop-ups, talvez só queira aprender algo novo. Qualquer que seja o motivo, este livro foi escrito pensando em você, que nunca abriu um terminal Linux na vida e olha para a tela preta com aquela sensação de "será que vou conseguir?". Vai conseguir, sim — e mais rápido do que imagina.

Pense neste livro como um amigo professor que se senta do seu lado. Ele não vai te jogar comandos sem explicar, não vai supor que você sabe o que é "kernel" ou "shell". A cada conceito novo, vamos comparar com algo do dia a dia: a cozinha, o prédio onde você mora, uma biblioteca pública, um mordomo discreto. Linux fica simples quando para de ser tratado como mágica de hacker e vira só uma ferramenta bem feita.

O Lubuntu é o nosso ponto de partida porque é leve, organizado e perdoa máquinas antigas. Roda bem em um notebook de 2010 que o Windows abandonou. Ele usa uma área de trabalho chamada LXQt, parecida com o que você já conhece: barra embaixo, menu Iniciar no canto, lixeira na mesa. Nada de revolução visual; o objetivo aqui é ser produtivo desde o primeiro clique.

Antes de pular para os capítulos técnicos, este primeiro capítulo só quer te tranquilizar. Não há comando perigoso aqui. Você vai ler, respirar, e seguir em frente sabendo onde vai pisar. No fim, deixei algumas dicas de postura que valem ouro: ir devagar, anotar o que aprende, não ter medo de errar. Bem-vindo. Pode entrar.`,codes:[{lang:"bash",code:`# Você não precisa rodar nada agora. Mas se já tem o Lubuntu rodando,
# este é o comando mais inofensivo do mundo: ele só mostra o nome do sistema.
uname -a
# saída exemplo:
# Linux meu-pc 7.0.0-14-generic #14-Ubuntu SMP x86_64 GNU/Linux`},{lang:"bash",code:`# Outro comando "saudação": mostra qual versão do Lubuntu está instalada.
lsb_release -a
# saída exemplo:
# Distributor ID: Ubuntu
# Description:    Ubuntu 26.04.1 LTS
# Release:        26.04
# Codename:       resolute`},{lang:"bash",code:`# Se quiser saber quanto tempo o computador está ligado:
uptime
# saída exemplo:
#  14:32:01 up 2 days,  3:14,  1 user,  load average: 0.12, 0.18, 0.20

# "load average" é o quanto o processador está trabalhando.
# Valores baixos (perto de 0) significam que a máquina está tranquila.`},{lang:"bash",code:`# E para ver quem você é, do ponto de vista do sistema:
whoami
# saída: o nome do seu usuário, tipo: ana

# E em qual pasta você está agora?
pwd
# saída: /home/ana
# /home/ana é a sua "casa" no Lubuntu, equivalente a "C:\\Users\\Ana" no Windows.`},{lang:"bash",code:`# Postura recomendada para estudar este livro:
# 1) Tenha um caderno (físico ou digital) só para anotações.
# 2) Toda vez que ler um comando novo, escreva o que ele faz com suas palavras.
# 3) Repita o comando no terminal — ler é diferente de fazer.
# 4) Se algo der errado, leia a mensagem de erro INTEIRA antes de pesquisar.
# 5) Não decore: entenda. Você só precisa lembrar onde procurar.`}],points:["Linux não é mágica: é um sistema operacional tão comum quanto Windows ou macOS.","Lubuntu foi pensado para ser leve e familiar — você não precisa virar geek para usar.","O terminal será seu amigo, não seu inimigo; comece com comandos inofensivos como uname e pwd.","Tenha paciência: aprender um sistema novo leva semanas, não horas. Está tudo bem ir devagar.","Anotar o que você aprende multiplica a retenção. Mantenha um caderninho de comandos.","Iniciante comum: achar que precisa decorar tudo. Você só precisa entender o conceito e saber onde consultar.","Iniciante comum: ter medo de quebrar o sistema só por explorar. Os comandos deste capítulo não mudam nada.","Errar é parte do processo. A mensagem de erro do Linux quase sempre diz o que fazer, em inglês simples."],alerts:[{type:"info",content:"Este livro assume Lubuntu 26.04 LTS (Resolute Raccoon) ou versão mais recente. Versões muito antigas podem ter caminhos e nomes ligeiramente diferentes."},{type:"tip",content:"Se preferir aprender pela prática, instale o Lubuntu em uma máquina virtual (VirtualBox) antes de mexer no PC real. É um espaço seguro para experimentar."},{type:"success",content:"Você só precisa de uma hora por dia, três vezes por semana, para terminar este livro confortavelmente em dois meses. Não há corrida."}]},{slug:"o-que-e-lubuntu",section:"boas-vindas",title:"O que é o Lubuntu, afinal?",difficulty:"iniciante",subtitle:"Distribuição, sabor oficial e o que está por trás do nome.",intro:`Imagine que o Linux é um motor de carro: poderoso, confiável, mas sozinho não te leva a lugar nenhum. Para virar um carro de verdade, ele precisa de carroceria, painel, bancos e volante. Esses "carros prontos" feitos em volta do motor Linux se chamam distribuições, ou "distros". O Ubuntu é uma das distros mais conhecidas do mundo. O Lubuntu é uma variação oficial do Ubuntu — um "sabor", como dizem por lá — feito para ser leve.

O nome Lubuntu vem da junção de "LXQt" (a interface gráfica) com "Ubuntu" (a base do sistema). Por baixo do capô, é Ubuntu igualzinho: mesmos repositórios de software, mesmos comandos, mesma comunidade gigante de suporte. A diferença está em cima: em vez do GNOME (a interface padrão do Ubuntu, que pede mais memória), o Lubuntu usa o LXQt, uma interface enxuta que cabe em qualquer canto.

Por ser oficial, o Lubuntu recebe atenção da Canonical, a empresa por trás do Ubuntu. Tem ciclo de lançamento previsível (versões novas a cada seis meses, e uma LTS a cada dois anos com cinco anos de suporte) e equipe própria de desenvolvedores voluntários. Não é um projeto de fim de semana: existe desde 2009 e tem milhões de usuários.

Saber o que é uma distro te ajuda a navegar no mundo Linux: quando alguém disser "uso Mint", "uso Fedora" ou "uso Arch", você vai entender que são todos primos do mesmo sistema, diferindo só no jeito de embalar o motor. E quando precisar pesquisar algum problema, lembre-se: tutoriais de Ubuntu funcionam quase 100% no Lubuntu também.`,codes:[{lang:"bash",code:`# Confirma que o Lubuntu é Ubuntu por dentro:
cat /etc/os-release
# saída resumida:
# NAME="Ubuntu"
# VERSION="26.04.1 LTS (Resolute Raccoon)"
# ID=ubuntu
# PRETTY_NAME="Ubuntu 26.04.1 LTS"
# Repare: o ID é "ubuntu", não "lubuntu". O sabor está em cima, não na base.`},{lang:"bash",code:`# Mostra qual sessão gráfica está em uso (deve aparecer LXQt):
echo "$XDG_CURRENT_DESKTOP"
# saída: LXQt

# E o servidor gráfico:
echo "$XDG_SESSION_TYPE"
# saída esperada no Lubuntu padrão: x11`},{lang:"bash",code:`# Lista de todos os "sabores oficiais" do Ubuntu (só para curiosidade):
# - Ubuntu        → GNOME, padrão, mais pesado
# - Kubuntu       → KDE Plasma, visual sofisticado
# - Xubuntu       → XFCE, leve e clássico
# - Lubuntu       → LXQt, o mais leve
# - Ubuntu MATE   → MATE, fork do GNOME 2
# - Ubuntu Budgie → Budgie, moderno
# - Ubuntu Studio → focado em produção multimídia
# - Ubuntu Kylin  → focado em chinês`},{lang:"bash",code:`# Quanto de RAM o LXQt está usando agora? (resposta vai te surpreender)
free -h
# saída exemplo:
#                total        used        free      shared  buff/cache   available
# Mem:           3.7Gi       420Mi       2.1Gi        18Mi       1.2Gi       3.0Gi
# Swap:          2.0Gi          0B       2.0Gi
# 420Mi de RAM em uso é típico do Lubuntu logo após ligar.`},{lang:"bash",code:`# Para comparar com Ubuntu padrão (GNOME), o uso de RAM costuma passar de 1.2 GiB.
# Por isso o Lubuntu brilha em máquinas com pouca memória.

# Versão do kernel Linux que está rodando:
uname -r
# saída exemplo: 7.0.0-14-generic
# O kernel é o "núcleo" do sistema — a peça que conversa com o hardware.`}],points:["Distribuição (distro) é Linux empacotado com programas e visual prontos para usar.","Lubuntu é um sabor oficial do Ubuntu, com a mesma base e suporte da Canonical.","O nome combina LXQt (interface) + Ubuntu (base): leveza no visual, robustez na fundação.","Tutoriais de Ubuntu funcionam quase sempre no Lubuntu — a base é a mesma.","Versões LTS (Long Term Support) saem de 2 em 2 anos e têm 5 anos de suporte. Prefira-as.","Iniciante comum: achar que Lubuntu é um projeto pequeno e abandonado. Tem mais de 15 anos e equipe ativa.","Iniciante comum: misturar Lubuntu com Linux Mint LXDE ou outros — são distribuições diferentes.","Em pouco mais de 400 MiB de RAM o Lubuntu já está usável; o Ubuntu padrão pede o triplo."],alerts:[{type:"info",content:"A Canonical é a empresa britânica que mantém o Ubuntu desde 2004. Não tem fins lucrativos diretos sobre os usuários domésticos: quem paga é o mercado corporativo de servidores."},{type:"tip",content:"Sempre que possível, baixe a versão LTS mais recente. Versões intermediárias (não-LTS) duram apenas 9 meses e exigem upgrade frequente."},{type:"warning",content:"Não confunda Lubuntu com Ubuntu Lite ou Ubuntu Light. Esses nomes não são oficiais e geralmente são distribuições antigas ou de terceiros."}]},{slug:"lubuntu-vs-ubuntu",section:"boas-vindas",title:"Lubuntu vs Ubuntu: qual escolher?",difficulty:"iniciante",subtitle:"Comparando o sabor leve com o sabor padrão.",intro:`Imagine entrar em um restaurante que tem dois pratos do dia: um é o tradicional completo, com várias guarnições, sobremesa e bebida. O outro é o executivo enxuto: o essencial bem feito, em prato simples. Os dois saciam a fome. A diferença é o tamanho, o tempo de espera e o preço. Ubuntu e Lubuntu são essas duas opções no menu Linux: o mesmo motor por baixo, jeitos diferentes de servir.

O Ubuntu padrão usa o GNOME, uma interface bonita e moderna, cheia de animações e atalhos. Ela é ótima em máquinas atuais (16 GiB de RAM, processador i5/Ryzen 5 ou superior). Em hardware mais antigo, vira mel grosso: tudo reage com atraso, o cooler liga sem parar e a bateria do notebook some em duas horas. O Lubuntu, com LXQt, faz a mesma coisa em uma fração dos recursos.

A escolha vai depender de três coisas: seu hardware, seu uso e seu gosto. Hardware fraco ou notebook com bateria curta? Lubuntu sem dúvida. Computador novo e quer visual moderno e integrações com nuvem? Ubuntu. Para quem só quer usar o navegador, escrever, ouvir música e ver vídeo, qualquer um dos dois entrega — e o Lubuntu sobra recurso para abrir mais abas.

A boa notícia é que mudar de ideia depois é fácil. Você pode instalar a interface do Ubuntu dentro do Lubuntu (ou vice-versa) com um único comando. Não é decisão de vida. Vamos comparar lado a lado para você escolher consciente.`,codes:[{lang:"text",code:`# Comparação rápida (números aproximados, hardware igual):

#                    Ubuntu (GNOME)      Lubuntu (LXQt)
# RAM em repouso:    1.2 - 1.8 GiB       380 - 500 MiB
# Tempo de boot:     30 - 45 segundos    18 - 25 segundos
# Bateria notebook:  ~ 4h                ~ 6h
# Tamanho da ISO:    ~ 5.7 GiB           ~ 3.0 GiB
# Animações:         abundantes          mínimas
# Aparência padrão:  moderna, "tablet"   clássica, "Windows XP-ish"`},{lang:"bash",code:`# Já no Lubuntu, dá para ver o uso de memória de um jeito amigável:
free -h --total
# saída exemplo:
#               total        used        free
# Mem:          3.7Gi       412Mi       2.1Gi
# Swap:         2.0Gi         0B        2.0Gi
# Total:        5.7Gi       412Mi       4.1Gi`},{lang:"bash",code:`# Quer experimentar o GNOME sem reinstalar? Existe pacote para isso:
sudo apt update
sudo apt install ubuntu-desktop -y
# Depois de reiniciar, na tela de login aparece um botão de engrenagem
# onde você escolhe entre LXQt e GNOME para a sessão.

# CUIDADO: instala MUITOS pacotes e ocupa cerca de 2 GiB de disco.`},{lang:"bash",code:`# Para voltar atrás (remover o GNOME e ficar só com LXQt):
sudo apt remove ubuntu-desktop ubuntu-desktop-minimal -y
sudo apt autoremove -y
# autoremove tira pacotes que ficaram órfãos depois da remoção.`},{lang:"bash",code:`# Cenário comum: notebook antigo com 4 GiB de RAM e HD (não SSD).
# Ubuntu padrão fica engasgado, o Lubuntu voa.

# Para confirmar tipo de disco:
lsblk -d -o name,rota
# rota = 1 → HD (mais lento)
# rota = 0 → SSD ou NVMe (rápido)`},{lang:"text",code:`# Regra de bolso para escolher:
# - Menos de 4 GiB de RAM        → Lubuntu sempre
# - 4 a 8 GiB e HD comum         → Lubuntu fortemente recomendado
# - 8 GiB com SSD                → qualquer um
# - 16 GiB ou mais com SSD/NVMe  → gosto pessoal
# - Notebook e bateria importa   → Lubuntu (consome menos energia)`}],points:["Mesmo núcleo (kernel) e mesmos repositórios; só muda a interface gráfica em cima.","Lubuntu consome de 3 a 4 vezes menos memória em repouso que o Ubuntu padrão.","GNOME (Ubuntu) é moderno e cheio de animações; LXQt (Lubuntu) é clássico e enxuto.","Em notebook, o Lubuntu costuma render 1-2 horas extras de bateria.","Você pode ter as duas interfaces instaladas e escolher na tela de login.","Iniciante comum: instalar Ubuntu pesado em PC velho e culpar o Linux por estar lento.","Iniciante comum: desistir do Lubuntu por achar o visual ultrapassado, sem saber que dá para personalizar.","Para servidor doméstico ou kiosk, o Lubuntu é melhor: deixa recursos livres para a tarefa-fim."],alerts:[{type:"tip",content:"Se você só vai usar o computador para internet, escritório e mídia, o Lubuntu entrega tudo sem você nem perceber a diferença visual depois de uma semana."},{type:"info",content:"Tanto Ubuntu quanto Lubuntu seguem o mesmo calendário de lançamento (.04 e .10 a cada ano, LTS no .04 a cada dois anos)."},{type:"warning",content:"Instalar mais de uma interface gráfica funciona, mas pode poluir o menu de aplicações com itens duplicados (dois gerenciadores de arquivo, dois editores de texto, etc.)."}]},{slug:"lxqt-vs-lxde",section:"boas-vindas",title:"LXQt vs LXDE: a evolução do leve",difficulty:"iniciante",subtitle:"Por que o Lubuntu trocou de interface em 2018 e o que mudou.",intro:`Toda família tem aquele primo mais velho que abriu caminho. No mundo Lubuntu, esse primo se chama LXDE (Lightweight X11 Desktop Environment). Foi a interface original do Lubuntu de 2009 a 2018. Era escrito em uma biblioteca chamada GTK 2, considerada antiga e em vias de aposentadoria. Quando a comunidade GTK começou a empurrar a versão 3 (mais pesada e diferente), o LXDE ficou em uma encruzilhada.

A solução veio em forma de fusão: o LXDE se juntou a outro projeto chamado Razor-qt (que usava Qt em vez de GTK) e nasceu o LXQt. O nome diz tudo: Lightweight X11 Qt Desktop Environment. A partir do Lubuntu 18.10, o sistema oficial passou a usar LXQt, e o LXDE foi descontinuado nessa distro. Pense na transição como trocar de carro: motor parecido, carroceria nova, painel mais moderno, mas você ainda chega ao mesmo destino.

Para quem nunca usou nenhum dos dois, a diferença prática é pequena: ambos têm barra embaixo, menu Iniciar no canto, organização tradicional. O LXQt é só um pouco mais bonito e moderno, com mais opções de configuração visuais (sem precisar editar arquivo de texto). Em consumo de RAM, são quase iguais — diferença de uns 30-50 MiB para mais no LXQt, nada que comprometa.

Saber dessa história te ajuda a entender tutoriais antigos. Se um post de 2015 fala em "lxpanel" ou "lxsession", ele é da era LXDE. Os equivalentes hoje são "lxqt-panel" e "lxqt-session". Os conceitos são iguais, só os nomes mudaram. Vamos ver como reconhecer e onde clicar para configurar cada parte.`,codes:[{lang:"bash",code:`# Confirma que está rodando LXQt (e não LXDE):
echo "$XDG_CURRENT_DESKTOP"
# saída: LXQt

# Lista os processos da sessão atual (filtrando os relevantes):
ps -e | grep -E 'lxqt|openbox'
# saída exemplo:
#   1234 ?  00:00:00 lxqt-session
#   1240 ?  00:00:00 openbox
#   1250 ?  00:00:00 lxqt-panel`},{lang:"text",code:`# Componentes do LXQt e seus equivalentes antigos no LXDE:

# LXDE (antigo)         →  LXQt (atual)
# lxpanel               →  lxqt-panel        (a barra de tarefas)
# lxsession             →  lxqt-session      (o gerenciador de sessão)
# pcmanfm               →  pcmanfm-qt        (o gerenciador de arquivos)
# lxappearance          →  lxqt-config-appearance (temas)
# lxrandr               →  lxqt-config-monitor    (monitores)
# lxterminal            →  qterminal         (o terminal padrão)`},{lang:"bash",code:`# Versão do LXQt instalada:
lxqt-about
# Abre uma janelinha com a versão (ex: LXQt 2.2.0).
# Se quiser pelo terminal:
dpkg -l lxqt-session | grep ^ii
# saída exemplo:
# ii  lxqt-session  2.2.0-1ubuntu1  amd64  LXQt Session Manager`},{lang:"bash",code:`# Por curiosidade, dá para instalar o LXDE ao lado do LXQt em um Lubuntu:
sudo apt install lxde-core
# Na tela de login, escolha "LXDE" para experimentar a interface antiga.
# Mas atenção: o LXDE não recebe mais atualizações importantes.`},{lang:"bash",code:`# A maior parte das configurações do LXQt fica em ~/.config/lxqt/
ls ~/.config/lxqt/
# saída exemplo:
# lxqt.conf  panel.conf  session.conf  globalkeyshortcuts.conf

# Esses são arquivos de texto (formato INI). Editar à mão é possível,
# mas o painel de configurações faz tudo via cliques.`}],points:["LXDE foi a interface original do Lubuntu de 2009 a 2018, escrita em GTK 2.","LXQt nasceu da fusão LXDE + Razor-qt e usa a biblioteca Qt (a mesma do KDE).","Funcionalmente são parecidíssimos — o LXQt é um pouco mais bonito e configurável.","Tutoriais antigos mencionam lxpanel/lxsession; hoje são lxqt-panel/lxqt-session.","O Openbox, gerenciador de janelas, foi mantido nos dois — ele é quem desenha as bordas das janelas.","Iniciante comum: tentar configurar com tutorial de LXDE e estranhar não achar os menus. Procure por LXQt.","Iniciante comum: instalar lxde-core no Lubuntu sem necessidade. Hoje em dia, fique no LXQt.","Os arquivos de configuração ficam em ~/.config/lxqt/ — apagar essa pasta restaura o padrão."],alerts:[{type:"info",content:"Qt e GTK são duas bibliotecas concorrentes para fazer interfaces gráficas no Linux. Qt é usada pelo KDE; GTK pelo GNOME. LXQt segue o caminho Qt, mais moderno e leve."},{type:"tip",content:"Se você curte personalizar tudo, o LXQt brilha: quase nenhuma decisão é fixa, e o painel de configurações é claro. Reserve uma tarde para explorar."},{type:"warning",content:"Não instale o LXQt em uma distro diferente esperando ficar igual ao Lubuntu. A integração com a base do Ubuntu (atualizações, drivers) é o que faz o sabor funcionar bem."}]},{slug:"hardware-recomendado",section:"boas-vindas",title:"Hardware recomendado",difficulty:"iniciante",subtitle:"O que o Lubuntu pede para rodar bem (e o que aguenta no limite).",intro:`Pense no Lubuntu como um inquilino educado: ele se acomoda no quarto pequeno se for preciso, mas se você der um quarto maior, vai usar o espaço com inteligência. Este capítulo é sobre conhecer o tamanho do quarto que você tem em casa — ou seja, as peças do seu computador — e ajustar a expectativa.

Os requisitos oficiais do Lubuntu falam em mínimos teóricos: 1 GiB de RAM e processador de 1 GHz. Na prática, com 1 GiB você abre o sistema, mas mal consegue navegar com 3 abas. O ponto doce começa em 2 GiB de RAM e fica confortável a partir de 4 GiB. Para uso pesado (várias abas, edição de imagens, vídeos), 8 GiB já é tranquilidade.

O processador importa, mas menos do que se pensa: qualquer chip dual-core de 2010 para cá roda Lubuntu sem suar. O grande herói da experiência é o disco: trocar HD mecânico por SSD muda mais a sensação de velocidade do que dobrar a RAM. Se seu PC tem HD comum, considere fortemente comprar um SSD de 240 GiB (custa pouco e revive a máquina).

Placa de vídeo e som costumam funcionar de fábrica. Wi-Fi também na maioria dos casos; eventualmente uma placa Realtek ou Broadcom mais nova pede driver extra (vamos ver isso na seção de hardware). O essencial é: olhe o que você tem antes de instalar e compare com a tabela deste capítulo. Vai te poupar surpresas.`,codes:[{lang:"bash",code:`# Veja a memória RAM total e disponível:
free -h
# saída exemplo:
#               total        used        free
# Mem:          3.7Gi       420Mi       2.1Gi
# A coluna "total" é o que importa para comparar com requisitos.`},{lang:"bash",code:`# Modelo e velocidade do processador:
lscpu | grep -E 'Model name|CPU MHz|Core'
# saída exemplo:
# Model name: Intel(R) Core(TM) i3-2310M CPU @ 2.10GHz
# CPU(s):     4
# Core(s) per socket: 2`},{lang:"bash",code:`# Tipo e tamanho do disco:
lsblk -d -o name,size,rota,model
# saída exemplo:
# NAME   SIZE  ROTA MODEL
# sda    465G  1    WDC WD5000AAKX
# rota=1 significa rotacional (HD comum, lento).
# rota=0 significa não-rotacional (SSD ou NVMe, rápido).`},{lang:"bash",code:`# Placa de vídeo (GPU):
lspci | grep -iE 'vga|3d'
# saída exemplo:
# 00:02.0 VGA compatible controller: Intel Corporation HD Graphics 3000
# Intel integrada quase sempre funciona sem instalar driver extra.`},{lang:"bash",code:`# Placa de rede sem fio (Wi-Fi):
lspci | grep -i wireless
# ou para placas USB:
lsusb | grep -i wireless

# Realtek e Broadcom às vezes pedem driver. Intel quase sempre funciona out-of-the-box.`},{lang:"text",code:`# Tabela rápida de uso esperado por hardware:

#   RAM     Disco    Cenário típico
#   1 GiB   HD       Roda, mas sofrido. Use só para um navegador leve.
#   2 GiB   HD       Razoável: navegador + escritório + música.
#   2 GiB   SSD      Bom! Sensação de leveza notável.
#   4 GiB   HD       Bom para uso geral; várias abas tranquilo.
#   4 GiB   SSD      Excelente: roda como Windows 11 num i7 atual.
#   8 GiB   SSD      Sobra recurso para tudo que um usuário comum faz.`}],points:["Mínimo confortável: 2 GiB de RAM + qualquer processador dual-core dos últimos 12 anos.","Trocar HD por SSD melhora a experiência mais do que dobrar a RAM.","Lubuntu é 64-bit por padrão desde 2018; PCs muito antigos (Pentium 4, Atom 32-bit) não rodam.","Use lscpu, free, lsblk e lspci para inventariar seu hardware antes de instalar.","Wi-Fi Realtek e Broadcom pode precisar de driver via apt; Intel funciona sozinho.","Iniciante comum: confundir os requisitos mínimos com os recomendados — 1 GiB roda, mas não é confortável.","Iniciante comum: tentar instalar em PC 32-bit moderno; o Lubuntu atual só tem ISO 64-bit.","Notebooks com bateria velha duram mais com Lubuntu por causa do menor consumo de CPU."],alerts:[{type:"tip",content:"Antes de instalar, rode o Lubuntu pelo modo Live USB (sem alterar o disco). Você vê na hora se o Wi-Fi, o som e a placa de vídeo funcionam."},{type:"warning",content:"Se seu PC tem menos de 1 GiB de RAM, considere distros ainda mais leves (antiX, Puppy Linux). Lubuntu prefere ao menos 2 GiB para uma experiência decente."},{type:"info",content:"Lubuntu não tem mais versão 32-bit oficial desde a 19.04. Se seu PC é antigo de verdade (Pentium 4 ou anterior), procure distros que ainda suportam i386."},{type:"success",content:"Um SSD de 240 GiB hoje custa pouco e revive qualquer notebook de 5-10 anos. É a melhor melhoria custo-benefício."}]},{slug:"filosofia-leveza",section:"boas-vindas",title:"A filosofia da leveza",difficulty:"iniciante",subtitle:"Por que software enxuto é bom para você, seu bolso e o planeta.",intro:`Pense em um restaurante japonês tradicional: poucos elementos no prato, cada um com propósito. Nada é decorativo, nada é desperdício. Essa é a estética que move o Lubuntu e outros sistemas leves: usar só o necessário, com elegância, e deixar de lado tudo que não agrega. Não é avareza; é design consciente.

Essa filosofia tem três pilares práticos. Primeiro, o respeito ao hardware: um PC velho não precisa ir para o lixo só porque o Windows não roda mais nele. Segundo, o respeito ao tempo: software leve abre rápido, responde rápido, não te força a esperar barra de progresso. Terceiro, o respeito ao planeta: cada PC reaproveitado é menos lixo eletrônico, e cada watt economizado em consumo é uma escolha verde.

Um Lubuntu instalado em um notebook de 2010 não é "menos" do que um Windows 11 em um Ryzen 7 atual. É outro tipo de coisa. É ferramenta para quem entende que não precisa do último modelo para escrever um e-mail, ouvir música ou estudar. É também um manifesto silencioso contra o ciclo do "compre o novo, jogue o velho fora".

E há um efeito colateral delicioso: quem aprende a viver com pouco, valoriza o muito. Você nunca mais vai aceitar que abrir o navegador demore 8 segundos. Vai querer terminal rápido, atalho de teclado em vez de mouse, configuração que dura, não atualização forçada. A leveza, depois de experimentada, vira um padrão de qualidade pessoal.`,codes:[{lang:"bash",code:`# Comprovando a leveza: tempo de boot do Lubuntu
systemd-analyze
# saída exemplo:
# Startup finished in 4.231s (kernel) + 12.840s (userspace) = 17.071s
# Em SSD, espere algo entre 8 e 20 segundos do botão até a área de trabalho.`},{lang:"bash",code:`# Detalha quais serviços demoram mais para subir:
systemd-analyze blame | head -10
# saída exemplo:
# 5.234s NetworkManager-wait-online.service
# 2.011s snapd.service
# 1.840s ...
# Esses são candidatos a desativar para um boot ainda mais rápido.`},{lang:"bash",code:`# Uso de energia em tempo real (precisa instalar):
sudo apt install powertop -y
sudo powertop
# Mostra quanto cada processo consome em watts.
# Notebooks com Lubuntu costumam ficar abaixo de 6W em uso leve.`},{lang:"bash",code:`# Comparação prática: quanto pesa o navegador padrão (Firefox)?
# Abra o Firefox, depois rode:
ps aux --sort=-%mem | head -5
# saída exemplo:
# USER   PID  %CPU %MEM    VSZ   RSS COMMAND
# ana   3120  3.2  18.0 ...   720MB firefox
# Mesmo o Firefox sozinho usa mais RAM que o Lubuntu inteiro.`},{lang:"text",code:`# Princípios práticos da filosofia leve, para você adotar no dia a dia:

# 1. Instale só o que vai usar. Cada programa é um peso.
# 2. Prefira atalho de teclado a clique. Mais rápido, menos energia.
# 3. Mantenha a área de trabalho vazia. Ícones consomem RAM (sim, pouca, mas consomem).
# 4. Desinstale o que parou de usar. Não acumule "por garantia".
# 5. Atualize, mas com calma. Versão LTS dura cinco anos: não há pressa.`}],points:["Leveza não é falta: é decisão consciente de usar só o que é útil.","Hardware antigo + Lubuntu = vida útil estendida e menos lixo eletrônico.","Software leve respeita seu tempo: aplicativos abrem em 1-2 segundos em vez de 10.","Notebooks rodam mais frios e duram mais bateria com sistemas enxutos.","Adotar a filosofia leve melhora o senso crítico para todo software que você usa.","Iniciante comum: encher o Lubuntu de programas pesados achando que precisa de tudo. Vá adicionando só o que falta.","Iniciante comum: comparar o Lubuntu com o Windows 11 em recursos visuais. São objetivos diferentes.","Use systemd-analyze, free e powertop para medir e provar a leveza no seu hardware."],alerts:[{type:"success",content:"Reaproveitar um PC velho para um familiar (sua avó usar o WhatsApp Web, sua sobrinha estudar) é uma das melhores aplicações do Lubuntu."},{type:"info",content:"A pegada de carbono de fabricar um PC novo equivale a anos de uso intenso. Estender a vida do que você já tem é ambientalmente significativo."},{type:"tip",content:"Quando avaliar um programa novo, pergunte: ele resolve um problema real meu, ou só parece interessante? Recusar 'mais um' é um superpoder."}]},{slug:"comunidade-ajuda",section:"boas-vindas",title:"Comunidade e onde pedir ajuda",difficulty:"iniciante",subtitle:"Os lugares certos para tirar dúvidas sem ser hostilizado.",intro:`Linux tem fama de comunidade brava, e em parte é verdade — mas só em parte. Existem cantos onde você é bem recebido, sua dúvida é levada a sério e a resposta vem em horas. O segredo é saber para onde ir, como perguntar e o que esperar. Este capítulo é o seu mapa: onde fica cada balcão, quem atende e qual o tom da casa.

Pense na comunidade Linux como uma cidade grande. Tem o fórum oficial (a prefeitura), o Reddit (a praça pública), o Discord (o bar), o Stack Exchange (a biblioteca técnica), o Telegram em português (a roda de conversa do bairro) e o IRC (o porão antigo, ainda ativo). Cada lugar tem seu jeito. Postar pergunta de iniciante no IRC pode parecer falar inglês com formal demais; o mesmo no Reddit funciona como uma conversa amigável.

A regra de ouro para ser bem recebido em qualquer canto é: descreva o problema com detalhes (o que você esperava, o que aconteceu, qual a mensagem de erro EXATA), diga qual é sua versão de Lubuntu, mostre que você tentou pesquisar antes. Pessoas voluntárias respondem por amor — facilite a vida delas e você terá gente disputando para te ajudar.

Você também pode (e deve) pedir ajuda em português. A comunidade brasileira é ativa, especialmente no Telegram e em fóruns como o Diolinux Plus. Para temas mais técnicos, o inglês ainda dá mais retorno (é a língua franca do mundo Linux), mas iniciante começa em casa, na sua língua.`,codes:[{lang:"text",code:`# Mapa rápido: onde perguntar (e onde NÃO perguntar como iniciante)

# BOM PARA INICIANTE:
# - r/Lubuntu no Reddit          (inglês, pessoal e amigável)
# - r/linux4noobs no Reddit      (inglês, focado em iniciantes)
# - Telegram "Linux Brasil"      (português, ativo)
# - Diolinux Plus (forum.diolinux.com.br) (português)
# - Discord oficial Lubuntu      (inglês, resposta rápida)

# MELHOR ESPERAR ALGUNS MESES:
# - askubuntu.com  (técnico, exige boa pergunta)
# - Lubuntu Discourse (discuss.lubuntu.me, oficial em inglês)
# - IRC #lubuntu na Libera.Chat  (cultura mais formal)`},{lang:"text",code:`# Modelo de pergunta que funciona em qualquer comunidade:

# Título: Wi-Fi não conecta no Lubuntu 26.04 (Realtek RTL8821CE)
#
# Corpo:
# Olá! Instalei o Lubuntu 26.04 num notebook Acer Aspire 5.
# O Wi-Fi aparece desligado e não consigo ativar.
# Pelo cabo de rede funciona normal.
#
# O que eu tentei:
# - Reiniciar
# - sudo modprobe rtl8821ce  → "Module rtl8821ce not found"
# - Verifiquei no lspci que a placa é Realtek RTL8821CE
#
# Saída de comandos:
# (cole aqui a saída de lspci -knn | grep -iA 3 net)
#
# Versão: Lubuntu 26.04.1 LTS, kernel 7.0.0-14-generic
# Obrigado!`},{lang:"bash",code:`# Antes de pedir ajuda, junte informações úteis com um único comando:
inxi -Fxz
# Se não tiver, instale: sudo apt install inxi -y
# Mostra: hardware, kernel, drivers, rede, tudo de uma vez.
# Cole no post (mas remova endereço MAC e IP por privacidade).`},{lang:"bash",code:`# Outra forma de coletar dados rapidamente:
journalctl -p err -b
# Mostra os erros desde o último boot.
# Útil quando algo "não funciona" mas você não sabe explicar o quê.`},{lang:"text",code:`# Etiqueta de quem pede ajuda (vale ouro):

# - Pesquise antes. "Como instalar Lubuntu" tem 50 tutoriais prontos.
# - Diga sua versão (lsb_release -a) e seu hardware.
# - Cole o erro EXATO, não parafraseie. Aspas e maiúsculas importam.
# - Não escreva em CAIXA ALTA, não use "URGENTE!!!".
# - Volte para responder se a solução funcionou. Ajuda os próximos.
# - Diga "obrigado" — voluntário trabalha de graça.`},{lang:"bash",code:`# Se a documentação oficial te assusta, lembre que ela está em:
# - help.ubuntu.com         (geral do Ubuntu, vale para Lubuntu)
# - manual.lubuntu.me       (manual oficial em PDF)
# - wiki.lubuntu.me         (dicas e solução de problemas)

# E você pode abrir manuais de comandos no terminal:
man ls    # documentação do comando ls
# Aperte q para sair, / para buscar dentro.`}],points:["Existe comunidade hospitaleira: escolha o lugar certo para o seu nível.","Reddit (r/Lubuntu, r/linux4noobs) e Telegram brasileiro são os mais amigáveis para iniciantes.","Pergunta bem feita = problema descrito + o que você tentou + saída de comandos relevantes.","Use inxi -Fxz para gerar um diagnóstico completo do sistema antes de pedir ajuda.","Pesquisar antes (Google, askubuntu) economiza tempo seu e dos voluntários.","Iniciante comum: postar 'não funciona' sem dizer o quê, qual versão, qual erro. Ninguém adivinha.","Iniciante comum: ofender quem tentou ajudar quando a resposta não resolveu. Agradeça e dê detalhes adicionais.","Linux tem documentação enorme: man, --help e a wiki oficial respondem 80% das dúvidas técnicas."],alerts:[{type:"tip",content:"Sempre que um comando der erro, tente rodá-lo com --help ou consultar 'man comando' antes de perguntar. A resposta costuma estar lá."},{type:"warning",content:"Cuidado ao colar comandos sugeridos por estranhos sem entender. Algumas 'soluções' em fóruns aleatórios são destrutivas (ex: rm -rf /*)."},{type:"info",content:"O canal oficial do Lubuntu no Discord (link em lubuntu.me/links) tem voluntários respondendo em poucos minutos durante o horário americano."},{type:"success",content:"Quando você dominar algo, volte e responda perguntas de outros iniciantes. É assim que a comunidade Linux se sustenta há décadas."}]}],Tq=[{slug:"baixar-iso",section:"instalacao",title:"Baixando a ISO oficial do Lubuntu",difficulty:"iniciante",subtitle:"Onde encontrar, qual versão escolher e como confirmar que o arquivo veio inteiro.",intro:'Antes de instalar o Lubuntu no seu computador, você precisa baixar o "molde" do sistema. Esse molde é um arquivo único, grandinho (uns 2 a 3 GB), com a extensão `.iso`. Pense nele como a fotografia de um CD de instalação: tem tudo lá dentro, do instalador aos programas que vêm de fábrica. A partir desse arquivo a gente vai gravar um pendrive nos próximos capítulos.\n\nA primeira regra de ouro é: baixe sempre do site oficial. Existe muito site espelhando ISOs alteradas com vírus ou cripto-mineradores escondidos. O endereço certo é `lubuntu.me/downloads`. Lá você encontra duas famílias de versões: as LTS (Long Term Support, com 3 a 5 anos de suporte) e as interim (lançadas a cada 6 meses, suporte de só 9 meses). Para iniciantes, sempre escolha a LTS — você atualiza menos e quebra menos coisa.\n\nDepois de baixar, vem um passo que quase ninguém faz e por isso muita gente acaba com pendrive corrompido: conferir o checksum. É um número longo (tipo um RG do arquivo) que o site publica. Você gera o mesmo número no seu computador e compara. Se bateu, o download veio inteiro. Se não bateu, baixe de novo — uma ISO incompleta dá erro estranho lá na frente, na hora que você menos espera.\n\nAo final deste capítulo você vai ter no computador um arquivo tipo `lubuntu-26.04.1-desktop-amd64.iso` validado, pronto para o pendrive. Esse pequeno cuidado de cinco minutos evita horas de dor de cabeça depois.',codes:[{lang:"bash",code:`# Endereço oficial — abra no navegador:
# https://lubuntu.me/downloads/

# Escolha:
#   - Versão LTS (ex.: 26.04.x LTS) — recomendada
#   - Arquitetura amd64 — para 99% dos PCs/notebooks
#   - Formato Desktop ISO

# Você vai baixar algo como:
#   lubuntu-26.04.1-desktop-amd64.iso   (~2.5 GB)`},{lang:"bash",code:`# No Lubuntu/Ubuntu/Linux, baixe pelo terminal com wget
# (útil se sua conexão cai e você quer retomar de onde parou)

wget -c https://cdimage.ubuntu.com/lubuntu/releases/26.04.1/release/lubuntu-26.04.1-desktop-amd64.iso
# -c = continue: retoma o download interrompido

# Liste para confirmar:
ls -lh lubuntu-*.iso
# saída: -rw-r--r-- 1 voce voce 2.5G out  3 14:22 lubuntu-26.04.1-desktop-amd64.iso`},{lang:"bash",code:`# No Windows (PowerShell), use Invoke-WebRequest
Invoke-WebRequest -Uri "https://cdimage.ubuntu.com/lubuntu/releases/26.04.1/release/lubuntu-26.04.1-desktop-amd64.iso" -OutFile "lubuntu.iso"

# Ou simplesmente clique no link do site e use o navegador.
# Resultado: arquivo salvo na pasta Downloads.`},{lang:"bash",code:`# Conferindo o checksum SHA256 — o "RG" do arquivo
# 1) Baixe o arquivo SHA256SUMS na mesma pasta da ISO:
wget https://cdimage.ubuntu.com/lubuntu/releases/26.04.1/release/SHA256SUMS

# 2) Rode o comando de verificação:
sha256sum -c SHA256SUMS --ignore-missing
# saída esperada:
# lubuntu-26.04.1-desktop-amd64.iso: OK

# Se aparecer "FAILED", baixe a ISO novamente.`},{lang:"bash",code:`# No Windows, gere o SHA256 com PowerShell e compare na mão
Get-FileHash .\\lubuntu.iso -Algorithm SHA256
# saída:
# Hash             : 9F3A...B12C
# Path             : C:\\Users\\voce\\Downloads\\lubuntu.iso

# Abra o arquivo SHA256SUMS no Bloco de Notas e procure
# pela linha que termina com o nome da sua ISO.
# Os 64 caracteres precisam ser idênticos (a caixa não importa).`},{lang:"bash",code:`# Não tem certeza se seu PC é 32 ou 64 bits?
# No Linux:
uname -m
# x86_64 = 64 bits → use a ISO amd64
# i686 ou i386 = 32 bits → o Lubuntu moderno NÃO suporta mais

# No Windows: clique direito em "Este Computador" → Propriedades
# Procure "Tipo de sistema": 64 bits = amd64`}],points:["Sempre baixe a ISO de lubuntu.me/downloads — nunca de sites espelhados sem revisão.","Prefira versões LTS: 3 anos de suporte oficial, atualizações de segurança garantidas.","amd64 é a arquitetura para PCs modernos (64 bits) — Lubuntu não roda mais em 32 bits.","Conferir o SHA256 confirma que o arquivo não está corrompido nem adulterado.","wget -c retoma downloads interrompidos sem precisar começar do zero.","Uma ISO de 2.5 GB demora cerca de 10 minutos numa conexão de 50 Mbps.","Iniciante comum: baixar versão interim (não-LTS) e ter que reinstalar em 9 meses.","Iniciante comum: pular a verificação do SHA256 e enfrentar erros estranhos no instalador."],alerts:[{type:"warning",content:"Não baixe ISOs de blogs ou sites que prometem 'Lubuntu turbinado' ou 'modificado'. Eles costumam vir com mineradores ocultos ou drivers desatualizados."},{type:"tip",content:"Se sua conexão for lenta, baixe via torrent na própria página de downloads. É mais rápido em horário de pico e geralmente já valida o checksum sozinho."},{type:"info",content:"A versão LTS atual (em 2026+) é a 26.04. O número antes do ponto é o ano (2026) e depois é o mês (abril). LTSs sempre saem em abril de anos pares."},{type:"danger",content:"Se o sha256sum acusar FAILED, NÃO grave o pendrive. Uma ISO corrompida pode parecer instalar mas deixa o sistema com bugs sutis impossíveis de diagnosticar depois."}]},{slug:"criar-pendrive",section:"instalacao",title:"Criando o pendrive bootável",difficulty:"iniciante",subtitle:"Gravando a ISO em um pendrive para iniciar a instalação.",intro:`Ter a ISO baixada não é suficiente: o computador não sabe rodar uma instalação a partir de um arquivo solto no HD. Ele precisa "iniciar" (dar boot) a partir de um disco que tenha o instalador na sua estrutura especial. Hoje em dia, ninguém mais usa CD ou DVD para isso — todo mundo grava a ISO em um pendrive e usa o pendrive como se fosse um disco de instalação.

Pense no pendrive como uma cápsula de cinema antigo: ele vai ter o filme inteiro do Lubuntu lá dentro, e o computador vai "passar" esse filme assim que você ligar com ele plugado. Para gravar, você não pode simplesmente arrastar o arquivo .iso para o pendrive — isso não funciona. Você precisa de um programa especial que grava bit a bit, transformando o pendrive em um clone do disco de instalação.

Os dois programas mais usados são o Rufus (Windows, gratuito e em português) e o balenaEtcher (Windows, macOS e Linux, interface bonita e simples). Os dois fazem o mesmo trabalho. Quem já está no Linux tem ainda uma opção poderosa: o comando \`dd\`, que vem instalado de fábrica e grava em uma linha só — mas com uma armadilha terrível: se errar a letra do dispositivo, apaga o seu HD.

Você vai precisar de um pendrive de pelo menos 4 GB (8 GB ou mais é o recomendado em 2024+). Ele vai ser totalmente apagado no processo, então salve qualquer coisa importante antes. Ao final, você terá um pendrive que ao ser plugado em qualquer PC compatível dá boot direto no Lubuntu.`,codes:[{lang:"bash",code:`# Windows: usando o Rufus (recomendado)
# 1) Baixe em https://rufus.ie  (versão Portable serve)
# 2) Plugue o pendrive (mínimo 4 GB; será FORMATADO)
# 3) Abra o Rufus e configure:
#    - Dispositivo: seu pendrive (CONFIRA a letra!)
#    - Seleção de boot: clique SELECIONAR e aponte a ISO
#    - Esquema de partição: GPT (UEFI moderno) ou MBR (PC antigo)
#    - Sistema-alvo: UEFI (não-CSM) ou BIOS, conforme o caso
# 4) Clique INICIAR
# 5) Quando perguntar "modo ISO ou DD", escolha ISO Image (recomendado)
# 6) Aceite o aviso de que tudo será apagado
# Tempo: 5 a 10 minutos`},{lang:"bash",code:`# Linux/macOS: balenaEtcher (interface gráfica simples)
# Baixe em https://etcher.balena.io
# Fluxo:
# 1) Flash from file → escolha a ISO do Lubuntu
# 2) Select target → escolha o pendrive
# 3) Flash!
# O Etcher já valida o pendrive depois de gravar (importante!)`},{lang:"bash",code:`# Linux: gravando com dd (rápido e poderoso, mas perigoso)
# 1) PRIMEIRO descubra o nome correto do pendrive:
lsblk
# Vai mostrar algo como:
# NAME   SIZE TYPE MOUNTPOINT
# sda    500G disk           ← seu HD interno (NÃO TOCAR!)
# sdb    8G   disk           ← seu pendrive
# sdb1   8G   part /media/voce/UFD

# 2) Desmonte o pendrive antes de gravar:
sudo umount /dev/sdb1

# 3) Grave a ISO (CONFIRA o /dev/sdX duas vezes!)
sudo dd if=lubuntu-26.04.1-desktop-amd64.iso of=/dev/sdb bs=4M status=progress conv=fsync

# saída durante a execução:
# 2516582400 bytes (2.5 GB, 2.3 GiB) copied, 180 s, 14.0 MB/s`},{lang:"bash",code:`# Atenção ao alvo do dd:
# of=/dev/sdb     ✓ correto: o disco inteiro
# of=/dev/sdb1    ✗ errado: só uma partição (não dá boot)
# of=/dev/sda     ✗✗ DESASTRE: apaga seu HD interno

# Por isso o dd ganhou o apelido de "disk destroyer".
# Sempre confirme com lsblk antes.`},{lang:"bash",code:`# Depois de gravar, no Linux ejete com segurança:
sudo eject /dev/sdb
# ou no LXQt: clique direito no ícone do pendrive → Ejetar

# No Windows: ícone "remover hardware com segurança" na bandeja.
# No macOS: arraste o ícone do pendrive para a Lixeira (vira ejetar).

# Não puxe o pendrive sem ejetar — pode deixar dados pela metade.`},{lang:"bash",code:`# Como saber se o pendrive ficou bootável de verdade?
# Reinicie o PC com ele plugado e entre no menu de boot.
# Teclas comuns para o menu de boot (varia por fabricante):
#   F12 → Dell, Lenovo, Toshiba
#   F9  → HP
#   F10 → ASUS
#   F11 → MSI
#   ESC → Acer, alguns Samsung
# Se aparecer "UEFI: SanDisk..." na lista, deu certo!`}],points:["Não dá para arrastar a ISO para o pendrive — precisa gravar com programa especial.","Rufus (Windows), balenaEtcher (multi-plataforma) e dd (Linux) são as três opções.","Pendrive de 4 GB é o mínimo, 8 GB recomendado para folga no caching.","O processo APAGA tudo do pendrive — salve antes o que estiver lá.","No dd, errar a letra do device pode apagar seu HD interno inteiro.","Sempre confirme o dispositivo com lsblk antes de rodar dd.","Iniciante comum: gravar em /dev/sdb1 em vez de /dev/sdb e o pendrive não dá boot.","Iniciante comum: puxar o pendrive sem ejetar e ele ficar com gravação incompleta."],alerts:[{type:"danger",content:"O dd não pede confirmação. Se você digitar /dev/sda no lugar de /dev/sdb, ele apaga o HD principal sem aviso. Use lsblk antes e respire fundo antes de Enter."},{type:"tip",content:"Tem mais de um pendrive? Tire todos da USB, plugue só o que vai gravar e rode lsblk. Assim você tem certeza de qual letra é a dele."},{type:"info",content:"O Rufus pergunta entre 'Modo ISO' e 'Modo DD'. Para Lubuntu, ISO funciona em quase todo PC moderno. Só use DD se o ISO não der boot."},{type:"warning",content:"Pendrives muito antigos ou de marca duvidosa podem gravar e parecer ok, mas falhar no meio da instalação. Se der erro estranho, teste com outro pendrive."}]},{slug:"requisitos-minimos",section:"instalacao",title:"Requisitos mínimos e recomendados",difficulty:"iniciante",subtitle:"O que seu computador precisa para rodar o Lubuntu de boa.",intro:`Uma das maiores famas do Lubuntu é "rodar em qualquer coisa". Isso é meio verdade e meio mito. O Lubuntu é bem mais leve que o Windows 11 ou que o Ubuntu padrão, mas ele ainda exige um mínimo. Antes de instalar, vale conferir se a sua máquina entra na faixa — assim você evita a frustração de instalar e perceber que tudo trava.

Pense nos requisitos como cardápio: tem o "sobreviver" (mínimo, dá pra usar mas vai engasgar), o "comer bem" (recomendado, fluidez no dia a dia) e o "banquete" (folgado, tudo voa). Cada um serve a um perfil de uso. Se você só vai navegar e escrever no LibreOffice, o mínimo basta. Se quer assistir vídeo em HD e ter dezenas de abas abertas, mire no recomendado.

A versão atual (26.04 LTS) parou de suportar processadores 32 bits — isso significa que máquinas muito antigas (Pentium 4, Athlon XP da década de 2000) estão fora. Para essas, existem distros ainda mais antigas tipo Bodhi Linux ou antiX. Para qualquer coisa de 2008 em diante (Core 2 Duo, Athlon 64), o Lubuntu moderno funciona.

Neste capítulo você vai aprender a descobrir os números do seu PC (quantos GB de RAM, qual processador, quanto espaço em disco) tanto pelo Windows quanto por dentro do Lubuntu Live. Com essa informação, dá para decidir com calma se vale instalar, e se vale, qual a expectativa de desempenho.`,codes:[{lang:"text",code:`# Requisitos do Lubuntu 26.04 LTS

# MÍNIMO ABSOLUTO (vai mancar, mas roda):
#   CPU: 64 bits, qualquer (ex.: Core 2 Duo)
#   RAM: 1 GB
#   Disco: 25 GB
#   Vídeo: VGA 1024×768

# RECOMENDADO (uso confortável):
#   CPU: dual-core 1.6 GHz+ (Core i3, Athlon X2 da era 2010+)
#   RAM: 4 GB
#   Disco: 30 GB SSD (HD comum também serve)
#   Vídeo: GPU integrada Intel/AMD/NVIDIA

# IDEAL (folgado, navega com 30 abas):
#   CPU: quad-core 2 GHz+
#   RAM: 8 GB
#   Disco: 60 GB SSD`},{lang:"bash",code:`# No Windows, descubra a configuração rapidinho:
# Atalho: tecla Windows + R, digite msinfo32, Enter

# Ou pelo PowerShell:
systeminfo | findstr /C:"Memória física" /C:"Processador" /C:"Sistema"
# saída:
# Processador(es): Intel(R) Core(TM) i3-3220 CPU @ 3.30GHz
# Memória física total: 4.096 MB
# Tipo do sistema: x64-based PC`},{lang:"bash",code:`# Já no Lubuntu Live (capítulo "testar-live"), pelo terminal:

# Quanto de RAM?
free -h
# saída:
#               total        used        free
# Mem:          3.7Gi       890Mi       2.1Gi   ← total ~4 GB

# Qual o processador?
lscpu | head -20
# Mostra modelo, núcleos, velocidade

# Disco disponível?
lsblk
# Mostra todos os discos e tamanhos`},{lang:"bash",code:`# Verificando se a CPU é 64 bits (obrigatório no 26.04+)
lscpu | grep "Modo(s) operacional"
# Modo(s) operacional da CPU: 32-bit, 64-bit
# Se aparecer só "32-bit", o Lubuntu moderno não vai instalar.

# Alternativa em uma linha:
uname -m
# x86_64 = 64 bits ✓
# i686   = 32 bits ✗`},{lang:"bash",code:`# Quanto espaço o sistema vai ocupar realmente?
# Após instalação limpa do Lubuntu 26.04:
#   ~7-8 GB no disco (raiz /)
#   ~500 MB de swap recomendado (ou zram, ver capítulo de hardware)
#   resto vira sua /home

# Reserve no mínimo 25 GB para ter folga para atualizações,
# arquivos pessoais e instalar uns programas extras.`},{lang:"bash",code:`# Teste de "sobrevive ou não" rápido na live:
# Abra 3 ou 4 programas:
qterminal &
firefox &
libreoffice --calc &
pcmanfm-qt &

# Em outro terminal, monitore RAM:
watch -n 1 free -h
# Se "available" cair abaixo de 100 MB, sua RAM está estourando.`}],points:["1 GB de RAM é o mínimo absoluto; 4 GB é onde a experiência vira agradável.","CPU precisa ser 64 bits no Lubuntu 26.04 LTS — máquinas antes de 2008 podem não servir.","25 GB de disco bastam, mas 30+ GB dá folga para o sistema crescer com atualizações.","SSD não é exigido, mas troca o Lubuntu de 'rápido' para 'instantâneo'.","GPU integrada Intel/AMD funciona out-of-the-box; NVIDIA pode precisar driver extra.","free -h e lscpu mostram a config do PC dentro do Lubuntu Live, antes de instalar.","Iniciante comum: tentar Lubuntu moderno em PC 32 bits e ficar confuso com a recusa do instalador.","Iniciante comum: deixar 8 GB de partição para o sistema e ficar sem espaço em 2 meses."],alerts:[{type:"info",content:"Para máquinas com menos de 1 GB de RAM, considere o Bodhi Linux, antiX ou Puppy Linux. Eles são ainda mais leves que o Lubuntu moderno."},{type:"tip",content:"Se o seu PC tem HD mecânico, instalar um SSD de 240 GB (custa pouco em 2024) faz mais diferença que qualquer outra mudança. O boot cai de 1 minuto para 15 segundos."},{type:"warning",content:"Cuidado com 'PCs gamer' antigos com placa NVIDIA: podem precisar de driver proprietário, que é fácil de instalar mas não vem ativo de fábrica."}]},{slug:"testar-live",section:"instalacao",title:"Testando no modo Live (sem instalar)",difficulty:"iniciante",subtitle:"Rodar o Lubuntu inteiro a partir do pendrive, antes de tocar no HD.",intro:`Uma das características mais bonitas das distros modernas de Linux é o "modo live": você pode rodar o sistema inteiro a partir do pendrive, sem instalar nada, sem mexer em nada do que já está no HD. É como dirigir um carro na concessionária antes de comprar. Tudo funciona — internet, programas, arquivos — só que tudo vive na RAM e some quando você desliga.

Isso serve para três coisas importantes. Primeiro, validar que o hardware funciona: se o Wi-Fi pega na live, vai pegar instalado. Se o som sai, está tudo certo. Segundo, conhecer a interface antes de comprometer o disco. Terceiro, resgatar arquivos de um Windows que não dá mais boot — você inicia pelo Lubuntu Live, abre o gerenciador de arquivos e copia tudo para um HD externo.

Para entrar na live, você reinicia o PC com o pendrive plugado e aciona o "menu de boot" (uma tecla específica que muda por fabricante). Aparece uma lista de dispositivos; você escolhe o pendrive. Em segundos você vê o logotipo do Lubuntu e cai numa área de trabalho funcional, com o instalador disponível como atalho na própria área.

Cuidado: como tudo vive na RAM, a live é mais lenta que o sistema instalado. Pendrive USB 2.0 piora isso. Não tire conclusões de desempenho pelo modo live — espere instalar para julgar.`,codes:[{lang:"text",code:`# Teclas mais comuns para abrir o "menu de boot"
# (apertar repetidamente assim que liga o PC)

# Dell, Lenovo, Toshiba .......... F12
# HP ............................. F9 ou Esc
# ASUS ........................... F8 ou Esc
# MSI ............................ F11
# Acer ........................... F12 (pode precisar habilitar)
# Samsung ........................ F12 ou Esc
# Apple Mac ...................... segurar Option (⌥) ao ligar
# Genérico/clones ................ F12, F11, F10, F9, F8, Esc

# No menu, escolha algo como:
#   "UEFI: SanDisk..."   ← preferir UEFI se aparecer
#   "USB-HDD" ou "USB Flash"`},{lang:"text",code:`# Ao iniciar pelo pendrive, aparece o menu do Lubuntu:
#
#   Try or Install Lubuntu              ← escolha esta opção
#   Test memory
#   Boot from local disk
#
# Aperte Enter. Em ~30 segundos cai na área de trabalho.
# Aparece um ícone "Install Lubuntu 26.04 LTS" na área —
# por enquanto IGNORE: estamos só testando.`},{lang:"bash",code:`# Já dentro do Lubuntu Live, abra o terminal (QTerminal)
# pelo menu ou com Ctrl+Alt+T e teste:

# Ver versão do kernel (confirma que é mesmo o Live):
uname -r
# saída: 7.0.0-XX-generic

# Ver o nome do sistema:
lsb_release -a
# Description: Ubuntu 26.04.x LTS
# (sim, ele se identifica como Ubuntu — Lubuntu é um sabor)`},{lang:"bash",code:`# Checklist de validação na live:
# 1) Wi-Fi: clique no ícone de rede no canto inferior direito
#    Conecte na sua rede e teste:
ping -c 3 google.com
# 64 bytes from ... time=22 ms

# 2) Som: abra qualquer vídeo no Firefox e ouça
# 3) Vídeo: abra um vídeo no YouTube em 1080p; deve rodar
# 4) Touchpad/teclado: digite e movimente — tudo responde?
# 5) Brilho da tela: teclas Fn funcionam?`},{lang:"bash",code:`# Resgatar arquivos de um Windows quebrado
# (use case clássico do Live)

# Liste os discos:
lsblk
# Vai aparecer algo como:
# nvme0n1p3   200G part           ← disco do Windows
#
# Crie um ponto de montagem e monte:
sudo mkdir /mnt/windows
sudo mount /dev/nvme0n1p3 /mnt/windows

# Acesse pelo gerenciador de arquivos (PCManFM-Qt)
# em /mnt/windows/Users/SeuNome/...
# Copie para um HD externo plugado.`},{lang:"text",code:`# Atenção: tudo que você fizer no Live some ao desligar.
# Configurações, downloads, senhas — todos voláteis.
# Para algo persistente, instale (próximo capítulo)
# ou crie um pendrive persistente (capítulo do final do livro).

# Para sair: menu → Logout → Shutdown
# Retire o pendrive QUANDO o PC pedir, antes de religar.`}],points:["Modo Live roda o sistema todo a partir do pendrive, sem instalar nada.","Serve para testar hardware, conhecer a interface e resgatar arquivos.","A tecla do menu de boot varia por fabricante — F12, F9, F10, F11, Esc são as mais comuns.","Tudo vive na RAM no Live: configurações somem ao desligar.","Live é mais lenta que sistema instalado — não use desempenho aqui como referência.","Wi-Fi, som, vídeo e touchpad: se funcionarem na live, vão funcionar instalados.","Iniciante comum: tirar o pendrive antes de o PC desligar e travar o sistema vivo.","Iniciante comum: achar que está lento por culpa do Lubuntu, quando é o pendrive USB 2.0."],alerts:[{type:"tip",content:"Antes de instalar, passe pelo menos 15 minutos na live testando o que você usa no dia a dia. Se algo crítico não funciona, é melhor descobrir agora."},{type:"warning",content:"Não confie em senhas salvas ou bookmarks na sessão Live. Se desligar o PC sem exportar, perde tudo. Use apenas para teste."},{type:"info",content:"Em alguns notebooks com Secure Boot ativo, o pendrive pode não aparecer no menu de boot. Veja o capítulo 'Instalação completa' para como desativar temporariamente."},{type:"success",content:"O modo Live é uma das vantagens mais subestimadas do Linux. Carregue um pendrive Lubuntu sempre — ele já salvou a vida de muita gente que perdeu o boot do Windows."}]},{slug:"instalacao-completa",section:"instalacao",title:"Instalação completa do Lubuntu",difficulty:"iniciante",subtitle:"Passo a passo do instalador Calamares — do idioma ao primeiro login.",intro:`Chegou a hora. Você baixou a ISO, gravou o pendrive, testou na live e gostou. Agora vamos instalar o Lubuntu de verdade no HD ou SSD. O instalador do Lubuntu chama Calamares — uma interface gráfica clara, em português, que faz quase tudo sozinha. Em uma máquina razoável, o processo inteiro dura entre 10 e 20 minutos.

Pense no Calamares como o assistente de um cartório: ele te faz perguntas (idioma, fuso, qual disco usar, qual seu nome), confere os documentos (verifica que tem espaço, que a partição está saudável) e ao final entrega o sistema pronto. As perguntas são poucas e podem ser respondidas com calma — ele só executa de verdade depois que você revisa tudo na última tela.

Você tem três cenários comuns de instalação: 1) máquina vazia ou que vai virar 100% Lubuntu (caminho mais simples); 2) instalar ao lado do Windows existente (dual boot, próximo capítulo); 3) particionamento manual para usuários avançados (capítulo dedicado). Neste vamos focar no cenário 1, que é o tranquilo.

Antes de começar, três cuidados. Primeiro: faça backup. Mesmo na opção "use o disco inteiro", erros podem acontecer. Segundo: ligue o notebook na tomada — se a bateria acabar no meio, você fica com um sistema pela metade impossível de bootar. Terceiro: tenha conexão com a internet, opcional mas muito recomendada — assim o instalador já baixa as atualizações de segurança e os codecs no mesmo passo.`,codes:[{lang:"text",code:`# Passo 1: inicie pela live (capítulo anterior)
# Passo 2: na área de trabalho, clique duas vezes em
#          "Install Lubuntu 26.04 LTS"
# Passo 3: o Calamares abre. Você vai passar por estas telas:
#
#   1. Boas-vindas (idioma)
#   2. Localização (mapa-múndi para o fuso)
#   3. Layout do teclado
#   4. Partições (PRINCIPAL — escolha do disco)
#   5. Usuários (nome, login, senha)
#   6. Resumo (revise tudo!)
#   7. Instalação (barra de progresso)
#   8. Reinicializar`},{lang:"text",code:`# Tela 1 — Idioma
# Selecione "Português - Brasil" e clique Próximo.
# Toda a interface a partir daqui fica em PT-BR.

# Tela 2 — Localização
# Clique no Brasil no mapa, depois selecione sua cidade
# (São Paulo, Brasília, etc.) para o fuso horário.
# Formato regional: pt_BR — define moeda, data, separador decimal.`},{lang:"text",code:`# Tela 3 — Teclado
# Layout mais comum no Brasil: Portuguese (Brazil) ABNT2
# Para teclado sem cedilha visível (notebooks): ABNT
# Teste digitando ç, ã, ´a no campo de teste no rodapé.

# Se ç sai como Ç ou não sai: você escolheu errado.
# Volte e tente "Portuguese (Brazil), Eliminate dead keys"`},{lang:"text",code:`# Tela 4 — Partições (CUIDADO! É aqui que pode dar M)
#
# Opções típicas:
#   ◉ Apagar disco             ← USA O DISCO TODO. Apaga tudo.
#   ○ Instalar lado a lado     ← dual boot (próximo capítulo)
#   ○ Substituir uma partição  ← reaproveita partição existente
#   ○ Particionamento manual   ← controle total (capítulo dedicado)
#
# Para HD/SSD VAZIO ou que vai virar só Lubuntu:
# escolha "Apagar disco".
# Marque "Criar arquivo de troca (swap)" — recomendado.
# Sistema de arquivos: ext4 (padrão, deixe assim).`},{lang:"text",code:`# Tela 5 — Usuários
# Seu nome:        Maria Silva
# Nome do login:   maria          ← minúsculas, sem espaço/acento
# Nome do PC:      maria-laptop   ← aparece em redes e terminais
# Senha:           ••••••••       (mín. 8 caracteres é boa prática)
# Confirme senha:  ••••••••
# ☐ Login automático sem senha   ← NÃO marque (insegurança)
# ☑ Pedir senha para tarefas administrativas (sudo)

# Anote a senha em local seguro. Sem ela, você não instala
# nada nem atualiza o sistema.`},{lang:"text",code:`# Tela 6 — Resumo
# O Calamares mostra TUDO que vai fazer, em forma de lista:
#   - Apagar todos os dados de /dev/sda
#   - Criar partição EFI 300 MB FAT32 em /dev/sda1
#   - Criar partição raiz 230 GB ext4 em /dev/sda2
#   - Criar swap 4 GB em /dev/sda3
#   - Instalar Lubuntu, GRUB, configurar usuário maria
#
# LEIA com calma. Se algo está errado, clique Voltar.
# Se está tudo certo, clique INSTALAR.
# Caixa de confirmação: "Tem certeza?" → Sim.`},{lang:"bash",code:`# Tela 7 — Instalação rolando
# Barra de progresso e slideshow apresentando o Lubuntu.
# Tempo estimado:
#   SSD: 5-10 minutos
#   HD mecânico: 15-25 minutos

# Tela 8 — Concluído!
# "Reinicie agora" → marque e clique em Pronto.
# Quando o PC reiniciar e pedir, retire o pendrive.
# Aperta Enter. Boot pela primeira vez do Lubuntu instalado!`}],points:["O instalador chama Calamares; é gráfico, em português e leva 10-20 minutos.","Faça backup ANTES — mesmo a opção mais segura pode falhar em casos extremos.","Conecte o notebook na tomada para evitar desligamento no meio da instalação.","Internet ativa permite baixar codecs e atualizações já durante o setup.","Use 'Apagar disco' só se for usar o computador 100% para Lubuntu.","Login automático é cômodo mas inseguro; deixe desmarcado em notebooks.","Iniciante comum: escolher layout de teclado errado e o ç não funcionar.","Iniciante comum: pular a tela de Resumo sem ler e descobrir tarde que escolheu o disco errado."],alerts:[{type:"danger",content:"Na tela de partições, 'Apagar disco' é IRREVERSÍVEL. Confirme três vezes que escolheu o disco certo, especialmente se o PC tem mais de um HD."},{type:"warning",content:"Se aparecer 'Erro ao instalar bootloader' no final, geralmente é Secure Boot ou Fast Boot ativos na BIOS. Desligue ambos e reinstale."},{type:"tip",content:"Marque a opção de baixar atualizações durante a instalação se a internet estiver boa. Você economiza tempo depois e já fica protegido contra vulnerabilidades recentes."},{type:"success",content:"Anote login e senha em papel ANTES de instalar. Esquecer a senha de root no Lubuntu é um problema chato (mas tem solução, ver capítulo de troubleshooting)."}]},{slug:"particionamento",section:"instalacao",title:"Particionamento manual",difficulty:"intermediario",subtitle:"Decidindo /, /home, swap e EFI por conta própria.",intro:'O Calamares oferece a opção "Apagar disco" que decide as partições por você. Funciona bem para a maioria. Mas existem situações em que vale assumir o controle: quando você quer separar a sua /home do sistema (para reinstalar sem perder arquivos), quando quer dedicar uma partição grande a dados, ou quando está dual-bootando com vários sistemas operacionais. Aí entra o particionamento manual.\n\nPense em particionar como dividir um galpão vazio com paredes. Cada cômodo (partição) ganha um nome e um propósito. O Lubuntu precisa pelo menos de uma partição para o sistema (chamada raiz, ou `/`). Pode ter também uma para os arquivos de usuário (`/home`), uma para área de troca de memória (`swap`), e em PCs UEFI uma minúscula chamada EFI System Partition (ESP) que guarda o boot.\n\nA grande vantagem de uma /home separada é a reinstalação. No dia em que você quiser trocar para outra distro Linux, basta formatar a / e manter a /home intacta. Seus arquivos, configurações, fotos, ficam preservados. Em troca disso, você precisa decidir o tamanho de cada partição agora — e mudar depois é trabalhoso.\n\nEste capítulo é mais técnico que os anteriores. Se você está no seu primeiro Linux, talvez seja melhor usar "Apagar disco" e voltar aqui em alguns meses, quando já tiver intimidade com o terminal. Para quem segue, vamos cobrir o esquema clássico para máquinas modernas (UEFI + GPT) e mostrar como verificar tudo com `gparted` antes de gravar.',codes:[{lang:"text",code:`# Esquema clássico para PC moderno UEFI + 1 disco SSD 256 GB:
#
#   Partição    Tamanho   Tipo     Ponto de montagem   Para quê
#   /dev/sda1   512 MB    fat32    /boot/efi           ESP do UEFI
#   /dev/sda2   40 GB     ext4     /                   sistema
#   /dev/sda3   8 GB      swap     —                   memória virtual
#   /dev/sda4   resto     ext4     /home               arquivos seus
#
# Vantagem da /home separada: reinstalar o sistema sem
# perder seus documentos, downloads e configurações.`},{lang:"text",code:`# Como criar isso no Calamares (tela de partições):
# 1) Escolha "Particionamento manual"
# 2) Selecione o disco (ex.: /dev/sda)
# 3) Se não tem nada importante: clique "Nova tabela de partições"
#    → escolha GPT (UEFI moderno) ou MBR (BIOS antigo)
# 4) Crie cada partição clicando no espaço livre + "Novo":
#
#    Partição 1: 512 MB, fat32, ponto /boot/efi, flag boot+esp
#    Partição 2: 40 GB, ext4, ponto /, formatar SIM
#    Partição 3: 8 GB, linuxswap, sem ponto
#    Partição 4: resto, ext4, ponto /home, formatar SIM
#       (ATENÇÃO: se já tem /home antiga, NÃO marque formatar!)`},{lang:"bash",code:`# Conferindo o disco antes/depois com gparted (na live)
sudo apt install gparted -y    # se não estiver instalado
sudo gparted

# Interface gráfica mostra:
#   - todas as partições com cores
#   - espaço usado e livre
#   - flags (boot, esp, swap)
# Use para CONFERIR antes de gravar no Calamares.`},{lang:"bash",code:`# Pelo terminal: parted lista de forma compacta
sudo parted -l
# saída exemplo:
# Model: ATA SAMSUNG SSD (scsi)
# Disk /dev/sda: 256GB
# Partition Table: gpt
# Number  Start   End     Size    File system  Name      Flags
#  1      1049kB  538MB   537MB   fat32                  boot, esp
#  2      538MB   43.5GB  42.9GB  ext4
#  3      43.5GB  52.1GB  8590MB  linux-swap(v1)
#  4      52.1GB  256GB   204GB   ext4`},{lang:"bash",code:`# Tamanho recomendado de swap em 2024+
# Regras práticas (para Lubuntu, máquina pessoal):
#
#   RAM ≤ 2 GB      → swap 2× a RAM (compensa sufoco)
#   RAM 4 GB        → swap 4 GB
#   RAM 8 GB        → swap 4-8 GB
#   RAM 16+ GB      → swap 4 GB (só para emergência)
#
# Se for usar HIBERNAÇÃO, swap precisa ser ≥ RAM.
# Se for usar zram (ver capítulo Hardware), pode dispensar swap em disco.`},{lang:"bash",code:`# Já com sistema instalado, ver montagens:
df -h
# Filesystem      Size  Used Avail Use% Mounted on
# /dev/sda2        40G   12G   26G  32% /
# /dev/sda4       190G   15G  166G   9% /home
# /dev/sda1       511M  6.1M  505M   2% /boot/efi

# Ver swap em uso:
swapon --show
# NAME      TYPE      SIZE  USED PRIO
# /dev/sda3 partition   8G    0B   -2`}],points:["Particionar manual = você decide tamanho e propósito de cada pedaço do disco.","Esquema mínimo UEFI: ESP (~512 MB), raiz / (>20 GB), opcional /home, opcional swap.","/home separada permite reinstalar sistema sem perder arquivos pessoais.","Em UEFI use tabela GPT; em BIOS antigo use MBR.","Marque flag boot+esp na partição de 512 MB FAT32 — sem isso, não dá boot UEFI.","Tamanho de swap depende do RAM e se você quer hibernar; 4-8 GB cobre a maioria.","Iniciante comum: marcar 'formatar' na /home reaproveitada e apagar tudo sem querer.","Iniciante comum: criar partição raiz pequena demais (10 GB) e ficar sem espaço em meses."],alerts:[{type:"danger",content:"Particionamento manual é onde mais gente perde dados. Sempre faça backup antes e revise duas vezes na tela de Resumo do Calamares."},{type:"tip",content:"Se vai usar a máquina muito tempo, deixe a / com 40-60 GB. Atualizações de kernel, snaps e cache do APT consomem mais do que parece."},{type:"info",content:"BTRFS e ZFS são sistemas de arquivos modernos que oferecem snapshots, mas exigem mais conhecimento. Ext4 é o padrão sólido recomendado para iniciantes intermediários."},{type:"warning",content:"Se está reaproveitando uma /home antiga, confira que o nome de usuário NOVO seja igual ao antigo. Senão o sistema cria uma /home/usuario nova vazia ao lado da antiga."}]},{slug:"dual-boot-windows",section:"instalacao",title:"Dual boot com Windows",difficulty:"intermediario",subtitle:"Manter o Windows e adicionar o Lubuntu, escolhendo no boot.",intro:`Muita gente quer experimentar o Linux sem abandonar o Windows. A solução é o dual boot: você instala os dois sistemas no mesmo PC, e na hora de ligar aparece um menu perguntando qual quer usar. É como ter dois apartamentos no mesmo prédio — você decide em qual entrar a cada dia.

O processo tem três etapas. Primeiro, no Windows, você libera espaço encolhendo a partição existente. Depois, no instalador do Lubuntu, escolhe "Instalar lado a lado". Por fim, o GRUB (gerenciador de boot do Linux) assume o controle e passa a mostrar os dois sistemas ao ligar. Se você quiser voltar a só ter Windows um dia, basta apagar as partições do Linux e restaurar o boot loader do Windows — tudo reversível.

Existem dois cuidados modernos importantes. O Fast Startup do Windows 10/11 mantém o disco em um estado "meio desligado" que confunde o Linux e pode corromper a partição do Windows. Você precisa desativar isso antes. O Secure Boot do UEFI também pode bloquear o instalador do Lubuntu — em geral, o Lubuntu 26.04 já lida bem com Secure Boot, mas em hardware muito específico precisa desativar.

Por último: dual boot é robusto, mas backup primeiro. Encolher uma partição do Windows é uma operação que muito raramente dá ruim, mas quando dá, dá feio. Faça uma cópia dos seus arquivos importantes em um HD externo ou na nuvem antes de seguir.`,codes:[{lang:"text",code:`# Etapa 1 — Preparar o Windows
#
# 1) Desativar Fast Startup (CRÍTICO):
#    Painel de Controle → Opções de Energia
#    → "Escolher a função dos botões de energia"
#    → "Alterar configurações não disponíveis no momento"
#    → desmarcar "Ligar inicialização rápida"
#
# 2) Desfragmentar (só se for HD, não SSD):
#    Iniciar → digitar "desfragmentar" → executar
#
# 3) Backup dos arquivos importantes em HD externo`},{lang:"text",code:`# Etapa 2 — Encolher a partição do Windows
#
# Iniciar → digitar "diskmgmt.msc" → Enter
# Vai abrir o "Gerenciamento de disco"
#
# Clique direito na partição C: → "Diminuir Volume..."
# Insira quanto MB liberar (ex.: 60000 MB = 60 GB)
# Clique "Diminuir"
#
# Vai aparecer "Espaço não alocado" no final do disco —
# é aí que o Lubuntu vai morar.
#
# DICA: deixe pelo menos 30 GB para o Lubuntu.`},{lang:"text",code:`# Etapa 3 — Instalar o Lubuntu ao lado
#
# Boot pelo pendrive (capítulo "Testar Live")
# Inicie o Calamares
# Na tela "Partições", escolha:
#   ◉ Instalar Lubuntu junto com o Windows Boot Manager
#
# Aparece uma régua dividida — você arrasta para
# decidir quanto espaço o Lubuntu pega do espaço livre.
# Padrão: usa o "espaço não alocado" que você criou.
#
# Marque "Criar arquivo de troca (swap)".
# Continue normalmente para Usuários e Resumo.`},{lang:"text",code:`# Resultado: ao ligar o PC, aparece o GRUB:
#
#   *Ubuntu                                       <- Lubuntu (padrão)
#    Advanced options for Ubuntu
#    Windows Boot Manager (on /dev/sda1)
#    UEFI Firmware Settings
#
# Setas ↑↓ para escolher, Enter para confirmar.
# Sem ação em 10 segundos, ele inicia o padrão (geralmente Lubuntu).`},{lang:"bash",code:`# Já dentro do Lubuntu, mudar a ordem padrão do GRUB
sudo nano /etc/default/grub

# Procure a linha:
# GRUB_DEFAULT=0
# 0 = primeiro item (Ubuntu)
# 2 = terceiro item (Windows, no exemplo acima)

# Mude para o número do Windows e salve (Ctrl+O, Enter, Ctrl+X)

# Aplique:
sudo update-grub
# Generating grub configuration file ...
# Found Windows Boot Manager on /dev/sda1
# done`},{lang:"bash",code:`# Acessar arquivos do Windows pelo Lubuntu
# Pelo PCManFM-Qt (gerenciador de arquivos):
# - Painel lateral mostra "240 GB Volume" (a partição do Windows)
# - Clique para montar; senha pode ser pedida
# - Acesse Users/SeuNome/Documents...

# Pelo terminal:
sudo mkdir -p /mnt/windows
sudo mount /dev/sda3 /mnt/windows
ls /mnt/windows/Users/`},{lang:"bash",code:`# Se o Windows "comer" o GRUB depois de uma atualização sua:
# (acontece de vez em quando)

# Boot pelo pendrive Lubuntu Live
# Abra o terminal e:
sudo apt install boot-repair
boot-repair
# Interface gráfica abre. Clique em "Recommended repair"
# Reinicie. GRUB volta a aparecer normalmente.`}],points:["Dual boot mantém Windows e Lubuntu no mesmo PC; você escolhe no menu ao ligar.","Desative Fast Startup do Windows ANTES — ele corrompe a partição se ficar ligado.","Encolha o C: pelo Gerenciamento de Disco do próprio Windows; deixe pelo menos 30 GB livres.","No Calamares, escolha 'Instalar lado a lado' e arraste a régua de divisão.","GRUB controla qual sistema iniciar; o Windows aparece como 'Windows Boot Manager'.","Para mudar o padrão do GRUB, edite /etc/default/grub e rode sudo update-grub.","Iniciante comum: esquecer de desativar Fast Startup e perder dados na partição NTFS.","Iniciante comum: encolher a partição do Windows com pouco espaço livre e o Windows ficar lento."],alerts:[{type:"danger",content:"Nunca encolha o C: para menos de 50 GB. O Windows precisa de espaço para atualizações grandes; sem isso ele falha de jeitos imprevisíveis."},{type:"warning",content:"Se o seu PC tem RAID ou Intel RST ativos, dual boot vira um pesadelo. Geralmente precisa desativar no BIOS antes (em geral, mude SATA Mode para AHCI)."},{type:"info",content:"Se o GRUB sumir após atualização do Windows, o boot-repair-disk ou o utilitário boot-repair conserta em poucos cliques."},{type:"tip",content:"Quer manter relógio sincronizado entre Windows e Linux? No Lubuntu rode: timedatectl set-local-rtc 1. Sem isso, um sistema mostra horário trocado."}]},{slug:"primeira-inicializacao",section:"instalacao",title:"Primeira inicialização",difficulty:"iniciante",subtitle:"O que fazer nos primeiros minutos do Lubuntu instalado.",intro:`Reiniciou. Tirou o pendrive. O PC ligou de novo, e dessa vez não veio o Windows nem o pendrive — veio uma tela preta com letras brancas (o GRUB, se for dual boot) ou direto a tela de login do Lubuntu. Parabéns: você instalou um sistema operacional do zero, do seu próprio jeito. Esse é um marco que pouca gente experimenta.

Os primeiros minutos são importantes. Tem três coisas que vale fazer logo: 1) atualizar tudo (a ISO foi gravada algumas semanas ou meses atrás, é praticamente certo que tem atualizações); 2) instalar codecs de mídia (a ISO oficial do Lubuntu, por questões de licenciamento, não inclui MP3, H.264 e fontes Microsoft de fábrica); 3) ajustar coisas básicas como fuso, papel de parede e idioma do teclado se algo escapou.

Pense nesses minutos como o "checkup pós-mudança". Você acabou de se mudar para uma casa nova: ainda está tudo de fábrica, mas você quer luz nas tomadas, água quente funcionando e a rede Wi-Fi configurada antes de relaxar. O capítulo "Pós-instalação" vai ainda mais fundo nas configurações úteis. Aqui é só o essencial dos cinco primeiros minutos.

Vamos passar pelo login, o primeiro update, a verificação se a internet está OK e a instalação do pacote de codecs. Em vinte minutos você tem um sistema atualizado e pronto para o uso real do dia a dia.`,codes:[{lang:"text",code:`# Tela de login do SDDM (gerenciador de sessão)
# 
# Aparece o nome do usuário que você criou (ex.: maria)
# Campo de senha — digite a que você definiu na instalação
# Aperte Enter
#
# Em segundos cai na área de trabalho do LXQt:
#   - Painel embaixo (menu, relógio, área de notificação)
#   - Atalho da Lixeira na área
#   - Papel de parede padrão azul/cinza`},{lang:"bash",code:`# Abra o terminal: menu → Sistema → QTerminal
# (ou Ctrl+Alt+T se já configurou)

# Atualizar lista de pacotes (cardápio do APT)
sudo apt update
# saída:
# Hit:1 http://br.archive.ubuntu.com/ubuntu resolute InRelease
# Get:2 ... Ign:3 ...
# Reading package lists... Done
# All packages are up to date. (ou X packages can be upgraded)`},{lang:"bash",code:`# Atualizar todos os pacotes para a versão mais nova
sudo apt upgrade -y
# vai listar dezenas de pacotes; -y aceita tudo automaticamente
# pode levar 5-30 minutos dependendo da conexão e do quanto desatualizou

# Quando terminar, se houver atualização de kernel, reinicie:
sudo reboot`},{lang:"bash",code:`# Confirme que a internet está OK
ping -c 4 8.8.8.8
# 64 bytes from 8.8.8.8: time=22.5 ms (4 vezes)
# 4 packets transmitted, 4 received, 0% packet loss

# E o DNS:
ping -c 4 lubuntu.me
# Se a primeira (IP) responde mas o nome não, é problema de DNS.
# Veja capítulo "DNS troubleshoot" se isso acontecer.`},{lang:"bash",code:`# Instalar pacote de codecs (MP3, H.264, fontes Microsoft)
sudo apt install lubuntu-restricted-extras -y

# Durante a instalação aparece uma tela azul perguntando
# se você aceita os termos das fontes Microsoft (TrueType).
# Use Tab para selecionar <Yes> e Enter.
#
# Depois disso:
# - YouTube, vídeos MP4 funcionam
# - MP3s tocam
# - Documentos com Arial/Times se exibem certinho`},{lang:"bash",code:`# Verificar se está tudo respirando bem
# Uso de RAM:
free -h
# Uso de disco:
df -h /
# Versão do sistema:
lsb_release -a
# Uptime (quanto tempo ligado):
uptime
#  14:32:11 up 25 min, 1 user, load average: 0.15, 0.20, 0.18`},{lang:"bash",code:`# Mudar o papel de parede agora mesmo (interface):
# Clique direito na área de trabalho → "Preferências da área de trabalho"
# → aba "Papel de parede" → escolha um dos prontos ou
# clique em "Adicionar" para usar uma imagem sua.

# Pelo terminal (avançado):
pcmanfm-qt --set-wallpaper="/usr/share/lubuntu/wallpapers/sunrise.jpg"`}],points:["Login pelo SDDM: digite a senha criada na instalação e Enter.","sudo apt update + sudo apt upgrade -y é o primeiro comando obrigatório.","Reinicie depois de atualizar kernel — você sente diferença na performance.","lubuntu-restricted-extras traz MP3, H.264 e fontes Microsoft que faltam por licença.","ping testa internet e DNS rapidamente; faça antes de qualquer install.","Se a tela de login não aparece, pode ser problema de driver de vídeo (capítulo Hardware).","Iniciante comum: pular o primeiro update e ficar com sistema vulnerável a falhas conhecidas.","Iniciante comum: estranhar que MP3 e YouTube não tocam e desistir antes de instalar os codecs."],alerts:[{type:"tip",content:"Acostume-se a rodar 'sudo apt update && sudo apt upgrade' uma vez por semana. Mantém o sistema seguro e funcionando bem."},{type:"info",content:"A senha do sudo é a mesma que você criou para o usuário. Lubuntu não usa conta root separada — segue o padrão Ubuntu."},{type:"warning",content:"Se aparecer 'Could not get lock /var/lib/dpkg/lock', já há um apt rodando (talvez atualizador automático). Espere ele terminar; não force pelo dpkg --configure."},{type:"success",content:"Sistema novo, sem antivírus, sem 'otimizadores' — Lubuntu vai durar anos sem ficar lento, desde que você mantenha as atualizações em dia."}]},{slug:"pos-instalacao",section:"instalacao",title:"Pós-instalação: o checklist essencial",difficulty:"iniciante",subtitle:"Doze ajustes que valem fazer na primeira semana de Lubuntu.",intro:`Sistema instalado, atualizado e funcionando. Hora de personalizar para o seu uso. Esse capítulo é uma lista enxuta de doze ajustes que fazem a diferença entre "Lubuntu padrão" e "Lubuntu do seu jeito". Não é obrigatório fazer tudo de uma vez — pode espalhar pelos primeiros dias.

Pense nisso como mobiliar a casa: já tem teto, parede e chão (sistema), mas faltam móveis (firewall, timeshift), enfeites (tema, papel de parede) e a despensa cheia (apps essenciais). Cada item leva poucos minutos. No final da semana você tem um Lubuntu que reflete suas preferências e está blindado contra os problemas mais comuns.

A maioria desses ajustes são feitos pelo terminal porque é mais rápido e mais fácil de mostrar em livro. Mas TODOS têm equivalentes na interface gráfica, então não é obrigatório usar o terminal — você decide. Se preferir o caminho clicável, sempre dá para encontrar a mesma opção navegando pelo menu.

A ordem importa pouco, mas eu sugiro começar pelas coisas de segurança (firewall, snapshot do timeshift) e depois ir para as estéticas e de conveniência. Vamos lá.`,codes:[{lang:"bash",code:`# 1) Ativar firewall (vem instalado, mas desligado por padrão)
sudo ufw enable
# Firewall is active and enabled on system startup

# Ver regras:
sudo ufw status verbose

# Permitir SSH se for usar (capítulo Rede):
# sudo ufw allow ssh`},{lang:"bash",code:`# 2) Instalar Timeshift (snapshots para reverter erros)
sudo apt install timeshift -y

# Abra: menu → Sistema → Timeshift
# Configure:
#   Tipo: RSYNC
#   Local: a maior partição livre
#   Schedule: Daily, manter 5
#   Incluir /home/usuario/Documents (recomendado)
# Clique "Create" para o primeiro snapshot.`},{lang:"bash",code:`# 3) Instalar utilitários básicos do dia a dia
sudo apt install \\
  htop neofetch tree git curl wget unzip p7zip-full \\
  build-essential gdebi -y

# htop = monitor de processos colorido
# neofetch = mostra info do sistema com logo bonito
# tree = ver árvore de diretórios
# git = versionamento (mesmo só para experimentar)
# gdebi = instalar .deb com 1 clique
# build-essential = compilador C/C++ (várias coisas pedem)`},{lang:"bash",code:`# 4) Trocar o navegador padrão (se quiser Firefox em vez do Falkon)
sudo apt install firefox -y

# Definir como padrão:
# Menu → Preferências → Aplicações padrão → Navegador → Firefox

# Ou pelo terminal:
xdg-settings set default-web-browser firefox.desktop`},{lang:"bash",code:`# 5) Habilitar tap-to-click (touchpad de notebook)
# Abra: menu → Preferências → Mouse e teclado → Touchpad
# Marque "Tap to click"
# Marque "Two-finger scrolling"

# Pelo terminal (alternativa):
echo 'Section "InputClass"
    Identifier "touchpad"
    Driver "libinput"
    MatchIsTouchpad "on"
    Option "Tapping" "on"
    Option "NaturalScrolling" "false"
EndSection' | sudo tee /etc/X11/xorg.conf.d/30-touchpad.conf`},{lang:"bash",code:`# 6) Tema escuro do sistema
# Menu → Preferências → LXQt → Aparência
# Aba "Estilo do widget" → Breeze Dark (ou similar)
# Aba "Esquema de cores" → escuro
# Aba "Tema dos ícones" → Papirus-Dark (instale antes:)

sudo add-apt-repository ppa:papirus/papirus -y
sudo apt update
sudo apt install papirus-icon-theme -y`},{lang:"bash",code:`# 7) Reduzir o swap usage (zram já vem ligado, ajustar swappiness)
# Padrão é 60; para SSD, baixe para 10:
echo 'vm.swappiness=10' | sudo tee /etc/sysctl.d/99-swappiness.conf
sudo sysctl --system

# Verifique:
cat /proc/sys/vm/swappiness
# 10`},{lang:"bash",code:`# 8) Atualizar a lista completa de upgrades semanal automático
sudo apt install unattended-upgrades -y
sudo dpkg-reconfigure --priority=low unattended-upgrades
# Tela azul: <Yes> para ativar atualizações de segurança automáticas

# 9) Localização do BR completa (calendário, dicionários)
sudo apt install language-pack-pt language-pack-pt-base \\
                 hunspell-pt-br myspell-pt-br -y

# 10) Habilitar Flatpak (mais apps modernos disponíveis)
sudo apt install flatpak -y
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
# Reinicie a sessão para o Flatpak ficar visível em menus.`},{lang:"bash",code:`# 11) Verificar e instalar drivers proprietários (NVIDIA, Wi-Fi)
ubuntu-drivers devices
# Lista o que está disponível para o seu hardware

sudo ubuntu-drivers autoinstall
# Instala o recomendado automaticamente
# Reinicie depois.

# 12) Backup de configurações no GitHub (opcional, geek)
# Para quem usa git:
cd ~
git init dotfiles
# copie ~/.config/lxqt/, ~/.bashrc, ~/.vimrc para dotfiles/
# commit e push em repositório privado`}],points:["Firewall (ufw) vem instalado mas desligado — ative com sudo ufw enable.","Timeshift faz snapshots do sistema; é o seu CTRL-Z se algo der errado.","lubuntu-restricted-extras + utilitários básicos cobrem 90% das necessidades extras.","ubuntu-drivers autoinstall resolve drivers proprietários (NVIDIA, Wi-Fi obscuro).","Reduza vm.swappiness para 10 se tem SSD e bastante RAM (4 GB+).","Habilite Flatpak para acesso a apps modernos que não estão no APT.","Iniciante comum: nunca configurar Timeshift e ficar sem caminho de volta quando algo quebra.","Iniciante comum: instalar 30 'otimizadores' achando que precisa — Lubuntu já vem otimizado."],alerts:[{type:"tip",content:"Tire o primeiro snapshot do Timeshift COM o sistema recém-instalado e atualizado. Ele vira seu 'estado limpo' eterno para reverter."},{type:"warning",content:"Não instale antivírus tradicional (tipo ClamAV) achando que vai te proteger como no Windows. Linux desktop não precisa, e o ClamAV consome RAM à toa."},{type:"info",content:"unattended-upgrades cuida de atualizações de SEGURANÇA sozinho. Atualizações grandes (kernel, distro) continuam manuais — assim evita reboot inesperado."},{type:"success",content:"Reserve 1 hora num final de semana para rodar tudo desse capítulo de uma vez. Depois disso, o Lubuntu fica praticamente em piloto automático por meses."}]}],Mq=[{slug:"visao-geral-lxqt",section:"lxqt-tour",title:"Visão geral do LXQt",difficulty:"iniciante",subtitle:"O que é a área de trabalho do Lubuntu e por que ela é tão leve.",intro:`O LXQt é o "rosto" do Lubuntu: aquela tela com painel, menu, ícones e janelas que você vê depois de ligar o computador. Pense nele como o salão de entrada de uma casa. A casa em si (o Linux) está toda construída por baixo, mas é no salão que você decide para onde ir, qual programa abrir, onde guardar suas coisas. O LXQt foi projetado para ser um salão pequeno, sem móveis a mais — por isso roda bem em máquinas antigas.

A sigla LXQt nasceu da fusão de dois projetos antigos: o LXDE (que usava a biblioteca GTK, a mesma do GNOME) e o Razor-Qt (baseado em Qt, a biblioteca do KDE). Em 2013 esses dois grupos juntaram forças. O resultado é um ambiente moderno, escrito em Qt, mas que mantém o jeitão familiar de um Windows XP ou de um Linux Mint clássico: barra embaixo, menu no canto, ícones na área de trabalho. Nada de invenções estranhas para você reaprender.

Diferente do GNOME ou do KDE, o LXQt não tenta ser uma "experiência completa". Ele é um conjunto modular: cada parte (painel, gerenciador de janelas, gerenciador de arquivos, configurador) é um programa separado. Se você não gosta de uma peça, troca por outra. Isso confunde quem vem do Windows, mas é a alma do Linux: liberdade de montar.

Neste capítulo você vai conhecer o panorama: quem são os componentes principais, quais ferramentas vêm de fábrica, e como conferir tudo isso pelo terminal antes de mergulhar nos próximos capítulos. Pense neste capítulo como um mapa do shopping antes de você sair andando pelas lojas.`,codes:[{lang:"bash",code:`# Veja qual versão do LXQt está rodando no seu Lubuntu
lxqt-about
# Abre uma janela com versão, créditos e licença.
# Para ver só no terminal, use:
lxqt-session --version
# saída exemplo:
# lxqt-session 1.3.0`},{lang:"bash",code:`# Liste todos os componentes do LXQt instalados no sistema
dpkg -l | grep -E "^ii  lxqt-" | awk '{print $2}'
# saída exemplo (lista parcial):
# lxqt-config
# lxqt-panel
# lxqt-runner
# lxqt-session
# pcmanfm-qt
# qterminal`},{lang:"bash",code:`# Veja qual ambiente de desktop está ativo na sessão atual
echo $XDG_CURRENT_DESKTOP
# saída esperada: LXQt

# E qual gerenciador de janelas está rodando por baixo:
wmctrl -m | grep Name
# saída esperada: Name: Openbox`},{lang:"bash",code:`# Quanto de memória RAM o LXQt está usando agora?
free -h
# saída exemplo (em uma máquina com 4 GB):
#                total        usado       livre
# Mem:           3.7Gi        420Mi       3.0Gi
# A maior parte do uso vem do navegador, não do LXQt.
# Em idle, o desktop ocupa entre 250 e 400 MB.`},{lang:"bash",code:`# Liste os processos do LXQt em execução
ps -ef | grep -E "lxqt|openbox|pcmanfm" | grep -v grep
# Você vai ver coisas como:
# lxqt-session, lxqt-panel, pcmanfm-qt --desktop, openbox
# Cada um é um programa independente — essa é a "modularidade" do LXQt.`}],points:["LXQt é o ambiente de desktop padrão do Lubuntu desde a versão 18.10.","Ele é uma fusão do antigo LXDE com o projeto Razor-Qt, escrita em Qt5/Qt6.","É modular: painel, gerenciador de janelas, arquivos e configurador são programas separados.","O gerenciador de janelas padrão é o Openbox, leve e configurável.","Em idle, costuma usar entre 250 e 400 MB de RAM — bem menos que GNOME ou KDE.","O visual lembra Windows XP/7 de propósito: facilita a transição para iniciantes.","Iniciante comum: confundir LXQt com Lubuntu — Lubuntu é a distribuição inteira; LXQt é só a interface.",'Iniciante comum: achar que LXQt é "limitado" porque é leve — ele tem quase tudo o que os pesados têm, só com menos enfeite.'],alerts:[{type:"info",content:"Você pode instalar LXQt sobre qualquer Ubuntu sem trocar de distribuição: sudo apt install lubuntu-desktop. Mas, para começar, prefira o Lubuntu já pronto."},{type:"tip",content:'Quando ouvir alguém falando de "sessão", pense no LXQt todo: painel, área de trabalho e programas abertos. Encerrar a sessão (logout) fecha tudo isso de uma vez.'},{type:"warning",content:"Não tente instalar GNOME e LXQt no mesmo sistema sem necessidade. Eles compartilham configurações que podem conflitar e confundir o login."}]},{slug:"painel-lxqt",section:"lxqt-tour",title:"O painel inferior do LXQt",difficulty:"iniciante",subtitle:"A barra na base da tela: o que tem nela e como mexer.",intro:`O painel é aquela barra fina que aparece embaixo da tela quando você liga o Lubuntu. Pense nele como o painel do carro: nele ficam os instrumentos que você usa o tempo todo (relógio, indicadores) e os controles de acesso rápido (botão do menu, lista de janelas abertas, área de notificação). Sem ele, você teria que ficar adivinhando o que está rodando.

O painel do LXQt se chama \`lxqt-panel\` e é totalmente configurável. Você pode mudar a posição (embaixo, em cima, na lateral), o tamanho, as cores, e principalmente os "plugins" — pequenos blocos com funções específicas. Cada ícone que você vê no painel é, na verdade, um plugin separado: o relógio é um plugin, o menu de aplicações é outro, a bandeja do sistema é outro. Isso significa que você pode arrastar, remover ou adicionar peças à vontade.

A configuração do painel se faz com clique direito sobre ele (escolhendo "Configurar painel..." ou "Gerenciar widgets..."). Não tem mistério: é tudo gráfico, com listas de plugins disponíveis e botões de mover para cima/baixo. Por baixo, as configurações ficam guardadas em um arquivo de texto em \`~/.config/lxqt/panel.conf\` — útil quando você quer fazer backup ou copiar para outro computador.

Neste capítulo você vai aprender a identificar cada parte do painel, mexer no tamanho e na posição, adicionar e remover plugins, e dar uma espiada no arquivo de configuração. No final você terá um painel personalizado do seu jeito — e saberá voltar ao padrão se algo der errado.`,codes:[{lang:"bash",code:`# Abrir as configurações do painel pelo terminal
lxqt-config-panel
# Abre a mesma janela que aparece em "Configurar painel..."
# do menu de clique direito.`},{lang:"bash",code:`# Onde fica o arquivo de configuração do painel
ls -la ~/.config/lxqt/panel.conf
# saída: -rw-r--r-- 1 voce voce 4382 ... panel.conf

# Faça um backup antes de mexer manualmente
cp ~/.config/lxqt/panel.conf ~/.config/lxqt/panel.conf.bak`},{lang:"ini",code:`# Trecho típico de panel.conf (formato INI)
[panel1]
alignment=-1
background-color=#2d2d2d
font-color=#ffffff
iconSize=22
lineCount=1
panelSize=32
plugins=mainmenu, quicklaunch, taskbar, tray, statusnotifier, clock
position=Bottom
visible=true`},{lang:"bash",code:`# Reiniciar o painel sem fazer logout (útil ao mexer no .conf)
killall lxqt-panel && lxqt-panel &
# O painel some por meio segundo e volta com a nova config.
# Se algo der errado, restaure o backup:
cp ~/.config/lxqt/panel.conf.bak ~/.config/lxqt/panel.conf
killall lxqt-panel && lxqt-panel &`},{lang:"bash",code:`# Listar todos os plugins disponíveis para o painel
ls /usr/lib/x86_64-linux-gnu/lxqt-panel/
# saída exemplo:
# libclock.so       libmainmenu.so   libtaskbar.so
# libtray.so        libquicklaunch.so libvolume.so
# Cada .so é um plugin: você ativa ou desativa em "Gerenciar widgets".`},{lang:"bash",code:`# Resetar o painel para o padrão de fábrica
mv ~/.config/lxqt/panel.conf ~/.config/lxqt/panel.conf.broken
killall lxqt-panel && lxqt-panel &
# Sem panel.conf, o LXQt cria um novo do zero, igualzinho à instalação.`}],points:["O painel é o programa lxqt-panel; existe um único processo dele rodando.","Cada elemento (relógio, menu, bandeja) é um plugin independente que pode ser adicionado ou removido.","Clique direito no painel abre o menu de configuração e gerenciamento de plugins.","A configuração é salva em ~/.config/lxqt/panel.conf no formato INI — fácil de versionar.","Você pode ter mais de um painel: útil para colocar uma barra extra na lateral, por exemplo.",'Mover o painel para cima ou para a lateral é só mudar a opção "position" no diálogo gráfico.',"Iniciante comum: deletar o painel sem querer e achar que travou — é só recriar com lxqt-panel.","Iniciante comum: editar panel.conf à mão sem fazer backup; quando quebra, não consegue voltar."],alerts:[{type:"tip",content:"Aumente o iconSize para 28 ou 32 se você está em um monitor 4K e os ícones do painel ficaram minúsculos. O default 22 é pensado para telas Full HD."},{type:"warning",content:"Sempre faça backup do panel.conf antes de editar à mão. Um erro de sintaxe pode impedir o painel de iniciar e você fica sem barra ao logar."},{type:"info",content:'O painel respeita o tema do sistema. Se você mudou o tema em "Aparência" e o painel ficou preto, basta reiniciar a sessão para ele atualizar as cores.'}]},{slug:"menu-aplicacoes",section:"lxqt-tour",title:"Menu de aplicações",difficulty:"iniciante",subtitle:'O botão estilo "Iniciar" do Lubuntu e como achar tudo nele.',intro:'No canto esquerdo do painel mora um botãozinho com o logo do Lubuntu. Ele é o equivalente ao botão "Iniciar" do Windows: um menu organizado em categorias (Acessórios, Internet, Multimídia, Sistema, etc.) com todos os programas instalados. Em vez de procurar atalho na área de trabalho, é dali que você vai abrir tudo no dia a dia.\n\nO menu do LXQt é gerado automaticamente a partir dos arquivos `.desktop` que cada programa instala em `/usr/share/applications/`. Cada arquivo desses é um pequeno texto que diz o nome do programa, o ícone, o comando para executar e em qual categoria deve aparecer. Quando você instala algo novo via `apt`, o menu se atualiza sozinho. Se algo não aparece, quase sempre é porque o pacote não veio com o `.desktop` (raro, mas acontece).\n\nAlém das categorias, o menu tem uma barra de busca no topo. Comece a digitar o nome (ou parte dele) e ele filtra na hora — é o jeito mais rápido de abrir um programa quando você sabe o nome mas não lembra em qual categoria está. Para quem prefere atalhos, existe ainda o `lxqt-runner`, ativado por Alt+F2 ou Super (tecla do Windows): uma caixinha pequena que executa qualquer comando.\n\nNeste capítulo você vai conhecer a estrutura do menu, aprender a customizá-lo, criar atalhos próprios e usar o runner para abrir programas em um piscar de olhos. Quem domina essas três formas (categoria, busca e runner) trabalha muito mais rápido.',codes:[{lang:"bash",code:`# Onde ficam os atalhos do menu (visíveis para todos os usuários)
ls /usr/share/applications/ | head -10
# saída exemplo:
# firefox.desktop
# featherpad.desktop
# lxqt-config.desktop
# pcmanfm-qt.desktop
# qterminal.desktop`},{lang:"ini",code:`# Exemplo de arquivo .desktop (Firefox)
# Ficaria em /usr/share/applications/firefox.desktop
[Desktop Entry]
Version=1.0
Name=Firefox
Comment=Navegador web rápido e seguro
Exec=firefox %u
Icon=firefox
Terminal=false
Type=Application
Categories=Network;WebBrowser;
StartupNotify=true`},{lang:"bash",code:`# Criar um atalho pessoal (só para o seu usuário)
mkdir -p ~/.local/share/applications
nano ~/.local/share/applications/meu-script.desktop
# Cole o conteúdo do próximo bloco e salve com Ctrl+O, Enter, Ctrl+X.`},{lang:"ini",code:`# Conteúdo de meu-script.desktop
[Desktop Entry]
Type=Application
Name=Meu Script
Comment=Roda meu script preferido
Exec=/home/voce/scripts/backup.sh
Icon=utilities-terminal
Categories=Utility;
Terminal=true`},{lang:"bash",code:`# Forçar a atualização do cache do menu (raramente necessário)
update-desktop-database ~/.local/share/applications
# O LXQt percebe novos .desktop sozinho, mas o comando ajuda
# se um atalho criado agora não apareceu de imediato.`},{lang:"bash",code:`# Abrir o lxqt-runner pelo terminal (normalmente é Alt+F2)
lxqt-runner
# Aparece uma caixinha. Digite firefox e Enter — abre o Firefox.
# Digite =2*21 e Enter — ele resolve a conta como calculadora.`}],points:["O menu é gerado a partir dos .desktop em /usr/share/applications/ (sistema) e ~/.local/share/applications/ (usuário).","Cada arquivo .desktop define nome, ícone, comando e categoria do atalho.","Para atalhos pessoais, prefira ~/.local/share/applications/ — não exige sudo e não some em atualizações.","A barra de busca no topo do menu filtra por nome enquanto você digita.","lxqt-runner (Alt+F2) abre uma caixa minimalista para executar qualquer comando.","O runner também serve como calculadora rápida: digite =2+2 e dá 4.","Iniciante comum: editar .desktop em /usr/share sem sudo e ficar sem entender por que não salva.","Iniciante comum: criar .desktop com Exec apontando para um caminho relativo — sempre use o caminho absoluto."],alerts:[{type:"tip",content:"Para programas que rodam em terminal (como htop), coloque Terminal=true no .desktop. Assim o LXQt abre um qterminal e roda o comando dentro."},{type:"info",content:"Categorias seguem o padrão FreeDesktop. As mais usadas são Utility, Internet, AudioVideo, Graphics, Office, System, Development e Settings."},{type:"warning",content:'Não delete arquivos em /usr/share/applications/ achando que está "limpando o menu". Eles voltam na próxima atualização do pacote e podem quebrar dependências.'}]},{slug:"pcmanfm-qt",section:"lxqt-tour",title:"PCManFM-Qt: o gerenciador de arquivos",difficulty:"iniciante",subtitle:"O explorador de arquivos do Lubuntu — leve e completo.",intro:'Toda interface gráfica precisa de um explorador de arquivos: um programa que mostra pastas, arquivos, ícones, e deixa você arrastar coisa de um lado pro outro. No Windows é o Explorer; no macOS é o Finder; no Lubuntu é o PCManFM-Qt. O nome é estranho (PCMan é o apelido do desenvolvedor original, e -Qt indica a versão moderna em Qt), mas o programa é simples e familiar: dois painéis, abas, miniaturas de imagens.\n\nO PCManFM-Qt é mais que um explorador. Ele é também o programa que desenha sua área de trabalho — os ícones que aparecem na tela inicial são, na verdade, o conteúdo da pasta `~/Desktop` renderizada por ele. Por isso, se você matar o processo `pcmanfm-qt`, o wallpaper continua, mas os ícones da área de trabalho somem. Reabrir o programa traz tudo de volta.\n\nPor baixo, o PCManFM-Qt usa as bibliotecas padrão do Linux para acessar arquivos: ele abre pendrives via `udisks2`, lê metadados de imagens com `exiv2`, monta pastas de rede via `gvfs`. Você não precisa entender essas peças — basta saber que tudo "funciona" porque elas estão lá.\n\nEste capítulo te apresenta as funções essenciais: navegar, copiar, colar, criar atalhos, abrir terminal na pasta atual, conectar a um servidor e configurar coisas como mostrar arquivos ocultos. No final, você vai estar fluente no único programa que abre dezenas de vezes por dia em qualquer sistema.',codes:[{lang:"bash",code:`# Abrir o PCManFM-Qt em uma pasta específica
pcmanfm-qt ~/Documentos
# Abre uma nova janela já mostrando o conteúdo de Documentos.

# Abrir como root (CUIDADO — só quando realmente precisar)
sudo -E pcmanfm-qt /etc
# -E preserva variáveis de ambiente, importante para o tema funcionar.`},{lang:"bash",code:`# Atalhos de teclado dentro do PCManFM-Qt
# Ctrl+H        mostra/esconde arquivos ocultos (começam com .)
# Ctrl+L        edita a barra de endereço (digite o caminho)
# F2            renomeia o arquivo selecionado
# F4            abre um terminal na pasta atual (qterminal)
# F5            atualiza a visualização
# Ctrl+T        nova aba na mesma janela`},{lang:"bash",code:`# Onde ficam as configurações do PCManFM-Qt
ls ~/.config/pcmanfm-qt/lxqt/
# saída: settings.conf

# Veja um trecho:
grep -E "ShowHidden|IconSize" ~/.config/pcmanfm-qt/lxqt/settings.conf
# saída exemplo:
# ShowHidden=false
# bigIconSize=48`},{lang:"bash",code:`# Conectar-se a um servidor SMB/Samba (rede Windows)
# No menu: Ir > Conectar ao servidor...
# Ou direto pelo terminal usando gio (parte do gvfs):
gio mount smb://192.168.0.10/compartilhado
# Depois aparece em "Outras localizações" no PCManFM-Qt.`},{lang:"bash",code:`# Recriar os ícones da área de trabalho
killall pcmanfm-qt
pcmanfm-qt --desktop &
# A flag --desktop diz para ele desenhar os ícones e o wallpaper.
# Em sessões normais, isso é feito automaticamente pelo lxqt-session.`},{lang:"bash",code:`# Trocar o wallpaper pelo terminal (rápido para scripts)
pcmanfm-qt --set-wallpaper=/usr/share/backgrounds/lubuntu.jpg \\
           --wallpaper-mode=stretch
# modos válidos: color, stretch, fit, center, tile, zoom, screen`}],points:["PCManFM-Qt é o gerenciador de arquivos padrão e também desenha a área de trabalho.","Ctrl+H mostra arquivos ocultos (que começam com ponto, como .config).","F4 abre um terminal já posicionado na pasta atual — atalho que economiza tempo.","Configurações ficam em ~/.config/pcmanfm-qt/lxqt/settings.conf.","Suporta abas (Ctrl+T), painel duplo (F3) e árvore lateral (View > Side Pane).","Para acessar pendrives e HDs externos, espera-se que o udisks2 esteja rodando — vem por padrão.","Iniciante comum: usar sudo pcmanfm-qt sem -E e ficar sem ícones porque o tema não é encontrado.","Iniciante comum: deletar pasta sem perceber que está com Mostrar Ocultos ativado — vai junto a .config dela."],alerts:[{type:"danger",content:"Ao abrir o PCManFM-Qt como root, qualquer arquivo apagado vai direto para o nada — não passa pela Lixeira. Use só quando estritamente necessário."},{type:"tip",content:"Configure F4 para abrir o seu terminal preferido em Editar > Preferências > Avançado > Programa de terminal. Por padrão é qterminal."},{type:"info",content:'Se um pendrive não aparecer, abra um terminal e rode lsblk. Se o disco está lá mas não montado, faça "udisksctl mount -b /dev/sdb1".'}]},{slug:"openbox-wm",section:"lxqt-tour",title:"Openbox: o gerenciador de janelas",difficulty:"intermediario",subtitle:"Quem desenha as bordas, move e minimiza suas janelas.",intro:`Toda janela que você vê no Lubuntu — com sua barra de título, botão fechar, capacidade de arrastar — é desenhada por um programa específico chamado "gerenciador de janelas" (Window Manager, ou WM). Pense nele como o cenotécnico do teatro: você não vê, mas é quem move os móveis no palco. No Lubuntu, esse cenotécnico se chama Openbox. Ele é minúsculo (uns 2 MB de RAM), rápido como um raio e altamente configurável.

O Openbox existe desde 2002 e tem fama de ser usado em distros "minimalistas" rodando sozinho, sem painel nem nada. No Lubuntu, ele trabalha em parceria com o LXQt: o LXQt fornece o painel, o menu, os ícones; o Openbox cuida só de janelas e do clique direito na área de trabalho. Essa divisão de trabalho é uma das razões do Lubuntu ser leve.

A configuração do Openbox vive em XML, em \`~/.config/openbox/lxqt-rc.xml\`. Sim, XML — é antigo mas funciona bem. Você pode editar à mão para criar atalhos de teclado, definir o que acontece ao clicar com o botão direito no desktop, ajustar bordas e temas. Ou pode usar o programa gráfico \`obconf-qt\`, que mostra tudo em janelas amigáveis.

Este capítulo te apresenta o Openbox: o que ele faz (e o que não faz), onde ficam as configurações, atalhos úteis, e como criar seus próprios "keybindings" para automatizar tarefas. No final você vai entender por que avançados adoram esse WM minúsculo.`,codes:[{lang:"bash",code:`# Confirme que o Openbox está rodando
pgrep -a openbox
# saída exemplo:
# 1234 openbox --config-file /home/voce/.config/openbox/lxqt-rc.xml

# Veja a versão
openbox --version
# saída: Openbox 3.6.1`},{lang:"bash",code:`# Abra o configurador gráfico do Openbox
obconf-qt
# Janela com abas para tema, área de trabalho, margens, focus, etc.
# Boa porta de entrada para quem não quer mexer em XML.`},{lang:"xml",code:`<!-- Trecho de ~/.config/openbox/lxqt-rc.xml — atalho de teclado -->
<!-- Adicione dentro de <keyboard>...</keyboard> -->
<keybind key="W-e">
  <!-- Super+E abre o gerenciador de arquivos -->
  <action name="Execute">
    <command>pcmanfm-qt</command>
  </action>
</keybind>`},{lang:"bash",code:`# Recarregar a configuração do Openbox sem reiniciar a sessão
openbox --reconfigure
# Faz o XML ser relido. Se houver erro de sintaxe,
# o Openbox avisa no terminal mas continua com a config antiga.`},{lang:"bash",code:`# Atalhos úteis que já vêm de fábrica
# Alt+Espaço      menu da janela (mover, fechar, etc.)
# Alt+F4          fecha a janela
# Alt+Tab         alterna entre janelas
# Super+D         mostra a área de trabalho (minimiza tudo)
# Alt+Botão1      arrasta a janela mesmo clicando no meio dela
# Alt+Botão3      redimensiona a janela puxando de qualquer canto`},{lang:"bash",code:`# Resetar a configuração do Openbox para o padrão do Lubuntu
mv ~/.config/openbox/lxqt-rc.xml ~/.config/openbox/lxqt-rc.xml.bak
cp /etc/xdg/openbox/lxqt-rc.xml ~/.config/openbox/
openbox --reconfigure`}],points:["Openbox cuida só de janelas: bordas, mover, redimensionar, focus, minimizar.","É um dos WMs mais leves: ocupa cerca de 2-5 MB de RAM em idle.","Configuração fica em ~/.config/openbox/lxqt-rc.xml no formato XML.","obconf-qt é o configurador gráfico — não precisa editar XML para o básico.","Recarregue mudanças com openbox --reconfigure (sem precisar deslogar).","Atalhos como Alt+Botão1 (arrastar) e Alt+Botão3 (redimensionar) funcionam em qualquer ponto da janela.","Iniciante comum: editar lxqt-rc.xml e quebrar a sintaxe — Openbox ignora a config nova e usa a antiga.","Iniciante comum: confundir Openbox com LXQt — Openbox é só o WM dentro da sessão LXQt."],alerts:[{type:"tip",content:"Sempre faça openbox --reconfigure depois de editar o XML. Mudanças não pegam até você recarregar (ou deslogar)."},{type:"warning",content:'Se o Openbox crashar (raro), o painel continua e os apps também, mas você perde bordas e fica sem mover janelas. Rode "openbox --replace &" no terminal para voltar.'},{type:"info",content:"É possível trocar o Openbox por outro WM como o KWin ou o Xfwm, mas pouca gente faz. O Openbox é leve e estável o suficiente para 99% dos casos."}]},{slug:"qterminal",section:"lxqt-tour",title:"QTerminal: o terminal padrão do Lubuntu",difficulty:"iniciante",subtitle:"A janela preta onde você digita comandos, sem mistério.",intro:`O terminal é uma das ferramentas mais poderosas do Linux. É uma janela onde você digita comandos em texto e o computador responde em texto. Parece arcaico, mas é o jeito mais direto de fazer praticamente qualquer coisa: instalar programa, copiar mil arquivos de uma vez, automatizar tarefa, ver o que está acontecendo por baixo. No Lubuntu, esse terminal se chama QTerminal.

Pense no terminal como uma conversa por chat com o computador. Você manda uma mensagem (\`ls\`, por exemplo), ele responde com a lista de arquivos. Cada comando é uma frase curta, e quase sempre tem um resultado imediato. Diferente de uma janela gráfica, onde você clica em vários lugares para chegar no que quer, no terminal você diz exatamente o que quer numa linha só.

O QTerminal é um emulador de terminal — ou seja, ele não é o terminal de verdade, é um programa que finge ser um terminal antigo de monitor verde dentro de uma janela. Ele suporta abas, divisão de tela, atalhos personalizáveis, transparência, e o mais importante: roda o seu shell preferido (geralmente o \`bash\`) por baixo. Tudo o que você digitar é enviado para o bash, que executa e devolve o resultado.

Neste capítulo você vai abrir o QTerminal, conhecer seus principais atalhos, configurar visual e atalhos, criar abas e dividir a tela. Esses fundamentos te servirão por toda a vida com Linux — o terminal mudou pouco em 40 anos.`,codes:[{lang:"bash",code:`# Maneiras de abrir o QTerminal
# 1) Menu > Sistema > QTerminal
# 2) Atalho de teclado: Ctrl+Alt+T
# 3) Pelo lxqt-runner: Alt+F2 e digite "qterminal"
# 4) Pelo PCManFM-Qt: F4 dentro de qualquer pasta

# Veja a versão instalada
qterminal --version
# saída exemplo: qterminal 1.3.0`},{lang:"bash",code:`# Atalhos essenciais do QTerminal
# Ctrl+Shift+T      nova aba
# Ctrl+Shift+W      fecha a aba
# Ctrl+Shift+C      copia o texto selecionado
# Ctrl+Shift+V      cola o conteúdo do clipboard
# Ctrl+Shift+F      busca no histórico da tela
# Ctrl++/Ctrl+-     aumenta/diminui o tamanho da fonte
# F11               tela cheia`},{lang:"bash",code:`# Dividir a janela em painéis (split)
# Menu Arquivo > Nova subjanela > Vertical (ou Horizontal)
# ou atalhos:
# Ctrl+Shift+H      divisão horizontal
# Ctrl+Shift+E      divisão vertical
# Tab para alternar entre painéis.`},{lang:"bash",code:`# Onde fica a configuração
ls ~/.config/qterminal.org/
# saída: qterminal.ini  qterminal_drop.ini

# Trecho típico de qterminal.ini
grep -E "fontFamily|fontSize|colorScheme" ~/.config/qterminal.org/qterminal.ini
# saída exemplo:
# fontFamily=Monospace
# fontSize=11
# colorScheme=Linux`},{lang:"bash",code:`# QTerminal "drop-down": aparece quando aperta uma tecla, some quando aperta de novo
# Inicie em modo drop-down:
qterminal --drop &
# Por padrão, F12 mostra/esconde a janela.
# Útil para abrir o terminal rapidinho sobre o que estiver fazendo.`},{lang:"bash",code:`# Trocar o terminal padrão do sistema (se preferir outro como xterm)
sudo update-alternatives --config x-terminal-emulator
# Mostra uma lista numerada — escolha o número e Enter.
# Programas que abrem terminal (ex: F4 no PCManFM-Qt) usarão o novo.`}],points:["QTerminal é o emulador de terminal padrão do Lubuntu, escrito em Qt.","Suporta abas, painéis divididos (split), drop-down, busca e fonte ajustável.","Ctrl+Shift+C/V para copiar e colar — Ctrl+C/V não funciona porque Ctrl+C cancela comandos.","Configuração fica em ~/.config/qterminal.org/qterminal.ini (formato INI).","Modo --drop transforma o QTerminal em um terminal estilo Quake (F12 mostra/esconde).","Por baixo ele roda o shell padrão do usuário, definido em /etc/passwd (geralmente bash).","Iniciante comum: usar Ctrl+C achando que copia — Ctrl+C aborta o comando atual no terminal.","Iniciante comum: fechar a janela com X enquanto um processo roda — o processo morre junto."],alerts:[{type:"tip",content:"Use o modo drop-down (qterminal --drop) e configure-o para iniciar com a sessão. Você ganha um terminal a um toque de F12 sempre que precisar."},{type:"info",content:"Se o terminal travou (Ctrl+S é o vilão), aperte Ctrl+Q para destravar. Ctrl+S pausa a saída e Ctrl+Q libera de volta."},{type:"warning",content:"Não cole comandos copiados de sites desconhecidos sem ler antes. Sites maliciosos escondem comandos com truques de CSS — sempre confira no editor primeiro."}]},{slug:"lxqt-config",section:"lxqt-tour",title:"Centro de Configurações (lxqt-config)",difficulty:"iniciante",subtitle:"O painel de controle do Lubuntu, todo em um lugar.",intro:'Em vez de espalhar mil ícones de configuração pelo menu, o LXQt agrupa tudo em um único lugar chamado Centro de Configurações (`lxqt-config`). Pense nele como o "Painel de Controle" do Windows ou as "Preferências do Sistema" do macOS: uma janela com vários ícones, cada um cuidando de uma parte do sistema (aparência, atalhos, monitores, mouse, sessão, etc.).\n\nA vantagem dessa abordagem é a previsibilidade. Você sempre sabe onde procurar: abriu o Centro de Configurações, leu o nome do ícone, clicou. Não precisa decorar o nome do programa específico. Cada módulo dentro do centro é, na verdade, um programa separado (`lxqt-config-appearance`, `lxqt-config-monitor`, `lxqt-config-session`...), mas você não precisa saber disso para usar.\n\nA maioria das configurações altera arquivos em `~/.config/lxqt/`. Por exemplo, mudar o tema escreve em `~/.config/lxqt/lxqt.conf`; alterar atalhos globais escreve em `~/.config/lxqt/globalkeyshortcuts.conf`. Saber disso ajuda quando você quer fazer backup das suas preferências ou copiá-las para outra máquina: basta copiar a pasta inteira.\n\nNeste capítulo você vai abrir o Centro, conhecer os módulos mais usados (Aparência, Monitor, Atalhos Globais, Sessão), entender o que cada um faz, e descobrir como restaurar uma configuração que você quebrou. É o capítulo de "todo dia" da personalização.',codes:[{lang:"bash",code:`# Abrir o Centro de Configurações pelo terminal
lxqt-config
# Janela única com todos os módulos. Equivale a:
# Menu > Preferências > Centro de Configurações do LXQt`},{lang:"bash",code:`# Abrir um módulo específico direto (mais rápido)
lxqt-config-appearance      # tema, ícones, fontes
lxqt-config-monitor         # resolução, múltiplos monitores
lxqt-config-globalkeyshortcuts  # atalhos de teclado globais
lxqt-config-session         # programas que iniciam com a sessão
lxqt-config-input           # mouse, teclado, touchpad`},{lang:"bash",code:`# Onde ficam todas as configurações do LXQt
ls ~/.config/lxqt/
# saída típica:
# globalkeyshortcuts.conf   notifications.conf
# lxqt.conf                 panel.conf
# session.conf              lxqt-leave.conf`},{lang:"bash",code:`# Fazer backup das suas preferências do LXQt
tar czf lxqt-backup-$(date +%F).tar.gz \\
    ~/.config/lxqt \\
    ~/.config/openbox \\
    ~/.config/pcmanfm-qt \\
    ~/.config/qterminal.org
# Cria um arquivo .tar.gz com tudo. Restaura com:
# tar xzf lxqt-backup-2024-05-10.tar.gz -C /`},{lang:"ini",code:`# Trecho de ~/.config/lxqt/lxqt.conf
[General]
icon_theme=Papirus
theme=Lubuntu Arc
single_click=false

[Qt]
font="Ubuntu,11,-1,5,50,0,0,0,0,0"
style=Fusion`},{lang:"bash",code:`# Resetar TUDO do LXQt (cuidado — deslogue antes)
mv ~/.config/lxqt ~/.config/lxqt.broken
# Faça logout e login. Na próxima sessão, o LXQt cria
# uma pasta lxqt nova, com tudo no padrão.`}],points:["lxqt-config é a janela principal; agrupa todos os módulos de configuração.","Cada módulo é um programa separado (lxqt-config-appearance, lxqt-config-monitor, etc.).","Configurações ficam em ~/.config/lxqt/ no formato INI — fácil de editar e versionar.","Aparência (tema, ícones, fonte) está em lxqt-config-appearance.","Atalhos globais (Super+E, Print Screen, etc.) ficam em lxqt-config-globalkeyshortcuts.","Programas que iniciam com a sessão ficam em lxqt-config-session > Autostart.",'Iniciante comum: confundir "atalhos do Openbox" com "atalhos globais do LXQt" — são dois lugares diferentes.',"Iniciante comum: editar lxqt.conf à mão e errar a sintaxe — o módulo gráfico sobrescreve sem avisar."],alerts:[{type:"tip",content:"Antes de mexer em qualquer configuração, tire um backup com tar do diretório ~/.config/lxqt. Restaurar leva 2 segundos e te tira de qualquer atrapalhada."},{type:"info",content:'O módulo "Sessão" é o lugar para escolher se o som inicia mudo, se o painel volta ao default a cada login, e quais apps abrem automaticamente.'},{type:"warning",content:"Em monitores 4K, lembre de aumentar a fonte do sistema (lxqt-config-appearance) e o tamanho dos ícones do painel separadamente — eles não se ajustam sozinhos."}]},{slug:"area-notificacao",section:"lxqt-tour",title:"Área de notificação e bandeja do sistema",difficulty:"iniciante",subtitle:"Os iconezinhos do canto direito: rede, som, bateria, atualizações.",intro:`Olhando para o canto direito do painel, você vê uma fileira de iconezinhos: o sinal de Wi-Fi, o ícone de som, o nível da bateria (se for laptop), talvez um envelope se vier mensagem nova. Essa região se chama "bandeja do sistema" (system tray) ou "área de notificação". Ela é o lugar onde programas em segundo plano avisam de coisas sem abrir uma janela inteira.

A bandeja do LXQt segue dois padrões distintos. O antigo, chamado XEmbed (ou só "tray"), é onde apps tradicionais colocam um ícone que aceita clique direito. O moderno, chamado StatusNotifier, é usado por apps mais novos (Telegram, Dropbox, KeePassXC) e suporta menus mais ricos. Ambos coexistem sem briga: o painel mostra os dois lados juntos.

Além dos ícones, o LXQt tem um sistema de "notificações pop-up" — aquelas mensagens que aparecem por alguns segundos no canto da tela ("Bateria fraca", "Você recebeu uma mensagem"). Quem cuida disso é o \`lxqt-notificationd\`, um pequeno daemon que recebe as notificações de todos os programas e mostra na tela. É bem leve e configurável.

Neste capítulo você vai entender quem é quem nessa parte do painel, configurar o que aparece, mexer nas notificações pop-up, e diagnosticar problemas comuns como "o ícone do Wi-Fi sumiu" ou "as notificações não aparecem mais". Pequenos detalhes que fazem a diferença no dia a dia.`,codes:[{lang:"bash",code:`# Veja quais ícones estão sendo registrados na bandeja XEmbed
xprop -root | grep -E "_NET_SYSTEM_TRAY|MANAGER"
# Mostra o ID da janela responsável pela bandeja.
# Se não aparecer nada, o plugin "tray" não está ativo no painel.`},{lang:"bash",code:`# Confirme que o servidor de notificações está rodando
pgrep -a lxqt-notificationd
# saída exemplo:
# 1456 lxqt-notificationd

# Configure-o:
lxqt-config-notificationd
# Janela com posição na tela, tempo na tela, opacidade, etc.`},{lang:"bash",code:`# Mande uma notificação manual para testar
notify-send "Olá!" "Esta é uma notificação de teste."
# Aparece um pop-up no canto da tela por alguns segundos.

# Com ícone e prioridade:
notify-send -i dialog-warning -u critical \\
    "Bateria" "Restam 5%. Conecte o carregador."`},{lang:"bash",code:`# Programas comuns que vivem na bandeja
# nm-applet               ícone do NetworkManager (Wi-Fi/Ethernet)
# pavucontrol-qt          mixer de áudio
# blueman-tray            bluetooth
# update-notifier         atualizações disponíveis
# pasystray               status do PulseAudio

# Veja se nm-applet está rodando:
pgrep -a nm-applet`},{lang:"bash",code:`# Reiniciar a bandeja se um ícone sumiu
killall lxqt-panel && lxqt-panel &
# Os apps que registram ícone (nm-applet, etc.) vão re-registrar
# automaticamente na bandeja recém-criada.`},{lang:"bash",code:`# Adicionar/remover plugins da bandeja no painel
# Clique direito no painel > Configurar painel > Widgets
# Plugins relevantes:
# - System Tray            (bandeja XEmbed antiga)
# - Status Notifier        (bandeja moderna StatusNotifier)
# - Notification           (mostra notificações armazenadas)
# Mantenha os dois primeiros ativos para máxima compatibilidade.`}],points:["A bandeja do sistema fica no canto direito do painel e mostra ícones de programas em segundo plano.","Existem dois protocolos coexistindo: System Tray (XEmbed, antigo) e Status Notifier (moderno).","lxqt-notificationd é o daemon que mostra as notificações pop-up na tela.",'notify-send envia uma notificação pelo terminal — útil para scripts ("backup terminado").',"Configure tempo, posição e estilo das notificações em lxqt-config-notificationd.","Se um ícone some, reiniciar lxqt-panel costuma resolver: killall lxqt-panel && lxqt-panel &.","Iniciante comum: achar que perdeu o Wi-Fi quando só sumiu o ícone — a conexão pode estar funcionando.",'Iniciante comum: confundir "bandeja" (ícones permanentes) com "notificações" (pop-ups temporários).'],alerts:[{type:"tip",content:'Se o ícone de bateria sumiu em um laptop, instale e ative o plugin "Battery" no painel. Ele lê /sys/class/power_supply diretamente, sem depender do app de notificações.'},{type:"info",content:'Notificações antigas podem ser revisadas pelo plugin "Notification" no painel. Útil para ver o que apareceu enquanto você estava no banheiro.'},{type:"warning",content:"Não desative o plugin Status Notifier se você usa apps modernos como Telegram ou Discord — sem ele, esses apps somem da bandeja e parecem ter fechado."}]}],zq=[{slug:"temas-lxqt",section:"personalizacao",title:"Temas do LXQt",difficulty:"iniciante",subtitle:"Trocando cores, bordas e estilo geral das janelas.",intro:`Tema é a roupa do seu sistema. O Lubuntu vem com uma roupa padrão (cinza azulado, bordas finas, fontes claras), mas trocar é fácil — e ajuda a deixar o computador com a sua cara. Pense como mudar o papel de parede do celular: o conteúdo continua o mesmo, só o visual muda.

No LXQt, "tema" é dividido em três coisinhas que se misturam: o tema do LXQt em si (cores do painel, do menu, das caixas de diálogo), o tema dos widgets Qt (botões, campos de texto, abas) e o tema do gerenciador de janelas Openbox (bordas das janelas, barra de título). Cada um se ajusta em um lugar diferente. Soa complicado, mas você descobre rápido onde fica cada coisa.

A ferramenta principal chama-se LXQt Configuration Center, que é só um menu com vários ícones. Para temas, você vai usar três entradas: "Aparência" (LXQt + Qt) e "Openbox Settings" (bordas). Tudo é GUI: clica, escolhe, aplica.

No fim deste capítulo, você terá um Lubuntu com a cara que quiser — claro, escuro, colorido, sóbrio. E saberá explicar a diferença entre os três níveis de tema, o que é meio-caminho para entender qualquer outro desktop Linux.`,codes:[{lang:"bash",code:`# Abra o Centro de Configuração do LXQt pelo menu, ou digite no terminal:
lxqt-config
# Abre uma janela cheia de ícones de configuração.
# Procure "Aparência" (Appearance).`},{lang:"bash",code:`# Atalho direto para a tela de aparência:
lxqt-config-appearance
# Aba "Tema do LXQt": muda cores do painel e menus.
# Aba "Estilo dos widgets": muda botões e campos (engines: Breeze, Fusion, etc.).
# Aba "Tema de ícones": muda os iconezinhos.
# Aba "Fonte": muda a fonte padrão.`},{lang:"bash",code:`# Para mudar bordas e barra de título das janelas, abra o Openbox:
obconf-qt
# Aba "Tema": escolha entre Clearlooks, Onyx, Mikachu...
# Os temas Openbox vêm em /usr/share/themes/
ls /usr/share/themes/
# saída: Clearlooks  Mikachu  Onyx  ...`},{lang:"bash",code:`# Instalar mais temas Qt populares:
sudo apt update
sudo apt install qt5-style-kvantum qt5-style-kvantum-themes -y
# Depois, abra a aparência e escolha "kvantum" como engine.
# Para configurar variantes do Kvantum:
kvantummanager`},{lang:"bash",code:`# Onde os temas ficam guardados:
# Globais (todos os usuários):
ls /usr/share/lxqt/themes/
# Só para você:
ls ~/.local/share/lxqt/themes/   # pode não existir ainda
# Coloque temas baixados em ~/.local/share/lxqt/themes/<nome>/`},{lang:"bash",code:`# Tema escuro rápido: vá em lxqt-config-appearance
# e escolha "Frost" ou "Dark" no tema do LXQt,
# depois em "Estilo dos widgets" escolha "Breeze" e marque "Dark".
# Aplique e veja a mágica.

# Se algo ficar estranho (texto sumindo, contraste ruim),
# volte ao tema padrão "Lubuntu Arc" e tente de novo.`}],points:["Tema no LXQt tem três camadas: tema LXQt, estilo de widgets Qt e tema Openbox.","lxqt-config-appearance abre direto a tela de aparência.","obconf-qt cuida das bordas e barra de título das janelas.","Temas globais ficam em /usr/share/themes e /usr/share/lxqt/themes.","Temas só seus ficam em ~/.local/share/lxqt/themes/ (crie a pasta se não existir).","Kvantum é uma engine Qt poderosa para temas mais elaborados.","Iniciante comum: trocar só o tema LXQt e estranhar que botões continuam iguais — falta mudar o estilo dos widgets também.","Iniciante comum: instalar tema GTK pensando que muda tudo — no LXQt o que manda é Qt."],alerts:[{type:"tip",content:"Se quiser testar um tema sem se comprometer, faça as mudanças, faça login em outro usuário e veja como fica antes de aplicar de vez no seu perfil."},{type:"warning",content:"Temas baixados de sites aleatórios podem trazer arquivos quebrados. Prefira opensesktop.org e o repositório oficial do Lubuntu antes de sair clicando em qualquer link."},{type:"info",content:"Aplicativos GTK (como Firefox e GIMP) usam outro sistema de tema. Para casar visualmente, instale lxqt-qtplugin e um tema GTK parecido com seu Qt."}]},{slug:"icones-lubuntu",section:"personalizacao",title:"Ícones e cursores",difficulty:"iniciante",subtitle:"Trocando os iconezinhos do menu, da área de trabalho e do mouse.",intro:`Ícones são as figurinhas pequenas que aparecem em todo lugar: no menu, no gerenciador de arquivos, na barra de tarefas. Um pacote de ícones é uma coleção dessas figurinhas com um estilo próprio (planos, coloridos, monocromáticos). Trocar todos de uma vez muda completamente a cara do sistema, sem mexer em mais nada.

O cursor do mouse também é um "ícone" especial. O Lubuntu usa por padrão o cursor "Adwaita" (preto e branco simples). Existem temas de cursor com setas mais grossas, animações e até cores. Útil para quem tem dificuldade enxergando ou só quer algo mais bonito.

A grande sacada: ícones e cursores no Linux seguem um padrão chamado "freedesktop". Isso significa que um pacote de ícones funciona em qualquer ambiente — Lubuntu, Xubuntu, Kubuntu, GNOME — sem adaptação. Você baixa uma vez e usa em todo lugar.

Vamos ver como instalar pacotes de ícones do repositório oficial, como adicionar pacotes baixados manualmente e como aplicar tudo isso pela interface gráfica.`,codes:[{lang:"bash",code:`# Pacotes de ícones populares no repositório oficial:
sudo apt update
sudo apt install papirus-icon-theme -y          # Papirus: colorido, moderno
sudo apt install numix-icon-theme -y            # Numix: plano e elegante
sudo apt install breeze-icon-theme -y           # Breeze: padrão do KDE
# Depois de instalar, escolha em lxqt-config-appearance > Tema de ícones`},{lang:"bash",code:`# Onde os ícones ficam:
ls /usr/share/icons/
# saída: Adwaita  breeze  hicolor  Papirus  ...

# Para instalar tema só para você (sem sudo):
mkdir -p ~/.local/share/icons
# baixe um .tar.gz, descompacte dentro dessa pasta:
tar -xzf MeuTemaIcones.tar.gz -C ~/.local/share/icons/`},{lang:"bash",code:`# Cursores: instalar pacote popular
sudo apt install dmz-cursor-theme -y
sudo apt install breeze-cursor-theme -y

# Aplicar pelo terminal (mudança imediata):
# Abra lxqt-config-appearance > Aba "Tema de cursor"
# Ou edite manualmente:
nano ~/.icons/default/index.theme
# conteúdo:
# [Icon Theme]
# Inherits=breeze_cursors`},{lang:"bash",code:`# Listar todos os temas de cursor disponíveis:
ls /usr/share/icons/ | grep -i cursor
# saída exemplo:
# Adwaita
# breeze_cursors
# DMZ-Black
# DMZ-White`},{lang:"bash",code:`# Atualizar o cache de ícones (se um tema novo não aparecer):
sudo gtk-update-icon-cache /usr/share/icons/Papirus
# Em geral, só fazer logout e login resolve.

# Testar visualmente: abra um menu, abra o PCManFM-Qt
# e veja se os ícones mudaram.`}],points:["Ícones e cursores seguem o padrão freedesktop e funcionam em qualquer desktop Linux.","Pacotes ficam em /usr/share/icons (globais) ou ~/.local/share/icons (só seu).","Aplique em lxqt-config-appearance, abas 'Tema de ícones' e 'Tema de cursor'.","Papirus, Numix e Breeze são opções populares e bem mantidas no apt.","O cursor padrão pode ser trocado para um maior se você tem dificuldade de enxergar.","Faça logout/login depois de instalar tema novo se ele não aparecer na lista.","Iniciante comum: copiar ícones para a pasta errada e achar que não funciona — precisa ser /usr/share/icons ou ~/.local/share/icons.","Iniciante comum: confundir 'tema do sistema' com 'tema de ícones' — são duas configurações diferentes."],alerts:[{type:"tip",content:"Papirus tem três variantes: Papirus, Papirus-Dark e Papirus-Light. Escolha a que combina com o seu tema geral para tudo ficar harmonioso."},{type:"info",content:"Aplicações Snap e Flatpak às vezes ignoram o tema de ícones do sistema porque rodam isoladas. É chato, mas é normal — não é falha sua."},{type:"warning",content:"Cursores muito grandes (acima de 48px) podem ficar cortados em algumas aplicações antigas. Teste antes de configurar tamanhos exagerados."}]},{slug:"fontes-sistema",section:"personalizacao",title:"Fontes do sistema",difficulty:"iniciante",subtitle:"Instalando, escolhendo e ajustando renderização de fontes.",intro:`Fonte é o desenho das letras. Pode parecer detalhe, mas trocar a fonte do sistema muda como você se sente usando o computador. Letras mais arredondadas dão ar amigável; letras mais técnicas (monoespaçadas) ajudam a ler código. O Lubuntu vem com a fonte "Noto Sans" como padrão — boa, mas você pode trocar à vontade.

Existem dois tipos importantes: fontes proporcionais (cada letra tem sua largura — usadas em textos comuns) e fontes monoespaçadas (todas as letras ocupam o mesmo espaço — usadas em terminal e código). Você define cada uma separadamente: uma para o sistema em geral, outra para o terminal.

Renderização é como o computador desenha a fonte na tela. Um detalhe técnico chamado "hinting" e outro chamado "antialiasing" controlam se as letras ficam suaves ou cristalinas. Em monitores de baixa resolução (laptops antigos), ajustar isso faz uma diferença visível. Em telas modernas (Full HD em diante), o padrão já fica bom.

Vamos ver como instalar fontes novas (incluindo fontes da Microsoft e fontes para programar), como trocar a fonte global e como ajustar a renderização.`,codes:[{lang:"bash",code:`# Instalar pacotes de fontes do repositório
sudo apt update
sudo apt install fonts-noto -y                 # Noto: cobre quase todo idioma
sudo apt install fonts-firacode -y             # Fira Code: ótima para programar (com ligaduras)
sudo apt install fonts-jetbrains-mono -y       # JetBrains Mono: outra ótima para código
sudo apt install fonts-cantarell -y            # Cantarell: redonda e moderna`},{lang:"bash",code:`# Para usar fontes da Microsoft (Arial, Times, Verdana...)
# precisa aceitar o EULA durante a instalação.
sudo apt install ttf-mscorefonts-installer -y
# Aceite o termo com Tab até OK e Enter.`},{lang:"bash",code:`# Instalar fonte baixada manualmente (.ttf ou .otf)
# Globais (todos os usuários):
sudo cp MinhaFonte.ttf /usr/share/fonts/truetype/
sudo fc-cache -fv         # atualiza o cache de fontes

# Só para você:
mkdir -p ~/.local/share/fonts
cp MinhaFonte.ttf ~/.local/share/fonts/
fc-cache -fv`},{lang:"bash",code:`# Listar fontes instaladas
fc-list | head            # mostra as primeiras
fc-list | wc -l           # conta total
# exemplo: 482

# Filtrar por nome:
fc-list | grep -i "fira"`},{lang:"bash",code:`# Mudar fonte do sistema:
# Abra lxqt-config-appearance > aba "Fontes"
# Escolha família, tamanho, suavização (antialiasing) e hinting.

# Sugestão para legibilidade em tela:
# - Família: Noto Sans  ou  Cantarell
# - Tamanho: 10-11pt
# - Antialiasing: ativado
# - Hinting: Slight (em telas Full HD) ou Full (em telas antigas)`},{lang:"bash",code:`# Para o terminal QTerminal:
# Editar > Preferências > Aparência > Fonte
# Recomendado: Fira Code 11pt ou JetBrains Mono 11pt
# Ative ligaduras se a fonte tiver (=> vira uma única seta bonita).`}],points:["Fontes proporcionais para texto, monoespaçadas para terminal/código.","Pacotes começam com 'fonts-' no apt: fonts-firacode, fonts-noto, etc.","Globais vão em /usr/share/fonts/, suas em ~/.local/share/fonts/.","Sempre rode fc-cache -fv depois de copiar fontes manualmente.","ttf-mscorefonts-installer traz Arial, Times etc. (precisa aceitar EULA).","Em monitores HD/4K o padrão já fica bom; em telas antigas, ajustar hinting ajuda.","Iniciante comum: copiar fonte para a pasta certa, esquecer fc-cache e achar que 'não instalou'.","Iniciante comum: trocar a fonte do sistema e estranhar que o terminal continua igual — terminal tem configuração própria."],alerts:[{type:"tip",content:"Para programar, instale Fira Code ou JetBrains Mono. As ligaduras transformam '!=' em '≠' visualmente, sem mudar o código real. Vicia rápido."},{type:"info",content:"fc-list mostra TODAS as fontes registradas. Use fc-match 'Fira Code' para ver qual fonte o sistema escolheria de fato."},{type:"warning",content:"Não abuse: ter centenas de fontes instaladas atrasa a abertura de programas como LibreOffice e Inkscape, que carregam a lista inteira ao abrir."}]},{slug:"papel-parede",section:"personalizacao",title:"Papel de parede",difficulty:"iniciante",subtitle:"Mudando o fundo da área de trabalho e usando rotação automática.",intro:`O papel de parede (wallpaper) é a foto que aparece atrás dos ícones da área de trabalho. É a personalização mais visível — em segundos você troca o "humor" do desktop. O Lubuntu vem com algumas opções padrão (paisagens suaves, gradientes), mas você pode usar qualquer imagem JPG ou PNG.

No LXQt, quem cuida da área de trabalho é o PCManFM-Qt (o gerenciador de arquivos). Isso significa que mudar o papel de parede é configuração do PCManFM-Qt, não do "sistema" abstrato. Faz sentido depois que você sabe, mas confunde no começo.

Existem três jeitos de aplicar: clicar com o botão direito na área de trabalho e escolher "Configurações da área de trabalho", abrir o gerenciador de arquivos e ir nas preferências, ou usar o terminal com o comando pcmanfm-qt --set-wallpaper. Para quem quer trocar automaticamente a cada X minutos (slideshow), instala-se um aplicativo extra chamado variety.

Vamos ver os três caminhos e configurar uma rotação bonita usando suas próprias fotos.`,codes:[{lang:"bash",code:`# Caminho 1 (mais fácil):
# Clique com botão direito na área de trabalho > "Configurações da área de trabalho"
# Aba "Plano de fundo" > escolha imagem > clique Aplicar.

# Modo de exibição:
# - Esticar: distorce, ruim
# - Ajustar: mantém proporção, sobra borda
# - Cobrir: preenche, corta um pouco
# - Centralizar: tamanho original no meio`},{lang:"bash",code:`# Caminho 2 (terminal, sem GUI):
pcmanfm-qt --set-wallpaper="/home/$USER/Imagens/minha_foto.jpg"

# Modo de exibição:
pcmanfm-qt --wallpaper-mode=stretch     # esticar
pcmanfm-qt --wallpaper-mode=fit         # ajustar
pcmanfm-qt --wallpaper-mode=crop        # cobrir
pcmanfm-qt --wallpaper-mode=center      # centralizar`},{lang:"bash",code:`# Onde ficam os papéis de parede do Lubuntu:
ls /usr/share/lubuntu/wallpapers/
# saída: lubuntu-default-wallpaper.jpg  ...

# Crie sua coleção pessoal:
mkdir -p ~/Imagens/wallpapers
# Copie suas fotos para lá e aponte o seletor para essa pasta.`},{lang:"bash",code:`# Slideshow automático com Variety:
sudo apt install variety -y

# Abra Variety pelo menu (ou variety no terminal).
# Configure a pasta de imagens, intervalo (ex: 10 min) e
# fontes online (Unsplash, Wallhaven). Pronto, rotação automática.`},{lang:"bash",code:`# Trocar papel via script (útil para automação):
cat > ~/trocar_wallpaper.sh << 'EOF'
#!/bin/bash
# Sorteia uma imagem da pasta e aplica como wallpaper
ARQ=$(ls ~/Imagens/wallpapers/*.jpg | shuf -n 1)
pcmanfm-qt --set-wallpaper="$ARQ"
EOF

chmod +x ~/trocar_wallpaper.sh
# Rode com:
~/trocar_wallpaper.sh`}],points:["No LXQt, papel de parede é responsabilidade do PCManFM-Qt.","Clicar com botão direito na área de trabalho é o caminho mais rápido.","Modo de exibição mais usado é 'crop' (preencher cortando se preciso).","Variety faz slideshow automático com fontes online incluídas.","Imagens em ~/Imagens/wallpapers/ é uma boa convenção pessoal.","Comando pcmanfm-qt --set-wallpaper permite scripts de automação.","Iniciante comum: salvar imagem em /tmp e ela 'sumir' depois — /tmp é apagada ao desligar.","Iniciante comum: aplicar wallpaper grande em tela pequena e estranhar que fica pixelado — escolha imagem com resolução compatível."],alerts:[{type:"tip",content:"Para wallpapers em alta resolução, sites como unsplash.com e wallhaven.cc são ótimos. Baixe na resolução do seu monitor (geralmente 1920x1080 ou 1366x768)."},{type:"info",content:"Se você usar dois monitores, pode definir wallpapers diferentes em cada um pela aba 'Plano de fundo' das configurações do desktop."},{type:"warning",content:"Imagens muito grandes (>10MB ou >4K) podem deixar o desktop lento ao iniciar. Redimensione para o tamanho do monitor antes de usar."}]},{slug:"atalhos-teclado",section:"personalizacao",title:"Atalhos de teclado",difficulty:"iniciante",subtitle:"Criando combinações que abrem programas e fazem ações com uma tecla.",intro:`Atalho de teclado é uma combinação de teclas (geralmente uma "tecla âncora" como Ctrl, Alt ou Super junto com uma letra) que dispara uma ação. Em vez de procurar o programa no menu, você aperta Ctrl+Alt+T e o terminal abre na hora. Quem domina atalhos trabalha o dobro mais rápido.

A "tecla Super" é aquela com o logo do Windows (em teclados PC) ou Command (em alguns teclados Mac). Em Linux ela vira o atalho favorito para abrir lançadores e janelas, justamente porque não conflita com nada de aplicativo.

No Lubuntu, atalhos globais (que funcionam em qualquer lugar) são gerenciados pelo lxqt-config-globalkeyshortcuts. Ali você cria combinação + comando. Para atalhos de janelas (mover, maximizar, fechar), o responsável é o Openbox, com seu próprio arquivo de configuração XML.

Vamos cadastrar atalhos úteis: abrir terminal, abrir navegador, screenshot, e ver como editar atalhos do Openbox para gerenciar janelas como um profissional.`,codes:[{lang:"bash",code:`# Abrir o gerenciador de atalhos globais:
lxqt-config-globalkeyshortcuts
# Ou: Menu > Preferências > Atalhos de teclado

# Clique em "Adicionar" > "Comando"
# Defina a tecla e o comando, ex: Ctrl+Alt+T -> qterminal`},{lang:"bash",code:`# Atalhos clássicos para configurar:
# Ctrl+Alt+T  -> qterminal              (abrir terminal)
# Super+E     -> pcmanfm-qt             (abrir gerenciador de arquivos)
# Super+B     -> firefox                (abrir navegador)
# Print       -> lximage-qt --screenshot (capturar tela)
# Super+L     -> lxqt-leave --lockscreen (bloquear tela)`},{lang:"bash",code:`# Atalhos do Openbox (gerenciam janelas)
# Arquivo: ~/.config/openbox/lxqt-rc.xml
# Edite com cuidado — é XML.

# Para editar com um editor de texto:
nano ~/.config/openbox/lxqt-rc.xml
# Procure a seção <keyboard>...</keyboard>`},{lang:"xml",code:`<!-- Exemplo de bloco em ~/.config/openbox/lxqt-rc.xml -->
<keybind key="W-Left">
  <!-- Super+Esquerda: cola janela na metade esquerda -->
  <action name="UnmaximizeFull"/>
  <action name="MoveResizeTo">
    <x>0</x><y>0</y>
    <width>50%</width><height>100%</height>
  </action>
</keybind>

<keybind key="W-Right">
  <!-- Super+Direita: cola janela na metade direita -->
  <action name="UnmaximizeFull"/>
  <action name="MoveResizeTo">
    <x>50%</x><y>0</y>
    <width>50%</width><height>100%</height>
  </action>
</keybind>`},{lang:"bash",code:`# Depois de editar o XML, recarregue o Openbox sem reboot:
openbox --reconfigure
# saída: (nada, se deu certo)
# Se houver erro de XML, aparece no terminal — corrija a sintaxe.`},{lang:"bash",code:`# Listar atalhos atuais (lendo o XML):
grep -A1 "keybind key" ~/.config/openbox/lxqt-rc.xml | head -40

# Se algo der muito errado, restaure o padrão:
cp /etc/xdg/openbox/LXQt/rc.xml ~/.config/openbox/lxqt-rc.xml
openbox --reconfigure`}],points:["Atalhos globais: configure em lxqt-config-globalkeyshortcuts (interface gráfica).","Atalhos de janelas: edite ~/.config/openbox/lxqt-rc.xml (XML).","Tecla Super (logo Windows) é aparece como W- no Openbox e Super- na interface LXQt.","Sempre rode 'openbox --reconfigure' depois de editar o XML.","Print é o atalho clássico para screenshot — aponte para lximage-qt.","Atalhos comuns (Ctrl+C, Ctrl+V) são da aplicação, não do sistema — não mude.","Iniciante comum: editar XML do Openbox e quebrar a sintaxe — sempre faça backup antes.","Iniciante comum: criar dois atalhos com mesma combinação e ficar com um 'fantasma' que não funciona."],alerts:[{type:"tip",content:"Antes de editar o lxqt-rc.xml, faça backup: cp ~/.config/openbox/lxqt-rc.xml ~/.config/openbox/lxqt-rc.xml.bak. Se algo quebrar, é só restaurar."},{type:"warning",content:"Não use Ctrl+Alt+F1 a F6 como atalho — essas combinações trocam para terminais virtuais (TTY) do sistema e podem te tirar do desktop."},{type:"info",content:"Se você usa vários idiomas no teclado, lembre que atalhos com letras seguem o layout atual. Em teclado ABNT2, Super+Ç pode não funcionar como esperado em outro layout."}]},{slug:"autostart-apps",section:"personalizacao",title:"Aplicativos no início (autostart)",difficulty:"iniciante",subtitle:"Programas que abrem sozinhos quando você liga o computador.",intro:`Autostart é a lista de programas que abrem automaticamente quando você faz login no Lubuntu. É como deixar a cafeteira programada: você liga o computador, vai escovar os dentes, e quando volta o WhatsApp Desktop, o e-mail e o Spotify já estão prontos.

Cada usuário tem sua própria lista, guardada em arquivos .desktop (atalhos especiais que descrevem o programa). O Lubuntu segue um padrão freedesktop: arquivos em ~/.config/autostart/ são executados no login. Isso significa que qualquer ambiente Linux moderno entende esse mesmo formato.

Tem dois jeitos de cadastrar: pela interface gráfica (lxqt-config-session, aba "Autostart") ou colocando um .desktop manualmente na pasta. A interface é mais fácil, mas saber editar o arquivo direto é útil quando você quer passar parâmetros específicos ou agendar um script seu.

Cuidado, porém: cada programa no autostart consome RAM e atrasa o login. Em máquina antiga (que é onde Lubuntu costuma rodar), exagerar pode tirar a graça da leveza. Vamos ver como adicionar, remover e quais cuidados tomar.`,codes:[{lang:"bash",code:`# Abrir o gerenciador de sessão (aba autostart):
lxqt-config-session
# Aba "Autostart" mostra lista atual.
# Botão "Adicionar" pede comando + nome.`},{lang:"bash",code:`# Onde ficam os arquivos autostart do usuário:
ls ~/.config/autostart/
# Cada arquivo é um .desktop apontando para um programa.

# Criar um manualmente (exemplo: abrir Firefox no login):
nano ~/.config/autostart/firefox.desktop`},{lang:"ini",code:`# Conteúdo de ~/.config/autostart/firefox.desktop
[Desktop Entry]
Type=Application
Name=Firefox
Exec=firefox
Icon=firefox
X-GNOME-Autostart-enabled=true
# Comentários começam com # e são ignorados.`},{lang:"bash",code:`# Para desativar temporariamente sem apagar:
# Edite o arquivo e troque para:
# X-GNOME-Autostart-enabled=false
# Ou na interface, desmarque a caixinha do programa.

# Para apagar de vez:
rm ~/.config/autostart/firefox.desktop`},{lang:"bash",code:`# Atrasar o início para não pesar tudo de uma vez:
# Use 'sleep' antes do comando:
nano ~/.config/autostart/spotify.desktop`},{lang:"ini",code:`# Spotify abrindo 30 segundos depois do login
[Desktop Entry]
Type=Application
Name=Spotify
Exec=sh -c "sleep 30 && spotify"
Icon=spotify
X-GNOME-Autostart-enabled=true`},{lang:"bash",code:`# Programas que TODOS os usuários abrem no login:
ls /etc/xdg/autostart/
# Mexer aqui é "nível sistema" — precisa sudo.
# Útil em laboratórios, quiosques.`}],points:["Arquivos .desktop em ~/.config/autostart/ são executados ao fazer login.","lxqt-config-session > aba Autostart é a forma gráfica de gerenciar.","X-GNOME-Autostart-enabled=false desativa sem apagar.","sleep N antes do Exec atrasa o início para não pesar tudo junto.","Programas globais ficam em /etc/xdg/autostart/ (precisa sudo).","Cada autostart consome RAM e atrasa o login — modere em máquinas fracas.","Iniciante comum: por o navegador no autostart e reclamar que o sistema está 'lento' — é o navegador comendo memória.","Iniciante comum: editar arquivo .desktop com sintaxe errada e o programa silenciosamente não abrir."],alerts:[{type:"tip",content:"Em vez de scripts maiores no autostart, crie um único script ~/bin/login-tasks.sh e chame ele. Fica organizado e fácil de manter."},{type:"warning",content:"Cuidado ao colocar programas que pedem internet (Discord, Telegram) — se o Wi-Fi ainda não conectou, eles podem dar erro. Use sleep para esperar."},{type:"info",content:"Programas como NetworkManager Applet, gestor de bateria e área de notificação já vêm no autostart do Lubuntu por padrão. Não desative se não souber o que faz."}]},{slug:"multi-area-trabalho",section:"personalizacao",title:"Múltiplas áreas de trabalho",difficulty:"iniciante",subtitle:"Espalhe janelas em desktops virtuais para organizar melhor.",intro:`Imagine que sua mesa de verdade tivesse vários "andares". No primeiro, papéis do trabalho. No segundo, projeto pessoal. No terceiro, navegação e Netflix. Para trocar de assunto, é só pular um andar. Áreas de trabalho virtuais (workspaces) são exatamente isso, só que dentro do computador.

O Lubuntu vem configurado com 2 áreas por padrão, mas você pode aumentar para 4, 6, 9 — o que fizer sentido. Cada uma é independente: tem suas próprias janelas abertas, mas compartilha papel de parede, painel e barra de tarefas. Você troca entre elas com Ctrl+Alt+Esquerda/Direita ou clicando no "pager" (mini-mapa) no painel.

A vantagem é organização mental. Em vez de Alt+Tab procurando entre 20 janelas, você vai direto à área certa. Programadores costumam usar uma área para o editor, outra para o navegador, outra para o terminal. Estudantes podem ter "estudo" e "lazer" separados.

Vamos ver como ajustar a quantidade, como mover janelas entre áreas e como usar atalhos para voar entre elas. Depois disso, voltar a um único desktop parece pequeno demais.`,codes:[{lang:"bash",code:`# Configurar quantidade de áreas:
# Clique com botão direito no Pager (mini-mapa no painel)
# > "Configurar Pager" > defina "Número de desktops"
# Ou pelo Openbox:
obconf-qt
# Aba "Áreas de trabalho" > defina o número.`},{lang:"bash",code:`# Atalhos padrão para navegar:
# Ctrl + Alt + Esquerda  -> área anterior
# Ctrl + Alt + Direita   -> próxima área
# Ctrl + Alt + Home/End  -> primeira/última área

# Mover JANELA junto:
# Ctrl + Alt + Shift + Esquerda/Direita`},{lang:"bash",code:`# Adicionar o widget "Pager de Desktops" se sumir:
# Botão direito no painel > "Configurar painel"
# > Painel > "Adicionar plugins" > "Pager de Desktops"`},{lang:"bash",code:`# Mover janela atual para outra área via menu:
# Botão direito na barra de título > "Enviar para área" > escolha
# Ou aperte Alt+Espaço e use o menu da janela.`},{lang:"xml",code:`<!-- Atalho personalizado em ~/.config/openbox/lxqt-rc.xml -->
<keybind key="W-1">
  <!-- Super+1 vai para área 1 -->
  <action name="GoToDesktop"><to>1</to></action>
</keybind>
<keybind key="W-2">
  <action name="GoToDesktop"><to>2</to></action>
</keybind>
<keybind key="W-3">
  <action name="GoToDesktop"><to>3</to></action>
</keybind>
<keybind key="W-4">
  <action name="GoToDesktop"><to>4</to></action>
</keybind>`},{lang:"bash",code:`# Recarregue o Openbox para aplicar:
openbox --reconfigure

# Agora Super+1, Super+2 etc. teleportam você direto.`}],points:["Áreas de trabalho são 'andares' independentes para organizar janelas.","Padrão do Lubuntu são 2 áreas; configure mais em obconf-qt.","Ctrl+Alt+Esquerda/Direita troca entre áreas.","Adicione 'Shift' aos atalhos para levar a janela atual junto.","Pager no painel mostra mini-mapa visual das áreas.","Atalhos Super+1/2/3 são clássicos para teleporte direto.","Iniciante comum: criar 9 áreas e nunca usar — comece com 2 ou 3 e cresça se sentir falta.","Iniciante comum: 'perder' uma janela e achar que ela fechou — está em outra área."],alerts:[{type:"tip",content:"Combine áreas com regras do Openbox: o Firefox pode sempre abrir na área 2, o Telegram sempre na área 3. Isso vira hábito automático rápido."},{type:"info",content:"Áreas não consomem RAM extra — são só uma reorganização visual. Pode usar à vontade que não pesa o sistema."},{type:"warning",content:"Não confunda área de trabalho virtual (workspaces) com sessão de usuário. Cada usuário tem suas próprias áreas, mas elas vivem dentro da mesma sessão."}]},{slug:"conky-monitor",section:"personalizacao",title:"Conky: monitor leve no desktop",difficulty:"intermediario",subtitle:"Estatísticas do sistema desenhadas direto na área de trabalho.",intro:`Conky é um programinha mágico que desenha texto e gráficos sobre o seu papel de parede, sem janela e sem moldura. Você vê CPU, RAM, temperatura, tráfego de rede, hora — tudo flutuando no desktop. Em laptop antigo onde cada MB importa, é uma forma elegante de ver o que o sistema está fazendo sem abrir o Monitor de Sistema.

A configuração toda fica em um arquivo de texto chamado .conkyrc no seu diretório home. É um arquivo Lua (uma linguagem de script bem simples), mas você não precisa programar nada — só ajustar valores e copiar/colar blocos prontos. A internet está cheia de configurações Conky bonitas para usar de inspiração.

Conky é leve (geralmente menos de 10 MB de RAM) mas pode pesar se você abusar de gráficos animados ou intervalos de atualização muito curtos. A regra de ouro: comece simples (CPU, RAM, hora), veja se está rápido, e só depois adicione mais.

Vamos instalar, criar uma configuração mínima, deixar ela iniciar com o sistema e ver onde encontrar configurações prontas e bonitas para inspirar.`,codes:[{lang:"bash",code:`# Instalar Conky e suas dependências
sudo apt update
sudo apt install conky-all -y

# 'conky-all' já vem com tudo (Lua, Imlib2, Cairo).
# Para uma versão mais leve, use só 'conky-std'.`},{lang:"bash",code:`# Rode pela primeira vez (com configuração padrão)
conky &
# Aparece um bloco de texto cinza no canto da tela.
# Para fechar: pkill conky`},{lang:"bash",code:`# Crie sua configuração personalizada
nano ~/.conkyrc`},{lang:"ini",code:`-- ~/.conkyrc — versão minimalista
conky.config = {
    alignment = 'top_right',     -- canto superior direito
    background = true,           -- roda como daemon
    update_interval = 2,         -- atualiza a cada 2s
    own_window = true,
    own_window_type = 'desktop', -- fica colado no desktop
    own_window_transparent = true,
    use_xft = true,
    font = 'Noto Sans:size=10',
    default_color = 'white',
    minimum_width = 220,
    border_inner_margin = 10,
}

conky.text = [[
\${time %A, %d de %B} \${alignr}\${time %H:%M}
\${hr}
CPU: \${cpu}% \${alignr}\${cpubar 8,80}
RAM: \${memperc}% \${alignr}\${membar 8,80}
Uso disco /: \${fs_used_perc /}% \${alignr}\${fs_bar 8,80 /}
\${hr}
Up:   \${upspeed} \${alignr}\${downspeed} :Down
]]`},{lang:"bash",code:`# Rodar com a nova config:
pkill conky        # mata o anterior
conky -c ~/.conkyrc &
# Veja seu painelzinho aparecer no canto.`},{lang:"ini",code:`# Para iniciar com o sistema, crie ~/.config/autostart/conky.desktop
[Desktop Entry]
Type=Application
Name=Conky
Exec=sh -c "sleep 5 && conky -c /home/USUARIO/.conkyrc"
Icon=conky
X-GNOME-Autostart-enabled=true
# Substitua USUARIO pelo seu nome de usuário.
# O sleep evita conflito com outros programas iniciando juntos.`},{lang:"bash",code:`# Onde achar configs Conky prontas e bonitas:
# - https://github.com/brndnmtthws/conky/wiki
# - r/Conky no Reddit
# - opendesktop.org (categoria Conky)

# Salve a config em ~/.conkyrc, ajuste fontes/cores, aproveite.`}],points:["Conky desenha estatísticas direto sobre o papel de parede, sem janela.","Configuração fica em ~/.conkyrc usando sintaxe Lua simples.","update_interval em segundos: 2-5 é equilibrado, 1 pesa, 10 fica desatualizado.","alignment controla onde aparece: top_right, top_left, bottom_right, etc.","Use 'pkill conky' para fechar e relançar com nova config.","Para iniciar no boot, crie autostart com sleep para evitar conflitos.","Iniciante comum: configurar update_interval=1 e queixar-se que o Conky 'pesa' — aumente para 2 ou 3.","Iniciante comum: editar .conkyrc com sintaxe errada e o Conky abrir e fechar imediatamente — rode no terminal sem & para ver o erro."],alerts:[{type:"tip",content:"Para depurar, rode 'conky -c ~/.conkyrc' SEM o & no final. Erros de sintaxe aparecem no terminal e te mostram a linha exata."},{type:"info",content:"Conky entende centenas de variáveis: ${cpu}, ${memperc}, ${fs_used}, ${time}, ${battery}, ${wireless_essid}. Veja a wiki oficial para a lista completa."},{type:"warning",content:"Se você usar Conky com gráficos pesados (cairo, lua scripts complexos) em laptop antigo, vai ver a CPU subir. Comece simples e cresça aos poucos."},{type:"success",content:"Conky combinado com um wallpaper bonito vira aquele 'desktop dos sonhos' que aparece em fórum. Vale o esforço de configurar bem uma vez só."}]}],Dq=[{slug:"abrir-terminal",section:"terminal",title:"Abrindo o terminal pela primeira vez",difficulty:"iniciante",subtitle:"Conhecendo o QTerminal, o shell bash e perdendo o medo da tela preta.",intro:'O terminal parece assustador: fundo escuro, letras monoespaçadas e nenhum botão para clicar. Mas pense nele como a recepção de um hotel onde você fala direto com o gerente, em vez de procurar o painel certo no menu. Tudo o que o Lubuntu sabe fazer, você consegue pedir digitando — e quase sempre mais rápido do que no mouse.\n\nVale separar dois nomes que confundem todo iniciante. O **terminal** (no Lubuntu, o QTerminal) é só a janela — o "monitor e teclado". Quem realmente entende e executa os comandos é o **shell**, e o shell padrão do Ubuntu/Lubuntu se chama **bash**. Ou seja: você digita no QTerminal, o bash interpreta. Saber disso ajuda quando um tutorial fala "abra um shell" ou "no seu bash" — é tudo a mesma coisa aqui.\n\nAntes de digitar, entenda o que aparece: algo como `bruno@meupc:~$`. Esse é o **prompt** — usuário (`bruno`), `@`, nome da máquina (`meupc`), dois-pontos, a pasta atual (`~` é a sua casa) e o `$` avisando que está pronto para receber comando. Se em vez de `$` aparecer `#`, cuidado dobrado: você está como **root** (administrador) e um comando errado pode quebrar o sistema.\n\nNeste capítulo você vai abrir o terminal, ler cada pedaço do prompt, rodar seus primeiros comandos inofensivos, entender o erro mais comum de todos ("command not found") e deixar o QTerminal do seu jeito. Todo o resto desta trilha se apoia neste alicerce.',codes:[{lang:"bash",code:`# Abrir o terminal:
#   Menu (canto inferior esquerdo) > Sistema > QTerminal
#   ou o atalho padrão do Lubuntu:  Ctrl + Alt + T

# Já dentro dele, três comandos totalmente inofensivos:
whoami
# bruno
hostname
# meupc
date
# qua 06 mai 2026 14:32:10 -03`},{lang:"bash",code:`# Anatomia do prompt   bruno@meupc:~$
#   bruno   -> seu usuário
#   meupc   -> nome do computador (hostname)
#   ~       -> pasta atual (~ é atalho para /home/bruno)
#   $       -> usuário comum   |   # seria root (admin)

# Onde eu estou e qual shell estou usando?
pwd
# /home/bruno
echo "$SHELL"
# /bin/bash
bash --version | head -n1
# GNU bash, version 5.2.21(1)-release (x86_64-pc-linux-gnu)`},{lang:"bash",code:`# O erro mais comum do mundo: "command not found"
# Acontece por digitar errado ou por o programa não estar instalado.
neofetch
# Command 'neofetch' not found, did you mean:
#   command 'setfetch' from deb setfetch
# Try: sudo apt install <deb name>

# Correção 1 — foi só erro de digitação? confira o nome certo.
# Correção 2 — não está instalado? instale (veremos apt na trilha de Pacotes):
sudo apt install fastfetch -y
fastfetch      # agora funciona`},{lang:"bash",code:`# Limpar a tela quando bagunçar:
clear          # ou aperte Ctrl + L (não perde o que já digitou)

# Repetir o último comando sem redigitar: seta para cima.
# Sair do terminal:
exit           # ou Ctrl + D`},{lang:"bash",code:`# Abas e divisão de tela no QTerminal (sem abrir várias janelas):
#   Ctrl + Shift + T  -> nova aba
#   Ctrl + Tab        -> alterna entre abas
#   Ctrl + Shift + W  -> fecha a aba
#   Menu File > Split Terminal  -> divide a janela em dois painéis

# Copiar/colar no terminal NÃO é Ctrl+C/Ctrl+V (esses têm outro papel):
#   Ctrl + Shift + C  -> copiar
#   Ctrl + Shift + V  -> colar`},{lang:"bash",code:`# Ajustar a fonte (ótimo para enxergar melhor ou apresentar):
#   Ctrl + +  aumenta    Ctrl + -  diminui    Ctrl + 0  padrão

# Preferências salvas: menu  Settings > Preferences
#   - Fonte: Monospace 12 ou 13
#   - Tema escuro cansa menos a vista
#   - "Open new tabs adjacent to current"  deixa as abas organizadas`},{lang:"bash",code:`# Todo comando tem manual e ajuda embutidos — use antes de pesquisar fora:
man ls         # manual completo (q sai, /palavra busca, setas rolam)
ls --help      # resumo rápido das opções mais usadas
help cd        # ajuda de comandos internos do bash (cd, pwd, export...)
type ls        # diz o que 'ls' é: alias, programa ou builtin
# ls is aliased to 'ls --color=auto'`}],points:["O QTerminal é a janela; o bash é o shell que interpreta os comandos. No Lubuntu, o padrão é bash.","Abra em Sistema > QTerminal ou com Ctrl+Alt+T; feche com exit ou Ctrl+D.","Leia o prompt da esquerda para a direita: usuário@máquina:pasta$ (o $ vira # quando você é root).","whoami diz quem você é, hostname o nome da máquina, pwd a pasta atual — três checagens de orientação.",'"command not found" quase sempre é erro de digitação ou programa não instalado (instale com apt).',"Copiar/colar no terminal é Ctrl+Shift+C e Ctrl+Shift+V — o Ctrl+C puro interrompe o comando em execução.","Ctrl+L (ou clear) limpa a tela; a seta para cima repete o último comando.","Iniciante comum: digitar como no Word e não perceber que um espaço a mais ou letra trocada quebra tudo (o terminal não corrige).","Iniciante comum: ver o # no prompt e não notar que está como root — confira sempre antes de rodar algo pesado.","man comando e comando --help resolvem a maioria das dúvidas sem sair do terminal."],alerts:[{type:"tip",content:"Ajuste o QTerminal em Settings > Preferences: fonte 12–13, tema escuro e 'Open new tabs adjacent to current'. Pequenos ajustes que você agradece depois de horas de uso."},{type:"info",content:"Se o Ctrl+Alt+T não abrir nada, vá em Preferências do LXQt > Atalhos de teclado e crie um atalho para o comando 'qterminal'. Em algumas instalações ele não vem configurado."},{type:"warning",content:"Não cole comandos longos de sites desconhecidos sem ler. Existe um truque malicioso em que o texto copiado esconde um comando diferente do que aparece na tela."},{type:"success",content:"Abra o terminal pelo menos uma vez por dia de propósito. Em duas semanas a 'tela preta' vira o lugar mais rápido para metade das suas tarefas."}]},{slug:"navegacao-pastas",section:"terminal",title:"Navegando pelas pastas",difficulty:"iniciante",subtitle:"cd, ls, pwd e o mapa (FHS) do sistema de arquivos do Linux.",intro:'Imagine o sistema de arquivos do Linux como um prédio gigante. Na portaria fica a raiz, representada por uma simples barra `/`. Dela saem corredores padronizados: `/home` onde moram os usuários, `/etc` com os "manuais de configuração", `/usr` com os programas instalados, `/var` onde o sistema anota logs e caches. Essa padronização tem até nome oficial: **FHS** (Filesystem Hierarchy Standard) — por isso qualquer distro Linux tem as mesmas pastas nos mesmos lugares.\n\nPara andar por esse prédio bastam três comandos: `pwd` diz em que andar você está, `ls` mostra o que tem no andar e `cd` pega o elevador para outro lugar. Esses três resolvem 80% da navegação do dia a dia; o resto é atalho e opção.\n\nExistem dois tipos de endereço. O **caminho absoluto** começa na raiz (`/home/bruno/Documentos`) e funciona de qualquer lugar. O **caminho relativo** parte de onde você está agora (`Documentos`, se já estiver em `/home/bruno`). Some a isso os atalhos `~` (sua casa), `.` (pasta atual) e `..` (pasta de cima) e você navega sem digitar caminho gigante.\n\nCom um pouco de prática, achar arquivo no terminal fica mais rápido do que clicar no gerenciador. E quando você acessar a máquina pela rede via SSH (trilha de Rede), muitas vezes só vai ter o terminal — melhor dominar isso logo no começo.',codes:[{lang:"bash",code:`# Onde estou?
pwd
# /home/bruno

# O que tem aqui?
ls
# Documentos  Downloads  Imagens  Música  Modelos  Público  Vídeos`},{lang:"bash",code:`# Listagem detalhada: permissões, dono, tamanho e data
ls -l
# drwxr-xr-x 2 bruno bruno 4096 mai 10 09:12 Documentos
# -rw-r--r-- 1 bruno bruno 1234 mai 12 14:00 notas.txt

ls -la     # inclui arquivos ocultos (os que começam com .)
ls -lh     # tamanho legível: 4,0K, 1,2M, 3,1G em vez de bytes crus
ls -lt     # ordena por data (mais recentes primeiro)`},{lang:"bash",code:`# Trocar de pasta (cd = change directory)
cd Documentos        # relativo: entra em ./Documentos
pwd                  # /home/bruno/Documentos
cd /etc              # absoluto: vai direto, de qualquer lugar
cd ~                 # volta para a sua casa (/home/bruno)
cd                   # sem argumento: também volta para casa
cd -                 # volta para a PASTA ANTERIOR (alterna entre duas)`},{lang:"bash",code:`# Erros comuns de navegação — e o que eles significam:

cd notas.txt
# bash: cd: notas.txt: Not a directory
#  -> 'cd' só entra em PASTAS; notas.txt é arquivo.

cd /roott
# bash: cd: /roott: No such file or directory
#  -> caminho digitado errado (era /root). Confira com Tab.

cd /root
# bash: cd: /root: Permission denied
#  -> a casa do root é protegida; usuário comum não entra.`},{lang:"bash",code:`# Tab completion: o maior atalho contra erro de digitação.
# Comece a digitar e aperte Tab; se houver ambiguidade, Tab duas vezes lista.
cd Doc<Tab>          # completa para:  cd Documentos/
ls /et<Tab>          # completa para:  ls /etc/
cd ~/D<Tab><Tab>     # mostra as opções: Documentos/  Downloads/`},{lang:"bash",code:`# As pastas da raiz e para que servem (padrão FHS):
ls /
# bin  boot  dev  etc  home  lib  media  mnt  opt  proc  root  run
# sbin  srv  sys  tmp  usr  var
#
# etc   -> configurações do sistema (texto puro, editável com sudo)
# home  -> pastas pessoais dos usuários
# usr   -> programas instalados pelo apt
# var   -> logs, caches, filas, bancos de dados
# tmp   -> temporário; é esvaziado a cada reinício
# proc  -> "arquivos" virtuais do kernel (processos, hardware)`},{lang:"bash",code:`# Ver a árvore de pastas de uma vez (instale o tree):
sudo apt install tree -y
tree -L 2 ~/Documentos
# /home/bruno/Documentos
# ├── contas
# │   └── janeiro.pdf
# └── estudos
#     └── linux.txt
#
# -L 2 limita a 2 níveis de profundidade (senão despeja tudo).`}],points:["pwd mostra o caminho atual, ls lista o conteúdo, cd entra em outra pasta — o trio da navegação.","Caminho absoluto começa em / e funciona de qualquer lugar; relativo parte de onde você está.","~ é atalho para /home/seu-usuário; . é a pasta atual; .. sobe um nível.","cd - volta para a última pasta visitada — ótimo para alternar entre dois lugares.","ls -lh mostra tamanhos legíveis, ls -la inclui ocultos, ls -lt ordena por data.",'"Not a directory" = você tentou entrar num arquivo; "No such file" = caminho errado; "Permission denied" = pasta protegida.',"Aperte Tab para completar nomes: economiza tempo e evita a maioria dos erros de digitação.","Iniciante comum: confundir cd ~ (sua casa) com cd / (raiz do sistema).","Iniciante comum: escrever caminho com barra invertida \\ no estilo Windows — no Linux é sempre a barra normal /.","As pastas /etc, /var e /usr seguem o padrão FHS e existem igual em toda distro Linux."],alerts:[{type:"tip",content:"Decore três atalhos e sua navegação dobra de velocidade: cd .. (sobe um nível), cd - (volta à pasta anterior) e cd ~ (vai para casa)."},{type:"info",content:"Arquivos que começam com . (ponto) são 'ocultos' por convenção — quase sempre são configurações pessoais (ex.: ~/.bashrc). Use ls -a para vê-los."},{type:"warning",content:'"Permission denied" ao entrar em pastas como /root ou /var/log/algo não é bug: são áreas do sistema. Só acesse com sudo quando realmente precisar e souber o motivo.'}]},{slug:"manipular-arquivos",section:"terminal",title:"Criando, copiando e movendo arquivos",difficulty:"iniciante",subtitle:"mkdir, touch, cp, mv, rm — o quarteto do dia a dia (sem lixeira!).",intro:'Depois de andar pelas pastas, você vai querer mexer no conteúdo delas: criar arquivos, organizar em pastas, copiar para backup, mover de lugar e — com cuidado — apagar o que não serve mais. Esses comandos são o "novo arquivo, recortar, colar e excluir" do gerenciador gráfico, só que mais rápidos e automatizáveis em scripts.\n\nA grande pegadinha: **no terminal não existe Lixeira**. Quando você apaga com `rm`, o arquivo some na hora, sem confirmação e sem como desfazer pelo caminho normal. Por isso a regra de ouro é ler o comando duas vezes antes de apertar Enter — principalmente qualquer `rm` com `-r` ou com curinga (`*`).\n\nOs cinco pilares são: `mkdir` cria pastas, `touch` cria arquivo vazio, `cp` copia, `mv` move **ou** renomeia (no Linux é a mesma operação) e `rm` apaga. Juntando com os atalhos de caminho (`~`, `..`, `.`) e os curingas (`*`, `?`), eles cobrem quase toda manipulação básica.\n\nPara praticar sem risco, vamos usar sempre uma pasta de brincadeira (`~/sandbox`). Crie uma dessas sempre que for testar comando novo — é a sua rede de segurança.',codes:[{lang:"bash",code:`# Pasta de testes, para não mexer em nada de verdade:
mkdir ~/sandbox
cd ~/sandbox

# Criar vários arquivos vazios de uma vez:
touch nota.txt receita.txt lista.txt
ls
# lista.txt  nota.txt  receita.txt`},{lang:"bash",code:`# Criar árvore de pastas de uma vez (-p cria as intermediárias):
mkdir -p projeto/codigo/python projeto/docs

# Sem o -p, criar pasta dentro de pasta inexistente falha:
mkdir projeto2/docs
# mkdir: cannot create directory 'projeto2/docs': No such file or directory
#  -> a pasta 'projeto2' ainda não existe. Correção: use -p.
mkdir -p projeto2/docs   # agora funciona`},{lang:"bash",code:`# Copiar: cp origem destino
cp nota.txt nota_backup.txt
cp receita.txt projeto/docs/     # copia para outra pasta

# Copiar PASTA precisa do -r (recursivo):
cp projeto projeto-copia
# cp: -r not specified; omitting directory 'projeto'
#  -> correção:
cp -r projeto projeto-copia

# cp -i pergunta antes de sobrescrever um arquivo já existente:
cp -i nota.txt receita.txt
# cp: overwrite 'receita.txt'? n`},{lang:"bash",code:`# Mover é o mesmo que renomear (só muda o nome/lugar do registro):
mv lista.txt compras.txt         # renomeia
mv compras.txt projeto/docs/     # move para outra pasta
mv projeto-copia ~/Documentos/   # move a pasta inteira
ls
# nota.txt  nota_backup.txt  projeto  projeto2  receita.txt`},{lang:"bash",code:`# Apagar (CUIDADO: não tem lixeira!)
rm nota_backup.txt          # some na hora
rm receita.txt nota.txt     # vários de uma vez

# Apagar pasta VAZIA:
rmdir projeto2/docs

# Apagar pasta com conteúdo (recursivo + force):
rm -r projeto               # pede confirmação por item, dependendo do alias
rm -rf projeto-copia        # força, sem perguntar — TENHA CERTEZA do caminho`},{lang:"bash",code:`# Rede de segurança para iniciantes: pergunte antes de apagar
rm -i compras.txt
# rm: remove regular file 'compras.txt'? y

# Torne isso permanente criando um alias no ~/.bashrc:
echo "alias rm='rm -i'" >> ~/.bashrc
source ~/.bashrc            # recarrega para valer agora`},{lang:"bash",code:`# Curingas (wildcards): agir em vários arquivos por padrão
touch foto1.jpg foto2.jpg foto3.jpg doc.pdf

# REGRA DE OURO: teste com ls ANTES de apagar com rm.
ls *.jpg
# foto1.jpg  foto2.jpg  foto3.jpg   (é isso que seria afetado)
rm *.jpg                   # agora sim, apaga só as .jpg
ls foto?.jpg               # ? casa exatamente 1 caractere (nada sobrou)`}],points:["mkdir cria pastas; mkdir -p cria também as pastas intermediárias que faltam.","touch cria arquivo vazio (e atualiza a data de modificação se já existir).","cp copia, mv move/renomeia (mesma operação no Linux), rm apaga.",'Para pastas use cp -r e rm -r; sem o -r vem o erro "omitting directory" / "is a directory".',"Curingas: * casa qualquer coisa, ? casa um único caractere — sempre teste com ls antes de usar no rm.","cp -i e rm -i perguntam antes de sobrescrever/apagar — bom alias enquanto você pega o jeito.","Iniciante comum: rodar rm -rf na pasta errada — confira o pwd e o caminho antes de apertar Enter.",'Iniciante comum: esquecer o -r ao copiar/apagar pasta e não entender o erro "is a directory".',"Não existe Lixeira no terminal: apagou com rm, foi embora de vez (por isso a cautela)."],alerts:[{type:"danger",content:`Nunca rode 'rm -rf /', 'rm -rf /*' nem 'rm -rf "$VAR"/' com a variável vazia — qualquer um deles apaga o sistema inteiro. É o acidente mais clássico do Linux.`},{type:"warning",content:"Antes de qualquer rm com curinga, troque o rm por ls: 'ls *.tmp' mostra exatamente o que SERIA apagado. Só depois substitua o ls por rm."},{type:"tip",content:"Quer uma lixeira de verdade no terminal? Instale 'sudo apt install trash-cli' e use 'trash-put arquivo' no lugar de rm. Ele manda para a Lixeira do LXQt e dá para recuperar."},{type:"info",content:"mv no mesmo disco é instantâneo (só troca o registro do arquivo). Entre discos diferentes, ele copia e depois apaga — por isso pode demorar em arquivos grandes."}]},{slug:"ver-arquivos",section:"terminal",title:"Lendo o conteúdo dos arquivos",difficulty:"iniciante",subtitle:"cat, less, head, tail, grep — espiando textos sem abrir editor.",intro:'Boa parte dos arquivos importantes do Linux é texto puro: configurações em `/etc`, logs em `/var/log`, scripts, listas. Para dar uma olhada rápida você não precisa abrir um editor pesado — o terminal tem ferramentas feitas só para "espiar", cada uma para um tamanho de arquivo e um objetivo.\n\nPense assim: `cat` é o despejo (joga o arquivo inteiro na tela, bom para textos pequenos); `less` é o leitor paginável (você navega com setas, como num PDF); `head` mostra só o começo (útil para conferir o cabeçalho de um CSV) e `tail` mostra só o fim (perfeito para ver o que acabou de acontecer num log).\n\nE tem o `grep`, o detetive da turma: ele procura um texto dentro de um ou vários arquivos e devolve só as linhas que casam. Combinado com pipe (próximo capítulo), o grep vira sua melhor ferramenta de investigação — "onde é que está escrito isso?" deixa de ser um problema.\n\nCom esses cinco comandos você resolve a inspeção do dia a dia: ler a configuração do Wi-Fi, conferir o que o apt registrou, acompanhar um log de erro ao vivo, achar em que arquivo de uma pasta com 200 itens aparece certa palavra — tudo sem abrir uma única janela gráfica.',codes:[{lang:"bash",code:`# Preparando um arquivo de exemplo (heredoc; detalhado no próximo capítulo):
cd ~/sandbox
cat > poema.txt <<'EOF'
Linha um: bom dia
Linha dois: bom dia ainda
Linha três: oi tarde
Linha quatro: boa noite
Linha cinco: até amanhã
EOF`},{lang:"bash",code:`# cat = mostra o arquivo inteiro de uma vez
cat poema.txt
# Linha um: bom dia
# Linha dois: bom dia ainda
# Linha três: oi tarde
# Linha quatro: boa noite
# Linha cinco: até amanhã

# cat -n numera as linhas:
cat -n poema.txt
#   1  Linha um: bom dia
#   2  Linha dois: bom dia ainda
# ... bom só para arquivos pequenos (até ~50 linhas).`},{lang:"bash",code:`# less = leitor paginável; ideal para arquivos grandes
less /var/log/syslog
# Dentro do less:
#   espaço -> próxima página        b -> página anterior
#   g -> início   G -> fim          /erro -> busca "erro"
#   n -> próxima ocorrência         q -> sair
#
# Precisa de sudo em alguns logs? "Permission denied" -> sudo less /var/log/auth.log`},{lang:"bash",code:`# head = primeiras linhas (padrão 10) | tail = últimas linhas
head -n 2 poema.txt
# Linha um: bom dia
# Linha dois: bom dia ainda
tail -n 1 poema.txt
# Linha cinco: até amanhã

# tail -f ACOMPANHA o arquivo em tempo real (essencial para logs):
tail -f /var/log/syslog
# ...novas linhas aparecem conforme acontecem; Ctrl+C para parar.`},{lang:"bash",code:`# grep = procura texto dentro do arquivo
grep "bom" poema.txt
# Linha um: bom dia
# Linha dois: bom dia ainda

grep -i "BOM" poema.txt      # -i ignora maiúsculas/minúsculas
grep -n "bom" poema.txt      # -n mostra o número da linha
# 1:Linha um: bom dia
# 2:Linha dois: bom dia ainda

# grep sem resultado não imprime nada e devolve "código 1" (normal):
grep "xyz" poema.txt         # (silêncio = não encontrou)`},{lang:"bash",code:`# grep recursivo: procura dentro de uma pasta inteira
grep -rn "nameserver" /etc/     # -r entra nas subpastas, -n mostra a linha
# /etc/resolv.conf:2:nameserver 127.0.0.53

grep -rI "TODO" ~/projetos      # -I pula arquivos binários
grep -rl "senha" ~/configs      # -l mostra só o NOME dos arquivos que casam`},{lang:"bash",code:`# wc conta linhas, palavras e bytes
wc poema.txt
#  5 20 118 poema.txt      (linhas, palavras, bytes)
wc -l poema.txt
# 5 poema.txt

# Combo clássico com pipe: quantas linhas com "error" tem no log?
grep -ic error /var/log/syslog
# 12       (-c já conta direto, sem precisar do wc)`}],points:["cat serve para arquivos pequenos; less para grandes (paginável, com busca).","head mostra o começo, tail mostra o fim; -n N controla quantas linhas.","tail -f acompanha um arquivo em tempo real — ideal para observar logs ao vivo.","grep procura texto: -i ignora caixa, -n mostra a linha, -r busca na pasta, -l só nomes, -c conta.","Dentro do less: / busca, n vai à próxima, g/G pulam para início/fim, q sai.",'grep sem resultado não imprime nada — silêncio significa "não encontrei", não erro.','Alguns logs pedem sudo ("Permission denied"): use sudo less /var/log/auth.log, por exemplo.',"Iniciante comum: dar cat em arquivo gigante e inundar a tela — na dúvida, use less.","Iniciante comum: esquecer as aspas em termos com espaço (grep 'bom dia' arquivo)."],alerts:[{type:"tip",content:"Use 'less +F arquivo.log' para abrir o log já acompanhando (igual ao tail -f). Aperte Ctrl+C para congelar e navegar, e Shift+F para voltar a seguir."},{type:"warning",content:"Não dê cat em arquivos binários (imagem, vídeo, executável): a tela enche de caracteres estranhos e o terminal pode embaralhar. Se acontecer, digite 'reset' e Enter para normalizar."},{type:"info",content:"O grep tem um primo mais rápido, o ripgrep. Instale com 'sudo apt install ripgrep' e use 'rg palavra' — absurdamente veloz em pastas com milhares de arquivos."}]},{slug:"processos-basicos",section:"terminal",title:"Vendo e controlando processos",difficulty:"iniciante",subtitle:"ps, top, htop, kill — quem está rodando e como parar sem reiniciar.",intro:'Tudo o que roda no Lubuntu — o navegador, o painel do LXQt, o terminal, até aquele programa que travou — é um **processo**. Cada um tem um número único, o **PID** (Process ID). É como a matrícula da escola: o sistema usa o PID para saber exatamente de quem você está falando quando pede para parar algo.\n\nNo terminal você vê os processos com `ps` (uma foto instantânea) ou com `top`/`htop` (lista viva, atualizando sozinha, como o Gerenciador de Tarefas do Windows). Quando algo trava, o roteiro é sempre o mesmo: descobrir o PID do programa-zumbi e mandar ele encerrar com `kill`.\n\nVocê pode mandar "sinais" diferentes a um processo. O educado é o **SIGTERM** (número 15): pede gentilmente para o programa salvar e sair. O ultimato é o **SIGKILL** (número 9): mata na hora, sem chance de salvar — use só quando o SIGTERM não resolver, porque encerrar à força pode deixar arquivos pela metade.\n\nEste capítulo te poupa reinicializações. Em vez de desligar o PC toda vez que o navegador congela, você abre o terminal, acha o PID e encerra só aquele processo. O resto do sistema continua intacto.',codes:[{lang:"bash",code:`# ps sem opções mostra só os processos do seu terminal atual:
ps
#   PID TTY          TIME CMD
#  3142 pts/0    00:00:00 bash
#  4501 pts/0    00:00:00 ps

# ps aux lista TODOS os processos, com uso de CPU e memória:
ps aux | head -n 3
# USER   PID %CPU %MEM    VSZ   RSS TTY  STAT START  TIME COMMAND
# root     1  0.0  0.1 167884 11384 ?   Ss   08:10  0:02 /sbin/init`},{lang:"bash",code:`# Achar o PID de um programa específico:
ps aux | grep firefox
# bruno  4321  3.2  5.1 ... /usr/lib/firefox/firefox

# pgrep é mais limpo — devolve só o PID (ou o nome com -l):
pgrep -l firefox
# 4321 firefox`},{lang:"bash",code:`# top = lista viva, ordenada por CPU (q para sair)
top
#   dentro dele:  M ordena por memória,  P por CPU,  k mata um PID,  q sai

# htop = versão colorida e amigável (recomendada):
sudo apt install htop -y
htop
#   setas navegam, F6 ordena, F9 mata (menu de sinais), F10 sai`},{lang:"bash",code:`# kill encerra pelo PID. Primeiro o pedido educado (SIGTERM = 15):
kill 4321

# Se não responder, o ultimato (SIGKILL = 9):
kill -9 4321

# Erros comuns do kill:
kill 99999
# bash: kill: (99999) - No such process     -> esse PID não existe (confira)
kill 1
# bash: kill: (1) - Operation not permitted  -> processo de root; precisa de sudo`},{lang:"bash",code:`# Matar pelo NOME (mais prático que decorar PID):
pkill firefox            # educado, todos os processos "firefox"
pkill -9 firefox         # à força
killall qterminal        # por nome exato do executável

# Quando o navegador trava, geralmente há vários processos dele;
# pkill -9 firefox encerra todos de uma vez.`},{lang:"bash",code:`# Rodar em segundo plano com & (não prende o terminal):
featherpad &
# [1] 5678          -> número do job e PID

jobs                 # lista os jobs deste terminal
# [1]+  Running   featherpad &
fg %1                # traz o job de volta para a frente
# Ctrl+Z pausa o programa em execução; 'bg' o retoma em segundo plano.`},{lang:"bash",code:`# Quem está pesando agora? (ótimo em PC leve)
ps aux --sort=-%mem | head -n 4    # top de memória
ps aux --sort=-%cpu | head -n 4    # top de CPU

free -h
#               total   usado   livre  compart.  buff/cache  disp.
# Mem.:         3,8Gi   440Mi   2,5Gi      18Mi       0,9Gi   3,1Gi
# Swap:         2,0Gi      0B   2,0Gi
# 440 MiB em repouso é o Lubuntu 26.04 típico.`}],points:["Cada processo tem um PID único — é por ele que você identifica e controla.","ps é uma foto instantânea; top/htop são a lista viva atualizando em tempo real.","ps aux | grep nome (ou pgrep -l nome) é o jeito clássico de achar o PID.","kill PID pede educado (SIGTERM/15); kill -9 PID força (SIGKILL/9) e só em último caso.","pkill nome e killall nome encerram pelo nome, sem precisar do PID.",'"No such process" = PID não existe; "Operation not permitted" = processo de root, use sudo.',"programa & roda em segundo plano; jobs lista, fg traz de volta, Ctrl+Z pausa.","Iniciante comum: já partir para kill -9 sem tentar o sinal padrão — pode corromper arquivos abertos.","Iniciante comum: matar o PID errado — confirme com ps aux | grep nome antes de encerrar.","free -h mostra RAM total, usada, livre e swap — a prova da leveza do Lubuntu."],alerts:[{type:"tip",content:"Prefira o htop ao top: cores, navegação por setas, F9 com menu de sinais e uma barra por núcleo de CPU. Em PC antigo ajuda a enxergar o que está pesando."},{type:"warning",content:"Não mate processos com PID baixo (abaixo de ~300) sem saber o que são: costumam ser do sistema. Encerrar um deles pode derrubar a sessão gráfica inteira."},{type:"danger",content:"kill -9 1 tenta matar o PID 1 (init/systemd) e pode congelar ou reiniciar a máquina. Não faça isso nem 'para testar'."},{type:"info",content:"Um programa 'sem responder' às vezes só está ocupado. Espere alguns segundos e tente o SIGTERM antes do SIGKILL — muitos aplicativos voltam sozinhos."}]},{slug:"pipes-redirecionamento",section:"terminal",title:"Pipes e redirecionamento",difficulty:"intermediario",subtitle:"Conectando comandos com | e salvando saída com > e >>.",intro:'A força do terminal Linux não está em comandos gigantes que fazem tudo, e sim em comandos pequenos que fazem uma coisa bem e se encaixam entre si. É como uma cozinha industrial: uma máquina descasca, outra corta, outra cozinha, outra tempera — você só liga em sequência.\n\nA "cola" entre comandos é o **pipe**, o símbolo `|` (geralmente Shift + \\). Ele pega a saída de um comando e entrega como entrada do próximo. `ls | grep .txt` significa "liste a pasta e depois filtre só os .txt". `ps aux | grep firefox | wc -l` lista processos, filtra os do firefox e conta quantos são — três comandos simples, uma resposta específica.\n\nAlém do pipe, você pode **redirecionar** a saída para arquivo: `>` grava (apagando o que havia antes) e `>>` acrescenta ao fim. Para a entrada, `<` faz o contrário: lê um arquivo e entrega ao comando. E os erros têm um canal próprio, o **stderr** (descritor 2), redirecionado com `2>` — detalhe que confunde muita gente.\n\nEste capítulo desbloqueia o jeito "Unix" de pensar: transforme um problema grande numa sequência de passos pequenos. Depois que isso entra na cabeça, você inventa pipelines úteis sozinho, todo dia.',codes:[{lang:"bash",code:`# Pipe básico: a saída de um vira a entrada do outro
ls /etc | grep "conf"
# host.conf
# resolv.conf
# ...

# Encadeando três:
ls /etc | grep "conf" | wc -l
# 24        (quantos itens de /etc têm "conf" no nome)`},{lang:"bash",code:`# Redirecionar a saída: > grava em arquivo (SUBSTITUI o conteúdo!)
ls ~ > lista.txt
cat lista.txt
# Documentos
# Downloads
# ...

# >> acrescenta ao fim (não apaga o que já existia):
date >> lista.txt
echo "fim" >> lista.txt`},{lang:"bash",code:`# Pegadinha clássica: > sobrescreve sem avisar
echo "linha 1" > teste.txt
echo "linha 2" > teste.txt    # a "linha 1" foi embora!
cat teste.txt
# linha 2

# Para acumular, use SEMPRE >>:
echo "a" > acumula.txt
echo "b" >> acumula.txt
cat acumula.txt
# a
# b`},{lang:"bash",code:`# Canal de erro separado (stderr = 2)
ls /pasta-inexistente
# ls: cannot access '/pasta-inexistente': No such file or directory

ls /pasta-inexistente 2> erros.log      # manda só o ERRO para arquivo
comando_qualquer > tudo.log 2>&1        # saída (1) e erro (2) juntos
comando_qualquer &> tudo.log            # forma curta e moderna do mesmo`},{lang:"bash",code:`# Erro de permissão ao redirecionar para /etc — e a correção:
echo "nameserver 1.1.1.1" > /etc/resolv.conf
# bash: /etc/resolv.conf: Permission denied
#  -> o > é executado pelo SHELL (usuário comum), não pelo sudo.

# Correção: use 'sudo tee' (o tee escreve com privilégio):
echo "nameserver 1.1.1.1" | sudo tee -a /etc/resolv.conf
# tee -a acrescenta; sem o -a, ele sobrescreve.`},{lang:"bash",code:`# tee = grava em arquivo E mostra na tela ao mesmo tempo
ls ~ | tee saida.txt
# aparece na tela e também salva em saida.txt
date | tee -a saida.txt     # -a acumula em vez de sobrescrever

# Entrada a partir de arquivo (<) e heredoc (<<):
sort < lista.txt            # ordena as linhas do arquivo
cat > config.ini <<'EOF'
[geral]
tema=escuro
EOF`},{lang:"bash",code:`# Pipelines úteis do dia a dia:
ps aux --sort=-%mem | head -n 6            # top 5 de memória
grep -i error /var/log/syslog | tail -n 20 # últimos 20 erros do log
dpkg -l | grep -c '^ii'                    # quantos pacotes instalados
ls /usr/bin | wc -l                        # quantos programas em /usr/bin

# Dica: monte o pipeline aos poucos — rode um comando, veja a saída,
# adicione o próximo. Fica muito mais fácil de depurar.`}],points:["O pipe | liga a saída de um comando à entrada do próximo — a base do estilo Unix.","> grava em arquivo (apagando o conteúdo anterior); >> acrescenta ao fim.","< lê um arquivo como entrada; heredoc (<<EOF ... EOF) injeta um bloco de texto.","stdout (1) é a saída normal; stderr (2) é o canal de erros — são separados por padrão.","2> redireciona só o erro; &> (ou > arq 2>&1) manda saída e erro para o mesmo lugar.",`'echo ... | sudo tee arquivo' resolve o "Permission denied" ao escrever em /etc (o > sozinho roda sem sudo).`,"tee divide o fluxo: grava em arquivo e ainda mostra na tela (tee -a para acumular).","Iniciante comum: usar > no lugar de >> e apagar sem querer o que estava no arquivo.","Iniciante comum: esperar que o erro passe pelo pipe — o | só carrega o stdout, não o stderr.","Pipelines pequenos e claros valem mais que um comando gigante: mais fáceis de ler e corrigir."],alerts:[{type:"warning",content:"'comando > arquivo' apaga o conteúdo do arquivo ANTES de rodar o comando — mesmo que o comando falhe e não gere nada. Na dúvida entre > e >>, prefira >>."},{type:"tip",content:"Monte pipelines grandes por partes: rode o primeiro comando, veja a saída, acrescente o segundo, e assim por diante. Depurar um pipeline pronto de uma vez é bem mais difícil."},{type:"info",content:"O nome tee vem do 'T' do encanamento: um fluxo que entra e sai por dois lados. Uma cópia vai para a tela, a outra para o arquivo — ótimo para logar enquanto acompanha."},{type:"success",content:"Quando dominar pipes, você começa a escrever 'one-liners' que substituem scripts inteiros. É quase um esporte na comunidade Linux colecionar os melhores."}]},{slug:"sudo-seguranca",section:"terminal",title:"sudo e segurança básica",difficulty:"iniciante",subtitle:"Quando você precisa de poder de administrador e como não se cortar.",intro:'No Linux há uma separação clara entre o que você faz como usuário comum (mexer nos seus arquivos em `/home`) e o que exige permissão de administrador (instalar programa, alterar config do sistema, mexer em `/etc`). Isso não é frescura: é o que mantém o sistema seguro mesmo se você baixar algo suspeito — sem senha de admin, o estrago fica limitado à sua casa.\n\nO `sudo` (do inglês "substitute user do") é o jeito moderno de elevar **só um comando** ao nível de administrador, sem ficar logado como root o tempo todo. Ao digitar `sudo apt update`, o sistema pede **a sua senha** (não uma senha separada de root), roda aquele comando com privilégio e pronto — você volta a ser usuário comum.\n\nDois detalhes que assustam iniciantes: enquanto você digita a senha, **nada aparece na tela** (nem asterisco) — é proposital, confie e digite. E a senha fica em cache por alguns minutos, então vários `sudo` seguidos não pedem senha de novo.\n\nA regra de ouro: se você não entende o que aquele comando com sudo faz, **não rode**. Um `sudo rm -rf /etc` demole os ajustes do sistema inteiro. Sudo é poder — e poder pede leitura atenta antes do Enter. Vamos ver os usos legítimos e os erros mais comuns.',codes:[{lang:"bash",code:`# Sem sudo: tudo dentro da sua casa /home/bruno
mkdir ~/minha_pasta
echo "ola" > ~/teste.txt

# Com sudo: o que mexe no sistema
sudo apt update
# [sudo] senha para bruno:        <- digite; a senha NÃO aparece
# ... listas de pacotes atualizadas`},{lang:"bash",code:`# A pegadinha do redirecionamento (o erro mais comum com sudo):
echo "config nova" >> /etc/algum.conf
# bash: /etc/algum.conf: Permission denied
#  -> o >> é feito pelo shell (usuário comum), ANTES do comando rodar.

# Correção: sudo tee
echo "config nova" | sudo tee -a /etc/algum.conf > /dev/null
# (o > /dev/null só evita repetir o texto na tela)`},{lang:"bash",code:`# Editar arquivo de sistema com editor:
sudo nano /etc/hosts
#   Ctrl+O salva   |   Ctrl+X sai

# Esqueceu o sudo? Não precisa redigitar tudo:
apt install htop
# E: Could not open lock file /var/lib/dpkg/lock-frontend - Permission denied
sudo !!
#  -> vira: sudo apt install htop`},{lang:"bash",code:`# Ver o que você tem permissão de rodar com sudo:
sudo -l
# User bruno may run the following commands on meupc:
#     (ALL : ALL) ALL

# Erro de quem não está no grupo sudo:
sudo apt update
# bruno is not in the sudoers file. This incident will be reported.
#  -> esse usuário não pode usar sudo (veja como resolver abaixo).`},{lang:"bash",code:`# Quem pode usar sudo está no grupo "sudo":
groups bruno
# bruno : bruno adm cdrom sudo dip plugdev lpadmin

# Adicionar outro usuário ao sudo (precisa já ter sudo):
sudo usermod -aG sudo maria
# Maria precisa sair e entrar de novo para o grupo valer.`},{lang:"bash",code:`# Virar root por uma sessão inteira — use com parcimônia:
sudo -i
# root@meupc:~#      <- o # avisa que agora você é root
exit               # volta a ser usuário comum

# Prefira sudo pontual a 'sudo -i': menos chance de rodar algo perigoso por engano.`},{lang:"bash",code:`# Boas práticas de segurança (decore estas):
# 1) Nunca rode sudo em comando que você não entende.
# 2) Prefira sudo pontual a virar root com sudo -i.
# 3) Leia o comando da esquerda para a direita antes do Enter.
# 4) Nunca instale com 'curl url | sudo bash' sem ler o script antes.
# 5) Para simular sem executar, ponha echo na frente:
echo sudo apt install pacote
# sudo apt install pacote     (só imprime, não roda)`}],points:["sudo eleva só um comando ao nível root; ao terminar, você volta a usuário comum.","A senha do sudo é a SUA senha — no Lubuntu padrão a conta root nem tem senha própria.","Enquanto você digita a senha, nada aparece na tela. É de propósito; digite normalmente.","'sudo !!' repete o último comando com sudo na frente — salva quando você esquece.","'echo ... | sudo tee arquivo' é a forma certa de escrever em /etc (o > sozinho não herda o sudo).",'sudo -l mostra o que você pode rodar; "is not in the sudoers file" significa que a conta não tem sudo.',"Adicione alguém ao sudo com 'sudo usermod -aG sudo usuário' (ele precisa relogar).","Iniciante comum: jogar sudo em qualquer erro de permissão sem entender — leia a mensagem antes.","Iniciante comum: colar 'curl url | sudo bash' de blogs — isso roda código desconhecido como root.","sudo -i abre sessão root inteira (prompt com #); use só quando realmente precisar."],alerts:[{type:"danger",content:"Nunca rode 'sudo rm -rf /' nem variações. Apaga o sistema operacional inteiro. Desconfie de 'soluções' de fóruns que escondem esse comando em código hexadecimal/decimal."},{type:"warning",content:"Não instale software com 'curl url | sudo bash' sem ler o script antes. Você estaria dando privilégio de root a um código que nunca viu."},{type:"tip",content:"Antes de rodar um comando com sudo que veio de fora, cole-o com 'echo' na frente para só imprimir. Se fizer sentido, tire o echo e rode de verdade."},{type:"info",content:"A senha do sudo fica em cache por alguns minutos no terminal atual. Por isso vários sudo seguidos só pedem a senha uma vez."}]},{slug:"atalhos-bash",section:"terminal",title:"Atalhos do bash que aceleram tudo",difficulty:"iniciante",subtitle:"Tab, histórico, Ctrl+R, movimentos do cursor e aliases.",intro:'O bash tem dezenas de atalhos pequenos que, somados, multiplicam sua velocidade. Quase todo mundo aprende dois ou três no primeiro dia (Tab e seta para cima) e para por aí. É uma pena, porque os outros já vêm de graça e economizam horas por mês.\n\nPense no bash como um piano: cada atalho é uma nota. Tab completa nomes (a nota central), a seta para cima resgata o último comando, `Ctrl+R` busca no histórico (a virada de chave para parar de redigitar), `Ctrl+A` vai ao início da linha e `Ctrl+E` ao fim. Em duas semanas de prática, esses gestos viram automáticos.\n\nOs melhores atalhos evitam redigitar. `!!` repete o último comando, `!apt` repete o último que começava com "apt", `!$` reaproveita o último argumento. Quando você escreve um comando longo e erra uma letra no meio, navega até lá com `Ctrl+seta` e corrige no lugar, em vez de apagar tudo.\n\nEste capítulo fecha a trilha de terminal trazendo agilidade. Você já sabe navegar, manipular, ler, controlar processos, encanar comandos com pipe e usar sudo. Agora vai fazer tudo isso no dobro da velocidade — e criar seus próprios atalhos permanentes com aliases.',codes:[{lang:"bash",code:`# Tab completion: completa comando, arquivo e pasta
cd Doc<Tab>            # -> cd Documentos/
sudo apt inst<Tab>     # -> sudo apt install
ls /et<Tab>            # -> ls /etc/

# Tab DUAS vezes lista as opções quando há mais de uma:
ls ~/D<Tab><Tab>
# Documentos/  Downloads/`},{lang:"bash",code:`# Histórico de comandos:
history          # últimos comandos, numerados
history 15       # só os 15 últimos

!42              # roda o comando de número 42 do history
!!               # repete o ÚLTIMO comando
!apt             # repete o último que começava com "apt"
!?install        # repete o último que continha "install"`},{lang:"bash",code:`# Ctrl+R = busca interativa no histórico (o atalho que muda tudo)
# Aperte Ctrl+R e comece a digitar parte do comando:
# (reverse-i-search)\`apt\`: sudo apt install htop
#   Enter executa | seta edita antes | Ctrl+R de novo busca o anterior | Ctrl+G cancela`},{lang:"bash",code:`# Reaproveitar pedaços do comando anterior:
ls ~/Documentos/relatorio.pdf
xdg-open !$
#  -> !$ vira o último argumento: xdg-open ~/Documentos/relatorio.pdf

mkdir -p ~/projetos/site
cd !$
#  -> cd ~/projetos/site`},{lang:"bash",code:`# Mover o cursor e apagar trechos sem usar seta letra por letra:
#   Ctrl+A  início da linha     Ctrl+E  fim da linha
#   Alt+B   uma palavra atrás    Alt+F   uma palavra à frente
#   Ctrl+U  apaga até o início   Ctrl+K  apaga até o fim
#   Ctrl+W  apaga uma palavra    Ctrl+Y  cola o que você cortou
#   Ctrl+L  limpa a tela (mantém o que já digitou na linha)`},{lang:"bash",code:`# Controle da execução:
#   Ctrl+C  interrompe o comando que está rodando
#   Ctrl+D  sai do shell (igual a exit)
#   Ctrl+Z  pausa o comando (retoma em segundo plano com bg, ou à frente com fg)

sleep 60
# ^C          <- Ctrl+C cancela o sleep imediatamente`},{lang:"bash",code:`# Aliases: seus atalhos permanentes no ~/.bashrc
echo "alias ll='ls -lhA'" >> ~/.bashrc
echo "alias ..='cd ..'"   >> ~/.bashrc
echo "alias update='sudo apt update && sudo apt upgrade'" >> ~/.bashrc
source ~/.bashrc          # recarrega para valer agora
ll                        # já funciona

# Guardar data/hora no histórico (útil para lembrar quando rodou algo):
echo 'export HISTTIMEFORMAT="%d/%m %H:%M  "' >> ~/.bashrc`}],points:["Tab completa nomes; Tab Tab lista as opções quando há mais de uma.","Seta para cima/baixo percorre o histórico; Ctrl+R faz busca interativa nele.",'!! repete o último comando; !$ reaproveita o último argumento; !apt repete o último que começava com "apt".',"Ctrl+A vai ao início, Ctrl+E ao fim; Alt+B/Alt+F andam palavra por palavra.","Ctrl+U apaga até o início, Ctrl+K até o fim, Ctrl+W uma palavra atrás, Ctrl+Y cola de volta.","Ctrl+C interrompe o comando atual; Ctrl+Z pausa; Ctrl+L limpa a tela sem perder a linha.","Aliases no ~/.bashrc criam atalhos permanentes; rode source ~/.bashrc para aplicar na hora.","Iniciante comum: redigitar comandos longos em vez de usar a seta para cima ou o Ctrl+R.","Iniciante comum: nunca abrir o ~/.bashrc para criar aliases — perde o maior ganho de produtividade.","HISTTIMEFORMAT guarda data/hora de cada comando no histórico — bom para auditar o que você fez."],alerts:[{type:"tip",content:"Treine o Ctrl+R de propósito por uma semana. Em uns 10 dias vira memória muscular: você nem pensa, já está buscando o comando antigo em vez de redigitar."},{type:"info",content:"O histórico é salvo em ~/.bash_history ao sair do shell. Aumente o tamanho com HISTSIZE=10000 e HISTFILESIZE=20000 no ~/.bashrc."},{type:"warning",content:"Comandos com senha ficam registrados no histórico. Comece a linha com um espaço para o bash ignorá-la (funciona com HISTCONTROL=ignorespace, padrão no Ubuntu)."},{type:"success",content:"Aliases pessoais são a marca de quem usa Linux há tempo. Comece com ll='ls -lhA', ..='cd ..' e update='sudo apt update && sudo apt upgrade'. Logo você terá dezenas."}]}],Lq=[{slug:"discover-software",section:"pacotes",title:"Discover: a loja de aplicativos do Lubuntu",difficulty:"iniciante",subtitle:"Instalando programas pela interface gráfica, sem tocar no terminal.",intro:`Se você está vindo do Windows ou do celular, a primeira pergunta é sempre a mesma: "onde eu baixo os programas?". No Lubuntu a resposta **não** é abrir o navegador e caçar um instalador — é abrir uma loja, exatamente como a Play Store ou a App Store. Essa loja se chama **Discover** (em algumas versões, **Muon**), e ela é a porta de entrada mais tranquila para quem ainda não domina o terminal.

## O que o Discover realmente é

O Discover é só uma **vitrine bonita** por cima de coisas que já existem no sistema. Ele não inventa programa nenhum: quando você clica em "Instalar", por baixo do pano ele chama o \`apt\` (o gerenciador oficial, que veremos no próximo capítulo) ou o \`snap\`. Entender isso tira o medo — você não está baixando nada suspeito da internet, está pedindo um pacote assinado digitalmente que passou pela equipe do Ubuntu.

Pense em três camadas:

- **Discover** — a loja com fotos, descrição e botão. É o que você vê.
- **apt / snap** — os motores que baixam e instalam de verdade. É o que faz o trabalho.
- **Repositórios** — os servidores oficiais do Ubuntu de onde tudo vem. É a "fábrica".

## Por que começar por aqui

Porque é impossível errar feio. Você não digita comando, não usa \`sudo\` na mão, não corre risco de apagar o sistema. É o ambiente perfeito para instalar seus 4 ou 5 primeiros programas (um navegador, um player de vídeo, um editor de imagem) e ganhar confiança. Quando o terminal deixar de ser assustador, você vai preferir o \`apt\` pela velocidade — mas o Discover continua útil para descobrir programas que você nem sabia que existiam.`,codes:[{lang:"bash",code:`# Em alguns Lubuntu "mínimos" a loja não vem instalada.
# Confira se o Discover existe:
which plasma-discover
# /usr/bin/plasma-discover   -> já tem, pode pular a instalação
# (nada)                     -> não tem, instale abaixo`},{lang:"bash",code:`# Instalando a loja (só se o 'which' acima não achou nada):
sudo apt update
sudo apt install plasma-discover -y
# ...
# Setting up plasma-discover (5.27.x) ...
# 1 upgraded, 1 newly installed, 0 to remove`},{lang:"bash",code:`# Abrindo pelo terminal (útil para testar):
plasma-discover &
# O & manda o programa para segundo plano e devolve o terminal para você.
# Não sai nada na tela — a JANELA do Discover é que abre.

# No dia a dia, prefira: Menu (canto inferior esquerdo) > Sistema > Discover`},{lang:"text",code:`Fluxo dentro da janela (passo a passo):

  1. Clique na LUPA no canto superior.
  2. Digite o nome do programa. Ex.:  vlc
  3. Clique no resultado certo (confira o ícone e o autor).
  4. Leia a descrição, veja os prints e o tamanho do download.
  5. Clique em "Instalar".
  6. Digite sua senha quando pedir  (é o sudo, só que gráfico).
  7. Espere a barra terminar. Pronto: o ícone aparece no Menu.`},{lang:"bash",code:`# Depois de instalar pela loja, dá para confirmar no terminal:
which vlc
# /usr/bin/vlc
vlc --version | head -n1
# VLC media player 3.0.21 Vetinari ...`},{lang:"bash",code:`# O Discover também DESINSTALA (aba "Instalados" > botão Remover).
# Se preferir tirar pelo terminal, é uma linha:
sudo apt remove vlc -y
# ...
# The following packages will be REMOVED:
#   vlc
# 1 to remove.`},{lang:"bash",code:`# Atualizações também aparecem no Discover (aba "Atualizações").
# Um aviso surge na bandeja do sistema (perto do relógio).
# Você pode conferir o mesmo pelo terminal:
apt list --upgradable 2>/dev/null | head
# Listing... Done
# firefox/... 124.0 amd64 [upgradable from: 123.0]`}],points:["Discover (ou Muon) é a loja gráfica de aplicativos padrão do Lubuntu.","Ele é só uma interface: por baixo rodam o `apt` e o `snap` — nada é baixado de sites aleatórios.","Todo programa da loja é **assinado** e vem dos repositórios oficiais do Ubuntu.","Procurar pelo nome resolve a maioria dos casos: `vlc`, `gimp`, `libreoffice`, `firefox`.","Instalar exige só a sua senha (é o `sudo` gráfico) — você não digita comando nenhum.","Atualizações do sistema aparecem como aviso na bandeja, perto do relógio.","Erro clássico de iniciante: procurar um `.exe` na internet — no Linux isso quase nunca é o caminho.","Se o Discover travar ou ficar lento, feche e use `sudo apt install <programa>` no terminal."],alerts:[{type:"tip",content:"Antes de instalar, olhe a **data da última atualização** e o autor. Programa sem prints, com poucos downloads e parado há anos costuma estar abandonado — procure uma alternativa mantida."},{type:"info",content:"Dependendo da versão, o Lubuntu traz o **Muon** em vez do Discover. Os dois fazem a mesma coisa (gerenciar pacotes graficamente); os passos são praticamente idênticos."},{type:"warning",content:"Não tente instalar `.exe` de Windows pela loja — não vai funcionar. Programas de Windows exigem o **Wine**, que é assunto avançado e foge desta trilha."},{type:"success",content:"Kit inicial recomendado pela loja para quem acabou de instalar: um navegador (Firefox), um player (VLC), um editor de imagem (GIMP) e o pacote de escritório (LibreOffice). Com esses quatro você já faz 90% das tarefas do dia."}]},{slug:"apt-basico",section:"pacotes",title:"APT: o gerenciador de pacotes do terminal",difficulty:"iniciante",subtitle:"O comando que resolve quase tudo no Ubuntu — do jeito certo, do zero.",intro:'Se você aprender **um** comando de terminal no Lubuntu, que seja o `apt`. Ele é o gerenciador de pacotes: a ferramenta que instala, atualiza, procura e remove software. Depois que a mão pega o jeito, instalar um programa vira mais rápido do que abrir a loja — uma linha e pronto.\n\n## O carteiro inteligente\n\nPense no `apt` como um carteiro que conhece o endereço de tudo. Você diz "quero o GIMP" e ele: vai ao servidor oficial do Ubuntu, confere a **assinatura digital** do pacote (garantindo que ninguém adulterou), baixa, resolve o que mais é necessário e instala tudo organizado. Você não caça instalador, não roda antivírus depois, não acumula lixo.\n\n## Dependências: a mágica que você nem vê\n\nTodo programa depende de outros pedaços (bibliotecas). O GIMP precisa de bibliotecas de imagem, o VLC de codecs, e assim por diante. O grande trunfo do `apt` é resolver isso sozinho: peça o GIMP e ele traz junto as dependências certas; remova o GIMP e ele oferece limpar o que ficou sem uso. Você pensa em "programas", ele cuida das "peças".\n\n## As duas listas que confundem todo mundo\n\nExiste uma diferença que precisa ficar clara agora:\n\n- `sudo apt update` — atualiza a **LISTA** do que existe nos servidores. **Não instala nada.** É conferir o cardápio.\n- `sudo apt upgrade` — **aplica** as atualizações dos programas já instalados. É pedir o prato.\n\nQuase todo comando que **muda** o sistema pede `sudo` na frente (porque mexe em arquivos de todos, não só na sua pasta). Já comandos que só **leem** (`search`, `show`, `list`) não precisam.',codes:[{lang:"bash",code:`# 1) Atualizar a LISTA de pacotes (faça sempre antes de instalar algo novo):
sudo apt update
# Hit:1 http://br.archive.ubuntu.com/ubuntu resolute InRelease
# Get:2 http://br.archive.ubuntu.com/ubuntu resolute-updates InRelease
# Reading package lists... Done
# All packages are up to date.  (ou "N packages can be upgraded")`},{lang:"bash",code:`# 2) Procurar um pacote pelo nome ou descrição (NÃO precisa de sudo):
apt search htop
# Sorting... Done
# Full Text Search... Done
# htop/resolute 3.3.0-1 amd64
#   interactive processes viewer`},{lang:"bash",code:`# 3) Ver os detalhes ANTES de instalar (tamanho, versão, do que depende):
apt show htop
# Package: htop
# Version: 3.3.0-1
# Installed-Size: 340 kB
# Depends: libc6, libncursesw6, libtinfo6
# Description: interactive processes viewer ...`},{lang:"bash",code:`# 4) Instalar. O -y responde "sim" às confirmações automaticamente:
sudo apt install htop -y
# The following NEW packages will be installed:
#   htop
# Setting up htop (3.3.0-1) ...
# Agora o comando existe:
htop      # abre o monitor; aperte  q  para sair`},{lang:"bash",code:`# 5) Instalar VÁRIOS de uma vez (ótimo para montar um "kit" pós-instalação):
sudo apt install neofetch tree curl git unzip -y
# Só separar por espaço. O apt baixa e configura todos juntos.`},{lang:"bash",code:`# 6) Descobrir se algo já está instalado e qual versão:
apt list --installed 2>/dev/null | grep firefox
# firefox/resolute,now 124.0 amd64 [installed]

# Ou, mais direto, "onde está o executável?":
which firefox
# /usr/bin/firefox`},{lang:"bash",code:`# 7) O erro campeão do iniciante — instalar SEM ter feito 'update' antes:
sudo apt install algum-pacote
# E: Unable to locate package algum-pacote
#
# Quase sempre a lista está velha. Solução:
sudo apt update           # atualiza a lista
sudo apt install algum-pacote -y   # tente de novo`},{lang:"bash",code:`# 8) Cada ação do apt fica registrada. Quando algo dá errado, o log conta a história:
tail -n 5 /var/log/apt/history.log
# Start-Date: 2026-05-06  14:32:10
# Commandline: apt install htop
# Install: htop:amd64 (3.3.0-1)
# End-Date: 2026-05-06  14:32:12`}],points:["`apt` é a ferramenta padrão de pacotes em Ubuntu, Lubuntu e Debian.","Rode `sudo apt update` **antes** de `apt install` para ter a lista fresca — pula esse passo e vem `Unable to locate package`.","`search` e `show` só leem: não precisam de `sudo`. `install`, `remove` e `upgrade` mudam o sistema: precisam.","Dependências são resolvidas sozinhas — você nunca instala biblioteca por biblioteca na mão.","A flag `-y` responde 'sim' às perguntas; útil, mas leia o resumo antes em operações grandes.","Dá para instalar vários pacotes numa linha só, separados por espaço.","`apt` (moderno e amigável) e `apt-get` (antigo, ainda usado em scripts) coexistem e funcionam.","Logs de tudo ficam em `/var/log/apt/history.log` — o primeiro lugar para olhar quando algo quebra."],alerts:[{type:"warning",content:"**Nunca** cancele um `apt install` no meio com Ctrl+C. Você pode deixar um pacote pela metade e travar futuras instalações. Se acontecer, o conserto é `sudo dpkg --configure -a` seguido de `sudo apt install -f`."},{type:"tip",content:"Digite parte do nome e aperte **Tab** — o terminal autocompleta. Ex.: `sudo apt install fire` + Tab mostra `firefox` e amigos. Menos digitação, menos erro de nome."},{type:"info",content:"Diferença rápida: `apt` foi feito para humanos (saída colorida, barra de progresso); `apt-get` é a versão antiga, estável e verbosa, preferida dentro de scripts. Para o dia a dia, use `apt`."},{type:"success",content:"Crie um kit reproduzível: guarde num arquivo de texto a linha `sudo apt install htop tree curl git neofetch -y`. Depois de qualquer reinstalação, cole e em segundos o sistema volta ao seu gosto."}]},{slug:"atualizar-sistema",section:"pacotes",title:"Mantendo o sistema atualizado",difficulty:"iniciante",subtitle:"Segurança e programas em dia com dois comandos — e sem medo.",intro:'Sistema desatualizado é casa com a porta destrancada. A maioria das atualizações do Lubuntu são **correções de segurança**: buracos que pesquisadores descobriram e que os mantenedores fecharam. Manter em dia é a coisa mais barata que você faz pela sua segurança — e, ao contrário do "atualizar e rezar" do Windows, aqui raramente quebra algo.\n\n## O ritual dos dois passos\n\nAtualizar é sempre a mesma dupla, na mesma ordem:\n\n- `sudo apt update` — busca a lista nova de versões. **Confere o cardápio.**\n- `sudo apt upgrade` — aplica as atualizações disponíveis. **Pede o prato.**\n\nVocê faz `update` antes de `upgrade` para não pedir uma versão que já saiu do cardápio. Inverter a ordem é o erro nº 1 de quem está começando.\n\n## upgrade x full-upgrade\n\n- `upgrade` é conservador: atualiza o que dá **sem remover** nada.\n- `full-upgrade` é mais completo: aceita **remover** um pacote antigo se isso for necessário para instalar a versão nova de outro. Use quando o `upgrade` disser "os seguintes pacotes foram retidos" (kept back).\n\n## Com que frequência?\n\nUma vez por semana é ótimo para uso doméstico. Algumas atualizações — principalmente do **kernel** (o núcleo do Linux), do `systemd` ou da `libc` — pedem reinício para valer. O sistema cria um arquivo avisando, e você reinicia quando for conveniente. Aquele monte de texto correndo na tela durante o `upgrade` é **normal**: é o `apt` narrando o que faz. Deixe terminar em paz.',codes:[{lang:"bash",code:`# A dupla do dia a dia:
sudo apt update
sudo apt upgrade -y
# ...
# The following packages will be upgraded:
#   firefox libreoffice-core ...
# 12 upgraded, 0 newly installed, 0 to remove.
# ...
# 12 upgraded, 0 newly installed, 0 to remove.`},{lang:"bash",code:`# Só espiar o que SERIA atualizado, sem aplicar nada:
apt list --upgradable
# Listing... Done
# firefox/resolute-updates 124.0 amd64 [upgradable from: 123.0]
# libreoffice-core/resolute-updates 24.8 amd64 [upgradable from: 24.2]`},{lang:"bash",code:`# Versão mais completa: resolve dependências que mudaram + faz faxina:
sudo apt update
sudo apt full-upgrade -y
sudo apt autoremove -y    # remove kernels antigos e bibliotecas órfãs`},{lang:"bash",code:`# "The following packages have been kept back" — e agora?
# Significa que 'upgrade' não quis mexer porque exigiria remover algo.
# A solução é o full-upgrade:
sudo apt full-upgrade -y`},{lang:"bash",code:`# Depois de atualizar, o sistema pode precisar reiniciar.
# Ele avisa criando este arquivo:
if [ -f /var/run/reboot-required ]; then
  echo "Reinício necessário (provavelmente atualizou o kernel)."
  cat /var/run/reboot-required.pkgs   # mostra QUEM pediu o reboot
fi
# Reinício necessário (provavelmente atualizou o kernel).
# linux-image-7.0.0-12-generic`},{lang:"bash",code:`# Reiniciar ou desligar pelo terminal:
sudo reboot      # reinicia
sudo poweroff    # desliga

# Ver qual kernel está rodando agora (útil depois de atualizar):
uname -r
# 7.0.0-12-generic`},{lang:"bash",code:`# Faxina de espaço depois de muitas atualizações:
sudo apt autoremove -y   # tira kernels velhos e libs sem dono
sudo apt clean           # apaga os .deb baixados que ficaram no cache
df -h /                  # confira o espaço livre da raiz
# Filesystem  Size  Used Avail Use% Mounted on
# /dev/sda2    50G   18G   30G  38% /`},{lang:"bash",code:`# Um atalho para atualizar tudo de uma vez (coloque no ~/.bashrc):
alias att='sudo apt update && sudo apt full-upgrade -y && sudo apt autoremove -y'
# Depois, recarregue o bashrc e use:
source ~/.bashrc
att      # atualiza, faz upgrade completo e limpa — tudo numa palavra`}],points:["Faça `sudo apt update && sudo apt upgrade -y` pelo menos uma vez por semana.","`update` busca a lista; `upgrade` aplica. **Nunca** inverta a ordem.","`full-upgrade` é mais completo: aceita remover pacotes antigos para resolver dependências — use quando aparecer 'kept back'.","`autoremove` tira kernels antigos e bibliotecas órfãs, liberando disco.","Atualização de kernel exige reboot — cheque `/var/run/reboot-required`.","O texto correndo na tela é normal: é o `apt` mostrando o progresso. Não interrompa.","Em uma versão **LTS** você recebe 5 anos de atualizações de segurança gratuitas.","Erro comum: rodar `upgrade` sem o `update` antes e ficar com versão velha ou erro 404."],alerts:[{type:"info",content:"Trocar de **versão do sistema** (ex.: de 26.04 para 26.10) é outra operação: usa `sudo do-release-upgrade`, não o `upgrade`. O `upgrade` só cuida dos programas dentro da versão atual."},{type:"warning",content:"Se aparecer aviso de repositório **expirado** ou **sem assinatura** durante o `update`, não ignore. Costuma ser um PPA quebrado. Resolva (veremos no capítulo de PPAs) antes de seguir atualizando."},{type:"danger",content:"Não desligue o computador no meio de um `upgrade`, ainda mais se for atualização de kernel. Interromper pode deixar o sistema sem inicializar. Se estiver num notebook, faça sempre na tomada."},{type:"success",content:"O alias `att` transforma a rotina de manutenção em uma palavra. Depois de criar, atualizar o sistema inteiro vira digitar três letras e apertar Enter."}]},{slug:"instalar-remover",section:"pacotes",title:"Instalando e removendo programas com segurança",difficulty:"iniciante",subtitle:"install, remove, purge e a faxina que mantém o Lubuntu leve por anos.",intro:`Cada programa instalado é um inquilino na sua casa. Uns ajudam todo dia; outros entraram num teste e ficaram esquecidos ocupando espaço. Saber instalar **e** remover com calma é o que separa uma casa arrumada de uma cheia de caixas amontoadas — e é justamente essa disciplina que mantém o Lubuntu leve depois de anos de uso.

## Sem "próximo, próximo, aceito"

No Linux não existe aquele instalador com dez telas e um "aceito os termos" escondendo uma barra de ferramentas indesejada. O programa entra por uma linha (ou um clique) e sai limpo, **sem deixar lixo** num Registro (que aqui nem existe). Por isso o sistema não "engorda" com o tempo como o Windows.

## As três operações que você precisa dominar

- \`install\` — instala o programa.
- \`remove\` — desinstala, mas **mantém** os arquivos de configuração (bom se pretende reinstalar depois).
- \`purge\` — desinstala e **apaga também** as configurações (bom quando o programa deu problema e você quer recomeçar do zero).

E, acima de tudo, a faxina:

- \`autoremove\` — tira as dependências que ficaram **penduradas sem dono** depois que você removeu o programa que as trouxe.`,codes:[{lang:"bash",code:`# Instalar um pacote e ler o resumo (ele avisa o espaço que vai usar):
sudo apt install gimp -y
# The following NEW packages will be installed:
#   gimp gimp-data libgimp2.0 ...
# After this operation, 240 MB of additional disk space will be used.
# Setting up gimp (2.10.x) ...`},{lang:"bash",code:`# Instalar vários de uma vez (kit de multimídia, por exemplo):
sudo apt install vlc audacity handbrake -y
# Separe por espaço. O apt baixa e configura tudo numa tacada.`},{lang:"bash",code:`# Remover MANTENDO as configurações (você pode reinstalar e achar tudo no lugar):
sudo apt remove gimp -y
# The following packages will be REMOVED:
#   gimp
# 0 upgraded, 0 newly installed, 1 to remove.`},{lang:"bash",code:`# Remover APAGANDO tudo, inclusive configs (recomeço do zero):
sudo apt purge gimp -y
# The following packages will be REMOVED:
#   gimp*
# O asterisco (*) sinaliza que as configurações também serão apagadas.`},{lang:"bash",code:`# A faxina: tirar dependências que sobraram sem ninguém usar:
sudo apt autoremove -y
# The following packages will be REMOVED:
#   gimp-data libgimp2.0 linux-image-6.9.0-old ...
# Repare que ele também recolhe kernels antigos.`},{lang:"bash",code:`# ANTES de remover algo do sistema, veja quem depende daquilo:
apt-cache rdepends --installed firefox | head
# firefox
# Reverse Depends:
#   ubuntu-web-launchers
# Se a lista for grande, pense duas vezes: remover pode derrubar outras coisas.`},{lang:"bash",code:`# Reinstalar um programa que bagunçou (sem perder seus dados):
sudo apt install --reinstall firefox -y
# Reinstalling firefox (124.0) ...
# Útil quando o programa quebrou depois de uma atualização.`},{lang:"bash",code:`# Consertar uma instalação interrompida (aquele Ctrl+C infeliz):
sudo dpkg --configure -a   # termina o que ficou pela metade
sudo apt install -f        # -f = fix broken: resolve dependências quebradas`}],points:["`install` instala, `remove` desinstala mantendo configs, `purge` desinstala apagando configs.","Dá para listar vários pacotes numa chamada só, separados por espaço.","`autoremove` é a faxina: recolhe dependências órfãs e kernels antigos.","`--reinstall` conserta um programa quebrado **sem** perder seus dados.","Antes de remover algo do sistema, cheque `apt-cache rdepends --installed <pacote>`.","Sempre **leia o resumo** do apt antes de confirmar: ele lista o que será removido junto.","Instalação interrompida trava futuras — o conserto é `dpkg --configure -a` + `apt install -f`.","Erro comum: usar `remove` querendo `purge` e depois estranhar configs velhas atrapalhando."],alerts:[{type:"danger",content:"Muito cuidado ao remover pacotes com **`lubuntu-`**, **`lxqt-`** ou **`xorg`** no nome. Você pode acabar sem interface gráfica e cair num terminal preto no próximo boot. Se o apt avisar que vai remover dezenas de pacotes que você não pediu, cancele com `n` e investigue."},{type:"tip",content:"Nomes de pacote são sempre em **minúsculas, com hífens** e sem acento: `libreoffice-writer`, `firefox-esr`, `vlc-plugin-base`. Se errar o nome, o apt reclama com `Unable to locate package`."},{type:"info",content:"Diferença prática entre `remove` e `purge`: depois de um `remove`, um `apt install` de volta encontra suas preferências antigas intactas. Depois de um `purge`, o programa volta como se fosse a primeira vez."}]},{slug:"adicionar-ppa",section:"pacotes",title:"PPAs: repositórios extras (e como não se queimar)",difficulty:"intermediario",subtitle:"Instalando versões novas ou de nicho que não estão no apt oficial.",intro:`Os repositórios oficiais do Ubuntu têm dezenas de milhares de programas, mas nem tudo cabe lá — e o que cabe às vezes é uma versão mais antiga, congelada quando a versão do sistema saiu. Quando você precisa da versão **mais nova** de um programa, ou de algo de **nicho**, entram os **PPAs**.

## O que é um PPA

**PPA** significa *Personal Package Archive*: um repositório extra, hospedado no **Launchpad** (a plataforma da Canonical), mantido por um desenvolvedor ou por uma comunidade. Adicionar um PPA é dizer ao \`apt\`: "de agora em diante, procure pacotes **também** neste endereço". A partir daí, o programa do PPA fica visível e **atualizável** como qualquer outro — essa é a grande vantagem sobre baixar um \`.deb\` solto.

## O que acontece por baixo

Ao adicionar um PPA, o sistema faz duas coisas:

- baixa e instala uma **chave GPG**, para conferir a assinatura dos pacotes daquele repositório;
- cria um arquivo em \`/etc/apt/sources.list.d/\` com o endereço do repositório.

## A regra de ouro

PPA é **confiança em quem mantém**. Não passa pela revisão da equipe do Ubuntu. Um PPA malicioso pode rodar código como root no seu sistema durante a instalação. Portanto: use só PPAs de **fontes oficiais** (o próprio projeto) ou de mantenedores reconhecidos — por exemplo \`git-core\` (Git), \`kisak\` (drivers Mesa) ou \`deadsnakes\` (versões do Python). PPA aleatório de tutorial antigo é pedir problema.`,codes:[{lang:"bash",code:`# Ferramenta que facilita adicionar/remover PPA (às vezes já vem instalada):
sudo apt update
sudo apt install software-properties-common -y
# software-properties-common is already the newest version (0.99.x).`},{lang:"bash",code:`# Adicionar um PPA confiável (exemplo: Git oficial, sempre atualizado):
sudo add-apt-repository ppa:git-core/ppa -y
# Repository: 'deb https://ppa.launchpadcontent.net/git-core/ppa/ubuntu resolute main'
# Adding key to /etc/apt/... done.
# (o comando moderno já roda 'apt update' sozinho no fim)`},{lang:"bash",code:`# Agora o Git aparece com a versão mais nova do PPA:
sudo apt install git -y
git --version
# git version 2.45.2   (vs 2.43 que vinha do repo oficial)`},{lang:"bash",code:`# Ver todos os PPAs/repositórios extras que você adicionou:
ls /etc/apt/sources.list.d/
# git-core-ubuntu-ppa-resolute.sources
# google-chrome.sources
grep -r "^URIs\\|^deb" /etc/apt/sources.list.d/ | head`},{lang:"bash",code:`# Remover um PPA que você não quer mais:
sudo add-apt-repository --remove ppa:git-core/ppa -y
# Depois, se quiser, volte para a versão do repo oficial:
sudo apt update
sudo apt install --reinstall git -y`},{lang:"bash",code:`# PPA quebrado costuma dar erro no 'apt update' (404 ou sem Release):
sudo apt update
# E: The repository '... resolute Release' does not have a Release file.
# N: Updating from such a repository can't be done securely ...`},{lang:"bash",code:`# Localize e desative o repositório problemático:
grep -rl "launchpad" /etc/apt/sources.list.d/
# /etc/apt/sources.list.d/fulano-ubuntu-app-resolute.sources
# Abra e comente (coloque # nas linhas) ou apague o arquivo:
sudo nano /etc/apt/sources.list.d/fulano-ubuntu-app-resolute.sources
sudo apt update    # confirme que o erro sumiu`}],points:["PPA = repositório extra de terceiros, hospedado no Launchpad da Canonical.","Adicione com `sudo add-apt-repository ppa:usuario/nome` (o comando moderno já roda `apt update` no fim).","A vantagem sobre um `.deb` solto: o programa do PPA passa a **receber atualizações** pelo apt.","Remova com `sudo add-apt-repository --remove ppa:usuario/nome`.","PPAs confiáveis incluem `git-core` (Git), `kisak` (Mesa), `deadsnakes` (Python), `libreoffice`.","Os arquivos de configuração vivem em `/etc/apt/sources.list.d/` — é lá que se desativa um PPA quebrado.","PPA quebrado gera erro no `apt update` e **trava** as atualizações — resolva na hora.","Erro comum: seguir tutorial antigo e adicionar PPA abandonado, sem pacote para a sua versão do Ubuntu."],alerts:[{type:"danger",content:"PPA **não** passa por revisão da Canonical. Ao adicionar um, você confia no mantenedor com acesso de root ao instalar. Adicione apenas de fontes oficiais e reconhecidas — nunca de um link aleatório de fórum."},{type:"warning",content:"Antes de trocar de versão do sistema com `do-release-upgrade`, o Ubuntu **desativa todos os PPAs**. Depois, reative um a um, conferindo se cada um já tem pacotes para a versão nova. Reativar tudo às cegas é receita para conflito."},{type:"tip",content:"Para muitos programas modernos (VS Code, Brave, Spotify), prefira **Snap** ou **Flatpak** a um PPA: rodam em sandbox e não dependem de um mantenedor manter o PPA vivo. Veremos os dois nos próximos capítulos."}]},{slug:"snap-pacotes",section:"pacotes",title:"Snap: pacotes universais com sandbox",difficulty:"intermediario",subtitle:'O formato "tudo junto" da Canonical — vantagens e o preço que se paga.',intro:`Depois do \`apt\` e dos PPAs, você vai esbarrar num terceiro jeito de instalar programas: os **Snaps**. É um formato mais novo, criado pela **Canonical** (a empresa do Ubuntu), pensado para resolver uma dor antiga do Linux — a de o mesmo programa precisar de empacotamento diferente para cada distribuição.

## A marmita selada

Um Snap leva **tudo dentro**: o programa, suas bibliotecas e dependências, tudo num arquivo só. Por isso ele roda igual no Ubuntu, no Fedora ou no Arch, sem depender da versão de biblioteca que o sistema tem. É como uma marmita selada — pesa mais, mas você sabe que vai funcionar em qualquer lugar.

## O sandbox: segurança que às vezes incomoda

O outro pilar do Snap é o **sandbox**: o programa roda "preso", com permissões limitadas, sem poder mexer livremente no sistema. Isso aumenta a segurança — um Snap comprometido tem alcance restrito. O preço é que, às vezes, o programa **não enxerga** uma pasta fora do lugar comum (como um \`~/Downloads\` movido), e a primeira abertura é mais lenta porque ele monta o sandbox.

## No Lubuntu

O \`snapd\` (o motor dos Snaps) já vem instalado nas versões recentes. Você usa pelo comando \`snap\` ou pelo Discover, que também lista Snaps. A grande vantagem prática: receber a versão **mais nova**, direto do desenvolvedor, de programas como Spotify, Chromium, VS Code e Discord — sem esperar a equipe do Ubuntu reempacotar.`,codes:[{lang:"bash",code:`# Confirme se o snapd está presente:
snap version
# snap    2.63
# snapd   2.63
# series  16
# ubuntu  26.04

# Se não estiver, instale:
sudo apt install snapd -y`},{lang:"bash",code:`# Procurar um programa na Snap Store:
snap find spotify
# Name     Version  Publisher   Notes  Summary
# spotify  1.2.x    spotify✓    -      Music streaming for everyone
# O ✓ verde ao lado do publicador = conta VERIFICADA. Prefira esses.`},{lang:"bash",code:`# Instalar um Snap:
sudo snap install spotify
# spotify 1.2.x from Spotify✓ installed
# O ícone aparece no menu LXQt logo em seguida.`},{lang:"bash",code:`# Alguns Snaps de desenvolvedor pedem a flag --classic
# (eles precisam de acesso amplo ao sistema, sem sandbox estrito):
sudo snap install code --classic
# code (edge) ... installed
# Se esquecer o --classic quando é exigido, o snap avisa e recusa.`},{lang:"bash",code:`# Listar o que você tem instalado via Snap:
snap list
# Name     Version  Rev    Tracking       Publisher   Notes
# core22   ...      ...    latest/stable  canonical✓  base
# spotify  1.2.x    ...    latest/stable  spotify✓    -
# code     1.90     ...    latest/stable  vscode✓     classic`},{lang:"bash",code:`# Atualizações de Snap são AUTOMÁTICAS, mas dá para forçar:
sudo snap refresh
# All snaps up to date.
# Ver quando será a próxima checagem automática:
snap refresh --time
# last: today at 09:12 -03
# next: today at 15:12 -03`},{lang:"bash",code:`# Um Snap não abre um arquivo de uma pasta "estranha"? É o sandbox.
# Veja e ajuste as permissões (interfaces) do Snap:
snap connections spotify
# Interface        Plug                 Slot
# home             spotify:home         :home
# removable-media  spotify:removable    -    (desconectado)
sudo snap connect spotify:removable-media   # libera acesso a pendrives`},{lang:"bash",code:`# Remover um Snap (apaga inclusive os dados do programa):
sudo snap remove spotify
# spotify removed

# Snaps ocupam mais disco (carregam tudo dentro). Veja o tamanho:
du -sh /var/lib/snapd/snaps/*.snap | sort -h | tail
# 68M   .../core22_xxxx.snap
# 210M  .../spotify_xxxx.snap`}],points:["Snap = pacote universal, com todas as dependências dentro, criado pela Canonical.","Roda em **sandbox**: mais seguro, mas às vezes não enxerga pastas fora do padrão.","Comandos centrais: `snap find`, `snap install`, `snap list`, `snap refresh`, `snap remove`.","Atualizações são **automáticas** — você não precisa fazer nada.","Publicador com **✓ verde** é conta verificada; prefira sempre esses.","Alguns Snaps de desenvolvedor (VS Code) exigem `--classic` para ter acesso amplo.","Problema de acesso a arquivo? Ajuste as permissões com `snap connections` / `snap connect`.","Snaps ocupam mais disco e abrem mais devagar na primeira vez — é o preço do formato autocontido."],alerts:[{type:"info",content:"Algumas distribuições (Linux Mint, por exemplo) desencorajam Snap por padrão. No **Ubuntu e no Lubuntu** o suporte é nativo e oficial — pode usar sem receio."},{type:"warning",content:"A **primeira** abertura de um Snap costuma ser lenta: ele monta o sandbox e descompacta. Não é o seu PC fraco — da segunda vez em diante fica rápido."},{type:"tip",content:"Programas que ficam ótimos como Snap: **spotify, chromium, code (VS Code), discord, slack, telegram-desktop**. Sempre procure o ✓ do publicador verificado antes de instalar."},{type:"success",content:"Não sabe se um programa está como `.deb`, Snap ou Flatpak? Instale o que o **próprio site oficial** recomendar. Quando houver empate, prefira Snap/Flatpak pelo sandbox."}]},{slug:"flatpak-pacotes",section:"pacotes",title:"Flatpak: o concorrente aberto do Snap",difficulty:"intermediario",subtitle:"Outro formato universal, com o Flathub gigantesco por trás.",intro:`Se o Snap é o formato universal da Canonical, o **Flatpak** é o formato universal da **comunidade aberta** — apoiado por Red Hat, GNOME, KDE e boa parte do ecossistema Linux. O objetivo é o mesmo: empacotar o programa com suas dependências, rodar em sandbox e instalar em qualquer distribuição. A rivalidade entre os dois é real, mas para você, usuário, é só **variedade**: muita gente roda os dois na mesma máquina.

## A diferença que importa: runtimes compartilhados

O Snap carrega tudo dentro de cada pacote. O Flatpak usa **runtimes compartilhados**: várias aplicações Flatpak apoiam-se na mesma base grande de bibliotecas (por exemplo, o runtime do GNOME ou do KDE), que é baixada **uma vez** e reaproveitada. Na prática, quando você instala muitos programas Flatpak, costuma **economizar disco** em relação a instalar tudo como Snap.

## O Flathub

A loja oficial do Flatpak é o **Flathub** (flathub.org): milhares de programas, muitos com versões mais novas que as do \`apt\`. É lá que vivem as builds recentes de **OBS Studio, Inkscape, Krita, Bitwarden, Blender** e afins.

## No Lubuntu

Diferente do Snap, o Flatpak **não** vem instalado por padrão (a Canonical, naturalmente, prefere o Snap). Mas adicionar é trivial: instala o pacote, cadastra o Flathub como fonte, e pronto. Depois da primeira instalação, faça **logout/login** uma vez para os ícones aparecerem no menu LXQt.`,codes:[{lang:"bash",code:`# 1) Instalar o Flatpak no Lubuntu:
sudo apt update
sudo apt install flatpak -y
flatpak --version
# Flatpak 1.14.x`},{lang:"bash",code:`# 2) Adicionar o Flathub (a loja principal). Só precisa fazer UMA vez:
flatpak remote-add --if-not-exists flathub \\
  https://flathub.org/repo/flathub.flatpakrepo
# (sem saída = deu certo)
flatpak remotes
# Name     Options
# flathub  system`},{lang:"bash",code:`# 3) Procurar um programa:
flatpak search obs
# Name        Description              Application ID          Remotes
# OBS Studio  Live streaming/recording com.obsproject.Studio   flathub`},{lang:"bash",code:`# 4) Instalar (repare que se usa o Application ID, no formato com.autor.Programa):
flatpak install flathub com.obsproject.Studio -y
# Installing... Downloading runtime org.kde.Platform ...
# Installation complete.
# (na primeira vez ele baixa o runtime grande; nas próximas, reaproveita)`},{lang:"bash",code:`# 5) Rodar:
flatpak run com.obsproject.Studio
# Ou clique no ícone no menu LXQt (aparece após o primeiro logout/login).`},{lang:"bash",code:`# 6) Listar e atualizar tudo:
flatpak list --app
# Name        Application ID          Version
# OBS Studio  com.obsproject.Studio   30.x
flatpak update -y`},{lang:"bash",code:`# 7) Remover e depois liberar os runtimes que ninguém mais usa:
flatpak uninstall com.obsproject.Studio -y
flatpak uninstall --unused -y   # faxina: apaga runtimes órfãos, libera bastante disco`},{lang:"bash",code:`# 8) Programa Flatpak não consegue abrir um arquivo? É o sandbox.
# Instale o Flatseal (gerenciador gráfico de permissões):
flatpak install flathub com.github.tchx84.Flatseal -y
# ou ajuste por linha de comando, ex.: dar acesso à pasta inteira do usuário:
flatpak override --user --filesystem=home com.obsproject.Studio`}],points:["Flatpak = formato universal aberto, alternativa ao Snap (apoiado por Red Hat, GNOME, KDE).","Usa **runtimes compartilhados** — costuma economizar disco quando você tem várias apps.","Loja principal: **Flathub** (flathub.org), enorme e com versões fresquíssimas.","Não vem por padrão no Lubuntu; instale com `sudo apt install flatpak` e cadastre o Flathub uma vez.","Instala-se pelo **Application ID** (`com.autor.Programa`), não pelo nome curto.","Comandos centrais: `flatpak install`, `flatpak update`, `flatpak uninstall`, `flatpak uninstall --unused`.","Faça **logout/login** após a primeira instalação para os ícones surgirem no menu.","Problema de permissão? Use o **Flatseal** (gráfico) ou `flatpak override` (terminal)."],alerts:[{type:"tip",content:"Para pesquisar e instalar Flatpaks **dentro do Discover** (a loja gráfica), instale `plasma-discover-backend-flatpak`. Assim você acha apt, Snap e Flatpak num lugar só."},{type:"info",content:"Programas que costumam ficar melhores como Flatpak: **OBS Studio, Inkscape, Krita, Blender, Bitwarden, GIMP (versão nova), Telegram**. Muitos desenvolvedores tratam o Flathub como canal oficial."},{type:"warning",content:"Esquecer de cadastrar o Flathub é o erro nº 1: você instala o Flatpak, roda `flatpak search` e não acha nada. Sem uma **remote** cadastrada, não há de onde buscar pacotes."}]},{slug:"instalar-deb",section:"pacotes",title:"Instalando pacotes .deb baixados do site",difficulty:"intermediario",subtitle:"Quando o programa só existe como arquivo para download — e como fazer isso com segurança.",intro:'Alguns programas — **Google Chrome, Microsoft Teams, AnyDesk**, certos drivers de impressora — não estão no `apt`, nem em Snap, nem em Flatpak. O fornecedor oferece um arquivo `.deb` para baixar direto do site oficial. Este capítulo fecha a trilha ensinando a lidar com esses casos **sem cair em cilada**.\n\n## O que é um .deb\n\nO `.deb` é o **formato de pacote nativo** do Debian e do Ubuntu — o mesmo tipo de arquivo que o `apt` baixa por dentro, só que aqui você pega manualmente. Dentro dele estão: os arquivos do programa, a lista de dependências, metadados e scripts que rodam na instalação. É o parente mais próximo, no Linux, do `.exe`/`.msi` do Windows.\n\n## A forma certa de instalar\n\nExiste a forma antiga (`dpkg -i`) e a forma recomendada (`apt install ./arquivo.deb`). A diferença é decisiva:\n\n- `dpkg -i` instala, mas **não resolve dependências** — se faltar algo, ele para com erro.\n- `sudo apt install ./arquivo.deb` instala **e resolve as dependências** automaticamente. Repare no `./` na frente: é ele que diz ao apt "isto é um arquivo local, não o nome de um pacote no repositório".\n\n## A regra de ouro (de novo)\n\n`.deb` roda scripts como root durante a instalação. Um `.deb` malicioso compromete o sistema inteiro. Por isso: baixe **apenas do site oficial** do programa. Nada de "baixaki", fórum ou link encurtado. E, quando o site publicar o hash **SHA-256**, confira — leva cinco segundos e elimina o risco de um download adulterado.',codes:[{lang:"bash",code:`# Exemplo real: baixando o Google Chrome do site oficial:
cd ~/Downloads
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
# ... 'google-chrome-stable_current_amd64.deb' saved [118MB/118MB]
ls -lh *.deb
# -rw-r--r-- 1 voce voce 118M ... google-chrome-stable_current_amd64.deb`},{lang:"bash",code:`# A forma RECOMENDADA (resolve dependências sozinha). Note o ./ na frente:
sudo apt install ./google-chrome-stable_current_amd64.deb -y
# Note, selecting 'google-chrome-stable' instead of './google-chrome...'
# The following NEW packages will be installed:
#   google-chrome-stable
# Setting up google-chrome-stable ...`},{lang:"bash",code:`# A forma antiga com dpkg NÃO resolve dependências:
sudo dpkg -i google-chrome-stable_current_amd64.deb
# dpkg: dependency problems prevent configuration of google-chrome-stable:
#  google-chrome-stable depends on fonts-liberation; however: ...
# Conserto (rode logo em seguida):
sudo apt install -f -y     # -f = fix broken: baixa o que faltou`},{lang:"bash",code:`# INSPECIONAR o .deb antes de instalar (ver versão e dependências):
dpkg -I google-chrome-stable_current_amd64.deb
# Package: google-chrome-stable
# Version: 124.0.x
# Architecture: amd64
# Depends: ca-certificates, fonts-liberation, libnss3 (>= 2:3.22) ...`},{lang:"bash",code:`# Auditar QUAIS arquivos ele vai colocar e ONDE (bom para desconfiar):
dpkg -c google-chrome-stable_current_amd64.deb | head
# drwxr-xr-x  ./opt/google/chrome/
# -rwxr-xr-x  ./opt/google/chrome/chrome
# -rwxr-xr-x  ./usr/bin/google-chrome-stable`},{lang:"bash",code:`# Conferir o SHA-256 quando o site publica o hash oficial:
sha256sum google-chrome-stable_current_amd64.deb
# a1b2c3d4...  google-chrome-stable_current_amd64.deb
# Compare CARACTERE A CARACTERE com o hash do site. Diferente = NÃO instale.`},{lang:"bash",code:`# Remover depois usa o NOME DO PACOTE, não o do arquivo:
sudo apt remove google-chrome-stable -y
# Para apagar inclusive configurações:
sudo apt purge google-chrome-stable -y`},{lang:"bash",code:`# Muitos .deb de empresa adicionam o próprio repositório para se auto-atualizar.
# Confira (é normal e desejável — mantém o programa em dia pelo apt):
ls /etc/apt/sources.list.d/ | grep -i chrome
# google-chrome.sources
cat /etc/apt/sources.list.d/google-chrome.sources`}],points:["`.deb` é o formato nativo de pacote no Debian/Ubuntu/Lubuntu.","Prefira sempre `sudo apt install ./arquivo.deb` — o `./` marca arquivo local e as dependências são resolvidas.","`dpkg -i` instala mas não resolve dependências; se der erro, rode `sudo apt install -f`.","Inspecione antes: `dpkg -I` mostra informações; `dpkg -c` lista os arquivos que serão instalados.","Confira o **SHA-256** quando o site oficial fornecer — compara o download com o original.","Para remover, use o **nome do pacote** (`google-chrome-stable`), não o nome do arquivo.","Vários `.deb` de empresa adicionam um repositório próprio para atualizar sozinhos pelo apt — é normal.","Erro comum: usar `dpkg -i`, ver o erro de dependência e desistir — bastava rodar `apt install -f`."],alerts:[{type:"danger",content:"**Nunca** instale um `.deb` de origem desconhecida. Durante a instalação ele executa scripts como **root** — um pacote malicioso compromete o sistema inteiro. Baixe só do site oficial do fabricante."},{type:"tip",content:"Quando o mesmo programa oferece `.deb` **e** Snap/Flatpak, prefira Snap/Flatpak pelo sandbox. Use o `.deb` apenas quando o próprio fornecedor recomendar (caso do Chrome, que integra melhor como `.deb`)."},{type:"info",content:"Terminou a trilha de Pacotes! Você já sabe os **cinco** caminhos para instalar software no Lubuntu: loja Discover, `apt`, PPA, Snap, Flatpak e `.deb`. Na dúvida sobre qual usar, siga esta ordem de preferência: repositório oficial (`apt`) → Snap/Flatpak → `.deb`/PPA de fonte oficial."}]}],wq=[{slug:"navegadores-leves",section:"apps",title:"Navegadores leves",difficulty:"iniciante",subtitle:"Firefox, Chromium e opções enxutas para máquinas modestas.",intro:`O navegador é, hoje, o programa mais pesado da maioria dos computadores. Ele baixa páginas cheias de imagens, vídeos, propaganda e código JavaScript que rodam ao mesmo tempo. Em uma máquina antiga, abrir cinco abas pode comer mais memória do que o Lubuntu inteiro. Por isso, escolher bem o navegador é tão importante quanto escolher o sistema.

Pense no navegador como um carro: você pode dirigir uma SUV potente (Chrome), um sedan equilibrado (Firefox), ou um fusca confiável (Falkon). Todos chegam ao destino, mas gastam combustível diferente. No Lubuntu, o padrão geralmente é o Firefox em pacote Snap, mas existem alternativas mais leves quando o seu hardware pede economia.

Neste capítulo você vai conhecer as opções: o Firefox, que vem instalado, e como trocá-lo por uma versão deb mais rápida; o Chromium, irmão de código aberto do Chrome; e nomes menos famosos como Falkon, Midori e qutebrowser. Também vai aprender truques para deixar qualquer navegador mais leve: bloquear propagandas, descarregar abas inativas e desligar animações.

No final, a escolha é pessoal. O importante é que você saiba que pode trocar — e como medir a diferença. Abrir o monitor de recursos antes e depois é o teste mais honesto.`,codes:[{lang:"bash",code:`# O Firefox padrão no Lubuntu costuma vir como Snap.
# Snap é mais lento para abrir. Para trocar pela versão .deb da Mozilla:
sudo snap remove firefox

# Adicione o repositório oficial da equipe do Mozilla
sudo add-apt-repository ppa:mozillateam/ppa

# Instale a versão deb e bloqueie o Snap de voltar
sudo apt install firefox -y
# saída resumida: firefox is already the newest version (versão deb agora)`},{lang:"bash",code:`# Instalando o Chromium (alternativa ao Chrome, sem rastreio do Google)
sudo apt install chromium-browser -y

# Para abrir pelo terminal:
chromium-browser
# saída: abre uma janela do Chromium

# Verificar a versão instalada:
chromium-browser --version
# saída exemplo: Chromium 125.0.6422.141 Ubuntu`},{lang:"bash",code:`# Falkon: navegador leve em Qt, combina visualmente com o LXQt
sudo apt install falkon -y
falkon &
# & joga o programa para o segundo plano e libera o terminal

# Midori: ainda mais enxuto, baseado em WebKit
sudo apt install midori -y
midori &`},{lang:"bash",code:`# Comparando consumo de memória entre navegadores
# Abra cada um com a MESMA aba (ex: https://wikipedia.org)
# e rode em outro terminal:
ps -eo pid,comm,rss --sort=-rss | head -n 10
# RSS é a memória residente em KB.
# Divida por 1024 para ter MB.
# saída exemplo:
#   PID COMMAND          RSS
#  1234 firefox       650000
#  2345 chromium-brow 480000
#  3456 falkon        180000`},{lang:"bash",code:`# Truque: descarregar abas inativas no Firefox automaticamente
# Abra about:config na barra de endereço e mude:
#   browser.tabs.unloadOnLowMemory = true
# Abas que você não usa são "congeladas" e liberam RAM.

# Para bloquear propagandas e poupar dados, instale uBlock Origin:
# Firefox: https://addons.mozilla.org/firefox/addon/ublock-origin/
# Chromium: https://chrome.google.com/webstore (busque uBlock Origin)`},{lang:"bash",code:`# qutebrowser: para quem gosta de teclado e atalhos do Vim
sudo apt install qutebrowser -y
qutebrowser &
# Dentro dele:
#   :open wikipedia.org   abre site
#   J / K                 muda de aba
#   gg / G                topo / fim da página
# Não tem botões — você dirige com o teclado.`}],points:["O navegador é geralmente o app que mais consome RAM no sistema.","Snap deixa o Firefox mais lento para abrir; a versão deb da Mozilla é mais ágil.","Chromium é a base do Chrome, mas sem os pacotes de telemetria do Google.","Falkon e Midori são opções leves e suficientes para sites simples.","uBlock Origin reduz consumo de banda, RAM e CPU em qualquer navegador.","Iniciante comum: instalar Chrome direto sem perceber que ele baixa pacotes proprietários e gera tracking.","Iniciante comum: deixar 30 abas abertas e culpar o sistema pela lentidão — feche o que não usa.","Cada navegador tem extensões diferentes; nem tudo do Chrome funciona no Firefox.","Meça memória com ps ou htop antes de decidir qual fica como padrão."],alerts:[{type:"tip",content:"Configure no Firefox a página inicial about:home e desative o Pocket em about:config (extensions.pocket.enabled = false). Reduz tráfego e CPU no boot."},{type:"warning",content:"Evite instalar 5 navegadores ao mesmo tempo só para experimentar. Cada um deixa cache, perfil e processos de fundo. Escolha 1 ou 2."},{type:"info",content:"O Chromium no Ubuntu virou Snap por padrão. Se quiser a versão deb tradicional, use o PPA do projeto Linux Mint (chromium-browser-mint)."},{type:"danger",content:"Cuidado com extensões desconhecidas: elas leem TUDO que você navega. Instale só de fontes oficiais e revise permissões."}]},{slug:"libreoffice",section:"apps",title:"LibreOffice: a suíte de escritório",difficulty:"iniciante",subtitle:"Writer, Calc e Impress como alternativas ao Word, Excel e PowerPoint.",intro:`Se Microsoft Office é a Coca-Cola dos editores, LibreOffice é o guaraná: gratuito, brasileiro de coração (sim, há muita gente do Brasil contribuindo) e capaz de fazer praticamente as mesmas coisas. Ele tem Writer (para textos), Calc (planilhas), Impress (apresentações), Draw (desenho vetorial), Base (banco de dados) e Math (fórmulas).

O LibreOffice abre arquivos do Word, Excel e PowerPoint sem precisar de plugin. Pode também salvar nesses formatos quando você quiser mandar para alguém que ainda usa o Office. A formatação fica 95% igual; coisas muito específicas como macros VBA podem não vir junto, mas para o uso comum funciona muito bem.

No Lubuntu, ele já vem instalado em uma versão enxuta. Se você precisar de algo a mais (corretor ortográfico em outras línguas, Base, etc.), instala via apt em poucos megabytes. Use as primeiras semanas para se acostumar com a interface — os menus mudam de lugar, os ícones são diferentes, mas tudo está lá.

Vamos ver onde encontrar cada programa, como salvar nos formatos certos e alguns ajustes que deixam o LibreOffice mais leve e mais bonito dentro do LXQt.`,codes:[{lang:"bash",code:`# Verificar a versão instalada
libreoffice --version
# saída exemplo: LibreOffice 24.2.5.2 420(Build:2)

# Listar todos os componentes disponíveis pelo terminal:
libreoffice --writer    # abre o Writer (textos)
libreoffice --calc      # abre o Calc (planilhas)
libreoffice --impress   # abre o Impress (apresentações)
libreoffice --draw      # abre o Draw (desenho)`},{lang:"bash",code:`# Instalar componentes que faltam (Base e Math costumam não vir)
sudo apt install libreoffice-base libreoffice-math -y

# Instalar o corretor ortográfico em português do Brasil
sudo apt install hunspell-pt-br hyphen-pt-br -y
# Reinicie o LibreOffice depois para ele carregar os dicionários.`},{lang:"bash",code:`# Convertendo arquivos pelo terminal — útil para automação
# Transformar um .docx em PDF sem abrir a interface:
libreoffice --headless --convert-to pdf relatorio.docx
# saída: convert /home/voce/relatorio.docx -> /home/voce/relatorio.pdf

# Converter vários de uma vez:
libreoffice --headless --convert-to pdf *.docx
# Ótimo para fechar o mês transformando vários arquivos.`},{lang:"bash",code:`# Tornar o LibreOffice mais leve no boot
# Abra qualquer programa da suíte e vá em:
#   Ferramentas > Opções > LibreOffice > Memória
# Ajustes recomendados em PCs antigos:
#   - Cache de imagens: 64 MB (em vez de 256)
#   - Desativar "Carregar LibreOffice durante a inicialização do sistema"
# Salvar e reiniciar.`},{lang:"bash",code:`# Mudar o formato padrão de salvamento para .docx (compatibilidade Office)
# Ferramentas > Opções > Carregar/Salvar > Geral
# Em "Sempre salvar como" para Documento de texto, escolha:
#   Word 2007-365 (.docx)
# Faça o mesmo para planilhas (xlsx) e apresentações (pptx).`},{lang:"bash",code:`# Aplicar o tema Breeze (mais bonito no LXQt)
sudo apt install libreoffice-style-breeze -y
# Em qualquer programa: Ferramentas > Opções > LibreOffice > Exibir
# Estilo de ícones: Breeze
# Visual fica integrado ao tema do sistema.`}],points:["LibreOffice já vem no Lubuntu; você não precisa instalar nada para começar.","Writer abre .doc/.docx, Calc abre .xls/.xlsx, Impress abre .ppt/.pptx — tudo nativo.","Salve em .docx quando o destinatário usa Office; em .odt para arquivar localmente.","Conversão headless transforma documentos em PDF pelo terminal, ótimo para scripts.","Hunspell traz corretor ortográfico em português; precisa instalar separado.","O tema Breeze deixa os ícones integrados ao look do LXQt.","Iniciante comum: salvar como .odt e mandar para colega de Windows que não consegue abrir.","Iniciante comum: esperar que macros do Excel rodem no Calc — algumas funcionam, outras não.","Reduzir o cache de memória em Ferramentas > Opções deixa o programa mais leve."],alerts:[{type:"info",content:"Existe a versão LibreOffice Still (mais estável, mais antiga) e Fresh (mais recente). O Lubuntu costuma trazer a Still. Para Fresh, use o PPA libreoffice/ppa."},{type:"tip",content:"Aprenda os atalhos: Ctrl+S salva, Ctrl+Z desfaz, Ctrl+Shift+P exporta como PDF direto. Economiza horas em qualquer trabalho longo."},{type:"warning",content:"Documentos com macros VBA do Excel podem abrir mas não rodar no Calc. Se o seu trabalho depende de macros complexas, valide antes de migrar."},{type:"success",content:"O LibreOffice tem extensão TexMaths excelente para inserir fórmulas LaTeX em qualquer documento. Procure no extensions.libreoffice.org."}]},{slug:"cliente-email",section:"apps",title:"Clientes de e-mail",difficulty:"iniciante",subtitle:"Thunderbird, Geary e Trojitá para ler e-mails fora do navegador.",intro:`Você pode acessar Gmail, Outlook ou seu webmail direto no navegador, e muita gente faz só isso. Mas ter um cliente de e-mail dedicado tem vantagens: você baixa as mensagens para o disco (lê offline), pode juntar várias contas em uma só caixa de entrada, configura filtros poderosos e responde mais rápido sem distração de notificações de site.

Pense no cliente como uma caixa postal física que você instala em casa. O carteiro (servidor IMAP) ainda guarda tudo no prédio dele, mas você tem uma cópia local para abrir quando quiser, mesmo sem internet. Quando responde, o cliente envia pelo SMTP do seu provedor. Esses dois protocolos (IMAP e SMTP) são o segredo que todos os clientes usam.

No Lubuntu, o queridinho é o Thunderbird, da mesma família do Firefox. Ele é completo, tem extensões, agenda, suporte a PGP para criptografia e recebe atualizações até hoje. Para máquinas mais limitadas, existem alternativas leves como Geary (interface bonita e simples) e Trojitá (super enxuto, em Qt).

Vamos ver como instalar, configurar uma conta IMAP/SMTP típica (Gmail) e algumas dicas de segurança importantes — autenticação de dois fatores, senhas de aplicativo e backups da pasta do perfil.`,codes:[{lang:"bash",code:`# Instalar o Thunderbird (geralmente já vem, mas se não tiver):
sudo apt install thunderbird thunderbird-locale-pt-br -y

# Abrir pela primeira vez:
thunderbird &
# Na janela inicial, ele oferece criar uma conta nova ou usar uma existente.
# Use "uma existente" e digite seu nome, e-mail e senha.`},{lang:"bash",code:`# Configurações típicas para Gmail (IMAP)
# IMAP recebe e mantém os e-mails sincronizados (recomendado).
#
#   Servidor de entrada (IMAP):
#     imap.gmail.com   porta 993   SSL/TLS
#   Servidor de saída (SMTP):
#     smtp.gmail.com   porta 465   SSL/TLS
#
# IMPORTANTE: Gmail exige "Senha de app" se você usa 2FA.
# Crie em https://myaccount.google.com/apppasswords`},{lang:"bash",code:`# Geary — cliente leve da GNOME, integra bem em qualquer ambiente
sudo apt install geary -y
geary &
# Interface mais simples: três colunas (pastas, lista, mensagem).
# Suporta Gmail, Outlook, Yahoo, IMAP/SMTP genérico.`},{lang:"bash",code:`# Trojitá — cliente em Qt, super leve, ideal pro LXQt
sudo apt install trojita -y
trojita &
# Sem suporte a calendário ou contatos: foco em e-mail puro.
# Bom para máquinas com 2 GB de RAM ou menos.`},{lang:"bash",code:`# Backup do perfil do Thunderbird (e-mails, contas, filtros)
# A pasta fica em ~/.thunderbird
ls -lh ~/.thunderbird
# saída exemplo: total 4.0K
# drwx------ 5 voce voce 4.0K out 14 09:33 abc123.default-release

# Para fazer backup:
tar -czvf thunderbird-backup-$(date +%F).tar.gz ~/.thunderbird
# Guarde esse .tar.gz em um pendrive ou nuvem.`},{lang:"bash",code:`# Restaurar o backup em outra máquina (ou após reinstalar o sistema)
# Pare o Thunderbird antes:
pkill thunderbird

# Extraia o backup por cima da pasta home
tar -xzvf thunderbird-backup-2024-10-14.tar.gz -C ~/

# Reabra o Thunderbird — todas as contas e e-mails voltam.
thunderbird &`}],points:["Cliente de e-mail baixa mensagens localmente; você lê offline e responde rápido.","IMAP sincroniza com o servidor; POP3 só baixa e apaga (evite POP3 hoje em dia).","Thunderbird é a opção completa; Geary e Trojitá são leves para máquinas modestas.","Gmail e Outlook exigem 'senha de app' se você usa autenticação em dois fatores.","A pasta ~/.thunderbird guarda TUDO; faça backup antes de reinstalar o sistema.","Filtros automáticos (regras) movem mensagens para pastas — economiza muito tempo.","Iniciante comum: usar a senha normal do Gmail e ver erro de autenticação — precisa da senha de app.","Iniciante comum: configurar POP3 sem querer, apagar do servidor e perder os e-mails ao reinstalar.","Para criptografia ponta a ponta, instale a extensão OpenPGP (já vem embutida no Thunderbird recente)."],alerts:[{type:"danger",content:"Nunca digite a senha do seu e-mail em sites suspeitos. Phishing é o ataque mais comum. Cliente local não pede senha em popup do navegador."},{type:"warning",content:"Provedores como Gmail bloqueiam logins de 'apps menos seguros'. Use sempre senha de app + 2FA, não tente desativar a segurança da conta."},{type:"tip",content:"Configure assinatura padrão em Editar > Configurações da conta > Identidade. Aparece em todo e-mail novo, sem precisar digitar."},{type:"info",content:"Thunderbird tem agenda integrada (Lightning) que sincroniza com Google Calendar via add-on Provider for Google Calendar."}]},{slug:"tocador-musica",section:"apps",title:"Tocadores de música",difficulty:"iniciante",subtitle:"Audacious, Clementine, Rhythmbox e o que cabe na sua biblioteca.",intro:`Por mais que streaming tenha tomado conta, ainda há quem prefira ter MP3 e FLAC no disco — coleção própria, sem assinatura, sem rastreio. Em Linux, sobra opção de tocador. Cada um tem uma cara: alguns parecem o velho Winamp, outros lembram iTunes, outros são minimalistas e quase invisíveis na bandeja.

No Lubuntu, o tocador padrão historicamente é o Audacious. É leve, abre rápido e até aceita as skins clássicas do Winamp 2 — pura nostalgia. Ele lê todos os formatos comuns (MP3, OGG, FLAC, WAV) e tem equalizador embutido. Para coleção grande com capas, gêneros e playlists organizadas, o Clementine é mais robusto.

Existem ainda opções nichadas: Rhythmbox para quem gosta do estilo iTunes, Strawberry para quem ama metadata e reprodução de altíssima qualidade, e cmus para quem vive no terminal. Cada um pesa diferente — Audacious roda em qualquer máquina, Clementine pede um pouquinho mais.

Vamos instalar, organizar a biblioteca, criar playlists e tocar pelo terminal quando preciso. Tocar música pelo terminal parece bobagem, mas é útil quando você quer fazer um botão no painel do LXQt que toca uma rádio favorita.`,codes:[{lang:"bash",code:`# Audacious — tocador padrão, leve, com skins do Winamp
sudo apt install audacious -y
audacious ~/Música/*.mp3 &
# Toca todos os MP3 da pasta Música.

# Para mudar para a interface clássica (Winamp):
# Configurações > Aparência > Interface > Winamp Classic Interface`},{lang:"bash",code:`# Clementine — biblioteca rica, ideal para coleção grande
sudo apt install clementine -y
clementine &
# Na primeira execução, aponte para sua pasta de músicas.
# Ferramentas > Adicionar pasta da biblioteca`},{lang:"bash",code:`# Strawberry — fork moderno do Clementine, melhor suporte a FLAC e DSD
sudo apt install strawberry -y
strawberry &

# Rhythmbox — interface estilo iTunes, integra bem com podcasts
sudo apt install rhythmbox -y
rhythmbox &`},{lang:"bash",code:`# Tocar música pelo terminal (sem interface)
# mpg123 toca MP3:
sudo apt install mpg123 -y
mpg123 ~/Música/musica.mp3
# saída: Title: Wonderful Song   Artist: Banda X
# [0:23] Decoding of musica.mp3 finished.

# Para tocar uma rádio online:
mpg123 https://stream.zeno.fm/c5xpnu0vnuhvv
# Ctrl+C interrompe.`},{lang:"bash",code:`# Baixar capas e tags automaticamente no Clementine
# 1. Selecione a faixa
# 2. Botão direito > Editar etiquetas
# 3. Aba "Capa" > clique "Buscar automaticamente"
# Ele consulta MusicBrainz e Last.fm.

# Para organizar a biblioteca em pastas Artista/Álbum:
# Ferramentas > Organizar arquivos
# Modelo: %artist%/%album%/%track% - %title%.%ext%`},{lang:"bash",code:`# cmus — tocador no terminal, muito leve (~10 MB de RAM)
sudo apt install cmus -y
cmus
# Comandos dentro:
#   :add ~/Música       adiciona pasta
#   c                   tocar/pausar
#   b / z               próxima / anterior
#   v                   parar
#   q                   sair`}],points:["Audacious é leve, lê todos os formatos comuns e aceita skins do Winamp.","Clementine é melhor quando você tem milhares de faixas com capas e álbuns.","Strawberry é fork do Clementine focado em qualidade de áudio (FLAC, DSD).","mpg123 e cmus tocam pelo terminal — úteis para scripts e atalhos.","MusicBrainz é o banco de dados aberto de música; quase todos puxam tags dele.","Equalizador integrado evita instalar JACK ou PulseEffects para ajuste simples.","Iniciante comum: deixar a biblioteca em uma pasta e mover sem reindexar — o tocador 'perde' as músicas.","Iniciante comum: instalar 5 tocadores e ficar perdido qual abre o quê — escolha um padrão.","Para podcasts dedicados, instale o gpodder; ele baixa episódios automaticamente."],alerts:[{type:"tip",content:"Defina o tocador padrão em Configurações do LXQt > Associações de arquivos. Assim, dois cliques em um MP3 abrem o programa certo."},{type:"info",content:"Para escutar Spotify de graça (sem instalar o app pesado), use o spotify-tui ou o cliente web direto no Firefox."},{type:"warning",content:"Skins antigas do Winamp podem ter vírus para Windows embutidos. Em Linux não rodam, mas evite baixar de sites obscuros mesmo assim."}]},{slug:"video-vlc",section:"apps",title:"Vídeo: VLC e alternativas",difficulty:"iniciante",subtitle:"O canivete suíço dos formatos de vídeo.",intro:`O VLC é o tipo de programa que você instala uma vez e nunca mais precisa de outro tocador. Ele toca tudo: MP4, MKV, AVI, MOV, WebM, DVDs, Blu-rays sem proteção, transmissões ao vivo, streams de webcam, e até arquivos quebrados que outros tocadores recusam. O lema do projeto é "se um codec existe, o VLC toca".

A grande força do VLC é trazer todos os codecs embutidos. Em Windows você baixa um pacote chamado K-Lite Codec Pack, em Linux nem isso é necessário porque o VLC traz tudo. Isso evita aquele cenário irritante de abrir um vídeo, ver imagem mas não ouvir som, ou som sem imagem.

O Lubuntu não traz o VLC de fábrica para economizar espaço, mas ele está a um apt install de distância. Existem alternativas mais leves como mpv (terminal-friendly) e celluloid (interface bonita sobre o mpv), úteis quando você quer só assistir e não precisa do canivete suíço inteiro.

Neste capítulo, vamos instalar, ver como tocar mídia local e remota, capturar trechos, converter vídeo entre formatos e até gravar a tela — sim, o VLC faz isso também.`,codes:[{lang:"bash",code:`# Instalar o VLC
sudo apt install vlc -y

# Tocar um arquivo local:
vlc ~/Vídeos/filme.mkv

# Tocar uma URL (rádio, stream, vídeo direto):
vlc https://exemplo.com/video.mp4

# Tocar do terminal sem interface gráfica:
cvlc --play-and-exit musica.mp3
# cvlc é a versão "console", sem janela.`},{lang:"bash",code:`# Atalhos importantes dentro do VLC
# Espaço      pausar/tocar
# F           tela cheia
# M           mudo
# +/-         velocidade (1.5x, 0.5x...)
# E           avançar 1 frame (ótimo para tirar print)
# Shift+S     captura tela em ~/Imagens
# Ctrl+T      ir para tempo específico (HH:MM:SS)`},{lang:"bash",code:`# Converter um vídeo entre formatos pelo VLC (linha de comando)
# Exemplo: MKV para MP4
vlc input.mkv \\
  --sout="#transcode{vcodec=h264,acodec=mp3}:standard{access=file,mux=mp4,dst=output.mp4}" \\
  --intf dummy
# --intf dummy roda sem interface, ideal para script.

# Aviso: para conversões mais sérias, prefira o ffmpeg (próximo capítulo).`},{lang:"bash",code:`# mpv — tocador minimalista, ótimo em máquinas fracas
sudo apt install mpv -y
mpv filme.mp4

# Atalhos do mpv:
#   espaço     pausar
#   q          sair
#   ← →        retroceder/avançar 5s
#   ↑ ↓        volume

# Celluloid: interface gráfica sobre o mpv
sudo apt install celluloid -y
celluloid &`},{lang:"bash",code:`# Gravar a tela inteira como vídeo
# 1. Abra o VLC > Mídia > Abrir dispositivo de captura
# 2. Modo de captura: Tela
# 3. Taxa de quadros: 25 fps
# 4. Em "Reproduzir", clique na seta e escolha "Converter"
# 5. Salve como MP4

# Pelo terminal (mais simples, mas só Xorg, não Wayland):
cvlc screen:// :screen-fps=25 \\
  --sout="#transcode{vcodec=h264}:standard{access=file,mux=mp4,dst=tela.mp4}"`},{lang:"bash",code:`# Tocar DVD e Blu-ray sem DRM
# Insira o disco e:
vlc dvd://
vlc bluray:///dev/sr0

# Para Blu-ray comerciais (com DRM AACS), instale também:
sudo apt install libaacs0 -y
# E baixe a chave em ~/.config/aacs/
# (busque por libaacs keys database — depende do disco)`}],points:["VLC toca praticamente todos os formatos sem precisar instalar codec extra.","O comando cvlc roda sem interface — útil em scripts e servidor.","Atalhos como E (frame por frame) e Shift+S (capturar tela) economizam tempo.","mpv é mais leve que o VLC; celluloid traz uma interface bonita por cima.","VLC grava a tela e converte vídeos, mas para conversão sério prefira ffmpeg.","DVD funciona direto; Blu-ray comercial precisa das chaves AACS configuradas.","Iniciante comum: instalar 'codec packs' que não existem em Linux — VLC já traz tudo.","Iniciante comum: tela preta com som = arraste a barra de tempo, é o cache enchendo.","Para legendas .srt, deixe o arquivo com o mesmo nome do vídeo na mesma pasta."],alerts:[{type:"tip",content:"VLC tem extensões: vá em Ferramentas > Plugins. Tem extensão para baixar legenda do OpenSubtitles automaticamente."},{type:"info",content:"Em PCs muito antigos, ative VLC > Ferramentas > Preferências > Vídeo > Saída: X11. Isso evita gargalo de aceleração que não existe."},{type:"warning",content:"Não baixe VLC de sites de terceiros. Sempre instale via apt ou pelo videolan.org. Existem clones com adware na internet."},{type:"success",content:"VLC pode transmitir vídeo pela rede: Mídia > Stream. Útil para mostrar um vídeo do PC na TV via outro VLC."}]},{slug:"editor-imagem",section:"apps",title:"Editores de imagem",difficulty:"intermediario",subtitle:"GIMP, Krita, Inkscape e visualizadores leves.",intro:`O Linux tem opções excelentes para imagem, e o melhor: tudo gratuito. Para edição estilo Photoshop, existe o GIMP. Para desenho artístico estilo Procreate ou Clip Studio, existe o Krita. Para vetor estilo Illustrator, existe o Inkscape. Cada um cobre um nicho — não precisa escolher um só, eles convivem bem.

No dia a dia, porém, você raramente precisa de um editor pesado. Recortar uma foto, redimensionar para mandar por WhatsApp, fazer um print da tela — para isso, ferramentas leves bastam. O Lubuntu já vem com o LXImage para visualizar e o Scrot/Spectacle para capturar tela, e isso resolve 80% das tarefas.

Neste capítulo veremos os pesos-pesados e os leves, e quando usar cada um. Também aprenderemos a fazer operações em lote pelo terminal com o ImageMagick, que é praticamente um Photoshop sem janela: redimensiona 300 fotos com um comando.

A regra prática: se é uma foto, abra com o LXImage. Se quer cortar e ajustar uma só, use o GIMP. Se vai pintar do zero, Krita. Se é vetor (logo, ícone), Inkscape. Se é uma operação repetitiva em muitas imagens, ImageMagick.`,codes:[{lang:"bash",code:`# Visualizador padrão do LXQt — já vem instalado
lximage-qt ~/Imagens/foto.jpg
# Ele tem ferramentas básicas: girar, redimensionar, recortar.
# Para rodar um corte rápido sem abrir nada pesado, basta isso.`},{lang:"bash",code:`# GIMP — alternativa ao Photoshop
sudo apt install gimp -y

# Abrir um arquivo:
gimp foto.jpg &

# Pacotes complementares úteis:
sudo apt install gimp-data-extras gimp-plugin-registry -y
# Adicionam pincéis, gradientes e plugins de terceiros.`},{lang:"bash",code:`# Krita — para desenho digital e ilustração
sudo apt install krita -y
krita &

# Suporta tablets (Wacom, XP-Pen) sem configuração extra.
# Tem timeline para animação 2D simples também.`},{lang:"bash",code:`# Inkscape — vetor (SVG, logos, ícones)
sudo apt install inkscape -y
inkscape logo.svg &

# Converter SVG para PNG pelo terminal:
inkscape --export-type=png --export-filename=logo.png logo.svg
# saída: Background RRGGBBAA: 00000000
# Bitmap saved as: logo.png`},{lang:"bash",code:`# ImageMagick — Photoshop em forma de comandos
sudo apt install imagemagick -y

# Redimensionar uma imagem mantendo proporção:
convert foto.jpg -resize 800x600 foto_pequena.jpg

# Converter formato (JPG para PNG):
convert foto.jpg foto.png

# Comprimir JPG (qualidade 70%):
convert foto.jpg -quality 70 foto_comprimida.jpg`},{lang:"bash",code:`# Operação em lote: redimensionar todas as fotos da pasta
mkdir saida
for arquivo in *.jpg; do
    # convert é o comando do ImageMagick
    convert "$arquivo" -resize 1024x "saida/$arquivo"
done
echo "Fim: $(ls saida | wc -l) imagens processadas"
# saída exemplo: Fim: 47 imagens processadas`},{lang:"bash",code:`# Capturar a tela com Scrot (linha de comando)
sudo apt install scrot -y

# Tela inteira:
scrot tela.png

# Com 3s de delay:
scrot -d 3 tela.png

# Selecionar área com o mouse:
scrot -s recorte.png
# Salva no diretório atual.`}],points:["GIMP cobre quase tudo que Photoshop faz, com curva de aprendizado parecida.","Krita é melhor que GIMP para ilustração; foco em pincéis e tablet.","Inkscape é a ferramenta para vetor (SVG); GIMP é para raster (pixel).","ImageMagick processa centenas de imagens via terminal sem abrir interface.","LXImage e Scrot resolvem o cotidiano: visualizar e capturar tela.","Para tablet de desenho, Krita reconhece pressão automaticamente sem driver.","Iniciante comum: tentar editar texto vetorial em SVG no GIMP — texto vira pixel e perde qualidade. Use Inkscape.","Iniciante comum: salvar tudo em JPG (com perda) quando original era PNG sem perda — fica feio.","Spectacle (do KDE) é alternativa ao Scrot com interface gráfica e mais opções."],alerts:[{type:"tip",content:"Use o atalho 'Imprimir tela' (PrintScreen). No LXQt ele já vem mapeado para abrir uma ferramenta de captura."},{type:"info",content:"GIMP 3.0 (lançado em 2025) tem interface modernizada. Se vier com versão antiga, considere Flatpak para pegar a mais nova."},{type:"warning",content:"ImageMagick por padrão limita uso de memória. Para imagens muito grandes (>100 MP), edite /etc/ImageMagick-6/policy.xml."},{type:"danger",content:"Antes de aceitar plugin do gimp-plugin-registry, leia descrição. Alguns são abandonados há mais de 10 anos e podem travar o programa."}]},{slug:"mensageiros",section:"apps",title:"Mensageiros",difficulty:"iniciante",subtitle:"Telegram, Signal, WhatsApp Web, Discord no Lubuntu.",intro:`Mensageiros são parte do dia a dia de qualquer pessoa hoje. A boa notícia: praticamente todos têm versão para Linux ou rodam bem no navegador. A não tão boa: alguns são Electron, ou seja, um Chrome inteiro embutido só para mostrar mensagens. Em uma máquina antiga, abrir Discord, Slack e WhatsApp Web ao mesmo tempo pode comer 2 GB de RAM tranquilamente.

O Telegram tem cliente nativo escrito em Qt — leve, rápido e funciona muito bem no LXQt. O Signal tem cliente desktop oficial (Electron, infelizmente). O WhatsApp não tem app oficial para Linux; você usa pelo navegador (web.whatsapp.com) ou por wrappers como o Whatsie. Discord tem app oficial Electron.

Neste capítulo, vamos instalar os principais e dar dicas para reduzir o impacto deles no sistema. Ferramentas como Ferdium agrupam vários mensageiros em uma única janela — útil se você não aguenta abrir 5 programas separados.

Importante: aplicativos de mensagem têm acesso a notificações e podem rodar em segundo plano. Configure cada um com cuidado para não ficar com 4 ícones piscando na bandeja toda hora.`,codes:[{lang:"bash",code:`# Telegram Desktop (cliente oficial em Qt)
sudo apt install telegram-desktop -y
telegram-desktop &
# Faça login com seu número; o código chega pelo app celular ou SMS.`},{lang:"bash",code:`# Signal Desktop (Electron, mas é o mais privado)
# Adiciona o repositório oficial:
wget -O- https://updates.signal.org/desktop/apt/keys.asc | \\
    gpg --dearmor | \\
    sudo tee /usr/share/keyrings/signal-desktop-keyring.gpg > /dev/null

echo 'deb [arch=amd64 signed-by=/usr/share/keyrings/signal-desktop-keyring.gpg] https://updates.signal.org/desktop/apt xenial main' | \\
    sudo tee /etc/apt/sources.list.d/signal-xenial.list

sudo apt update
sudo apt install signal-desktop -y`},{lang:"bash",code:`# WhatsApp Web — usar pelo Firefox/Chromium é o mais leve
firefox https://web.whatsapp.com &

# Para um app dedicado (sem precisar abrir aba):
sudo apt install whatsie -y
# whatsie é um wrapper Electron, então pesa.

# Alternativa via Snap, mais atualizada:
sudo snap install whatsdesk`},{lang:"bash",code:`# Discord (Electron oficial)
# Baixe o .deb em https://discord.com/api/download?platform=linux&format=deb
wget -O discord.deb "https://discord.com/api/download?platform=linux&format=deb"
sudo apt install ./discord.deb -y

# Atualizações: Discord notifica e abre o navegador.
# Repita o wget+apt install para atualizar.`},{lang:"bash",code:`# Ferdium — agrupa vários mensageiros em uma janela só
# (não está nos repositórios; baixe o .deb)
wget -O ferdium.deb https://github.com/ferdium/ferdium-app/releases/latest/download/Ferdium-linux-amd64.deb
sudo apt install ./ferdium.deb -y
ferdium &
# Adicione "serviços" (WhatsApp, Telegram Web, Slack) — cada um vira uma aba.`},{lang:"bash",code:`# Reduzir consumo de Electron-apps
# Adicione no atalho do programa (Editar atalho do menu) a flag:
#   --disable-gpu --disable-software-rasterizer
# Exemplo no .desktop:
#   Exec=discord --disable-gpu

# E para Discord não abrir no boot, em Configurações:
# Configurações de Usuário > Configurações do Windows >
# desmarque "Abrir Discord ao iniciar o computador".`}],points:["Telegram Desktop é o mais leve (Qt nativo) e tem todas as funções do app móvel.","Signal é o mais privado, mas é Electron e pesa mais.","WhatsApp não tem app oficial Linux; use web.whatsapp.com ou whatsie/whatsdesk.","Discord oficial é Electron; flags --disable-gpu reduzem uso de RAM.","Ferdium agrupa mensageiros em uma janela só, mas ainda é Electron embaixo.","Apps de mensagem rodando em segundo plano consomem RAM mesmo minimizados.","Iniciante comum: ter Telegram instalado E Telegram Web aberto no Firefox — duplica o consumo.","Iniciante comum: deixar todos os apps iniciarem com o sistema e estranhar boot lento.","Em PCs com pouca RAM, prefira usar tudo no navegador (uma aba pesa menos que um Electron inteiro)."],alerts:[{type:"warning",content:"Apps Electron embutem um Chromium completo (~100MB cada). Usar 4 ao mesmo tempo é abrir 4 navegadores escondidos."},{type:"tip",content:"Configure o Telegram para não baixar mídia automaticamente: Configurações > Avançado > Auto-download. Economiza disco e dados."},{type:"info",content:"Element (cliente Matrix) é uma alternativa descentralizada. Open source completo, sem empresa controlando."},{type:"danger",content:"Não instale apks de WhatsApp via Anbox/Waydroid em servidor de produção: viola termos da Meta e pode banir seu número."}]},{slug:"alternativas-leves",section:"apps",title:"Alternativas leves a apps comuns",difficulty:"intermediario",subtitle:"Substitutos enxutos para Notion, Slack, Spotify, Photoshop.",intro:`Os apps que dominam o mercado costumam ser pesados. Notion, Slack, Spotify, VS Code, Adobe XD — quase todos rodam dentro de um Chromium. Em uma máquina robusta isso passa despercebido. Em um PC antigo com Lubuntu, abrir três deles ao mesmo tempo já compromete a experiência.

A boa notícia é que para quase todo app popular existe uma alternativa leve no mundo Linux. Nem sempre tão polida, nem sempre com todos os recursos, mas o suficiente para o trabalho. Se você não usa as 50 funções premium do Notion, talvez um arquivo Markdown com Joplin resolva. Se você não vive de DJ, talvez o cmus baste em vez do Spotify.

A ideia deste capítulo não é que você troque tudo. É que você saiba o que existe quando o programa "padrão" pesar demais. Cada substituto tem trade-offs: a interface pode ser feia, a comunidade pode ser menor, faltarão recursos. Mas você ganha desempenho, privacidade e independência de empresas que podem mudar o produto sem aviso.

Vamos ver substitutos categoria por categoria, com instalação e quando faz sentido trocar. No fim, talvez você descubra que metade do que tem no PC pode ser substituído.`,codes:[{lang:"bash",code:`# Notion → Joplin (notas em Markdown, com sync via WebDAV/Nextcloud)
sudo apt install joplin -y
joplin &
# Suporta cadernos, tags, anexos, criptografia ponta a ponta.
# Sincroniza com Dropbox, OneDrive, WebDAV ou servidor próprio.`},{lang:"bash",code:`# Slack → Element (Matrix) ou IRC clássico
# Element para chat moderno em equipe:
sudo apt install element-desktop -y

# Hexchat para IRC (mais leve):
sudo apt install hexchat -y
hexchat &
# Ainda existem comunidades ativas em IRC (Libera.Chat, OFTC).`},{lang:"bash",code:`# Spotify pesado → cmus + spotify-tui (interface terminal)
sudo apt install cmus -y

# Para Spotify pelo terminal (precisa conta Premium):
# Instale o spotifyd (daemon) e o spotify-tui (interface)
# https://github.com/Rigellute/spotify-tui
# Pesa 30 MB de RAM em vez de 500 MB do app oficial.`},{lang:"bash",code:`# Photoshop → GIMP (já vimos) + Pinta (mais simples ainda)
sudo apt install pinta -y
pinta foto.jpg &
# Pinta é parecido com Paint.NET do Windows.
# Bom para edições rápidas sem o peso do GIMP.`},{lang:"bash",code:`# VS Code → Geany ou Featherpad (editores leves)
sudo apt install geany -y
geany arquivo.py &
# Geany pesa ~30 MB; VS Code pesa 300 MB+ por ser Electron.

# Featherpad é ainda mais minimalista, ideal pra editar configs:
sudo apt install featherpad -y
featherpad ~/.bashrc &`},{lang:"bash",code:`# Outros pares úteis (instalar > nome leve > nome pesado)
sudo apt install zathura -y          # PDF (vs Adobe Reader pesado)
sudo apt install qpdfview -y         # alternativa Qt para PDF
sudo apt install qpwgraph -y         # patchbay áudio (vs Carla)
sudo apt install transmission-qt -y  # torrent (vs qBittorrent)
sudo apt install lxtask -y           # gerenciador processos (vs htop GUI)`},{lang:"bash",code:`# Comparando peso (RAM) — abra cada um e rode em outro terminal:
ps -eo comm,rss --sort=-rss | head -n 15
# Exemplo de saída em uma máquina:
#   firefox        650000   (Firefox 650 MB)
#   element        420000   (Slack-like Element 420 MB)
#   joplin         180000   (Notion-like Joplin 180 MB)
#   featherpad      30000   (editor leve 30 MB)
#   geany           42000   (editor leve 42 MB)`}],points:["Para quase todo app popular existe uma alternativa leve em Linux.","Joplin substitui Notion para a maioria dos usos casuais e oferece criptografia.","Element/Matrix é a melhor alternativa moderna ao Slack, descentralizada.","Geany e Featherpad são editores leves; VS Code só vale a pena com extensões pesadas.","Pinta cobre 90% das edições caseiras em uma fração do peso do GIMP.","spotify-tui usa 30 MB em vez de 500 MB do Spotify oficial (precisa Premium).","Iniciante comum: trocar tudo de uma vez e se frustrar — migre um app por semana.","Iniciante comum: esperar funcionalidade idêntica — alternativas costumam ser 80% do original.","Sempre meça o ganho com ps ou htop antes/depois, para ter dado real."],alerts:[{type:"tip",content:"Antes de migrar, exporte os dados do app pesado (Notion exporta Markdown, por exemplo). Migração com dados na mão é tranquila."},{type:"info",content:"Sites como alternativeto.net listam alternativas comparando recursos. Bom ponto de partida para encontrar substitutos para qualquer app."},{type:"warning",content:"Programas alternativos podem ter comunidade pequena. Se algo crítico depende de suporte rápido, pondere antes de migrar."},{type:"success",content:"Quando achar um app leve que adora, indique para amigos. Comunidades pequenas crescem com boca a boca e doações."}]},{slug:"jogos-leves",section:"apps",title:"Jogos leves para Lubuntu",difficulty:"iniciante",subtitle:"Diversão sem precisar de placa de vídeo dedicada.",intro:`Quem nunca usou Linux costuma achar que jogar é impossível. Faz tempo que isso mudou: hoje a Steam roda na maioria dos jogos via Proton (uma camada de compatibilidade), e existem milhares de jogos nativos. Mas em uma máquina antiga rodando Lubuntu, o foco é diferente: jogos leves que não exigem GPU dedicada.

Pense em jogos clássicos: SuperTux, Frozen Bubble, OpenTTD, 0 A.D., Wesnoth. Todos rodam em hardware modesto, são gratuitos e divertidos. Vão te entreter por horas sem fazer o ventilador uivar. Para muitos, são até melhores que jogos AAA — design enxuto, foco em jogabilidade, sem microtransações.

Para coisas mais ambiciosas, dá para experimentar Steam com cuidado: instale, escolha jogos antigos ou indies leves, ative Proton e veja como roda. Não espere maravilhas em integrada de 10 anos atrás, mas surpresas acontecem. Stardew Valley, Hollow Knight, Celeste e Don't Starve rodam suavemente em hardware modesto.

Vamos passar pelos clássicos do repositório, pelos emuladores (Mednafen, RetroArch — para jogar Mega Drive, Super Nintendo, PS1) e pela Steam. No fim, você terá opções suficientes para nunca dizer "Linux não tem jogo".`,codes:[{lang:"bash",code:`# Jogos clássicos do repositório — todos rodam em qualquer máquina
sudo apt install supertux supertuxkart frozen-bubble \\
    pingus warmux openttd 0ad wesnoth -y

# Jogar:
supertux2          # plataforma estilo Mario
supertuxkart       # corrida estilo Mario Kart
frozen-bubble      # quebra-cabeça com bolhas
openttd            # gerenciador de transporte
0ad                # estratégia em tempo real
wesnoth            # estratégia em turnos`},{lang:"bash",code:`# RetroArch — emulador universal (NES, SNES, Mega Drive, GBA, PS1)
sudo apt install retroarch -y
retroarch &

# Dentro do RetroArch:
# 1. Online Updater > Core Downloader > escolha o sistema
# 2. Carregar Conteúdo > selecione a ROM (.nes, .smc, .iso)
# Joga com teclado por padrão; controle USB funciona direto.`},{lang:"bash",code:`# Mednafen — alternativa em terminal para emulação
sudo apt install mednafen -y
mednafen jogo.smc
# Lê SNES, Mega Drive, PSX, GBA. Configuração via teclas:
# Alt+Shift+1 (joystick virtual configura)
# F11 (volta ao tamanho normal)`},{lang:"bash",code:`# Steam — instalar e habilitar Proton para rodar jogos Windows
sudo apt install steam -y
steam &

# Login na Steam, vá em:
# Steam > Configurações > Compatibilidade
# Marque "Habilitar Steam Play para todos os outros títulos"
# Escolha "Proton Experimental" como ferramenta padrão.
# Agora a maioria dos jogos Windows roda direto.`},{lang:"bash",code:`# Verificar se um jogo Windows roda no Proton
# Acesse: https://www.protondb.com/
# Procure pelo nome do jogo.
# Notas:
#   Platinum = roda igual no Windows
#   Gold     = roda perfeito com pequena config
#   Silver   = roda mas com bugs menores
#   Bronze   = funciona mal
#   Borked   = não roda

# Antes de comprar um jogo, sempre confira o ProtonDB.`},{lang:"bash",code:`# Lutris — gerenciador de jogos (Steam, Epic, GOG, emuladores)
sudo apt install lutris -y
lutris &
# Tem instaladores prontos para milhares de jogos.
# Procure o jogo, clique em "Install" e ele baixa tudo (Wine, Proton, etc.)`},{lang:"bash",code:`# Monitorar FPS enquanto joga (precisa de mangohud)
sudo apt install mangohud -y

# Iniciar um jogo com overlay de FPS:
mangohud %command%   # cole isso em "Opções de inicialização" na Steam

# Ou no terminal:
mangohud supertuxkart
# Mostra FPS, uso de CPU/GPU/RAM no canto da tela.`}],points:["Linux tem dezenas de jogos clássicos no repositório que rodam em qualquer máquina.","RetroArch e Mednafen emulam consoles antigos (NES, SNES, PS1) sem complicação.","Steam com Proton roda a maior parte dos jogos Windows; cheque ProtonDB antes.","Lutris simplifica instalar jogos de Epic, GOG, Battle.net via Wine.","MangoHud mostra FPS e uso de recursos sobre o jogo, ótimo para diagnosticar.","Jogos AAA recentes pedem GPU dedicada — Lubuntu se sai melhor com indies e clássicos.","Iniciante comum: tentar instalar Steam em máquina sem 3D ativo e culpar Linux pelo travamento.","Iniciante comum: jogar com integrada e esperar 60 fps em jogo moderno — não vai rolar.","0 A.D. e Wesnoth são gratuitos e tão profissionais quanto jogos pagos."],alerts:[{type:"tip",content:"Para controle de Xbox/PS via USB, conecte e ele funciona automático. Bluetooth do PS4/PS5 às vezes precisa do pacote ds4drv."},{type:"info",content:"Steam Deck roda Linux (SteamOS, baseado em Arch). Muito do que aprende em Lubuntu para jogos vale lá também."},{type:"warning",content:"Jogos com anti-cheat invasivo (kernel-level) como Valorant, Fortnite, PUBG não funcionam no Linux. Não há volta para isso."},{type:"danger",content:"Cuidado com sites que oferecem ROMs. Baixar ROM de jogo que você não possui é pirataria. Sites como GOG vendem clássicos legalizados."}]}],kq=[{slug:"zram-swap",section:"hardware-leve",title:"ZRAM e swap: respirando com pouca RAM",difficulty:"intermediario",subtitle:"Como o Lubuntu finge ter mais memória do que tem.",intro:`Imagine a memória RAM como o tampo da sua mesa de estudo: cabe um número limitado de cadernos abertos ao mesmo tempo. Quando enche, você precisa fechar um caderno para abrir outro. O Linux faz parecido: quando a RAM lota, ele guarda partes menos usadas em outro lugar para liberar espaço. Esse "outro lugar" é o swap.

O swap tradicional fica no disco (HD ou SSD). Funciona, mas é lento, porque mexer no disco é centenas de vezes mais devagar que mexer na RAM. Em máquinas antigas com pouca memória isso aparece como travamentos longos quando você abre muitas abas no Firefox.

A ZRAM é uma ideia mais esperta: cria um pedaço de swap dentro da própria RAM, mas comprimido. É como dobrar suas roupas a vácuo na mala: cabe mais coisa no mesmo espaço, mas você gasta um pouquinho de CPU para comprimir e descomprimir. Em PCs antigos com 2-4 GB de RAM, ZRAM costuma ser o ajuste que mais melhora a sensação de fluidez.

Neste capítulo você vai inspecionar quanto swap o Lubuntu já tem, ativar a ZRAM (que pode ou não vir pronta na sua versão) e ajustar o "swappiness", o parâmetro que diz quão cedo o Linux começa a usar o swap. Mexer aqui é seguro: nada apaga arquivos seus, é só configuração de memória.`,codes:[{lang:"bash",code:`# Veja quanta RAM e swap o sistema tem agora
free -h
# saída exemplo:
#                total        used        free
# Mem:           3,7Gi       1,2Gi       1,1Gi
# Swap:          2,0Gi          0B       2,0Gi
# -h mostra em formato humano (Gi, Mi) em vez de KB`},{lang:"bash",code:`# Veja quais swaps estão ativos e de que tipo
swapon --show
# NAME       TYPE       SIZE  USED PRIO
# /swapfile  file         2G    0B   -2
# /dev/zram0 partition  1,9G    0B  100
# Tipo "partition" com nome /dev/zram0 = ZRAM ativa
# Prioridade maior (100) é usada antes do disco (-2)`},{lang:"bash",code:`# Instale o gerenciador de ZRAM (se não vier pronto)
sudo apt update
sudo apt install zram-config -y

# Reinicie para ativar
sudo reboot
# Depois confira novamente com: swapon --show`},{lang:"bash",code:`# Ajustando o "swappiness" — quão cedo o sistema usa swap
# Valor padrão no Ubuntu: 60 (quase sempre alto demais para desktop)
cat /proc/sys/vm/swappiness
# 60

# Teste um valor mais baixo para sessão atual:
sudo sysctl vm.swappiness=10
# Agora o sistema só recorre ao swap quando a RAM realmente apertar`},{lang:"bash",code:`# Tornar o swappiness=10 permanente entre reboots
echo 'vm.swappiness=10' | sudo tee /etc/sysctl.d/99-swappiness.conf
# /etc/sysctl.d/99-swappiness.conf
# vm.swappiness=10

# Aplicar sem reiniciar:
sudo sysctl --system`},{lang:"bash",code:`# Criar um arquivo de swap manual (caso não exista nenhum)
sudo fallocate -l 2G /swapfile      # cria arquivo de 2 GB
sudo chmod 600 /swapfile            # só root pode ler/escrever
sudo mkswap /swapfile               # marca como swap
sudo swapon /swapfile               # ativa agora

# Para sobreviver ao reboot, anote em /etc/fstab:
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab`}],points:["Swap = espaço extra de memória; ZRAM = swap comprimido dentro da RAM.","free -h mostra RAM e swap; swapon --show lista todos os dispositivos ativos.","ZRAM acelera muito PCs com 2-4 GB de RAM, gastando um pouco de CPU.","swappiness controla a vontade do kernel de mover páginas para o swap (0-100).","Em desktop, swappiness entre 10 e 30 costuma deixar tudo mais responsivo.","Arquivo de swap (/swapfile) substitui partição de swap em instalações novas.","Iniciante comum: ativar ZRAM e desligar o swap do disco — sem fallback, travamentos pioram em pico de uso.","Iniciante comum: confundir swap cheio com falta de RAM — o normal é o sistema usar swap aos poucos."],alerts:[{type:"tip",content:"Em PCs com SSD, swap no disco gasta muito menos a saúde do que se imagina. Não desabilite o swapfile só por medo — combine com swappiness baixo."},{type:"info",content:"ZRAM ocupa parte da sua RAM (em geral metade) para criar o espaço comprimido. Em sistemas com mais de 8 GB, o ganho é pequeno; em 2 GB é gigantesco."},{type:"warning",content:"Não crie swap gigante (16 GB+) na esperança de compensar pouca RAM. Se o sistema viver no swap, a fluidez vai morrer; mais RAM física é a única solução real."}]},{slug:"gerenciar-energia",section:"hardware-leve",title:"Gerenciamento de energia em notebooks",difficulty:"iniciante",subtitle:"Estendendo a bateria do seu laptop com poucos comandos.",intro:`Notebook é como bicicleta: dá para pedalar pesado e chegar suado, ou pedalar leve e chegar inteiro. O Linux, por padrão, costuma vir pedalando médio, sem aproveitar todos os truques que o hardware moderno oferece para economizar energia. Resultado: a bateria que durava 6 horas no Windows entrega só 4 no Lubuntu recém-instalado.

A boa notícia é que dá para mudar isso facilmente. Existem duas ferramentas estrelas: o TLP (que aplica dezenas de ajustes finos automaticamente) e o powertop (que mede o consumo e sugere otimizações). Em conjunto, costumam recuperar de 30 minutos a 2 horas de bateria.

O LXQt em si já é leve, então o problema raramente é a interface. O que come bateria é o brilho da tela em 100%, o Wi-Fi sem economia de energia, o disco girando à toa, a placa de vídeo dedicada acesa quando ninguém pediu. O TLP cuida de quase tudo isso sem você precisar entender cada detalhe.

Neste capítulo você instala o TLP, vê os ajustes que ele aplica e aprende a forçar o brilho via terminal — útil quando as teclas Fn não funcionam direito. Não mexa nas configurações de hibernação se não tiver swap suficiente, isso é assunto do próximo capítulo.`,codes:[{lang:"bash",code:`# Instalar o TLP — aplica perfis de economia automaticamente
sudo apt update
sudo apt install tlp tlp-rdw -y

# Iniciar o serviço
sudo systemctl enable --now tlp.service

# Ver o status atual
sudo tlp-stat -s
# +++ TLP Status
# State          = enabled
# Last run       = ...`},{lang:"bash",code:`# Ver quanto resta de bateria e o consumo médio
sudo tlp-stat -b
# +++ Battery Status
# /sys/class/power_supply/BAT0/manufacturer = LGC
# Charge                                    = 78.4 %
# Energy_full                               = 41.5 Wh
# Power draw                                =  6.8 W
# 6.8 W em 41 Wh = ~6 horas restantes`},{lang:"bash",code:`# Instalar o powertop e gerar relatório de consumo
sudo apt install powertop -y
sudo powertop
# Aperte Tab para navegar entre as abas:
# - Overview: o que mais gasta agora
# - Idle stats: quanto a CPU dorme (mais = melhor)
# - Tunables: lista de ajustes; "Bad" pode virar "Good" com Enter`},{lang:"bash",code:`# Aplicar todas as otimizações sugeridas pelo powertop de uma vez
sudo powertop --auto-tune
# Atenção: pode desligar dispositivos USB que você usa.
# Se mouse/teclado USB ficar lento, refaça o ajuste manualmente.`},{lang:"bash",code:`# Controle manual do brilho da tela
# Descobrir o caminho:
ls /sys/class/backlight/
# intel_backlight  ou  amdgpu_bl0

# Ler valor atual e máximo
cat /sys/class/backlight/intel_backlight/brightness
cat /sys/class/backlight/intel_backlight/max_brightness
# 4500
# 7500

# Mudar para 50% (precisa de sudo)
echo 3750 | sudo tee /sys/class/backlight/intel_backlight/brightness`},{lang:"bash",code:`# Saber quanto tempo a bateria está aguentando ao longo dos dias
upower -i $(upower -e | grep BAT)
# energy:               32,1 Wh
# energy-full:          41,5 Wh
# energy-full-design:   45,0 Wh
# energy-rate:          7,2 W
# percentage:           77%
# time to empty:        4,4 hours`}],points:["TLP é o ajuste de bateria padrão da comunidade: instalar e esquecer.","powertop mede o consumo real e mostra dispositivos gulosos em ordem.","Brilho de tela é o maior vilão; reduzir 30% costuma somar 1h de bateria.","Wi-Fi com economia ativada (TLP cuida) ajuda muito em uso casual.","upower mostra histórico e expectativa de duração restante da bateria.","GPU dedicada (NVIDIA, AMD) gasta mais; suspenda quando não estiver renderizando.","Iniciante comum: rodar powertop --auto-tune e estranhar mouse USB lento — refaça os tunables conscientemente.","Iniciante comum: deixar o brilho em 100% e culpar o Lubuntu pela bateria curta."],alerts:[{type:"tip",content:"Conecte o notebook na tomada e rode 'sudo tlp-stat -c' para ver os perfis AC e BAT. Você pode editar /etc/tlp.conf se quiser regulagem fina."},{type:"warning",content:"Não instale TLP e laptop-mode-tools ao mesmo tempo. Os dois brigam pelos mesmos arquivos do kernel e a bateria piora em vez de melhorar."},{type:"info",content:"Bateria que enche e descarrega 100% todo dia degrada mais rápido. TLP permite definir limites de carga (ex.: parar em 80%) em laptops Lenovo, ASUS e alguns outros."},{type:"success",content:"Depois de instalar TLP, rode 'sudo tlp-stat -p' para ver o estado dos processadores. CPU governor 'powersave' em bateria + 'performance' na tomada é o ideal."}]},{slug:"drivers-graficos",section:"hardware-leve",title:"Drivers gráficos: Intel, AMD e NVIDIA",difficulty:"intermediario",subtitle:"Como descobrir e instalar o driver certo da sua placa de vídeo.",intro:`O driver gráfico é o tradutor entre o sistema e a placa de vídeo. Sem ele, você ainda enxerga a tela, mas em modo "letrinha grande": resolução errada, vídeos travando, jogos impossíveis. Com o driver certo, a mesma máquina ganha animações suaves, vídeo em hardware e até alguma chance de jogar.

No Linux a situação dos drivers depende muito do fabricante. Intel e AMD escrevem drivers abertos, que já vêm prontos no Lubuntu — quase nunca dão trabalho. NVIDIA é uma história diferente: o driver bom dela é fechado e precisa ser instalado à parte. Existe um aberto chamado nouveau, mas é mais lento e travado.

Outra dúvida frequente é "qual placa eu tenho?". O Linux tem comandos simples que respondem isso na hora. Antes de tentar instalar driver, sempre confirme o modelo — instalar o driver errado é caminho garantido para tela preta no próximo boot.

Neste capítulo você vai descobrir sua placa, ver qual driver está ativo, e aprender o procedimento seguro do Lubuntu para trocar de driver. O atalho gráfico em "Software & Updates → Additional Drivers" resolve 90% dos casos sem terminal.`,codes:[{lang:"bash",code:`# Descobrir o modelo da placa de vídeo
lspci -k | grep -EA3 'VGA|3D|Display'
# 00:02.0 VGA compatible controller: Intel Corporation HD Graphics 620
#   Subsystem: Lenovo HD Graphics 620
#   Kernel driver in use: i915
#   Kernel modules: i915
# A linha "Kernel driver in use" diz qual driver está ativo agora`},{lang:"bash",code:`# Versão do servidor gráfico em uso (X11 ou Wayland)
echo $XDG_SESSION_TYPE
# x11   ← Lubuntu padrão usa X11

# Para detalhes do OpenGL/3D
sudo apt install mesa-utils -y
glxinfo | grep "OpenGL renderer"
# OpenGL renderer string: Mesa Intel(R) HD Graphics 620 (KBL GT2)`},{lang:"bash",code:`# Listar drivers proprietários disponíveis para sua máquina
ubuntu-drivers devices
# == /sys/devices/pci0000:00/0000:00:01.0/0000:01:00.0 ==
# vendor   : NVIDIA Corporation
# model    : GP108M [GeForce MX150]
# driver   : nvidia-driver-535 - distro non-free recommended
# driver   : nvidia-driver-470 - distro non-free
# driver   : xserver-xorg-video-nouveau - distro free builtin`},{lang:"bash",code:`# Instalar o driver recomendado automaticamente
sudo ubuntu-drivers autoinstall
# Lê a saída de "ubuntu-drivers devices" e instala o "recommended"

# Reiniciar para ativar
sudo reboot`},{lang:"bash",code:`# Instalar uma versão específica de driver NVIDIA
sudo apt install nvidia-driver-535 -y
# saída: configurando módulos do kernel...

# Conferir se carregou após reboot
nvidia-smi
# +-----------------------------------------------------------+
# | NVIDIA-SMI 535.86  Driver Version: 535.86  CUDA: 12.2     |
# |  GPU  Name        Memory-Usage   GPU-Util                  |
# |  0    GeForce MX150  142MiB/2048MiB  0%                    |
# +-----------------------------------------------------------+`},{lang:"bash",code:`# Voltar ao driver aberto se algo der errado
sudo apt remove --purge 'nvidia-*' -y
sudo apt install xserver-xorg-video-nouveau -y
sudo reboot
# Sempre tenha um plano de volta antes de mexer em driver gráfico!`}],points:["lspci -k | grep -EA3 'VGA' mostra placa de vídeo e driver ativo.","Intel e AMD usam drivers abertos (i915, amdgpu) que já vêm prontos.","NVIDIA precisa do driver fechado para desempenho decente; nouveau é fallback.","ubuntu-drivers devices lista o que está disponível para sua máquina.","ubuntu-drivers autoinstall escolhe o driver recomendado automaticamente.","Sempre reinicie depois de trocar driver; só assim o módulo novo carrega.","Iniciante comum: instalar NVIDIA fechado em notebook híbrido sem configurar Optimus — resulta em tela preta.","Iniciante comum: mexer em xorg.conf à mão em 2024 — quase nunca é necessário e quebra o servidor gráfico."],alerts:[{type:"warning",content:"Antes de trocar driver gráfico, anote como entrar no modo de recuperação (capítulo de solução de problemas). Tela preta pós-reboot é o erro mais clássico."},{type:"tip",content:"Em notebooks com placa híbrida (Intel + NVIDIA), instale também o pacote 'nvidia-prime'. Ele permite alternar entre placas com 'prime-select on-demand'."},{type:"info",content:"O Lubuntu não inclui Steam ou Proton por padrão, mas aceita instalar ambos. Para jogar, NVIDIA fechada ou AMD aberta + Mesa atualizado costumam ser a combinação mais lisa."},{type:"danger",content:"Nunca baixe o instalador .run do site da NVIDIA para usar no Lubuntu. Ele bagunça a árvore de pacotes do APT e quebra atualizações futuras. Use sempre os pacotes do repositório."}]},{slug:"wifi-bluetooth-driver",section:"hardware-leve",title:"Wi-Fi e Bluetooth: drivers e firmwares",difficulty:"intermediario",subtitle:"Quando a rede sem fio simplesmente não aparece.",intro:`Quase todo notebook moderno tem chip Wi-Fi e Bluetooth integrado, geralmente fabricado pela Intel, Realtek, Broadcom ou Atheros. No Linux, a maioria desses chips funciona "de fábrica" — mas há casos chatos onde nada aparece, ou conecta e cai a cada cinco minutos. A culpa quase sempre é de um firmware faltando.

Firmware é um pequeno software que mora dentro do chip e fala com o driver do kernel. Diferente do driver, o firmware não pode ser escrito por qualquer pessoa — vem de quem fez a peça. Por questões de licença, alguns firmwares não vêm na imagem padrão do Ubuntu/Lubuntu e você precisa instalar o pacote linux-firmware-nonfree manualmente.

Bluetooth segue lógica parecida. O serviço bluetoothd cuida da comunicação, e ferramentas como blueman-applet ou o LXQt Bluetooth dão a interface. Quando o ícone aparece cinza, normalmente é só o serviço parado; quando aparece o ícone mas nada parea, é firmware ou conflito com Wi-Fi (alguns chips compartilham a antena).

Neste capítulo você aprende a identificar seu chip Wi-Fi/Bluetooth, instalar firmwares que faltam, ativar/desativar via comando e diagnosticar conexões instáveis. A maioria dos problemas se resolve em três comandos.`,codes:[{lang:"bash",code:`# Identificar o chip Wi-Fi e o driver em uso
lspci -k | grep -EA3 'Network|Wireless'
# 02:00.0 Network controller: Intel Corporation Wi-Fi 6 AX201
#   Subsystem: Intel Corporation
#   Kernel driver in use: iwlwifi
#   Kernel modules: iwlwifi`},{lang:"bash",code:`# Para Wi-Fi USB, é lsusb (não lspci)
lsusb
# Bus 001 Device 003: ID 0bda:c811 Realtek RTL8811CU Wireless LAN
# Anote o ID (vendedor:produto) — útil para procurar driver`},{lang:"bash",code:`# Instalar pacote de firmwares "não-livres" (resolve a maioria dos casos)
sudo apt update
sudo apt install linux-firmware -y

# Em casos raros, o pacote extra ajuda
sudo apt install firmware-iwlwifi firmware-realtek firmware-atheros -y
# (alguns desses só existem no Debian; apt vai avisar se não achar)

sudo reboot`},{lang:"bash",code:`# Ver redes Wi-Fi disponíveis pelo terminal
nmcli device wifi list
# IN-USE  BSSID              SSID         CHAN  RATE        SIGNAL  BARS
# *       AA:BB:CC:DD:EE:FF  CasaWifi      6    270 Mbit/s   80     ▂▄▆_

# Conectar a uma rede
nmcli device wifi connect "CasaWifi" password "minhasenha"`},{lang:"bash",code:`# Bluetooth: verificar se o serviço está rodando
systemctl status bluetooth
# Active: active (running)

# Se inativo, ligar agora e habilitar no boot
sudo systemctl enable --now bluetooth

# Bluetoothctl é o terminal interativo de Bluetooth
bluetoothctl
# [bluetooth]# power on
# [bluetooth]# scan on
# [NEW] Device 04:1B:6D:XX  Mouse Logitech
# [bluetooth]# pair 04:1B:6D:XX
# [bluetooth]# connect 04:1B:6D:XX
# [bluetooth]# exit`},{lang:"bash",code:`# Diagnosticar Wi-Fi caindo: olhar o log do kernel
dmesg --human | grep -iE 'wlan|wifi|iwl|firmware'
# [   23.412] iwlwifi 0000:02:00.0: loaded firmware version 77.xx.xx
# [  102.918] iwlwifi 0000:02:00.0: Microcode SW error detected
# Erros de firmware = atualizar pacote linux-firmware`},{lang:"bash",code:`# Desligar/ligar rapidamente o rádio Wi-Fi (modo avião)
nmcli radio wifi off
nmcli radio wifi on
# útil quando a conexão "embaralha"
# bluetooth tem comando análogo:
nmcli radio bluetooth off`}],points:["linux-firmware contém os blobs binários que muitos chips precisam.","lspci -k identifica chip Wi-Fi interno; lsusb identifica adaptadores USB.","nmcli é o cliente de NetworkManager pelo terminal; útil quando a interface gráfica falha.","bluetoothctl é o terminal interativo padrão para parear dispositivos Bluetooth.","Erros de 'Microcode SW error' no dmesg indicam firmware velho ou bugado.","Wi-Fi e Bluetooth podem compartilhar antena; alto tráfego em um afeta o outro.","Iniciante comum: trocar de canal do roteador esperando resolver Wi-Fi sem instalar firmware atualizado primeiro.","Iniciante comum: parear Bluetooth pelo blueman e depois acreditar que conectou — pareamento e conexão são passos distintos."],alerts:[{type:"tip",content:"Se nada funciona com seu adaptador Wi-Fi USB, procure o ID (lsusb) no AskUbuntu. Quase sempre alguém já escreveu um passo a passo específico para o seu chip."},{type:"warning",content:"Drivers Broadcom (BCM43xx) costumam dar trabalho. O pacote 'broadcom-sta-dkms' resolve, mas você precisa do kernel-headers instalado para o DKMS compilar o módulo."},{type:"info",content:"rfkill list mostra se o Wi-Fi/Bluetooth está bloqueado por hardware (botão físico) ou software. Se for soft block, 'rfkill unblock all' resolve."}]},{slug:"otimizar-boot",section:"hardware-leve",title:"Acelerando o boot",difficulty:"intermediario",subtitle:"Cortando segundos da inicialização do Lubuntu.",intro:`O boot é como acordar de manhã: cada hábito que você arrasta consigo gasta um pouco de tempo até estar pronto para começar o dia. No Linux, o systemd inicia dezenas de serviços em paralelo, e algumas vezes carrega coisas que você nunca usou — Bluetooth em PC sem Bluetooth, ModemManager em máquina sem modem, Avahi em rede onde ninguém procura impressora.

A boa notícia é que o Lubuntu já é enxuto: boot típico em SSD fica entre 8 e 20 segundos. Em HD antigo, pode passar de 1 minuto. A maior parte do ganho vem de duas frentes: trocar o disco para SSD (transformação radical) e desativar serviços inúteis (transformação suave, segura, reversível).

A ferramenta-chave aqui se chama systemd-analyze. Ela cronometra quanto cada serviço demorou e produz uma "lista negra" dos vagarosos. Outra peça importante é o GRUB, o menu que aparece no boot. Reduzir o tempo de espera dele de 10 para 2 segundos já economiza tempo todo dia.

Neste capítulo você mede o boot, identifica vilões, desabilita serviços com cuidado e ajusta o GRUB. Nada irreversível: tudo o que você desligar pode ser religado em um comando.`,codes:[{lang:"bash",code:`# Quanto tempo o último boot demorou
systemd-analyze
# Startup finished in 2.541s (kernel) + 1.109s (initrd) + 12.832s (userspace) = 16.482s
# graphical.target reached after 12.831s in userspace`},{lang:"bash",code:`# Listar os serviços mais lentos no boot
systemd-analyze blame | head -10
# 4.823s NetworkManager-wait-online.service
# 2.110s snapd.service
# 1.844s plymouth-quit-wait.service
# 1.012s systemd-journal-flush.service
# ...
# O topo da lista são candidatos a otimização`},{lang:"bash",code:`# Desabilitar o serviço chato "wait-online" do NetworkManager
# (faz o boot esperar a rede ficar pronta — quase nunca necessário)
sudo systemctl disable NetworkManager-wait-online.service

# Conferir status
systemctl is-enabled NetworkManager-wait-online.service
# disabled`},{lang:"bash",code:`# Desabilitar Bluetooth em desktops sem Bluetooth
sudo systemctl disable --now bluetooth.service

# Religar a qualquer momento
sudo systemctl enable --now bluetooth.service`},{lang:"bash",code:`# Reduzir o tempo de espera do menu GRUB
sudo nano /etc/default/grub
# Encontre e ajuste:
# GRUB_TIMEOUT=2          (era 10)
# GRUB_TIMEOUT_STYLE=menu
# Salve (Ctrl+O, Enter, Ctrl+X)

# Aplicar a mudança
sudo update-grub
# Generating grub configuration file ...
# done`},{lang:"bash",code:`# Mostrar gráfico SVG dos serviços para análise visual
systemd-analyze plot > boot.svg
# Abra com:
xdg-open boot.svg
# Cada barra colorida = um serviço; barras longas = candidatos a otimização`},{lang:"bash",code:`# Listar serviços rodando AGORA (não só no boot)
systemctl list-units --type=service --state=running
# Útil para descobrir o que está consumindo CPU/RAM constantemente.`}],points:["systemd-analyze mede o tempo total de boot dividido em kernel/initrd/userspace.","blame mostra os serviços individuais ordenados do mais demorado para o menos.","NetworkManager-wait-online é o vilão mais comum em desktops com Wi-Fi.","Desabilitar é reversível: 'systemctl enable' devolve o serviço.","GRUB_TIMEOUT em /etc/default/grub controla o menu de boot; rode update-grub depois.","SSD reduz boot drasticamente — mais que qualquer otimização de software.","Iniciante comum: desativar serviços críticos (apparmor, snapd) sem entender as consequências.","Iniciante comum: editar /etc/default/grub e esquecer 'sudo update-grub' — a mudança não tem efeito."],alerts:[{type:"warning",content:"Não desabilite serviços só porque o nome parece estranho. Antes, rode 'systemctl status nome.service' e leia a descrição."},{type:"tip",content:"Em PCs com BIOS antiga, ative 'Fast Boot' nas opções da BIOS. Combinado com GRUB_TIMEOUT=0 e SSD, o Lubuntu liga em menos de 10 segundos."},{type:"info",content:"Se 'systemd-analyze' diz 'Bootup is not yet finished', espere mais um pouco depois de logar — alguns serviços do usuário só sobem após o login."},{type:"success",content:"Para visualizar o boot em tempo real, aperte Esc na hora do logo do Lubuntu. Você vê cada serviço subindo e identifica visualmente onde trava."}]},{slug:"monitorar-recursos",section:"hardware-leve",title:"Monitorando CPU, RAM, disco e temperatura",difficulty:"iniciante",subtitle:"Vendo o que seu PC está fazendo agora mesmo.",intro:`Saber o que está consumindo recursos é metade do trabalho de manter o computador rápido. É como ter um painel no carro: sem ele, você só percebe o problema quando o motor já está fundindo. No Linux, o "painel" são alguns comandos clássicos — top, htop, free, df — e ferramentas gráficas como o monitor LXQt-task-manager ou o gnome-system-monitor.

O htop é provavelmente a ferramenta mais querida. Mostra cada processo, ordenado por CPU ou RAM, com cores e atalhos para matar processo. Em PCs modestos, abrir o htop e ver "firefox: 1.2 GB de RAM" responde de cara por que o sistema está lento.

A temperatura é outra história. CPU acima de 90°C indica problema térmico (pasta velha, ventoinha entupida). O sensors mostra a temperatura de cada núcleo em tempo real, e o lm-sensors precisa de uma calibragem inicial via "sensors-detect" para reconhecer todos os termômetros do hardware.

Disco também merece atenção. df mostra quanto está cheio cada partição; du resume o tamanho de uma pasta. iostat (do pacote sysstat) mede tráfego de leitura/escrita — fundamental quando o sistema está lento mas a CPU está ociosa, sinal típico de disco saturado.`,codes:[{lang:"bash",code:`# Instalar as ferramentas se não estiverem
sudo apt install htop lm-sensors sysstat -y

# Calibrar sensores de temperatura
sudo sensors-detect --auto
# Detecta chips no I2C, SMBus e mostra quais módulos do kernel ativar`},{lang:"bash",code:`# Ver CPU, RAM e processos em tempo real
htop
# Cores no topo: barras de uso por núcleo
# F6: muda critério de ordenação (CPU%, MEM%, TIME)
# F9: matar processo selecionado (envia sinal escolhido)
# F10 ou q: sair`},{lang:"bash",code:`# Memória detalhada
free -h
#                total        used        free      shared  buff/cache   available
# Mem:           7,5Gi       2,1Gi       3,1Gi       412Mi       2,3Gi       4,8Gi
# Swap:          2,0Gi          0B       2,0Gi
# 'available' = quanto realmente sobra para abrir mais programas`},{lang:"bash",code:`# Temperatura dos núcleos
sensors
# coretemp-isa-0000
# Adapter: ISA adapter
# Package id 0:  +52.0°C  (high = +100.0°C, crit = +100.0°C)
# Core 0:        +49.0°C
# Core 1:        +52.0°C
# Acima de 85°C em uso normal = problema térmico`},{lang:"bash",code:`# Espaço em disco por partição
df -h
# Filesystem      Size  Used Avail Use% Mounted on
# /dev/nvme0n1p2  234G  118G  104G  54% /
# /dev/nvme0n1p1  511M  6,1M  505M   2% /boot/efi

# Tamanho de uma pasta específica
du -sh ~/Downloads
# 4,2G  /home/voce/Downloads`},{lang:"bash",code:`# Pasta cheia? Encontre os 10 maiores diretórios dentro de /home
sudo du -h /home --max-depth=2 2>/dev/null | sort -rh | head -10
# 25G   /home/voce
# 18G   /home/voce/Videos
# 4,2G  /home/voce/Downloads
# ...`},{lang:"bash",code:`# Disco lento? Veja IO em tempo real
iostat -dx 2
# Atualiza a cada 2 segundos:
# Device  r/s    w/s    rkB/s   wkB/s   %util
# sda     12.0   3.0    540     128     85%
# %util alto e perto de 100% = disco saturado`}],points:["htop é o monitor de processos amigável; F9 mata, F6 ordena.","free -h mostra RAM real; o que importa é a coluna 'available'.","sensors mostra temperatura por núcleo após calibrar com sensors-detect.","df -h dá visão de partições; du -sh dá tamanho de pasta.","iostat -dx 2 detecta disco saturado quando a CPU está ociosa.","Use ncdu (sudo apt install ncdu) para navegar pelo uso de disco interativamente.","Iniciante comum: olhar 'used' e achar que faltam 5 GB de RAM — esqueça 'used', olhe 'available'.","Iniciante comum: matar processo com kill -9 sem tentar antes um sinal mais educado."],alerts:[{type:"tip",content:"Em PCs com pouca RAM, abra o htop e ordene por MEM%. Quem aparece no topo (firefox, libreoffice, vscode) é o candidato a substituição por alternativa leve."},{type:"info",content:"O LXQt vem com um indicador gráfico chamado lxqt-config-monitor. Para mais detalhes em janela, instale 'gnome-system-monitor' — funciona perfeitamente fora do GNOME."},{type:"warning",content:"Temperaturas de 70-80°C sob carga pesada são normais. Acima de 90°C constante indica que é hora de limpar ventoinhas e refazer a pasta térmica."}]},{slug:"multi-monitor",section:"hardware-leve",title:"Configurando múltiplos monitores",difficulty:"intermediario",subtitle:"Estendendo, espelhando e organizando telas no LXQt.",intro:`Trabalhar com dois monitores é uma das melhorias de produtividade mais simples e dramáticas que existem. Em vez de alternar com Alt+Tab, você passa o olhar. Em vez de redimensionar janelas, você joga uma de cada lado. O Lubuntu suporta isso com um aplicativo gráfico próprio (lxqt-config-monitor) e com a ferramenta clássica xrandr no terminal.

Um detalhe interessante do LXQt é que ele usa o servidor X11 (não Wayland). Isso facilita bastante o uso do xrandr, que é estável e amplamente documentado. A maior parte dos problemas em multi-monitor não é Lubuntu, e sim a placa gráfica precisar do driver correto (assunto do capítulo de drivers gráficos).

Os modos comuns são três: estender (cada tela tem seu desktop), espelhar (mostram o mesmo conteúdo, útil em apresentações) e usar só uma das duas (notebook fechado ligado em monitor externo). O xrandr resolve qualquer combinação, e o lxqt-config-monitor cuida da maioria via cliques.

Neste capítulo você descobre as saídas de vídeo disponíveis, configura resolução e posição, e aprende a salvar a configuração para sobreviver ao reboot. Também veremos como lidar com a praga clássica do "monitor não detectado" — geralmente questão de cabo, driver ou ordem de ligar os equipamentos.`,codes:[{lang:"bash",code:`# Listar saídas de vídeo conectadas
xrandr --query
# Screen 0: minimum 320 x 200, current 1920 x 1080
# eDP-1 connected primary 1920x1080+0+0 (...)
#    1920x1080     60.00*+
#    1680x1050     59.95
# HDMI-1 connected 1920x1080+1920+0 (...)
#    1920x1080     60.00*+
# DP-1 disconnected (normal left inverted right x axis y axis)`},{lang:"bash",code:`# Estender o desktop: HDMI à direita do notebook
xrandr --output eDP-1 --auto --primary \\
       --output HDMI-1 --auto --right-of eDP-1`},{lang:"bash",code:`# Espelhar a imagem (mesmo conteúdo nos dois)
xrandr --output HDMI-1 --auto --same-as eDP-1`},{lang:"bash",code:`# Desligar a tela do notebook e usar só o monitor externo
xrandr --output eDP-1 --off --output HDMI-1 --auto --primary

# Voltar atrás
xrandr --output eDP-1 --auto --primary`},{lang:"bash",code:`# Definir resolução manualmente em uma saída
xrandr --output HDMI-1 --mode 1280x720 --rate 60

# Listar modos suportados pelo monitor
xrandr | grep -A1 'HDMI-1 connected'`},{lang:"bash",code:`# Salvar configuração para rodar a cada login
mkdir -p ~/.config/autostart
cat > ~/.config/autostart/monitores.desktop <<'EOF'
[Desktop Entry]
Type=Application
Name=Configurar monitores
Exec=sh -c "xrandr --output eDP-1 --auto --primary --output HDMI-1 --auto --right-of eDP-1"
X-LXQt-Need-Tray=false
EOF
# Pronto: na próxima sessão LXQt, o xrandr roda sozinho`},{lang:"bash",code:`# Interface gráfica para o mesmo trabalho
lxqt-config-monitor &
# Janela com cards arrastáveis representando cada monitor.
# Marque "Apply" para testar e "Save" para persistir.`}],points:["xrandr --query lista saídas e quem está conectado/desconectado.","--right-of, --left-of, --above, --below organizam a posição relativa.","--same-as espelha; --off desliga a saída.","--mode + --rate fixa resolução e taxa de atualização.","lxqt-config-monitor é o atalho gráfico para o xrandr.","Configurações em xrandr são voláteis; salve em autostart .desktop para sobreviver.","Iniciante comum: trocar de cabo HDMI por adaptador barato e perder áudio ou ter cintilação.","Iniciante comum: definir resolução não suportada pelo monitor — tela apaga até o sistema reverter sozinho."],alerts:[{type:"tip",content:"Antes de salvar a configuração definitiva, teste com xrandr no terminal. Se algo der errado, basta esperar 15s ou rodar 'xrandr --auto' para voltar ao padrão."},{type:"info",content:"Em laptops com placa híbrida NVIDIA Optimus, a saída HDMI normalmente é controlada pela GPU dedicada. Pode ser preciso 'prime-select nvidia' antes que o monitor externo apareça."},{type:"warning",content:"Wayland (que o Lubuntu não usa) ignora xrandr. Se um dia migrar para Wayland, troque por wlr-randr ou kanshi. Por enquanto, X11 + xrandr é o seu mundo."}]},{slug:"reduzir-uso-ram",section:"hardware-leve",title:"Reduzindo o uso de RAM no Lubuntu",difficulty:"intermediario",subtitle:"Truques para deixar uma máquina antiga ainda mais aliviada.",intro:`O Lubuntu já é considerado um dos sistemas Linux mais leves do mundo desktop. Em uma instalação limpa, ele costuma usar entre 400 MB e 700 MB de RAM em idle — bem menos que GNOME, KDE ou Windows. Ainda assim, em PCs com 1 GB ou 2 GB, cada megabyte conta. Este capítulo é sobre os ajustes finos que esticam ainda mais o sistema.

A primeira coisa a entender: a maior parte da RAM consumida vem dos aplicativos, não do LXQt. Firefox com 20 abas pode passar de 2 GB; LibreOffice abre ocupando 250 MB. Trocar esses programas por alternativas leves (qutebrowser, AbiWord, GNOME Office) é o ganho mais sólido. O capítulo de "alternativas leves" complementa este aqui.

Em segundo lugar, vêm os serviços de fundo. Snap, tracker, Avahi, ModemManager, CUPS — cada um come 30 a 100 MB. Em desktops sem impressora, sem celular, sem snap, dá para desligar vários e recuperar 200-400 MB facilmente.

Por último, há o ajuste de cache do kernel: o Linux gosta de manter dados recentes na RAM como cache "preditivo". Em geral é ótimo. Em máquinas muito apertadas, ajustar dirty_ratio e vfs_cache_pressure ajuda o sistema a soltar memória mais rápido. Mexa nesses parâmetros com cuidado.`,codes:[{lang:"bash",code:`# Quanto o sistema gasta em RAM agora (sem contar cache)
free -h
#                total        used        free  ...  available
# Mem:           1,9Gi       620Mi       890Mi  ...   1,1Gi
# 'available' é o que sobra de verdade — esse é o número que importa`},{lang:"bash",code:`# Top 10 processos que mais consomem RAM
ps aux --sort=-%mem | awk 'NR<=11{print $4"% "$11}'
# 18.2% /usr/lib/firefox/firefox
# 6.4%  /usr/bin/pcmanfm-qt
# 2.1%  /usr/bin/lxqt-panel
# ...`},{lang:"bash",code:`# Desligar o snapd (se você não usa pacotes Snap)
sudo systemctl disable --now snapd.service snapd.socket
sudo apt purge snapd -y
# Em geral economiza 100-200 MB de RAM permanentemente
# Use Flatpak ou .deb como alternativa`},{lang:"bash",code:`# Desligar serviços comumente desnecessários em desktop comum
sudo systemctl disable --now \\
  ModemManager.service \\
  cups.service cups-browsed.service \\
  avahi-daemon.service avahi-daemon.socket
# Religue depois com 'systemctl enable --now nome.service' se precisar`},{lang:"bash",code:`# Trocar Firefox por navegador leve (Falkon ou Midori)
sudo apt install falkon -y
# Falkon usa o motor Chromium, mas com interface Qt (combina com LXQt)
# Em RAM, ocupa cerca de 1/3 do Firefox para tarefa parecida`},{lang:"bash",code:`# Ajustar dirty_ratio: quanto cache "sujo" o kernel acumula antes de gravar
echo 'vm.dirty_ratio=10' | sudo tee /etc/sysctl.d/99-ram-tweaks.conf
echo 'vm.dirty_background_ratio=5' | sudo tee -a /etc/sysctl.d/99-ram-tweaks.conf
echo 'vm.vfs_cache_pressure=200' | sudo tee -a /etc/sysctl.d/99-ram-tweaks.conf
sudo sysctl --system
# vfs_cache_pressure alto = kernel libera cache de inode mais cedo
# Em PCs com pouca RAM, melhora a sensação de fluidez`},{lang:"bash",code:`# Desativar pré-visualizações de imagens no PCManFM-Qt (gasta RAM)
# Edite ~/.config/pcmanfm-qt/lxqt/settings.conf
nano ~/.config/pcmanfm-qt/lxqt/settings.conf
# Em [Thumbnail], coloque:
# showThumbnails=false
# Salve e reabra o gerenciador`}],points:["Aplicativos pesam mais que o desktop em si — substituí-los rende mais RAM.","snapd consome ~150 MB constantes; remova se preferir Flatpak ou .deb.","ModemManager, CUPS e Avahi podem ser desligados em desktop sem impressora/modem.","vfs_cache_pressure controla o quão rápido o kernel solta cache de inode.","Pré-visualizações no PCManFM-Qt podem dobrar o uso de RAM em pastas com muitas fotos.","ZRAM (capítulo anterior) complementa todas essas otimizações.","Iniciante comum: confundir 'used' alto com escassez de RAM — buff/cache é liberado quando precisa.","Iniciante comum: desligar serviços essenciais (NetworkManager, dbus) tentando economizar RAM."],alerts:[{type:"warning",content:"Antes de remover snapd, confira se nenhum aplicativo importante está em Snap (snap list). Caso esteja, instale a versão equivalente em .deb ou Flatpak primeiro."},{type:"tip",content:"Para desktop muito antigo (1 GB de RAM), desabilite efeitos de transparência do Openbox (em ~/.config/openbox/lxqt-rc.xml). Em GPU velha, transparência custa caro."},{type:"info",content:"Cache que o Linux acumula em 'buff/cache' não é desperdício: o sistema usa para acelerar acessos repetidos. Esse valor aparece como 'usado' em ferramentas antigas, mas é liberado em segundos quando outro programa precisa."},{type:"success",content:"Combinando ZRAM + remoção de snapd + desabilitar Avahi/ModemManager, dá para baixar o consumo idle do Lubuntu de ~700 MB para ~400 MB. Isso é sopa para PCs de 2 GB."}]}],Oq=[{slug:"conectar-wifi",section:"rede",title:"Conectando ao Wi-Fi",difficulty:"iniciante",subtitle:"Achando redes sem fio e digitando a senha sem dor de cabeça.",intro:`Conectar no Wi-Fi é provavelmente a primeira coisa que você quer fazer assim que liga o Lubuntu. Pense no Wi-Fi como um rádio: o seu computador escuta as ondas que o roteador transmite, escolhe a estação que conhece (a sua rede), prova que sabe a senha e pronto, está na internet. O Lubuntu faz tudo isso para você através de um programinha chamado NetworkManager, que aparece como um iconezinho no canto direito do painel.

Esse ícone muda de cara dependendo do estado: quando aparece um traço, é porque não tem rede; quando aparece um leque de ondas, é Wi-Fi conectado; quando aparece dois computadorzinhos, é cabo. Clicando nele, você abre uma listinha das redes ao alcance, ordenadas por força de sinal. É só clicar, digitar a senha uma única vez e marcar para conectar automaticamente nas próximas.

Por baixo do capô, o NetworkManager guarda cada conexão num arquivinho dentro de \`/etc/NetworkManager/system-connections/\`. Isso é útil de saber porque, quando o ícone gráfico decide não cooperar (acontece em hardware antigo), você pode resolver tudo pelo terminal com o comando \`nmcli\`, que é o NetworkManager versão linha de comando. Os dois mexem no mesmo lugar, então ficar fluente nos dois te dá uma rede de segurança.

Neste capítulo você vai conectar pelo ícone gráfico, vai aprender o equivalente em terminal, vai entender o que fazer quando a rede some misteriosamente e vai saber checar se realmente está conectado (ter ícone verde não garante internet — só garante que falou com o roteador).`,codes:[{lang:"bash",code:`# Verificar se o NetworkManager está rodando
systemctl status NetworkManager
# saída esperada (resumida):
#  NetworkManager.service - Network Manager
#    Active: active (running) since ...

# Se não estiver, inicie:
sudo systemctl start NetworkManager
sudo systemctl enable NetworkManager   # ativa no boot`},{lang:"bash",code:`# Listar redes Wi-Fi ao alcance pelo terminal
nmcli device wifi list
# saída exemplo:
# IN-USE  BSSID              SSID         MODE   CHAN  RATE       SIGNAL  BARS  SECURITY
# *       AA:BB:CC:11:22:33  CasaDoBruno  Infra  6     130 Mbit/s  78      ▂▄▆_  WPA2
#         DD:EE:FF:44:55:66  Vizinho      Infra  11    65 Mbit/s   42      ▂▄__  WPA2`},{lang:"bash",code:`# Conectar a uma rede Wi-Fi pela primeira vez
nmcli device wifi connect "CasaDoBruno" password "minhaSenha123"
# saída: Device 'wlan0' successfully activated with '...'

# Da próxima vez, basta:
nmcli connection up CasaDoBruno
# A senha já fica salva no /etc/NetworkManager/system-connections/`},{lang:"bash",code:`# Ver em qual rede você está conectado agora
nmcli connection show --active
# NAME         UUID                                  TYPE      DEVICE
# CasaDoBruno  abcd1234-...                          wifi      wlan0

# E o IP que recebeu:
ip addr show wlan0
# inet 192.168.0.42/24 brd 192.168.0.255 ...`},{lang:"bash",code:`# Testar se realmente está na internet (não basta o ícone verde)
ping -c 3 8.8.8.8
# 64 bytes from 8.8.8.8: icmp_seq=1 ttl=117 time=18.2 ms
# Se isso responde, a rede funciona.

# Testar se o DNS funciona (resolução de nome)
ping -c 3 google.com
# Se o IP responde mas o nome não, problema é DNS (capítulo 8 desta seção).`},{lang:"bash",code:`# Esquecer uma rede Wi-Fi (apaga a senha salva)
nmcli connection delete CasaDoBruno

# Desligar o rádio Wi-Fi (modo avião só do Wi-Fi)
nmcli radio wifi off
nmcli radio wifi on        # liga de novo`}],points:["O ícone do NetworkManager fica no canto direito do painel; um clique abre a lista de redes.","nmcli é o equivalente em terminal e mexe nos mesmos arquivos do ícone gráfico.","Senhas ficam salvas em /etc/NetworkManager/system-connections/, com permissão só para root.","ping no IP testa rede; ping num nome testa DNS — são testes diferentes.",'Marque "conectar automaticamente" para a rede de casa, mas não para Wi-Fi público.',"BSSID é o endereço físico do roteador; SSID é o nome que você vê.","Iniciante comum: ver ícone verde e achar que está na internet — sempre confirme com ping.","Iniciante comum: digitar senha errada e o NetworkManager continuar tentando — apague a rede e conecte de novo."],alerts:[{type:"tip",content:"Se o ícone do NetworkManager sumir do painel, abra o qterminal e digite nm-applet & — ele volta. Adicione no autostart se sumir sempre."},{type:"warning",content:"Em redes Wi-Fi públicas (cafeteria, aeroporto), nunca acesse banco sem VPN. O capítulo 3 desta seção mostra como configurar uma."},{type:"info",content:"Notebooks com botão físico de Wi-Fi podem ter o rádio desligado por hardware. Procure uma tecla com desenho de antena (geralmente Fn+F2 ou Fn+F12)."},{type:"danger",content:"Nunca compartilhe os arquivos de /etc/NetworkManager/system-connections/. Eles têm a senha do seu Wi-Fi em texto puro (criptografada só no formato, não na proteção)."}]},{slug:"conectar-ethernet",section:"rede",title:"Conectando por cabo Ethernet",difficulty:"iniciante",subtitle:"Plug-and-play, mas com macetes para quando não funciona.",intro:`Cabo Ethernet é a opção mais simples e mais confiável de conectar à internet. Pense nele como um cano direto entre o seu computador e o roteador: nada de paredes para atravessar, nada de vizinhos congestionando o sinal. Em Lubuntu, o normal é você plugar o cabo e, em dois ou três segundos, já estar online. O ícone do painel troca para os dois computadorzinhos e pronto.

Por trás dessa mágica, o sistema faz uma coisa chamada DHCP. Ele grita na rede "ei, alguém me dá um IP?" e o roteador responde com um endereço para você usar (algo como \`192.168.0.42\`). Esse processo dura milissegundos e você nem percebe. Mas, quando algo dá errado (cabo solto, switch desligado, roteador travado), saber pedir o IP de novo manualmente é o que separa frustração de solução.

Em alguns casos, principalmente em empresas, redes universitárias ou laboratórios, você precisa de um IP fixo (estático). Aí o DHCP não vai te ajudar e você configura tudo na mão: IP, máscara, gateway, DNS. Parece muita coisa, mas são quatro linhas no NetworkManager e fica gravado para sempre.

Neste capítulo você vai conectar via cabo no automático, vai forçar a renovação do IP quando travar, vai configurar IP estático para casos especiais e vai diagnosticar o motivo de "o cabo está plugado mas não conecta".`,codes:[{lang:"bash",code:`# Ver as interfaces de rede do seu computador
ip link show
# 1: lo: <LOOPBACK,UP,LOWER_UP> ...
# 2: enp3s0: <BROADCAST,MULTICAST,UP,LOWER_UP> ...   ← Ethernet
# 3: wlan0: <BROADCAST,MULTICAST,UP> ...             ← Wi-Fi

# enp3s0 é o nome típico de Ethernet em hardware moderno.
# eth0 era o nome antigo, ainda aparece em algumas máquinas.`},{lang:"bash",code:`# Verificar se o cabo está realmente conectado fisicamente
ip link show enp3s0
# Procure por "state UP" e "LOWER_UP" — significa cabo plugado.
# Se aparecer "NO-CARRIER" ou "state DOWN", o cabo está solto ou ruim.`},{lang:"bash",code:`# Pedir um IP novo (renovar o DHCP) quando travar
sudo dhclient -r enp3s0      # libera o IP atual
sudo dhclient enp3s0         # pede um novo
# saída: nada significa "deu certo"; espere 2-3 segundos e teste:
ip addr show enp3s0
# inet 192.168.0.42/24 ...`},{lang:"bash",code:`# Configurar IP estático pelo NetworkManager (linha de comando)
nmcli connection modify "Wired connection 1" \\
    ipv4.method manual \\
    ipv4.addresses 192.168.0.50/24 \\
    ipv4.gateway 192.168.0.1 \\
    ipv4.dns "1.1.1.1 8.8.8.8"

# Aplica a mudança
nmcli connection up "Wired connection 1"`},{lang:"bash",code:`# Voltar para DHCP automático
nmcli connection modify "Wired connection 1" ipv4.method auto
nmcli connection up "Wired connection 1"`},{lang:"bash",code:`# Quando "está plugado mas não funciona", siga essa ordem:
# 1) cabo está mesmo conectado?
ip link show enp3s0 | grep -E "UP|CARRIER"

# 2) recebeu IP?
ip addr show enp3s0 | grep inet

# 3) gateway responde?
ip route | grep default      # mostra o gateway, ex: 192.168.0.1
ping -c 3 192.168.0.1

# 4) internet funciona?
ping -c 3 8.8.8.8`}],points:["DHCP é automático: pluga o cabo, ganha IP, está online.","Nomes de interface modernos: enp3s0, ens33, eno1; o velho eth0 ainda aparece em ARM.","ip link show mostra se o cabo está fisicamente conectado (procure UP/LOWER_UP).","Para renovar o IP travado, use sudo dhclient -r seguido de sudo dhclient interface.","IP estático precisa de quatro coisas: endereço, máscara, gateway e DNS.","Cabo Ethernet é mais rápido e mais estável que Wi-Fi — use sempre que puder.","Iniciante comum: trocar de cabo sem testar e gastar tempo culpando o sistema.","Iniciante comum: configurar IP estático fora da faixa do roteador e ficar sem rede."],alerts:[{type:"info",content:"Cabos Cat 5e fazem até 1 Gbps; Cat 6 chegam a 10 Gbps em distâncias curtas. Para uso doméstico, Cat 5e basta."},{type:"warning",content:"Antes de definir IP estático, abra a interface do roteador e veja qual faixa ele reserva para DHCP. Use um IP fora dessa faixa para evitar conflito."},{type:"tip",content:"Se você tem só Wi-Fi mas precisa de cabo às vezes, um adaptador USB-Ethernet de R$ 50 funciona plug-and-play no Lubuntu."}]},{slug:"vpn-openvpn",section:"rede",title:"VPN com OpenVPN",difficulty:"intermediario",subtitle:"Túnel criptografado para acessar trabalho ou navegar com privacidade.",intro:`Uma VPN (Virtual Private Network) é como um túnel privado dentro da internet pública. Imagine que você está num café e mandando informações pelo Wi-Fi: qualquer um na mesma rede pode tentar bisbilhotar. Com VPN, tudo que sai do seu computador entra criptografado nesse túnel e só aparece descriptografado lá no outro lado, num servidor confiável. Para todo mundo no meio do caminho, é só ruído.

Os dois usos mais comuns são: acessar a rede interna do trabalho (você fica "como se" estivesse no escritório, vendo arquivos e impressoras locais) e navegar com mais privacidade ou aparentando estar em outro país. O Lubuntu já vem preparado para os tipos mais comuns de VPN, e o que mais aparece em ambientes corporativos é o OpenVPN.

A configuração se baseia em um arquivo \`.ovpn\` que o administrador da rede te passa. Esse arquivo tem todas as informações: servidor, porta, certificados, modo de cifra. Em vez de você decorar parâmetros, basta importar esse arquivo no NetworkManager e ele cria a conexão. Daí em diante, é clicar para conectar e clicar para desconectar.

Neste capítulo você vai instalar o suporte a OpenVPN, importar um arquivo \`.ovpn\`, conectar pelo terminal e pelo ícone gráfico, e diagnosticar problemas comuns como "conecta mas não navega" ou "DNS vaza fora do túnel".`,codes:[{lang:"bash",code:`# Instalar o suporte OpenVPN no Lubuntu
sudo apt update
sudo apt install openvpn network-manager-openvpn network-manager-openvpn-gnome -y

# Reinicie o NetworkManager para reconhecer o novo plugin
sudo systemctl restart NetworkManager`},{lang:"bash",code:`# Importar um arquivo .ovpn pela linha de comando
nmcli connection import type openvpn file ~/Downloads/empresa.ovpn
# saída: Connection 'empresa' (UUID) successfully added.

# Listar conexões VPN configuradas
nmcli connection show | grep vpn`},{lang:"bash",code:`# Conectar e desconectar a VPN
nmcli connection up empresa --ask
# --ask faz ele pedir usuário/senha quando preciso

# Desconectar
nmcli connection down empresa`},{lang:"bash",code:`# Conectar via terminal SEM o NetworkManager (modo direto)
sudo openvpn --config ~/Downloads/empresa.ovpn
# Saída longa, espere até "Initialization Sequence Completed"
# Para parar, aperte Ctrl+C nessa janela`},{lang:"bash",code:`# Verificar se a VPN está realmente roteando o tráfego
ip route
# Procure por linhas começando com 0.0.0.0/1 e 128.0.0.0/1 — sinal
# clássico de VPN "full tunnel" (todo tráfego passa pelo túnel).

# Ver seu IP público (deve ser o do servidor VPN, não da sua casa)
curl ifconfig.me
# 200.10.20.30   ← se for diferente do IP da sua operadora, deu certo`},{lang:"bash",code:`# Problema clássico: vazamento de DNS
# Mesmo conectado, o sistema pode usar o DNS da sua operadora.
# Verifique:
resolvectl status | grep "DNS Servers"

# Forçar o DNS via NetworkManager:
nmcli connection modify empresa ipv4.dns "1.1.1.1" \\
    ipv4.ignore-auto-dns yes
nmcli connection up empresa`}],points:["VPN cria um túnel criptografado entre o seu PC e um servidor remoto.","Use VPN no Wi-Fi público; sem ela, suas senhas viajam abertas pela rede local.","OpenVPN é o tipo mais comum em empresas; o arquivo .ovpn já tem tudo configurado.","Importe o .ovpn com nmcli connection import e conecte com nmcli connection up nome.","curl ifconfig.me mostra seu IP público — é o teste rápido para confirmar que a VPN funciona.","Atenção ao DNS: ele pode vazar fora do túnel mesmo com a VPN ativa.","Iniciante comum: achar que VPN deixa internet mais rápida — quase sempre fica mais lenta, é o preço da segurança.","Iniciante comum: esquecer de desconectar a VPN do trabalho e estranhar que sites pessoais ficaram lentos."],alerts:[{type:"warning",content:"VPNs gratuitas costumam vender seus dados. Se for usar para privacidade, escolha uma paga e auditada (Mullvad, ProtonVPN, IVPN são bem avaliadas)."},{type:"tip",content:"Para auto-conectar na inicialização, marque 'connect automatically' na aba 'General' das configurações da conexão no NetworkManager."},{type:"info",content:"Se sua empresa usa WireGuard em vez de OpenVPN, instale o pacote wireguard e importe o arquivo .conf com nmcli connection import type wireguard."},{type:"danger",content:"Nunca rode openvpn como sudo a partir de um arquivo .ovpn de origem desconhecida. Esses arquivos podem conter scripts que rodam com privilégios totais."}]},{slug:"bluetooth-pareamento",section:"rede",title:"Bluetooth: parear fones, mouse e teclado",difficulty:"iniciante",subtitle:"Conectando dispositivos sem fio que não usam Wi-Fi.",intro:`Bluetooth é o irmão mais novo do Wi-Fi. Em vez de conectar à internet, ele conecta dispositivos próximos uns aos outros: fones, mouse, teclado, caixas de som, celular. A distância prática é uns 10 metros, e a velocidade é bem menor que Wi-Fi, mas isso não importa porque o objetivo é trocar pequenas coisas (áudio, cliques, teclas) com baixíssimo consumo de bateria.

Pense no Bluetooth como um "aperto de mão" formal entre dois aparelhos. O processo se chama pareamento: os dois se descobrem, trocam uma chave secreta e passam a se reconhecer dali em diante. Você só pareia uma vez; nas próximas, eles se reconectam sozinhos quando estão próximos e ligados.

No Lubuntu, o gerenciador padrão é o Blueman. Ele aparece como um ícone azul no painel quando há suporte a Bluetooth. Para parear, você ativa o Bluetooth no aparelho (geralmente segurando o botão liga/desliga), abre o Blueman, dá scan, vê o aparelho na lista e clica em emparelhar. Pronto, está conectado.

Neste capítulo você vai instalar e ligar o Bluetooth, parear um fone, mudar saída de áudio para o fone, parear teclado e mouse e diagnosticar problemas como "está pareado mas não conecta" ou "som corta toda hora".`,codes:[{lang:"bash",code:`# Verificar se o computador tem hardware Bluetooth
sudo dmesg | grep -i bluetooth
# saída: Bluetooth: Core ver 2.22 (etc.)
# Se nada aparecer, sua máquina não tem Bluetooth de fábrica.

# Adaptadores USB Bluetooth de R$ 30 funcionam plug-and-play.`},{lang:"bash",code:`# Instalar o gerenciador gráfico (Blueman) e os utilitários
sudo apt install bluez blueman pulseaudio-module-bluetooth -y

# Iniciar e habilitar o serviço Bluetooth
sudo systemctl enable --now bluetooth
systemctl status bluetooth   # confirma que está active (running)`},{lang:"bash",code:`# Ligar/desligar o rádio Bluetooth pelo terminal
bluetoothctl power on
bluetoothctl power off

# Listar adaptadores disponíveis
bluetoothctl list
# Controller AA:BB:CC:11:22:33 PCBruno [default]`},{lang:"bash",code:`# Parear um dispositivo via terminal (passo a passo)
bluetoothctl
# Você entra num shell interativo. Dentro dele:
[bluetooth]# scan on            # começa a procurar
# Aguarde aparecer seu fone, ex: 11:22:33:44:55:66 Fone JBL
[bluetooth]# pair 11:22:33:44:55:66
[bluetooth]# trust 11:22:33:44:55:66    # marca como confiável
[bluetooth]# connect 11:22:33:44:55:66
[bluetooth]# scan off
[bluetooth]# quit`},{lang:"bash",code:`# Trocar a saída de áudio para o fone Bluetooth
# Listar saídas disponíveis:
pactl list short sinks
# 0  alsa_output.pci-...analog-stereo  ...
# 1  bluez_sink.11_22_33_44_55_66.a2dp_sink  ...

# Definir o fone como saída padrão:
pactl set-default-sink bluez_sink.11_22_33_44_55_66.a2dp_sink`},{lang:"bash",code:`# Listar dispositivos pareados
bluetoothctl devices
# Device 11:22:33:44:55:66 Fone JBL
# Device AA:BB:CC:DD:EE:FF Mouse Logitech

# Remover um pareamento (se algo travou)
bluetoothctl remove 11:22:33:44:55:66`}],points:["Bluetooth liga aparelhos próximos (até ~10m) com baixo consumo de energia.","Pareamento é uma vez só; depois eles se reconectam sozinhos.","O serviço bluetooth precisa estar rodando: sudo systemctl enable --now bluetooth.","Blueman é o gerenciador gráfico; bluetoothctl é o equivalente em terminal.","Para áudio, instale também pulseaudio-module-bluetooth — sem ele, fones não tocam som.","trust marca o aparelho como confiável e ele reconecta automaticamente.","Iniciante comum: parear o fone mas esquecer de trocar a saída de áudio padrão.","Iniciante comum: deixar fone pareado em vários computadores e ele só conecta no último."],alerts:[{type:"tip",content:"Antes de parear, deixe o aparelho em modo descoberta (geralmente 5 segundos com botão liga/desliga apertado, indicador piscando rápido)."},{type:"warning",content:"Bluetooth e Wi-Fi de 2.4 GHz brigam pelo mesmo espectro. Se a internet ficar instável quando o Bluetooth está ligado, use Wi-Fi 5 GHz."},{type:"info",content:"O perfil A2DP é alta qualidade só de saída (música). O perfil HSP/HFP tem microfone mas qualidade de telefone — fones gamer precisam alternar entre os dois."},{type:"danger",content:"Não deixe o Bluetooth ligado e descobrível em locais públicos. Existem ataques específicos para aparelhos visíveis. Use o modo só quando for parear."}]},{slug:"compartilhar-samba",section:"rede",title:"Compartilhar arquivos com Samba",difficulty:"intermediario",subtitle:"Pasta compartilhada que funciona com Linux, Windows e macOS.",intro:'Samba é o tradutor universal de compartilhamento de arquivos em rede. Ele faz o seu Lubuntu falar o mesmo idioma do Windows (chamado SMB/CIFS), permitindo que máquinas de qualquer sistema vejam pastas compartilhadas no seu computador. Imagine uma gaveta no meio da casa onde todo mundo pode pegar e guardar coisas: é isso que o Samba cria, mas em rede.\n\nO caso mais clássico: você tem um Lubuntu funcionando 24h como mini-servidor, e dois notebooks (um Windows, um Mac) que querem acessar fotos, documentos e backups dele. Sem Samba, cada um precisaria de pendrive ou ferramenta diferente. Com Samba, todo mundo abre o explorador de arquivos, digita `\\\\IP-do-Lubuntu\\compartilhamento` (Windows) ou `smb://IP-do-Lubuntu/compartilhamento` (Lubuntu/Mac), digita usuário e senha e está dentro.\n\nA configuração mora num arquivo único: `/etc/samba/smb.conf`. Você define quais pastas compartilhar, quem pode acessar e o que pode fazer (só ler, ou ler e escrever). É um arquivo de texto simples, dividido em seções. Cada seção é uma pasta compartilhada.\n\nNeste capítulo, você vai instalar o Samba, criar um usuário só para acesso compartilhado (sem ele entrar no sistema todo), compartilhar uma pasta, abrir as portas no firewall e acessar do Windows e de outro Linux. Também vai aprender a versão "rápida e suja" do PCManFM-Qt, que compartilha em três cliques sem nem editar arquivo.',codes:[{lang:"bash",code:`# Instalar o Samba
sudo apt update
sudo apt install samba samba-common-bin -y

# Verificar se os serviços estão rodando
systemctl status smbd nmbd
# Procure por "active (running)" nos dois.`},{lang:"bash",code:`# Criar usuário do sistema só para compartilhamento
sudo adduser --no-create-home --disabled-login samba_user
# Senha do sistema (não vai usar, pode ser qualquer coisa)

# Definir senha do Samba (essa é a que importa para conectar)
sudo smbpasswd -a samba_user
# Digite a senha duas vezes`},{lang:"bash",code:`# Criar a pasta compartilhada
sudo mkdir -p /srv/samba/publica
sudo chown samba_user:samba_user /srv/samba/publica
sudo chmod 770 /srv/samba/publica`},{lang:"ini",code:`# Adicionar ao final de /etc/samba/smb.conf
# Edite com: sudo nano /etc/samba/smb.conf

[Publica]
   comment = Pasta compartilhada do Lubuntu
   path = /srv/samba/publica
   browseable = yes
   read only = no
   valid users = samba_user
   create mask = 0660
   directory mask = 0770`},{lang:"bash",code:`# Validar a configuração antes de reiniciar
testparm
# Aperte Enter para ver as seções carregadas.

# Aplicar a mudança reiniciando os serviços
sudo systemctl restart smbd nmbd

# Confirmar que a pasta aparece na rede
smbclient -L localhost -U samba_user
# Vai pedir a senha; deve listar [Publica] entre os shares.`},{lang:"bash",code:`# Liberar Samba no firewall (se você usa UFW)
sudo ufw allow samba
sudo ufw status
# Status: active
# To       Action  From
# Samba    ALLOW   Anywhere`},{lang:"bash",code:`# Acessar do próprio Lubuntu (ou outro Linux)
# 1) pelo PCManFM-Qt: tecle Ctrl+L e digite:
#    smb://192.168.0.42/Publica
# 2) pelo terminal:
sudo apt install cifs-utils -y
sudo mkdir /mnt/samba_test
sudo mount -t cifs //192.168.0.42/Publica /mnt/samba_test \\
    -o username=samba_user,uid=$(id -u),gid=$(id -g)
ls /mnt/samba_test`}],points:["Samba faz o Linux falar o protocolo SMB/CIFS, o mesmo do Windows.","O usuário do sistema (adduser) e o usuário do Samba (smbpasswd) são contas separadas.","Compartilhamentos ficam em /etc/samba/smb.conf, uma seção por pasta.","Use testparm sempre antes de reiniciar — ele pega erros de sintaxe na hora.","No Windows: Explorer → \\\\IP\\Publica. No Linux: smb://IP/Publica.","Para uso casual entre Linux, considere também SSHFS — mais simples e mais seguro.","Iniciante comum: criar a pasta com chown root e o Samba não conseguir escrever.","Iniciante comum: esquecer de liberar a porta no firewall e ficar horas debugando."],alerts:[{type:"warning",content:"Nunca exponha Samba diretamente na internet. Ele foi feito para rede local. Se precisar acesso remoto, use VPN como mostrado no capítulo 3 desta seção."},{type:"tip",content:"O PCManFM-Qt do Lubuntu tem opção de compartilhar pasta via menu de contexto: clique direito → Compartilhar pasta. Ele edita o smb.conf por você."},{type:"info",content:"Para descobrir o IP do Lubuntu na rede, rode hostname -I no terminal. O primeiro número é o que você usa nos outros aparelhos."},{type:"danger",content:'Evite a opção "guest ok = yes" em redes não confiáveis. Ela permite acesso sem senha — qualquer um na rede entra.'}]},{slug:"ssh-acesso-remoto",section:"rede",title:"SSH: acesso remoto seguro",difficulty:"intermediario",subtitle:"Controlando outro computador pelo terminal, com criptografia.",intro:'SSH (Secure Shell) é o jeito padrão de uma máquina Linux acessar outra pela rede. Pense nele como uma "ligação telefônica" criptografada entre dois terminais: você digita comandos no seu teclado e eles rodam no computador remoto, com a saída voltando na sua tela. Tudo passa por um túnel cifrado, então é seguro mesmo na internet aberta.\n\nO caso mais comum: você tem um servidor (um Lubuntu antigo no canto, um Raspberry Pi, ou uma máquina virtual num provedor) e quer mexer nele do conforto do seu notebook. Sem teclado, sem monitor, sem precisar levantar. Você abre o terminal, digita `ssh usuario@ip`, dá a senha e está lá. Cada comando é como se você estivesse fisicamente na máquina remota.\n\nO Lubuntu já vem com o cliente SSH instalado (`ssh`). O que precisa instalar é o servidor (`openssh-server`) na máquina que você quer acessar. Por padrão, o servidor escuta na porta 22 e aceita login com senha. Em produção, a recomendação é trocar para login com chave (sem senha digitada, muito mais seguro) e mudar a porta para algo diferente, evitando varreduras automáticas.\n\nNeste capítulo você vai instalar o servidor SSH, conectar pela primeira vez, configurar autenticação por chave (sem senha), copiar arquivos via `scp`/`sftp` e endurecer o servidor para uso seguro na internet. SSH é uma das ferramentas mais importantes que você vai aprender em Linux.',codes:[{lang:"bash",code:`# Na máquina que vai RECEBER conexões: instalar e ativar o servidor
sudo apt update
sudo apt install openssh-server -y
sudo systemctl enable --now ssh

# Verificar que está escutando
sudo ss -tlnp | grep ssh
# LISTEN 0 128 0.0.0.0:22 ... users:(("sshd",...))`},{lang:"bash",code:`# Na máquina CLIENTE: conectar pela primeira vez
ssh bruno@192.168.0.42
# The authenticity of host '192.168.0.42 (192.168.0.42)' can't be established.
# ED25519 key fingerprint is SHA256:...
# Are you sure you want to continue connecting (yes/no)?  yes
# bruno@192.168.0.42's password: ******
# bruno@servidor:~$    ← agora você está no servidor`},{lang:"bash",code:`# Configurar acesso por chave (sem senha)
# 1) Na sua máquina cliente, gere o par de chaves (uma vez só)
ssh-keygen -t ed25519 -C "meu-laptop"
# Aperte Enter três vezes (sem senha na chave)

# 2) Copie a chave pública para o servidor
ssh-copy-id bruno@192.168.0.42
# Vai pedir a senha uma última vez.

# 3) Agora conecte sem senha:
ssh bruno@192.168.0.42`},{lang:"bash",code:`# Copiar arquivos com scp (cliente local → servidor)
scp arquivo.txt bruno@192.168.0.42:/home/bruno/
# arquivo.txt 100% 1.2KB ...

# Copiar pasta inteira (recursivo)
scp -r minha_pasta/ bruno@192.168.0.42:/home/bruno/

# Trazer arquivo do servidor para sua máquina
scp bruno@192.168.0.42:/var/log/syslog ./syslog_remoto.txt`},{lang:"bash",code:`# Sessão interativa para enviar/receber vários arquivos
sftp bruno@192.168.0.42
# sftp> ls              # lista no servidor
# sftp> lls             # lista local
# sftp> put foto.jpg    # envia
# sftp> get backup.zip  # baixa
# sftp> bye`},{lang:"ini",code:`# Endurecer o servidor: edite /etc/ssh/sshd_config
# sudo nano /etc/ssh/sshd_config

# Mudar porta padrão (dificulta varredura automatizada)
Port 2222

# Proibir login do root
PermitRootLogin no

# Permitir só login por chave (depois que confirmar que sua chave funciona!)
PasswordAuthentication no
PubkeyAuthentication yes

# Aplicar mudanças:
# sudo systemctl restart ssh`},{lang:"bash",code:`# Conectar usando porta diferente
ssh -p 2222 bruno@192.168.0.42

# Para não precisar lembrar, crie ~/.ssh/config no cliente:
# Host servidor-casa
#     HostName 192.168.0.42
#     User bruno
#     Port 2222
#
# Aí basta: ssh servidor-casa`}],points:["SSH é o jeito seguro de controlar outra máquina Linux pela rede.","openssh-server é o pacote do lado que recebe; o cliente já vem instalado.","Use ssh-keygen + ssh-copy-id para login sem senha — mais seguro e mais cômodo.","scp copia arquivos individualmente; sftp dá uma sessão interativa.","Em servidores na internet: desative login por senha, proíba root, mude porta.","Use ~/.ssh/config para guardar atalhos com nome, host, usuário e porta.","Iniciante comum: desativar PasswordAuthentication antes de testar a chave — fica trancado fora.","Iniciante comum: deixar porta 22 aberta na internet com senha fraca — em horas o bot acha."],alerts:[{type:"tip",content:"Para servidores em produção, instale o fail2ban (sudo apt install fail2ban). Ele bloqueia automaticamente IPs que erram a senha várias vezes."},{type:"warning",content:"Antes de mudar configuração do sshd, abra UMA SEGUNDA conexão SSH e deixe aberta. Se algo quebrar, você ainda tem como entrar e desfazer."},{type:"info",content:"rsync usa SSH por baixo e é a melhor ferramenta para sincronizar pastas grandes entre máquinas (rsync -avz pasta/ user@host:/destino/)."},{type:"danger",content:"Nunca compartilhe o arquivo ~/.ssh/id_ed25519 (sua chave privada). Quem o tiver pode entrar como você. Só a id_ed25519.pub (terminada em .pub) pode ser compartilhada."}]},{slug:"firewall-ufw",section:"rede",title:"Firewall com UFW",difficulty:"iniciante",subtitle:"Controlando o que entra e sai do seu Lubuntu.",intro:`Um firewall é o porteiro da sua máquina. Ele decide quais conexões entram, quais saem e quais batem na porta e ouvem "não, hoje não". Em servidores e em qualquer máquina exposta à internet, ele é essencial. Em desktops domésticos atrás de um roteador, ele já te protege "dentro" da rede de casa, caso algum aparelho dela seja comprometido.

O Lubuntu vem com o iptables (o motor real de firewall do kernel Linux), mas mexer nele direto é um trauma. A boa notícia é que existe uma camada amigável por cima chamada UFW (Uncomplicated FireWall — Firewall Descomplicado). Você diz "permita SSH" e ele traduz para as regras complicadas do iptables. Você fala em humano, ele fala em kernel.

A regra de ouro do firewall é: bloquear tudo por padrão e abrir só o que você precisa. Isso se chama política "deny by default". Se você abrir o computador novo na internet, o firewall já bloqueia conexões maliciosas mesmo se você nem sabe que existem. É proteção que funciona enquanto você dorme.

Neste capítulo você vai instalar e ativar o UFW (cuidado para não se trancar fora pelo SSH), abrir portas para serviços conhecidos, fechar portas, ver o que está aberto e olhar o log para entender o que foi bloqueado. Ao final, você vai estar mais seguro que 90% das máquinas Linux desktop por aí.`,codes:[{lang:"bash",code:`# Instalar e ver status
sudo apt install ufw -y
sudo ufw status
# Status: inactive    ← ainda não está ligado`},{lang:"bash",code:`# IMPORTANTE: se você está conectado por SSH, libere SSH ANTES de ativar
sudo ufw allow ssh        # equivale a "ufw allow 22/tcp"

# Definir política padrão (negar entrada, permitir saída)
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Agora pode ativar
sudo ufw enable
# Command may disrupt existing ssh connections. Proceed (y|n)? y
# Firewall is active and enabled on system startup`},{lang:"bash",code:`# Ver regras ativas
sudo ufw status verbose
# Status: active
# Default: deny (incoming), allow (outgoing), disabled (routed)
# To                   Action      From
# 22/tcp (SSH)         ALLOW IN    Anywhere`},{lang:"bash",code:`# Liberar serviços comuns
sudo ufw allow http        # porta 80
sudo ufw allow https       # porta 443
sudo ufw allow 8080/tcp    # porta específica
sudo ufw allow samba       # CIFS/SMB

# Liberar uma porta SÓ para um IP específico
sudo ufw allow from 192.168.0.100 to any port 5432
# (ex: PostgreSQL só para a máquina do colega)`},{lang:"bash",code:`# Remover uma regra
sudo ufw status numbered
# [ 1] 22/tcp                     ALLOW IN    Anywhere
# [ 2] 80/tcp                     ALLOW IN    Anywhere

sudo ufw delete 2
# Deleting:  allow 80/tcp
# Proceed with operation (y|n)? y`},{lang:"bash",code:`# Ativar log para ver o que está sendo bloqueado
sudo ufw logging on

# Acompanhar em tempo real
sudo tail -f /var/log/ufw.log
# UFW BLOCK ... SRC=203.0.113.10 DST=192.168.0.42 PROTO=TCP SPT=54321 DPT=23
# (alguém de fora tentou bater na porta 23 — telnet)`},{lang:"bash",code:`# Desligar o UFW se precisar diagnosticar (lembre de religar!)
sudo ufw disable

# Resetar todas as regras (volta ao zero)
sudo ufw reset
# (vai pedir confirmação)`}],points:["UFW é uma camada amigável sobre o iptables — você fala em humano.","Regra de ouro: deny incoming, allow outgoing (negar entrada, permitir saída).","ANTES de ativar via SSH, libere a porta 22 ou você se tranca fora da máquina.","Use nomes de serviço (ssh, http, samba) em vez de números — fica mais legível.","ufw status numbered mostra com índice; útil para deletar regras específicas.","Ative logging e leia /var/log/ufw.log para entender o que vem do mundo lá fora.","Iniciante comum: ativar firewall conectado via SSH sem liberar a porta 22 antes.","Iniciante comum: liberar uma porta para Anywhere quando bastava abrir só para um IP da rede local."],alerts:[{type:"danger",content:"Se você ativar UFW remotamente sem liberar SSH, perde acesso à máquina. A única recuperação é console físico ou modo recovery. Sempre teste localmente primeiro."},{type:"tip",content:"Para servidores web, libere só 22 (SSH), 80 e 443 (HTTP/HTTPS). Tudo mais deveria ficar fechado por padrão."},{type:"info",content:"Em desktop doméstico atrás de roteador, o UFW protege contra outros aparelhos da sua rede. É útil se a vovó conectar o tablet infectado no mesmo Wi-Fi."},{type:"warning",content:"UFW gerencia entrada e saída, mas não a rede do Docker. Containers podem furar regras. Em servidores com Docker, pesquise sobre DOCKER-USER chain."}]},{slug:"dns-troubleshoot",section:"rede",title:"DNS: quando o nome não vira IP",difficulty:"intermediario",subtitle:'Diagnosticando "a internet caiu" que na verdade é só DNS.',intro:'DNS é a "lista telefônica" da internet. Quando você digita `google.com` no navegador, seu computador não sabe onde isso fica. Ele pergunta para um servidor DNS, que responde com o IP (algo como `142.250.190.46`). Aí sim o navegador consegue conectar. Esse processo acontece dezenas de vezes por minuto, e você nunca percebe — até o dia que o DNS para de responder. Aí parece que "a internet caiu", mas na verdade só a lista telefônica está com defeito.\n\nSabe aquele clássico "não abre site nenhum, mas o WhatsApp funciona"? É DNS. O WhatsApp usa IPs fixos que ele já sabe. O navegador depende de DNS para cada novo nome. Quando você consegue dar ping num IP (`8.8.8.8` por exemplo) mas não num nome (`google.com`), você diagnosticou o problema: DNS quebrado.\n\nO Lubuntu moderno usa o systemd-resolved para gerenciar DNS. Ele cuida de cache, de fallback entre servidores, de configuração via DHCP. Os servidores DNS que você usa vêm normalmente do roteador (que pega da operadora). Você pode trocar por servidores mais rápidos e que respeitam mais privacidade, como os do Cloudflare (`1.1.1.1`) ou do Google (`8.8.8.8`).\n\nNeste capítulo você vai aprender a diagnosticar o tipo de problema (rede caiu? só DNS?), trocar de servidor DNS, limpar o cache do resolver e usar ferramentas como `dig` e `nslookup` para investigar o que está acontecendo. Esse é o conhecimento que evita você ficar reiniciando roteador à toa.',codes:[{lang:"bash",code:`# Diagnóstico em camadas (faça nessa ordem)
# 1) ping num IP (testa só rede)
ping -c 3 1.1.1.1
# Se isso falha → problema de rede (não DNS).

# 2) ping num nome (testa DNS)
ping -c 3 google.com
# Se IP funciona mas nome não → DNS quebrado.

# 3) ver qual DNS o sistema usa
resolvectl status | grep -A2 "DNS Servers"`},{lang:"bash",code:`# Consultar manualmente um nome (sem cache, sem misturar)
dig google.com
# Procure pela seção ANSWER:
# google.com.   300  IN  A  142.250.190.46

# Versão curta, só o IP:
dig +short google.com
# 142.250.190.46

# Saber qual servidor respondeu:
dig google.com | grep SERVER
# ;; SERVER: 127.0.0.53#53(127.0.0.53)
# (o 127.0.0.53 é o systemd-resolved local)`},{lang:"bash",code:`# Forçar consulta direta a um servidor específico
dig @1.1.1.1 google.com
# Se isso responde mas o normal falha, seu DNS local está quebrado.

# Testar nslookup (sintaxe mais antiga)
nslookup google.com 8.8.8.8`},{lang:"bash",code:`# Limpar o cache do systemd-resolved
sudo resolvectl flush-caches

# Estatísticas do cache (útil pra ver se está sendo usado)
sudo resolvectl statistics | grep -A2 Cache`},{lang:"bash",code:`# Trocar o DNS da sua conexão de Wi-Fi para Cloudflare (1.1.1.1)
nmcli connection modify "CasaDoBruno" \\
    ipv4.dns "1.1.1.1 1.0.0.1" \\
    ipv4.ignore-auto-dns yes

# Desconecta e reconecta para aplicar
nmcli connection down "CasaDoBruno"
nmcli connection up "CasaDoBruno"

# Confirma que mudou
resolvectl status | grep "DNS Servers"
# DNS Servers: 1.1.1.1 1.0.0.1`},{lang:"bash",code:`# Testar latência de servidores DNS para escolher o mais rápido
for srv in 1.1.1.1 8.8.8.8 9.9.9.9 208.67.222.222; do
    echo -n "$srv: "
    dig @$srv google.com +stats 2>&1 | grep "Query time"
done
# 1.1.1.1: ;; Query time: 12 msec
# 8.8.8.8: ;; Query time: 28 msec
# 9.9.9.9: ;; Query time: 45 msec
# 208.67.222.222: ;; Query time: 62 msec`},{lang:"bash",code:`# Forçar entrada manual no /etc/hosts (útil para testes)
# Edite com: sudo nano /etc/hosts
# 192.168.0.50    servidor.local
# 127.0.0.1       site-em-desenvolvimento.test

# Esse arquivo é consultado ANTES do DNS.
# Útil para apontar nome para IP fixo sem mexer em servidor DNS.`}],points:["DNS traduz nome (google.com) em IP (142.250.190.46) — é a lista telefônica da internet.","Ping num IP testa rede; ping num nome testa DNS. Diagnostique sempre nessa ordem.","resolvectl status mostra qual servidor DNS você está usando agora.","dig é a ferramenta principal para investigar DNS; nslookup é a versão mais antiga.","1.1.1.1 (Cloudflare) e 8.8.8.8 (Google) são alternativas rápidas ao DNS da operadora.","/etc/hosts sobrescreve DNS — útil para desenvolvimento e bloqueios manuais.","Iniciante comum: reiniciar o roteador 5 vezes quando o problema era só limpar cache DNS.","Iniciante comum: trocar DNS no /etc/resolv.conf direto e o NetworkManager sobrescrever depois."],alerts:[{type:"info",content:"DNS-over-HTTPS (DoH) e DNS-over-TLS (DoT) criptografam suas consultas. Servidores como 1.1.1.1 e 9.9.9.9 suportam — Firefox tem opção embutida."},{type:"warning",content:"Não edite /etc/resolv.conf diretamente: o NetworkManager (ou systemd-resolved) sobrescreve. Use nmcli connection modify para mudanças permanentes."},{type:"tip",content:"Se a rede de casa cai sempre que muita gente usa, considere instalar Pi-hole num Raspberry Pi: ele faz cache local de DNS e bloqueia anúncios."},{type:"danger",content:"Use só DNS de fontes confiáveis. Servidores DNS maliciosos podem te redirecionar para sites falsos de banco. Cloudflare, Google e Quad9 são auditados; DNS aleatório do TikTok não."}]}],jq=[{slug:"atualizar-lts",section:"manutencao",title:"Atualizando para uma nova LTS",difficulty:"intermediario",subtitle:"Migrando o Lubuntu de uma versão LTS para a próxima sem perder nada.",intro:`Pense no seu Lubuntu como uma casa: você mora bem nela, mas de tempos em tempos a prefeitura libera uma reforma maior — encanamento novo, fiação atualizada, telhado reforçado. As versões LTS (Long Term Support) do Ubuntu são exatamente isso. Elas saem a cada dois anos (22.04, 24.04, 26.04...) e recebem atualizações de segurança por cinco anos. Migrar para a próxima LTS é a "reforma" da sua casa digital.

Atualizar não é o mesmo que reinstalar. Numa atualização, o sistema baixa milhares de pacotes novos e substitui os antigos no lugar, mantendo seus arquivos pessoais, suas configurações, seus programas instalados. É confortável, mas exige preparação: backup antes de tudo, espaço em disco sobrando, conexão de internet decente e paciência (pode demorar de 30 minutos a 2 horas).

A ferramenta oficial chama-se \`do-release-upgrade\`. Ela vem instalada no Lubuntu por padrão, no pacote \`update-manager-core\`. Por trás dos panos, ela troca os endereços dos repositórios da versão antiga para a nova, baixa a lista de pacotes atualizados, calcula o que precisa ser substituído e faz tudo de uma vez, perguntando antes de mexer em arquivos de configuração que você editou.

Iniciantes costumam pular para a versão nova assim que ela sai, no dia do lançamento. Não faça isso. Espere o primeiro "point release" (ex.: 26.04.1, normalmente 3 meses depois) — é quando os bugs mais sérios já foram corrigidos. E nunca, jamais, atualize sem ter um backup completo dos seus arquivos importantes.`,codes:[{lang:"bash",code:`# 1. Antes de qualquer coisa, atualize TUDO da versão atual
sudo apt update            # baixa a lista de pacotes
sudo apt upgrade -y        # atualiza o que pode sem remover nada
sudo apt full-upgrade -y   # atualiza inclusive o que precisa remover dependências

# Confirme que não sobrou nada pendente
sudo apt autoremove -y     # remove pacotes órfãos
# saída esperada: "0 upgraded, 0 newly installed"`},{lang:"bash",code:`# 2. Confira qual versão você tem hoje
lsb_release -a
# saída exemplo:
# Distributor ID: Ubuntu
# Description:    Ubuntu 22.04.4 LTS
# Release:        22.04
# Codename:       jammy

# E veja qual é a próxima LTS oferecida
cat /etc/update-manager/release-upgrades
# Prompt=lts  → só oferece quando houver outra LTS estável`},{lang:"bash",code:`# 3. Garanta que o gerenciador de upgrade está instalado
sudo apt install update-manager-core -y

# Inicie o processo (precisa de internet)
sudo do-release-upgrade
# Se quiser pular o aviso de "ainda não recomendada", use -d
# sudo do-release-upgrade -d   # APENAS para teste/desenvolvimento`},{lang:"text",code:`# Saída resumida do do-release-upgrade
Checking for a new Ubuntu release
Get:1 Upgrade tool signature
Get:2 Upgrade tool
Authenticate and extract the upgrade tool
Reading cache

Do you want to start the upgrade?

3 packages are going to be removed.
85 new packages are going to be installed.
421 packages are going to be upgraded.

You have to download a total of 612 M.
This download will take about 18 minutes.

Continue [yN]  Details [d]  y`},{lang:"bash",code:`# 4. Se o sistema perguntar sobre arquivos de configuração:
# *** sources.list (Y/I/N/O/D/Z) [default=N] ?
#  Y = pega a versão NOVA (perde suas edições)
#  N = mantém a versão antiga (default — geralmente seguro)
#  D = mostra a diferença antes de decidir
# Em caso de dúvida, escolha D, leia, depois decida.`},{lang:"bash",code:`# 5. Após reiniciar, confirme se deu tudo certo
lsb_release -a
# Description:    Ubuntu 26.04.1 LTS
uname -r          # mostra a versão do kernel novo
# 7.0.0-14-generic

# Limpe pacotes que sobraram da versão anterior
sudo apt autoremove --purge -y
sudo apt clean`}],points:["LTS sai a cada 2 anos (anos pares, mês 04) e tem 5 anos de suporte de segurança.","Atualize SEMPRE com sudo apt update && full-upgrade ANTES de rodar do-release-upgrade.","Faça backup completo dos seus arquivos antes — atualizações podem falhar e quebrar o sistema.","Espere o primeiro point release (X.04.1) — costuma sair 3 meses depois e já corrigiu bugs sérios.","Nunca use -d em máquina de uso real; é só para testar versões em desenvolvimento.","Se o instalador perguntar sobre conffile (arquivo de configuração), o default 'N' (manter o seu) é o mais seguro.","Iniciante comum: começar a atualização e fechar o terminal no meio — isso pode deixar o sistema quebrado. Use 'screen' ou 'tmux' se acessar via SSH.","Iniciante comum: atualizar com bateria de notebook quase descarregada e sem fonte conectada — uma queda de energia no meio da troca quebra o gerenciador de pacotes."],alerts:[{type:"danger",content:"Sem backup, não atualize. Falhas de energia, internet caindo, ou bug no instalador podem deixar o sistema sem inicializar. Use Timeshift (próximo capítulo) e copie /home para um HD externo antes."},{type:"warning",content:"Repositórios PPA de terceiros costumam quebrar na atualização. O do-release-upgrade desabilita eles automaticamente; reabilite só depois de confirmar que existe versão para a nova LTS."},{type:"tip",content:"Se você acessa por SSH, rode dentro de 'screen' ou 'tmux'. Assim, mesmo que sua conexão caia, o upgrade continua rodando no servidor."},{type:"info",content:"Você não é obrigado a atualizar. Cada LTS tem 5 anos de suporte; pular uma versão (ex.: ir de 22.04 direto para 26.04) também funciona, mas exige passar pela 26.04 antes — não dá para 'pular' duas LTS de uma vez."}]},{slug:"limpeza-disco",section:"manutencao",title:"Limpeza de disco",difficulty:"iniciante",subtitle:"Liberando espaço removendo cache, kernels antigos e lixo acumulado.",intro:'Com o tempo, todo sistema acumula "gordurinha": pacotes baixados que ficaram no cache, kernels antigos guardados por garantia, miniaturas de imagens já apagadas, logs gigantescos. É a mesma coisa do armário de cozinha: você usa por meses, vira ano, e percebe que metade do espaço está ocupada por embalagens vazias e potes que você esqueceu.\n\nA boa notícia é que o Lubuntu tem ferramentas simples para limpar tudo isso. O `apt` cuida do cache de pacotes e dos kernels antigos. O `journalctl` controla o tamanho dos logs do systemd. E uma rápida olhada em `~/.cache` mostra megabytes (às vezes gigas) de miniaturas e arquivos temporários que aplicativos criaram e nunca apagaram.\n\nLimpar não é só "ganhar espaço". Em SSDs pequenos (32GB, 64GB) é literalmente questão de o sistema continuar funcionando: se a partição raiz enche, o Lubuntu fica lento, alguns programas param de salvar e o próprio gerenciador de pacotes recusa a instalar coisas novas. Faça uma limpeza a cada 1-2 meses e o computador agradece.\n\nA regra de ouro: nunca use comandos que apagam coisas se você não entende o que está fazendo. Especialmente `rm -rf`. Os comandos deste capítulo são seguros (apt, bleachbit, journalctl com flags); fugir deles para "atalhos" da internet é receita para apagar o /home por engano.',codes:[{lang:"bash",code:`# 1. Veja o quanto está ocupado em cada partição
df -h
# saída:
# Filesystem      Size  Used Avail Use% Mounted on
# /dev/sda2        58G   42G   13G  77% /
# /dev/sda1       512M   12M  500M   3% /boot/efi

# E o tamanho de cada subpasta de uma raiz qualquer
sudo du -sh /var/* 2>/dev/null | sort -h
# Mostra quem está ocupando mais espaço`},{lang:"bash",code:`# 2. Limpeza padrão do APT — quase sempre libera megabytes (ou gigas)
sudo apt clean
# Apaga TODOS os .deb baixados em /var/cache/apt/archives

sudo apt autoclean
# Apaga só os .deb de versões antigas (mais conservador)

sudo apt autoremove --purge -y
# Remove pacotes que ninguém mais depende + arquivos de configuração`},{lang:"bash",code:`# 3. Removendo kernels antigos (cada um ocupa ~300MB em /boot)
# Veja o kernel atual em uso
uname -r
# 7.0.0-14-generic

# Liste todos os kernels instalados
dpkg --list | grep linux-image
# Os que NÃO têm o número acima podem ser removidos

# autoremove já faz isso, mas se quiser remover manual:
sudo apt purge linux-image-7.0.0-14-generic
# (substitua pelo número do kernel velho que quer apagar)`},{lang:"bash",code:`# 4. Logs do systemd (podem chegar a vários GB)
sudo journalctl --disk-usage
# Archived and active journals take up 3.2G in the file system.

# Mantenha só os últimos 7 dias
sudo journalctl --vacuum-time=7d

# Ou limite o tamanho total a 200MB
sudo journalctl --vacuum-size=200M`},{lang:"bash",code:`# 5. Cache do usuário — miniaturas, navegadores, etc.
du -sh ~/.cache
# 1.4G    /home/voce/.cache

# Limpar miniaturas antigas (seguro):
rm -rf ~/.cache/thumbnails/*

# Para uma limpeza guiada com interface gráfica, instale o BleachBit
sudo apt install bleachbit -y
bleachbit             # versão usuário
sudo bleachbit        # versão root, limpa coisas do sistema`},{lang:"bash",code:`# 6. Achar arquivos enormes que você esqueceu por aí
# Top 10 maiores arquivos no seu /home
find ~ -type f -size +100M -exec du -h {} + 2>/dev/null | sort -rh | head -10

# Top 10 pastas gigantes em /var (precisa sudo)
sudo du -h /var --max-depth=2 2>/dev/null | sort -rh | head -10`}],points:["df -h mostra quanto cada partição está ocupando; comece sempre por aí.","sudo apt clean libera o cache de pacotes baixados — costuma ser o que mais ocupa.","sudo apt autoremove --purge remove pacotes órfãos junto com seus arquivos de config.","Kernels antigos vão se acumulando em /boot; deixe no máximo 2 (atual + um anterior).","journalctl --vacuum-size=200M limita o crescimento dos logs do systemd.","BleachBit é o 'CCleaner do Linux' — fácil de usar, mas leia cada caixinha antes de marcar.","Iniciante comum: rodar 'sudo rm -rf /var/log/*' achando que limpa logs — isso quebra serviços; use journalctl.","Iniciante comum: apagar pasta ~/.cache inteira com aplicativos abertos — eles podem travar; feche tudo antes."],alerts:[{type:"danger",content:"JAMAIS use 'sudo rm -rf /' ou variações com espaços extras (rm -rf / tmp). Esse comando apaga todo o sistema. Se viu na internet, é golpe ou troll."},{type:"warning",content:"Não delete o kernel atualmente em uso (uname -r) nem o último de fallback. Se algo der errado e o atual quebrar, é o anterior que te salva no GRUB."},{type:"tip",content:"Para visualizar o uso de disco de forma gráfica, instale o 'baobab' (Analisador de Uso de Disco). Ele mostra um gráfico em pizza que torna óbvio onde o espaço está indo."},{type:"info",content:"Em SSDs, evite rodar 'fstrim' à mão constantemente. O Ubuntu já roda toda semana via cron (fstrim.timer). Verifique com 'systemctl status fstrim.timer'."}]},{slug:"timeshift-backup",section:"manutencao",title:"Backup com Timeshift",difficulty:"iniciante",subtitle:"Tirando 'fotos' do sistema para voltar quando algo der errado.",intro:"Imagine poder tirar uma foto do estado do seu sistema hoje, antes de instalar aquele driver duvidoso ou atualizar para uma versão nova. E, se algo der errado, voltar para a foto de ontem como se nada tivesse acontecido. É exatamente isso que o Timeshift faz: snapshots (instantâneos) do sistema que você restaura em poucos minutos.\n\nO Timeshift é inspirado no Time Machine do macOS e no System Restore do Windows. Diferença importante: por padrão, ele faz backup do SISTEMA, não dos seus arquivos pessoais em `/home`. A ideia é proteger contra atualizações ruins, configurações que você bagunçou, drivers problemáticos. Para fotos, documentos e vídeos pessoais, use outra ferramenta de backup (Déjà Dup, rsync, nuvem).\n\nPor baixo dos panos, o Timeshift usa uma de duas tecnologias: `rsync` (cópia incremental, funciona em qualquer sistema de arquivos) ou `btrfs` (instantâneos quase instantâneos, mas exige formatar com Btrfs). No Lubuntu padrão, que vem em ext4, você usa o modo rsync. Funciona perfeitamente, só ocupa um pouco mais de espaço.\n\nA regra é simples: tire um snapshot ANTES de qualquer mudança importante. Atualizar para uma nova LTS? Snapshot. Instalar driver da NVIDIA? Snapshot. Mexer no GRUB? Snapshot. Cinco minutos de paciência hoje podem economizar horas de reinstalação amanhã.",codes:[{lang:"bash",code:`# 1. Instalando o Timeshift (já vem em algumas versões; se não, instale)
sudo apt update
sudo apt install timeshift -y

# Abrindo pela primeira vez (interface gráfica)
sudo timeshift-gtk
# Pede senha porque precisa acesso ao disco inteiro`},{lang:"bash",code:`# 2. Configuração inicial recomendada (modo gráfico)
# - Tipo: RSYNC (funciona em ext4, mais comum)
# - Local: outra partição/disco se tiver, senão a mesma /
# - Agendamento: Daily (mantém 5), Weekly (mantém 3)
# - Incluir /home: por padrão NÃO. Deixe assim se /home for grande.

# Para criar o primeiro snapshot pela linha de comando:
sudo timeshift --create --comments "estado limpo pos-instalacao" --tags D
# --tags D = "Daily"; outros: H (hourly), W (weekly), M (monthly), O (on demand)`},{lang:"text",code:`# Saída de exemplo de um snapshot pronto
First run mode (config file not found)
Selected default snapshot type: RSYNC
Mounted '/dev/sda2' at '/run/timeshift/backup'
Device is OK
Estimating system size...
Creating new snapshot...(RSYNC)
Saving to device: /dev/sda2, mounted at: /run/timeshift/backup
Linking from previous snapshot
Synching files with rsync...
Saving config file
Created control file: /run/timeshift/.../info.json
RSYNC Snapshot saved successfully (61s)
Tagged snapshot '2025-01-15_14-22-37': ondemand`},{lang:"bash",code:`# 3. Listando snapshots existentes
sudo timeshift --list
# Num     Name                 Tags  Description
# 0    >  2025-01-15_14-22-37   O    estado limpo pos-instalacao
# 1    >  2025-01-14_03-00-00   D
# 2    >  2025-01-13_03-00-00   D

# Ver onde estão guardados
sudo timeshift --list-devices`},{lang:"bash",code:`# 4. Apagando snapshots antigos quando o disco encher
sudo timeshift --delete --snapshot '2025-01-13_03-00-00'

# Ou tudo de uma vez (cuidado!)
sudo timeshift --delete-all`},{lang:"bash",code:`# 5. Agendando via interface — checagem rápida
# A configuração fica em /etc/timeshift/timeshift.json
sudo cat /etc/timeshift/timeshift.json | head -20
# Procure por "schedule_daily" : "true"

# Agenda real é executada pelo cron do timeshift-cron
systemctl status cron | head -5`}],points:["Timeshift = snapshots do SISTEMA. Para arquivos pessoais, use outra ferramenta (Déjà Dup, rsync).","Em ext4 (Lubuntu padrão), use modo RSYNC; se for Btrfs, prefira o modo BTRFS por velocidade.","Crie um snapshot ANTES de atualizações grandes, drivers ou mudanças no GRUB.","Por padrão /home NÃO entra no snapshot (evita ocupar muito); ative só se realmente quiser.","Mantenha snapshots em outra partição ou disco externo — se o disco do sistema falhar, perde tudo.","Agende snapshots diários e semanais; o Timeshift gerencia o ciclo automaticamente.","Iniciante comum: pensar que Timeshift faz backup de fotos/documentos — não faz por padrão; perde tudo num desastre.","Iniciante comum: guardar snapshots na MESMA partição /; se o disco morrer, leva os snapshots junto."],alerts:[{type:"warning",content:"Snapshot NÃO é backup. Se o HD/SSD físico falhar, os snapshots vão junto. Sempre tenha cópia dos arquivos importantes em outro lugar (HD externo, nuvem)."},{type:"tip",content:"Se você tem dois discos (SSD + HD antigo), aponte o Timeshift para o HD. Snapshots ocupam menos espaço crítico e o sistema continua rápido no SSD."},{type:"info",content:"Snapshots incrementais quase não ocupam espaço extra: o Timeshift usa hard-links para reaproveitar arquivos que não mudaram. Só o que muda gera novos blocos."},{type:"danger",content:"Não confie em snapshots como única proteção contra ransomware: malwares modernos apagam snapshots locais. Backup off-site ou desconectado é insubstituível."}]},{slug:"restaurar-snapshot",section:"manutencao",title:"Restaurando um snapshot",difficulty:"intermediario",subtitle:"Voltando o Lubuntu para o estado de ontem quando algo quebra.",intro:`Restaurar um snapshot é como apertar o botão "desfazer" do sistema operacional inteiro. Você diz para o Timeshift: "leve meu Lubuntu de volta ao estado daquela foto que tirei ontem". Em alguns minutos, todos os arquivos do sistema voltam exatamente como estavam — pacotes, configurações, drivers, tudo.

Existem dois cenários típicos. No primeiro, o sistema ainda inicia normalmente: você instalou algo que deu errado, mas consegue logar e usar a interface gráfica. Aí basta abrir o Timeshift, escolher o snapshot, clicar Restore. Cinco minutos depois, está como antes.

No segundo cenário, o sistema NÃO inicia mais — tela preta, kernel panic, GRUB quebrado. Aqui é onde o Timeshift brilha: você inicia com um pendrive Live do Lubuntu, instala o timeshift no Live, monta o disco interno e restaura de lá. Sem reinstalar nada.

Antes de começar, lembre: a restauração SUBSTITUI os arquivos do sistema pelos do snapshot. Se você criou ou alterou algum arquivo de sistema entre o snapshot e agora, vai perder essas mudanças. Por padrão, /home fica intocado, então fotos e documentos ficam a salvo. Confirme isso na tela de seleção antes de confirmar.`,codes:[{lang:"bash",code:`# Cenário 1 — sistema iniciou, restauração pela GUI
sudo timeshift-gtk
# Selecione o snapshot na lista → clique em "Restaurar"
# Tela mostra o que será sobrescrito.
# Confirme → reinicie quando ele pedir`},{lang:"bash",code:`# Cenário 1 — restauração pela linha de comando
sudo timeshift --list
# Anote o nome do snapshot, ex: 2025-01-14_03-00-00

sudo timeshift --restore --snapshot '2025-01-14_03-00-00'
# Vai pedir confirmações:
# - Restaurar configuração de boot? (geralmente sim)
# - Excluir certos diretórios? (deixe o padrão)`},{lang:"text",code:`# Saída resumida durante a restauração
Selected snapshot: 2025-01-14_03-00-00
To restore with default options, press the ENTER key for all prompts!

Snapshot will be restored to: /
Files will be over-written.

Do you want to continue? (y/N): y

Synching files with rsync...
...
Re-installing GRUB2 bootloader...
Restore completed.
You should reboot the system to load the restored kernel.`},{lang:"bash",code:`# Cenário 2 — sistema NÃO inicia, usando pendrive Live
# 1. Boot pelo pendrive do Lubuntu
# 2. Escolha "Try Lubuntu" (sem instalar)
# 3. Abra o terminal (qterminal) e instale o timeshift
sudo apt update
sudo apt install timeshift -y

# 4. Abra a interface gráfica
sudo timeshift-gtk
# Ele detecta os snapshots do disco interno automaticamente`},{lang:"bash",code:`# Cenário 2 — modo CLI no Live
# Veja onde está o snapshot
sudo timeshift --list-devices
# Selecione o disco onde os snapshots estão guardados
sudo timeshift --list --snapshot-device /dev/sda2

# Restaura para o disco do sistema (ex: /dev/sda3 = sua /)
sudo timeshift --restore \\
  --snapshot '2025-01-14_03-00-00' \\
  --target /dev/sda3`},{lang:"bash",code:`# Após reiniciar — confirme que voltou direitinho
uname -r              # kernel deve ser o do snapshot
lsb_release -a        # versão do Ubuntu
dpkg -l | grep -c '^ii'  # quantidade de pacotes instalados

# Se algum app não funcionar, atualize a lista de pacotes
sudo apt update
sudo apt --fix-broken install`}],points:["Restaurar substitui arquivos do sistema pelos do snapshot — mudanças posteriores se perdem.","/home fica protegido por padrão; configure explicitamente se quiser incluí-lo.","Pela GUI: timeshift-gtk → escolher snapshot → Restore. Pela CLI: timeshift --restore --snapshot '...'.","Se o sistema não inicia, use um pendrive Live do Lubuntu, instale o timeshift e restaure de lá.","Sempre reinstale o GRUB durante a restauração se você mexeu em boot ou trocou kernel.","Após restaurar, rode 'sudo apt --fix-broken install' caso algum pacote tenha ficado bagunçado.","Iniciante comum: restaurar com /home incluído sem perceber, perdendo trabalho recente em documentos.","Iniciante comum: pular o reboot pedido pelo Timeshift e continuar usando — o sistema fica num estado inconsistente."],alerts:[{type:"warning",content:"Antes de restaurar, copie qualquer arquivo recente importante para um pendrive. Mesmo com /home preservado, pequenos descuidos podem custar caro."},{type:"tip",content:"Crie um pendrive de emergência com a versão atual do Lubuntu e guarde na gaveta. No dia do problema, você não vai querer baixar 3GB de ISO com pressa."},{type:"info",content:"Restaurar não desfaz alterações em arquivos pessoais (.config, fotos, planilhas) por padrão. Só sistema. Se um vírus comeu seus documentos, snapshot não traz de volta."},{type:"danger",content:"Ao restaurar pela GUI Live, confira o disco de destino com cuidado. Apontar para o pendrive em vez do disco interno é o erro mais caro possível."}]},{slug:"logs-sistema",section:"manutencao",title:"Lendo os logs do sistema",difficulty:"intermediario",subtitle:"Onde o Lubuntu anota o que acontece — e como interpretar.",intro:'Logs são o "diário do sistema". Cada serviço, driver, atualização e erro deixa anotações em arquivos próprios para que, quando algo der errado, você (ou um amigo experiente) consiga investigar o que aconteceu. Sem logs, debugar é adivinhação. Com logs, é detetive.\n\nNo Lubuntu moderno (e em todo Ubuntu pós-15.04), o protagonista é o `journalctl`, ferramenta do systemd. Ele guarda todos os eventos do sistema num formato binário comprimido em `/var/log/journal/`, organizado por data, serviço e prioridade. Você pergunta o que quer ver e ele responde — mostrar erros das últimas 2 horas, eventos de boot, falhas do Wi-Fi.\n\nExistem também os logs "tradicionais", em texto simples, dentro de `/var/log/`. `auth.log` registra logins e tentativas. `dpkg.log` mostra o que foi instalado/removido. `Xorg.0.log` ou `syslog` ajudam com problemas gráficos. Cada arquivo tem seu pedaço da história.\n\nA primeira regra do leitor de logs: leia de baixo para cima e procure pelas palavras "error", "failed", "warning". Não tente entender tudo de uma vez. A segunda regra: anote o horário aproximado em que o problema aconteceu antes de abrir o log. Filtrar por tempo poupa horas.',codes:[{lang:"bash",code:`# 1. journalctl — primeira parada para qualquer problema
# Mostra TUDO desde o boot atual
sudo journalctl -b
# Use as setas para navegar; q para sair

# Apenas erros (priority <= err)
sudo journalctl -p err -b
# Mostra os erros desde o último boot`},{lang:"bash",code:`# 2. Filtrando por tempo — quando você sabe quando algo quebrou
sudo journalctl --since "2 hours ago"
sudo journalctl --since today
sudo journalctl --since "2025-01-15" --until "2025-01-15 12:00"

# Acompanhar em tempo real (igual tail -f)
sudo journalctl -f
# Aperte Ctrl+C para parar`},{lang:"bash",code:`# 3. Filtrando por serviço/unidade
sudo journalctl -u NetworkManager -b
# Só logs do NetworkManager desde o boot

sudo journalctl -u bluetooth --since "1 hour ago"
# Bluetooth na última hora

# Combinando: erros do sddm (login) hoje
sudo journalctl -u sddm -p err --since today`},{lang:"bash",code:`# 4. Logs tradicionais em /var/log/
ls /var/log/ | head -20
# auth.log    dpkg.log    syslog    Xorg.0.log    apt/

# Tentativas de login (sucesso e falha)
sudo tail -50 /var/log/auth.log

# Histórico de instalações de pacotes
grep " install " /var/log/dpkg.log | tail
# 2025-01-15 14:22:01 install timeshift:amd64 <none> 22.11.2

# Histórico de upgrades
sudo less /var/log/apt/history.log`},{lang:"bash",code:`# 5. Achar mensagens do kernel (drivers, hardware)
sudo dmesg | tail -30
# Mensagens recentes

sudo dmesg --level=err,warn -T
# Só erros/avisos com data legível

# Falhas de hardware costumam aparecer aqui
sudo dmesg | grep -i 'error\\|fail\\|denied'`},{lang:"bash",code:`# 6. Buscando uma palavra-chave em vários lugares ao mesmo tempo
sudo grep -r 'wpa_supplicant' /var/log/ 2>/dev/null | head

# Listar serviços que falharam
systemctl --failed
# 0 loaded units listed.   ← perfeito, sem falhas

# Status detalhado de um serviço específico
systemctl status NetworkManager`}],points:["journalctl é a ferramenta principal de logs no Lubuntu moderno; aprenda 3-4 flags básicas.","-b mostra logs do boot atual; -b -1 mostra do boot anterior (útil quando o sistema reinicia sozinho).","-p err filtra só erros; combine com --since para reduzir o ruído.","/var/log/auth.log = logins; /var/log/dpkg.log = pacotes; /var/log/syslog = geral.","dmesg mostra mensagens do kernel — essencial para problemas de hardware/driver.","systemctl --failed lista rapidamente todos os serviços que não subiram.","Iniciante comum: ler logs gigantes do começo. Comece pelo fim com 'tail' ou 'less +G' e suba.","Iniciante comum: copiar erros do log para o Google sem remover datas/IDs únicos — enterra a busca em zero resultados."],alerts:[{type:"tip",content:"Ao buscar por um erro no Google, copie só a parte genérica da mensagem (sem timestamps, sem PIDs, sem caminhos do seu /home). Isso aumenta muito a chance de achar a solução."},{type:"info",content:"O journal é rotacionado automaticamente. Se ele estiver enorme, controle com 'sudo journalctl --vacuum-size=200M' (visto no capítulo de limpeza)."},{type:"warning",content:"Não compartilhe logs publicamente sem ler antes: podem conter nomes de usuário, paths de arquivos privados e até endereços IP. Anonimize antes de postar em fóruns."}]},{slug:"agendar-tarefas-cron",section:"manutencao",title:"Agendando tarefas com cron",difficulty:"intermediario",subtitle:"Fazendo o Lubuntu rodar comandos sozinho em horários definidos.",intro:'Imagine ter um mordomo invisível que, todo dia às 3 da manhã, faz backup dos seus documentos enquanto você dorme. Ou que limpa pastas temporárias toda segunda. Ou que sincroniza notas para a nuvem a cada hora. No Linux, esse mordomo se chama `cron` — um serviço que existe desde os anos 70 e roda comandos em horários que você programa.\n\nA configuração é feita por arquivos chamados "crontabs". Cada usuário tem o seu (`crontab -e`) e o sistema tem o dele em `/etc/crontab`. Cada linha define quando e o que executar. A sintaxe parece estranha à primeira vista, mas com 5 minutos vira natural: cinco campos para o tempo (minuto, hora, dia, mês, dia-da-semana) e o comando depois.\n\nExiste uma alternativa mais nova chamada `systemd timer`, que faz a mesma coisa com YAML moderninho. Para tarefas pessoais simples, cron continua imbatível pela facilidade. Para serviços do sistema, o systemd timer é o caminho atual.\n\nA regra ouro do cron: SEMPRE use caminhos absolutos no comando (`/usr/bin/rsync`, `/home/voce/scripts/backup.sh`) e SEMPRE redirecione a saída para um arquivo de log. Cron roda num ambiente reduzido, sem o seu PATH e sem terminal — comandos relativos somem no vazio e erros silenciosos enlouquecem qualquer um.',codes:[{lang:"text",code:`# Anatomia de uma linha de crontab
#  ┌──── minuto         (0 - 59)
#  │ ┌── hora           (0 - 23)
#  │ │ ┌── dia do mês   (1 - 31)
#  │ │ │ ┌── mês        (1 - 12)
#  │ │ │ │ ┌── dia semana (0 - 6, 0=domingo)
#  │ │ │ │ │
#  * * * * *  comando-a-rodar

# Exemplos comuns:
# 0 3 * * *        → todo dia às 03:00
# */15 * * * *     → a cada 15 minutos
# 0 9 * * 1-5      → 09:00 de segunda a sexta
# 0 0 1 * *        → meia-noite do dia 1 de cada mês`},{lang:"bash",code:`# 1. Editando seu crontab pessoal
crontab -e
# Na primeira vez ele pergunta qual editor (escolha nano se for iniciante)

# Veja o que está agendado
crontab -l

# Remover tudo (cuidado!)
# crontab -r`},{lang:"bash",code:`# 2. Exemplo prático: backup de Documentos toda noite
# Cole no seu crontab (crontab -e):

0 2 * * * /usr/bin/rsync -a /home/voce/Documentos/ /media/backup/docs/ >> /home/voce/cron.log 2>&1

# Quebrando:
# 0 2 * * *               → todo dia às 02:00
# /usr/bin/rsync -a       → caminho ABSOLUTO + cópia preservando permissões
# /home/voce/Documentos/  → origem (barra final = só o conteúdo)
# /media/backup/docs/     → destino
# >> /home/voce/cron.log  → anexa stdout em log
# 2>&1                    → manda stderr para o mesmo log`},{lang:"bash",code:`# 3. Atalhos amigáveis (mais legíveis que asteriscos)
@reboot   /home/voce/scripts/start-vpn.sh    # roda 1x ao iniciar
@hourly   /usr/bin/sync-notas.sh             # toda hora cheia
@daily    /home/voce/scripts/backup.sh       # toda madrugada (00:00)
@weekly   /usr/bin/apt-mirror                # todo domingo 00:00
@monthly  /home/voce/scripts/relatorio.sh    # dia 1 de cada mês`},{lang:"bash",code:`# 4. Conferindo se o cron está rodando e vendo o log dele
systemctl status cron
# active (running) since ...

# Logs do que o cron tentou rodar (no Ubuntu vai pro syslog)
sudo journalctl -u cron --since today
# Ou:
grep CRON /var/log/syslog | tail`},{lang:"bash",code:`# 5. Tarefas do sistema (precisam de root)
sudo crontab -e            # crontab do root, NÃO use para coisas pessoais

# Pastas globais executadas automaticamente:
ls /etc/cron.daily/
# apt-compat  dpkg  logrotate  man-db  ...

# Para rodar diariamente um script seu como root:
sudo cp meu-script.sh /etc/cron.daily/meu-script
sudo chmod +x /etc/cron.daily/meu-script
# IMPORTANTE: arquivos em /etc/cron.daily NÃO podem ter ponto no nome`},{lang:"bash",code:`# 6. Alternativa moderna: systemd timer (rápido tour)
# Crie /etc/systemd/system/meubackup.service
# [Service]
# ExecStart=/home/voce/scripts/backup.sh

# E /etc/systemd/system/meubackup.timer
# [Timer]
# OnCalendar=daily
# Persistent=true
# [Install]
# WantedBy=timers.target

sudo systemctl enable --now meubackup.timer
systemctl list-timers --all | head`}],points:["cron roda comandos em horários programados; ideal para backups, limpezas e sincronizações.","Crontab tem 5 campos de tempo: minuto, hora, dia, mês, dia-da-semana, depois o comando.","Use sempre caminhos absolutos: cron não tem o $PATH do seu terminal interativo.","Redirecione stdout e stderr (>> log 2>&1) para conseguir investigar erros depois.","@reboot, @daily, @weekly são apelidos legíveis e bem mais fáceis que */* * * *.","/etc/cron.daily/ executa scripts automaticamente — não use ponto no nome do arquivo.","systemd timer é a alternativa moderna; para tarefas pessoais, cron costuma ser suficiente.","Iniciante comum: testar o agendamento em terminal e achar que vai funcionar no cron — esquecendo do PATH reduzido.","Iniciante comum: criar uma tarefa a cada minuto sem perceber e encher o disco de logs em poucos dias."],alerts:[{type:"warning",content:"Cron usa o fuso horário do sistema. Confira com 'timedatectl' antes de agendar; se você muda de país, os horários mudam."},{type:"tip",content:"Use https://crontab.guru para visualizar em linguagem humana o que sua expressão significa. Evita marcar 'toda hora cheia' achando que era 'a cada hora cheia do dia útil'."},{type:"info",content:"Se o computador estiver desligado na hora marcada, o cron tradicional NÃO recupera tarefas perdidas. Para isso use 'anacron' ou systemd timer com Persistent=true."},{type:"danger",content:"Não coloque senhas em texto plano dentro de scripts agendados pelo cron. Use chaves SSH, gerenciadores de credenciais (pass, secret-tool) ou variáveis de ambiente protegidas."}]}],Nq=[{slug:"diagnosticar-problemas",section:"solucao-problemas",title:"Diagnosticando problemas no Lubuntu",difficulty:"iniciante",subtitle:"Como olhar para um problema com calma e descobrir a causa.",intro:'Quando algo dá errado no computador, a vontade é xingar e reiniciar. Reiniciar até resolve às vezes, mas não ensina nada — e o problema volta. Diagnosticar é o jeito do mecânico: antes de trocar peça, você escuta o motor, olha o painel, mede a pressão. No Lubuntu, "escutar o motor" é olhar logs, testar passo a passo e isolar a causa.\n\nPense num encanador chamado para ver um vazamento. Ele não sai quebrando parede: primeiro fecha o registro, depois testa cada torneira, depois olha o cano por baixo da pia. Diagnóstico é exatamente isso — ir do mais simples (cabo solto, energia, espaço em disco) ao mais complexo (driver, kernel, configuração quebrada). Pular essa ordem custa caro.\n\nA boa notícia é que o Linux fala muito. Quase todo programa escreve no terminal ou em arquivos de log o que aconteceu, com data e hora. Aprendendo a ler dois ou três comandos (`journalctl`, `dmesg`, `free`, `df`), você descobre 80% dos problemas sozinho, sem depender de fórum.\n\nNeste capítulo você vai montar um pequeno "kit de primeiros socorros": comandos para ver memória, disco, rede, processos travados e logs do sistema. Não decore tudo — entenda quando usar cada um. A regra de ouro é: leia a mensagem de erro literalmente antes de pesquisar. Ela quase sempre diz o problema.',codes:[{lang:"bash",code:`# Primeira pergunta: tem espaço em disco?
# df = disk free, -h mostra em formato humano (GB, MB)
df -h
# saída exemplo:
# Sistema    Tam   Usado Disp Uso% Montado em
# /dev/sda1  100G  92G   3G   97% /
# Se o disco está em 95%+, MUITA coisa quebra.`},{lang:"bash",code:`# Segunda pergunta: tem memória sobrando?
# free = mostra RAM e swap; -h em formato humano
free -h
# saída exemplo:
#               total   usado   livre   compart  buff/cache  disponível
# Mem.:         3,8Gi   3,5Gi   80Mi    20Mi     250Mi       100Mi
# Swap:         2,0Gi   1,9Gi   100Mi
# Memória disponível baixa = sistema lento, travas.`},{lang:"bash",code:`# Terceira pergunta: o que está consumindo CPU/RAM agora?
# top é interativo; aperte q para sair
top
# Versão mais bonita (precisa instalar):
sudo apt install htop -y
htop
# Use F9 para mandar sinal (kill) num processo travado.`},{lang:"bash",code:`# Logs do sistema com journalctl
# Ver as últimas mensagens de TODO o sistema:
journalctl -xe
# -x adiciona explicações; -e pula para o final.

# Só do boot atual:
journalctl -b
# Só do boot anterior (útil quando o problema travou tudo):
journalctl -b -1`},{lang:"bash",code:`# Mensagens do kernel — útil quando hardware falha
# (USB que não monta, Wi-Fi que some, disco com erro)
dmesg | tail -50
# tail -50 mostra só as 50 últimas linhas.

# Filtrando só erros:
dmesg --level=err,warn`},{lang:"bash",code:`# Testando rede em camadas — do mais simples ao mais complexo
ping -c 3 127.0.0.1        # a placa de rede responde?
ping -c 3 192.168.0.1      # o roteador responde?
ping -c 3 8.8.8.8          # a internet responde por IP?
ping -c 3 google.com       # o DNS funciona?
# Cada camada que falha aponta uma causa diferente.`},{lang:"bash",code:`# Quando um aplicativo trava sem explicar nada,
# abra ele PELO TERMINAL para ver as mensagens de erro:
firefox
# Ele vai imprimir warnings e erros direto na tela
# em vez de engolir tudo silenciosamente.`}],points:["Diagnóstico vai do simples (cabo, energia, espaço) ao complexo (driver, kernel).","df -h mostra disco; free -h mostra memória; htop mostra processos vivos.","journalctl -xe e dmesg são o diário do sistema — leia antes de pesquisar.","Para rede, teste em camadas com ping até descobrir onde quebra.","Abra apps travados pelo terminal para ver mensagens que a interface esconde.","Anote a mensagem de erro EXATA antes de buscar — uma palavra a menos muda tudo.","Iniciante comum: reiniciar antes de olhar o erro. Você perde a evidência e o aprendizado.","Iniciante comum: assumir que é vírus. No Lubuntu, 99% das vezes é configuração ou disco cheio."],alerts:[{type:"tip",content:"Mantenha um caderno (digital ou papel) de problemas resolvidos. Da próxima vez você consulta em 2 minutos em vez de revirar fórum por horas."},{type:"warning",content:"Disco acima de 95% causa erros estranhos: travas no login, apps que não abrem, configurações que somem. Sempre teste o df primeiro."},{type:"info",content:"journalctl mostra logs unificados do systemd. Antigamente cada serviço tinha um arquivo em /var/log/. Hoje quase tudo passa pelo journal."},{type:"success",content:"Aprender a ler logs é a habilidade que separa o usuário do administrador. Vale mais que decorar comando bonito."}]},{slug:"modo-recovery",section:"solucao-problemas",title:"Modo de recuperação (recovery)",difficulty:"intermediario",subtitle:"Quando o sistema não inicia normal, o recovery é a porta dos fundos.",intro:`Imagine que sua casa pegou um curto e a luz da sala não acende. Você não derruba a parede: vai até o quadro de força, desliga tudo e religa um circuito por vez. O modo recovery do Lubuntu é exatamente esse "quadro de força". É um modo de inicialização mínimo, sem interface gráfica, sem rede automática, só com o essencial para você consertar.

Ele é útil quando algo no sistema impede o boot normal: uma atualização que deu errado, um driver gráfico que travou, um arquivo de configuração corrompido, ou o disco que ficou cheio e impede o login. Em vez de reinstalar do zero, você entra no recovery, conserta e segue a vida.

Para acessar, você usa o menu do GRUB (o gerenciador de boot que aparece quando o computador liga). Em Lubuntu, ele costuma ficar escondido — pressione \`Shift\` (BIOS) ou \`Esc\` (UEFI) repetidamente logo após ligar para mostrá-lo. Lá dentro escolha "Advanced options" e depois a entrada com "(recovery mode)".

Neste capítulo você vai conhecer as opções do menu de recovery, entender quando usar cada uma e fazer dois consertos clássicos: dar espaço em disco e reparar pacotes quebrados. É menos assustador do que parece — basicamente é um terminal com privilégios.`,codes:[{lang:"bash",code:`# Para acessar o GRUB ao ligar o PC:
# - BIOS legado: segure SHIFT durante o boot
# - UEFI: aperte ESC repetidamente logo após ligar
# Aparece o menu do GRUB:
# Ubuntu
# Advanced options for Ubuntu  <- escolha esta
#   Ubuntu, with Linux 6.x.x-generic
#   Ubuntu, with Linux 6.x.x-generic (recovery mode)  <- esta`},{lang:"text",code:`# Menu do recovery — opções principais:
# resume    -> tenta voltar para boot normal
# clean     -> libera espaço apagando pacotes não usados
# dpkg      -> repara pacotes quebrados (após update interrompido)
# fsck      -> verifica e repara o sistema de arquivos
# network   -> habilita rede (vem desligada por padrão)
# root      -> abre um shell root para você fazer manutenção`},{lang:"bash",code:`# Cenário 1: disco cheio impedindo o login
# Escolha "root" no menu, aperte Enter quando pedir senha
# (o sistema entra em modo "read-only", então remontamos rw)
mount -o remount,rw /

# Veja o que está ocupando espaço:
du -h --max-depth=1 / 2>/dev/null | sort -h | tail
# tail mostra os maiores; investigue /var/log e /home/usuario/.cache`},{lang:"bash",code:`# Cenário 2: limpando arquivos antigos no recovery
# Apaga caches do apt (megabytes recuperados):
apt clean

# Remove pacotes que ninguém mais depende:
apt autoremove --purge -y

# Apaga logs antigos do journal (>7 dias):
journalctl --vacuum-time=7d`},{lang:"bash",code:`# Cenário 3: reparar pacotes quebrados
# Útil quando uma atualização foi interrompida (energia, etc.)
# No menu recovery escolha "dpkg" — ele faz isso sozinho.

# Manualmente, no shell root:
dpkg --configure -a       # finaliza pacotes pendentes
apt --fix-broken install  # resolve dependências quebradas
apt update && apt upgrade -y`},{lang:"bash",code:`# Cenário 4: verificar integridade do disco (fsck)
# IMPORTANTE: a partição precisa estar desmontada ou em read-only.
# Use a opção "fsck" do menu recovery — ela faz isso com segurança.

# Manualmente (avançado), assumindo / em /dev/sda2:
fsck -y /dev/sda2
# -y responde "sim" para todas as perguntas de reparo.`},{lang:"bash",code:`# Saindo do recovery
# Depois de consertar, digite:
exit             # se você estava no shell root
# Volta ao menu — escolha:
resume           # tenta boot normal
# Ou simplesmente reinicie:
reboot`}],points:["Recovery é um modo mínimo de boot — sem GUI, sem rede automática, só o essencial.","Acesse via GRUB → Advanced options → entrada com '(recovery mode)'.","As opções clean, dpkg e fsck cobrem 90% dos problemas de boot.","Antes de mexer, monte / como leitura/escrita: mount -o remount,rw /","apt clean e autoremove costumam liberar gigabytes em sistemas antigos.","Use a opção network do menu se precisar baixar pacotes durante o conserto.","Iniciante comum: reinstalar Lubuntu logo. Antes, tente recovery — leva 5 minutos.","Iniciante comum: digitar comandos de Windows (chkdsk, sfc) — eles não existem aqui."],alerts:[{type:"warning",content:"Não confunda 'recovery mode' do GRUB com a opção 'Try Lubuntu' do pendrive de instalação. Os dois servem para consertar, mas são bichos diferentes."},{type:"tip",content:"Se o GRUB nem aparece, mantenha o Shift pressionado desde o momento do POST (a tela do fabricante). Em alguns notebooks, é preciso ESC + F12."},{type:"info",content:"Em sistemas modernos com UEFI e Secure Boot, o recovery funciona normalmente. Não é preciso desligar Secure Boot para isso."},{type:"danger",content:"Não rode fsck em uma partição montada em modo leitura/escrita. Pode corromper de vez. Use sempre a opção do menu recovery, ou um pendrive Live."}]},{slug:"reinstalar-grub",section:"solucao-problemas",title:"Reinstalando o GRUB",difficulty:"intermediario",subtitle:"Quando o boot some — recuperando o gerenciador de inicialização.",intro:'O GRUB é o porteiro do seu computador. Quando você liga a máquina, é ele quem mostra o menu (Lubuntu, Windows, opções avançadas) e entrega o controle para o sistema escolhido. Sem GRUB, o disco até existe, os arquivos estão lá, mas a BIOS não sabe por onde começar — você liga e cai numa tela preta com "no bootable device" ou um `grub rescue>` piscando.\n\nOs dois cenários mais comuns que apagam o GRUB são: instalar o Windows depois do Lubuntu (o Windows reescreve o setor de boot e finge que o Linux não existe) e mexer em partições com gparted sem cuidado. A solução é reinstalar o GRUB a partir de um pendrive Live — exatamente aquele que você usou para instalar o Lubuntu.\n\nA operação tem três passos só: dar boot pelo pendrive Live, montar a partição da raiz do seu Lubuntu instalado e rodar `grub-install` mais `update-grub`. Parece intimidador, mas são quatro comandos. O segredo é descobrir corretamente qual partição é a sua raiz (geralmente `/dev/sda2` ou `/dev/nvme0n1p2`) e qual é a partição EFI (em sistemas UEFI).\n\nNeste capítulo você vai aprender as duas variantes: BIOS legado (mais simples) e UEFI (mais comum hoje, exige montar a partição /boot/efi). Também vou mostrar como recuperar a partir do prompt `grub rescue>`, que é o "modo super-pânico" quando até o pendrive falha.',codes:[{lang:"bash",code:`# Boot pelo pendrive Live → escolha "Try Lubuntu"
# Abra o terminal (Ctrl+Alt+T) e descubra suas partições:
sudo fdisk -l
# saída resumida:
# /dev/sda1   512M   EFI System
# /dev/sda2   100G   Linux filesystem  <- sua raiz
# /dev/sda3   8G     Linux swap`},{lang:"bash",code:`# Variante 1: sistema BIOS LEGADO (não-UEFI)
# Monte a raiz do seu Lubuntu instalado:
sudo mount /dev/sda2 /mnt

# Reinstale o GRUB no disco INTEIRO (sem número):
sudo grub-install --root-directory=/mnt /dev/sda

# Reinicie sem o pendrive:
sudo reboot`},{lang:"bash",code:`# Variante 2: sistema UEFI (a maioria hoje)
# Monte a raiz e a partição EFI:
sudo mount /dev/sda2 /mnt
sudo mount /dev/sda1 /mnt/boot/efi

# "Entre" no sistema instalado com chroot:
for i in /dev /dev/pts /proc /sys /run; do
    sudo mount -B $i /mnt$i
done
sudo chroot /mnt`},{lang:"bash",code:`# Já dentro do chroot, reinstale o GRUB-EFI:
grub-install --target=x86_64-efi --efi-directory=/boot/efi \\
    --bootloader-id=ubuntu --recheck

# Atualize o menu (descobre Windows e outros sistemas):
update-grub

# Saia do chroot e reinicie:
exit
sudo reboot`},{lang:"bash",code:`# Atalho: ferramenta boot-repair (gráfica, faz tudo sozinha)
# No pendrive Live:
sudo apt update
sudo apt install -y boot-repair
boot-repair
# Clique em "Recommended repair" e siga as instruções.
# É a forma mais segura para iniciantes.`},{lang:"bash",code:`# Pânico: caiu no prompt grub rescue>
# (significa que o GRUB carregou parcial, mas não achou a config)
grub rescue> ls
# (hd0,gpt2) (hd0,gpt1) (hd0)

grub rescue> set root=(hd0,gpt2)
grub rescue> set prefix=(hd0,gpt2)/boot/grub
grub rescue> insmod normal
grub rescue> normal
# Se der certo, entra no menu. Depois, no Lubuntu, rode:
sudo update-grub`}],points:["GRUB é o gerenciador de boot — sem ele, a BIOS não acha o sistema.","Instalar Windows depois do Linux é a causa #1 de GRUB sumido.","Para reinstalar, use o pendrive Live e rode grub-install + update-grub.","Em UEFI, é obrigatório montar /boot/efi e usar --target=x86_64-efi.","boot-repair é o atalho gráfico — faz tudo automaticamente, sem decorar comandos.","Sempre identifique a partição certa com fdisk -l antes de rodar comandos.","Iniciante comum: rodar grub-install /dev/sda1 (com número). É no disco SEM número.","Iniciante comum: esquecer de update-grub depois — o Windows não aparece no menu."],alerts:[{type:"danger",content:"Rodar grub-install no disco errado pode quebrar o boot do Windows também. Confirme três vezes qual /dev/sdX é o do sistema antes de executar."},{type:"tip",content:"Para iniciantes, sempre prefira boot-repair. Ele detecta UEFI/BIOS, monta as partições certas e até gera um relatório que você pode colar em fórum."},{type:"info",content:"O comando os-prober dentro do update-grub é o que detecta outros sistemas. No Ubuntu 22.04+, vem desabilitado por segurança — habilite com GRUB_DISABLE_OS_PROBER=false em /etc/default/grub."}]},{slug:"recuperar-senha-root",section:"solucao-problemas",title:"Recuperando senha de usuário",difficulty:"intermediario",subtitle:"Esqueceu a senha? Calma — dá para resetar pelo recovery.",intro:`Esquecer senha do computador é um clássico. Acontece com todo mundo, inclusive comigo. No Windows, isso costuma virar drama — instalar ferramenta paga, formatar tudo. No Lubuntu, é uma questão de cinco minutos. O sistema confia que quem tem acesso físico ao teclado é o dono, e oferece um caminho oficial para resetar.

A técnica usa o modo recovery do GRUB que você viu dois capítulos atrás. A ideia é: entrar como root no shell de manutenção, montar o disco em modo leitura/escrita e usar o comando \`passwd\` para definir nova senha. Pronto. Sem CD especial, sem programa.

No Lubuntu não existe usuário "root" com senha por padrão — o root está bloqueado e a administração é feita pelo seu usuário com \`sudo\`. Por isso, o que você vai recuperar é a senha do SEU usuário (o que você criou na instalação). Se mais de uma pessoa usa o PC, atenção: qualquer uma com acesso físico pode fazer isso, então em ambiente compartilhado considere ativar criptografia de disco.

Neste capítulo você vai aprender a sequência exata para resetar a senha, como descobrir o nome do seu usuário caso tenha esquecido (sim, acontece) e como criptografar o /home se quiser blindar contra esse mesmo truque sendo usado contra você.`,codes:[{lang:"text",code:`# Passo 1: ligar o PC e entrar no GRUB
# - Segure SHIFT (BIOS) ou aperte ESC repetidas vezes (UEFI)
# Escolha:
# Advanced options for Ubuntu
#   Ubuntu, with Linux 6.x.x-generic (recovery mode)
# Aguarde o menu de recovery aparecer.`},{lang:"text",code:`# Passo 2: no menu de recovery, escolha "root"
# (Drop to root shell prompt)
# Aperte Enter quando pedir confirmação.
# Você ganha um prompt # — está como root, sem senha.`},{lang:"bash",code:`# Passo 3: montar o sistema em leitura/escrita
# (no recovery a raiz vem read-only por segurança)
mount -o remount,rw /

# Confirme que deu certo:
mount | grep " / "
# saída deve conter "rw," em vez de "ro,"`},{lang:"bash",code:`# Passo 4: descubra o nome do seu usuário (se esqueceu)
ls /home
# saída exemplo: ana  bruno

# Reset a senha do usuário 'ana':
passwd ana
# Vai pedir nova senha, depois confirmar.
# saída: passwd: password updated successfully`},{lang:"bash",code:`# Passo 5: reinicie e teste
exit            # sai do shell root
# Volta ao menu — escolha "resume" ou
reboot

# Faça login normalmente com a senha nova.`},{lang:"bash",code:`# Bonus: bloquear/desbloquear conta de usuário
# (útil quando você quer impedir login temporariamente)
sudo passwd -l ana    # bloqueia (lock)
sudo passwd -u ana    # desbloqueia (unlock)

# Forçar troca de senha no próximo login:
sudo passwd -e ana
# bom para administradores que criam conta com senha provisória.`},{lang:"bash",code:`# Para se proteger contra esse mesmo truque ser usado em você:
# 1) Ative senha no GRUB (impede acesso ao recovery)
sudo grub-mkpasswd-pbkdf2
# Pega o hash gerado e adiciona em /etc/grub.d/40_custom

# 2) Ou, mais simples, ative criptografia LUKS na instalação.
# Sem a senha LUKS, ninguém monta o disco — nem com pendrive.`}],points:["No Lubuntu, root não tem senha — você reseta a senha do seu usuário comum.","Acesse o recovery pelo GRUB e escolha a opção 'root'.","Sempre faça mount -o remount,rw / antes de mexer (a raiz vem em read-only).","passwd nome_do_usuario define nova senha sem pedir a antiga.","Se esqueceu o nome do usuário, ls /home mostra todos.","Acesso físico ao PC = acesso à senha. Use criptografia em laptops e PCs compartilhados.","Iniciante comum: tentar logar como root direto — no Ubuntu/Lubuntu, root é bloqueado.","Iniciante comum: esquecer o remount,rw e ver 'Read-only file system' ao trocar senha."],alerts:[{type:"warning",content:"Esse procedimento é uma porta intencional de recuperação. Em laptops corporativos ou PCs compartilhados, ative senha no GRUB e/ou criptografia LUKS para fechá-la."},{type:"tip",content:"Use um gerenciador de senhas (KeePassXC, Bitwarden) para nunca mais precisar fazer isso. A senha do PC é a única que vale a pena memorizar — todas as outras ficam no cofre."},{type:"info",content:"O comando passwd guarda os hashes em /etc/shadow. Por segurança, esse arquivo só é lido pelo root. Por isso o reset precisa do shell de recovery."},{type:"success",content:"Depois de resetar, abra o LXQt e troque a senha de novo no aplicativo gráfico (Configurações → Usuários). Mantém o registro consistente."}]},{slug:"onde-pedir-ajuda",section:"solucao-problemas",title:"Onde pedir ajuda",difficulty:"iniciante",subtitle:"Comunidade, fóruns e como fazer perguntas que recebem resposta.",intro:'Linux é gratuito porque milhares de pessoas dedicam tempo voluntário a ele. Esse mesmo espírito mantém a comunidade respondendo dúvidas em fóruns, chats e canais. A ajuda existe e é, em geral, generosa — mas tem etiqueta. Pergunta mal feita raramente recebe resposta boa, e gente educada ajuda gente educada.\n\nA regra de ouro é: faça a lição de casa primeiro. Pesquise a mensagem de erro EXATA no Google entre aspas. Em quase todo caso, alguém já passou por isso. Se ainda assim não achar, formule a pergunta deixando claro: o que você queria fazer, o que tentou, o que aconteceu (com mensagem de erro literal) e qual sua versão do Lubuntu (`lsb_release -a`).\n\nOs melhores lugares para Lubuntu em específico são: o fórum oficial (`discourse.lubuntu.me`), a documentação (`manual.lubuntu.me`) e o canal `#lubuntu` no IRC/Matrix. Para Ubuntu em geral, vale `askubuntu.com` (formato Stack Overflow), o `ubuntuforums.org` e a documentação `help.ubuntu.com`. Em português, o `Diolinux Plus` é referência viva.\n\nNeste capítulo você vai aprender quais lugares funcionam para cada tipo de problema, como montar uma pergunta clara (com o template "STAR": Situação, Tentativa, Atual, Resultado esperado) e os sete erros que fazem perguntas ficarem sem resposta. Pedir ajuda é uma habilidade — quem aprende, destrava.',codes:[{lang:"bash",code:`# Antes de pedir ajuda, colete informações do sistema
# Versão do Lubuntu/Ubuntu:
lsb_release -a
# Distributor ID: Ubuntu
# Description:    Ubuntu 26.04.1 LTS
# Release:        26.04
# Codename:       resolute`},{lang:"bash",code:`# Versão do kernel e arquitetura:
uname -a
# Linux notebook 7.0.0-14-generic #14-Ubuntu SMP x86_64 GNU/Linux

# Modelo do PC (útil para problemas de hardware):
sudo dmidecode -t system | grep -E "Manufacturer|Product"`},{lang:"bash",code:`# Para colar logs longos, use um pastebin (não cole no fórum direto)
# Instale uma ferramenta CLI:
sudo apt install pastebinit -y

# Mande o log inteiro:
journalctl -b | pastebinit
# devolve uma URL que você cola na pergunta.`},{lang:"text",code:`# Template STAR para perguntas:
# (S)ituação: "Estou usando Lubuntu 26.04 em um Dell Latitude D630."
# (T)entativa: "Tentei conectar Wi-Fi pelo painel — não aparece nenhuma rede."
# (A)tual:    "O comando ip link mostra wlan0 como DOWN.
#             Já dei sudo ip link set wlan0 up sem sucesso."
# (R)esultado esperado: "Que a placa wifi seja reconhecida e
#             apareça lista de redes."
# Anexe a saída de: lsb_release -a, uname -r, lspci | grep -i wifi`},{lang:"text",code:`# Onde pedir ajuda — guia rápido:
# 🐧 Lubuntu específico:
#    https://discourse.lubuntu.me   (fórum oficial)
#    https://manual.lubuntu.me      (manual em PDF)
# 🐧 Ubuntu em geral:
#    https://askubuntu.com          (formato Stack Overflow)
#    https://ubuntuforums.org       (clássico)
#    https://help.ubuntu.com        (documentação)
# 🇧🇷 Português:
#    https://forum.diolinux.com.br
#    https://t.me/diolinux          (Telegram)`},{lang:"bash",code:`# Pesquisando erro corretamente
# Errado: "lubuntu não conecta wifi" -> resultado vago
# Certo: copie a mensagem EXATA entre aspas no Google:
# "wlan0: deauthenticated from"  ubuntu 26.04
# As aspas forçam busca pela frase exata.`},{lang:"text",code:`# Os 7 erros que fazem perguntas serem ignoradas:
# 1) "Não funciona" sem dizer o que é "funcionar"
# 2) Sem mensagem de erro nem captura de tela
# 3) Sem versão do sistema (lsb_release -a)
# 4) Print de tela do celular fotografando a tela do PC
# 5) "URGENTE!" no título — comunidade não tem prazo seu
# 6) Não voltar para dizer se a resposta funcionou
# 7) Apagar a pergunta depois — atrapalha quem busca depois`}],points:["Pesquise a mensagem de erro literal entre aspas antes de perguntar.","Sempre informe versão do Lubuntu (lsb_release -a) e modelo do PC.","Cole logs grandes em pastebin, não dentro do post.","Use o template STAR: Situação, Tentativa, Atual, Resultado esperado.","Para Lubuntu, prefira discourse.lubuntu.me; para Ubuntu, askubuntu.com.","Volte para marcar a resposta correta ou explicar o que resolveu.","Iniciante comum: tirar foto da tela com celular em vez de Print Screen.","Iniciante comum: pedir 'ajuda urgente' — a comunidade é voluntária, sem SLA."],alerts:[{type:"tip",content:"Antes de criar tópico novo, leia perguntas parecidas — em geral metade da resposta já está lá. Você economiza seu tempo e o de quem responderia."},{type:"warning",content:"Cuidado com tutoriais antigos. Comandos do Ubuntu 16.04 podem quebrar o 26.04. Sempre confira a data do post e a versão a que se referem."},{type:"info",content:"Comunidades de IRC/Matrix dão respostas muito rápidas, mas exigem ficar online. Para problemas que esperam, fórum é melhor — fica registrado para outros."},{type:"success",content:"Depois que conseguir resolver, edite o post original com a solução. Você ajuda os próximos e ganha boa reputação na comunidade."}]},{slug:"faq-erros-comuns",section:"solucao-problemas",title:"FAQ de erros comuns",difficulty:"iniciante",subtitle:"Coletânea dos problemas que TODO iniciante encontra — com solução.",intro:`Todo iniciante pisa nos mesmos cinco ou seis pedrinhas no caminho. Não é sinal de incompetência: é a tal "curva de aprendizado". Saber que o problema já foi visto mil vezes (e tem solução conhecida) tira metade do estresse. Este capítulo é uma coleção rápida desses problemas — para você consultar quando algo travar, sem ter que abrir fórum.

A organização é simples: cada bloco tem um sintoma ("o som não sai"), uma causa provável e o comando ou ajuste que resolve. Não é o universo todo de erros — é o conjunto que cobre 80% dos casos relatados pelos usuários novos de Lubuntu nos últimos anos. Os outros 20% você resolve com o que aprendeu nos capítulos anteriores (logs, recovery, comunidade).

A ideia é que você leia uma vez agora para reconhecer os padrões e volte aqui depois quando esbarrar em um. Anote no caderno os que você de fato encontrou — você vai notar que repetem em outros sistemas Linux também.

Considere também o "kit do socorro": um pendrive Live de Lubuntu sempre acessível, espaço de pelo menos 5GB livre na partição raiz e snapshots automáticos do Timeshift. Com esses três, qualquer problema desta lista vira inconveniente passageiro, não tragédia.`,codes:[{lang:"bash",code:`# Erro 1: "Não tem som" depois de bootar
# Verifique se PulseAudio/PipeWire está ativo:
pactl info | head -5

# Reinicie o serviço de áudio:
systemctl --user restart pulseaudio
# ou, em sistemas com PipeWire (Lubuntu 23.10+):
systemctl --user restart pipewire pipewire-pulse

# Conferir saída ativa: abra pavucontrol
sudo apt install pavucontrol -y && pavucontrol`},{lang:"bash",code:`# Erro 2: "Wi-Fi não aparece" ou some após suspender
# Listar placas e drivers:
lspci -k | grep -A 3 -i network

# Reset rápido:
sudo systemctl restart NetworkManager

# Para placas Realtek que somem ao acordar:
echo 'options rtl8821ce disable_aspm=1' | \\
    sudo tee /etc/modprobe.d/rtl8821ce.conf
sudo update-initramfs -u`},{lang:"bash",code:`# Erro 3: "Disco cheio" sem motivo aparente
# Veja onde estão os GBs:
sudo du -h --max-depth=1 / 2>/dev/null | sort -h | tail
# Suspeitos clássicos:
#   /var/log     -> sudo journalctl --vacuum-size=100M
#   /var/cache/apt -> sudo apt clean
#   ~/.cache     -> rm -rf ~/.cache/* (só seu user)
#   /tmp         -> reinicia que esvazia sozinho`},{lang:"bash",code:`# Erro 4: "Tela travada" — só o mouse mexe
# Tente matar a sessão sem reiniciar:
# Ctrl+Alt+F3  -> abre console em modo texto
# Faça login com seu usuário e senha
sudo systemctl restart sddm
# Volta para a tela de login. Login normal funciona.

# Para voltar do console à GUI sem reiniciar serviço:
# Ctrl+Alt+F1 ou F7 (varia por hardware)`},{lang:"bash",code:`# Erro 5: "apt diz 'dpkg interrupted'"
# (energia caiu durante atualização, por exemplo)
sudo dpkg --configure -a
sudo apt --fix-broken install
sudo apt update && sudo apt upgrade -y
# 9 em 10 vezes resolve sem precisar de recovery.`},{lang:"bash",code:`# Erro 6: "USB não monta automaticamente"
# Liste os dispositivos:
lsblk
# Encontre o pendrive (geralmente /dev/sdb1)

# Monte manual num ponto temporário:
sudo mkdir -p /mnt/usb
sudo mount /dev/sdb1 /mnt/usb
ls /mnt/usb

# Para desmontar (sempre antes de remover!):
sudo umount /mnt/usb`},{lang:"bash",code:`# Erro 7: "Mouse touchpad clicando sozinho"
# (palm rejection ruim em laptops)
# Instale o utilitário e desabilite tap-to-click:
sudo apt install xinput -y
xinput list
# Encontre o ID do touchpad, exemplo id=12
xinput set-prop 12 "libinput Tapping Enabled" 0`}],points:["Som mudo: reinicie pulseaudio/pipewire e verifique pavucontrol.","Wi-Fi some: restart no NetworkManager; placas Realtek precisam de modprobe.","Disco cheio: investigue com du; logs e cache do apt são suspeitos clássicos.","Tela travada: Ctrl+Alt+F3 → login → restart sddm — evita reset bruto.","dpkg interrompido: dpkg --configure -a + apt --fix-broken install resolve.","USB não monta: mount manual em /mnt/usb funciona sempre.","Iniciante comum: arrancar o pendrive sem desmontar — corrompe arquivos.","Iniciante comum: reinstalar o sistema inteiro por causa de erro pequeno listado aqui."],alerts:[{type:"tip",content:"Mantenha sempre 10% do disco livre, mínimo. Sistemas com partição cheia exibem erros aleatórios que parecem 'fantasmagóricos' mas têm causa banal."},{type:"warning",content:"Evite copiar e colar comandos sem entender. Esta FAQ é para você ler junto com o que aprendeu — não como receita mágica para qualquer problema parecido."},{type:"info",content:"O Ubuntu 26.04 LTS (e Lubuntu 26.04) usa PipeWire por padrão em vez de PulseAudio. Os comandos para gerenciar mudam um pouco — confira sua versão antes."},{type:"success",content:"Cada erro que você resolve sozinho é XP. Em seis meses você se descobre ajudando outros no fórum — esse é o momento em que o Linux 'clica' de vez."}]}],Pq=[{slug:"reviver-pc-antigo",section:"projetos",title:"Revivendo um PC antigo",difficulty:"iniciante",subtitle:"Transforme aquele notebook empoeirado em uma máquina útil de novo.",intro:`Quase todo mundo tem em casa um notebook ou desktop esquecido na gaveta. Aquele PC de 2010 com 2 GB de RAM e HD lento, que travava só de abrir o navegador no Windows. A boa notícia: o Lubuntu foi feito exatamente para esse tipo de máquina. Pense nele como uma "revisão completa de motor" — você troca o sistema pesado por um leve e a máquina volta a andar.

Esse projeto não é teoria: é o caso de uso mais comum do Lubuntu no Brasil. Escolas, ONGs, oficinas e gente em casa estão dando sobrevida a hardware que iria para o lixo eletrônico. Você economiza dinheiro, ajuda o planeta e ainda aprende Linux no processo. É ganha-ganha-ganha.

Aqui você vai juntar o que aprendeu nas seções anteriores (instalação, terminal, pacotes) e aplicar num projeto real do começo ao fim. O fluxo é: avaliar o hardware, fazer backup do que tem, instalar o Lubuntu, escolher apps leves, ajustar swap/zram e medir o resultado. Ao final, esse PC vai estar pronto para navegação, escritório, vídeos e até estudo.`,codes:[{lang:"bash",code:`# Antes de mais nada, descubra com o que você está lidando
# Rode num live USB do Lubuntu para inspecionar sem alterar nada

# Memória RAM total e disponível
free -h
# saída exemplo:
#                total        used        free
# Mem:           1.9Gi       420Mi       1.2Gi
# Swap:             0B          0B          0B

# CPU: modelo e núcleos
lscpu | grep -E "Model name|CPU\\(s\\):"
# Model name:  Intel(R) Atom(TM) CPU N270  @ 1.60GHz
# CPU(s):      2

# Disco e tamanho
lsblk -o NAME,SIZE,TYPE,MODEL`},{lang:"bash",code:`# Veja se o HD está saudável antes de gastar tempo instalando
sudo apt install smartmontools -y

# Substitua sda pelo seu disco (veja com lsblk)
sudo smartctl -H /dev/sda
# saída esperada:
# SMART overall-health self-assessment test result: PASSED

# Se aparecer FAILED, troque o disco antes de instalar`},{lang:"bash",code:`# Backup rápido dos arquivos importantes do Windows antigo
# Conecte um HD externo e copie tudo do Documentos/Imagens/Downloads

# Pelo terminal do live USB (mais confiável):
sudo mkdir -p /mnt/old /mnt/backup
sudo mount /dev/sda2 /mnt/old        # partição do Windows
sudo mount /dev/sdb1 /mnt/backup     # HD externo

# Copia preservando permissões e mostrando progresso
sudo rsync -avh --progress /mnt/old/Users/Fulano/Documents/ /mnt/backup/docs/`},{lang:"bash",code:`# Depois de instalar o Lubuntu (ver seção Instalação),
# ative zram para ganhar fôlego em máquinas com pouca RAM
sudo apt install zram-config -y

# Reinicie e confirme:
sudo systemctl status zram-config
zramctl
# saída exemplo:
# NAME       ALGORITHM DISKSIZE  DATA  COMPR
# /dev/zram0 lzo-rle    974.5M    0B     0B`},{lang:"bash",code:`# Reduza o "uso" do swap em disco (que é lento) priorizando RAM
echo 'vm.swappiness=10' | sudo tee /etc/sysctl.d/99-swappiness.conf
sudo sysctl --system
# saída: vm.swappiness = 10

# Em PCs antigos, isso evita que o sistema fique congelado
# trocando dados com o HD a cada janela aberta`},{lang:"bash",code:`# Instale só o essencial: navegador leve, escritório e mídia
sudo apt update
sudo apt install -y \\
    falkon abiword gnumeric \\
    vlc gpicview featherpad

# Remova o que vem grande e você não usa (opcional)
sudo apt remove --purge libreoffice* -y
sudo apt autoremove -y`},{lang:"bash",code:`# Meça o resultado depois de uns dias de uso
free -h           # quanta RAM sobra
uptime            # carga média do sistema
df -h /           # uso do disco

# Compare com o Windows antigo: tempo de boot, abrir navegador,
# digitar texto sem travar. A diferença costuma ser brutal.`}],points:["Antes de instalar, cheque RAM, CPU, disco e saúde do HD com smartctl.","Faça backup dos arquivos do sistema antigo direto pelo live USB do Lubuntu.","Ative zram-config: comprime parte da RAM e dá fôlego em máquinas com 1-2 GB.","Reduza vm.swappiness para 10 para evitar travamento por uso excessivo do swap em disco.","Escolha apps leves: Falkon, AbiWord, Gnumeric, VLC no lugar dos pesados.","Remova LibreOffice se você não precisa — economiza centenas de MB de espaço.","Iniciante comum: tentar rodar Chrome ou Discord pesado em PC com 2 GB e culpar o Lubuntu.","Iniciante comum: pular o teste SMART do disco e instalar num HD que vai morrer em uma semana."],alerts:[{type:"tip",content:"Se o PC tem HDD mecânico e você puder gastar R$ 100, troque por um SSD pequeno (120 GB). É o upgrade que mais transforma a experiência — mais que dobrar a RAM."},{type:"info",content:"Lubuntu roda confortavelmente em CPUs Atom, Celeron e Core 2 Duo a partir de 2008. Abaixo disso (Pentium 4, RAM DDR1), considere distros ainda mais leves como Puppy ou antiX."},{type:"warning",content:"Não jogue fora a etiqueta com a chave do Windows: ela pode valer dinheiro se você revender. E nada impede de manter dual boot por garantia (próximas seções)."},{type:"success",content:"Documente tudo: foto antes/depois, tempo de boot, apps instalados. Vira portfólio se você quiser ajudar outras pessoas (ou cobrar pelo serviço)."}]},{slug:"kiosk-quiosque",section:"projetos",title:"Modo quiosque (kiosk)",difficulty:"intermediario",subtitle:"Um PC que abre só uma aplicação em tela cheia, ideal para totens e recepções.",intro:`Você já viu aqueles totens em farmácia para tirar senha, ou o PC do consultório que só mostra o site de agendamento? Isso é um modo quiosque (kiosk): o computador liga, faz login automático e abre uma única aplicação ocupando a tela inteira. O usuário não vê área de trabalho, não acessa configurações, não sai do programa.

Lubuntu é uma escolha excelente para quiosques porque é leve (cabe em PC velho ou Raspberry Pi) e usa o LXQt, que dá controle fácil sobre login automático, autostart e atalhos bloqueados. Pense nele como um "modo apresentação permanente" do computador.

O fluxo é: criar um usuário dedicado para o quiosque, configurar login automático, fazer ele abrir o navegador (ou outra app) em tela cheia ao iniciar a sessão e bloquear teclas de escape. Se você quer um totem para mostrar cardápio, painel de horários, dashboard de loja ou um simples slideshow, esse capítulo te dá o caminho completo.`,codes:[{lang:"bash",code:`# Crie um usuário dedicado para o quiosque
sudo adduser kiosk
# (defina uma senha simples; ela quase nunca será digitada)

# Adicione o usuário aos grupos básicos
sudo usermod -aG audio,video,plugdev kiosk`},{lang:"bash",code:`# Configure login automático no SDDM (gerenciador de login do LXQt)
sudo mkdir -p /etc/sddm.conf.d
sudo tee /etc/sddm.conf.d/autologin.conf <<EOF
[Autologin]
User=kiosk
Session=Lubuntu.desktop
EOF

# Reinicie e o PC entra direto sem pedir senha
# saída ao reiniciar: vai pra área de trabalho do kiosk sozinho`},{lang:"bash",code:`# Crie o script que abre o navegador em modo quiosque
sudo -u kiosk mkdir -p /home/kiosk/bin
sudo -u kiosk tee /home/kiosk/bin/iniciar-kiosk.sh <<'EOF'
#!/bin/bash
# Espera o ambiente terminar de carregar
sleep 5

# Desabilita protetor de tela e suspensão
xset s off
xset -dpms
xset s noblank

# Abre o Firefox em modo quiosque, página fixa
firefox --kiosk https://exemplo.com.br
EOF

chmod +x /home/kiosk/bin/iniciar-kiosk.sh`},{lang:"ini",code:`# Arquivo: /home/kiosk/.config/autostart/kiosk.desktop
# Faz o script rodar automaticamente ao logar
[Desktop Entry]
Type=Application
Name=Kiosk
Exec=/home/kiosk/bin/iniciar-kiosk.sh
X-LXQt-Module=false
NoDisplay=true`},{lang:"bash",code:`# Bloqueie atalhos perigosos do Openbox (Ctrl+Alt+T, Alt+F4)
sudo -u kiosk mkdir -p /home/kiosk/.config/openbox
sudo -u kiosk cp /etc/xdg/openbox/lxqt-rc.xml \\
                /home/kiosk/.config/openbox/lxqt-rc.xml

# Edite com nano e remova ou comente os <keybind> indesejados
nano /home/kiosk/.config/openbox/lxqt-rc.xml
# Procure por Ctrl-Alt-T, Super-E, etc. e apague o bloco`},{lang:"bash",code:`# Esconda o painel inferior do LXQt para visual de totem
# Edite o panel.conf
nano /home/kiosk/.config/lxqt/panel.conf
# Mude:
# hidable=true
# visible-margin=0

# Reinicie a sessão e o painel some até o mouse encostar embaixo`},{lang:"bash",code:`# Para auditoria, registre quando o quiosque iniciou e parou
echo "iniciado em $(date)" >> /home/kiosk/kiosk.log
# saída no arquivo:
# iniciado em qua 12 mar 2025 09:12:33 -03

# Combinado com cron, dá para reiniciar o PC toda madrugada:
sudo crontab -e
# adicione:  0 4 * * * /sbin/shutdown -r now`}],points:["Crie sempre um usuário separado (kiosk) — nunca use seu login pessoal no totem.","Login automático no SDDM elimina a tela de senha entre o boot e a aplicação.","xset s off e xset -dpms desativam protetor de tela e suspensão — essencial para totem.","Firefox e Chromium têm o flag --kiosk pronto: tela cheia, sem barra, sem menus.","Coloque um sleep no início do script para esperar a sessão carregar antes de abrir o app.","Bloqueie atalhos do Openbox (lxqt-rc.xml) para o usuário não escapar do quiosque.","Iniciante comum: testar como root e esquecer que o usuário kiosk não tem permissão pra um arquivo.","Iniciante comum: deixar o painel visível e aparecer ícone do menu LXQt no canto inferior do totem."],alerts:[{type:"warning",content:"Quiosque não substitui antivírus de uso. Se o navegador puder ir para qualquer URL, alguém vai testar. Restrinja com extensão whitelist ou um proxy local."},{type:"tip",content:"Para conteúdo offline (slideshow de fotos, vídeo institucional), use feh --slideshow ou mpv --loop em tela cheia em vez do navegador. Bem mais leve."},{type:"info",content:"O Raspberry Pi 4 com Lubuntu 64-bit roda quiosque tranquilamente. Combinação ótima para totens em loja, custando menos de R$ 500 com tela."},{type:"danger",content:"Nunca use o usuário do quiosque com sudo configurado sem senha. Se alguém escapar do navegador, ganha acesso total à máquina."}]},{slug:"midia-center-htpc",section:"projetos",title:"Media center (HTPC) com Kodi",difficulty:"intermediario",subtitle:"Transforme um PC velho em central de filmes e séries para a TV.",intro:`Um HTPC (Home Theater PC) é um computador conectado à TV da sala que serve filmes, séries, fotos e música através de um controle remoto. Antes existia o Apple TV e o Chromecast, mas eles dependem de assinatura. Com Lubuntu + Kodi você monta o seu, com a sua biblioteca, sem mensalidade. É como ter um Netflix particular dos seus arquivos.

Kodi é um media center open source que roda em quase tudo: PC, Raspberry Pi, Android. Ele organiza filmes por capa, baixa metadados, lê legendas, toca vídeo, música e até serve como front-end para canais de TV. A interface foi feita para ser usada de longe, com controle remoto ou celular.

Neste capítulo você vai instalar Kodi no Lubuntu, configurar a saída HDMI da TV, mapear suas pastas de mídia, instalar add-ons de legendas e deixar o sistema bootando direto no Kodi em tela cheia. Resultado: liga o PC, aparece a interface azul do Kodi, escolhe o filme com o controle. Sua família vai amar.`,codes:[{lang:"bash",code:`# Instale o Kodi pelo repositório oficial do Ubuntu
sudo apt update
sudo apt install kodi -y

# Versão instalada:
kodi --version
# saída: 19.5 Matrix (ou superior)`},{lang:"bash",code:`# Saída de vídeo: garanta que o HDMI está sendo detectado
xrandr | grep " connected"
# saída exemplo:
# HDMI-1 connected primary 1920x1080+0+0 ...

# Force resolução 1080p se a TV detectar mal
xrandr --output HDMI-1 --mode 1920x1080`},{lang:"bash",code:`# Áudio: mande o som pelo HDMI da TV
# Liste as saídas de áudio disponíveis
pactl list short sinks
# saída exemplo:
# 0  alsa_output.pci-0000_00_03.0.hdmi-stereo  ...

# Defina como padrão
pactl set-default-sink alsa_output.pci-0000_00_03.0.hdmi-stereo`},{lang:"bash",code:`# Crie pastas de mídia organizadas (na sua HOME ou num HD externo)
mkdir -p ~/Midia/{Filmes,Series,Musica,Fotos}

# Mova ou aponte os arquivos para lá
# Dentro do Kodi: Settings > Media > Library > Videos > Add videos
# Aponte para ~/Midia/Filmes e marque "This directory contains: Movies"
# O Kodi vai baixar capas e sinopse sozinho`},{lang:"bash",code:`# Para ligar o PC e cair direto no Kodi (sem desktop):
# Crie sessão personalizada Kodi
sudo tee /usr/share/xsessions/kodi.desktop <<EOF
[Desktop Entry]
Name=Kodi
Comment=Media Center
Exec=kodi-standalone
Type=Application
EOF

# E configure autologin do SDDM para essa sessão
sudo tee /etc/sddm.conf.d/kodi-autologin.conf <<EOF
[Autologin]
User=$USER
Session=kodi.desktop
EOF`},{lang:"bash",code:`# Controle pelo celular (recomendado): instale o app "Kore"
# Dentro do Kodi: Settings > Services > Control
# Ative "Allow remote control via HTTP"
# Porta padrão: 8080
# Usuário: kodi (deixe sem senha em rede de casa só)

# Descubra o IP do HTPC para configurar o app
ip a | grep "inet " | grep -v 127.0
# saída exemplo:
# inet 192.168.1.50/24 brd ...`},{lang:"bash",code:`# Legendas em português automáticas
# Dentro do Kodi: Add-ons > Install from repository
#   > Subtitles > OpenSubtitles.org ou Legendas.TV
# Configure idioma preferencial: Portuguese (Brazil)
# Atalho durante filme: T abre o menu de legendas`}],points:["Kodi é gratuito, open source e roda em qualquer máquina com Lubuntu instalado.","Use HDMI para áudio e vídeo num cabo só — pactl ajusta a saída se o sistema errar.","Organize mídia em pastas claras (Filmes, Series) — Kodi precisa disso pra baixar capas.","kodi-standalone é uma sessão própria que dispensa a área de trabalho do LXQt.","Controle pelo celular com o app Kore (oficial) é mais prático que controle físico.","Add-ons de legendas (OpenSubtitles, Legendas.TV) buscam .srt automaticamente.","Iniciante comum: jogar mídia em pasta com nomes confusos — Kodi não acha 'Vingadores BR DUB cam'.","Iniciante comum: usar add-ons piratas e pegar malware ou IP bloqueado pelo provedor."],alerts:[{type:"danger",content:"Nunca instale repositórios de add-ons piratas (filmes grátis online). A maioria contém malware ou viola a lei. Use só conteúdo que você possui ou serviços oficiais."},{type:"tip",content:"Se a TV tem só 720p ou é antiga, considere usar o LibreELEC (sistema enxuto só para Kodi) num Raspberry Pi 4. Boot em 15 segundos, ventilador silencioso."},{type:"info",content:"Kodi não é só para vídeo: tem add-on para rádio online, podcasts, fotos do Google, previsão do tempo. Vira central de informação da casa."},{type:"warning",content:"Áudio pelo HDMI às vezes some depois de suspender. Solução: desabilitar suspensão automática (xset -dpms) ou reiniciar o pulseaudio com pulseaudio -k."}]},{slug:"servidor-domestico",section:"projetos",title:"Servidor doméstico de arquivos",difficulty:"intermediario",subtitle:"Um PC velho que vira nuvem da casa, acessível por todos os dispositivos.",intro:`Você já viu serviços como Google Drive ou Dropbox: pastas que sincronizam entre celular, notebook e desktop. A versão "faça você mesmo" disso é ter um servidor doméstico — um computador sempre ligado dentro de casa que guarda os arquivos da família e os disponibiliza pela rede Wi-Fi. É como ter um pen drive gigante que toda casa enxerga ao mesmo tempo.

A vantagem é privacidade total (nada vai para servidor de empresa estrangeira) e custo zero depois do hardware. Você usa um PC velho que ficaria parado, instala Lubuntu, configura compartilhamento via Samba (que o Windows enxerga nativo) e SSH para acessar de longe. Em pouco tempo está pronto.

Neste capítulo vamos montar isso passo a passo: preparar o disco para guardar mídia, ativar Samba para que celular e Windows vejam as pastas, configurar SSH para acesso remoto, e dar o toque final com Syncthing para sincronização tipo Dropbox. Tudo rodando num PC consumindo menos energia que uma lâmpada acesa.`,codes:[{lang:"bash",code:`# Adicione um HD/SSD dedicado para os arquivos (recomendado)
# Veja qual é com lsblk
lsblk
# saída exemplo:
# sdb      1.8T disk
# └─sdb1   1.8T part /mnt/dados

# Formate (se for novo) — CUIDADO, apaga tudo!
sudo mkfs.ext4 -L dados /dev/sdb1

# Crie o ponto de montagem e edite /etc/fstab
sudo mkdir -p /mnt/dados
echo 'LABEL=dados /mnt/dados ext4 defaults 0 2' | sudo tee -a /etc/fstab
sudo mount -a`},{lang:"bash",code:`# Instale e configure o Samba para compartilhar com Windows/Android
sudo apt install samba -y

# Crie pasta de família com permissão para o seu usuário
sudo mkdir -p /mnt/dados/familia
sudo chown -R $USER:$USER /mnt/dados/familia

# Adicione seu usuário ao Samba (senha pode ser diferente do login)
sudo smbpasswd -a $USER`},{lang:"ini",code:`# Edite /etc/samba/smb.conf e adicione no final:
[familia]
   path = /mnt/dados/familia
   browseable = yes
   read only = no
   valid users = @sambashare
   create mask = 0664
   directory mask = 0775

# Salve e reinicie o serviço:
# sudo systemctl restart smbd`},{lang:"bash",code:`# No Windows, abra o Explorer e digite na barra de endereço:
# \\\\nome-do-servidor   (ou \\\\IP)
# Vai aparecer a pasta familia. Insira usuário e senha do smbpasswd.

# No Android, instale o "X-plore" ou "Solid Explorer"
# e adicione conexão SMB com o IP do servidor.

# Descubra o IP da máquina:
hostname -I
# saída: 192.168.1.30`},{lang:"bash",code:`# SSH para administrar o servidor sem precisar de teclado/monitor
sudo apt install openssh-server -y
sudo systemctl enable --now ssh

# Confirme que está escutando
sudo ss -tlnp | grep :22
# saída: LISTEN 0  128  0.0.0.0:22  ...

# Do seu notebook:
ssh seuuser@192.168.1.30
# digite a senha e está dentro`},{lang:"bash",code:`# Syncthing: sincronização tipo Dropbox entre dispositivos
# Adicione o repositório oficial
sudo curl -o /usr/share/keyrings/syncthing-archive-keyring.gpg \\
    https://syncthing.net/release-key.gpg
echo "deb [signed-by=/usr/share/keyrings/syncthing-archive-keyring.gpg] https://apt.syncthing.net/ syncthing stable" | \\
    sudo tee /etc/apt/sources.list.d/syncthing.list

sudo apt update && sudo apt install syncthing -y

# Habilite para o seu usuário:
systemctl --user enable --now syncthing.service

# Painel: http://localhost:8384 (no servidor)`},{lang:"bash",code:`# Para acessar de fora de casa (cuidado!), use VPN ao invés de
# abrir porta no roteador. Tailscale é a solução fácil:
curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up
# Abre uma URL para você logar com Google/email
# Pronto: o servidor ganha um IP privado tipo 100.64.x.x
# acessível de qualquer dispositivo com Tailscale instalado`}],points:["Use HD dedicado em /mnt/dados — separa sistema de arquivos pessoais para fácil reinstalação.","Samba é o jeito mais compatível de compartilhar: Windows, Mac, Android e iOS enxergam.","smbpasswd cria senha do Samba separada do login Linux — anote em lugar seguro.","SSH é seu controle remoto: administre o servidor de qualquer canto da casa.","Syncthing replica pastas entre dispositivos sem servidor central — privacidade total.","Para acesso fora de casa, prefira VPN (Tailscale, WireGuard) a abrir portas no roteador.","Iniciante comum: deixar o servidor com IP dinâmico e perder o endereço quando o roteador reinicia.","Iniciante comum: não fazer backup do próprio servidor e perder tudo quando o HD pifa."],alerts:[{type:"warning",content:"Um servidor sem backup é uma bomba relógio. Configure um segundo HD com Timeshift ou rsync programado, ou um disco offline para backup mensal."},{type:"tip",content:"Reserve IP fixo para o servidor no roteador (DHCP reservation). Assim ele sempre será 192.168.1.30 (ou o que você escolher), facilitando atalhos."},{type:"danger",content:"Nunca abra a porta 22 (SSH) ou 445 (Samba) direto na internet. Use Tailscale ou WireGuard. Bots fazem milhares de tentativas de invasão por hora."},{type:"info",content:"PC consumindo 25W ligado 24h gasta cerca de R$ 12 a R$ 18 por mês de energia no Brasil. Mais barato que qualquer plano de nuvem com 1 TB."}]},{slug:"usb-persistente",section:"projetos",title:"Lubuntu portátil em pen drive",difficulty:"intermediario",subtitle:"Carregue seu sistema completo, com programas e arquivos, no bolso.",intro:`Imagine ter o seu Linux completo num pen drive: senha, programas, papel de parede, arquivos. Você pluga em qualquer PC do mundo, dá boot e está em casa. É como aquele kit de viagem com tudo separadinho: sai do hotel com a mala pronta. Esse é o conceito de live USB persistente.

Diferente do live USB comum (que esquece tudo ao desligar), o persistente reserva um espaço no pen drive para guardar configurações, programas instalados e arquivos. Ideal para quem usa PCs públicos (lan house, biblioteca, casa de parente) sem querer deixar rastro.

Existem dois caminhos: usar o próprio Lubuntu live com persistência (mais simples) ou instalar um Lubuntu completo dentro do pen drive (mais flexível, parece um PC normal). Vamos ver os dois. Você precisa de um pen drive bom — o vagabundo de R$ 20 vai morrer rápido com tanta escrita. Recomendado SanDisk, Kingston, Samsung de pelo menos 32 GB, idealmente USB 3.0.`,codes:[{lang:"bash",code:`# Caminho 1: Live USB persistente com mkusb (mais fácil)
sudo add-apt-repository ppa:mkusb/ppa -y
sudo apt update
sudo apt install --install-recommends mkusb mkusb-nox usb-pack-efi -y

# Abra a interface gráfica
sudo mkusb
# Escolha "Install (make a boot device)" > "Persistent live"
# Selecione o ISO do Lubuntu e o pen drive`},{lang:"bash",code:`# Caminho 2: instalação completa direto no pen drive
# Boote pelo live USB do Lubuntu (com OUTRO pen drive)
# No instalador Calamares:
# 1. Quando perguntar do disco, escolha o pen drive (cuidado!)
# 2. Particionamento manual:
#    - 4 GB swap
#    - 28 GB ext4 em / (raiz)
# 3. IMPORTANTE: instale o GRUB no pen drive, não no HD interno!

# Confirme com lsblk antes de prosseguir
lsblk
# sda = HD interno (NÃO mexer)
# sdb = pen drive (instalar aqui)`},{lang:"bash",code:`# Reduza desgaste do pen drive: mude a partição raiz para usar
# noatime (não atualizar timestamp a cada leitura)
sudo nano /etc/fstab
# Mude:
# UUID=xxx / ext4 errors=remount-ro 0 1
# Para:
# UUID=xxx / ext4 noatime,errors=remount-ro 0 1

sudo mount -o remount /
findmnt /
# saída deve incluir noatime entre as opções`},{lang:"bash",code:`# Mantenha logs em RAM (não escreve no pen drive toda hora)
sudo apt install log2ram -y

# Edite /etc/log2ram.conf se quiser ajustar tamanho:
# SIZE=128M  → ajuste conforme RAM disponível

sudo systemctl enable --now log2ram
df -h /var/log
# saída: tmpfs   128M   ...`},{lang:"bash",code:`# Crie o usuário com senha forte (PC alheio = risco maior)
# Já feito na instalação, mas você pode trocar:
passwd

# Habilite criptografia da pasta /home (faça ANTES de usar muito)
# Pelo Calamares, na instalação, marque "encrypt my home folder"
# Caso já tenha instalado, é mais fácil reinstalar com a opção ativa`},{lang:"bash",code:`# Teste em PCs diferentes: BIOS antiga e UEFI moderna
# Boot menu costuma ser:
# F12 (Dell, Lenovo)
# F10 (HP)
# F2 ou Esc (Acer)
# Option (Mac com Intel)

# Na BIOS, desative "Secure Boot" se aparecer mensagem de erro
# (em PC pessoal — não mexa em PC de trabalho/escola)`},{lang:"bash",code:`# Backup do pen drive: faça uma imagem completa de tempos em tempos
# Plugue num PC e descubra o nome do pen
lsblk

# Crie imagem (vai ocupar o tamanho TOTAL do pen, mesmo que só 30% usado)
sudo dd if=/dev/sdb of=~/backup-pendrive.img bs=4M status=progress
# Pra restaurar:
# sudo dd if=~/backup-pendrive.img of=/dev/sdb bs=4M status=progress`}],points:["Pen drive persistente guarda configurações entre boots, diferente do live USB normal.","mkusb cria persistência sem precisar instalar — mais rápido para começar.","Instalação completa no pen drive funciona como PC normal mas é mais sensível a desgaste.","Use pen drives bons (SanDisk Ultra, Samsung Bar) e USB 3.0 para velocidade aceitável.","noatime no fstab e log2ram reduzem escrita e prolongam vida do pen drive.","Tecla de boot menu varia por fabricante: F12, F10, F2, Esc — anote a do seu PC.","Iniciante comum: instalar e perceber que o GRUB foi para o HD do PC alheio.","Iniciante comum: usar pen drive de R$ 20 e ele queimar em duas semanas de uso."],alerts:[{type:"danger",content:"Atenção tripla na hora de escolher o disco no instalador. Se errar e marcar o HD interno, formata o sistema do dono do PC. Sempre use lsblk antes."},{type:"warning",content:"Pen drives gastam por escrita. Mesmo um SanDisk bom vai cansar em 2-3 anos de uso diário. Faça backup do conteúdo do pen periodicamente."},{type:"tip",content:"Para uso muito intenso, prefira um SSD externo USB-C. Custa um pouco mais, mas dura 10x mais e voa em comparação ao pen drive comum."},{type:"info",content:"Macs com chip Apple Silicon (M1/M2/M3) NÃO bootam Lubuntu por pen drive. Funciona apenas em Macs Intel com Secure Boot desativado."}]},{slug:"sala-de-aula",section:"projetos",title:"Sala de aula com Lubuntu",difficulty:"intermediario",subtitle:"Equipando uma sala inteira com PCs reaproveitados e software educacional.",intro:`Escolas públicas e ONGs no Brasil têm um problema crônico: PCs antigos, doados, com Windows pirata travando. Lubuntu resolve isso elegantemente — mesmo um Pentium 4 de 2005 com 1 GB de RAM consegue rodar navegador, editor de texto e ferramentas educativas. Pense numa "sala de aula em caixa": instalou uma vez, replica em todas as máquinas, professor controla tudo de uma só estação.

Esse capítulo agrupa o conhecimento de várias seções anteriores num projeto pedagógico real. O fluxo é: preparar uma máquina modelo (golden image), clonar para todas as outras, configurar usuários separados para alunos, instalar suite educacional (GCompris, KGeography, Tux Math, Scratch) e dar ao professor uma forma de monitorar telas e enviar arquivos.

Vamos ver também práticas básicas de manutenção: snapshot do estado limpo (Timeshift) para reverter quando aluno destrói config, restrição de instalação de programas, bloqueio de sites adultos com filtro DNS. No final, você sai com um manual de implantação que serve para escola pequena, ONG, telecentro ou laboratório universitário.`,codes:[{lang:"bash",code:`# 1) Prepare a "máquina modelo" (golden image) com tudo configurado
# Instale Lubuntu padrão e adicione o pacotão educacional
sudo apt update
sudo apt install -y \\
    gcompris-qt kgeography ktouch tuxmath tuxpaint \\
    scratch stellarium kalzium kalgebra \\
    libreoffice-l10n-pt-br thunderbird firefox-locale-pt`},{lang:"bash",code:`# 2) Crie usuário "aluno" com perfil padrão para clonar
sudo adduser aluno
# Defina senha simples (ex: aluno123) — vai ser trocada por aluno

# Configure papel de parede, ícones, navegador como gostaria que
# todo aluno encontrasse na primeira vez. Tudo dentro de /home/aluno

# Depois, salve esse perfil como modelo:
sudo cp -a /home/aluno /etc/skel.aluno`},{lang:"bash",code:`# 3) Snapshot do sistema completo com Timeshift
sudo apt install timeshift -y
sudo timeshift --create --comments "modelo limpo sala 1" --tags D
# saída: Snapshot saved successfully

# Aluno bagunçou? Restaure em 5 minutos:
# sudo timeshift --restore --snapshot '<nome-do-snapshot>'`},{lang:"bash",code:`# 4) Clone para outras máquinas com Clonezilla (USB bootável)
# Boote pelo live USB do Clonezilla na máquina modelo
# Escolha: device-image > local_dev > save_disk
# Salve a imagem em HD externo

# Em cada PC novo, boote o Clonezilla e:
# device-image > local_dev > restoredisk
# Em 10-15 minutos cada PC fica idêntico ao modelo`},{lang:"bash",code:`# 5) Filtro de conteúdo: DNS pedagógico (bloqueia sites adultos)
# OpenDNS Family Shield é gratuito
sudo nmcli con mod "Conexão cabeada 1" \\
    ipv4.dns "208.67.222.123 208.67.220.123"
sudo nmcli con mod "Conexão cabeada 1" ipv4.ignore-auto-dns yes
sudo nmcli con up "Conexão cabeada 1"

# Testa: deve dar bloqueio
nslookup pornhub.com
# resposta deve ser 0.0.0.0 ou redirecionamento`},{lang:"bash",code:`# 6) Estação do professor controla a sala com Veyon
sudo apt install veyon-master veyon-service -y

# No PC do professor: veyon-configurator > Master
# Nos PCs dos alunos: veyon-configurator > Service
# Adicione o IP de cada PC aluno na lista do master

# Recursos: ver miniaturas das telas, bloquear todas, mostrar tela
# do prof em projetor, enviar mensagem em massa, encerrar sessão`},{lang:"bash",code:`# 7) Reset diário automático: limpa a HOME do aluno toda madrugada
sudo crontab -e
# Adicione:
# 0 3 * * * rsync -a --delete /etc/skel.aluno/ /home/aluno/

# Manhã seguinte, aluno entra com perfil zerado
# (avise os alunos para salvar arquivos no pen drive!)`}],points:["Pacote gcompris-qt + kgeography + tuxmath + scratch é a base educacional gratuita do Linux.","Crie um perfil 'aluno' modelo e use /etc/skel para replicar em novos usuários.","Timeshift permite reverter qualquer bagunça do aluno em 5 minutos, sem reinstalar.","Clonezilla replica disco inteiro entre PCs idênticos em 10-15 minutos cada.","DNS do OpenDNS Family Shield bloqueia gratuitamente conteúdo adulto.","Veyon dá ao professor controle visual da sala: miniaturas, bloqueio, transmissão.","Iniciante comum: deixar senha de admin igual em todos os PCs e algum aluno descobrir.","Iniciante comum: não avisar os alunos do reset diário e perderem o trabalho da véspera."],alerts:[{type:"tip",content:"Faça uma 'cartilha do laboratório' impressa: papel de parede mostra senha do Wi-Fi, regras básicas (não trocar fundo, salvar em pen drive), nome do responsável."},{type:"info",content:"Para escolas públicas no Brasil, o programa LE (Linux Educacional) já vinha pronto baseado em Ubuntu/Lubuntu. Vale conferir versões recentes e suas customizações."},{type:"warning",content:"Antes de aplicar filtro DNS, avise os professores: alguns sites úteis (YouTube educacional, redes sociais para projetos) podem cair na rede automaticamente."},{type:"success",content:"Documente tudo no GitHub ou em pasta compartilhada: scripts, ISO modelo, configurações Veyon. Outros voluntários podem replicar o projeto em outras escolas."}]}],Rq=[{slug:"lxqt-sob-capo",section:"avancado",title:"LXQt sob o capô",difficulty:"avancado",subtitle:"Como as peças do desktop se encaixam por baixo da interface.",intro:"Até agora você usou o LXQt clicando, arrastando e configurando pelas janelinhas bonitas. Mas, por baixo dessa casquinha amigável, existem vários programas separados conversando entre si. Pense num restaurante: você só vê o garçom trazendo o prato, mas na cozinha tem o cozinheiro, o ajudante, o lavador de louça, o gerente. Cada um faz uma coisa, e se um sair de férias o restaurante muda de jeito.\n\nO LXQt é exatamente assim. Ele não é um programa único, gigante, como o GNOME ou o KDE Plasma. É um conjunto de pequenos programas independentes que se combinam: o painel é o `lxqt-panel`, o gerenciador de janelas (quem desenha as bordas e move as janelas) costuma ser o `openbox`, o gerenciador de arquivos é o `pcmanfm-qt`, as notificações são do `lxqt-notificationd`, e por aí vai. Você pode trocar qualquer peça sem refazer o resto.\n\nEsse design tem dois efeitos importantes para você. Primeiro: o sistema fica leve, porque você só carrega o que precisa. Segundo: quando algo dá errado, dá para identificar exatamente quem é o culpado. Travou só o painel? Reinicia o painel sozinho. Janela sumiu mas o cursor anda? Provavelmente é o gerenciador de janelas, não o LXQt inteiro.\n\nNeste capítulo você vai abrir o capô, ver os principais processos rodando, descobrir os arquivos de configuração no `~/.config/lxqt/`, aprender a reiniciar uma peça sem desligar o computador e entender as variáveis de ambiente que o desktop usa. Não é assustador: depois você vai sentir que entende o que está acontecendo, em vez de só clicar e torcer.",codes:[{lang:"bash",code:`# Veja quais processos do LXQt estão rodando agora
ps -ef | grep -E "lxqt|openbox|pcmanfm" | grep -v grep
# saída (resumida):
# voce  1234  ...  /usr/bin/lxqt-session
# voce  1245  ...  /usr/bin/openbox --config-file ...
# voce  1260  ...  /usr/bin/lxqt-panel
# voce  1275  ...  /usr/bin/pcmanfm-qt --desktop`},{lang:"bash",code:`# A pasta de configuração do LXQt fica no seu home
ls ~/.config/lxqt/
# saída:
# lxqt.conf  panel.conf  session.conf  notifications.conf  globalkeyshortcuts.conf

# Cada arquivo é um .ini simples — dá para abrir no editor
nano ~/.config/lxqt/panel.conf
# Procure por [General] e veja position=bottom, iconSize=22, etc.`},{lang:"ini",code:`# Trecho típico de ~/.config/lxqt/panel.conf
[General]
panels=panel1

[panel1]
alignment=-1            # -1 esquerda, 0 centro, 1 direita
position=bottom         # bottom, top, left, right
iconSize=22             # tamanho dos ícones em pixels
panelSize=32            # altura/largura do painel
plugins=mainmenu, quicklaunch, taskbar, tray, clock`},{lang:"bash",code:`# Reiniciar uma peça sem deslogar — útil quando trava
# 1) Reiniciar só o painel:
killall lxqt-panel && lxqt-panel &
# saída: (o painel some por meio segundo e volta)

# 2) Reiniciar o gerenciador de janelas Openbox:
openbox --restart
# Bordas e atalhos recarregam, janelas continuam abertas.

# 3) Reiniciar a sessão inteira (último recurso, fecha apps):
loginctl terminate-user $USER`},{lang:"bash",code:`# Variáveis de ambiente importantes do desktop
echo $XDG_CURRENT_DESKTOP   # → LXQt
echo $XDG_SESSION_TYPE      # → x11   (ou wayland, se você mudou)
echo $DESKTOP_SESSION       # → lxqt
echo $DISPLAY               # → :0     (a tela onde o desktop está)

# Programas usam essas variáveis para se comportar diferente
# em cada desktop. Não mude a menos que saiba o que está fazendo.`},{lang:"bash",code:`# Ver logs da sessão atual do LXQt
journalctl --user -b 0 | grep -i lxqt | tail -20
# saída: linhas com horário e mensagem de cada componente
# Útil quando algo "não abre" e você quer saber por quê.`}],points:["LXQt é um conjunto de programas pequenos (painel, WM, notificador, gerenciador de arquivos) — não um bloco único.","O gerenciador de janelas padrão é o Openbox; o painel é o lxqt-panel; o gerenciador de arquivos é o pcmanfm-qt.","Configurações ficam em ~/.config/lxqt/ como arquivos .ini de leitura simples.","Você pode reiniciar uma peça (killall lxqt-panel && lxqt-panel &) sem fechar suas janelas.","openbox --restart recarrega atalhos e tema sem perder nada do que está aberto.","Variáveis como XDG_CURRENT_DESKTOP e DISPLAY contam ao app em qual desktop ele está rodando.",'journalctl --user mostra os logs da sessão; comece por ali quando algo "não funciona".',"Iniciante comum: editar panel.conf com o painel rodando — o LXQt sobrescreve ao fechar. Edite com o painel parado.","Iniciante comum: confundir lxqt-session (o orquestrador) com lxqt-panel (a barra) e matar o errado."],alerts:[{type:"warning",content:"Antes de mexer em qualquer arquivo dentro de ~/.config/lxqt/, faça uma cópia: cp panel.conf panel.conf.bak. Se quebrar tudo, basta restaurar."},{type:"info",content:"Se você matar o lxqt-session, o desktop inteiro fecha (volta para a tela de login). Os outros componentes morrem junto, é o pai deles."},{type:"tip",content:"Quer trocar o gerenciador de janelas? Edite ~/.config/lxqt/session.conf, na seção [General], window_manager=kwin_x11 (ou outro). Saia e entre na sessão para aplicar."},{type:"danger",content:"Não rode programas do LXQt com sudo (ex: sudo lxqt-panel). Isso bagunça permissões dos arquivos de config e cria erros chatos de resolver."}]},{slug:"scripts-shell-uteis",section:"avancado",title:"Scripts de shell úteis",difficulty:"intermediario",subtitle:"Automatizando tarefas chatas com poucas linhas de Bash.",intro:"Imagine que toda segunda-feira você abre o terminal e digita as mesmas seis coisas: atualizar pacotes, limpar a lixeira, fazer backup da pasta Documentos, mostrar o espaço em disco. É como escovar dente: necessário, mas chato. Um script de shell é um arquivo de texto onde você guarda esses comandos em ordem, salva com um nome (`segunda.sh`) e roda com uma linha só. O computador faz a parte chata, você bebe seu café.\n\nBash é a linguagem dos scripts no Lubuntu. É a mesma língua que você fala com o terminal: cada linha do script é como se você tivesse digitado e apertado Enter. Mas o script ganha super-poderes: variáveis, condições (`if`), loops (`for`), funções. Tudo o que você precisa para automatizar 90% das tarefas do dia a dia.\n\nQuem nunca escreveu script tem medo, mas a verdade é que os úteis são curtos. Um backup decente cabe em 10 linhas. Um lembrete diário, em 3. Um script que abre seu ambiente de trabalho (terminal + editor + navegador), em 5. A regra é: começar pequeno, salvar em `~/bin/` ou `~/.local/bin/` para ficar disponível como qualquer comando, e ir melhorando conforme aprende.\n\nNeste capítulo você aprende a estrutura mínima de um script (`#!/bin/bash`, permissão de execução), variáveis, leitura de input, condições simples, loops em arquivos e algumas receitas prontas que dá para copiar, colar e adaptar para sua rotina. Bem-vindo ao clube dos preguiçosos produtivos.",codes:[{lang:"bash",code:`# Crie sua pasta pessoal de scripts e adicione ao PATH
mkdir -p ~/.local/bin

# Verifique se já está no PATH
echo $PATH | grep -q "$HOME/.local/bin" && echo "ok" || echo "adicione manualmente"

# Se "adicione manualmente", coloque no final do ~/.bashrc:
# export PATH="$HOME/.local/bin:$PATH"
# Depois: source ~/.bashrc`},{lang:"bash",code:`# Estrutura mínima de um script — arquivo: ~/.local/bin/ola
#!/bin/bash
# A primeira linha (shebang) diz qual interpretador usar.

nome="\${1:-mundo}"   # $1 é o primeiro argumento; se vazio, usa "mundo"
echo "Olá, $nome!"

# Torne executável e rode
chmod +x ~/.local/bin/ola
ola              # → Olá, mundo!
ola Bruno        # → Olá, Bruno!`},{lang:"bash",code:`# Backup rápido de uma pasta — arquivo: ~/.local/bin/backup-docs
#!/bin/bash
set -euo pipefail   # falha cedo: erro/variavel-vazia/pipe quebrado

origem="$HOME/Documentos"
destino="$HOME/backups"
data=$(date +%Y-%m-%d)              # ex: 2025-01-30
arquivo="$destino/docs-$data.tar.gz"

mkdir -p "$destino"
tar -czf "$arquivo" -C "$HOME" Documentos
echo "Backup salvo em $arquivo"
# saída: Backup salvo em /home/voce/backups/docs-2025-01-30.tar.gz`},{lang:"bash",code:`# Atualizar o sistema com confirmação — arquivo: ~/.local/bin/atualizar
#!/bin/bash
echo "Vou atualizar o sistema. Continuar? (s/N)"
read -r resposta
if [[ "$resposta" == "s" || "$resposta" == "S" ]]; then
    sudo apt update && sudo apt upgrade -y && sudo apt autoremove -y
    echo "Pronto."
else
    echo "Cancelado."
fi`},{lang:"bash",code:`# Loop: renomear todas as fotos de uma pasta com data atual
#!/bin/bash
cd ~/Imagens || exit 1
contador=1
for arquivo in *.jpg; do
    # nome novo: 2025-01-30_001.jpg, 2025-01-30_002.jpg ...
    novo=$(printf "%s_%03d.jpg" "$(date +%F)" "$contador")
    mv -- "$arquivo" "$novo"
    contador=$((contador + 1))
done
echo "Renomeei $((contador - 1)) arquivos."`},{lang:"bash",code:`# Mini menu interativo — arquivo: ~/.local/bin/menu
#!/bin/bash
echo "1) Espaço em disco"
echo "2) Memória livre"
echo "3) IP da máquina"
read -rp "Escolha: " op
case "$op" in
    1) df -h / ;;
    2) free -h ;;
    3) hostname -I ;;
    *) echo "Opção inválida" ;;
esac`},{lang:"bash",code:`# Verificar a saúde dos seus scripts com shellcheck
sudo apt install shellcheck -y
shellcheck ~/.local/bin/backup-docs
# Mostra dicas de segurança e bugs antes de você cair neles.`}],points:["Todo script começa com #!/bin/bash (shebang) e precisa de chmod +x para virar executável.","~/.local/bin é o lugar pessoal para guardar seus scripts; já entra no PATH na maioria dos sistemas.","set -euo pipefail no topo evita que erros silenciosos quebrem o script no meio.","$1, $2... são os argumentos passados na linha de comando; ${1:-padrão} usa um valor se vazio.",'Sempre coloque variáveis entre aspas duplas ("$var") para sobreviver a espaços e caracteres estranhos.',"for, if, case e read cobrem 90% da automação; comece com eles antes de partir para coisas exóticas.","shellcheck encontra bugs e más práticas antes de você rodar o script — vale instalar.",'Iniciante comum: esquecer o chmod +x e ficar tentando entender por que "comando não encontrado".',"Iniciante comum: copiar script da internet com sudo cego — leia antes de executar com privilégios."],alerts:[{type:"danger",content:"Nunca rode scripts baixados sem ler. Um script com sudo rm -rf / passa em 0.3 segundos. Abra no editor, leia, e só depois execute."},{type:"tip",content:"Coloque um cabeçalho de comentário em cada script: o que faz, quem escreveu e a data. Daqui a um ano, o seu eu do futuro vai te agradecer."},{type:"info",content:"Para rodar um script automaticamente todo dia, agende com cron (visto na seção Manutenção) ou systemd timer."},{type:"warning",content:"Bash não é a melhor linguagem para tudo. Se o script passar de 200 linhas, pense em reescrever em Python — fica mais legível e testável."}]},{slug:"acessibilidade",section:"avancado",title:"Acessibilidade no Lubuntu",difficulty:"intermediario",subtitle:"Leitor de tela, lupa, alto contraste e atalhos para todos.",intro:`Acessibilidade é o conjunto de recursos que permite a qualquer pessoa usar o computador, independentemente de visão, audição, mobilidade ou cognição. Pense numa rampa do lado da escada: ela é "para cadeirantes", mas também ajuda quem empurra carrinho, quem carrega caixa, quem está com o joelho machucado. No software, é igual: a fonte maior ajuda quem enxerga pouco, mas também quem está com o olho cansado às onze da noite.

O Lubuntu, por ser leve, vem com menos recursos de acessibilidade do que o GNOME ou o Windows fora da caixa. Mas tudo pode ser instalado: o leitor de tela Orca, a lupa Magnus, teclas de aderência (sticky keys) para quem não consegue apertar duas teclas ao mesmo tempo, temas de alto contraste, ajuste de tamanho de fonte e zoom no painel.

Mesmo que você não tenha nenhuma necessidade especial agora, vale conhecer. Em algum momento você vai precisar mostrar o computador para alguém com presbiopia ou catarata, ou para uma criança aprendendo. Saber onde aumentar fonte, ativar contraste e ler texto em voz alta é parte do kit básico de quem domina o sistema.

Neste capítulo, você vai instalar e ativar os principais recursos, configurar atalhos para ligar/desligar rápido, ajustar fontes e contraste pelo \`lxqt-config-appearance\`, e conhecer as opções no painel de Configurações. Tudo testado no Lubuntu LTS atual com LXQt.`,codes:[{lang:"bash",code:`# Instalar o leitor de tela Orca e a lupa Magnus
sudo apt update
sudo apt install orca magnus -y

# Verificar versões
orca --version
magnus --version`},{lang:"bash",code:`# Ligar e desligar o Orca pelo teclado
# Atalho padrão: Super (tecla Windows) + Alt + S
# Ou pelo terminal:
orca &              # liga o leitor (lê em voz alta)
killall orca        # desliga

# Configurar voz, idioma e atalhos:
orca --setup
# Abre um assistente; escolha pt-BR para voz em português.`},{lang:"bash",code:`# Lupa Magnus: aumenta uma área da tela em janela flutuante
magnus &            # abre a lupa (3x por padrão)
# Aproxime/afaste com a roda do mouse sobre a janela da lupa.

# Para um zoom rápido só com teclado, use o do Compton/Picom
# ou instale o xzoom como alternativa simples:
sudo apt install xzoom -y
xzoom -mag 3`},{lang:"bash",code:`# Tema de alto contraste — menus, janelas e ícones mais legíveis
# Abra: Preferências → LXQt → Aparência
# Em "Tema do Widget", escolha um tema escuro como "Lubuntu Arc Dark"
# Em "Ícones", "HighContrast" oferece bordas grossas e cores fortes.

# Pelo terminal, edite direto:
nano ~/.config/lxqt/lxqt.conf
# Ajuste: theme=lubuntu-arc-dark e icon_theme=HighContrast`},{lang:"bash",code:`# Aumentar a fonte do sistema sem mexer em monitor
# Preferências → LXQt → Aparência → Aba "Fontes"
# Subir de 10pt para 12pt ou 14pt já ajuda muito.

# Pelo arquivo de config:
nano ~/.config/lxqt/lxqt.conf
# [General]
# font="Noto Sans,12,-1,5,50,0,0,0,0,0"
# Saia e entre na sessão para aplicar em todas as janelas.`},{lang:"bash",code:`# Teclas de aderência (Sticky Keys) — aperte Shift e depois letra
# Útil para quem não consegue Ctrl+Shift+T ao mesmo tempo.
# Ative com xkbset (precisa instalar):
sudo apt install xkbset -y
xkbset sticky -twokey -latchlock
xkbset exp =sticky

# Para desligar:
xkbset -sticky`},{lang:"bash",code:`# Atalhos globais úteis para acessibilidade
# Configure em: Preferências → LXQt → Atalhos do teclado globais
# Sugestões:
#   Super + Plus      → magnus
#   Super + Minus     → killall magnus
#   Super + Alt + S   → orca (liga/desliga)
#   Super + +         → aumentar fonte (script próprio)`}],points:["Acessibilidade beneficia todo mundo, não só quem tem necessidade especial.","Lubuntu vem leve: instale orca (leitor) e magnus (lupa) com apt para começar.","Orca lê em voz alta o que está na tela; rode orca --setup para escolher voz em pt-BR.","Magnus abre uma janela com zoom; xzoom é uma alternativa mais leve.","Temas de alto contraste estão em Preferências → LXQt → Aparência.","Aumentar a fonte de 10pt para 12pt já reduz fadiga visual e ajuda quem enxerga mal.","Sticky Keys (xkbset sticky) ajuda quem não pressiona combinações simultâneas.","Iniciante comum: ativar Orca sem ouvir o som; confira se o áudio do sistema está ligado e o pulseaudio rodando.","Iniciante comum: trocar o tema e achar que travou — algumas mudanças exigem sair e entrar na sessão."],alerts:[{type:"info",content:"O Lubuntu não inclui o Orca por padrão para manter o tamanho da imagem ISO baixo. Não é descaso — basta instalar."},{type:"tip",content:"Para pessoas idosas, a combinação mais útil costuma ser: fonte 14pt + tema escuro + ícones grandes (28px) + lupa por atalho de teclado."},{type:"warning",content:"Alguns aplicativos GTK podem ignorar o tema do LXQt. Instale lxqt-qtplugin e qt5ct para uniformizar a aparência entre Qt e GTK."},{type:"success",content:'A comunidade Ubuntu mantém o time "a11y" focado em acessibilidade. Se algum recurso falta, abra um bug — eles costumam responder rápido.'}]},{slug:"particoes-avancadas",section:"avancado",title:"Partições avançadas e LVM",difficulty:"avancado",subtitle:"Esquemas de partição, swap, criptografia e LVM explicados.",intro:'Quando você instalou o Lubuntu lá no começo do livro, deixou o instalador fazer o particionamento sozinho. Funcionou. Para a maioria das pessoas, isso é o suficiente. Mas chega uma hora em que você quer dividir o disco de um jeito específico: separar `/home` para sobreviver a reinstalações, criptografar o disco inteiro para o caso do notebook ser roubado, ou usar LVM para redimensionar partições sem dor.\n\nPense no disco como um terreno. O particionamento é o muro que você levanta para dividir em lotes. Sem muro, é tudo um espaço só. Com muro, cada lote pode ter dono diferente, finalidade diferente e sobreviver a um problema no lote vizinho. `/` (raiz) é o lote do sistema, `/home` é o lote dos seus arquivos pessoais, `swap` é o "lote de emergência" usado como memória extra.\n\nLVM (Logical Volume Manager) é como ter um terreno com muros móveis. Em vez de fixar o tamanho de cada lote no início, você cria "volumes lógicos" que podem crescer ou encolher conforme precisar, mesmo com o sistema rodando. É a opção certa quando você não tem certeza de quanto espaço cada coisa vai ocupar. Junte com criptografia (LUKS) e seu disco fica protegido contra acesso físico.\n\nNeste capítulo você verá os esquemas mais comuns (`/` + swap, `/` + `/home` + swap, LVM com criptografia), comandos para inspecionar partições (`lsblk`, `fdisk -l`, `blkid`), como ver o `/etc/fstab` (a "lista de muros" que o sistema lê ao ligar) e quando vale a pena migrar de um esquema simples para LVM. Aviso: mexer em partição de disco em uso é arriscado. Faça sempre em pendrive live ou em máquina virtual antes de fazer no PC principal.',codes:[{lang:"bash",code:`# Ver todos os discos e partições — visão de árvore, fácil de ler
lsblk
# saída exemplo:
# NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
# sda      8:0    0 465.8G  0 disk
# ├─sda1   8:1    0   512M  0 part /boot/efi
# ├─sda2   8:2    0   460G  0 part /
# └─sda3   8:3    0   5.3G  0 part [SWAP]`},{lang:"bash",code:`# Detalhes técnicos das partições (precisa sudo)
sudo fdisk -l /dev/sda
# Mostra tabela GPT/MBR, tamanho em setores, tipo de cada partição

# UUIDs (identificadores únicos) — usados no /etc/fstab
sudo blkid
# /dev/sda1: UUID="ABCD-1234" TYPE="vfat"
# /dev/sda2: UUID="aaa-bbb-ccc" TYPE="ext4"
# /dev/sda3: UUID="111-222-333" TYPE="swap"`},{lang:"bash",code:`# /etc/fstab — quem manda nas montagens automáticas no boot
cat /etc/fstab
# saída típica:
# UUID=ABCD-1234     /boot/efi  vfat   defaults     0 1
# UUID=aaa-bbb-ccc   /          ext4   errors=remount-ro 0 1
# UUID=111-222-333   none       swap   sw           0 0

# NUNCA edite à toa: erro aqui pode travar o boot.
# Sempre faça backup: sudo cp /etc/fstab /etc/fstab.bak`},{lang:"bash",code:`# Esquema recomendado para iniciantes intermediários:
# /boot/efi  →  512MB   (FAT32)   só em sistemas UEFI
# /          →  30-50GB (ext4)    sistema e programas
# /home      →  resto   (ext4)    seus arquivos pessoais
# swap       →  igual à RAM (até 8GB) ou zram

# Vantagem do /home separado: ao reinstalar o Lubuntu,
# você marca "use partição existente, não formatar" no /home
# e mantém todos os seus arquivos e configurações.`},{lang:"bash",code:`# Inspecionar LVM (se você instalou com LVM)
sudo pvs   # physical volumes (discos físicos)
sudo vgs   # volume groups (grupos)
sudo lvs   # logical volumes (volumes lógicos)

# Aumentar um volume lógico (exemplo: /home com 10GB extras)
sudo lvextend -L +10G /dev/mapper/vg0-home
sudo resize2fs /dev/mapper/vg0-home    # ext4 cresce com o sistema rodando
df -h /home   # confirma o novo tamanho`},{lang:"bash",code:`# Verificar se o disco está criptografado (LUKS)
sudo cryptsetup status /dev/mapper/sda3_crypt
# Se for "active", o disco usa criptografia LUKS.

# Trocar a senha do disco criptografado:
sudo cryptsetup luksChangeKey /dev/sda3
# Pede a senha antiga, depois a nova duas vezes.`},{lang:"bash",code:`# Verificar saúde do disco (SSD ou HD) — antes de mexer em partições
sudo apt install smartmontools -y
sudo smartctl -a /dev/sda | grep -E "SMART overall|Reallocated|Power_On_Hours"
# saída:
# SMART overall-health self-assessment test result: PASSED
# Reallocated_Sector_Ct: 0       (zero = ótimo)
# Power_On_Hours: 12500          (horas ligado)`}],points:["Particionar é dividir o disco em lotes; cada um tem finalidade diferente.","Para sistemas UEFI modernos, use tabela GPT e tenha uma /boot/efi de 512MB em FAT32.","Separar /home permite reinstalar o sistema sem perder arquivos pessoais.","LVM dá flexibilidade: redimensiona volumes com o sistema rodando.","LUKS criptografa o disco inteiro; protege contra acesso físico ao notebook.","/etc/fstab é a tabela que o sistema lê no boot para montar partições.","lsblk dá uma visão simples; fdisk -l e blkid mostram detalhes técnicos.","Iniciante comum: editar /etc/fstab com erro e travar o boot — sempre faça backup antes.","Iniciante comum: mexer em partição de disco em uso sem booatar pelo live USB — perigo enorme de perder dados."],alerts:[{type:"danger",content:"Mudanças em partições podem destruir dados se você errar. Faça backup completo (Timeshift + arquivos pessoais) ANTES de qualquer operação."},{type:"warning",content:"Redimensionar partição em uso (mesmo no GParted live) é mais arriscado em HDs do que em SSDs por causa de movimentação física. Tenha paciência e não interrompa."},{type:"info",content:"Se você usa SSD, a tradicional partição de swap pode ser substituída por zram (visto em Hardware Leve). Reduz escrita no disco e melhora desempenho."},{type:"tip",content:"Para experimentar particionamento sem risco, use uma máquina virtual (VirtualBox ou GNOME Boxes). Crie disco virtual de 20GB e brinque à vontade."}]},{slug:"glossario",section:"avancado",title:"Glossário do mundo Lubuntu",difficulty:"iniciante",subtitle:"Termos técnicos explicados em português simples.",intro:`Toda comunidade tem seu vocabulário. Mecânicos falam de "junta homocinética", médicos falam de "anamnese", e quem usa Linux fala de "kernel", "shell", "PPA" e "init system". No começo soa como código secreto. A boa notícia é que cada um desses termos tem um significado simples e concreto, e depois que você entende, lê fórum, tutorial e mensagem de erro com bem mais facilidade.

Pense neste capítulo como um pequeno dicionário do mundo Lubuntu/Linux. Não está em ordem alfabética rigorosa: agrupei por temas (sistema, software, rede, segurança) para você relacionar palavras parecidas. Cada termo vem com uma definição curta, uma analogia do dia a dia quando útil, e um exemplo prático.

Você não precisa decorar tudo. Use como referência: quando bater a dúvida sobre o que é "systemd" ou "Wayland", volte aqui. Aos poucos, esses termos vão aparecendo no seu vocabulário sem você perceber. É o sinal de que você passou de "usuário curioso" para "pessoa que entende Linux".

Vou usar exemplos rápidos no formato \`# termo: explicação curta\` em blocos de código, para você varrer com os olhos. Quando o conceito for mais denso, escrevo um parágrafo dentro do código mesmo, comentado. Tudo cabível e já testado. Boa leitura.`,codes:[{lang:"text",code:`KERNEL
O coração do sistema operacional. É o programa que conversa diretamente
com o hardware (CPU, memória, disco, dispositivos USB). No Linux, o kernel
se chama "Linux" mesmo (criado por Linus Torvalds em 1991). Cada release
do Lubuntu vem com uma versão específica do kernel.
Comando: uname -r   → mostra a versão atual (ex: 6.5.0-25-generic)`},{lang:"text",code:`DISTRIBUIÇÃO (DISTRO)
Um sistema operacional completo construído em volta do kernel Linux.
Inclui: kernel + utilitários básicos + gerenciador de pacotes + interface
gráfica + aplicativos. Lubuntu, Ubuntu, Debian, Fedora, Arch, Manjaro são
distros. Diferentes escolhas para diferentes gostos.

SHELL
O programa que recebe comandos de texto e os executa. Bash é o shell
padrão do Lubuntu. Outros: zsh, fish, sh.
Comando: echo $SHELL   → /bin/bash`},{lang:"text",code:`TERMINAL (EMULADOR)
A janela onde você digita comandos. No Lubuntu é o QTerminal.
Não confunda: o terminal é a janela; o shell é o programa que processa.

REPOSITÓRIO (REPO)
Servidor que guarda pacotes prontos para instalar. O apt baixa de lá.
Listas em /etc/apt/sources.list e /etc/apt/sources.list.d/

PPA (Personal Package Archive)
Repositório extra hospedado no Launchpad por uma pessoa ou time.
Útil para versões mais novas que as oficiais. Cuidado com fonte desconhecida.`},{lang:"text",code:`SYSTEMD
O "init system" — o primeiro processo (PID 1) que o kernel inicia.
Cuida de subir todos os serviços (rede, log, audio, etc.) e gerenciar
o ciclo de vida deles. Comando: systemctl status, systemctl restart NOME.

SERVIÇO (DAEMON)
Programa que roda em segundo plano, sem interface. Exemplos: cups
(impressão), bluetooth, NetworkManager, sshd. Por convenção, terminam em "d".

SUDO
"Substitute User Do" — executa um comando como outro usuário,
normalmente root. Exige senha. Comando: sudo apt update`},{lang:"text",code:`X11 (Xorg)
Sistema gráfico clássico do Linux. Desenha as janelas. Padrão no Lubuntu.

WAYLAND
Sistema gráfico moderno, sucessor do X11. Mais simples e seguro.
GNOME e KDE já usam por padrão; LXQt está migrando aos poucos.

GERENCIADOR DE JANELAS (WM)
O programa que desenha bordas, move janelas, controla foco.
No Lubuntu padrão é o Openbox. Outros: kwin, mutter, i3, sway.

DESKTOP ENVIRONMENT (DE)
Conjunto completo: WM + painel + gerenciador de arquivos + temas.
LXQt é o DE do Lubuntu. Outros: GNOME, KDE Plasma, XFCE, MATE.`},{lang:"text",code:`APT / DPKG
apt: ferramenta de alto nível para gerenciar pacotes (.deb).
dpkg: ferramenta de baixo nível, manipula pacotes individuais.

SNAP / FLATPAK
Formatos modernos de empacotamento "universal". Cada app vem com
suas dependências, isolado do resto. Mais pesado, mas evita conflito.

AUR (Arch User Repository) — só Arch/Manjaro, NÃO existe no Lubuntu.

DEPENDÊNCIA
Outro pacote que o seu pacote precisa para funcionar. apt resolve sozinho.`},{lang:"text",code:`GRUB
"GRand Unified Bootloader" — programa que aparece nos primeiros
segundos do boot e deixa você escolher qual sistema iniciar
(útil em dual boot Lubuntu + Windows).

LTS (Long Term Support)
Versão "de longa duração" do Ubuntu/Lubuntu, com 5 anos de atualizações
de segurança. Sai a cada 2 anos: 22.04, 24.04, 26.04...

UEFI / BIOS
Firmware que roda antes do sistema operacional, na placa-mãe.
UEFI é o moderno (suporta GPT, Secure Boot); BIOS é o legado.`}],points:["Kernel = coração do SO; distro = sistema completo construído em volta dele.","Shell (bash) é a língua; terminal (QTerminal) é a janela onde você fala.","systemd cuida de iniciar e parar serviços (daemons) do sistema.","apt e dpkg gerenciam pacotes .deb; snap e flatpak são alternativas universais.","PPA é repositório extra; instale só de fontes confiáveis.","X11 (Xorg) é o gráfico clássico; Wayland é o moderno, em adoção gradual.","GRUB é a tela de escolha de SO no boot; LTS é a versão estável de 5 anos.","Iniciante comum: confundir terminal (a janela) com shell (o interpretador).","Iniciante comum: achar que distro Linux é tudo igual — cada uma tem suas escolhas e ferramentas."],alerts:[{type:"tip",content:'Sempre que ver um termo novo num tutorial, busque "o que é XYZ linux" no DuckDuckGo. A wiki do Arch (mesmo não usando Arch) é uma das melhores fontes para entender qualquer conceito Linux.'},{type:"info",content:"O ManPages (manual do sistema) tem definições oficiais. Comando: man systemd, man apt, man bash. Use / para buscar palavra dentro da página."},{type:"success",content:"Você já usou todos esses termos neste livro. Reler este glossário no final é uma boa forma de fixar o que aprendeu."}]},{slug:"recursos-extras",section:"avancado",title:"Recursos extras e próximos passos",difficulty:"iniciante",subtitle:"Sites, livros, fóruns e canais para continuar aprendendo.",intro:`Você chegou ao fim do livro. Parabéns! Aprendeu a instalar o Lubuntu, navegar pelo LXQt, dominar o terminal, gerenciar pacotes, fazer backup, resolver problemas, mergulhar em projetos práticos e até abrir o capô do sistema. Mas Linux é um mundo enorme: o que está aqui é o suficiente para usar com confiança no dia a dia, e a base para ir muito além se quiser.

Este capítulo final é um mapa para os próximos passos. Listei sites, fóruns, livros, canais de YouTube e comandos que ajudam a continuar aprendendo. Não saia tentando seguir tudo de uma vez — escolha um ou dois lugares, frequente regularmente e os outros aparecem naturalmente. A regra é: aprender Linux é como aprender um idioma. Pequenas doses diárias funcionam melhor do que maratona de fim de semana.

Recomendo escolher um "projeto pessoal" para praticar. Pode ser configurar um servidor de mídia em casa, transformar um notebook velho em estação de estudo, fazer um bot que avisa o tempo no Telegram, automatizar backup das fotos. Projeto real ensina muito mais que tutorial isolado. Se travar, volte aos capítulos anteriores e use o glossário.

Por fim, contribua. Se aprendeu algo aqui, ensine para alguém. Responda dúvida em fórum, traduza um texto, reporte um bug. A comunidade do software livre é feita de gente como você que decidiu retribuir um pouquinho. É assim que o Lubuntu chega cada vez melhor para a próxima pessoa que abre o instalador pela primeira vez. Boa jornada.`,codes:[{lang:"text",code:`SITES OFICIAIS
- lubuntu.me               → site oficial, downloads e notícias
- discourse.lubuntu.me     → fórum oficial em inglês
- manual.lubuntu.me        → manual completo, atualizado a cada release
- ubuntu.com/community     → comunidade Ubuntu (pais do Lubuntu)
- wiki.archlinux.org       → wiki técnica fantástica, vale para qualquer distro`},{lang:"text",code:`EM PORTUGUÊS
- ubuntu-br.org            → comunidade Ubuntu Brasil
- diolinux.com.br          → blog e canal com notícias e tutoriais
- terminalroot.com.br      → tutoriais de terminal e shell scripting
- fabricio.org             → blog com posts profundos sobre Linux
- linuxdicas.com.br        → dicas práticas em formato curto`},{lang:"text",code:`FÓRUNS PARA PEDIR AJUDA
- discourse.lubuntu.me     → o lugar certo para dúvidas específicas do Lubuntu
- askubuntu.com            → Q&A no estilo Stack Overflow, mar de respostas
- forum.ubuntu-br.org      → em português, comunidade ativa
- reddit.com/r/lubuntu     → casual, bom para mostrar setup e tirar dúvida rápida
- reddit.com/r/linux4noobs → focado em iniciantes, sem julgamento`},{lang:"bash",code:`# Documentação que já está no seu sistema
man comando         # manual oficial; ex: man apt, man systemctl
comando --help      # ajuda rápida; ex: ls --help
info comando        # versão hipertexto, mais longa
tldr comando        # exemplos práticos (instale: sudo apt install tldr)

# Exemplo: tldr é ótimo para lembrar comandos
tldr tar
# Mostra os 5-6 usos mais comuns com exemplos prontos.`},{lang:"text",code:`LIVROS RECOMENDADOS (em português ou disponíveis traduzidos)
- "The Linux Command Line" — William Shotts (gratuito em linuxcommand.org)
- "Linux: Guia do Administrador" — Carlos E. Morimoto
- "How Linux Works" — Brian Ward
- "Bash Guide for Beginners" — Machtelt Garrels (gratuito online)
- "UNIX and Linux System Administration Handbook" — Nemeth et al.`},{lang:"text",code:`CANAIS DE YOUTUBE
Em português:
- Diolinux                 → notícias e tutoriais semanais
- Linux Tips               → dicas curtas e práticas
- Bóson Treinamentos       → cursos completos em vídeo, didática boa

Em inglês:
- DistroTube               → análises de distros e ferramentas
- The Linux Experiment     → notícias e opinião
- LearnLinuxTV             → tutoriais técnicos passo a passo`},{lang:"bash",code:`# Pratique todo dia: 15 minutos no terminal
# Sugestões de exercícios diários:
#   1) Aprenda 1 comando novo via tldr ou man
#   2) Escreva 1 script de 5-10 linhas que automatize algo seu
#   3) Resolva 1 dúvida no askubuntu (em vez de só ler)
#   4) Configure 1 atalho ou tema no LXQt

# Comando que você vai usar muito ao explorar:
apropos PALAVRA       # busca comandos relacionados
# ex: apropros backup → lista todos os comandos de backup do sistema`}],points:["Manual oficial do Lubuntu (manual.lubuntu.me) é a fonte mais confiável.","askubuntu.com tem respostas para 99% das dúvidas comuns de Lubuntu/Ubuntu.","Comunidade brasileira é ativa: Diolinux, Ubuntu-BR, fóruns em português.","Comandos man, --help e tldr trazem documentação direto no sistema.",'Livro "The Linux Command Line" (gratuito, em inglês) é referência absoluta.',"Escolha um projeto pessoal — aprende-se mais fazendo do que só lendo.","Contribua: responder dúvida em fórum é forma de aprender e retribuir.","Iniciante comum: tentar seguir 10 cursos ao mesmo tempo e não terminar nenhum.","Iniciante comum: ter vergonha de perguntar — todo iniciante já passou pelas mesmas dúvidas."],alerts:[{type:"success",content:"Você terminou o livro! Esse é só o começo. Linux fica mais divertido quanto mais você usa. Em 6 meses de uso diário você vai se surpreender com tudo que sabe."},{type:"tip",content:"Antes de perguntar em fórum, faça o dever de casa: copie a mensagem de erro exata e busque no Google + askubuntu. Em 80% dos casos a resposta já existe."},{type:"info",content:"Quando perguntar, dê contexto: versão do Lubuntu (lsb_release -a), o que você fez, o que esperava, o que aconteceu, e logs relevantes. Pergunta boa atrai resposta boa."},{type:"warning",content:"Cuidado com tutoriais antigos da internet. Comandos do Ubuntu 16.04 nem sempre funcionam no 26.04. Confira a data do post e a versão alvo antes de copiar."}]}],Uq=[{id:"boas-vindas",icon:"BookOpen",label:"Boas-vindas e Filosofia",chapterSlugs:["bem-vindo","o-que-e-lubuntu","lubuntu-vs-ubuntu","lxqt-vs-lxde","hardware-recomendado","filosofia-leveza","comunidade-ajuda"]},{id:"instalacao",icon:"Download",label:"Instalação Passo a Passo",chapterSlugs:["baixar-iso","criar-pendrive","requisitos-minimos","testar-live","instalacao-completa","particionamento","dual-boot-windows","primeira-inicializacao","pos-instalacao"]},{id:"lxqt-tour",icon:"Layout",label:"LXQt por Dentro",chapterSlugs:["visao-geral-lxqt","painel-lxqt","menu-aplicacoes","pcmanfm-qt","openbox-wm","qterminal","lxqt-config","area-notificacao"]},{id:"personalizacao",icon:"Palette",label:"Personalização Visual",chapterSlugs:["temas-lxqt","icones-lubuntu","fontes-sistema","papel-parede","atalhos-teclado","autostart-apps","multi-area-trabalho","conky-monitor"]},{id:"terminal",icon:"Terminal",label:"Terminal e Linha de Comando",chapterSlugs:["abrir-terminal","navegacao-pastas","manipular-arquivos","ver-arquivos","processos-basicos","pipes-redirecionamento","sudo-seguranca","atalhos-bash"]},{id:"pacotes",icon:"Package",label:"Software e Pacotes",chapterSlugs:["discover-software","apt-basico","atualizar-sistema","instalar-remover","adicionar-ppa","snap-pacotes","flatpak-pacotes","instalar-deb"]},{id:"apps",icon:"AppWindow",label:"Aplicativos do Dia a Dia",chapterSlugs:["navegadores-leves","libreoffice","cliente-email","tocador-musica","video-vlc","editor-imagem","mensageiros","alternativas-leves","jogos-leves"]},{id:"hardware-leve",icon:"Cpu",label:"Hardware Leve e Performance",chapterSlugs:["zram-swap","gerenciar-energia","drivers-graficos","wifi-bluetooth-driver","otimizar-boot","monitorar-recursos","multi-monitor","reduzir-uso-ram"]},{id:"rede",icon:"Wifi",label:"Rede e Conectividade",chapterSlugs:["conectar-wifi","conectar-ethernet","vpn-openvpn","bluetooth-pareamento","compartilhar-samba","ssh-acesso-remoto","firewall-ufw","dns-troubleshoot"]},{id:"manutencao",icon:"Wrench",label:"Manutenção e Backup",chapterSlugs:["atualizar-lts","limpeza-disco","timeshift-backup","restaurar-snapshot","logs-sistema","agendar-tarefas-cron"]},{id:"solucao-problemas",icon:"AlertCircle",label:"Solução de Problemas",chapterSlugs:["diagnosticar-problemas","modo-recovery","reinstalar-grub","recuperar-senha-root","onde-pedir-ajuda","faq-erros-comuns"]},{id:"projetos",icon:"Rocket",label:"Projetos e Casos Práticos",chapterSlugs:["reviver-pc-antigo","kiosk-quiosque","midia-center-htpc","servidor-domestico","usb-persistente","sala-de-aula"]},{id:"avancado",icon:"Settings",label:"Avançado e Glossário",chapterSlugs:["lxqt-sob-capo","scripts-shell-uteis","acessibilidade","particoes-avancadas","glossario","recursos-extras"]}],Bq=["boas-vindas","instalacao","lxqt-tour","terminal","pacotes","apps","personalizacao","rede","hardware-leve","manutencao","solucao-problemas","projetos","avancado"],Qo=Bq.map(s=>Uq.find(i=>i.id===s)).filter(s=>!!s),Vq=[...Cq,...Tq,...Mq,...zq,...Dq,...Lq,...wq,...kq,...Oq,...jq,...Nq,...Pq,...Rq],Ai=Object.fromEntries(Vq.map(s=>[s.slug,s])),Ka=Qo.flatMap(s=>s.chapterSlugs.map(i=>Ai[i]).filter(i=>!!i));function Gq(s){return Ka.findIndex(i=>i.slug===s)}const cv="lubuntu-curso-progresso",cc="lubuntu-progress";function Jn(){try{return JSON.parse(localStorage.getItem(cv)||"{}")}catch{return{}}}function Kl(s){localStorage.setItem(cv,JSON.stringify(s)),window.dispatchEvent(new Event(cc))}function wc(){const[s,i]=G.useState(()=>typeof window>"u"?{}:Jn());G.useEffect(()=>{const h=()=>i(Jn());return window.addEventListener(cc,h),window.addEventListener("storage",h),()=>{window.removeEventListener(cc,h),window.removeEventListener("storage",h)}},[]);const r=G.useCallback(h=>!!s[h],[s]),u=G.useCallback(h=>{const f=Jn();f[h]?delete f[h]:f[h]=!0,Kl(f)},[]),c=G.useCallback(h=>{const f=Jn();f[h]=!0,Kl(f)},[]),p=G.useCallback(()=>Kl({}),[]),m=Ka.length,g=Object.keys(s).filter(h=>!!s[h]).length;return{done:s,isDone:r,toggle:u,markDone:c,reset:p,count:g,total:m}}function dv(s,i){const r=Qo.find(p=>p.id===s);if(!r)return{done:0,total:0};const u=r.chapterSlugs.length;return{done:r.chapterSlugs.filter(p=>i[p]).length,total:u}}function _q(s){const i=Ka.find(r=>!s[r.slug]);return i?i.slug:null}const Iq={BookOpen:ir,Download:rv,Layout:hq,Palette:fq,Terminal:lv,Package:pq,AppWindow:$x,Cpu:lc,Wifi:qq,Wrench:Sq,AlertCircle:oq,Rocket:gq,Settings:bq};function mv(s){return Iq[s]??ir}function Hq({open:s,onClose:i}){const[r]=Dc(),[u,c]=G.useState(""),[p,m]=G.useState({}),{done:g,isDone:h,count:f,total:b}=wc(),y=b?Math.round(f/b*100):0,q=G.useMemo(()=>{if(!u.trim())return Qo;const T=u.toLowerCase();return Qo.map(j=>({...j,chapterSlugs:j.chapterSlugs.filter(R=>{const B=Ai[R];return B&&(B.title.toLowerCase().includes(T)||B.subtitle.toLowerCase().includes(T))})})).filter(j=>j.chapterSlugs.length>0)},[u]);return x.jsxs(x.Fragment,{children:[s&&x.jsx("div",{className:"lg:hidden fixed inset-0 bg-black/40 z-40",onClick:i}),x.jsxs("aside",{className:`fixed lg:sticky lg:top-14 top-0 left-0 z-50 lg:z-10 h-screen lg:h-[calc(100vh-3.5rem)] w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 overflow-y-auto transition-transform ${s?"translate-x-0":"-translate-x-full lg:translate-x-0"}`,children:[x.jsxs("div",{className:"p-3 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2 lg:hidden",children:[x.jsx("span",{className:"font-bold text-lubuntu-blue dark:text-lubuntu-blue-light",children:"Menu"}),x.jsx("button",{onClick:i,className:"ml-auto p-1",children:x.jsx(Aq,{size:18})})]}),x.jsxs("div",{className:"px-3 pt-3",children:[x.jsxs(Ia,{href:"/",onClick:i,className:`flex items-center gap-2 px-2 py-2 text-sm font-semibold rounded transition-colors ${r==="/"?"bg-lubuntu-blue/10 text-lubuntu-blue dark:text-lubuntu-blue-light":"text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"}`,children:[x.jsx(uv,{size:16})," Início"]}),x.jsxs("div",{className:"mt-3 mb-1 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400",children:[x.jsx("span",{children:"Seu progresso"}),x.jsxs("span",{className:"font-semibold text-lubuntu-blue dark:text-lubuntu-blue-light",children:[f,"/",b]})]}),x.jsx("div",{className:"h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden",children:x.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-lubuntu-blue to-lubuntu-sky transition-all duration-500",style:{width:`${y}%`}})})]}),x.jsx("div",{className:"p-3 sticky top-0 bg-white dark:bg-slate-900 z-10",children:x.jsxs("div",{className:"relative",children:[x.jsx(vq,{size:14,className:"absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400"}),x.jsx("input",{value:u,onChange:T=>c(T.target.value),placeholder:"Buscar capítulo…",className:"w-full pl-8 pr-2 py-1.5 text-sm bg-slate-100 dark:bg-slate-800 rounded border border-transparent focus:border-lubuntu-blue focus:outline-none"})]})}),x.jsx("nav",{className:"px-2 pb-8",children:q.map(T=>{const j=mv(T.icon),R=p[T.id],B=dv(T.id,g),U=B.total>0&&B.done===B.total;return x.jsxs("div",{className:"mb-1",children:[x.jsxs("button",{onClick:()=>m(I=>({...I,[T.id]:!I[T.id]})),className:"w-full flex items-center gap-2 px-2 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded",children:[U?x.jsx(Si,{size:16,className:"text-emerald-500 shrink-0"}):x.jsx(j,{size:16,className:"text-lubuntu-blue dark:text-lubuntu-blue-light shrink-0"}),x.jsx("span",{className:"flex-1 text-left",children:T.label}),x.jsxs("span",{className:"text-[10px] tabular-nums text-slate-400",children:[B.done,"/",B.total]}),x.jsx(aq,{size:14,className:`transition-transform ${R?"-rotate-90":""}`})]}),!R&&x.jsx("ul",{className:"ml-4 border-l border-slate-200 dark:border-slate-800",children:T.chapterSlugs.map(I=>{const H=Ai[I];if(!H)return null;const ae=`/c/${I}`,Y=r===ae,te=h(I);return x.jsx("li",{children:x.jsxs(Ia,{href:ae,onClick:i,className:`flex items-center gap-1.5 pl-3 pr-2 py-1.5 text-sm border-l-2 -ml-px transition-colors ${Y?"border-lubuntu-sky text-lubuntu-blue dark:text-lubuntu-blue-light font-semibold bg-lubuntu-sky/10":"border-transparent text-slate-600 dark:text-slate-400 hover:text-lubuntu-blue hover:border-lubuntu-blue/30"}`,children:[te?x.jsx(Si,{size:13,className:"text-emerald-500 shrink-0"}):x.jsx("span",{className:"w-[13px] shrink-0"}),x.jsx("span",{className:"truncate",children:H.title})]})},I)})})]},T.id)})})]})]})}const kh=[{kind:"cmd",text:"sudo apt update && sudo apt install vlc"},{kind:"out",text:"Lendo listas de pacotes... Pronto"},{kind:"ok",text:"vlc instalado — leve e roda em qualquer PC ✓"},{kind:"cmd",text:"free -h   # quanta RAM o LXQt gasta?"},{kind:"out",text:"              total    usado    livre"},{kind:"out",text:"Mem:          3,7Gi    438Mi    2,4Gi"},{kind:"hint",text:"→ 438 MiB: o Lubuntu todo cabe onde um navegador não caberia"},{kind:"cmd",text:"lsb_release -ds"},{kind:"out",text:"Ubuntu 26.04 LTS  ·  base do Lubuntu (LXQt)"}],Fq={cmd:"text-slate-100",out:"text-slate-400",ok:"text-emerald-400",hint:"text-lubuntu-sky-light"};function Oh(){return x.jsxs("span",{className:"text-lubuntu-blue-light",children:["voce@lubuntu",x.jsx("span",{className:"text-slate-500",children:":"}),x.jsx("span",{className:"text-lubuntu-sky",children:"~"}),x.jsx("span",{className:"text-slate-500",children:"$"})," "]})}function Qq(){const[s,i]=G.useState([]),[r,u]=G.useState(""),[c,p]=G.useState(!0),m=G.useRef([]);return G.useEffect(()=>{let g=!1;const h=(b,y)=>{const q=window.setTimeout(()=>!g&&y(),b);m.current.push(q)},f=b=>{if(g)return;if(b>=kh.length){h(2600,()=>{i([]),u(""),p(!0),f(0)});return}const y=kh[b];if(y.kind==="cmd"){p(!0);const q=T=>{g||(T<=y.text.length?(u(y.text.slice(0,T)),h(30,()=>q(T+1))):h(380,()=>{i(j=>[...j,y]),u(""),f(b+1)}))};q(0)}else p(!1),h(240,()=>{i(q=>[...q,y]),f(b+1)})};return h(500,()=>f(0)),()=>{g=!0,m.current.forEach(clearTimeout),m.current=[]}},[]),x.jsxs("div",{className:"rounded-xl overflow-hidden border border-white/10 bg-[#0a1526]/95 shadow-2xl shadow-lubuntu-blue/20 backdrop-blur",children:[x.jsxs("div",{className:"flex items-center gap-2 px-4 py-2.5 bg-white/5 border-b border-white/10",children:[x.jsx("span",{className:"w-3 h-3 rounded-full bg-[#ff5f57]"}),x.jsx("span",{className:"w-3 h-3 rounded-full bg-[#febc2e]"}),x.jsx("span",{className:"w-3 h-3 rounded-full bg-[#28c840]"}),x.jsx("span",{className:"ml-2 text-xs font-mono text-slate-400",children:"qterminal — voce@lubuntu"})]}),x.jsxs("pre",{className:"p-4 sm:p-5 text-[13px] leading-relaxed font-mono overflow-x-auto min-h-[252px] whitespace-pre-wrap",children:[s.map((g,h)=>x.jsxs("div",{className:Fq[g.kind],children:[g.kind==="cmd"?x.jsx(Oh,{}):null,g.text]},h)),x.jsxs("div",{className:"text-slate-100",children:[x.jsx(Oh,{}),r,c&&x.jsx("span",{className:"blink text-lubuntu-sky-light",children:"▋"})]})]})]})}const pv=G.createContext({});function Xq(s){const i=G.useRef(null);return i.current===null&&(i.current=s()),i.current}const kc=G.createContext(null),fv=G.createContext({transformPagePoint:s=>s,isStatic:!1,reducedMotion:"never"});function Kq(s=!0){const i=G.useContext(kc);if(i===null)return[!0,null];const{isPresent:r,onExitComplete:u,register:c}=i,p=G.useId();G.useEffect(()=>{s&&c(p)},[s]);const m=G.useCallback(()=>s&&u&&u(p),[p,u,s]);return!r&&u?[!1,m]:[!0]}const Oc=typeof window<"u",Yq=Oc?G.useLayoutEffect:G.useEffect,Aa=s=>s;let hv=Aa;function jc(s){let i;return()=>(i===void 0&&(i=s()),i)}const ds=(s,i,r)=>{const u=i-s;return u===0?1:(r-s)/u},vo=s=>s*1e3,bo=s=>s/1e3,Wq={useManualTiming:!1};function Zq(s){let i=new Set,r=new Set,u=!1,c=!1;const p=new WeakSet;let m={delta:0,timestamp:0,isProcessing:!1};function g(f){p.has(f)&&(h.schedule(f),s()),f(m)}const h={schedule:(f,b=!1,y=!1)=>{const T=y&&u?i:r;return b&&p.add(f),T.has(f)||T.add(f),f},cancel:f=>{r.delete(f),p.delete(f)},process:f=>{if(m=f,u){c=!0;return}u=!0,[i,r]=[r,i],i.forEach(g),i.clear(),u=!1,c&&(c=!1,h.process(f))}};return h}const $n=["read","resolveKeyframes","update","preRender","render","postRender"],Jq=40;function gv(s,i){let r=!1,u=!0;const c={delta:0,timestamp:0,isProcessing:!1},p=()=>r=!0,m=$n.reduce((U,I)=>(U[I]=Zq(p),U),{}),{read:g,resolveKeyframes:h,update:f,preRender:b,render:y,postRender:q}=m,T=()=>{const U=performance.now();r=!1,c.delta=u?1e3/60:Math.max(Math.min(U-c.timestamp,Jq),1),c.timestamp=U,c.isProcessing=!0,g.process(c),h.process(c),f.process(c),b.process(c),y.process(c),q.process(c),c.isProcessing=!1,r&&i&&(u=!1,s(T))},j=()=>{r=!0,u=!0,c.isProcessing||s(T)};return{schedule:$n.reduce((U,I)=>{const H=m[I];return U[I]=(ae,Y=!1,te=!1)=>(r||j(),H.schedule(ae,Y,te)),U},{}),cancel:U=>{for(let I=0;I<$n.length;I++)m[$n[I]].cancel(U)},state:c,steps:m}}const{schedule:De,cancel:Xo,state:ea,steps:Yl}=gv(typeof requestAnimationFrame<"u"?requestAnimationFrame:Aa,!0),vv=G.createContext({strict:!1}),jh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ms={};for(const s in jh)ms[s]={isEnabled:i=>jh[s].some(r=>!!i[r])};function $q(s){for(const i in s)ms[i]={...ms[i],...s[i]}}const e1=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function rr(s){return s.startsWith("while")||s.startsWith("drag")&&s!=="draggable"||s.startsWith("layout")||s.startsWith("onTap")||s.startsWith("onPan")||s.startsWith("onLayout")||e1.has(s)}let bv=s=>!rr(s);function a1(s){s&&(bv=i=>i.startsWith("on")?!rr(i):s(i))}try{a1(require("@emotion/is-prop-valid").default)}catch{}function o1(s,i,r){const u={};for(const c in s)c==="values"&&typeof s.values=="object"||(bv(c)||r===!0&&rr(c)||!i&&!rr(c)||s.draggable&&c.startsWith("onDrag"))&&(u[c]=s[c]);return u}function t1(s){if(typeof Proxy>"u")return s;const i=new Map,r=(...u)=>s(...u);return new Proxy(r,{get:(u,c)=>c==="create"?s:(i.has(c)||i.set(c,s(c)),i.get(c))})}const gr=G.createContext({});function Ei(s){return typeof s=="string"||Array.isArray(s)}function vr(s){return s!==null&&typeof s=="object"&&typeof s.start=="function"}const Nc=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Pc=["initial",...Nc];function br(s){return vr(s.animate)||Pc.some(i=>Ei(s[i]))}function yv(s){return!!(br(s)||s.variants)}function s1(s,i){if(br(s)){const{initial:r,animate:u}=s;return{initial:r===!1||Ei(r)?r:void 0,animate:Ei(u)?u:void 0}}return s.inherit!==!1?i:{}}function i1(s){const{initial:i,animate:r}=s1(s,G.useContext(gr));return G.useMemo(()=>({initial:i,animate:r}),[Nh(i),Nh(r)])}function Nh(s){return Array.isArray(s)?s.join(" "):s}const n1=Symbol.for("motionComponentSymbol");function ns(s){return s&&typeof s=="object"&&Object.prototype.hasOwnProperty.call(s,"current")}function r1(s,i,r){return G.useCallback(u=>{u&&s.onMount&&s.onMount(u),i&&(u?i.mount(u):i.unmount()),r&&(typeof r=="function"?r(u):ns(r)&&(r.current=u))},[i])}const Rc=s=>s.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),u1="framerAppearId",xv="data-"+Rc(u1),{schedule:Uc}=gv(queueMicrotask,!1),qv=G.createContext({});function l1(s,i,r,u,c){var p,m;const{visualElement:g}=G.useContext(gr),h=G.useContext(vv),f=G.useContext(kc),b=G.useContext(fv).reducedMotion,y=G.useRef(null);u=u||h.renderer,!y.current&&u&&(y.current=u(s,{visualState:i,parent:g,props:r,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:b}));const q=y.current,T=G.useContext(qv);q&&!q.projection&&c&&(q.type==="html"||q.type==="svg")&&c1(y.current,r,c,T);const j=G.useRef(!1);G.useInsertionEffect(()=>{q&&j.current&&q.update(r,f)});const R=r[xv],B=G.useRef(!!R&&!(!((p=window.MotionHandoffIsComplete)===null||p===void 0)&&p.call(window,R))&&((m=window.MotionHasOptimisedAnimation)===null||m===void 0?void 0:m.call(window,R)));return Yq(()=>{q&&(j.current=!0,window.MotionIsMounted=!0,q.updateFeatures(),Uc.render(q.render),B.current&&q.animationState&&q.animationState.animateChanges())}),G.useEffect(()=>{q&&(!B.current&&q.animationState&&q.animationState.animateChanges(),B.current&&(queueMicrotask(()=>{var U;(U=window.MotionHandoffMarkAsComplete)===null||U===void 0||U.call(window,R)}),B.current=!1))}),q}function c1(s,i,r,u){const{layoutId:c,layout:p,drag:m,dragConstraints:g,layoutScroll:h,layoutRoot:f}=i;s.projection=new r(s.latestValues,i["data-framer-portal-id"]?void 0:Sv(s.parent)),s.projection.setOptions({layoutId:c,layout:p,alwaysMeasureLayout:!!m||g&&ns(g),visualElement:s,animationType:typeof p=="string"?p:"both",initialPromotionConfig:u,layoutScroll:h,layoutRoot:f})}function Sv(s){if(s)return s.options.allowProjection!==!1?s.projection:Sv(s.parent)}function d1({preloadedFeatures:s,createVisualElement:i,useRender:r,useVisualState:u,Component:c}){var p,m;s&&$q(s);function g(f,b){let y;const q={...G.useContext(fv),...f,layoutId:m1(f)},{isStatic:T}=q,j=i1(f),R=u(f,T);if(!T&&Oc){p1();const B=f1(q);y=B.MeasureLayout,j.visualElement=l1(c,R,q,i,B.ProjectionNode)}return x.jsxs(gr.Provider,{value:j,children:[y&&j.visualElement?x.jsx(y,{visualElement:j.visualElement,...q}):null,r(c,f,r1(R,j.visualElement,b),R,T,j.visualElement)]})}g.displayName=`motion.${typeof c=="string"?c:`create(${(m=(p=c.displayName)!==null&&p!==void 0?p:c.name)!==null&&m!==void 0?m:""})`}`;const h=G.forwardRef(g);return h[n1]=c,h}function m1({layoutId:s}){const i=G.useContext(pv).id;return i&&s!==void 0?i+"-"+s:s}function p1(s,i){G.useContext(vv).strict}function f1(s){const{drag:i,layout:r}=ms;if(!i&&!r)return{};const u={...i,...r};return{MeasureLayout:i!=null&&i.isEnabled(s)||r!=null&&r.isEnabled(s)?u.MeasureLayout:void 0,ProjectionNode:u.ProjectionNode}}const h1=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Bc(s){return typeof s!="string"||s.includes("-")?!1:!!(h1.indexOf(s)>-1||/[A-Z]/u.test(s))}function Ph(s){const i=[{},{}];return s==null||s.values.forEach((r,u)=>{i[0][u]=r.get(),i[1][u]=r.getVelocity()}),i}function Vc(s,i,r,u){if(typeof i=="function"){const[c,p]=Ph(u);i=i(r!==void 0?r:s.custom,c,p)}if(typeof i=="string"&&(i=s.variants&&s.variants[i]),typeof i=="function"){const[c,p]=Ph(u);i=i(r!==void 0?r:s.custom,c,p)}return i}const dc=s=>Array.isArray(s),g1=s=>!!(s&&typeof s=="object"&&s.mix&&s.toValue),v1=s=>dc(s)?s[s.length-1]||0:s,ta=s=>!!(s&&s.getVelocity);function or(s){const i=ta(s)?s.get():s;return g1(i)?i.toValue():i}function b1({scrapeMotionValuesFromProps:s,createRenderState:i,onUpdate:r},u,c,p){const m={latestValues:y1(u,c,p,s),renderState:i()};return r&&(m.onMount=g=>r({props:u,current:g,...m}),m.onUpdate=g=>r(g)),m}const Av=s=>(i,r)=>{const u=G.useContext(gr),c=G.useContext(kc),p=()=>b1(s,i,u,c);return r?p():Xq(p)};function y1(s,i,r,u){const c={},p=u(s,{});for(const q in p)c[q]=or(p[q]);let{initial:m,animate:g}=s;const h=br(s),f=yv(s);i&&f&&!h&&s.inherit!==!1&&(m===void 0&&(m=i.initial),g===void 0&&(g=i.animate));let b=r?r.initial===!1:!1;b=b||m===!1;const y=b?g:m;if(y&&typeof y!="boolean"&&!vr(y)){const q=Array.isArray(y)?y:[y];for(let T=0;T<q.length;T++){const j=Vc(s,q[T]);if(j){const{transitionEnd:R,transition:B,...U}=j;for(const I in U){let H=U[I];if(Array.isArray(H)){const ae=b?H.length-1:0;H=H[ae]}H!==null&&(c[I]=H)}for(const I in R)c[I]=R[I]}}}return c}const hs=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],xt=new Set(hs),Ev=s=>i=>typeof i=="string"&&i.startsWith(s),Cv=Ev("--"),x1=Ev("var(--"),Gc=s=>x1(s)?q1.test(s.split("/*")[0].trim()):!1,q1=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Tv=(s,i)=>i&&typeof s=="number"?i.transform(s):s,yo=(s,i,r)=>r>i?i:r<s?s:r,gs={test:s=>typeof s=="number",parse:parseFloat,transform:s=>s},Ci={...gs,transform:s=>yo(0,1,s)},er={...gs,default:1},Di=s=>({test:i=>typeof i=="string"&&i.endsWith(s)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${s}`}),Fo=Di("deg"),Ya=Di("%"),ee=Di("px"),S1=Di("vh"),A1=Di("vw"),Rh={...Ya,parse:s=>Ya.parse(s)/100,transform:s=>Ya.transform(s*100)},E1={borderWidth:ee,borderTopWidth:ee,borderRightWidth:ee,borderBottomWidth:ee,borderLeftWidth:ee,borderRadius:ee,radius:ee,borderTopLeftRadius:ee,borderTopRightRadius:ee,borderBottomRightRadius:ee,borderBottomLeftRadius:ee,width:ee,maxWidth:ee,height:ee,maxHeight:ee,top:ee,right:ee,bottom:ee,left:ee,padding:ee,paddingTop:ee,paddingRight:ee,paddingBottom:ee,paddingLeft:ee,margin:ee,marginTop:ee,marginRight:ee,marginBottom:ee,marginLeft:ee,backgroundPositionX:ee,backgroundPositionY:ee},C1={rotate:Fo,rotateX:Fo,rotateY:Fo,rotateZ:Fo,scale:er,scaleX:er,scaleY:er,scaleZ:er,skew:Fo,skewX:Fo,skewY:Fo,distance:ee,translateX:ee,translateY:ee,translateZ:ee,x:ee,y:ee,z:ee,perspective:ee,transformPerspective:ee,opacity:Ci,originX:Rh,originY:Rh,originZ:ee},Uh={...gs,transform:Math.round},_c={...E1,...C1,zIndex:Uh,size:ee,fillOpacity:Ci,strokeOpacity:Ci,numOctaves:Uh},T1={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},M1=hs.length;function z1(s,i,r){let u="",c=!0;for(let p=0;p<M1;p++){const m=hs[p],g=s[m];if(g===void 0)continue;let h=!0;if(typeof g=="number"?h=g===(m.startsWith("scale")?1:0):h=parseFloat(g)===0,!h||r){const f=Tv(g,_c[m]);if(!h){c=!1;const b=T1[m]||m;u+=`${b}(${f}) `}r&&(i[m]=f)}}return u=u.trim(),r?u=r(i,c?"":u):c&&(u="none"),u}function Ic(s,i,r){const{style:u,vars:c,transformOrigin:p}=s;let m=!1,g=!1;for(const h in i){const f=i[h];if(xt.has(h)){m=!0;continue}else if(Cv(h)){c[h]=f;continue}else{const b=Tv(f,_c[h]);h.startsWith("origin")?(g=!0,p[h]=b):u[h]=b}}if(i.transform||(m||r?u.transform=z1(i,s.transform,r):u.transform&&(u.transform="none")),g){const{originX:h="50%",originY:f="50%",originZ:b=0}=p;u.transformOrigin=`${h} ${f} ${b}`}}const D1={offset:"stroke-dashoffset",array:"stroke-dasharray"},L1={offset:"strokeDashoffset",array:"strokeDasharray"};function w1(s,i,r=1,u=0,c=!0){s.pathLength=1;const p=c?D1:L1;s[p.offset]=ee.transform(-u);const m=ee.transform(i),g=ee.transform(r);s[p.array]=`${m} ${g}`}function Bh(s,i,r){return typeof s=="string"?s:ee.transform(i+r*s)}function k1(s,i,r){const u=Bh(i,s.x,s.width),c=Bh(r,s.y,s.height);return`${u} ${c}`}function Hc(s,{attrX:i,attrY:r,attrScale:u,originX:c,originY:p,pathLength:m,pathSpacing:g=1,pathOffset:h=0,...f},b,y){if(Ic(s,f,y),b){s.style.viewBox&&(s.attrs.viewBox=s.style.viewBox);return}s.attrs=s.style,s.style={};const{attrs:q,style:T,dimensions:j}=s;q.transform&&(j&&(T.transform=q.transform),delete q.transform),j&&(c!==void 0||p!==void 0||T.transform)&&(T.transformOrigin=k1(j,c!==void 0?c:.5,p!==void 0?p:.5)),i!==void 0&&(q.x=i),r!==void 0&&(q.y=r),u!==void 0&&(q.scale=u),m!==void 0&&w1(q,m,g,h,!1)}const Fc=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Mv=()=>({...Fc(),attrs:{}}),Qc=s=>typeof s=="string"&&s.toLowerCase()==="svg";function zv(s,{style:i,vars:r},u,c){Object.assign(s.style,i,c&&c.getProjectionStyles(u));for(const p in r)s.style.setProperty(p,r[p])}const Dv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Lv(s,i,r,u){zv(s,i,void 0,u);for(const c in i.attrs)s.setAttribute(Dv.has(c)?c:Rc(c),i.attrs[c])}const ur={};function O1(s){Object.assign(ur,s)}function wv(s,{layout:i,layoutId:r}){return xt.has(s)||s.startsWith("origin")||(i||r!==void 0)&&(!!ur[s]||s==="opacity")}function Xc(s,i,r){var u;const{style:c}=s,p={};for(const m in c)(ta(c[m])||i.style&&ta(i.style[m])||wv(m,s)||((u=r==null?void 0:r.getValue(m))===null||u===void 0?void 0:u.liveStyle)!==void 0)&&(p[m]=c[m]);return p}function kv(s,i,r){const u=Xc(s,i,r);for(const c in s)if(ta(s[c])||ta(i[c])){const p=hs.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;u[p]=s[c]}return u}function j1(s,i){try{i.dimensions=typeof s.getBBox=="function"?s.getBBox():s.getBoundingClientRect()}catch{i.dimensions={x:0,y:0,width:0,height:0}}}const Vh=["x","y","width","height","cx","cy","r"],N1={useVisualState:Av({scrapeMotionValuesFromProps:kv,createRenderState:Mv,onUpdate:({props:s,prevProps:i,current:r,renderState:u,latestValues:c})=>{if(!r)return;let p=!!s.drag;if(!p){for(const g in c)if(xt.has(g)){p=!0;break}}if(!p)return;let m=!i;if(i)for(let g=0;g<Vh.length;g++){const h=Vh[g];s[h]!==i[h]&&(m=!0)}m&&De.read(()=>{j1(r,u),De.render(()=>{Hc(u,c,Qc(r.tagName),s.transformTemplate),Lv(r,u)})})}})},P1={useVisualState:Av({scrapeMotionValuesFromProps:Xc,createRenderState:Fc})};function Ov(s,i,r){for(const u in i)!ta(i[u])&&!wv(u,r)&&(s[u]=i[u])}function R1({transformTemplate:s},i){return G.useMemo(()=>{const r=Fc();return Ic(r,i,s),Object.assign({},r.vars,r.style)},[i])}function U1(s,i){const r=s.style||{},u={};return Ov(u,r,s),Object.assign(u,R1(s,i)),u}function B1(s,i){const r={},u=U1(s,i);return s.drag&&s.dragListener!==!1&&(r.draggable=!1,u.userSelect=u.WebkitUserSelect=u.WebkitTouchCallout="none",u.touchAction=s.drag===!0?"none":`pan-${s.drag==="x"?"y":"x"}`),s.tabIndex===void 0&&(s.onTap||s.onTapStart||s.whileTap)&&(r.tabIndex=0),r.style=u,r}function V1(s,i,r,u){const c=G.useMemo(()=>{const p=Mv();return Hc(p,i,Qc(u),s.transformTemplate),{...p.attrs,style:{...p.style}}},[i]);if(s.style){const p={};Ov(p,s.style,s),c.style={...p,...c.style}}return c}function G1(s=!1){return(r,u,c,{latestValues:p},m)=>{const h=(Bc(r)?V1:B1)(u,p,m,r),f=o1(u,typeof r=="string",s),b=r!==G.Fragment?{...f,...h,ref:c}:{},{children:y}=u,q=G.useMemo(()=>ta(y)?y.get():y,[y]);return G.createElement(r,{...b,children:q})}}function _1(s,i){return function(u,{forwardMotionProps:c}={forwardMotionProps:!1}){const m={...Bc(u)?N1:P1,preloadedFeatures:s,useRender:G1(c),createVisualElement:i,Component:u};return d1(m)}}function jv(s,i){if(!Array.isArray(i))return!1;const r=i.length;if(r!==s.length)return!1;for(let u=0;u<r;u++)if(i[u]!==s[u])return!1;return!0}function yr(s,i,r){const u=s.getProps();return Vc(u,i,r!==void 0?r:u.custom,s)}const I1=jc(()=>window.ScrollTimeline!==void 0);class H1{constructor(i){this.stop=()=>this.runAll("stop"),this.animations=i.filter(Boolean)}get finished(){return Promise.all(this.animations.map(i=>"finished"in i?i.finished:i))}getAll(i){return this.animations[0][i]}setAll(i,r){for(let u=0;u<this.animations.length;u++)this.animations[u][i]=r}attachTimeline(i,r){const u=this.animations.map(c=>{if(I1()&&c.attachTimeline)return c.attachTimeline(i);if(typeof r=="function")return r(c)});return()=>{u.forEach((c,p)=>{c&&c(),this.animations[p].stop()})}}get time(){return this.getAll("time")}set time(i){this.setAll("time",i)}get speed(){return this.getAll("speed")}set speed(i){this.setAll("speed",i)}get startTime(){return this.getAll("startTime")}get duration(){let i=0;for(let r=0;r<this.animations.length;r++)i=Math.max(i,this.animations[r].duration);return i}runAll(i){this.animations.forEach(r=>r[i]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class F1 extends H1{then(i,r){return Promise.all(this.animations).then(i).catch(r)}}function Kc(s,i){return s?s[i]||s.default||s:void 0}const mc=2e4;function Nv(s){let i=0;const r=50;let u=s.next(i);for(;!u.done&&i<mc;)i+=r,u=s.next(i);return i>=mc?1/0:i}function Yc(s){return typeof s=="function"}function Gh(s,i){s.timeline=i,s.onfinish=null}const Wc=s=>Array.isArray(s)&&typeof s[0]=="number",Q1={linearEasing:void 0};function X1(s,i){const r=jc(s);return()=>{var u;return(u=Q1[i])!==null&&u!==void 0?u:r()}}const lr=X1(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Pv=(s,i,r=10)=>{let u="";const c=Math.max(Math.round(i/r),2);for(let p=0;p<c;p++)u+=s(ds(0,c-1,p))+", ";return`linear(${u.substring(0,u.length-2)})`};function Rv(s){return!!(typeof s=="function"&&lr()||!s||typeof s=="string"&&(s in pc||lr())||Wc(s)||Array.isArray(s)&&s.every(Rv))}const fi=([s,i,r,u])=>`cubic-bezier(${s}, ${i}, ${r}, ${u})`,pc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:fi([0,.65,.55,1]),circOut:fi([.55,0,1,.45]),backIn:fi([.31,.01,.66,-.59]),backOut:fi([.33,1.53,.69,.99])};function Uv(s,i){if(s)return typeof s=="function"&&lr()?Pv(s,i):Wc(s)?fi(s):Array.isArray(s)?s.map(r=>Uv(r,i)||pc.easeOut):pc[s]}const _a={x:!1,y:!1};function Bv(){return _a.x||_a.y}function K1(s,i,r){var u;if(s instanceof Element)return[s];if(typeof s=="string"){let c=document;const p=(u=void 0)!==null&&u!==void 0?u:c.querySelectorAll(s);return p?Array.from(p):[]}return Array.from(s)}function Vv(s,i){const r=K1(s),u=new AbortController,c={passive:!0,...i,signal:u.signal};return[r,c,()=>u.abort()]}function _h(s){return i=>{i.pointerType==="touch"||Bv()||s(i)}}function Y1(s,i,r={}){const[u,c,p]=Vv(s,r),m=_h(g=>{const{target:h}=g,f=i(g);if(typeof f!="function"||!h)return;const b=_h(y=>{f(y),h.removeEventListener("pointerleave",b)});h.addEventListener("pointerleave",b,c)});return u.forEach(g=>{g.addEventListener("pointerenter",m,c)}),p}const Gv=(s,i)=>i?s===i?!0:Gv(s,i.parentElement):!1,Zc=s=>s.pointerType==="mouse"?typeof s.button!="number"||s.button<=0:s.isPrimary!==!1,W1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Z1(s){return W1.has(s.tagName)||s.tabIndex!==-1}const hi=new WeakSet;function Ih(s){return i=>{i.key==="Enter"&&s(i)}}function Wl(s,i){s.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const J1=(s,i)=>{const r=s.currentTarget;if(!r)return;const u=Ih(()=>{if(hi.has(r))return;Wl(r,"down");const c=Ih(()=>{Wl(r,"up")}),p=()=>Wl(r,"cancel");r.addEventListener("keyup",c,i),r.addEventListener("blur",p,i)});r.addEventListener("keydown",u,i),r.addEventListener("blur",()=>r.removeEventListener("keydown",u),i)};function Hh(s){return Zc(s)&&!Bv()}function $1(s,i,r={}){const[u,c,p]=Vv(s,r),m=g=>{const h=g.currentTarget;if(!Hh(g)||hi.has(h))return;hi.add(h);const f=i(g),b=(T,j)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",q),!(!Hh(T)||!hi.has(h))&&(hi.delete(h),typeof f=="function"&&f(T,{success:j}))},y=T=>{b(T,r.useGlobalTarget||Gv(h,T.target))},q=T=>{b(T,!1)};window.addEventListener("pointerup",y,c),window.addEventListener("pointercancel",q,c)};return u.forEach(g=>{!Z1(g)&&g.getAttribute("tabindex")===null&&(g.tabIndex=0),(r.useGlobalTarget?window:g).addEventListener("pointerdown",m,c),g.addEventListener("focus",f=>J1(f,c),c)}),p}function eS(s){return s==="x"||s==="y"?_a[s]?null:(_a[s]=!0,()=>{_a[s]=!1}):_a.x||_a.y?null:(_a.x=_a.y=!0,()=>{_a.x=_a.y=!1})}const _v=new Set(["width","height","top","left","right","bottom",...hs]);let tr;function aS(){tr=void 0}const Wa={now:()=>(tr===void 0&&Wa.set(ea.isProcessing||Wq.useManualTiming?ea.timestamp:performance.now()),tr),set:s=>{tr=s,queueMicrotask(aS)}};function Jc(s,i){s.indexOf(i)===-1&&s.push(i)}function $c(s,i){const r=s.indexOf(i);r>-1&&s.splice(r,1)}class ed{constructor(){this.subscriptions=[]}add(i){return Jc(this.subscriptions,i),()=>$c(this.subscriptions,i)}notify(i,r,u){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,r,u);else for(let p=0;p<c;p++){const m=this.subscriptions[p];m&&m(i,r,u)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Iv(s,i){return i?s*(1e3/i):0}const Fh=30,oS=s=>!isNaN(parseFloat(s));class tS{constructor(i,r={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(u,c=!0)=>{const p=Wa.now();this.updatedAt!==p&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(u),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),c&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(i),this.owner=r.owner}setCurrent(i){this.current=i,this.updatedAt=Wa.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=oS(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,r){this.events[i]||(this.events[i]=new ed);const u=this.events[i].add(r);return i==="change"?()=>{u(),De.read(()=>{this.events.change.getSize()||this.stop()})}:u}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,r){this.passiveEffect=i,this.stopPassiveEffect=r}set(i,r=!0){!r||!this.passiveEffect?this.updateAndNotify(i,r):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,r,u){this.set(r),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-u}jump(i,r=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=Wa.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>Fh)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,Fh);return Iv(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(i){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=i(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ti(s,i){return new tS(s,i)}function sS(s,i,r){s.hasValue(i)?s.getValue(i).set(r):s.addValue(i,Ti(r))}function iS(s,i){const r=yr(s,i);let{transitionEnd:u={},transition:c={},...p}=r||{};p={...p,...u};for(const m in p){const g=v1(p[m]);sS(s,m,g)}}function nS(s){return!!(ta(s)&&s.add)}function fc(s,i){const r=s.getValue("willChange");if(nS(r))return r.add(i)}function Hv(s){return s.props[xv]}const Fv=(s,i,r)=>(((1-3*r+3*i)*s+(3*r-6*i))*s+3*i)*s,rS=1e-7,uS=12;function lS(s,i,r,u,c){let p,m,g=0;do m=i+(r-i)/2,p=Fv(m,u,c)-s,p>0?r=m:i=m;while(Math.abs(p)>rS&&++g<uS);return m}function Li(s,i,r,u){if(s===i&&r===u)return Aa;const c=p=>lS(p,0,1,s,r);return p=>p===0||p===1?p:Fv(c(p),i,u)}const Qv=s=>i=>i<=.5?s(2*i)/2:(2-s(2*(1-i)))/2,Xv=s=>i=>1-s(1-i),Kv=Li(.33,1.53,.69,.99),ad=Xv(Kv),Yv=Qv(ad),Wv=s=>(s*=2)<1?.5*ad(s):.5*(2-Math.pow(2,-10*(s-1))),od=s=>1-Math.sin(Math.acos(s)),Zv=Xv(od),Jv=Qv(od),$v=s=>/^0[^.\s]+$/u.test(s);function cS(s){return typeof s=="number"?s===0:s!==null?s==="none"||s==="0"||$v(s):!0}const bi=s=>Math.round(s*1e5)/1e5,td=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function dS(s){return s==null}const mS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,sd=(s,i)=>r=>!!(typeof r=="string"&&mS.test(r)&&r.startsWith(s)||i&&!dS(r)&&Object.prototype.hasOwnProperty.call(r,i)),eb=(s,i,r)=>u=>{if(typeof u!="string")return u;const[c,p,m,g]=u.match(td);return{[s]:parseFloat(c),[i]:parseFloat(p),[r]:parseFloat(m),alpha:g!==void 0?parseFloat(g):1}},pS=s=>yo(0,255,s),Zl={...gs,transform:s=>Math.round(pS(s))},bt={test:sd("rgb","red"),parse:eb("red","green","blue"),transform:({red:s,green:i,blue:r,alpha:u=1})=>"rgba("+Zl.transform(s)+", "+Zl.transform(i)+", "+Zl.transform(r)+", "+bi(Ci.transform(u))+")"};function fS(s){let i="",r="",u="",c="";return s.length>5?(i=s.substring(1,3),r=s.substring(3,5),u=s.substring(5,7),c=s.substring(7,9)):(i=s.substring(1,2),r=s.substring(2,3),u=s.substring(3,4),c=s.substring(4,5),i+=i,r+=r,u+=u,c+=c),{red:parseInt(i,16),green:parseInt(r,16),blue:parseInt(u,16),alpha:c?parseInt(c,16)/255:1}}const hc={test:sd("#"),parse:fS,transform:bt.transform},rs={test:sd("hsl","hue"),parse:eb("hue","saturation","lightness"),transform:({hue:s,saturation:i,lightness:r,alpha:u=1})=>"hsla("+Math.round(s)+", "+Ya.transform(bi(i))+", "+Ya.transform(bi(r))+", "+bi(Ci.transform(u))+")"},oa={test:s=>bt.test(s)||hc.test(s)||rs.test(s),parse:s=>bt.test(s)?bt.parse(s):rs.test(s)?rs.parse(s):hc.parse(s),transform:s=>typeof s=="string"?s:s.hasOwnProperty("red")?bt.transform(s):rs.transform(s)},hS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function gS(s){var i,r;return isNaN(s)&&typeof s=="string"&&(((i=s.match(td))===null||i===void 0?void 0:i.length)||0)+(((r=s.match(hS))===null||r===void 0?void 0:r.length)||0)>0}const ab="number",ob="color",vS="var",bS="var(",Qh="${}",yS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Mi(s){const i=s.toString(),r=[],u={color:[],number:[],var:[]},c=[];let p=0;const g=i.replace(yS,h=>(oa.test(h)?(u.color.push(p),c.push(ob),r.push(oa.parse(h))):h.startsWith(bS)?(u.var.push(p),c.push(vS),r.push(h)):(u.number.push(p),c.push(ab),r.push(parseFloat(h))),++p,Qh)).split(Qh);return{values:r,split:g,indexes:u,types:c}}function tb(s){return Mi(s).values}function sb(s){const{split:i,types:r}=Mi(s),u=i.length;return c=>{let p="";for(let m=0;m<u;m++)if(p+=i[m],c[m]!==void 0){const g=r[m];g===ab?p+=bi(c[m]):g===ob?p+=oa.transform(c[m]):p+=c[m]}return p}}const xS=s=>typeof s=="number"?0:s;function qS(s){const i=tb(s);return sb(s)(i.map(xS))}const Ko={test:gS,parse:tb,createTransformer:sb,getAnimatableNone:qS},SS=new Set(["brightness","contrast","saturate","opacity"]);function AS(s){const[i,r]=s.slice(0,-1).split("(");if(i==="drop-shadow")return s;const[u]=r.match(td)||[];if(!u)return s;const c=r.replace(u,"");let p=SS.has(i)?1:0;return u!==r&&(p*=100),i+"("+p+c+")"}const ES=/\b([a-z-]*)\(.*?\)/gu,gc={...Ko,getAnimatableNone:s=>{const i=s.match(ES);return i?i.map(AS).join(" "):s}},CS={..._c,color:oa,backgroundColor:oa,outlineColor:oa,fill:oa,stroke:oa,borderColor:oa,borderTopColor:oa,borderRightColor:oa,borderBottomColor:oa,borderLeftColor:oa,filter:gc,WebkitFilter:gc},id=s=>CS[s];function ib(s,i){let r=id(s);return r!==gc&&(r=Ko),r.getAnimatableNone?r.getAnimatableNone(i):void 0}const TS=new Set(["auto","none","0"]);function MS(s,i,r){let u=0,c;for(;u<s.length&&!c;){const p=s[u];typeof p=="string"&&!TS.has(p)&&Mi(p).values.length&&(c=s[u]),u++}if(c&&r)for(const p of i)s[p]=ib(r,c)}const Xh=s=>s===gs||s===ee,Kh=(s,i)=>parseFloat(s.split(", ")[i]),Yh=(s,i)=>(r,{transform:u})=>{if(u==="none"||!u)return 0;const c=u.match(/^matrix3d\((.+)\)$/u);if(c)return Kh(c[1],i);{const p=u.match(/^matrix\((.+)\)$/u);return p?Kh(p[1],s):0}},zS=new Set(["x","y","z"]),DS=hs.filter(s=>!zS.has(s));function LS(s){const i=[];return DS.forEach(r=>{const u=s.getValue(r);u!==void 0&&(i.push([r,u.get()]),u.set(r.startsWith("scale")?1:0))}),i}const ps={width:({x:s},{paddingLeft:i="0",paddingRight:r="0"})=>s.max-s.min-parseFloat(i)-parseFloat(r),height:({y:s},{paddingTop:i="0",paddingBottom:r="0"})=>s.max-s.min-parseFloat(i)-parseFloat(r),top:(s,{top:i})=>parseFloat(i),left:(s,{left:i})=>parseFloat(i),bottom:({y:s},{top:i})=>parseFloat(i)+(s.max-s.min),right:({x:s},{left:i})=>parseFloat(i)+(s.max-s.min),x:Yh(4,13),y:Yh(5,14)};ps.translateX=ps.x;ps.translateY=ps.y;const yt=new Set;let vc=!1,bc=!1;function nb(){if(bc){const s=Array.from(yt).filter(u=>u.needsMeasurement),i=new Set(s.map(u=>u.element)),r=new Map;i.forEach(u=>{const c=LS(u);c.length&&(r.set(u,c),u.render())}),s.forEach(u=>u.measureInitialState()),i.forEach(u=>{u.render();const c=r.get(u);c&&c.forEach(([p,m])=>{var g;(g=u.getValue(p))===null||g===void 0||g.set(m)})}),s.forEach(u=>u.measureEndState()),s.forEach(u=>{u.suspendedScrollY!==void 0&&window.scrollTo(0,u.suspendedScrollY)})}bc=!1,vc=!1,yt.forEach(s=>s.complete()),yt.clear()}function rb(){yt.forEach(s=>{s.readKeyframes(),s.needsMeasurement&&(bc=!0)})}function wS(){rb(),nb()}class nd{constructor(i,r,u,c,p,m=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...i],this.onComplete=r,this.name=u,this.motionValue=c,this.element=p,this.isAsync=m}scheduleResolve(){this.isScheduled=!0,this.isAsync?(yt.add(this),vc||(vc=!0,De.read(rb),De.resolveKeyframes(nb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:r,element:u,motionValue:c}=this;for(let p=0;p<i.length;p++)if(i[p]===null)if(p===0){const m=c==null?void 0:c.get(),g=i[i.length-1];if(m!==void 0)i[0]=m;else if(u&&r){const h=u.readValue(r,g);h!=null&&(i[0]=h)}i[0]===void 0&&(i[0]=g),c&&m===void 0&&c.set(i[0])}else i[p]=i[p-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),yt.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,yt.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const ub=s=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(s),kS=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function OS(s){const i=kS.exec(s);if(!i)return[,];const[,r,u,c]=i;return[`--${r??u}`,c]}function lb(s,i,r=1){const[u,c]=OS(s);if(!u)return;const p=window.getComputedStyle(i).getPropertyValue(u);if(p){const m=p.trim();return ub(m)?parseFloat(m):m}return Gc(c)?lb(c,i,r+1):c}const cb=s=>i=>i.test(s),jS={test:s=>s==="auto",parse:s=>s},db=[gs,ee,Ya,Fo,A1,S1,jS],Wh=s=>db.find(cb(s));class mb extends nd{constructor(i,r,u,c,p){super(i,r,u,c,p,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:r,name:u}=this;if(!r||!r.current)return;super.readKeyframes();for(let h=0;h<i.length;h++){let f=i[h];if(typeof f=="string"&&(f=f.trim(),Gc(f))){const b=lb(f,r.current);b!==void 0&&(i[h]=b),h===i.length-1&&(this.finalKeyframe=f)}}if(this.resolveNoneKeyframes(),!_v.has(u)||i.length!==2)return;const[c,p]=i,m=Wh(c),g=Wh(p);if(m!==g)if(Xh(m)&&Xh(g))for(let h=0;h<i.length;h++){const f=i[h];typeof f=="string"&&(i[h]=parseFloat(f))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:r}=this,u=[];for(let c=0;c<i.length;c++)cS(i[c])&&u.push(c);u.length&&MS(i,u,r)}measureInitialState(){const{element:i,unresolvedKeyframes:r,name:u}=this;if(!i||!i.current)return;u==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ps[u](i.measureViewportBox(),window.getComputedStyle(i.current)),r[0]=this.measuredOrigin;const c=r[r.length-1];c!==void 0&&i.getValue(u,c).jump(c,!1)}measureEndState(){var i;const{element:r,name:u,unresolvedKeyframes:c}=this;if(!r||!r.current)return;const p=r.getValue(u);p&&p.jump(this.measuredOrigin,!1);const m=c.length-1,g=c[m];c[m]=ps[u](r.measureViewportBox(),window.getComputedStyle(r.current)),g!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=g),!((i=this.removedTransforms)===null||i===void 0)&&i.length&&this.removedTransforms.forEach(([h,f])=>{r.getValue(h).set(f)}),this.resolveNoneKeyframes()}}const Zh=(s,i)=>i==="zIndex"?!1:!!(typeof s=="number"||Array.isArray(s)||typeof s=="string"&&(Ko.test(s)||s==="0")&&!s.startsWith("url("));function NS(s){const i=s[0];if(s.length===1)return!0;for(let r=0;r<s.length;r++)if(s[r]!==i)return!0}function PS(s,i,r,u){const c=s[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const p=s[s.length-1],m=Zh(c,i),g=Zh(p,i);return!m||!g?!1:NS(s)||(r==="spring"||Yc(r))&&u}const RS=s=>s!==null;function xr(s,{repeat:i,repeatType:r="loop"},u){const c=s.filter(RS),p=i&&r!=="loop"&&i%2===1?0:c.length-1;return!p||u===void 0?c[p]:u}const US=40;class pb{constructor({autoplay:i=!0,delay:r=0,type:u="keyframes",repeat:c=0,repeatDelay:p=0,repeatType:m="loop",...g}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Wa.now(),this.options={autoplay:i,delay:r,type:u,repeat:c,repeatDelay:p,repeatType:m,...g},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>US?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&wS(),this._resolved}onKeyframesResolved(i,r){this.resolvedAt=Wa.now(),this.hasAttemptedResolve=!0;const{name:u,type:c,velocity:p,delay:m,onComplete:g,onUpdate:h,isGenerator:f}=this.options;if(!f&&!PS(i,u,c,p))if(m)this.options.duration=0;else{h&&h(xr(i,this.options,r)),g&&g(),this.resolveFinishedPromise();return}const b=this.initPlayback(i,r);b!==!1&&(this._resolved={keyframes:i,finalKeyframe:r,...b},this.onPostResolved())}onPostResolved(){}then(i,r){return this.currentFinishedPromise.then(i,r)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(i=>{this.resolveFinishedPromise=i})}}const we=(s,i,r)=>s+(i-s)*r;function Jl(s,i,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?s+(i-s)*6*r:r<1/2?i:r<2/3?s+(i-s)*(2/3-r)*6:s}function BS({hue:s,saturation:i,lightness:r,alpha:u}){s/=360,i/=100,r/=100;let c=0,p=0,m=0;if(!i)c=p=m=r;else{const g=r<.5?r*(1+i):r+i-r*i,h=2*r-g;c=Jl(h,g,s+1/3),p=Jl(h,g,s),m=Jl(h,g,s-1/3)}return{red:Math.round(c*255),green:Math.round(p*255),blue:Math.round(m*255),alpha:u}}function cr(s,i){return r=>r>0?i:s}const $l=(s,i,r)=>{const u=s*s,c=r*(i*i-u)+u;return c<0?0:Math.sqrt(c)},VS=[hc,bt,rs],GS=s=>VS.find(i=>i.test(s));function Jh(s){const i=GS(s);if(!i)return!1;let r=i.parse(s);return i===rs&&(r=BS(r)),r}const $h=(s,i)=>{const r=Jh(s),u=Jh(i);if(!r||!u)return cr(s,i);const c={...r};return p=>(c.red=$l(r.red,u.red,p),c.green=$l(r.green,u.green,p),c.blue=$l(r.blue,u.blue,p),c.alpha=we(r.alpha,u.alpha,p),bt.transform(c))},_S=(s,i)=>r=>i(s(r)),wi=(...s)=>s.reduce(_S),yc=new Set(["none","hidden"]);function IS(s,i){return yc.has(s)?r=>r<=0?s:i:r=>r>=1?i:s}function HS(s,i){return r=>we(s,i,r)}function rd(s){return typeof s=="number"?HS:typeof s=="string"?Gc(s)?cr:oa.test(s)?$h:XS:Array.isArray(s)?fb:typeof s=="object"?oa.test(s)?$h:FS:cr}function fb(s,i){const r=[...s],u=r.length,c=s.map((p,m)=>rd(p)(p,i[m]));return p=>{for(let m=0;m<u;m++)r[m]=c[m](p);return r}}function FS(s,i){const r={...s,...i},u={};for(const c in r)s[c]!==void 0&&i[c]!==void 0&&(u[c]=rd(s[c])(s[c],i[c]));return c=>{for(const p in u)r[p]=u[p](c);return r}}function QS(s,i){var r;const u=[],c={color:0,var:0,number:0};for(let p=0;p<i.values.length;p++){const m=i.types[p],g=s.indexes[m][c[m]],h=(r=s.values[g])!==null&&r!==void 0?r:0;u[p]=h,c[m]++}return u}const XS=(s,i)=>{const r=Ko.createTransformer(i),u=Mi(s),c=Mi(i);return u.indexes.var.length===c.indexes.var.length&&u.indexes.color.length===c.indexes.color.length&&u.indexes.number.length>=c.indexes.number.length?yc.has(s)&&!c.values.length||yc.has(i)&&!u.values.length?IS(s,i):wi(fb(QS(u,c),c.values),r):cr(s,i)};function hb(s,i,r){return typeof s=="number"&&typeof i=="number"&&typeof r=="number"?we(s,i,r):rd(s)(s,i)}const KS=5;function gb(s,i,r){const u=Math.max(i-KS,0);return Iv(r-s(u),i-u)}const je={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ec=.001;function YS({duration:s=je.duration,bounce:i=je.bounce,velocity:r=je.velocity,mass:u=je.mass}){let c,p,m=1-i;m=yo(je.minDamping,je.maxDamping,m),s=yo(je.minDuration,je.maxDuration,bo(s)),m<1?(c=f=>{const b=f*m,y=b*s,q=b-r,T=xc(f,m),j=Math.exp(-y);return ec-q/T*j},p=f=>{const y=f*m*s,q=y*r+r,T=Math.pow(m,2)*Math.pow(f,2)*s,j=Math.exp(-y),R=xc(Math.pow(f,2),m);return(-c(f)+ec>0?-1:1)*((q-T)*j)/R}):(c=f=>{const b=Math.exp(-f*s),y=(f-r)*s+1;return-ec+b*y},p=f=>{const b=Math.exp(-f*s),y=(r-f)*(s*s);return b*y});const g=5/s,h=ZS(c,p,g);if(s=vo(s),isNaN(h))return{stiffness:je.stiffness,damping:je.damping,duration:s};{const f=Math.pow(h,2)*u;return{stiffness:f,damping:m*2*Math.sqrt(u*f),duration:s}}}const WS=12;function ZS(s,i,r){let u=r;for(let c=1;c<WS;c++)u=u-s(u)/i(u);return u}function xc(s,i){return s*Math.sqrt(1-i*i)}const JS=["duration","bounce"],$S=["stiffness","damping","mass"];function eg(s,i){return i.some(r=>s[r]!==void 0)}function e2(s){let i={velocity:je.velocity,stiffness:je.stiffness,damping:je.damping,mass:je.mass,isResolvedFromDuration:!1,...s};if(!eg(s,$S)&&eg(s,JS))if(s.visualDuration){const r=s.visualDuration,u=2*Math.PI/(r*1.2),c=u*u,p=2*yo(.05,1,1-(s.bounce||0))*Math.sqrt(c);i={...i,mass:je.mass,stiffness:c,damping:p}}else{const r=YS(s);i={...i,...r,mass:je.mass},i.isResolvedFromDuration=!0}return i}function vb(s=je.visualDuration,i=je.bounce){const r=typeof s!="object"?{visualDuration:s,keyframes:[0,1],bounce:i}:s;let{restSpeed:u,restDelta:c}=r;const p=r.keyframes[0],m=r.keyframes[r.keyframes.length-1],g={done:!1,value:p},{stiffness:h,damping:f,mass:b,duration:y,velocity:q,isResolvedFromDuration:T}=e2({...r,velocity:-bo(r.velocity||0)}),j=q||0,R=f/(2*Math.sqrt(h*b)),B=m-p,U=bo(Math.sqrt(h/b)),I=Math.abs(B)<5;u||(u=I?je.restSpeed.granular:je.restSpeed.default),c||(c=I?je.restDelta.granular:je.restDelta.default);let H;if(R<1){const Y=xc(U,R);H=te=>{const Z=Math.exp(-R*U*te);return m-Z*((j+R*U*B)/Y*Math.sin(Y*te)+B*Math.cos(Y*te))}}else if(R===1)H=Y=>m-Math.exp(-U*Y)*(B+(j+U*B)*Y);else{const Y=U*Math.sqrt(R*R-1);H=te=>{const Z=Math.exp(-R*U*te),J=Math.min(Y*te,300);return m-Z*((j+R*U*B)*Math.sinh(J)+Y*B*Math.cosh(J))/Y}}const ae={calculatedDuration:T&&y||null,next:Y=>{const te=H(Y);if(T)g.done=Y>=y;else{let Z=0;R<1&&(Z=Y===0?vo(j):gb(H,Y,te));const J=Math.abs(Z)<=u,Te=Math.abs(m-te)<=c;g.done=J&&Te}return g.value=g.done?m:te,g},toString:()=>{const Y=Math.min(Nv(ae),mc),te=Pv(Z=>ae.next(Y*Z).value,Y,30);return Y+"ms "+te}};return ae}function ag({keyframes:s,velocity:i=0,power:r=.8,timeConstant:u=325,bounceDamping:c=10,bounceStiffness:p=500,modifyTarget:m,min:g,max:h,restDelta:f=.5,restSpeed:b}){const y=s[0],q={done:!1,value:y},T=J=>g!==void 0&&J<g||h!==void 0&&J>h,j=J=>g===void 0?h:h===void 0||Math.abs(g-J)<Math.abs(h-J)?g:h;let R=r*i;const B=y+R,U=m===void 0?B:m(B);U!==B&&(R=U-y);const I=J=>-R*Math.exp(-J/u),H=J=>U+I(J),ae=J=>{const Te=I(J),Ie=H(J);q.done=Math.abs(Te)<=f,q.value=q.done?U:Ie};let Y,te;const Z=J=>{T(q.value)&&(Y=J,te=vb({keyframes:[q.value,j(q.value)],velocity:gb(H,J,q.value),damping:c,stiffness:p,restDelta:f,restSpeed:b}))};return Z(0),{calculatedDuration:null,next:J=>{let Te=!1;return!te&&Y===void 0&&(Te=!0,ae(J),Z(J)),Y!==void 0&&J>=Y?te.next(J-Y):(!Te&&ae(J),q)}}}const a2=Li(.42,0,1,1),o2=Li(0,0,.58,1),bb=Li(.42,0,.58,1),t2=s=>Array.isArray(s)&&typeof s[0]!="number",s2={linear:Aa,easeIn:a2,easeInOut:bb,easeOut:o2,circIn:od,circInOut:Jv,circOut:Zv,backIn:ad,backInOut:Yv,backOut:Kv,anticipate:Wv},og=s=>{if(Wc(s)){hv(s.length===4);const[i,r,u,c]=s;return Li(i,r,u,c)}else if(typeof s=="string")return s2[s];return s};function i2(s,i,r){const u=[],c=r||hb,p=s.length-1;for(let m=0;m<p;m++){let g=c(s[m],s[m+1]);if(i){const h=Array.isArray(i)?i[m]||Aa:i;g=wi(h,g)}u.push(g)}return u}function n2(s,i,{clamp:r=!0,ease:u,mixer:c}={}){const p=s.length;if(hv(p===i.length),p===1)return()=>i[0];if(p===2&&i[0]===i[1])return()=>i[1];const m=s[0]===s[1];s[0]>s[p-1]&&(s=[...s].reverse(),i=[...i].reverse());const g=i2(i,u,c),h=g.length,f=b=>{if(m&&b<s[0])return i[0];let y=0;if(h>1)for(;y<s.length-2&&!(b<s[y+1]);y++);const q=ds(s[y],s[y+1],b);return g[y](q)};return r?b=>f(yo(s[0],s[p-1],b)):f}function r2(s,i){const r=s[s.length-1];for(let u=1;u<=i;u++){const c=ds(0,i,u);s.push(we(r,1,c))}}function u2(s){const i=[0];return r2(i,s.length-1),i}function l2(s,i){return s.map(r=>r*i)}function c2(s,i){return s.map(()=>i||bb).splice(0,s.length-1)}function dr({duration:s=300,keyframes:i,times:r,ease:u="easeInOut"}){const c=t2(u)?u.map(og):og(u),p={done:!1,value:i[0]},m=l2(r&&r.length===i.length?r:u2(i),s),g=n2(m,i,{ease:Array.isArray(c)?c:c2(i,c)});return{calculatedDuration:s,next:h=>(p.value=g(h),p.done=h>=s,p)}}const d2=s=>{const i=({timestamp:r})=>s(r);return{start:()=>De.update(i,!0),stop:()=>Xo(i),now:()=>ea.isProcessing?ea.timestamp:Wa.now()}},m2={decay:ag,inertia:ag,tween:dr,keyframes:dr,spring:vb},p2=s=>s/100;class ud extends pb{constructor(i){super(i),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:h}=this.options;h&&h()};const{name:r,motionValue:u,element:c,keyframes:p}=this.options,m=(c==null?void 0:c.KeyframeResolver)||nd,g=(h,f)=>this.onKeyframesResolved(h,f);this.resolver=new m(p,g,r,u,c),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(i){const{type:r="keyframes",repeat:u=0,repeatDelay:c=0,repeatType:p,velocity:m=0}=this.options,g=Yc(r)?r:m2[r]||dr;let h,f;g!==dr&&typeof i[0]!="number"&&(h=wi(p2,hb(i[0],i[1])),i=[0,100]);const b=g({...this.options,keyframes:i});p==="mirror"&&(f=g({...this.options,keyframes:[...i].reverse(),velocity:-m})),b.calculatedDuration===null&&(b.calculatedDuration=Nv(b));const{calculatedDuration:y}=b,q=y+c,T=q*(u+1)-c;return{generator:b,mirroredGenerator:f,mapPercentToKeyframes:h,calculatedDuration:y,resolvedDuration:q,totalDuration:T}}onPostResolved(){const{autoplay:i=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!i?this.pause():this.state=this.pendingPlayState}tick(i,r=!1){const{resolved:u}=this;if(!u){const{keyframes:J}=this.options;return{done:!0,value:J[J.length-1]}}const{finalKeyframe:c,generator:p,mirroredGenerator:m,mapPercentToKeyframes:g,keyframes:h,calculatedDuration:f,totalDuration:b,resolvedDuration:y}=u;if(this.startTime===null)return p.next(0);const{delay:q,repeat:T,repeatType:j,repeatDelay:R,onUpdate:B}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-b/this.speed,this.startTime)),r?this.currentTime=i:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(i-this.startTime)*this.speed;const U=this.currentTime-q*(this.speed>=0?1:-1),I=this.speed>=0?U<0:U>b;this.currentTime=Math.max(U,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=b);let H=this.currentTime,ae=p;if(T){const J=Math.min(this.currentTime,b)/y;let Te=Math.floor(J),Ie=J%1;!Ie&&J>=1&&(Ie=1),Ie===1&&Te--,Te=Math.min(Te,T+1),!!(Te%2)&&(j==="reverse"?(Ie=1-Ie,R&&(Ie-=R/y)):j==="mirror"&&(ae=m)),H=yo(0,1,Ie)*y}const Y=I?{done:!1,value:h[0]}:ae.next(H);g&&(Y.value=g(Y.value));let{done:te}=Y;!I&&f!==null&&(te=this.speed>=0?this.currentTime>=b:this.currentTime<=0);const Z=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&te);return Z&&c!==void 0&&(Y.value=xr(h,this.options,c)),B&&B(Y.value),Z&&this.finish(),Y}get duration(){const{resolved:i}=this;return i?bo(i.calculatedDuration):0}get time(){return bo(this.currentTime)}set time(i){i=vo(i),this.currentTime=i,this.holdTime!==null||this.speed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.speed)}get speed(){return this.playbackSpeed}set speed(i){const r=this.playbackSpeed!==i;this.playbackSpeed=i,r&&(this.time=bo(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:i=d2,onPlay:r,startTime:u}=this.options;this.driver||(this.driver=i(p=>this.tick(p))),r&&r();const c=this.driver.now();this.holdTime!==null?this.startTime=c-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=c):this.startTime=u??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var i;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(i=this.currentTime)!==null&&i!==void 0?i:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:i}=this.options;i&&i()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}}const f2=new Set(["opacity","clipPath","filter","transform"]);function h2(s,i,r,{delay:u=0,duration:c=300,repeat:p=0,repeatType:m="loop",ease:g="easeInOut",times:h}={}){const f={[i]:r};h&&(f.offset=h);const b=Uv(g,c);return Array.isArray(b)&&(f.easing=b),s.animate(f,{delay:u,duration:c,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:p+1,direction:m==="reverse"?"alternate":"normal"})}const g2=jc(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),mr=10,v2=2e4;function b2(s){return Yc(s.type)||s.type==="spring"||!Rv(s.ease)}function y2(s,i){const r=new ud({...i,keyframes:s,repeat:0,delay:0,isGenerator:!0});let u={done:!1,value:s[0]};const c=[];let p=0;for(;!u.done&&p<v2;)u=r.sample(p),c.push(u.value),p+=mr;return{times:void 0,keyframes:c,duration:p-mr,ease:"linear"}}const yb={anticipate:Wv,backInOut:Yv,circInOut:Jv};function x2(s){return s in yb}class tg extends pb{constructor(i){super(i);const{name:r,motionValue:u,element:c,keyframes:p}=this.options;this.resolver=new mb(p,(m,g)=>this.onKeyframesResolved(m,g),r,u,c),this.resolver.scheduleResolve()}initPlayback(i,r){let{duration:u=300,times:c,ease:p,type:m,motionValue:g,name:h,startTime:f}=this.options;if(!g.owner||!g.owner.current)return!1;if(typeof p=="string"&&lr()&&x2(p)&&(p=yb[p]),b2(this.options)){const{onComplete:y,onUpdate:q,motionValue:T,element:j,...R}=this.options,B=y2(i,R);i=B.keyframes,i.length===1&&(i[1]=i[0]),u=B.duration,c=B.times,p=B.ease,m="keyframes"}const b=h2(g.owner.current,h,i,{...this.options,duration:u,times:c,ease:p});return b.startTime=f??this.calcStartTime(),this.pendingTimeline?(Gh(b,this.pendingTimeline),this.pendingTimeline=void 0):b.onfinish=()=>{const{onComplete:y}=this.options;g.set(xr(i,this.options,r)),y&&y(),this.cancel(),this.resolveFinishedPromise()},{animation:b,duration:u,times:c,type:m,ease:p,keyframes:i}}get duration(){const{resolved:i}=this;if(!i)return 0;const{duration:r}=i;return bo(r)}get time(){const{resolved:i}=this;if(!i)return 0;const{animation:r}=i;return bo(r.currentTime||0)}set time(i){const{resolved:r}=this;if(!r)return;const{animation:u}=r;u.currentTime=vo(i)}get speed(){const{resolved:i}=this;if(!i)return 1;const{animation:r}=i;return r.playbackRate}set speed(i){const{resolved:r}=this;if(!r)return;const{animation:u}=r;u.playbackRate=i}get state(){const{resolved:i}=this;if(!i)return"idle";const{animation:r}=i;return r.playState}get startTime(){const{resolved:i}=this;if(!i)return null;const{animation:r}=i;return r.startTime}attachTimeline(i){if(!this._resolved)this.pendingTimeline=i;else{const{resolved:r}=this;if(!r)return Aa;const{animation:u}=r;Gh(u,i)}return Aa}play(){if(this.isStopped)return;const{resolved:i}=this;if(!i)return;const{animation:r}=i;r.playState==="finished"&&this.updateFinishedPromise(),r.play()}pause(){const{resolved:i}=this;if(!i)return;const{animation:r}=i;r.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:i}=this;if(!i)return;const{animation:r,keyframes:u,duration:c,type:p,ease:m,times:g}=i;if(r.playState==="idle"||r.playState==="finished")return;if(this.time){const{motionValue:f,onUpdate:b,onComplete:y,element:q,...T}=this.options,j=new ud({...T,keyframes:u,duration:c,type:p,ease:m,times:g,isGenerator:!0}),R=vo(this.time);f.setWithVelocity(j.sample(R-mr).value,j.sample(R).value,mr)}const{onStop:h}=this.options;h&&h(),this.cancel()}complete(){const{resolved:i}=this;i&&i.animation.finish()}cancel(){const{resolved:i}=this;i&&i.animation.cancel()}static supports(i){const{motionValue:r,name:u,repeatDelay:c,repeatType:p,damping:m,type:g}=i;if(!r||!r.owner||!(r.owner.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:f}=r.owner.getProps();return g2()&&u&&f2.has(u)&&!h&&!f&&!c&&p!=="mirror"&&m!==0&&g!=="inertia"}}const q2={type:"spring",stiffness:500,damping:25,restSpeed:10},S2=s=>({type:"spring",stiffness:550,damping:s===0?2*Math.sqrt(550):30,restSpeed:10}),A2={type:"keyframes",duration:.8},E2={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},C2=(s,{keyframes:i})=>i.length>2?A2:xt.has(s)?s.startsWith("scale")?S2(i[1]):q2:E2;function T2({when:s,delay:i,delayChildren:r,staggerChildren:u,staggerDirection:c,repeat:p,repeatType:m,repeatDelay:g,from:h,elapsed:f,...b}){return!!Object.keys(b).length}const ld=(s,i,r,u={},c,p)=>m=>{const g=Kc(u,s)||{},h=g.delay||u.delay||0;let{elapsed:f=0}=u;f=f-vo(h);let b={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:i.getVelocity(),...g,delay:-f,onUpdate:q=>{i.set(q),g.onUpdate&&g.onUpdate(q)},onComplete:()=>{m(),g.onComplete&&g.onComplete()},name:s,motionValue:i,element:p?void 0:c};T2(g)||(b={...b,...C2(s,b)}),b.duration&&(b.duration=vo(b.duration)),b.repeatDelay&&(b.repeatDelay=vo(b.repeatDelay)),b.from!==void 0&&(b.keyframes[0]=b.from);let y=!1;if((b.type===!1||b.duration===0&&!b.repeatDelay)&&(b.duration=0,b.delay===0&&(y=!0)),y&&!p&&i.get()!==void 0){const q=xr(b.keyframes,g);if(q!==void 0)return De.update(()=>{b.onUpdate(q),b.onComplete()}),new F1([])}return!p&&tg.supports(b)?new tg(b):new ud(b)};function M2({protectedKeys:s,needsAnimating:i},r){const u=s.hasOwnProperty(r)&&i[r]!==!0;return i[r]=!1,u}function xb(s,i,{delay:r=0,transitionOverride:u,type:c}={}){var p;let{transition:m=s.getDefaultTransition(),transitionEnd:g,...h}=i;u&&(m=u);const f=[],b=c&&s.animationState&&s.animationState.getState()[c];for(const y in h){const q=s.getValue(y,(p=s.latestValues[y])!==null&&p!==void 0?p:null),T=h[y];if(T===void 0||b&&M2(b,y))continue;const j={delay:r,...Kc(m||{},y)};let R=!1;if(window.MotionHandoffAnimation){const U=Hv(s);if(U){const I=window.MotionHandoffAnimation(U,y,De);I!==null&&(j.startTime=I,R=!0)}}fc(s,y),q.start(ld(y,q,T,s.shouldReduceMotion&&_v.has(y)?{type:!1}:j,s,R));const B=q.animation;B&&f.push(B)}return g&&Promise.all(f).then(()=>{De.update(()=>{g&&iS(s,g)})}),f}function qc(s,i,r={}){var u;const c=yr(s,i,r.type==="exit"?(u=s.presenceContext)===null||u===void 0?void 0:u.custom:void 0);let{transition:p=s.getDefaultTransition()||{}}=c||{};r.transitionOverride&&(p=r.transitionOverride);const m=c?()=>Promise.all(xb(s,c,r)):()=>Promise.resolve(),g=s.variantChildren&&s.variantChildren.size?(f=0)=>{const{delayChildren:b=0,staggerChildren:y,staggerDirection:q}=p;return z2(s,i,b+f,y,q,r)}:()=>Promise.resolve(),{when:h}=p;if(h){const[f,b]=h==="beforeChildren"?[m,g]:[g,m];return f().then(()=>b())}else return Promise.all([m(),g(r.delay)])}function z2(s,i,r=0,u=0,c=1,p){const m=[],g=(s.variantChildren.size-1)*u,h=c===1?(f=0)=>f*u:(f=0)=>g-f*u;return Array.from(s.variantChildren).sort(D2).forEach((f,b)=>{f.notify("AnimationStart",i),m.push(qc(f,i,{...p,delay:r+h(b)}).then(()=>f.notify("AnimationComplete",i)))}),Promise.all(m)}function D2(s,i){return s.sortNodePosition(i)}function L2(s,i,r={}){s.notify("AnimationStart",i);let u;if(Array.isArray(i)){const c=i.map(p=>qc(s,p,r));u=Promise.all(c)}else if(typeof i=="string")u=qc(s,i,r);else{const c=typeof i=="function"?yr(s,i,r.custom):i;u=Promise.all(xb(s,c,r))}return u.then(()=>{s.notify("AnimationComplete",i)})}const w2=Pc.length;function qb(s){if(!s)return;if(!s.isControllingVariants){const r=s.parent?qb(s.parent)||{}:{};return s.props.initial!==void 0&&(r.initial=s.props.initial),r}const i={};for(let r=0;r<w2;r++){const u=Pc[r],c=s.props[u];(Ei(c)||c===!1)&&(i[u]=c)}return i}const k2=[...Nc].reverse(),O2=Nc.length;function j2(s){return i=>Promise.all(i.map(({animation:r,options:u})=>L2(s,r,u)))}function N2(s){let i=j2(s),r=sg(),u=!0;const c=h=>(f,b)=>{var y;const q=yr(s,b,h==="exit"?(y=s.presenceContext)===null||y===void 0?void 0:y.custom:void 0);if(q){const{transition:T,transitionEnd:j,...R}=q;f={...f,...R,...j}}return f};function p(h){i=h(s)}function m(h){const{props:f}=s,b=qb(s.parent)||{},y=[],q=new Set;let T={},j=1/0;for(let B=0;B<O2;B++){const U=k2[B],I=r[U],H=f[U]!==void 0?f[U]:b[U],ae=Ei(H),Y=U===h?I.isActive:null;Y===!1&&(j=B);let te=H===b[U]&&H!==f[U]&&ae;if(te&&u&&s.manuallyAnimateOnMount&&(te=!1),I.protectedKeys={...T},!I.isActive&&Y===null||!H&&!I.prevProp||vr(H)||typeof H=="boolean")continue;const Z=P2(I.prevProp,H);let J=Z||U===h&&I.isActive&&!te&&ae||B>j&&ae,Te=!1;const Ie=Array.isArray(H)?H:[H];let Xe=Ie.reduce(c(U),{});Y===!1&&(Xe={});const{prevResolvedValues:Ke={}}=I,Za={...Ke,...Xe},Ca=V=>{J=!0,q.has(V)&&(Te=!0,q.delete(V)),I.needsAnimating[V]=!0;const K=s.getValue(V);K&&(K.liveStyle=!1)};for(const V in Za){const K=Xe[V],fe=Ke[V];if(T.hasOwnProperty(V))continue;let ve=!1;dc(K)&&dc(fe)?ve=!jv(K,fe):ve=K!==fe,ve?K!=null?Ca(V):q.add(V):K!==void 0&&q.has(V)?Ca(V):I.protectedKeys[V]=!0}I.prevProp=H,I.prevResolvedValues=Xe,I.isActive&&(T={...T,...Xe}),u&&s.blockInitialAnimation&&(J=!1),J&&(!(te&&Z)||Te)&&y.push(...Ie.map(V=>({animation:V,options:{type:U}})))}if(q.size){const B={};q.forEach(U=>{const I=s.getBaseTarget(U),H=s.getValue(U);H&&(H.liveStyle=!0),B[U]=I??null}),y.push({animation:B})}let R=!!y.length;return u&&(f.initial===!1||f.initial===f.animate)&&!s.manuallyAnimateOnMount&&(R=!1),u=!1,R?i(y):Promise.resolve()}function g(h,f){var b;if(r[h].isActive===f)return Promise.resolve();(b=s.variantChildren)===null||b===void 0||b.forEach(q=>{var T;return(T=q.animationState)===null||T===void 0?void 0:T.setActive(h,f)}),r[h].isActive=f;const y=m(h);for(const q in r)r[q].protectedKeys={};return y}return{animateChanges:m,setActive:g,setAnimateFunction:p,getState:()=>r,reset:()=>{r=sg(),u=!0}}}function P2(s,i){return typeof i=="string"?i!==s:Array.isArray(i)?!jv(i,s):!1}function ht(s=!1){return{isActive:s,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function sg(){return{animate:ht(!0),whileInView:ht(),whileHover:ht(),whileTap:ht(),whileDrag:ht(),whileFocus:ht(),exit:ht()}}class Yo{constructor(i){this.isMounted=!1,this.node=i}update(){}}class R2 extends Yo{constructor(i){super(i),i.animationState||(i.animationState=N2(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();vr(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:r}=this.node.prevProps||{};i!==r&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)===null||i===void 0||i.call(this)}}let U2=0;class B2 extends Yo{constructor(){super(...arguments),this.id=U2++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:r}=this.node.presenceContext,{isPresent:u}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===u)return;const c=this.node.animationState.setActive("exit",!i);r&&!i&&c.then(()=>r(this.id))}mount(){const{register:i}=this.node.presenceContext||{};i&&(this.unmount=i(this.id))}unmount(){}}const V2={animation:{Feature:R2},exit:{Feature:B2}};function zi(s,i,r,u={passive:!0}){return s.addEventListener(i,r,u),()=>s.removeEventListener(i,r)}function ki(s){return{point:{x:s.pageX,y:s.pageY}}}const G2=s=>i=>Zc(i)&&s(i,ki(i));function yi(s,i,r,u){return zi(s,i,G2(r),u)}const ig=(s,i)=>Math.abs(s-i);function _2(s,i){const r=ig(s.x,i.x),u=ig(s.y,i.y);return Math.sqrt(r**2+u**2)}class Sb{constructor(i,r,{transformPagePoint:u,contextWindow:c,dragSnapToOrigin:p=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=oc(this.lastMoveEventInfo,this.history),q=this.startEvent!==null,T=_2(y.offset,{x:0,y:0})>=3;if(!q&&!T)return;const{point:j}=y,{timestamp:R}=ea;this.history.push({...j,timestamp:R});const{onStart:B,onMove:U}=this.handlers;q||(B&&B(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),U&&U(this.lastMoveEvent,y)},this.handlePointerMove=(y,q)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=ac(q,this.transformPagePoint),De.update(this.updatePoint,!0)},this.handlePointerUp=(y,q)=>{this.end();const{onEnd:T,onSessionEnd:j,resumeAnimation:R}=this.handlers;if(this.dragSnapToOrigin&&R&&R(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const B=oc(y.type==="pointercancel"?this.lastMoveEventInfo:ac(q,this.transformPagePoint),this.history);this.startEvent&&T&&T(y,B),j&&j(y,B)},!Zc(i))return;this.dragSnapToOrigin=p,this.handlers=r,this.transformPagePoint=u,this.contextWindow=c||window;const m=ki(i),g=ac(m,this.transformPagePoint),{point:h}=g,{timestamp:f}=ea;this.history=[{...h,timestamp:f}];const{onSessionStart:b}=r;b&&b(i,oc(g,this.history)),this.removeListeners=wi(yi(this.contextWindow,"pointermove",this.handlePointerMove),yi(this.contextWindow,"pointerup",this.handlePointerUp),yi(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),Xo(this.updatePoint)}}function ac(s,i){return i?{point:i(s.point)}:s}function ng(s,i){return{x:s.x-i.x,y:s.y-i.y}}function oc({point:s},i){return{point:s,delta:ng(s,Ab(i)),offset:ng(s,I2(i)),velocity:H2(i,.1)}}function I2(s){return s[0]}function Ab(s){return s[s.length-1]}function H2(s,i){if(s.length<2)return{x:0,y:0};let r=s.length-1,u=null;const c=Ab(s);for(;r>=0&&(u=s[r],!(c.timestamp-u.timestamp>vo(i)));)r--;if(!u)return{x:0,y:0};const p=bo(c.timestamp-u.timestamp);if(p===0)return{x:0,y:0};const m={x:(c.x-u.x)/p,y:(c.y-u.y)/p};return m.x===1/0&&(m.x=0),m.y===1/0&&(m.y=0),m}const Eb=1e-4,F2=1-Eb,Q2=1+Eb,Cb=.01,X2=0-Cb,K2=0+Cb;function Ea(s){return s.max-s.min}function Y2(s,i,r){return Math.abs(s-i)<=r}function rg(s,i,r,u=.5){s.origin=u,s.originPoint=we(i.min,i.max,s.origin),s.scale=Ea(r)/Ea(i),s.translate=we(r.min,r.max,s.origin)-s.originPoint,(s.scale>=F2&&s.scale<=Q2||isNaN(s.scale))&&(s.scale=1),(s.translate>=X2&&s.translate<=K2||isNaN(s.translate))&&(s.translate=0)}function xi(s,i,r,u){rg(s.x,i.x,r.x,u?u.originX:void 0),rg(s.y,i.y,r.y,u?u.originY:void 0)}function ug(s,i,r){s.min=r.min+i.min,s.max=s.min+Ea(i)}function W2(s,i,r){ug(s.x,i.x,r.x),ug(s.y,i.y,r.y)}function lg(s,i,r){s.min=i.min-r.min,s.max=s.min+Ea(i)}function qi(s,i,r){lg(s.x,i.x,r.x),lg(s.y,i.y,r.y)}function Z2(s,{min:i,max:r},u){return i!==void 0&&s<i?s=u?we(i,s,u.min):Math.max(s,i):r!==void 0&&s>r&&(s=u?we(r,s,u.max):Math.min(s,r)),s}function cg(s,i,r){return{min:i!==void 0?s.min+i:void 0,max:r!==void 0?s.max+r-(s.max-s.min):void 0}}function J2(s,{top:i,left:r,bottom:u,right:c}){return{x:cg(s.x,r,c),y:cg(s.y,i,u)}}function dg(s,i){let r=i.min-s.min,u=i.max-s.max;return i.max-i.min<s.max-s.min&&([r,u]=[u,r]),{min:r,max:u}}function $2(s,i){return{x:dg(s.x,i.x),y:dg(s.y,i.y)}}function eA(s,i){let r=.5;const u=Ea(s),c=Ea(i);return c>u?r=ds(i.min,i.max-u,s.min):u>c&&(r=ds(s.min,s.max-c,i.min)),yo(0,1,r)}function aA(s,i){const r={};return i.min!==void 0&&(r.min=i.min-s.min),i.max!==void 0&&(r.max=i.max-s.min),r}const Sc=.35;function oA(s=Sc){return s===!1?s=0:s===!0&&(s=Sc),{x:mg(s,"left","right"),y:mg(s,"top","bottom")}}function mg(s,i,r){return{min:pg(s,i),max:pg(s,r)}}function pg(s,i){return typeof s=="number"?s:s[i]||0}const fg=()=>({translate:0,scale:1,origin:0,originPoint:0}),us=()=>({x:fg(),y:fg()}),hg=()=>({min:0,max:0}),Ue=()=>({x:hg(),y:hg()});function Ua(s){return[s("x"),s("y")]}function Tb({top:s,left:i,right:r,bottom:u}){return{x:{min:i,max:r},y:{min:s,max:u}}}function tA({x:s,y:i}){return{top:i.min,right:s.max,bottom:i.max,left:s.min}}function sA(s,i){if(!i)return s;const r=i({x:s.left,y:s.top}),u=i({x:s.right,y:s.bottom});return{top:r.y,left:r.x,bottom:u.y,right:u.x}}function tc(s){return s===void 0||s===1}function Ac({scale:s,scaleX:i,scaleY:r}){return!tc(s)||!tc(i)||!tc(r)}function gt(s){return Ac(s)||Mb(s)||s.z||s.rotate||s.rotateX||s.rotateY||s.skewX||s.skewY}function Mb(s){return gg(s.x)||gg(s.y)}function gg(s){return s&&s!=="0%"}function pr(s,i,r){const u=s-r,c=i*u;return r+c}function vg(s,i,r,u,c){return c!==void 0&&(s=pr(s,c,u)),pr(s,r,u)+i}function Ec(s,i=0,r=1,u,c){s.min=vg(s.min,i,r,u,c),s.max=vg(s.max,i,r,u,c)}function zb(s,{x:i,y:r}){Ec(s.x,i.translate,i.scale,i.originPoint),Ec(s.y,r.translate,r.scale,r.originPoint)}const bg=.999999999999,yg=1.0000000000001;function iA(s,i,r,u=!1){const c=r.length;if(!c)return;i.x=i.y=1;let p,m;for(let g=0;g<c;g++){p=r[g],m=p.projectionDelta;const{visualElement:h}=p.options;h&&h.props.style&&h.props.style.display==="contents"||(u&&p.options.layoutScroll&&p.scroll&&p!==p.root&&cs(s,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),m&&(i.x*=m.x.scale,i.y*=m.y.scale,zb(s,m)),u&&gt(p.latestValues)&&cs(s,p.latestValues))}i.x<yg&&i.x>bg&&(i.x=1),i.y<yg&&i.y>bg&&(i.y=1)}function ls(s,i){s.min=s.min+i,s.max=s.max+i}function xg(s,i,r,u,c=.5){const p=we(s.min,s.max,c);Ec(s,i,r,p,u)}function cs(s,i){xg(s.x,i.x,i.scaleX,i.scale,i.originX),xg(s.y,i.y,i.scaleY,i.scale,i.originY)}function Db(s,i){return Tb(sA(s.getBoundingClientRect(),i))}function nA(s,i,r){const u=Db(s,r),{scroll:c}=i;return c&&(ls(u.x,c.offset.x),ls(u.y,c.offset.y)),u}const Lb=({current:s})=>s?s.ownerDocument.defaultView:null,rA=new WeakMap;class uA{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ue(),this.visualElement=i}start(i,{snapToCursor:r=!1}={}){const{presenceContext:u}=this.visualElement;if(u&&u.isPresent===!1)return;const c=b=>{const{dragSnapToOrigin:y}=this.getProps();y?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(ki(b).point)},p=(b,y)=>{const{drag:q,dragPropagation:T,onDragStart:j}=this.getProps();if(q&&!T&&(this.openDragLock&&this.openDragLock(),this.openDragLock=eS(q),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ua(B=>{let U=this.getAxisMotionValue(B).get()||0;if(Ya.test(U)){const{projection:I}=this.visualElement;if(I&&I.layout){const H=I.layout.layoutBox[B];H&&(U=Ea(H)*(parseFloat(U)/100))}}this.originPoint[B]=U}),j&&De.postRender(()=>j(b,y)),fc(this.visualElement,"transform");const{animationState:R}=this.visualElement;R&&R.setActive("whileDrag",!0)},m=(b,y)=>{const{dragPropagation:q,dragDirectionLock:T,onDirectionLock:j,onDrag:R}=this.getProps();if(!q&&!this.openDragLock)return;const{offset:B}=y;if(T&&this.currentDirection===null){this.currentDirection=lA(B),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",y.point,B),this.updateAxis("y",y.point,B),this.visualElement.render(),R&&R(b,y)},g=(b,y)=>this.stop(b,y),h=()=>Ua(b=>{var y;return this.getAnimationState(b)==="paused"&&((y=this.getAxisMotionValue(b).animation)===null||y===void 0?void 0:y.play())}),{dragSnapToOrigin:f}=this.getProps();this.panSession=new Sb(i,{onSessionStart:c,onStart:p,onMove:m,onSessionEnd:g,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:f,contextWindow:Lb(this.visualElement)})}stop(i,r){const u=this.isDragging;if(this.cancel(),!u)return;const{velocity:c}=r;this.startAnimation(c);const{onDragEnd:p}=this.getProps();p&&De.postRender(()=>p(i,r))}cancel(){this.isDragging=!1;const{projection:i,animationState:r}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:u}=this.getProps();!u&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(i,r,u){const{drag:c}=this.getProps();if(!u||!ar(i,c,this.currentDirection))return;const p=this.getAxisMotionValue(i);let m=this.originPoint[i]+u[i];this.constraints&&this.constraints[i]&&(m=Z2(m,this.constraints[i],this.elastic[i])),p.set(m)}resolveConstraints(){var i;const{dragConstraints:r,dragElastic:u}=this.getProps(),c=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(i=this.visualElement.projection)===null||i===void 0?void 0:i.layout,p=this.constraints;r&&ns(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&c?this.constraints=J2(c.layoutBox,r):this.constraints=!1,this.elastic=oA(u),p!==this.constraints&&c&&this.constraints&&!this.hasMutatedConstraints&&Ua(m=>{this.constraints!==!1&&this.getAxisMotionValue(m)&&(this.constraints[m]=aA(c.layoutBox[m],this.constraints[m]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:r}=this.getProps();if(!i||!ns(i))return!1;const u=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const p=nA(u,c.root,this.visualElement.getTransformPagePoint());let m=$2(c.layout.layoutBox,p);if(r){const g=r(tA(m));this.hasMutatedConstraints=!!g,g&&(m=Tb(g))}return m}startAnimation(i){const{drag:r,dragMomentum:u,dragElastic:c,dragTransition:p,dragSnapToOrigin:m,onDragTransitionEnd:g}=this.getProps(),h=this.constraints||{},f=Ua(b=>{if(!ar(b,r,this.currentDirection))return;let y=h&&h[b]||{};m&&(y={min:0,max:0});const q=c?200:1e6,T=c?40:1e7,j={type:"inertia",velocity:u?i[b]:0,bounceStiffness:q,bounceDamping:T,timeConstant:750,restDelta:1,restSpeed:10,...p,...y};return this.startAxisValueAnimation(b,j)});return Promise.all(f).then(g)}startAxisValueAnimation(i,r){const u=this.getAxisMotionValue(i);return fc(this.visualElement,i),u.start(ld(i,u,0,r,this.visualElement,!1))}stopAnimation(){Ua(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){Ua(i=>{var r;return(r=this.getAxisMotionValue(i).animation)===null||r===void 0?void 0:r.pause()})}getAnimationState(i){var r;return(r=this.getAxisMotionValue(i).animation)===null||r===void 0?void 0:r.state}getAxisMotionValue(i){const r=`_drag${i.toUpperCase()}`,u=this.visualElement.getProps(),c=u[r];return c||this.visualElement.getValue(i,(u.initial?u.initial[i]:void 0)||0)}snapToCursor(i){Ua(r=>{const{drag:u}=this.getProps();if(!ar(r,u,this.currentDirection))return;const{projection:c}=this.visualElement,p=this.getAxisMotionValue(r);if(c&&c.layout){const{min:m,max:g}=c.layout.layoutBox[r];p.set(i[r]-we(m,g,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:r}=this.getProps(),{projection:u}=this.visualElement;if(!ns(r)||!u||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Ua(m=>{const g=this.getAxisMotionValue(m);if(g&&this.constraints!==!1){const h=g.get();c[m]=eA({min:h,max:h},this.constraints[m])}});const{transformTemplate:p}=this.visualElement.getProps();this.visualElement.current.style.transform=p?p({},""):"none",u.root&&u.root.updateScroll(),u.updateLayout(),this.resolveConstraints(),Ua(m=>{if(!ar(m,i,null))return;const g=this.getAxisMotionValue(m),{min:h,max:f}=this.constraints[m];g.set(we(h,f,c[m]))})}addListeners(){if(!this.visualElement.current)return;rA.set(this.visualElement,this);const i=this.visualElement.current,r=yi(i,"pointerdown",h=>{const{drag:f,dragListener:b=!0}=this.getProps();f&&b&&this.start(h)}),u=()=>{const{dragConstraints:h}=this.getProps();ns(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,p=c.addEventListener("measure",u);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),De.read(u);const m=zi(window,"resize",()=>this.scalePositionWithinConstraints()),g=c.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:f})=>{this.isDragging&&f&&(Ua(b=>{const y=this.getAxisMotionValue(b);y&&(this.originPoint[b]+=h[b].translate,y.set(y.get()+h[b].translate))}),this.visualElement.render())}));return()=>{m(),r(),p(),g&&g()}}getProps(){const i=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:u=!1,dragPropagation:c=!1,dragConstraints:p=!1,dragElastic:m=Sc,dragMomentum:g=!0}=i;return{...i,drag:r,dragDirectionLock:u,dragPropagation:c,dragConstraints:p,dragElastic:m,dragMomentum:g}}}function ar(s,i,r){return(i===!0||i===s)&&(r===null||r===s)}function lA(s,i=10){let r=null;return Math.abs(s.y)>i?r="y":Math.abs(s.x)>i&&(r="x"),r}class cA extends Yo{constructor(i){super(i),this.removeGroupControls=Aa,this.removeListeners=Aa,this.controls=new uA(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Aa}unmount(){this.removeGroupControls(),this.removeListeners()}}const qg=s=>(i,r)=>{s&&De.postRender(()=>s(i,r))};class dA extends Yo{constructor(){super(...arguments),this.removePointerDownListener=Aa}onPointerDown(i){this.session=new Sb(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Lb(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:r,onPan:u,onPanEnd:c}=this.node.getProps();return{onSessionStart:qg(i),onStart:qg(r),onMove:u,onEnd:(p,m)=>{delete this.session,c&&De.postRender(()=>c(p,m))}}}mount(){this.removePointerDownListener=yi(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const sr={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Sg(s,i){return i.max===i.min?0:s/(i.max-i.min)*100}const mi={correct:(s,i)=>{if(!i.target)return s;if(typeof s=="string")if(ee.test(s))s=parseFloat(s);else return s;const r=Sg(s,i.target.x),u=Sg(s,i.target.y);return`${r}% ${u}%`}},mA={correct:(s,{treeScale:i,projectionDelta:r})=>{const u=s,c=Ko.parse(s);if(c.length>5)return u;const p=Ko.createTransformer(s),m=typeof c[0]!="number"?1:0,g=r.x.scale*i.x,h=r.y.scale*i.y;c[0+m]/=g,c[1+m]/=h;const f=we(g,h,.5);return typeof c[2+m]=="number"&&(c[2+m]/=f),typeof c[3+m]=="number"&&(c[3+m]/=f),p(c)}};class pA extends G.Component{componentDidMount(){const{visualElement:i,layoutGroup:r,switchLayoutGroup:u,layoutId:c}=this.props,{projection:p}=i;O1(fA),p&&(r.group&&r.group.add(p),u&&u.register&&c&&u.register(p),p.root.didUpdate(),p.addEventListener("animationComplete",()=>{this.safeToRemove()}),p.setOptions({...p.options,onExitComplete:()=>this.safeToRemove()})),sr.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:r,visualElement:u,drag:c,isPresent:p}=this.props,m=u.projection;return m&&(m.isPresent=p,c||i.layoutDependency!==r||r===void 0?m.willUpdate():this.safeToRemove(),i.isPresent!==p&&(p?m.promote():m.relegate()||De.postRender(()=>{const g=m.getStack();(!g||!g.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),Uc.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:r,switchLayoutGroup:u}=this.props,{projection:c}=i;c&&(c.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(c),u&&u.deregister&&u.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function wb(s){const[i,r]=Kq(),u=G.useContext(pv);return x.jsx(pA,{...s,layoutGroup:u,switchLayoutGroup:G.useContext(qv),isPresent:i,safeToRemove:r})}const fA={borderRadius:{...mi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:mi,borderTopRightRadius:mi,borderBottomLeftRadius:mi,borderBottomRightRadius:mi,boxShadow:mA};function hA(s,i,r){const u=ta(s)?s:Ti(s);return u.start(ld("",u,i,r)),u.animation}function gA(s){return s instanceof SVGElement&&s.tagName!=="svg"}const vA=(s,i)=>s.depth-i.depth;class bA{constructor(){this.children=[],this.isDirty=!1}add(i){Jc(this.children,i),this.isDirty=!0}remove(i){$c(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(vA),this.isDirty=!1,this.children.forEach(i)}}function yA(s,i){const r=Wa.now(),u=({timestamp:c})=>{const p=c-r;p>=i&&(Xo(u),s(p-i))};return De.read(u,!0),()=>Xo(u)}const kb=["TopLeft","TopRight","BottomLeft","BottomRight"],xA=kb.length,Ag=s=>typeof s=="string"?parseFloat(s):s,Eg=s=>typeof s=="number"||ee.test(s);function qA(s,i,r,u,c,p){c?(s.opacity=we(0,r.opacity!==void 0?r.opacity:1,SA(u)),s.opacityExit=we(i.opacity!==void 0?i.opacity:1,0,AA(u))):p&&(s.opacity=we(i.opacity!==void 0?i.opacity:1,r.opacity!==void 0?r.opacity:1,u));for(let m=0;m<xA;m++){const g=`border${kb[m]}Radius`;let h=Cg(i,g),f=Cg(r,g);if(h===void 0&&f===void 0)continue;h||(h=0),f||(f=0),h===0||f===0||Eg(h)===Eg(f)?(s[g]=Math.max(we(Ag(h),Ag(f),u),0),(Ya.test(f)||Ya.test(h))&&(s[g]+="%")):s[g]=f}(i.rotate||r.rotate)&&(s.rotate=we(i.rotate||0,r.rotate||0,u))}function Cg(s,i){return s[i]!==void 0?s[i]:s.borderRadius}const SA=Ob(0,.5,Zv),AA=Ob(.5,.95,Aa);function Ob(s,i,r){return u=>u<s?0:u>i?1:r(ds(s,i,u))}function Tg(s,i){s.min=i.min,s.max=i.max}function Ra(s,i){Tg(s.x,i.x),Tg(s.y,i.y)}function Mg(s,i){s.translate=i.translate,s.scale=i.scale,s.originPoint=i.originPoint,s.origin=i.origin}function zg(s,i,r,u,c){return s-=i,s=pr(s,1/r,u),c!==void 0&&(s=pr(s,1/c,u)),s}function EA(s,i=0,r=1,u=.5,c,p=s,m=s){if(Ya.test(i)&&(i=parseFloat(i),i=we(m.min,m.max,i/100)-m.min),typeof i!="number")return;let g=we(p.min,p.max,u);s===p&&(g-=i),s.min=zg(s.min,i,r,g,c),s.max=zg(s.max,i,r,g,c)}function Dg(s,i,[r,u,c],p,m){EA(s,i[r],i[u],i[c],i.scale,p,m)}const CA=["x","scaleX","originX"],TA=["y","scaleY","originY"];function Lg(s,i,r,u){Dg(s.x,i,CA,r?r.x:void 0,u?u.x:void 0),Dg(s.y,i,TA,r?r.y:void 0,u?u.y:void 0)}function wg(s){return s.translate===0&&s.scale===1}function jb(s){return wg(s.x)&&wg(s.y)}function kg(s,i){return s.min===i.min&&s.max===i.max}function MA(s,i){return kg(s.x,i.x)&&kg(s.y,i.y)}function Og(s,i){return Math.round(s.min)===Math.round(i.min)&&Math.round(s.max)===Math.round(i.max)}function Nb(s,i){return Og(s.x,i.x)&&Og(s.y,i.y)}function jg(s){return Ea(s.x)/Ea(s.y)}function Ng(s,i){return s.translate===i.translate&&s.scale===i.scale&&s.originPoint===i.originPoint}class zA{constructor(){this.members=[]}add(i){Jc(this.members,i),i.scheduleRender()}remove(i){if($c(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(i){const r=this.members.findIndex(c=>i===c);if(r===0)return!1;let u;for(let c=r;c>=0;c--){const p=this.members[c];if(p.isPresent!==!1){u=p;break}}return u?(this.promote(u),!0):!1}promote(i,r){const u=this.lead;if(i!==u&&(this.prevLead=u,this.lead=i,i.show(),u)){u.instance&&u.scheduleRender(),i.scheduleRender(),i.resumeFrom=u,r&&(i.resumeFrom.preserveOpacity=!0),u.snapshot&&(i.snapshot=u.snapshot,i.snapshot.latestValues=u.animationValues||u.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:c}=i.options;c===!1&&u.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:r,resumingFrom:u}=i;r.onExitComplete&&r.onExitComplete(),u&&u.options.onExitComplete&&u.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function DA(s,i,r){let u="";const c=s.x.translate/i.x,p=s.y.translate/i.y,m=(r==null?void 0:r.z)||0;if((c||p||m)&&(u=`translate3d(${c}px, ${p}px, ${m}px) `),(i.x!==1||i.y!==1)&&(u+=`scale(${1/i.x}, ${1/i.y}) `),r){const{transformPerspective:f,rotate:b,rotateX:y,rotateY:q,skewX:T,skewY:j}=r;f&&(u=`perspective(${f}px) ${u}`),b&&(u+=`rotate(${b}deg) `),y&&(u+=`rotateX(${y}deg) `),q&&(u+=`rotateY(${q}deg) `),T&&(u+=`skewX(${T}deg) `),j&&(u+=`skewY(${j}deg) `)}const g=s.x.scale*i.x,h=s.y.scale*i.y;return(g!==1||h!==1)&&(u+=`scale(${g}, ${h})`),u||"none"}const vt={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},gi=typeof window<"u"&&window.MotionDebug!==void 0,sc=["","X","Y","Z"],LA={visibility:"hidden"},Pg=1e3;let wA=0;function ic(s,i,r,u){const{latestValues:c}=i;c[s]&&(r[s]=c[s],i.setStaticValue(s,0),u&&(u[s]=0))}function Pb(s){if(s.hasCheckedOptimisedAppear=!0,s.root===s)return;const{visualElement:i}=s.options;if(!i)return;const r=Hv(i);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:c,layoutId:p}=s.options;window.MotionCancelOptimisedAnimation(r,"transform",De,!(c||p))}const{parent:u}=s;u&&!u.hasCheckedOptimisedAppear&&Pb(u)}function Rb({attachResizeListener:s,defaultParent:i,measureScroll:r,checkIsScrollRoot:u,resetTransform:c}){return class{constructor(m={},g=i==null?void 0:i()){this.id=wA++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,gi&&(vt.totalNodes=vt.resolvedTargetDeltas=vt.recalculatedProjection=0),this.nodes.forEach(jA),this.nodes.forEach(BA),this.nodes.forEach(VA),this.nodes.forEach(NA),gi&&window.MotionDebug.record(vt)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=m,this.root=g?g.root||g:this,this.path=g?[...g.path,g]:[],this.parent=g,this.depth=g?g.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new bA)}addEventListener(m,g){return this.eventHandlers.has(m)||this.eventHandlers.set(m,new ed),this.eventHandlers.get(m).add(g)}notifyListeners(m,...g){const h=this.eventHandlers.get(m);h&&h.notify(...g)}hasListeners(m){return this.eventHandlers.has(m)}mount(m,g=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=gA(m),this.instance=m;const{layoutId:h,layout:f,visualElement:b}=this.options;if(b&&!b.current&&b.mount(m),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),g&&(f||h)&&(this.isLayoutDirty=!0),s){let y;const q=()=>this.root.updateBlockedByResize=!1;s(m,()=>{this.root.updateBlockedByResize=!0,y&&y(),y=yA(q,250),sr.hasAnimatedSinceResize&&(sr.hasAnimatedSinceResize=!1,this.nodes.forEach(Ug))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&b&&(h||f)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:q,hasRelativeTargetChanged:T,layout:j})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const R=this.options.transition||b.getDefaultTransition()||FA,{onLayoutAnimationStart:B,onLayoutAnimationComplete:U}=b.getProps(),I=!this.targetLayout||!Nb(this.targetLayout,j)||T,H=!q&&T;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||H||q&&(I||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(y,H);const ae={...Kc(R,"layout"),onPlay:B,onComplete:U};(b.shouldReduceMotion||this.options.layoutRoot)&&(ae.delay=0,ae.type=!1),this.startAnimation(ae)}else q||Ug(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=j})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const m=this.getStack();m&&m.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Xo(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(GA),this.animationId++)}getTransformTemplate(){const{visualElement:m}=this.options;return m&&m.getProps().transformTemplate}willUpdate(m=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Pb(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let b=0;b<this.path.length;b++){const y=this.path[b];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:g,layout:h}=this.options;if(g===void 0&&!h)return;const f=this.getTransformTemplate();this.prevTransformTemplateValue=f?f(this.latestValues,""):void 0,this.updateSnapshot(),m&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Rg);return}this.isUpdating||this.nodes.forEach(RA),this.isUpdating=!1,this.nodes.forEach(UA),this.nodes.forEach(kA),this.nodes.forEach(OA),this.clearAllSnapshots();const g=Wa.now();ea.delta=yo(0,1e3/60,g-ea.timestamp),ea.timestamp=g,ea.isProcessing=!0,Yl.update.process(ea),Yl.preRender.process(ea),Yl.render.process(ea),ea.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Uc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(PA),this.sharedNodes.forEach(_A)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,De.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){De.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const m=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ue(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:g}=this.options;g&&g.notify("LayoutMeasure",this.layout.layoutBox,m?m.layoutBox:void 0)}updateScroll(m="measure"){let g=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===m&&(g=!1),g){const h=u(this.instance);this.scroll={animationId:this.root.animationId,phase:m,isRoot:h,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!c)return;const m=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,g=this.projectionDelta&&!jb(this.projectionDelta),h=this.getTransformTemplate(),f=h?h(this.latestValues,""):void 0,b=f!==this.prevTransformTemplateValue;m&&(g||gt(this.latestValues)||b)&&(c(this.instance,f),this.shouldResetTransform=!1,this.scheduleRender())}measure(m=!0){const g=this.measurePageBox();let h=this.removeElementScroll(g);return m&&(h=this.removeTransform(h)),QA(h),{animationId:this.root.animationId,measuredBox:g,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var m;const{visualElement:g}=this.options;if(!g)return Ue();const h=g.measureViewportBox();if(!(((m=this.scroll)===null||m===void 0?void 0:m.wasRoot)||this.path.some(XA))){const{scroll:b}=this.root;b&&(ls(h.x,b.offset.x),ls(h.y,b.offset.y))}return h}removeElementScroll(m){var g;const h=Ue();if(Ra(h,m),!((g=this.scroll)===null||g===void 0)&&g.wasRoot)return h;for(let f=0;f<this.path.length;f++){const b=this.path[f],{scroll:y,options:q}=b;b!==this.root&&y&&q.layoutScroll&&(y.wasRoot&&Ra(h,m),ls(h.x,y.offset.x),ls(h.y,y.offset.y))}return h}applyTransform(m,g=!1){const h=Ue();Ra(h,m);for(let f=0;f<this.path.length;f++){const b=this.path[f];!g&&b.options.layoutScroll&&b.scroll&&b!==b.root&&cs(h,{x:-b.scroll.offset.x,y:-b.scroll.offset.y}),gt(b.latestValues)&&cs(h,b.latestValues)}return gt(this.latestValues)&&cs(h,this.latestValues),h}removeTransform(m){const g=Ue();Ra(g,m);for(let h=0;h<this.path.length;h++){const f=this.path[h];if(!f.instance||!gt(f.latestValues))continue;Ac(f.latestValues)&&f.updateSnapshot();const b=Ue(),y=f.measurePageBox();Ra(b,y),Lg(g,f.latestValues,f.snapshot?f.snapshot.layoutBox:void 0,b)}return gt(this.latestValues)&&Lg(g,this.latestValues),g}setTargetDelta(m){this.targetDelta=m,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(m){this.options={...this.options,...m,crossfade:m.crossfade!==void 0?m.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ea.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(m=!1){var g;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const f=!!this.resumingFrom||this!==h;if(!(m||f&&this.isSharedProjectionDirty||this.isProjectionDirty||!((g=this.parent)===null||g===void 0)&&g.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:q}=this.options;if(!(!this.layout||!(y||q))){if(this.resolvedRelativeTargetAt=ea.timestamp,!this.targetDelta&&!this.relativeTarget){const T=this.getClosestProjectingParent();T&&T.layout&&this.animationProgress!==1?(this.relativeParent=T,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ue(),this.relativeTargetOrigin=Ue(),qi(this.relativeTargetOrigin,this.layout.layoutBox,T.layout.layoutBox),Ra(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Ue(),this.targetWithTransforms=Ue()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),W2(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ra(this.target,this.layout.layoutBox),zb(this.target,this.targetDelta)):Ra(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const T=this.getClosestProjectingParent();T&&!!T.resumingFrom==!!this.resumingFrom&&!T.options.layoutScroll&&T.target&&this.animationProgress!==1?(this.relativeParent=T,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ue(),this.relativeTargetOrigin=Ue(),qi(this.relativeTargetOrigin,this.target,T.target),Ra(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}gi&&vt.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Ac(this.parent.latestValues)||Mb(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var m;const g=this.getLead(),h=!!this.resumingFrom||this!==g;let f=!0;if((this.isProjectionDirty||!((m=this.parent)===null||m===void 0)&&m.isProjectionDirty)&&(f=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(f=!1),this.resolvedRelativeTargetAt===ea.timestamp&&(f=!1),f)return;const{layout:b,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(b||y))return;Ra(this.layoutCorrected,this.layout.layoutBox);const q=this.treeScale.x,T=this.treeScale.y;iA(this.layoutCorrected,this.treeScale,this.path,h),g.layout&&!g.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(g.target=g.layout.layoutBox,g.targetWithTransforms=Ue());const{target:j}=g;if(!j){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Mg(this.prevProjectionDelta.x,this.projectionDelta.x),Mg(this.prevProjectionDelta.y,this.projectionDelta.y)),xi(this.projectionDelta,this.layoutCorrected,j,this.latestValues),(this.treeScale.x!==q||this.treeScale.y!==T||!Ng(this.projectionDelta.x,this.prevProjectionDelta.x)||!Ng(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",j)),gi&&vt.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(m=!0){var g;if((g=this.options.visualElement)===null||g===void 0||g.scheduleRender(),m){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=us(),this.projectionDelta=us(),this.projectionDeltaWithTransform=us()}setAnimationOrigin(m,g=!1){const h=this.snapshot,f=h?h.latestValues:{},b={...this.latestValues},y=us();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!g;const q=Ue(),T=h?h.source:void 0,j=this.layout?this.layout.source:void 0,R=T!==j,B=this.getStack(),U=!B||B.members.length<=1,I=!!(R&&!U&&this.options.crossfade===!0&&!this.path.some(HA));this.animationProgress=0;let H;this.mixTargetDelta=ae=>{const Y=ae/1e3;Bg(y.x,m.x,Y),Bg(y.y,m.y,Y),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(qi(q,this.layout.layoutBox,this.relativeParent.layout.layoutBox),IA(this.relativeTarget,this.relativeTargetOrigin,q,Y),H&&MA(this.relativeTarget,H)&&(this.isProjectionDirty=!1),H||(H=Ue()),Ra(H,this.relativeTarget)),R&&(this.animationValues=b,qA(b,f,this.latestValues,Y,I,U)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=Y},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(m){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Xo(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=De.update(()=>{sr.hasAnimatedSinceResize=!0,this.currentAnimation=hA(0,Pg,{...m,onUpdate:g=>{this.mixTargetDelta(g),m.onUpdate&&m.onUpdate(g)},onComplete:()=>{m.onComplete&&m.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const m=this.getStack();m&&m.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Pg),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const m=this.getLead();let{targetWithTransforms:g,target:h,layout:f,latestValues:b}=m;if(!(!g||!h||!f)){if(this!==m&&this.layout&&f&&Ub(this.options.animationType,this.layout.layoutBox,f.layoutBox)){h=this.target||Ue();const y=Ea(this.layout.layoutBox.x);h.x.min=m.target.x.min,h.x.max=h.x.min+y;const q=Ea(this.layout.layoutBox.y);h.y.min=m.target.y.min,h.y.max=h.y.min+q}Ra(g,h),cs(g,b),xi(this.projectionDeltaWithTransform,this.layoutCorrected,g,b)}}registerSharedNode(m,g){this.sharedNodes.has(m)||this.sharedNodes.set(m,new zA),this.sharedNodes.get(m).add(g);const f=g.options.initialPromotionConfig;g.promote({transition:f?f.transition:void 0,preserveFollowOpacity:f&&f.shouldPreserveFollowOpacity?f.shouldPreserveFollowOpacity(g):void 0})}isLead(){const m=this.getStack();return m?m.lead===this:!0}getLead(){var m;const{layoutId:g}=this.options;return g?((m=this.getStack())===null||m===void 0?void 0:m.lead)||this:this}getPrevLead(){var m;const{layoutId:g}=this.options;return g?(m=this.getStack())===null||m===void 0?void 0:m.prevLead:void 0}getStack(){const{layoutId:m}=this.options;if(m)return this.root.sharedNodes.get(m)}promote({needsReset:m,transition:g,preserveFollowOpacity:h}={}){const f=this.getStack();f&&f.promote(this,h),m&&(this.projectionDelta=void 0,this.needsReset=!0),g&&this.setOptions({transition:g})}relegate(){const m=this.getStack();return m?m.relegate(this):!1}resetSkewAndRotation(){const{visualElement:m}=this.options;if(!m)return;let g=!1;const{latestValues:h}=m;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(g=!0),!g)return;const f={};h.z&&ic("z",m,f,this.animationValues);for(let b=0;b<sc.length;b++)ic(`rotate${sc[b]}`,m,f,this.animationValues),ic(`skew${sc[b]}`,m,f,this.animationValues);m.render();for(const b in f)m.setStaticValue(b,f[b]),this.animationValues&&(this.animationValues[b]=f[b]);m.scheduleRender()}getProjectionStyles(m){var g,h;if(!this.instance||this.isSVG)return;if(!this.isVisible)return LA;const f={visibility:""},b=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,f.opacity="",f.pointerEvents=or(m==null?void 0:m.pointerEvents)||"",f.transform=b?b(this.latestValues,""):"none",f;const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){const R={};return this.options.layoutId&&(R.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,R.pointerEvents=or(m==null?void 0:m.pointerEvents)||""),this.hasProjected&&!gt(this.latestValues)&&(R.transform=b?b({},""):"none",this.hasProjected=!1),R}const q=y.animationValues||y.latestValues;this.applyTransformsToTarget(),f.transform=DA(this.projectionDeltaWithTransform,this.treeScale,q),b&&(f.transform=b(q,f.transform));const{x:T,y:j}=this.projectionDelta;f.transformOrigin=`${T.origin*100}% ${j.origin*100}% 0`,y.animationValues?f.opacity=y===this?(h=(g=q.opacity)!==null&&g!==void 0?g:this.latestValues.opacity)!==null&&h!==void 0?h:1:this.preserveOpacity?this.latestValues.opacity:q.opacityExit:f.opacity=y===this?q.opacity!==void 0?q.opacity:"":q.opacityExit!==void 0?q.opacityExit:0;for(const R in ur){if(q[R]===void 0)continue;const{correct:B,applyTo:U}=ur[R],I=f.transform==="none"?q[R]:B(q[R],y);if(U){const H=U.length;for(let ae=0;ae<H;ae++)f[U[ae]]=I}else f[R]=I}return this.options.layoutId&&(f.pointerEvents=y===this?or(m==null?void 0:m.pointerEvents)||"":"none"),f}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(m=>{var g;return(g=m.currentAnimation)===null||g===void 0?void 0:g.stop()}),this.root.nodes.forEach(Rg),this.root.sharedNodes.clear()}}}function kA(s){s.updateLayout()}function OA(s){var i;const r=((i=s.resumeFrom)===null||i===void 0?void 0:i.snapshot)||s.snapshot;if(s.isLead()&&s.layout&&r&&s.hasListeners("didUpdate")){const{layoutBox:u,measuredBox:c}=s.layout,{animationType:p}=s.options,m=r.source!==s.layout.source;p==="size"?Ua(y=>{const q=m?r.measuredBox[y]:r.layoutBox[y],T=Ea(q);q.min=u[y].min,q.max=q.min+T}):Ub(p,r.layoutBox,u)&&Ua(y=>{const q=m?r.measuredBox[y]:r.layoutBox[y],T=Ea(u[y]);q.max=q.min+T,s.relativeTarget&&!s.currentAnimation&&(s.isProjectionDirty=!0,s.relativeTarget[y].max=s.relativeTarget[y].min+T)});const g=us();xi(g,u,r.layoutBox);const h=us();m?xi(h,s.applyTransform(c,!0),r.measuredBox):xi(h,u,r.layoutBox);const f=!jb(g);let b=!1;if(!s.resumeFrom){const y=s.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:q,layout:T}=y;if(q&&T){const j=Ue();qi(j,r.layoutBox,q.layoutBox);const R=Ue();qi(R,u,T.layoutBox),Nb(j,R)||(b=!0),y.options.layoutRoot&&(s.relativeTarget=R,s.relativeTargetOrigin=j,s.relativeParent=y)}}}s.notifyListeners("didUpdate",{layout:u,snapshot:r,delta:h,layoutDelta:g,hasLayoutChanged:f,hasRelativeTargetChanged:b})}else if(s.isLead()){const{onExitComplete:u}=s.options;u&&u()}s.options.transition=void 0}function jA(s){gi&&vt.totalNodes++,s.parent&&(s.isProjecting()||(s.isProjectionDirty=s.parent.isProjectionDirty),s.isSharedProjectionDirty||(s.isSharedProjectionDirty=!!(s.isProjectionDirty||s.parent.isProjectionDirty||s.parent.isSharedProjectionDirty)),s.isTransformDirty||(s.isTransformDirty=s.parent.isTransformDirty))}function NA(s){s.isProjectionDirty=s.isSharedProjectionDirty=s.isTransformDirty=!1}function PA(s){s.clearSnapshot()}function Rg(s){s.clearMeasurements()}function RA(s){s.isLayoutDirty=!1}function UA(s){const{visualElement:i}=s.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),s.resetTransform()}function Ug(s){s.finishAnimation(),s.targetDelta=s.relativeTarget=s.target=void 0,s.isProjectionDirty=!0}function BA(s){s.resolveTargetDelta()}function VA(s){s.calcProjection()}function GA(s){s.resetSkewAndRotation()}function _A(s){s.removeLeadSnapshot()}function Bg(s,i,r){s.translate=we(i.translate,0,r),s.scale=we(i.scale,1,r),s.origin=i.origin,s.originPoint=i.originPoint}function Vg(s,i,r,u){s.min=we(i.min,r.min,u),s.max=we(i.max,r.max,u)}function IA(s,i,r,u){Vg(s.x,i.x,r.x,u),Vg(s.y,i.y,r.y,u)}function HA(s){return s.animationValues&&s.animationValues.opacityExit!==void 0}const FA={duration:.45,ease:[.4,0,.1,1]},Gg=s=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(s),_g=Gg("applewebkit/")&&!Gg("chrome/")?Math.round:Aa;function Ig(s){s.min=_g(s.min),s.max=_g(s.max)}function QA(s){Ig(s.x),Ig(s.y)}function Ub(s,i,r){return s==="position"||s==="preserve-aspect"&&!Y2(jg(i),jg(r),.2)}function XA(s){var i;return s!==s.root&&((i=s.scroll)===null||i===void 0?void 0:i.wasRoot)}const KA=Rb({attachResizeListener:(s,i)=>zi(s,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),nc={current:void 0},Bb=Rb({measureScroll:s=>({x:s.scrollLeft,y:s.scrollTop}),defaultParent:()=>{if(!nc.current){const s=new KA({});s.mount(window),s.setOptions({layoutScroll:!0}),nc.current=s}return nc.current},resetTransform:(s,i)=>{s.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:s=>window.getComputedStyle(s).position==="fixed"}),YA={pan:{Feature:dA},drag:{Feature:cA,ProjectionNode:Bb,MeasureLayout:wb}};function Hg(s,i,r){const{props:u}=s;s.animationState&&u.whileHover&&s.animationState.setActive("whileHover",r==="Start");const c="onHover"+r,p=u[c];p&&De.postRender(()=>p(i,ki(i)))}class WA extends Yo{mount(){const{current:i}=this.node;i&&(this.unmount=Y1(i,r=>(Hg(this.node,r,"Start"),u=>Hg(this.node,u,"End"))))}unmount(){}}class ZA extends Yo{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=wi(zi(this.node.current,"focus",()=>this.onFocus()),zi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Fg(s,i,r){const{props:u}=s;s.animationState&&u.whileTap&&s.animationState.setActive("whileTap",r==="Start");const c="onTap"+(r==="End"?"":r),p=u[c];p&&De.postRender(()=>p(i,ki(i)))}class JA extends Yo{mount(){const{current:i}=this.node;i&&(this.unmount=$1(i,r=>(Fg(this.node,r,"Start"),(u,{success:c})=>Fg(this.node,u,c?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Cc=new WeakMap,rc=new WeakMap,$A=s=>{const i=Cc.get(s.target);i&&i(s)},eE=s=>{s.forEach($A)};function aE({root:s,...i}){const r=s||document;rc.has(r)||rc.set(r,{});const u=rc.get(r),c=JSON.stringify(i);return u[c]||(u[c]=new IntersectionObserver(eE,{root:s,...i})),u[c]}function oE(s,i,r){const u=aE(i);return Cc.set(s,r),u.observe(s),()=>{Cc.delete(s),u.unobserve(s)}}const tE={some:0,all:1};class sE extends Yo{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:r,margin:u,amount:c="some",once:p}=i,m={root:r?r.current:void 0,rootMargin:u,threshold:typeof c=="number"?c:tE[c]},g=h=>{const{isIntersecting:f}=h;if(this.isInView===f||(this.isInView=f,p&&!f&&this.hasEnteredView))return;f&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",f);const{onViewportEnter:b,onViewportLeave:y}=this.node.getProps(),q=f?b:y;q&&q(h)};return oE(this.node.current,m,g)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:r}=this.node;["amount","margin","root"].some(iE(i,r))&&this.startObserver()}unmount(){}}function iE({viewport:s={}},{viewport:i={}}={}){return r=>s[r]!==i[r]}const nE={inView:{Feature:sE},tap:{Feature:JA},focus:{Feature:ZA},hover:{Feature:WA}},rE={layout:{ProjectionNode:Bb,MeasureLayout:wb}},Tc={current:null},Vb={current:!1};function uE(){if(Vb.current=!0,!!Oc)if(window.matchMedia){const s=window.matchMedia("(prefers-reduced-motion)"),i=()=>Tc.current=s.matches;s.addListener(i),i()}else Tc.current=!1}const lE=[...db,oa,Ko],cE=s=>lE.find(cb(s)),Qg=new WeakMap;function dE(s,i,r){for(const u in i){const c=i[u],p=r[u];if(ta(c))s.addValue(u,c);else if(ta(p))s.addValue(u,Ti(c,{owner:s}));else if(p!==c)if(s.hasValue(u)){const m=s.getValue(u);m.liveStyle===!0?m.jump(c):m.hasAnimated||m.set(c)}else{const m=s.getStaticValue(u);s.addValue(u,Ti(m!==void 0?m:c,{owner:s}))}}for(const u in r)i[u]===void 0&&s.removeValue(u);return i}const Xg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class mE{scrapeMotionValuesFromProps(i,r,u){return{}}constructor({parent:i,props:r,presenceContext:u,reducedMotionConfig:c,blockInitialAnimation:p,visualState:m},g={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=nd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const T=Wa.now();this.renderScheduledAt<T&&(this.renderScheduledAt=T,De.render(this.render,!1,!0))};const{latestValues:h,renderState:f,onUpdate:b}=m;this.onUpdate=b,this.latestValues=h,this.baseTarget={...h},this.initialValues=r.initial?{...h}:{},this.renderState=f,this.parent=i,this.props=r,this.presenceContext=u,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.options=g,this.blockInitialAnimation=!!p,this.isControllingVariants=br(r),this.isVariantNode=yv(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:y,...q}=this.scrapeMotionValuesFromProps(r,{},this);for(const T in q){const j=q[T];h[T]!==void 0&&ta(j)&&j.set(h[T],!1)}}mount(i){this.current=i,Qg.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,u)=>this.bindToMotionValue(u,r)),Vb.current||uE(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Tc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Qg.delete(this.current),this.projection&&this.projection.unmount(),Xo(this.notifyUpdate),Xo(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const r=this.features[i];r&&(r.unmount(),r.isMounted=!1)}this.current=null}bindToMotionValue(i,r){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const u=xt.has(i),c=r.on("change",g=>{this.latestValues[i]=g,this.props.onUpdate&&De.preRender(this.notifyUpdate),u&&this.projection&&(this.projection.isTransformDirty=!0)}),p=r.on("renderRequest",this.scheduleRender);let m;window.MotionCheckAppearSync&&(m=window.MotionCheckAppearSync(this,i,r)),this.valueSubscriptions.set(i,()=>{c(),p(),m&&m(),r.owner&&r.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in ms){const r=ms[i];if(!r)continue;const{isEnabled:u,Feature:c}=r;if(!this.features[i]&&c&&u(this.props)&&(this.features[i]=new c(this)),this.features[i]){const p=this.features[i];p.isMounted?p.update():(p.mount(),p.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ue()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,r){this.latestValues[i]=r}update(i,r){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let u=0;u<Xg.length;u++){const c=Xg[u];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const p="on"+c,m=i[p];m&&(this.propEventSubscriptions[c]=this.on(c,m))}this.prevMotionValues=dE(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(i),()=>r.variantChildren.delete(i)}addValue(i,r){const u=this.values.get(i);r!==u&&(u&&this.removeValue(i),this.bindToMotionValue(i,r),this.values.set(i,r),this.latestValues[i]=r.get())}removeValue(i){this.values.delete(i);const r=this.valueSubscriptions.get(i);r&&(r(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,r){if(this.props.values&&this.props.values[i])return this.props.values[i];let u=this.values.get(i);return u===void 0&&r!==void 0&&(u=Ti(r===null?void 0:r,{owner:this}),this.addValue(i,u)),u}readValue(i,r){var u;let c=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:(u=this.getBaseTargetFromProps(this.props,i))!==null&&u!==void 0?u:this.readValueFromInstance(this.current,i,this.options);return c!=null&&(typeof c=="string"&&(ub(c)||$v(c))?c=parseFloat(c):!cE(c)&&Ko.test(r)&&(c=ib(i,r)),this.setBaseTarget(i,ta(c)?c.get():c)),ta(c)?c.get():c}setBaseTarget(i,r){this.baseTarget[i]=r}getBaseTarget(i){var r;const{initial:u}=this.props;let c;if(typeof u=="string"||typeof u=="object"){const m=Vc(this.props,u,(r=this.presenceContext)===null||r===void 0?void 0:r.custom);m&&(c=m[i])}if(u&&c!==void 0)return c;const p=this.getBaseTargetFromProps(this.props,i);return p!==void 0&&!ta(p)?p:this.initialValues[i]!==void 0&&c===void 0?void 0:this.baseTarget[i]}on(i,r){return this.events[i]||(this.events[i]=new ed),this.events[i].add(r)}notify(i,...r){this.events[i]&&this.events[i].notify(...r)}}class Gb extends mE{constructor(){super(...arguments),this.KeyframeResolver=mb}sortInstanceNodePosition(i,r){return i.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(i,r){return i.style?i.style[r]:void 0}removeValueFromRenderState(i,{vars:r,style:u}){delete r[i],delete u[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;ta(i)&&(this.childSubscription=i.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function pE(s){return window.getComputedStyle(s)}class fE extends Gb{constructor(){super(...arguments),this.type="html",this.renderInstance=zv}readValueFromInstance(i,r){if(xt.has(r)){const u=id(r);return u&&u.default||0}else{const u=pE(i),c=(Cv(r)?u.getPropertyValue(r):u[r])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(i,{transformPagePoint:r}){return Db(i,r)}build(i,r,u){Ic(i,r,u.transformTemplate)}scrapeMotionValuesFromProps(i,r,u){return Xc(i,r,u)}}class hE extends Gb{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ue}getBaseTargetFromProps(i,r){return i[r]}readValueFromInstance(i,r){if(xt.has(r)){const u=id(r);return u&&u.default||0}return r=Dv.has(r)?r:Rc(r),i.getAttribute(r)}scrapeMotionValuesFromProps(i,r,u){return kv(i,r,u)}build(i,r,u){Hc(i,r,this.isSVGTag,u.transformTemplate)}renderInstance(i,r,u,c){Lv(i,r,u,c)}mount(i){this.isSVGTag=Qc(i.tagName),super.mount(i)}}const gE=(s,i)=>Bc(s)?new hE(i):new fE(i,{allowProjection:s!==G.Fragment}),vE=_1({...V2,...nE,...YA,...rE},gE),is=t1(vE),bE=Ka.reduce((s,i)=>s+i.codes.length,0);function yE(){const{done:s,count:i,total:r}=wc(),u=r?Math.round(i/r*100):0,c=_q(s),p=i>0,m=[{icon:wh,value:Qo.length,label:"trilhas"},{icon:ir,value:Ka.length,label:"capítulos"},{icon:lv,value:`${bE}+`,label:"blocos de comando"},{icon:lc,value:"~438 MiB",label:"de RAM em uso"}];return x.jsxs("div",{children:[x.jsxs("section",{className:"relative overflow-hidden bg-gradient-to-b from-lubuntu-navy via-[#0a2038] to-[#081f38] text-white",children:[x.jsxs("div",{className:"absolute inset-0 -z-0",children:[x.jsx("div",{className:"aurora absolute -top-24 -left-24 w-[32rem] h-[32rem] rounded-full bg-lubuntu-blue/30 blur-3xl"}),x.jsx("div",{className:"orb absolute top-10 right-0 w-[26rem] h-[26rem] rounded-full bg-lubuntu-sky/20 blur-3xl"}),x.jsx("div",{className:"orb absolute bottom-0 left-1/3 w-[24rem] h-[24rem] rounded-full bg-lubuntu-blue-light/20 blur-3xl"}),x.jsx("div",{className:"grid-bg absolute inset-0 opacity-40"})]}),x.jsxs("div",{className:"relative max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-20 grid lg:grid-cols-2 gap-10 items-center",children:[x.jsxs("div",{children:[x.jsxs(is.div,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{duration:.5},className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium backdrop-blur mb-5",children:[x.jsx(yq,{size:13,className:"text-lubuntu-sky-light"}),"Lubuntu 26.04 LTS · LXQt · Resolute Raccoon"]}),x.jsxs(is.h1,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.55,delay:.05},className:"text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight",children:[x.jsx("span",{className:"text-gradient-lu",children:"Lubuntu"}),x.jsx("br",{}),"do zero ao domínio"]}),x.jsxs(is.p,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.55,delay:.12},className:"mt-5 text-lg text-slate-300 max-w-xl",children:["Um curso completo em português, ",x.jsxs("strong",{className:"text-white",children:[Ka.length," capítulos"]})," ","práticos — do primeiro ",x.jsx("code",{className:"text-lubuntu-sky-light",children:"ls ~"})," até personalizar o LXQt, otimizar hardware antigo e montar projetos reais. Comando, saída de verdade, erro comum e a correção."]}),x.jsxs(is.div,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.55,delay:.2},className:"mt-8 flex flex-wrap gap-3",children:[x.jsxs(Ia,{href:"/c/bem-vindo",className:"inline-flex items-center gap-2 bg-lubuntu-blue hover:bg-lubuntu-blue-light text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-lubuntu-blue/30 transition-colors",children:[x.jsx(ir,{size:18})," Começar o curso"]}),x.jsxs(Ia,{href:"/c/baixar-iso",className:"inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold backdrop-blur transition-colors",children:[x.jsx(rv,{size:18})," Instalar Lubuntu"]}),p&&c&&x.jsxs(Ia,{href:`/c/${c}`,className:"inline-flex items-center gap-2 text-lubuntu-sky-light hover:text-white px-3 py-3 font-semibold transition-colors",children:[x.jsx(sq,{size:18})," Continuar (",u,"%)"]})]}),p&&x.jsxs("div",{className:"mt-6 max-w-md",children:[x.jsxs("div",{className:"flex justify-between text-xs text-slate-400 mb-1",children:[x.jsx("span",{children:"Seu progresso"}),x.jsxs("span",{children:[i,"/",r]})]}),x.jsx("div",{className:"h-1.5 rounded-full bg-white/10 overflow-hidden",children:x.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-lubuntu-blue-light to-lubuntu-sky-light transition-all duration-500",style:{width:`${u}%`}})})]})]}),x.jsxs(is.div,{initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.15},className:"relative",children:[x.jsx("div",{className:"absolute -top-10 -right-4 hidden lg:block float-y",children:x.jsx(nr,{size:72,glow:!0})}),x.jsx(Qq,{})]})]}),x.jsx("div",{className:"relative border-t border-white/10 bg-black/20 backdrop-blur",children:x.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4",children:m.map((g,h)=>{const f=g.icon;return x.jsxs("div",{className:"fade-up flex items-center gap-3",style:{animationDelay:`${.3+h*.08}s`},children:[x.jsx("div",{className:"p-2 rounded-lg bg-white/10 text-lubuntu-sky-light",children:x.jsx(f,{size:20})}),x.jsxs("div",{children:[x.jsx("div",{className:"text-xl font-bold leading-none",children:g.value}),x.jsx("div",{className:"text-xs text-slate-400 mt-1",children:g.label})]})]},h)})})})]}),x.jsxs("section",{className:"max-w-6xl mx-auto px-4 sm:px-6 py-14",children:[x.jsx("div",{className:"flex items-end justify-between gap-4 mb-8",children:x.jsxs("div",{children:[x.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white",children:[Qo.length," trilhas do curso"]}),x.jsx("p",{className:"text-slate-500 dark:text-slate-400 mt-1",children:"Siga em ordem ou pule direto pro que te interessa. Seu progresso fica salvo."})]})}),x.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:Qo.map((g,h)=>{const f=mv(g.icon),b=g.chapterSlugs[0],y=b?Ai[b]:null,q=dv(g.id,s),T=q.total?Math.round(q.done/q.total*100):0,j=q.total>0&&q.done===q.total;return x.jsxs(Ia,{href:y?`/c/${b}`:"/",className:"fade-up group block h-full bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl p-5 hover:border-lubuntu-blue hover:shadow-xl hover:shadow-lubuntu-blue/10 transition-all",style:{animationDelay:`${h*.04}s`},children:[x.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[x.jsx("div",{className:`p-2 rounded-lg ${j?"bg-emerald-500/15 text-emerald-500":"bg-lubuntu-blue/10 text-lubuntu-blue dark:text-lubuntu-blue-light"}`,children:j?x.jsx(Si,{size:22}):x.jsx(f,{size:22})}),x.jsxs("span",{className:"ml-auto text-xs uppercase tracking-wide text-slate-400",children:[q.done,"/",q.total]})]}),x.jsx("h3",{className:"font-bold text-slate-900 dark:text-white group-hover:text-lubuntu-blue dark:group-hover:text-lubuntu-blue-light mb-1",children:g.label}),y&&x.jsxs("p",{className:"text-sm text-slate-500 dark:text-slate-400 mb-3",children:["Começa com: ",x.jsx("span",{className:"text-slate-700 dark:text-slate-200",children:y.title})]}),x.jsx("div",{className:"h-1 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden",children:x.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-lubuntu-blue to-lubuntu-sky transition-all duration-500",style:{width:`${T}%`}})})]},g.id)})})]}),x.jsx("section",{className:"bg-slate-100/70 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800",children:x.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 py-14",children:[x.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2",children:"O que há de novo no Lubuntu 26.04 LTS"}),x.jsxs("p",{className:"text-slate-500 dark:text-slate-400 mb-8 max-w-2xl",children:["O curso está atualizado para a base ",x.jsx("strong",{children:"Ubuntu 26.04 “Resolute Raccoon”"})," (abril de 2026), mantendo a leveza de sempre."]}),x.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4",children:[{icon:wh,t:"LXQt 2.2 sobre Qt6",d:"A área de trabalho migrou para o Qt6 — mais moderna e integrada, com o mesmo consumo enxuto de memória."},{icon:lc,t:"Kernel Linux 7.0",d:"Melhor suporte a hardware novo e antigo, com energia e drivers mais estáveis em notebooks."},{icon:uq,t:"Leveza de sempre",d:"Boot rápido e ~438 MiB de RAM em repouso: revive PCs que o Windows abandonou."}].map((g,h)=>{const f=g.icon;return x.jsxs("div",{className:"fade-up rounded-xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 p-5",style:{animationDelay:`${h*.06}s`},children:[x.jsx("div",{className:"p-2 w-fit rounded-lg bg-lubuntu-blue/10 text-lubuntu-blue dark:text-lubuntu-blue-light mb-3",children:x.jsx(f,{size:22})}),x.jsx("h3",{className:"font-bold text-slate-900 dark:text-white mb-1",children:g.t}),x.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400",children:g.d})]},h)})})]})}),x.jsxs("section",{className:"max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center",children:[x.jsx("div",{className:"flex justify-center mb-5",children:x.jsx(nr,{size:56})}),x.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3",children:"Pronto para começar?"}),x.jsx("p",{className:"text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-7",children:"Nenhum comando perigoso no primeiro capítulo — só você, o terminal e a certeza de que vai conseguir."}),x.jsxs(Ia,{href:"/c/bem-vindo",className:"inline-flex items-center gap-2 bg-lubuntu-blue hover:bg-lubuntu-blue-dark text-white px-7 py-3.5 rounded-lg font-semibold shadow-lg shadow-lubuntu-blue/30 transition-colors",children:["Abrir o capítulo 1 ",x.jsx(uc,{size:18})]})]}),x.jsx("footer",{className:"border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-400 py-8 px-4",children:x.jsxs("p",{children:["Feito com 💙 por"," ",x.jsx("a",{className:"text-lubuntu-blue dark:text-lubuntu-blue-light font-semibold",href:"https://github.com/Wallysondevs",target:"_blank",rel:"noreferrer",children:"@Wallysondevs"})," · ","Código aberto no"," ",x.jsx("a",{className:"text-lubuntu-blue dark:text-lubuntu-blue-light font-semibold",href:"https://github.com/Wallysondevs/lubuntu-book",target:"_blank",rel:"noreferrer",children:"GitHub"})]})})]})}function vi(s){const i=[],r=/(`[^`]+`|\*\*[^*]+\*\*)/g;let u=0,c,p=0;for(;(c=r.exec(s))!==null;){c.index>u&&i.push(s.slice(u,c.index));const m=c[0];m.startsWith("`")?i.push(x.jsx("code",{children:m.slice(1,-1)},p++)):i.push(x.jsx("strong",{children:m.slice(2,-2)},p++)),u=c.index+m.length}return u<s.length&&i.push(s.slice(u)),i}function Kg({text:s}){return x.jsx(x.Fragment,{children:vi(s)})}function xE({text:s}){const i=s.replace(/\r\n/g,`
`).split(`
`),r=[];let u=[],c=[],p=0;const m=()=>{if(u.length){const h=u.join(" ").trim();h&&r.push(x.jsx("p",{children:vi(h)},p++)),u=[]}},g=()=>{if(c.length){const h=[...c];r.push(x.jsx("ul",{children:h.map((f,b)=>x.jsx("li",{children:vi(f)},b))},p++)),c=[]}};for(const h of i){const f=h.trim();if(f===""){g(),m();continue}f.startsWith("### ")?(g(),m(),r.push(x.jsx("h3",{children:vi(f.slice(4))},p++))):f.startsWith("## ")?(g(),m(),r.push(x.jsx("h2",{children:vi(f.slice(3))},p++))):f.startsWith("- ")?(m(),c.push(f.slice(2))):(g(),u.push(f))}return g(),m(),x.jsx(G.Fragment,{children:r})}function qE({title:s,subtitle:i,difficulty:r,children:u}){const c={iniciante:"bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",intermediario:"bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",avancado:"bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300"};return x.jsxs(is.article,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.3},className:"max-w-3xl mx-auto px-4 sm:px-6 py-8",children:[x.jsxs("div",{className:"mb-6 pb-6 border-b border-slate-200 dark:border-slate-800",children:[r&&x.jsx("span",{className:`inline-block text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded mb-3 ${c[r]}`,children:r}),x.jsx("h1",{className:"text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white",children:s}),i&&x.jsx("p",{className:"mt-2 text-slate-600 dark:text-slate-400",children:i})]}),x.jsx("div",{className:"prose-lu",children:u})]})}function SE({code:s,language:i="bash"}){const[r,u]=G.useState(!1),c=async()=>{try{await navigator.clipboard.writeText(s),u(!0),setTimeout(()=>u(!1),1500)}catch{}};return x.jsxs("div",{className:"relative my-4 group",children:[x.jsxs("div",{className:"flex items-center justify-between bg-lubuntu-blue-dark text-lubuntu-sky-light text-xs px-4 py-2 rounded-t-lg font-mono",children:[x.jsx("span",{children:i}),x.jsxs("button",{onClick:c,className:"flex items-center gap-1 hover:text-white transition-colors",children:[r?x.jsx(Si,{size:14}):x.jsx(rq,{size:14}),r?"Copiado!":"Copiar"]})]}),x.jsx("pre",{className:"bg-slate-900 text-slate-100 p-4 rounded-b-lg overflow-x-auto text-sm leading-relaxed font-mono",children:x.jsx("code",{children:s})})]})}const AE={info:{bg:"bg-blue-50 dark:bg-blue-950/40",border:"border-blue-400",text:"text-blue-900 dark:text-blue-200",icon:x.jsx(cq,{size:20}),label:"Informação"},warning:{bg:"bg-amber-50 dark:bg-amber-950/40",border:"border-amber-400",text:"text-amber-900 dark:text-amber-200",icon:x.jsx(xq,{size:20}),label:"Atenção"},danger:{bg:"bg-red-50 dark:bg-red-950/40",border:"border-red-400",text:"text-red-900 dark:text-red-200",icon:x.jsx(iq,{size:20}),label:"Cuidado"},success:{bg:"bg-green-50 dark:bg-green-950/40",border:"border-green-400",text:"text-green-900 dark:text-green-200",icon:x.jsx(tq,{size:20}),label:"Sucesso"},tip:{bg:"bg-yellow-50 dark:bg-yellow-950/40",border:"border-lubuntu-sky",text:"text-yellow-900 dark:text-yellow-100",icon:x.jsx(dq,{size:20}),label:"Dica"}};function EE({type:s="info",title:i,children:r}){const u=AE[s];return x.jsxs("div",{className:`${u.bg} ${u.text} border-l-4 ${u.border} p-4 my-4 rounded-r-lg flex gap-3`,children:[x.jsx("div",{className:"shrink-0 mt-0.5",children:u.icon}),x.jsxs("div",{className:"flex-1",children:[x.jsx("div",{className:"font-semibold mb-1",children:i||u.label}),x.jsx("div",{className:"text-sm leading-relaxed",children:r})]})]})}function _b(){return x.jsxs("div",{className:"max-w-xl mx-auto px-4 py-20 text-center",children:[x.jsx("div",{className:"flex justify-center mb-4 opacity-80",children:x.jsx(nr,{size:72})}),x.jsx("h1",{className:"text-4xl font-bold text-lubuntu-blue dark:text-lubuntu-blue-light mb-2",children:"404"}),x.jsx("p",{className:"text-slate-600 dark:text-slate-300 mb-8",children:"Esta página não existe — deve ter ficado leve demais e voado embora. Vamos voltar ao terminal."}),x.jsxs(Ia,{href:"/",className:"inline-flex items-center gap-2 bg-lubuntu-blue hover:bg-lubuntu-blue-dark text-white px-5 py-2.5 rounded-lg font-semibold transition-colors",children:[x.jsx(uv,{size:18})," Voltar ao início"]})]})}function CE(){const[,s]=Hx("/c/:slug"),[,i]=Dc(),r=(s==null?void 0:s.slug)??"",u=Ai[r],{isDone:c,toggle:p,markDone:m}=wc();if(G.useEffect(()=>{window.scrollTo({top:0,behavior:"auto"})},[r]),!u)return x.jsx(_b,{});const g=Gq(r),h=g>0?Ka[g-1]:null,f=g<Ka.length-1?Ka[g+1]:null,b=Qo.find(q=>q.id===u.section),y=c(r);return x.jsxs(qE,{title:u.title,subtitle:u.subtitle,difficulty:u.difficulty,children:[b&&x.jsxs("p",{className:"text-xs uppercase tracking-wide text-slate-500 mb-4",children:[b.label," · Capítulo ",g+1," de ",Ka.length]}),x.jsx(xE,{text:u.intro}),u.codes.map((q,T)=>x.jsx(SE,{code:q.code,language:q.lang},T)),u.points.length>0&&x.jsxs(x.Fragment,{children:[x.jsx("h2",{children:"Pontos-chave"}),x.jsx("ul",{children:u.points.map((q,T)=>x.jsx("li",{children:x.jsx(Kg,{text:q})},T))})]}),u.alerts.map((q,T)=>x.jsx(EE,{type:q.type,children:x.jsx(Kg,{text:q.content})},T)),x.jsxs("div",{className:"mt-10 flex flex-col sm:flex-row items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-4",children:[x.jsxs("button",{onClick:()=>p(r),className:`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${y?"bg-emerald-500 text-white hover:bg-emerald-600":"bg-lubuntu-blue text-white hover:bg-lubuntu-blue-dark"}`,children:[y?x.jsx(Si,{size:16}):x.jsx(nq,{size:16}),y?"Concluído":"Marcar como concluído"]}),x.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left",children:y?"Boa! Este capítulo já está no seu progresso.":"Marque quando terminar — seu progresso fica salvo neste navegador."}),f&&x.jsxs("button",{onClick:()=>{m(r),i(`/c/${f.slug}`)},className:"sm:ml-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold border border-lubuntu-blue/40 text-lubuntu-blue dark:text-lubuntu-blue-light hover:bg-lubuntu-blue/10 transition-colors",children:["Concluir e avançar ",x.jsx(uc,{size:15})]})]}),x.jsxs("nav",{className:"mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4",children:[h?x.jsxs(Ia,{href:`/c/${h.slug}`,className:"flex-1 group p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-lubuntu-blue transition-colors",children:[x.jsxs("div",{className:"flex items-center gap-1 text-xs text-slate-500",children:[x.jsx(eq,{size:12})," Anterior"]}),x.jsx("div",{className:"text-sm font-semibold text-lubuntu-blue dark:text-lubuntu-blue-light truncate",children:h.title})]}):x.jsx("div",{className:"flex-1"}),f?x.jsxs(Ia,{href:`/c/${f.slug}`,className:"flex-1 group p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-lubuntu-blue transition-colors text-right",children:[x.jsxs("div",{className:"flex items-center justify-end gap-1 text-xs text-slate-500",children:["Próximo ",x.jsx(uc,{size:12})]}),x.jsx("div",{className:"text-sm font-semibold text-lubuntu-blue dark:text-lubuntu-blue-light truncate",children:f.title})]}):x.jsx("div",{className:"flex-1"})]})]})}function TE(){const[s,i]=G.useState(!1);return x.jsx(tv,{hook:iv,children:x.jsxs("div",{className:"min-h-screen flex flex-col",children:[x.jsx(Eq,{onMenu:()=>i(!0)}),x.jsxs("div",{className:"flex-1 flex",children:[x.jsx(Hq,{open:s,onClose:()=>i(!1)}),x.jsx("main",{className:"flex-1 min-w-0",children:x.jsxs(Qx,{children:[x.jsx(Xl,{path:"/",component:yE}),x.jsx(Xl,{path:"/c/:slug",component:CE}),x.jsx(Xl,{component:_b})]})})]})]})})}Cx.createRoot(document.getElementById("root")).render(x.jsx(G.StrictMode,{children:x.jsx(TE,{})}));
