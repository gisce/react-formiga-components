import{j as e}from"./jsx-runtime-f6d73c06.js";import{s as F}from"./styled-components.browser.esm-8d5db3cb.js";import{R as O}from"./Field-c130abcd.js";import{A as y}from"./index-ba0b8bee.js";import{B as c}from"./Button-0e005045.js";import{u as j}from"./LocaleContext-1c35ce14.js";import"./FormigaConfig-18203694.js";import{R as w,C as s}from"./row-1c3eec31.js";import{S as C}from"./SearchOutlined-061923d8.js";import{F as I}from"./FolderOpenOutlined-38e7df5a.js";const m=F(y)`
  ${O}
`;try{m.displayName="RequiredMany2OneDummy",m.__docgenInfo={description:"",displayName:"RequiredMany2OneDummy",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const f=l=>{const{required:h,readOnly:t,value:q,onChange:r,suffix:x,searching:n=!1,showFolderButton:b=!0,disableFolderButton:V=!1,onClickFolderButton:u,showSearchButton:B=!0,disableSearchButton:_=!1,onClickSearchButton:o,onElementLostFocus:i,onEnterPressed:d,locale:g}=l,{t:p}=j(g),v=h&&!t?m:y;async function S(a){a.keyCode===13&&(a.preventDefault(),a.stopPropagation(),d==null||d())}return e.jsxs(w,{gutter:8,wrap:!1,children:[e.jsx(s,{flex:"auto",children:e.jsx(v,{type:"text",value:q,disabled:t||n,onChange:a=>{r==null||r(a.target.value)},onBlur:()=>{i==null||i()},onKeyUp:S,suffix:x})}),b&&e.jsx(s,{flex:"32px",children:e.jsx(c,{icon:e.jsx(I,{}),disabled:V||n,onClick:()=>{u==null||u()},tabIndex:-1,tooltip:p("open")})}),B&&e.jsx(s,{flex:"32px",children:e.jsx(c,{icon:e.jsx(C,{}),loading:n,disabled:_||n||t,onClick:()=>{o==null||o()},tabIndex:-1,tooltip:p("search")})})]})};try{f.displayName="Many2OneDummy",f.__docgenInfo={description:"",displayName:"Many2OneDummy",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"enum",value:[{value:'"en_US"'},{value:'"es_ES"'},{value:'"ca_ES"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},searching:{defaultValue:null,description:"",name:"searching",required:!1,type:{name:"boolean"}},showFolderButton:{defaultValue:null,description:"",name:"showFolderButton",required:!1,type:{name:"boolean"}},disableFolderButton:{defaultValue:null,description:"",name:"disableFolderButton",required:!1,type:{name:"boolean"}},onClickFolderButton:{defaultValue:null,description:"",name:"onClickFolderButton",required:!1,type:{name:"(() => void)"}},showSearchButton:{defaultValue:null,description:"",name:"showSearchButton",required:!1,type:{name:"boolean"}},disableSearchButton:{defaultValue:null,description:"",name:"disableSearchButton",required:!1,type:{name:"boolean"}},onClickSearchButton:{defaultValue:null,description:"",name:"onClickSearchButton",required:!1,type:{name:"(() => void)"}},onElementLostFocus:{defaultValue:null,description:"",name:"onElementLostFocus",required:!1,type:{name:"(() => void)"}},onEnterPressed:{defaultValue:null,description:"",name:"onEnterPressed",required:!1,type:{name:"(() => void)"}}}}}catch{}export{f as M};
