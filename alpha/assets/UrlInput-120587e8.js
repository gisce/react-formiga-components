import{j as T}from"./jsx-runtime-f6d73c06.js";import{g as C}from"./_commonjsHelpers-de833af9.js";import{a as D,i as F,b as M,m as N,L as P}from"./isIP-81fa1166.js";var _={exports:{}};(function(o,u){Object.defineProperty(u,"__esModule",{value:!0}),u.default=L;var b=p(D),q=p(F),m=p(M),x=p(N);function p(e){return e&&e.__esModule?e:{default:e}}function w(e,r){return j(e)||S(e,r)||E(e,r)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(e,r){if(e){if(typeof e=="string")return v(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(e,r)}}function v(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,l=new Array(r);t<r;t++)l[t]=e[t];return l}function S(e,r){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var t=[],l=!0,n=!1,f=void 0;try{for(var s=e[Symbol.iterator](),i;!(l=(i=s.next()).done)&&(t.push(i.value),!(r&&t.length===r));l=!0);}catch(a){n=!0,f=a}finally{try{!l&&s.return!=null&&s.return()}finally{if(n)throw f}}return t}}function j(e){if(Array.isArray(e))return e}var A={protocols:["http","https","ftp"],require_tld:!0,require_protocol:!1,require_host:!0,require_port:!1,require_valid_protocol:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_protocol_relative_urls:!1,allow_fragments:!0,allow_query_components:!0,validate_length:!0},O=/^\[([^\]]+)\](?::([0-9]+))?$/;function U(e){return Object.prototype.toString.call(e)==="[object RegExp]"}function y(e,r){for(var t=0;t<r.length;t++){var l=r[t];if(e===l||U(l)&&l.test(e))return!0}return!1}function L(e,r){if((0,b.default)(e),!e||/[\s<>]/.test(e)||e.indexOf("mailto:")===0||(r=(0,x.default)(r,A),r.validate_length&&e.length>=2083)||!r.allow_fragments&&e.includes("#")||!r.allow_query_components&&(e.includes("?")||e.includes("&")))return!1;var t,l,n,f,s,i,a,d;if(a=e.split("#"),e=a.shift(),a=e.split("?"),e=a.shift(),a=e.split("://"),a.length>1){if(t=a.shift().toLowerCase(),r.require_valid_protocol&&r.protocols.indexOf(t)===-1)return!1}else{if(r.require_protocol)return!1;if(e.slice(0,2)==="//"){if(!r.allow_protocol_relative_urls)return!1;a[0]=e.slice(2)}}if(e=a.join("://"),e==="")return!1;if(a=e.split("/"),e=a.shift(),e===""&&!r.require_host)return!0;if(a=e.split("@"),a.length>1){if(r.disallow_auth||a[0]===""||(l=a.shift(),l.indexOf(":")>=0&&l.split(":").length>2))return!1;var R=l.split(":"),h=w(R,2),V=h[0],k=h[1];if(V===""&&k==="")return!1}f=a.join("@"),i=null,d=null;var c=f.match(O);if(c?(n="",d=c[1],i=c[2]||null):(a=f.split(":"),n=a.shift(),a.length&&(i=a.join(":"))),i!==null&&i.length>0){if(s=parseInt(i,10),!/^[0-9]+$/.test(i)||s<=0||s>65535)return!1}else if(r.require_port)return!1;return r.host_whitelist?y(n,r.host_whitelist):n===""&&!r.require_host?!0:!(!(0,m.default)(n)&&!(0,q.default)(n,r)&&(!d||!(0,m.default)(d,6))||(n=n||d,r.host_blacklist&&y(n,r.host_blacklist)))}o.exports=u.default,o.exports.default=u.default})(_,_.exports);var H=_.exports;const $=C(H),g=o=>T.jsx(P,{...o,linkPrefix:"mailto:",valueValidator:u=>u?$(u):!1});try{g.displayName="UrlInput",g.__docgenInfo={description:"",displayName:"UrlInput",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"enum",value:[{value:'"en_US"'},{value:'"es_ES"'},{value:'"ca_ES"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}}}}}catch{}export{g as U};
