import{j as l}from"./jsx-runtime-f6d73c06.js";import{r as i}from"./index-8ee6c85d.js";import{D as u}from"./DateTimeSearch-e692e2ec.js";import"./_commonjsHelpers-de833af9.js";import"./DateSearch.types-d0dadd73.js";import"./index-333501d3.js";import"./index-4e0f86e8.js";import"./assertThisInitialized-601f600e.js";import"./index-8eb238e3.js";import"./PurePanel-e84627ff.js";import"./isVisible-b65992d0.js";import"./index-1e0e3486.js";import"./toArray-66fc3202.js";import"./CloseCircleFilled-d9375026.js";import"./pickAttrs-36fe86de.js";import"./statusUtils-ea7713be.js";import"./Compact-f5d517ab.js";import"./context-0e2d5d5e.js";import"./asyncToGenerator-4dda2c7d.js";import"./omit-c7331b12.js";import"./index-42c1687a.js";import"./compact-item-0cc18453.js";import"./slide-2e0b60dc.js";import"./roundedArrow-562bcbc7.js";import"./button-32bdd4e0.js";import"./index-b1f5ed01.js";import"./reactNode-b58523ea.js";import"./useCSSVarCls-d323ff87.js";import"./row-d1e0dc1e.js";const s="Date specific",K={title:"Work in progress/Widgets/Date/DateTimeSearch",component:u,argTypes:{onChange:{action:"onChange",table:{category:s}},value:{table:{category:s}}}},g=e=>{const[c,r]=i.useState(e.value);return i.useEffect(()=>{r(e.value)},[e.value]),l.jsx(u,{...e,value:c,onChange:o=>{var a;r(o),(a=e.onChange)==null||a.call(e,o)}})},t=g.bind({});t.args={};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <DateTimeSearch {...args} value={value} onChange={(value: [[string, string], [string, string]]) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const L=["Basic"];export{t as Basic,L as __namedExportsOrder,K as default};
