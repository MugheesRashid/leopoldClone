(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Ny(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ug={exports:{}},nc={},Ig={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nl=Symbol.for("react.element"),Uy=Symbol.for("react.portal"),Iy=Symbol.for("react.fragment"),Fy=Symbol.for("react.strict_mode"),Oy=Symbol.for("react.profiler"),ky=Symbol.for("react.provider"),zy=Symbol.for("react.context"),By=Symbol.for("react.forward_ref"),Vy=Symbol.for("react.suspense"),Hy=Symbol.for("react.memo"),Gy=Symbol.for("react.lazy"),lm=Symbol.iterator;function Wy(n){return n===null||typeof n!="object"?null:(n=lm&&n[lm]||n["@@iterator"],typeof n=="function"?n:null)}var Fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Og=Object.assign,kg={};function Bo(n,e,t){this.props=n,this.context=e,this.refs=kg,this.updater=t||Fg}Bo.prototype.isReactComponent={};Bo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Bo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function zg(){}zg.prototype=Bo.prototype;function Nh(n,e,t){this.props=n,this.context=e,this.refs=kg,this.updater=t||Fg}var Uh=Nh.prototype=new zg;Uh.constructor=Nh;Og(Uh,Bo.prototype);Uh.isPureReactComponent=!0;var um=Array.isArray,Bg=Object.prototype.hasOwnProperty,Ih={current:null},Vg={key:!0,ref:!0,__self:!0,__source:!0};function Hg(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Bg.call(e,i)&&!Vg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:nl,type:n,key:s,ref:o,props:r,_owner:Ih.current}}function Xy(n,e){return{$$typeof:nl,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Fh(n){return typeof n=="object"&&n!==null&&n.$$typeof===nl}function jy(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var cm=/\/+/g;function Ac(n,e){return typeof n=="object"&&n!==null&&n.key!=null?jy(""+n.key):e.toString(36)}function tu(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case nl:case Uy:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Ac(o,0):i,um(r)?(t="",n!=null&&(t=n.replace(cm,"$&/")+"/"),tu(r,e,t,"",function(u){return u})):r!=null&&(Fh(r)&&(r=Xy(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(cm,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",um(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Ac(s,a);o+=tu(s,e,t,l,r)}else if(l=Wy(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Ac(s,a++),o+=tu(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ml(n,e,t){if(n==null)return n;var i=[],r=0;return tu(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Yy(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var sn={current:null},nu={transition:null},qy={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:nu,ReactCurrentOwner:Ih};function Gg(){throw Error("act(...) is not supported in production builds of React.")}Oe.Children={map:ml,forEach:function(n,e,t){ml(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return ml(n,function(){e++}),e},toArray:function(n){return ml(n,function(e){return e})||[]},only:function(n){if(!Fh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Oe.Component=Bo;Oe.Fragment=Iy;Oe.Profiler=Oy;Oe.PureComponent=Nh;Oe.StrictMode=Fy;Oe.Suspense=Vy;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qy;Oe.act=Gg;Oe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Og({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ih.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Bg.call(e,l)&&!Vg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:nl,type:n.type,key:r,ref:s,props:i,_owner:o}};Oe.createContext=function(n){return n={$$typeof:zy,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:ky,_context:n},n.Consumer=n};Oe.createElement=Hg;Oe.createFactory=function(n){var e=Hg.bind(null,n);return e.type=n,e};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(n){return{$$typeof:By,render:n}};Oe.isValidElement=Fh;Oe.lazy=function(n){return{$$typeof:Gy,_payload:{_status:-1,_result:n},_init:Yy}};Oe.memo=function(n,e){return{$$typeof:Hy,type:n,compare:e===void 0?null:e}};Oe.startTransition=function(n){var e=nu.transition;nu.transition={};try{n()}finally{nu.transition=e}};Oe.unstable_act=Gg;Oe.useCallback=function(n,e){return sn.current.useCallback(n,e)};Oe.useContext=function(n){return sn.current.useContext(n)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(n){return sn.current.useDeferredValue(n)};Oe.useEffect=function(n,e){return sn.current.useEffect(n,e)};Oe.useId=function(){return sn.current.useId()};Oe.useImperativeHandle=function(n,e,t){return sn.current.useImperativeHandle(n,e,t)};Oe.useInsertionEffect=function(n,e){return sn.current.useInsertionEffect(n,e)};Oe.useLayoutEffect=function(n,e){return sn.current.useLayoutEffect(n,e)};Oe.useMemo=function(n,e){return sn.current.useMemo(n,e)};Oe.useReducer=function(n,e,t){return sn.current.useReducer(n,e,t)};Oe.useRef=function(n){return sn.current.useRef(n)};Oe.useState=function(n){return sn.current.useState(n)};Oe.useSyncExternalStore=function(n,e,t){return sn.current.useSyncExternalStore(n,e,t)};Oe.useTransition=function(){return sn.current.useTransition()};Oe.version="18.3.1";Ig.exports=Oe;var _t=Ig.exports;const Xi=Ny(_t);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $y=_t,Ky=Symbol.for("react.element"),Zy=Symbol.for("react.fragment"),Qy=Object.prototype.hasOwnProperty,Jy=$y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eS={key:!0,ref:!0,__self:!0,__source:!0};function Wg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Qy.call(e,i)&&!eS.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Ky,type:n,key:s,ref:o,props:r,_owner:Jy.current}}nc.Fragment=Zy;nc.jsx=Wg;nc.jsxs=Wg;Ug.exports=nc;var O=Ug.exports,Xg={exports:{}},In={},jg={exports:{}},Yg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(L,$){var Z=L.length;L.push($);e:for(;0<Z;){var se=Z-1>>>1,me=L[se];if(0<r(me,$))L[se]=$,L[Z]=me,Z=se;else break e}}function t(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var $=L[0],Z=L.pop();if(Z!==$){L[0]=Z;e:for(var se=0,me=L.length,ke=me>>>1;se<ke;){var W=2*(se+1)-1,te=L[W],pe=W+1,oe=L[pe];if(0>r(te,Z))pe<me&&0>r(oe,te)?(L[se]=oe,L[pe]=Z,se=pe):(L[se]=te,L[W]=Z,se=W);else if(pe<me&&0>r(oe,Z))L[se]=oe,L[pe]=Z,se=pe;else break e}}return $}function r(L,$){var Z=L.sortIndex-$.sortIndex;return Z!==0?Z:L.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var $=t(u);$!==null;){if($.callback===null)i(u);else if($.startTime<=L)i(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=t(u)}}function y(L){if(_=!1,x(L),!g)if(t(l)!==null)g=!0,G(C);else{var $=t(u);$!==null&&q(y,$.startTime-L)}}function C(L,$){g=!1,_&&(_=!1,d(R),R=-1),p=!0;var Z=h;try{for(x($),f=t(l);f!==null&&(!(f.expirationTime>$)||L&&!b());){var se=f.callback;if(typeof se=="function"){f.callback=null,h=f.priorityLevel;var me=se(f.expirationTime<=$);$=n.unstable_now(),typeof me=="function"?f.callback=me:f===t(l)&&i(l),x($)}else i(l);f=t(l)}if(f!==null)var ke=!0;else{var W=t(u);W!==null&&q(y,W.startTime-$),ke=!1}return ke}finally{f=null,h=Z,p=!1}}var A=!1,T=null,R=-1,S=5,M=-1;function b(){return!(n.unstable_now()-M<S)}function z(){if(T!==null){var L=n.unstable_now();M=L;var $=!0;try{$=T(!0,L)}finally{$?F():(A=!1,T=null)}}else A=!1}var F;if(typeof v=="function")F=function(){v(z)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,Y=j.port2;j.port1.onmessage=z,F=function(){Y.postMessage(null)}}else F=function(){m(z,0)};function G(L){T=L,A||(A=!0,F())}function q(L,$){R=m(function(){L(n.unstable_now())},$)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,G(C))},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(L){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var Z=h;h=$;try{return L()}finally{h=Z}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(L,$){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Z=h;h=L;try{return $()}finally{h=Z}},n.unstable_scheduleCallback=function(L,$,Z){var se=n.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?se+Z:se):Z=se,L){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=Z+me,L={id:c++,callback:$,priorityLevel:L,startTime:Z,expirationTime:me,sortIndex:-1},Z>se?(L.sortIndex=Z,e(u,L),t(l)===null&&L===t(u)&&(_?(d(R),R=-1):_=!0,q(y,Z-se))):(L.sortIndex=me,e(l,L),g||p||(g=!0,G(C))),L},n.unstable_shouldYield=b,n.unstable_wrapCallback=function(L){var $=h;return function(){var Z=h;h=$;try{return L.apply(this,arguments)}finally{h=Z}}}})(Yg);jg.exports=Yg;var tS=jg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nS=_t,Nn=tS;function ne(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qg=new Set,Pa={};function Cs(n,e){Mo(n,e),Mo(n+"Capture",e)}function Mo(n,e){for(Pa[n]=e,n=0;n<e.length;n++)qg.add(e[n])}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zf=Object.prototype.hasOwnProperty,iS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fm={},dm={};function rS(n){return zf.call(dm,n)?!0:zf.call(fm,n)?!1:iS.test(n)?dm[n]=!0:(fm[n]=!0,!1)}function sS(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function oS(n,e,t,i){if(e===null||typeof e>"u"||sS(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Ht[n]=new on(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Ht[e]=new on(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Ht[n]=new on(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Ht[n]=new on(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Ht[n]=new on(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Ht[n]=new on(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Ht[n]=new on(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Ht[n]=new on(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Ht[n]=new on(n,5,!1,n.toLowerCase(),null,!1,!1)});var Oh=/[\-:]([a-z])/g;function kh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Oh,kh);Ht[e]=new on(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Oh,kh);Ht[e]=new on(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Oh,kh);Ht[e]=new on(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Ht[n]=new on(n,1,!1,n.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Ht[n]=new on(n,1,!1,n.toLowerCase(),null,!0,!0)});function zh(n,e,t,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(oS(e,t,r,i)&&(t=null),i||r===null?rS(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var nr=nS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_l=Symbol.for("react.element"),qs=Symbol.for("react.portal"),$s=Symbol.for("react.fragment"),Bh=Symbol.for("react.strict_mode"),Bf=Symbol.for("react.profiler"),$g=Symbol.for("react.provider"),Kg=Symbol.for("react.context"),Vh=Symbol.for("react.forward_ref"),Vf=Symbol.for("react.suspense"),Hf=Symbol.for("react.suspense_list"),Hh=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),Zg=Symbol.for("react.offscreen"),hm=Symbol.iterator;function $o(n){return n===null||typeof n!="object"?null:(n=hm&&n[hm]||n["@@iterator"],typeof n=="function"?n:null)}var xt=Object.assign,Cc;function ua(n){if(Cc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Cc=e&&e[1]||""}return`
`+Cc+n}var Rc=!1;function Pc(n,e){if(!n||Rc)return"";Rc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Rc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?ua(n):""}function aS(n){switch(n.tag){case 5:return ua(n.type);case 16:return ua("Lazy");case 13:return ua("Suspense");case 19:return ua("SuspenseList");case 0:case 2:case 15:return n=Pc(n.type,!1),n;case 11:return n=Pc(n.type.render,!1),n;case 1:return n=Pc(n.type,!0),n;default:return""}}function Gf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case $s:return"Fragment";case qs:return"Portal";case Bf:return"Profiler";case Bh:return"StrictMode";case Vf:return"Suspense";case Hf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Kg:return(n.displayName||"Context")+".Consumer";case $g:return(n._context.displayName||"Context")+".Provider";case Vh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Hh:return e=n.displayName||null,e!==null?e:Gf(n.type)||"Memo";case dr:e=n._payload,n=n._init;try{return Gf(n(e))}catch{}}return null}function lS(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gf(e);case 8:return e===Bh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ur(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Qg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uS(n){var e=Qg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function gl(n){n._valueTracker||(n._valueTracker=uS(n))}function Jg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Qg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Mu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Wf(n,e){var t=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function pm(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ur(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function e0(n,e){e=e.checked,e!=null&&zh(n,"checked",e,!1)}function Xf(n,e){e0(n,e);var t=Ur(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?jf(n,e.type,t):e.hasOwnProperty("defaultValue")&&jf(n,e.type,Ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function mm(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function jf(n,e,t){(e!=="number"||Mu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var ca=Array.isArray;function uo(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ur(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Yf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function _m(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ne(92));if(ca(t)){if(1<t.length)throw Error(ne(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ur(t)}}function t0(n,e){var t=Ur(e.value),i=Ur(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function gm(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function n0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?n0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var vl,i0=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(vl=vl||document.createElement("div"),vl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=vl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ba(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ga={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cS=["Webkit","ms","Moz","O"];Object.keys(ga).forEach(function(n){cS.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),ga[e]=ga[n]})});function r0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||ga.hasOwnProperty(n)&&ga[n]?(""+e).trim():e+"px"}function s0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=r0(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var fS=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $f(n,e){if(e){if(fS[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Kf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zf=null;function Gh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Qf=null,co=null,fo=null;function vm(n){if(n=sl(n)){if(typeof Qf!="function")throw Error(ne(280));var e=n.stateNode;e&&(e=ac(e),Qf(n.stateNode,n.type,e))}}function o0(n){co?fo?fo.push(n):fo=[n]:co=n}function a0(){if(co){var n=co,e=fo;if(fo=co=null,vm(n),e)for(n=0;n<e.length;n++)vm(e[n])}}function l0(n,e){return n(e)}function u0(){}var bc=!1;function c0(n,e,t){if(bc)return n(e,t);bc=!0;try{return l0(n,e,t)}finally{bc=!1,(co!==null||fo!==null)&&(u0(),a0())}}function La(n,e){var t=n.stateNode;if(t===null)return null;var i=ac(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ne(231,e,typeof t));return t}var Jf=!1;if(qi)try{var Ko={};Object.defineProperty(Ko,"passive",{get:function(){Jf=!0}}),window.addEventListener("test",Ko,Ko),window.removeEventListener("test",Ko,Ko)}catch{Jf=!1}function dS(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var va=!1,Eu=null,Tu=!1,ed=null,hS={onError:function(n){va=!0,Eu=n}};function pS(n,e,t,i,r,s,o,a,l){va=!1,Eu=null,dS.apply(hS,arguments)}function mS(n,e,t,i,r,s,o,a,l){if(pS.apply(this,arguments),va){if(va){var u=Eu;va=!1,Eu=null}else throw Error(ne(198));Tu||(Tu=!0,ed=u)}}function Rs(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function f0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function xm(n){if(Rs(n)!==n)throw Error(ne(188))}function _S(n){var e=n.alternate;if(!e){if(e=Rs(n),e===null)throw Error(ne(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return xm(r),n;if(s===i)return xm(r),e;s=s.sibling}throw Error(ne(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(t.alternate!==i)throw Error(ne(190))}if(t.tag!==3)throw Error(ne(188));return t.stateNode.current===t?n:e}function d0(n){return n=_S(n),n!==null?h0(n):null}function h0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=h0(n);if(e!==null)return e;n=n.sibling}return null}var p0=Nn.unstable_scheduleCallback,ym=Nn.unstable_cancelCallback,gS=Nn.unstable_shouldYield,vS=Nn.unstable_requestPaint,wt=Nn.unstable_now,xS=Nn.unstable_getCurrentPriorityLevel,Wh=Nn.unstable_ImmediatePriority,m0=Nn.unstable_UserBlockingPriority,wu=Nn.unstable_NormalPriority,yS=Nn.unstable_LowPriority,_0=Nn.unstable_IdlePriority,ic=null,Mi=null;function SS(n){if(Mi&&typeof Mi.onCommitFiberRoot=="function")try{Mi.onCommitFiberRoot(ic,n,void 0,(n.current.flags&128)===128)}catch{}}var ui=Math.clz32?Math.clz32:TS,MS=Math.log,ES=Math.LN2;function TS(n){return n>>>=0,n===0?32:31-(MS(n)/ES|0)|0}var xl=64,yl=4194304;function fa(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Au(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=fa(a):(s&=o,s!==0&&(i=fa(s)))}else o=t&~r,o!==0?i=fa(o):s!==0&&(i=fa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ui(e),r=1<<t,i|=n[t],e&=~r;return i}function wS(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function AS(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-ui(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=wS(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function td(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function g0(){var n=xl;return xl<<=1,!(xl&4194240)&&(xl=64),n}function Lc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function il(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ui(e),n[e]=t}function CS(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ui(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Xh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ui(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Qe=0;function v0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var x0,jh,y0,S0,M0,nd=!1,Sl=[],Mr=null,Er=null,Tr=null,Da=new Map,Na=new Map,pr=[],RS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sm(n,e){switch(n){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Da.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Na.delete(e.pointerId)}}function Zo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=sl(e),e!==null&&jh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function PS(n,e,t,i,r){switch(e){case"focusin":return Mr=Zo(Mr,n,e,t,i,r),!0;case"dragenter":return Er=Zo(Er,n,e,t,i,r),!0;case"mouseover":return Tr=Zo(Tr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Da.set(s,Zo(Da.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Na.set(s,Zo(Na.get(s)||null,n,e,t,i,r)),!0}return!1}function E0(n){var e=ss(n.target);if(e!==null){var t=Rs(e);if(t!==null){if(e=t.tag,e===13){if(e=f0(t),e!==null){n.blockedOn=e,M0(n.priority,function(){y0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function iu(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=id(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Zf=i,t.target.dispatchEvent(i),Zf=null}else return e=sl(t),e!==null&&jh(e),n.blockedOn=t,!1;e.shift()}return!0}function Mm(n,e,t){iu(n)&&t.delete(e)}function bS(){nd=!1,Mr!==null&&iu(Mr)&&(Mr=null),Er!==null&&iu(Er)&&(Er=null),Tr!==null&&iu(Tr)&&(Tr=null),Da.forEach(Mm),Na.forEach(Mm)}function Qo(n,e){n.blockedOn===e&&(n.blockedOn=null,nd||(nd=!0,Nn.unstable_scheduleCallback(Nn.unstable_NormalPriority,bS)))}function Ua(n){function e(r){return Qo(r,n)}if(0<Sl.length){Qo(Sl[0],n);for(var t=1;t<Sl.length;t++){var i=Sl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Mr!==null&&Qo(Mr,n),Er!==null&&Qo(Er,n),Tr!==null&&Qo(Tr,n),Da.forEach(e),Na.forEach(e),t=0;t<pr.length;t++)i=pr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<pr.length&&(t=pr[0],t.blockedOn===null);)E0(t),t.blockedOn===null&&pr.shift()}var ho=nr.ReactCurrentBatchConfig,Cu=!0;function LS(n,e,t,i){var r=Qe,s=ho.transition;ho.transition=null;try{Qe=1,Yh(n,e,t,i)}finally{Qe=r,ho.transition=s}}function DS(n,e,t,i){var r=Qe,s=ho.transition;ho.transition=null;try{Qe=4,Yh(n,e,t,i)}finally{Qe=r,ho.transition=s}}function Yh(n,e,t,i){if(Cu){var r=id(n,e,t,i);if(r===null)Vc(n,e,i,Ru,t),Sm(n,i);else if(PS(r,n,e,t,i))i.stopPropagation();else if(Sm(n,i),e&4&&-1<RS.indexOf(n)){for(;r!==null;){var s=sl(r);if(s!==null&&x0(s),s=id(n,e,t,i),s===null&&Vc(n,e,i,Ru,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Vc(n,e,i,null,t)}}var Ru=null;function id(n,e,t,i){if(Ru=null,n=Gh(i),n=ss(n),n!==null)if(e=Rs(n),e===null)n=null;else if(t=e.tag,t===13){if(n=f0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Ru=n,null}function T0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xS()){case Wh:return 1;case m0:return 4;case wu:case yS:return 16;case _0:return 536870912;default:return 16}default:return 16}}var gr=null,qh=null,ru=null;function w0(){if(ru)return ru;var n,e=qh,t=e.length,i,r="value"in gr?gr.value:gr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return ru=r.slice(n,1<i?1-i:void 0)}function su(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ml(){return!0}function Em(){return!1}function Fn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ml:Em,this.isPropagationStopped=Em,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ml)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ml)},persist:function(){},isPersistent:Ml}),e}var Vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$h=Fn(Vo),rl=xt({},Vo,{view:0,detail:0}),NS=Fn(rl),Dc,Nc,Jo,rc=xt({},rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Jo&&(Jo&&n.type==="mousemove"?(Dc=n.screenX-Jo.screenX,Nc=n.screenY-Jo.screenY):Nc=Dc=0,Jo=n),Dc)},movementY:function(n){return"movementY"in n?n.movementY:Nc}}),Tm=Fn(rc),US=xt({},rc,{dataTransfer:0}),IS=Fn(US),FS=xt({},rl,{relatedTarget:0}),Uc=Fn(FS),OS=xt({},Vo,{animationName:0,elapsedTime:0,pseudoElement:0}),kS=Fn(OS),zS=xt({},Vo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),BS=Fn(zS),VS=xt({},Vo,{data:0}),wm=Fn(VS),HS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XS(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=WS[n])?!!e[n]:!1}function Kh(){return XS}var jS=xt({},rl,{key:function(n){if(n.key){var e=HS[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=su(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?GS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kh,charCode:function(n){return n.type==="keypress"?su(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?su(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),YS=Fn(jS),qS=xt({},rc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Am=Fn(qS),$S=xt({},rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kh}),KS=Fn($S),ZS=xt({},Vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),QS=Fn(ZS),JS=xt({},rc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),eM=Fn(JS),tM=[9,13,27,32],Zh=qi&&"CompositionEvent"in window,xa=null;qi&&"documentMode"in document&&(xa=document.documentMode);var nM=qi&&"TextEvent"in window&&!xa,A0=qi&&(!Zh||xa&&8<xa&&11>=xa),Cm=" ",Rm=!1;function C0(n,e){switch(n){case"keyup":return tM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function R0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ks=!1;function iM(n,e){switch(n){case"compositionend":return R0(e);case"keypress":return e.which!==32?null:(Rm=!0,Cm);case"textInput":return n=e.data,n===Cm&&Rm?null:n;default:return null}}function rM(n,e){if(Ks)return n==="compositionend"||!Zh&&C0(n,e)?(n=w0(),ru=qh=gr=null,Ks=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return A0&&e.locale!=="ko"?null:e.data;default:return null}}var sM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!sM[n.type]:e==="textarea"}function P0(n,e,t,i){o0(i),e=Pu(e,"onChange"),0<e.length&&(t=new $h("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var ya=null,Ia=null;function oM(n){B0(n,0)}function sc(n){var e=Js(n);if(Jg(e))return n}function aM(n,e){if(n==="change")return e}var b0=!1;if(qi){var Ic;if(qi){var Fc="oninput"in document;if(!Fc){var bm=document.createElement("div");bm.setAttribute("oninput","return;"),Fc=typeof bm.oninput=="function"}Ic=Fc}else Ic=!1;b0=Ic&&(!document.documentMode||9<document.documentMode)}function Lm(){ya&&(ya.detachEvent("onpropertychange",L0),Ia=ya=null)}function L0(n){if(n.propertyName==="value"&&sc(Ia)){var e=[];P0(e,Ia,n,Gh(n)),c0(oM,e)}}function lM(n,e,t){n==="focusin"?(Lm(),ya=e,Ia=t,ya.attachEvent("onpropertychange",L0)):n==="focusout"&&Lm()}function uM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return sc(Ia)}function cM(n,e){if(n==="click")return sc(e)}function fM(n,e){if(n==="input"||n==="change")return sc(e)}function dM(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var di=typeof Object.is=="function"?Object.is:dM;function Fa(n,e){if(di(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!zf.call(e,r)||!di(n[r],e[r]))return!1}return!0}function Dm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Nm(n,e){var t=Dm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Dm(t)}}function D0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?D0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function N0(){for(var n=window,e=Mu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Mu(n.document)}return e}function Qh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function hM(n){var e=N0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&D0(t.ownerDocument.documentElement,t)){if(i!==null&&Qh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Nm(t,s);var o=Nm(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var pM=qi&&"documentMode"in document&&11>=document.documentMode,Zs=null,rd=null,Sa=null,sd=!1;function Um(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;sd||Zs==null||Zs!==Mu(i)||(i=Zs,"selectionStart"in i&&Qh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Sa&&Fa(Sa,i)||(Sa=i,i=Pu(rd,"onSelect"),0<i.length&&(e=new $h("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Zs)))}function El(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Qs={animationend:El("Animation","AnimationEnd"),animationiteration:El("Animation","AnimationIteration"),animationstart:El("Animation","AnimationStart"),transitionend:El("Transition","TransitionEnd")},Oc={},U0={};qi&&(U0=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function oc(n){if(Oc[n])return Oc[n];if(!Qs[n])return n;var e=Qs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in U0)return Oc[n]=e[t];return n}var I0=oc("animationend"),F0=oc("animationiteration"),O0=oc("animationstart"),k0=oc("transitionend"),z0=new Map,Im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(n,e){z0.set(n,e),Cs(e,[n])}for(var kc=0;kc<Im.length;kc++){var zc=Im[kc],mM=zc.toLowerCase(),_M=zc[0].toUpperCase()+zc.slice(1);zr(mM,"on"+_M)}zr(I0,"onAnimationEnd");zr(F0,"onAnimationIteration");zr(O0,"onAnimationStart");zr("dblclick","onDoubleClick");zr("focusin","onFocus");zr("focusout","onBlur");zr(k0,"onTransitionEnd");Mo("onMouseEnter",["mouseout","mouseover"]);Mo("onMouseLeave",["mouseout","mouseover"]);Mo("onPointerEnter",["pointerout","pointerover"]);Mo("onPointerLeave",["pointerout","pointerover"]);Cs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gM=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function Fm(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,mS(i,e,void 0,n),n.currentTarget=null}function B0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Fm(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Fm(r,a,u),s=l}}}if(Tu)throw n=ed,Tu=!1,ed=null,n}function ut(n,e){var t=e[cd];t===void 0&&(t=e[cd]=new Set);var i=n+"__bubble";t.has(i)||(V0(e,n,2,!1),t.add(i))}function Bc(n,e,t){var i=0;e&&(i|=4),V0(t,n,i,e)}var Tl="_reactListening"+Math.random().toString(36).slice(2);function Oa(n){if(!n[Tl]){n[Tl]=!0,qg.forEach(function(t){t!=="selectionchange"&&(gM.has(t)||Bc(t,!1,n),Bc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Tl]||(e[Tl]=!0,Bc("selectionchange",!1,e))}}function V0(n,e,t,i){switch(T0(e)){case 1:var r=LS;break;case 4:r=DS;break;default:r=Yh}t=r.bind(null,e,t,n),r=void 0,!Jf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Vc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ss(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}c0(function(){var u=s,c=Gh(t),f=[];e:{var h=z0.get(n);if(h!==void 0){var p=$h,g=n;switch(n){case"keypress":if(su(t)===0)break e;case"keydown":case"keyup":p=YS;break;case"focusin":g="focus",p=Uc;break;case"focusout":g="blur",p=Uc;break;case"beforeblur":case"afterblur":p=Uc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=IS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=KS;break;case I0:case F0:case O0:p=kS;break;case k0:p=QS;break;case"scroll":p=NS;break;case"wheel":p=eM;break;case"copy":case"cut":case"paste":p=BS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Am}var _=(e&4)!==0,m=!_&&n==="scroll",d=_?h!==null?h+"Capture":null:h;_=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,d!==null&&(y=La(v,d),y!=null&&_.push(ka(v,y,x)))),m)break;v=v.return}0<_.length&&(h=new p(h,g,null,t,c),f.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==Zf&&(g=t.relatedTarget||t.fromElement)&&(ss(g)||g[$i]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=u,g=g?ss(g):null,g!==null&&(m=Rs(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(_=Tm,y="onMouseLeave",d="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=Am,y="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?h:Js(p),x=g==null?h:Js(g),h=new _(y,v+"leave",p,t,c),h.target=m,h.relatedTarget=x,y=null,ss(c)===u&&(_=new _(d,v+"enter",g,t,c),_.target=x,_.relatedTarget=m,y=_),m=y,p&&g)t:{for(_=p,d=g,v=0,x=_;x;x=Ds(x))v++;for(x=0,y=d;y;y=Ds(y))x++;for(;0<v-x;)_=Ds(_),v--;for(;0<x-v;)d=Ds(d),x--;for(;v--;){if(_===d||d!==null&&_===d.alternate)break t;_=Ds(_),d=Ds(d)}_=null}else _=null;p!==null&&Om(f,h,p,_,!1),g!==null&&m!==null&&Om(f,m,g,_,!0)}}e:{if(h=u?Js(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=aM;else if(Pm(h))if(b0)C=fM;else{C=uM;var A=lM}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=cM);if(C&&(C=C(n,u))){P0(f,C,t,c);break e}A&&A(n,h,u),n==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&jf(h,"number",h.value)}switch(A=u?Js(u):window,n){case"focusin":(Pm(A)||A.contentEditable==="true")&&(Zs=A,rd=u,Sa=null);break;case"focusout":Sa=rd=Zs=null;break;case"mousedown":sd=!0;break;case"contextmenu":case"mouseup":case"dragend":sd=!1,Um(f,t,c);break;case"selectionchange":if(pM)break;case"keydown":case"keyup":Um(f,t,c)}var T;if(Zh)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Ks?C0(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(A0&&t.locale!=="ko"&&(Ks||R!=="onCompositionStart"?R==="onCompositionEnd"&&Ks&&(T=w0()):(gr=c,qh="value"in gr?gr.value:gr.textContent,Ks=!0)),A=Pu(u,R),0<A.length&&(R=new wm(R,n,null,t,c),f.push({event:R,listeners:A}),T?R.data=T:(T=R0(t),T!==null&&(R.data=T)))),(T=nM?iM(n,t):rM(n,t))&&(u=Pu(u,"onBeforeInput"),0<u.length&&(c=new wm("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=T))}B0(f,e)})}function ka(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Pu(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=La(n,t),s!=null&&i.unshift(ka(n,s,r)),s=La(n,e),s!=null&&i.push(ka(n,s,r))),n=n.return}return i}function Ds(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Om(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=La(t,s),l!=null&&o.unshift(ka(t,l,a))):r||(l=La(t,s),l!=null&&o.push(ka(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var vM=/\r\n?/g,xM=/\u0000|\uFFFD/g;function km(n){return(typeof n=="string"?n:""+n).replace(vM,`
`).replace(xM,"")}function wl(n,e,t){if(e=km(e),km(n)!==e&&t)throw Error(ne(425))}function bu(){}var od=null,ad=null;function ld(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ud=typeof setTimeout=="function"?setTimeout:void 0,yM=typeof clearTimeout=="function"?clearTimeout:void 0,zm=typeof Promise=="function"?Promise:void 0,SM=typeof queueMicrotask=="function"?queueMicrotask:typeof zm<"u"?function(n){return zm.resolve(null).then(n).catch(MM)}:ud;function MM(n){setTimeout(function(){throw n})}function Hc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Ua(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Ua(e)}function wr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Bm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ho=Math.random().toString(36).slice(2),vi="__reactFiber$"+Ho,za="__reactProps$"+Ho,$i="__reactContainer$"+Ho,cd="__reactEvents$"+Ho,EM="__reactListeners$"+Ho,TM="__reactHandles$"+Ho;function ss(n){var e=n[vi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[$i]||t[vi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Bm(n);n!==null;){if(t=n[vi])return t;n=Bm(n)}return e}n=t,t=n.parentNode}return null}function sl(n){return n=n[vi]||n[$i],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Js(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ne(33))}function ac(n){return n[za]||null}var fd=[],eo=-1;function Br(n){return{current:n}}function ct(n){0>eo||(n.current=fd[eo],fd[eo]=null,eo--)}function st(n,e){eo++,fd[eo]=n.current,n.current=e}var Ir={},Qt=Br(Ir),dn=Br(!1),vs=Ir;function Eo(n,e){var t=n.type.contextTypes;if(!t)return Ir;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function hn(n){return n=n.childContextTypes,n!=null}function Lu(){ct(dn),ct(Qt)}function Vm(n,e,t){if(Qt.current!==Ir)throw Error(ne(168));st(Qt,e),st(dn,t)}function H0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,lS(n)||"Unknown",r));return xt({},t,i)}function Du(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ir,vs=Qt.current,st(Qt,n),st(dn,dn.current),!0}function Hm(n,e,t){var i=n.stateNode;if(!i)throw Error(ne(169));t?(n=H0(n,e,vs),i.__reactInternalMemoizedMergedChildContext=n,ct(dn),ct(Qt),st(Qt,n)):ct(dn),st(dn,t)}var ki=null,lc=!1,Gc=!1;function G0(n){ki===null?ki=[n]:ki.push(n)}function wM(n){lc=!0,G0(n)}function Vr(){if(!Gc&&ki!==null){Gc=!0;var n=0,e=Qe;try{var t=ki;for(Qe=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}ki=null,lc=!1}catch(r){throw ki!==null&&(ki=ki.slice(n+1)),p0(Wh,Vr),r}finally{Qe=e,Gc=!1}}return null}var to=[],no=0,Nu=null,Uu=0,Hn=[],Gn=0,xs=null,Vi=1,Hi="";function Qr(n,e){to[no++]=Uu,to[no++]=Nu,Nu=n,Uu=e}function W0(n,e,t){Hn[Gn++]=Vi,Hn[Gn++]=Hi,Hn[Gn++]=xs,xs=n;var i=Vi;n=Hi;var r=32-ui(i)-1;i&=~(1<<r),t+=1;var s=32-ui(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Vi=1<<32-ui(e)+r|t<<r|i,Hi=s+n}else Vi=1<<s|t<<r|i,Hi=n}function Jh(n){n.return!==null&&(Qr(n,1),W0(n,1,0))}function ep(n){for(;n===Nu;)Nu=to[--no],to[no]=null,Uu=to[--no],to[no]=null;for(;n===xs;)xs=Hn[--Gn],Hn[Gn]=null,Hi=Hn[--Gn],Hn[Gn]=null,Vi=Hn[--Gn],Hn[Gn]=null}var bn=null,Rn=null,ft=!1,si=null;function X0(n,e){var t=Wn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Gm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,bn=n,Rn=wr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,bn=n,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=xs!==null?{id:Vi,overflow:Hi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Wn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,bn=n,Rn=null,!0):!1;default:return!1}}function dd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function hd(n){if(ft){var e=Rn;if(e){var t=e;if(!Gm(n,e)){if(dd(n))throw Error(ne(418));e=wr(t.nextSibling);var i=bn;e&&Gm(n,e)?X0(i,t):(n.flags=n.flags&-4097|2,ft=!1,bn=n)}}else{if(dd(n))throw Error(ne(418));n.flags=n.flags&-4097|2,ft=!1,bn=n}}}function Wm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;bn=n}function Al(n){if(n!==bn)return!1;if(!ft)return Wm(n),ft=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!ld(n.type,n.memoizedProps)),e&&(e=Rn)){if(dd(n))throw j0(),Error(ne(418));for(;e;)X0(n,e),e=wr(e.nextSibling)}if(Wm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ne(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Rn=wr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Rn=null}}else Rn=bn?wr(n.stateNode.nextSibling):null;return!0}function j0(){for(var n=Rn;n;)n=wr(n.nextSibling)}function To(){Rn=bn=null,ft=!1}function tp(n){si===null?si=[n]:si.push(n)}var AM=nr.ReactCurrentBatchConfig;function ea(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ne(309));var i=t.stateNode}if(!i)throw Error(ne(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ne(284));if(!t._owner)throw Error(ne(290,n))}return n}function Cl(n,e){throw n=Object.prototype.toString.call(e),Error(ne(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Xm(n){var e=n._init;return e(n._payload)}function Y0(n){function e(d,v){if(n){var x=d.deletions;x===null?(d.deletions=[v],d.flags|=16):x.push(v)}}function t(d,v){if(!n)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=Pr(d,v),d.index=0,d.sibling=null,d}function s(d,v,x){return d.index=x,n?(x=d.alternate,x!==null?(x=x.index,x<v?(d.flags|=2,v):x):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,v,x,y){return v===null||v.tag!==6?(v=Kc(x,d.mode,y),v.return=d,v):(v=r(v,x),v.return=d,v)}function l(d,v,x,y){var C=x.type;return C===$s?c(d,v,x.props.children,y,x.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dr&&Xm(C)===v.type)?(y=r(v,x.props),y.ref=ea(d,v,x),y.return=d,y):(y=du(x.type,x.key,x.props,null,d.mode,y),y.ref=ea(d,v,x),y.return=d,y)}function u(d,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Zc(x,d.mode,y),v.return=d,v):(v=r(v,x.children||[]),v.return=d,v)}function c(d,v,x,y,C){return v===null||v.tag!==7?(v=ds(x,d.mode,y,C),v.return=d,v):(v=r(v,x),v.return=d,v)}function f(d,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Kc(""+v,d.mode,x),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _l:return x=du(v.type,v.key,v.props,null,d.mode,x),x.ref=ea(d,null,v),x.return=d,x;case qs:return v=Zc(v,d.mode,x),v.return=d,v;case dr:var y=v._init;return f(d,y(v._payload),x)}if(ca(v)||$o(v))return v=ds(v,d.mode,x,null),v.return=d,v;Cl(d,v)}return null}function h(d,v,x,y){var C=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:a(d,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case _l:return x.key===C?l(d,v,x,y):null;case qs:return x.key===C?u(d,v,x,y):null;case dr:return C=x._init,h(d,v,C(x._payload),y)}if(ca(x)||$o(x))return C!==null?null:c(d,v,x,y,null);Cl(d,x)}return null}function p(d,v,x,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(x)||null,a(v,d,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case _l:return d=d.get(y.key===null?x:y.key)||null,l(v,d,y,C);case qs:return d=d.get(y.key===null?x:y.key)||null,u(v,d,y,C);case dr:var A=y._init;return p(d,v,x,A(y._payload),C)}if(ca(y)||$o(y))return d=d.get(x)||null,c(v,d,y,C,null);Cl(v,y)}return null}function g(d,v,x,y){for(var C=null,A=null,T=v,R=v=0,S=null;T!==null&&R<x.length;R++){T.index>R?(S=T,T=null):S=T.sibling;var M=h(d,T,x[R],y);if(M===null){T===null&&(T=S);break}n&&T&&M.alternate===null&&e(d,T),v=s(M,v,R),A===null?C=M:A.sibling=M,A=M,T=S}if(R===x.length)return t(d,T),ft&&Qr(d,R),C;if(T===null){for(;R<x.length;R++)T=f(d,x[R],y),T!==null&&(v=s(T,v,R),A===null?C=T:A.sibling=T,A=T);return ft&&Qr(d,R),C}for(T=i(d,T);R<x.length;R++)S=p(T,d,R,x[R],y),S!==null&&(n&&S.alternate!==null&&T.delete(S.key===null?R:S.key),v=s(S,v,R),A===null?C=S:A.sibling=S,A=S);return n&&T.forEach(function(b){return e(d,b)}),ft&&Qr(d,R),C}function _(d,v,x,y){var C=$o(x);if(typeof C!="function")throw Error(ne(150));if(x=C.call(x),x==null)throw Error(ne(151));for(var A=C=null,T=v,R=v=0,S=null,M=x.next();T!==null&&!M.done;R++,M=x.next()){T.index>R?(S=T,T=null):S=T.sibling;var b=h(d,T,M.value,y);if(b===null){T===null&&(T=S);break}n&&T&&b.alternate===null&&e(d,T),v=s(b,v,R),A===null?C=b:A.sibling=b,A=b,T=S}if(M.done)return t(d,T),ft&&Qr(d,R),C;if(T===null){for(;!M.done;R++,M=x.next())M=f(d,M.value,y),M!==null&&(v=s(M,v,R),A===null?C=M:A.sibling=M,A=M);return ft&&Qr(d,R),C}for(T=i(d,T);!M.done;R++,M=x.next())M=p(T,d,R,M.value,y),M!==null&&(n&&M.alternate!==null&&T.delete(M.key===null?R:M.key),v=s(M,v,R),A===null?C=M:A.sibling=M,A=M);return n&&T.forEach(function(z){return e(d,z)}),ft&&Qr(d,R),C}function m(d,v,x,y){if(typeof x=="object"&&x!==null&&x.type===$s&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case _l:e:{for(var C=x.key,A=v;A!==null;){if(A.key===C){if(C=x.type,C===$s){if(A.tag===7){t(d,A.sibling),v=r(A,x.props.children),v.return=d,d=v;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dr&&Xm(C)===A.type){t(d,A.sibling),v=r(A,x.props),v.ref=ea(d,A,x),v.return=d,d=v;break e}t(d,A);break}else e(d,A);A=A.sibling}x.type===$s?(v=ds(x.props.children,d.mode,y,x.key),v.return=d,d=v):(y=du(x.type,x.key,x.props,null,d.mode,y),y.ref=ea(d,v,x),y.return=d,d=y)}return o(d);case qs:e:{for(A=x.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(d,v.sibling),v=r(v,x.children||[]),v.return=d,d=v;break e}else{t(d,v);break}else e(d,v);v=v.sibling}v=Zc(x,d.mode,y),v.return=d,d=v}return o(d);case dr:return A=x._init,m(d,v,A(x._payload),y)}if(ca(x))return g(d,v,x,y);if($o(x))return _(d,v,x,y);Cl(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(d,v.sibling),v=r(v,x),v.return=d,d=v):(t(d,v),v=Kc(x,d.mode,y),v.return=d,d=v),o(d)):t(d,v)}return m}var wo=Y0(!0),q0=Y0(!1),Iu=Br(null),Fu=null,io=null,np=null;function ip(){np=io=Fu=null}function rp(n){var e=Iu.current;ct(Iu),n._currentValue=e}function pd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function po(n,e){Fu=n,np=io=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(fn=!0),n.firstContext=null)}function qn(n){var e=n._currentValue;if(np!==n)if(n={context:n,memoizedValue:e,next:null},io===null){if(Fu===null)throw Error(ne(308));io=n,Fu.dependencies={lanes:0,firstContext:n}}else io=io.next=n;return e}var os=null;function sp(n){os===null?os=[n]:os.push(n)}function $0(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,sp(e)):(t.next=r.next,r.next=t),e.interleaved=t,Ki(n,i)}function Ki(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var hr=!1;function op(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function K0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ji(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ki(n,t)}return r=i.interleaved,r===null?(e.next=e,sp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ki(n,t)}function ou(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Xh(n,t)}}function jm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Ou(n,e,t,i){var r=n.updateQueue;hr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,_=a;switch(h=e,p=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){f=g.call(p,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,h=typeof g=="function"?g.call(p,f,h):g,h==null)break e;f=xt({},f,h);break e;case 2:hr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ss|=o,n.lanes=o,n.memoizedState=f}}function Ym(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var ol={},Ei=Br(ol),Ba=Br(ol),Va=Br(ol);function as(n){if(n===ol)throw Error(ne(174));return n}function ap(n,e){switch(st(Va,e),st(Ba,n),st(Ei,ol),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=qf(e,n)}ct(Ei),st(Ei,e)}function Ao(){ct(Ei),ct(Ba),ct(Va)}function Z0(n){as(Va.current);var e=as(Ei.current),t=qf(e,n.type);e!==t&&(st(Ba,n),st(Ei,t))}function lp(n){Ba.current===n&&(ct(Ei),ct(Ba))}var pt=Br(0);function ku(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wc=[];function up(){for(var n=0;n<Wc.length;n++)Wc[n]._workInProgressVersionPrimary=null;Wc.length=0}var au=nr.ReactCurrentDispatcher,Xc=nr.ReactCurrentBatchConfig,ys=0,vt=null,Lt=null,Ft=null,zu=!1,Ma=!1,Ha=0,CM=0;function Wt(){throw Error(ne(321))}function cp(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!di(n[t],e[t]))return!1;return!0}function fp(n,e,t,i,r,s){if(ys=s,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,au.current=n===null||n.memoizedState===null?LM:DM,n=t(i,r),Ma){s=0;do{if(Ma=!1,Ha=0,25<=s)throw Error(ne(301));s+=1,Ft=Lt=null,e.updateQueue=null,au.current=NM,n=t(i,r)}while(Ma)}if(au.current=Bu,e=Lt!==null&&Lt.next!==null,ys=0,Ft=Lt=vt=null,zu=!1,e)throw Error(ne(300));return n}function dp(){var n=Ha!==0;return Ha=0,n}function mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?vt.memoizedState=Ft=n:Ft=Ft.next=n,Ft}function $n(){if(Lt===null){var n=vt.alternate;n=n!==null?n.memoizedState:null}else n=Lt.next;var e=Ft===null?vt.memoizedState:Ft.next;if(e!==null)Ft=e,Lt=n;else{if(n===null)throw Error(ne(310));Lt=n,n={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Ft===null?vt.memoizedState=Ft=n:Ft=Ft.next=n}return Ft}function Ga(n,e){return typeof e=="function"?e(n):e}function jc(n){var e=$n(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=Lt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ys&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,vt.lanes|=c,Ss|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,di(i,e.memoizedState)||(fn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,vt.lanes|=s,Ss|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Yc(n){var e=$n(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);di(s,e.memoizedState)||(fn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Q0(){}function J0(n,e){var t=vt,i=$n(),r=e(),s=!di(i.memoizedState,r);if(s&&(i.memoizedState=r,fn=!0),i=i.queue,hp(nv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(t.flags|=2048,Wa(9,tv.bind(null,t,i,r,e),void 0,null),kt===null)throw Error(ne(349));ys&30||ev(t,e,r)}return r}function ev(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function tv(n,e,t,i){e.value=t,e.getSnapshot=i,iv(e)&&rv(n)}function nv(n,e,t){return t(function(){iv(e)&&rv(n)})}function iv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!di(n,t)}catch{return!0}}function rv(n){var e=Ki(n,1);e!==null&&ci(e,n,1,-1)}function qm(n){var e=mi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:n},e.queue=n,n=n.dispatch=bM.bind(null,vt,n),[e.memoizedState,n]}function Wa(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function sv(){return $n().memoizedState}function lu(n,e,t,i){var r=mi();vt.flags|=n,r.memoizedState=Wa(1|e,t,void 0,i===void 0?null:i)}function uc(n,e,t,i){var r=$n();i=i===void 0?null:i;var s=void 0;if(Lt!==null){var o=Lt.memoizedState;if(s=o.destroy,i!==null&&cp(i,o.deps)){r.memoizedState=Wa(e,t,s,i);return}}vt.flags|=n,r.memoizedState=Wa(1|e,t,s,i)}function $m(n,e){return lu(8390656,8,n,e)}function hp(n,e){return uc(2048,8,n,e)}function ov(n,e){return uc(4,2,n,e)}function av(n,e){return uc(4,4,n,e)}function lv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function uv(n,e,t){return t=t!=null?t.concat([n]):null,uc(4,4,lv.bind(null,e,n),t)}function pp(){}function cv(n,e){var t=$n();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&cp(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function fv(n,e){var t=$n();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&cp(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function dv(n,e,t){return ys&21?(di(t,e)||(t=g0(),vt.lanes|=t,Ss|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,fn=!0),n.memoizedState=t)}function RM(n,e){var t=Qe;Qe=t!==0&&4>t?t:4,n(!0);var i=Xc.transition;Xc.transition={};try{n(!1),e()}finally{Qe=t,Xc.transition=i}}function hv(){return $n().memoizedState}function PM(n,e,t){var i=Rr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},pv(n))mv(e,t);else if(t=$0(n,e,t,i),t!==null){var r=nn();ci(t,n,i,r),_v(t,e,i)}}function bM(n,e,t){var i=Rr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(pv(n))mv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,di(a,o)){var l=e.interleaved;l===null?(r.next=r,sp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=$0(n,e,r,i),t!==null&&(r=nn(),ci(t,n,i,r),_v(t,e,i))}}function pv(n){var e=n.alternate;return n===vt||e!==null&&e===vt}function mv(n,e){Ma=zu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function _v(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Xh(n,t)}}var Bu={readContext:qn,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},LM={readContext:qn,useCallback:function(n,e){return mi().memoizedState=[n,e===void 0?null:e],n},useContext:qn,useEffect:$m,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,lu(4194308,4,lv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return lu(4194308,4,n,e)},useInsertionEffect:function(n,e){return lu(4,2,n,e)},useMemo:function(n,e){var t=mi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=mi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=PM.bind(null,vt,n),[i.memoizedState,n]},useRef:function(n){var e=mi();return n={current:n},e.memoizedState=n},useState:qm,useDebugValue:pp,useDeferredValue:function(n){return mi().memoizedState=n},useTransition:function(){var n=qm(!1),e=n[0];return n=RM.bind(null,n[1]),mi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=vt,r=mi();if(ft){if(t===void 0)throw Error(ne(407));t=t()}else{if(t=e(),kt===null)throw Error(ne(349));ys&30||ev(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,$m(nv.bind(null,i,s,n),[n]),i.flags|=2048,Wa(9,tv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=mi(),e=kt.identifierPrefix;if(ft){var t=Hi,i=Vi;t=(i&~(1<<32-ui(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Ha++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=CM++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},DM={readContext:qn,useCallback:cv,useContext:qn,useEffect:hp,useImperativeHandle:uv,useInsertionEffect:ov,useLayoutEffect:av,useMemo:fv,useReducer:jc,useRef:sv,useState:function(){return jc(Ga)},useDebugValue:pp,useDeferredValue:function(n){var e=$n();return dv(e,Lt.memoizedState,n)},useTransition:function(){var n=jc(Ga)[0],e=$n().memoizedState;return[n,e]},useMutableSource:Q0,useSyncExternalStore:J0,useId:hv,unstable_isNewReconciler:!1},NM={readContext:qn,useCallback:cv,useContext:qn,useEffect:hp,useImperativeHandle:uv,useInsertionEffect:ov,useLayoutEffect:av,useMemo:fv,useReducer:Yc,useRef:sv,useState:function(){return Yc(Ga)},useDebugValue:pp,useDeferredValue:function(n){var e=$n();return Lt===null?e.memoizedState=n:dv(e,Lt.memoizedState,n)},useTransition:function(){var n=Yc(Ga)[0],e=$n().memoizedState;return[n,e]},useMutableSource:Q0,useSyncExternalStore:J0,useId:hv,unstable_isNewReconciler:!1};function ii(n,e){if(n&&n.defaultProps){e=xt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function md(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:xt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var cc={isMounted:function(n){return(n=n._reactInternals)?Rs(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=nn(),r=Rr(n),s=ji(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ar(n,s,r),e!==null&&(ci(e,n,r,i),ou(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=nn(),r=Rr(n),s=ji(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ar(n,s,r),e!==null&&(ci(e,n,r,i),ou(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=nn(),i=Rr(n),r=ji(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ar(n,r,i),e!==null&&(ci(e,n,i,t),ou(e,n,i))}};function Km(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Fa(t,i)||!Fa(r,s):!0}function gv(n,e,t){var i=!1,r=Ir,s=e.contextType;return typeof s=="object"&&s!==null?s=qn(s):(r=hn(e)?vs:Qt.current,i=e.contextTypes,s=(i=i!=null)?Eo(n,r):Ir),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Zm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&cc.enqueueReplaceState(e,e.state,null)}function _d(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},op(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=qn(s):(s=hn(e)?vs:Qt.current,r.context=Eo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(md(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&cc.enqueueReplaceState(r,r.state,null),Ou(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Co(n,e){try{var t="",i=e;do t+=aS(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function qc(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function gd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var UM=typeof WeakMap=="function"?WeakMap:Map;function vv(n,e,t){t=ji(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Hu||(Hu=!0,Cd=i),gd(n,e)},t}function xv(n,e,t){t=ji(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){gd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){gd(n,e),typeof i!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Qm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new UM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=qM.bind(null,n,e,t),e.then(n,n))}function Jm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function e_(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=ji(-1,1),e.tag=2,Ar(t,e,1))),t.lanes|=1),n)}var IM=nr.ReactCurrentOwner,fn=!1;function en(n,e,t,i){e.child=n===null?q0(e,null,t,i):wo(e,n.child,t,i)}function t_(n,e,t,i,r){t=t.render;var s=e.ref;return po(e,r),i=fp(n,e,t,i,s,r),t=dp(),n!==null&&!fn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Zi(n,e,r)):(ft&&t&&Jh(e),e.flags|=1,en(n,e,i,r),e.child)}function n_(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Mp(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,yv(n,e,s,i,r)):(n=du(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Fa,t(o,i)&&n.ref===e.ref)return Zi(n,e,r)}return e.flags|=1,n=Pr(s,i),n.ref=e.ref,n.return=e,e.child=n}function yv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Fa(s,i)&&n.ref===e.ref)if(fn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(fn=!0);else return e.lanes=n.lanes,Zi(n,e,r)}return vd(n,e,t,i,r)}function Sv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(so,Tn),Tn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,st(so,Tn),Tn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,st(so,Tn),Tn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,st(so,Tn),Tn|=i;return en(n,e,r,t),e.child}function Mv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function vd(n,e,t,i,r){var s=hn(t)?vs:Qt.current;return s=Eo(e,s),po(e,r),t=fp(n,e,t,i,s,r),i=dp(),n!==null&&!fn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Zi(n,e,r)):(ft&&i&&Jh(e),e.flags|=1,en(n,e,t,r),e.child)}function i_(n,e,t,i,r){if(hn(t)){var s=!0;Du(e)}else s=!1;if(po(e,r),e.stateNode===null)uu(n,e),gv(e,t,i),_d(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=qn(u):(u=hn(t)?vs:Qt.current,u=Eo(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Zm(e,o,i,u),hr=!1;var h=e.memoizedState;o.state=h,Ou(e,i,o,r),l=e.memoizedState,a!==i||h!==l||dn.current||hr?(typeof c=="function"&&(md(e,t,c,i),l=e.memoizedState),(a=hr||Km(e,t,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,K0(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:ii(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=qn(l):(l=hn(t)?vs:Qt.current,l=Eo(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Zm(e,o,i,l),hr=!1,h=e.memoizedState,o.state=h,Ou(e,i,o,r);var g=e.memoizedState;a!==f||h!==g||dn.current||hr?(typeof p=="function"&&(md(e,t,p,i),g=e.memoizedState),(u=hr||Km(e,t,u,i,h,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return xd(n,e,t,i,s,r)}function xd(n,e,t,i,r,s){Mv(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Hm(e,t,!1),Zi(n,e,s);i=e.stateNode,IM.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=wo(e,n.child,null,s),e.child=wo(e,null,a,s)):en(n,e,a,s),e.memoizedState=i.state,r&&Hm(e,t,!0),e.child}function Ev(n){var e=n.stateNode;e.pendingContext?Vm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Vm(n,e.context,!1),ap(n,e.containerInfo)}function r_(n,e,t,i,r){return To(),tp(r),e.flags|=256,en(n,e,t,i),e.child}var yd={dehydrated:null,treeContext:null,retryLane:0};function Sd(n){return{baseLanes:n,cachePool:null,transitions:null}}function Tv(n,e,t){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),st(pt,r&1),n===null)return hd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=hc(o,i,0,null),n=ds(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Sd(t),e.memoizedState=yd,n):mp(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return FM(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Pr(a,s):(s=ds(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Sd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=yd,i}return s=n.child,n=s.sibling,i=Pr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function mp(n,e){return e=hc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Rl(n,e,t,i){return i!==null&&tp(i),wo(e,n.child,null,t),n=mp(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function FM(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=qc(Error(ne(422))),Rl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=hc({mode:"visible",children:i.children},r,0,null),s=ds(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&wo(e,n.child,null,o),e.child.memoizedState=Sd(o),e.memoizedState=yd,s);if(!(e.mode&1))return Rl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=qc(s,i,void 0),Rl(n,e,o,i)}if(a=(o&n.childLanes)!==0,fn||a){if(i=kt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ki(n,r),ci(i,n,r,-1))}return Sp(),i=qc(Error(ne(421))),Rl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=$M.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Rn=wr(r.nextSibling),bn=e,ft=!0,si=null,n!==null&&(Hn[Gn++]=Vi,Hn[Gn++]=Hi,Hn[Gn++]=xs,Vi=n.id,Hi=n.overflow,xs=e),e=mp(e,i.children),e.flags|=4096,e)}function s_(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),pd(n.return,e,t)}function $c(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function wv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(en(n,e,i.children,t),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&s_(n,t,e);else if(n.tag===19)s_(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(st(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&ku(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),$c(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&ku(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}$c(e,!0,t,null,s);break;case"together":$c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function uu(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Zi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ss|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ne(153));if(e.child!==null){for(n=e.child,t=Pr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Pr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function OM(n,e,t){switch(e.tag){case 3:Ev(e),To();break;case 5:Z0(e);break;case 1:hn(e.type)&&Du(e);break;case 4:ap(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(Iu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(pt,pt.current&1),e.flags|=128,null):t&e.child.childLanes?Tv(n,e,t):(st(pt,pt.current&1),n=Zi(n,e,t),n!==null?n.sibling:null);st(pt,pt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return wv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,Sv(n,e,t)}return Zi(n,e,t)}var Av,Md,Cv,Rv;Av=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Md=function(){};Cv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,as(Ei.current);var s=null;switch(t){case"input":r=Wf(n,r),i=Wf(n,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=Yf(n,r),i=Yf(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=bu)}$f(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Pa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Pa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ut("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Rv=function(n,e,t,i){t!==i&&(e.flags|=4)};function ta(n,e){if(!ft)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Xt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function kM(n,e,t){var i=e.pendingProps;switch(ep(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return hn(e.type)&&Lu(),Xt(e),null;case 3:return i=e.stateNode,Ao(),ct(dn),ct(Qt),up(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Al(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,si!==null&&(bd(si),si=null))),Md(n,e),Xt(e),null;case 5:lp(e);var r=as(Va.current);if(t=e.type,n!==null&&e.stateNode!=null)Cv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Xt(e),null}if(n=as(Ei.current),Al(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[vi]=e,i[za]=s,n=(e.mode&1)!==0,t){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<da.length;r++)ut(da[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":pm(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":_m(i,s),ut("invalid",i)}$f(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&wl(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&wl(i.textContent,a,n),r=["children",""+a]):Pa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ut("scroll",i)}switch(t){case"input":gl(i),mm(i,s,!0);break;case"textarea":gl(i),gm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=bu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=n0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[vi]=e,n[za]=i,Av(n,e,!1,!1),e.stateNode=n;e:{switch(o=Kf(t,i),t){case"dialog":ut("cancel",n),ut("close",n),r=i;break;case"iframe":case"object":case"embed":ut("load",n),r=i;break;case"video":case"audio":for(r=0;r<da.length;r++)ut(da[r],n);r=i;break;case"source":ut("error",n),r=i;break;case"img":case"image":case"link":ut("error",n),ut("load",n),r=i;break;case"details":ut("toggle",n),r=i;break;case"input":pm(n,i),r=Wf(n,i),ut("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ut("invalid",n);break;case"textarea":_m(n,i),r=Yf(n,i),ut("invalid",n);break;default:r=i}$f(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?s0(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&i0(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ba(n,l):typeof l=="number"&&ba(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Pa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",n):l!=null&&zh(n,s,l,o))}switch(t){case"input":gl(n),mm(n,i,!1);break;case"textarea":gl(n),gm(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ur(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?uo(n,!!i.multiple,s,!1):i.defaultValue!=null&&uo(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=bu)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(n&&e.stateNode!=null)Rv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(t=as(Va.current),as(Ei.current),Al(e)){if(i=e.stateNode,t=e.memoizedProps,i[vi]=e,(s=i.nodeValue!==t)&&(n=bn,n!==null))switch(n.tag){case 3:wl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&wl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[vi]=e,e.stateNode=i}return Xt(e),null;case 13:if(ct(pt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(ft&&Rn!==null&&e.mode&1&&!(e.flags&128))j0(),To(),e.flags|=98560,s=!1;else if(s=Al(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[vi]=e}else To(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else si!==null&&(bd(si),si=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||pt.current&1?Dt===0&&(Dt=3):Sp())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return Ao(),Md(n,e),n===null&&Oa(e.stateNode.containerInfo),Xt(e),null;case 10:return rp(e.type._context),Xt(e),null;case 17:return hn(e.type)&&Lu(),Xt(e),null;case 19:if(ct(pt),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ta(s,!1);else{if(Dt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=ku(n),o!==null){for(e.flags|=128,ta(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return st(pt,pt.current&1|2),e.child}n=n.sibling}s.tail!==null&&wt()>Ro&&(e.flags|=128,i=!0,ta(s,!1),e.lanes=4194304)}else{if(!i)if(n=ku(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),ta(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return Xt(e),null}else 2*wt()-s.renderingStartTime>Ro&&t!==1073741824&&(e.flags|=128,i=!0,ta(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=wt(),e.sibling=null,t=pt.current,st(pt,i?t&1|2:t&1),e):(Xt(e),null);case 22:case 23:return yp(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function zM(n,e){switch(ep(e),e.tag){case 1:return hn(e.type)&&Lu(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ao(),ct(dn),ct(Qt),up(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return lp(e),null;case 13:if(ct(pt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));To()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ct(pt),null;case 4:return Ao(),null;case 10:return rp(e.type._context),null;case 22:case 23:return yp(),null;case 24:return null;default:return null}}var Pl=!1,qt=!1,BM=typeof WeakSet=="function"?WeakSet:Set,he=null;function ro(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){St(n,e,i)}else t.current=null}function Ed(n,e,t){try{t()}catch(i){St(n,e,i)}}var o_=!1;function VM(n,e){if(od=Cu,n=N0(),Qh(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,h=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(ad={focusedElem:n,selectionRange:t},Cu=!1,he=e;he!==null;)if(e=he,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,he=n;else for(;he!==null;){e=he;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:ii(e.type,_),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(y){St(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}return g=o_,o_=!1,g}function Ea(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ed(e,t,s)}r=r.next}while(r!==i)}}function fc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Td(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Pv(n){var e=n.alternate;e!==null&&(n.alternate=null,Pv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[vi],delete e[za],delete e[cd],delete e[EM],delete e[TM])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function bv(n){return n.tag===5||n.tag===3||n.tag===4}function a_(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||bv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function wd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=bu));else if(i!==4&&(n=n.child,n!==null))for(wd(n,e,t),n=n.sibling;n!==null;)wd(n,e,t),n=n.sibling}function Ad(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Ad(n,e,t),n=n.sibling;n!==null;)Ad(n,e,t),n=n.sibling}var Bt=null,ri=!1;function sr(n,e,t){for(t=t.child;t!==null;)Lv(n,e,t),t=t.sibling}function Lv(n,e,t){if(Mi&&typeof Mi.onCommitFiberUnmount=="function")try{Mi.onCommitFiberUnmount(ic,t)}catch{}switch(t.tag){case 5:qt||ro(t,e);case 6:var i=Bt,r=ri;Bt=null,sr(n,e,t),Bt=i,ri=r,Bt!==null&&(ri?(n=Bt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Bt.removeChild(t.stateNode));break;case 18:Bt!==null&&(ri?(n=Bt,t=t.stateNode,n.nodeType===8?Hc(n.parentNode,t):n.nodeType===1&&Hc(n,t),Ua(n)):Hc(Bt,t.stateNode));break;case 4:i=Bt,r=ri,Bt=t.stateNode.containerInfo,ri=!0,sr(n,e,t),Bt=i,ri=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ed(t,e,o),r=r.next}while(r!==i)}sr(n,e,t);break;case 1:if(!qt&&(ro(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){St(t,e,a)}sr(n,e,t);break;case 21:sr(n,e,t);break;case 22:t.mode&1?(qt=(i=qt)||t.memoizedState!==null,sr(n,e,t),qt=i):sr(n,e,t);break;default:sr(n,e,t)}}function l_(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new BM),e.forEach(function(i){var r=KM.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Jn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,ri=!1;break e;case 3:Bt=a.stateNode.containerInfo,ri=!0;break e;case 4:Bt=a.stateNode.containerInfo,ri=!0;break e}a=a.return}if(Bt===null)throw Error(ne(160));Lv(s,o,r),Bt=null,ri=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){St(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Dv(e,n),e=e.sibling}function Dv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Jn(e,n),pi(n),i&4){try{Ea(3,n,n.return),fc(3,n)}catch(_){St(n,n.return,_)}try{Ea(5,n,n.return)}catch(_){St(n,n.return,_)}}break;case 1:Jn(e,n),pi(n),i&512&&t!==null&&ro(t,t.return);break;case 5:if(Jn(e,n),pi(n),i&512&&t!==null&&ro(t,t.return),n.flags&32){var r=n.stateNode;try{ba(r,"")}catch(_){St(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&e0(r,s),Kf(a,o);var u=Kf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?s0(r,f):c==="dangerouslySetInnerHTML"?i0(r,f):c==="children"?ba(r,f):zh(r,c,f,u)}switch(a){case"input":Xf(r,s);break;case"textarea":t0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?uo(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?uo(r,!!s.multiple,s.defaultValue,!0):uo(r,!!s.multiple,s.multiple?[]:"",!1))}r[za]=s}catch(_){St(n,n.return,_)}}break;case 6:if(Jn(e,n),pi(n),i&4){if(n.stateNode===null)throw Error(ne(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){St(n,n.return,_)}}break;case 3:if(Jn(e,n),pi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Ua(e.containerInfo)}catch(_){St(n,n.return,_)}break;case 4:Jn(e,n),pi(n);break;case 13:Jn(e,n),pi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(vp=wt())),i&4&&l_(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(qt=(u=qt)||c,Jn(e,n),qt=u):Jn(e,n),pi(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(he=n,c=n.child;c!==null;){for(f=he=c;he!==null;){switch(h=he,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ea(4,h,h.return);break;case 1:ro(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){St(i,t,_)}}break;case 5:ro(h,h.return);break;case 22:if(h.memoizedState!==null){c_(f);continue}}p!==null?(p.return=h,he=p):c_(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=r0("display",o))}catch(_){St(n,n.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){St(n,n.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Jn(e,n),pi(n),i&4&&l_(n);break;case 21:break;default:Jn(e,n),pi(n)}}function pi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(bv(t)){var i=t;break e}t=t.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ba(r,""),i.flags&=-33);var s=a_(n);Ad(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=a_(n);wd(n,a,o);break;default:throw Error(ne(161))}}catch(l){St(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function HM(n,e,t){he=n,Nv(n)}function Nv(n,e,t){for(var i=(n.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Pl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||qt;a=Pl;var u=qt;if(Pl=o,(qt=l)&&!u)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?f_(r):l!==null?(l.return=o,he=l):f_(r);for(;s!==null;)he=s,Nv(s),s=s.sibling;he=r,Pl=a,qt=u}u_(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):u_(n)}}function u_(n){for(;he!==null;){var e=he;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||fc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:ii(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ym(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Ym(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ua(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}qt||e.flags&512&&Td(e)}catch(h){St(e,e.return,h)}}if(e===n){he=null;break}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}}function c_(n){for(;he!==null;){var e=he;if(e===n){he=null;break}var t=e.sibling;if(t!==null){t.return=e.return,he=t;break}he=e.return}}function f_(n){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{fc(4,e)}catch(l){St(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{Td(e)}catch(l){St(e,s,l)}break;case 5:var o=e.return;try{Td(e)}catch(l){St(e,o,l)}}}catch(l){St(e,e.return,l)}if(e===n){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var GM=Math.ceil,Vu=nr.ReactCurrentDispatcher,_p=nr.ReactCurrentOwner,Yn=nr.ReactCurrentBatchConfig,je=0,kt=null,Pt=null,Vt=0,Tn=0,so=Br(0),Dt=0,Xa=null,Ss=0,dc=0,gp=0,Ta=null,un=null,vp=0,Ro=1/0,Fi=null,Hu=!1,Cd=null,Cr=null,bl=!1,vr=null,Gu=0,wa=0,Rd=null,cu=-1,fu=0;function nn(){return je&6?wt():cu!==-1?cu:cu=wt()}function Rr(n){return n.mode&1?je&2&&Vt!==0?Vt&-Vt:AM.transition!==null?(fu===0&&(fu=g0()),fu):(n=Qe,n!==0||(n=window.event,n=n===void 0?16:T0(n.type)),n):1}function ci(n,e,t,i){if(50<wa)throw wa=0,Rd=null,Error(ne(185));il(n,t,i),(!(je&2)||n!==kt)&&(n===kt&&(!(je&2)&&(dc|=t),Dt===4&&mr(n,Vt)),pn(n,i),t===1&&je===0&&!(e.mode&1)&&(Ro=wt()+500,lc&&Vr()))}function pn(n,e){var t=n.callbackNode;AS(n,e);var i=Au(n,n===kt?Vt:0);if(i===0)t!==null&&ym(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&ym(t),e===1)n.tag===0?wM(d_.bind(null,n)):G0(d_.bind(null,n)),SM(function(){!(je&6)&&Vr()}),t=null;else{switch(v0(i)){case 1:t=Wh;break;case 4:t=m0;break;case 16:t=wu;break;case 536870912:t=_0;break;default:t=wu}t=Vv(t,Uv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Uv(n,e){if(cu=-1,fu=0,je&6)throw Error(ne(327));var t=n.callbackNode;if(mo()&&n.callbackNode!==t)return null;var i=Au(n,n===kt?Vt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Wu(n,i);else{e=i;var r=je;je|=2;var s=Fv();(kt!==n||Vt!==e)&&(Fi=null,Ro=wt()+500,fs(n,e));do try{jM();break}catch(a){Iv(n,a)}while(!0);ip(),Vu.current=s,je=r,Pt!==null?e=0:(kt=null,Vt=0,e=Dt)}if(e!==0){if(e===2&&(r=td(n),r!==0&&(i=r,e=Pd(n,r))),e===1)throw t=Xa,fs(n,0),mr(n,i),pn(n,wt()),t;if(e===6)mr(n,i);else{if(r=n.current.alternate,!(i&30)&&!WM(r)&&(e=Wu(n,i),e===2&&(s=td(n),s!==0&&(i=s,e=Pd(n,s))),e===1))throw t=Xa,fs(n,0),mr(n,i),pn(n,wt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Jr(n,un,Fi);break;case 3:if(mr(n,i),(i&130023424)===i&&(e=vp+500-wt(),10<e)){if(Au(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){nn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=ud(Jr.bind(null,n,un,Fi),e);break}Jr(n,un,Fi);break;case 4:if(mr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-ui(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*GM(i/1960))-i,10<i){n.timeoutHandle=ud(Jr.bind(null,n,un,Fi),i);break}Jr(n,un,Fi);break;case 5:Jr(n,un,Fi);break;default:throw Error(ne(329))}}}return pn(n,wt()),n.callbackNode===t?Uv.bind(null,n):null}function Pd(n,e){var t=Ta;return n.current.memoizedState.isDehydrated&&(fs(n,e).flags|=256),n=Wu(n,e),n!==2&&(e=un,un=t,e!==null&&bd(e)),n}function bd(n){un===null?un=n:un.push.apply(un,n)}function WM(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!di(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mr(n,e){for(e&=~gp,e&=~dc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ui(e),i=1<<t;n[t]=-1,e&=~i}}function d_(n){if(je&6)throw Error(ne(327));mo();var e=Au(n,0);if(!(e&1))return pn(n,wt()),null;var t=Wu(n,e);if(n.tag!==0&&t===2){var i=td(n);i!==0&&(e=i,t=Pd(n,i))}if(t===1)throw t=Xa,fs(n,0),mr(n,e),pn(n,wt()),t;if(t===6)throw Error(ne(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Jr(n,un,Fi),pn(n,wt()),null}function xp(n,e){var t=je;je|=1;try{return n(e)}finally{je=t,je===0&&(Ro=wt()+500,lc&&Vr())}}function Ms(n){vr!==null&&vr.tag===0&&!(je&6)&&mo();var e=je;je|=1;var t=Yn.transition,i=Qe;try{if(Yn.transition=null,Qe=1,n)return n()}finally{Qe=i,Yn.transition=t,je=e,!(je&6)&&Vr()}}function yp(){Tn=so.current,ct(so)}function fs(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,yM(t)),Pt!==null)for(t=Pt.return;t!==null;){var i=t;switch(ep(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Lu();break;case 3:Ao(),ct(dn),ct(Qt),up();break;case 5:lp(i);break;case 4:Ao();break;case 13:ct(pt);break;case 19:ct(pt);break;case 10:rp(i.type._context);break;case 22:case 23:yp()}t=t.return}if(kt=n,Pt=n=Pr(n.current,null),Vt=Tn=e,Dt=0,Xa=null,gp=dc=Ss=0,un=Ta=null,os!==null){for(e=0;e<os.length;e++)if(t=os[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}os=null}return n}function Iv(n,e){do{var t=Pt;try{if(ip(),au.current=Bu,zu){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}zu=!1}if(ys=0,Ft=Lt=vt=null,Ma=!1,Ha=0,_p.current=null,t===null||t.return===null){Dt=1,Xa=e,Pt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Jm(o);if(p!==null){p.flags&=-257,e_(p,o,a,s,e),p.mode&1&&Qm(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){Qm(s,u,e),Sp();break e}l=Error(ne(426))}}else if(ft&&a.mode&1){var m=Jm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),e_(m,o,a,s,e),tp(Co(l,a));break e}}s=l=Co(l,a),Dt!==4&&(Dt=2),Ta===null?Ta=[s]:Ta.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=vv(s,l,e);jm(s,d);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Cr===null||!Cr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=xv(s,a,e);jm(s,y);break e}}s=s.return}while(s!==null)}kv(t)}catch(C){e=C,Pt===t&&t!==null&&(Pt=t=t.return);continue}break}while(!0)}function Fv(){var n=Vu.current;return Vu.current=Bu,n===null?Bu:n}function Sp(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),kt===null||!(Ss&268435455)&&!(dc&268435455)||mr(kt,Vt)}function Wu(n,e){var t=je;je|=2;var i=Fv();(kt!==n||Vt!==e)&&(Fi=null,fs(n,e));do try{XM();break}catch(r){Iv(n,r)}while(!0);if(ip(),je=t,Vu.current=i,Pt!==null)throw Error(ne(261));return kt=null,Vt=0,Dt}function XM(){for(;Pt!==null;)Ov(Pt)}function jM(){for(;Pt!==null&&!gS();)Ov(Pt)}function Ov(n){var e=Bv(n.alternate,n,Tn);n.memoizedProps=n.pendingProps,e===null?kv(n):Pt=e,_p.current=null}function kv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=zM(t,e),t!==null){t.flags&=32767,Pt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Dt=6,Pt=null;return}}else if(t=kM(t,e,Tn),t!==null){Pt=t;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=n}while(e!==null);Dt===0&&(Dt=5)}function Jr(n,e,t){var i=Qe,r=Yn.transition;try{Yn.transition=null,Qe=1,YM(n,e,t,i)}finally{Yn.transition=r,Qe=i}return null}function YM(n,e,t,i){do mo();while(vr!==null);if(je&6)throw Error(ne(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ne(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(CS(n,s),n===kt&&(Pt=kt=null,Vt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||bl||(bl=!0,Vv(wu,function(){return mo(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Yn.transition,Yn.transition=null;var o=Qe;Qe=1;var a=je;je|=4,_p.current=null,VM(n,t),Dv(t,n),hM(ad),Cu=!!od,ad=od=null,n.current=t,HM(t),vS(),je=a,Qe=o,Yn.transition=s}else n.current=t;if(bl&&(bl=!1,vr=n,Gu=r),s=n.pendingLanes,s===0&&(Cr=null),SS(t.stateNode),pn(n,wt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Hu)throw Hu=!1,n=Cd,Cd=null,n;return Gu&1&&n.tag!==0&&mo(),s=n.pendingLanes,s&1?n===Rd?wa++:(wa=0,Rd=n):wa=0,Vr(),null}function mo(){if(vr!==null){var n=v0(Gu),e=Yn.transition,t=Qe;try{if(Yn.transition=null,Qe=16>n?16:n,vr===null)var i=!1;else{if(n=vr,vr=null,Gu=0,je&6)throw Error(ne(331));var r=je;for(je|=4,he=n.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(he=u;he!==null;){var c=he;switch(c.tag){case 0:case 11:case 15:Ea(8,c,s)}var f=c.child;if(f!==null)f.return=c,he=f;else for(;he!==null;){c=he;var h=c.sibling,p=c.return;if(Pv(c),c===u){he=null;break}if(h!==null){h.return=p,he=h;break}he=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ea(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,he=d;break e}he=s.return}}var v=n.current;for(he=v;he!==null;){o=he;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,he=x;else e:for(o=v;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fc(9,a)}}catch(C){St(a,a.return,C)}if(a===o){he=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,he=y;break e}he=a.return}}if(je=r,Vr(),Mi&&typeof Mi.onPostCommitFiberRoot=="function")try{Mi.onPostCommitFiberRoot(ic,n)}catch{}i=!0}return i}finally{Qe=t,Yn.transition=e}}return!1}function h_(n,e,t){e=Co(t,e),e=vv(n,e,1),n=Ar(n,e,1),e=nn(),n!==null&&(il(n,1,e),pn(n,e))}function St(n,e,t){if(n.tag===3)h_(n,n,t);else for(;e!==null;){if(e.tag===3){h_(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Cr===null||!Cr.has(i))){n=Co(t,n),n=xv(e,n,1),e=Ar(e,n,1),n=nn(),e!==null&&(il(e,1,n),pn(e,n));break}}e=e.return}}function qM(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=nn(),n.pingedLanes|=n.suspendedLanes&t,kt===n&&(Vt&t)===t&&(Dt===4||Dt===3&&(Vt&130023424)===Vt&&500>wt()-vp?fs(n,0):gp|=t),pn(n,e)}function zv(n,e){e===0&&(n.mode&1?(e=yl,yl<<=1,!(yl&130023424)&&(yl=4194304)):e=1);var t=nn();n=Ki(n,e),n!==null&&(il(n,e,t),pn(n,t))}function $M(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),zv(n,t)}function KM(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),zv(n,t)}var Bv;Bv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||dn.current)fn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return fn=!1,OM(n,e,t);fn=!!(n.flags&131072)}else fn=!1,ft&&e.flags&1048576&&W0(e,Uu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;uu(n,e),n=e.pendingProps;var r=Eo(e,Qt.current);po(e,t),r=fp(null,e,i,n,r,t);var s=dp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(s=!0,Du(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,op(e),r.updater=cc,e.stateNode=r,r._reactInternals=e,_d(e,i,n,t),e=xd(null,e,i,!0,s,t)):(e.tag=0,ft&&s&&Jh(e),en(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(uu(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=QM(i),n=ii(i,n),r){case 0:e=vd(null,e,i,n,t);break e;case 1:e=i_(null,e,i,n,t);break e;case 11:e=t_(null,e,i,n,t);break e;case 14:e=n_(null,e,i,ii(i.type,n),t);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),vd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),i_(n,e,i,r,t);case 3:e:{if(Ev(e),n===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,K0(n,e),Ou(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Co(Error(ne(423)),e),e=r_(n,e,i,t,r);break e}else if(i!==r){r=Co(Error(ne(424)),e),e=r_(n,e,i,t,r);break e}else for(Rn=wr(e.stateNode.containerInfo.firstChild),bn=e,ft=!0,si=null,t=q0(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(To(),i===r){e=Zi(n,e,t);break e}en(n,e,i,t)}e=e.child}return e;case 5:return Z0(e),n===null&&hd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,ld(i,r)?o=null:s!==null&&ld(i,s)&&(e.flags|=32),Mv(n,e),en(n,e,o,t),e.child;case 6:return n===null&&hd(e),null;case 13:return Tv(n,e,t);case 4:return ap(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=wo(e,null,i,t):en(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),t_(n,e,i,r,t);case 7:return en(n,e,e.pendingProps,t),e.child;case 8:return en(n,e,e.pendingProps.children,t),e.child;case 12:return en(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(Iu,i._currentValue),i._currentValue=o,s!==null)if(di(s.value,o)){if(s.children===r.children&&!dn.current){e=Zi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ji(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),pd(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),pd(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}en(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,po(e,t),r=qn(r),i=i(r),e.flags|=1,en(n,e,i,t),e.child;case 14:return i=e.type,r=ii(i,e.pendingProps),r=ii(i.type,r),n_(n,e,i,r,t);case 15:return yv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),uu(n,e),e.tag=1,hn(i)?(n=!0,Du(e)):n=!1,po(e,t),gv(e,i,r),_d(e,i,r,t),xd(null,e,i,!0,n,t);case 19:return wv(n,e,t);case 22:return Sv(n,e,t)}throw Error(ne(156,e.tag))};function Vv(n,e){return p0(n,e)}function ZM(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(n,e,t,i){return new ZM(n,e,t,i)}function Mp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function QM(n){if(typeof n=="function")return Mp(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Vh)return 11;if(n===Hh)return 14}return 2}function Pr(n,e){var t=n.alternate;return t===null?(t=Wn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function du(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Mp(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case $s:return ds(t.children,r,s,e);case Bh:o=8,r|=8;break;case Bf:return n=Wn(12,t,e,r|2),n.elementType=Bf,n.lanes=s,n;case Vf:return n=Wn(13,t,e,r),n.elementType=Vf,n.lanes=s,n;case Hf:return n=Wn(19,t,e,r),n.elementType=Hf,n.lanes=s,n;case Zg:return hc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case $g:o=10;break e;case Kg:o=9;break e;case Vh:o=11;break e;case Hh:o=14;break e;case dr:o=16,i=null;break e}throw Error(ne(130,n==null?n:typeof n,""))}return e=Wn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ds(n,e,t,i){return n=Wn(7,n,i,e),n.lanes=t,n}function hc(n,e,t,i){return n=Wn(22,n,i,e),n.elementType=Zg,n.lanes=t,n.stateNode={isHidden:!1},n}function Kc(n,e,t){return n=Wn(6,n,null,e),n.lanes=t,n}function Zc(n,e,t){return e=Wn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function JM(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lc(0),this.expirationTimes=Lc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ep(n,e,t,i,r,s,o,a,l){return n=new JM(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},op(s),n}function eE(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Hv(n){if(!n)return Ir;n=n._reactInternals;e:{if(Rs(n)!==n||n.tag!==1)throw Error(ne(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(n.tag===1){var t=n.type;if(hn(t))return H0(n,t,e)}return e}function Gv(n,e,t,i,r,s,o,a,l){return n=Ep(t,i,!0,n,r,s,o,a,l),n.context=Hv(null),t=n.current,i=nn(),r=Rr(t),s=ji(i,r),s.callback=e??null,Ar(t,s,r),n.current.lanes=r,il(n,r,i),pn(n,i),n}function pc(n,e,t,i){var r=e.current,s=nn(),o=Rr(r);return t=Hv(t),e.context===null?e.context=t:e.pendingContext=t,e=ji(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ar(r,e,o),n!==null&&(ci(n,r,o,s),ou(n,r,o)),o}function Xu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function p_(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Tp(n,e){p_(n,e),(n=n.alternate)&&p_(n,e)}function tE(){return null}var Wv=typeof reportError=="function"?reportError:function(n){console.error(n)};function wp(n){this._internalRoot=n}mc.prototype.render=wp.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ne(409));pc(n,e,null,null)};mc.prototype.unmount=wp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ms(function(){pc(null,n,null,null)}),e[$i]=null}};function mc(n){this._internalRoot=n}mc.prototype.unstable_scheduleHydration=function(n){if(n){var e=S0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<pr.length&&e!==0&&e<pr[t].priority;t++);pr.splice(t,0,n),t===0&&E0(n)}};function Ap(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function _c(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function m_(){}function nE(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Xu(o);s.call(u)}}var o=Gv(e,i,n,0,null,!1,!1,"",m_);return n._reactRootContainer=o,n[$i]=o.current,Oa(n.nodeType===8?n.parentNode:n),Ms(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Xu(l);a.call(u)}}var l=Ep(n,0,!1,null,null,!1,!1,"",m_);return n._reactRootContainer=l,n[$i]=l.current,Oa(n.nodeType===8?n.parentNode:n),Ms(function(){pc(e,l,t,i)}),l}function gc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Xu(o);a.call(l)}}pc(e,o,n,r)}else o=nE(t,e,n,r,i);return Xu(o)}x0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=fa(e.pendingLanes);t!==0&&(Xh(e,t|1),pn(e,wt()),!(je&6)&&(Ro=wt()+500,Vr()))}break;case 13:Ms(function(){var i=Ki(n,1);if(i!==null){var r=nn();ci(i,n,1,r)}}),Tp(n,1)}};jh=function(n){if(n.tag===13){var e=Ki(n,134217728);if(e!==null){var t=nn();ci(e,n,134217728,t)}Tp(n,134217728)}};y0=function(n){if(n.tag===13){var e=Rr(n),t=Ki(n,e);if(t!==null){var i=nn();ci(t,n,e,i)}Tp(n,e)}};S0=function(){return Qe};M0=function(n,e){var t=Qe;try{return Qe=n,e()}finally{Qe=t}};Qf=function(n,e,t){switch(e){case"input":if(Xf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=ac(i);if(!r)throw Error(ne(90));Jg(i),Xf(i,r)}}}break;case"textarea":t0(n,t);break;case"select":e=t.value,e!=null&&uo(n,!!t.multiple,e,!1)}};l0=xp;u0=Ms;var iE={usingClientEntryPoint:!1,Events:[sl,Js,ac,o0,a0,xp]},na={findFiberByHostInstance:ss,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rE={bundleType:na.bundleType,version:na.version,rendererPackageName:na.rendererPackageName,rendererConfig:na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=d0(n),n===null?null:n.stateNode},findFiberByHostInstance:na.findFiberByHostInstance||tE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ll.isDisabled&&Ll.supportsFiber)try{ic=Ll.inject(rE),Mi=Ll}catch{}}In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iE;In.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ap(e))throw Error(ne(200));return eE(n,e,null,t)};In.createRoot=function(n,e){if(!Ap(n))throw Error(ne(299));var t=!1,i="",r=Wv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ep(n,1,!1,null,null,t,!1,i,r),n[$i]=e.current,Oa(n.nodeType===8?n.parentNode:n),new wp(e)};In.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ne(188)):(n=Object.keys(n).join(","),Error(ne(268,n)));return n=d0(e),n=n===null?null:n.stateNode,n};In.flushSync=function(n){return Ms(n)};In.hydrate=function(n,e,t){if(!_c(e))throw Error(ne(200));return gc(null,n,e,!0,t)};In.hydrateRoot=function(n,e,t){if(!Ap(n))throw Error(ne(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Wv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Gv(e,null,n,1,t??null,r,!1,s,o),n[$i]=e.current,Oa(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new mc(e)};In.render=function(n,e,t){if(!_c(e))throw Error(ne(200));return gc(null,n,e,!1,t)};In.unmountComponentAtNode=function(n){if(!_c(n))throw Error(ne(40));return n._reactRootContainer?(Ms(function(){gc(null,null,n,!1,function(){n._reactRootContainer=null,n[$i]=null})}),!0):!1};In.unstable_batchedUpdates=xp;In.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!_c(t))throw Error(ne(200));if(n==null||n._reactInternals===void 0)throw Error(ne(38));return gc(n,e,t,!1,i)};In.version="18.3.1-next-f1338f8080-20240426";function Xv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xv)}catch(n){console.error(n)}}Xv(),Xg.exports=In;var sE=Xg.exports,jv,__=sE;jv=__.createRoot,__.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cp="170",oE=0,g_=1,aE=2,Yv=1,lE=2,Ii=3,Fr=0,mn=1,Bi=2,br=0,_o=1,v_=2,x_=3,y_=4,uE=5,is=100,cE=101,fE=102,dE=103,hE=104,pE=200,mE=201,_E=202,gE=203,Ld=204,Dd=205,vE=206,xE=207,yE=208,SE=209,ME=210,EE=211,TE=212,wE=213,AE=214,Nd=0,Ud=1,Id=2,Po=3,Fd=4,Od=5,kd=6,zd=7,qv=0,CE=1,RE=2,Lr=0,PE=1,bE=2,LE=3,DE=4,NE=5,UE=6,IE=7,$v=300,bo=301,Lo=302,Bd=303,Vd=304,vc=306,Hd=1e3,ls=1001,Gd=1002,fi=1003,FE=1004,Dl=1005,yi=1006,Qc=1007,us=1008,Qi=1009,Kv=1010,Zv=1011,ja=1012,Rp=1013,Es=1014,Gi=1015,al=1016,Pp=1017,bp=1018,Do=1020,Qv=35902,Jv=1021,ex=1022,ai=1023,tx=1024,nx=1025,go=1026,No=1027,ix=1028,Lp=1029,rx=1030,Dp=1031,Np=1033,hu=33776,pu=33777,mu=33778,_u=33779,Wd=35840,Xd=35841,jd=35842,Yd=35843,qd=36196,$d=37492,Kd=37496,Zd=37808,Qd=37809,Jd=37810,eh=37811,th=37812,nh=37813,ih=37814,rh=37815,sh=37816,oh=37817,ah=37818,lh=37819,uh=37820,ch=37821,gu=36492,fh=36494,dh=36495,sx=36283,hh=36284,ph=36285,mh=36286,OE=3200,kE=3201,zE=0,BE=1,_r="",Vn="srgb",Go="srgb-linear",xc="linear",Je="srgb",Ns=7680,S_=519,VE=512,HE=513,GE=514,ox=515,WE=516,XE=517,jE=518,YE=519,M_=35044,E_="300 es",Wi=2e3,ju=2001;class Wo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jc=Math.PI/180,_h=180/Math.PI;function ll(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function cn(n,e,t){return Math.max(e,Math.min(t,n))}function qE(n,e){return(n%e+e)%e}function ef(n,e,t){return(1-t)*n+t*e}function ia(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ln(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,i,r,s,o,a,l,u){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],v=r[1],x=r[4],y=r[7],C=r[2],A=r[5],T=r[8];return s[0]=o*_+a*v+l*C,s[3]=o*m+a*x+l*A,s[6]=o*d+a*y+l*T,s[1]=u*_+c*v+f*C,s[4]=u*m+c*x+f*A,s[7]=u*d+c*y+f*T,s[2]=h*_+p*v+g*C,s[5]=h*m+p*x+g*A,s[8]=h*d+p*y+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,p=u*s-o*l,g=t*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tf.makeScale(e,t)),this}rotate(e){return this.premultiply(tf.makeRotation(-e)),this}translate(e,t){return this.premultiply(tf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tf=new Ne;function ax(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ya(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $E(){const n=Ya("canvas");return n.style.display="block",n}const T_={};function ha(n){n in T_||(T_[n]=!0,console.warn(n))}function KE(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function ZE(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function QE(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Xe={enabled:!0,workingColorSpace:Go,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Je&&(n.r=Yi(n.r),n.g=Yi(n.g),n.b=Yi(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Je&&(n.r=vo(n.r),n.g=vo(n.g),n.b=vo(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===_r?xc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const w_=[.64,.33,.3,.6,.15,.06],A_=[.2126,.7152,.0722],C_=[.3127,.329],R_=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),P_=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xe.define({[Go]:{primaries:w_,whitePoint:C_,transfer:xc,toXYZ:R_,fromXYZ:P_,luminanceCoefficients:A_,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:w_,whitePoint:C_,transfer:Je,toXYZ:R_,fromXYZ:P_,luminanceCoefficients:A_,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}});let Us;class JE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Us===void 0&&(Us=Ya("canvas")),Us.width=e.width,Us.height=e.height;const i=Us.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ya("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Yi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Yi(t[i]/255)*255):t[i]=Yi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let e1=0;class lx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=ll(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(nf(r[o].image)):s.push(nf(r[o]))}else s=nf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function nf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?JE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let t1=0;class rn extends Wo{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,i=ls,r=ls,s=yi,o=us,a=ai,l=Qi,u=rn.DEFAULT_ANISOTROPY,c=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=ll(),this.name="",this.source=new lx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$v)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hd:e.x=e.x-Math.floor(e.x);break;case ls:e.x=e.x<0?0:1;break;case Gd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hd:e.y=e.y-Math.floor(e.y);break;case ls:e.y=e.y<0?0:1;break;case Gd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=$v;rn.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,C=(d+1)/2,A=(c+h)/4,T=(f+_)/4,R=(g+m)/4;return x>y&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=T/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=R/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-_)/v,this.z=(h-c)/v,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class n1 extends Wo{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new rn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ts extends n1{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ux extends rn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fi,this.minFilter=fi,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class i1 extends rn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=fi,this.minFilter=fi,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ul{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||u!==p||c!==g){let m=1-a;const d=l*h+u*p+c*g+f*_,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const C=Math.sqrt(x),A=Math.atan2(C,d*v);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const y=a*v;if(l=l*m+h*y,u=u*m+p*y,c=c*m+g*y,f=f*m+_*y,m===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=C,u*=C,c*=C,f*=C}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+c*f+l*p-u*h,e[t+1]=l*g+c*h+u*f-a*p,e[t+2]=u*g+c*p+a*h-l*f,e[t+3]=c*g-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f-h*p*g;break;case"YXZ":this._x=h*c*f+u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f+h*p*g;break;case"ZXY":this._x=h*c*f-u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f-h*p*g;break;case"ZYX":this._x=h*c*f-u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f+h*p*g;break;case"YZX":this._x=h*c*f+u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f-h*p*g;break;case"XZY":this._x=h*c*f-u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(cn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(b_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(b_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rf.copy(this).projectOnVector(e),this.sub(rf)}reflect(e){return this.sub(rf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rf=new H,b_=new ul;class cl{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(s,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nl.copy(i.boundingBox)),Nl.applyMatrix4(e.matrixWorld),this.union(Nl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),Ul.subVectors(this.max,ra),Is.subVectors(e.a,ra),Fs.subVectors(e.b,ra),Os.subVectors(e.c,ra),or.subVectors(Fs,Is),ar.subVectors(Os,Fs),Wr.subVectors(Is,Os);let t=[0,-or.z,or.y,0,-ar.z,ar.y,0,-Wr.z,Wr.y,or.z,0,-or.x,ar.z,0,-ar.x,Wr.z,0,-Wr.x,-or.y,or.x,0,-ar.y,ar.x,0,-Wr.y,Wr.x,0];return!sf(t,Is,Fs,Os,Ul)||(t=[1,0,0,0,1,0,0,0,1],!sf(t,Is,Fs,Os,Ul))?!1:(Il.crossVectors(or,ar),t=[Il.x,Il.y,Il.z],sf(t,Is,Fs,Os,Ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bi=[new H,new H,new H,new H,new H,new H,new H,new H],ei=new H,Nl=new cl,Is=new H,Fs=new H,Os=new H,or=new H,ar=new H,Wr=new H,ra=new H,Ul=new H,Il=new H,Xr=new H;function sf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Xr.fromArray(n,s);const a=r.x*Math.abs(Xr.x)+r.y*Math.abs(Xr.y)+r.z*Math.abs(Xr.z),l=e.dot(Xr),u=t.dot(Xr),c=i.dot(Xr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const r1=new cl,sa=new H,of=new H;class Up{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):r1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);const t=sa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(of.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(of)),this.expandByPoint(sa.copy(e.center).sub(of))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new H,af=new H,Fl=new H,lr=new H,lf=new H,Ol=new H,uf=new H;class s1{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){af.copy(e).add(t).multiplyScalar(.5),Fl.copy(t).sub(e).normalize(),lr.copy(this.origin).sub(af);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Fl),a=lr.dot(this.direction),l=-lr.dot(Fl),u=lr.lengthSq(),c=Math.abs(1-o*o);let f,h,p,g;if(c>0)if(f=o*l-a,h=o*a-l,g=s*c,f>=0)if(h>=-g)if(h<=g){const _=1/c;f*=_,h*=_,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(af).addScaledVector(Fl,h),p}intersectSphere(e,t){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),r=Li.dot(Li)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,i,r,s){lf.subVectors(t,e),Ol.subVectors(i,e),uf.crossVectors(lf,Ol);let o=this.direction.dot(uf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;lr.subVectors(this.origin,e);const l=a*this.direction.dot(Ol.crossVectors(lr,Ol));if(l<0)return null;const u=a*this.direction.dot(lf.cross(lr));if(u<0||l+u>o)return null;const c=-a*lr.dot(uf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bt{constructor(e,t,i,r,s,o,a,l,u,c,f,h,p,g,_,m){bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,h,p,g,_,m)}set(e,t,i,r,s,o,a,l,u,c,f,h,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ks.setFromMatrixColumn(e,0).length(),s=1/ks.setFromMatrixColumn(e,1).length(),o=1/ks.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*f,g=a*c,_=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+g*u,t[5]=h-_*u,t[9]=-a*l,t[2]=_-h*u,t[6]=g+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,g=u*c,_=u*f;t[0]=h+_*a,t[4]=g*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,g=u*c,_=u*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*c,t[9]=_-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,g=a*c,_=a*f;t[0]=l*c,t[4]=g*u-p,t[8]=h*u+_,t[1]=l*f,t[5]=_*u+h,t[9]=p*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=_-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+_,t[5]=o*c,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*c,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(o1,e,a1)}lookAt(e,t,i){const r=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),ur.crossVectors(i,Mn),ur.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),ur.crossVectors(i,Mn)),ur.normalize(),kl.crossVectors(Mn,ur),r[0]=ur.x,r[4]=kl.x,r[8]=Mn.x,r[1]=ur.y,r[5]=kl.y,r[9]=Mn.y,r[2]=ur.z,r[6]=kl.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],v=i[3],x=i[7],y=i[11],C=i[15],A=r[0],T=r[4],R=r[8],S=r[12],M=r[1],b=r[5],z=r[9],F=r[13],j=r[2],Y=r[6],G=r[10],q=r[14],L=r[3],$=r[7],Z=r[11],se=r[15];return s[0]=o*A+a*M+l*j+u*L,s[4]=o*T+a*b+l*Y+u*$,s[8]=o*R+a*z+l*G+u*Z,s[12]=o*S+a*F+l*q+u*se,s[1]=c*A+f*M+h*j+p*L,s[5]=c*T+f*b+h*Y+p*$,s[9]=c*R+f*z+h*G+p*Z,s[13]=c*S+f*F+h*q+p*se,s[2]=g*A+_*M+m*j+d*L,s[6]=g*T+_*b+m*Y+d*$,s[10]=g*R+_*z+m*G+d*Z,s[14]=g*S+_*F+m*q+d*se,s[3]=v*A+x*M+y*j+C*L,s[7]=v*T+x*b+y*Y+C*$,s[11]=v*R+x*z+y*G+C*Z,s[15]=v*S+x*F+y*q+C*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*p-i*l*p)+_*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+t*u*f-t*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],v=f*m*u-_*h*u+_*l*p-a*m*p-f*l*d+a*h*d,x=g*h*u-c*m*u-g*l*p+o*m*p+c*l*d-o*h*d,y=c*_*u-g*f*u+g*a*p-o*_*p-c*a*d+o*f*d,C=g*f*l-c*_*l-g*a*h+o*_*h+c*a*m-o*f*m,A=t*v+i*x+r*y+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=v*T,e[1]=(_*h*s-f*m*s-_*r*p+i*m*p+f*r*d-i*h*d)*T,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*d+i*l*d)*T,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*T,e[4]=x*T,e[5]=(c*m*s-g*h*s+g*r*p-t*m*p-c*r*d+t*h*d)*T,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*d-t*l*d)*T,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*T,e[8]=y*T,e[9]=(g*f*s-c*_*s-g*i*p+t*_*p+c*i*d-t*f*d)*T,e[10]=(o*_*s-g*a*s+g*i*u-t*_*u-o*i*d+t*a*d)*T,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*p-t*a*p)*T,e[12]=C*T,e[13]=(c*_*r-g*f*r+g*i*h-t*_*h-c*i*m+t*f*m)*T,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*T,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,p=s*c,g=s*f,_=o*c,m=o*f,d=a*f,v=l*u,x=l*c,y=l*f,C=i.x,A=i.y,T=i.z;return r[0]=(1-(_+d))*C,r[1]=(p+y)*C,r[2]=(g-x)*C,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(h+d))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(g+x)*T,r[9]=(m-v)*T,r[10]=(1-(h+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ks.set(r[0],r[1],r[2]).length();const o=ks.set(r[4],r[5],r[6]).length(),a=ks.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ti.copy(this);const u=1/s,c=1/o,f=1/a;return ti.elements[0]*=u,ti.elements[1]*=u,ti.elements[2]*=u,ti.elements[4]*=c,ti.elements[5]*=c,ti.elements[6]*=c,ti.elements[8]*=f,ti.elements[9]*=f,ti.elements[10]*=f,t.setFromRotationMatrix(ti),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Wi){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,g;if(a===Wi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ju)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Wi){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),h=(t+e)*u,p=(i+r)*c;let g,_;if(a===Wi)g=(o+s)*f,_=-2*f;else if(a===ju)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ks=new H,ti=new bt,o1=new H(0,0,0),a1=new H(1,1,1),ur=new H,kl=new H,Mn=new H,L_=new bt,D_=new ul;class Ji{constructor(e=0,t=0,i=0,r=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-cn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return L_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(L_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return D_.setFromEuler(this),this.setFromQuaternion(D_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class cx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let l1=0;const N_=new H,zs=new ul,Di=new bt,zl=new H,oa=new H,u1=new H,c1=new ul,U_=new H(1,0,0),I_=new H(0,1,0),F_=new H(0,0,1),O_={type:"added"},f1={type:"removed"},Bs={type:"childadded",child:null},cf={type:"childremoved",child:null};class Ln extends Wo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=ll(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new H,t=new Ji,i=new ul,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new Ne}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(U_,e)}rotateY(e){return this.rotateOnAxis(I_,e)}rotateZ(e){return this.rotateOnAxis(F_,e)}translateOnAxis(e,t){return N_.copy(e).applyQuaternion(this.quaternion),this.position.add(N_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(U_,e)}translateY(e){return this.translateOnAxis(I_,e)}translateZ(e){return this.translateOnAxis(F_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zl.copy(e):zl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(oa,zl,this.up):Di.lookAt(zl,oa,this.up),this.quaternion.setFromRotationMatrix(Di),r&&(Di.extractRotation(r.matrixWorld),zs.setFromRotationMatrix(Di),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(O_),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(f1),cf.child=e,this.dispatchEvent(cf),cf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(O_),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,u1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,c1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ln.DEFAULT_UP=new H(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new H,Ni=new H,ff=new H,Ui=new H,Vs=new H,Hs=new H,k_=new H,df=new H,hf=new H,pf=new H,mf=new At,_f=new At,gf=new At;class oi{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ni.subVectors(e,t),r.cross(ni);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ni.subVectors(r,t),Ni.subVectors(i,t),ff.subVectors(e,t);const o=ni.dot(ni),a=ni.dot(Ni),l=ni.dot(ff),u=Ni.dot(Ni),c=Ni.dot(ff),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-a*c)*h,g=(o*c-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(a,Ui.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return mf.setScalar(0),_f.setScalar(0),gf.setScalar(0),mf.fromBufferAttribute(e,t),_f.fromBufferAttribute(e,i),gf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(mf,s.x),o.addScaledVector(_f,s.y),o.addScaledVector(gf,s.z),o}static isFrontFacing(e,t,i,r){return ni.subVectors(i,t),Ni.subVectors(e,t),ni.cross(Ni).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ni.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return oi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Vs.subVectors(r,i),Hs.subVectors(s,i),df.subVectors(e,i);const l=Vs.dot(df),u=Hs.dot(df);if(l<=0&&u<=0)return t.copy(i);hf.subVectors(e,r);const c=Vs.dot(hf),f=Hs.dot(hf);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Vs,o);pf.subVectors(e,s);const p=Vs.dot(pf),g=Hs.dot(pf);if(g>=0&&p<=g)return t.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(Hs,a);const m=c*g-p*f;if(m<=0&&f-c>=0&&p-g>=0)return k_.subVectors(s,r),a=(f-c)/(f-c+(p-g)),t.copy(r).addScaledVector(k_,a);const d=1/(m+_+h);return o=_*d,a=h*d,t.copy(i).addScaledVector(Vs,o).addScaledVector(Hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},Bl={h:0,s:0,l:0};function vf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Xe.workingColorSpace){if(e=qE(e,1),t=cn(t,0,1),i=cn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=vf(o,s,e+1/3),this.g=vf(o,s,e),this.b=vf(o,s,e-1/3)}return Xe.toWorkingColorSpace(this,r),this}setStyle(e,t=Vn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vn){const i=fx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return Xe.fromWorkingColorSpace(Yt.copy(this),e),Math.round(cn(Yt.r*255,0,255))*65536+Math.round(cn(Yt.g*255,0,255))*256+Math.round(cn(Yt.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Yt.copy(this),t);const i=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Vn){Xe.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,i=Yt.g,r=Yt.b;return e!==Vn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+t,cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(cr),e.getHSL(Bl);const i=ef(cr.h,Bl.h,t),r=ef(cr.s,Bl.s,t),s=ef(cr.l,Bl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new et;et.NAMES=fx;let d1=0;class yc extends Wo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=ll(),this.name="",this.blending=_o,this.side=Fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ld,this.blendDst=Dd,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=S_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_o&&(i.blending=this.blending),this.side!==Fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ld&&(i.blendSrc=this.blendSrc),this.blendDst!==Dd&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Po&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==S_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class dx extends yc{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=qv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new H,Vl=new Ke;class Ti{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=M_,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vl.fromBufferAttribute(this,t),Vl.applyMatrix3(e),this.setXY(t,Vl.x,Vl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ia(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ia(t,this.array)),t}setX(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ia(t,this.array)),t}setY(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ia(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ia(t,this.array)),t}setW(e,t){return this.normalized&&(t=ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ln(t,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==M_&&(e.usage=this.usage),e}}class hx extends Ti{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class px extends Ti{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class hs extends Ti{constructor(e,t,i){super(new Float32Array(e),t,i)}}let h1=0;const zn=new bt,xf=new Ln,Gs=new H,En=new cl,aa=new cl,It=new H;class Ps extends Wo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=ll(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ax(e)?px:hx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,i){return zn.makeTranslation(e,t,i),this.applyMatrix4(zn),this}scale(e,t,i){return zn.makeScale(e,t,i),this.applyMatrix4(zn),this}lookAt(e){return xf.lookAt(e),xf.updateMatrix(),this.applyMatrix4(xf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new hs(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Up);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];aa.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(En.min,aa.min),En.expandByPoint(It),It.addVectors(En.max,aa.max),En.expandByPoint(It)):(En.expandByPoint(aa.min),En.expandByPoint(aa.max))}En.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)It.fromBufferAttribute(a,u),l&&(Gs.fromBufferAttribute(e,u),It.add(Gs)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new H,l[R]=new H;const u=new H,c=new H,f=new H,h=new Ke,p=new Ke,g=new Ke,_=new H,m=new H;function d(R,S,M){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,S),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,R),p.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),c.sub(u),f.sub(u),p.sub(h),g.sub(h);const b=1/(p.x*g.y-g.x*p.y);isFinite(b)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(b),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(b),a[R].add(_),a[S].add(_),a[M].add(_),l[R].add(m),l[S].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,S=v.length;R<S;++R){const M=v[R],b=M.start,z=M.count;for(let F=b,j=b+z;F<j;F+=3)d(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new H,y=new H,C=new H,A=new H;function T(R){C.fromBufferAttribute(r,R),A.copy(C);const S=a[R];x.copy(S),x.sub(C.multiplyScalar(C.dot(S))).normalize(),y.crossVectors(A,S);const b=y.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,b)}for(let R=0,S=v.length;R<S;++R){const M=v[R],b=M.start,z=M.count;for(let F=b,j=b+z;F<j;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ti(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,u=new H,c=new H,f=new H;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let d=0;d<c;d++)h[g++]=u[p++]}return new Ti(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ps,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const z_=new bt,jr=new s1,Hl=new Up,B_=new H,Gl=new H,Wl=new H,Xl=new H,yf=new H,jl=new H,V_=new H,Yl=new H;class li extends Ln{constructor(e=new Ps,t=new dx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){jl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(yf.fromBufferAttribute(f,e),o?jl.addScaledVector(yf,c):jl.addScaledVector(yf.sub(t),c))}t.add(jl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hl.copy(i.boundingSphere),Hl.applyMatrix4(s),jr.copy(e.ray).recast(e.near),!(Hl.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Hl,B_)===null||jr.origin.distanceToSquared(B_)>(e.far-e.near)**2))&&(z_.copy(s).invert(),jr.copy(e.ray).applyMatrix4(z_),!(i.boundingBox!==null&&jr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,jr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,C=x;y<C;y+=3){const A=a.getX(y),T=a.getX(y+1),R=a.getX(y+2);r=ql(this,d,e,i,u,c,f,A,T,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=ql(this,o,e,i,u,c,f,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,C=x;y<C;y+=3){const A=y,T=y+1,R=y+2;r=ql(this,d,e,i,u,c,f,A,T,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=m,x=m+1,y=m+2;r=ql(this,o,e,i,u,c,f,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function p1(n,e,t,i,r,s,o,a){let l;if(e.side===mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Fr,a),l===null)return null;Yl.copy(a),Yl.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Yl);return u<t.near||u>t.far?null:{distance:u,point:Yl.clone(),object:n}}function ql(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Gl),n.getVertexPosition(l,Wl),n.getVertexPosition(u,Xl);const c=p1(n,e,t,i,Gl,Wl,Xl,V_);if(c){const f=new H;oi.getBarycoord(V_,Gl,Wl,Xl,f),r&&(c.uv=oi.getInterpolatedAttribute(r,a,l,u,f,new Ke)),s&&(c.uv1=oi.getInterpolatedAttribute(s,a,l,u,f,new Ke)),o&&(c.normal=oi.getInterpolatedAttribute(o,a,l,u,f,new H),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new H,materialIndex:0};oi.getNormal(Gl,Wl,Xl,h.normal),c.face=h,c.barycoord=f}return c}class fl extends Ps{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new hs(u,3)),this.setAttribute("normal",new hs(c,3)),this.setAttribute("uv",new hs(f,2));function g(_,m,d,v,x,y,C,A,T,R,S){const M=y/T,b=C/R,z=y/2,F=C/2,j=A/2,Y=T+1,G=R+1;let q=0,L=0;const $=new H;for(let Z=0;Z<G;Z++){const se=Z*b-F;for(let me=0;me<Y;me++){const ke=me*M-z;$[_]=ke*v,$[m]=se*x,$[d]=j,u.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[d]=A>0?1:-1,c.push($.x,$.y,$.z),f.push(me/T),f.push(1-Z/R),q+=1}}for(let Z=0;Z<R;Z++)for(let se=0;se<T;se++){const me=h+se+Y*Z,ke=h+se+Y*(Z+1),W=h+(se+1)+Y*(Z+1),te=h+(se+1)+Y*Z;l.push(me,ke,te),l.push(ke,W,te),L+=6}a.addGroup(p,L,S),p+=L,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Uo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Jt(n){const e={};for(let t=0;t<n.length;t++){const i=Uo(n[t]);for(const r in i)e[r]=i[r]}return e}function m1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const _1={clone:Uo,merge:Jt};var g1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends yc{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g1,this.fragmentShader=v1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Uo(e.uniforms),this.uniformsGroups=m1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class _x extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fr=new H,H_=new Ke,G_=new Ke;class An extends _x{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_h*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _h*2*Math.atan(Math.tan(Jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,t){return this.getViewBounds(e,H_,G_),t.subVectors(G_,H_)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ws=-90,Xs=1;class x1 extends Ln{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(Ws,Xs,e,t);r.layers=this.layers,this.add(r);const s=new An(Ws,Xs,e,t);s.layers=this.layers,this.add(s);const o=new An(Ws,Xs,e,t);o.layers=this.layers,this.add(o);const a=new An(Ws,Xs,e,t);a.layers=this.layers,this.add(a);const l=new An(Ws,Xs,e,t);l.layers=this.layers,this.add(l);const u=new An(Ws,Xs,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ju)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class gx extends rn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:bo,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class y1 extends Ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new gx(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fl(5,5,5),s=new Ai({name:"CubemapFromEquirect",uniforms:Uo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:br});s.uniforms.tEquirect.value=t;const o=new li(r,s),a=t.minFilter;return t.minFilter===us&&(t.minFilter=yi),new x1(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Sf=new H,S1=new H,M1=new Ne;class es{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Sf.subVectors(i,t).cross(S1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Sf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||M1.getNormalMatrix(e),r=this.coplanarPoint(Sf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new Up,$l=new H;class vx{constructor(e=new es,t=new es,i=new es,r=new es,s=new es,o=new es){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Wi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,m-p,y-d).normalize(),i[1].setComponents(l+s,h+u,m+p,y+d).normalize(),i[2].setComponents(l+o,h+c,m+g,y+v).normalize(),i[3].setComponents(l-o,h-c,m-g,y-v).normalize(),i[4].setComponents(l-a,h-f,m-_,y-x).normalize(),t===Wi)i[5].setComponents(l+a,h+f,m+_,y+x).normalize();else if(t===ju)i[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if($l.x=r.normal.x>0?e.max.x:e.min.x,$l.y=r.normal.y>0?e.max.y:e.min.y,$l.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($l)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xx(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function E1(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,a),f.length===0)n.bufferSubData(u,0,c);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Xo extends Ps{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<c;d++){const v=d*h-o;for(let x=0;x<u;x++){const y=x*f-s;g.push(y,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const x=v+u*d,y=v+u*(d+1),C=v+1+u*(d+1),A=v+1+u*d;p.push(x,y,A),p.push(y,C,A)}this.setIndex(p),this.setAttribute("position",new hs(g,3)),this.setAttribute("normal",new hs(_,3)),this.setAttribute("uv",new hs(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.widthSegments,e.heightSegments)}}var T1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,A1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,L1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,N1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,O1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,k1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,W1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,X1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,j1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Y1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,q1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,K1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eT="gl_FragColor = linearToOutputTexel( gl_FragColor );",tT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,iT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,aT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_T=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ST=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,MT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ET=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,TT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,AT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,NT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,BT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,HT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,GT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,YT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$T=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,JT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ew=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ow=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_w=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ew=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Aw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ow=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ww=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$w=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:T1,alphahash_pars_fragment:w1,alphamap_fragment:A1,alphamap_pars_fragment:C1,alphatest_fragment:R1,alphatest_pars_fragment:P1,aomap_fragment:b1,aomap_pars_fragment:L1,batching_pars_vertex:D1,batching_vertex:N1,begin_vertex:U1,beginnormal_vertex:I1,bsdfs:F1,iridescence_fragment:O1,bumpmap_pars_fragment:k1,clipping_planes_fragment:z1,clipping_planes_pars_fragment:B1,clipping_planes_pars_vertex:V1,clipping_planes_vertex:H1,color_fragment:G1,color_pars_fragment:W1,color_pars_vertex:X1,color_vertex:j1,common:Y1,cube_uv_reflection_fragment:q1,defaultnormal_vertex:$1,displacementmap_pars_vertex:K1,displacementmap_vertex:Z1,emissivemap_fragment:Q1,emissivemap_pars_fragment:J1,colorspace_fragment:eT,colorspace_pars_fragment:tT,envmap_fragment:nT,envmap_common_pars_fragment:iT,envmap_pars_fragment:rT,envmap_pars_vertex:sT,envmap_physical_pars_fragment:_T,envmap_vertex:oT,fog_vertex:aT,fog_pars_vertex:lT,fog_fragment:uT,fog_pars_fragment:cT,gradientmap_pars_fragment:fT,lightmap_pars_fragment:dT,lights_lambert_fragment:hT,lights_lambert_pars_fragment:pT,lights_pars_begin:mT,lights_toon_fragment:gT,lights_toon_pars_fragment:vT,lights_phong_fragment:xT,lights_phong_pars_fragment:yT,lights_physical_fragment:ST,lights_physical_pars_fragment:MT,lights_fragment_begin:ET,lights_fragment_maps:TT,lights_fragment_end:wT,logdepthbuf_fragment:AT,logdepthbuf_pars_fragment:CT,logdepthbuf_pars_vertex:RT,logdepthbuf_vertex:PT,map_fragment:bT,map_pars_fragment:LT,map_particle_fragment:DT,map_particle_pars_fragment:NT,metalnessmap_fragment:UT,metalnessmap_pars_fragment:IT,morphinstance_vertex:FT,morphcolor_vertex:OT,morphnormal_vertex:kT,morphtarget_pars_vertex:zT,morphtarget_vertex:BT,normal_fragment_begin:VT,normal_fragment_maps:HT,normal_pars_fragment:GT,normal_pars_vertex:WT,normal_vertex:XT,normalmap_pars_fragment:jT,clearcoat_normal_fragment_begin:YT,clearcoat_normal_fragment_maps:qT,clearcoat_pars_fragment:$T,iridescence_pars_fragment:KT,opaque_fragment:ZT,packing:QT,premultiplied_alpha_fragment:JT,project_vertex:ew,dithering_fragment:tw,dithering_pars_fragment:nw,roughnessmap_fragment:iw,roughnessmap_pars_fragment:rw,shadowmap_pars_fragment:sw,shadowmap_pars_vertex:ow,shadowmap_vertex:aw,shadowmask_pars_fragment:lw,skinbase_vertex:uw,skinning_pars_vertex:cw,skinning_vertex:fw,skinnormal_vertex:dw,specularmap_fragment:hw,specularmap_pars_fragment:pw,tonemapping_fragment:mw,tonemapping_pars_fragment:_w,transmission_fragment:gw,transmission_pars_fragment:vw,uv_pars_fragment:xw,uv_pars_vertex:yw,uv_vertex:Sw,worldpos_vertex:Mw,background_vert:Ew,background_frag:Tw,backgroundCube_vert:ww,backgroundCube_frag:Aw,cube_vert:Cw,cube_frag:Rw,depth_vert:Pw,depth_frag:bw,distanceRGBA_vert:Lw,distanceRGBA_frag:Dw,equirect_vert:Nw,equirect_frag:Uw,linedashed_vert:Iw,linedashed_frag:Fw,meshbasic_vert:Ow,meshbasic_frag:kw,meshlambert_vert:zw,meshlambert_frag:Bw,meshmatcap_vert:Vw,meshmatcap_frag:Hw,meshnormal_vert:Gw,meshnormal_frag:Ww,meshphong_vert:Xw,meshphong_frag:jw,meshphysical_vert:Yw,meshphysical_frag:qw,meshtoon_vert:$w,meshtoon_frag:Kw,points_vert:Zw,points_frag:Qw,shadow_vert:Jw,shadow_frag:eA,sprite_vert:tA,sprite_frag:nA},ae={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},gi={basic:{uniforms:Jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new et(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Jt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Jt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new et(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Jt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Jt([ae.points,ae.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Jt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Jt([ae.common,ae.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Jt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Jt([ae.sprite,ae.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Jt([ae.common,ae.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Jt([ae.lights,ae.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};gi.physical={uniforms:Jt([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Kl={r:0,b:0,g:0},qr=new Ji,iA=new bt;function rA(n,e,t,i,r,s,o){const a=new et(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const y=g(v);y===null?d(a,l):y&&y.isColor&&(d(y,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,x){const y=g(x);y&&(y.isCubeTexture||y.mapping===vc)?(c===void 0&&(c=new li(new fl(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Uo(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),qr.copy(x.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(iA.makeRotationFromEuler(qr)),c.material.toneMapped=Xe.getTransfer(y.colorSpace)!==Je,(f!==y||h!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new li(new Xo(2,2),new Ai({name:"BackgroundMaterial",uniforms:Uo(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Fr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=Xe.getTransfer(y.colorSpace)!==Je,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,p=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function d(v,x){v.getRGB(Kl,mx(n)),i.buffers.color.setClear(Kl.r,Kl.g,Kl.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:_,addToRenderList:m}}function sA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,b,z,F,j){let Y=!1;const G=f(F,z,b);s!==G&&(s=G,u(s.object)),Y=p(M,F,z,j),Y&&g(M,F,z,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,y(M,b,z,F),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return n.createVertexArray()}function u(M){return n.bindVertexArray(M)}function c(M){return n.deleteVertexArray(M)}function f(M,b,z){const F=z.wireframe===!0;let j=i[M.id];j===void 0&&(j={},i[M.id]=j);let Y=j[b.id];Y===void 0&&(Y={},j[b.id]=Y);let G=Y[F];return G===void 0&&(G=h(l()),Y[F]=G),G}function h(M){const b=[],z=[],F=[];for(let j=0;j<t;j++)b[j]=0,z[j]=0,F[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:z,attributeDivisors:F,object:M,attributes:{},index:null}}function p(M,b,z,F){const j=s.attributes,Y=b.attributes;let G=0;const q=z.getAttributes();for(const L in q)if(q[L].location>=0){const Z=j[L];let se=Y[L];if(se===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),Z===void 0||Z.attribute!==se||se&&Z.data!==se.data)return!0;G++}return s.attributesNum!==G||s.index!==F}function g(M,b,z,F){const j={},Y=b.attributes;let G=0;const q=z.getAttributes();for(const L in q)if(q[L].location>=0){let Z=Y[L];Z===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor));const se={};se.attribute=Z,Z&&Z.data&&(se.data=Z.data),j[L]=se,G++}s.attributes=j,s.attributesNum=G,s.index=F}function _(){const M=s.newAttributes;for(let b=0,z=M.length;b<z;b++)M[b]=0}function m(M){d(M,0)}function d(M,b){const z=s.newAttributes,F=s.enabledAttributes,j=s.attributeDivisors;z[M]=1,F[M]===0&&(n.enableVertexAttribArray(M),F[M]=1),j[M]!==b&&(n.vertexAttribDivisor(M,b),j[M]=b)}function v(){const M=s.newAttributes,b=s.enabledAttributes;for(let z=0,F=b.length;z<F;z++)b[z]!==M[z]&&(n.disableVertexAttribArray(z),b[z]=0)}function x(M,b,z,F,j,Y,G){G===!0?n.vertexAttribIPointer(M,b,z,j,Y):n.vertexAttribPointer(M,b,z,F,j,Y)}function y(M,b,z,F){_();const j=F.attributes,Y=z.getAttributes(),G=b.defaultAttributeValues;for(const q in Y){const L=Y[q];if(L.location>=0){let $=j[q];if($===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),$!==void 0){const Z=$.normalized,se=$.itemSize,me=e.get($);if(me===void 0)continue;const ke=me.buffer,W=me.type,te=me.bytesPerElement,pe=W===n.INT||W===n.UNSIGNED_INT||$.gpuType===Rp;if($.isInterleavedBufferAttribute){const oe=$.data,Ce=oe.stride,be=$.offset;if(oe.isInstancedInterleavedBuffer){for(let Fe=0;Fe<L.locationSize;Fe++)d(L.location+Fe,oe.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Fe=0;Fe<L.locationSize;Fe++)m(L.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let Fe=0;Fe<L.locationSize;Fe++)x(L.location+Fe,se/L.locationSize,W,Z,Ce*te,(be+se/L.locationSize*Fe)*te,pe)}else{if($.isInstancedBufferAttribute){for(let oe=0;oe<L.locationSize;oe++)d(L.location+oe,$.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let oe=0;oe<L.locationSize;oe++)m(L.location+oe);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let oe=0;oe<L.locationSize;oe++)x(L.location+oe,se/L.locationSize,W,Z,se*te,se/L.locationSize*oe*te,pe)}}else if(G!==void 0){const Z=G[q];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(L.location,Z);break;case 3:n.vertexAttrib3fv(L.location,Z);break;case 4:n.vertexAttrib4fv(L.location,Z);break;default:n.vertexAttrib1fv(L.location,Z)}}}}v()}function C(){R();for(const M in i){const b=i[M];for(const z in b){const F=b[z];for(const j in F)c(F[j].object),delete F[j];delete b[z]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const b=i[M.id];for(const z in b){const F=b[z];for(const j in F)c(F[j].object),delete F[j];delete b[z]}delete i[M.id]}function T(M){for(const b in i){const z=i[b];if(z[M.id]===void 0)continue;const F=z[M.id];for(const j in F)c(F[j].object),delete F[j];delete z[M.id]}}function R(){S(),o=!0,s!==r&&(s=r,u(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function oA(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let g=0;g<f;g++)p+=c[g];t.update(p,i,1)}function l(u,c,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],c[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=c[_]*h[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function aA(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==ai&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===al&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Qi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Gi&&!R)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:C,maxSamples:A}}function lA(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new es,a=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let y=d.clippingState||null;l.value=y,y=c(g,h,x,p);for(let C=0;C!==x;++C)y[C]=t[C];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,y=p;x!==_;++x,y+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function uA(n){let e=new WeakMap;function t(o,a){return a===Bd?o.mapping=bo:a===Vd&&(o.mapping=Lo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Bd||a===Vd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new y1(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class cA extends _x{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const oo=4,W_=[.125,.215,.35,.446,.526,.582],rs=20,Mf=new cA,X_=new et;let Ef=null,Tf=0,wf=0,Af=!1;const ts=(1+Math.sqrt(5))/2,js=1/ts,j_=[new H(-ts,js,0),new H(ts,js,0),new H(-js,0,ts),new H(js,0,ts),new H(0,ts,-js),new H(0,ts,js),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Y_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ef=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=K_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ef,Tf,wf),this._renderer.xr.enabled=Af,e.scissorTest=!1,Zl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bo||e.mapping===Lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ef=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),wf=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:al,format:ai,colorSpace:Go,depthBuffer:!1},r=q_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=q_(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fA(s)),this._blurMaterial=dA(s,e,t)}return r}_compileMaterial(e){const t=new li(this._lodPlanes[0],e);this._renderer.compile(t,Mf)}_sceneToCubeUV(e,t,i,r){const a=new An(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(X_),c.toneMapping=Lr,c.autoClear=!1;const p=new dx({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new li(new fl,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(X_),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const x=this._cubeSize;Zl(r,v*x,d>2?x:0,x,x),c.setRenderTarget(r),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===bo||e.mapping===Lo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=K_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new li(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Zl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Mf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=j_[(r-s-1)%j_.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new li(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*rs-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):rs;m>rs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);const d=[];let v=0;for(let T=0;T<rs;++T){const R=T/_,S=Math.exp(-R*R/2);d.push(S),T===0?v+=S:T<m&&(v+=2*S)}for(let T=0;T<d.length;T++)d[T]=d[T]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-i;const y=this._sizeLods[r],C=3*y*(r>x-oo?r-x+oo:0),A=4*(this._cubeSize-y);Zl(t,C,A,3*y,2*y),l.setRenderTarget(t),l.render(f,Mf)}}function fA(n){const e=[],t=[],i=[];let r=n;const s=n-oo+1+W_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-oo?l=W_[o-n+oo-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,g=6,_=3,m=2,d=1,v=new Float32Array(_*g*p),x=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,R=A>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];v.set(S,_*g*A),x.set(h,m*g*A);const M=[A,A,A,A,A,A];y.set(M,d*g*A)}const C=new Ps;C.setAttribute("position",new Ti(v,_)),C.setAttribute("uv",new Ti(x,m)),C.setAttribute("faceIndex",new Ti(y,d)),e.push(C),r>oo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function q_(n,e,t){const i=new Ts(n,e,t);return i.texture.mapping=vc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function dA(n,e,t){const i=new Float32Array(rs),r=new H(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ip(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function $_(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ip(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function K_(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ip(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function Ip(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hA(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Bd||l===Vd,c=l===bo||l===Lo;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Y_(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new Y_(n)),f=u?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function pA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ha("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mA(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let x=0,y=v.length;x<y;x+=3){const C=v[x+0],A=v[x+1],T=v[x+2];h.push(C,A,A,T,T,C)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const C=x+0,A=x+1,T=x+2;h.push(C,A,A,T,T,C)}}else return;const m=new(ax(h)?px:hx)(h,1);m.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function _A(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function u(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,h*o,g),t.update(p,i,g))}function c(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function f(h,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)u(h[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,_,0,g);let d=0;for(let v=0;v<g;v++)d+=p[v]*_[v];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function gA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function vA(n,e,t){const i=new WeakMap,r=new At;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let C=a.attributes.position.count*y,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*A*4*f),R=new ux(T,C,A,f);R.type=Gi,R.needsUpdate=!0;const S=y*4;for(let b=0;b<f;b++){const z=d[b],F=v[b],j=x[b],Y=C*A*4*b;for(let G=0;G<z.count;G++){const q=G*S;g===!0&&(r.fromBufferAttribute(z,G),T[Y+q+0]=r.x,T[Y+q+1]=r.y,T[Y+q+2]=r.z,T[Y+q+3]=0),_===!0&&(r.fromBufferAttribute(F,G),T[Y+q+4]=r.x,T[Y+q+5]=r.y,T[Y+q+6]=r.z,T[Y+q+7]=0),m===!0&&(r.fromBufferAttribute(j,G),T[Y+q+8]=r.x,T[Y+q+9]=r.y,T[Y+q+10]=r.z,T[Y+q+11]=j.itemSize===4?r.w:1)}}h={count:f,texture:R,size:new Ke(C,A)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function xA(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class yx extends rn{constructor(e,t,i,r,s,o,a,l,u,c=go){if(c!==go&&c!==No)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===go&&(i=Es),i===void 0&&c===No&&(i=Do),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:fi,this.minFilter=l!==void 0?l:fi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Sx=new rn,Z_=new yx(1,1),Mx=new ux,Ex=new i1,Tx=new gx,Q_=[],J_=[],eg=new Float32Array(16),tg=new Float32Array(9),ng=new Float32Array(4);function jo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Q_[r];if(s===void 0&&(s=new Float32Array(r),Q_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Sc(n,e){let t=J_[e];t===void 0&&(t=new Int32Array(e),J_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function yA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function SA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function MA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function EA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function TA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;ng.set(i),n.uniformMatrix2fv(this.addr,!1,ng),Ut(t,i)}}function wA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;tg.set(i),n.uniformMatrix3fv(this.addr,!1,tg),Ut(t,i)}}function AA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;eg.set(i),n.uniformMatrix4fv(this.addr,!1,eg),Ut(t,i)}}function CA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function RA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function PA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function bA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function LA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function DA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function NA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function UA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function IA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Z_.compareFunction=ox,s=Z_):s=Sx,t.setTexture2D(e||s,r)}function FA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ex,r)}function OA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Tx,r)}function kA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Mx,r)}function zA(n){switch(n){case 5126:return yA;case 35664:return SA;case 35665:return MA;case 35666:return EA;case 35674:return TA;case 35675:return wA;case 35676:return AA;case 5124:case 35670:return CA;case 35667:case 35671:return RA;case 35668:case 35672:return PA;case 35669:case 35673:return bA;case 5125:return LA;case 36294:return DA;case 36295:return NA;case 36296:return UA;case 35678:case 36198:case 36298:case 36306:case 35682:return IA;case 35679:case 36299:case 36307:return FA;case 35680:case 36300:case 36308:case 36293:return OA;case 36289:case 36303:case 36311:case 36292:return kA}}function BA(n,e){n.uniform1fv(this.addr,e)}function VA(n,e){const t=jo(e,this.size,2);n.uniform2fv(this.addr,t)}function HA(n,e){const t=jo(e,this.size,3);n.uniform3fv(this.addr,t)}function GA(n,e){const t=jo(e,this.size,4);n.uniform4fv(this.addr,t)}function WA(n,e){const t=jo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function XA(n,e){const t=jo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jA(n,e){const t=jo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function YA(n,e){n.uniform1iv(this.addr,e)}function qA(n,e){n.uniform2iv(this.addr,e)}function $A(n,e){n.uniform3iv(this.addr,e)}function KA(n,e){n.uniform4iv(this.addr,e)}function ZA(n,e){n.uniform1uiv(this.addr,e)}function QA(n,e){n.uniform2uiv(this.addr,e)}function JA(n,e){n.uniform3uiv(this.addr,e)}function eC(n,e){n.uniform4uiv(this.addr,e)}function tC(n,e,t){const i=this.cache,r=e.length,s=Sc(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Sx,s[o])}function nC(n,e,t){const i=this.cache,r=e.length,s=Sc(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ex,s[o])}function iC(n,e,t){const i=this.cache,r=e.length,s=Sc(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Tx,s[o])}function rC(n,e,t){const i=this.cache,r=e.length,s=Sc(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Mx,s[o])}function sC(n){switch(n){case 5126:return BA;case 35664:return VA;case 35665:return HA;case 35666:return GA;case 35674:return WA;case 35675:return XA;case 35676:return jA;case 5124:case 35670:return YA;case 35667:case 35671:return qA;case 35668:case 35672:return $A;case 35669:case 35673:return KA;case 5125:return ZA;case 36294:return QA;case 36295:return JA;case 36296:return eC;case 35678:case 36198:case 36298:case 36306:case 35682:return tC;case 35679:case 36299:case 36307:return nC;case 35680:case 36300:case 36308:case 36293:return iC;case 36289:case 36303:case 36311:case 36292:return rC}}class oC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=zA(t.type)}}class aC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sC(t.type)}}class lC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Cf=/(\w+)(\])?(\[|\.)?/g;function ig(n,e){n.seq.push(e),n.map[e.id]=e}function uC(n,e,t){const i=n.name,r=i.length;for(Cf.lastIndex=0;;){const s=Cf.exec(i),o=Cf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){ig(t,u===void 0?new oC(a,n,e):new aC(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new lC(a),ig(t,f)),t=f}}}class vu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);uC(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function rg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const cC=37297;let fC=0;function dC(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const sg=new Ne;function hC(n){Xe._getMatrix(sg,Xe.workingColorSpace,n);const e=`mat3( ${sg.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(n)){case xc:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function og(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+dC(n.getShaderSource(e),o)}else return r}function pC(n,e){const t=hC(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function mC(n,e){let t;switch(e){case PE:t="Linear";break;case bE:t="Reinhard";break;case LE:t="Cineon";break;case DE:t="ACESFilmic";break;case UE:t="AgX";break;case IE:t="Neutral";break;case NE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ql=new H;function _C(){Xe.getLuminanceCoefficients(Ql);const n=Ql.x.toFixed(4),e=Ql.y.toFixed(4),t=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function vC(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function xC(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function pa(n){return n!==""}function ag(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yC=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(n){return n.replace(yC,MC)}const SC=new Map;function MC(n,e){let t=Ie[e];if(t===void 0){const i=SC.get(e);if(i!==void 0)t=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gh(t)}const EC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ug(n){return n.replace(EC,TC)}function TC(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wC(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Yv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===lE?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function AC(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case bo:case Lo:e="ENVMAP_TYPE_CUBE";break;case vc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CC(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Lo:e="ENVMAP_MODE_REFRACTION";break}return e}function RC(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case qv:e="ENVMAP_BLENDING_MULTIPLY";break;case CE:e="ENVMAP_BLENDING_MIX";break;case RE:e="ENVMAP_BLENDING_ADD";break}return e}function PC(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function bC(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=wC(t),u=AC(t),c=CC(t),f=RC(t),h=PC(t),p=gC(t),g=vC(s),_=r.createProgram();let m,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pa).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pa).join(`
`),d.length>0&&(d+=`
`)):(m=[cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),d=[cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Lr?"#define TONE_MAPPING":"",t.toneMapping!==Lr?Ie.tonemapping_pars_fragment:"",t.toneMapping!==Lr?mC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,pC("linearToOutputTexel",t.outputColorSpace),_C(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pa).join(`
`)),o=gh(o),o=ag(o,t),o=lg(o,t),a=gh(a),a=ag(a,t),a=lg(a,t),o=ug(o),a=ug(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===E_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===E_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=v+m+o,y=v+d+a,C=rg(r,r.VERTEX_SHADER,x),A=rg(r,r.FRAGMENT_SHADER,y);r.attachShader(_,C),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(b){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(C).trim(),j=r.getShaderInfoLog(A).trim();let Y=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,A);else{const q=og(r,C,"vertex"),L=og(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+z+`
`+q+`
`+L)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||j==="")&&(G=!1);G&&(b.diagnostics={runnable:Y,programLog:z,vertexShader:{log:F,prefix:m},fragmentShader:{log:j,prefix:d}})}r.deleteShader(C),r.deleteShader(A),R=new vu(r,_),S=xC(r,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,cC)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fC++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let LC=0;class DC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new NC(e),t.set(e,i)),i}}class NC{constructor(e){this.id=LC++,this.code=e,this.usedTimes=0}}function UC(n,e,t,i,r,s,o){const a=new cx,l=new DC,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return u.add(S),S===0?"uv":`uv${S}`}function m(S,M,b,z,F){const j=z.fog,Y=F.geometry,G=S.isMeshStandardMaterial?z.environment:null,q=(S.isMeshStandardMaterial?t:e).get(S.envMap||G),L=q&&q.mapping===vc?q.image.height:null,$=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const Z=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,se=Z!==void 0?Z.length:0;let me=0;Y.morphAttributes.position!==void 0&&(me=1),Y.morphAttributes.normal!==void 0&&(me=2),Y.morphAttributes.color!==void 0&&(me=3);let ke,W,te,pe;if($){const Ze=gi[$];ke=Ze.vertexShader,W=Ze.fragmentShader}else ke=S.vertexShader,W=S.fragmentShader,l.update(S),te=l.getVertexShaderID(S),pe=l.getFragmentShaderID(S);const oe=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),be=F.isInstancedMesh===!0,Fe=F.isBatchedMesh===!0,ht=!!S.map,Ge=!!S.matcap,Et=!!q,I=!!S.aoMap,On=!!S.lightMap,Be=!!S.bumpMap,Ve=!!S.normalMap,we=!!S.displacementMap,ot=!!S.emissiveMap,Te=!!S.metalnessMap,P=!!S.roughnessMap,E=S.anisotropy>0,k=S.clearcoat>0,Q=S.dispersion>0,ee=S.iridescence>0,K=S.sheen>0,Me=S.transmission>0,ue=E&&!!S.anisotropyMap,_e=k&&!!S.clearcoatMap,We=k&&!!S.clearcoatNormalMap,ie=k&&!!S.clearcoatRoughnessMap,ge=ee&&!!S.iridescenceMap,Ae=ee&&!!S.iridescenceThicknessMap,Re=K&&!!S.sheenColorMap,ve=K&&!!S.sheenRoughnessMap,He=!!S.specularMap,Ue=!!S.specularColorMap,nt=!!S.specularIntensityMap,D=Me&&!!S.transmissionMap,le=Me&&!!S.thicknessMap,X=!!S.gradientMap,J=!!S.alphaMap,de=S.alphaTest>0,ce=!!S.alphaHash,Le=!!S.extensions;let yt=Lr;S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(yt=n.toneMapping);const Gt={shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:ke,fragmentShader:W,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:pe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Fe,batchingColor:Fe&&F._colorsTexture!==null,instancing:be,instancingColor:be&&F.instanceColor!==null,instancingMorph:be&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Go,alphaToCoverage:!!S.alphaToCoverage,map:ht,matcap:Ge,envMap:Et,envMapMode:Et&&q.mapping,envMapCubeUVHeight:L,aoMap:I,lightMap:On,bumpMap:Be,normalMap:Ve,displacementMap:h&&we,emissiveMap:ot,normalMapObjectSpace:Ve&&S.normalMapType===BE,normalMapTangentSpace:Ve&&S.normalMapType===zE,metalnessMap:Te,roughnessMap:P,anisotropy:E,anisotropyMap:ue,clearcoat:k,clearcoatMap:_e,clearcoatNormalMap:We,clearcoatRoughnessMap:ie,dispersion:Q,iridescence:ee,iridescenceMap:ge,iridescenceThicknessMap:Ae,sheen:K,sheenColorMap:Re,sheenRoughnessMap:ve,specularMap:He,specularColorMap:Ue,specularIntensityMap:nt,transmission:Me,transmissionMap:D,thicknessMap:le,gradientMap:X,opaque:S.transparent===!1&&S.blending===_o&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:de,alphaHash:ce,combine:S.combine,mapUv:ht&&_(S.map.channel),aoMapUv:I&&_(S.aoMap.channel),lightMapUv:On&&_(S.lightMap.channel),bumpMapUv:Be&&_(S.bumpMap.channel),normalMapUv:Ve&&_(S.normalMap.channel),displacementMapUv:we&&_(S.displacementMap.channel),emissiveMapUv:ot&&_(S.emissiveMap.channel),metalnessMapUv:Te&&_(S.metalnessMap.channel),roughnessMapUv:P&&_(S.roughnessMap.channel),anisotropyMapUv:ue&&_(S.anisotropyMap.channel),clearcoatMapUv:_e&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:We&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(S.sheenRoughnessMap.channel),specularMapUv:He&&_(S.specularMap.channel),specularColorMapUv:Ue&&_(S.specularColorMap.channel),specularIntensityMapUv:nt&&_(S.specularIntensityMap.channel),transmissionMapUv:D&&_(S.transmissionMap.channel),thicknessMapUv:le&&_(S.thicknessMap.channel),alphaMapUv:J&&_(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ve||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(ht||J),fog:!!j,useFog:S.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ce,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:me,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:yt,decodeVideoTexture:ht&&S.map.isVideoTexture===!0&&Xe.getTransfer(S.map.colorSpace)===Je,decodeVideoTextureEmissive:ot&&S.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(S.emissiveMap.colorSpace)===Je,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Bi,flipSided:S.side===mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Le&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&S.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Gt.vertexUv1s=u.has(1),Gt.vertexUv2s=u.has(2),Gt.vertexUv3s=u.has(3),u.clear(),Gt}function d(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const b in S.defines)M.push(b),M.push(S.defines[b]);return S.isRawShaderMaterial===!1&&(v(M,S),x(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const M=g[S.type];let b;if(M){const z=gi[M];b=_1.clone(z.uniforms)}else b=S.uniforms;return b}function C(S,M){let b;for(let z=0,F=c.length;z<F;z++){const j=c[z];if(j.cacheKey===M){b=j,++b.usedTimes;break}}return b===void 0&&(b=new bC(n,M,S,s),c.push(b)),b}function A(S){if(--S.usedTimes===0){const M=c.indexOf(S);c[M]=c[c.length-1],c.pop(),S.destroy()}}function T(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:C,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:R}}function IC(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function FC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function fg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function dg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,g,_,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function a(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||FC),i.length>1&&i.sort(h||fg),r.length>1&&r.sort(h||fg)}function c(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function OC(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new dg,n.set(i,[o])):r>=s.length?(o=new dg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function kC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new et};break;case"SpotLight":t={position:new H,direction:new H,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function zC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let BC=0;function VC(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function HC(n){const e=new kC,t=zC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new H);const r=new H,s=new bt,o=new bt;function a(u){let c=0,f=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,v=0,x=0,y=0,C=0,A=0,T=0;u.sort(VC);for(let S=0,M=u.length;S<M;S++){const b=u[S],z=b.color,F=b.intensity,j=b.distance,Y=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)c+=z.r*F,f+=z.g*F,h+=z.b*F;else if(b.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(b.sh.coefficients[G],F);T++}else if(b.isDirectionalLight){const G=e.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const q=b.shadow,L=t.get(b);L.shadowIntensity=q.intensity,L.shadowBias=q.bias,L.shadowNormalBias=q.normalBias,L.shadowRadius=q.radius,L.shadowMapSize=q.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=b.shadow.matrix,v++}i.directional[p]=G,p++}else if(b.isSpotLight){const G=e.get(b);G.position.setFromMatrixPosition(b.matrixWorld),G.color.copy(z).multiplyScalar(F),G.distance=j,G.coneCos=Math.cos(b.angle),G.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),G.decay=b.decay,i.spot[_]=G;const q=b.shadow;if(b.map&&(i.spotLightMap[C]=b.map,C++,q.updateMatrices(b),b.castShadow&&A++),i.spotLightMatrix[_]=q.matrix,b.castShadow){const L=t.get(b);L.shadowIntensity=q.intensity,L.shadowBias=q.bias,L.shadowNormalBias=q.normalBias,L.shadowRadius=q.radius,L.shadowMapSize=q.mapSize,i.spotShadow[_]=L,i.spotShadowMap[_]=Y,y++}_++}else if(b.isRectAreaLight){const G=e.get(b);G.color.copy(z).multiplyScalar(F),G.halfWidth.set(b.width*.5,0,0),G.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=G,m++}else if(b.isPointLight){const G=e.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity),G.distance=b.distance,G.decay=b.decay,b.castShadow){const q=b.shadow,L=t.get(b);L.shadowIntensity=q.intensity,L.shadowBias=q.bias,L.shadowNormalBias=q.normalBias,L.shadowRadius=q.radius,L.shadowMapSize=q.mapSize,L.shadowCameraNear=q.camera.near,L.shadowCameraFar=q.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=b.shadow.matrix,x++}i.point[g]=G,g++}else if(b.isHemisphereLight){const G=e.get(b);G.skyColor.copy(b.color).multiplyScalar(F),G.groundColor.copy(b.groundColor).multiplyScalar(F),i.hemi[d]=G,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==v||R.numPointShadows!==x||R.numSpotShadows!==y||R.numSpotMaps!==C||R.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=v,R.numPointShadows=x,R.numSpotShadows=y,R.numSpotMaps=C,R.numLightProbes=T,i.version=BC++)}function l(u,c){let f=0,h=0,p=0,g=0,_=0;const m=c.matrixWorldInverse;for(let d=0,v=u.length;d<v;d++){const x=u[d];if(x.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function hg(n){const e=new HC(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function GC(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new hg(n),e.set(r,[a])):s>=o.length?(a=new hg(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class WC extends yc{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=OE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XC extends yc{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qC(n,e,t){let i=new vx;const r=new Ke,s=new Ke,o=new At,a=new WC({depthPacking:kE}),l=new XC,u={},c=t.maxTextureSize,f={[Fr]:mn,[mn]:Fr,[Bi]:Bi},h=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:jC,fragmentShader:YC}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ps;g.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new li(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yv;let d=this.type;this.render=function(A,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),z=n.state;z.setBlending(br),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=d!==Ii&&this.type===Ii,j=d===Ii&&this.type!==Ii;for(let Y=0,G=A.length;Y<G;Y++){const q=A[Y],L=q.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const $=L.getFrameExtents();if(r.multiply($),s.copy(L.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/$.x),r.x=s.x*$.x,L.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/$.y),r.y=s.y*$.y,L.mapSize.y=s.y)),L.map===null||F===!0||j===!0){const se=this.type!==Ii?{minFilter:fi,magFilter:fi}:{};L.map!==null&&L.map.dispose(),L.map=new Ts(r.x,r.y,se),L.map.texture.name=q.name+".shadowMap",L.camera.updateProjectionMatrix()}n.setRenderTarget(L.map),n.clear();const Z=L.getViewportCount();for(let se=0;se<Z;se++){const me=L.getViewport(se);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),z.viewport(o),L.updateMatrices(q,se),i=L.getFrustum(),y(T,R,L.camera,q,this.type)}L.isPointLightShadow!==!0&&this.type===Ii&&v(L,R),L.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,b)};function v(A,T){const R=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ts(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,R,h,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,R,p,_,null)}function x(A,T,R,S){let M=null;const b=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)M=b;else if(M=R.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const z=M.uuid,F=T.uuid;let j=u[z];j===void 0&&(j={},u[z]=j);let Y=j[F];Y===void 0&&(Y=M.clone(),j[F]=Y,T.addEventListener("dispose",C)),M=Y}if(M.visible=T.visible,M.wireframe=T.wireframe,S===Ii?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:f[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=n.properties.get(M);z.light=R}return M}function y(A,T,R,S,M){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Ii)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const F=e.update(A),j=A.material;if(Array.isArray(j)){const Y=F.groups;for(let G=0,q=Y.length;G<q;G++){const L=Y[G],$=j[L.materialIndex];if($&&$.visible){const Z=x(A,$,S,M);A.onBeforeShadow(n,A,T,R,F,Z,L),n.renderBufferDirect(R,null,F,Z,A,L),A.onAfterShadow(n,A,T,R,F,Z,L)}}}else if(j.visible){const Y=x(A,j,S,M);A.onBeforeShadow(n,A,T,R,F,Y,null),n.renderBufferDirect(R,null,F,Y,A,null),A.onAfterShadow(n,A,T,R,F,Y,null)}}const z=A.children;for(let F=0,j=z.length;F<j;F++)y(z[F],T,R,S,M)}function C(A){A.target.removeEventListener("dispose",C);for(const R in u){const S=u[R],M=A.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const $C={[Nd]:Ud,[Id]:kd,[Fd]:zd,[Po]:Od,[Ud]:Nd,[kd]:Id,[zd]:Fd,[Od]:Po};function KC(n,e){function t(){let D=!1;const le=new At;let X=null;const J=new At(0,0,0,0);return{setMask:function(de){X!==de&&!D&&(n.colorMask(de,de,de,de),X=de)},setLocked:function(de){D=de},setClear:function(de,ce,Le,yt,Gt){Gt===!0&&(de*=yt,ce*=yt,Le*=yt),le.set(de,ce,Le,yt),J.equals(le)===!1&&(n.clearColor(de,ce,Le,yt),J.copy(le))},reset:function(){D=!1,X=null,J.set(-1,0,0,0)}}}function i(){let D=!1,le=!1,X=null,J=null,de=null;return{setReversed:function(ce){if(le!==ce){const Le=e.get("EXT_clip_control");le?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT);const yt=de;de=null,this.setClear(yt)}le=ce},getReversed:function(){return le},setTest:function(ce){ce?oe(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(ce){X!==ce&&!D&&(n.depthMask(ce),X=ce)},setFunc:function(ce){if(le&&(ce=$C[ce]),J!==ce){switch(ce){case Nd:n.depthFunc(n.NEVER);break;case Ud:n.depthFunc(n.ALWAYS);break;case Id:n.depthFunc(n.LESS);break;case Po:n.depthFunc(n.LEQUAL);break;case Fd:n.depthFunc(n.EQUAL);break;case Od:n.depthFunc(n.GEQUAL);break;case kd:n.depthFunc(n.GREATER);break;case zd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=ce}},setLocked:function(ce){D=ce},setClear:function(ce){de!==ce&&(le&&(ce=1-ce),n.clearDepth(ce),de=ce)},reset:function(){D=!1,X=null,J=null,de=null,le=!1}}}function r(){let D=!1,le=null,X=null,J=null,de=null,ce=null,Le=null,yt=null,Gt=null;return{setTest:function(Ze){D||(Ze?oe(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(Ze){le!==Ze&&!D&&(n.stencilMask(Ze),le=Ze)},setFunc:function(Ze,Zn,Ri){(X!==Ze||J!==Zn||de!==Ri)&&(n.stencilFunc(Ze,Zn,Ri),X=Ze,J=Zn,de=Ri)},setOp:function(Ze,Zn,Ri){(ce!==Ze||Le!==Zn||yt!==Ri)&&(n.stencilOp(Ze,Zn,Ri),ce=Ze,Le=Zn,yt=Ri)},setLocked:function(Ze){D=Ze},setClear:function(Ze){Gt!==Ze&&(n.clearStencil(Ze),Gt=Ze)},reset:function(){D=!1,le=null,X=null,J=null,de=null,ce=null,Le=null,yt=null,Gt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,d=null,v=null,x=null,y=null,C=null,A=null,T=new et(0,0,0),R=0,S=!1,M=null,b=null,z=null,F=null,j=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,q=0;const L=n.getParameter(n.VERSION);L.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(L)[1]),G=q>=1):L.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),G=q>=2);let $=null,Z={};const se=n.getParameter(n.SCISSOR_BOX),me=n.getParameter(n.VIEWPORT),ke=new At().fromArray(se),W=new At().fromArray(me);function te(D,le,X,J){const de=new Uint8Array(4),ce=n.createTexture();n.bindTexture(D,ce),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Le=0;Le<X;Le++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(le+Le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return ce}const pe={};pe[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),pe[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pe[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(Po),Be(!1),Ve(g_),oe(n.CULL_FACE),I(br);function oe(D){c[D]!==!0&&(n.enable(D),c[D]=!0)}function Ce(D){c[D]!==!1&&(n.disable(D),c[D]=!1)}function be(D,le){return f[D]!==le?(n.bindFramebuffer(D,le),f[D]=le,D===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=le),D===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=le),!0):!1}function Fe(D,le){let X=p,J=!1;if(D){X=h.get(le),X===void 0&&(X=[],h.set(le,X));const de=D.textures;if(X.length!==de.length||X[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Le=de.length;ce<Le;ce++)X[ce]=n.COLOR_ATTACHMENT0+ce;X.length=de.length,J=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,J=!0);J&&n.drawBuffers(X)}function ht(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const Ge={[is]:n.FUNC_ADD,[cE]:n.FUNC_SUBTRACT,[fE]:n.FUNC_REVERSE_SUBTRACT};Ge[dE]=n.MIN,Ge[hE]=n.MAX;const Et={[pE]:n.ZERO,[mE]:n.ONE,[_E]:n.SRC_COLOR,[Ld]:n.SRC_ALPHA,[ME]:n.SRC_ALPHA_SATURATE,[yE]:n.DST_COLOR,[vE]:n.DST_ALPHA,[gE]:n.ONE_MINUS_SRC_COLOR,[Dd]:n.ONE_MINUS_SRC_ALPHA,[SE]:n.ONE_MINUS_DST_COLOR,[xE]:n.ONE_MINUS_DST_ALPHA,[EE]:n.CONSTANT_COLOR,[TE]:n.ONE_MINUS_CONSTANT_COLOR,[wE]:n.CONSTANT_ALPHA,[AE]:n.ONE_MINUS_CONSTANT_ALPHA};function I(D,le,X,J,de,ce,Le,yt,Gt,Ze){if(D===br){_===!0&&(Ce(n.BLEND),_=!1);return}if(_===!1&&(oe(n.BLEND),_=!0),D!==uE){if(D!==m||Ze!==S){if((d!==is||y!==is)&&(n.blendEquation(n.FUNC_ADD),d=is,y=is),Ze)switch(D){case _o:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case v_:n.blendFunc(n.ONE,n.ONE);break;case x_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case y_:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case _o:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case v_:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case x_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case y_:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,x=null,C=null,A=null,T.set(0,0,0),R=0,m=D,S=Ze}return}de=de||le,ce=ce||X,Le=Le||J,(le!==d||de!==y)&&(n.blendEquationSeparate(Ge[le],Ge[de]),d=le,y=de),(X!==v||J!==x||ce!==C||Le!==A)&&(n.blendFuncSeparate(Et[X],Et[J],Et[ce],Et[Le]),v=X,x=J,C=ce,A=Le),(yt.equals(T)===!1||Gt!==R)&&(n.blendColor(yt.r,yt.g,yt.b,Gt),T.copy(yt),R=Gt),m=D,S=!1}function On(D,le){D.side===Bi?Ce(n.CULL_FACE):oe(n.CULL_FACE);let X=D.side===mn;le&&(X=!X),Be(X),D.blending===_o&&D.transparent===!1?I(br):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const J=D.stencilWrite;a.setTest(J),J&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ot(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){M!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),M=D)}function Ve(D){D!==oE?(oe(n.CULL_FACE),D!==b&&(D===g_?n.cullFace(n.BACK):D===aE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),b=D}function we(D){D!==z&&(G&&n.lineWidth(D),z=D)}function ot(D,le,X){D?(oe(n.POLYGON_OFFSET_FILL),(F!==le||j!==X)&&(n.polygonOffset(le,X),F=le,j=X)):Ce(n.POLYGON_OFFSET_FILL)}function Te(D){D?oe(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function P(D){D===void 0&&(D=n.TEXTURE0+Y-1),$!==D&&(n.activeTexture(D),$=D)}function E(D,le,X){X===void 0&&($===null?X=n.TEXTURE0+Y-1:X=$);let J=Z[X];J===void 0&&(J={type:void 0,texture:void 0},Z[X]=J),(J.type!==D||J.texture!==le)&&($!==X&&(n.activeTexture(X),$=X),n.bindTexture(D,le||pe[D]),J.type=D,J.texture=le)}function k(){const D=Z[$];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function We(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(D){ke.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),ke.copy(D))}function ve(D){W.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),W.copy(D))}function He(D,le){let X=u.get(le);X===void 0&&(X=new WeakMap,u.set(le,X));let J=X.get(D);J===void 0&&(J=n.getUniformBlockIndex(le,D.name),X.set(D,J))}function Ue(D,le){const J=u.get(le).get(D);l.get(le)!==J&&(n.uniformBlockBinding(le,J,D.__bindingPointIndex),l.set(le,J))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},$=null,Z={},f={},h=new WeakMap,p=[],g=null,_=!1,m=null,d=null,v=null,x=null,y=null,C=null,A=null,T=new et(0,0,0),R=0,S=!1,M=null,b=null,z=null,F=null,j=null,ke.set(0,0,n.canvas.width,n.canvas.height),W.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:Ce,bindFramebuffer:be,drawBuffers:Fe,useProgram:ht,setBlending:I,setMaterial:On,setFlipSided:Be,setCullFace:Ve,setLineWidth:we,setPolygonOffset:ot,setScissorTest:Te,activeTexture:P,bindTexture:E,unbindTexture:k,compressedTexImage2D:Q,compressedTexImage3D:ee,texImage2D:ge,texImage3D:Ae,updateUBOMapping:He,uniformBlockBinding:Ue,texStorage2D:We,texStorage3D:ie,texSubImage2D:K,texSubImage3D:Me,compressedTexSubImage2D:ue,compressedTexSubImage3D:_e,scissor:Re,viewport:ve,reset:nt}}function pg(n,e,t,i){const r=ZC(i);switch(t){case Jv:return n*e;case tx:return n*e;case nx:return n*e*2;case ix:return n*e/r.components*r.byteLength;case Lp:return n*e/r.components*r.byteLength;case rx:return n*e*2/r.components*r.byteLength;case Dp:return n*e*2/r.components*r.byteLength;case ex:return n*e*3/r.components*r.byteLength;case ai:return n*e*4/r.components*r.byteLength;case Np:return n*e*4/r.components*r.byteLength;case hu:case pu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mu:case _u:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xd:case Yd:return Math.max(n,16)*Math.max(e,8)/4;case Wd:case jd:return Math.max(n,8)*Math.max(e,8)/2;case qd:case $d:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Kd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case eh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case th:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case nh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ih:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case rh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case sh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case oh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ah:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case lh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case uh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ch:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case gu:case fh:case dh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case sx:case hh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ph:case mh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ZC(n){switch(n){case Qi:case Kv:return{byteLength:1,components:1};case ja:case Zv:case al:return{byteLength:2,components:1};case Pp:case bp:return{byteLength:2,components:4};case Es:case Rp:case Gi:return{byteLength:4,components:1};case Qv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function QC(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ke,c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return p?new OffscreenCanvas(P,E):Ya("canvas")}function _(P,E,k){let Q=1;const ee=Te(P);if((ee.width>k||ee.height>k)&&(Q=k/Math.max(ee.width,ee.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const K=Math.floor(Q*ee.width),Me=Math.floor(Q*ee.height);f===void 0&&(f=g(K,Me));const ue=E?g(K,Me):f;return ue.width=K,ue.height=Me,ue.getContext("2d").drawImage(P,0,0,K,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+K+"x"+Me+")."),ue}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),P;return P}function m(P){return P.generateMipmaps}function d(P){n.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(P,E,k,Q,ee=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let K=E;if(E===n.RED&&(k===n.FLOAT&&(K=n.R32F),k===n.HALF_FLOAT&&(K=n.R16F),k===n.UNSIGNED_BYTE&&(K=n.R8)),E===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.R8UI),k===n.UNSIGNED_SHORT&&(K=n.R16UI),k===n.UNSIGNED_INT&&(K=n.R32UI),k===n.BYTE&&(K=n.R8I),k===n.SHORT&&(K=n.R16I),k===n.INT&&(K=n.R32I)),E===n.RG&&(k===n.FLOAT&&(K=n.RG32F),k===n.HALF_FLOAT&&(K=n.RG16F),k===n.UNSIGNED_BYTE&&(K=n.RG8)),E===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RG8UI),k===n.UNSIGNED_SHORT&&(K=n.RG16UI),k===n.UNSIGNED_INT&&(K=n.RG32UI),k===n.BYTE&&(K=n.RG8I),k===n.SHORT&&(K=n.RG16I),k===n.INT&&(K=n.RG32I)),E===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGB8UI),k===n.UNSIGNED_SHORT&&(K=n.RGB16UI),k===n.UNSIGNED_INT&&(K=n.RGB32UI),k===n.BYTE&&(K=n.RGB8I),k===n.SHORT&&(K=n.RGB16I),k===n.INT&&(K=n.RGB32I)),E===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),k===n.UNSIGNED_INT&&(K=n.RGBA32UI),k===n.BYTE&&(K=n.RGBA8I),k===n.SHORT&&(K=n.RGBA16I),k===n.INT&&(K=n.RGBA32I)),E===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),E===n.RGBA){const Me=ee?xc:Xe.getTransfer(Q);k===n.FLOAT&&(K=n.RGBA32F),k===n.HALF_FLOAT&&(K=n.RGBA16F),k===n.UNSIGNED_BYTE&&(K=Me===Je?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(P,E){let k;return P?E===null||E===Es||E===Do?k=n.DEPTH24_STENCIL8:E===Gi?k=n.DEPTH32F_STENCIL8:E===ja&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Es||E===Do?k=n.DEPTH_COMPONENT24:E===Gi?k=n.DEPTH_COMPONENT32F:E===ja&&(k=n.DEPTH_COMPONENT16),k}function C(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==fi&&P.minFilter!==yi?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function A(P){const E=P.target;E.removeEventListener("dispose",A),R(E),E.isVideoTexture&&c.delete(E)}function T(P){const E=P.target;E.removeEventListener("dispose",T),M(E)}function R(P){const E=i.get(P);if(E.__webglInit===void 0)return;const k=P.source,Q=h.get(k);if(Q){const ee=Q[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&S(P),Object.keys(Q).length===0&&h.delete(k)}i.remove(P)}function S(P){const E=i.get(P);n.deleteTexture(E.__webglTexture);const k=P.source,Q=h.get(k);delete Q[E.__cacheKey],o.memory.textures--}function M(P){const E=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let ee=0;ee<E.__webglFramebuffer[Q].length;ee++)n.deleteFramebuffer(E.__webglFramebuffer[Q][ee]);else n.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)n.deleteFramebuffer(E.__webglFramebuffer[Q]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const k=P.textures;for(let Q=0,ee=k.length;Q<ee;Q++){const K=i.get(k[Q]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(k[Q])}i.remove(P)}let b=0;function z(){b=0}function F(){const P=b;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),b+=1,P}function j(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function Y(P,E){const k=i.get(P);if(P.isVideoTexture&&we(P),P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){const Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(k,P,E);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+E)}function G(P,E){const k=i.get(P);if(P.version>0&&k.__version!==P.version){W(k,P,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+E)}function q(P,E){const k=i.get(P);if(P.version>0&&k.__version!==P.version){W(k,P,E);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+E)}function L(P,E){const k=i.get(P);if(P.version>0&&k.__version!==P.version){te(k,P,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+E)}const $={[Hd]:n.REPEAT,[ls]:n.CLAMP_TO_EDGE,[Gd]:n.MIRRORED_REPEAT},Z={[fi]:n.NEAREST,[FE]:n.NEAREST_MIPMAP_NEAREST,[Dl]:n.NEAREST_MIPMAP_LINEAR,[yi]:n.LINEAR,[Qc]:n.LINEAR_MIPMAP_NEAREST,[us]:n.LINEAR_MIPMAP_LINEAR},se={[VE]:n.NEVER,[YE]:n.ALWAYS,[HE]:n.LESS,[ox]:n.LEQUAL,[GE]:n.EQUAL,[jE]:n.GEQUAL,[WE]:n.GREATER,[XE]:n.NOTEQUAL};function me(P,E){if(E.type===Gi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===yi||E.magFilter===Qc||E.magFilter===Dl||E.magFilter===us||E.minFilter===yi||E.minFilter===Qc||E.minFilter===Dl||E.minFilter===us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,$[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,$[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,$[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Z[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Z[E.minFilter]),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,se[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===fi||E.minFilter!==Dl&&E.minFilter!==us||E.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ke(P,E){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",A));const Q=E.source;let ee=h.get(Q);ee===void 0&&(ee={},h.set(Q,ee));const K=j(E);if(K!==P.__cacheKey){ee[K]===void 0&&(ee[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[K].usedTimes++;const Me=ee[P.__cacheKey];Me!==void 0&&(ee[P.__cacheKey].usedTimes--,Me.usedTimes===0&&S(E)),P.__cacheKey=K,P.__webglTexture=ee[K].texture}return k}function W(P,E,k){let Q=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=n.TEXTURE_3D);const ee=ke(P,E),K=E.source;t.bindTexture(Q,P.__webglTexture,n.TEXTURE0+k);const Me=i.get(K);if(K.version!==Me.__version||ee===!0){t.activeTexture(n.TEXTURE0+k);const ue=Xe.getPrimaries(Xe.workingColorSpace),_e=E.colorSpace===_r?null:Xe.getPrimaries(E.colorSpace),We=E.colorSpace===_r||ue===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ie=_(E.image,!1,r.maxTextureSize);ie=ot(E,ie);const ge=s.convert(E.format,E.colorSpace),Ae=s.convert(E.type);let Re=x(E.internalFormat,ge,Ae,E.colorSpace,E.isVideoTexture);me(Q,E);let ve;const He=E.mipmaps,Ue=E.isVideoTexture!==!0,nt=Me.__version===void 0||ee===!0,D=K.dataReady,le=C(E,ie);if(E.isDepthTexture)Re=y(E.format===No,E.type),nt&&(Ue?t.texStorage2D(n.TEXTURE_2D,1,Re,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Re,ie.width,ie.height,0,ge,Ae,null));else if(E.isDataTexture)if(He.length>0){Ue&&nt&&t.texStorage2D(n.TEXTURE_2D,le,Re,He[0].width,He[0].height);for(let X=0,J=He.length;X<J;X++)ve=He[X],Ue?D&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ve.width,ve.height,ge,Ae,ve.data):t.texImage2D(n.TEXTURE_2D,X,Re,ve.width,ve.height,0,ge,Ae,ve.data);E.generateMipmaps=!1}else Ue?(nt&&t.texStorage2D(n.TEXTURE_2D,le,Re,ie.width,ie.height),D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,ge,Ae,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Re,ie.width,ie.height,0,ge,Ae,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ue&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,Re,He[0].width,He[0].height,ie.depth);for(let X=0,J=He.length;X<J;X++)if(ve=He[X],E.format!==ai)if(ge!==null)if(Ue){if(D)if(E.layerUpdates.size>0){const de=pg(ve.width,ve.height,E.format,E.type);for(const ce of E.layerUpdates){const Le=ve.data.subarray(ce*de/ve.data.BYTES_PER_ELEMENT,(ce+1)*de/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,ce,ve.width,ve.height,1,ge,Le)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,ve.width,ve.height,ie.depth,ge,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Re,ve.width,ve.height,ie.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,ve.width,ve.height,ie.depth,ge,Ae,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,Re,ve.width,ve.height,ie.depth,0,ge,Ae,ve.data)}else{Ue&&nt&&t.texStorage2D(n.TEXTURE_2D,le,Re,He[0].width,He[0].height);for(let X=0,J=He.length;X<J;X++)ve=He[X],E.format!==ai?ge!==null?Ue?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,ve.width,ve.height,ge,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,X,Re,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?D&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ve.width,ve.height,ge,Ae,ve.data):t.texImage2D(n.TEXTURE_2D,X,Re,ve.width,ve.height,0,ge,Ae,ve.data)}else if(E.isDataArrayTexture)if(Ue){if(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,Re,ie.width,ie.height,ie.depth),D)if(E.layerUpdates.size>0){const X=pg(ie.width,ie.height,E.format,E.type);for(const J of E.layerUpdates){const de=ie.data.subarray(J*X/ie.data.BYTES_PER_ELEMENT,(J+1)*X/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,ge,Ae,de)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,Ae,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,ie.width,ie.height,ie.depth,0,ge,Ae,ie.data);else if(E.isData3DTexture)Ue?(nt&&t.texStorage3D(n.TEXTURE_3D,le,Re,ie.width,ie.height,ie.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,Ae,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Re,ie.width,ie.height,ie.depth,0,ge,Ae,ie.data);else if(E.isFramebufferTexture){if(nt)if(Ue)t.texStorage2D(n.TEXTURE_2D,le,Re,ie.width,ie.height);else{let X=ie.width,J=ie.height;for(let de=0;de<le;de++)t.texImage2D(n.TEXTURE_2D,de,Re,X,J,0,ge,Ae,null),X>>=1,J>>=1}}else if(He.length>0){if(Ue&&nt){const X=Te(He[0]);t.texStorage2D(n.TEXTURE_2D,le,Re,X.width,X.height)}for(let X=0,J=He.length;X<J;X++)ve=He[X],Ue?D&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ge,Ae,ve):t.texImage2D(n.TEXTURE_2D,X,Re,ge,Ae,ve);E.generateMipmaps=!1}else if(Ue){if(nt){const X=Te(ie);t.texStorage2D(n.TEXTURE_2D,le,Re,X.width,X.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Ae,ie)}else t.texImage2D(n.TEXTURE_2D,0,Re,ge,Ae,ie);m(E)&&d(Q),Me.__version=K.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function te(P,E,k){if(E.image.length!==6)return;const Q=ke(P,E),ee=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+k);const K=i.get(ee);if(ee.version!==K.__version||Q===!0){t.activeTexture(n.TEXTURE0+k);const Me=Xe.getPrimaries(Xe.workingColorSpace),ue=E.colorSpace===_r?null:Xe.getPrimaries(E.colorSpace),_e=E.colorSpace===_r||Me===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const We=E.isCompressedTexture||E.image[0].isCompressedTexture,ie=E.image[0]&&E.image[0].isDataTexture,ge=[];for(let J=0;J<6;J++)!We&&!ie?ge[J]=_(E.image[J],!0,r.maxCubemapSize):ge[J]=ie?E.image[J].image:E.image[J],ge[J]=ot(E,ge[J]);const Ae=ge[0],Re=s.convert(E.format,E.colorSpace),ve=s.convert(E.type),He=x(E.internalFormat,Re,ve,E.colorSpace),Ue=E.isVideoTexture!==!0,nt=K.__version===void 0||Q===!0,D=ee.dataReady;let le=C(E,Ae);me(n.TEXTURE_CUBE_MAP,E);let X;if(We){Ue&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,le,He,Ae.width,Ae.height);for(let J=0;J<6;J++){X=ge[J].mipmaps;for(let de=0;de<X.length;de++){const ce=X[de];E.format!==ai?Re!==null?Ue?D&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,ce.width,ce.height,Re,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,He,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,ce.width,ce.height,Re,ve,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,He,ce.width,ce.height,0,Re,ve,ce.data)}}}else{if(X=E.mipmaps,Ue&&nt){X.length>0&&le++;const J=Te(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,le,He,J.width,J.height)}for(let J=0;J<6;J++)if(ie){Ue?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ge[J].width,ge[J].height,Re,ve,ge[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,He,ge[J].width,ge[J].height,0,Re,ve,ge[J].data);for(let de=0;de<X.length;de++){const Le=X[de].image[J].image;Ue?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Le.width,Le.height,Re,ve,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,He,Le.width,Le.height,0,Re,ve,Le.data)}}else{Ue?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Re,ve,ge[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,He,Re,ve,ge[J]);for(let de=0;de<X.length;de++){const ce=X[de];Ue?D&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Re,ve,ce.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,He,Re,ve,ce.image[J])}}}m(E)&&d(n.TEXTURE_CUBE_MAP),K.__version=ee.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function pe(P,E,k,Q,ee,K){const Me=s.convert(k.format,k.colorSpace),ue=s.convert(k.type),_e=x(k.internalFormat,Me,ue,k.colorSpace),We=i.get(E),ie=i.get(k);if(ie.__renderTarget=E,!We.__hasExternalTextures){const ge=Math.max(1,E.width>>K),Ae=Math.max(1,E.height>>K);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,K,_e,ge,Ae,E.depth,0,Me,ue,null):t.texImage2D(ee,K,_e,ge,Ae,0,Me,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Ve(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ee,ie.__webglTexture,0,Be(E)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ee,ie.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(P,E,k){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer){const Q=E.depthTexture,ee=Q&&Q.isDepthTexture?Q.type:null,K=y(E.stencilBuffer,ee),Me=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=Be(E);Ve(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,K,E.width,E.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,K,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,K,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,P)}else{const Q=E.textures;for(let ee=0;ee<Q.length;ee++){const K=Q[ee],Me=s.convert(K.format,K.colorSpace),ue=s.convert(K.type),_e=x(K.internalFormat,Me,ue,K.colorSpace),We=Be(E);k&&Ve(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,We,_e,E.width,E.height):Ve(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We,_e,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,_e,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const ee=Q.__webglTexture,K=Be(E);if(E.depthTexture.format===go)Ve(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(E.depthTexture.format===No)Ve(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function be(P){const E=i.get(P),k=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const Q=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",ee)};Q.addEventListener("dispose",ee),E.__depthDisposeCallback=ee}E.__boundDepthTexture=Q}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ce(E.__webglFramebuffer,P)}else if(k){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=n.createRenderbuffer(),oe(E.__webglDepthbuffer[Q],P,!1);else{const ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,K)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),oe(E.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(P,E,k){const Q=i.get(P);E!==void 0&&pe(Q.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&be(P)}function ht(P){const E=P.texture,k=i.get(P),Q=i.get(E);P.addEventListener("dispose",T);const ee=P.textures,K=P.isWebGLCubeRenderTarget===!0,Me=ee.length>1;if(Me||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=E.version,o.memory.textures++),K){k.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[ue]=[];for(let _e=0;_e<E.mipmaps.length;_e++)k.__webglFramebuffer[ue][_e]=n.createFramebuffer()}else k.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)k.__webglFramebuffer[ue]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ue=0,_e=ee.length;ue<_e;ue++){const We=i.get(ee[ue]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Ve(P)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ue=0;ue<ee.length;ue++){const _e=ee[ue];k.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ue]);const We=s.convert(_e.format,_e.colorSpace),ie=s.convert(_e.type),ge=x(_e.internalFormat,We,ie,_e.colorSpace,P.isXRRenderTarget===!0),Ae=Be(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,ge,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,k.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(k.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),me(n.TEXTURE_CUBE_MAP,E);for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)pe(k.__webglFramebuffer[ue][_e],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,_e);else pe(k.__webglFramebuffer[ue],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(E)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ue=0,_e=ee.length;ue<_e;ue++){const We=ee[ue],ie=i.get(We);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),me(n.TEXTURE_2D,We),pe(k.__webglFramebuffer,P,We,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),m(We)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ue=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,Q.__webglTexture),me(ue,E),E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)pe(k.__webglFramebuffer[_e],P,E,n.COLOR_ATTACHMENT0,ue,_e);else pe(k.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,ue,0);m(E)&&d(ue),t.unbindTexture()}P.depthBuffer&&be(P)}function Ge(P){const E=P.textures;for(let k=0,Q=E.length;k<Q;k++){const ee=E[k];if(m(ee)){const K=v(P),Me=i.get(ee).__webglTexture;t.bindTexture(K,Me),d(K),t.unbindTexture()}}}const Et=[],I=[];function On(P){if(P.samples>0){if(Ve(P)===!1){const E=P.textures,k=P.width,Q=P.height;let ee=n.COLOR_BUFFER_BIT;const K=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(P),ue=E.length>1;if(ue)for(let _e=0;_e<E.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let _e=0;_e<E.length;_e++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);const We=i.get(E[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,We,0)}n.blitFramebuffer(0,0,k,Q,0,0,k,Q,ee,n.NEAREST),l===!0&&(Et.length=0,I.length=0,Et.push(n.COLOR_ATTACHMENT0+_e),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Et.push(K),I.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Et))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let _e=0;_e<E.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);const We=i.get(E[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,We,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Be(P){return Math.min(r.maxSamples,P.samples)}function Ve(P){const E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function we(P){const E=o.render.frame;c.get(P)!==E&&(c.set(P,E),P.update())}function ot(P,E){const k=P.colorSpace,Q=P.format,ee=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==Go&&k!==_r&&(Xe.getTransfer(k)===Je?(Q!==ai||ee!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}function Te(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=G,this.setTexture3D=q,this.setTextureCube=L,this.rebindTextures=Fe,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=On,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Ve}function JC(n,e){function t(i,r=_r){let s;const o=Xe.getTransfer(r);if(i===Qi)return n.UNSIGNED_BYTE;if(i===Pp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Qv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Kv)return n.BYTE;if(i===Zv)return n.SHORT;if(i===ja)return n.UNSIGNED_SHORT;if(i===Rp)return n.INT;if(i===Es)return n.UNSIGNED_INT;if(i===Gi)return n.FLOAT;if(i===al)return n.HALF_FLOAT;if(i===Jv)return n.ALPHA;if(i===ex)return n.RGB;if(i===ai)return n.RGBA;if(i===tx)return n.LUMINANCE;if(i===nx)return n.LUMINANCE_ALPHA;if(i===go)return n.DEPTH_COMPONENT;if(i===No)return n.DEPTH_STENCIL;if(i===ix)return n.RED;if(i===Lp)return n.RED_INTEGER;if(i===rx)return n.RG;if(i===Dp)return n.RG_INTEGER;if(i===Np)return n.RGBA_INTEGER;if(i===hu||i===pu||i===mu||i===_u)if(o===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===hu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_u)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===hu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_u)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wd||i===Xd||i===jd||i===Yd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Wd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qd||i===$d||i===Kd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===qd||i===$d)return o===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Kd)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zd||i===Qd||i===Jd||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===oh||i===ah||i===lh||i===uh||i===ch)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Zd)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qd)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jd)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===eh)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===th)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nh)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ih)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rh)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sh)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===oh)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ah)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===lh)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uh)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ch)return o===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gu||i===fh||i===dh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===gu)return o===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sx||i===hh||i===ph||i===mh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===gu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===hh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ph)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Do?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class eR extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Jl extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tR={type:"move"};class Rf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&h>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Jl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const nR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new rn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ai({vertexShader:nR,fragmentShader:iR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new li(new Xo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sR extends Wo{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,g=null;const _=new rR,m=t.getContextAttributes();let d=null,v=null;const x=[],y=[],C=new Ke;let A=null;const T=new An;T.viewport=new At;const R=new An;R.viewport=new At;const S=[T,R],M=new eR;let b=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let te=x[W];return te===void 0&&(te=new Rf,x[W]=te),te.getTargetRaySpace()},this.getControllerGrip=function(W){let te=x[W];return te===void 0&&(te=new Rf,x[W]=te),te.getGripSpace()},this.getHand=function(W){let te=x[W];return te===void 0&&(te=new Rf,x[W]=te),te.getHandSpace()};function F(W){const te=y.indexOf(W.inputSource);if(te===-1)return;const pe=x[te];pe!==void 0&&(pe.update(W.inputSource,W.frame,u||o),pe.dispatchEvent({type:W.type,data:W.inputSource}))}function j(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",Y);for(let W=0;W<x.length;W++){const te=y[W];te!==null&&(y[W]=null,x[W].disconnect(te))}b=null,z=null,_.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,v=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",j),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Ts(p.framebufferWidth,p.framebufferHeight,{format:ai,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,pe=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?No:go,pe=m.stencil?Do:Es);const Ce={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Ce),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Ts(h.textureWidth,h.textureHeight,{format:ai,type:Qi,depthTexture:new yx(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(W){for(let te=0;te<W.removed.length;te++){const pe=W.removed[te],oe=y.indexOf(pe);oe>=0&&(y[oe]=null,x[oe].disconnect(pe))}for(let te=0;te<W.added.length;te++){const pe=W.added[te];let oe=y.indexOf(pe);if(oe===-1){for(let be=0;be<x.length;be++)if(be>=y.length){y.push(pe),oe=be;break}else if(y[be]===null){y[be]=pe,oe=be;break}if(oe===-1)break}const Ce=x[oe];Ce&&Ce.connect(pe)}}const G=new H,q=new H;function L(W,te,pe){G.setFromMatrixPosition(te.matrixWorld),q.setFromMatrixPosition(pe.matrixWorld);const oe=G.distanceTo(q),Ce=te.projectionMatrix.elements,be=pe.projectionMatrix.elements,Fe=Ce[14]/(Ce[10]-1),ht=Ce[14]/(Ce[10]+1),Ge=(Ce[9]+1)/Ce[5],Et=(Ce[9]-1)/Ce[5],I=(Ce[8]-1)/Ce[0],On=(be[8]+1)/be[0],Be=Fe*I,Ve=Fe*On,we=oe/(-I+On),ot=we*-I;if(te.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ot),W.translateZ(we),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ce[10]===-1)W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Te=Fe+we,P=ht+we,E=Be-ot,k=Ve+(oe-ot),Q=Ge*ht/P*Te,ee=Et*ht/P*Te;W.projectionMatrix.makePerspective(E,k,Q,ee,Te,P),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function $(W,te){te===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(te.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let te=W.near,pe=W.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(pe=_.depthFar)),M.near=R.near=T.near=te,M.far=R.far=T.far=pe,(b!==M.near||z!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,z=M.far),T.layers.mask=W.layers.mask|2,R.layers.mask=W.layers.mask|4,M.layers.mask=T.layers.mask|R.layers.mask;const oe=W.parent,Ce=M.cameras;$(M,oe);for(let be=0;be<Ce.length;be++)$(Ce[be],oe);Ce.length===2?L(M,T,R):M.projectionMatrix.copy(T.projectionMatrix),Z(W,M,oe)};function Z(W,te,pe){pe===null?W.matrix.copy(te.matrixWorld):(W.matrix.copy(pe.matrixWorld),W.matrix.invert(),W.matrix.multiply(te.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=_h*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let se=null;function me(W,te){if(c=te.getViewerPose(u||o),g=te,c!==null){const pe=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let oe=!1;pe.length!==M.cameras.length&&(M.cameras.length=0,oe=!0);for(let be=0;be<pe.length;be++){const Fe=pe[be];let ht=null;if(p!==null)ht=p.getViewport(Fe);else{const Et=f.getViewSubImage(h,Fe);ht=Et.viewport,be===0&&(e.setRenderTargetTextures(v,Et.colorTexture,h.ignoreDepthValues?void 0:Et.depthStencilTexture),e.setRenderTarget(v))}let Ge=S[be];Ge===void 0&&(Ge=new An,Ge.layers.enable(be),Ge.viewport=new At,S[be]=Ge),Ge.matrix.fromArray(Fe.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Fe.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(ht.x,ht.y,ht.width,ht.height),be===0&&(M.matrix.copy(Ge.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),oe===!0&&M.cameras.push(Ge)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const be=f.getDepthInformation(pe[0]);be&&be.isValid&&be.texture&&_.init(e,be,r.renderState)}}for(let pe=0;pe<x.length;pe++){const oe=y[pe],Ce=x[pe];oe!==null&&Ce!==void 0&&Ce.update(oe,te,u||o)}se&&se(W,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const ke=new xx;ke.setAnimationLoop(me),this.setAnimationLoop=function(W){se=W},this.dispose=function(){}}}const $r=new Ji,oR=new bt;function aR(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,mx(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,x,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,x):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===mn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===mn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),x=v.envMap,y=v.envMapRotation;x&&(m.envMap.value=x,$r.copy(y),$r.x*=-1,$r.y*=-1,$r.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),m.envMapRotation.value.setFromMatrix4(oR.makeRotationFromEuler($r)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===mn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lR(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(g(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(v,C);const A=e.render.frame;s[v.id]!==A&&(h(v),s[v.id]=A)}function c(v){const x=f();v.__bindingPointIndex=x;const y=n.createBuffer(),C=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=r[v.id],y=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,T=y.length;A<T;A++){const R=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,M=R.length;S<M;S++){const b=R[S];if(p(b,A,S,C)===!0){const z=b.__offset,F=Array.isArray(b.value)?b.value:[b.value];let j=0;for(let Y=0;Y<F.length;Y++){const G=F[Y],q=_(G);typeof G=="number"||typeof G=="boolean"?(b.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,z+j,b.__data)):G.isMatrix3?(b.__data[0]=G.elements[0],b.__data[1]=G.elements[1],b.__data[2]=G.elements[2],b.__data[3]=0,b.__data[4]=G.elements[3],b.__data[5]=G.elements[4],b.__data[6]=G.elements[5],b.__data[7]=0,b.__data[8]=G.elements[6],b.__data[9]=G.elements[7],b.__data[10]=G.elements[8],b.__data[11]=0):(G.toArray(b.__data,j),j+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,y,C){const A=v.value,T=x+"_"+y;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{const R=C[T];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return C[T]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(v){const x=v.uniforms;let y=0;const C=16;for(let T=0,R=x.length;T<R;T++){const S=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,b=S.length;M<b;M++){const z=S[M],F=Array.isArray(z.value)?z.value:[z.value];for(let j=0,Y=F.length;j<Y;j++){const G=F[j],q=_(G),L=y%C,$=L%q.boundary,Z=L+$;y+=$,Z!==0&&C-Z<q.storage&&(y+=C-Z),z.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=q.storage}}}const A=y%C;return A>0&&(y+=C-A),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class wx{constructor(e={}){const{canvas:t=$E(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vn,this.toneMapping=Lr,this.toneMappingExposure=1;const y=this;let C=!1,A=0,T=0,R=null,S=-1,M=null;const b=new At,z=new At;let F=null;const j=new et(0);let Y=0,G=t.width,q=t.height,L=1,$=null,Z=null;const se=new At(0,0,G,q),me=new At(0,0,G,q);let ke=!1;const W=new vx;let te=!1,pe=!1;const oe=new bt,Ce=new bt,be=new H,Fe=new At,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function Et(){return R===null?L:1}let I=i;function On(w,N){return t.getContext(w,N)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cp}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",ce,!1),I===null){const N="webgl2";if(I=On(N,w),I===null)throw On(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Be,Ve,we,ot,Te,P,E,k,Q,ee,K,Me,ue,_e,We,ie,ge,Ae,Re,ve,He,Ue,nt,D;function le(){Be=new pA(I),Be.init(),Ue=new JC(I,Be),Ve=new aA(I,Be,e,Ue),we=new KC(I,Be),Ve.reverseDepthBuffer&&h&&we.buffers.depth.setReversed(!0),ot=new gA(I),Te=new IC,P=new QC(I,Be,we,Te,Ve,Ue,ot),E=new uA(y),k=new hA(y),Q=new E1(I),nt=new sA(I,Q),ee=new mA(I,Q,ot,nt),K=new xA(I,ee,Q,ot),Re=new vA(I,Ve,P),ie=new lA(Te),Me=new UC(y,E,k,Be,Ve,nt,ie),ue=new aR(y,Te),_e=new OC,We=new GC(Be),Ae=new rA(y,E,k,we,K,p,l),ge=new qC(y,K,Ve),D=new lR(I,ot,Ve,we),ve=new oA(I,Be,ot),He=new _A(I,Be,ot),ot.programs=Me.programs,y.capabilities=Ve,y.extensions=Be,y.properties=Te,y.renderLists=_e,y.shadowMap=ge,y.state=we,y.info=ot}le();const X=new sR(y,I);this.xr=X,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=Be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(w){w!==void 0&&(L=w,this.setSize(G,q,!1))},this.getSize=function(w){return w.set(G,q)},this.setSize=function(w,N,B=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,q=N,t.width=Math.floor(w*L),t.height=Math.floor(N*L),B===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(G*L,q*L).floor()},this.setDrawingBufferSize=function(w,N,B){G=w,q=N,L=B,t.width=Math.floor(w*B),t.height=Math.floor(N*B),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(b)},this.getViewport=function(w){return w.copy(se)},this.setViewport=function(w,N,B,V){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,N,B,V),we.viewport(b.copy(se).multiplyScalar(L).round())},this.getScissor=function(w){return w.copy(me)},this.setScissor=function(w,N,B,V){w.isVector4?me.set(w.x,w.y,w.z,w.w):me.set(w,N,B,V),we.scissor(z.copy(me).multiplyScalar(L).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(w){we.setScissorTest(ke=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){Z=w},this.getClearColor=function(w){return w.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(w=!0,N=!0,B=!0){let V=0;if(w){let U=!1;if(R!==null){const re=R.texture.format;U=re===Np||re===Dp||re===Lp}if(U){const re=R.texture.type,fe=re===Qi||re===Es||re===ja||re===Do||re===Pp||re===bp,xe=Ae.getClearColor(),ye=Ae.getClearAlpha(),Pe=xe.r,De=xe.g,Se=xe.b;fe?(g[0]=Pe,g[1]=De,g[2]=Se,g[3]=ye,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Pe,_[1]=De,_[2]=Se,_[3]=ye,I.clearBufferiv(I.COLOR,0,_))}else V|=I.COLOR_BUFFER_BIT}N&&(V|=I.DEPTH_BUFFER_BIT),B&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),_e.dispose(),We.dispose(),Te.dispose(),E.dispose(),k.dispose(),K.dispose(),nt.dispose(),D.dispose(),Me.dispose(),X.dispose(),X.removeEventListener("sessionstart",em),X.removeEventListener("sessionend",tm),Gr.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const w=ot.autoReset,N=ge.enabled,B=ge.autoUpdate,V=ge.needsUpdate,U=ge.type;le(),ot.autoReset=w,ge.enabled=N,ge.autoUpdate=B,ge.needsUpdate=V,ge.type=U}function ce(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Le(w){const N=w.target;N.removeEventListener("dispose",Le),yt(N)}function yt(w){Gt(w),Te.remove(w)}function Gt(w){const N=Te.get(w).programs;N!==void 0&&(N.forEach(function(B){Me.releaseProgram(B)}),w.isShaderMaterial&&Me.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,B,V,U,re){N===null&&(N=ht);const fe=U.isMesh&&U.matrixWorld.determinant()<0,xe=by(w,N,B,V,U);we.setMaterial(V,fe);let ye=B.index,Pe=1;if(V.wireframe===!0){if(ye=ee.getWireframeAttribute(B),ye===void 0)return;Pe=2}const De=B.drawRange,Se=B.attributes.position;let Ye=De.start*Pe,it=(De.start+De.count)*Pe;re!==null&&(Ye=Math.max(Ye,re.start*Pe),it=Math.min(it,(re.start+re.count)*Pe)),ye!==null?(Ye=Math.max(Ye,0),it=Math.min(it,ye.count)):Se!=null&&(Ye=Math.max(Ye,0),it=Math.min(it,Se.count));const at=it-Ye;if(at<0||at===1/0)return;nt.setup(U,V,xe,B,ye);let an,qe=ve;if(ye!==null&&(an=Q.get(ye),qe=He,qe.setIndex(an)),U.isMesh)V.wireframe===!0?(we.setLineWidth(V.wireframeLinewidth*Et()),qe.setMode(I.LINES)):qe.setMode(I.TRIANGLES);else if(U.isLine){let Ee=V.linewidth;Ee===void 0&&(Ee=1),we.setLineWidth(Ee*Et()),U.isLineSegments?qe.setMode(I.LINES):U.isLineLoop?qe.setMode(I.LINE_LOOP):qe.setMode(I.LINE_STRIP)}else U.isPoints?qe.setMode(I.POINTS):U.isSprite&&qe.setMode(I.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)qe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))qe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ee=U._multiDrawStarts,Pi=U._multiDrawCounts,$e=U._multiDrawCount,Qn=ye?Q.get(ye).bytesPerElement:1,Ls=Te.get(V).currentProgram.getUniforms();for(let Sn=0;Sn<$e;Sn++)Ls.setValue(I,"_gl_DrawID",Sn),qe.render(Ee[Sn]/Qn,Pi[Sn])}else if(U.isInstancedMesh)qe.renderInstances(Ye,at,U.count);else if(B.isInstancedBufferGeometry){const Ee=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Pi=Math.min(B.instanceCount,Ee);qe.renderInstances(Ye,at,Pi)}else qe.render(Ye,at)};function Ze(w,N,B){w.transparent===!0&&w.side===Bi&&w.forceSinglePass===!1?(w.side=mn,w.needsUpdate=!0,pl(w,N,B),w.side=Fr,w.needsUpdate=!0,pl(w,N,B),w.side=Bi):pl(w,N,B)}this.compile=function(w,N,B=null){B===null&&(B=w),d=We.get(B),d.init(N),x.push(d),B.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),w!==B&&w.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const V=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const re=U.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){const xe=re[fe];Ze(xe,B,U),V.add(xe)}else Ze(re,B,U),V.add(re)}),x.pop(),d=null,V},this.compileAsync=function(w,N,B=null){const V=this.compile(w,N,B);return new Promise(U=>{function re(){if(V.forEach(function(fe){Te.get(fe).currentProgram.isReady()&&V.delete(fe)}),V.size===0){U(w);return}setTimeout(re,10)}Be.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Zn=null;function Ri(w){Zn&&Zn(w)}function em(){Gr.stop()}function tm(){Gr.start()}const Gr=new xx;Gr.setAnimationLoop(Ri),typeof self<"u"&&Gr.setContext(self),this.setAnimationLoop=function(w){Zn=w,X.setAnimationLoop(w),w===null?Gr.stop():Gr.start()},X.addEventListener("sessionstart",em),X.addEventListener("sessionend",tm),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,N,R),d=We.get(w,x.length),d.init(N),x.push(d),Ce.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),W.setFromProjectionMatrix(Ce),pe=this.localClippingEnabled,te=ie.init(this.clippingPlanes,pe),m=_e.get(w,v.length),m.init(),v.push(m),X.enabled===!0&&X.isPresenting===!0){const re=y.xr.getDepthSensingMesh();re!==null&&wc(re,N,-1/0,y.sortObjects)}wc(w,N,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort($,Z),Ge=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ge&&Ae.addToRenderList(m,w),this.info.render.frame++,te===!0&&ie.beginShadows();const B=d.state.shadowsArray;ge.render(B,w,N),te===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,U=m.transmissive;if(d.setupLights(),N.isArrayCamera){const re=N.cameras;if(U.length>0)for(let fe=0,xe=re.length;fe<xe;fe++){const ye=re[fe];im(V,U,w,ye)}Ge&&Ae.render(w);for(let fe=0,xe=re.length;fe<xe;fe++){const ye=re[fe];nm(m,w,ye,ye.viewport)}}else U.length>0&&im(V,U,w,N),Ge&&Ae.render(w),nm(m,w,N);R!==null&&(P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(y,w,N),nt.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?(d=x[x.length-1],te===!0&&ie.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function wc(w,N,B,V){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||W.intersectsSprite(w)){V&&Fe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ce);const fe=K.update(w),xe=w.material;xe.visible&&m.push(w,fe,xe,B,Fe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||W.intersectsObject(w))){const fe=K.update(w),xe=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Fe.copy(w.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Fe.copy(fe.boundingSphere.center)),Fe.applyMatrix4(w.matrixWorld).applyMatrix4(Ce)),Array.isArray(xe)){const ye=fe.groups;for(let Pe=0,De=ye.length;Pe<De;Pe++){const Se=ye[Pe],Ye=xe[Se.materialIndex];Ye&&Ye.visible&&m.push(w,fe,Ye,B,Fe.z,Se)}}else xe.visible&&m.push(w,fe,xe,B,Fe.z,null)}}const re=w.children;for(let fe=0,xe=re.length;fe<xe;fe++)wc(re[fe],N,B,V)}function nm(w,N,B,V){const U=w.opaque,re=w.transmissive,fe=w.transparent;d.setupLightsView(B),te===!0&&ie.setGlobalState(y.clippingPlanes,B),V&&we.viewport(b.copy(V)),U.length>0&&hl(U,N,B),re.length>0&&hl(re,N,B),fe.length>0&&hl(fe,N,B),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function im(w,N,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new Ts(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?al:Qi,minFilter:us,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const re=d.state.transmissionRenderTarget[V.id],fe=V.viewport||b;re.setSize(fe.z,fe.w);const xe=y.getRenderTarget();y.setRenderTarget(re),y.getClearColor(j),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),Ge&&Ae.render(B);const ye=y.toneMapping;y.toneMapping=Lr;const Pe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),te===!0&&ie.setGlobalState(y.clippingPlanes,V),hl(w,B,V),P.updateMultisampleRenderTarget(re),P.updateRenderTargetMipmap(re),Be.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Se=0,Ye=N.length;Se<Ye;Se++){const it=N[Se],at=it.object,an=it.geometry,qe=it.material,Ee=it.group;if(qe.side===Bi&&at.layers.test(V.layers)){const Pi=qe.side;qe.side=mn,qe.needsUpdate=!0,rm(at,B,V,an,qe,Ee),qe.side=Pi,qe.needsUpdate=!0,De=!0}}De===!0&&(P.updateMultisampleRenderTarget(re),P.updateRenderTargetMipmap(re))}y.setRenderTarget(xe),y.setClearColor(j,Y),Pe!==void 0&&(V.viewport=Pe),y.toneMapping=ye}function hl(w,N,B){const V=N.isScene===!0?N.overrideMaterial:null;for(let U=0,re=w.length;U<re;U++){const fe=w[U],xe=fe.object,ye=fe.geometry,Pe=V===null?fe.material:V,De=fe.group;xe.layers.test(B.layers)&&rm(xe,N,B,ye,Pe,De)}}function rm(w,N,B,V,U,re){w.onBeforeRender(y,N,B,V,U,re),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(y,N,B,V,w,re),U.transparent===!0&&U.side===Bi&&U.forceSinglePass===!1?(U.side=mn,U.needsUpdate=!0,y.renderBufferDirect(B,N,V,U,w,re),U.side=Fr,U.needsUpdate=!0,y.renderBufferDirect(B,N,V,U,w,re),U.side=Bi):y.renderBufferDirect(B,N,V,U,w,re),w.onAfterRender(y,N,B,V,U,re)}function pl(w,N,B){N.isScene!==!0&&(N=ht);const V=Te.get(w),U=d.state.lights,re=d.state.shadowsArray,fe=U.state.version,xe=Me.getParameters(w,U.state,re,N,B),ye=Me.getProgramCacheKey(xe);let Pe=V.programs;V.environment=w.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(w.isMeshStandardMaterial?k:E).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Pe===void 0&&(w.addEventListener("dispose",Le),Pe=new Map,V.programs=Pe);let De=Pe.get(ye);if(De!==void 0){if(V.currentProgram===De&&V.lightsStateVersion===fe)return om(w,xe),De}else xe.uniforms=Me.getUniforms(w),w.onBeforeCompile(xe,y),De=Me.acquireProgram(xe,ye),Pe.set(ye,De),V.uniforms=xe.uniforms;const Se=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Se.clippingPlanes=ie.uniform),om(w,xe),V.needsLights=Dy(w),V.lightsStateVersion=fe,V.needsLights&&(Se.ambientLightColor.value=U.state.ambient,Se.lightProbe.value=U.state.probe,Se.directionalLights.value=U.state.directional,Se.directionalLightShadows.value=U.state.directionalShadow,Se.spotLights.value=U.state.spot,Se.spotLightShadows.value=U.state.spotShadow,Se.rectAreaLights.value=U.state.rectArea,Se.ltc_1.value=U.state.rectAreaLTC1,Se.ltc_2.value=U.state.rectAreaLTC2,Se.pointLights.value=U.state.point,Se.pointLightShadows.value=U.state.pointShadow,Se.hemisphereLights.value=U.state.hemi,Se.directionalShadowMap.value=U.state.directionalShadowMap,Se.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Se.spotShadowMap.value=U.state.spotShadowMap,Se.spotLightMatrix.value=U.state.spotLightMatrix,Se.spotLightMap.value=U.state.spotLightMap,Se.pointShadowMap.value=U.state.pointShadowMap,Se.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=De,V.uniformsList=null,De}function sm(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=vu.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function om(w,N){const B=Te.get(w);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function by(w,N,B,V,U){N.isScene!==!0&&(N=ht),P.resetTextureUnits();const re=N.fog,fe=V.isMeshStandardMaterial?N.environment:null,xe=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Go,ye=(V.isMeshStandardMaterial?k:E).get(V.envMap||fe),Pe=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,De=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Se=!!B.morphAttributes.position,Ye=!!B.morphAttributes.normal,it=!!B.morphAttributes.color;let at=Lr;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(at=y.toneMapping);const an=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,qe=an!==void 0?an.length:0,Ee=Te.get(V),Pi=d.state.lights;if(te===!0&&(pe===!0||w!==M)){const kn=w===M&&V.id===S;ie.setState(V,w,kn)}let $e=!1;V.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Pi.state.version||Ee.outputColorSpace!==xe||U.isBatchedMesh&&Ee.batching===!1||!U.isBatchedMesh&&Ee.batching===!0||U.isBatchedMesh&&Ee.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ee.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ee.instancing===!1||!U.isInstancedMesh&&Ee.instancing===!0||U.isSkinnedMesh&&Ee.skinning===!1||!U.isSkinnedMesh&&Ee.skinning===!0||U.isInstancedMesh&&Ee.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ee.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ee.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ee.instancingMorph===!1&&U.morphTexture!==null||Ee.envMap!==ye||V.fog===!0&&Ee.fog!==re||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ie.numPlanes||Ee.numIntersection!==ie.numIntersection)||Ee.vertexAlphas!==Pe||Ee.vertexTangents!==De||Ee.morphTargets!==Se||Ee.morphNormals!==Ye||Ee.morphColors!==it||Ee.toneMapping!==at||Ee.morphTargetsCount!==qe)&&($e=!0):($e=!0,Ee.__version=V.version);let Qn=Ee.currentProgram;$e===!0&&(Qn=pl(V,N,U));let Ls=!1,Sn=!1,Yo=!1;const lt=Qn.getUniforms(),hi=Ee.uniforms;if(we.useProgram(Qn.program)&&(Ls=!0,Sn=!0,Yo=!0),V.id!==S&&(S=V.id,Sn=!0),Ls||M!==w){we.buffers.depth.getReversed()?(oe.copy(w.projectionMatrix),ZE(oe),QE(oe),lt.setValue(I,"projectionMatrix",oe)):lt.setValue(I,"projectionMatrix",w.projectionMatrix),lt.setValue(I,"viewMatrix",w.matrixWorldInverse);const ir=lt.map.cameraPosition;ir!==void 0&&ir.setValue(I,be.setFromMatrixPosition(w.matrixWorld)),Ve.logarithmicDepthBuffer&&lt.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&lt.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Sn=!0,Yo=!0)}if(U.isSkinnedMesh){lt.setOptional(I,U,"bindMatrix"),lt.setOptional(I,U,"bindMatrixInverse");const kn=U.skeleton;kn&&(kn.boneTexture===null&&kn.computeBoneTexture(),lt.setValue(I,"boneTexture",kn.boneTexture,P))}U.isBatchedMesh&&(lt.setOptional(I,U,"batchingTexture"),lt.setValue(I,"batchingTexture",U._matricesTexture,P),lt.setOptional(I,U,"batchingIdTexture"),lt.setValue(I,"batchingIdTexture",U._indirectTexture,P),lt.setOptional(I,U,"batchingColorTexture"),U._colorsTexture!==null&&lt.setValue(I,"batchingColorTexture",U._colorsTexture,P));const qo=B.morphAttributes;if((qo.position!==void 0||qo.normal!==void 0||qo.color!==void 0)&&Re.update(U,B,Qn),(Sn||Ee.receiveShadow!==U.receiveShadow)&&(Ee.receiveShadow=U.receiveShadow,lt.setValue(I,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(hi.envMap.value=ye,hi.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(hi.envMapIntensity.value=N.environmentIntensity),Sn&&(lt.setValue(I,"toneMappingExposure",y.toneMappingExposure),Ee.needsLights&&Ly(hi,Yo),re&&V.fog===!0&&ue.refreshFogUniforms(hi,re),ue.refreshMaterialUniforms(hi,V,L,q,d.state.transmissionRenderTarget[w.id]),vu.upload(I,sm(Ee),hi,P)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(vu.upload(I,sm(Ee),hi,P),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&lt.setValue(I,"center",U.center),lt.setValue(I,"modelViewMatrix",U.modelViewMatrix),lt.setValue(I,"normalMatrix",U.normalMatrix),lt.setValue(I,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const kn=V.uniformsGroups;for(let ir=0,rr=kn.length;ir<rr;ir++){const am=kn[ir];D.update(am,Qn),D.bind(am,Qn)}}return Qn}function Ly(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Dy(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,N,B){Te.get(w.texture).__webglTexture=N,Te.get(w.depthTexture).__webglTexture=B;const V=Te.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const B=Te.get(w);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,B=0){R=w,A=N,T=B;let V=!0,U=null,re=!1,fe=!1;if(w){const ye=Te.get(w);if(ye.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(ye.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(ye.__hasExternalTextures)P.rebindTextures(w,Te.get(w.texture).__webglTexture,Te.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Se=w.depthTexture;if(ye.__boundDepthTexture!==Se){if(Se!==null&&Te.has(Se)&&(w.width!==Se.image.width||w.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}const Pe=w.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(fe=!0);const De=Te.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(De[N])?U=De[N][B]:U=De[N],re=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?U=Te.get(w).__webglMultisampledFramebuffer:Array.isArray(De)?U=De[B]:U=De,b.copy(w.viewport),z.copy(w.scissor),F=w.scissorTest}else b.copy(se).multiplyScalar(L).floor(),z.copy(me).multiplyScalar(L).floor(),F=ke;if(we.bindFramebuffer(I.FRAMEBUFFER,U)&&V&&we.drawBuffers(w,U),we.viewport(b),we.scissor(z),we.setScissorTest(F),re){const ye=Te.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye.__webglTexture,B)}else if(fe){const ye=Te.get(w.texture),Pe=N||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ye.__webglTexture,B||0,Pe)}S=-1},this.readRenderTargetPixels=function(w,N,B,V,U,re,fe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Te.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){we.bindFramebuffer(I.FRAMEBUFFER,xe);try{const ye=w.texture,Pe=ye.format,De=ye.type;if(!Ve.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-V&&B>=0&&B<=w.height-U&&I.readPixels(N,B,V,U,Ue.convert(Pe),Ue.convert(De),re)}finally{const ye=R!==null?Te.get(R).__webglFramebuffer:null;we.bindFramebuffer(I.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(w,N,B,V,U,re,fe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Te.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){const ye=w.texture,Pe=ye.format,De=ye.type;if(!Ve.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-V&&B>=0&&B<=w.height-U){we.bindFramebuffer(I.FRAMEBUFFER,xe);const Se=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Se),I.bufferData(I.PIXEL_PACK_BUFFER,re.byteLength,I.STREAM_READ),I.readPixels(N,B,V,U,Ue.convert(Pe),Ue.convert(De),0);const Ye=R!==null?Te.get(R).__webglFramebuffer:null;we.bindFramebuffer(I.FRAMEBUFFER,Ye);const it=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await KE(I,it,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Se),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,re),I.deleteBuffer(Se),I.deleteSync(it),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,B=0){w.isTexture!==!0&&(ha("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-B),U=Math.floor(w.image.width*V),re=Math.floor(w.image.height*V),fe=N!==null?N.x:0,xe=N!==null?N.y:0;P.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,fe,xe,U,re),we.unbindTexture()},this.copyTextureToTexture=function(w,N,B=null,V=null,U=0){w.isTexture!==!0&&(ha("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],N=arguments[2],U=arguments[3]||0,B=null);let re,fe,xe,ye,Pe,De,Se,Ye,it;const at=w.isCompressedTexture?w.mipmaps[U]:w.image;B!==null?(re=B.max.x-B.min.x,fe=B.max.y-B.min.y,xe=B.isBox3?B.max.z-B.min.z:1,ye=B.min.x,Pe=B.min.y,De=B.isBox3?B.min.z:0):(re=at.width,fe=at.height,xe=at.depth||1,ye=0,Pe=0,De=0),V!==null?(Se=V.x,Ye=V.y,it=V.z):(Se=0,Ye=0,it=0);const an=Ue.convert(N.format),qe=Ue.convert(N.type);let Ee;N.isData3DTexture?(P.setTexture3D(N,0),Ee=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(P.setTexture2DArray(N,0),Ee=I.TEXTURE_2D_ARRAY):(P.setTexture2D(N,0),Ee=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const Pi=I.getParameter(I.UNPACK_ROW_LENGTH),$e=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Qn=I.getParameter(I.UNPACK_SKIP_PIXELS),Ls=I.getParameter(I.UNPACK_SKIP_ROWS),Sn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,at.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,at.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ye),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,De);const Yo=w.isDataArrayTexture||w.isData3DTexture,lt=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const hi=Te.get(w),qo=Te.get(N),kn=Te.get(hi.__renderTarget),ir=Te.get(qo.__renderTarget);we.bindFramebuffer(I.READ_FRAMEBUFFER,kn.__webglFramebuffer),we.bindFramebuffer(I.DRAW_FRAMEBUFFER,ir.__webglFramebuffer);for(let rr=0;rr<xe;rr++)Yo&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Te.get(w).__webglTexture,U,De+rr),w.isDepthTexture?(lt&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Te.get(N).__webglTexture,U,it+rr),I.blitFramebuffer(ye,Pe,re,fe,Se,Ye,re,fe,I.DEPTH_BUFFER_BIT,I.NEAREST)):lt?I.copyTexSubImage3D(Ee,U,Se,Ye,it+rr,ye,Pe,re,fe):I.copyTexSubImage2D(Ee,U,Se,Ye,it+rr,ye,Pe,re,fe);we.bindFramebuffer(I.READ_FRAMEBUFFER,null),we.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else lt?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Ee,U,Se,Ye,it,re,fe,xe,an,qe,at.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Ee,U,Se,Ye,it,re,fe,xe,an,at.data):I.texSubImage3D(Ee,U,Se,Ye,it,re,fe,xe,an,qe,at):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,U,Se,Ye,re,fe,an,qe,at.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,U,Se,Ye,at.width,at.height,an,at.data):I.texSubImage2D(I.TEXTURE_2D,U,Se,Ye,re,fe,an,qe,at);I.pixelStorei(I.UNPACK_ROW_LENGTH,Pi),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,$e),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Qn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ls),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Sn),U===0&&N.generateMipmaps&&I.generateMipmap(Ee),we.unbindTexture()},this.copyTextureToTexture3D=function(w,N,B=null,V=null,U=0){return w.isTexture!==!0&&(ha("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,V=arguments[1]||null,w=arguments[2],N=arguments[3],U=arguments[4]||0),ha('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,B,V,U)},this.initRenderTarget=function(w){Te.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),we.unbindTexture()},this.resetState=function(){A=0,T=0,R=null,we.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}class Ax extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const mg={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class uR{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const p=u[f],g=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null}}}const cR=new uR;class Fp{constructor(e){this.manager=e!==void 0?e:cR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Fp.DEFAULT_MATERIAL_NAME="__DEFAULT";class fR extends Fp{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=mg.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ya("img");function l(){c(),mg.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Cx extends Fp{constructor(e){super(e)}load(e,t,i,r){const s=new rn,o=new fR(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cp);function Oi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Rx(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Dn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Io={duration:.5,overwrite:!1,delay:0},Op,Kt,dt,Xn=1e8,rt=1/Xn,vh=Math.PI*2,dR=vh/4,hR=0,Px=Math.sqrt,pR=Math.cos,mR=Math.sin,zt=function(e){return typeof e=="string"},Mt=function(e){return typeof e=="function"},er=function(e){return typeof e=="number"},kp=function(e){return typeof e>"u"},Ci=function(e){return typeof e=="object"},_n=function(e){return e!==!1},zp=function(){return typeof window<"u"},eu=function(e){return Mt(e)||zt(e)},bx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Zt=Array.isArray,xh=/(?:-?\.?\d|\.)+/gi,Lx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ao=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Pf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Dx=/[+-]=-?[.\d]+/,Nx=/[^,'"\[\]\s]+/gi,_R=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,mt,_i,yh,Bp,Un={},Yu={},Ux,Ix=function(e){return(Yu=ws(e,Un))&&yn},Vp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},qa=function(e,t){return!t&&console.warn(e)},Fx=function(e,t){return e&&(Un[e]=t)&&Yu&&(Yu[e]=t)||Un},$a=function(){return 0},gR={suppressEvents:!0,isStart:!0,kill:!1},xu={suppressEvents:!0,kill:!1},vR={suppressEvents:!0},Hp={},Dr=[],Sh={},Ox,wn={},bf={},_g=30,yu=[],Gp="",Wp=function(e){var t=e[0],i,r;if(Ci(t)||Mt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=yu.length;r--&&!yu[r].targetTest(t););i=yu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new ay(e[r],i)))||e.splice(r,1);return e},ps=function(e){return e._gsap||Wp(jn(e))[0]._gsap},kx=function(e,t,i){return(i=e[t])&&Mt(i)?e[t]():kp(i)&&e.getAttribute&&e.getAttribute(t)||i},gn=function(e,t){return(e=e.split(",")).forEach(t)||e},Tt=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},xo=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},xR=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},qu=function(){var e=Dr.length,t=Dr.slice(0),i,r;for(Sh={},Dr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},zx=function(e,t,i,r){Dr.length&&!Kt&&qu(),e.render(t,i,Kt&&t<0&&(e._initted||e._startAt)),Dr.length&&!Kt&&qu()},Bx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Nx).length<2?t:zt(e)?e.trim():e},Vx=function(e){return e},Kn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},yR=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},ws=function(e,t){for(var i in t)e[i]=t[i];return e},gg=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ci(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},$u=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Aa=function(e){var t=e.parent||mt,i=e.keyframes?yR(Zt(e.keyframes)):Kn;if(_n(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},SR=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Hx=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Mc=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Or=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ms=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},MR=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Mh=function(e,t,i,r){return e._startAt&&(Kt?e._startAt.revert(xu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},ER=function n(e){return!e||e._ts&&n(e.parent)},vg=function(e){return e._repeat?Fo(e._tTime,e=e.duration()+e._rDelay)*e:0},Fo=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},Ku=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ec=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||rt)||0))},Tc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ot(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ec(e),i._dirty||ms(i,e)),e},Gx=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Ku(e.rawTime(),t),(!t._dur||dl(0,t.totalDuration(),i)-t._tTime>rt)&&t.render(i,!0)),ms(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-rt}},xi=function(e,t,i,r){return t.parent&&Or(t),t._start=Ot((er(i)?i:i||e!==mt?Bn(e,i,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Hx(e,t,"_first","_last",e._sort?"_start":0),Eh(t)||(e._recent=t),r||Gx(e,t),e._ts<0&&Tc(e,e._tTime),e},Wx=function(e,t){return(Un.ScrollTrigger||Vp("scrollTrigger",t))&&Un.ScrollTrigger.create(t,e)},Xx=function(e,t,i,r,s){if(jp(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Kt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ox!==Cn.frame)return Dr.push(e),e._lazy=[s,r],1},TR=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Eh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},wR=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&TR(e)&&!(!e._initted&&Eh(e))||(e._ts<0||e._dp._ts<0)&&!Eh(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=dl(0,e._tDur,t),c=Fo(l,a),e._yoyo&&c&1&&(o=1-o),c!==Fo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Kt||r||e._zTime===rt||!t&&e._zTime){if(!e._initted&&Xx(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?rt:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Mh(e,t,i,!0),e._onUpdate&&!i&&Pn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Pn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Or(e,1),!i&&!Kt&&(Pn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},AR=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Oo=function(e,t,i,r){var s=e._repeat,o=Ot(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ot(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Tc(e,e._tTime=e._tDur*a),e.parent&&Ec(e),i||ms(e.parent,e),e},xg=function(e){return e instanceof tn?ms(e):Oo(e,e._dur)},CR={_start:0,endTime:$a,totalDuration:$a},Bn=function n(e,t,i){var r=e.labels,s=e._recent||CR,o=e.duration()>=Xn?s.endTime(!1):e._dur,a,l,u;return zt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Zt(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Ca=function(e,t,i){var r=er(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=_n(l.vars.inherit)&&l.parent;o.immediateRender=_n(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Rt(t[0],o,t[s+1])},Hr=function(e,t){return e||e===0?t(e):t},dl=function(e,t,i){return i<e?e:i>t?t:i},$t=function(e,t){return!zt(e)||!(t=_R.exec(e))?"":t[1]},RR=function(e,t,i){return Hr(i,function(r){return dl(e,t,r)})},Th=[].slice,jx=function(e,t){return e&&Ci(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ci(e[0]))&&!e.nodeType&&e!==_i},PR=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return zt(r)&&!t||jx(r,1)?(s=i).push.apply(s,jn(r)):i.push(r)})||i},jn=function(e,t,i){return dt&&!t&&dt.selector?dt.selector(e):zt(e)&&!i&&(yh||!ko())?Th.call((t||Bp).querySelectorAll(e),0):Zt(e)?PR(e,i):jx(e)?Th.call(e,0):e?[e]:[]},wh=function(e){return e=jn(e)[0]||qa("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return jn(t,i.querySelectorAll?i:i===e?qa("Invalid scope")||Bp.createElement("div"):e)}},Yx=function(e){return e.sort(function(){return .5-Math.random()})},qx=function(e){if(Mt(e))return e;var t=Ci(e)?e:{each:e},i=_s(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,f=r;return zt(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(h,p,g){var _=(g||t).length,m=o[_],d,v,x,y,C,A,T,R,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Xn])[1],!S){for(T=-Xn;T<(T=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],d=l?Math.min(S,_)*c-.5:r%S,v=S===Xn?0:l?_*f/S-.5:r/S|0,T=0,R=Xn,A=0;A<_;A++)x=A%S-d,y=v-(A/S|0),m[A]=C=u?Math.abs(u==="y"?y:x):Px(x*x+y*y),C>T&&(T=C),C<R&&(R=C);r==="random"&&Yx(m),m.max=T-R,m.min=R,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:u?u==="y"?_/S:S:Math.max(S,_/S))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=$t(t.amount||t.each)||0,i=i&&_<0?ry(i):i}return _=(m[h]-m.min)/m.max||0,Ot(m.b+(i?i(_):_)*m.v)+m.u}},Ah=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Ot(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(er(i)?0:$t(i))}},$x=function(e,t){var i=Zt(e),r,s;return!i&&Ci(e)&&(r=i=e.radius||Xn,e.values?(e=jn(e.values),(s=!er(e[0]))&&(r*=r)):e=Ah(e.increment)),Hr(t,i?Mt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Xn,c=0,f=e.length,h,p;f--;)s?(h=e[f].x-a,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-a),h<u&&(u=h,c=f);return c=!r||u<=r?e[c]:o,s||c===o||er(o)?c:c+$t(o)}:Ah(e))},Kx=function(e,t,i,r){return Hr(Zt(e)?!t:i===!0?!!(i=0):!r,function(){return Zt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},bR=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},LR=function(e,t){return function(i){return e(parseFloat(i))+(t||$t(i))}},DR=function(e,t,i){return Qx(e,t,0,1,i)},Zx=function(e,t,i){return Hr(i,function(r){return e[~~t(r)]})},NR=function n(e,t,i){var r=t-e;return Zt(e)?Zx(e,n(0,e.length),t):Hr(i,function(s){return(r+(s-e)%r)%r+e})},UR=function n(e,t,i){var r=t-e,s=r*2;return Zt(e)?Zx(e,n(0,e.length-1),t):Hr(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Ka=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?Nx:xh),i+=e.substr(t,r-t)+Kx(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},Qx=function(e,t,i,r,s){var o=t-e,a=r-i;return Hr(s,function(l){return i+((l-e)/o*a||0)})},IR=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=zt(e),a={},l,u,c,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Zt(e)&&!Zt(t)){for(c=[],f=e.length,h=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return c[_](g-_)},i=t}else r||(e=ws(Zt(e)?[]:{},e));if(!c){for(l in t)Xp.call(a,e,l,"get",t[l]);s=function(g){return $p(g,a)||(o?e.p:e)}}}return Hr(i,s)},yg=function(e,t,i){var r=e.labels,s=Xn,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Pn=function(e,t,i){var r=e.vars,s=r[t],o=dt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Dr.length&&qu(),a&&(dt=a),c=l?s.apply(u,l):s.call(u),dt=o,c},ma=function(e){return Or(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Kt),e.progress()<1&&Pn(e,"onInterrupt"),e},lo,Jx=[],ey=function(e){if(e)if(e=!e.name&&e.default||e,zp()||e.headless){var t=e.name,i=Mt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:$a,render:$p,add:Xp,kill:ZR,modifier:KR,rawVars:0},o={targetTest:0,get:0,getSetter:qp,aliases:{},register:0};if(ko(),e!==r){if(wn[t])return;Kn(r,Kn($u(e,s),o)),ws(r.prototype,ws(s,$u(e,o))),wn[r.prop=t]=r,e.targetTest&&(yu.push(r),Hp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Fx(t,r),e.register&&e.register(yn,r,vn)}else Jx.push(e)},tt=255,_a={aqua:[0,tt,tt],lime:[0,tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,tt],navy:[0,0,128],white:[tt,tt,tt],olive:[128,128,0],yellow:[tt,tt,0],orange:[tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[tt,0,0],pink:[tt,192,203],cyan:[0,tt,tt],transparent:[tt,tt,tt,0]},Lf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*tt+.5|0},ty=function(e,t,i){var r=e?er(e)?[e>>16,e>>8&tt,e&tt]:0:_a.black,s,o,a,l,u,c,f,h,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),_a[e])r=_a[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&tt,r&tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&tt,e&tt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(xh),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Lf(l+1/3,s,o),r[1]=Lf(l,s,o),r[2]=Lf(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Lx),i&&r.length<4&&(r[3]=1),r}else r=e.match(xh)||_a.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/tt,o=r[1]/tt,a=r[2]/tt,f=Math.max(s,o,a),h=Math.min(s,o,a),c=(f+h)/2,f===h?l=u=0:(p=f-h,u=c>.5?p/(2-f-h):p/(f+h),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},ny=function(e){var t=[],i=[],r=-1;return e.split(Nr).forEach(function(s){var o=s.match(ao)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},Sg=function(e,t,i){var r="",s=(e+r).match(Nr),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(h){return(h=ty(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=ny(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Nr,"1").split(ao),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Nr),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},Nr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in _a)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),FR=/hsl[a]?\(/,iy=function(e){var t=e.join(" "),i;if(Nr.lastIndex=0,Nr.test(t))return i=FR.test(t),e[1]=Sg(e[1],i),e[0]=Sg(e[0],i,ny(e[1])),!0},Za,Cn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,h,p,g=function _(m){var d=n()-r,v=m===!0,x,y,C,A;if((d>e||d<0)&&(i+=d-t),r+=d,C=r-i,x=C-o,(x>0||v)&&(A=++f.frame,h=C-f.time*1e3,f.time=C=C/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=u(_)),y)for(p=0;p<a.length;p++)a[p](C,h,A,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Ux&&(!yh&&zp()&&(_i=yh=window,Bp=_i.document||{},Un.gsap=yn,(_i.gsapVersions||(_i.gsapVersions=[])).push(yn.version),Ix(Yu||_i.GreenSockGlobals||!_i.gsap&&_i||{}),Jx.forEach(ey)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Za=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Za=0,u=$a},lagSmoothing:function(m,d){e=m||1/0,t=Math.min(d||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,d,v){var x=d?function(y,C,A,T){m(y,C,A,T),f.remove(x)}:m;return f.remove(m),a[v?"unshift":"push"](x),ko(),x},remove:function(m,d){~(d=a.indexOf(m))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},f}(),ko=function(){return!Za&&Cn.wake()},ze={},OR=/^[\d.\-M][\d.\-,\s]/,kR=/["']/g,zR=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(kR,"").trim():+u,r=l.substr(a+1).trim();return t},BR=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},VR=function(e){var t=(e+"").split("("),i=ze[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[zR(t[1])]:BR(e).split(",").map(Bx)):ze._CE&&OR.test(e)?ze._CE("",e):i},ry=function(e){return function(t){return 1-e(1-t)}},sy=function n(e,t){for(var i=e._first,r;i;)i instanceof tn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},_s=function(e,t){return e&&(Mt(e)?e:ze[e]||VR(e))||t},bs=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return gn(e,function(a){ze[a]=Un[a]=s,ze[o=a.toLowerCase()]=i;for(var l in s)ze[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ze[a+"."+l]=s[l]}),s},oy=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Df=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/vh*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*mR((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:oy(a);return s=vh/s,l.config=function(u,c){return n(e,u,c)},l},Nf=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:oy(i);return r.config=function(s){return n(e,s)},r};gn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;bs(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ze.Linear.easeNone=ze.none=ze.Linear.easeIn;bs("Elastic",Df("in"),Df("out"),Df());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};bs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);bs("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});bs("Circ",function(n){return-(Px(1-n*n)-1)});bs("Sine",function(n){return n===1?1:-pR(n*dR)+1});bs("Back",Nf("in"),Nf("out"),Nf());ze.SteppedEase=ze.steps=Un.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-rt;return function(a){return((r*dl(0,o,a)|0)+s)*i}}};Io.ease=ze["quad.out"];gn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Gp+=n+","+n+"Params,"});var ay=function(e,t){this.id=hR++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:kx,this.set=t?t.getSetter:qp},Qa=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Oo(this,+t.duration,1,1),this.data=t.data,dt&&(this._ctx=dt,dt.data.push(this)),Za||Cn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Oo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(ko(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Tc(this,i),!s._dp||s.parent||Gx(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&xi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===rt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),zx(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+vg(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+vg(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Fo(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-rt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Ku(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-rt?0:this._rts,this.totalTime(dl(-Math.abs(this._delay),this._tDur,s),r!==!1),Ec(this),MR(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ko(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==rt&&(this._tTime-=rt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&xi(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(_n(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ku(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=vR);var r=Kt;return Kt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Kt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,xg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,xg(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Bn(this,i),_n(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,_n(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-rt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-rt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-rt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=Mt(i)?i:Vx,a=function(){var u=r.then;r.then=null,Mt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){ma(this)},n}();Kn(Qa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-rt,_prom:0,_ps:!1,_rts:1});var tn=function(n){Rx(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=_n(i.sortChildren),mt&&xi(i.parent||mt,Oi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Wx(Oi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Ca(0,arguments,this),this},t.from=function(r,s,o){return Ca(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Ca(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Aa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Rt(r,s,Bn(this,o),1),this},t.call=function(r,s,o){return xi(this,Rt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Rt(r,o,Bn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Aa(o).immediateRender=_n(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,Aa(a).immediateRender=_n(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Ot(r),f=this._zTime<0!=r<0&&(this._initted||!u),h,p,g,_,m,d,v,x,y,C,A,T;if(this!==mt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,y=this._start,x=this._ts,d=!x,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=Ot(c%m),c===l?(_=this._repeat,h=u):(_=~~(c/m),_&&_===c/m&&(h=u,_--),h>u&&(h=u)),C=Fo(this._tTime,m),!a&&this._tTime&&C!==_&&this._tTime-C*m-this._dur<=0&&(C=_),A&&_&1&&(h=u-h,T=1),_!==C&&!this._lock){var R=A&&C&1,S=R===(A&&_&1);if(_<C&&(R=!R),a=R?0:c%u?u:c,this._lock=1,this.render(a||(T?0:Ot(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Pn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,S&&(this._lock=2,a=R?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;sy(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=AR(this,Ot(a),Ot(h)),v&&(c-=h-(h=v._start))),this._tTime=c,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!_&&(Pn(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||h>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!d){v=0,g&&(c+=this._zTime=-rt);break}}p=g}else{p=this._last;for(var M=r<0?r:h;p;){if(g=p._prev,(p._act||M<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(M-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(M-p._start)*p._ts,s,o||Kt&&(p._initted||p._startAt)),h!==this._time||!this._ts&&!d){v=0,g&&(c+=this._zTime=M?-rt:rt);break}}p=g}}if(v&&!s&&(this.pause(),v.render(h>=a?0:-rt)._zTime=h>=a?1:-1,this._ts))return this._start=y,Ec(this),this.render(r,s,o);this._onUpdate&&!s&&Pn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Or(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Pn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(er(s)||(s=Bn(this,s,r)),!(r instanceof Qa)){if(Zt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(zt(r))return this.addLabel(r,s);if(Mt(r))r=Rt.delayedCall(0,r);else return this}return this!==r?xi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Xn);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Rt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return zt(r)?this.removeLabel(r):Mt(r)?this.killTweensOf(r):(Mc(this,r),r===this._recent&&(this._recent=this._last),ms(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(Cn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Bn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Rt.delayedCall(0,s||$a,o);return a.data="isPause",this._hasPause=1,xi(this,a,Bn(this,r))},t.removePause=function(r){var s=this._first;for(r=Bn(this,r);s;)s._start===r&&s.data==="isPause"&&Or(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)xr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=jn(r),l=this._first,u=er(s),c;l;)l instanceof Rt?xR(l._targets,a)&&(u?(!xr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Bn(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,h=l.immediateRender,p,g=Rt.to(o,Kn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||rt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==m&&Oo(g,m,0,1).render(g._time,!0,!0),p=1}c&&c.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Kn({startAt:{time:Bn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),yg(this,Bn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),yg(this,Bn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+rt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return ms(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ms(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Xn,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,xi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Oo(o,o===mt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(mt._ts&&(zx(mt,Ku(r,mt)),Ox=Cn.frame),Cn.frame>=_g){_g+=Dn.autoSleep||120;var s=mt._first;if((!s||!s._ts)&&Dn.autoSleep&&Cn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Cn.sleep()}}},e}(Qa);Kn(tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var HR=function(e,t,i,r,s,o,a){var l=new vn(this._pt,e,t,0,1,hy,null,s),u=0,c=0,f,h,p,g,_,m,d,v;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=Ka(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),h=i.match(Pf)||[];f=Pf.exec(r);)g=f[0],_=r.substring(u,f.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?xo(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},u=Pf.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(Dx.test(r)||d)&&(l.e=0),this._pt=l,l},Xp=function(e,t,i,r,s,o,a,l,u,c){Mt(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:Mt(f)?u?e[t.indexOf("set")||!Mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,p=Mt(f)?u?YR:fy:Yp,g;if(zt(r)&&(~r.indexOf("random(")&&(r=Ka(r)),r.charAt(1)==="="&&(g=xo(h,r)+($t(h)||0),(g||g===0)&&(r=g))),!c||h!==r||Ch)return!isNaN(h*r)&&r!==""?(g=new vn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?$R:dy,0,p),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&Vp(t,r),HR.call(this,e,t,h,r,p,l||Dn.stringFilter,u))},GR=function(e,t,i,r,s){if(Mt(e)&&(e=Ra(e,s,t,i,r)),!Ci(e)||e.style&&e.nodeType||Zt(e)||bx(e))return zt(e)?Ra(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Ra(e[a],s,t,i,r);return o},ly=function(e,t,i,r,s,o){var a,l,u,c;if(wn[e]&&(a=new wn[e]).init(s,a.rawVars?t[e]:GR(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new vn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==lo))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},xr,Ch,jp=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,h=r.keyframes,p=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,d=e.parent,v=d&&d.data==="nested"?d.vars.targets:m,x=e._overwrite==="auto"&&!Op,y=e.timeline,C,A,T,R,S,M,b,z,F,j,Y,G,q;if(y&&(!h||!s)&&(s="none"),e._ease=_s(s,Io.ease),e._yEase=f?ry(_s(f===!0?s:f,Io.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!y&&!!r.runBackwards,!y||h&&!r.stagger){if(z=m[0]?ps(m[0]).harness:0,G=z&&r[z.prop],C=$u(r,Hp),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!p?_.render(-1,!0):_.revert(c&&g?xu:gR),_._lazy=0),o){if(Or(e._startAt=Rt.set(m,Kn({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&_n(l),startAt:null,delay:0,onUpdate:u&&function(){return Pn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kt||!a&&!p)&&e._startAt.revert(xu),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!_){if(t&&(a=!1),T=Kn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&_n(l),immediateRender:a,stagger:0,parent:d},C),G&&(T[z.prop]=G),Or(e._startAt=Rt.set(m,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kt?e._startAt.revert(xu):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,rt,rt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&_n(l)||l&&!g,A=0;A<m.length;A++){if(S=m[A],b=S._gsap||Wp(m)[A]._gsap,e._ptLookup[A]=j={},Sh[b.id]&&Dr.length&&qu(),Y=v===m?A:v.indexOf(S),z&&(F=new z).init(S,G||C,e,Y,v)!==!1&&(e._pt=R=new vn(e._pt,S,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(L){j[L]=R}),F.priority&&(M=1)),!z||G)for(T in C)wn[T]&&(F=ly(T,C,e,Y,S,v))?F.priority&&(M=1):j[T]=R=Xp.call(e,S,T,"get",C[T],Y,v,0,r.stringFilter);e._op&&e._op[A]&&e.kill(S,e._op[A]),x&&e._pt&&(xr=e,mt.killTweensOf(S,j,e.globalTime(t)),q=!e.parent,xr=0),e._pt&&l&&(Sh[b.id]=1)}M&&py(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!q,h&&t<=0&&y.render(Xn,!0,!0)},WR=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,h,p;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(c=h[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Ch=1,e.vars[t]="+=0",jp(e,a),Ch=0,l?qa(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)f=u[p],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=Tt(i)+$t(f.e)),f.b&&(f.b=c.s+$t(f.b))},XR=function(e,t){var i=e[0]?ps(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=ws({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},jR=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Zt(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ra=function(e,t,i,r,s){return Mt(e)?e.call(t,i,r,s):zt(e)&&~e.indexOf("random(")?Ka(e):e},uy=Gp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",cy={};gn(uy+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return cy[n]=1});var Rt=function(n){Rx(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Aa(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,v=r.parent||mt,x=(Zt(i)||bx(i)?er(i[0]):"length"in r)?[i]:jn(i),y,C,A,T,R,S,M,b;if(a._targets=x.length?Wp(x):qa("GSAP target "+i+" not found. https://gsap.com",!Dn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||h||eu(u)||eu(c)){if(r=a.vars,y=a.timeline=new tn({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:x}),y.kill(),y.parent=y._dp=Oi(a),y._start=0,h||eu(u)||eu(c)){if(T=x.length,M=h&&qx(h),Ci(h))for(R in h)~uy.indexOf(R)&&(b||(b={}),b[R]=h[R]);for(C=0;C<T;C++)A=$u(r,cy),A.stagger=0,d&&(A.yoyoEase=d),b&&ws(A,b),S=x[C],A.duration=+Ra(u,Oi(a),C,S,x),A.delay=(+Ra(c,Oi(a),C,S,x)||0)-a._delay,!h&&T===1&&A.delay&&(a._delay=c=A.delay,a._start+=c,A.delay=0),y.to(S,A,M?M(C,S,x):0),y._ease=ze.none;y.duration()?u=c=0:a.timeline=0}else if(g){Aa(Kn(y.vars.defaults,{ease:"none"})),y._ease=_s(g.ease||r.ease||"none");var z=0,F,j,Y;if(Zt(g))g.forEach(function(G){return y.to(x,G,">")}),y.duration();else{A={};for(R in g)R==="ease"||R==="easeEach"||jR(R,g[R],A,g.easeEach);for(R in A)for(F=A[R].sort(function(G,q){return G.t-q.t}),z=0,C=0;C<F.length;C++)j=F[C],Y={ease:j.e,duration:(j.t-(C?F[C-1].t:0))/100*u},Y[R]=j.v,y.to(x,Y,z),z+=Y.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return p===!0&&!Op&&(xr=Oi(a),mt.killTweensOf(x),xr=0),xi(v,Oi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!g&&a._start===Ot(v._time)&&_n(f)&&ER(Oi(a))&&v.data!=="nested")&&(a._tTime=-rt,a.render(Math.max(0,-c)||0)),m&&Wx(Oi(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-rt&&!c?l:r<rt?0:r,h,p,g,_,m,d,v,x,y;if(!u)wR(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(h=f,x=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(h=Ot(f%_),f===l?(g=this._repeat,h=u):(g=~~(f/_),g&&g===Ot(f/_)&&(h=u,g--),h>u&&(h=u)),d=this._yoyo&&g&1,d&&(y=this._yEase,h=u-h),m=Fo(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(x&&this._yEase&&sy(x,d),this.vars.repeatRefresh&&!d&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(Ot(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Xx(this,c?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(h/u),this._from&&(this.ratio=v=1-v),h&&!a&&!s&&!g&&(Pn(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Mh(this,r,s,o),Pn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Pn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&Mh(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Or(this,1),!s&&!(c&&!a)&&(f||a||d)&&(Pn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Za||Cn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||jp(this,u),c=this._ease(u/this._dur),WR(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Tc(this,0),this.parent||Hx(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ma(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,xr&&xr.vars.overwrite!==!0)._first||ma(this),this.parent&&o!==this.timeline.totalDuration()&&Oo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?jn(r):a,u=this._ptLookup,c=this._pt,f,h,p,g,_,m,d;if((!s||s==="all")&&SR(a,l))return s==="all"&&(this._pt=0),ma(this);for(f=this._op=this._op||[],s!=="all"&&(zt(s)&&(_={},gn(s,function(v){return _[v]=1}),s=_),s=XR(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){h=u[d],s==="all"?(f[d]=s,g=h,p={}):(p=f[d]=f[d]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Mc(this,m,"_pt"),delete h[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&c&&ma(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ca(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Ca(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return mt.killTweensOf(r,s,o)},e}(Qa);Kn(Rt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});gn("staggerTo,staggerFrom,staggerFromTo",function(n){Rt[n]=function(){var e=new tn,t=Th.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Yp=function(e,t,i){return e[t]=i},fy=function(e,t,i){return e[t](i)},YR=function(e,t,i,r){return e[t](r.fp,i)},qR=function(e,t,i){return e.setAttribute(t,i)},qp=function(e,t){return Mt(e[t])?fy:kp(e[t])&&e.setAttribute?qR:Yp},dy=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},$R=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},hy=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},$p=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},KR=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},ZR=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Mc(this,t,"_pt"):t.dep||(i=1),t=r;return!i},QR=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},py=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},vn=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||dy,this.d=l||this,this.set=u||Yp,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=QR,this.m=i,this.mt=s,this.tween=r},n}();gn(Gp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Hp[n]=1});Un.TweenMax=Un.TweenLite=Rt;Un.TimelineLite=Un.TimelineMax=tn;mt=new tn({sortChildren:!1,defaults:Io,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Dn.stringFilter=iy;var gs=[],Su={},JR=[],Mg=0,eP=0,Uf=function(e){return(Su[e]||JR).map(function(t){return t()})},Rh=function(){var e=Date.now(),t=[];e-Mg>2&&(Uf("matchMediaInit"),gs.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=_i.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Uf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Mg=e,Uf("matchMedia"))},my=function(){function n(t,i){this.selector=i&&wh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=eP++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Mt(i)&&(s=r,r=i,i=Mt);var o=this,a=function(){var u=dt,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=wh(s)),dt=o,f=r.apply(o,arguments),Mt(f)&&o._r.push(f),dt=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===Mt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=dt;dt=null,i(this),dt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Rt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof tn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Rt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=gs.length;o--;)gs[o].id===this.id&&gs.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),tP=function(){function n(t){this.contexts=[],this.scope=t,dt&&dt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Ci(i)||(i={matches:i});var o=new my(0,s||this.scope),a=o.conditions={},l,u,c;dt&&!o.selector&&(o.selector=dt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=_i.matchMedia(i[u]),l&&(gs.indexOf(o)<0&&gs.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Rh):l.addEventListener("change",Rh)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Zu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return ey(r)})},timeline:function(e){return new tn(e)},getTweensOf:function(e,t){return mt.getTweensOf(e,t)},getProperty:function(e,t,i,r){zt(e)&&(e=jn(e)[0]);var s=ps(e||{}).get,o=i?Vx:Bx;return i==="native"&&(i=""),e&&(t?o((wn[t]&&wn[t].get||s)(e,t,i,r)):function(a,l,u){return o((wn[a]&&wn[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=jn(e),e.length>1){var r=e.map(function(c){return yn.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=wn[t],a=ps(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;lo._pt=0,f.init(e,i?c+i:c,lo,0,[e]),f.render(1,f),lo._pt&&$p(1,lo)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=yn.to(e,ws((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=_s(e.ease,Io.ease)),gg(Io,e||{})},config:function(e){return gg(Dn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!wn[a]&&!Un[a]&&qa(t+" effect requires "+a+" plugin.")}),bf[t]=function(a,l,u){return i(jn(a),Kn(l||{},s),u)},o&&(tn.prototype[t]=function(a,l,u){return this.add(bf[t](a,Ci(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){ze[e]=_s(t)},parseEase:function(e,t){return arguments.length?_s(e,t):ze},getById:function(e){return mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new tn(e),r,s;for(i.smoothChildTiming=_n(e.smoothChildTiming),mt.remove(i),i._dp=0,i._time=i._tTime=mt._time,r=mt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Rt&&r.vars.onComplete===r._targets[0]))&&xi(i,r,r._start-r._delay),r=s;return xi(mt,i,0),i},context:function(e,t){return e?new my(e,t):dt},matchMedia:function(e){return new tP(e)},matchMediaRefresh:function(){return gs.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Rh()},addEventListener:function(e,t){var i=Su[e]||(Su[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Su[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:NR,wrapYoyo:UR,distribute:qx,random:Kx,snap:$x,normalize:DR,getUnit:$t,clamp:RR,splitColor:ty,toArray:jn,selector:wh,mapRange:Qx,pipe:bR,unitize:LR,interpolate:IR,shuffle:Yx},install:Ix,effects:bf,ticker:Cn,updateRoot:tn.updateRoot,plugins:wn,globalTimeline:mt,core:{PropTween:vn,globals:Fx,Tween:Rt,Timeline:tn,Animation:Qa,getCache:ps,_removeLinkedListItem:Mc,reverting:function(){return Kt},context:function(e){return e&&dt&&(dt.data.push(e),e._ctx=dt),dt},suppressOverwrites:function(e){return Op=e}}};gn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Zu[n]=Rt[n]});Cn.add(tn.updateRoot);lo=Zu.to({},{duration:0});var nP=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},iP=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=nP(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},If=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(zt(s)&&(l={},gn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}iP(a,s)}}}},yn=Zu.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Kt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},If("roundProps",Ah),If("modifiers"),If("snap",$x))||Zu;Rt.version=tn.version=yn.version="3.12.5";Ux=1;zp()&&ko();ze.Power0;ze.Power1;ze.Power2;ze.Power3;ze.Power4;ze.Linear;ze.Quad;ze.Cubic;ze.Quart;ze.Quint;ze.Strong;ze.Elastic;ze.Back;ze.SteppedEase;ze.Bounce;ze.Sine;ze.Expo;ze.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Eg,yr,yo,Kp,cs,Tg,Zp,rP=function(){return typeof window<"u"},tr={},ns=180/Math.PI,So=Math.PI/180,Ys=Math.atan2,wg=1e8,Qp=/([A-Z])/g,sP=/(left|right|width|margin|padding|x)/i,oP=/[\s,\(]\S/,Si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ph=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},aP=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},lP=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},uP=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},_y=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},gy=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},cP=function(e,t,i){return e.style[t]=i},fP=function(e,t,i){return e.style.setProperty(t,i)},dP=function(e,t,i){return e._gsap[t]=i},hP=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},pP=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},mP=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},gt="transform",xn=gt+"Origin",_P=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in tr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Si[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=zi(r,a)}):this.tfm[e]=o.x?o[e]:zi(r,e),e===xn&&(this.tfm.zOrigin=o.zOrigin);else return Si.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(gt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(xn,t,"")),e=gt}(s||t)&&this.props.push(e,t,s[e])},vy=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},gP=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Qp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Zp(),(!s||!s.isStart)&&!i[gt]&&(vy(i),r.zOrigin&&i[xn]&&(i[xn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},xy=function(e,t){var i={target:e,props:[],revert:gP,save:_P};return e._gsap||yn.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},yy,bh=function(e,t){var i=yr.createElementNS?yr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):yr.createElement(e);return i&&i.style?i:yr.createElement(e)},wi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Qp,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,zo(t)||t,1)||""},Ag="O,Moz,ms,Ms,Webkit".split(","),zo=function(e,t,i){var r=t||cs,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Ag[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Ag[o]:"")+e},Lh=function(){rP()&&window.document&&(Eg=window,yr=Eg.document,yo=yr.documentElement,cs=bh("div")||{style:{}},bh("div"),gt=zo(gt),xn=gt+"Origin",cs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",yy=!!zo("perspective"),Zp=yn.core.reverting,Kp=1)},Ff=function n(e){var t=bh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(yo.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),yo.removeChild(t),this.style.cssText=s,o},Cg=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Sy=function(e){var t;try{t=e.getBBox()}catch{t=Ff.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ff||(t=Ff.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Cg(e,["x","cx","x1"])||0,y:+Cg(e,["y","cy","y1"])||0,width:0,height:0}:t},My=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Sy(e))},As=function(e,t){if(t){var i=e.style,r;t in tr&&t!==xn&&(t=gt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Qp,"-$1").toLowerCase())):i.removeAttribute(t)}},Sr=function(e,t,i,r,s,o){var a=new vn(e._pt,t,i,0,1,o?gy:_y);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Rg={deg:1,rad:1,turn:1},vP={grid:1,flex:1},kr=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=cs.style,l=sP.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",p=r==="%",g,_,m,d;if(r===o||!s||Rg[r]||Rg[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),d=e.getCTM&&My(e),(p||o==="%")&&(tr[t]||~t.indexOf("adius")))return g=d?e.getBBox()[l?"width":"height"]:e[c],Tt(p?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,d&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===yr||!_.appendChild)&&(_=yr.body),m=_._gsap,m&&p&&m.width&&l&&m.time===Cn.time&&!m.uncache)return Tt(s/m.width*f);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+r,g=e[c],v?e.style[t]=v:As(e,t)}else(p||o==="%")&&!vP[wi(_,"display")]&&(a.position=wi(e,"position")),_===e&&(a.position="static"),_.appendChild(cs),g=cs[c],_.removeChild(cs),a.position="absolute";return l&&p&&(m=ps(_),m.time=Cn.time,m.width=_[c]),Tt(h?g*s/f:g&&s?f/g*s:0)},zi=function(e,t,i,r){var s;return Kp||Lh(),t in Si&&t!=="transform"&&(t=Si[t],~t.indexOf(",")&&(t=t.split(",")[0])),tr[t]&&t!=="transform"?(s=el(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ju(wi(e,xn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Qu[t]&&Qu[t](e,t,i)||wi(e,t)||kx(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?kr(e,t,s,i)+i:s},xP=function(e,t,i,r){if(!i||i==="none"){var s=zo(t,e,1),o=s&&wi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=wi(e,"borderTopColor"))}var a=new vn(this._pt,e.style,t,0,1,hy),l=0,u=0,c,f,h,p,g,_,m,d,v,x,y,C;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=wi(e,t)||r,_?e.style[t]=_:As(e,t)),c=[i,r],iy(c),i=c[0],r=c[1],h=i.match(ao)||[],C=r.match(ao)||[],C.length){for(;f=ao.exec(r);)m=f[0],v=r.substring(l,f.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=h[u++]||"")&&(p=parseFloat(_)||0,y=_.substr((p+"").length),m.charAt(1)==="="&&(m=xo(p,m)+y),d=parseFloat(m),x=m.substr((d+"").length),l=ao.lastIndex-x.length,x||(x=x||Dn.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(p=kr(e,t,_,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:d-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?gy:_y;return Dx.test(r)&&(a.e=0),this._pt=a,a},Pg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},yP=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Pg[i]||i,t[1]=Pg[r]||r,t.join(" ")},SP=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],tr[a]&&(l=1,a=a==="transformOrigin"?xn:gt),As(i,a);l&&(As(i,gt),o&&(o.svg&&i.removeAttribute("transform"),el(i,1),o.uncache=1,vy(r)))}},Qu={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new vn(e._pt,t,i,0,0,SP);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Ja=[1,0,0,1,0,0],Ey={},Ty=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},bg=function(e){var t=wi(e,gt);return Ty(t)?Ja:t.substr(7).match(Lx).map(Tt)},Jp=function(e,t){var i=e._gsap||ps(e),r=e.style,s=bg(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ja:s):(s===Ja&&!e.offsetParent&&e!==yo&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,yo.appendChild(e)),s=bg(e),l?r.display=l:As(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):yo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Dh=function(e,t,i,r,s,o){var a=e._gsap,l=s||Jp(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],d=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,C=parseFloat(x[1])||0,A,T,R,S;i?l!==Ja&&(T=p*m-g*_)&&(R=y*(m/T)+C*(-_/T)+(_*v-m*d)/T,S=y*(-g/T)+C*(p/T)-(p*v-g*d)/T,y=R,C=S):(A=Sy(e),y=A.x+(~x[0].indexOf("%")?y/100*A.width:y),C=A.y+(~(x[1]||x[0]).indexOf("%")?C/100*A.height:C)),r||r!==!1&&a.smooth?(d=y-u,v=C-c,a.xOffset=f+(d*p+v*_)-d,a.yOffset=h+(d*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[xn]="0px 0px",o&&(Sr(o,a,"xOrigin",u,y),Sr(o,a,"yOrigin",c,C),Sr(o,a,"xOffset",f,a.xOffset),Sr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+C)},el=function(e,t){var i=e._gsap||new ay(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=wi(e,xn)||"0",c,f,h,p,g,_,m,d,v,x,y,C,A,T,R,S,M,b,z,F,j,Y,G,q,L,$,Z,se,me,ke,W,te;return c=f=h=_=m=d=v=x=y=0,p=g=1,i.svg=!!(e.getCTM&&My(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[gt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[gt]!=="none"?l[gt]:"")),r.scale=r.rotate=r.translate="none"),T=Jp(e,i.svg),i.svg&&(i.uncache?(L=e.getBBox(),u=i.xOrigin-L.x+"px "+(i.yOrigin-L.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),Dh(e,q||u,!!q||i.originIsAbsolute,i.smooth!==!1,T)),C=i.xOrigin||0,A=i.yOrigin||0,T!==Ja&&(b=T[0],z=T[1],F=T[2],j=T[3],c=Y=T[4],f=G=T[5],T.length===6?(p=Math.sqrt(b*b+z*z),g=Math.sqrt(j*j+F*F),_=b||z?Ys(z,b)*ns:0,v=F||j?Ys(F,j)*ns+_:0,v&&(g*=Math.abs(Math.cos(v*So))),i.svg&&(c-=C-(C*b+A*F),f-=A-(C*z+A*j))):(te=T[6],ke=T[7],Z=T[8],se=T[9],me=T[10],W=T[11],c=T[12],f=T[13],h=T[14],R=Ys(te,me),m=R*ns,R&&(S=Math.cos(-R),M=Math.sin(-R),q=Y*S+Z*M,L=G*S+se*M,$=te*S+me*M,Z=Y*-M+Z*S,se=G*-M+se*S,me=te*-M+me*S,W=ke*-M+W*S,Y=q,G=L,te=$),R=Ys(-F,me),d=R*ns,R&&(S=Math.cos(-R),M=Math.sin(-R),q=b*S-Z*M,L=z*S-se*M,$=F*S-me*M,W=j*M+W*S,b=q,z=L,F=$),R=Ys(z,b),_=R*ns,R&&(S=Math.cos(R),M=Math.sin(R),q=b*S+z*M,L=Y*S+G*M,z=z*S-b*M,G=G*S-Y*M,b=q,Y=L),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=Tt(Math.sqrt(b*b+z*z+F*F)),g=Tt(Math.sqrt(G*G+te*te)),R=Ys(Y,G),v=Math.abs(R)>2e-4?R*ns:0,y=W?1/(W<0?-W:W):0),i.svg&&(q=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Ty(wi(e,gt)),q&&e.setAttribute("transform",q))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Tt(p),i.scaleY=Tt(g),i.rotation=Tt(_)+a,i.rotationX=Tt(m)+a,i.rotationY=Tt(d)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[xn]=Ju(u)),i.xOffset=i.yOffset=0,i.force3D=Dn.force3D,i.renderTransform=i.svg?EP:yy?wy:MP,i.uncache=0,i},Ju=function(e){return(e=e.split(" "))[0]+" "+e[1]},Of=function(e,t,i){var r=$t(t);return Tt(parseFloat(t)+parseFloat(kr(e,"x",i+"px",r)))+r},MP=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,wy(e,t)},Kr="0deg",la="0px",Zr=") ",wy=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,h=i.skewX,p=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,d=i.force3D,v=i.target,x=i.zOrigin,y="",C=d==="auto"&&e&&e!==1||d===!0;if(x&&(f!==Kr||c!==Kr)){var A=parseFloat(c)*So,T=Math.sin(A),R=Math.cos(A),S;A=parseFloat(f)*So,S=Math.cos(A),o=Of(v,o,T*S*-x),a=Of(v,a,-Math.sin(A)*-x),l=Of(v,l,R*S*-x+x)}m!==la&&(y+="perspective("+m+Zr),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(C||o!==la||a!==la||l!==la)&&(y+=l!==la||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Zr),u!==Kr&&(y+="rotate("+u+Zr),c!==Kr&&(y+="rotateY("+c+Zr),f!==Kr&&(y+="rotateX("+f+Zr),(h!==Kr||p!==Kr)&&(y+="skew("+h+", "+p+Zr),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Zr),v.style[gt]=y||"translate(0, 0)"},EP=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,h=i.scaleY,p=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,d=i.yOffset,v=i.forceCSS,x=parseFloat(o),y=parseFloat(a),C,A,T,R,S;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=So,u*=So,C=Math.cos(l)*f,A=Math.sin(l)*f,T=Math.sin(l-u)*-h,R=Math.cos(l-u)*h,u&&(c*=So,S=Math.tan(u-c),S=Math.sqrt(1+S*S),T*=S,R*=S,c&&(S=Math.tan(c),S=Math.sqrt(1+S*S),C*=S,A*=S)),C=Tt(C),A=Tt(A),T=Tt(T),R=Tt(R)):(C=f,R=h,A=T=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=kr(p,"x",o,"px"),y=kr(p,"y",a,"px")),(g||_||m||d)&&(x=Tt(x+g-(g*C+_*T)+m),y=Tt(y+_-(g*A+_*R)+d)),(r||s)&&(S=p.getBBox(),x=Tt(x+r/100*S.width),y=Tt(y+s/100*S.height)),S="matrix("+C+","+A+","+T+","+R+","+x+","+y+")",p.setAttribute("transform",S),v&&(p.style[gt]=S)},TP=function(e,t,i,r,s){var o=360,a=zt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ns:1),u=l-r,c=r+u+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*wg)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*wg)%o-~~(u/o)*o)),e._pt=h=new vn(e._pt,t,i,r,u,aP),h.e=c,h.u="deg",e._props.push(i),h},Lg=function(e,t){for(var i in t)e[i]=t[i];return e},wP=function(e,t,i){var r=Lg({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,h,p,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[gt]=t,a=el(i,1),As(i,gt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[gt],o[gt]=t,a=el(i,1),o[gt]=u);for(l in tr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=$t(u),g=$t(c),f=p!==g?kr(i,l,u,g):parseFloat(u),h=parseFloat(c),e._pt=new vn(e._pt,a,l,f,h-f,Ph),e._pt.u=g||0,e._props.push(l));Lg(a,r)};gn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Qu[e>1?"border"+n:n]=function(a,l,u,c,f){var h,p;if(arguments.length<4)return h=o.map(function(g){return zi(a,g,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(g,_){return p[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,p,f)}});var Ay={name:"css",register:Lh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,h,p,g,_,m,d,v,x,y,C,A,T,R;Kp||Lh(),this.styles=this.styles||xy(e),R=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(wn[_]&&ly(_,t,i,r,e,s)))){if(p=typeof c,g=Qu[_],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Ka(c)),g)g(this,e,_,c,i)&&(T=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",Nr.lastIndex=0,Nr.test(u)||(m=$t(u),d=$t(c)),d?m!==d&&(u=kr(e,_,u,d)+d):m&&(c+=m),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],zt(u)&&~u.indexOf("random(")&&(u=Ka(u)),$t(u+"")||u==="auto"||(u+=Dn.units[_]||$t(zi(e,_))||""),(u+"").charAt(1)==="="&&(u=zi(e,_))):u=zi(e,_),h=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),f=parseFloat(c),_ in Si&&(_==="autoAlpha"&&(h===1&&zi(e,"visibility")==="hidden"&&f&&(h=0),R.push("visibility",0,a.visibility),Sr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Si[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in tr,x){if(this.styles.save(_),y||(C=e._gsap,C.renderTransform&&!t.parseTransform||el(e,t.parseTransform),A=t.smoothOrigin!==!1&&C.smooth,y=this._pt=new vn(this._pt,a,gt,0,1,C.renderTransform,C,0,-1),y.dep=1),_==="scale")this._pt=new vn(this._pt,C,"scaleY",C.scaleY,(v?xo(C.scaleY,v+f):f)-C.scaleY||0,Ph),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(xn,0,a[xn]),c=yP(c),C.svg?Dh(e,c,0,A,0,this):(d=parseFloat(c.split(" ")[2])||0,d!==C.zOrigin&&Sr(this,C,"zOrigin",C.zOrigin,d),Sr(this,a,_,Ju(u),Ju(c)));continue}else if(_==="svgOrigin"){Dh(e,c,1,A,0,this);continue}else if(_ in Ey){TP(this,C,_,h,v?xo(h,v+c):c);continue}else if(_==="smoothOrigin"){Sr(this,C,"smooth",C.smooth,c);continue}else if(_==="force3D"){C[_]=c;continue}else if(_==="transform"){wP(this,c,e);continue}}else _ in a||(_=zo(_)||_);if(x||(f||f===0)&&(h||h===0)&&!oP.test(c)&&_ in a)m=(u+"").substr((h+"").length),f||(f=0),d=$t(c)||(_ in Dn.units?Dn.units[_]:m),m!==d&&(h=kr(e,_,u,d)),this._pt=new vn(this._pt,x?C:a,_,h,(v?xo(h,v+f):f)-h,!x&&(d==="px"||_==="zIndex")&&t.autoRound!==!1?uP:Ph),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=u,this._pt.r=lP);else if(_ in a)xP.call(this,e,_,u,v?v+c:c);else if(_ in e)this.add(e,_,u||e[_],v?v+c:c,r,s);else if(_!=="parseTransform"){Vp(_,c);continue}x||(_ in a?R.push(_,0,a[_]):R.push(_,1,u||e[_])),o.push(_)}}T&&py(this)},render:function(e,t){if(t.tween._time||!Zp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:zi,aliases:Si,getSetter:function(e,t,i){var r=Si[t];return r&&r.indexOf(",")<0&&(t=r),t in tr&&t!==xn&&(e._gsap.x||zi(e,"x"))?i&&Tg===i?t==="scale"?hP:dP:(Tg=i||{})&&(t==="scale"?pP:mP):e.style&&!kp(e.style[t])?cP:~t.indexOf("-")?fP:qp(e,t)},core:{_removeProperty:As,_getMatrix:Jp}};yn.utils.checkPrefix=zo;yn.core.getStyleSaver=xy;(function(n,e,t,i){var r=gn(n+","+e+","+t,function(s){tr[s]=1});gn(e,function(s){Dn.units[s]="deg",Ey[s]=1}),Si[r[13]]=n+","+e,gn(i,function(s){var o=s.split(":");Si[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");gn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Dn.units[n]="px"});yn.registerPlugin(Ay);var tl=yn.registerPlugin(Ay)||yn;tl.core.Tween;function AP(){const n=_t.useRef(null),e=_t.useRef(null),t=_t.useRef(null),i=[e,t],r=_t.useRef({x:0,y:0});return _t.useEffect(()=>{i.forEach(d=>{const v=tl.quickTo(d.current,"x",{duration:1,ease:"elastic.out(1, 0.3)"}),x=tl.quickTo(d.current,"y",{duration:1,ease:"elastic.out(1, 0.3)"});d.current.addEventListener("mousemove",y=>{const{clientX:C,clientY:A}=y,{height:T,width:R,left:S,top:M}=d.current.getBoundingClientRect(),b=C-(S+R/2),z=A-(M+T/2);v(b),x(z)}),d.current.addEventListener("mouseleave",y=>{v(0),x(0)})});const s=n.current.clientWidth,o=n.current.clientHeight,a=new Ax,l=new An(75,s/o,.1,1e3),u=new wx({alpha:!0});u.setSize(s,o),n.current.appendChild(u.domElement);const f=new Cx().load("/bg.png"),h=new Ai({uniforms:{uTexture:{value:f},uTime:{value:0},uMouse:{value:new Ke(.5,.5)}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D uTexture;
        uniform float uTime;
        uniform vec2 uMouse;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          float dist = distance(uv, uMouse);
          uv.y += sin(uv.x * 10.0 + uTime) * 0.05 * (1.0 - dist * 2.0); // Reduced speed by changing 0.1 to 0.05
          gl_FragColor = texture2D(uTexture, uv);
        }
      `}),p=new Xo(20,18*(o/s)),g=new li(p,h);a.add(g),l.position.z=5;const _=function(){requestAnimationFrame(_),h.uniforms.uTime.value+=.01,h.uniforms.uMouse.value=new Ke(r.current.x,r.current.y),u.render(a,l)};_();const m=d=>{r.current.x=d.clientX/s,r.current.y=1-d.clientY/o};return window.addEventListener("mousemove",m),()=>{window.removeEventListener("mousemove",m),n.current.removeChild(u.domElement)}},[]),O.jsxs("div",{className:"page1 h-screen w-screen bg-black relative",children:[O.jsx("div",{ref:n,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:10}}),O.jsxs("div",{className:"nav z-20 px-10 flex flex-row justify-between items-center h-[9vh] w-full fixed top-0",children:[O.jsx("p",{}),O.jsx("p",{ref:e,className:"head text-[16px] font-normal text-white font-['PP Neue Montreal'] italic p-5 m-3",children:"lm"}),O.jsxs("p",{ref:t,className:"text-white text-[12px]",children:["FR — ",O.jsx("span",{className:"text-sm",children:"©2024"})]})]}),O.jsxs("div",{className:"pg-1-info w-full h-full pointer-events-none absolute z-50 flex justify-center items-center top-0 left-0 flex-col",children:[O.jsx("h1",{className:"text-[32px] italic font-thin text-white w-[12vw] text-center tracking-tighter leading-[25px] block",children:"leopold manguette"}),O.jsx("p",{className:"text-[16px] normal font-normal text-white block relative top-[20vh]",children:"creative developer"})]})]})}var Cy={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Dg=Xi.createContext&&Xi.createContext(Cy),CP=["attr","size","title"];function RP(n,e){if(n==null)return{};var t=PP(n,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function PP(n,e){if(n==null)return{};var t={};for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){if(e.indexOf(i)>=0)continue;t[i]=n[i]}return t}function ec(){return ec=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},ec.apply(this,arguments)}function Ng(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function tc(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ng(Object(t),!0).forEach(function(i){bP(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Ng(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function bP(n,e,t){return e=LP(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function LP(n){var e=DP(n,"string");return typeof e=="symbol"?e:e+""}function DP(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Ry(n){return n&&n.map((e,t)=>Xi.createElement(e.tag,tc({key:t},e.attr),Ry(e.child)))}function Py(n){return e=>Xi.createElement(NP,ec({attr:tc({},n.attr)},e),Ry(n.child))}function NP(n){var e=t=>{var{attr:i,size:r,title:s}=n,o=RP(n,CP),a=r||t.size||"1em",l;return t.className&&(l=t.className),n.className&&(l=(l?l+" ":"")+n.className),Xi.createElement("svg",ec({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,o,{className:l,style:tc(tc({color:n.color||t.color},t.style),n.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Xi.createElement("title",null,s),n.children)};return Dg!==void 0?Xi.createElement(Dg.Consumer,null,t=>e(t)):e(Cy)}function UP(n){return Py({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"},child:[]}]})(n)}function IP({children:n}){const e=_t.useRef(null);return _t.useEffect(()=>{const t=tl.quickTo(e.current,"x",{duration:1,ease:"elastic.out(1, 0.3)"}),i=tl.quickTo(e.current,"y",{duration:1,ease:"elastic.out(1, 0.3)"});e.current.addEventListener("mousemove",r=>{const{clientX:s,clientY:o}=r,{height:a,width:l,left:u,top:c}=e.current.getBoundingClientRect(),f=s-(u+l/2),h=o-(c+a/2);t(f),i(h)}),e.current.addEventListener("mouseleave",r=>{t(0),i(0)})},[]),Xi.cloneElement(n,{ref:e})}function FP({bgChanger:n,bgReverseChanger:e}){const[t,i]=_t.useState(0),[r,s]=_t.useState(0),o=f=>{i(f),s(1)},a=()=>{s(0)},l=[{seq:"01",projectName:"Ceser Society",year:"2023",flex:"items-start",margin:"mt-[20%]",media:"https://leopoldmanguette.com/_nuxt/miniature-cesarsociety.CPI5Bb3C.jpg",justify:"-center",banner:"https://leopoldmanguette.com/_nuxt/heading-cesarsociety.Bp3MTP3c.jpg",img:["https://leopoldmanguette.com/_nuxt/cesarsociety_1.BwKbd1zA.jpg","https://leopoldmanguette.com/_nuxt/cesarsociety_2.BVN1p6dI.jpg","https://leopoldmanguette.com/_nuxt/cesarsociety_3.D8-BdixH.jpg","https://leopoldmanguette.com/_nuxt/cesarsociety_4.BM1TVSn8.jpg","https://leopoldmanguette.com/_nuxt/cesarsociety_5.CFr3LaST.jpg","https://leopoldmanguette.com/_nuxt/cesarsociety_6.BaBRCkAd.jpg"],sliderText:"Cesar †",sliderWidth:"200px"},{seq:"02",projectName:"The Pulp",year:"2023",flex:"items-end",margin:"mb-[20%]",media:"https://leopoldmanguette.com/_nuxt/miniature-thepulp.DIOBJvmu.mp4",justify:"-center",banner:"https://leopoldmanguette.com/_nuxt/heading-thepulp.DZY4TRpX.jpg",img:["https://leopoldmanguette.com/_nuxt/thepulp_1.DPmgHnnF.jpg","https://leopoldmanguette.com/_nuxt/thepulp_2.D76Dghed.jpg","https://leopoldmanguette.com/_nuxt/thepulp_3.rGjd71iD.jpg","https://leopoldmanguette.com/_nuxt/thepulp_4.DwQwkVU3.jpg","https://leopoldmanguette.com/_nuxt/thepulp_5.BaCCf8NG.jpg"],sliderText:"The Pulp †",sliderWidth:"430px"},{seq:"03",projectName:"Caesar",year:"2024",flex:"items-start",margin:"mt-[20%]",media:"https://leopoldmanguette.com/_nuxt/miniature-cesar.DznDD4Xt.jpg",justify:"-end",banner:"https://leopoldmanguette.com/_nuxt/heading-cesar.C8UFJHlN.jpg",img:["https://leopoldmanguette.com/_nuxt/cesar_1.CjxXpFtQ.jpg","https://leopoldmanguette.com/_nuxt/cesar_4.B2CkSIOJ.jpg","https://leopoldmanguette.com/_nuxt/cesar_3.D52IiA0w.jpg","https://leopoldmanguette.com/_nuxt/cesar_2.Bs0HxnSy.jpg","https://leopoldmanguette.com/_nuxt/cesar_5.CFu1us47.jpg"],sliderText:"Cesar †",sliderWidth:"200px"},{seq:"04",projectName:"Fitly",year:"2024",flex:"items-end",margin:"mb-[20%]",media:"https://leopoldmanguette.com/_nuxt/miniature-fitly.1XfRDU5K.jpg",justify:"-center",banner:"https://leopoldmanguette.com/_nuxt/heading-fitly.8lB_h6RT.jpg",img:["https://leopoldmanguette.com/_nuxt/cesar_1.CjxXpFtQ.jpg","https://leopoldmanguette.com/_nuxt/cesar_4.B2CkSIOJ.jpg","https://leopoldmanguette.com/_nuxt/cesar_3.D52IiA0w.jpg","https://leopoldmanguette.com/_nuxt/cesar_2.Bs0HxnSy.jpg","https://leopoldmanguette.com/_nuxt/cesar_5.CFu1us47.jpg"],sliderText:"Fitly †",sliderWidth:"160px"}],u=l.map((f,h)=>O.jsx("div",{onClick:()=>{o(h)},className:`w-[50vw] h-[135vh] flex ${f.flex} justify${f.justify} bg-black`,children:O.jsx(IP,{children:O.jsxs("div",{onMouseEnter:()=>{n()},onMouseLeave:()=>{e()},className:`w-[40%] h-[50%] card cursor-pointer block ${f.margin}`,children:[O.jsx("h2",{className:"neue text-[12px] h-[7%] text-white font-semibold block text-right p-1",children:f.seq}),O.jsx("div",{className:'h-[81%] rounded-lg w-full block")]',children:f.media.endsWith(".mp4")||f.media.endsWith(".webm")?O.jsx("video",{src:f.media,autoPlay:!0,loop:!0,muted:!0,className:"w-full h-full rounded-lg"}):O.jsx("img",{src:f.media,alt:f.projectName,className:"w-full h-full rounded-lg object-cover"})}),O.jsxs("div",{className:"h-[12%] w-full flex justify-between items-center px-2 text-white",children:[O.jsx("h2",{className:"text-[15px] tracking-tight font-medium",children:f.projectName}),O.jsxs("p",{className:"text-[13px] font-normal neue",children:["-",f.year]})]})]})})},h)),c=Array.from({length:11},(f,h)=>O.jsx("p",{style:{"--position":h,"--width":`${l[t].sliderWidth}`},className:"text-[32px] slide_item",children:l[t].sliderText},h));return O.jsxs(O.Fragment,{children:[O.jsx("div",{className:"page2 w-screen h-[100%] bg-black flex flex-eow justify-center items-center flex-wrap",children:u}),O.jsxs("div",{style:{"--scale":r},className:"model fixed z-[9999] top-0 left-0 w-screen h-screen origin-top bg-black text-white p-10 pb-20 overflow-auto",children:[O.jsxs("div",{style:{borderWidth:"0.5px"},className:"banner border-solid border-white/40 w-[100%] h-[80vh] bg-black mx-auto rounded-xl relative overflow-hidden",children:[O.jsx("div",{onClick:()=>{a()},style:{borderWidth:"0.3px"},className:"icon w-12 h-12 bg-transparent cursor-pointer border-solid border-white/40 overflow-hidden rounded-full absolute top-4 left-4 flex justify-center items-center",children:O.jsx(UP,{size:"20px",opacity:.8})}),O.jsx("img",{className:"w-full h-[47.19vh]",src:`${l[t].banner}`,alt:"banner#1"}),O.jsxs("div",{className:"w-[100%] h-[32.81vh] flex flex-row",children:[O.jsx("div",{className:"w-[30%] h-full flex items-center px-10",children:O.jsxs("p",{className:"tracking-tighter text-[20px] leading-6 font-light",children:[l[t].projectName,O.jsxs("span",{className:"block",children:["-",l[t].year]})]})}),O.jsxs("div",{className:"w-[70%] h-full flex px-10 justify-center items-start flex-col text-[16px]",children:[O.jsx("p",{className:"tracking-tighter",children:"UX/UI developer"}),O.jsx("p",{className:"tracking-tighter",children:"MERN developer"})]})]})]}),O.jsx("div",{className:"gallery h-full w-full pt-10 px-14 pb-10",children:l[t].img.map((f,h)=>O.jsxs(Xi.Fragment,{children:[O.jsx("img",{className:"w-[63vw] rounded-md my-20 block m-auto",src:`${f}`,alt:`img${h+1}`}),h===1&&O.jsx("div",{style:{borderWidth:"0.5px"},className:"w-[63vw] pan rounded-2xl mx-auto h-[9vh] relative flex border-white/40 border-solid flex-row whitespace-nowrap overflow-hidden items-center",children:c})]},h))})]})]})}function OP({bgChanger:n,bgReverseChanger:e}){const[t,i]=_t.useState(!1),[r,s]=_t.useState(0),o=_t.useRef(null),a=_t.useRef(null),l=h=>{if(a.current&&o.current){const p=o.current.getBoundingClientRect(),g=a.current.clientWidth,_=a.current.clientHeight,m=h.clientX-p.left-g/2,d=h.clientY-p.top-_/2;a.current.style.transform=`translate3d(${m}px, ${d}px, 0)`}};function u(){i(!0),console.log("entered")}function c(){i(!1),console.log("out")}const f=[{seq:"05",name:"Nhast Geo",url:"https://leopoldmanguette.com/_nuxt/miniature-natgeo.CHTeqF7f.jpg"},{seq:"06",name:"Koi Food",url:"https://leopoldmanguette.com/_nuxt/miniature-koifood.BHYzr6G0.jpg"},{seq:"07",name:"Mhasison Dhasdas",url:"https://leopoldmanguette.com/_nuxt/miniature-maisondada.-iu6Eshr.jpg"},{seq:"08",name:"HASdidhass x Ozweego",url:"https://leopoldmanguette.com/_nuxt/miniature-adidas.BAdzdOaA.jpg"},{seq:"09",name:"The MhasndhasLorihasn",url:"https://leopoldmanguette.com/_nuxt/miniature-themandalorian.CUcv5SmN.jpg"}];return O.jsx("div",{className:"page-3 w-screen h-[120vh] bg-black",children:O.jsxs("div",{onMouseEnter:()=>{u()},onMouseLeave:()=>{c()},onMouseMove:h=>{l(h)},ref:o,className:"content pb-[8px] w-[75%] h-full mx-auto relative cursor-pointer",children:[t&&O.jsx("div",{ref:a,className:"moveable pointer-events-none w-1/4 h-[50vh] z-50 absolute overflow-hidden rounded-lg",children:O.jsx("img",{className:"w-full h-full object-fill",src:`${f[r].url}`,alt:""})}),f.map((h,p)=>O.jsx("div",{onMouseLeave:()=>{e()},onMouseEnter:()=>{s(p),n()},className:"layer relative w-full border-t border-solid border-white/40 h-1/5 flex items-center text-white",children:O.jsxs("p",{className:"neue text-[48px] font-thin",children:[O.jsx("span",{className:"text-[16px] mr-3 pl-2",children:h.seq}),h.name]})},p))]})})}function kP(){const n=_t.useRef(null);return _t.useEffect(()=>{const e=n.current.clientWidth,t=n.current.clientHeight,i=new Ax,r=new An(75,e/t,.1,1e3),s=new wx({alpha:!0});s.setSize(e,t),n.current.appendChild(s.domElement);const a=new Cx().load("/bg.png"),l=new Ai({uniforms:{uTexture:{value:a},uTime:{value:0},uMouse:{value:new Ke(.5,.5)}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D uTexture;
        uniform float uTime;
        uniform vec2 uMouse;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          float dist = distance(uv, uMouse);
          uv.y += sin(uv.x * 10.0 + uTime) * 0.05 * (1.0 - dist * 2.0); // Reduced speed by changing 0.1 to 0.05
          gl_FragColor = texture2D(uTexture, uv);
        }
      `}),u=new Xo(10,10*(t/e)),c=new li(u,l);i.add(c),r.position.z=4;const f=function(){requestAnimationFrame(f),l.uniforms.uTime.value+=.03,s.render(i,r)};return f(),()=>{n.current.removeChild(s.domElement)}},[]),O.jsxs("div",{className:"w-screen h-screen bg-black flex items-center justify-center relative",children:[O.jsx("div",{ref:n,style:{width:"70%",height:"80%",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:10}}),O.jsxs("div",{className:"last w-[40%] relative h-[34%] border-lg z-[999]",children:[O.jsx("img",{className:"gif absolute top-[-13%] left-[-6%] w-[13%]",src:"https://leopoldmanguette.com/_nuxt/baby-poldo2.BiNGnQya.png",alt:""}),O.jsxs("div",{className:"absolute p-8 para text-white/60",children:[O.jsxs("p",{className:"mb-4 text-sm",children:[" Hello, je suis  ",O.jsxs("span",{className:"text-white italic relative",children:["Léopold Manguette ",O.jsx("span",{className:"absolute rounded-lg span h-[22vh] w-[10vw] bg-[url('https://leopoldmanguette.com/_nuxt/gif_sunglasses.p3t8zvCi.gif')] bg-center bg-cover bg-no-repeat top-[-9vh] left-0"})]}),", développeur de 25 ans."]}),O.jsxs("p",{className:"mb-4 text-sm",children:["Développer des solutions front est un moyen pour moi de combiner plusieurs disciplines qui me tiennent à coeur : penser des",O.jsxs("span",{className:"text-white relative",children:[" expériences optimales ",O.jsx("span",{className:"absolute rounded-lg span h-[22vh] w-[10vw] bg-[url('https://leopoldmanguette.com/_nuxt/gif_bathinking.DeRjx8D2.gif')] bg-center bg-cover bg-no-repeat top-[-9vh] left-0"})]}),",",O.jsxs("span",{className:"text-white relative",children:["instaurer un dialogue avec l'utilisateur",O.jsx("span",{className:"absolute rounded-lg span h-[22vh] w-[10vw] bg-[url('https://leopoldmanguette.com/_nuxt/gif_quiche.DgbxTE3B.gif')] bg-center bg-cover bg-no-repeat top-[-9vh] left-0"})]})," et proposer des sites innovants et performants"]}),O.jsxs("p",{className:"text-sm",children:["À côté, je me nourris du ",O.jsxs("span",{className:"text-white relative",children:["crossfit",O.jsx("span",{className:"absolute rounded-lg span h-[22vh] w-[10vw] bg-[url('https://leopoldmanguette.com/_nuxt/gif_brad.DPfe5IZi.gif')] bg-center bg-cover bg-no-repeat top-[-9vh] left-0"})]})," et du, ",O.jsxs("span",{className:"text-white relative",children:["cinéma",O.jsx("span",{className:"absolute rounded-lg span h-[22vh] w-[10vw] bg-[url('https://leopoldmanguette.com/_nuxt/gif_cinema.DNGMuaYS.gif')] bg-center bg-cover bg-no-repeat top-[-9vh] left-0"})]})," ",O.jsx("span",{className:"italic",children:"It's shooowtime!"})]})]})]})]})}function kf(n){return Py({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"},child:[]}]})(n)}function zP({bgChanger:n,bgReverseChanger:e}){return O.jsxs(O.Fragment,{children:[O.jsx("div",{className:"h-[70vh] w-screen bg-black",children:O.jsxs("div",{className:"links_wrapper h-full w-[40vw] bg-black mx-auto text-white flex items-center flex-col justify-center",children:[O.jsxs("p",{onMouseEnter:()=>{n()},onMouseLeave:()=>{e()},className:"h-[10vh] w-full bg-black text-[16px] border-t border-solid border-white/40 cursor-pointer flex flex-row items-center justify-between tracking-tighter font-thin link relative",children:[O.jsx("span",{children:"Mail"}),O.jsx("span",{className:"w-12 mr-2 h-8 flex justify-center items-center rounded-full link_icon relative overflow-hidden",children:O.jsx(kf,{className:"link_icon_actual z-50",fontSize:"1.3em",fill:"#fff",fontWeight:100})})]}),O.jsxs("p",{onMouseEnter:()=>{n()},onMouseLeave:()=>{e()},className:"h-[10vh] w-full bg-black text-[16px] border-t border-solid border-white/40 cursor-pointer flex flex-row items-center justify-between tracking-tighter font-thin link relative",children:[O.jsx("span",{children:"Behance"}),O.jsx("span",{className:"w-12 mr-2 h-8 flex justify-center items-center rounded-full link_icon relative overflow-hidden",children:O.jsx(kf,{className:"link_icon_actual z-50",fontSize:"1.3em",fill:"#fff",fontWeight:100})})]}),O.jsxs("p",{onMouseEnter:()=>{n()},onMouseLeave:()=>{e()},className:"h-[10vh] w-full bg-black text-[16px] border-t border-b border-solid border-white/40 cursor-pointer flex flex-row items-center justify-between tracking-tighter font-thin link relative",children:[O.jsx("span",{children:"Linkedin"}),O.jsx("span",{className:"w-12 mr-2 h-8 flex justify-center items-center rounded-full link_icon relative overflow-hidden",children:O.jsx(kf,{className:"link_icon_actual z-50",fontSize:"1.3em",fill:"#fff",fontWeight:100})})]})]})}),O.jsxs("div",{className:"wrapper_w overflow-hidden w-screen h-[8vh] mt-16 text-3xl relative flex flex-row text-white",children:[O.jsxs("div",{className:"wrapper flex flex-row",children:[O.jsxs("div",{className:"wrapper_end flex flex-row items-center h-full min-w-[170px]",children:[O.jsx("span",{className:"text-3xl",children:"ciao bye"}),O.jsx("img",{className:"w-12 h-12",src:"https://leopoldmanguette.com/_nuxt/waving-hand.BLMTO7_z.png",alt:""})]}),O.jsxs("div",{className:"wrapper_end flex flex-row items-center h-full min-w-[170px]",children:[O.jsx("span",{className:"text-3xl",children:"ciao bye"}),O.jsx("img",{className:"w-12 h-12",src:"https://leopoldmanguette.com/_nuxt/waving-hand.BLMTO7_z.png",alt:""})]}),O.jsxs("div",{className:"wrapper_end flex flex-row items-center h-full min-w-[170px]",children:[O.jsx("span",{className:"text-3xl",children:"ciao bye"}),O.jsx("img",{className:"w-12 h-12",src:"https://leopoldmanguette.com/_nuxt/waving-hand.BLMTO7_z.png",alt:""})]}),O.jsxs("div",{className:"wrapper_end flex flex-row items-center h-full min-w-[170px]",children:[O.jsx("span",{className:"text-3xl",children:"ciao bye"}),O.jsx("img",{className:"w-12 h-12",src:"https://leopoldmanguette.com/_nuxt/waving-hand.BLMTO7_z.png",alt:""})]}),O.jsxs("div",{className:"wrapper_end flex flex-row items-center h-full min-w-[170px]",children:[O.jsx("span",{className:"text-3xl",children:"ciao bye"}),O.jsx("img",{className:"w-12 h-12",src:"https://leopoldmanguette.com/_nuxt/waving-hand.BLMTO7_z.png",alt:""})]})]}),O.jsxs("div",{className:"wrapper flex flex-row",children:[O.jsxs("div",{className:"wrapper_end flex flex-row items-center h-full min-w-[170px]",children:[O.jsx("span",{className:"text-3xl",children:"ciao bye"}),O.jsx("img",{className:"w-12 h-12",src:"https://leopoldmanguette.com/_nuxt/waving-hand.BLMTO7_z.png",alt:""})]}),O.jsxs("div",{className:"wrapper_end flex flex-row items-center h-full min-w-[170px]",children:[O.jsx("span",{className:"text-3xl",children:"ciao bye"}),O.jsx("img",{className:"w-12 h-12",src:"https://leopoldmanguette.com/_nuxt/waving-hand.BLMTO7_z.png",alt:""})]}),O.jsxs("div",{className:"wrapper_end flex flex-row items-center h-full min-w-[170px]",children:[O.jsx("span",{className:"text-3xl",children:"ciao bye"}),O.jsx("img",{className:"w-12 h-12",src:"https://leopoldmanguette.com/_nuxt/waving-hand.BLMTO7_z.png",alt:""})]}),O.jsxs("div",{className:"wrapper_end flex flex-row items-center h-full min-w-[170px]",children:[O.jsx("span",{className:"text-3xl",children:"ciao bye"}),O.jsx("img",{className:"w-12 h-12",src:"https://leopoldmanguette.com/_nuxt/waving-hand.BLMTO7_z.png",alt:""})]}),O.jsxs("div",{className:"wrapper_end flex flex-row items-center h-full min-w-[170px]",children:[O.jsx("span",{className:"text-3xl",children:"ciao bye"}),O.jsx("img",{className:"w-12 h-12",src:"https://leopoldmanguette.com/_nuxt/waving-hand.BLMTO7_z.png",alt:""})]})]}),O.jsxs("div",{className:"wrapper flex flex-row",children:[O.jsxs("div",{className:"wrapper_end flex flex-row items-center h-full min-w-[170px]",children:[O.jsx("span",{className:"text-3xl",children:"ciao bye"}),O.jsx("img",{className:"w-12 h-12",src:"https://leopoldmanguette.com/_nuxt/waving-hand.BLMTO7_z.png",alt:""})]}),O.jsxs("div",{className:"wrapper_end flex flex-row items-center h-full min-w-[170px]",children:[O.jsx("span",{className:"text-3xl",children:"ciao bye"}),O.jsx("img",{className:"w-12 h-12",src:"https://leopoldmanguette.com/_nuxt/waving-hand.BLMTO7_z.png",alt:""})]}),O.jsxs("div",{className:"wrapper_end flex flex-row items-center h-full min-w-[170px]",children:[O.jsx("span",{className:"text-3xl",children:"ciao bye"}),O.jsx("img",{className:"w-12 h-12",src:"https://leopoldmanguette.com/_nuxt/waving-hand.BLMTO7_z.png",alt:""})]}),O.jsxs("div",{className:"wrapper_end flex flex-row items-center h-full min-w-[170px]",children:[O.jsx("span",{className:"text-3xl",children:"ciao bye"}),O.jsx("img",{className:"w-12 h-12",src:"https://leopoldmanguette.com/_nuxt/waving-hand.BLMTO7_z.png",alt:""})]}),O.jsxs("div",{className:"wrapper_end flex flex-row items-center h-full min-w-[170px]",children:[O.jsx("span",{className:"text-3xl",children:"ciao bye"}),O.jsx("img",{className:"w-12 h-12",src:"https://leopoldmanguette.com/_nuxt/waving-hand.BLMTO7_z.png",alt:""})]})]}),O.jsxs("div",{className:"wrapper flex flex-row",children:[O.jsxs("div",{className:"wrapper_end flex flex-row items-center h-full min-w-[170px]",children:[O.jsx("span",{className:"text-3xl",children:"ciao bye"}),O.jsx("img",{className:"w-12 h-12",src:"https://leopoldmanguette.com/_nuxt/waving-hand.BLMTO7_z.png",alt:""})]}),O.jsxs("div",{className:"wrapper_end flex flex-row items-center h-full min-w-[170px]",children:[O.jsx("span",{className:"text-3xl",children:"ciao bye"}),O.jsx("img",{className:"w-12 h-12",src:"https://leopoldmanguette.com/_nuxt/waving-hand.BLMTO7_z.png",alt:""})]}),O.jsxs("div",{className:"wrapper_end flex flex-row items-center h-full min-w-[170px]",children:[O.jsx("span",{className:"text-3xl",children:"ciao bye"}),O.jsx("img",{className:"w-12 h-12",src:"https://leopoldmanguette.com/_nuxt/waving-hand.BLMTO7_z.png",alt:""})]}),O.jsxs("div",{className:"wrapper_end flex flex-row items-center h-full min-w-[170px]",children:[O.jsx("span",{className:"text-3xl",children:"ciao bye"}),O.jsx("img",{className:"w-12 h-12",src:"https://leopoldmanguette.com/_nuxt/waving-hand.BLMTO7_z.png",alt:""})]}),O.jsxs("div",{className:"wrapper_end flex flex-row items-center h-full min-w-[170px]",children:[O.jsx("span",{className:"text-3xl",children:"ciao bye"}),O.jsx("img",{className:"w-12 h-12",src:"https://leopoldmanguette.com/_nuxt/waving-hand.BLMTO7_z.png",alt:""})]})]})]})]})}function BP(){const n=_t.useRef(null),e=_t.useRef(null),[t,i]=_t.useState("transparent"),r=u=>{e.current&&(e.current.style.transform=`translate3d(${u.clientX-e.current.clientWidth/2}px, ${u.clientY-e.current.clientHeight/2}px, 0)`)},s=()=>{i("white")},o=()=>{i("transparent")},[a,l]=_t.useState(1);return O.jsx(O.Fragment,{children:O.jsxs("div",{ref:n,onMouseMove:r,id:"main w-full h-full bg-black",children:[O.jsx("div",{style:{"--bgcolor":t,"--scale":a,transform:`scale(${a})`},ref:e,className:"custom z-[999999] w-5 h-5 bg-transparent rounded-full border border-solid border-white/40 fixed pointer-events-none"}),O.jsx(AP,{}),O.jsx(FP,{bgChanger:s,bgReverseChanger:o}),O.jsx(OP,{bgChanger:s,bgReverseChanger:o}),O.jsx(kP,{}),O.jsx(zP,{bgChanger:s,bgReverseChanger:o})]})})}jv(document.getElementById("root")).render(O.jsx(_t.StrictMode,{children:O.jsx(BP,{})}));
