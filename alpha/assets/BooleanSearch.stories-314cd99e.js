import{j as l}from"./jsx-runtime-f6d73c06.js";import{r as p}from"./index-8ee6c85d.js";import{B as n}from"./BooleanSearch-8f89f448.js";import{L as c}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./SelectionInput-d95f03bb.js";import"./styled-components.browser.esm-d9ff1479.js";import"./index-4cbabd78.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./isVisible-21091144.js";import"./index-8d7211d9.js";import"./toArray-fde42edc.js";import"./PurePanel-fe490c6d.js";import"./Overflow-e03fd39c.js";import"./omit-699eb5ab.js";import"./motion-343f592f.js";import"./useVariants-a5c7fa8d.js";import"./context-4b385781.js";import"./asyncToGenerator-0e679def.js";import"./useLocale-4d1812fe.js";import"./Compact-5059a700.js";import"./compact-item-5948db7d.js";import"./slide-b3bda38b.js";import"./CheckOutlined-49492fbe.js";import"./CloseCircleFilled-f91b490c.js";import"./CloseOutlined-af1a420e.js";import"./DownOutlined-b6216cc5.js";import"./SearchOutlined-4644c241.js";import"./SelectionValue-320cacef.js";import"./LocaleContext-948e5f1f.js";const M={title:"Work in progress/Widgets/Boolean/BooleanSearch",component:n,argTypes:{...c}},v=e=>{const[u,r]=p.useState(e.value);return p.useEffect(()=>{r(e.value)},[e.value]),l.jsx(n,{...e,value:u,onChange:t=>{var a;r(t),(a=e.onChange)==null||a.call(e,t)}})},o=v.bind({});o.args={value:"true"};var m,i,s;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <BooleanSearch {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const N=["Basic"];export{o as Basic,N as __namedExportsOrder,M as default};
