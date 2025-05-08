import{j as f}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{C as d}from"./CharInput-d094b3c3.js";import{B as h}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-19c13f0d.js";import"./index-86654eeb.js";import"./genStyleUtils-d6a45a29.js";import"./assertThisInitialized-11245cea.js";import"./Field-c75a7856.js";import"./Label-9d33cffb.js";import"./QuestionCircleOutlined-35a42c77.js";import"./AntdIcon-16889e64.js";import"./index-6179d90a.js";import"./index-d7c29613.js";import"./index-da03a860.js";import"./index-ed1c3b01.js";import"./context-6d1b332f.js";import"./wrapNativeSuper-e3a961e5.js";import"./roundedArrow-d6561726.js";import"./Compact-cceb4eea.js";import"./useSize-4ffb0e60.js";import"./motion-bd90a81e.js";import"./reactNode-9d24d027.js";import"./LocaleContext-7544963d.js";import"./useCSSVarCls-e631847e.js";import"./collapse-97de76d4.js";import"./row-29336662.js";import"./AntdIcon-2c3fcfd3.js";import"./useLocale-c6a3bdb5.js";import"./CheckCircleFilled-b250ff1c.js";import"./CheckCircleFilled-1392c7ce.js";import"./CloseCircleFilled-0d882928.js";import"./CloseCircleFilled-257b815e.js";import"./ExclamationCircleFilled-866a3ba1.js";import"./ExclamationCircleFilled-eba6e68e.js";import"./compact-item-b07e9fb6.js";import"./LoadingOutlined-722c611a.js";import"./index-19b540cb.js";import"./index-7d845360.js";import"./TextArea-294b3566.js";import"./useVariants-911433c9.js";import"./SearchOutlined-dde1385d.js";import"./SearchOutlined-11b57711.js";import"./EyeInvisibleOutlined-4021859d.js";import"./button-a839f4af.js";import"./index-6fce385f.js";import"./theme-ac0bd082.js";const cr={title:"Work in progress/Widgets/Char/CharInput",component:d,argTypes:{...h,isPassword:{description:"The input is a password",table:{defaultValue:{summary:!1},category:"Char specific"}},locale:{table:{disable:!0}}}},g=r=>{const[v,a]=i.useState(r.value);return i.useEffect(()=>{a(r.value)},[r.value]),f.jsx(d,{...r,value:v,onChange:o=>{var s;a(o),(s=r.onChange)==null||s.call(r,o)}})},e=g.bind({});e.args={required:!1,readOnly:!1,isPassword:!1};const t=g.bind({});t.args={required:!1,readOnly:!1,isPassword:!0};var p,m,n;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
