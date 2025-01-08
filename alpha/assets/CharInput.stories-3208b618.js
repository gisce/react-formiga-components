import{j as f}from"./jsx-runtime-f6d73c06.js";import{r as i}from"./index-8ee6c85d.js";import{C as d}from"./CharInput-7bbd2434.js";import{B as h}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-d9ff1479.js";import"./index-4cbabd78.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./Field-d0e307d9.js";import"./Label-5dc05267.js";import"./index-8d7211d9.js";import"./toArray-fde42edc.js";import"./isVisible-21091144.js";import"./index-7d371500.js";import"./motion-343f592f.js";import"./roundedArrow-1c6c6973.js";import"./reactNode-c432c2b0.js";import"./Compact-5059a700.js";import"./LocaleContext-948e5f1f.js";import"./context-4b385781.js";import"./asyncToGenerator-0e679def.js";import"./omit-699eb5ab.js";import"./collapse-97de76d4.js";import"./row-0fcba45e.js";import"./useLocale-4d1812fe.js";import"./CheckCircleFilled-69f018f7.js";import"./CloseCircleFilled-f91b490c.js";import"./ExclamationCircleFilled-7836cda2.js";import"./compact-item-5948db7d.js";import"./index-5a0ad9a9.js";import"./index-ab145b10.js";import"./useVariants-a5c7fa8d.js";import"./SearchOutlined-4644c241.js";import"./button-459101f3.js";import"./index-71ed9248.js";import"./theme-ac0bd082.js";const re={title:"Work in progress/Widgets/Char/CharInput",component:d,argTypes:{...h,isPassword:{description:"The input is a password",table:{defaultValue:{summary:!1},category:"Char specific"}},locale:{table:{disable:!0}}}},g=e=>{const[v,t]=i.useState(e.value);return i.useEffect(()=>{t(e.value)},[e.value]),f.jsx(d,{...e,value:v,onChange:s=>{var o;t(s),(o=e.onChange)==null||o.call(e,s)}})},r=g.bind({});r.args={required:!1,readOnly:!1,isPassword:!1};const a=g.bind({});a.args={required:!1,readOnly:!1,isPassword:!0};var p,n,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
