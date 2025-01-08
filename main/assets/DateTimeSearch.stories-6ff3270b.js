import{j as l}from"./jsx-runtime-f6d73c06.js";import{r as i}from"./index-8ee6c85d.js";import{D as u}from"./DateTimeSearch-16073751.js";import"./_commonjsHelpers-de833af9.js";import"./DateSearch.types-d0dadd73.js";import"./index-1b4b00c5.js";import"./index-4cbabd78.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./PurePanel-fe490c6d.js";import"./isVisible-21091144.js";import"./index-8d7211d9.js";import"./toArray-fde42edc.js";import"./CloseCircleFilled-f91b490c.js";import"./useVariants-a5c7fa8d.js";import"./context-4b385781.js";import"./asyncToGenerator-0e679def.js";import"./omit-699eb5ab.js";import"./Compact-5059a700.js";import"./index-ab145b10.js";import"./compact-item-5948db7d.js";import"./slide-b3bda38b.js";import"./roundedArrow-1c6c6973.js";import"./button-459101f3.js";import"./index-71ed9248.js";import"./reactNode-c432c2b0.js";import"./useLocale-4d1812fe.js";import"./row-0fcba45e.js";const s="Date specific",J={title:"Work in progress/Widgets/Date/DateTimeSearch",component:u,argTypes:{onChange:{action:"onChange",table:{category:s}},value:{table:{category:s}}}},g=e=>{const[c,r]=i.useState(e.value);return i.useEffect(()=>{r(e.value)},[e.value]),l.jsx(u,{...e,value:c,onChange:o=>{var a;r(o),(a=e.onChange)==null||a.call(e,o)}})},t=g.bind({});t.args={};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <DateTimeSearch {...args} value={value} onChange={(value: [[string, string], [string, string]]) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const K=["Basic"];export{t as Basic,K as __namedExportsOrder,J as default};
