import{_ as m}from"./assertThisInitialized-4fab7dd0.js";import{r}from"./index-8ee6c85d.js";import{A as u}from"./index-d8bbe3ff.js";var l={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"};const $=l;var g=function(t,i){return r.createElement(u,m({},t,{ref:i,icon:$}))};const v=r.forwardRef(g);function f(n,t,i){const{focusElCls:e,focus:o,borderElCls:s}=i,a=s?"> *":"",c=["hover",o?"focus":null,"active"].filter(Boolean).map(d=>`&:${d} ${a}`).join(",");return{[`&-item:not(${t}-last-item)`]:{marginInlineEnd:n.calc(n.lineWidth).mul(-1).equal()},"&-item":Object.assign(Object.assign({[c]:{zIndex:2}},e?{[`&${e}`]:{zIndex:2}}:{}),{[`&[disabled] ${a}`]:{zIndex:0}})}}function b(n,t,i){const{borderElCls:e}=i,o=e?`> ${e}`:"";return{[`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]:{borderRadius:0},[`&-item:not(${t}-last-item)${t}-first-item`]:{[`& ${o}, &${n}-sm ${o}, &${n}-lg ${o}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&-item:not(${t}-first-item)${t}-last-item`]:{[`& ${o}, &${n}-sm ${o}, &${n}-lg ${o}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}}}function I(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{focus:!0};const{componentCls:i}=n,e=`${i}-compact`;return{[e]:Object.assign(Object.assign({},f(n,e,t)),b(i,e,t))}}export{v as L,I as g};
