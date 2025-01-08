import{j as f}from"./jsx-runtime-f6d73c06.js";import{r as n}from"./index-8ee6c85d.js";import{D as v}from"./DateSearch-4ad04d4c.js";import"./_commonjsHelpers-de833af9.js";import"./index-1b4b00c5.js";import"./index-4cbabd78.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./PurePanel-fe490c6d.js";import"./isVisible-21091144.js";import"./index-8d7211d9.js";import"./toArray-fde42edc.js";import"./CloseCircleFilled-f91b490c.js";import"./useVariants-a5c7fa8d.js";import"./context-4b385781.js";import"./asyncToGenerator-0e679def.js";import"./omit-699eb5ab.js";import"./Compact-5059a700.js";import"./index-ab145b10.js";import"./compact-item-5948db7d.js";import"./slide-b3bda38b.js";import"./roundedArrow-1c6c6973.js";import"./button-459101f3.js";import"./index-71ed9248.js";import"./reactNode-c432c2b0.js";import"./useLocale-4d1812fe.js";import"./DateSearch.types-d0dadd73.js";const i="Date specific",M={title:"Work in progress/Widgets/Date/DateSearch",component:v,argTypes:{onChange:{action:"onChange",table:{category:i}},value:{table:{category:i}}}},h=e=>{const[d,r]=n.useState(e.value);return n.useEffect(()=>{r(e.value)},[e.value]),f.jsx(v,{...e,value:d,onChange:o=>{var s;r(o),(s=e.onChange)==null||s.call(e,o)}})},a=h.bind({});a.args={};const t=h.bind({});t.args={value:["2020-01-01","2020-12-01"]};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <DateSearch {...args} value={value} onChange={(value: [string, string]) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,l,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <DateSearch {...args} value={value} onChange={(value: [string, string]) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const N=["Basic","BasicWithValues"];export{a as Basic,t as BasicWithValues,N as __namedExportsOrder,M as default};
