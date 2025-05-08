import{j as f}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{D as v}from"./DateSearch-7e52941a.js";import"./_commonjsHelpers-de833af9.js";import"./index-789d72b6.js";import"./PurePanel-4203f4df.js";import"./context-6d1b332f.js";import"./genStyleUtils-d6a45a29.js";import"./assertThisInitialized-11245cea.js";import"./index-86654eeb.js";import"./index-ed1c3b01.js";import"./index-da03a860.js";import"./wrapNativeSuper-e3a961e5.js";import"./SwapRightOutlined-6c6c9e02.js";import"./AntdIcon-2c3fcfd3.js";import"./index-d7c29613.js";import"./SearchOutlined-dde1385d.js";import"./SearchOutlined-11b57711.js";import"./Overflow-155bdf1c.js";import"./roundedArrow-d6561726.js";import"./Compact-cceb4eea.js";import"./useSize-4ffb0e60.js";import"./useVariants-911433c9.js";import"./useCSSVarCls-e631847e.js";import"./index-7d845360.js";import"./compact-item-b07e9fb6.js";import"./LoadingOutlined-722c611a.js";import"./useIcons-f929f770.js";import"./CheckOutlined-5e306298.js";import"./CheckOutlined-c7cbec95.js";import"./CloseCircleFilled-0d882928.js";import"./CloseCircleFilled-257b815e.js";import"./CloseOutlined-3cbc20fa.js";import"./CloseOutlined-9385a5da.js";import"./DownOutlined-3b14e6aa.js";import"./button-a839f4af.js";import"./index-6fce385f.js";import"./reactNode-9d24d027.js";import"./useLocale-c6a3bdb5.js";import"./DateSearch.types-d0dadd73.js";const n="Date specific",oe={title:"Work in progress/Widgets/Date/DateSearch",component:v,argTypes:{onChange:{action:"onChange",table:{category:n}},value:{table:{category:n}}}},h=e=>{const[d,a]=i.useState(e.value);return i.useEffect(()=>{a(e.value)},[e.value]),f.jsx(v,{...e,value:d,onChange:o=>{var s;a(o),(s=e.onChange)==null||s.call(e,o)}})},t=h.bind({});t.args={};const r=h.bind({});r.args={value:["2020-01-01","2020-12-01"]};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <DateSearch {...args} value={value} onChange={(value: [string, string]) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var c,l,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <DateSearch {...args} value={value} onChange={(value: [string, string]) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const se=["Basic","BasicWithValues"];export{t as Basic,r as BasicWithValues,se as __namedExportsOrder,oe as default};
