import{j as e}from"./jsx-runtime-f6d73c06.js";import{r as S}from"./index-8ee6c85d.js";import{s as O}from"./styled-components.browser.esm-f33cca5c.js";import{R as j}from"./Field-d4acf822.js";import{I as y}from"./index-33abafc5.js";import{B as c}from"./Button-bbecdc00.js";import{L as w,t as I}from"./LocaleContext-58eb36ec.js";import{R as E,C as s}from"./row-556c4485.js";import{F as R}from"./FolderOpenOutlined-f3429b72.js";import{S as M}from"./SearchOutlined-98c63492.js";const m=O(y)`
  ${j}
`;try{m.displayName="RequiredMany2OneDummy",m.__docgenInfo={description:"",displayName:"RequiredMany2OneDummy",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const f=l=>{const{required:x,readOnly:t,value:h,onChange:r,suffix:q,searching:n=!1,showFolderButton:b=!0,disableFolderButton:V=!1,onClickFolderButton:o,showSearchButton:B=!0,disableSearchButton:_=!1,onClickSearchButton:u,onElementLostFocus:i,onEnterPressed:d,locale:g}=l,{t:v=void 0}=S.useContext(w)||{};function p(a){return I(a,g,v)}const C=x&&!t?m:y;async function F(a){a.keyCode===13&&(a.preventDefault(),a.stopPropagation(),d==null||d())}return e.jsxs(E,{gutter:8,wrap:!1,children:[e.jsx(s,{flex:"auto",children:e.jsx(C,{type:"text",value:h,disabled:t||n,onChange:a=>{r==null||r(a.target.value)},onBlur:()=>{i==null||i()},onKeyUp:F,suffix:q})}),b&&e.jsx(s,{flex:"32px",children:e.jsx(c,{icon:e.jsx(R,{}),disabled:V||n,onClick:()=>{o==null||o()},tabIndex:-1,tooltip:p("open")})}),B&&e.jsx(s,{flex:"32px",children:e.jsx(c,{icon:e.jsx(M,{}),loading:n,disabled:_||n||t,onClick:()=>{u==null||u()},tabIndex:-1,tooltip:p("search")})})]})};try{f.displayName="Many2OneDummy",f.__docgenInfo={description:"",displayName:"Many2OneDummy",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"enum",value:[{value:'"en_US"'},{value:'"es_ES"'},{value:'"ca_ES"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},searching:{defaultValue:null,description:"",name:"searching",required:!1,type:{name:"boolean"}},showFolderButton:{defaultValue:null,description:"",name:"showFolderButton",required:!1,type:{name:"boolean"}},disableFolderButton:{defaultValue:null,description:"",name:"disableFolderButton",required:!1,type:{name:"boolean"}},onClickFolderButton:{defaultValue:null,description:"",name:"onClickFolderButton",required:!1,type:{name:"(() => void)"}},showSearchButton:{defaultValue:null,description:"",name:"showSearchButton",required:!1,type:{name:"boolean"}},disableSearchButton:{defaultValue:null,description:"",name:"disableSearchButton",required:!1,type:{name:"boolean"}},onClickSearchButton:{defaultValue:null,description:"",name:"onClickSearchButton",required:!1,type:{name:"(() => void)"}},onElementLostFocus:{defaultValue:null,description:"",name:"onElementLostFocus",required:!1,type:{name:"(() => void)"}},onEnterPressed:{defaultValue:null,description:"",name:"onEnterPressed",required:!1,type:{name:"(() => void)"}}}}}catch{}export{f as M};
