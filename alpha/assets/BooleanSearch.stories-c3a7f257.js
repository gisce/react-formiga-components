import{j as l}from"./jsx-runtime-f6d73c06.js";import{r as p}from"./index-8ee6c85d.js";import{B as n}from"./BooleanSearch-8dcb61b4.js";import{L as c}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./SelectionInput-49036de0.js";import"./styled-components.browser.esm-9d5760e0.js";import"./index-d66c9264.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./isVisible-ba0f3bfc.js";import"./index-99f8f215.js";import"./toArray-7c8d8abc.js";import"./PurePanel-6fb313a7.js";import"./Overflow-38d9e44a.js";import"./omit-8a9b0517.js";import"./motion-343f592f.js";import"./useVariants-83590930.js";import"./context-39b5ed41.js";import"./asyncToGenerator-668af2b4.js";import"./useLocale-33ca30a9.js";import"./Compact-42703e7c.js";import"./compact-item-d72b0080.js";import"./slide-66cc5359.js";import"./CheckOutlined-a3c23fa5.js";import"./CloseCircleFilled-abb829f0.js";import"./CloseOutlined-4f476cb1.js";import"./DownOutlined-e1dc5b74.js";import"./SearchOutlined-271c449e.js";import"./SelectionValue-320cacef.js";import"./LocaleContext-948e5f1f.js";const M={title:"Work in progress/Widgets/Boolean/BooleanSearch",component:n,argTypes:{...c}},v=e=>{const[u,r]=p.useState(e.value);return p.useEffect(()=>{r(e.value)},[e.value]),l.jsx(n,{...e,value:u,onChange:t=>{var a;r(t),(a=e.onChange)==null||a.call(e,t)}})},o=v.bind({});o.args={value:"true"};var m,i,s;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <BooleanSearch {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const N=["Basic"];export{o as Basic,N as __namedExportsOrder,M as default};
