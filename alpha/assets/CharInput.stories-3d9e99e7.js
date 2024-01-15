import{j as f}from"./jsx-runtime-f6d73c06.js";import{r as i}from"./index-8ee6c85d.js";import{C as d}from"./CharInput-3d61c520.js";import{B as h}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-b0ed5b60.js";import"./index-b03af66d.js";import"./assertThisInitialized-601f600e.js";import"./index-8eb238e3.js";import"./Field-edb022fd.js";import"./Label-72a39789.js";import"./index-fb0b6330.js";import"./toArray-cadbd5cb.js";import"./isVisible-972dbae1.js";import"./index-68d6b468.js";import"./motion-343f592f.js";import"./roundedArrow-9acedcf0.js";import"./reactNode-b58523ea.js";import"./Compact-929b86a9.js";import"./LocaleContext-58eb36ec.js";import"./context-ccc1de45.js";import"./asyncToGenerator-098b8a85.js";import"./omit-afa65c0b.js";import"./collapse-97de76d4.js";import"./useCSSVarCls-b1a1e215.js";import"./row-645cbbc7.js";import"./useVariants-f34488a3.js";import"./CheckCircleFilled-475de80e.js";import"./CloseCircleFilled-02876ee0.js";import"./ExclamationCircleFilled-bdc38af8.js";import"./compact-item-d6c7d423.js";import"./index-d4e64ab6.js";import"./index-06d3f492.js";import"./SearchOutlined-21a685c2.js";import"./button-c94e87ef.js";import"./index-e1b85e37.js";import"./theme-ac0bd082.js";const re={title:"Work in progress/Widgets/Char/CharInput",component:d,argTypes:{...h,isPassword:{description:"The input is a password",table:{defaultValue:{summary:!1},category:"Char specific"}},locale:{table:{disable:!0}}}},g=e=>{const[v,t]=i.useState(e.value);return i.useEffect(()=>{t(e.value)},[e.value]),f.jsx(d,{...e,value:v,onChange:s=>{var o;t(s),(o=e.onChange)==null||o.call(e,s)}})},r=g.bind({});r.args={required:!1,readOnly:!1,isPassword:!1};const a=g.bind({});a.args={required:!1,readOnly:!1,isPassword:!0};var p,n,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
