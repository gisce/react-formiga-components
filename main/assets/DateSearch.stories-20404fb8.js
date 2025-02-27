import{j as f}from"./jsx-runtime-f6d73c06.js";import{r as n}from"./index-8ee6c85d.js";import{D as v}from"./DateSearch-979eed3b.js";import"./_commonjsHelpers-de833af9.js";import"./index-88c67c55.js";import"./index-916df0c6.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./PurePanel-5fd7e678.js";import"./isVisible-c2160674.js";import"./index-9c320998.js";import"./toArray-08f3fa85.js";import"./CloseCircleFilled-33e5256a.js";import"./KeyCode-6413d982.js";import"./useVariants-3e3137fc.js";import"./context-4be339a9.js";import"./asyncToGenerator-5190802c.js";import"./omit-db8b152c.js";import"./Compact-11981144.js";import"./index-b67453a2.js";import"./compact-item-43eba85b.js";import"./slide-5b44b169.js";import"./roundedArrow-35bcc62e.js";import"./button-6d884b97.js";import"./index-d8807b5c.js";import"./reactNode-c432c2b0.js";import"./LoadingOutlined-74a4b1e9.js";import"./useLocale-7291e1d6.js";import"./DateSearch.types-d0dadd73.js";const i="Date specific",P={title:"Work in progress/Widgets/Date/DateSearch",component:v,argTypes:{onChange:{action:"onChange",table:{category:i}},value:{table:{category:i}}}},h=e=>{const[d,r]=n.useState(e.value);return n.useEffect(()=>{r(e.value)},[e.value]),f.jsx(v,{...e,value:d,onChange:o=>{var s;r(o),(s=e.onChange)==null||s.call(e,o)}})},a=h.bind({});a.args={};const t=h.bind({});t.args={value:["2020-01-01","2020-12-01"]};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
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
