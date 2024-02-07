import{j as f}from"./jsx-runtime-f6d73c06.js";import{r as i}from"./index-8ee6c85d.js";import{C as d}from"./CharInput-7b6de44a.js";import{B as h}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-9d5760e0.js";import"./index-d66c9264.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./Field-309a2659.js";import"./Label-89c6965c.js";import"./index-99f8f215.js";import"./toArray-7c8d8abc.js";import"./isVisible-ba0f3bfc.js";import"./index-fa6ed0a5.js";import"./motion-343f592f.js";import"./roundedArrow-77f12b90.js";import"./reactNode-c432c2b0.js";import"./Compact-42703e7c.js";import"./LocaleContext-948e5f1f.js";import"./context-39b5ed41.js";import"./asyncToGenerator-668af2b4.js";import"./omit-8a9b0517.js";import"./collapse-97de76d4.js";import"./row-14c4df27.js";import"./useLocale-33ca30a9.js";import"./CheckCircleFilled-7f76e67f.js";import"./CloseCircleFilled-abb829f0.js";import"./ExclamationCircleFilled-58384750.js";import"./compact-item-d72b0080.js";import"./index-a71e9642.js";import"./index-56618587.js";import"./useVariants-83590930.js";import"./SearchOutlined-271c449e.js";import"./button-26c76043.js";import"./index-62e8e9d6.js";import"./theme-ac0bd082.js";const re={title:"Work in progress/Widgets/Char/CharInput",component:d,argTypes:{...h,isPassword:{description:"The input is a password",table:{defaultValue:{summary:!1},category:"Char specific"}},locale:{table:{disable:!0}}}},g=e=>{const[v,t]=i.useState(e.value);return i.useEffect(()=>{t(e.value)},[e.value]),f.jsx(d,{...e,value:v,onChange:s=>{var o;t(s),(o=e.onChange)==null||o.call(e,s)}})},r=g.bind({});r.args={required:!1,readOnly:!1,isPassword:!1};const a=g.bind({});a.args={required:!1,readOnly:!1,isPassword:!0};var p,n,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
