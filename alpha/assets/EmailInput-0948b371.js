import{j as N}from"./jsx-runtime-f6d73c06.js";import{g as B}from"./_commonjsHelpers-de833af9.js";import{a as S,i as R,b as A,m as O,L as z}from"./isIP-975dca4d.js";var y={exports:{}},F={exports:{}};(function(n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=_;var v=m(S);function m(u){return u&&u.__esModule?u:{default:u}}function d(u){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(t){return typeof t}:d=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(u)}function _(u,i){(0,v.default)(u);var t,o;d(i)==="object"?(t=i.min||0,o=i.max):(t=arguments[1],o=arguments[2]);var c=encodeURI(u).split(/%..|./).length-1;return c>=t&&(typeof o>"u"||c<=o)}n.exports=r.default,n.exports.default=r.default})(F,F.exports);var W=F.exports;(function(n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=k;var v=i(S),m=i(W),d=i(R),_=i(A),u=i(O);function i(a){return a&&a.__esModule?a:{default:a}}var t={allow_display_name:!1,allow_underscores:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1,host_blacklist:[],host_whitelist:[]},o=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,c=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,$=/^[a-z\d]+$/,L=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,U=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,V=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,C=254;function P(a){var e=a.replace(/^"(.+)"$/,"$1");if(!e.trim())return!1;var x=/[\.";<>]/.test(e);if(x){if(e===a)return!1;var s=e.split('"').length===e.split('\\"').length;if(!s)return!1}return!0}function k(a,e){if((0,v.default)(a),e=(0,u.default)(e,t),e.require_display_name||e.allow_display_name){var x=a.match(o);if(x){var s=x[1];if(a=a.replace(s,"").replace(/(^<|>$)/g,""),s.endsWith(" ")&&(s=s.slice(0,-1)),!P(s))return!1}else if(e.require_display_name)return!1}if(!e.ignore_max_length&&a.length>C)return!1;var E=a.split("@"),f=E.pop(),p=f.toLowerCase();if(e.host_blacklist.includes(p)||e.host_whitelist.length>0&&!e.host_whitelist.includes(p))return!1;var l=E.join("@");if(e.domain_specific_validation&&(p==="gmail.com"||p==="googlemail.com")){l=l.toLowerCase();var q=l.split("+")[0];if(!(0,m.default)(q.replace(/\./g,""),{min:6,max:30}))return!1;for(var b=q.split("."),g=0;g<b.length;g++)if(!$.test(b[g]))return!1}if(e.ignore_max_length===!1&&(!(0,m.default)(l,{max:64})||!(0,m.default)(f,{max:254})))return!1;if(!(0,d.default)(f,{require_tld:e.require_tld,ignore_max_length:e.ignore_max_length,allow_underscores:e.allow_underscores})){if(!e.allow_ip_domain)return!1;if(!(0,_.default)(f)){if(!f.startsWith("[")||!f.endsWith("]"))return!1;var w=f.slice(1,-1);if(w.length===0||!(0,_.default)(w))return!1}}if(l[0]==='"')return l=l.slice(1,l.length-1),e.allow_utf8_local_part?V.test(l):L.test(l);for(var M=e.allow_utf8_local_part?U:c,D=l.split("."),h=0;h<D.length;h++)if(!M.test(D[h]))return!1;return!(e.blacklisted_chars&&l.search(new RegExp("[".concat(e.blacklisted_chars,"]+"),"g"))!==-1)}n.exports=r.default,n.exports.default=r.default})(y,y.exports);var Q=y.exports;const H=B(Q),I=n=>N.jsx(z,{...n,linkPrefix:"mailto:",valueValidator:r=>r?H(r):!1});try{I.displayName="EmailInput",I.__docgenInfo={description:"",displayName:"EmailInput",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"enum",value:[{value:'"en_US"'},{value:'"es_ES"'},{value:'"ca_ES"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}}}}}catch{}export{I as E};
