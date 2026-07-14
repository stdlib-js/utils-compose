"use strict";var o=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw r=0,e}}};var s=o(function(p,i){"use strict";var m=require("@stdlib/assert-is-function"),f=require("@stdlib/string-format");function c(){var t,r,e;if(t=arguments.length,t<2)throw new Error("insufficient arguments. Must provide multiple functions to compose.");for(r=new Array(t),e=0;e<t;e++)if(r[e]=arguments[e],!m(r[e]))throw new TypeError(f("invalid argument. All arguments must be functions. Value: `%s`.",r[e]));return a;function a(){var u,n;for(u=new Array(arguments.length),n=0;n<u.length;n++)u[n]=arguments[n];for(u=r[t-1].apply(null,u),n=t-2;n>=0;n--)u=r[n](u);return u}}i.exports=c});var l=s();module.exports=l;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
