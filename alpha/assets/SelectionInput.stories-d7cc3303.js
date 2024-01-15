import{j as u}from"./jsx-runtime-f6d73c06.js";import{r as i}from"./index-8ee6c85d.js";import{S as m}from"./SelectionInput-a3f8fc4e.js";import{B as c}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-53a58144.js";import"./index-4e0f86e8.js";import"./assertThisInitialized-601f600e.js";import"./index-8eb238e3.js";import"./index-107d9b63.js";import"./isVisible-b65992d0.js";import"./index-1e0e3486.js";import"./toArray-66fc3202.js";import"./PurePanel-e84627ff.js";import"./pickAttrs-36fe86de.js";import"./Overflow-90777bac.js";import"./omit-c7331b12.js";import"./motion-343f592f.js";import"./statusUtils-ea7713be.js";import"./Compact-f5d517ab.js";import"./context-0e2d5d5e.js";import"./asyncToGenerator-4dda2c7d.js";import"./compact-item-0cc18453.js";import"./slide-2e0b60dc.js";import"./CheckOutlined-3c6140f7.js";import"./CloseCircleFilled-d9375026.js";import"./CloseOutlined-9f6bbc94.js";import"./SearchOutlined-820a599b.js";import"./useCSSVarCls-d323ff87.js";const v={1:"One",2:"Two",3:"Three"},L={title:"Work in progress/Widgets/Selection/SelectionInput",component:m,argTypes:{...c,locale:{table:{disable:!0}}}},d=e=>{const[l,o]=i.useState(e.value);return i.useEffect(()=>{o(e.value)},[e.value]),u.jsx(m,{...e,value:l,onChange:r=>{var a;o(r),(a=e.onChange)==null||a.call(e,r)}})},t=d.bind({});t.args={required:!1,readOnly:!1,selectionValues:v,value:"2"};var s,n,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <SelectionInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const M=["Basic"];export{t as Basic,M as __namedExportsOrder,L as default};
