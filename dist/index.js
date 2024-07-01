"use strict";var o=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var s=o(function(p,i){"use strict";var m=require("@stdlib/assert-is-function"),f=require("@stdlib/string-format");function c(){var n,r,u;if(n=arguments.length,n<2)throw new Error("insufficient arguments. Must provide multiple functions to compose.");for(r=new Array(n),u=0;u<n;u++)if(r[u]=arguments[u],!m(r[u]))throw new TypeError(f("invalid argument. All arguments must be functions. Value: `%s`.",r[u]));return a;function a(){var t,e;for(t=new Array(arguments.length),e=0;e<t.length;e++)t[e]=arguments[e];for(t=r[n-1].apply(null,t),e=n-2;e>=0;e--)t=r[e](t);return t}}i.exports=c});var l=s();module.exports=l;
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
