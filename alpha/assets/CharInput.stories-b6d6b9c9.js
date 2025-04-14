import{j as f}from"./jsx-runtime-f6d73c06.js";import{r as i}from"./index-8ee6c85d.js";import{C as d}from"./CharInput-a2b16ed0.js";import{B as h}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-8d5db3cb.js";import"./index-7e3d7086.js";import"./index-f2765735.js";import"./assertThisInitialized-68330e5d.js";import"./extends-4c19d496.js";import"./index-8eb238e3.js";import"./Field-35735e8c.js";import"./Label-03510a20.js";import"./QuestionCircleOutlined-040d7c9d.js";import"./AntdIcon-f4df470f.js";import"./index-b9328d6e.js";import"./index-7fae86d9.js";import"./toArray-66e39049.js";import"./isVisible-2ef80b15.js";import"./motion-343f592f.js";import"./roundedArrow-c768ecf1.js";import"./reactNode-c432c2b0.js";import"./Compact-1edd4e66.js";import"./LocaleContext-1c35ce14.js";import"./context-29a3839d.js";import"./asyncToGenerator-aa14e566.js";import"./omit-f8286760.js";import"./collapse-97de76d4.js";import"./row-1c3eec31.js";import"./useLocale-8ec28e87.js";import"./CheckCircleFilled-f858369c.js";import"./CloseCircleFilled-53e5d3ad.js";import"./ExclamationCircleFilled-95aa70b7.js";import"./LoadingOutlined-8eb7bab6.js";import"./index-ba0b8bee.js";import"./index-7fe11ddc.js";import"./compact-item-43eba85b.js";import"./TextArea-0261af0a.js";import"./useVariants-2f2c5e71.js";import"./EyeOutlined-a0dd78d5.js";import"./SearchOutlined-061923d8.js";import"./button-2909d44f.js";import"./index-eab29bb3.js";import"./theme-ac0bd082.js";const mr={title:"Work in progress/Widgets/Char/CharInput",component:d,argTypes:{...h,isPassword:{description:"The input is a password",table:{defaultValue:{summary:!1},category:"Char specific"}},locale:{table:{disable:!0}}}},g=r=>{const[v,a]=i.useState(r.value);return i.useEffect(()=>{a(r.value)},[r.value]),f.jsx(d,{...r,value:v,onChange:o=>{var s;a(o),(s=r.onChange)==null||s.call(r,o)}})},e=g.bind({});e.args={required:!1,readOnly:!1,isPassword:!1};const t=g.bind({});t.args={required:!1,readOnly:!1,isPassword:!0};var p,m,n;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const nr=["Basic","Password"];export{e as Basic,t as Password,nr as __namedExportsOrder,mr as default};
