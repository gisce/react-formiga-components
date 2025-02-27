import{a as W}from"./index-916df0c6.js";function J(){J=function(){return c};var h,c={},E=Object.prototype,l=E.hasOwnProperty,d=Object.defineProperty||function(r,t,e){r[t]=e.value},g=typeof Symbol=="function"?Symbol:{},p=g.iterator||"@@iterator",w=g.asyncIterator||"@@asyncIterator",y=g.toStringTag||"@@toStringTag";function s(r,t,e){return Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),r[t]}try{s({},"")}catch{s=function(e,n,a){return e[n]=a}}function M(r,t,e,n){var a=t&&t.prototype instanceof T?t:T,o=Object.create(a.prototype),i=new S(n||[]);return d(o,"_invoke",{value:B(r,e,i)}),o}function P(r,t,e){try{return{type:"normal",arg:r.call(t,e)}}catch(n){return{type:"throw",arg:n}}}c.wrap=M;var Y="suspendedStart",z="suspendedYield",C="executing",O="completed",v={};function T(){}function k(){}function x(){}var I={};s(I,p,function(){return this});var N=Object.getPrototypeOf,G=N&&N(N(A([])));G&&G!==E&&l.call(G,p)&&(I=G);var _=x.prototype=T.prototype=Object.create(I);function R(r){["next","throw","return"].forEach(function(t){s(r,t,function(e){return this._invoke(t,e)})})}function j(r,t){function e(a,o,i,u){var f=P(r[a],r,o);if(f.type!=="throw"){var b=f.arg,m=b.value;return m&&W(m)=="object"&&l.call(m,"__await")?t.resolve(m.__await).then(function(L){e("next",L,i,u)},function(L){e("throw",L,i,u)}):t.resolve(m).then(function(L){b.value=L,i(b)},function(L){return e("throw",L,i,u)})}u(f.arg)}var n;d(this,"_invoke",{value:function(o,i){function u(){return new t(function(f,b){e(o,i,f,b)})}return n=n?n.then(u,u):u()}})}function B(r,t,e){var n=Y;return function(a,o){if(n===C)throw new Error("Generator is already running");if(n===O){if(a==="throw")throw o;return{value:h,done:!0}}for(e.method=a,e.arg=o;;){var i=e.delegate;if(i){var u=D(i,e);if(u){if(u===v)continue;return u}}if(e.method==="next")e.sent=e._sent=e.arg;else if(e.method==="throw"){if(n===Y)throw n=O,e.arg;e.dispatchException(e.arg)}else e.method==="return"&&e.abrupt("return",e.arg);n=C;var f=P(r,t,e);if(f.type==="normal"){if(n=e.done?O:z,f.arg===v)continue;return{value:f.arg,done:e.done}}f.type==="throw"&&(n=O,e.method="throw",e.arg=f.arg)}}}function D(r,t){var e=t.method,n=r.iterator[e];if(n===h)return t.delegate=null,e==="throw"&&r.iterator.return&&(t.method="return",t.arg=h,D(r,t),t.method==="throw")||e!=="return"&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+e+"' method")),v;var a=P(n,r.iterator,t.arg);if(a.type==="throw")return t.method="throw",t.arg=a.arg,t.delegate=null,v;var o=a.arg;return o?o.done?(t[r.resultName]=o.value,t.next=r.nextLoc,t.method!=="return"&&(t.method="next",t.arg=h),t.delegate=null,v):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function H(r){var t={tryLoc:r[0]};1 in r&&(t.catchLoc=r[1]),2 in r&&(t.finallyLoc=r[2],t.afterLoc=r[3]),this.tryEntries.push(t)}function F(r){var t=r.completion||{};t.type="normal",delete t.arg,r.completion=t}function S(r){this.tryEntries=[{tryLoc:"root"}],r.forEach(H,this),this.reset(!0)}function A(r){if(r||r===""){var t=r[p];if(t)return t.call(r);if(typeof r.next=="function")return r;if(!isNaN(r.length)){var e=-1,n=function a(){for(;++e<r.length;)if(l.call(r,e))return a.value=r[e],a.done=!1,a;return a.value=h,a.done=!0,a};return n.next=n}}throw new TypeError(W(r)+" is not iterable")}return k.prototype=x,d(_,"constructor",{value:x,configurable:!0}),d(x,"constructor",{value:k,configurable:!0}),k.displayName=s(x,y,"GeneratorFunction"),c.isGeneratorFunction=function(r){var t=typeof r=="function"&&r.constructor;return!!t&&(t===k||(t.displayName||t.name)==="GeneratorFunction")},c.mark=function(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,x):(r.__proto__=x,s(r,y,"GeneratorFunction")),r.prototype=Object.create(_),r},c.awrap=function(r){return{__await:r}},R(j.prototype),s(j.prototype,w,function(){return this}),c.AsyncIterator=j,c.async=function(r,t,e,n,a){a===void 0&&(a=Promise);var o=new j(M(r,t,e,n),a);return c.isGeneratorFunction(t)?o:o.next().then(function(i){return i.done?i.value:o.next()})},R(_),s(_,y,"Generator"),s(_,p,function(){return this}),s(_,"toString",function(){return"[object Generator]"}),c.keys=function(r){var t=Object(r),e=[];for(var n in t)e.push(n);return e.reverse(),function a(){for(;e.length;){var o=e.pop();if(o in t)return a.value=o,a.done=!1,a}return a.done=!0,a}},c.values=A,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=h,this.done=!1,this.delegate=null,this.method="next",this.arg=h,this.tryEntries.forEach(F),!t)for(var e in this)e.charAt(0)==="t"&&l.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=h)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if(t.type==="throw")throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(b,m){return i.type="throw",i.arg=t,e.next=b,m&&(e.method="next",e.arg=h),!!m}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if(o.tryLoc==="root")return n("end");if(o.tryLoc<=this.prev){var u=l.call(o,"catchLoc"),f=l.call(o,"finallyLoc");if(u&&f){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&l.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&(t==="break"||t==="continue")&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if(t.type==="throw")throw t.arg;return t.type==="break"||t.type==="continue"?this.next=t.arg:t.type==="return"?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):t.type==="normal"&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),F(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var a=n.completion;if(a.type==="throw"){var o=a.arg;F(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},this.method==="next"&&(this.arg=h),v}},c}function q(h,c,E,l,d,g,p){try{var w=h[g](p),y=w.value}catch(s){E(s);return}w.done?c(y):Promise.resolve(y).then(l,d)}function Q(h){return function(){var c=this,E=arguments;return new Promise(function(l,d){var g=h.apply(c,E);function p(y){q(g,l,d,p,w,"next",y)}function w(y){q(g,l,d,p,w,"throw",y)}p(void 0)})}}export{Q as _,J as a};
