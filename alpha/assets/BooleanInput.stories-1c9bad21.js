import{j as m}from"./jsx-runtime-f6d73c06.js";import{r as s}from"./index-8ee6c85d.js";import{B as u}from"./BooleanInput-52dc67ab.js";import{B as c}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-f33cca5c.js";import"./index-d0686b25.js";import"./assertThisInitialized-601f600e.js";import"./index-8eb238e3.js";import"./index-1d3fd6ad.js";import"./isVisible-10508b7a.js";import"./index-077eff47.js";import"./reactNode-b58523ea.js";import"./asyncToGenerator-738c820e.js";import"./useCSSVarCls-2e83a7af.js";import"./context-b943a423.js";import"./toArray-702c099d.js";import"./omit-05916825.js";const k={title:"Work in progress/Widgets/Boolean/BooleanInput",component:u,argTypes:{...c,locale:{table:{disable:!0}}}},v=e=>{const[i,t]=s.useState(e.value);return s.useEffect(()=>{t(e.value)},[e.value]),m.jsx(u,{...e,value:i,onChange:a=>{var r;t(a),(r=e.onChange)==null||r.call(e,a)}})},o=v.bind({});o.args={required:!1,readOnly:!1,value:!1};var n,l,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <BooleanInput {...args} value={value} onChange={(value: boolean) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const q=["Basic"];export{o as Basic,q as __namedExportsOrder,k as default};
