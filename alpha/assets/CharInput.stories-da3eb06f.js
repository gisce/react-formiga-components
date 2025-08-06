import{j as f}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{C as d}from"./CharInput-c55107f9.js";import{B as h}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-06c7d463.js";import"./index-86654eeb.js";import"./genStyleUtils-28a6e765.js";import"./assertThisInitialized-11245cea.js";import"./Field-346eaafc.js";import"./Label-6c2684e5.js";import"./QuestionCircleOutlined-6633361d.js";import"./QuestionCircleOutlined-04e9cd25.js";import"./AntdIcon-16889e64.js";import"./index-2a201fcf.js";import"./index-fe67bf5a.js";import"./index-356ca88b.js";import"./index-da03a860.js";import"./context-f193351c.js";import"./wrapNativeSuper-e3a961e5.js";import"./Compact-a3364df5.js";import"./useSize-06920fd3.js";import"./reactNode-9d24d027.js";import"./LocaleContext-019b1374.js";import"./index-acf736be.js";import"./useCSSVarCls-56ee7f0e.js";import"./collapse-97de76d4.js";import"./row-8e2bb960.js";import"./AntdIcon-2900fcfe.js";import"./useLocale-8b2da478.js";import"./CheckCircleFilled-e37ba4c2.js";import"./CheckCircleFilled-1392c7ce.js";import"./CloseCircleFilled-1312d6f5.js";import"./CloseCircleFilled-257b815e.js";import"./ExclamationCircleFilled-e4581600.js";import"./ExclamationCircleFilled-eba6e68e.js";import"./compact-item-3b95daf6.js";import"./LoadingOutlined-722c611a.js";import"./index-2bdda7d5.js";import"./index-e1a7f8dc.js";import"./TextArea-80c99f7a.js";import"./useVariants-a27d5c24.js";import"./SearchOutlined-7d2c8869.js";import"./SearchOutlined-11b57711.js";import"./EyeInvisibleOutlined-4021859d.js";import"./button-b6c4a6d6.js";import"./index-64a5fe42.js";import"./theme-ac0bd082.js";const cr={title:"Work in progress/Widgets/Char/CharInput",component:d,argTypes:{...h,isPassword:{description:"The input is a password",table:{defaultValue:{summary:!1},category:"Char specific"}},locale:{table:{disable:!0}}}},g=r=>{const[v,a]=i.useState(r.value);return i.useEffect(()=>{a(r.value)},[r.value]),f.jsx(d,{...r,value:v,onChange:o=>{var s;a(o),(s=r.onChange)==null||s.call(r,o)}})},e=g.bind({});e.args={required:!1,readOnly:!1,isPassword:!1};const t=g.bind({});t.args={required:!1,readOnly:!1,isPassword:!0};var p,m,n;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
