import{j as o}from"./jsx-runtime-f6d73c06.js";import{D as i,E as c}from"./Dropdown-c3b7bac6.js";import{_ as p}from"./assertThisInitialized-4fab7dd0.js";import{r as s}from"./index-8ee6c85d.js";import{A as u}from"./index-d8bbe3ff.js";var b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM472 784a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"mobile",theme:"outlined"};const f=b;var g=function(d,l){return s.createElement(u,p({},d,{ref:l,icon:f}))};const x=s.forwardRef(g),v={title:"Components/Dropdown",component:i},m=[{sticky:!0,items:[{id:1,name:"Item 1"},{id:2,name:"Item 2",disabled:!0},{id:3,type:"divider"}]},{label:"Group 2",icon:o.jsx(x,{}),items:[{id:3,name:"Item 3",icon:o.jsx(c,{})},{id:4,name:"Item 4"}]},{label:"Group 3",items:[{id:5,name:"Item 5",selected:!0},{id:6,name:"Item 6"}]},{label:"Group 4",items:[{id:7,name:"Item 7"},{id:8,name:"Item 8"}]},{label:"Group 5",items:[{id:9,name:"Item 9"},{id:10,name:"Item 10"}]}],D=t=>o.jsx(i,{...t}),e=D.bind({});e.exampleData=m;e.args={onRetrieveData:async()=>(await new Promise(t=>setTimeout(t,1e3)),m),children:o.jsx("button",{style:{backgroundColor:"#cf2",padding:20,borderRadius:10},children:"Hover me"}),trigger:["hover"]};var r,a,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"args => <Dropdown {...args} />",...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const I=["Default"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:I,default:v},Symbol.toStringTag,{value:"Module"}));export{e as D,x as M,j as a};
