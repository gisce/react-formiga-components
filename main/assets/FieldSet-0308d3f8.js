import{j as l}from"./jsx-runtime-f6d73c06.js";import{r as T}from"./index-8ee6c85d.js";import{s as S}from"./styled-components.browser.esm-d9ff1479.js";import{z as g,A as x,B as F,E as p,F as O,G as k,H as E,T as h,I as j,J as v,K as z,M as f,k as C}from"./index-4cbabd78.js";import{S as _}from"./index-69ef4711.js";const R=t=>{const e=t!=null&&t.algorithm?g(t.algorithm):g(p),r=Object.assign(Object.assign({},x),t==null?void 0:t.token);return F(r,{override:t==null?void 0:t.token},e,O)},q=R;function A(t){const{sizeUnit:e,sizeStep:r}=t,n=r-2;return{sizeXXL:e*(n+10),sizeXL:e*(n+6),sizeLG:e*(n+2),sizeMD:e*(n+2),sizeMS:e*(n+1),size:e*n,sizeSM:e*n,sizeXS:e*(n-1),sizeXXS:e*(n-1)}}const M=(t,e)=>{const r=e??p(t),n=r.fontSizeSM,o=r.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},r),A(e??t)),k(n)),{controlHeight:o}),E(Object.assign(Object.assign({},r),{controlHeight:o})))},V=M,s=(t,e)=>new h(t).setAlpha(e).toRgbString(),d=(t,e)=>new h(t).lighten(e).toHexString(),I=t=>{const e=j(t,{theme:"dark"});return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[6],6:e[5],7:e[4],8:e[6],9:e[5],10:e[4]}},B=(t,e)=>{const r=t||"#000",n=e||"#fff";return{colorBgBase:r,colorTextBase:n,colorText:s(n,.85),colorTextSecondary:s(n,.65),colorTextTertiary:s(n,.45),colorTextQuaternary:s(n,.25),colorFill:s(n,.18),colorFillSecondary:s(n,.12),colorFillTertiary:s(n,.08),colorFillQuaternary:s(n,.04),colorBgElevated:d(r,12),colorBgContainer:d(r,8),colorBgLayout:d(r,0),colorBgSpotlight:d(r,26),colorBgBlur:s(n,.04),colorBorder:d(r,26),colorBorderSecondary:d(r,19)}},L=(t,e)=>{const r=Object.keys(v).map(o=>{const a=j(t[o],{theme:"dark"});return new Array(10).fill(1).reduce((i,U,c)=>(i[`${o}-${c+1}`]=a[c],i[`${o}${c+1}`]=a[c],i),{})}).reduce((o,a)=>(o=Object.assign(Object.assign({},o),a),o),{}),n=e??p(t);return Object.assign(Object.assign(Object.assign({},n),r),z(t,{generateColorPalettes:I,generateNeutralColorPalettes:B}))},N=L;function H(){const[t,e,r]=C();return{theme:t,token:e,hashId:r}}const $={defaultConfig:f,defaultSeed:f.token,useToken:H,defaultAlgorithm:p,darkAlgorithm:N,compactAlgorithm:V,getDesignToken:q},u=S.fieldset`
  padding: 0.5rem;
  border-color: #d9d9d9;
  border-width: 1px;
  border-style: solid;
  border-radius: ${t=>t.borderRadius||"5px"};
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
`;try{u.displayName="FieldSetElement",u.__docgenInfo={description:"",displayName:"FieldSetElement",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLFieldSetElement | null) => void) | RefObject<HTMLFieldSetElement> | null"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{m.displayName="Legend",m.__docgenInfo={description:"",displayName:"Legend",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLegendElement | null) => void) | RefObject<HTMLLegendElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const{useToken:w}=$,y=t=>{const{label:e,children:r,icon:n,borderRadius:o}=t,{token:a}=w(),i=l.jsxs(_,{children:[n?l.jsx(n,{}):null,e]});return l.jsxs(u,{borderRadius:`${o||a.borderRadius}px`,children:[l.jsx(m,{children:i}),r]})},b=t=>{const{label:e,children:r,icon:n}=t,[o,a]=T.useState(!0),i=l.jsxs(_,{children:[n?l.jsx(n,{}):null,e]});return l.jsxs(u,{children:[l.jsxs(m,{onClick:()=>a(!o),children:[o?"▼":"►",i]}),o&&l.jsx(l.Fragment,{children:r})]})};try{y.displayName="FieldSet",y.__docgenInfo={description:"",displayName:"FieldSet",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ElementType<any>"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}}}}}catch{}try{b.displayName="ToggleFieldSet",b.__docgenInfo={description:"",displayName:"ToggleFieldSet",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ElementType<any>"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}}}}}catch{}export{y as F,b as T};
