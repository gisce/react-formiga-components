import{j as f}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{D as v}from"./DateSearch-b8575c0d.js";import"./_commonjsHelpers-de833af9.js";import"./index-0a78b6e5.js";import"./PurePanel-c2d1df7c.js";import"./context-13a51095.js";import"./genStyleUtils-4eaa55a5.js";import"./assertThisInitialized-11245cea.js";import"./index-86654eeb.js";import"./index-95593828.js";import"./index-da03a860.js";import"./wrapNativeSuper-e3a961e5.js";import"./SwapRightOutlined-6c6c9e02.js";import"./AntdIcon-24fbe913.js";import"./index-c0ac072d.js";import"./SearchOutlined-26e8fa80.js";import"./SearchOutlined-11b57711.js";import"./Overflow-02661406.js";import"./roundedArrow-b7d508f7.js";import"./Compact-f37358d5.js";import"./useVariants-af39c24c.js";import"./useCSSVarCls-aaef417d.js";import"./index-bde92207.js";import"./compact-item-2b086764.js";import"./LoadingOutlined-722c611a.js";import"./useIcons-1aa2434c.js";import"./CheckOutlined-8e96ddcd.js";import"./CheckOutlined-c7cbec95.js";import"./CloseCircleFilled-2df2155f.js";import"./CloseCircleFilled-257b815e.js";import"./CloseOutlined-bab4fc90.js";import"./CloseOutlined-9385a5da.js";import"./DownOutlined-3b14e6aa.js";import"./button-49751c25.js";import"./index-7367e026.js";import"./reactNode-9d24d027.js";import"./useLocale-5eb46448.js";import"./DateSearch.types-d0dadd73.js";const n="Date specific",ae={title:"Work in progress/Widgets/Date/DateSearch",component:v,argTypes:{onChange:{action:"onChange",table:{category:n}},value:{table:{category:n}}}},h=e=>{const[d,a]=i.useState(e.value);return i.useEffect(()=>{a(e.value)},[e.value]),f.jsx(v,{...e,value:d,onChange:o=>{var s;a(o),(s=e.onChange)==null||s.call(e,o)}})},t=h.bind({});t.args={};const r=h.bind({});r.args={value:["2020-01-01","2020-12-01"]};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const oe=["Basic","BasicWithValues"];export{t as Basic,r as BasicWithValues,oe as __namedExportsOrder,ae as default};
