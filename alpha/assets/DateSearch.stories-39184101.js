import{j as f}from"./jsx-runtime-f6d73c06.js";import{r as n}from"./index-8ee6c85d.js";import{D as v}from"./DateSearch-b2005856.js";import"./_commonjsHelpers-de833af9.js";import"./index-40fbea16.js";import"./index-b03af66d.js";import"./assertThisInitialized-601f600e.js";import"./index-8eb238e3.js";import"./PurePanel-270ef2ff.js";import"./isVisible-972dbae1.js";import"./index-fb0b6330.js";import"./toArray-cadbd5cb.js";import"./CloseCircleFilled-02876ee0.js";import"./pickAttrs-95892129.js";import"./useVariants-f34488a3.js";import"./context-ccc1de45.js";import"./asyncToGenerator-098b8a85.js";import"./omit-afa65c0b.js";import"./Compact-929b86a9.js";import"./index-06d3f492.js";import"./compact-item-d6c7d423.js";import"./slide-4aa58205.js";import"./roundedArrow-9acedcf0.js";import"./button-c94e87ef.js";import"./index-e1b85e37.js";import"./reactNode-b58523ea.js";import"./useCSSVarCls-b1a1e215.js";import"./DateSearch.types-d0dadd73.js";const i="Date specific",N={title:"Work in progress/Widgets/Date/DateSearch",component:v,argTypes:{onChange:{action:"onChange",table:{category:i}},value:{table:{category:i}}}},h=e=>{const[d,r]=n.useState(e.value);return n.useEffect(()=>{r(e.value)},[e.value]),f.jsx(v,{...e,value:d,onChange:o=>{var s;r(o),(s=e.onChange)==null||s.call(e,o)}})},a=h.bind({});a.args={};const t=h.bind({});t.args={value:["2020-01-01","2020-12-01"]};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
}`,...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const P=["Basic","BasicWithValues"];export{a as Basic,t as BasicWithValues,P as __namedExportsOrder,N as default};
