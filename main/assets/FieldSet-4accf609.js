import{j as a}from"./jsx-runtime-ffb262ed.js";import{r as j}from"./index-76fb7be0.js";import{s as S}from"./styled-components.browser.esm-a41aca50.js";import{z as k,A as T,B as $,D as x,E as q,F as g,G as F,H as V,I as C,h,J as v,K as O,L as f,M as E,u as z}from"./genStyleUtils-4c750380.js";import{S as _}from"./index-b3b86c08.js";const A=r=>{const e=r!=null&&r.algorithm?k(r.algorithm):T,t=Object.assign(Object.assign({},$),r==null?void 0:r.token);return x(t,{override:r==null?void 0:r.token},e,q)},B=A;function R(r){const{sizeUnit:e,sizeStep:t}=r,o=t-2;return{sizeXXL:e*(o+10),sizeXL:e*(o+6),sizeLG:e*(o+2),sizeMD:e*(o+2),sizeMS:e*(o+1),size:e*o,sizeSM:e*o,sizeXS:e*(o-1),sizeXXS:e*(o-1)}}const M=(r,e)=>{const t=e??g(r),o=t.fontSizeSM,n=t.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},t),R(e??r)),F(o)),{controlHeight:n}),V(Object.assign(Object.assign({},t),{controlHeight:n})))},I=M,l=(r,e)=>new C(r).setA(e).toRgbString(),c=(r,e)=>new C(r).lighten(e).toHexString(),L=r=>{const e=h(r,{theme:"dark"});return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[6],6:e[5],7:e[4],8:e[6],9:e[5],10:e[4]}},H=(r,e)=>{const t=r||"#000",o=e||"#fff";return{colorBgBase:t,colorTextBase:o,colorText:l(o,.85),colorTextSecondary:l(o,.65),colorTextTertiary:l(o,.45),colorTextQuaternary:l(o,.25),colorFill:l(o,.18),colorFillSecondary:l(o,.12),colorFillTertiary:l(o,.08),colorFillQuaternary:l(o,.04),colorBgSolid:l(o,.95),colorBgSolidHover:l(o,1),colorBgSolidActive:l(o,.9),colorBgElevated:c(t,12),colorBgContainer:c(t,8),colorBgLayout:c(t,0),colorBgSpotlight:c(t,26),colorBgBlur:l(o,.04),colorBorder:c(t,26),colorBorderSecondary:c(t,19)}},N=(r,e)=>{const t=Object.keys(v).map(n=>{const i=h(r[n],{theme:"dark"});return Array.from({length:10},()=>1).reduce((s,u,d)=>(s[`${n}-${d+1}`]=i[d],s[`${n}${d+1}`]=i[d],s),{})}).reduce((n,i)=>(n=Object.assign(Object.assign({},n),i),n),{}),o=e??g(r);return Object.assign(Object.assign(Object.assign({},o),t),O(r,{generateColorPalettes:L,generateNeutralColorPalettes:H}))},w=N;function D(){const[r,e,t]=z();return{theme:r,token:e,hashId:t}}const U={defaultSeed:f.token,useToken:D,defaultAlgorithm:g,darkAlgorithm:w,compactAlgorithm:I,getDesignToken:B,defaultConfig:f,_internalContext:E},m=S.fieldset`
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
`,p=S.legend`
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
`;try{m.displayName="FieldSetElement",m.__docgenInfo={description:"",displayName:"FieldSetElement",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLFieldSetElement | null) => void) | RefObject<HTMLFieldSetElement> | null"}},$borderRadius:{defaultValue:null,description:"",name:"$borderRadius",required:!1,type:{name:"string"}},$backgroundColor:{defaultValue:null,description:"",name:"$backgroundColor",required:!1,type:{name:"string"}},$borderColor:{defaultValue:null,description:"",name:"$borderColor",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{p.displayName="Legend",p.__docgenInfo={description:"",displayName:"Legend",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLegendElement | null) => void) | RefObject<HTMLLegendElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const{useToken:X}=U,b=r=>{const{label:e,children:t,icon:o,borderRadius:n,backgroundColor:i,borderColor:s}=r,{token:u}=X(),d=a.jsxs(_,{children:[o?a.jsx(o,{}):null,e]});return a.jsxs(m,{$borderRadius:`${n||u.borderRadius}px`,$backgroundColor:i,$borderColor:s,children:[a.jsx(p,{children:d}),t]})},y=r=>{const{label:e,children:t,icon:o,backgroundColor:n,borderColor:i}=r,[s,u]=j.useState(!0),d=a.jsxs(_,{children:[o?a.jsx(o,{}):null,e]});return a.jsxs(m,{$backgroundColor:n,$borderColor:i,children:[a.jsxs(p,{onClick:()=>u(!s),children:[s?"▼":"►",d]}),s&&a.jsx(a.Fragment,{children:t})]})};try{b.displayName="FieldSet",b.__docgenInfo={description:"",displayName:"FieldSet",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ElementType<any>"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}}}}}catch{}try{y.displayName="ToggleFieldSet",y.__docgenInfo={description:"",displayName:"ToggleFieldSet",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ElementType<any>"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}}}}}catch{}export{b as F,y as T,U as t};
