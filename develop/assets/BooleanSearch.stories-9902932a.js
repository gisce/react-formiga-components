import{j as l}from"./jsx-runtime-f6d73c06.js";import{r as p}from"./index-8ee6c85d.js";import{B as n}from"./BooleanSearch-e9757569.js";import{L as c}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./SelectionInput-222e5ca1.js";import"./styled-components.browser.esm-f71162e2.js";import"./index-f36c3419.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./index-d971594d.js";import"./isVisible-28761958.js";import"./index-d8bbe3ff.js";import"./toArray-d3285e7a.js";import"./PurePanel-7427106a.js";import"./Overflow-be9dddcb.js";import"./omit-c2a66ff4.js";import"./motion-343f592f.js";import"./useVariants-98bbef89.js";import"./context-1cb86123.js";import"./asyncToGenerator-70b03fb5.js";import"./useLocale-cc382a13.js";import"./Compact-f42963ce.js";import"./compact-item-c03ebbb7.js";import"./slide-cc98ec73.js";import"./CheckOutlined-9e94d9a6.js";import"./CloseCircleFilled-8383c3aa.js";import"./CloseOutlined-d6b1b11b.js";import"./DownOutlined-67df1f86.js";import"./SearchOutlined-84e5fa13.js";import"./SelectionValue-320cacef.js";import"./LocaleContext-e44580cc.js";const N={title:"Work in progress/Widgets/Boolean/BooleanSearch",component:n,argTypes:{...c}},v=o=>{const[u,r]=p.useState(o.value);return p.useEffect(()=>{r(o.value)},[o.value]),l.jsx(n,{...o,value:u,onChange:t=>{var a;r(t),(a=o.onChange)==null||a.call(o,t)}})},e=v.bind({});e.args={value:"true"};var m,i,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <BooleanSearch {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const P=["Basic"];export{e as Basic,P as __namedExportsOrder,N as default};
