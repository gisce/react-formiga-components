import{j as l}from"./jsx-runtime-f6d73c06.js";import{r as k}from"./index-8ee6c85d.js";import{s as C}from"./styled-components.browser.esm-8d5db3cb.js";import{n as f,s as T,o as $,p as g,q as x,t as q,v as V,T as h,x as F,y as O,z as b,f as v}from"./index-f2765735.js";import{g as j}from"./index-7e3d7086.js";import{S as _}from"./index-e8805335.js";const z=r=>{const e=r!=null&&r.algorithm?f(r.algorithm):f(g),n=Object.assign(Object.assign({},T),r==null?void 0:r.token);return $(n,{override:r==null?void 0:r.token},e,x)},E=z;function R(r){const{sizeUnit:e,sizeStep:n}=r,o=n-2;return{sizeXXL:e*(o+10),sizeXL:e*(o+6),sizeLG:e*(o+2),sizeMD:e*(o+2),sizeMS:e*(o+1),size:e*o,sizeSM:e*o,sizeXS:e*(o-1),sizeXXS:e*(o-1)}}const A=(r,e)=>{const n=e??g(r),o=n.fontSizeSM,t=n.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},n),R(e??r)),q(o)),{controlHeight:t}),V(Object.assign(Object.assign({},n),{controlHeight:t})))},M=A,s=(r,e)=>new h(r).setAlpha(e).toRgbString(),c=(r,e)=>new h(r).lighten(e).toHexString(),I=r=>{const e=j(r,{theme:"dark"});return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[6],6:e[5],7:e[4],8:e[6],9:e[5],10:e[4]}},L=(r,e)=>{const n=r||"#000",o=e||"#fff";return{colorBgBase:n,colorTextBase:o,colorText:s(o,.85),colorTextSecondary:s(o,.65),colorTextTertiary:s(o,.45),colorTextQuaternary:s(o,.25),colorFill:s(o,.18),colorFillSecondary:s(o,.12),colorFillTertiary:s(o,.08),colorFillQuaternary:s(o,.04),colorBgElevated:c(n,12),colorBgContainer:c(n,8),colorBgLayout:c(n,0),colorBgSpotlight:c(n,26),colorBgBlur:s(o,.04),colorBorder:c(n,26),colorBorderSecondary:c(n,19)}},B=(r,e)=>{const n=Object.keys(F).map(t=>{const i=j(r[t],{theme:"dark"});return new Array(10).fill(1).reduce((a,u,d)=>(a[`${t}-${d+1}`]=i[d],a[`${t}${d+1}`]=i[d],a),{})}).reduce((t,i)=>(t=Object.assign(Object.assign({},t),i),t),{}),o=e??g(r);return Object.assign(Object.assign(Object.assign({},o),n),O(r,{generateColorPalettes:I,generateNeutralColorPalettes:L}))},N=B;function H(){const[r,e,n]=v();return{theme:r,token:e,hashId:n}}const w={defaultConfig:b,defaultSeed:b.token,useToken:H,defaultAlgorithm:g,darkAlgorithm:N,compactAlgorithm:M,getDesignToken:E},m=C.fieldset`
  padding: 0.5rem;
  border-color: ${r=>r.$borderColor||"#d9d9d9"};
  border-width: 1px;
  border-style: solid;
  border-radius: ${r=>r.$borderRadius||"5px"};
  background-color: ${r=>r.$backgroundColor||"transparent"};
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    "Noto Sans",
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji" !important;
`,p=C.legend`
  all: initial;
  padding: 0.25rem 0.75rem;
  margin: -0.5rem 0.75rem 0;
  font-family:
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    Helvetica,
    Arial,
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji";
  font-size: 0.85rem;
  background-color: white;
  border-radius: 4px;
`;try{m.displayName="FieldSetElement",m.__docgenInfo={description:"",displayName:"FieldSetElement",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLFieldSetElement | null) => void) | RefObject<HTMLFieldSetElement> | null"}},$borderRadius:{defaultValue:null,description:"",name:"$borderRadius",required:!1,type:{name:"string"}},$backgroundColor:{defaultValue:null,description:"",name:"$backgroundColor",required:!1,type:{name:"string"}},$borderColor:{defaultValue:null,description:"",name:"$borderColor",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{p.displayName="Legend",p.__docgenInfo={description:"",displayName:"Legend",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLegendElement | null) => void) | RefObject<HTMLLegendElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const{useToken:U}=w,y=r=>{const{label:e,children:n,icon:o,borderRadius:t,backgroundColor:i,borderColor:a}=r,{token:u}=U(),d=l.jsxs(_,{children:[o?l.jsx(o,{}):null,e]});return l.jsxs(m,{$borderRadius:`${t||u.borderRadius}px`,$backgroundColor:i,$borderColor:a,children:[l.jsx(p,{children:d}),n]})},S=r=>{const{label:e,children:n,icon:o,backgroundColor:t,borderColor:i}=r,[a,u]=k.useState(!0),d=l.jsxs(_,{children:[o?l.jsx(o,{}):null,e]});return l.jsxs(m,{$backgroundColor:t,$borderColor:i,children:[l.jsxs(p,{onClick:()=>u(!a),children:[a?"▼":"►",d]}),a&&l.jsx(l.Fragment,{children:n})]})};try{y.displayName="FieldSet",y.__docgenInfo={description:"",displayName:"FieldSet",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ElementType<any>"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}}}}}catch{}try{S.displayName="ToggleFieldSet",S.__docgenInfo={description:"",displayName:"ToggleFieldSet",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ElementType<any>"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}}}}}catch{}export{y as F,S as T};
