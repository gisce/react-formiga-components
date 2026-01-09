import{j as t}from"./jsx-runtime-ffb262ed.js";import{s as r}from"./styled-components.browser.esm-a237e5f9.js";import{Q as u}from"./QuestionCircleOutlined-6633361d.js";import{T as p}from"./index-df709f45.js";const c={left:"flex-start",center:"center",right:"flex-end"},a=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 0.25rem;
  padding-top: 0.25rem;
  justify-content: ${e=>c[e.align]};
`,n=r(u)`
  font-size: 0.75rem;
  line-height: 1rem;
  --tw-text-opacity: 1;
  color: rgba(96, 165, 250, var(--tw-text-opacity));
  padding-right: 0.25rem;
`,l=r.span`
  padding-right: 0.5rem;
  text-align: right;
`;try{a.displayName="LabelContainer",a.__docgenInfo={description:"",displayName:"LabelContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},align:{defaultValue:null,description:"",name:"align",required:!0,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{n.displayName="TooltipIcon",n.__docgenInfo={description:"",displayName:"TooltipIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{l.displayName="Text",l.__docgenInfo={description:"",displayName:"Text",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const d=e=>{const{tooltip:i,text:o,align:s="left"}=e;return t.jsxs(a,{align:s,children:[i&&t.jsx(p,{title:i,children:t.jsx(n,{})}),t.jsx(l,{children:o})]})};try{d.displayName="Label",d.__docgenInfo={description:"",displayName:"Label",props:{tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}}}}}catch{}export{d as L};
