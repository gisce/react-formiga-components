import{j as f}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{C as d}from"./CharInput-9e32b16f.js";import{B as h}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-a41aca50.js";import"./index-86654eeb.js";import"./genStyleUtils-4c750380.js";import"./assertThisInitialized-11245cea.js";import"./Field-757014d2.js";import"./Label-0f0993ff.js";import"./QuestionCircleOutlined-35a42c77.js";import"./AntdIcon-16889e64.js";import"./index-e099d46d.js";import"./index-44aff1ee.js";import"./index-da03a860.js";import"./index-c37db011.js";import"./context-6c51d9c0.js";import"./wrapNativeSuper-e3a961e5.js";import"./roundedArrow-41889a6b.js";import"./Compact-ed5db0a3.js";import"./useSize-df4503b4.js";import"./motion-51d3501a.js";import"./reactNode-9d24d027.js";import"./LocaleContext-7544963d.js";import"./useCSSVarCls-ca025b2e.js";import"./collapse-97de76d4.js";import"./row-6d32b871.js";import"./AntdIcon-ea1fce5f.js";import"./useLocale-3c71a553.js";import"./CheckCircleFilled-dcde5778.js";import"./CheckCircleFilled-1392c7ce.js";import"./CloseCircleFilled-fdd1b8d7.js";import"./CloseCircleFilled-257b815e.js";import"./ExclamationCircleFilled-010d4309.js";import"./ExclamationCircleFilled-eba6e68e.js";import"./compact-item-155773d1.js";import"./LoadingOutlined-722c611a.js";import"./index-8ba7b037.js";import"./index-f2bdf006.js";import"./TextArea-4e9509a8.js";import"./useVariants-7a1f75bf.js";import"./SearchOutlined-d33d127e.js";import"./SearchOutlined-11b57711.js";import"./EyeInvisibleOutlined-4021859d.js";import"./button-139d7539.js";import"./index-dc4a3e04.js";import"./theme-ac0bd082.js";const cr={title:"Work in progress/Widgets/Char/CharInput",component:d,argTypes:{...h,isPassword:{description:"The input is a password",table:{defaultValue:{summary:!1},category:"Char specific"}},locale:{table:{disable:!0}}}},g=r=>{const[v,a]=i.useState(r.value);return i.useEffect(()=>{a(r.value)},[r.value]),f.jsx(d,{...r,value:v,onChange:o=>{var s;a(o),(s=r.onChange)==null||s.call(r,o)}})},e=g.bind({});e.args={required:!1,readOnly:!1,isPassword:!1};const t=g.bind({});t.args={required:!1,readOnly:!1,isPassword:!0};var p,m,n;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
