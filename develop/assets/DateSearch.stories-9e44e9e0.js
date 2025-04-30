import{j as f}from"./jsx-runtime-f6d73c06.js";import{r as n}from"./index-8ee6c85d.js";import{D as v}from"./DateSearch-b8c1eea5.js";import"./_commonjsHelpers-de833af9.js";import"./index-6c96d8c1.js";import"./index-7e3d7086.js";import"./PurePanel-3a5c693e.js";import"./isVisible-2ef80b15.js";import"./index-f2765735.js";import"./assertThisInitialized-68330e5d.js";import"./extends-4c19d496.js";import"./index-8eb238e3.js";import"./SwapRightOutlined-51331692.js";import"./AntdIcon-f4df470f.js";import"./CloseCircleFilled-53e5d3ad.js";import"./KeyCode-6413d982.js";import"./index-7fae86d9.js";import"./toArray-66e39049.js";import"./useVariants-2f2c5e71.js";import"./context-29a3839d.js";import"./asyncToGenerator-aa14e566.js";import"./omit-f8286760.js";import"./Compact-1edd4e66.js";import"./index-7fe11ddc.js";import"./compact-item-43eba85b.js";import"./slide-576a84f6.js";import"./roundedArrow-c768ecf1.js";import"./button-2909d44f.js";import"./index-eab29bb3.js";import"./reactNode-c432c2b0.js";import"./LoadingOutlined-8eb7bab6.js";import"./useLocale-8ec28e87.js";import"./DateSearch.types-d0dadd73.js";const i="Date specific",Y={title:"Work in progress/Widgets/Date/DateSearch",component:v,argTypes:{onChange:{action:"onChange",table:{category:i}},value:{table:{category:i}}}},h=e=>{const[d,r]=n.useState(e.value);return n.useEffect(()=>{r(e.value)},[e.value]),f.jsx(v,{...e,value:d,onChange:o=>{var s;r(o),(s=e.onChange)==null||s.call(e,o)}})},t=h.bind({});t.args={};const a=h.bind({});a.args={value:["2020-01-01","2020-12-01"]};var p,u,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <DateSearch {...args} value={value} onChange={(value: [string, string]) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var c,l,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <DateSearch {...args} value={value} onChange={(value: [string, string]) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const Z=["Basic","BasicWithValues"];export{t as Basic,a as BasicWithValues,Z as __namedExportsOrder,Y as default};
