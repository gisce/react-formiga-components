import{j as c}from"./jsx-runtime-f6d73c06.js";import{r as l}from"./index-8ee6c85d.js";import{a as C}from"./ExportModal-310c1cc7.js";import{B as f}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./TranslatableInput-a5712376.js";import"./LocaleContext-948e5f1f.js";import"./theme-ac0bd082.js";import"./ButtonWithTooltip-520fa07d.js";import"./index-fa6ed0a5.js";import"./index-d66c9264.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./index-99f8f215.js";import"./toArray-7c8d8abc.js";import"./isVisible-ba0f3bfc.js";import"./motion-343f592f.js";import"./roundedArrow-77f12b90.js";import"./reactNode-c432c2b0.js";import"./Compact-42703e7c.js";import"./button-26c76043.js";import"./omit-8a9b0517.js";import"./index-62e8e9d6.js";import"./asyncToGenerator-668af2b4.js";import"./compact-item-d72b0080.js";import"./index-a71e9642.js";import"./context-39b5ed41.js";import"./index-56618587.js";import"./useVariants-83590930.js";import"./CloseCircleFilled-abb829f0.js";import"./SearchOutlined-271c449e.js";import"./row-14c4df27.js";import"./index-db9ecc54.js";import"./CloseOutlined-4f476cb1.js";import"./CheckOutlined-a3c23fa5.js";import"./index-620bd655.js";import"./CheckCircleFilled-7f76e67f.js";import"./ExclamationCircleFilled-58384750.js";import"./InfoCircleFilled-2d19b084.js";import"./PurePanel-6fb313a7.js";import"./useLocale-33ca30a9.js";import"./index-d2de7fbe.js";import"./index-dedc9109.js";import"./SaveOutlined-e8216011.js";import"./Button-93954864.js";import"./styled-components.browser.esm-9d5760e0.js";import"./Label-51d2131b.js";import"./Separator-e058fa2e.js";import"./FieldSet-0fd87775.js";import"./Dropdown-500ed4fd.js";import"./FormigaConfig-f7ae0498.js";import"./RightOutlined-34caf72f.js";import"./Overflow-38d9e44a.js";import"./slide-66cc5359.js";import"./collapse-97de76d4.js";import"./DropdownButton-823298b3.js";import"./DownOutlined-e1dc5b74.js";import"./Field-3f28b13b.js";import"./BooleanInput-5577c396.js";import"./index-dd1e9912.js";import"./BooleanValue-a3d45417.js";import"./BooleanSearch-8dcb61b4.js";import"./SelectionInput-49036de0.js";import"./SelectionValue-320cacef.js";import"./CharInput-1c16dbe8.js";import"./CharSearch-c2ec6524.js";import"./CharValue-c620fcc1.js";import"./DateInput-6fd99144.js";import"./index-ed394e36.js";import"./DateSearch-60b967e7.js";import"./DateSearch.types-d0dadd73.js";import"./DateTimeSearch-bae94b94.js";import"./ImageValue-0866ffb4.js";import"./TextInput-5aa533b5.js";import"./isIP-14240a90.js";import"./EmailInput-72ea8192.js";import"./UrlInput-aa3c9087.js";import"./ProgressBarValue-cd1f6a51.js";import"./Many2OneDummy-92a3e7b0.js";import"./Many2OneValue-f083d95e.js";import"./Many2OneInput-efa6d57b.js";import"./index-ac790217.js";const n="File input specific",qA={title:"Work in progress/Widgets/File/FileInput",component:C,argTypes:{...f,onFilenameChange:{action:"onFilenameChange",description:"Callback function fired when the filename changes",table:{category:n}},filename:{description:"Complete filename with extension",table:{category:n}},onChange:{action:"onChange",table:{category:n}},value:{description:"File value in base 64",table:{category:n}}}},t=A=>{const[E,D]=l.useState(A.value);return c.jsx(C,{...A,value:E,onChange:o=>{var Q;D(o),(Q=A.onChange)==null||Q.call(A,o)}})},e=t.bind({});e.args={filename:"foo.png",readOnly:!1,required:!1,locale:"en_US",value:"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"};const r=t.bind({});r.args={filename:"foo.png",readOnly:!1,required:!0,locale:"en_US",value:"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"};const i=t.bind({});i.args={filename:"foo.png",readOnly:!0,required:!1,locale:"en_US",value:"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"};var B,p,a;e.parameters={...e.parameters,docs:{...(B=e.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  return <FileInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(a=(p=e.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};var h,g,u;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  return <FileInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var m,s,I;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  return <FileInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(I=(s=i.parameters)==null?void 0:s.docs)==null?void 0:I.source}}};const _A=["Basic","Required","ReadOnly"];export{e as Basic,i as ReadOnly,r as Required,_A as __namedExportsOrder,qA as default};
