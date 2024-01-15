import{j as f}from"./jsx-runtime-f6d73c06.js";import{r as i}from"./index-8ee6c85d.js";import{C as d}from"./CharInput-36c235c6.js";import{B as h}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-f33cca5c.js";import"./index-d0686b25.js";import"./assertThisInitialized-601f600e.js";import"./index-8eb238e3.js";import"./Field-d4acf822.js";import"./Label-1f509d27.js";import"./index-c0c995ae.js";import"./toArray-702c099d.js";import"./isVisible-10508b7a.js";import"./index-ebc937d3.js";import"./motion-343f592f.js";import"./roundedArrow-12957d20.js";import"./reactNode-b58523ea.js";import"./Compact-190860f8.js";import"./LocaleContext-58eb36ec.js";import"./context-b943a423.js";import"./asyncToGenerator-738c820e.js";import"./omit-05916825.js";import"./collapse-97de76d4.js";import"./useCSSVarCls-2e83a7af.js";import"./row-556c4485.js";import"./useLocale-e5a33693.js";import"./CheckCircleFilled-8092a51e.js";import"./CloseCircleFilled-2f02bec5.js";import"./ExclamationCircleFilled-e0925294.js";import"./compact-item-4a97683c.js";import"./index-33abafc5.js";import"./index-a92188ed.js";import"./useVariants-fa326d5c.js";import"./SearchOutlined-98c63492.js";import"./button-2157679a.js";import"./index-077eff47.js";import"./theme-ac0bd082.js";const ae={title:"Work in progress/Widgets/Char/CharInput",component:d,argTypes:{...h,isPassword:{description:"The input is a password",table:{defaultValue:{summary:!1},category:"Char specific"}},locale:{table:{disable:!0}}}},g=e=>{const[v,t]=i.useState(e.value);return i.useEffect(()=>{t(e.value)},[e.value]),f.jsx(d,{...e,value:v,onChange:s=>{var o;t(s),(o=e.onChange)==null||o.call(e,s)}})},r=g.bind({});r.args={required:!1,readOnly:!1,isPassword:!1};const a=g.bind({});a.args={required:!1,readOnly:!1,isPassword:!0};var p,n,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
