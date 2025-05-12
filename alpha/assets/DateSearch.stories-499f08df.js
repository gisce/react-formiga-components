import{j as f}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{D as v}from"./DateSearch-64ef2d6a.js";import"./_commonjsHelpers-de833af9.js";import"./index-864db650.js";import"./PurePanel-8bd72482.js";import"./context-6c51d9c0.js";import"./genStyleUtils-4c750380.js";import"./assertThisInitialized-11245cea.js";import"./index-86654eeb.js";import"./index-c37db011.js";import"./index-da03a860.js";import"./wrapNativeSuper-e3a961e5.js";import"./SwapRightOutlined-6c6c9e02.js";import"./AntdIcon-ea1fce5f.js";import"./index-44aff1ee.js";import"./SearchOutlined-d33d127e.js";import"./SearchOutlined-11b57711.js";import"./Overflow-8d7a462d.js";import"./roundedArrow-41889a6b.js";import"./Compact-ed5db0a3.js";import"./useSize-df4503b4.js";import"./useVariants-7a1f75bf.js";import"./useCSSVarCls-ca025b2e.js";import"./index-f2bdf006.js";import"./compact-item-155773d1.js";import"./LoadingOutlined-722c611a.js";import"./useIcons-b641ecd7.js";import"./CheckOutlined-f85ee86e.js";import"./CheckOutlined-c7cbec95.js";import"./CloseCircleFilled-fdd1b8d7.js";import"./CloseCircleFilled-257b815e.js";import"./CloseOutlined-d92f8b7e.js";import"./CloseOutlined-9385a5da.js";import"./DownOutlined-3b14e6aa.js";import"./button-139d7539.js";import"./index-dc4a3e04.js";import"./reactNode-9d24d027.js";import"./useLocale-3c71a553.js";import"./DateSearch.types-d0dadd73.js";const n="Date specific",oe={title:"Work in progress/Widgets/Date/DateSearch",component:v,argTypes:{onChange:{action:"onChange",table:{category:n}},value:{table:{category:n}}}},h=e=>{const[d,a]=i.useState(e.value);return i.useEffect(()=>{a(e.value)},[e.value]),f.jsx(v,{...e,value:d,onChange:o=>{var s;a(o),(s=e.onChange)==null||s.call(e,o)}})},t=h.bind({});t.args={};const r=h.bind({});r.args={value:["2020-01-01","2020-12-01"]};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
