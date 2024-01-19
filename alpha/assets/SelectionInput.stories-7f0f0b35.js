import{j as u}from"./jsx-runtime-f6d73c06.js";import{r as i}from"./index-8ee6c85d.js";import{S as m}from"./SelectionInput-222e5ca1.js";import{B as c}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-f71162e2.js";import"./index-f36c3419.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./index-d971594d.js";import"./isVisible-28761958.js";import"./index-d8bbe3ff.js";import"./toArray-d3285e7a.js";import"./PurePanel-7427106a.js";import"./Overflow-be9dddcb.js";import"./omit-c2a66ff4.js";import"./motion-343f592f.js";import"./useVariants-98bbef89.js";import"./context-1cb86123.js";import"./asyncToGenerator-70b03fb5.js";import"./useLocale-cc382a13.js";import"./Compact-f42963ce.js";import"./compact-item-c03ebbb7.js";import"./slide-cc98ec73.js";import"./CheckOutlined-9e94d9a6.js";import"./CloseCircleFilled-8383c3aa.js";import"./CloseOutlined-d6b1b11b.js";import"./DownOutlined-67df1f86.js";import"./SearchOutlined-84e5fa13.js";const v={1:"One",2:"Two",3:"Three"},L={title:"Work in progress/Widgets/Selection/SelectionInput",component:m,argTypes:{...c,locale:{table:{disable:!0}}}},d=e=>{const[l,o]=i.useState(e.value);return i.useEffect(()=>{o(e.value)},[e.value]),u.jsx(m,{...e,value:l,onChange:r=>{var a;o(r),(a=e.onChange)==null||a.call(e,r)}})},t=d.bind({});t.args={required:!1,readOnly:!1,selectionValues:v,value:"2"};var s,n,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <SelectionInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const M=["Basic"];export{t as Basic,M as __namedExportsOrder,L as default};
