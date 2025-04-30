import{j as m}from"./jsx-runtime-f6d73c06.js";import{r as s}from"./index-8ee6c85d.js";import{B as u}from"./BooleanInput-78f0d9a5.js";import{B as c}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-8d5db3cb.js";import"./index-7e3d7086.js";import"./index-f2765735.js";import"./assertThisInitialized-68330e5d.js";import"./extends-4c19d496.js";import"./index-8eb238e3.js";import"./index-46c27e92.js";import"./isVisible-2ef80b15.js";import"./index-eab29bb3.js";import"./reactNode-c432c2b0.js";import"./asyncToGenerator-aa14e566.js";import"./context-29a3839d.js";import"./toArray-66e39049.js";import"./omit-f8286760.js";const q={title:"Work in progress/Widgets/Boolean/BooleanInput",component:u,argTypes:{...c,locale:{table:{disable:!0}}}},v=e=>{const[i,t]=s.useState(e.value);return s.useEffect(()=>{t(e.value)},[e.value]),m.jsx(u,{...e,value:i,onChange:a=>{var r;t(a),(r=e.onChange)==null||r.call(e,a)}})},o=v.bind({});o.args={required:!1,readOnly:!1,value:!1};var n,l,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <BooleanInput {...args} value={value} onChange={(value: boolean) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const A=["Basic"];export{o as Basic,A as __namedExportsOrder,q as default};
