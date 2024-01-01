// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(o):i(o)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function u(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=o(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=o(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(e){return"string"==typeof e}var s=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,w=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function _(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,v,"e"),t=g.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),e.alternate&&(t=g.call(t,y,"$1."),t=g.call(t,b,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===p.call(e.specifier)?p.call(t):f.call(t)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var n=r-e.length;return n<0?e:e=t?e+j(n):j(n)+e}var S=String.fromCharCode,x=isNaN,k=Array.isArray;function A(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,n,i,a,c,s,f,p;if(!k(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",s=1,f=0;f<e.length;f++)if(l(n=e[f]))c+=n;else{if(r=void 0!==n.precision,!(n=A(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,x(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!x(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),c+=n.arg||"",s+=1}return c}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,n,i;for(t=[],i=0,n=V.exec(e);n;)(r=e.slice(i,V.lastIndex-n[0].length)).length&&t.push(r),t.push(O(n)),i=V.lastIndex,n=V.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function $(e){return"string"==typeof e}function C(e){var r,t,n;if(!$(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=F(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return T.apply(null,t)}var I,P=Object.prototype,B=P.toString,R=P.__defineGetter__,L=P.__defineSetter__,G=P.__lookupGetter__,Z=P.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===B.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===B.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(e,r)||Z.call(e,r)?(n=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&R&&R.call(e,r,t.get),a&&L&&L.call(e,r,t.set),e};var M=I;function W(e,r,t){M(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function N(e){return"boolean"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"";var J=X()?function(e){var r,t,n,i,o;if(null==e)return z.call(e);t=e[H],o=H,r=null!=(i=e)&&q.call(i,o);try{e[H]=void 0}catch(r){return z.call(e)}return n=z.call(e),r?e[H]=t:delete e[H],n}:function(e){return z.call(e)},K=Boolean,Q=Boolean.prototype.toString;var Y=X();function ee(e){return"object"==typeof e&&(e instanceof K||(Y?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===J(e)))}function re(e){return N(e)||ee(e)}function te(){return new Function("return this;")()}W(re,"isPrimitive",N),W(re,"isObject",ee);var ne="object"==typeof self?self:null,ie="object"==typeof window?window:null,oe="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ae="object"==typeof oe?oe:null,ce="object"==typeof globalThis?globalThis:null;var ue=function(e){if(arguments.length){if(!N(e))throw new TypeError(C("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return te()}if(ce)return ce;if(ne)return ne;if(ie)return ie;if(ae)return ae;throw new Error("unexpected error. Unable to resolve global object.")}(),le=ue.document&&ue.document.childNodes,se=Int8Array;function fe(){return/^\s*function\s*([^(]*)/i}var pe=/^\s*function\s*([^(]*)/i;W(fe,"REGEXP",pe);var ge=Array.isArray?Array.isArray:function(e){return"[object Array]"===J(e)};function de(e){return null!==e&&"object"==typeof e}function he(e){var r,t,n,i;if(("Object"===(t=J(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=pe.exec(n.toString()))return r[1]}return de(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}W(de,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(C("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ge(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(de));var ye="function"==typeof e||"object"==typeof se||"function"==typeof le?function(e){return he(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?he(e).toLowerCase():r};function be(e){return"function"===ye(e)}function we(){var e,r,t;if((e=arguments.length)<2)throw new Error("insufficient arguments. Must provide multiple functions to compose.");for(r=new Array(e),t=0;t<e;t++)if(r[t]=arguments[t],!be(r[t]))throw new TypeError(C("invalid argument. All arguments must be functions. Value: `%s`.",r[t]));return n;function n(){var t,n;for(t=new Array(arguments.length),n=0;n<t.length;n++)t[n]=arguments[n];for(t=r[e-1].apply(null,t),n=e-2;n>=0;n--)t=r[n](t);return t}}export{we as default};
//# sourceMappingURL=mod.js.map
