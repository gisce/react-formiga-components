import{j as c}from"./jsx-runtime-f6d73c06.js";import{r as p}from"./index-8ee6c85d.js";import{s as F}from"./styled-components.browser.esm-f5d1b584.js";import{R as b}from"./Field-bf48cf23.js";import{A as I}from"./index-a34c119a.js";import{R as P,C as x}from"./row-35453298.js";import{B as h}from"./button-6d884b97.js";import{E as R}from"./EditOutlined-a488172a.js";import{C as V}from"./CheckOutlined-42026b46.js";const m=F(I)`
  ${b}
`;try{m.displayName="RequiredInput",m.__docgenInfo={description:"",displayName:"RequiredInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const q=i=>{const{readOnly:t,required:d,value:n,onChange:r,valueValidator:a,linkPrefix:l=""}=i,e=d&&!t?m:I,[s,f]=p.useState(!1),[o,u]=p.useState(!1);p.useEffect(()=>{t&&!s&&u(!1),!n&&!t&&(f(!0),u(!0))},[s,t]);const E=w=>{r==null||r(w.target.value)};return c.jsxs(P,{gutter:8,wrap:!1,align:"middle",children:[t?null:c.jsx(x,{flex:"32px",children:s?c.jsx(h,{icon:c.jsx(V,{}),onClick:()=>{a!=null&&a(n)&&(f(!1),u(!1))},tabIndex:-1}):c.jsx(h,{icon:c.jsx(R,{}),onClick:()=>{f(!0),u(!0)},tabIndex:-1})}),c.jsx(x,{flex:"auto",children:o||n&&!a(n)&&!t?c.jsx(e,{onChange:E,value:n,onBlur:()=>{a(n)&&(f(!1),u(!1))}}):n&&!a(n)?c.jsx(c.Fragment,{children:n}):c.jsx("a",{href:`${l}${n}`,style:{color:"#1890ff",paddingLeft:10,paddingRight:15},target:"_blank",children:n})})]})};try{q.displayName="LinkInput",q.__docgenInfo={description:"",displayName:"LinkInput",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"enum",value:[{value:'"en_US"'},{value:'"es_ES"'},{value:'"ca_ES"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},valueValidator:{defaultValue:null,description:"",name:"valueValidator",required:!1,type:{name:"((value?: string) => boolean)"}},linkPrefix:{defaultValue:null,description:"",name:"linkPrefix",required:!1,type:{name:"string"}}}}}catch{}var g={exports:{}};(function(i,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function d(r){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?d=function(l){return typeof l}:d=function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},d(r)}function n(r){var a=typeof r=="string"||r instanceof String;if(!a){var l=d(r);throw r===null?l="null":l==="object"&&(l=r.constructor.name),new TypeError("Expected a string but received a ".concat(l))}}i.exports=t.default,i.exports.default=t.default})(g,g.exports);var S=g.exports,_={exports:{}},v={exports:{}};(function(i,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;function d(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;for(var a in r)typeof n[a]>"u"&&(n[a]=r[a]);return n}i.exports=t.default,i.exports.default=t.default})(v,v.exports);var A=v.exports;(function(i,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var d=r(S),n=r(A);function r(e){return e&&e.__esModule?e:{default:e}}var a={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1,ignore_max_length:!1};function l(e,s){(0,d.default)(e),s=(0,n.default)(s,a),s.allow_trailing_dot&&e[e.length-1]==="."&&(e=e.substring(0,e.length-1)),s.allow_wildcard===!0&&e.indexOf("*.")===0&&(e=e.substring(2));var f=e.split("."),o=f[f.length-1];return s.require_tld&&(f.length<2||!s.allow_numeric_tld&&!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(o)||/\s/.test(o))||!s.allow_numeric_tld&&/^\d+$/.test(o)?!1:f.every(function(u){return!(u.length>63&&!s.ignore_max_length||!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(u)||/[\uff01-\uff5e]/.test(u)||/^-|-$/.test(u)||!s.allow_underscores&&/_/.test(u))})}i.exports=t.default,i.exports.default=t.default})(_,_.exports);var B=_.exports,y={exports:{}};(function(i,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=f;var d=n(S);function n(o){return o&&o.__esModule?o:{default:o}}var r="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",a="(".concat(r,"[.]){3}").concat(r),l=new RegExp("^".concat(a,"$")),e="(?:[0-9a-fA-F]{1,4})",s=new RegExp("^("+"(?:".concat(e,":){7}(?:").concat(e,"|:)|")+"(?:".concat(e,":){6}(?:").concat(a,"|:").concat(e,"|:)|")+"(?:".concat(e,":){5}(?::").concat(a,"|(:").concat(e,"){1,2}|:)|")+"(?:".concat(e,":){4}(?:(:").concat(e,"){0,1}:").concat(a,"|(:").concat(e,"){1,3}|:)|")+"(?:".concat(e,":){3}(?:(:").concat(e,"){0,2}:").concat(a,"|(:").concat(e,"){1,4}|:)|")+"(?:".concat(e,":){2}(?:(:").concat(e,"){0,3}:").concat(a,"|(:").concat(e,"){1,5}|:)|")+"(?:".concat(e,":){1}(?:(:").concat(e,"){0,4}:").concat(a,"|(:").concat(e,"){1,6}|:)|")+"(?::((?::".concat(e,"){0,5}:").concat(a,"|(?::").concat(e,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function f(o){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return(0,d.default)(o),u=String(u),u?u==="4"?l.test(o):u==="6"?s.test(o):!1:f(o,4)||f(o,6)}i.exports=t.default,i.exports.default=t.default})(y,y.exports);var z=y.exports;export{q as L,S as a,z as b,B as i,A as m};
