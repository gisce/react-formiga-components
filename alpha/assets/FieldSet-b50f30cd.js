import{j as s}from"./jsx-runtime-ffb262ed.js";import{r as j}from"./index-76fb7be0.js";import{s as S}from"./styled-components.browser.esm-a41aca50.js";import{z as T,A as x,B as F,D as v,E as C,F as p,G as O,H as k,I as b,h,J as E,K as z,L as g,M as A,u as B}from"./genStyleUtils-4c750380.js";import{S as _}from"./index-b3b86c08.js";const R=t=>{const e=t!=null&&t.algorithm?T(t.algorithm):x,o=Object.assign(Object.assign({},F),t==null?void 0:t.token);return v(o,{override:t==null?void 0:t.token},e,C)},q=R;function M(t){const{sizeUnit:e,sizeStep:o}=t,n=o-2;return{sizeXXL:e*(n+10),sizeXL:e*(n+6),sizeLG:e*(n+2),sizeMD:e*(n+2),sizeMS:e*(n+1),size:e*n,sizeSM:e*n,sizeXS:e*(n-1),sizeXXS:e*(n-1)}}const V=(t,e)=>{const o=e??p(t),n=o.fontSizeSM,r=o.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},o),M(e??t)),O(n)),{controlHeight:r}),k(Object.assign(Object.assign({},o),{controlHeight:r})))},$=V,l=(t,e)=>new b(t).setA(e).toRgbString(),d=(t,e)=>new b(t).lighten(e).toHexString(),I=t=>{const e=h(t,{theme:"dark"});return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[6],6:e[5],7:e[4],8:e[6],9:e[5],10:e[4]}},L=(t,e)=>{const o=t||"#000",n=e||"#fff";return{colorBgBase:o,colorTextBase:n,colorText:l(n,.85),colorTextSecondary:l(n,.65),colorTextTertiary:l(n,.45),colorTextQuaternary:l(n,.25),colorFill:l(n,.18),colorFillSecondary:l(n,.12),colorFillTertiary:l(n,.08),colorFillQuaternary:l(n,.04),colorBgSolid:l(n,.95),colorBgSolidHover:l(n,1),colorBgSolidActive:l(n,.9),colorBgElevated:d(o,12),colorBgContainer:d(o,8),colorBgLayout:d(o,0),colorBgSpotlight:d(o,26),colorBgBlur:l(n,.04),colorBorder:d(o,26),colorBorderSecondary:d(o,19)}},H=(t,e)=>{const o=Object.keys(E).map(r=>{const a=h(t[r],{theme:"dark"});return Array.from({length:10},()=>1).reduce((i,X,c)=>(i[`${r}-${c+1}`]=a[c],i[`${r}${c+1}`]=a[c],i),{})}).reduce((r,a)=>(r=Object.assign(Object.assign({},r),a),r),{}),n=e??p(t);return Object.assign(Object.assign(Object.assign({},n),o),z(t,{generateColorPalettes:I,generateNeutralColorPalettes:L}))},N=H;function w(){const[t,e,o]=B();return{theme:t,token:e,hashId:o}}const D={defaultSeed:g.token,useToken:w,defaultAlgorithm:p,darkAlgorithm:N,compactAlgorithm:$,getDesignToken:q,defaultConfig:g,_internalContext:A},u=S.fieldset`
  padding: 0.5rem;
  border-color: #d9d9d9;
  border-width: 1px;
  border-style: solid;
  border-radius: ${t=>t.$borderRadius||"5px"};
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
`,m=S.legend`
  all: initial;
  padding-left: 0.5em;
  padding-right: 0.5em;
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
`;try{u.displayName="FieldSetElement",u.__docgenInfo={description:"",displayName:"FieldSetElement",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLFieldSetElement | null) => void) | RefObject<HTMLFieldSetElement> | null"}},$borderRadius:{defaultValue:null,description:"",name:"$borderRadius",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{m.displayName="Legend",m.__docgenInfo={description:"",displayName:"Legend",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLegendElement | null) => void) | RefObject<HTMLLegendElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const{useToken:U}=D,f=t=>{const{label:e,children:o,icon:n,borderRadius:r}=t,{token:a}=U(),i=s.jsxs(_,{children:[n?s.jsx(n,{}):null,e]});return s.jsxs(u,{$borderRadius:`${r||a.borderRadius}px`,children:[s.jsx(m,{children:i}),o]})},y=t=>{const{label:e,children:o,icon:n}=t,[r,a]=j.useState(!0),i=s.jsxs(_,{children:[n?s.jsx(n,{}):null,e]});return s.jsxs(u,{children:[s.jsxs(m,{onClick:()=>a(!r),children:[r?"▼":"►",i]}),r&&s.jsx(s.Fragment,{children:o})]})};try{f.displayName="FieldSet",f.__docgenInfo={description:"",displayName:"FieldSet",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ElementType<any>"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}}}}}catch{}try{y.displayName="ToggleFieldSet",y.__docgenInfo={description:"",displayName:"ToggleFieldSet",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ElementType<any>"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}}}}}catch{}export{f as F,y as T};
