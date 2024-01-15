import{j as u}from"./jsx-runtime-f6d73c06.js";import{r as i}from"./index-8ee6c85d.js";import{S as m}from"./SelectionInput-5c924854.js";import{B as c}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-b0ed5b60.js";import"./index-b03af66d.js";import"./assertThisInitialized-601f600e.js";import"./index-8eb238e3.js";import"./index-e98f2b77.js";import"./isVisible-972dbae1.js";import"./index-fb0b6330.js";import"./toArray-cadbd5cb.js";import"./PurePanel-270ef2ff.js";import"./pickAttrs-95892129.js";import"./Overflow-597a9b64.js";import"./omit-afa65c0b.js";import"./motion-343f592f.js";import"./useVariants-f34488a3.js";import"./context-ccc1de45.js";import"./asyncToGenerator-098b8a85.js";import"./useCSSVarCls-b1a1e215.js";import"./Compact-929b86a9.js";import"./compact-item-d6c7d423.js";import"./slide-4aa58205.js";import"./CheckOutlined-efeb2520.js";import"./CloseCircleFilled-02876ee0.js";import"./CloseOutlined-16733440.js";import"./SearchOutlined-21a685c2.js";const v={1:"One",2:"Two",3:"Three"},L={title:"Work in progress/Widgets/Selection/SelectionInput",component:m,argTypes:{...c,locale:{table:{disable:!0}}}},d=e=>{const[l,o]=i.useState(e.value);return i.useEffect(()=>{o(e.value)},[e.value]),u.jsx(m,{...e,value:l,onChange:r=>{var a;o(r),(a=e.onChange)==null||a.call(e,r)}})},t=d.bind({});t.args={required:!1,readOnly:!1,selectionValues:v,value:"2"};var s,n,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <SelectionInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const M=["Basic"];export{t as Basic,M as __namedExportsOrder,L as default};
