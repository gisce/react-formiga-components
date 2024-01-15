import{j as l}from"./jsx-runtime-f6d73c06.js";import{r as p}from"./index-8ee6c85d.js";import{B as n}from"./BooleanSearch-be0b5da8.js";import{L as c}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./SelectionInput-5c924854.js";import"./styled-components.browser.esm-b0ed5b60.js";import"./index-b03af66d.js";import"./assertThisInitialized-601f600e.js";import"./index-8eb238e3.js";import"./index-e98f2b77.js";import"./isVisible-972dbae1.js";import"./index-fb0b6330.js";import"./toArray-cadbd5cb.js";import"./PurePanel-270ef2ff.js";import"./pickAttrs-95892129.js";import"./Overflow-597a9b64.js";import"./omit-afa65c0b.js";import"./motion-343f592f.js";import"./useVariants-f34488a3.js";import"./context-ccc1de45.js";import"./asyncToGenerator-098b8a85.js";import"./useCSSVarCls-b1a1e215.js";import"./Compact-929b86a9.js";import"./compact-item-d6c7d423.js";import"./slide-4aa58205.js";import"./CheckOutlined-efeb2520.js";import"./CloseCircleFilled-02876ee0.js";import"./CloseOutlined-16733440.js";import"./SearchOutlined-21a685c2.js";import"./SelectionValue-320cacef.js";import"./LocaleContext-58eb36ec.js";const N={title:"Work in progress/Widgets/Boolean/BooleanSearch",component:n,argTypes:{...c}},v=o=>{const[u,r]=p.useState(o.value);return p.useEffect(()=>{r(o.value)},[o.value]),l.jsx(n,{...o,value:u,onChange:t=>{var a;r(t),(a=o.onChange)==null||a.call(o,t)}})},e=v.bind({});e.args={value:"true"};var m,i,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <BooleanSearch {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const P=["Basic"];export{e as Basic,P as __namedExportsOrder,N as default};
