import{j as m}from"./jsx-runtime-ffb262ed.js";import{r as s}from"./index-76fb7be0.js";import{B as u}from"./BooleanInput-29620d46.js";import{B as c}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-837c5936.js";import"./index-86654eeb.js";import"./genStyleUtils-4eaa55a5.js";import"./assertThisInitialized-11245cea.js";import"./index-5e8c0ccd.js";import"./context-13a51095.js";import"./index-95593828.js";import"./index-da03a860.js";import"./wrapNativeSuper-e3a961e5.js";import"./index-7367e026.js";import"./reactNode-9d24d027.js";import"./useCSSVarCls-aaef417d.js";const W={title:"Work in progress/Widgets/Boolean/BooleanInput",component:u,argTypes:{...c,locale:{table:{disable:!0}}}},v=e=>{const[i,t]=s.useState(e.value);return s.useEffect(()=>{t(e.value)},[e.value]),m.jsx(u,{...e,value:i,onChange:a=>{var r;t(a),(r=e.onChange)==null||r.call(e,a)}})},o=v.bind({});o.args={required:!1,readOnly:!1,value:!1};var n,l,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <BooleanInput {...args} value={value} onChange={(value: boolean) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const k=["Basic"];export{o as Basic,k as __namedExportsOrder,W as default};
