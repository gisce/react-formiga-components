import{j as e}from"./jsx-runtime-f6d73c06.js";import{D as s,E as o}from"./Dropdown-74822341.js";import{_ as p}from"./assertThisInitialized-4fab7dd0.js";import{r as m}from"./index-8ee6c85d.js";import{A as u}from"./index-99f8f215.js";import{B as b}from"./button-26c76043.js";var f={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM472 784a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"mobile",theme:"outlined"};const h=f;var x=function(l,c){return m.createElement(u,p({},l,{ref:c,icon:h}))};const g=m.forwardRef(x),v={title:"Components/Dropdown",component:s},d=[{sticky:!0,items:[{id:1,name:"Item 1"},{id:2,name:"Item 2",disabled:!0},{id:3,type:"divider"}]},{label:"Group 2",icon:e.jsx(g,{}),items:[{id:3,name:"Item 3",icon:e.jsx(o,{})},{id:4,name:"Item 4",right:e.jsx(b,{onClick:()=>{alert("hi")},children:e.jsx(o,{children:"holas"})})}]},{label:"Group 3",items:[{id:5,name:"Item 5",selected:!0},{id:6,name:"Item 6"}]},{label:"Group 4",items:[{id:7,name:"Item 7"},{id:8,name:"Item 8"}]},{label:"Group 5",items:[{id:9,name:"Item 9"},{id:10,name:"Item 10"}]}],D=r=>e.jsx(s,{...r}),t=D.bind({});t.exampleData=d;t.args={onRetrieveData:async()=>(await new Promise(r=>setTimeout(r,1e3)),d),header:e.jsx("div",{children:"This is a header"}),children:e.jsx("button",{style:{backgroundColor:"#cf2",padding:20,borderRadius:10},children:"Hover me"}),trigger:["hover"]};var a,i,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:"args => <Dropdown {...args} />",...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const j=["Default"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:j,default:v},Symbol.toStringTag,{value:"Module"}));export{t as D,g as M,E as a};