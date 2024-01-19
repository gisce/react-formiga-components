import{j as f}from"./jsx-runtime-f6d73c06.js";import{r as i}from"./index-8ee6c85d.js";import{C as d}from"./CharInput-43a84c14.js";import{B as h}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-f71162e2.js";import"./index-f36c3419.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./Field-a7cc5509.js";import"./Label-07df3c1d.js";import"./index-d8bbe3ff.js";import"./toArray-d3285e7a.js";import"./isVisible-28761958.js";import"./index-f3897118.js";import"./motion-343f592f.js";import"./roundedArrow-eeec1c6c.js";import"./reactNode-c432c2b0.js";import"./Compact-f42963ce.js";import"./LocaleContext-e44580cc.js";import"./context-1cb86123.js";import"./asyncToGenerator-70b03fb5.js";import"./omit-c2a66ff4.js";import"./collapse-97de76d4.js";import"./row-a9151da8.js";import"./useLocale-cc382a13.js";import"./CheckCircleFilled-a3a9ebd2.js";import"./CloseCircleFilled-8383c3aa.js";import"./ExclamationCircleFilled-72a8eb89.js";import"./compact-item-c03ebbb7.js";import"./index-7f6f4650.js";import"./index-8a2d9a84.js";import"./useVariants-98bbef89.js";import"./SearchOutlined-84e5fa13.js";import"./button-5dad7698.js";import"./index-2c809c7b.js";import"./theme-ac0bd082.js";const re={title:"Work in progress/Widgets/Char/CharInput",component:d,argTypes:{...h,isPassword:{description:"The input is a password",table:{defaultValue:{summary:!1},category:"Char specific"}},locale:{table:{disable:!0}}}},g=e=>{const[v,t]=i.useState(e.value);return i.useEffect(()=>{t(e.value)},[e.value]),f.jsx(d,{...e,value:v,onChange:s=>{var o;t(s),(o=e.onChange)==null||o.call(e,s)}})},r=g.bind({});r.args={required:!1,readOnly:!1,isPassword:!1};const a=g.bind({});a.args={required:!1,readOnly:!1,isPassword:!0};var p,n,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <CharInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(u=(n=r.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};var m,l,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <CharInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const ae=["Basic","Password"];export{r as Basic,a as Password,ae as __namedExportsOrder,re as default};
