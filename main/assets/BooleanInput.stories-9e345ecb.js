import{j as m}from"./jsx-runtime-f6d73c06.js";import{r as s}from"./index-8ee6c85d.js";import{B as u}from"./BooleanInput-b9c9c53b.js";import{B as c}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-f5d1b584.js";import"./index-916df0c6.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./index-a702c3c1.js";import"./isVisible-c2160674.js";import"./index-d8807b5c.js";import"./reactNode-c432c2b0.js";import"./asyncToGenerator-5190802c.js";import"./context-4be339a9.js";import"./toArray-08f3fa85.js";import"./omit-db8b152c.js";const W={title:"Work in progress/Widgets/Boolean/BooleanInput",component:u,argTypes:{...c,locale:{table:{disable:!0}}}},v=e=>{const[i,t]=s.useState(e.value);return s.useEffect(()=>{t(e.value)},[e.value]),m.jsx(u,{...e,value:i,onChange:a=>{var r;t(a),(r=e.onChange)==null||r.call(e,a)}})},o=v.bind({});o.args={required:!1,readOnly:!1,value:!1};var n,l,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <BooleanInput {...args} value={value} onChange={(value: boolean) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const k=["Basic"];export{o as Basic,k as __namedExportsOrder,W as default};
