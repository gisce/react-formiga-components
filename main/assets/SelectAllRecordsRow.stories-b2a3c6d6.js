import{j as m}from"./jsx-runtime-f6d73c06.js";import{S as p}from"./SelectAllRecordsRow-368f439a.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-f5d1b584.js";import"./index-916df0c6.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./CheckOutlined-42026b46.js";import"./index-9c320998.js";import"./toArray-08f3fa85.js";import"./isVisible-c2160674.js";import"./EditOutlined-a488172a.js";import"./omit-db8b152c.js";import"./KeyCode-6413d982.js";import"./useLocale-7291e1d6.js";import"./index-71762a4a.js";import"./motion-343f592f.js";import"./roundedArrow-35bcc62e.js";import"./reactNode-c432c2b0.js";import"./Compact-11981144.js";import"./EnterOutlined-006f821b.js";import"./TextArea-f4011b25.js";import"./CloseCircleFilled-33e5256a.js";import"./useVariants-3e3137fc.js";import"./context-4be339a9.js";import"./asyncToGenerator-5190802c.js";import"./index-b67453a2.js";import"./compact-item-43eba85b.js";import"./LocaleContext-1c35ce14.js";import"./FormigaConfig-18203694.js";import"./index-fce1f0c7.js";const L={title:"Components/UI/SelectAllRecordsRow",component:p,parameters:{docs:{description:{component:"A component that appears when all records in the current page are selected, offering the option to select all records across all pages."}}}},i=t=>m.jsx(p,{...t}),e=i.bind({});e.args={currentPageSelectedCount:10,currentPageTotalCount:10,totalRecordsCount:100,totalSelectedCount:10,onSelectAllRecords:async()=>{console.log("Select all records clicked"),await new Promise(t=>setTimeout(t,1e3))}};e.parameters={docs:{description:{story:"Shows when all records in the current page are selected, offering the option to select all records across all pages."}}};const r=i.bind({});r.args={currentPageSelectedCount:10,currentPageTotalCount:10,totalRecordsCount:100,totalSelectedCount:100,onSelectAllRecords:async()=>{console.log("Select all records clicked"),await new Promise(t=>setTimeout(t,1e3))}};r.parameters={docs:{description:{story:"Shows when all records across all pages are selected, displaying the total count."}}};var o,s,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  return <SelectAllRecordsRow {...args} />;
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var c,l,n;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return <SelectAllRecordsRow {...args} />;
}`,...(n=(l=r.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const M=["CurrentPageSelected","AllPagesSelected"];export{r as AllPagesSelected,e as CurrentPageSelected,M as __namedExportsOrder,L as default};
