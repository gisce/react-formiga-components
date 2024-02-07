import{j as l}from"./jsx-runtime-f6d73c06.js";import{r as p}from"./index-8ee6c85d.js";import{B as n}from"./BooleanSearch-14c41263.js";import{L as c}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./SelectionInput-c43e38f2.js";import"./styled-components.browser.esm-e721a1b2.js";import"./index-7b090294.js";import"./assertThisInitialized-f89cd6ac.js";import"./index-8eb238e3.js";import"./index-483b84f9.js";import"./isVisible-f24c26d5.js";import"./index-d760291f.js";import"./toArray-f9441672.js";import"./PurePanel-673b028b.js";import"./pickAttrs-217b3c15.js";import"./Overflow-c373506c.js";import"./omit-c5f18c7c.js";import"./motion-343f592f.js";import"./useVariants-78dc91e2.js";import"./context-4f71b533.js";import"./asyncToGenerator-ae37becc.js";import"./useLocale-3708b049.js";import"./useCSSVarCls-313dcfc7.js";import"./Compact-d63c1d22.js";import"./compact-item-99530beb.js";import"./slide-282c9264.js";import"./CheckOutlined-33d49c68.js";import"./CloseCircleFilled-8482a999.js";import"./CloseOutlined-0c9b81b5.js";import"./DownOutlined-bb199e6a.js";import"./SearchOutlined-f9428929.js";import"./SelectionValue-320cacef.js";import"./LocaleContext-58eb36ec.js";const Q={title:"Work in progress/Widgets/Boolean/BooleanSearch",component:n,argTypes:{...c}},v=o=>{const[u,e]=p.useState(o.value);return p.useEffect(()=>{e(o.value)},[o.value]),l.jsx(n,{...o,value:u,onChange:t=>{var a;e(t),(a=o.onChange)==null||a.call(o,t)}})},r=v.bind({});r.args={value:"true"};var m,i,s;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <BooleanSearch {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const U=["Basic"];export{r as Basic,U as __namedExportsOrder,Q as default};