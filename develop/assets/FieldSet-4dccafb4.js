import{j as e}from"./jsx-runtime-f6d73c06.js";import{r as p}from"./index-8ee6c85d.js";import{s as c}from"./styled-components.browser.esm-9d5760e0.js";import{S as m}from"./index-db9ecc54.js";const a=c.fieldset`
  padding: 0.5rem;
  border-color: #D9D9D9;
  border-width: 1px;
  border-style: solid;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
`,r=c.legend`
  all: initial;
  padding-left: 0.5em;
  padding-right: 0.5em;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 0.85rem;
`;try{a.displayName="FieldSetElement",a.__docgenInfo={description:"",displayName:"FieldSetElement",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLFieldSetElement | null) => void) | RefObject<HTMLFieldSetElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{r.displayName="Legend",r.__docgenInfo={description:"",displayName:"Legend",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLegendElement | null) => void) | RefObject<HTMLLegendElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const d=l=>{const{label:i,children:o,icon:n}=l;p.useState(!0);const t=e.jsxs(m,{children:[n?e.jsx(n,{}):null,i]});return e.jsxs(a,{children:[e.jsx(r,{children:t}),o]})},s=l=>{const{label:i,children:o,icon:n}=l,[t,u]=p.useState(!0),f=e.jsxs(m,{children:[n?e.jsx(n,{}):null,i]});return e.jsxs(a,{children:[e.jsxs(r,{onClick:()=>u(!t),children:[t?"▼":"►",f]}),t&&e.jsx(e.Fragment,{children:o})]})};try{d.displayName="FieldSet",d.__docgenInfo={description:"",displayName:"FieldSet",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ElementType<any>"}}}}}catch{}try{s.displayName="ToggleFieldSet",s.__docgenInfo={description:"",displayName:"ToggleFieldSet",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ElementType<any>"}}}}}catch{}export{d as F,s as T};
