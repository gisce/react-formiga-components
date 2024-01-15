import{j as f}from"./jsx-runtime-f6d73c06.js";import{r as n}from"./index-8ee6c85d.js";import{D as v}from"./DateSearch-6d891794.js";import"./_commonjsHelpers-de833af9.js";import"./index-52dc53fb.js";import"./index-d0686b25.js";import"./assertThisInitialized-601f600e.js";import"./index-8eb238e3.js";import"./PurePanel-1447b435.js";import"./isVisible-10508b7a.js";import"./index-c0c995ae.js";import"./toArray-702c099d.js";import"./CloseCircleFilled-2f02bec5.js";import"./pickAttrs-d6bf1a4e.js";import"./useVariants-fa326d5c.js";import"./context-b943a423.js";import"./asyncToGenerator-738c820e.js";import"./omit-05916825.js";import"./Compact-190860f8.js";import"./index-a92188ed.js";import"./compact-item-4a97683c.js";import"./slide-b4f9f988.js";import"./roundedArrow-12957d20.js";import"./button-2157679a.js";import"./index-077eff47.js";import"./reactNode-b58523ea.js";import"./useCSSVarCls-2e83a7af.js";import"./useLocale-e5a33693.js";import"./DateSearch.types-d0dadd73.js";const i="Date specific",P={title:"Work in progress/Widgets/Date/DateSearch",component:v,argTypes:{onChange:{action:"onChange",table:{category:i}},value:{table:{category:i}}}},h=e=>{const[d,r]=n.useState(e.value);return n.useEffect(()=>{r(e.value)},[e.value]),f.jsx(v,{...e,value:d,onChange:o=>{var s;r(o),(s=e.onChange)==null||s.call(e,o)}})},a=h.bind({});a.args={};const t=h.bind({});t.args={value:["2020-01-01","2020-12-01"]};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
