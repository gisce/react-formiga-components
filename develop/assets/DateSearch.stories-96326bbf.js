import{j as f}from"./jsx-runtime-f6d73c06.js";import{r as n}from"./index-8ee6c85d.js";import{D as v}from"./DateSearch-67bdacd8.js";import"./_commonjsHelpers-de833af9.js";import"./index-333501d3.js";import"./index-4e0f86e8.js";import"./assertThisInitialized-601f600e.js";import"./index-8eb238e3.js";import"./PurePanel-e84627ff.js";import"./isVisible-b65992d0.js";import"./index-1e0e3486.js";import"./toArray-66fc3202.js";import"./CloseCircleFilled-d9375026.js";import"./pickAttrs-36fe86de.js";import"./statusUtils-ea7713be.js";import"./Compact-f5d517ab.js";import"./context-0e2d5d5e.js";import"./asyncToGenerator-4dda2c7d.js";import"./omit-c7331b12.js";import"./index-42c1687a.js";import"./compact-item-0cc18453.js";import"./slide-2e0b60dc.js";import"./roundedArrow-562bcbc7.js";import"./button-32bdd4e0.js";import"./index-b1f5ed01.js";import"./reactNode-b58523ea.js";import"./useCSSVarCls-d323ff87.js";import"./DateSearch.types-d0dadd73.js";const i="Date specific",N={title:"Work in progress/Widgets/Date/DateSearch",component:v,argTypes:{onChange:{action:"onChange",table:{category:i}},value:{table:{category:i}}}},h=e=>{const[d,r]=n.useState(e.value);return n.useEffect(()=>{r(e.value)},[e.value]),f.jsx(v,{...e,value:d,onChange:o=>{var s;r(o),(s=e.onChange)==null||s.call(e,o)}})},a=h.bind({});a.args={};const t=h.bind({});t.args={value:["2020-01-01","2020-12-01"]};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
