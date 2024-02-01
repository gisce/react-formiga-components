import{j as l}from"./jsx-runtime-f6d73c06.js";import{r as m}from"./index-8ee6c85d.js";import{b as n}from"./ExportModal-fb5382b3.js";import{B as c}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./TranslatableInput-199cc72b.js";import"./LocaleContext-5ea78dca.js";import"./theme-ac0bd082.js";import"./ButtonWithTooltip-520fa07d.js";import"./index-fa6ed0a5.js";import"./index-d66c9264.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./index-99f8f215.js";import"./toArray-7c8d8abc.js";import"./isVisible-ba0f3bfc.js";import"./motion-343f592f.js";import"./roundedArrow-77f12b90.js";import"./reactNode-c432c2b0.js";import"./Compact-42703e7c.js";import"./button-26c76043.js";import"./omit-8a9b0517.js";import"./index-62e8e9d6.js";import"./asyncToGenerator-668af2b4.js";import"./compact-item-d72b0080.js";import"./index-a71e9642.js";import"./context-39b5ed41.js";import"./index-56618587.js";import"./useVariants-83590930.js";import"./CloseCircleFilled-abb829f0.js";import"./SearchOutlined-271c449e.js";import"./row-14c4df27.js";import"./index-db9ecc54.js";import"./CloseOutlined-4f476cb1.js";import"./CheckOutlined-a3c23fa5.js";import"./index-620bd655.js";import"./CheckCircleFilled-7f76e67f.js";import"./ExclamationCircleFilled-58384750.js";import"./InfoCircleFilled-2d19b084.js";import"./PurePanel-6fb313a7.js";import"./useLocale-33ca30a9.js";import"./index-d2de7fbe.js";import"./index-dedc9109.js";import"./SaveOutlined-e8216011.js";import"./Button-93954864.js";import"./styled-components.browser.esm-9d5760e0.js";import"./Label-51d2131b.js";import"./Separator-e058fa2e.js";import"./FieldSet-0fd87775.js";import"./Dropdown-d9bd4329.js";import"./FormigaConfig-2f30d381.js";import"./RightOutlined-34caf72f.js";import"./Overflow-38d9e44a.js";import"./slide-66cc5359.js";import"./collapse-97de76d4.js";import"./DropdownButton-98115841.js";import"./DownOutlined-e1dc5b74.js";import"./Field-be3812e4.js";import"./BooleanInput-5577c396.js";import"./index-dd1e9912.js";import"./BooleanValue-a3d45417.js";import"./BooleanSearch-392e77a9.js";import"./SelectionInput-49036de0.js";import"./SelectionValue-320cacef.js";import"./CharInput-19203be5.js";import"./CharSearch-661eb22c.js";import"./CharValue-c620fcc1.js";import"./DateInput-923090c1.js";import"./index-ed394e36.js";import"./DateSearch-60b967e7.js";import"./DateSearch.types-d0dadd73.js";import"./DateTimeSearch-bae94b94.js";import"./ImageValue-0866ffb4.js";import"./TextInput-d5d5ca75.js";import"./isIP-70c65b69.js";import"./EmailInput-eb6e8d3d.js";import"./UrlInput-c4d1701a.js";import"./ProgressBarValue-cd1f6a51.js";import"./Many2OneDummy-7e06ba65.js";import"./Many2OneValue-f083d95e.js";import"./Many2OneInput-b393eddb.js";import"./index-ac790217.js";const Jt={title:"Work in progress/Widgets/Integer/IntegerInput",component:n,argTypes:{...c,locale:{table:{disable:!0}}}},g=t=>{const[u,o]=m.useState(t.value);return m.useEffect(()=>{o(t.value)},[t.value]),l.jsx(n,{...t,value:u,onChange:p=>{var i;o(p),(i=t.onChange)==null||i.call(t,p)}})},r=g.bind({});r.args={required:!1,readOnly:!1,value:2};var e,a,s;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <IntegerInput {...args} value={value} onChange={(value: number) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const Kt=["Basic"];export{r as Basic,Kt as __namedExportsOrder,Jt as default};
