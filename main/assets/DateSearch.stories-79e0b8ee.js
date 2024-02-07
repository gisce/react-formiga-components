import{j as f}from"./jsx-runtime-f6d73c06.js";import{r as n}from"./index-8ee6c85d.js";import{D as v}from"./DateSearch-60b967e7.js";import"./_commonjsHelpers-de833af9.js";import"./index-ed394e36.js";import"./index-d66c9264.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./PurePanel-6fb313a7.js";import"./isVisible-ba0f3bfc.js";import"./index-99f8f215.js";import"./toArray-7c8d8abc.js";import"./CloseCircleFilled-abb829f0.js";import"./useVariants-83590930.js";import"./context-39b5ed41.js";import"./asyncToGenerator-668af2b4.js";import"./omit-8a9b0517.js";import"./Compact-42703e7c.js";import"./index-56618587.js";import"./compact-item-d72b0080.js";import"./slide-66cc5359.js";import"./roundedArrow-77f12b90.js";import"./button-26c76043.js";import"./index-62e8e9d6.js";import"./reactNode-c432c2b0.js";import"./useLocale-33ca30a9.js";import"./DateSearch.types-d0dadd73.js";const i="Date specific",M={title:"Work in progress/Widgets/Date/DateSearch",component:v,argTypes:{onChange:{action:"onChange",table:{category:i}},value:{table:{category:i}}}},h=e=>{const[d,r]=n.useState(e.value);return n.useEffect(()=>{r(e.value)},[e.value]),f.jsx(v,{...e,value:d,onChange:o=>{var s;r(o),(s=e.onChange)==null||s.call(e,o)}})},a=h.bind({});a.args={};const t=h.bind({});t.args={value:["2020-01-01","2020-12-01"]};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
