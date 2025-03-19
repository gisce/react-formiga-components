import{j as y}from"./jsx-runtime-f6d73c06.js";import{C as j}from"./CustomPageSizeOptions-8546f673.js";import{r as k}from"./index-8ee6c85d.js";import"./index-850ee6f4.js";import"./index-916df0c6.js";import"./assertThisInitialized-4fab7dd0.js";import"./_commonjsHelpers-de833af9.js";import"./index-8eb238e3.js";import"./isVisible-c2160674.js";import"./index-9c320998.js";import"./toArray-08f3fa85.js";import"./KeyCode-6413d982.js";import"./PurePanel-5fd7e678.js";import"./Overflow-3bd2f60e.js";import"./omit-db8b152c.js";import"./motion-343f592f.js";import"./useVariants-3e3137fc.js";import"./context-4be339a9.js";import"./asyncToGenerator-5190802c.js";import"./useLocale-7291e1d6.js";import"./Compact-11981144.js";import"./compact-item-43eba85b.js";import"./slide-5b44b169.js";import"./CheckOutlined-42026b46.js";import"./CloseCircleFilled-33e5256a.js";import"./CloseOutlined-e9b63884.js";import"./DownOutlined-753a30af.js";import"./LoadingOutlined-74a4b1e9.js";import"./SearchOutlined-0dad7535.js";const me={title:"Components/UI/CustomPageSizeOptions",component:j,parameters:{layout:"centered"}},e={args:{pageSize:10,maxPageSize:100,itemsPerPageText:"/ pàg."}},D=()=>{const[B,W]=k.useState(10);return y.jsx(j,{pageSize:B,maxPageSize:100,onChange:W,itemsPerPageText:"/ pàg.",showAllOption:!0,allOptionText:"All"})},r={args:{pageSize:10,maxPageSize:100,showAllOption:!0,allOptionText:"All",itemsPerPageText:"/ pàg."},render:()=>y.jsx(D,{})},t={args:{pageSize:10,maxPageSize:100,showAllOption:!0,itemsPerPageText:"/ pàg."}},a={args:{pageSize:10,maxPageSize:100,showAllOption:!0,allOptionText:"Tots",itemsPerPageText:"/ pàg."}},o={args:{pageSize:10,maxPageSize:100,showAllOption:!0,allOptionText:"All items",itemsPerPageText:"items per page"}},s={args:{...e.args,disabled:!0}},i={args:{...e.args,style:{width:200,backgroundColor:"#f5f5f5"}}};var p,n,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    pageSize: 10,
    maxPageSize: 100,
    itemsPerPageText: "/ pàg."
  }
}`,...(m=(n=e.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var l,g,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    pageSize: 10,
    maxPageSize: 100,
    showAllOption: true,
    allOptionText: "All",
    itemsPerPageText: "/ pàg."
  },
  render: () => <ControlledExample />
}`,...(c=(g=r.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var u,x,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    pageSize: 10,
    maxPageSize: 100,
    showAllOption: true,
    itemsPerPageText: "/ pàg."
  }
}`,...(d=(x=t.parameters)==null?void 0:x.docs)==null?void 0:d.source}}};var P,S,z;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    pageSize: 10,
    maxPageSize: 100,
    showAllOption: true,
    allOptionText: "Tots",
    itemsPerPageText: "/ pàg."
  }
}`,...(z=(S=a.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var T,O,A;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    pageSize: 10,
    maxPageSize: 100,
    showAllOption: true,
    allOptionText: "All items",
    itemsPerPageText: "items per page"
  }
}`,...(A=(O=o.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var C,h,w;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    disabled: true
  }
}`,...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var f,E,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    style: {
      width: 200,
      backgroundColor: "#f5f5f5"
    }
  }
}`,...(b=(E=i.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};const le=["Basic","Controlled","WithAllOption","WithCustomAllText","CustomLocale","Disabled","CustomStyled"];export{e as Basic,r as Controlled,o as CustomLocale,i as CustomStyled,s as Disabled,t as WithAllOption,a as WithCustomAllText,le as __namedExportsOrder,me as default};
