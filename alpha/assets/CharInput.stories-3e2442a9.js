import{j as f}from"./jsx-runtime-f6d73c06.js";import{r as i}from"./index-8ee6c85d.js";import{C as d}from"./CharInput-d7e864c0.js";import{B as h}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-e721a1b2.js";import"./index-7b090294.js";import"./assertThisInitialized-f89cd6ac.js";import"./index-8eb238e3.js";import"./Field-86784413.js";import"./Label-d9373612.js";import"./index-d760291f.js";import"./toArray-f9441672.js";import"./isVisible-f24c26d5.js";import"./index-fbe8605a.js";import"./motion-343f592f.js";import"./roundedArrow-d4d9ea1f.js";import"./reactNode-c432c2b0.js";import"./Compact-d63c1d22.js";import"./LocaleContext-58eb36ec.js";import"./context-4f71b533.js";import"./asyncToGenerator-ae37becc.js";import"./omit-c5f18c7c.js";import"./collapse-97de76d4.js";import"./useCSSVarCls-313dcfc7.js";import"./row-31b109c6.js";import"./useLocale-3708b049.js";import"./CheckCircleFilled-a5402013.js";import"./CloseCircleFilled-8482a999.js";import"./ExclamationCircleFilled-47ac793a.js";import"./compact-item-99530beb.js";import"./index-fe8159f5.js";import"./index-e5acbb5f.js";import"./useVariants-78dc91e2.js";import"./SearchOutlined-f9428929.js";import"./button-da513854.js";import"./index-5c8aaf67.js";import"./theme-ac0bd082.js";const ae={title:"Work in progress/Widgets/Char/CharInput",component:d,argTypes:{...h,isPassword:{description:"The input is a password",table:{defaultValue:{summary:!1},category:"Char specific"}},locale:{table:{disable:!0}}}},g=e=>{const[v,t]=i.useState(e.value);return i.useEffect(()=>{t(e.value)},[e.value]),f.jsx(d,{...e,value:v,onChange:s=>{var o;t(s),(o=e.onChange)==null||o.call(e,s)}})},r=g.bind({});r.args={required:!1,readOnly:!1,isPassword:!1};const a=g.bind({});a.args={required:!1,readOnly:!1,isPassword:!0};var p,n,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const te=["Basic","Password"];export{r as Basic,a as Password,te as __namedExportsOrder,ae as default};
