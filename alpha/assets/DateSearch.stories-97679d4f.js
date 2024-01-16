import{j as f}from"./jsx-runtime-f6d73c06.js";import{r as n}from"./index-8ee6c85d.js";import{D as v}from"./DateSearch-edd069a0.js";import"./_commonjsHelpers-de833af9.js";import"./index-c776dc32.js";import"./index-7b090294.js";import"./assertThisInitialized-f89cd6ac.js";import"./index-8eb238e3.js";import"./PurePanel-673b028b.js";import"./isVisible-f24c26d5.js";import"./index-5400b74c.js";import"./toArray-f9441672.js";import"./CloseCircleFilled-4563a35c.js";import"./pickAttrs-217b3c15.js";import"./useVariants-c4b9294e.js";import"./context-4f71b533.js";import"./asyncToGenerator-ae37becc.js";import"./omit-c5f18c7c.js";import"./Compact-7e23d0f8.js";import"./index-bb107a08.js";import"./compact-item-82d41e68.js";import"./slide-41340aab.js";import"./roundedArrow-d4d9ea1f.js";import"./button-0d65e38a.js";import"./index-5c8aaf67.js";import"./reactNode-c432c2b0.js";import"./useCSSVarCls-313dcfc7.js";import"./useLocale-3708b049.js";import"./DateSearch.types-d0dadd73.js";const i="Date specific",P={title:"Work in progress/Widgets/Date/DateSearch",component:v,argTypes:{onChange:{action:"onChange",table:{category:i}},value:{table:{category:i}}}},h=e=>{const[d,r]=n.useState(e.value);return n.useEffect(()=>{r(e.value)},[e.value]),f.jsx(v,{...e,value:d,onChange:o=>{var s;r(o),(s=e.onChange)==null||s.call(e,o)}})},a=h.bind({});a.args={};const t=h.bind({});t.args={value:["2020-01-01","2020-12-01"]};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
}`,...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const Q=["Basic","BasicWithValues"];export{a as Basic,t as BasicWithValues,Q as __namedExportsOrder,P as default};
