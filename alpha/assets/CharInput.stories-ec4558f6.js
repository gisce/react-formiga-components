import{j as f}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{C as d}from"./CharInput-7bba787f.js";import{B as h}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-a237e5f9.js";import"./index-86654eeb.js";import"./genStyleUtils-28a6e765.js";import"./assertThisInitialized-11245cea.js";import"./Field-32a341be.js";import"./Label-ae30dceb.js";import"./QuestionCircleOutlined-6633361d.js";import"./QuestionCircleOutlined-04e9cd25.js";import"./AntdIcon-16889e64.js";import"./index-df709f45.js";import"./index-6141dcc2.js";import"./index-356ca88b.js";import"./index-da03a860.js";import"./context-b387624d.js";import"./wrapNativeSuper-e3a961e5.js";import"./Compact-a3364df5.js";import"./useSize-06920fd3.js";import"./reactNode-9d24d027.js";import"./LocaleContext-6a38b50b.js";import"./index-dfc37164.js";import"./useCSSVarCls-56ee7f0e.js";import"./collapse-97de76d4.js";import"./row-8e2bb960.js";import"./AntdIcon-eb4d8409.js";import"./useLocale-8b2da478.js";import"./CheckCircleFilled-f46cad22.js";import"./CheckCircleFilled-1392c7ce.js";import"./CloseCircleFilled-d4e8e9a6.js";import"./CloseCircleFilled-257b815e.js";import"./ExclamationCircleFilled-b40e1c9f.js";import"./ExclamationCircleFilled-eba6e68e.js";import"./compact-item-869a41a4.js";import"./LoadingOutlined-722c611a.js";import"./index-45c0c470.js";import"./index-8c4dacd9.js";import"./TextArea-4f362629.js";import"./useVariants-6604f14b.js";import"./SearchOutlined-a215f538.js";import"./SearchOutlined-11b57711.js";import"./EyeInvisibleOutlined-4021859d.js";import"./button-a7ab0380.js";import"./index-eacc853e.js";import"./theme-ac0bd082.js";const cr={title:"Work in progress/Widgets/Char/CharInput",component:d,argTypes:{...h,isPassword:{description:"The input is a password",table:{defaultValue:{summary:!1},category:"Char specific"}},locale:{table:{disable:!0}}}},g=r=>{const[v,a]=i.useState(r.value);return i.useEffect(()=>{a(r.value)},[r.value]),f.jsx(d,{...r,value:v,onChange:o=>{var s;a(o),(s=r.onChange)==null||s.call(r,o)}})},e=g.bind({});e.args={required:!1,readOnly:!1,isPassword:!1};const t=g.bind({});t.args={required:!1,readOnly:!1,isPassword:!0};var p,m,n;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <CharInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var u,l,c;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <CharInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const dr=["Basic","Password"];export{e as Basic,t as Password,dr as __namedExportsOrder,cr as default};
