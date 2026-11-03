"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var s=u(function(k,f){
var p=require('@stdlib/strided-base-reinterpret-complex64/dist');function O(e,r,i,l){var n,a,t;if(e<=0)return-1;for(n=p(r,0),a=l*2,i*=2,t=0;t<e;t++){if(!n[a]&&!n[a+1])return t;a+=i}return-1}f.exports=O
});var q=u(function(z,o){
var F=require('@stdlib/strided-base-stride2offset/dist'),j=s();function m(e,r,i){return j(e,r,i,F(e,i))}o.exports=m
});var y=u(function(A,x){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=q(),_=s();R(c,"ndarray",_);x.exports=c
});var w=require("path").join,E=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=y(),v,d=E(w(__dirname,"./native.js"));b(d)?v=g:v=d;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
