import{j as l}from"./jsx-runtime-f6d73c06.js";import{r as i}from"./index-8ee6c85d.js";import{D as u}from"./DateTimeSearch-62324186.js";import"./_commonjsHelpers-de833af9.js";import"./DateSearch.types-d0dadd73.js";import"./index-a3e20bf8.js";import"./index-f36c3419.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./PurePanel-7427106a.js";import"./isVisible-28761958.js";import"./index-d8bbe3ff.js";import"./toArray-d3285e7a.js";import"./CloseCircleFilled-8383c3aa.js";import"./useVariants-98bbef89.js";import"./context-1cb86123.js";import"./asyncToGenerator-70b03fb5.js";import"./omit-c2a66ff4.js";import"./Compact-f42963ce.js";import"./index-8a2d9a84.js";import"./compact-item-c03ebbb7.js";import"./slide-cc98ec73.js";import"./roundedArrow-eeec1c6c.js";import"./button-5dad7698.js";import"./index-2c809c7b.js";import"./reactNode-c432c2b0.js";import"./useLocale-cc382a13.js";import"./row-a9151da8.js";const s="Date specific",J={title:"Work in progress/Widgets/Date/DateTimeSearch",component:u,argTypes:{onChange:{action:"onChange",table:{category:s}},value:{table:{category:s}}}},g=e=>{const[c,r]=i.useState(e.value);return i.useEffect(()=>{r(e.value)},[e.value]),l.jsx(u,{...e,value:c,onChange:o=>{var a;r(o),(a=e.onChange)==null||a.call(e,o)}})},t=g.bind({});t.args={};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <DateTimeSearch {...args} value={value} onChange={(value: [[string, string], [string, string]]) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const K=["Basic"];export{t as Basic,K as __namedExportsOrder,J as default};
