import{j as s}from"./jsx-runtime-f6d73c06.js";import{r as b}from"./index-8ee6c85d.js";import{C as _}from"./index-46c27e92.js";import"./_commonjsHelpers-de833af9.js";import"./index-7e3d7086.js";import"./extends-4c19d496.js";import"./isVisible-2ef80b15.js";import"./index-f2765735.js";import"./assertThisInitialized-68330e5d.js";import"./index-8eb238e3.js";import"./index-eab29bb3.js";import"./reactNode-c432c2b0.js";import"./asyncToGenerator-aa14e566.js";import"./context-29a3839d.js";import"./toArray-66e39049.js";import"./omit-f8286760.js";const C=e=>e.replace(/[_-]+/g," ").split(" ").map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(" "),l=e=>{const{readOnly:o}=e,[t,h]=b.useState(e.value||{}),v=a=>{const i={...t,[a]:!t[a]};h(i),e.onChange&&e.onChange(i)};return s.jsx("div",{children:Object.keys(t).map(a=>s.jsx(_,{disabled:o,checked:t[a],onChange:()=>v(a),children:C(a)},a))})};try{l.displayName="JSONCheckbox",l.__docgenInfo={description:"",displayName:"JSONCheckbox",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"enum",value:[{value:'"en_US"'},{value:'"es_ES"'},{value:'"ca_ES"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"Record<string, boolean>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: Record<string, boolean>) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}}}}}catch{}const U={title:"Work in progress/Widgets/JSONCheckbox/JSONCheckbox",component:l},f=e=>s.jsx(l,{...e,onChange:o=>console.log("value",o)}),n=f.bind({});n.args={value:{option_1:!1,option_2:!0,option_3:!1}};const r=f.bind({});r.args={value:{option_1:!1,option_2:!0,option_3:!1},readOnly:!0};var u,c,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:'(args: any) => <JSONCheckbox {...args} onChange={value => console.log("value", value)} />',...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:'(args: any) => <JSONCheckbox {...args} onChange={value => console.log("value", value)} />',...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const W=["Basic","ReadOnly"];export{n as Basic,r as ReadOnly,W as __namedExportsOrder,U as default};
