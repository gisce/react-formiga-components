import{j as l}from"./jsx-runtime-f6d73c06.js";import{r as p}from"./index-8ee6c85d.js";import{B as n}from"./BooleanSearch-7b89ff44.js";import{L as c}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./SelectionInput-a3f8fc4e.js";import"./styled-components.browser.esm-53a58144.js";import"./index-4e0f86e8.js";import"./assertThisInitialized-601f600e.js";import"./index-8eb238e3.js";import"./index-107d9b63.js";import"./isVisible-b65992d0.js";import"./index-1e0e3486.js";import"./toArray-66fc3202.js";import"./PurePanel-e84627ff.js";import"./pickAttrs-36fe86de.js";import"./Overflow-90777bac.js";import"./omit-c7331b12.js";import"./motion-343f592f.js";import"./statusUtils-ea7713be.js";import"./Compact-f5d517ab.js";import"./context-0e2d5d5e.js";import"./asyncToGenerator-4dda2c7d.js";import"./compact-item-0cc18453.js";import"./slide-2e0b60dc.js";import"./CheckOutlined-3c6140f7.js";import"./CloseCircleFilled-d9375026.js";import"./CloseOutlined-9f6bbc94.js";import"./SearchOutlined-820a599b.js";import"./useCSSVarCls-d323ff87.js";import"./SelectionValue-320cacef.js";import"./LocaleContext-58eb36ec.js";const N={title:"Work in progress/Widgets/Boolean/BooleanSearch",component:n,argTypes:{...c}},v=o=>{const[u,r]=p.useState(o.value);return p.useEffect(()=>{r(o.value)},[o.value]),l.jsx(n,{...o,value:u,onChange:t=>{var a;r(t),(a=o.onChange)==null||a.call(o,t)}})},e=v.bind({});e.args={value:"true"};var m,i,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <BooleanSearch {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const P=["Basic"];export{e as Basic,P as __namedExportsOrder,N as default};
