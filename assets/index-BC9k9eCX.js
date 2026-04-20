function yI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function _I(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var L_={exports:{}},pu={},M_={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yo=Symbol.for("react.element"),vI=Symbol.for("react.portal"),EI=Symbol.for("react.fragment"),wI=Symbol.for("react.strict_mode"),TI=Symbol.for("react.profiler"),II=Symbol.for("react.provider"),SI=Symbol.for("react.context"),xI=Symbol.for("react.forward_ref"),AI=Symbol.for("react.suspense"),RI=Symbol.for("react.memo"),CI=Symbol.for("react.lazy"),Dm=Symbol.iterator;function kI(t){return t===null||typeof t!="object"?null:(t=Dm&&t[Dm]||t["@@iterator"],typeof t=="function"?t:null)}var j_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F_=Object.assign,U_={};function ds(t,e,n){this.props=t,this.context=e,this.refs=U_,this.updater=n||j_}ds.prototype.isReactComponent={};ds.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ds.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function z_(){}z_.prototype=ds.prototype;function Md(t,e,n){this.props=t,this.context=e,this.refs=U_,this.updater=n||j_}var jd=Md.prototype=new z_;jd.constructor=Md;F_(jd,ds.prototype);jd.isPureReactComponent=!0;var Om=Array.isArray,B_=Object.prototype.hasOwnProperty,Fd={current:null},$_={key:!0,ref:!0,__self:!0,__source:!0};function W_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)B_.call(e,r)&&!$_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Yo,type:t,key:s,ref:o,props:i,_owner:Fd.current}}function PI(t,e){return{$$typeof:Yo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ud(t){return typeof t=="object"&&t!==null&&t.$$typeof===Yo}function NI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vm=/\/+/g;function xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?NI(""+t.key):e.toString(36)}function Qa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Yo:case vI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+xc(o,0):r,Om(i)?(n="",t!=null&&(n=t.replace(Vm,"$&/")+"/"),Qa(i,e,n,"",function(c){return c})):i!=null&&(Ud(i)&&(i=PI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Vm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Om(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+xc(s,l);o+=Qa(s,e,n,u,i)}else if(u=kI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+xc(s,l++),o+=Qa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xa(t,e,n){if(t==null)return t;var r=[],i=0;return Qa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function DI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},Ya={transition:null},OI={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:Ya,ReactCurrentOwner:Fd};function q_(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:xa,forEach:function(t,e,n){xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xa(t,function(){e++}),e},toArray:function(t){return xa(t,function(e){return e})||[]},only:function(t){if(!Ud(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=ds;ee.Fragment=EI;ee.Profiler=TI;ee.PureComponent=Md;ee.StrictMode=wI;ee.Suspense=AI;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OI;ee.act=q_;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=F_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Fd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)B_.call(e,u)&&!$_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Yo,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:SI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:II,_context:t},t.Consumer=t};ee.createElement=W_;ee.createFactory=function(t){var e=W_.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:xI,render:t}};ee.isValidElement=Ud;ee.lazy=function(t){return{$$typeof:CI,_payload:{_status:-1,_result:t},_init:DI}};ee.memo=function(t,e){return{$$typeof:RI,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Ya.transition;Ya.transition={};try{t()}finally{Ya.transition=e}};ee.unstable_act=q_;ee.useCallback=function(t,e){return ut.current.useCallback(t,e)};ee.useContext=function(t){return ut.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};ee.useEffect=function(t,e){return ut.current.useEffect(t,e)};ee.useId=function(){return ut.current.useId()};ee.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return ut.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};ee.useRef=function(t){return ut.current.useRef(t)};ee.useState=function(t){return ut.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return ut.current.useTransition()};ee.version="18.3.1";M_.exports=ee;var j=M_.exports;const H_=_I(j),VI=yI({__proto__:null,default:H_},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bI=j,LI=Symbol.for("react.element"),MI=Symbol.for("react.fragment"),jI=Object.prototype.hasOwnProperty,FI=bI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,UI={key:!0,ref:!0,__self:!0,__source:!0};function K_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)jI.call(e,r)&&!UI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:LI,type:t,key:s,ref:o,props:i,_owner:FI.current}}pu.Fragment=MI;pu.jsx=K_;pu.jsxs=K_;L_.exports=pu;var g=L_.exports,fh={},G_={exports:{}},Rt={},Q_={exports:{}},Y_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Q){var J=$.length;$.push(Q);e:for(;0<J;){var me=J-1>>>1,Ie=$[me];if(0<i(Ie,Q))$[me]=Q,$[J]=Ie,J=me;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Q=$[0],J=$.pop();if(J!==Q){$[0]=J;e:for(var me=0,Ie=$.length,Or=Ie>>>1;me<Or;){var kt=2*(me+1)-1,Vr=$[kt],Ft=kt+1,Ln=$[Ft];if(0>i(Vr,J))Ft<Ie&&0>i(Ln,Vr)?($[me]=Ln,$[Ft]=J,me=Ft):($[me]=Vr,$[kt]=J,me=kt);else if(Ft<Ie&&0>i(Ln,J))$[me]=Ln,$[Ft]=J,me=Ft;else break e}}return Q}function i($,Q){var J=$.sortIndex-Q.sortIndex;return J!==0?J:$.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,I=!1,A=!1,k=!1,N=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x($){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=$)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function D($){if(k=!1,x($),!A)if(n(u)!==null)A=!0,Ts(V);else{var Q=n(c);Q!==null&&Is(D,Q.startTime-$)}}function V($,Q){A=!1,k&&(k=!1,w(_),_=-1),I=!0;var J=m;try{for(x(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||$&&!C());){var me=p.callback;if(typeof me=="function"){p.callback=null,m=p.priorityLevel;var Ie=me(p.expirationTime<=Q);Q=t.unstable_now(),typeof Ie=="function"?p.callback=Ie:p===n(u)&&r(u),x(Q)}else r(u);p=n(u)}if(p!==null)var Or=!0;else{var kt=n(c);kt!==null&&Is(D,kt.startTime-Q),Or=!1}return Or}finally{p=null,m=J,I=!1}}var F=!1,E=null,_=-1,T=5,R=-1;function C(){return!(t.unstable_now()-R<T)}function P(){if(E!==null){var $=t.unstable_now();R=$;var Q=!0;try{Q=E(!0,$)}finally{Q?S():(F=!1,E=null)}}else F=!1}var S;if(typeof v=="function")S=function(){v(P)};else if(typeof MessageChannel<"u"){var De=new MessageChannel,ht=De.port2;De.port1.onmessage=P,S=function(){ht.postMessage(null)}}else S=function(){N(P,0)};function Ts($){E=$,F||(F=!0,S())}function Is($,Q){_=N(function(){$(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){A||I||(A=!0,Ts(V))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var J=m;m=Q;try{return $()}finally{m=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var J=m;m=$;try{return Q()}finally{m=J}},t.unstable_scheduleCallback=function($,Q,J){var me=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?me+J:me):J=me,$){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=J+Ie,$={id:d++,callback:Q,priorityLevel:$,startTime:J,expirationTime:Ie,sortIndex:-1},J>me?($.sortIndex=J,e(c,$),n(u)===null&&$===n(c)&&(k?(w(_),_=-1):k=!0,Is(D,J-me))):($.sortIndex=Ie,e(u,$),A||I||(A=!0,Ts(V))),$},t.unstable_shouldYield=C,t.unstable_wrapCallback=function($){var Q=m;return function(){var J=m;m=Q;try{return $.apply(this,arguments)}finally{m=J}}}})(Y_);Q_.exports=Y_;var zI=Q_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BI=j,At=zI;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var X_=new Set,wo={};function ci(t,e){Ji(t,e),Ji(t+"Capture",e)}function Ji(t,e){for(wo[t]=e,t=0;t<e.length;t++)X_.add(e[t])}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ph=Object.prototype.hasOwnProperty,$I=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bm={},Lm={};function WI(t){return ph.call(Lm,t)?!0:ph.call(bm,t)?!1:$I.test(t)?Lm[t]=!0:(bm[t]=!0,!1)}function qI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function HI(t,e,n,r){if(e===null||typeof e>"u"||qI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ge[t]=new ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ge[e]=new ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ge[t]=new ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ge[t]=new ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ge[t]=new ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ge[t]=new ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ge[t]=new ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ge[t]=new ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ge[t]=new ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var zd=/[\-:]([a-z])/g;function Bd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zd,Bd);Ge[e]=new ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zd,Bd);Ge[e]=new ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zd,Bd);Ge[e]=new ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ge[t]=new ct(t,1,!1,t.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ge[t]=new ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function $d(t,e,n,r){var i=Ge.hasOwnProperty(e)?Ge[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(HI(e,n,i,r)&&(n=null),r||i===null?WI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var bn=BI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Aa=Symbol.for("react.element"),Ri=Symbol.for("react.portal"),Ci=Symbol.for("react.fragment"),Wd=Symbol.for("react.strict_mode"),mh=Symbol.for("react.profiler"),J_=Symbol.for("react.provider"),Z_=Symbol.for("react.context"),qd=Symbol.for("react.forward_ref"),gh=Symbol.for("react.suspense"),yh=Symbol.for("react.suspense_list"),Hd=Symbol.for("react.memo"),qn=Symbol.for("react.lazy"),ev=Symbol.for("react.offscreen"),Mm=Symbol.iterator;function Us(t){return t===null||typeof t!="object"?null:(t=Mm&&t[Mm]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,Ac;function Qs(t){if(Ac===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ac=e&&e[1]||""}return`
`+Ac+t}var Rc=!1;function Cc(t,e){if(!t||Rc)return"";Rc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Rc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qs(t):""}function KI(t){switch(t.tag){case 5:return Qs(t.type);case 16:return Qs("Lazy");case 13:return Qs("Suspense");case 19:return Qs("SuspenseList");case 0:case 2:case 15:return t=Cc(t.type,!1),t;case 11:return t=Cc(t.type.render,!1),t;case 1:return t=Cc(t.type,!0),t;default:return""}}function _h(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ci:return"Fragment";case Ri:return"Portal";case mh:return"Profiler";case Wd:return"StrictMode";case gh:return"Suspense";case yh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Z_:return(t.displayName||"Context")+".Consumer";case J_:return(t._context.displayName||"Context")+".Provider";case qd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hd:return e=t.displayName||null,e!==null?e:_h(t.type)||"Memo";case qn:e=t._payload,t=t._init;try{return _h(t(e))}catch{}}return null}function GI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _h(e);case 8:return e===Wd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function QI(t){var e=tv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ra(t){t._valueTracker||(t._valueTracker=QI(t))}function nv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=tv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vh(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function rv(t,e){e=e.checked,e!=null&&$d(t,"checked",e,!1)}function Eh(t,e){rv(t,e);var n=gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wh(t,e.type,n):e.hasOwnProperty("defaultValue")&&wh(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wh(t,e,n){(e!=="number"||vl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ys=Array.isArray;function Ui(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Th(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Um(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Ys(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function iv(t,e){var n=gr(e.value),r=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function zm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function sv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ih(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?sv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ca,ov=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ca=Ca||document.createElement("div"),Ca.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ca.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function To(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var so={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},YI=["Webkit","ms","Moz","O"];Object.keys(so).forEach(function(t){YI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),so[e]=so[t]})});function av(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||so.hasOwnProperty(t)&&so[t]?(""+e).trim():e+"px"}function lv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=av(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var XI=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sh(t,e){if(e){if(XI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function xh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ah=null;function Kd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rh=null,zi=null,Bi=null;function Bm(t){if(t=Zo(t)){if(typeof Rh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=vu(e),Rh(t.stateNode,t.type,e))}}function uv(t){zi?Bi?Bi.push(t):Bi=[t]:zi=t}function cv(){if(zi){var t=zi,e=Bi;if(Bi=zi=null,Bm(t),e)for(t=0;t<e.length;t++)Bm(e[t])}}function hv(t,e){return t(e)}function dv(){}var kc=!1;function fv(t,e,n){if(kc)return t(e,n);kc=!0;try{return hv(t,e,n)}finally{kc=!1,(zi!==null||Bi!==null)&&(dv(),cv())}}function Io(t,e){var n=t.stateNode;if(n===null)return null;var r=vu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Ch=!1;if(Rn)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){Ch=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{Ch=!1}function JI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var oo=!1,El=null,wl=!1,kh=null,ZI={onError:function(t){oo=!0,El=t}};function eS(t,e,n,r,i,s,o,l,u){oo=!1,El=null,JI.apply(ZI,arguments)}function tS(t,e,n,r,i,s,o,l,u){if(eS.apply(this,arguments),oo){if(oo){var c=El;oo=!1,El=null}else throw Error(U(198));wl||(wl=!0,kh=c)}}function hi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function pv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $m(t){if(hi(t)!==t)throw Error(U(188))}function nS(t){var e=t.alternate;if(!e){if(e=hi(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return $m(i),t;if(s===r)return $m(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function mv(t){return t=nS(t),t!==null?gv(t):null}function gv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=gv(t);if(e!==null)return e;t=t.sibling}return null}var yv=At.unstable_scheduleCallback,Wm=At.unstable_cancelCallback,rS=At.unstable_shouldYield,iS=At.unstable_requestPaint,Ae=At.unstable_now,sS=At.unstable_getCurrentPriorityLevel,Gd=At.unstable_ImmediatePriority,_v=At.unstable_UserBlockingPriority,Tl=At.unstable_NormalPriority,oS=At.unstable_LowPriority,vv=At.unstable_IdlePriority,mu=null,on=null;function aS(t){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(mu,t,void 0,(t.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:cS,lS=Math.log,uS=Math.LN2;function cS(t){return t>>>=0,t===0?32:31-(lS(t)/uS|0)|0}var ka=64,Pa=4194304;function Xs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Il(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Xs(l):(s&=o,s!==0&&(r=Xs(s)))}else o=n&~i,o!==0?r=Xs(o):s!==0&&(r=Xs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ht(e),i=1<<n,r|=t[n],e&=~i;return r}function hS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ht(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=hS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Ph(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ev(){var t=ka;return ka<<=1,!(ka&4194240)&&(ka=64),t}function Pc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ht(e),t[e]=n}function fS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ht(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Qd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ht(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function wv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Tv,Yd,Iv,Sv,xv,Nh=!1,Na=[],rr=null,ir=null,sr=null,So=new Map,xo=new Map,Kn=[],pS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qm(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":So.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(e.pointerId)}}function Bs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Zo(e),e!==null&&Yd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function mS(t,e,n,r,i){switch(e){case"focusin":return rr=Bs(rr,t,e,n,r,i),!0;case"dragenter":return ir=Bs(ir,t,e,n,r,i),!0;case"mouseover":return sr=Bs(sr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return So.set(s,Bs(So.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,xo.set(s,Bs(xo.get(s)||null,t,e,n,r,i)),!0}return!1}function Av(t){var e=Wr(t.target);if(e!==null){var n=hi(e);if(n!==null){if(e=n.tag,e===13){if(e=pv(n),e!==null){t.blockedOn=e,xv(t.priority,function(){Iv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Dh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ah=r,n.target.dispatchEvent(r),Ah=null}else return e=Zo(n),e!==null&&Yd(e),t.blockedOn=n,!1;e.shift()}return!0}function Hm(t,e,n){Xa(t)&&n.delete(e)}function gS(){Nh=!1,rr!==null&&Xa(rr)&&(rr=null),ir!==null&&Xa(ir)&&(ir=null),sr!==null&&Xa(sr)&&(sr=null),So.forEach(Hm),xo.forEach(Hm)}function $s(t,e){t.blockedOn===e&&(t.blockedOn=null,Nh||(Nh=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,gS)))}function Ao(t){function e(i){return $s(i,t)}if(0<Na.length){$s(Na[0],t);for(var n=1;n<Na.length;n++){var r=Na[n];r.blockedOn===t&&(r.blockedOn=null)}}for(rr!==null&&$s(rr,t),ir!==null&&$s(ir,t),sr!==null&&$s(sr,t),So.forEach(e),xo.forEach(e),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)Av(n),n.blockedOn===null&&Kn.shift()}var $i=bn.ReactCurrentBatchConfig,Sl=!0;function yS(t,e,n,r){var i=ae,s=$i.transition;$i.transition=null;try{ae=1,Xd(t,e,n,r)}finally{ae=i,$i.transition=s}}function _S(t,e,n,r){var i=ae,s=$i.transition;$i.transition=null;try{ae=4,Xd(t,e,n,r)}finally{ae=i,$i.transition=s}}function Xd(t,e,n,r){if(Sl){var i=Dh(t,e,n,r);if(i===null)Uc(t,e,r,xl,n),qm(t,r);else if(mS(i,t,e,n,r))r.stopPropagation();else if(qm(t,r),e&4&&-1<pS.indexOf(t)){for(;i!==null;){var s=Zo(i);if(s!==null&&Tv(s),s=Dh(t,e,n,r),s===null&&Uc(t,e,r,xl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Uc(t,e,r,null,n)}}var xl=null;function Dh(t,e,n,r){if(xl=null,t=Kd(r),t=Wr(t),t!==null)if(e=hi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=pv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xl=t,null}function Rv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sS()){case Gd:return 1;case _v:return 4;case Tl:case oS:return 16;case vv:return 536870912;default:return 16}default:return 16}}var Zn=null,Jd=null,Ja=null;function Cv(){if(Ja)return Ja;var t,e=Jd,n=e.length,r,i="value"in Zn?Zn.value:Zn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ja=i.slice(t,1<r?1-r:void 0)}function Za(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Da(){return!0}function Km(){return!1}function Ct(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Da:Km,this.isPropagationStopped=Km,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Da)},persist:function(){},isPersistent:Da}),e}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zd=Ct(fs),Jo=ve({},fs,{view:0,detail:0}),vS=Ct(Jo),Nc,Dc,Ws,gu=ve({},Jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ef,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(Nc=t.screenX-Ws.screenX,Dc=t.screenY-Ws.screenY):Dc=Nc=0,Ws=t),Nc)},movementY:function(t){return"movementY"in t?t.movementY:Dc}}),Gm=Ct(gu),ES=ve({},gu,{dataTransfer:0}),wS=Ct(ES),TS=ve({},Jo,{relatedTarget:0}),Oc=Ct(TS),IS=ve({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),SS=Ct(IS),xS=ve({},fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),AS=Ct(xS),RS=ve({},fs,{data:0}),Qm=Ct(RS),CS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function NS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=PS[t])?!!e[t]:!1}function ef(){return NS}var DS=ve({},Jo,{key:function(t){if(t.key){var e=CS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Za(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ef,charCode:function(t){return t.type==="keypress"?Za(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Za(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OS=Ct(DS),VS=ve({},gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ym=Ct(VS),bS=ve({},Jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ef}),LS=Ct(bS),MS=ve({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),jS=Ct(MS),FS=ve({},gu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),US=Ct(FS),zS=[9,13,27,32],tf=Rn&&"CompositionEvent"in window,ao=null;Rn&&"documentMode"in document&&(ao=document.documentMode);var BS=Rn&&"TextEvent"in window&&!ao,kv=Rn&&(!tf||ao&&8<ao&&11>=ao),Xm=" ",Jm=!1;function Pv(t,e){switch(t){case"keyup":return zS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ki=!1;function $S(t,e){switch(t){case"compositionend":return Nv(e);case"keypress":return e.which!==32?null:(Jm=!0,Xm);case"textInput":return t=e.data,t===Xm&&Jm?null:t;default:return null}}function WS(t,e){if(ki)return t==="compositionend"||!tf&&Pv(t,e)?(t=Cv(),Ja=Jd=Zn=null,ki=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return kv&&e.locale!=="ko"?null:e.data;default:return null}}var qS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qS[t.type]:e==="textarea"}function Dv(t,e,n,r){uv(r),e=Al(e,"onChange"),0<e.length&&(n=new Zd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var lo=null,Ro=null;function HS(t){$v(t,0)}function yu(t){var e=Di(t);if(nv(e))return t}function KS(t,e){if(t==="change")return e}var Ov=!1;if(Rn){var Vc;if(Rn){var bc="oninput"in document;if(!bc){var eg=document.createElement("div");eg.setAttribute("oninput","return;"),bc=typeof eg.oninput=="function"}Vc=bc}else Vc=!1;Ov=Vc&&(!document.documentMode||9<document.documentMode)}function tg(){lo&&(lo.detachEvent("onpropertychange",Vv),Ro=lo=null)}function Vv(t){if(t.propertyName==="value"&&yu(Ro)){var e=[];Dv(e,Ro,t,Kd(t)),fv(HS,e)}}function GS(t,e,n){t==="focusin"?(tg(),lo=e,Ro=n,lo.attachEvent("onpropertychange",Vv)):t==="focusout"&&tg()}function QS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yu(Ro)}function YS(t,e){if(t==="click")return yu(e)}function XS(t,e){if(t==="input"||t==="change")return yu(e)}function JS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yt=typeof Object.is=="function"?Object.is:JS;function Co(t,e){if(Yt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ph.call(e,i)||!Yt(t[i],e[i]))return!1}return!0}function ng(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rg(t,e){var n=ng(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ng(n)}}function bv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lv(){for(var t=window,e=vl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vl(t.document)}return e}function nf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ZS(t){var e=Lv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&bv(n.ownerDocument.documentElement,n)){if(r!==null&&nf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=rg(n,s);var o=rg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var e1=Rn&&"documentMode"in document&&11>=document.documentMode,Pi=null,Oh=null,uo=null,Vh=!1;function ig(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vh||Pi==null||Pi!==vl(r)||(r=Pi,"selectionStart"in r&&nf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),uo&&Co(uo,r)||(uo=r,r=Al(Oh,"onSelect"),0<r.length&&(e=new Zd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Pi)))}function Oa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ni={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionend:Oa("Transition","TransitionEnd")},Lc={},Mv={};Rn&&(Mv=document.createElement("div").style,"AnimationEvent"in window||(delete Ni.animationend.animation,delete Ni.animationiteration.animation,delete Ni.animationstart.animation),"TransitionEvent"in window||delete Ni.transitionend.transition);function _u(t){if(Lc[t])return Lc[t];if(!Ni[t])return t;var e=Ni[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Mv)return Lc[t]=e[n];return t}var jv=_u("animationend"),Fv=_u("animationiteration"),Uv=_u("animationstart"),zv=_u("transitionend"),Bv=new Map,sg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){Bv.set(t,e),ci(e,[t])}for(var Mc=0;Mc<sg.length;Mc++){var jc=sg[Mc],t1=jc.toLowerCase(),n1=jc[0].toUpperCase()+jc.slice(1);Ar(t1,"on"+n1)}Ar(jv,"onAnimationEnd");Ar(Fv,"onAnimationIteration");Ar(Uv,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(zv,"onTransitionEnd");Ji("onMouseEnter",["mouseout","mouseover"]);Ji("onMouseLeave",["mouseout","mouseover"]);Ji("onPointerEnter",["pointerout","pointerover"]);Ji("onPointerLeave",["pointerout","pointerover"]);ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Js));function og(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,tS(r,e,void 0,t),t.currentTarget=null}function $v(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;og(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;og(i,l,c),s=u}}}if(wl)throw t=kh,wl=!1,kh=null,t}function de(t,e){var n=e[Fh];n===void 0&&(n=e[Fh]=new Set);var r=t+"__bubble";n.has(r)||(Wv(e,t,2,!1),n.add(r))}function Fc(t,e,n){var r=0;e&&(r|=4),Wv(n,t,r,e)}var Va="_reactListening"+Math.random().toString(36).slice(2);function ko(t){if(!t[Va]){t[Va]=!0,X_.forEach(function(n){n!=="selectionchange"&&(r1.has(n)||Fc(n,!1,t),Fc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Va]||(e[Va]=!0,Fc("selectionchange",!1,e))}}function Wv(t,e,n,r){switch(Rv(e)){case 1:var i=yS;break;case 4:i=_S;break;default:i=Xd}n=i.bind(null,e,n,t),i=void 0,!Ch||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Uc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Wr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}fv(function(){var c=s,d=Kd(n),p=[];e:{var m=Bv.get(t);if(m!==void 0){var I=Zd,A=t;switch(t){case"keypress":if(Za(n)===0)break e;case"keydown":case"keyup":I=OS;break;case"focusin":A="focus",I=Oc;break;case"focusout":A="blur",I=Oc;break;case"beforeblur":case"afterblur":I=Oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Gm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=wS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=LS;break;case jv:case Fv:case Uv:I=SS;break;case zv:I=jS;break;case"scroll":I=vS;break;case"wheel":I=US;break;case"copy":case"cut":case"paste":I=AS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Ym}var k=(e&4)!==0,N=!k&&t==="scroll",w=k?m!==null?m+"Capture":null:m;k=[];for(var v=c,x;v!==null;){x=v;var D=x.stateNode;if(x.tag===5&&D!==null&&(x=D,w!==null&&(D=Io(v,w),D!=null&&k.push(Po(v,D,x)))),N)break;v=v.return}0<k.length&&(m=new I(m,A,null,n,d),p.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",m&&n!==Ah&&(A=n.relatedTarget||n.fromElement)&&(Wr(A)||A[Cn]))break e;if((I||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,I?(A=n.relatedTarget||n.toElement,I=c,A=A?Wr(A):null,A!==null&&(N=hi(A),A!==N||A.tag!==5&&A.tag!==6)&&(A=null)):(I=null,A=c),I!==A)){if(k=Gm,D="onMouseLeave",w="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(k=Ym,D="onPointerLeave",w="onPointerEnter",v="pointer"),N=I==null?m:Di(I),x=A==null?m:Di(A),m=new k(D,v+"leave",I,n,d),m.target=N,m.relatedTarget=x,D=null,Wr(d)===c&&(k=new k(w,v+"enter",A,n,d),k.target=x,k.relatedTarget=N,D=k),N=D,I&&A)t:{for(k=I,w=A,v=0,x=k;x;x=Ti(x))v++;for(x=0,D=w;D;D=Ti(D))x++;for(;0<v-x;)k=Ti(k),v--;for(;0<x-v;)w=Ti(w),x--;for(;v--;){if(k===w||w!==null&&k===w.alternate)break t;k=Ti(k),w=Ti(w)}k=null}else k=null;I!==null&&ag(p,m,I,k,!1),A!==null&&N!==null&&ag(p,N,A,k,!0)}}e:{if(m=c?Di(c):window,I=m.nodeName&&m.nodeName.toLowerCase(),I==="select"||I==="input"&&m.type==="file")var V=KS;else if(Zm(m))if(Ov)V=XS;else{V=QS;var F=GS}else(I=m.nodeName)&&I.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(V=YS);if(V&&(V=V(t,c))){Dv(p,V,n,d);break e}F&&F(t,m,c),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&wh(m,"number",m.value)}switch(F=c?Di(c):window,t){case"focusin":(Zm(F)||F.contentEditable==="true")&&(Pi=F,Oh=c,uo=null);break;case"focusout":uo=Oh=Pi=null;break;case"mousedown":Vh=!0;break;case"contextmenu":case"mouseup":case"dragend":Vh=!1,ig(p,n,d);break;case"selectionchange":if(e1)break;case"keydown":case"keyup":ig(p,n,d)}var E;if(tf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else ki?Pv(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(kv&&n.locale!=="ko"&&(ki||_!=="onCompositionStart"?_==="onCompositionEnd"&&ki&&(E=Cv()):(Zn=d,Jd="value"in Zn?Zn.value:Zn.textContent,ki=!0)),F=Al(c,_),0<F.length&&(_=new Qm(_,t,null,n,d),p.push({event:_,listeners:F}),E?_.data=E:(E=Nv(n),E!==null&&(_.data=E)))),(E=BS?$S(t,n):WS(t,n))&&(c=Al(c,"onBeforeInput"),0<c.length&&(d=new Qm("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=E))}$v(p,e)})}function Po(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Al(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Io(t,n),s!=null&&r.unshift(Po(t,s,i)),s=Io(t,e),s!=null&&r.push(Po(t,s,i))),t=t.return}return r}function Ti(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ag(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Io(n,s),u!=null&&o.unshift(Po(n,u,l))):i||(u=Io(n,s),u!=null&&o.push(Po(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var i1=/\r\n?/g,s1=/\u0000|\uFFFD/g;function lg(t){return(typeof t=="string"?t:""+t).replace(i1,`
`).replace(s1,"")}function ba(t,e,n){if(e=lg(e),lg(t)!==e&&n)throw Error(U(425))}function Rl(){}var bh=null,Lh=null;function Mh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jh=typeof setTimeout=="function"?setTimeout:void 0,o1=typeof clearTimeout=="function"?clearTimeout:void 0,ug=typeof Promise=="function"?Promise:void 0,a1=typeof queueMicrotask=="function"?queueMicrotask:typeof ug<"u"?function(t){return ug.resolve(null).then(t).catch(l1)}:jh;function l1(t){setTimeout(function(){throw t})}function zc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ao(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ao(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ps=Math.random().toString(36).slice(2),sn="__reactFiber$"+ps,No="__reactProps$"+ps,Cn="__reactContainer$"+ps,Fh="__reactEvents$"+ps,u1="__reactListeners$"+ps,c1="__reactHandles$"+ps;function Wr(t){var e=t[sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cn]||n[sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cg(t);t!==null;){if(n=t[sn])return n;t=cg(t)}return e}t=n,n=t.parentNode}return null}function Zo(t){return t=t[sn]||t[Cn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Di(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function vu(t){return t[No]||null}var Uh=[],Oi=-1;function Rr(t){return{current:t}}function pe(t){0>Oi||(t.current=Uh[Oi],Uh[Oi]=null,Oi--)}function ce(t,e){Oi++,Uh[Oi]=t.current,t.current=e}var yr={},rt=Rr(yr),yt=Rr(!1),Zr=yr;function Zi(t,e){var n=t.type.contextTypes;if(!n)return yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function _t(t){return t=t.childContextTypes,t!=null}function Cl(){pe(yt),pe(rt)}function hg(t,e,n){if(rt.current!==yr)throw Error(U(168));ce(rt,e),ce(yt,n)}function qv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,GI(t)||"Unknown",i));return ve({},n,r)}function kl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,Zr=rt.current,ce(rt,t),ce(yt,yt.current),!0}function dg(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=qv(t,e,Zr),r.__reactInternalMemoizedMergedChildContext=t,pe(yt),pe(rt),ce(rt,t)):pe(yt),ce(yt,n)}var vn=null,Eu=!1,Bc=!1;function Hv(t){vn===null?vn=[t]:vn.push(t)}function h1(t){Eu=!0,Hv(t)}function Cr(){if(!Bc&&vn!==null){Bc=!0;var t=0,e=ae;try{var n=vn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}vn=null,Eu=!1}catch(i){throw vn!==null&&(vn=vn.slice(t+1)),yv(Gd,Cr),i}finally{ae=e,Bc=!1}}return null}var Vi=[],bi=0,Pl=null,Nl=0,Pt=[],Nt=0,ei=null,wn=1,Tn="";function Ur(t,e){Vi[bi++]=Nl,Vi[bi++]=Pl,Pl=t,Nl=e}function Kv(t,e,n){Pt[Nt++]=wn,Pt[Nt++]=Tn,Pt[Nt++]=ei,ei=t;var r=wn;t=Tn;var i=32-Ht(r)-1;r&=~(1<<i),n+=1;var s=32-Ht(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,wn=1<<32-Ht(e)+i|n<<i|r,Tn=s+t}else wn=1<<s|n<<i|r,Tn=t}function rf(t){t.return!==null&&(Ur(t,1),Kv(t,1,0))}function sf(t){for(;t===Pl;)Pl=Vi[--bi],Vi[bi]=null,Nl=Vi[--bi],Vi[bi]=null;for(;t===ei;)ei=Pt[--Nt],Pt[Nt]=null,Tn=Pt[--Nt],Pt[Nt]=null,wn=Pt[--Nt],Pt[Nt]=null}var xt=null,It=null,ge=!1,$t=null;function Gv(t,e){var n=Vt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function fg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xt=t,It=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xt=t,It=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ei!==null?{id:wn,overflow:Tn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xt=t,It=null,!0):!1;default:return!1}}function zh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bh(t){if(ge){var e=It;if(e){var n=e;if(!fg(t,e)){if(zh(t))throw Error(U(418));e=or(n.nextSibling);var r=xt;e&&fg(t,e)?Gv(r,n):(t.flags=t.flags&-4097|2,ge=!1,xt=t)}}else{if(zh(t))throw Error(U(418));t.flags=t.flags&-4097|2,ge=!1,xt=t}}}function pg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xt=t}function La(t){if(t!==xt)return!1;if(!ge)return pg(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mh(t.type,t.memoizedProps)),e&&(e=It)){if(zh(t))throw Qv(),Error(U(418));for(;e;)Gv(t,e),e=or(e.nextSibling)}if(pg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){It=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}It=null}}else It=xt?or(t.stateNode.nextSibling):null;return!0}function Qv(){for(var t=It;t;)t=or(t.nextSibling)}function es(){It=xt=null,ge=!1}function of(t){$t===null?$t=[t]:$t.push(t)}var d1=bn.ReactCurrentBatchConfig;function qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Ma(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function mg(t){var e=t._init;return e(t._payload)}function Yv(t){function e(w,v){if(t){var x=w.deletions;x===null?(w.deletions=[v],w.flags|=16):x.push(v)}}function n(w,v){if(!t)return null;for(;v!==null;)e(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function i(w,v){return w=cr(w,v),w.index=0,w.sibling=null,w}function s(w,v,x){return w.index=x,t?(x=w.alternate,x!==null?(x=x.index,x<v?(w.flags|=2,v):x):(w.flags|=2,v)):(w.flags|=1048576,v)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,v,x,D){return v===null||v.tag!==6?(v=Qc(x,w.mode,D),v.return=w,v):(v=i(v,x),v.return=w,v)}function u(w,v,x,D){var V=x.type;return V===Ci?d(w,v,x.props.children,D,x.key):v!==null&&(v.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===qn&&mg(V)===v.type)?(D=i(v,x.props),D.ref=qs(w,v,x),D.return=w,D):(D=ol(x.type,x.key,x.props,null,w.mode,D),D.ref=qs(w,v,x),D.return=w,D)}function c(w,v,x,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Yc(x,w.mode,D),v.return=w,v):(v=i(v,x.children||[]),v.return=w,v)}function d(w,v,x,D,V){return v===null||v.tag!==7?(v=Qr(x,w.mode,D,V),v.return=w,v):(v=i(v,x),v.return=w,v)}function p(w,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Qc(""+v,w.mode,x),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Aa:return x=ol(v.type,v.key,v.props,null,w.mode,x),x.ref=qs(w,null,v),x.return=w,x;case Ri:return v=Yc(v,w.mode,x),v.return=w,v;case qn:var D=v._init;return p(w,D(v._payload),x)}if(Ys(v)||Us(v))return v=Qr(v,w.mode,x,null),v.return=w,v;Ma(w,v)}return null}function m(w,v,x,D){var V=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return V!==null?null:l(w,v,""+x,D);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Aa:return x.key===V?u(w,v,x,D):null;case Ri:return x.key===V?c(w,v,x,D):null;case qn:return V=x._init,m(w,v,V(x._payload),D)}if(Ys(x)||Us(x))return V!==null?null:d(w,v,x,D,null);Ma(w,x)}return null}function I(w,v,x,D,V){if(typeof D=="string"&&D!==""||typeof D=="number")return w=w.get(x)||null,l(v,w,""+D,V);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Aa:return w=w.get(D.key===null?x:D.key)||null,u(v,w,D,V);case Ri:return w=w.get(D.key===null?x:D.key)||null,c(v,w,D,V);case qn:var F=D._init;return I(w,v,x,F(D._payload),V)}if(Ys(D)||Us(D))return w=w.get(x)||null,d(v,w,D,V,null);Ma(v,D)}return null}function A(w,v,x,D){for(var V=null,F=null,E=v,_=v=0,T=null;E!==null&&_<x.length;_++){E.index>_?(T=E,E=null):T=E.sibling;var R=m(w,E,x[_],D);if(R===null){E===null&&(E=T);break}t&&E&&R.alternate===null&&e(w,E),v=s(R,v,_),F===null?V=R:F.sibling=R,F=R,E=T}if(_===x.length)return n(w,E),ge&&Ur(w,_),V;if(E===null){for(;_<x.length;_++)E=p(w,x[_],D),E!==null&&(v=s(E,v,_),F===null?V=E:F.sibling=E,F=E);return ge&&Ur(w,_),V}for(E=r(w,E);_<x.length;_++)T=I(E,w,_,x[_],D),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?_:T.key),v=s(T,v,_),F===null?V=T:F.sibling=T,F=T);return t&&E.forEach(function(C){return e(w,C)}),ge&&Ur(w,_),V}function k(w,v,x,D){var V=Us(x);if(typeof V!="function")throw Error(U(150));if(x=V.call(x),x==null)throw Error(U(151));for(var F=V=null,E=v,_=v=0,T=null,R=x.next();E!==null&&!R.done;_++,R=x.next()){E.index>_?(T=E,E=null):T=E.sibling;var C=m(w,E,R.value,D);if(C===null){E===null&&(E=T);break}t&&E&&C.alternate===null&&e(w,E),v=s(C,v,_),F===null?V=C:F.sibling=C,F=C,E=T}if(R.done)return n(w,E),ge&&Ur(w,_),V;if(E===null){for(;!R.done;_++,R=x.next())R=p(w,R.value,D),R!==null&&(v=s(R,v,_),F===null?V=R:F.sibling=R,F=R);return ge&&Ur(w,_),V}for(E=r(w,E);!R.done;_++,R=x.next())R=I(E,w,_,R.value,D),R!==null&&(t&&R.alternate!==null&&E.delete(R.key===null?_:R.key),v=s(R,v,_),F===null?V=R:F.sibling=R,F=R);return t&&E.forEach(function(P){return e(w,P)}),ge&&Ur(w,_),V}function N(w,v,x,D){if(typeof x=="object"&&x!==null&&x.type===Ci&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Aa:e:{for(var V=x.key,F=v;F!==null;){if(F.key===V){if(V=x.type,V===Ci){if(F.tag===7){n(w,F.sibling),v=i(F,x.props.children),v.return=w,w=v;break e}}else if(F.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===qn&&mg(V)===F.type){n(w,F.sibling),v=i(F,x.props),v.ref=qs(w,F,x),v.return=w,w=v;break e}n(w,F);break}else e(w,F);F=F.sibling}x.type===Ci?(v=Qr(x.props.children,w.mode,D,x.key),v.return=w,w=v):(D=ol(x.type,x.key,x.props,null,w.mode,D),D.ref=qs(w,v,x),D.return=w,w=D)}return o(w);case Ri:e:{for(F=x.key;v!==null;){if(v.key===F)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(w,v.sibling),v=i(v,x.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else e(w,v);v=v.sibling}v=Yc(x,w.mode,D),v.return=w,w=v}return o(w);case qn:return F=x._init,N(w,v,F(x._payload),D)}if(Ys(x))return A(w,v,x,D);if(Us(x))return k(w,v,x,D);Ma(w,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(w,v.sibling),v=i(v,x),v.return=w,w=v):(n(w,v),v=Qc(x,w.mode,D),v.return=w,w=v),o(w)):n(w,v)}return N}var ts=Yv(!0),Xv=Yv(!1),Dl=Rr(null),Ol=null,Li=null,af=null;function lf(){af=Li=Ol=null}function uf(t){var e=Dl.current;pe(Dl),t._currentValue=e}function $h(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Wi(t,e){Ol=t,af=Li=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gt=!0),t.firstContext=null)}function Mt(t){var e=t._currentValue;if(af!==t)if(t={context:t,memoizedValue:e,next:null},Li===null){if(Ol===null)throw Error(U(308));Li=t,Ol.dependencies={lanes:0,firstContext:t}}else Li=Li.next=t;return e}var qr=null;function cf(t){qr===null?qr=[t]:qr.push(t)}function Jv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,cf(e)):(n.next=i.next,i.next=n),e.interleaved=n,kn(t,r)}function kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hn=!1;function hf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,kn(t,n)}return i=r.interleaved,i===null?(e.next=e,cf(r)):(e.next=i.next,i.next=e),r.interleaved=e,kn(t,n)}function el(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qd(t,n)}}function gg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Vl(t,e,n,r){var i=t.updateQueue;Hn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,I=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:I,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,k=l;switch(m=e,I=n,k.tag){case 1:if(A=k.payload,typeof A=="function"){p=A.call(I,p,m);break e}p=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=k.payload,m=typeof A=="function"?A.call(I,p,m):A,m==null)break e;p=ve({},p,m);break e;case 2:Hn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else I={eventTime:I,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=I,u=p):d=d.next=I,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ni|=o,t.lanes=o,t.memoizedState=p}}function yg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var ea={},an=Rr(ea),Do=Rr(ea),Oo=Rr(ea);function Hr(t){if(t===ea)throw Error(U(174));return t}function df(t,e){switch(ce(Oo,e),ce(Do,t),ce(an,ea),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ih(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ih(e,t)}pe(an),ce(an,e)}function ns(){pe(an),pe(Do),pe(Oo)}function e0(t){Hr(Oo.current);var e=Hr(an.current),n=Ih(e,t.type);e!==n&&(ce(Do,t),ce(an,n))}function ff(t){Do.current===t&&(pe(an),pe(Do))}var ye=Rr(0);function bl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $c=[];function pf(){for(var t=0;t<$c.length;t++)$c[t]._workInProgressVersionPrimary=null;$c.length=0}var tl=bn.ReactCurrentDispatcher,Wc=bn.ReactCurrentBatchConfig,ti=0,_e=null,Ve=null,ze=null,Ll=!1,co=!1,Vo=0,f1=0;function Xe(){throw Error(U(321))}function mf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yt(t[n],e[n]))return!1;return!0}function gf(t,e,n,r,i,s){if(ti=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tl.current=t===null||t.memoizedState===null?y1:_1,t=n(r,i),co){s=0;do{if(co=!1,Vo=0,25<=s)throw Error(U(301));s+=1,ze=Ve=null,e.updateQueue=null,tl.current=v1,t=n(r,i)}while(co)}if(tl.current=Ml,e=Ve!==null&&Ve.next!==null,ti=0,ze=Ve=_e=null,Ll=!1,e)throw Error(U(300));return t}function yf(){var t=Vo!==0;return Vo=0,t}function nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?_e.memoizedState=ze=t:ze=ze.next=t,ze}function jt(){if(Ve===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var e=ze===null?_e.memoizedState:ze.next;if(e!==null)ze=e,Ve=t;else{if(t===null)throw Error(U(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},ze===null?_e.memoizedState=ze=t:ze=ze.next=t}return ze}function bo(t,e){return typeof e=="function"?e(t):e}function qc(t){var e=jt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((ti&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,_e.lanes|=d,ni|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Yt(r,e.memoizedState)||(gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,ni|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hc(t){var e=jt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Yt(s,e.memoizedState)||(gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function t0(){}function n0(t,e){var n=_e,r=jt(),i=e(),s=!Yt(r.memoizedState,i);if(s&&(r.memoizedState=i,gt=!0),r=r.queue,_f(s0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,Lo(9,i0.bind(null,n,r,i,e),void 0,null),Be===null)throw Error(U(349));ti&30||r0(n,e,i)}return i}function r0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function i0(t,e,n,r){e.value=n,e.getSnapshot=r,o0(e)&&a0(t)}function s0(t,e,n){return n(function(){o0(e)&&a0(t)})}function o0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yt(t,n)}catch{return!0}}function a0(t){var e=kn(t,1);e!==null&&Kt(e,t,1,-1)}function _g(t){var e=nn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:t},e.queue=t,t=t.dispatch=g1.bind(null,_e,t),[e.memoizedState,t]}function Lo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function l0(){return jt().memoizedState}function nl(t,e,n,r){var i=nn();_e.flags|=t,i.memoizedState=Lo(1|e,n,void 0,r===void 0?null:r)}function wu(t,e,n,r){var i=jt();r=r===void 0?null:r;var s=void 0;if(Ve!==null){var o=Ve.memoizedState;if(s=o.destroy,r!==null&&mf(r,o.deps)){i.memoizedState=Lo(e,n,s,r);return}}_e.flags|=t,i.memoizedState=Lo(1|e,n,s,r)}function vg(t,e){return nl(8390656,8,t,e)}function _f(t,e){return wu(2048,8,t,e)}function u0(t,e){return wu(4,2,t,e)}function c0(t,e){return wu(4,4,t,e)}function h0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function d0(t,e,n){return n=n!=null?n.concat([t]):null,wu(4,4,h0.bind(null,e,t),n)}function vf(){}function f0(t,e){var n=jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function p0(t,e){var n=jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function m0(t,e,n){return ti&21?(Yt(n,e)||(n=Ev(),_e.lanes|=n,ni|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gt=!0),t.memoizedState=n)}function p1(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Wc.transition;Wc.transition={};try{t(!1),e()}finally{ae=n,Wc.transition=r}}function g0(){return jt().memoizedState}function m1(t,e,n){var r=ur(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},y0(t))_0(e,n);else if(n=Jv(t,e,n,r),n!==null){var i=lt();Kt(n,t,r,i),v0(n,e,r)}}function g1(t,e,n){var r=ur(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(y0(t))_0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Yt(l,o)){var u=e.interleaved;u===null?(i.next=i,cf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Jv(t,e,i,r),n!==null&&(i=lt(),Kt(n,t,r,i),v0(n,e,r))}}function y0(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function _0(t,e){co=Ll=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function v0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Qd(t,n)}}var Ml={readContext:Mt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},y1={readContext:Mt,useCallback:function(t,e){return nn().memoizedState=[t,e===void 0?null:e],t},useContext:Mt,useEffect:vg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nl(4194308,4,h0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return nl(4,2,t,e)},useMemo:function(t,e){var n=nn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=nn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=m1.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=nn();return t={current:t},e.memoizedState=t},useState:_g,useDebugValue:vf,useDeferredValue:function(t){return nn().memoizedState=t},useTransition:function(){var t=_g(!1),e=t[0];return t=p1.bind(null,t[1]),nn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=nn();if(ge){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Be===null)throw Error(U(349));ti&30||r0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,vg(s0.bind(null,r,s,t),[t]),r.flags|=2048,Lo(9,i0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=nn(),e=Be.identifierPrefix;if(ge){var n=Tn,r=wn;n=(r&~(1<<32-Ht(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Vo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=f1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_1={readContext:Mt,useCallback:f0,useContext:Mt,useEffect:_f,useImperativeHandle:d0,useInsertionEffect:u0,useLayoutEffect:c0,useMemo:p0,useReducer:qc,useRef:l0,useState:function(){return qc(bo)},useDebugValue:vf,useDeferredValue:function(t){var e=jt();return m0(e,Ve.memoizedState,t)},useTransition:function(){var t=qc(bo)[0],e=jt().memoizedState;return[t,e]},useMutableSource:t0,useSyncExternalStore:n0,useId:g0,unstable_isNewReconciler:!1},v1={readContext:Mt,useCallback:f0,useContext:Mt,useEffect:_f,useImperativeHandle:d0,useInsertionEffect:u0,useLayoutEffect:c0,useMemo:p0,useReducer:Hc,useRef:l0,useState:function(){return Hc(bo)},useDebugValue:vf,useDeferredValue:function(t){var e=jt();return Ve===null?e.memoizedState=t:m0(e,Ve.memoizedState,t)},useTransition:function(){var t=Hc(bo)[0],e=jt().memoizedState;return[t,e]},useMutableSource:t0,useSyncExternalStore:n0,useId:g0,unstable_isNewReconciler:!1};function zt(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tu={isMounted:function(t){return(t=t._reactInternals)?hi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),i=ur(t),s=xn(r,i);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(Kt(e,t,i,r),el(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),i=ur(t),s=xn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(Kt(e,t,i,r),el(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=ur(t),i=xn(n,r);i.tag=2,e!=null&&(i.callback=e),e=ar(t,i,r),e!==null&&(Kt(e,t,r,n),el(e,t,r))}};function Eg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Co(n,r)||!Co(i,s):!0}function E0(t,e,n){var r=!1,i=yr,s=e.contextType;return typeof s=="object"&&s!==null?s=Mt(s):(i=_t(e)?Zr:rt.current,r=e.contextTypes,s=(r=r!=null)?Zi(t,i):yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function wg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Tu.enqueueReplaceState(e,e.state,null)}function qh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},hf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Mt(s):(s=_t(e)?Zr:rt.current,i.context=Zi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Tu.enqueueReplaceState(i,i.state,null),Vl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function rs(t,e){try{var n="",r=e;do n+=KI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Kc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Hh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var E1=typeof WeakMap=="function"?WeakMap:Map;function w0(t,e,n){n=xn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Fl||(Fl=!0,nd=r),Hh(t,e)},n}function T0(t,e,n){n=xn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Hh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Hh(t,e),typeof r!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Tg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new E1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=V1.bind(null,t,e,n),e.then(t,t))}function Ig(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xn(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var w1=bn.ReactCurrentOwner,gt=!1;function at(t,e,n,r){e.child=t===null?Xv(e,null,n,r):ts(e,t.child,n,r)}function xg(t,e,n,r,i){n=n.render;var s=e.ref;return Wi(e,i),r=gf(t,e,n,r,s,i),n=yf(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pn(t,e,i)):(ge&&n&&rf(e),e.flags|=1,at(t,e,r,i),e.child)}function Ag(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Rf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,I0(t,e,s,r,i)):(t=ol(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Co,n(o,r)&&t.ref===e.ref)return Pn(t,e,i)}return e.flags|=1,t=cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function I0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Co(s,r)&&t.ref===e.ref)if(gt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(gt=!0);else return e.lanes=t.lanes,Pn(t,e,i)}return Kh(t,e,n,r,i)}function S0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(ji,wt),wt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(ji,wt),wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(ji,wt),wt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(ji,wt),wt|=r;return at(t,e,i,n),e.child}function x0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Kh(t,e,n,r,i){var s=_t(n)?Zr:rt.current;return s=Zi(e,s),Wi(e,i),n=gf(t,e,n,r,s,i),r=yf(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pn(t,e,i)):(ge&&r&&rf(e),e.flags|=1,at(t,e,n,i),e.child)}function Rg(t,e,n,r,i){if(_t(n)){var s=!0;kl(e)}else s=!1;if(Wi(e,i),e.stateNode===null)rl(t,e),E0(e,n,r),qh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Mt(c):(c=_t(n)?Zr:rt.current,c=Zi(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&wg(e,o,r,c),Hn=!1;var m=e.memoizedState;o.state=m,Vl(e,r,o,i),u=e.memoizedState,l!==r||m!==u||yt.current||Hn?(typeof d=="function"&&(Wh(e,n,d,r),u=e.memoizedState),(l=Hn||Eg(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Zv(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:zt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Mt(u):(u=_t(n)?Zr:rt.current,u=Zi(e,u));var I=n.getDerivedStateFromProps;(d=typeof I=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&wg(e,o,r,u),Hn=!1,m=e.memoizedState,o.state=m,Vl(e,r,o,i);var A=e.memoizedState;l!==p||m!==A||yt.current||Hn?(typeof I=="function"&&(Wh(e,n,I,r),A=e.memoizedState),(c=Hn||Eg(e,n,c,r,m,A,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Gh(t,e,n,r,s,i)}function Gh(t,e,n,r,i,s){x0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&dg(e,n,!1),Pn(t,e,s);r=e.stateNode,w1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ts(e,t.child,null,s),e.child=ts(e,null,l,s)):at(t,e,l,s),e.memoizedState=r.state,i&&dg(e,n,!0),e.child}function A0(t){var e=t.stateNode;e.pendingContext?hg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hg(t,e.context,!1),df(t,e.containerInfo)}function Cg(t,e,n,r,i){return es(),of(i),e.flags|=256,at(t,e,n,r),e.child}var Qh={dehydrated:null,treeContext:null,retryLane:0};function Yh(t){return{baseLanes:t,cachePool:null,transitions:null}}function R0(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ye,i&1),t===null)return Bh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xu(o,r,0,null),t=Qr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Yh(n),e.memoizedState=Qh,t):Ef(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return T1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=cr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=cr(l,s):(s=Qr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Yh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Qh,r}return s=t.child,t=s.sibling,r=cr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ef(t,e){return e=xu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ja(t,e,n,r){return r!==null&&of(r),ts(e,t.child,null,n),t=Ef(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function T1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Kc(Error(U(422))),ja(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=xu({mode:"visible",children:r.children},i,0,null),s=Qr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ts(e,t.child,null,o),e.child.memoizedState=Yh(o),e.memoizedState=Qh,s);if(!(e.mode&1))return ja(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=Kc(s,r,void 0),ja(t,e,o,r)}if(l=(o&t.childLanes)!==0,gt||l){if(r=Be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,kn(t,i),Kt(r,t,i,-1))}return Af(),r=Kc(Error(U(421))),ja(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=b1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,It=or(i.nextSibling),xt=e,ge=!0,$t=null,t!==null&&(Pt[Nt++]=wn,Pt[Nt++]=Tn,Pt[Nt++]=ei,wn=t.id,Tn=t.overflow,ei=e),e=Ef(e,r.children),e.flags|=4096,e)}function kg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),$h(t.return,e,n)}function Gc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function C0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(at(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kg(t,n,e);else if(t.tag===19)kg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&bl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Gc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&bl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Gc(e,!0,n,null,s);break;case"together":Gc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function rl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ni|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function I1(t,e,n){switch(e.tag){case 3:A0(e),es();break;case 5:e0(e);break;case 1:_t(e.type)&&kl(e);break;case 4:df(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(Dl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?R0(t,e,n):(ce(ye,ye.current&1),t=Pn(t,e,n),t!==null?t.sibling:null);ce(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return C0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,S0(t,e,n)}return Pn(t,e,n)}var k0,Xh,P0,N0;k0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xh=function(){};P0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Hr(an.current);var s=null;switch(n){case"input":i=vh(t,i),r=vh(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=Th(t,i),r=Th(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Rl)}Sh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(wo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(wo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};N0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Hs(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function S1(t,e,n){var r=e.pendingProps;switch(sf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return _t(e.type)&&Cl(),Je(e),null;case 3:return r=e.stateNode,ns(),pe(yt),pe(rt),pf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(La(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$t!==null&&(sd($t),$t=null))),Xh(t,e),Je(e),null;case 5:ff(e);var i=Hr(Oo.current);if(n=e.type,t!==null&&e.stateNode!=null)P0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Je(e),null}if(t=Hr(an.current),La(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[sn]=e,r[No]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Js.length;i++)de(Js[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":jm(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":Um(r,s),de("invalid",r)}Sh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ba(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ba(r.textContent,l,t),i=["children",""+l]):wo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Ra(r),Fm(r,s,!0);break;case"textarea":Ra(r),zm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Rl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[sn]=e,t[No]=r,k0(t,e,!1,!1),e.stateNode=t;e:{switch(o=xh(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<Js.length;i++)de(Js[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":jm(t,r),i=vh(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),de("invalid",t);break;case"textarea":Um(t,r),i=Th(t,r),de("invalid",t);break;default:i=r}Sh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?lv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ov(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&To(t,u):typeof u=="number"&&To(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&$d(t,s,u,o))}switch(n){case"input":Ra(t),Fm(t,r,!1);break;case"textarea":Ra(t),zm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ui(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ui(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Rl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)N0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Hr(Oo.current),Hr(an.current),La(e)){if(r=e.stateNode,n=e.memoizedProps,r[sn]=e,(s=r.nodeValue!==n)&&(t=xt,t!==null))switch(t.tag){case 3:ba(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ba(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sn]=e,e.stateNode=r}return Je(e),null;case 13:if(pe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&It!==null&&e.mode&1&&!(e.flags&128))Qv(),es(),e.flags|=98560,s=!1;else if(s=La(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[sn]=e}else es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),s=!1}else $t!==null&&(sd($t),$t=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?be===0&&(be=3):Af())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return ns(),Xh(t,e),t===null&&ko(e.stateNode.containerInfo),Je(e),null;case 10:return uf(e.type._context),Je(e),null;case 17:return _t(e.type)&&Cl(),Je(e),null;case 19:if(pe(ye),s=e.memoizedState,s===null)return Je(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Hs(s,!1);else{if(be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=bl(t),o!==null){for(e.flags|=128,Hs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>is&&(e.flags|=128,r=!0,Hs(s,!1),e.lanes=4194304)}else{if(!r)if(t=bl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Hs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ge)return Je(e),null}else 2*Ae()-s.renderingStartTime>is&&n!==1073741824&&(e.flags|=128,r=!0,Hs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=ye.current,ce(ye,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return xf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?wt&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function x1(t,e){switch(sf(e),e.tag){case 1:return _t(e.type)&&Cl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ns(),pe(yt),pe(rt),pf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ff(e),null;case 13:if(pe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ye),null;case 4:return ns(),null;case 10:return uf(e.type._context),null;case 22:case 23:return xf(),null;case 24:return null;default:return null}}var Fa=!1,tt=!1,A1=typeof WeakSet=="function"?WeakSet:Set,q=null;function Mi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function Jh(t,e,n){try{n()}catch(r){Te(t,e,r)}}var Pg=!1;function R1(t,e){if(bh=Sl,t=Lv(),nf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var I;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(I=p.firstChild)!==null;)m=p,p=I;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(I=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=I}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lh={focusedElem:t,selectionRange:n},Sl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var k=A.memoizedProps,N=A.memoizedState,w=e.stateNode,v=w.getSnapshotBeforeUpdate(e.elementType===e.type?k:zt(e.type,k),N);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(D){Te(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return A=Pg,Pg=!1,A}function ho(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Jh(e,n,s)}i=i.next}while(i!==r)}}function Iu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Zh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function D0(t){var e=t.alternate;e!==null&&(t.alternate=null,D0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[sn],delete e[No],delete e[Fh],delete e[u1],delete e[c1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function O0(t){return t.tag===5||t.tag===3||t.tag===4}function Ng(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||O0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ed(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Rl));else if(r!==4&&(t=t.child,t!==null))for(ed(t,e,n),t=t.sibling;t!==null;)ed(t,e,n),t=t.sibling}function td(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(td(t,e,n),t=t.sibling;t!==null;)td(t,e,n),t=t.sibling}var We=null,Bt=!1;function $n(t,e,n){for(n=n.child;n!==null;)V0(t,e,n),n=n.sibling}function V0(t,e,n){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(mu,n)}catch{}switch(n.tag){case 5:tt||Mi(n,e);case 6:var r=We,i=Bt;We=null,$n(t,e,n),We=r,Bt=i,We!==null&&(Bt?(t=We,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Bt?(t=We,n=n.stateNode,t.nodeType===8?zc(t.parentNode,n):t.nodeType===1&&zc(t,n),Ao(t)):zc(We,n.stateNode));break;case 4:r=We,i=Bt,We=n.stateNode.containerInfo,Bt=!0,$n(t,e,n),We=r,Bt=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Jh(n,e,o),i=i.next}while(i!==r)}$n(t,e,n);break;case 1:if(!tt&&(Mi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,e,l)}$n(t,e,n);break;case 21:$n(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,$n(t,e,n),tt=r):$n(t,e,n);break;default:$n(t,e,n)}}function Dg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new A1),e.forEach(function(r){var i=L1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ut(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:We=l.stateNode,Bt=!1;break e;case 3:We=l.stateNode.containerInfo,Bt=!0;break e;case 4:We=l.stateNode.containerInfo,Bt=!0;break e}l=l.return}if(We===null)throw Error(U(160));V0(s,o,i),We=null,Bt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Te(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)b0(e,t),e=e.sibling}function b0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ut(e,t),tn(t),r&4){try{ho(3,t,t.return),Iu(3,t)}catch(k){Te(t,t.return,k)}try{ho(5,t,t.return)}catch(k){Te(t,t.return,k)}}break;case 1:Ut(e,t),tn(t),r&512&&n!==null&&Mi(n,n.return);break;case 5:if(Ut(e,t),tn(t),r&512&&n!==null&&Mi(n,n.return),t.flags&32){var i=t.stateNode;try{To(i,"")}catch(k){Te(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&rv(i,s),xh(l,o);var c=xh(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?lv(i,p):d==="dangerouslySetInnerHTML"?ov(i,p):d==="children"?To(i,p):$d(i,d,p,c)}switch(l){case"input":Eh(i,s);break;case"textarea":iv(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var I=s.value;I!=null?Ui(i,!!s.multiple,I,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ui(i,!!s.multiple,s.defaultValue,!0):Ui(i,!!s.multiple,s.multiple?[]:"",!1))}i[No]=s}catch(k){Te(t,t.return,k)}}break;case 6:if(Ut(e,t),tn(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Te(t,t.return,k)}}break;case 3:if(Ut(e,t),tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ao(e.containerInfo)}catch(k){Te(t,t.return,k)}break;case 4:Ut(e,t),tn(t);break;case 13:Ut(e,t),tn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(If=Ae())),r&4&&Dg(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(c=tt)||d,Ut(e,t),tt=c):Ut(e,t),tn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(q=t,d=t.child;d!==null;){for(p=q=d;q!==null;){switch(m=q,I=m.child,m.tag){case 0:case 11:case 14:case 15:ho(4,m,m.return);break;case 1:Mi(m,m.return);var A=m.stateNode;if(typeof A.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(k){Te(r,n,k)}}break;case 5:Mi(m,m.return);break;case 22:if(m.memoizedState!==null){Vg(p);continue}}I!==null?(I.return=m,q=I):Vg(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=av("display",o))}catch(k){Te(t,t.return,k)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){Te(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ut(e,t),tn(t),r&4&&Dg(t);break;case 21:break;default:Ut(e,t),tn(t)}}function tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(O0(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(To(i,""),r.flags&=-33);var s=Ng(t);td(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ng(t);ed(t,l,o);break;default:throw Error(U(161))}}catch(u){Te(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function C1(t,e,n){q=t,L0(t)}function L0(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Fa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||tt;l=Fa;var c=tt;if(Fa=o,(tt=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?bg(i):u!==null?(u.return=o,q=u):bg(i);for(;s!==null;)q=s,L0(s),s=s.sibling;q=i,Fa=l,tt=c}Og(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Og(t)}}function Og(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||Iu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&yg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Ao(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}tt||e.flags&512&&Zh(e)}catch(m){Te(e,e.return,m)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Vg(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function bg(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Iu(4,e)}catch(u){Te(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Te(e,i,u)}}var s=e.return;try{Zh(e)}catch(u){Te(e,s,u)}break;case 5:var o=e.return;try{Zh(e)}catch(u){Te(e,o,u)}}}catch(u){Te(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var k1=Math.ceil,jl=bn.ReactCurrentDispatcher,wf=bn.ReactCurrentOwner,bt=bn.ReactCurrentBatchConfig,se=0,Be=null,ke=null,Ke=0,wt=0,ji=Rr(0),be=0,Mo=null,ni=0,Su=0,Tf=0,fo=null,pt=null,If=0,is=1/0,_n=null,Fl=!1,nd=null,lr=null,Ua=!1,er=null,Ul=0,po=0,rd=null,il=-1,sl=0;function lt(){return se&6?Ae():il!==-1?il:il=Ae()}function ur(t){return t.mode&1?se&2&&Ke!==0?Ke&-Ke:d1.transition!==null?(sl===0&&(sl=Ev()),sl):(t=ae,t!==0||(t=window.event,t=t===void 0?16:Rv(t.type)),t):1}function Kt(t,e,n,r){if(50<po)throw po=0,rd=null,Error(U(185));Xo(t,n,r),(!(se&2)||t!==Be)&&(t===Be&&(!(se&2)&&(Su|=n),be===4&&Gn(t,Ke)),vt(t,r),n===1&&se===0&&!(e.mode&1)&&(is=Ae()+500,Eu&&Cr()))}function vt(t,e){var n=t.callbackNode;dS(t,e);var r=Il(t,t===Be?Ke:0);if(r===0)n!==null&&Wm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Wm(n),e===1)t.tag===0?h1(Lg.bind(null,t)):Hv(Lg.bind(null,t)),a1(function(){!(se&6)&&Cr()}),n=null;else{switch(wv(r)){case 1:n=Gd;break;case 4:n=_v;break;case 16:n=Tl;break;case 536870912:n=vv;break;default:n=Tl}n=W0(n,M0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function M0(t,e){if(il=-1,sl=0,se&6)throw Error(U(327));var n=t.callbackNode;if(qi()&&t.callbackNode!==n)return null;var r=Il(t,t===Be?Ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=zl(t,r);else{e=r;var i=se;se|=2;var s=F0();(Be!==t||Ke!==e)&&(_n=null,is=Ae()+500,Gr(t,e));do try{D1();break}catch(l){j0(t,l)}while(!0);lf(),jl.current=s,se=i,ke!==null?e=0:(Be=null,Ke=0,e=be)}if(e!==0){if(e===2&&(i=Ph(t),i!==0&&(r=i,e=id(t,i))),e===1)throw n=Mo,Gr(t,0),Gn(t,r),vt(t,Ae()),n;if(e===6)Gn(t,r);else{if(i=t.current.alternate,!(r&30)&&!P1(i)&&(e=zl(t,r),e===2&&(s=Ph(t),s!==0&&(r=s,e=id(t,s))),e===1))throw n=Mo,Gr(t,0),Gn(t,r),vt(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:zr(t,pt,_n);break;case 3:if(Gn(t,r),(r&130023424)===r&&(e=If+500-Ae(),10<e)){if(Il(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=jh(zr.bind(null,t,pt,_n),e);break}zr(t,pt,_n);break;case 4:if(Gn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ht(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*k1(r/1960))-r,10<r){t.timeoutHandle=jh(zr.bind(null,t,pt,_n),r);break}zr(t,pt,_n);break;case 5:zr(t,pt,_n);break;default:throw Error(U(329))}}}return vt(t,Ae()),t.callbackNode===n?M0.bind(null,t):null}function id(t,e){var n=fo;return t.current.memoizedState.isDehydrated&&(Gr(t,e).flags|=256),t=zl(t,e),t!==2&&(e=pt,pt=n,e!==null&&sd(e)),t}function sd(t){pt===null?pt=t:pt.push.apply(pt,t)}function P1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Yt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gn(t,e){for(e&=~Tf,e&=~Su,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ht(e),r=1<<n;t[n]=-1,e&=~r}}function Lg(t){if(se&6)throw Error(U(327));qi();var e=Il(t,0);if(!(e&1))return vt(t,Ae()),null;var n=zl(t,e);if(t.tag!==0&&n===2){var r=Ph(t);r!==0&&(e=r,n=id(t,r))}if(n===1)throw n=Mo,Gr(t,0),Gn(t,e),vt(t,Ae()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zr(t,pt,_n),vt(t,Ae()),null}function Sf(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(is=Ae()+500,Eu&&Cr())}}function ri(t){er!==null&&er.tag===0&&!(se&6)&&qi();var e=se;se|=1;var n=bt.transition,r=ae;try{if(bt.transition=null,ae=1,t)return t()}finally{ae=r,bt.transition=n,se=e,!(se&6)&&Cr()}}function xf(){wt=ji.current,pe(ji)}function Gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,o1(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(sf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cl();break;case 3:ns(),pe(yt),pe(rt),pf();break;case 5:ff(r);break;case 4:ns();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:uf(r.type._context);break;case 22:case 23:xf()}n=n.return}if(Be=t,ke=t=cr(t.current,null),Ke=wt=e,be=0,Mo=null,Tf=Su=ni=0,pt=fo=null,qr!==null){for(e=0;e<qr.length;e++)if(n=qr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}qr=null}return t}function j0(t,e){do{var n=ke;try{if(lf(),tl.current=Ml,Ll){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ll=!1}if(ti=0,ze=Ve=_e=null,co=!1,Vo=0,wf.current=null,n===null||n.return===null){be=1,Mo=e,ke=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ke,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var I=Ig(o);if(I!==null){I.flags&=-257,Sg(I,o,l,s,e),I.mode&1&&Tg(s,c,e),e=I,u=c;var A=e.updateQueue;if(A===null){var k=new Set;k.add(u),e.updateQueue=k}else A.add(u);break e}else{if(!(e&1)){Tg(s,c,e),Af();break e}u=Error(U(426))}}else if(ge&&l.mode&1){var N=Ig(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Sg(N,o,l,s,e),of(rs(u,l));break e}}s=u=rs(u,l),be!==4&&(be=2),fo===null?fo=[s]:fo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=w0(s,u,e);gg(s,w);break e;case 1:l=u;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(lr===null||!lr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=T0(s,l,e);gg(s,D);break e}}s=s.return}while(s!==null)}z0(n)}catch(V){e=V,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function F0(){var t=jl.current;return jl.current=Ml,t===null?Ml:t}function Af(){(be===0||be===3||be===2)&&(be=4),Be===null||!(ni&268435455)&&!(Su&268435455)||Gn(Be,Ke)}function zl(t,e){var n=se;se|=2;var r=F0();(Be!==t||Ke!==e)&&(_n=null,Gr(t,e));do try{N1();break}catch(i){j0(t,i)}while(!0);if(lf(),se=n,jl.current=r,ke!==null)throw Error(U(261));return Be=null,Ke=0,be}function N1(){for(;ke!==null;)U0(ke)}function D1(){for(;ke!==null&&!rS();)U0(ke)}function U0(t){var e=$0(t.alternate,t,wt);t.memoizedProps=t.pendingProps,e===null?z0(t):ke=e,wf.current=null}function z0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=x1(n,e),n!==null){n.flags&=32767,ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,ke=null;return}}else if(n=S1(n,e,wt),n!==null){ke=n;return}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);be===0&&(be=5)}function zr(t,e,n){var r=ae,i=bt.transition;try{bt.transition=null,ae=1,O1(t,e,n,r)}finally{bt.transition=i,ae=r}return null}function O1(t,e,n,r){do qi();while(er!==null);if(se&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(fS(t,s),t===Be&&(ke=Be=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ua||(Ua=!0,W0(Tl,function(){return qi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bt.transition,bt.transition=null;var o=ae;ae=1;var l=se;se|=4,wf.current=null,R1(t,n),b0(n,t),ZS(Lh),Sl=!!bh,Lh=bh=null,t.current=n,C1(n),iS(),se=l,ae=o,bt.transition=s}else t.current=n;if(Ua&&(Ua=!1,er=t,Ul=i),s=t.pendingLanes,s===0&&(lr=null),aS(n.stateNode),vt(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Fl)throw Fl=!1,t=nd,nd=null,t;return Ul&1&&t.tag!==0&&qi(),s=t.pendingLanes,s&1?t===rd?po++:(po=0,rd=t):po=0,Cr(),null}function qi(){if(er!==null){var t=wv(Ul),e=bt.transition,n=ae;try{if(bt.transition=null,ae=16>t?16:t,er===null)var r=!1;else{if(t=er,er=null,Ul=0,se&6)throw Error(U(331));var i=se;for(se|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:ho(8,d,s)}var p=d.child;if(p!==null)p.return=d,q=p;else for(;q!==null;){d=q;var m=d.sibling,I=d.return;if(D0(d),d===c){q=null;break}if(m!==null){m.return=I,q=m;break}q=I}}}var A=s.alternate;if(A!==null){var k=A.child;if(k!==null){A.child=null;do{var N=k.sibling;k.sibling=null,k=N}while(k!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ho(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,q=w;break e}q=s.return}}var v=t.current;for(q=v;q!==null;){o=q;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,q=x;else e:for(o=v;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Iu(9,l)}}catch(V){Te(l,l.return,V)}if(l===o){q=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,q=D;break e}q=l.return}}if(se=i,Cr(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(mu,t)}catch{}r=!0}return r}finally{ae=n,bt.transition=e}}return!1}function Mg(t,e,n){e=rs(n,e),e=w0(t,e,1),t=ar(t,e,1),e=lt(),t!==null&&(Xo(t,1,e),vt(t,e))}function Te(t,e,n){if(t.tag===3)Mg(t,t,n);else for(;e!==null;){if(e.tag===3){Mg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lr===null||!lr.has(r))){t=rs(n,t),t=T0(e,t,1),e=ar(e,t,1),t=lt(),e!==null&&(Xo(e,1,t),vt(e,t));break}}e=e.return}}function V1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,Be===t&&(Ke&n)===n&&(be===4||be===3&&(Ke&130023424)===Ke&&500>Ae()-If?Gr(t,0):Tf|=n),vt(t,e)}function B0(t,e){e===0&&(t.mode&1?(e=Pa,Pa<<=1,!(Pa&130023424)&&(Pa=4194304)):e=1);var n=lt();t=kn(t,e),t!==null&&(Xo(t,e,n),vt(t,n))}function b1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),B0(t,n)}function L1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),B0(t,n)}var $0;$0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yt.current)gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gt=!1,I1(t,e,n);gt=!!(t.flags&131072)}else gt=!1,ge&&e.flags&1048576&&Kv(e,Nl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;rl(t,e),t=e.pendingProps;var i=Zi(e,rt.current);Wi(e,n),i=gf(null,e,r,t,i,n);var s=yf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_t(r)?(s=!0,kl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hf(e),i.updater=Tu,e.stateNode=i,i._reactInternals=e,qh(e,r,t,n),e=Gh(null,e,r,!0,s,n)):(e.tag=0,ge&&s&&rf(e),at(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(rl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=j1(r),t=zt(r,t),i){case 0:e=Kh(null,e,r,t,n);break e;case 1:e=Rg(null,e,r,t,n);break e;case 11:e=xg(null,e,r,t,n);break e;case 14:e=Ag(null,e,r,zt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Kh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Rg(t,e,r,i,n);case 3:e:{if(A0(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Zv(t,e),Vl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=rs(Error(U(423)),e),e=Cg(t,e,r,n,i);break e}else if(r!==i){i=rs(Error(U(424)),e),e=Cg(t,e,r,n,i);break e}else for(It=or(e.stateNode.containerInfo.firstChild),xt=e,ge=!0,$t=null,n=Xv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(es(),r===i){e=Pn(t,e,n);break e}at(t,e,r,n)}e=e.child}return e;case 5:return e0(e),t===null&&Bh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Mh(r,i)?o=null:s!==null&&Mh(r,s)&&(e.flags|=32),x0(t,e),at(t,e,o,n),e.child;case 6:return t===null&&Bh(e),null;case 13:return R0(t,e,n);case 4:return df(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ts(e,null,r,n):at(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),xg(t,e,r,i,n);case 7:return at(t,e,e.pendingProps,n),e.child;case 8:return at(t,e,e.pendingProps.children,n),e.child;case 12:return at(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(Dl,r._currentValue),r._currentValue=o,s!==null)if(Yt(s.value,o)){if(s.children===i.children&&!yt.current){e=Pn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=xn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),$h(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),$h(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}at(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Wi(e,n),i=Mt(i),r=r(i),e.flags|=1,at(t,e,r,n),e.child;case 14:return r=e.type,i=zt(r,e.pendingProps),i=zt(r.type,i),Ag(t,e,r,i,n);case 15:return I0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),rl(t,e),e.tag=1,_t(r)?(t=!0,kl(e)):t=!1,Wi(e,n),E0(e,r,i),qh(e,r,i,n),Gh(null,e,r,!0,t,n);case 19:return C0(t,e,n);case 22:return S0(t,e,n)}throw Error(U(156,e.tag))};function W0(t,e){return yv(t,e)}function M1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(t,e,n,r){return new M1(t,e,n,r)}function Rf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function j1(t){if(typeof t=="function")return Rf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qd)return 11;if(t===Hd)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=Vt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ol(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Rf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ci:return Qr(n.children,i,s,e);case Wd:o=8,i|=8;break;case mh:return t=Vt(12,n,e,i|2),t.elementType=mh,t.lanes=s,t;case gh:return t=Vt(13,n,e,i),t.elementType=gh,t.lanes=s,t;case yh:return t=Vt(19,n,e,i),t.elementType=yh,t.lanes=s,t;case ev:return xu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case J_:o=10;break e;case Z_:o=9;break e;case qd:o=11;break e;case Hd:o=14;break e;case qn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Vt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Qr(t,e,n,r){return t=Vt(7,t,r,e),t.lanes=n,t}function xu(t,e,n,r){return t=Vt(22,t,r,e),t.elementType=ev,t.lanes=n,t.stateNode={isHidden:!1},t}function Qc(t,e,n){return t=Vt(6,t,null,e),t.lanes=n,t}function Yc(t,e,n){return e=Vt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function F1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pc(0),this.expirationTimes=Pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cf(t,e,n,r,i,s,o,l,u){return t=new F1(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hf(s),t}function U1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ri,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function q0(t){if(!t)return yr;t=t._reactInternals;e:{if(hi(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(_t(n))return qv(t,n,e)}return e}function H0(t,e,n,r,i,s,o,l,u){return t=Cf(n,r,!0,t,i,s,o,l,u),t.context=q0(null),n=t.current,r=lt(),i=ur(n),s=xn(r,i),s.callback=e??null,ar(n,s,i),t.current.lanes=i,Xo(t,i,r),vt(t,r),t}function Au(t,e,n,r){var i=e.current,s=lt(),o=ur(i);return n=q0(n),e.context===null?e.context=n:e.pendingContext=n,e=xn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ar(i,e,o),t!==null&&(Kt(t,i,o,s),el(t,i,o)),o}function Bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function kf(t,e){jg(t,e),(t=t.alternate)&&jg(t,e)}function z1(){return null}var K0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pf(t){this._internalRoot=t}Ru.prototype.render=Pf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Au(t,e,null,null)};Ru.prototype.unmount=Pf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ri(function(){Au(null,t,null,null)}),e[Cn]=null}};function Ru(t){this._internalRoot=t}Ru.prototype.unstable_scheduleHydration=function(t){if(t){var e=Sv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kn.length&&e!==0&&e<Kn[n].priority;n++);Kn.splice(n,0,t),n===0&&Av(t)}};function Nf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fg(){}function B1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Bl(o);s.call(c)}}var o=H0(e,r,t,0,null,!1,!1,"",Fg);return t._reactRootContainer=o,t[Cn]=o.current,ko(t.nodeType===8?t.parentNode:t),ri(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Bl(u);l.call(c)}}var u=Cf(t,0,!1,null,null,!1,!1,"",Fg);return t._reactRootContainer=u,t[Cn]=u.current,ko(t.nodeType===8?t.parentNode:t),ri(function(){Au(e,u,n,r)}),u}function ku(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Bl(o);l.call(u)}}Au(e,o,t,i)}else o=B1(n,e,t,i,r);return Bl(o)}Tv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xs(e.pendingLanes);n!==0&&(Qd(e,n|1),vt(e,Ae()),!(se&6)&&(is=Ae()+500,Cr()))}break;case 13:ri(function(){var r=kn(t,1);if(r!==null){var i=lt();Kt(r,t,1,i)}}),kf(t,1)}};Yd=function(t){if(t.tag===13){var e=kn(t,134217728);if(e!==null){var n=lt();Kt(e,t,134217728,n)}kf(t,134217728)}};Iv=function(t){if(t.tag===13){var e=ur(t),n=kn(t,e);if(n!==null){var r=lt();Kt(n,t,e,r)}kf(t,e)}};Sv=function(){return ae};xv=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};Rh=function(t,e,n){switch(e){case"input":if(Eh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=vu(r);if(!i)throw Error(U(90));nv(r),Eh(r,i)}}}break;case"textarea":iv(t,n);break;case"select":e=n.value,e!=null&&Ui(t,!!n.multiple,e,!1)}};hv=Sf;dv=ri;var $1={usingClientEntryPoint:!1,Events:[Zo,Di,vu,uv,cv,Sf]},Ks={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},W1={bundleType:Ks.bundleType,version:Ks.version,rendererPackageName:Ks.rendererPackageName,rendererConfig:Ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=mv(t),t===null?null:t.stateNode},findFiberByHostInstance:Ks.findFiberByHostInstance||z1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!za.isDisabled&&za.supportsFiber)try{mu=za.inject(W1),on=za}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$1;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nf(e))throw Error(U(200));return U1(t,e,null,n)};Rt.createRoot=function(t,e){if(!Nf(t))throw Error(U(299));var n=!1,r="",i=K0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Cf(t,1,!1,null,null,n,!1,r,i),t[Cn]=e.current,ko(t.nodeType===8?t.parentNode:t),new Pf(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=mv(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return ri(t)};Rt.hydrate=function(t,e,n){if(!Cu(e))throw Error(U(200));return ku(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!Nf(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=K0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=H0(e,null,t,1,n??null,i,!1,s,o),t[Cn]=e.current,ko(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ru(e)};Rt.render=function(t,e,n){if(!Cu(e))throw Error(U(200));return ku(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!Cu(t))throw Error(U(40));return t._reactRootContainer?(ri(function(){ku(null,null,t,!1,function(){t._reactRootContainer=null,t[Cn]=null})}),!0):!1};Rt.unstable_batchedUpdates=Sf;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Cu(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return ku(t,e,n,!1,r)};Rt.version="18.3.1-next-f1338f8080-20240426";function G0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G0)}catch(t){console.error(t)}}G0(),G_.exports=Rt;var q1=G_.exports,Ug=q1;fh.createRoot=Ug.createRoot,fh.hydrateRoot=Ug.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jo(){return jo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jo.apply(this,arguments)}var tr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(tr||(tr={}));const zg="popstate";function H1(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:u=""}=di(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),od("",{pathname:o,search:l,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");l=c===-1?u:u.slice(0,c)}return l+"#"+(typeof s=="string"?s:Q0(s))}function r(i,s){Pu(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return G1(e,n,r,t)}function Le(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Pu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function K1(){return Math.random().toString(36).substr(2,8)}function Bg(t,e){return{usr:t.state,key:t.key,idx:e}}function od(t,e,n,r){return n===void 0&&(n=null),jo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?di(e):e,{state:n,key:e&&e.key||r||K1()})}function Q0(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function di(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function G1(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=tr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(jo({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=tr.Pop;let N=d(),w=N==null?null:N-c;c=N,u&&u({action:l,location:k.location,delta:w})}function m(N,w){l=tr.Push;let v=od(k.location,N,w);n&&n(v,N),c=d()+1;let x=Bg(v,c),D=k.createHref(v);try{o.pushState(x,"",D)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;i.location.assign(D)}s&&u&&u({action:l,location:k.location,delta:1})}function I(N,w){l=tr.Replace;let v=od(k.location,N,w);n&&n(v,N),c=d();let x=Bg(v,c),D=k.createHref(v);o.replaceState(x,"",D),s&&u&&u({action:l,location:k.location,delta:0})}function A(N){let w=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof N=="string"?N:Q0(N);return v=v.replace(/ $/,"%20"),Le(w,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,w)}let k={get action(){return l},get location(){return t(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(zg,p),u=N,()=>{i.removeEventListener(zg,p),u=null}},createHref(N){return e(i,N)},createURL:A,encodeLocation(N){let w=A(N);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:I,go(N){return o.go(N)}};return k}var $g;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})($g||($g={}));function Q1(t,e,n){return n===void 0&&(n="/"),Y1(t,e,n)}function Y1(t,e,n,r){let i=typeof e=="string"?di(e):e,s=J0(i.pathname||"/",n);if(s==null)return null;let o=Y0(t);X1(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=ux(s);l=ox(o[u],c)}return l}function Y0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Le(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Yr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Le(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Y0(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:ix(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of X0(s.path))i(s,o,u)}),e}function X0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=X0(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function X1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:sx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const J1=/^:[\w-]+$/,Z1=3,ex=2,tx=1,nx=10,rx=-2,Wg=t=>t==="*";function ix(t,e){let n=t.split("/"),r=n.length;return n.some(Wg)&&(r+=rx),e&&(r+=ex),n.filter(i=>!Wg(i)).reduce((i,s)=>i+(J1.test(s)?Z1:s===""?tx:nx),r)}function sx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function ox(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=ax({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Yr([s,p.pathname]),pathnameBase:gx(Yr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=Yr([s,p.pathnameBase]))}return o}function ax(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=lx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:I}=d;if(m==="*"){let k=l[p]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const A=l[p];return I&&!A?c[m]=void 0:c[m]=(A||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function lx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Pu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ux(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Pu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function J0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const cx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hx=t=>cx.test(t);function dx(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?di(t):t,s;if(n)if(hx(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Pu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=qg(n.substring(1),"/"):s=qg(n,e)}else s=e;return{pathname:s,search:yx(r),hash:_x(i)}}function qg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Xc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fx(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function px(t,e){let n=fx(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function mx(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=di(t):(i=jo({},t),Le(!i.pathname||!i.pathname.includes("?"),Xc("?","pathname","search",i)),Le(!i.pathname||!i.pathname.includes("#"),Xc("#","pathname","hash",i)),Le(!i.search||!i.search.includes("#"),Xc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=dx(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Yr=t=>t.join("/").replace(/\/\/+/g,"/"),gx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),yx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,_x=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function vx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Z0=["post","put","patch","delete"];new Set(Z0);const Ex=["get",...Z0];new Set(Ex);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fo(){return Fo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fo.apply(this,arguments)}const Df=j.createContext(null),wx=j.createContext(null),Nu=j.createContext(null),Du=j.createContext(null),fi=j.createContext({outlet:null,matches:[],isDataRoute:!1}),eE=j.createContext(null);function Ou(){return j.useContext(Du)!=null}function Of(){return Ou()||Le(!1),j.useContext(Du).location}function tE(t){j.useContext(Nu).static||j.useLayoutEffect(t)}function pi(){let{isDataRoute:t}=j.useContext(fi);return t?bx():Tx()}function Tx(){Ou()||Le(!1);let t=j.useContext(Df),{basename:e,future:n,navigator:r}=j.useContext(Nu),{matches:i}=j.useContext(fi),{pathname:s}=Of(),o=JSON.stringify(px(i,n.v7_relativeSplatPath)),l=j.useRef(!1);return tE(()=>{l.current=!0}),j.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=mx(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Yr([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function Ix(){let{matches:t}=j.useContext(fi),e=t[t.length-1];return e?e.params:{}}function Sx(t,e){return xx(t,e)}function xx(t,e,n,r){Ou()||Le(!1);let{navigator:i}=j.useContext(Nu),{matches:s}=j.useContext(fi),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Of(),d;if(e){var p;let N=typeof e=="string"?di(e):e;u==="/"||(p=N.pathname)!=null&&p.startsWith(u)||Le(!1),d=N}else d=c;let m=d.pathname||"/",I=m;if(u!=="/"){let N=u.replace(/^\//,"").split("/");I="/"+m.replace(/^\//,"").split("/").slice(N.length).join("/")}let A=Q1(t,{pathname:I}),k=Px(A&&A.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:Yr([u,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:Yr([u,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return e&&k?j.createElement(Du.Provider,{value:{location:Fo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:tr.Pop}},k):k}function Ax(){let t=Vx(),e=vx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,null)}const Rx=j.createElement(Ax,null);class Cx extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(fi.Provider,{value:this.props.routeContext},j.createElement(eE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kx(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(Df);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(fi.Provider,{value:e},r)}function Px(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Le(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:I}=n,A=p.route.loader&&m[p.route.id]===void 0&&(!I||I[p.route.id]===void 0);if(p.route.lazy||A){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let I,A=!1,k=null,N=null;n&&(I=l&&p.route.id?l[p.route.id]:void 0,k=p.route.errorElement||Rx,u&&(c<0&&m===0?(Lx("route-fallback"),A=!0,N=null):c===m&&(A=!0,N=p.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,m+1)),v=()=>{let x;return I?x=k:A?x=N:p.route.Component?x=j.createElement(p.route.Component,null):p.route.element?x=p.route.element:x=d,j.createElement(kx,{match:p,routeContext:{outlet:d,matches:w,isDataRoute:n!=null},children:x})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?j.createElement(Cx,{location:n.location,revalidation:n.revalidation,component:k,error:I,children:v(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):v()},null)}var nE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(nE||{}),rE=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(rE||{});function Nx(t){let e=j.useContext(Df);return e||Le(!1),e}function Dx(t){let e=j.useContext(wx);return e||Le(!1),e}function Ox(t){let e=j.useContext(fi);return e||Le(!1),e}function iE(t){let e=Ox(),n=e.matches[e.matches.length-1];return n.route.id||Le(!1),n.route.id}function Vx(){var t;let e=j.useContext(eE),n=Dx(),r=iE();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function bx(){let{router:t}=Nx(nE.UseNavigateStable),e=iE(rE.UseNavigateStable),n=j.useRef(!1);return tE(()=>{n.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Fo({fromRouteId:e},s)))},[t,e])}const Hg={};function Lx(t,e,n){Hg[t]||(Hg[t]=!0)}function Mx(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Br(t){Le(!1)}function jx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=tr.Pop,navigator:s,static:o=!1,future:l}=t;Ou()&&Le(!1);let u=e.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:u,navigator:s,static:o,future:Fo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=di(r));let{pathname:d="/",search:p="",hash:m="",state:I=null,key:A="default"}=r,k=j.useMemo(()=>{let N=J0(d,u);return N==null?null:{location:{pathname:N,search:p,hash:m,state:I,key:A},navigationType:i}},[u,d,p,m,I,A,i]);return k==null?null:j.createElement(Nu.Provider,{value:c},j.createElement(Du.Provider,{children:n,value:k}))}function Fx(t){let{children:e,location:n}=t;return Sx(ad(e),n)}new Promise(()=>{});function ad(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,i)=>{if(!j.isValidElement(r))return;let s=[...e,i];if(r.type===j.Fragment){n.push.apply(n,ad(r.props.children,s));return}r.type!==Br&&Le(!1),!r.props.index||!r.props.children||Le(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ad(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ld(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function Ux(t,e){let n=ld(t);return e&&e.forEach((r,i)=>{n.has(i)||e.getAll(i).forEach(s=>{n.append(i,s)})}),n}const zx="6";try{window.__reactRouterVersion=zx}catch{}const Bx="startTransition",Kg=VI[Bx];function $x(t){let{basename:e,children:n,future:r,window:i}=t,s=j.useRef();s.current==null&&(s.current=H1({window:i,v5Compat:!0}));let o=s.current,[l,u]=j.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=j.useCallback(p=>{c&&Kg?Kg(()=>u(p)):u(p)},[u,c]);return j.useLayoutEffect(()=>o.listen(d),[o,d]),j.useEffect(()=>Mx(r),[r]),j.createElement(jx,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}var Gg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Gg||(Gg={}));var Qg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Qg||(Qg={}));function Wx(t){let e=j.useRef(ld(t)),n=j.useRef(!1),r=Of(),i=j.useMemo(()=>Ux(r.search,n.current?null:e.current),[r.search]),s=pi(),o=j.useCallback((l,u)=>{const c=ld(typeof l=="function"?l(i):l);n.current=!0,s("?"+c,u)},[s,i]);return[i,o]}const qx=()=>{};var Yg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Hx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},oE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,I=c&63;u||(I=64,o||(m=64)),r.push(n[d],n[p],n[m],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Hx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new Kx;const m=s<<2|l>>4;if(r.push(m),c!==64){const I=l<<4&240|c>>2;if(r.push(I),p!==64){const A=c<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Kx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gx=function(t){const e=sE(t);return oE.encodeByteArray(e,!0)},$l=function(t){return Gx(t).replace(/\./g,"")},aE=function(t){try{return oE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx=()=>Qx().__FIREBASE_DEFAULTS__,Xx=()=>{if(typeof process>"u"||typeof Yg>"u")return;const t=Yg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Jx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&aE(t[1]);return e&&JSON.parse(e)},Vu=()=>{try{return qx()||Yx()||Xx()||Jx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lE=t=>{var e,n;return(n=(e=Vu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},uE=t=>{const e=lE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},cE=()=>{var t;return(t=Vu())==null?void 0:t.config},hE=t=>{var e;return(e=Vu())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[$l(JSON.stringify(n)),$l(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function tA(){var e;const t=(e=Vu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function rA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function iA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sA(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function oA(){return!tA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function aA(){try{return typeof indexedDB=="object"}catch{return!1}}function lA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA="FirebaseError";class gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=uA,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ta.prototype.create)}}class ta{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?cA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new gn(i,l,r)}}function cA(t,e){return t.replace(hA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const hA=/\{\$([^}]+)}/g;function dA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ii(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Xg(s)&&Xg(o)){if(!ii(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function eo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function fA(t,e){const n=new pA(t,e);return n.subscribe.bind(n)}class pA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Jc),i.error===void 0&&(i.error=Jc),i.complete===void 0&&(i.complete=Jc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Vf(t){return(await fetch(t,{credentials:"include"})).ok}class _r{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Zx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_A(e))try{this.getOrInitializeService({instanceIdentifier:$r})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=$r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$r){return this.instances.has(e)}getOptions(e=$r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$r){return this.component?this.component.multipleInstances?e:$r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yA(t){return t===$r?void 0:t}function _A(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const EA={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},wA=te.INFO,TA={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},IA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=TA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bf{constructor(e){this.name=e,this._logLevel=wA,this._logHandler=IA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?EA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const SA=(t,e)=>e.some(n=>t instanceof n);let Jg,Zg;function xA(){return Jg||(Jg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AA(){return Zg||(Zg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fE=new WeakMap,ud=new WeakMap,pE=new WeakMap,Zc=new WeakMap,Lf=new WeakMap;function RA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fE.set(n,t)}).catch(()=>{}),Lf.set(e,t),e}function CA(t){if(ud.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ud.set(t,e)}let cd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ud.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kA(t){cd=t(cd)}function PA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(eh(this),e,...n);return pE.set(r,e.sort?e.sort():[e]),hr(r)}:AA().includes(t)?function(...e){return t.apply(eh(this),e),hr(fE.get(this))}:function(...e){return hr(t.apply(eh(this),e))}}function NA(t){return typeof t=="function"?PA(t):(t instanceof IDBTransaction&&CA(t),SA(t,xA())?new Proxy(t,cd):t)}function hr(t){if(t instanceof IDBRequest)return RA(t);if(Zc.has(t))return Zc.get(t);const e=NA(t);return e!==t&&(Zc.set(t,e),Lf.set(e,t)),e}const eh=t=>Lf.get(t);function DA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=hr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(hr(o.result),u.oldVersion,u.newVersion,hr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const OA=["get","getKey","getAll","getAllKeys","count"],VA=["put","add","delete","clear"],th=new Map;function ey(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(th.get(e))return th.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=VA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||OA.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return th.set(e,s),s}kA(t=>({...t,get:(e,n,r)=>ey(e,n)||t.get(e,n,r),has:(e,n)=>!!ey(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function LA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hd="@firebase/app",ty="0.14.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new bf("@firebase/app"),MA="@firebase/app-compat",jA="@firebase/analytics-compat",FA="@firebase/analytics",UA="@firebase/app-check-compat",zA="@firebase/app-check",BA="@firebase/auth",$A="@firebase/auth-compat",WA="@firebase/database",qA="@firebase/data-connect",HA="@firebase/database-compat",KA="@firebase/functions",GA="@firebase/functions-compat",QA="@firebase/installations",YA="@firebase/installations-compat",XA="@firebase/messaging",JA="@firebase/messaging-compat",ZA="@firebase/performance",eR="@firebase/performance-compat",tR="@firebase/remote-config",nR="@firebase/remote-config-compat",rR="@firebase/storage",iR="@firebase/storage-compat",sR="@firebase/firestore",oR="@firebase/ai",aR="@firebase/firestore-compat",lR="firebase",uR="12.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="[DEFAULT]",cR={[hd]:"fire-core",[MA]:"fire-core-compat",[FA]:"fire-analytics",[jA]:"fire-analytics-compat",[zA]:"fire-app-check",[UA]:"fire-app-check-compat",[BA]:"fire-auth",[$A]:"fire-auth-compat",[WA]:"fire-rtdb",[qA]:"fire-data-connect",[HA]:"fire-rtdb-compat",[KA]:"fire-fn",[GA]:"fire-fn-compat",[QA]:"fire-iid",[YA]:"fire-iid-compat",[XA]:"fire-fcm",[JA]:"fire-fcm-compat",[ZA]:"fire-perf",[eR]:"fire-perf-compat",[tR]:"fire-rc",[nR]:"fire-rc-compat",[rR]:"fire-gcs",[iR]:"fire-gcs-compat",[sR]:"fire-fst",[aR]:"fire-fst-compat",[oR]:"fire-vertex","fire-js":"fire-js",[lR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl=new Map,hR=new Map,fd=new Map;function ny(t,e){try{t.container.addComponent(e)}catch(n){Nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function si(t){const e=t.name;if(fd.has(e))return Nn.debug(`There were multiple attempts to register component ${e}.`),!1;fd.set(e,t);for(const n of Wl.values())ny(n,t);for(const n of hR.values())ny(n,t);return!0}function bu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dr=new ta("app","Firebase",dR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=uR;function mE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:dd,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw dr.create("bad-app-name",{appName:String(i)});if(n||(n=cE()),!n)throw dr.create("no-options");const s=Wl.get(i);if(s){if(ii(n,s.options)&&ii(r,s.config))return s;throw dr.create("duplicate-app",{appName:i})}const o=new vA(i);for(const u of fd.values())o.addComponent(u);const l=new fR(n,r,o);return Wl.set(i,l),l}function Mf(t=dd){const e=Wl.get(t);if(!e&&t===dd&&cE())return mE();if(!e)throw dr.create("no-app",{appName:t});return e}function ln(t,e,n){let r=cR[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nn.warn(o.join(" "));return}si(new _r(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR="firebase-heartbeat-database",mR=1,Uo="firebase-heartbeat-store";let nh=null;function gE(){return nh||(nh=DA(pR,mR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Uo)}catch(n){console.warn(n)}}}}).catch(t=>{throw dr.create("idb-open",{originalErrorMessage:t.message})})),nh}async function gR(t){try{const n=(await gE()).transaction(Uo),r=await n.objectStore(Uo).get(yE(t));return await n.done,r}catch(e){if(e instanceof gn)Nn.warn(e.message);else{const n=dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nn.warn(n.message)}}}async function ry(t,e){try{const r=(await gE()).transaction(Uo,"readwrite");await r.objectStore(Uo).put(e,yE(t)),await r.done}catch(n){if(n instanceof gn)Nn.warn(n.message);else{const r=dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nn.warn(r.message)}}}function yE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR=1024,_R=30;class vR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=iy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>_R){const o=TR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Nn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=iy(),{heartbeatsToSend:r,unsentEntries:i}=ER(this._heartbeatsCache.heartbeats),s=$l(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Nn.warn(n),""}}}function iy(){return new Date().toISOString().substring(0,10)}function ER(t,e=yR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),sy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aA()?lA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await gR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ry(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ry(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function sy(t){return $l(JSON.stringify({version:2,heartbeats:t})).length}function TR(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(t){si(new _r("platform-logger",e=>new bA(e),"PRIVATE")),si(new _r("heartbeat",e=>new vR(e),"PRIVATE")),ln(hd,ty,t),ln(hd,ty,"esm2020"),ln("fire-js","")}IR("");var SR="firebase",xR="12.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln(SR,xR,"app");function _E(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AR=_E,vE=new ta("auth","Firebase",_E());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=new bf("@firebase/auth");function RR(t,...e){ql.logLevel<=te.WARN&&ql.warn(`Auth (${mi}): ${t}`,...e)}function al(t,...e){ql.logLevel<=te.ERROR&&ql.error(`Auth (${mi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,...e){throw jf(t,...e)}function un(t,...e){return jf(t,...e)}function EE(t,e,n){const r={...AR(),[e]:n};return new ta("auth","Firebase",r).create(e,{appName:t.name})}function fr(t){return EE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vE.create(t,...e)}function K(t,e,...n){if(!t)throw jf(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw al(e),new Error(e)}function Dn(t,e){t||In(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function CR(){return oy()==="http:"||oy()==="https:"}function oy(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(CR()||rA()||"connection"in navigator)?navigator.onLine:!0}function PR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dn(n>e,"Short delay should be less than long delay!"),this.isMobile=eA()||iA()}get(){return kR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(t,e){Dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],OR=new ra(3e4,6e4);function gi(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function kr(t,e,n,r,i={}){return TE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=na({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return nA()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&ms(t.emulatorConfig.host)&&(c.credentials="include"),wE.fetch()(await IE(t,t.config.apiHost,n,l),c)})}async function TE(t,e,n){t._canInitEmulator=!1;const r={...NR,...e};try{const i=new bR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ba(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ba(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ba(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ba(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw EE(t,d,c);Xt(t,d)}}catch(i){if(i instanceof gn)throw i;Xt(t,"network-request-failed",{message:String(i)})}}async function Lu(t,e,n,r,i={}){const s=await kr(t,e,n,r,i);return"mfaPendingCredential"in s&&Xt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function IE(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Ff(t.config,i):`${t.config.apiScheme}://${i}`;return DR.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function VR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),OR.get())})}}function Ba(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=un(t,e,r);return i.customData._tokenResponse=n,i}function ay(t){return t!==void 0&&t.enterprise!==void 0}class LR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return VR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function MR(t,e){return kr(t,"GET","/v2/recaptchaConfig",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jR(t,e){return kr(t,"POST","/v1/accounts:delete",e)}async function Hl(t,e){return kr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FR(t,e=!1){const n=je(t),r=await n.getIdToken(e),i=Uf(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:mo(rh(i.auth_time)),issuedAtTime:mo(rh(i.iat)),expirationTime:mo(rh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function rh(t){return Number(t)*1e3}function Uf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return al("JWT malformed, contained fewer than 3 sections"),null;try{const i=aE(n);return i?JSON.parse(i):(al("Failed to decode base64 JWT payload"),null)}catch(i){return al("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ly(t){const e=Uf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gn&&UR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function UR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mo(this.lastLoginAt),this.creationTime=mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kl(t){var p;const e=t.auth,n=await t.getIdToken(),r=await zo(t,Hl(e,{idToken:n}));K(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?SE(i.providerUserInfo):[],o=$R(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new md(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function BR(t){const e=je(t);await Kl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $R(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function SE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WR(t,e){const n=await TE(t,{},async()=>{const r=na({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await IE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&ms(t.emulatorConfig.host)&&(u.credentials="include"),wE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qR(t,e){return kr(t,"POST","/v2/accounts:revokeToken",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ly(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=ly(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await WR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Hi;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hi,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new zR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new md(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await zo(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return FR(this,e)}reload(){return BR(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Kl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dt(this.auth.app))return Promise.reject(fr(this.auth));const e=await this.getIdToken();return await zo(this,jR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:I,providerData:A,stsTokenManager:k}=n;K(p&&k,e,"internal-error");const N=Hi.fromJSON(this.name,k);K(typeof p=="string",e,"internal-error"),Wn(r,e.name),Wn(i,e.name),K(typeof m=="boolean",e,"internal-error"),K(typeof I=="boolean",e,"internal-error"),Wn(s,e.name),Wn(o,e.name),Wn(l,e.name),Wn(u,e.name),Wn(c,e.name),Wn(d,e.name);const w=new Wt({uid:p,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:I,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:N,createdAt:c,lastLoginAt:d});return A&&Array.isArray(A)&&(w.providerData=A.map(v=>({...v}))),u&&(w._redirectEventId=u),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new Hi;i.updateFromServerResponse(n);const s=new Wt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Kl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?SE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Hi;l.updateFromIdToken(r);const u=new Wt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new md(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy=new Map;function Sn(t){Dn(t instanceof Function,"Expected a class definition");let e=uy.get(t);return e?(Dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,uy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xE.type="NONE";const cy=xE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t,e,n){return`firebase:${t}:${e}:${n}`}class Ki{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ll(this.userKey,i.apiKey,s),this.fullPersistenceKey=ll("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Hl(this.auth,{idToken:e}).catch(()=>{});return n?Wt._fromGetAccountInfoResponse(this.auth,n,e):null}return Wt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ki(Sn(cy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Sn(cy);const o=ll(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let p;if(typeof d=="string"){const m=await Hl(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Wt._fromGetAccountInfoResponse(e,m,d)}else p=Wt._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ki(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ki(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(AE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(NE(e))return"Blackberry";if(DE(e))return"Webos";if(RE(e))return"Safari";if((e.includes("chrome/")||CE(e))&&!e.includes("edge/"))return"Chrome";if(PE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function AE(t=it()){return/firefox\//i.test(t)}function RE(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function CE(t=it()){return/crios\//i.test(t)}function kE(t=it()){return/iemobile/i.test(t)}function PE(t=it()){return/android/i.test(t)}function NE(t=it()){return/blackberry/i.test(t)}function DE(t=it()){return/webos/i.test(t)}function zf(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HR(t=it()){var e;return zf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function KR(){return sA()&&document.documentMode===10}function OE(t=it()){return zf(t)||PE(t)||DE(t)||NE(t)||/windows phone/i.test(t)||kE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(t,e=[]){let n;switch(t){case"Browser":n=hy(it());break;case"Worker":n=`${hy(it())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QR(t,e={}){return kr(t,"GET","/v2/passwordPolicy",gi(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=6;class XR{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??YR,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dy(this),this.idTokenSubscription=new dy(this),this.beforeStateQueue=new GR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Ki.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Hl(this,{idToken:e}),r=await Wt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Dt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Kl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=PR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dt(this.app))return Promise.reject(fr(this));const n=e?je(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dt(this.app)?Promise.reject(fr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dt(this.app)?Promise.reject(fr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await QR(this),n=new XR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ta("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await qR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Ki.create(this,[Sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=VE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&RR(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function gs(t){return je(t)}class dy{constructor(e){this.auth=e,this.observer=null,this.addObserver=fA(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ZR(t){Mu=t}function bE(t){return Mu.loadJS(t)}function eC(){return Mu.recaptchaEnterpriseScript}function tC(){return Mu.gapiScript}function nC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class rC{constructor(){this.enterprise=new iC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class iC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const sC="recaptcha-enterprise",LE="NO_RECAPTCHA";class oC{constructor(e){this.type=sC,this.auth=gs(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{MR(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new LR(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;ay(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(LE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new rC().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&ay(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=eC();u.length!==0&&(u+=l),bE(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function fy(t,e,n,r=!1,i=!1){const s=new oC(t);let o;if(i)o=LE;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function py(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await fy(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await fy(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(t,e){const n=bu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ii(s,e??{}))return i;Xt(i,"already-initialized")}return n.initialize({options:e})}function lC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function uC(t,e,n){const r=gs(t);K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=ME(e),{host:o,port:l}=cC(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(ii(c,r.config.emulator)&&ii(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,ms(o)?Vf(`${s}//${o}${u}`):hC()}function ME(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function cC(t){const e=ME(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:my(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:my(o)}}}function my(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}async function dC(t,e){return kr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fC(t,e){return Lu(t,"POST","/v1/accounts:signInWithPassword",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pC(t,e){return Lu(t,"POST","/v1/accounts:signInWithEmailLink",gi(t,e))}async function mC(t,e){return Lu(t,"POST","/v1/accounts:signInWithEmailLink",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo extends Bf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Bo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Bo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return py(e,n,"signInWithPassword",fC);case"emailLink":return pC(e,{email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return py(e,r,"signUpPassword",dC);case"emailLink":return mC(e,{idToken:n,email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(t,e){return Lu(t,"POST","/v1/accounts:signInWithIdp",gi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC="http://localhost";class oi extends Bf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new oi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new oi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gi(e,n)}buildRequest(){const e={requestUri:gC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=na(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _C(t){const e=Zs(eo(t)).link,n=e?Zs(eo(e)).deep_link_id:null,r=Zs(eo(t)).deep_link_id;return(r?Zs(eo(r)).link:null)||r||n||e||t}class $f{constructor(e){const n=Zs(eo(e)),r=n.apiKey??null,i=n.oobCode??null,s=yC(n.mode??null);K(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=_C(e);try{return new $f(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.providerId=ys.PROVIDER_ID}static credential(e,n){return Bo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=$f.parseLink(n);return K(r,"argument-error"),Bo._fromEmailAndCode(e,r.code,r.tenantId)}}ys.PROVIDER_ID="password";ys.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ys.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia extends jE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends ia{constructor(){super("facebook.com")}static credential(e){return oi._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends ia{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return oi._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends ia{constructor(){super("github.com")}static credential(e){return oi._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends ia{constructor(){super("twitter.com")}static credential(e,n){return oi._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Wt._fromIdTokenResponse(e,r,i),o=gy(r);return new ss({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=gy(r);return new ss({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function gy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends gn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Gl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Gl(e,n,r,i)}}function FE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Gl._fromErrorAndOperation(t,s,e,r):s})}async function vC(t,e,n=!1){const r=await zo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ss._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EC(t,e,n=!1){const{auth:r}=t;if(Dt(r.app))return Promise.reject(fr(r));const i="reauthenticate";try{const s=await zo(t,FE(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=Uf(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),ss._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Xt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UE(t,e,n=!1){if(Dt(t.app))return Promise.reject(fr(t));const r="signIn",i=await FE(t,r,e),s=await ss._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function wC(t,e){return UE(gs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TC(t){const e=gs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function IC(t,e,n){return Dt(t.app)?Promise.reject(fr(t)):wC(je(t),ys.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&TC(t),r})}function SC(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function xC(t,e,n){return je(t).beforeAuthStateChanged(e,n)}function AC(t){return je(t).signOut()}const Ql="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ql,"1"),this.storage.removeItem(Ql),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC=1e3,CC=10;class BE extends zE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=OE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);KR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,CC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},RC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}BE.type="LOCAL";const kC=BE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E extends zE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$E.type="SESSION";const WE=$E;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ju(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await PC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ju.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Wf("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return window}function DC(t){cn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function OC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function bC(){return qE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE="firebaseLocalStorageDb",LC=1,Yl="firebaseLocalStorage",KE="fbase_key";class sa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fu(t,e){return t.transaction([Yl],e?"readwrite":"readonly").objectStore(Yl)}function MC(){const t=indexedDB.deleteDatabase(HE);return new sa(t).toPromise()}function gd(){const t=indexedDB.open(HE,LC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yl,{keyPath:KE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yl)?e(r):(r.close(),await MC(),e(await gd()))})})}async function yy(t,e,n){const r=Fu(t,!0).put({[KE]:e,value:n});return new sa(r).toPromise()}async function jC(t,e){const n=Fu(t,!1).get(e),r=await new sa(n).toPromise();return r===void 0?null:r.value}function _y(t,e){const n=Fu(t,!0).delete(e);return new sa(n).toPromise()}const FC=800,UC=3;class GE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>UC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ju._getInstance(bC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await OC(),!this.activeServiceWorker)return;this.sender=new NC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gd();return await yy(e,Ql,"1"),await _y(e,Ql),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>jC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_y(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Fu(i,!1).getAll();return new sa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}GE.type="LOCAL";const zC=GE;new ra(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(t,e){return e?Sn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf extends Bf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $C(t){return UE(t.auth,new qf(t),t.bypassAuthState)}function WC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),EC(n,new qf(t),t.bypassAuthState)}async function qC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),vC(n,new qf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $C;case"linkViaPopup":case"linkViaRedirect":return qC;case"reauthViaPopup":case"reauthViaRedirect":return WC;default:Xt(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=new ra(2e3,1e4);class Fi extends QE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Fi.currentPopupAction&&Fi.currentPopupAction.cancel(),Fi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=Wf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,HC.get())};e()}}Fi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC="pendingRedirect",ul=new Map;class GC extends QE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ul.get(this.auth._key());if(!e){try{const r=await QC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ul.set(this.auth._key(),e)}return this.bypassAuthState||ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QC(t,e){const n=JC(e),r=XC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function YC(t,e){ul.set(t._key(),e)}function XC(t){return Sn(t._redirectPersistence)}function JC(t){return ll(KC,t.config.apiKey,t.name)}async function ZC(t,e,n=!1){if(Dt(t.app))return Promise.reject(fr(t));const r=gs(t),i=BC(r,e),o=await new GC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=10*60*1e3;class tk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!YE(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(un(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ek&&this.cachedEventUids.clear(),this.cachedEventUids.has(vy(e))}saveEventToCache(e){this.cachedEventUids.add(vy(e)),this.lastProcessedEventTime=Date.now()}}function vy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function YE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return YE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rk(t,e={}){return kr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sk=/^https?/;async function ok(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rk(t);for(const n of e)try{if(ak(n))return}catch{}Xt(t,"unauthorized-domain")}function ak(t){const e=pd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sk.test(n))return!1;if(ik.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk=new ra(3e4,6e4);function Ey(){const t=cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uk(t){return new Promise((e,n)=>{var i,s,o;function r(){Ey(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ey(),n(un(t,"network-request-failed"))},timeout:lk.get()})}if((s=(i=cn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=cn().gapi)!=null&&o.load)r();else{const l=nC("iframefcb");return cn()[l]=()=>{gapi.load?r():n(un(t,"network-request-failed"))},bE(`${tC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw cl=null,e})}let cl=null;function ck(t){return cl=cl||uk(t),cl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=new ra(5e3,15e3),dk="__/auth/iframe",fk="emulator/auth/iframe",pk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gk(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ff(e,fk):`https://${t.config.authDomain}/${dk}`,r={apiKey:e.apiKey,appName:t.name,v:mi},i=mk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${na(r).slice(1)}`}async function yk(t){const e=await ck(t),n=cn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:gk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=un(t,"network-request-failed"),l=cn().setTimeout(()=>{s(o)},hk.get());function u(){cn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vk=500,Ek=600,wk="_blank",Tk="http://localhost";class wy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ik(t,e,n,r=vk,i=Ek){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={..._k,width:r.toString(),height:i.toString(),top:s,left:o},c=it().toLowerCase();n&&(l=CE(c)?wk:n),AE(c)&&(e=e||Tk,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[I,A])=>`${m}${I}=${A},`,"");if(HR(c)&&l!=="_self")return Sk(e||"",l),new wy(null);const p=window.open(e||"",l,d);K(p,t,"popup-blocked");try{p.focus()}catch{}return new wy(p)}function Sk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk="__/auth/handler",Ak="emulator/auth/handler",Rk=encodeURIComponent("fac");async function Ty(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:mi,eventId:i};if(e instanceof jE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",dA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof ia){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${Rk}=${encodeURIComponent(u)}`:"";return`${Ck(t)}?${na(l).slice(1)}${c}`}function Ck({config:t}){return t.emulator?Ff(t,Ak):`https://${t.authDomain}/${xk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="webStorageSupport";class kk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=WE,this._completeRedirectFn=ZC,this._overrideRedirectResult=YC}async _openPopup(e,n,r,i){var o;Dn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Ty(e,n,r,pd(),i);return Ik(e,s,Wf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ty(e,n,r,pd(),i);return DC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Dn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yk(e),r=new tk(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ih,{type:ih},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[ih];s!==void 0&&n(!!s),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ok(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return OE()||RE()||zf()}}const Pk=kk;var Iy="@firebase/auth",Sy="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ok(t){si(new _r("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:VE(t)},c=new JR(r,i,s,u);return lC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),si(new _r("auth-internal",e=>{const n=gs(e.getProvider("auth").getImmediate());return(r=>new Nk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(Iy,Sy,Dk(t)),ln(Iy,Sy,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=5*60,bk=hE("authIdTokenMaxAge")||Vk;let xy=null;const Lk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>bk)return;const i=n==null?void 0:n.token;xy!==i&&(xy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Mk(t=Mf()){const e=bu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=aC(t,{popupRedirectResolver:Pk,persistence:[zC,kC,WE]}),r=hE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Lk(s.toString());xC(n,o,()=>o(n.currentUser)),SC(n,l=>o(l))}}const i=lE("auth");return i&&uC(n,`http://${i}`),n}function jk(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}ZR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=un("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",jk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ok("Browser");var Ay=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pr,XE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function T(){}T.prototype=_.prototype,E.F=_.prototype,E.prototype=new T,E.prototype.constructor=E,E.D=function(R,C,P){for(var S=Array(arguments.length-2),De=2;De<arguments.length;De++)S[De-2]=arguments[De];return _.prototype[C].apply(R,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,_,T){T||(T=0);const R=Array(16);if(typeof _=="string")for(var C=0;C<16;++C)R[C]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(C=0;C<16;++C)R[C]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=E.g[0],T=E.g[1],C=E.g[2];let P=E.g[3],S;S=_+(P^T&(C^P))+R[0]+3614090360&4294967295,_=T+(S<<7&4294967295|S>>>25),S=P+(C^_&(T^C))+R[1]+3905402710&4294967295,P=_+(S<<12&4294967295|S>>>20),S=C+(T^P&(_^T))+R[2]+606105819&4294967295,C=P+(S<<17&4294967295|S>>>15),S=T+(_^C&(P^_))+R[3]+3250441966&4294967295,T=C+(S<<22&4294967295|S>>>10),S=_+(P^T&(C^P))+R[4]+4118548399&4294967295,_=T+(S<<7&4294967295|S>>>25),S=P+(C^_&(T^C))+R[5]+1200080426&4294967295,P=_+(S<<12&4294967295|S>>>20),S=C+(T^P&(_^T))+R[6]+2821735955&4294967295,C=P+(S<<17&4294967295|S>>>15),S=T+(_^C&(P^_))+R[7]+4249261313&4294967295,T=C+(S<<22&4294967295|S>>>10),S=_+(P^T&(C^P))+R[8]+1770035416&4294967295,_=T+(S<<7&4294967295|S>>>25),S=P+(C^_&(T^C))+R[9]+2336552879&4294967295,P=_+(S<<12&4294967295|S>>>20),S=C+(T^P&(_^T))+R[10]+4294925233&4294967295,C=P+(S<<17&4294967295|S>>>15),S=T+(_^C&(P^_))+R[11]+2304563134&4294967295,T=C+(S<<22&4294967295|S>>>10),S=_+(P^T&(C^P))+R[12]+1804603682&4294967295,_=T+(S<<7&4294967295|S>>>25),S=P+(C^_&(T^C))+R[13]+4254626195&4294967295,P=_+(S<<12&4294967295|S>>>20),S=C+(T^P&(_^T))+R[14]+2792965006&4294967295,C=P+(S<<17&4294967295|S>>>15),S=T+(_^C&(P^_))+R[15]+1236535329&4294967295,T=C+(S<<22&4294967295|S>>>10),S=_+(C^P&(T^C))+R[1]+4129170786&4294967295,_=T+(S<<5&4294967295|S>>>27),S=P+(T^C&(_^T))+R[6]+3225465664&4294967295,P=_+(S<<9&4294967295|S>>>23),S=C+(_^T&(P^_))+R[11]+643717713&4294967295,C=P+(S<<14&4294967295|S>>>18),S=T+(P^_&(C^P))+R[0]+3921069994&4294967295,T=C+(S<<20&4294967295|S>>>12),S=_+(C^P&(T^C))+R[5]+3593408605&4294967295,_=T+(S<<5&4294967295|S>>>27),S=P+(T^C&(_^T))+R[10]+38016083&4294967295,P=_+(S<<9&4294967295|S>>>23),S=C+(_^T&(P^_))+R[15]+3634488961&4294967295,C=P+(S<<14&4294967295|S>>>18),S=T+(P^_&(C^P))+R[4]+3889429448&4294967295,T=C+(S<<20&4294967295|S>>>12),S=_+(C^P&(T^C))+R[9]+568446438&4294967295,_=T+(S<<5&4294967295|S>>>27),S=P+(T^C&(_^T))+R[14]+3275163606&4294967295,P=_+(S<<9&4294967295|S>>>23),S=C+(_^T&(P^_))+R[3]+4107603335&4294967295,C=P+(S<<14&4294967295|S>>>18),S=T+(P^_&(C^P))+R[8]+1163531501&4294967295,T=C+(S<<20&4294967295|S>>>12),S=_+(C^P&(T^C))+R[13]+2850285829&4294967295,_=T+(S<<5&4294967295|S>>>27),S=P+(T^C&(_^T))+R[2]+4243563512&4294967295,P=_+(S<<9&4294967295|S>>>23),S=C+(_^T&(P^_))+R[7]+1735328473&4294967295,C=P+(S<<14&4294967295|S>>>18),S=T+(P^_&(C^P))+R[12]+2368359562&4294967295,T=C+(S<<20&4294967295|S>>>12),S=_+(T^C^P)+R[5]+4294588738&4294967295,_=T+(S<<4&4294967295|S>>>28),S=P+(_^T^C)+R[8]+2272392833&4294967295,P=_+(S<<11&4294967295|S>>>21),S=C+(P^_^T)+R[11]+1839030562&4294967295,C=P+(S<<16&4294967295|S>>>16),S=T+(C^P^_)+R[14]+4259657740&4294967295,T=C+(S<<23&4294967295|S>>>9),S=_+(T^C^P)+R[1]+2763975236&4294967295,_=T+(S<<4&4294967295|S>>>28),S=P+(_^T^C)+R[4]+1272893353&4294967295,P=_+(S<<11&4294967295|S>>>21),S=C+(P^_^T)+R[7]+4139469664&4294967295,C=P+(S<<16&4294967295|S>>>16),S=T+(C^P^_)+R[10]+3200236656&4294967295,T=C+(S<<23&4294967295|S>>>9),S=_+(T^C^P)+R[13]+681279174&4294967295,_=T+(S<<4&4294967295|S>>>28),S=P+(_^T^C)+R[0]+3936430074&4294967295,P=_+(S<<11&4294967295|S>>>21),S=C+(P^_^T)+R[3]+3572445317&4294967295,C=P+(S<<16&4294967295|S>>>16),S=T+(C^P^_)+R[6]+76029189&4294967295,T=C+(S<<23&4294967295|S>>>9),S=_+(T^C^P)+R[9]+3654602809&4294967295,_=T+(S<<4&4294967295|S>>>28),S=P+(_^T^C)+R[12]+3873151461&4294967295,P=_+(S<<11&4294967295|S>>>21),S=C+(P^_^T)+R[15]+530742520&4294967295,C=P+(S<<16&4294967295|S>>>16),S=T+(C^P^_)+R[2]+3299628645&4294967295,T=C+(S<<23&4294967295|S>>>9),S=_+(C^(T|~P))+R[0]+4096336452&4294967295,_=T+(S<<6&4294967295|S>>>26),S=P+(T^(_|~C))+R[7]+1126891415&4294967295,P=_+(S<<10&4294967295|S>>>22),S=C+(_^(P|~T))+R[14]+2878612391&4294967295,C=P+(S<<15&4294967295|S>>>17),S=T+(P^(C|~_))+R[5]+4237533241&4294967295,T=C+(S<<21&4294967295|S>>>11),S=_+(C^(T|~P))+R[12]+1700485571&4294967295,_=T+(S<<6&4294967295|S>>>26),S=P+(T^(_|~C))+R[3]+2399980690&4294967295,P=_+(S<<10&4294967295|S>>>22),S=C+(_^(P|~T))+R[10]+4293915773&4294967295,C=P+(S<<15&4294967295|S>>>17),S=T+(P^(C|~_))+R[1]+2240044497&4294967295,T=C+(S<<21&4294967295|S>>>11),S=_+(C^(T|~P))+R[8]+1873313359&4294967295,_=T+(S<<6&4294967295|S>>>26),S=P+(T^(_|~C))+R[15]+4264355552&4294967295,P=_+(S<<10&4294967295|S>>>22),S=C+(_^(P|~T))+R[6]+2734768916&4294967295,C=P+(S<<15&4294967295|S>>>17),S=T+(P^(C|~_))+R[13]+1309151649&4294967295,T=C+(S<<21&4294967295|S>>>11),S=_+(C^(T|~P))+R[4]+4149444226&4294967295,_=T+(S<<6&4294967295|S>>>26),S=P+(T^(_|~C))+R[11]+3174756917&4294967295,P=_+(S<<10&4294967295|S>>>22),S=C+(_^(P|~T))+R[2]+718787259&4294967295,C=P+(S<<15&4294967295|S>>>17),S=T+(P^(C|~_))+R[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(C+(S<<21&4294967295|S>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+P&4294967295}r.prototype.v=function(E,_){_===void 0&&(_=E.length);const T=_-this.blockSize,R=this.C;let C=this.h,P=0;for(;P<_;){if(C==0)for(;P<=T;)i(this,E,P),P+=this.blockSize;if(typeof E=="string"){for(;P<_;)if(R[C++]=E.charCodeAt(P++),C==this.blockSize){i(this,R),C=0;break}}else for(;P<_;)if(R[C++]=E[P++],C==this.blockSize){i(this,R),C=0;break}}this.h=C,this.o+=_},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;_=this.o*8;for(var T=E.length-8;T<E.length;++T)E[T]=_&255,_/=256;for(this.v(E),E=Array(16),_=0,T=0;T<4;++T)for(let R=0;R<32;R+=8)E[_++]=this.g[T]>>>R&255;return E};function s(E,_){var T=l;return Object.prototype.hasOwnProperty.call(T,E)?T[E]:T[E]=_(E)}function o(E,_){this.h=_;const T=[];let R=!0;for(let C=E.length-1;C>=0;C--){const P=E[C]|0;R&&P==_||(T[C]=P,R=!1)}this.g=T}var l={};function u(E){return-128<=E&&E<128?s(E,function(_){return new o([_|0],_<0?-1:0)}):new o([E|0],E<0?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return p;if(E<0)return N(c(-E));const _=[];let T=1;for(let R=0;E>=T;R++)_[R]=E/T|0,T*=4294967296;return new o(_,0)}function d(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return N(d(E.substring(1),_));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=c(Math.pow(_,8));let R=p;for(let P=0;P<E.length;P+=8){var C=Math.min(8,E.length-P);const S=parseInt(E.substring(P,P+C),_);C<8?(C=c(Math.pow(_,C)),R=R.j(C).add(c(S))):(R=R.j(T),R=R.add(c(S)))}return R}var p=u(0),m=u(1),I=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-N(this).m();let E=0,_=1;for(let T=0;T<this.g.length;T++){const R=this.i(T);E+=(R>=0?R:4294967296+R)*_,_*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(A(this))return"0";if(k(this))return"-"+N(this).toString(E);const _=c(Math.pow(E,6));var T=this;let R="";for(;;){const C=D(T,_).g;T=w(T,C.j(_));let P=((T.g.length>0?T.g[0]:T.h)>>>0).toString(E);if(T=C,A(T))return P+R;for(;P.length<6;)P="0"+P;R=P+R}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function A(E){if(E.h!=0)return!1;for(let _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function k(E){return E.h==-1}t.l=function(E){return E=w(this,E),k(E)?-1:A(E)?0:1};function N(E){const _=E.g.length,T=[];for(let R=0;R<_;R++)T[R]=~E.g[R];return new o(T,~E.h).add(m)}t.abs=function(){return k(this)?N(this):this},t.add=function(E){const _=Math.max(this.g.length,E.g.length),T=[];let R=0;for(let C=0;C<=_;C++){let P=R+(this.i(C)&65535)+(E.i(C)&65535),S=(P>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);R=S>>>16,P&=65535,S&=65535,T[C]=S<<16|P}return new o(T,T[T.length-1]&-2147483648?-1:0)};function w(E,_){return E.add(N(_))}t.j=function(E){if(A(this)||A(E))return p;if(k(this))return k(E)?N(this).j(N(E)):N(N(this).j(E));if(k(E))return N(this.j(N(E)));if(this.l(I)<0&&E.l(I)<0)return c(this.m()*E.m());const _=this.g.length+E.g.length,T=[];for(var R=0;R<2*_;R++)T[R]=0;for(R=0;R<this.g.length;R++)for(let C=0;C<E.g.length;C++){const P=this.i(R)>>>16,S=this.i(R)&65535,De=E.i(C)>>>16,ht=E.i(C)&65535;T[2*R+2*C]+=S*ht,v(T,2*R+2*C),T[2*R+2*C+1]+=P*ht,v(T,2*R+2*C+1),T[2*R+2*C+1]+=S*De,v(T,2*R+2*C+1),T[2*R+2*C+2]+=P*De,v(T,2*R+2*C+2)}for(E=0;E<_;E++)T[E]=T[2*E+1]<<16|T[2*E];for(E=_;E<2*_;E++)T[E]=0;return new o(T,0)};function v(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function x(E,_){this.g=E,this.h=_}function D(E,_){if(A(_))throw Error("division by zero");if(A(E))return new x(p,p);if(k(E))return _=D(N(E),_),new x(N(_.g),N(_.h));if(k(_))return _=D(E,N(_)),new x(N(_.g),_.h);if(E.g.length>30){if(k(E)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var T=m,R=_;R.l(E)<=0;)T=V(T),R=V(R);var C=F(T,1),P=F(R,1);for(R=F(R,2),T=F(T,2);!A(R);){var S=P.add(R);S.l(E)<=0&&(C=C.add(T),P=S),R=F(R,1),T=F(T,1)}return _=w(E,C.j(_)),new x(C,_)}for(C=p;E.l(_)>=0;){for(T=Math.max(1,Math.floor(E.m()/_.m())),R=Math.ceil(Math.log(T)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),P=c(T),S=P.j(_);k(S)||S.l(E)>0;)T-=R,P=c(T),S=P.j(_);A(P)&&(P=m),C=C.add(P),E=w(E,S)}return new x(C,E)}t.B=function(E){return D(this,E).h},t.and=function(E){const _=Math.max(this.g.length,E.g.length),T=[];for(let R=0;R<_;R++)T[R]=this.i(R)&E.i(R);return new o(T,this.h&E.h)},t.or=function(E){const _=Math.max(this.g.length,E.g.length),T=[];for(let R=0;R<_;R++)T[R]=this.i(R)|E.i(R);return new o(T,this.h|E.h)},t.xor=function(E){const _=Math.max(this.g.length,E.g.length),T=[];for(let R=0;R<_;R++)T[R]=this.i(R)^E.i(R);return new o(T,this.h^E.h)};function V(E){const _=E.g.length+1,T=[];for(let R=0;R<_;R++)T[R]=E.i(R)<<1|E.i(R-1)>>>31;return new o(T,E.h)}function F(E,_){const T=_>>5;_%=32;const R=E.g.length-T,C=[];for(let P=0;P<R;P++)C[P]=_>0?E.i(P+T)>>>_|E.i(P+T+1)<<32-_:E.i(P+T);return new o(C,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,XE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,pr=o}).apply(typeof Ay<"u"?Ay:typeof self<"u"?self:typeof window<"u"?window:{});var $a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var JE,to,ZE,hl,yd,ew,tw,nw;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof $a=="object"&&$a];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var O=a[y];if(!(O in f))break e;f=f[O]}a=a[a.length-1],y=f[a],h=h(y),h!=y&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var f=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&f.push([y,h[y]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function c(a,h,f){return c=u,c.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(y,O,b){for(var z=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)z[Z-2]=arguments[Z];return h.prototype[O].apply(y,z)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function I(a){const h=a.length;if(h>0){const f=Array(h);for(let y=0;y<h;y++)f[y]=a[y];return f}return[]}function A(a,h){for(let y=1;y<arguments.length;y++){const O=arguments[y];var f=typeof O;if(f=f!="object"?f:O?Array.isArray(O)?"array":f:"null",f=="array"||f=="object"&&typeof O.length=="number"){f=a.length||0;const b=O.length||0;a.length=f+b;for(let z=0;z<b;z++)a[f+z]=O[z]}else a.push(O)}}class k{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function N(a){o.setTimeout(()=>{throw a},0)}function w(){var a=E;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class v{constructor(){this.h=this.g=null}add(h,f){const y=x.get();y.set(h,f),this.h?this.h.next=y:this.g=y,this.h=y}}var x=new k(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let V,F=!1,E=new v,_=()=>{const a=Promise.resolve(void 0);V=()=>{a.then(T)}};function T(){for(var a;a=w();){try{a.h.call(a.g)}catch(f){N(f)}var h=x;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}F=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function S(a){return/^[\s\xa0]*$/.test(a)}function De(a,h){C.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(De,C),De.prototype.init=function(a,h){const f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&De.Z.h.call(this)},De.prototype.h=function(){De.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ht="closure_listenable_"+(Math.random()*1e6|0),Ts=0;function Is(a,h,f,y,O){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!y,this.ha=O,this.key=++Ts,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,h,f){for(const y in a)h.call(f,a[y],y,a)}function J(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function me(a){const h={};for(const f in a)h[f]=a[f];return h}const Ie="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Or(a,h){let f,y;for(let O=1;O<arguments.length;O++){y=arguments[O];for(f in y)a[f]=y[f];for(let b=0;b<Ie.length;b++)f=Ie[b],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function kt(a){this.src=a,this.g={},this.h=0}kt.prototype.add=function(a,h,f,y,O){const b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);const z=Ft(a,h,y,O);return z>-1?(h=a[z],f||(h.fa=!1)):(h=new Is(h,this.src,b,!!y,O),h.fa=f,a.push(h)),h};function Vr(a,h){const f=h.type;if(f in a.g){var y=a.g[f],O=Array.prototype.indexOf.call(y,h,void 0),b;(b=O>=0)&&Array.prototype.splice.call(y,O,1),b&&($(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Ft(a,h,f,y){for(let O=0;O<a.length;++O){const b=a[O];if(!b.da&&b.listener==h&&b.capture==!!f&&b.ha==y)return O}return-1}var Ln="closure_lm_"+(Math.random()*1e6|0),ic={};function Vp(a,h,f,y,O){if(Array.isArray(h)){for(let b=0;b<h.length;b++)Vp(a,h[b],f,y,O);return null}return f=Mp(f),a&&a[ht]?a.J(h,f,l(y)?!!y.capture:!1,O):BT(a,h,f,!1,y,O)}function BT(a,h,f,y,O,b){if(!h)throw Error("Invalid event type");const z=l(O)?!!O.capture:!!O;let Z=oc(a);if(Z||(a[Ln]=Z=new kt(a)),f=Z.add(h,f,y,z,b),f.proxy)return f;if(y=$T(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)P||(O=z),O===void 0&&(O=!1),a.addEventListener(h.toString(),y,O);else if(a.attachEvent)a.attachEvent(Lp(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function $T(){function a(f){return h.call(a.src,a.listener,f)}const h=WT;return a}function bp(a,h,f,y,O){if(Array.isArray(h))for(var b=0;b<h.length;b++)bp(a,h[b],f,y,O);else y=l(y)?!!y.capture:!!y,f=Mp(f),a&&a[ht]?(a=a.i,b=String(h).toString(),b in a.g&&(h=a.g[b],f=Ft(h,f,y,O),f>-1&&($(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[b],a.h--)))):a&&(a=oc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ft(h,f,y,O)),(f=a>-1?h[a]:null)&&sc(f))}function sc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[ht])Vr(h.i,a);else{var f=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(f,y,a.capture):h.detachEvent?h.detachEvent(Lp(f),y):h.addListener&&h.removeListener&&h.removeListener(y),(f=oc(h))?(Vr(f,a),f.h==0&&(f.src=null,h[Ln]=null)):$(a)}}}function Lp(a){return a in ic?ic[a]:ic[a]="on"+a}function WT(a,h){if(a.da)a=!0;else{h=new De(h,this);const f=a.listener,y=a.ha||a.src;a.fa&&sc(a),a=f.call(y,h)}return a}function oc(a){return a=a[Ln],a instanceof kt?a:null}var ac="__closure_events_fn_"+(Math.random()*1e9>>>0);function Mp(a){return typeof a=="function"?a:(a[ac]||(a[ac]=function(h){return a.handleEvent(h)}),a[ac])}function Ye(){R.call(this),this.i=new kt(this),this.M=this,this.G=null}p(Ye,R),Ye.prototype[ht]=!0,Ye.prototype.removeEventListener=function(a,h,f,y){bp(this,a,h,f,y)};function st(a,h){var f,y=a.G;if(y)for(f=[];y;y=y.G)f.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new C(h,a);else if(h instanceof C)h.target=h.target||a;else{var O=h;h=new C(y,a),Or(h,O)}O=!0;let b,z;if(f)for(z=f.length-1;z>=0;z--)b=h.g=f[z],O=fa(b,y,!0,h)&&O;if(b=h.g=a,O=fa(b,y,!0,h)&&O,O=fa(b,y,!1,h)&&O,f)for(z=0;z<f.length;z++)b=h.g=f[z],O=fa(b,y,!1,h)&&O}Ye.prototype.N=function(){if(Ye.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let y=0;y<f.length;y++)$(f[y]);delete a.g[h],a.h--}}this.G=null},Ye.prototype.J=function(a,h,f,y){return this.i.add(String(a),h,!1,f,y)},Ye.prototype.K=function(a,h,f,y){return this.i.add(String(a),h,!0,f,y)};function fa(a,h,f,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let O=!0;for(let b=0;b<h.length;++b){const z=h[b];if(z&&!z.da&&z.capture==f){const Z=z.listener,Oe=z.ha||z.src;z.fa&&Vr(a.i,z),O=Z.call(Oe,y)!==!1&&O}}return O&&!y.defaultPrevented}function qT(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function jp(a){a.g=qT(()=>{a.g=null,a.i&&(a.i=!1,jp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class HT extends R{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:jp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ss(a){R.call(this),this.h=a,this.g={}}p(Ss,R);var Fp=[];function Up(a){Q(a.g,function(h,f){this.g.hasOwnProperty(f)&&sc(h)},a),a.g={}}Ss.prototype.N=function(){Ss.Z.N.call(this),Up(this)},Ss.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var lc=o.JSON.stringify,KT=o.JSON.parse,GT=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function zp(){}function Bp(){}var xs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function uc(){C.call(this,"d")}p(uc,C);function cc(){C.call(this,"c")}p(cc,C);var br={},$p=null;function pa(){return $p=$p||new Ye}br.Ia="serverreachability";function Wp(a){C.call(this,br.Ia,a)}p(Wp,C);function As(a){const h=pa();st(h,new Wp(h))}br.STAT_EVENT="statevent";function qp(a,h){C.call(this,br.STAT_EVENT,a),this.stat=h}p(qp,C);function ot(a){const h=pa();st(h,new qp(h,a))}br.Ja="timingevent";function Hp(a,h){C.call(this,br.Ja,a),this.size=h}p(Hp,C);function Rs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Cs(){this.g=!0}Cs.prototype.ua=function(){this.g=!1};function QT(a,h,f,y,O,b){a.info(function(){if(a.g)if(b){var z="",Z=b.split("&");for(let le=0;le<Z.length;le++){var Oe=Z[le].split("=");if(Oe.length>1){const Fe=Oe[0];Oe=Oe[1];const en=Fe.split("_");z=en.length>=2&&en[1]=="type"?z+(Fe+"="+Oe+"&"):z+(Fe+"=redacted&")}}}else z=null;else z=b;return"XMLHTTP REQ ("+y+") [attempt "+O+"]: "+h+`
`+f+`
`+z})}function YT(a,h,f,y,O,b,z){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+O+"]: "+h+`
`+f+`
`+b+" "+z})}function vi(a,h,f,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+JT(a,f)+(y?" "+y:"")})}function XT(a,h){a.info(function(){return"TIMEOUT: "+h})}Cs.prototype.info=function(){};function JT(a,h){if(!a.g)return h;if(!h)return null;try{const b=JSON.parse(h);if(b){for(a=0;a<b.length;a++)if(Array.isArray(b[a])){var f=b[a];if(!(f.length<2)){var y=f[1];if(Array.isArray(y)&&!(y.length<1)){var O=y[0];if(O!="noop"&&O!="stop"&&O!="close")for(let z=1;z<y.length;z++)y[z]=""}}}}return lc(b)}catch{return h}}var ma={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Kp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Gp;function hc(){}p(hc,zp),hc.prototype.g=function(){return new XMLHttpRequest},Gp=new hc;function ks(a){return encodeURIComponent(String(a))}function ZT(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function Mn(a,h,f,y){this.j=a,this.i=h,this.l=f,this.S=y||1,this.V=new Ss(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Qp}function Qp(){this.i=null,this.g="",this.h=!1}var Yp={},dc={};function fc(a,h,f){a.M=1,a.A=ya(Zt(h)),a.u=f,a.R=!0,Xp(a,null)}function Xp(a,h){a.F=Date.now(),ga(a),a.B=Zt(a.A);var f=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),cm(f.i,"t",y),a.C=0,f=a.j.L,a.h=new Qp,a.g=Cm(a.j,f?h:null,!a.u),a.P>0&&(a.O=new HT(c(a.Y,a,a.g),a.P)),h=a.V,f=a.g,y=a.ba;var O="readystatechange";Array.isArray(O)||(O&&(Fp[0]=O.toString()),O=Fp);for(let b=0;b<O.length;b++){const z=Vp(f,O[b],y||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.J?me(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),As(),QT(a.i,a.v,a.B,a.l,a.S,a.u)}Mn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Un(a)==3?h.j():this.Y(a)},Mn.prototype.Y=function(a){try{if(a==this.g)e:{const Z=Un(this.g),Oe=this.g.ya(),le=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||ym(this.g)))){this.K||Z!=4||Oe==7||(Oe==8||le<=0?As(3):As(2)),pc(this);var h=this.g.ca();this.X=h;var f=eI(this);if(this.o=h==200,YT(this.i,this.v,this.B,this.l,this.S,Z,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,O=this.g;if((y=O.g?O.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(y)){var b=y;break t}}b=null}if(a=b)vi(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,mc(this,a);else{this.o=!1,this.m=3,ot(12),Lr(this),Ps(this);break e}}if(this.R){a=!0;let Fe;for(;!this.K&&this.C<f.length;)if(Fe=tI(this,f),Fe==dc){Z==4&&(this.m=4,ot(14),a=!1),vi(this.i,this.l,null,"[Incomplete Response]");break}else if(Fe==Yp){this.m=4,ot(15),vi(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else vi(this.i,this.l,Fe,null),mc(this,Fe);if(Jp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||f.length!=0||this.h.h||(this.m=1,ot(16),a=!1),this.o=this.o&&a,!a)vi(this.i,this.l,f,"[Invalid Chunked Response]"),Lr(this),Ps(this);else if(f.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Ic(z),z.P=!0,ot(11))}}else vi(this.i,this.l,f,null),mc(this,f);Z==4&&Lr(this),this.o&&!this.K&&(Z==4?Sm(this.j,this):(this.o=!1,ga(this)))}else mI(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,ot(12)):(this.m=0,ot(13)),Lr(this),Ps(this)}}}catch{}finally{}};function eI(a){if(!Jp(a))return a.g.la();const h=ym(a.g);if(h==="")return"";let f="";const y=h.length,O=Un(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Lr(a),Ps(a),"";a.h.i=new o.TextDecoder}for(let b=0;b<y;b++)a.h.h=!0,f+=a.h.i.decode(h[b],{stream:!(O&&b==y-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function Jp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function tI(a,h){var f=a.C,y=h.indexOf(`
`,f);return y==-1?dc:(f=Number(h.substring(f,y)),isNaN(f)?Yp:(y+=1,y+f>h.length?dc:(h=h.slice(y,y+f),a.C=y+f,h)))}Mn.prototype.cancel=function(){this.K=!0,Lr(this)};function ga(a){a.T=Date.now()+a.H,Zp(a,a.H)}function Zp(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Rs(c(a.aa,a),h)}function pc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Mn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(XT(this.i,this.B),this.M!=2&&(As(),ot(17)),Lr(this),this.m=2,Ps(this)):Zp(this,this.T-a)};function Ps(a){a.j.I==0||a.K||Sm(a.j,a)}function Lr(a){pc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Up(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function mc(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||gc(f.h,a))){if(!a.L&&gc(f.h,a)&&f.I==3){try{var y=f.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var O=y;if(O[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Ta(f),Ea(f);else break e;Tc(f),ot(18)}}else f.xa=O[1],0<f.xa-f.K&&O[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Rs(c(f.Va,f),6e3));nm(f.h)<=1&&f.ta&&(f.ta=void 0)}else jr(f,11)}else if((a.L||f.g==a)&&Ta(f),!S(h))for(O=f.Ba.g.parse(h),h=0;h<O.length;h++){let le=O[h];const Fe=le[0];if(!(Fe<=f.K))if(f.K=Fe,le=le[1],f.I==2)if(le[0]=="c"){f.M=le[1],f.ba=le[2];const en=le[3];en!=null&&(f.ka=en,f.j.info("VER="+f.ka));const Fr=le[4];Fr!=null&&(f.za=Fr,f.j.info("SVER="+f.za));const zn=le[5];zn!=null&&typeof zn=="number"&&zn>0&&(y=1.5*zn,f.O=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const Bn=a.g;if(Bn){const Sa=Bn.g?Bn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Sa){var b=y.h;b.g||Sa.indexOf("spdy")==-1&&Sa.indexOf("quic")==-1&&Sa.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(yc(b,b.h),b.h=null))}if(y.G){const Sc=Bn.g?Bn.g.getResponseHeader("X-HTTP-Session-Id"):null;Sc&&(y.wa=Sc,he(y.J,y.G,Sc))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),y=f;var z=a;if(y.na=Rm(y,y.L?y.ba:null,y.W),z.L){rm(y.h,z);var Z=z,Oe=y.O;Oe&&(Z.H=Oe),Z.D&&(pc(Z),ga(Z)),y.g=z}else Tm(y);f.i.length>0&&wa(f)}else le[0]!="stop"&&le[0]!="close"||jr(f,7);else f.I==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?jr(f,7):wc(f):le[0]!="noop"&&f.l&&f.l.qa(le),f.A=0)}}As(4)}catch{}}var nI=class{constructor(a,h){this.g=a,this.map=h}};function em(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function tm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function nm(a){return a.h?1:a.g?a.g.size:0}function gc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function yc(a,h){a.g?a.g.add(h):a.h=h}function rm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}em.prototype.cancel=function(){if(this.i=im(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function im(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return I(a.i)}var sm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rI(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const y=a[f].indexOf("=");let O,b=null;y>=0?(O=a[f].substring(0,y),b=a[f].substring(y+1)):O=a[f],h(O,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function jn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof jn?(this.l=a.l,Ns(this,a.j),this.o=a.o,this.g=a.g,Ds(this,a.u),this.h=a.h,_c(this,hm(a.i)),this.m=a.m):a&&(h=String(a).match(sm))?(this.l=!1,Ns(this,h[1]||"",!0),this.o=Os(h[2]||""),this.g=Os(h[3]||"",!0),Ds(this,h[4]),this.h=Os(h[5]||"",!0),_c(this,h[6]||"",!0),this.m=Os(h[7]||"")):(this.l=!1,this.i=new bs(null,this.l))}jn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Vs(h,om,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Vs(h,om,!0),"@"),a.push(ks(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Vs(f,f.charAt(0)=="/"?oI:sI,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Vs(f,lI)),a.join("")},jn.prototype.resolve=function(a){const h=Zt(this);let f=!!a.j;f?Ns(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var y=a.h;if(f)Ds(h,a.u);else if(f=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var O=h.h.lastIndexOf("/");O!=-1&&(y=h.h.slice(0,O+1)+y)}if(O=y,O==".."||O==".")y="";else if(O.indexOf("./")!=-1||O.indexOf("/.")!=-1){y=O.lastIndexOf("/",0)==0,O=O.split("/");const b=[];for(let z=0;z<O.length;){const Z=O[z++];Z=="."?y&&z==O.length&&b.push(""):Z==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),y&&z==O.length&&b.push("")):(b.push(Z),y=!0)}y=b.join("/")}else y=O}return f?h.h=y:f=a.i.toString()!=="",f?_c(h,hm(a.i)):f=!!a.m,f&&(h.m=a.m),h};function Zt(a){return new jn(a)}function Ns(a,h,f){a.j=f?Os(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ds(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function _c(a,h,f){h instanceof bs?(a.i=h,uI(a.i,a.l)):(f||(h=Vs(h,aI)),a.i=new bs(h,a.l))}function he(a,h,f){a.i.set(h,f)}function ya(a){return he(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Os(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Vs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,iI),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function iI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var om=/[#\/\?@]/g,sI=/[#\?:]/g,oI=/[#\?]/g,aI=/[#\?@]/g,lI=/#/g;function bs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Mr(a){a.g||(a.g=new Map,a.h=0,a.i&&rI(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=bs.prototype,t.add=function(a,h){Mr(this),this.i=null,a=Ei(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function am(a,h){Mr(a),h=Ei(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function lm(a,h){return Mr(a),h=Ei(a,h),a.g.has(h)}t.forEach=function(a,h){Mr(this),this.g.forEach(function(f,y){f.forEach(function(O){a.call(h,O,y,this)},this)},this)};function um(a,h){Mr(a);let f=[];if(typeof h=="string")lm(a,h)&&(f=f.concat(a.g.get(Ei(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}t.set=function(a,h){return Mr(this),this.i=null,a=Ei(this,a),lm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=um(this,a),a.length>0?String(a[0]):h):h};function cm(a,h,f){am(a,h),f.length>0&&(a.i=null,a.g.set(Ei(a,h),I(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var f=h[y];const O=ks(f);f=um(this,f);for(let b=0;b<f.length;b++){let z=O;f[b]!==""&&(z+="="+ks(f[b])),a.push(z)}}return this.i=a.join("&")};function hm(a){const h=new bs;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Ei(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function uI(a,h){h&&!a.j&&(Mr(a),a.i=null,a.g.forEach(function(f,y){const O=y.toLowerCase();y!=O&&(am(this,y),cm(this,O,f))},a)),a.j=h}function cI(a,h){const f=new Cs;if(o.Image){const y=new Image;y.onload=d(Fn,f,"TestLoadImage: loaded",!0,h,y),y.onerror=d(Fn,f,"TestLoadImage: error",!1,h,y),y.onabort=d(Fn,f,"TestLoadImage: abort",!1,h,y),y.ontimeout=d(Fn,f,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function hI(a,h){const f=new Cs,y=new AbortController,O=setTimeout(()=>{y.abort(),Fn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(b=>{clearTimeout(O),b.ok?Fn(f,"TestPingServer: ok",!0,h):Fn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Fn(f,"TestPingServer: error",!1,h)})}function Fn(a,h,f,y,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),y(f)}catch{}}function dI(){this.g=new GT}function vc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(vc,zp),vc.prototype.g=function(){return new _a(this.i,this.h)};function _a(a,h){Ye.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(_a,Ye),t=_a.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Ms(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ls(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ms(this)),this.g&&(this.readyState=3,Ms(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;dm(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function dm(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ls(this):Ms(this),this.readyState==3&&dm(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Ls(this))},t.Na=function(a){this.g&&(this.response=a,Ls(this))},t.ga=function(){this.g&&Ls(this)};function Ls(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ms(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Ms(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(_a.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function fm(a){let h="";return Q(a,function(f,y){h+=y,h+=":",h+=f,h+=`\r
`}),h}function Ec(a,h,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=fm(f),typeof a=="string"?f!=null&&ks(f):he(a,h,f))}function we(a){Ye.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(we,Ye);var fI=/^https?$/i,pI=["POST","PUT"];t=we.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Gp.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(b){pm(this,b);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var O in y)f.set(O,y[O]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const b of y.keys())f.set(b,y.get(b));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(b=>b.toLowerCase()=="content-type"),O=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(pI,h,void 0)>=0)||y||O||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,z]of f)this.g.setRequestHeader(b,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(b){pm(this,b)}};function pm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,mm(a),va(a)}function mm(a){a.A||(a.A=!0,st(a,"complete"),st(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,st(this,"complete"),st(this,"abort"),va(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),va(this,!0)),we.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?gm(this):this.Xa())},t.Xa=function(){gm(this)};function gm(a){if(a.h&&typeof s<"u"){if(a.v&&Un(a)==4)setTimeout(a.Ca.bind(a),0);else if(st(a,"readystatechange"),Un(a)==4){a.h=!1;try{const b=a.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var y;if(y=b===0){let z=String(a.D).match(sm)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),y=!fI.test(z?z.toLowerCase():"")}f=y}if(f)st(a,"complete"),st(a,"success");else{a.o=6;try{var O=Un(a)>2?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.ca()+"]",mm(a)}}finally{va(a)}}}}function va(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||st(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Un(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Un(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),KT(h)}};function ym(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function mI(a){const h={};a=(a.g&&Un(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(S(a[y]))continue;var f=ZT(a[y]);const O=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const b=h[O]||[];h[O]=b,b.push(f)}J(h,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function js(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function _m(a){this.za=0,this.i=[],this.j=new Cs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=js("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=js("baseRetryDelayMs",5e3,a),this.Za=js("retryDelaySeedMs",1e4,a),this.Ta=js("forwardChannelMaxRetries",2,a),this.va=js("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new em(a&&a.concurrentRequestLimit),this.Ba=new dI,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=_m.prototype,t.ka=8,t.I=1,t.connect=function(a,h,f,y){ot(0),this.W=a,this.H=h||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.J=Rm(this,null,this.W),wa(this)};function wc(a){if(vm(a),a.I==3){var h=a.V++,f=Zt(a.J);if(he(f,"SID",a.M),he(f,"RID",h),he(f,"TYPE","terminate"),Fs(a,f),h=new Mn(a,a.j,h),h.M=2,h.A=ya(Zt(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=Cm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),ga(h)}Am(a)}function Ea(a){a.g&&(Ic(a),a.g.cancel(),a.g=null)}function vm(a){Ea(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ta(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function wa(a){if(!tm(a.h)&&!a.m){a.m=!0;var h=a.Ea;V||_(),F||(V(),F=!0),E.add(h,a),a.D=0}}function gI(a,h){return nm(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Rs(c(a.Ea,a,h),xm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const O=new Mn(this,this.j,a);let b=this.o;if(this.U&&(b?(b=me(b),Or(b,this.U)):b=this.U),this.u!==null||this.R||(O.J=b,b=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=wm(this,O,h),f=Zt(this.J),he(f,"RID",a),he(f,"CVER",22),this.G&&he(f,"X-HTTP-Session-Id",this.G),Fs(this,f),b&&(this.R?h="headers="+ks(fm(b))+"&"+h:this.u&&Ec(f,this.u,b)),yc(this.h,O),this.Ra&&he(f,"TYPE","init"),this.S?(he(f,"$req",h),he(f,"SID","null"),O.U=!0,fc(O,f,null)):fc(O,f,h),this.I=2}}else this.I==3&&(a?Em(this,a):this.i.length==0||tm(this.h)||Em(this))};function Em(a,h){var f;h?f=h.l:f=a.V++;const y=Zt(a.J);he(y,"SID",a.M),he(y,"RID",f),he(y,"AID",a.K),Fs(a,y),a.u&&a.o&&Ec(y,a.u,a.o),f=new Mn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=wm(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),yc(a.h,f),fc(f,y,h)}function Fs(a,h){a.H&&Q(a.H,function(f,y){he(h,y,f)}),a.l&&Q({},function(f,y){he(h,y,f)})}function wm(a,h,f){f=Math.min(a.i.length,f);const y=a.l?c(a.l.Ka,a.l,a):null;e:{var O=a.i;let Z=-1;for(;;){const Oe=["count="+f];Z==-1?f>0?(Z=O[0].g,Oe.push("ofs="+Z)):Z=0:Oe.push("ofs="+Z);let le=!0;for(let Fe=0;Fe<f;Fe++){var b=O[Fe].g;const en=O[Fe].map;if(b-=Z,b<0)Z=Math.max(0,O[Fe].g-100),le=!1;else try{b="req"+b+"_"||"";try{var z=en instanceof Map?en:Object.entries(en);for(const[Fr,zn]of z){let Bn=zn;l(zn)&&(Bn=lc(zn)),Oe.push(b+Fr+"="+encodeURIComponent(Bn))}}catch(Fr){throw Oe.push(b+"type="+encodeURIComponent("_badmap")),Fr}}catch{y&&y(en)}}if(le){z=Oe.join("&");break e}}z=void 0}return a=a.i.splice(0,f),h.G=a,z}function Tm(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;V||_(),F||(V(),F=!0),E.add(h,a),a.A=0}}function Tc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Rs(c(a.Da,a),xm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Im(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Rs(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ot(10),Ea(this),Im(this))};function Ic(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Im(a){a.g=new Mn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Zt(a.na);he(h,"RID","rpc"),he(h,"SID",a.M),he(h,"AID",a.K),he(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&he(h,"TO",a.ia),he(h,"TYPE","xmlhttp"),Fs(a,h),a.u&&a.o&&Ec(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=ya(Zt(h)),f.u=null,f.R=!0,Xp(f,a)}t.Va=function(){this.C!=null&&(this.C=null,Ea(this),Tc(this),ot(19))};function Ta(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Sm(a,h){var f=null;if(a.g==h){Ta(a),Ic(a),a.g=null;var y=2}else if(gc(a.h,h))f=h.G,rm(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var O=a.D;y=pa(),st(y,new Hp(y,f)),wa(a)}else Tm(a);else if(O=h.m,O==3||O==0&&h.X>0||!(y==1&&gI(a,h)||y==2&&Tc(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),O){case 1:jr(a,5);break;case 4:jr(a,10);break;case 3:jr(a,6);break;default:jr(a,2)}}}function xm(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function jr(a,h){if(a.j.info("Error code "+h),h==2){var f=c(a.bb,a),y=a.Ua;const O=!y;y=new jn(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ns(y,"https"),ya(y),O?cI(y.toString(),f):hI(y.toString(),f)}else ot(2);a.I=0,a.l&&a.l.pa(h),Am(a),vm(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Am(a){if(a.I=0,a.ja=[],a.l){const h=im(a.h);(h.length!=0||a.i.length!=0)&&(A(a.ja,h),A(a.ja,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.oa()}}function Rm(a,h,f){var y=f instanceof jn?Zt(f):new jn(f);if(y.g!="")h&&(y.g=h+"."+y.g),Ds(y,y.u);else{var O=o.location;y=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;const b=new jn(null);y&&Ns(b,y),h&&(b.g=h),O&&Ds(b,O),f&&(b.h=f),y=b}return f=a.G,h=a.wa,f&&h&&he(y,f,h),he(y,"VER",a.ka),Fs(a,y),y}function Cm(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new we(new vc({ab:f})):new we(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function km(){}t=km.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ia(){}Ia.prototype.g=function(a,h){return new Et(a,h)};function Et(a,h){Ye.call(this),this.g=new _m(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!S(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!S(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new wi(this)}p(Et,Ye),Et.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){wc(this.g)},Et.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=lc(a),a=f);h.i.push(new nI(h.Ya++,a)),h.I==3&&wa(h)},Et.prototype.N=function(){this.g.l=null,delete this.j,wc(this.g),delete this.g,Et.Z.N.call(this)};function Pm(a){uc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Pm,uc);function Nm(){cc.call(this),this.status=1}p(Nm,cc);function wi(a){this.g=a}p(wi,km),wi.prototype.ra=function(){st(this.g,"a")},wi.prototype.qa=function(a){st(this.g,new Pm(a))},wi.prototype.pa=function(a){st(this.g,new Nm)},wi.prototype.oa=function(){st(this.g,"b")},Ia.prototype.createWebChannel=Ia.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,nw=function(){return new Ia},tw=function(){return pa()},ew=br,yd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ma.NO_ERROR=0,ma.TIMEOUT=8,ma.HTTP_ERROR=6,hl=ma,Kp.COMPLETE="complete",ZE=Kp,Bp.EventType=xs,xs.OPEN="a",xs.CLOSE="b",xs.ERROR="c",xs.MESSAGE="d",Ye.prototype.listen=Ye.prototype.J,to=Bp,we.prototype.listenOnce=we.prototype.K,we.prototype.getLastError=we.prototype.Ha,we.prototype.getLastErrorCode=we.prototype.ya,we.prototype.getStatus=we.prototype.ca,we.prototype.getResponseJson=we.prototype.La,we.prototype.getResponseText=we.prototype.la,we.prototype.send=we.prototype.ea,we.prototype.setWithCredentials=we.prototype.Fa,JE=we}).apply(typeof $a<"u"?$a:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s="12.12.0";function Fk(t){_s=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new bf("@firebase/firestore");function Ii(){return ai.logLevel}function W(t,...e){if(ai.logLevel<=te.DEBUG){const n=e.map(Hf);ai.debug(`Firestore (${_s}): ${t}`,...n)}}function On(t,...e){if(ai.logLevel<=te.ERROR){const n=e.map(Hf);ai.error(`Firestore (${_s}): ${t}`,...n)}}function li(t,...e){if(ai.logLevel<=te.WARN){const n=e.map(Hf);ai.warn(`Firestore (${_s}): ${t}`,...n)}}function Hf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,rw(t,r,n)}function rw(t,e,n){let r=`FIRESTORE (${_s}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw On(r),new Error(r)}function oe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||rw(e,i,r)}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Uk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class zk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Bk{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new An;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new An,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new An)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{l:r}),new iw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new et(e)}}class $k{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Wk{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new $k(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ry{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qk{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){oe(this.o===void 0,3512);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ry(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ry(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Hk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function _d(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return sh(i)===sh(s)?ne(i,s):sh(i)?1:-1}return ne(t.length,e.length)}const Kk=55296,Gk=57343;function sh(t){const e=t.charCodeAt(0);return e>=Kk&&e<=Gk}function os(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy="__name__";class rn{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&G(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return rn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof rn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=rn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ne(e.length,n.length)}static compareSegments(e,n){const r=rn.isNumericId(e),i=rn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?rn.extractNumericId(e).compare(rn.extractNumericId(n)):_d(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return pr.fromString(e.substring(4,e.length-2))}}class ue extends rn{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const Qk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends rn{construct(e,n,r){return new He(e,n,r)}static isValidIdentifier(e){return Qk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Cy}static keyField(){return new He([Cy])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new B(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new B(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(ue.fromString(e))}static fromName(e){return new H(ue.fromString(e).popFirst(5))}static empty(){return new H(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new ue(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(t,e,n){if(!n)throw new B(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Yk(t,e,n,r){if(e===!0&&r===!0)throw new B(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ky(t){if(!H.isDocumentKey(t))throw new B(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Py(t){if(H.isDocumentKey(t))throw new B(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ow(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Uu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G(12329,{type:typeof t})}function Lt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Uu(t);throw new B(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t,e){const n={typeString:t};return e&&(n.value=e),n}function oa(t,e){if(!ow(t))throw new B(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new B(L.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny=-62135596800,Dy=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Dy);return new fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Ny)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Dy}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(oa(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ny;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:Ne("string",fe._jsonSchemaVersion),seconds:Ne("number"),nanoseconds:Ne("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new fe(0,0))}static max(){return new Y(new fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=-1;function Xk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new fe(n+1,0):new fe(n,r));return new vr(i,H.empty(),e)}function Jk(t){return new vr(t.readTime,t.key,$o)}class vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vr(Y.min(),H.empty(),$o)}static max(){return new vr(Y.max(),H.empty(),$o)}}function Zk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==eP)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function nP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Es(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}zu.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=-1;function Bu(t){return t==null}function Xl(t){return t===0&&1/t==-1/0}function rP(t){return typeof t=="number"&&Number.isInteger(t)&&!Xl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw="";function iP(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Oy(e)),e=sP(t.get(n),e);return Oy(e)}function sP(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case aw:n+="";break;default:n+=s}}return n}function Oy(t){return t+aw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Pr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wa(this.root,e,this.comparator,!0)}}class Wa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??qe.RED,this.left=i??qe.EMPTY,this.right=s??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new by(this.data.getIterator())}getIteratorFrom(e){return new by(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Me(this.comparator);return n.data=e,n}}class by{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new St([])}unionWith(e){let n=new Me(He.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new St(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return os(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new uw("Invalid base64 string: "+s):s}}(e);return new Qe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const oP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Er(t){if(oe(!!t,39018),typeof t=="string"){let e=0;const n=oP.exec(t);if(oe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function wr(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw="server_timestamp",hw="__type__",dw="__previous_value__",fw="__local_write_time__";function Qf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[hw])==null?void 0:r.stringValue)===cw}function $u(t){const e=t.mapValue.fields[dw];return Qf(e)?$u(e):e}function Wo(t){const e=Er(t.mapValue.fields[fw].timestampValue);return new fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,n,r,i,s,o,l,u,c,d,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d,this.apiKey=p}}const Jl="(default)";class qo{constructor(e,n){this.projectId=e,this.database=n||Jl}static empty(){return new qo("","")}get isDefaultDatabase(){return this.database===Jl}isEqual(e){return e instanceof qo&&e.projectId===this.projectId&&e.database===this.database}}function lP(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new B(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qo(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw="__type__",uP="__max__",qa={mapValue:{}},mw="__vector__",Zl="value";function Tr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qf(t)?4:hP(t)?9007199254740991:cP(t)?10:11:G(28295,{value:t})}function pn(t,e){if(t===e)return!0;const n=Tr(t);if(n!==Tr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wo(t).isEqual(Wo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Er(i.timestampValue),l=Er(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return wr(i.bytesValue).isEqual(wr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return xe(i.geoPointValue.latitude)===xe(s.geoPointValue.latitude)&&xe(i.geoPointValue.longitude)===xe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return xe(i.integerValue)===xe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=xe(i.doubleValue),l=xe(s.doubleValue);return o===l?Xl(o)===Xl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return os(t.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Vy(o)!==Vy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!pn(o[u],l[u])))return!1;return!0}(t,e);default:return G(52216,{left:t})}}function Ho(t,e){return(t.values||[]).find(n=>pn(n,e))!==void 0}function as(t,e){if(t===e)return 0;const n=Tr(t),r=Tr(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=xe(s.integerValue||s.doubleValue),u=xe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Ly(t.timestampValue,e.timestampValue);case 4:return Ly(Wo(t),Wo(e));case 5:return _d(t.stringValue,e.stringValue);case 6:return function(s,o){const l=wr(s),u=wr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ne(l[c],u[c]);if(d!==0)return d}return ne(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ne(xe(s.latitude),xe(o.latitude));return l!==0?l:ne(xe(s.longitude),xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return My(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,I,A,k;const l=s.fields||{},u=o.fields||{},c=(m=l[Zl])==null?void 0:m.arrayValue,d=(I=u[Zl])==null?void 0:I.arrayValue,p=ne(((A=c==null?void 0:c.values)==null?void 0:A.length)||0,((k=d==null?void 0:d.values)==null?void 0:k.length)||0);return p!==0?p:My(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===qa.mapValue&&o===qa.mapValue)return 0;if(s===qa.mapValue)return 1;if(o===qa.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=_d(u[p],d[p]);if(m!==0)return m;const I=as(l[u[p]],c[d[p]]);if(I!==0)return I}return ne(u.length,d.length)}(t.mapValue,e.mapValue);default:throw G(23264,{he:n})}}function Ly(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=Er(t),r=Er(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function My(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=as(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function ls(t){return vd(t)}function vd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Er(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return wr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=vd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${vd(n.fields[o])}`;return i+"}"}(t.mapValue):G(61005,{value:t})}function dl(t){switch(Tr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=$u(t);return e?16+dl(e):16;case 5:return 2*t.stringValue.length;case 6:return wr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+dl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Pr(r.fields,(s,o)=>{i+=s.length+dl(o)}),i}(t.mapValue);default:throw G(13486,{value:t})}}function jy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ed(t){return!!t&&"integerValue"in t}function Yf(t){return!!t&&"arrayValue"in t}function Fy(t){return!!t&&"nullValue"in t}function Uy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fl(t){return!!t&&"mapValue"in t}function cP(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[pw])==null?void 0:r.stringValue)===mw}function go(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Pr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=go(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=go(t.arrayValue.values[n]);return e}return{...t}}function hP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===uP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!fl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=go(n)}setAll(e){let n=He.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=go(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());fl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];fl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Pr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mt(go(this.value))}}function gw(t){const e=[];return Pr(t.fields,(n,r)=>{const i=new He([n]);if(fl(r)){const s=gw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new St(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new nt(e,0,Y.min(),Y.min(),Y.min(),mt.empty(),0)}static newFoundDocument(e,n,r,i){return new nt(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new nt(e,2,n,Y.min(),Y.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,Y.min(),Y.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n){this.position=e,this.inclusive=n}}function zy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=as(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function By(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n="asc"){this.field=e,this.dir=n}}function dP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{}class Pe extends yw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new pP(e,n,r):n==="array-contains"?new yP(e,r):n==="in"?new _P(e,r):n==="not-in"?new vP(e,r):n==="array-contains-any"?new EP(e,r):new Pe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new mP(e,r):new gP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(as(n,this.value)):n!==null&&Tr(this.value)===Tr(n)&&this.matchesComparison(as(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jt extends yw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Jt(e,n)}matches(e){return _w(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function _w(t){return t.op==="and"}function vw(t){return fP(t)&&_w(t)}function fP(t){for(const e of t.filters)if(e instanceof Jt)return!1;return!0}function wd(t){if(t instanceof Pe)return t.field.canonicalString()+t.op.toString()+ls(t.value);if(vw(t))return t.filters.map(e=>wd(e)).join(",");{const e=t.filters.map(n=>wd(n)).join(",");return`${t.op}(${e})`}}function Ew(t,e){return t instanceof Pe?function(r,i){return i instanceof Pe&&r.op===i.op&&r.field.isEqual(i.field)&&pn(r.value,i.value)}(t,e):t instanceof Jt?function(r,i){return i instanceof Jt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Ew(o,i.filters[l]),!0):!1}(t,e):void G(19439)}function ww(t){return t instanceof Pe?function(n){return`${n.field.canonicalString()} ${n.op} ${ls(n.value)}`}(t):t instanceof Jt?function(n){return n.op.toString()+" {"+n.getFilters().map(ww).join(" ,")+"}"}(t):"Filter"}class pP extends Pe{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class mP extends Pe{constructor(e,n){super(e,"in",n),this.keys=Tw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gP extends Pe{constructor(e,n){super(e,"not-in",n),this.keys=Tw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Tw(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class yP extends Pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Yf(n)&&Ho(n.arrayValue,this.value)}}class _P extends Pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ho(this.value.arrayValue,n)}}class vP extends Pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ho(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ho(this.value.arrayValue,n)}}class EP extends Pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Yf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ho(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function $y(t,e=null,n=[],r=[],i=null,s=null,o=null){return new wP(t,e,n,r,i,s,o)}function Xf(t){const e=X(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>wd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Bu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ls(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ls(r)).join(",")),e.Te=n}return e.Te}function Jf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ew(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!By(t.startAt,e.startAt)&&By(t.endAt,e.endAt)}function Td(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function TP(t,e,n,r,i,s,o,l){return new aa(t,e,n,r,i,s,o,l)}function Wu(t){return new aa(t)}function Wy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function IP(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Iw(t){return t.collectionGroup!==null}function yo(t){const e=X(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Me(He.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new tu(s,r))}),n.has(He.keyField().canonicalString())||e.Ee.push(new tu(He.keyField(),r))}return e.Ee}function hn(t){const e=X(t);return e.Ie||(e.Ie=SP(e,yo(t))),e.Ie}function SP(t,e){if(t.limitType==="F")return $y(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new tu(i.field,s)});const n=t.endAt?new eu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new eu(t.startAt.position,t.startAt.inclusive):null;return $y(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Id(t,e){const n=t.filters.concat([e]);return new aa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function nu(t,e,n){return new aa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function qu(t,e){return Jf(hn(t),hn(e))&&t.limitType===e.limitType}function Sw(t){return`${Xf(hn(t))}|lt:${t.limitType}`}function Si(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>ww(i)).join(", ")}]`),Bu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ls(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ls(i)).join(",")),`Target(${r})`}(hn(t))}; limitType=${t.limitType})`}function Hu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of yo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=zy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,yo(r),i)||r.endAt&&!function(o,l,u){const c=zy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,yo(r),i))}(t,e)}function xP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xw(t){return(e,n)=>{let r=!1;for(const i of yo(t)){const s=AP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function AP(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?as(u,c):G(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Pr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return lw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=new Ee(H.comparator);function Vn(){return RP}const Aw=new Ee(H.comparator);function no(...t){let e=Aw;for(const n of t)e=e.insert(n.key,n);return e}function Rw(t){let e=Aw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Kr(){return _o()}function Cw(){return _o()}function _o(){return new yi(t=>t.toString(),(t,e)=>t.isEqual(e))}const CP=new Ee(H.comparator),kP=new Me(H.comparator);function re(...t){let e=kP;for(const n of t)e=e.add(n);return e}const PP=new Me(ne);function NP(){return PP}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xl(e)?"-0":e}}function kw(t){return{integerValue:""+t}}function Pw(t,e){return rP(e)?kw(e):Zf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(){this._=void 0}}function DP(t,e,n){return t instanceof ru?function(i,s){const o={fields:{[hw]:{stringValue:cw},[fw]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Qf(s)&&(s=$u(s)),s&&(o.fields[dw]=s),{mapValue:o}}(n,e):t instanceof Ko?Dw(t,e):t instanceof Go?Ow(t,e):function(i,s){const o=Nw(i,s),l=qy(o)+qy(i.Ae);return Ed(o)&&Ed(i.Ae)?kw(l):Zf(i.serializer,l)}(t,e)}function OP(t,e,n){return t instanceof Ko?Dw(t,e):t instanceof Go?Ow(t,e):n}function Nw(t,e){return t instanceof Qo?function(r){return Ed(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ru extends Ku{}class Ko extends Ku{constructor(e){super(),this.elements=e}}function Dw(t,e){const n=Vw(e);for(const r of t.elements)n.some(i=>pn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Go extends Ku{constructor(e){super(),this.elements=e}}function Ow(t,e){let n=Vw(e);for(const r of t.elements)n=n.filter(i=>!pn(i,r));return{arrayValue:{values:n}}}class Qo extends Ku{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function qy(t){return xe(t.integerValue||t.doubleValue)}function Vw(t){return Yf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(e,n){this.field=e,this.transform=n}}function bP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ko&&i instanceof Ko||r instanceof Go&&i instanceof Go?os(r.elements,i.elements,pn):r instanceof Qo&&i instanceof Qo?pn(r.Ae,i.Ae):r instanceof ru&&i instanceof ru}(t.transform,e.transform)}class LP{constructor(e,n){this.version=e,this.transformResults=n}}class Gt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Gt}static exists(e){return new Gt(void 0,e)}static updateTime(e){return new Gt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gu{}function bw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ep(t.key,Gt.none()):new la(t.key,t.data,Gt.none());{const n=t.data,r=mt.empty();let i=new Me(He.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Nr(t.key,r,new St(i.toArray()),Gt.none())}}function MP(t,e,n){t instanceof la?function(i,s,o){const l=i.value.clone(),u=Ky(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Nr?function(i,s,o){if(!pl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Ky(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Lw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function vo(t,e,n,r){return t instanceof la?function(s,o,l,u){if(!pl(s.precondition,o))return l;const c=s.value.clone(),d=Gy(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Nr?function(s,o,l,u){if(!pl(s.precondition,o))return l;const c=Gy(s.fieldTransforms,u,o),d=o.data;return d.setAll(Lw(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return pl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function jP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Nw(r.transform,i||null);s!=null&&(n===null&&(n=mt.empty()),n.set(r.field,s))}return n||null}function Hy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&os(r,i,(s,o)=>bP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class la extends Gu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Nr extends Gu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Lw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ky(t,e,n){const r=new Map;oe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,OP(o,l,n[i]))}return r}function Gy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,DP(s,o,e))}return r}class ep extends Gu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class FP extends Gu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&MP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=vo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=vo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Cw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=bw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&os(this.mutations,e.mutations,(n,r)=>Hy(n,r))&&os(this.baseMutations,e.baseMutations,(n,r)=>Hy(n,r))}}class tp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return CP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new tp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,ie;function $P(t){switch(t){case L.OK:return G(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return G(15467,{code:t})}}function Mw(t){if(t===void 0)return On("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ce.OK:return L.OK;case Ce.CANCELLED:return L.CANCELLED;case Ce.UNKNOWN:return L.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return L.INTERNAL;case Ce.UNAVAILABLE:return L.UNAVAILABLE;case Ce.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ce.NOT_FOUND:return L.NOT_FOUND;case Ce.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ce.ABORTED:return L.ABORTED;case Ce.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ce.DATA_LOSS:return L.DATA_LOSS;default:return G(39323,{code:t})}}(ie=Ce||(Ce={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP=new pr([4294967295,4294967295],0);function Qy(t){const e=WP().encode(t),n=new XE;return n.update(e),new Uint8Array(n.digest())}function Yy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new pr([n,r],0),new pr([i,s],0)]}class np{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ro(`Invalid padding: ${n}`);if(r<0)throw new ro(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ro(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ro(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=pr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(pr.fromNumber(r)));return i.compare(qP)===1&&(i=new pr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Qy(e),[r,i]=Yy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new np(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Qy(e),[r,i]=Yy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ro extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ua.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Qu(Y.min(),i,new Ee(ne),Vn(),re())}}class ua{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ua(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class jw{constructor(e,n){this.targetId=e,this.Ce=n}}class Fw{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Xy{constructor(){this.ve=0,this.Fe=Jy(),this.Me=Qe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),r=re();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G(38017,{changeType:s})}}),new ua(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Jy()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class HP{constructor(e){this.Ge=e,this.ze=new Map,this.je=Vn(),this.Je=Ha(),this.He=Ha(),this.Ze=new Ee(ne)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:G(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Td(s))if(r===0){const o=new H(s.path);this.et(n,o,nt.newNoDocument(o,Y.min()))}else oe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=wr(r).toUint8Array()}catch(u){if(u instanceof uw)return li("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new np(o,i,s)}catch(u){return li(u instanceof ro?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Td(l.target)){const u=new H(l.target.path);this.Et(u).has(o)||this.It(o,u)||this.et(o,u,nt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=re();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Qu(e,n,this.Ze,this.je,r);return this.je=Vn(),this.Je=Ha(),this.He=Ha(),this.Ze=new Ee(ne),i}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,n)?i.Ke(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Xy,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Me(ne),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Me(ne),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Xy),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ha(){return new Ee(H.comparator)}function Jy(){return new Ee(H.comparator)}const KP={asc:"ASCENDING",desc:"DESCENDING"},GP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},QP={and:"AND",or:"OR"};class YP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sd(t,e){return t.useProto3Json||Bu(e)?e:{value:e}}function iu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Uw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function XP(t,e){return iu(t,e.toTimestamp())}function dn(t){return oe(!!t,49232),Y.fromTimestamp(function(n){const r=Er(n);return new fe(r.seconds,r.nanos)}(t))}function rp(t,e){return xd(t,e).canonicalString()}function xd(t,e){const n=function(i){return new ue(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function zw(t){const e=ue.fromString(t);return oe(Hw(e),10190,{key:e.toString()}),e}function Ad(t,e){return rp(t.databaseId,e.path)}function oh(t,e){const n=zw(e);if(n.get(1)!==t.databaseId.projectId)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H($w(n))}function Bw(t,e){return rp(t.databaseId,e)}function JP(t){const e=zw(t);return e.length===4?ue.emptyPath():$w(e)}function Rd(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $w(t){return oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Zy(t,e,n){return{name:Ad(t,e),fields:n.value.mapValue.fields}}function ZP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(oe(d===void 0||typeof d=="string",58123),Qe.fromBase64String(d||"")):(oe(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Qe.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?L.UNKNOWN:Mw(c.code);return new B(d,c.message||"")}(o);n=new Fw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=oh(t,r.document.name),s=dn(r.document.updateTime),o=r.document.createTime?dn(r.document.createTime):Y.min(),l=new mt({mapValue:{fields:r.document.fields}}),u=nt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new ml(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=oh(t,r.document),s=r.readTime?dn(r.readTime):Y.min(),o=nt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new ml([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=oh(t,r.document),s=r.removedTargetIds||[];n=new ml([],s,i,null)}else{if(!("filter"in e))return G(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new BP(i,s),l=r.targetId;n=new jw(l,o)}}return n}function e2(t,e){let n;if(e instanceof la)n={update:Zy(t,e.key,e.value)};else if(e instanceof ep)n={delete:Ad(t,e.key)};else if(e instanceof Nr)n={update:Zy(t,e.key,e.data),updateMask:u2(e.fieldMask)};else{if(!(e instanceof FP))return G(16599,{dt:e.type});n={verify:Ad(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ru)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ko)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Go)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Qo)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw G(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:XP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G(27497)}(t,e.precondition)),n}function t2(t,e){return t&&t.length>0?(oe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?dn(i.updateTime):dn(s);return o.isEqual(Y.min())&&(o=dn(s)),new LP(o,i.transformResults||[])}(n,e))):[]}function n2(t,e){return{documents:[Bw(t,e.path)]}}function r2(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Bw(t,i);const s=function(c){if(c.length!==0)return qw(Jt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:xi(m.field),direction:o2(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Sd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function i2(t){let e=JP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=Ww(p);return m instanceof Jt&&vw(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(A){return new tu(Ai(A.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Bu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,I=p.values||[];return new eu(I,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,I=p.values||[];return new eu(I,m)}(n.endAt)),TP(e,i,o,s,l,"F",u,c)}function s2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ww(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ai(n.unaryFilter.field);return Pe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ai(n.unaryFilter.field);return Pe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ai(n.unaryFilter.field);return Pe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ai(n.unaryFilter.field);return Pe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(t):t.fieldFilter!==void 0?function(n){return Pe.create(Ai(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Jt.create(n.compositeFilter.filters.map(r=>Ww(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(n.compositeFilter.op))}(t):G(30097,{filter:t})}function o2(t){return KP[t]}function a2(t){return GP[t]}function l2(t){return QP[t]}function xi(t){return{fieldPath:t.canonicalString()}}function Ai(t){return He.fromServerFormat(t.fieldPath)}function qw(t){return t instanceof Pe?function(n){if(n.op==="=="){if(Uy(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NAN"}};if(Fy(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Uy(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NOT_NAN"}};if(Fy(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xi(n.field),op:a2(n.op),value:n.value}}}(t):t instanceof Jt?function(n){const r=n.getFilters().map(i=>qw(i));return r.length===1?r[0]:{compositeFilter:{op:l2(n.op),filters:r}}}(t):G(54877,{filter:t})}function u2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Hw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function Kw(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=Qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(e){this.yt=e}}function h2(t){const e=i2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(){this.bn=new f2}addToCollectionParentIndex(e,n){return this.bn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(vr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(vr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class f2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Me(ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Me(ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Gw=41943040;class dt{static withCacheSize(e){return new dt(e,dt.DEFAULT_COLLECTION_PERCENTILE,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dt.DEFAULT_COLLECTION_PERCENTILE=10,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dt.DEFAULT=new dt(Gw,dt.DEFAULT_COLLECTION_PERCENTILE,dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dt.DISABLED=new dt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new us(0)}static ar(){return new us(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_="LruGarbageCollector",p2=1048576;function n_([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class m2{constructor(e){this.Pr=e,this.buffer=new Me(n_),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();n_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class g2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){W(t_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Es(n)?W(t_,"Ignoring IndexedDB error during garbage collection: ",n):await vs(n)}await this.Ar(3e5)})}}class y2{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(zu.ce);const r=new m2(n);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(e_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),e_):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Ii()<=te.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function _2(t,e){return new y2(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(){this.changes=new yi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&vo(r.mutation,i,St.empty(),fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=Kr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=no();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Vn();const o=_o(),l=function(){return _o()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Nr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),vo(d.mutation,c,d.mutation.getFieldMask(),fe.now())):o.set(c.key,St.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new E2(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=_o();let i=new Ee((o,l)=>o-l),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||St.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||re()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=Cw();d.forEach(m=>{if(!s.has(m)){const I=bw(n.get(m),r.get(m));I!==null&&p.set(m,I),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return IP(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Iw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Kr());let l=$o,u=s;return o.next(c=>M.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,re())).next(d=>({batchId:l,changes:Rw(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=no();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=no();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const c=function(p,m){return new aa(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,nt.newInvalidDocument(d)))});let l=no();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&vo(d.mutation,c,St.empty(),fe.now()),Hu(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:dn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:h2(i.bundledQuery),readTime:dn(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(){this.overlays=new Ee(H.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Kr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Kr(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Kr(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Kr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return M.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new zP(n,r));let s=this.Lr.get(n);s===void 0&&(s=re(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(){this.kr=new Me(Ue.qr),this.Kr=new Me(Ue.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Ue(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new H(new ue([])),r=new Ue(n,e),i=new Ue(n,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new H(new ue([])),r=new Ue(n,e),i=new Ue(n,e+1);let s=re();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ue(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return H.comparator(e.key,n.key)||ne(e.Jr,n.Jr)}static Ur(e,n){return ne(e.Jr,n.Jr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Me(Ue.qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new UP(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Hr=this.Hr.add(new Ue(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Gf:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),i=new Ue(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const l=this.Zr(o.Jr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Me(ne);return n.forEach(i=>{const s=new Ue(i,0),o=new Ue(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],l=>{r=r.add(l.Jr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Ue(new H(s),0);let l=new Me(ne);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Jr)),!0)},o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return M.forEach(n.mutations,i=>{const s=new Ue(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Ue(n,0),i=this.Hr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e){this.ti=e,this.docs=function(){return new Ee(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=Vn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():nt.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Vn();const o=n.path,l=new H(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Zk(Jk(d),r)<=0||(i.has(d.key)||Hu(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new R2(this)}getSize(e){return M.resolve(this.size)}}class R2 extends v2{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(e){this.persistence=e,this.ri=new yi(n=>Xf(n),Jf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ii=0,this.si=new ip,this.targetCount=0,this.oi=us._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new us(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,n){this._i={},this.overlays={},this.ai=new zu(0),this.ui=!1,this.ui=!0,this.ci=new S2,this.referenceDelegate=e(this),this.li=new C2(this),this.indexManager=new d2,this.remoteDocumentCache=function(i){return new A2(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new c2(n),this.Pi=new T2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new I2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new x2(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new k2(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ei(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class k2 extends tP{constructor(e){super(),this.currentSequenceNumber=e}}class sp{constructor(e){this.persistence=e,this.Ri=new ip,this.Ai=null}static Vi(e){return new sp(e)}get di(){if(this.Ai)return this.Ai;throw G(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const i=H.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class su{constructor(e,n){this.persistence=e,this.fi=new yi(r=>iP(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=_2(this,n)}static Vi(e,n){return new su(e,n)}Ti(){}Ei(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=dl(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=i}static Is(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new op(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return oA()?8:nP(it())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new P2;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(Ii()<=te.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Si(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Ii()<=te.DEBUG&&W("QueryEngine","Query:",Si(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Ii()<=te.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Si(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hn(n))):M.resolve())}gs(e,n){if(Wy(n))return M.resolve(null);let r=hn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=nu(n,null,"F"),r=hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,nu(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,i){return Wy(n)||i.isEqual(Y.min())?M.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?M.resolve(null):(Ii()<=te.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Si(n)),this.Ds(e,o,n,Xk(i,$o)).next(l=>l))})}Ss(e,n){let r=new Me(xw(e));return n.forEach((i,s)=>{Hu(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return Ii()<=te.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Si(n)),this.fs.getDocumentsMatchingQuery(e,n,vr.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="LocalStore",D2=3e8;class O2{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Ee(ne),this.Fs=new yi(s=>Xf(s),Jf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new w2(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function V2(t,e,n,r){return new O2(t,e,n,r)}async function Yw(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=re();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function b2(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let I=M.resolve();return m.forEach(A=>{I=I.next(()=>d.getEntry(u,A)).next(k=>{const N=c.docVersions.get(A);oe(N!==null,48541),k.version.compareTo(N)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Xw(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function L2(t,e){const n=X(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.li.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.li.addMatchingKeys(s,d.addedDocuments,p)));let I=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(Qe.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):d.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(d.resumeToken,r)),i=i.insert(p,I),function(k,N,w){return k.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=D2?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,I,d)&&l.push(n.li.updateTargetData(s,I))});let u=Vn(),c=re();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(M2(s,o,e.documentUpdates).next(d=>{u=d.Bs,c=d.Ls})),!r.isEqual(Y.min())){const d=n.li.getLastRemoteSnapshotVersion(s).next(p=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.vs=i,s))}function M2(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Vn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W(ap,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function j2(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Gf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function F2(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Cd(t,e,n){const r=X(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Es(o))throw o;W(ap,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function r_(t,e,n){const r=X(t);let i=Y.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=X(u),m=p.Fs.get(d);return m!==void 0?M.resolve(p.vs.get(m)):p.li.getTargetData(c,d)}(r,o,hn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:re())).next(l=>(U2(r,xP(e),l),{documents:l,ks:s})))}function U2(t,e,n){let r=t.Ms.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class i_{constructor(){this.activeTargetIds=NP()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class z2{constructor(){this.vo=new i_,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new i_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="ConnectivityMonitor";class o_{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){W(s_,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){W(s_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ka=null;function kd(){return Ka===null?Ka=function(){return 268435456+Math.round(2147483648*Math.random())}():Ka++,"0x"+Ka.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="RestConnection",$2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class W2{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Jl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=kd(),l=this.Qo(e,n.toUriEncodedString());W(ah,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:c}=new URL(l),d=ms(c);return this.zo(e,l,u,r,d).then(p=>(W(ah,`Received RPC '${e}' ${o}: `,p),p),p=>{throw li(ah,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_s}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=$2[e];let i=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection",Gs=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Qi extends W2{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Qi.c_){const e=tw();Gs(e,ew.STAT_EVENT,n=>{n.stat===yd.PROXY?W(Ze,"STAT_EVENT: detected buffering proxy"):n.stat===yd.NOPROXY&&W(Ze,"STAT_EVENT: detected no buffering proxy")}),Qi.c_=!0}}zo(e,n,r,i,s){const o=kd();return new Promise((l,u)=>{const c=new JE;c.setWithCredentials(!0),c.listenOnce(ZE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case hl.NO_ERROR:const p=c.getResponseJson();W(Ze,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case hl.TIMEOUT:W(Ze,`RPC '${e}' ${o} timed out`),u(new B(L.DEADLINE_EXCEEDED,"Request time out"));break;case hl.HTTP_ERROR:const m=c.getStatus();if(W(Ze,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let I=c.getResponseJson();Array.isArray(I)&&(I=I[0]);const A=I==null?void 0:I.error;if(A&&A.status&&A.message){const k=function(w){const v=w.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(v)>=0?v:L.UNKNOWN}(A.status);u(new B(k,A.message))}else u(new B(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new B(L.UNAVAILABLE,"Connection failed."));break;default:G(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{W(Ze,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);W(Ze,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=kd(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");W(Ze,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);this.E_(d);let p=!1,m=!1;const I=new q2({Jo:A=>{m?W(Ze,`Not sending because RPC '${e}' stream ${i} is closed:`,A):(p||(W(Ze,`Opening RPC '${e}' stream ${i} transport.`),d.open(),p=!0),W(Ze,`RPC '${e}' stream ${i} sending:`,A),d.send(A))},Ho:()=>d.close()});return Gs(d,to.EventType.OPEN,()=>{m||(W(Ze,`RPC '${e}' stream ${i} transport opened.`),I.i_())}),Gs(d,to.EventType.CLOSE,()=>{m||(m=!0,W(Ze,`RPC '${e}' stream ${i} transport closed`),I.o_(),this.I_(d))}),Gs(d,to.EventType.ERROR,A=>{m||(m=!0,li(Ze,`RPC '${e}' stream ${i} transport errored. Name:`,A.name,"Message:",A.message),I.o_(new B(L.UNAVAILABLE,"The operation could not be completed")))}),Gs(d,to.EventType.MESSAGE,A=>{var k;if(!m){const N=A.data[0];oe(!!N,16349);const w=N,v=(w==null?void 0:w.error)||((k=w[0])==null?void 0:k.error);if(v){W(Ze,`RPC '${e}' stream ${i} received error:`,v);const x=v.status;let D=function(E){const _=Ce[E];if(_!==void 0)return Mw(_)}(x),V=v.message;x==="NOT_FOUND"&&V.includes("database")&&V.includes("does not exist")&&V.includes(this.databaseId.database)&&li(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=L.INTERNAL,V="Unknown error status: "+x+" with message "+v.message),m=!0,I.o_(new B(D,V)),d.close()}else W(Ze,`RPC '${e}' stream ${i} received:`,N),I.__(N)}}),Qi.u_(),setTimeout(()=>{I.s_()},0),I}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return nw()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H2(t){return new Qi(t)}function lh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(t){return new YP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qi.c_=!1;class Jw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="PersistentStream";class Zw{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Jw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(On(n.toString()),On("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new B(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return W(a_,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(W(a_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class K2 extends Zw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=ZP(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?dn(o.readTime):Y.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=Rd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Td(u)?{documents:n2(s,u)}:{query:r2(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Uw(s,o.resumeToken);const c=Sd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=iu(s,o.snapshotVersion.toTimestamp());const c=Sd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=s2(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=Rd(this.serializer),n.removeTarget=e,this.q_(n)}}class G2 extends Zw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=t2(e.writeResults,e.commitTime),r=dn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Rd(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>e2(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{}class Y2 extends Q2{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,xd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(L.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,xd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function X2(t,e,n,r){return new Y2(t,e,n,r)}class J2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(On(n),this.aa=!1):W("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui="RemoteStore";class Z2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{_i(this)&&(W(ui,"Restarting streams for network reachability change."),await async function(u){const c=X(u);c.Ia.add(4),await ca(c),c.Va.set("Unknown"),c.Ia.delete(4),await Xu(c)}(this))})}),this.Va=new J2(r,i)}}async function Xu(t){if(_i(t))for(const e of t.Ra)await e(!0)}async function ca(t){for(const e of t.Ra)await e(!1)}function eT(t,e){const n=X(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),hp(n)?cp(n):ws(n).O_()&&up(n,e))}function lp(t,e){const n=X(t),r=ws(n);n.Ea.delete(e),r.O_()&&tT(n,e),n.Ea.size===0&&(r.O_()?r.L_():_i(n)&&n.Va.set("Unknown"))}function up(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ws(t).Z_(e)}function tT(t,e){t.da.$e(e),ws(t).X_(e)}function cp(t){t.da=new HP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ws(t).start(),t.Va.ua()}function hp(t){return _i(t)&&!ws(t).x_()&&t.Ea.size>0}function _i(t){return X(t).Ia.size===0}function nT(t){t.da=void 0}async function eN(t){t.Va.set("Online")}async function tN(t){t.Ea.forEach((e,n)=>{up(t,e)})}async function nN(t,e){nT(t),hp(t)?(t.Va.ha(e),cp(t)):t.Va.set("Unknown")}async function rN(t,e,n){if(t.Va.set("Online"),e instanceof Fw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ea.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ea.delete(l),i.da.removeTarget(l))}(t,e)}catch(r){W(ui,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ou(t,r)}else if(e instanceof ml?t.da.Xe(e):e instanceof jw?t.da.st(e):t.da.tt(e),!n.isEqual(Y.min()))try{const r=await Xw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.da.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ea.get(c);d&&s.Ea.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ea.get(u);if(!d)return;s.Ea.set(u,d.withResumeToken(Qe.EMPTY_BYTE_STRING,d.snapshotVersion)),tT(s,u);const p=new nr(d.target,u,c,d.sequenceNumber);up(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W(ui,"Failed to raise snapshot:",r),await ou(t,r)}}async function ou(t,e,n){if(!Es(e))throw e;t.Ia.add(1),await ca(t),t.Va.set("Offline"),n||(n=()=>Xw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(ui,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Xu(t)})}function rT(t,e){return e().catch(n=>ou(t,n,e))}async function Ju(t){const e=X(t),n=Ir(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Gf;for(;iN(e);)try{const i=await j2(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,sN(e,i)}catch(i){await ou(e,i)}iT(e)&&sT(e)}function iN(t){return _i(t)&&t.Ta.length<10}function sN(t,e){t.Ta.push(e);const n=Ir(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function iT(t){return _i(t)&&!Ir(t).x_()&&t.Ta.length>0}function sT(t){Ir(t).start()}async function oN(t){Ir(t).ra()}async function aN(t){const e=Ir(t);for(const n of t.Ta)e.ea(n.mutations)}async function lN(t,e,n){const r=t.Ta.shift(),i=tp.from(r,e,n);await rT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ju(t)}async function uN(t,e){e&&Ir(t).Y_&&await async function(r,i){if(function(o){return $P(o)&&o!==L.ABORTED}(i.code)){const s=r.Ta.shift();Ir(r).B_(),await rT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ju(r)}}(t,e),iT(t)&&sT(t)}async function l_(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),W(ui,"RemoteStore received new credentials");const r=_i(n);n.Ia.add(3),await ca(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Xu(n)}async function cN(t,e){const n=X(t);e?(n.Ia.delete(2),await Xu(n)):e||(n.Ia.add(2),await ca(n),n.Va.set("Unknown"))}function ws(t){return t.ma||(t.ma=function(n,r,i){const s=X(n);return s.sa(),new K2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:eN.bind(null,t),Yo:tN.bind(null,t),t_:nN.bind(null,t),H_:rN.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),hp(t)?cp(t):t.Va.set("Unknown")):(await t.ma.stop(),nT(t))})),t.ma}function Ir(t){return t.fa||(t.fa=function(n,r,i){const s=X(n);return s.sa(),new G2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:oN.bind(null,t),t_:uN.bind(null,t),ta:aN.bind(null,t),na:lN.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Ju(t)):(await t.fa.stop(),t.Ta.length>0&&(W(ui,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new An,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new dp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fp(t,e){if(On("AsyncQueue",`${e}: ${t}`),Es(t))return new B(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{static emptySet(e){return new Yi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=no(),this.sortedSet=new Ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Yi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Yi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(){this.ga=new Ee(H.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):G(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class cs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new cs(e,n,Yi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class dN{constructor(){this.queries=c_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=c_(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new B(L.ABORTED,"Firestore shutting down"))}}function c_(){return new yi(t=>Sw(t),qu)}async function pp(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new hN,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=fp(o,`Initialization of query '${Si(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&gp(n)}async function mp(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function fN(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&gp(n)}function pN(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function gp(t){t.Ca.forEach(e=>{e.next()})}var Pd,h_;(h_=Pd||(Pd={})).Ma="default",h_.Cache="cache";class yp{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new cs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Pd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e){this.key=e}}class aT{constructor(e){this.key=e}}class mN{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=re(),this.mutatedKeys=re(),this.eu=xw(e),this.tu=new Yi(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new u_,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),I=Hu(this.query,p)?p:null,A=!!m&&this.mutatedKeys.has(m.key),k=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let N=!1;m&&I?m.data.isEqual(I.data)?A!==k&&(r.track({type:3,doc:I}),N=!0):this.su(m,I)||(r.track({type:2,doc:I}),N=!0,(u&&this.eu(I,u)>0||c&&this.eu(I,c)<0)&&(l=!0)):!m&&I?(r.track({type:0,doc:I}),N=!0):m&&!I&&(r.track({type:1,doc:m}),N=!0,(u||c)&&(l=!0)),N&&(I?(o=o.add(I),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,bs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,p)=>function(I,A){const k=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{Vt:N})}};return k(I)-k(A)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,c=u!==this.Xa;return this.Xa=u,o.length!==0||c?{snapshot:new cs(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new u_,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=re(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new aT(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new oT(r))}),n}cu(e){this.Za=e.ks,this.Ya=re();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return cs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const _p="SyncEngine";class gN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class yN{constructor(e){this.key=e,this.hu=!1}}class _N{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new yi(l=>Sw(l),qu),this.Eu=new Map,this.Iu=new Set,this.Ru=new Ee(H.comparator),this.Au=new Map,this.Vu=new ip,this.du={},this.mu=new Map,this.fu=us.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function vN(t,e,n=!0){const r=fT(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await lT(r,e,n,!0),i}async function EN(t,e){const n=fT(t);await lT(n,e,!0,!1)}async function lT(t,e,n,r){const i=await F2(t.localStore,hn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await wN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&eT(t.remoteStore,i),l}async function wN(t,e,n,r,i){t.pu=(p,m,I)=>async function(k,N,w,v){let x=N.view.ru(w);x.bs&&(x=await r_(k.localStore,N.query,!1).then(({documents:E})=>N.view.ru(E,x)));const D=v&&v.targetChanges.get(N.targetId),V=v&&v.targetMismatches.get(N.targetId)!=null,F=N.view.applyChanges(x,k.isPrimaryClient,D,V);return f_(k,N.targetId,F.au),F.snapshot}(t,p,m,I);const s=await r_(t.localStore,e,!0),o=new mN(e,s.ks),l=o.ru(s.documents),u=ua.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);f_(t,n,c.au);const d=new gN(e,n,o);return t.Tu.set(e,d),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),c.snapshot}async function TN(t,e,n){const r=X(t),i=r.Tu.get(e),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter(o=>!qu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Cd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&lp(r.remoteStore,i.targetId),Nd(r,i.targetId)}).catch(vs)):(Nd(r,i.targetId),await Cd(r.localStore,i.targetId,!0))}async function IN(t,e){const n=X(t),r=n.Tu.get(e),i=n.Eu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),lp(n.remoteStore,r.targetId))}async function SN(t,e,n){const r=NN(t);try{const i=await function(o,l){const u=X(o),c=fe.now(),d=l.reduce((I,A)=>I.add(A.key),re());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",I=>{let A=Vn(),k=re();return u.xs.getEntries(I,d).next(N=>{A=N,A.forEach((w,v)=>{v.isValidDocument()||(k=k.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(I,A)).next(N=>{p=N;const w=[];for(const v of l){const x=jP(v,p.get(v.key).overlayedDocument);x!=null&&w.push(new Nr(v.key,x,gw(x.value.mapValue),Gt.exists(!0)))}return u.mutationQueue.addMutationBatch(I,c,w,l)}).next(N=>{m=N;const w=N.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(I,N.batchId,w)})}).then(()=>({batchId:m.batchId,changes:Rw(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.du[o.currentUser.toKey()];c||(c=new Ee(ne)),c=c.insert(l,u),o.du[o.currentUser.toKey()]=c}(r,i.batchId,n),await ha(r,i.changes),await Ju(r.remoteStore)}catch(i){const s=fp(i,"Failed to persist write");n.reject(s)}}async function uT(t,e){const n=X(t);try{const r=await L2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?oe(o.hu,14607):i.removedDocuments.size>0&&(oe(o.hu,42227),o.hu=!1))}),await ha(n,r,e)}catch(r){await vs(r)}}function d_(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.Sa)m.va(l)&&(c=!0)}),c&&gp(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xN(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Ee(H.comparator);o=o.insert(s,nt.newNoDocument(s,Y.min()));const l=re().add(s),u=new Qu(Y.min(),new Map,new Ee(ne),o,l);await uT(r,u),r.Ru=r.Ru.remove(s),r.Au.delete(e),vp(r)}else await Cd(r.localStore,e,!1).then(()=>Nd(r,e,n)).catch(vs)}async function AN(t,e){const n=X(t),r=e.batch.batchId;try{const i=await b2(n.localStore,e);hT(n,r,null),cT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ha(n,i)}catch(i){await vs(i)}}async function RN(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(oe(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);hT(r,e,n),cT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ha(r,i)}catch(i){await vs(i)}}function cT(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function hT(t,e,n){const r=X(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function Nd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||dT(t,r)})}function dT(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(lp(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),vp(t))}function f_(t,e,n){for(const r of n)r instanceof oT?(t.Vu.addReference(r.key,e),CN(t,r)):r instanceof aT?(W(_p,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||dT(t,r.key)):G(19791,{wu:r})}function CN(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(W(_p,"New document in limbo: "+n),t.Iu.add(r),vp(t))}function vp(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new H(ue.fromString(e)),r=t.fu.next();t.Au.set(r,new yN(n)),t.Ru=t.Ru.insert(n,r),eT(t.remoteStore,new nr(hn(Wu(n.path)),r,"TargetPurposeLimboResolution",zu.ce))}}async function ha(t,e,n){const r=X(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=op.Is(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const d=X(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(c,m=>M.forEach(m.Ts,I=>d.persistence.referenceDelegate.addReference(p,m.targetId,I)).next(()=>M.forEach(m.Es,I=>d.persistence.referenceDelegate.removeReference(p,m.targetId,I)))))}catch(p){if(!Es(p))throw p;W(ap,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const I=d.vs.get(m),A=I.snapshotVersion,k=I.withLastLimboFreeSnapshotVersion(A);d.vs=d.vs.insert(m,k)}}}(r.localStore,s))}async function kN(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){W(_p,"User change. New user:",e.toKey());const r=await Yw(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new B(L.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ha(n,r.Ns)}}function PN(t,e){const n=X(t),r=n.Au.get(e);if(r&&r.hu)return re().add(r.key);{let i=re();const s=n.Eu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function fT(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=uT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xN.bind(null,e),e.Pu.H_=fN.bind(null,e.eventManager),e.Pu.yu=pN.bind(null,e.eventManager),e}function NN(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RN.bind(null,e),e}class au{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Yu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return V2(this.persistence,new N2,e.initialUser,this.serializer)}Cu(e){return new Qw(sp.Vi,this.serializer)}Du(e){return new z2}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}au.provider={build:()=>new au};class DN extends au{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){oe(this.persistence.referenceDelegate instanceof su,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new g2(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?dt.withCacheSize(this.cacheSizeBytes):dt.DEFAULT;return new Qw(r=>su.Vi(r,n),this.serializer)}}class Dd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>d_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kN.bind(null,this.syncEngine),await cN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new dN}()}createDatastore(e){const n=Yu(e.databaseInfo.databaseId),r=H2(e.databaseInfo);return X2(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Z2(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>d_(this.syncEngine,n,0),function(){return o_.v()?new o_:new B2}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new _N(i,s,o,l,u,c);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);W(ui,"RemoteStore shutting down."),s.Ia.add(5),await ca(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Dd.provider={build:()=>new Dd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):On("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="FirestoreClient";class ON{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=Kf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W(Sr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W(Sr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new An;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=fp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uh(t,e){t.asyncQueue.verifyOperationInProgress(),W(Sr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Yw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function p_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await VN(t);W(Sr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>l_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>l_(e.remoteStore,i)),t._onlineComponents=e}async function VN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(Sr,"Using user provided OfflineComponentProvider");try{await uh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;li("Error using user provided cache. Falling back to memory cache: "+n),await uh(t,new au)}}else W(Sr,"Using default OfflineComponentProvider"),await uh(t,new DN(void 0));return t._offlineComponents}async function pT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(Sr,"Using user provided OnlineComponentProvider"),await p_(t,t._uninitializedComponentsProvider._online)):(W(Sr,"Using default OnlineComponentProvider"),await p_(t,new Dd))),t._onlineComponents}function bN(t){return pT(t).then(e=>e.syncEngine)}async function lu(t){const e=await pT(t),n=e.eventManager;return n.onListen=vN.bind(null,e.syncEngine),n.onUnlisten=TN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=EN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=IN.bind(null,e.syncEngine),n}function LN(t,e,n,r){const i=new Ep(r),s=new yp(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>pp(await lu(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>mp(await lu(t),s))}}function MN(t,e,n={}){const r=new An;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Ep({next:m=>{d.Nu(),o.enqueueAndForget(()=>mp(s,p));const I=m.docs.has(l);!I&&m.fromCache?c.reject(new B(L.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&m.fromCache&&u&&u.source==="server"?c.reject(new B(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new yp(Wu(l.path),d,{includeMetadataChanges:!0,qa:!0});return pp(s,p)}(await lu(t),t.asyncQueue,e,n,r)),r.promise}function jN(t,e,n={}){const r=new An;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new Ep({next:m=>{d.Nu(),o.enqueueAndForget(()=>mp(s,p)),m.fromCache&&u.source==="server"?c.reject(new B(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new yp(l,d,{includeMetadataChanges:!0,qa:!0});return pp(s,p)}(await lu(t),t.asyncQueue,e,n,r)),r.promise}function FN(t,e){const n=new An;return t.asyncQueue.enqueueAndForget(async()=>SN(await bN(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN="ComponentProvider",m_=new Map;function zN(t,e,n,r,i){return new aP(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,mT(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT="firestore.googleapis.com",g_=!0;class y_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new B(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=gT,this.ssl=g_}else this.host=e.host,this.ssl=e.ssl??g_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Gw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<p2)throw new B(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Yk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mT(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new y_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new y_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Uk;switch(r.type){case"firstParty":return new Wk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=m_.get(n);r&&(W(UN,"Removing Datastore"),m_.delete(n),r.terminate())}(this),Promise.resolve()}}function BN(t,e,n,r={}){var c;t=Lt(t,Zu);const i=ms(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&Vf(`https://${l}`),s.host!==gT&&s.host!==l&&li("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!ii(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=et.MOCK_USER;else{d=dE(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new B(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new et(m)}t._authCredentials=new zk(new iw(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Dr(this.firestore,e,this._query)}}class Re{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Re(this.firestore,e,this._key)}toJSON(){return{type:Re._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(oa(n,Re._jsonSchema))return new Re(e,r||null,new H(ue.fromString(n.referencePath)))}}Re._jsonSchemaVersion="firestore/documentReference/1.0",Re._jsonSchema={type:Ne("string",Re._jsonSchemaVersion),referencePath:Ne("string")};class mr extends Dr{constructor(e,n,r){super(e,n,Wu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Re(this.firestore,null,new H(e))}withConverter(e){return new mr(this.firestore,e,this._path)}}function Tt(t,e,...n){if(t=je(t),sw("collection","path",e),t instanceof Zu){const r=ue.fromString(e,...n);return Py(r),new mr(t,null,r)}{if(!(t instanceof Re||t instanceof mr))throw new B(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return Py(r),new mr(t.firestore,null,r)}}function En(t,e,...n){if(t=je(t),arguments.length===1&&(e=Kf.newId()),sw("doc","path",e),t instanceof Zu){const r=ue.fromString(e,...n);return ky(r),new Re(t,null,new H(r))}{if(!(t instanceof Re||t instanceof mr))throw new B(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return ky(r),new Re(t.firestore,t instanceof mr?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __="AsyncQueue";class v_{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Jw(this,"async_queue_retry"),this._c=()=>{const r=lh();r&&W(__,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=lh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=lh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new An;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Es(e))throw e;W(__,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,On("INTERNAL UNHANDLED ERROR: ",E_(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=dp.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&G(47125,{Pc:E_(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function E_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class xr extends Zu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new v_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new v_(e),this._firestoreClient=void 0,await e}}}function $N(t,e){const n=typeof t=="object"?t:Mf(),r=typeof t=="string"?t:Jl,i=bu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=uE("firestore");s&&BN(i,...s)}return i}function ec(t){if(t._terminated)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||WN(t),t._firestoreClient}function WN(t){var r,i,s,o;const e=t._freezeSettings(),n=zN(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new ON(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ot(Qe.fromBase64String(e))}catch(n){throw new B(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ot(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ot._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(oa(e,Ot._jsonSchema))return Ot.fromBase64String(e.bytes)}}Ot._jsonSchemaVersion="firestore/bytes/1.0",Ot._jsonSchema={type:Ne("string",Ot._jsonSchemaVersion),bytes:Ne("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:fn._jsonSchemaVersion}}static fromJSON(e){if(oa(e,fn._jsonSchema))return new fn(e.latitude,e.longitude)}}fn._jsonSchemaVersion="firestore/geoPoint/1.0",fn._jsonSchema={type:Ne("string",fn._jsonSchemaVersion),latitude:Ne("number"),longitude:Ne("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Qt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(oa(e,Qt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Qt(e.vectorValues);throw new B(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Qt._jsonSchemaVersion="firestore/vectorValue/1.0",Qt._jsonSchema={type:Ne("string",Qt._jsonSchemaVersion),vectorValues:Ne("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN=/^__.*__$/;class HN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new la(e,this.data,n,this.fieldTransforms)}}class yT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function _T(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{dataSource:t})}}class Tp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Tp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return uu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(_T(this.dataSource)&&qN.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class KN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Yu(e)}I(e,n,r,i=!1){return new Tp({dataSource:e,methodName:n,targetDoc:r,path:He.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ip(t){const e=t._freezeSettings(),n=Yu(t._databaseId);return new KN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function GN(t,e,n,r,i,s={}){const o=t.I(s.merge||s.mergeFields?2:0,e,n,i);xp("Data must be an object, but it was:",o,r);const l=vT(r,o);let u,c;if(s.merge)u=new St(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=hs(e,p,n);if(!o.contains(m))throw new B(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);TT(d,m)||d.push(m)}u=new St(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new HN(new mt(l),u,c)}class nc extends tc{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof nc}}class Sp extends tc{constructor(e,n){super(e),this.bc=n}_toFieldTransform(e){const n=new Qo(e.serializer,Pw(e.serializer,this.bc));return new VP(e.path,n)}isEqual(e){return e instanceof Sp&&this.bc===e.bc}}function QN(t,e,n,r){const i=t.I(1,e,n);xp("Data must be an object, but it was:",i,r);const s=[],o=mt.empty();Pr(r,(u,c)=>{const d=wT(e,u,n);c=je(c);const p=i.fc(d);if(c instanceof nc)s.push(d);else{const m=da(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new St(s);return new yT(o,l,i.fieldTransforms)}function YN(t,e,n,r,i,s){const o=t.I(1,e,n),l=[hs(e,r,n)],u=[i];if(s.length%2!=0)throw new B(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(hs(e,s[m])),u.push(s[m+1]);const c=[],d=mt.empty();for(let m=l.length-1;m>=0;--m)if(!TT(c,l[m])){const I=l[m];let A=u[m];A=je(A);const k=o.fc(I);if(A instanceof nc)c.push(I);else{const N=da(A,k);N!=null&&(c.push(I),d.set(I,N))}}const p=new St(c);return new yT(d,p,o.fieldTransforms)}function XN(t,e,n,r=!1){return da(n,t.I(r?4:3,e))}function da(t,e){if(ET(t=je(t)))return xp("Unsupported field value:",e,t),vT(t,e);if(t instanceof tc)return function(r,i){if(!_T(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=da(l,i.gc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Pw(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=fe.fromDate(r);return{timestampValue:iu(i.serializer,s)}}if(r instanceof fe){const s=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:iu(i.serializer,s)}}if(r instanceof fn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ot)return{bytesValue:Uw(i.serializer,r._byteString)};if(r instanceof Re){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:rp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Qt)return function(o,l){const u=o instanceof Qt?o.toArray():o;return{mapValue:{fields:{[pw]:{stringValue:mw},[Zl]:{arrayValue:{values:u.map(d=>{if(typeof d!="number")throw l.yc("VectorValues must only contain numeric values.");return Zf(l.serializer,d)})}}}}}}(r,i);if(Kw(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${Uu(r)}`)}(t,e)}function vT(t,e){const n={};return lw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pr(t,(r,i)=>{const s=da(i,e.dc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function ET(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fe||t instanceof fn||t instanceof Ot||t instanceof Re||t instanceof tc||t instanceof Qt||Kw(t))}function xp(t,e,n){if(!ET(n)||!ow(n)){const r=Uu(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function hs(t,e,n){if((e=je(e))instanceof wp)return e._internalPath;if(typeof e=="string")return wT(t,e);throw uu("Field path arguments must be of type string or ",t,!1,void 0,n)}const JN=new RegExp("[~\\*/\\[\\]]");function wT(t,e,n){if(e.search(JN)>=0)throw uu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wp(...e.split("."))._internalPath}catch{throw uu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function uu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new B(L.INVALID_ARGUMENT,l+t+u)}function TT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{convertValue(e,n="none"){switch(Tr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Pr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Zl].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>xe(o.doubleValue));return new Qt(n)}convertGeoPoint(e){return new fn(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=$u(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Wo(e));default:return null}}convertTimestamp(e){const n=Er(e);return new fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);oe(Hw(r),9688,{name:e});const i=new qo(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||On(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap extends ZN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ot(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,n)}}function eD(t){return new Sp("increment",t)}const w_="@firebase/firestore",T_="4.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(hs("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tD extends IT{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rp{}class xT extends Rp{}function Xi(t,e,...n){let r=[];e instanceof Rp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Cp).length,l=s.filter(u=>u instanceof rc).length;if(o>1||o>0&&l>0)throw new B(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class rc extends xT{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new rc(e,n,r)}_apply(e){const n=this._parse(e);return AT(e._query,n),new Dr(e.firestore,e.converter,Id(e._query,n))}_parse(e){const n=Ip(e.firestore);return function(s,o,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new B(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){A_(p,d);const A=[];for(const k of p)A.push(x_(u,s,k));m={arrayValue:{values:A}}}else m=x_(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||A_(p,d),m=XN(l,o,p,d==="in"||d==="not-in");return Pe.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function nD(t,e,n){const r=e,i=hs("where",t);return rc._create(i,r,n)}class Cp extends Rp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Cp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Jt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)AT(o,u),o=Id(o,u)}(e._query,n),new Dr(e.firestore,e.converter,Id(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class kp extends xT{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new kp(e,n,r)}_apply(e){return new Dr(e.firestore,e.converter,nu(e._query,this._limit,this._limitType))}}function S_(t){return kp._create("limit",t,"F")}function x_(t,e,n){if(typeof(n=je(n))=="string"){if(n==="")throw new B(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Iw(e)&&n.indexOf("/")!==-1)throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ue.fromString(n));if(!H.isDocumentKey(r))throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return jy(t,new H(r))}if(n instanceof Re)return jy(t,n._key);throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Uu(n)}.`)}function A_(t,e){if(!Array.isArray(t)||t.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function AT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function rD(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class io{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xr extends IT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new gl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hs("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Xr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Xr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Xr._jsonSchema={type:Ne("string",Xr._jsonSchemaVersion),bundleSource:Ne("string","DocumentSnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class gl extends Xr{data(e={}){return super.data(e)}}class Jr{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new io(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new gl(this._firestore,this._userDataWriter,r.key,r,new io(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new gl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new io(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new gl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new io(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:iD(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Jr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Kf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function iD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jr._jsonSchemaVersion="firestore/querySnapshot/1.0",Jr._jsonSchema={type:Ne("string",Jr._jsonSchemaVersion),bundleSource:Ne("string","QuerySnapshot"),bundleName:Ne("string"),bundle:Ne("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(t){t=Lt(t,Re);const e=Lt(t.firestore,xr),n=ec(e);return MN(n,t._key).then(r=>CT(e,t,r))}function cu(t){t=Lt(t,Dr);const e=Lt(t.firestore,xr),n=ec(e),r=new Ap(e);return ST(t._query),jN(n,t._query).then(i=>new Jr(e,r,t,i))}function Od(t,e,n,...r){t=Lt(t,Re);const i=Lt(t.firestore,xr),s=Ip(i);let o;return o=typeof(e=je(e))=="string"||e instanceof wp?YN(s,"updateDoc",t._key,e,n,r):QN(s,"updateDoc",t._key,e),Pp(i,[o.toMutation(t._key,Gt.exists(!0))])}function ch(t){return Pp(Lt(t.firestore,xr),[new ep(t._key,Gt.none())])}function hu(t,e){const n=Lt(t.firestore,xr),r=En(t),i=rD(t.converter,e),s=Ip(t.firestore);return Pp(n,[GN(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Gt.exists(!1))]).then(()=>r)}function Eo(t,...e){var c,d,p;t=je(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||I_(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(I_(e[r])){const m=e[r];e[r]=(c=m.next)==null?void 0:c.bind(m),e[r+1]=(d=m.error)==null?void 0:d.bind(m),e[r+2]=(p=m.complete)==null?void 0:p.bind(m)}let s,o,l;if(t instanceof Re)o=Lt(t.firestore,xr),l=Wu(t._key.path),s={next:m=>{e[r]&&e[r](CT(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=Lt(t,Dr);o=Lt(m.firestore,xr),l=m._query;const I=new Ap(o);s={next:A=>{e[r]&&e[r](new Jr(o,I,m,A))},error:e[r+1],complete:e[r+2]},ST(t._query)}const u=ec(o);return LN(u,l,i,s)}function Pp(t,e){const n=ec(t);return FN(n,e)}function CT(t,e,n){const r=n.docs.get(e._key),i=new Ap(t);return new Xr(t,i,e._key,r,new io(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){Fk(mi),si(new _r("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new xr(new Bk(r.getProvider("auth-internal")),new qk(o,r.getProvider("app-check-internal")),lP(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),ln(w_,T_,e),ln(w_,T_,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT="firebasestorage.googleapis.com",sD="storageBucket",oD=2*60*1e3,aD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends gn{constructor(e,n,r=0){super(hh(e),`Firebase Storage: ${n} (${hh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,yn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return hh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var mn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(mn||(mn={}));function hh(t){return"storage/"+t}function lD(){const t="An unknown error occurred, please check the error payload for server response.";return new yn(mn.UNKNOWN,t)}function uD(){return new yn(mn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function cD(){return new yn(mn.CANCELED,"User canceled the upload/download.")}function hD(t){return new yn(mn.INVALID_URL,"Invalid URL '"+t+"'.")}function dD(t){return new yn(mn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function R_(t){return new yn(mn.INVALID_ARGUMENT,t)}function PT(){return new yn(mn.APP_DELETED,"The Firebase app was deleted.")}function fD(t){return new yn(mn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=qt.makeFromUrl(e,n)}catch{return new qt(e,"")}if(r.path==="")return r;throw dD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",I=new RegExp(`^https?://${p}/${d}/b/${i}/o${m}`,"i"),A={bucket:1,path:3},k=n===kT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",w=new RegExp(`^https?://${k}/${i}/${N}`,"i"),x=[{regex:l,indices:u,postModify:s},{regex:I,indices:A,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<x.length;D++){const V=x[D],F=V.regex.exec(e);if(F){const E=F[V.indices.bucket];let _=F[V.indices.path];_||(_=""),r=new qt(E,_),V.postModify(r);break}}if(r==null)throw hD(e);return r}}class pD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mD(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...N){c||(c=!0,e.apply(null,N))}function p(N){i=setTimeout(()=>{i=null,t(I,u())},N)}function m(){s&&clearTimeout(s)}function I(N,...w){if(c){m();return}if(N){m(),d.call(null,N,...w);return}if(u()||o){m(),d.call(null,N,...w);return}r<64&&(r*=2);let x;l===1?(l=2,x=0):x=(r+Math.random())*1e3,p(x)}let A=!1;function k(N){A||(A=!0,m(),!c&&(i!==null?(N||(l=2),clearTimeout(i),p(0)):N||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,k(!0)},n),k}function gD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(t){return t!==void 0}function C_(t,e,n,r){if(r<e)throw R_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw R_(`Invalid value for '${t}'. Expected ${n} or less.`)}function _D(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var du;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(du||(du={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e,n,r,i,s,o,l,u,c,d,p,m=!0,I=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,k)=>{this.resolve_=A,this.reject_=k,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ga(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===du.NO_ERROR,u=s.getStatus();if(!l||vD(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===du.ABORT;r(!1,new Ga(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Ga(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());yD(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=lD();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?PT():cD();o(u)}else{const u=uD();o(u)}};this.canceled_?n(!1,new Ga(!1,null,!0)):this.backoffId_=mD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&gD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ga{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function wD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function TD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ID(t,e){e&&(t["X-Firebase-GMPID"]=e)}function SD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function xD(t,e,n,r,i,s,o=!0,l=!1){const u=_D(t.urlParams),c=t.url+u,d=Object.assign({},t.headers);return ID(d,e),wD(d,n),TD(d,s),SD(d,r),new ED(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function RD(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n){this._service=e,n instanceof qt?this._location=n:this._location=qt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new fu(e,n)}get root(){const e=new qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return RD(this._location.path)}get storage(){return this._service}get parent(){const e=AD(this._location.path);if(e===null)return null;const n=new qt(this._location.bucket,e);return new fu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw fD(e)}}function k_(t,e){const n=e==null?void 0:e[sD];return n==null?null:qt.makeFromBucketSpec(n,t)}function CD(t,e,n,r={}){t.host=`${e}:${n}`;const i=ms(e);i&&Vf(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:dE(s,t.app.options.projectId))}class kD{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=kT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=oD,this._maxUploadRetryTime=aD,this._requests=new Set,i!=null?this._bucket=qt.makeFromBucketSpec(i,this._host):this._bucket=k_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=qt.makeFromBucketSpec(this._url,e):this._bucket=k_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){C_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){C_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new fu(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new pD(PT());{const o=xD(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const P_="@firebase/storage",N_="0.14.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT="storage";function PD(t=Mf(),e){t=je(t);const r=bu(t,NT).getImmediate({identifier:e}),i=uE("storage");return i&&ND(r,...i),r}function ND(t,e,n,r={}){CD(t,e,n,r)}function DD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new kD(n,r,i,e,mi)}function OD(){si(new _r(NT,DD,"PUBLIC").setMultipleInstances(!0)),ln(P_,N_,""),ln(P_,N_,"esm2020")}OD();const VD={apiKey:"AIzaSyDEB7AhLzLRYO0pmHm3XFR1uPEIo6Zsj3Q",authDomain:"shop-689bc.firebaseapp.com",projectId:"shop-689bc",storageBucket:"shop-689bc.appspot.com",messagingSenderId:"429258787233",appId:"1:429258787233:web:aae7d9792caa0a7f1a23e0",measurementId:"G-93WTDCTB2X"},Np=mE(VD),Vd=Mk(Np),Se=$N(Np),bD=PD(Np);bD.maxUploadRetryTime=1e4;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var LD={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MD=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),$e=(t,e)=>{const n=j.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...c},d)=>j.createElement("svg",{ref:d,...LD,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${MD(t)}`,l].join(" "),...c},[...e.map(([p,m])=>j.createElement(p,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jD=$e("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FD=$e("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UD=$e("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zD=$e("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BD=$e("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $D=$e("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WD=$e("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qD=$e("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HD=$e("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KD=$e("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=$e("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GD=$e("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QD=$e("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YD=$e("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=$e("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=$e("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XD=$e("UserCog",[["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m21.7 16.4-.9-.3",key:"12j9ji"}],["path",{d:"m15.2 13.9-.9-.3",key:"1fdjdi"}],["path",{d:"m16.6 18.7.3-.9",key:"heedtr"}],["path",{d:"m19.1 12.2.3-.9",key:"1af3ki"}],["path",{d:"m19.6 18.7-.4-1",key:"1x9vze"}],["path",{d:"m16.8 12.3-.4-1",key:"vqeiwj"}],["path",{d:"m14.3 16.6 1-.4",key:"1qlj63"}],["path",{d:"m20.7 13.8 1-.4",key:"1v5t8k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=$e("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),OT=j.createContext(),VT="shop_cart_items",Dp=()=>j.useContext(OT),JD=()=>{try{const t=localStorage.getItem(VT);return t?JSON.parse(t):[]}catch{return[]}},ZD=({children:t})=>{const[e,n]=j.useState(JD),[r,i]=j.useState(!1);j.useEffect(()=>{localStorage.setItem(VT,JSON.stringify(e))},[e]);const s=o=>{const l=e.find(u=>u.id===o.id);if(l){if(l.quantity>=(o.stock||99)){i(!0);return}n(e.map(u=>u.id===o.id?{...u,quantity:u.quantity+1}:u))}else n([...e,{...o,quantity:1}]);i(!0)};return g.jsx(OT.Provider,{value:{cartItems:e,setCartItems:n,cartOpen:r,setCartOpen:i,addToCart:s},children:t})},eO=["Moda","Tecnología","Supermercado"],_l=({searchTerm:t,setSearchTerm:e})=>{const{cartItems:n,setCartOpen:r}=Dp(),i=pi(),[s,o]=j.useState([]),[l,u]=j.useState(!1),c=j.useRef(null);j.useEffect(()=>{const m=Eo(Tt(Se,"categories"),I=>{o(I.docs.map(A=>A.data().name))});return()=>m()},[]),j.useEffect(()=>{const m=I=>{c.current&&!c.current.contains(I.target)&&u(!1)};return document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[]);const d=m=>{u(!1),i(`/store?category=${encodeURIComponent(m)}`)},p=()=>{u(!1),i("/store")};return g.jsx("header",{style:{background:"#2563eb",color:"white",position:"sticky",top:0,zIndex:200},children:g.jsxs("div",{className:"ml-container",style:{paddingTop:"10px",paddingBottom:"10px"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[g.jsx("h1",{onClick:p,style:{margin:0,fontSize:"24px",whiteSpace:"nowrap",cursor:"pointer"},children:"Tu logo"}),g.jsxs("div",{style:{flex:1,position:"relative"},children:[g.jsx("input",{type:"text",className:"ml-input",placeholder:"Buscar productos, marcas y más...",style:{paddingLeft:"40px",background:"white",border:"none",boxShadow:"0 1px 2px rgba(0,0,0,0.1)",width:"100%",color:"#333"},value:t||"",onChange:m=>e&&e(m.target.value)}),g.jsx(GD,{size:20,style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",color:"#999"}})]}),g.jsxs("button",{onClick:()=>r(!0),style:{position:"relative",background:"white",border:"none",cursor:"pointer",borderRadius:"50%",width:"40px",height:"40px",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0 1px 2px rgba(0,0,0,0.1)",flexShrink:0},children:[g.jsx(QD,{size:20,color:"black"}),n.length>0&&g.jsx("span",{style:{position:"absolute",top:"-4px",right:"-4px",background:"red",color:"white",borderRadius:"50%",width:"20px",height:"20px",fontSize:"12px",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold"},children:n.reduce((m,I)=>m+I.quantity,0)})]})]}),g.jsxs("div",{className:"nav-categories",style:{color:"white"},children:[g.jsxs("div",{ref:c,style:{position:"relative"},children:[g.jsxs("div",{onClick:()=>u(m=>!m),style:{display:"flex",alignItems:"center",gap:"4px",cursor:"pointer",fontWeight:500,userSelect:"none"},children:["Categorías ",g.jsx(FD,{size:13,style:{transition:"transform 0.2s",transform:l?"rotate(180deg)":"rotate(0deg)"}})]}),l&&g.jsxs("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",background:"white",borderRadius:"8px",boxShadow:"0 4px 16px rgba(0,0,0,0.15)",minWidth:"180px",zIndex:300,overflow:"hidden",marginTop:"6px"},children:[g.jsx("div",{onClick:p,style:{padding:"10px 18px",cursor:"pointer",borderBottom:"1px solid #f0f0f0",fontWeight:600,color:"#2563eb"},onMouseOver:m=>m.currentTarget.style.background="#f5f5f5",onMouseOut:m=>m.currentTarget.style.background="white",children:"Todo el catálogo"}),s.length===0&&g.jsx("div",{style:{padding:"10px 18px",color:"#999",fontSize:"13px"},children:"Sin categorías aún"}),s.map((m,I)=>g.jsx("div",{onClick:()=>d(m),style:{padding:"10px 18px",cursor:"pointer",borderBottom:"1px solid #f5f5f5",color:"#333"},onMouseOver:A=>A.currentTarget.style.background="#f5f5f5",onMouseOut:A=>A.currentTarget.style.background="white",children:m},I))]})]}),eO.map(m=>g.jsx("div",{onClick:()=>d(m),style:{cursor:"pointer"},onMouseOver:I=>I.currentTarget.style.textDecoration="underline",onMouseOut:I=>I.currentTarget.style.textDecoration="none",children:m},m)),g.jsx("div",{style:{width:"1px",background:"rgba(0,0,0,0.15)",margin:"0 2px"}}),g.jsx("div",{onClick:()=>i("/store?filter=ofertas"),style:{cursor:"pointer"},onMouseOver:m=>m.currentTarget.style.textDecoration="underline",onMouseOut:m=>m.currentTarget.style.textDecoration="none",children:"Ofertas"}),g.jsx("div",{onClick:()=>i("/store?filter=historial"),style:{cursor:"pointer"},onMouseOver:m=>m.currentTarget.style.textDecoration="underline",onMouseOut:m=>m.currentTarget.style.textDecoration="none",children:"Historial"})]})]})})},Op=()=>g.jsxs("footer",{style:{background:"#1f2937",color:"#fff",padding:"40px 20px",marginTop:"auto"},children:[g.jsxs("div",{className:"ml-container",style:{display:"flex",flexWrap:"wrap",gap:"40px",justifyContent:"space-between"},children:[g.jsxs("div",{style:{flex:"1 1 200px"},children:[g.jsx("h3",{style:{fontSize:"18px",marginBottom:"15px",color:"#ea580c"},children:"Contacto"}),g.jsx("p",{style:{margin:"5px 0",fontSize:"14px"},children:"Teléfono: 1234567890"}),g.jsx("p",{style:{margin:"5px 0",fontSize:"14px"},children:"Email: contacto@ejemplo.com"}),g.jsx("p",{style:{margin:"5px 0",fontSize:"14px"},children:"Ubicación: Calle Falsa 123, Ciudad"})]}),g.jsxs("div",{style:{flex:"1 1 200px"},children:[g.jsx("h3",{style:{fontSize:"18px",marginBottom:"15px",color:"#ea580c"},children:"Sobre Nosotros"}),g.jsx("p",{style:{margin:"5px 0",fontSize:"14px",color:"#d1d5db",lineHeight:"1.6"},children:"Ofrecemos los mejores productos con la más alta calidad. Nuestro compromiso es brindarte la mejor experiencia de compra, con envíos rápidos y seguros."})]}),g.jsxs("div",{style:{flex:"1 1 200px"},children:[g.jsx("h3",{style:{fontSize:"18px",marginBottom:"15px",color:"#ea580c"},children:"Ayuda"}),g.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0,fontSize:"14px",color:"#d1d5db"},children:[g.jsx("li",{style:{marginBottom:"8px",cursor:"pointer"},children:"Preguntas Frecuentes"}),g.jsx("li",{style:{marginBottom:"8px",cursor:"pointer"},children:"Envíos y Devoluciones"}),g.jsx("li",{style:{marginBottom:"8px",cursor:"pointer"},children:"Términos y Condiciones"})]})]})]}),g.jsxs("div",{style:{textAlign:"center",marginTop:"40px",paddingTop:"20px",borderTop:"1px solid #374151",fontSize:"14px",color:"#9ca3af"},children:["© ",new Date().getFullYear()," Tu logo. Todos los derechos reservados."]})]}),ft=t=>{if(t==null||t==="")return"0";const e=Number(String(t).replace(/\./g,""));return isNaN(e)?t:e.toLocaleString("es-AR")},tO="5491100000000",dh=[{id:"retiro",nombre:"Retiro en local",precio:0},{id:"domicilio",nombre:"Envío a domicilio (Solo en Tandil)",precio:5e3}],nO=({items:t,total:e,onBack:n,onClose:r})=>{const[i,s]=j.useState(""),[o,l]=j.useState(""),[u,c]=j.useState(""),[d,p]=j.useState(dh[0]),[m,I]=j.useState("Efectivo"),[A,k]=j.useState(!1),[N,w]=j.useState(null),v=e+d.precio,x=async D=>{D.preventDefault(),k(!0);try{for(const E of t){const _=En(Se,"products",E.id),T=await RT(_);if(!T.exists())throw new Error(`El producto ${E.name} ya no existe.`);if(T.data().stock<E.quantity)throw new Error(`No hay suficiente stock de ${E.name}. Quedan: ${T.data().stock}`)}const V={customerName:i,customerPhone:o,customerAddress:d.id==="domicilio"?u:"",shippingOption:d.nombre,shippingCost:d.precio,paymentMethod:m,subtotal:e,items:t.map(E=>({productId:E.id,name:E.name,price:E.price,quantity:E.quantity})),total:v,status:"pendiente",createdAt:new Date},F=await hu(Tt(Se,"orders"),V);w(F.id)}catch(V){alert("Error al procesar el pedido: "+V.message)}finally{k(!1)}};if(N){const D=encodeURIComponent(`¡Hola! Acabo de hacer el pedido #${N.slice(-6).toUpperCase()}.

Llevo: ${t.map(F=>`${F.quantity}x ${F.name}`).join(", ")}.
Subtotal: $${ft(e)}
Envío (${d.nombre}): $${ft(d.precio)}
Total Final: $${ft(v)}
Método de pago: ${m}
${d.id==="domicilio"?`
Soy ${i}. Mi dirección es: ${u}.`:`
Soy ${i}. Paso a retirar.`} Te paso el comprobante de pago...`),V=`https://wa.me/${tO}?text=${D}`;return g.jsx("div",{style:{position:"fixed",top:0,right:0,bottom:0,left:0,background:"white",zIndex:1100,display:"flex",justifyContent:"center",alignItems:"center",padding:"20px"},children:g.jsxs("div",{style:{textAlign:"center",maxWidth:"400px"},children:[g.jsx(jD,{size:80,color:"#28a745",style:{marginBottom:"20px"}}),g.jsx("h2",{children:"¡Pedido Recibido!"}),g.jsxs("p",{style:{color:"#666",marginBottom:"10px"},children:["Tu número de pedido es: ",g.jsx("br",{}),g.jsxs("strong",{children:["#",N.slice(-6).toUpperCase()]})]}),g.jsx("p",{style:{marginBottom:"30px"},children:"Por favor envíanos un mensaje por WhatsApp para coordinar el pago y la entrega."}),g.jsx("a",{href:V,target:"_blank",className:"ml-button",style:{display:"block",background:"#25D366",marginBottom:"15px",textDecoration:"none"},children:"Enviar Detalle por WhatsApp"}),g.jsx("button",{className:"ml-button",style:{background:"#eee",color:"#333",width:"100%"},onClick:r,children:"Volver a la tienda"})]})})}return g.jsxs("div",{style:{position:"fixed",top:0,right:0,bottom:0,left:0,background:"white",zIndex:1100,display:"flex",flexDirection:"column"},children:[g.jsxs("div",{style:{padding:"20px",borderBottom:"1px solid #eee",display:"flex",alignItems:"center"},children:[g.jsx(UD,{style:{cursor:"pointer",marginRight:"20px"},onClick:n}),g.jsx("h2",{style:{margin:0},children:"Tus datos para la entrega"})]}),g.jsx("div",{style:{flex:1,overflowY:"auto",padding:"20px"},children:g.jsxs("div",{className:"ml-container",style:{maxWidth:"500px"},children:[g.jsxs("div",{className:"ml-card",children:[g.jsx("h3",{style:{marginTop:0},children:"Resumen del pedido"}),g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",color:"#666",marginBottom:"8px"},children:[g.jsxs("span",{children:["Subtotal (",t.length," prod):"]}),g.jsxs("span",{children:["$",ft(e)]})]}),g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",color:"#666",marginBottom:"10px"},children:[g.jsx("span",{children:"Envío:"}),g.jsxs("span",{children:["$",ft(d.precio)]})]}),g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",borderTop:"1px solid #eee",paddingTop:"10px",fontWeight:"bold",fontSize:"18px"},children:[g.jsx("span",{children:"Total Final:"}),g.jsxs("span",{children:["$",ft(v)]})]})]}),g.jsxs("form",{onSubmit:x,style:{marginTop:"20px"},children:[g.jsxs("div",{style:{marginBottom:"16px"},children:[g.jsx("label",{children:"Opciones de Envío"}),g.jsx("select",{className:"ml-input",value:d.id,onChange:D=>p(dh.find(V=>V.id===D.target.value)),children:dh.map(D=>g.jsxs("option",{value:D.id,children:[D.nombre," - $",ft(D.precio)]},D.id))})]}),g.jsxs("div",{style:{marginBottom:"16px"},children:[g.jsx("label",{children:"Método de Pago"}),g.jsxs("select",{className:"ml-input",value:m,onChange:D=>I(D.target.value),children:[g.jsx("option",{value:"Efectivo",children:"Efectivo"}),g.jsx("option",{value:"Transferencia",children:"Transferencia"})]})]}),g.jsxs("div",{style:{marginBottom:"16px"},children:[g.jsx("label",{children:"Nombre Completo"}),g.jsx("input",{type:"text",className:"ml-input",value:i,onChange:D=>s(D.target.value),required:!0,placeholder:"Ej: Juan Pérez"})]}),g.jsxs("div",{style:{marginBottom:"16px"},children:[g.jsx("label",{children:"Teléfono (con código de área)"}),g.jsx("input",{type:"tel",className:"ml-input",value:o,onChange:D=>l(D.target.value),required:!0,placeholder:"Ej: 5491112345678"})]}),d.id==="domicilio"&&g.jsxs("div",{style:{marginBottom:"24px"},children:[g.jsx("label",{children:"Dirección de Envío"}),g.jsx("textarea",{className:"ml-input",value:u,onChange:D=>c(D.target.value),required:!0,placeholder:"Calle, Número, Localidad...",style:{minHeight:"80px"}})]}),g.jsx("button",{type:"submit",className:"ml-button",style:{width:"100%"},disabled:A,children:A?"Procesando...":"Confirmar Pedido"})]})]})})]})},bT=({isOpen:t,onClose:e,items:n,setItems:r})=>{const[i,s]=j.useState(!1);if(!t)return null;const o=n.reduce((c,d)=>c+d.price*d.quantity,0),l=c=>{r(n.filter(d=>d.id!==c))},u=(c,d)=>{r(n.map(p=>{if(p.id===c){const m=p.stock||99,I=Math.min(m,Math.max(1,p.quantity+d));return{...p,quantity:I}}return p}))};return i?g.jsx(nO,{items:n,total:o,onBack:()=>s(!1),onClose:()=>{s(!1),r([]),e()}}):g.jsxs("div",{style:{position:"fixed",top:0,right:0,bottom:0,left:0,background:"rgba(0,0,0,0.5)",zIndex:1e3,display:"flex",justifyContent:"flex-end"},children:[g.jsxs("div",{style:{width:"100%",maxWidth:"450px",background:"white",height:"100%",display:"flex",flexDirection:"column",animation:"slideIn 0.3s ease-out"},children:[g.jsxs("div",{style:{padding:"20px",borderBottom:"1px solid #eee",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[g.jsx("h2",{style:{margin:0},children:"Tu carrito"}),g.jsx(DT,{style:{cursor:"pointer"},onClick:e})]}),g.jsx("div",{style:{flex:1,overflowY:"auto",padding:"20px"},children:n.length===0?g.jsxs("div",{style:{textAlign:"center",marginTop:"50px"},children:[g.jsx("p",{children:"Tu carrito está vacío"}),g.jsx("button",{className:"ml-button",onClick:e,style:{marginTop:"20px"},children:"Ir a comprar"})]}):g.jsx("div",{style:{display:"grid",gap:"20px"},children:n.map(c=>g.jsxs("div",{style:{display:"flex",gap:"15px",borderBottom:"1px solid #f5f5f5",paddingBottom:"15px"},children:[g.jsx("img",{src:c.imageUrl,alt:c.name,style:{width:"80px",height:"80px",objectFit:"contain",borderRadius:"4px",background:"#fff"}}),g.jsxs("div",{style:{flex:1},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"5px"},children:[g.jsx("span",{style:{fontWeight:500},children:c.name}),g.jsx(yl,{size:18,style:{cursor:"pointer",color:"#999"},onClick:()=>l(c.id)})]}),g.jsxs("div",{style:{fontSize:"18px",fontWeight:600},children:["$",ft(c.price)]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",marginTop:"10px"},children:[g.jsxs("div",{style:{display:"flex",border:"1px solid #ddd",borderRadius:"4px",alignItems:"center"},children:[g.jsx("button",{style:{border:"none",background:"#f5f5f5",padding:"6px 12px",cursor:"pointer",color:"#333",fontSize:"16px",fontWeight:"bold",borderRadius:"4px 0 0 4px"},onClick:()=>u(c.id,-1),children:"−"}),g.jsx("span",{style:{padding:"6px 14px",borderLeft:"1px solid #ddd",borderRight:"1px solid #ddd",fontSize:"14px",fontWeight:500,color:"#333",minWidth:"20px",textAlign:"center"},children:c.quantity}),g.jsx("button",{style:{border:"none",background:"#f5f5f5",padding:"6px 12px",cursor:c.quantity>=(c.stock||99)?"not-allowed":"pointer",color:c.quantity>=(c.stock||99)?"#ccc":"#333",fontSize:"16px",fontWeight:"bold",borderRadius:"0 4px 4px 0"},onClick:()=>u(c.id,1),disabled:c.quantity>=(c.stock||99),children:"+"})]}),c.stock&&c.quantity>=c.stock&&g.jsx("span",{style:{fontSize:"12px",color:"#e74c3c"},children:"Máx. disponible"})]})]})]},c.id))})}),n.length>0&&g.jsxs("div",{style:{padding:"20px",borderTop:"1px solid #eee",background:"#fafafa"},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"10px",fontSize:"20px",fontWeight:600},children:[g.jsx("span",{children:"Subtotal"}),g.jsxs("span",{children:["$",ft(o)]})]}),g.jsx("div",{style:{color:"#666",fontSize:"14px",marginBottom:"15px"},children:"* El costo de envío se calculará en el pago final."}),g.jsxs("button",{className:"ml-button",style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},onClick:()=>s(!0),children:["Continuar compra ",g.jsx(zD,{size:20,style:{marginLeft:"10px"}})]})]})]}),g.jsx("style",{children:`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `})]})},LT="priceHistory",MT="viewedProducts",jT=15*24*60*60*1e3;function FT(){try{return JSON.parse(localStorage.getItem(LT))||{}}catch{return{}}}function UT(t,e){const n=FT(),r=n[t]||[],i=Date.now(),s=r[r.length-1];(!s||s.price!==e)&&r.push({price:e,date:i});const o=r.filter(l=>i-l.date<=jT);n[t]=o,localStorage.setItem(LT,JSON.stringify(n))}function rO(t,e){const r=FT()[t]||[];if(r.length<2)return null;const i=r.slice(0,-1),s=Math.max(...i.map(o=>o.price));return s>e?s:null}function bd(t,e){const n=rO(t,e);if(!n)return{hasDiscount:!1,previousPrice:null,discountPct:null};const r=Math.round((n-e)/n*100);return{hasDiscount:!0,previousPrice:n,discountPct:r}}function zT(){try{const t=JSON.parse(localStorage.getItem(MT))||[],e=Date.now();return t.filter(n=>e-n.viewedAt<=jT)}catch{return[]}}function iO(t){if(!t||!t.id)return;const e=zT(),n=Date.now(),r=e.filter(o=>o.id!==t.id),s=[{id:t.id,name:t.name,imageUrl:t.imageUrl||"",price:t.price,category:t.category||"",viewedAt:n},...r].slice(0,50);localStorage.setItem(MT,JSON.stringify(s))}const V_={sm:{current:"18px",previous:"13px"},md:{current:"24px",previous:"15px"},lg:{current:"36px",previous:"18px"}},Ld=({productId:t,currentPrice:e,size:n="md",showBadge:r=!0})=>{const{hasDiscount:i,previousPrice:s,discountPct:o}=bd(t,e),{current:l,previous:u}=V_[n]||V_.md;return g.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[i&&g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[g.jsxs("span",{style:{textDecoration:"line-through",color:"#999",fontSize:u,fontWeight:400},children:["$",ft(s)]}),r&&g.jsxs("span",{style:{background:"#00a650",color:"white",fontSize:"11px",fontWeight:700,padding:"2px 6px",borderRadius:"4px",letterSpacing:"0.3px"},children:["-",o,"%"]})]}),g.jsxs("span",{style:{fontSize:l,fontWeight:n==="lg"?300:500,color:i?"#00a650":"#333",lineHeight:1.1},children:["$",ft(e)]})]})},sO=()=>{const[t,e]=j.useState([]),[n,r]=j.useState(""),{cartItems:i,setCartItems:s,cartOpen:o,setCartOpen:l}=Dp(),u=pi(),[c]=Wx(),d=c.get("category"),p=c.get("filter");j.useEffect(()=>{const A=Xi(Tt(Se,"products")),k=Eo(A,N=>{const w=N.docs.map(v=>({id:v.id,...v.data()}));e(w),w.forEach(v=>UT(v.id,v.price))});return()=>k()},[]);let m=t;p==="historial"?m=zT().map(N=>N.id).map(N=>t.find(w=>w.id===N)).filter(Boolean):p==="ofertas"?m=t.filter(A=>{const{hasDiscount:k}=bd(A.id,A.price);return k}):m=t.filter(A=>!d||A.category&&A.category.toLowerCase()===d.toLowerCase()).filter(A=>!n||A.name.toLowerCase().includes(n.toLowerCase())||A.description&&A.description.toLowerCase().includes(n.toLowerCase()));const I=p==="historial"?"🕐 Vistos recientemente":p==="ofertas"?"🔥 Ofertas":d||null;return g.jsxs("div",{style:{minHeight:"100vh",background:"#f5f5f5"},children:[g.jsx(_l,{searchTerm:n,setSearchTerm:r}),I&&g.jsx("div",{className:"ml-container",style:{marginTop:"16px"},children:g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",padding:"10px 16px",background:"#fff",borderRadius:"8px",boxShadow:"0 1px 2px rgba(0,0,0,0.08)"},children:[g.jsx("span",{style:{fontSize:"18px",fontWeight:600},children:I}),g.jsxs("span",{style:{fontSize:"14px",color:"#999"},children:["— ",m.length," producto",m.length!==1?"s":""]}),g.jsx("button",{onClick:()=>u("/store"),style:{marginLeft:"auto",background:"none",border:"1px solid #ccc",borderRadius:"20px",padding:"4px 12px",cursor:"pointer",fontSize:"13px",color:"#555"},children:"✕ Quitar filtro"})]})}),!I&&g.jsx("div",{className:"ml-container",style:{marginTop:"20px"},children:g.jsxs("div",{style:{background:"#fff",borderRadius:"8px",padding:"20px",textAlign:"center",boxShadow:"0 1px 2px rgba(0,0,0,0.1)"},children:[g.jsx("h2",{style:{margin:0},children:"¡Bienvenidos a nuestra tienda online!"}),g.jsx("p",{style:{color:"#666"},children:"Recorre nuestro catálogo y haz tu pedido."})]})}),g.jsx("main",{className:"ml-container",style:{marginTop:"30px"},children:p==="historial"&&m.length===0?g.jsxs("div",{style:{textAlign:"center",padding:"60px 0",color:"#999"},children:[g.jsx("p",{style:{fontSize:"24px",marginBottom:"8px"},children:"🕐"}),g.jsx("p",{style:{fontSize:"18px"},children:"Todavía no visitaste ningún producto."}),g.jsx("p",{style:{fontSize:"14px"},children:"Los productos que veas en los próximos 15 días aparecerán aquí."})]}):p==="ofertas"&&m.length===0?g.jsxs("div",{style:{textAlign:"center",padding:"60px 0",color:"#999"},children:[g.jsx("p",{style:{fontSize:"24px",marginBottom:"8px"},children:"🏷️"}),g.jsx("p",{style:{fontSize:"18px"},children:"No hay ofertas activas en este momento."}),g.jsx("p",{style:{fontSize:"14px"},children:"Los productos cuyo precio bajó en los últimos 15 días aparecerán aquí."})]}):m.length===0?g.jsx("div",{style:{textAlign:"center",padding:"60px 0",color:"#999"},children:g.jsx("p",{style:{fontSize:"18px"},children:"No hay productos en esta categoría aún."})}):g.jsx("div",{className:"product-grid",children:m.map(A=>{const{hasDiscount:k,discountPct:N}=bd(A.id,A.price);return g.jsxs("div",{className:"ml-card",style:{padding:0,display:"flex",flexDirection:"column",height:"100%",cursor:"pointer",transition:"box-shadow 0.2s",background:"#fff",borderRadius:"8px",overflow:"hidden",boxShadow:"0 1px 2px rgba(0,0,0,0.1)",position:"relative"},onClick:()=>u(`/product/${A.id}`),onMouseOver:w=>w.currentTarget.style.boxShadow="0 4px 12px rgba(0,0,0,0.15)",onMouseOut:w=>w.currentTarget.style.boxShadow="0 1px 2px rgba(0,0,0,0.1)",children:[k&&g.jsxs("div",{style:{position:"absolute",top:"10px",left:"10px",background:"#16a34a",color:"white",fontSize:"12px",fontWeight:700,padding:"3px 8px",borderRadius:"4px",zIndex:1},children:["-",N,"% OFERTA"]}),g.jsx("img",{src:A.imageUrl||"https://via.placeholder.com/200",alt:A.name,style:{width:"100%",height:"200px",objectFit:"contain",background:"#fff",padding:"10px"}}),g.jsxs("div",{style:{padding:"16px",flex:1,display:"flex",flexDirection:"column"},children:[g.jsx("h3",{style:{margin:"0 0 10px 0",fontSize:"16px",fontWeight:400},children:A.name}),g.jsx("div",{style:{marginBottom:"10px"},children:g.jsx(Ld,{productId:A.id,currentPrice:A.price,size:"md",showBadge:!1})}),A.stock<=5&&A.stock>0&&g.jsxs("div",{style:{color:"#f73",fontSize:"12px",marginBottom:"10px"},children:["¡Últimas ",A.stock," unidades!"]}),A.stock===0&&g.jsx("div",{style:{color:"red",fontSize:"12px",marginBottom:"10px"},children:"Sin stock"}),g.jsx("div",{style:{color:"#2563eb",fontSize:"14px",marginTop:"auto",fontWeight:"500"},children:"Ver detalles"})]})]},A.id)})})}),g.jsx(bT,{isOpen:o,onClose:()=>l(!1),items:i,setItems:s}),g.jsx(Op,{})]})},oO=()=>{const{id:t}=Ix(),e=pi(),[n,r]=j.useState(null),[i,s]=j.useState([]),[o,l]=j.useState(!0),{cartItems:u,setCartItems:c,cartOpen:d,setCartOpen:p,addToCart:m}=Dp();return j.useEffect(()=>{(async()=>{l(!0);try{const A=En(Se,"products",t),k=await RT(A);if(k.exists()){const N={id:k.id,...k.data()};if(r(N),UT(N.id,N.price),iO(N),N.category){const w=Xi(Tt(Se,"products"),nD("category","==",N.category),S_(5)),x=(await cu(w)).docs.map(D=>({id:D.id,...D.data()})).filter(D=>D.id!==N.id);s(x)}else{const w=Xi(Tt(Se,"products"),S_(5)),v=await cu(w);s(v.docs.map(x=>({id:x.id,...x.data()})).filter(x=>x.id!==N.id).slice(0,4))}}else r(null)}catch(A){console.error("Error fetching product:",A)}l(!1)})(),window.scrollTo(0,0)},[t]),o?g.jsxs("div",{style:{minHeight:"100vh",background:"#f5f5f5"},children:[g.jsx(_l,{}),g.jsx("div",{style:{padding:"40px",textAlign:"center"},children:"Cargando producto..."})]}):n?g.jsxs("div",{style:{minHeight:"100vh",background:"#f5f5f5",paddingBottom:"40px"},children:[g.jsx(_l,{}),g.jsxs("div",{className:"ml-container",style:{marginTop:"20px"},children:[g.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center",marginBottom:"10px"},children:[g.jsx("span",{onClick:()=>e("/store"),style:{color:"#3483fa",cursor:"pointer",fontSize:"14px"},children:"Volver al listado"}),g.jsx("span",{style:{color:"#666",fontSize:"14px"},children:"|"}),g.jsx("span",{style:{color:"#666",fontSize:"14px"},children:n.category||"Sin categoría"})]}),g.jsxs("div",{style:{background:"#fff",borderRadius:"8px",padding:"30px",display:"flex",gap:"40px",boxShadow:"0 1px 2px rgba(0,0,0,0.1)",flexDirection:"row",flexWrap:"wrap"},children:[g.jsx("div",{style:{flex:"1 1 400px",display:"flex",justifyContent:"center"},children:g.jsx("img",{src:n.imageUrl||"https://via.placeholder.com/400",alt:n.name,style:{maxWidth:"100%",maxHeight:"500px",objectFit:"contain"}})}),g.jsxs("div",{style:{flex:"1 1 300px",display:"flex",flexDirection:"column"},children:[g.jsx("span",{style:{color:"#666",fontSize:"14px",marginBottom:"5px"},children:"Nuevo"}),g.jsx("h1",{style:{margin:"0 0 15px 0",fontSize:"24px",fontWeight:500,color:"#333"},children:n.name}),g.jsx("div",{style:{marginBottom:"20px"},children:g.jsx(Ld,{productId:n.id,currentPrice:n.price,size:"lg",showBadge:!0})}),g.jsxs("div",{style:{marginBottom:"30px"},children:[g.jsx("div",{style:{fontSize:"16px",fontWeight:500,color:n.stock>0?"#16a34a":"red",marginBottom:"5px"},children:n.stock>0?"Stock disponible":"Sin stock"}),n.stock<=5&&n.stock>0&&g.jsxs("div",{style:{color:"#ea580c",fontSize:"14px"},children:["¡Apúrate! Últimas ",n.stock," unidades"]})]}),g.jsx("button",{className:"ml-button",style:{padding:"16px",fontSize:"16px",background:n.stock===0?"#ccc":"#3483fa",color:"white",border:"none",borderRadius:"6px",cursor:n.stock===0?"not-allowed":"pointer",fontWeight:600,transition:"background 0.2s"},onClick:()=>m(n),disabled:n.stock===0,children:n.stock===0?"Agotado":"Agregar al carrito"}),g.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"20px",color:"#666",fontSize:"14px"},children:[g.jsx("span",{style:{color:"#16a34a"},children:"✔️ Compra Protegida"}),"recibe el producto que esperabas o te devolvemos tu dinero."]}),g.jsxs("div",{style:{marginTop:"40px",borderTop:"1px solid #eee",paddingTop:"20px"},children:[g.jsx("h2",{style:{fontSize:"20px",fontWeight:400,marginBottom:"20px"},children:"Descripción del producto"}),g.jsx("p",{style:{color:"#666",lineHeight:"1.5",whiteSpace:"pre-wrap"},children:n.description||"Este producto no tiene descripción."})]})]})]}),i.length>0&&g.jsxs("div",{style:{marginTop:"40px",background:"#fff",borderRadius:"8px",padding:"30px",boxShadow:"0 1px 2px rgba(0,0,0,0.1)"},children:[g.jsx("h2",{style:{margin:"0 0 20px 0",fontSize:"24px",fontWeight:400,color:"#333"},children:"Publicaciones similares"}),g.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"20px"},children:i.map(I=>g.jsxs("div",{style:{padding:"0",display:"flex",flexDirection:"column",cursor:"pointer",border:"1px solid #eee",borderRadius:"8px",transition:"box-shadow 0.2s"},onMouseOver:A=>A.currentTarget.style.boxShadow="0 4px 8px rgba(0,0,0,0.1)",onMouseOut:A=>A.currentTarget.style.boxShadow="none",onClick:()=>e(`/product/${I.id}`),children:[g.jsx("img",{src:I.imageUrl||"https://via.placeholder.com/200",alt:I.name,style:{width:"100%",height:"200px",objectFit:"contain",background:"#fff",padding:"10px",borderTopLeftRadius:"8px",borderTopRightRadius:"8px"}}),g.jsxs("div",{style:{padding:"15px",display:"flex",flexDirection:"column",flex:1},children:[g.jsx("div",{style:{marginBottom:"5px"},children:g.jsx(Ld,{productId:I.id,currentPrice:I.price,size:"md",showBadge:!1})}),g.jsx("div",{style:{fontSize:"14px",color:"#666",lineHeight:"1.3"},children:I.name})]})]},I.id))})]})]}),g.jsx(bT,{isOpen:d,onClose:()=>p(!1),items:u,setItems:c}),g.jsx(Op,{})]}):g.jsxs("div",{style:{minHeight:"100vh",background:"#f5f5f5"},children:[g.jsx(_l,{}),g.jsx("div",{style:{padding:"40px",textAlign:"center"},children:"Producto no encontrado"}),g.jsx("div",{style:{textAlign:"center"},children:g.jsx("button",{className:"ml-button",onClick:()=>e("/store"),children:"Volver a la tienda"})})]})},aO=({onClose:t,editingProduct:e})=>{const[n,r]=j.useState(""),[i,s]=j.useState(""),[o,l]=j.useState(""),[u,c]=j.useState(""),[d,p]=j.useState(""),[m,I]=j.useState(""),[A,k]=j.useState(!1),[N,w]=j.useState([]);j.useEffect(()=>{(async()=>{try{const V=(await cu(Tt(Se,"categories"))).docs.map(F=>F.data().name).filter(Boolean);w(V)}catch(D){console.error("Error fetching categories:",D)}})(),e&&(r(e.name),s(e.description),l(e.price),c(e.stock),p(e.category||""),I(e.imageUrl||""))},[e]);const v=async x=>{x.preventDefault(),k(!0);try{const D={name:n,description:i,price:parseFloat(o),stock:parseInt(u),category:d,imageUrl:m,updatedAt:new Date};e?await Od(En(Se,"products",e.id),D):await hu(Tt(Se,"products"),{...D,createdAt:new Date}),t()}catch(D){console.error("Error in handleSubmit:",D),alert("Error al guardar el producto: "+D.message)}finally{k(!1)}};return g.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3},children:g.jsxs("div",{className:"ml-card",style:{width:"100%",maxWidth:"500px",maxHeight:"90vh",overflowY:"auto"},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"20px"},children:[g.jsx("h2",{children:e?"Editar Producto":"Nuevo Producto"}),g.jsx(DT,{style:{cursor:"pointer"},onClick:t})]}),g.jsxs("form",{onSubmit:v,children:[g.jsxs("div",{style:{marginBottom:"16px"},children:[g.jsx("label",{children:"Nombre"}),g.jsx("input",{type:"text",className:"ml-input",value:n,onChange:x=>r(x.target.value),required:!0})]}),g.jsxs("div",{style:{marginBottom:"16px"},children:[g.jsx("label",{children:"Descripción"}),g.jsx("textarea",{className:"ml-input",style:{minHeight:"100px"},value:i,onChange:x=>s(x.target.value),required:!0})]}),g.jsxs("div",{style:{display:"flex",gap:"16px",marginBottom:"16px"},children:[g.jsxs("div",{style:{flex:1},children:[g.jsx("label",{children:"Precio ($)"}),g.jsx("input",{type:"number",className:"ml-input",value:o,onChange:x=>l(x.target.value),onWheel:x=>x.target.blur(),required:!0})]}),g.jsxs("div",{style:{flex:1},children:[g.jsx("label",{children:"Stock"}),g.jsx("input",{type:"number",className:"ml-input",value:u,onChange:x=>c(x.target.value),onWheel:x=>x.target.blur(),required:!0})]})]}),g.jsxs("div",{style:{marginBottom:"16px"},children:[g.jsx("label",{children:"Categoría"}),g.jsxs("select",{className:"ml-input",value:d,onChange:x=>p(x.target.value),required:!0,children:[g.jsx("option",{value:"",disabled:!0,children:"Seleccionar categoría..."}),N.map((x,D)=>g.jsx("option",{value:x,children:x},D))]})]}),g.jsxs("div",{style:{marginBottom:"24px"},children:[g.jsx("label",{children:"Enlace de la Imagen (URL)"}),g.jsx("input",{type:"text",className:"ml-input",value:m,onChange:x=>I(x.target.value),placeholder:"https://ejemplo.com/imagen.jpg"})]}),g.jsx("button",{type:"submit",className:"ml-button",style:{width:"100%"},disabled:A,children:A?"Guardando...":e?"Actualizar Producto":"Crear Producto"})]})]})})},b_=["Tecnología","Moda","Supermercado"],lO=()=>{const[t,e]=j.useState("products"),[n,r]=j.useState([]),[i,s]=j.useState([]),[o,l]=j.useState([]),[u,c]=j.useState(!1),[d,p]=j.useState(null),[m,I]=j.useState(!1),A=pi();j.useEffect(()=>{const V=Vd.onAuthStateChanged(async P=>{if(!P){A("/login");return}const De=(await cu(Tt(Se,"categories"))).docs.map(ht=>ht.data().name);for(const ht of b_)De.includes(ht)||await hu(Tt(Se,"categories"),{name:ht})}),F=Xi(Tt(Se,"products")),E=Eo(F,P=>{r(P.docs.map(S=>({id:S.id,...S.data()})))}),_=Xi(Tt(Se,"orders")),T=Eo(_,P=>{s(P.docs.map(S=>({id:S.id,...S.data()})))}),R=Xi(Tt(Se,"categories")),C=Eo(R,P=>{l(P.docs.map(S=>({id:S.id,...S.data()})))});return()=>{V(),E(),T(),C()}},[A]);const k=()=>{AC(Vd),A("/login")},N=async()=>{const V=window.prompt("Nombre de la nueva categoría:");if(V&&V.trim()!=="")try{await hu(Tt(Se,"categories"),{name:V.trim()})}catch(F){console.error("Error creating category:",F),alert("Hubo un error al crear la categoría.")}},w=async V=>{window.confirm("¿Seguro que querés eliminar esta categoría?")&&await ch(En(Se,"categories",V))},v=async V=>{window.confirm("¿Seguro que quieres eliminar este producto?")&&await ch(En(Se,"products",V))},x=async V=>{window.confirm("¿Seguro que quieres eliminar este pedido del historial?")&&await ch(En(Se,"orders",V))},D=async(V,F,E)=>{try{if(F==="confirmado")for(const _ of E){const T=En(Se,"products",_.productId);n.find(C=>C.id===_.productId)&&await Od(T,{stock:eD(-_.quantity)})}await Od(En(Se,"orders",V),{status:F})}catch(_){console.error("Error updating order:",_)}};return g.jsxs("div",{className:"admin-layout",children:[g.jsxs("div",{className:"admin-mobile-topbar",children:[g.jsx("button",{style:{background:"none",border:"none",color:"white",cursor:"pointer",padding:0},onClick:()=>I(!0),children:g.jsx(WD,{size:24})}),g.jsx("h2",{children:"Admin Shop"})]}),g.jsx("div",{className:`admin-overlay ${m?"open":""}`,onClick:()=>I(!1)}),g.jsxs("div",{className:`admin-sidebar ${m?"open":""}`,children:[g.jsxs("div",{className:"admin-sidebar-header",children:[g.jsx("h2",{style:{marginBottom:"40px",marginTop:0},children:"Admin Shop"}),g.jsx("button",{className:"admin-menu-toggle",onClick:()=>I(!1),style:{fontSize:"24px",background:"none",border:"none",color:"white",cursor:"pointer",padding:0},children:"✕"})]}),g.jsxs("div",{className:"admin-menu-items",children:[g.jsxs("div",{onClick:()=>e("products"),style:{display:"flex",alignItems:"center",padding:"12px",cursor:"pointer",background:t==="products"?"#444":"transparent",borderRadius:"4px",marginBottom:"8px"},children:[g.jsx(HD,{size:20,style:{marginRight:"10px"}})," Productos"]}),g.jsxs("div",{onClick:()=>e("orders"),style:{display:"flex",alignItems:"center",padding:"12px",cursor:"pointer",background:t==="orders"?"#444":"transparent",borderRadius:"4px",marginBottom:"8px"},children:[g.jsx(BD,{size:20,style:{marginRight:"10px"}})," Pedidos"]}),g.jsxs("div",{onClick:()=>e("categories"),style:{display:"flex",alignItems:"center",padding:"12px",cursor:"pointer",background:t==="categories"?"#444":"transparent",borderRadius:"4px",marginBottom:"8px"},children:[g.jsx(O_,{size:20,style:{marginRight:"10px"}})," Categorías"]}),g.jsxs("div",{onClick:k,style:{display:"flex",alignItems:"center",padding:"12px",cursor:"pointer",marginTop:"40px",color:"#ff6b6b"},children:[g.jsx($D,{size:20,style:{marginRight:"10px"}})," Cerrar Sesión"]})]})]}),g.jsxs("div",{className:"admin-main",children:[g.jsxs("div",{className:"admin-header-actions",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"30px"},children:[g.jsx("h1",{children:t==="products"?"Inventario de Productos":t==="orders"?"Pedidos de Clientes":"Gestión de Categorías"}),t==="products"&&g.jsxs("button",{className:"ml-button",onClick:()=>{p(null),c(!0)},children:[g.jsx(D_,{size:20,style:{verticalAlign:"middle",marginRight:"5px"}})," Nuevo Producto"]}),t==="categories"&&g.jsxs("button",{className:"ml-button",onClick:N,style:{background:"#28a745"},children:[g.jsx(D_,{size:20,style:{verticalAlign:"middle",marginRight:"5px"}})," Nueva Categoría"]})]}),t==="categories"&&g.jsxs("div",{className:"ml-card",children:[o.length===0&&g.jsx("p",{style:{color:"#999",textAlign:"center",padding:"20px"},children:"No hay categorías creadas aún."}),o.map(V=>{const F=b_.includes(V.name);return g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 16px",borderBottom:"1px solid #eee"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[g.jsx(O_,{size:18,color:F?"#ff9500":"#3483fa"}),g.jsx("span",{style:{fontWeight:500},children:V.name}),F&&g.jsx("span",{style:{fontSize:"11px",background:"#fff3cd",color:"#856404",padding:"2px 8px",borderRadius:"10px"},children:"predeterminada"})]}),F?g.jsx("span",{style:{fontSize:"12px",color:"#ccc"},children:"🔒"}):g.jsx(yl,{size:18,style:{cursor:"pointer",color:"#ff6b6b"},onClick:()=>w(V.id)})]},V.id)})]}),t==="products"&&g.jsx("div",{className:"ml-card table-responsive",children:g.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[g.jsx("thead",{children:g.jsxs("tr",{style:{borderBottom:"2px solid #eee",textAlign:"left"},children:[g.jsx("th",{style:{padding:"12px"},children:"Producto"}),g.jsx("th",{style:{padding:"12px"},children:"Precio"}),g.jsx("th",{style:{padding:"12px"},children:"Stock"}),g.jsx("th",{style:{padding:"12px"},children:"Estado"}),g.jsx("th",{style:{padding:"12px"},children:"Acciones"})]})}),g.jsx("tbody",{children:n.map(V=>g.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[g.jsx("td",{style:{padding:"12px"},children:g.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[g.jsx("img",{src:V.imageUrl,alt:V.name,style:{width:"40px",height:"40px",objectFit:"contain",background:"#fff",borderRadius:"4px",marginRight:"10px"}}),g.jsx("span",{children:V.name})]})}),g.jsxs("td",{style:{padding:"12px"},children:["$",ft(V.price)]}),g.jsx("td",{style:{padding:"12px"},children:V.stock}),g.jsx("td",{style:{padding:"12px"},children:V.stock>0?g.jsx("span",{style:{color:"green"},children:"Disponible"}):g.jsx("span",{style:{color:"red"},children:"Sin Stock"})}),g.jsxs("td",{style:{padding:"12px"},children:[g.jsx(KD,{size:18,style:{marginRight:"10px",cursor:"pointer",color:"#3483fa"},onClick:()=>{p(V),c(!0)}}),g.jsx(yl,{size:18,style:{cursor:"pointer",color:"#ff6b6b"},onClick:()=>v(V.id)})]})]},V.id))})]})}),t==="orders"&&g.jsx("div",{style:{display:"grid",gap:"20px"},children:i.map(V=>g.jsxs("div",{className:"ml-card",children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"15px"},children:[g.jsxs("strong",{children:["Pedido #",V.id.slice(-6).toUpperCase()]}),g.jsx("span",{style:{padding:"4px 8px",borderRadius:"4px",fontSize:"12px",background:V.status==="pendiente"?"#fff3cd":V.status==="confirmado"?"#d4edda":"#f8d7da",color:V.status==="pendiente"?"#856404":V.status==="confirmado"?"#155724":"#721c24"},children:V.status.toUpperCase()})]}),g.jsxs("div",{style:{marginBottom:"15px"},children:[g.jsxs("p",{children:[g.jsx("strong",{children:"Cliente:"})," ",V.customerName]}),g.jsxs("p",{children:[g.jsx("strong",{children:"Teléfono:"})," ",V.customerPhone]}),g.jsxs("p",{children:[g.jsx("strong",{children:"Método de pago:"})," ",V.paymentMethod||"No especificado"]}),V.shippingOption&&g.jsxs("p",{children:[g.jsx("strong",{children:"Envío:"})," ",V.shippingOption]}),V.customerAddress&&g.jsxs("p",{children:[g.jsx("strong",{children:"Dirección:"})," ",V.customerAddress]})]}),g.jsxs("div",{style:{borderTop:"1px solid #eee",paddingTop:"10px"},children:[V.items.map((F,E)=>g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"14px"},children:[g.jsxs("span",{children:[F.name," x ",F.quantity]}),g.jsxs("span",{children:["$",ft(F.price*F.quantity)]})]},E)),g.jsxs("div",{style:{marginTop:"10px",textAlign:"right",fontWeight:"bold"},children:["Total: $",ft(V.total)]})]}),g.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"15px"},children:[V.status==="pendiente"&&g.jsxs(g.Fragment,{children:[g.jsx("button",{className:"ml-button",style:{background:"#28a745",flex:1},onClick:()=>D(V.id,"confirmado",V.items),children:"Confirmar & Descontar"}),g.jsx("button",{className:"ml-button",style:{background:"#dc3545",flex:1},onClick:()=>D(V.id,"cancelado"),children:"Cancelar"})]}),V.status!=="pendiente"&&g.jsxs("button",{className:"ml-button",style:{background:"#6c757d",color:"white",flex:1},onClick:()=>x(V.id),children:[g.jsx(yl,{size:18,style:{verticalAlign:"middle",marginRight:"5px"}})," Borrar"]}),g.jsx("a",{href:`https://wa.me/${V.customerPhone}?text=Hola%20${V.customerName},%20sobre%20tu%20pedido%20%23${V.id.slice(-6).toUpperCase()}`,target:"_blank",className:"ml-button",style:{background:"#25D366",textAlign:"center",textDecoration:"none",flex:1},children:"WhatsApp"})]})]},V.id))}),u&&g.jsx(aO,{onClose:()=>c(!1),editingProduct:d})]})]})},uO=()=>{const[t,e]=j.useState(""),[n,r]=j.useState(""),[i,s]=j.useState(""),o=pi(),l=async u=>{u.preventDefault();try{await IC(Vd,t,n),o("/admin")}catch{s("Error al iniciar sesión. Verifica tus credenciales.")}};return g.jsx("div",{className:"ml-container",style:{display:"flex",justifyContent:"center",alignItems:"center",height:"80vh"},children:g.jsxs("div",{className:"ml-card",style:{width:"100%",maxWidth:"400px"},children:[g.jsx("h2",{style:{textAlign:"center",marginBottom:"24px"},children:"Panel de Acceso"}),i&&g.jsx("p",{style:{color:"red",textAlign:"center"},children:i}),g.jsxs("form",{onSubmit:l,children:[g.jsxs("div",{style:{marginBottom:"16px"},children:[g.jsx("label",{children:"Email"}),g.jsx("input",{type:"email",className:"ml-input",value:t,onChange:u=>e(u.target.value),required:!0})]}),g.jsxs("div",{style:{marginBottom:"24px"},children:[g.jsx("label",{children:"Contraseña"}),g.jsx("input",{type:"password",className:"ml-input",value:n,onChange:u=>r(u.target.value),required:!0})]}),g.jsx("button",{type:"submit",className:"ml-button",style:{width:"100%"},children:"Ingresar"})]})]})})},cO=()=>{const t=pi();return g.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:[g.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",background:"#f5f5f5",padding:"20px"},children:g.jsxs("div",{style:{maxWidth:"600px",width:"100%",textAlign:"center"},children:[g.jsx("h1",{style:{marginBottom:"40px",color:"#333"},children:"Bienvenido al Portal"}),g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"20px"},children:[g.jsxs("div",{onClick:()=>t("/store"),className:"ml-card",style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",padding:"40px 20px",transition:"transform 0.2s"},onMouseEnter:e=>e.currentTarget.style.transform="translateY(-5px)",onMouseLeave:e=>e.currentTarget.style.transform="translateY(0)",children:[g.jsx("div",{style:{background:"#2563eb",padding:"20px",borderRadius:"50%",marginBottom:"20px"},children:g.jsx(YD,{size:48,color:"white"})}),g.jsx("h2",{style:{margin:0,fontSize:"20px"},children:"Entrar como Cliente"}),g.jsx("p",{style:{color:"#666",marginTop:"10px",marginBottom:0},children:"Ver catálogo y comprar"})]}),g.jsxs("div",{onClick:()=>t("/admin"),className:"ml-card",style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",padding:"40px 20px",transition:"transform 0.2s"},onMouseEnter:e=>e.currentTarget.style.transform="translateY(-5px)",onMouseLeave:e=>e.currentTarget.style.transform="translateY(0)",children:[g.jsx("div",{style:{background:"#e0e0e0",padding:"20px",borderRadius:"50%",marginBottom:"20px"},children:g.jsx(XD,{size:48,color:"#333"})}),g.jsx("h2",{style:{margin:0,fontSize:"20px"},children:"Entrar como Admin"}),g.jsx("p",{style:{color:"#666",marginTop:"10px",marginBottom:0},children:"Gestionar panel y stock"})]})]})]})}),g.jsx(Op,{})]})},hO=()=>g.jsx("a",{href:"https://wa.me/5491100000000",target:"_blank",rel:"noopener noreferrer",style:{position:"fixed",bottom:"20px",right:"20px",backgroundColor:"#25D366",color:"white",borderRadius:"50px",width:"60px",height:"60px",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0px 4px 10px rgba(0,0,0,0.3)",zIndex:1e3,cursor:"pointer",transition:"transform 0.3s ease"},onMouseOver:e=>e.currentTarget.style.transform="scale(1.1)",onMouseOut:e=>e.currentTarget.style.transform="scale(1)","aria-label":"Contactar por WhatsApp",children:g.jsx(qD,{size:32})});function dO(){return g.jsx(ZD,{children:g.jsxs($x,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:[g.jsxs(Fx,{children:[g.jsx(Br,{path:"/",element:g.jsx(cO,{})}),g.jsx(Br,{path:"/store",element:g.jsx(sO,{})}),g.jsx(Br,{path:"/product/:id",element:g.jsx(oO,{})}),g.jsx(Br,{path:"/admin",element:g.jsx(lO,{})}),g.jsx(Br,{path:"/login",element:g.jsx(uO,{})}),g.jsx(Br,{path:"*",element:g.jsx("div",{children:"404 - Not Found"})})]}),g.jsx(hO,{})]})})}fh.createRoot(document.getElementById("root")).render(g.jsx(H_.StrictMode,{children:g.jsx(dO,{})}));
