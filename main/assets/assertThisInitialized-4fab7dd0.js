function o(){return o=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},o.apply(this,arguments)}function f(t,n){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,s){return r.__proto__=s,r},f(t,n)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(t)}function i(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function a(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}export{o as _,a,c as b,i as c,f as d};
