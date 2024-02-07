import{j as l}from"./jsx-runtime-f6d73c06.js";import{r as i}from"./index-8ee6c85d.js";import{D as u}from"./DateTimeSearch-bae94b94.js";import"./_commonjsHelpers-de833af9.js";import"./DateSearch.types-d0dadd73.js";import"./index-ed394e36.js";import"./index-d66c9264.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./PurePanel-6fb313a7.js";import"./isVisible-ba0f3bfc.js";import"./index-99f8f215.js";import"./toArray-7c8d8abc.js";import"./CloseCircleFilled-abb829f0.js";import"./useVariants-83590930.js";import"./context-39b5ed41.js";import"./asyncToGenerator-668af2b4.js";import"./omit-8a9b0517.js";import"./Compact-42703e7c.js";import"./index-56618587.js";import"./compact-item-d72b0080.js";import"./slide-66cc5359.js";import"./roundedArrow-77f12b90.js";import"./button-26c76043.js";import"./index-62e8e9d6.js";import"./reactNode-c432c2b0.js";import"./useLocale-33ca30a9.js";import"./row-14c4df27.js";const s="Date specific",J={title:"Work in progress/Widgets/Date/DateTimeSearch",component:u,argTypes:{onChange:{action:"onChange",table:{category:s}},value:{table:{category:s}}}},g=e=>{const[c,r]=i.useState(e.value);return i.useEffect(()=>{r(e.value)},[e.value]),l.jsx(u,{...e,value:c,onChange:o=>{var a;r(o),(a=e.onChange)==null||a.call(e,o)}})},t=g.bind({});t.args={};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <DateTimeSearch {...args} value={value} onChange={(value: [[string, string], [string, string]]) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const K=["Basic"];export{t as Basic,K as __namedExportsOrder,J as default};
