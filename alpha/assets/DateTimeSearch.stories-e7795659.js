import{j as l}from"./jsx-runtime-f6d73c06.js";import{r as i}from"./index-8ee6c85d.js";import{D as u}from"./DateTimeSearch-685cfcdf.js";import"./_commonjsHelpers-de833af9.js";import"./DateSearch.types-d0dadd73.js";import"./index-194acb2f.js";import"./index-7b090294.js";import"./assertThisInitialized-f89cd6ac.js";import"./index-8eb238e3.js";import"./PurePanel-673b028b.js";import"./isVisible-f24c26d5.js";import"./index-d760291f.js";import"./toArray-f9441672.js";import"./CloseCircleFilled-8482a999.js";import"./pickAttrs-217b3c15.js";import"./useVariants-78dc91e2.js";import"./context-4f71b533.js";import"./asyncToGenerator-ae37becc.js";import"./omit-c5f18c7c.js";import"./Compact-d63c1d22.js";import"./index-e5acbb5f.js";import"./compact-item-99530beb.js";import"./slide-282c9264.js";import"./roundedArrow-d4d9ea1f.js";import"./button-da513854.js";import"./index-5c8aaf67.js";import"./reactNode-c432c2b0.js";import"./useCSSVarCls-313dcfc7.js";import"./useLocale-3708b049.js";import"./row-31b109c6.js";const m="Date specific",L={title:"Work in progress/Widgets/Date/DateTimeSearch",component:u,argTypes:{onChange:{action:"onChange",table:{category:m}},value:{table:{category:m}}}},g=e=>{const[c,r]=i.useState(e.value);return i.useEffect(()=>{r(e.value)},[e.value]),l.jsx(u,{...e,value:c,onChange:o=>{var a;r(o),(a=e.onChange)==null||a.call(e,o)}})},t=g.bind({});t.args={};var s,p,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <DateTimeSearch {...args} value={value} onChange={(value: [[string, string], [string, string]]) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(n=(p=t.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const M=["Basic"];export{t as Basic,M as __namedExportsOrder,L as default};
