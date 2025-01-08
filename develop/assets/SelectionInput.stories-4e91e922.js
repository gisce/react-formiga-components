import{j as u}from"./jsx-runtime-f6d73c06.js";import{r as s}from"./index-8ee6c85d.js";import{S as m}from"./SelectionInput-d95f03bb.js";import{B as c}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-d9ff1479.js";import"./index-4cbabd78.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./isVisible-21091144.js";import"./index-8d7211d9.js";import"./toArray-fde42edc.js";import"./PurePanel-fe490c6d.js";import"./Overflow-e03fd39c.js";import"./omit-699eb5ab.js";import"./motion-343f592f.js";import"./useVariants-a5c7fa8d.js";import"./context-4b385781.js";import"./asyncToGenerator-0e679def.js";import"./useLocale-4d1812fe.js";import"./Compact-5059a700.js";import"./compact-item-5948db7d.js";import"./slide-b3bda38b.js";import"./CheckOutlined-49492fbe.js";import"./CloseCircleFilled-f91b490c.js";import"./CloseOutlined-af1a420e.js";import"./DownOutlined-b6216cc5.js";import"./SearchOutlined-4644c241.js";const v={1:"One",2:"Two",3:"Three"},K={title:"Work in progress/Widgets/Selection/SelectionInput",component:m,argTypes:{...c,locale:{table:{disable:!0}}}},d=e=>{const[l,o]=s.useState(e.value);return s.useEffect(()=>{o(e.value)},[e.value]),u.jsx(m,{...e,value:l,onChange:r=>{var a;o(r),(a=e.onChange)==null||a.call(e,r)}})},t=d.bind({});t.args={required:!1,readOnly:!1,selectionValues:v,value:"2"};var i,n,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <SelectionInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const L=["Basic"];export{t as Basic,L as __namedExportsOrder,K as default};
