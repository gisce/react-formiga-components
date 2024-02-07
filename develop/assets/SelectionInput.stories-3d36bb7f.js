import{j as u}from"./jsx-runtime-f6d73c06.js";import{r as s}from"./index-8ee6c85d.js";import{S as m}from"./SelectionInput-49036de0.js";import{B as c}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-9d5760e0.js";import"./index-d66c9264.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./isVisible-ba0f3bfc.js";import"./index-99f8f215.js";import"./toArray-7c8d8abc.js";import"./PurePanel-6fb313a7.js";import"./Overflow-38d9e44a.js";import"./omit-8a9b0517.js";import"./motion-343f592f.js";import"./useVariants-83590930.js";import"./context-39b5ed41.js";import"./asyncToGenerator-668af2b4.js";import"./useLocale-33ca30a9.js";import"./Compact-42703e7c.js";import"./compact-item-d72b0080.js";import"./slide-66cc5359.js";import"./CheckOutlined-a3c23fa5.js";import"./CloseCircleFilled-abb829f0.js";import"./CloseOutlined-4f476cb1.js";import"./DownOutlined-e1dc5b74.js";import"./SearchOutlined-271c449e.js";const v={1:"One",2:"Two",3:"Three"},K={title:"Work in progress/Widgets/Selection/SelectionInput",component:m,argTypes:{...c,locale:{table:{disable:!0}}}},d=e=>{const[l,o]=s.useState(e.value);return s.useEffect(()=>{o(e.value)},[e.value]),u.jsx(m,{...e,value:l,onChange:r=>{var a;o(r),(a=e.onChange)==null||a.call(e,r)}})},t=d.bind({});t.args={required:!1,readOnly:!1,selectionValues:v,value:"2"};var i,n,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <SelectionInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const L=["Basic"];export{t as Basic,L as __namedExportsOrder,K as default};
