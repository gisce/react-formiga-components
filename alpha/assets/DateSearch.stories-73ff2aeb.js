import{j as f}from"./jsx-runtime-f6d73c06.js";import{r as n}from"./index-8ee6c85d.js";import{D as v}from"./DateSearch-12334dc3.js";import"./_commonjsHelpers-de833af9.js";import"./index-a3e20bf8.js";import"./index-f36c3419.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./PurePanel-7427106a.js";import"./isVisible-28761958.js";import"./index-d8bbe3ff.js";import"./toArray-d3285e7a.js";import"./CloseCircleFilled-8383c3aa.js";import"./useVariants-98bbef89.js";import"./context-1cb86123.js";import"./asyncToGenerator-70b03fb5.js";import"./omit-c2a66ff4.js";import"./Compact-f42963ce.js";import"./index-8a2d9a84.js";import"./compact-item-c03ebbb7.js";import"./slide-cc98ec73.js";import"./roundedArrow-eeec1c6c.js";import"./button-5dad7698.js";import"./index-2c809c7b.js";import"./reactNode-c432c2b0.js";import"./useLocale-cc382a13.js";import"./DateSearch.types-d0dadd73.js";const i="Date specific",M={title:"Work in progress/Widgets/Date/DateSearch",component:v,argTypes:{onChange:{action:"onChange",table:{category:i}},value:{table:{category:i}}}},h=e=>{const[d,r]=n.useState(e.value);return n.useEffect(()=>{r(e.value)},[e.value]),f.jsx(v,{...e,value:d,onChange:o=>{var s;r(o),(s=e.onChange)==null||s.call(e,o)}})},a=h.bind({});a.args={};const t=h.bind({});t.args={value:["2020-01-01","2020-12-01"]};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
