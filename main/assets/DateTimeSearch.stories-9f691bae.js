import{j as l}from"./jsx-runtime-f6d73c06.js";import{r as i}from"./index-8ee6c85d.js";import{D as u}from"./DateTimeSearch-f4a4a3c5.js";import"./_commonjsHelpers-de833af9.js";import"./DateSearch.types-d0dadd73.js";import"./index-88c67c55.js";import"./index-916df0c6.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./PurePanel-5fd7e678.js";import"./isVisible-c2160674.js";import"./index-9c320998.js";import"./toArray-08f3fa85.js";import"./CloseCircleFilled-33e5256a.js";import"./KeyCode-6413d982.js";import"./useVariants-3e3137fc.js";import"./context-4be339a9.js";import"./asyncToGenerator-5190802c.js";import"./omit-db8b152c.js";import"./Compact-11981144.js";import"./index-b67453a2.js";import"./compact-item-43eba85b.js";import"./slide-5b44b169.js";import"./roundedArrow-35bcc62e.js";import"./button-6d884b97.js";import"./index-d8807b5c.js";import"./reactNode-c432c2b0.js";import"./LoadingOutlined-74a4b1e9.js";import"./useLocale-7291e1d6.js";import"./row-35453298.js";const m="Date specific",L={title:"Work in progress/Widgets/Date/DateTimeSearch",component:u,argTypes:{onChange:{action:"onChange",table:{category:m}},value:{table:{category:m}}}},g=e=>{const[c,r]=i.useState(e.value);return i.useEffect(()=>{r(e.value)},[e.value]),l.jsx(u,{...e,value:c,onChange:o=>{var a;r(o),(a=e.onChange)==null||a.call(e,o)}})},t=g.bind({});t.args={};var s,p,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <DateTimeSearch {...args} value={value} onChange={(value: [[string, string], [string, string]]) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(n=(p=t.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const M=["Basic"];export{t as Basic,M as __namedExportsOrder,L as default};
