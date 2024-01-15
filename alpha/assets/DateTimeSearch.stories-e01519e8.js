import{j as l}from"./jsx-runtime-f6d73c06.js";import{r as i}from"./index-8ee6c85d.js";import{D as u}from"./DateTimeSearch-edb544e2.js";import"./_commonjsHelpers-de833af9.js";import"./DateSearch.types-d0dadd73.js";import"./index-52dc53fb.js";import"./index-d0686b25.js";import"./assertThisInitialized-601f600e.js";import"./index-8eb238e3.js";import"./PurePanel-1447b435.js";import"./isVisible-10508b7a.js";import"./index-c0c995ae.js";import"./toArray-702c099d.js";import"./CloseCircleFilled-2f02bec5.js";import"./pickAttrs-d6bf1a4e.js";import"./useVariants-fa326d5c.js";import"./context-b943a423.js";import"./asyncToGenerator-738c820e.js";import"./omit-05916825.js";import"./Compact-190860f8.js";import"./index-a92188ed.js";import"./compact-item-4a97683c.js";import"./slide-b4f9f988.js";import"./roundedArrow-12957d20.js";import"./button-2157679a.js";import"./index-077eff47.js";import"./reactNode-b58523ea.js";import"./useCSSVarCls-2e83a7af.js";import"./useLocale-e5a33693.js";import"./row-556c4485.js";const m="Date specific",L={title:"Work in progress/Widgets/Date/DateTimeSearch",component:u,argTypes:{onChange:{action:"onChange",table:{category:m}},value:{table:{category:m}}}},g=e=>{const[c,r]=i.useState(e.value);return i.useEffect(()=>{r(e.value)},[e.value]),l.jsx(u,{...e,value:c,onChange:o=>{var a;r(o),(a=e.onChange)==null||a.call(e,o)}})},t=g.bind({});t.args={};var s,p,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <DateTimeSearch {...args} value={value} onChange={(value: [[string, string], [string, string]]) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(n=(p=t.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const M=["Basic"];export{t as Basic,M as __namedExportsOrder,L as default};
