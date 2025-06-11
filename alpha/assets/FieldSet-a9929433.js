import{j as r}from"./jsx-runtime-ffb262ed.js";import{r as y}from"./index-76fb7be0.js";import{s as f}from"./styled-components.browser.esm-06c7d463.js";import{t as b}from"./index-3f9a60cd.js";import{S as g}from"./index-a91dba4b.js";const n=f.fieldset`
  padding: 0.5rem;
  border-color: ${e=>e.$borderColor||"#d9d9d9"};
  border-width: 1px;
  border-style: solid;
  border-radius: ${e=>e.$borderRadius||"5px"};
  background-color: ${e=>e.$backgroundColor||"transparent"};
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
`,a=f.legend`
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
`;try{n.displayName="FieldSetElement",n.__docgenInfo={description:"",displayName:"FieldSetElement",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLFieldSetElement | null) => void) | RefObject<HTMLFieldSetElement> | null"}},$borderRadius:{defaultValue:null,description:"",name:"$borderRadius",required:!1,type:{name:"string"}},$backgroundColor:{defaultValue:null,description:"",name:"$backgroundColor",required:!1,type:{name:"string"}},$borderColor:{defaultValue:null,description:"",name:"$borderColor",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{a.displayName="Legend",a.__docgenInfo={description:"",displayName:"Legend",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLegendElement | null) => void) | RefObject<HTMLLegendElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const{useToken:_}=b,p=e=>{const{label:d,children:t,icon:l,borderRadius:i,backgroundColor:s,borderColor:o}=e,{token:u}=_(),c=r.jsxs(g,{children:[l?r.jsx(l,{}):null,d]});return r.jsxs(n,{$borderRadius:`${i||u.borderRadius}px`,$backgroundColor:s,$borderColor:o,children:[r.jsx(a,{children:c}),t]})},m=e=>{const{label:d,children:t,icon:l,backgroundColor:i,borderColor:s}=e,[o,u]=y.useState(!0),c=r.jsxs(g,{children:[l?r.jsx(l,{}):null,d]});return r.jsxs(n,{$backgroundColor:i,$borderColor:s,children:[r.jsxs(a,{onClick:()=>u(!o),children:[o?"▼":"►",c]}),o&&r.jsx(r.Fragment,{children:t})]})};try{p.displayName="FieldSet",p.__docgenInfo={description:"",displayName:"FieldSet",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ElementType<any>"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}}}}}catch{}try{m.displayName="ToggleFieldSet",m.__docgenInfo={description:"",displayName:"ToggleFieldSet",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ElementType<any>"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}}}}}catch{}export{p as F,m as T};
