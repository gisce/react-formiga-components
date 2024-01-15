import{j as l}from"./jsx-runtime-f6d73c06.js";import{r as i}from"./index-8ee6c85d.js";import{D as u}from"./DateTimeSearch-58bdeb7e.js";import"./_commonjsHelpers-de833af9.js";import"./DateSearch.types-d0dadd73.js";import"./index-40fbea16.js";import"./index-b03af66d.js";import"./assertThisInitialized-601f600e.js";import"./index-8eb238e3.js";import"./PurePanel-270ef2ff.js";import"./isVisible-972dbae1.js";import"./index-fb0b6330.js";import"./toArray-cadbd5cb.js";import"./CloseCircleFilled-02876ee0.js";import"./pickAttrs-95892129.js";import"./useVariants-f34488a3.js";import"./context-ccc1de45.js";import"./asyncToGenerator-098b8a85.js";import"./omit-afa65c0b.js";import"./Compact-929b86a9.js";import"./index-06d3f492.js";import"./compact-item-d6c7d423.js";import"./slide-4aa58205.js";import"./roundedArrow-9acedcf0.js";import"./button-c94e87ef.js";import"./index-e1b85e37.js";import"./reactNode-b58523ea.js";import"./useCSSVarCls-b1a1e215.js";import"./row-645cbbc7.js";const s="Date specific",K={title:"Work in progress/Widgets/Date/DateTimeSearch",component:u,argTypes:{onChange:{action:"onChange",table:{category:s}},value:{table:{category:s}}}},g=e=>{const[c,r]=i.useState(e.value);return i.useEffect(()=>{r(e.value)},[e.value]),l.jsx(u,{...e,value:c,onChange:o=>{var a;r(o),(a=e.onChange)==null||a.call(e,o)}})},t=g.bind({});t.args={};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <DateTimeSearch {...args} value={value} onChange={(value: [[string, string], [string, string]]) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const L=["Basic"];export{t as Basic,L as __namedExportsOrder,K as default};
