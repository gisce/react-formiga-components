import{j as l}from"./jsx-runtime-f6d73c06.js";import{r as p}from"./index-8ee6c85d.js";import{e as n}from"./ExportModal-be1e9ef8.js";import"./_commonjsHelpers-de833af9.js";import"./TranslatableInput-199cc72b.js";import"./LocaleContext-5ea78dca.js";import"./theme-ac0bd082.js";import"./ButtonWithTooltip-520fa07d.js";import"./index-fa6ed0a5.js";import"./index-d66c9264.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./index-99f8f215.js";import"./toArray-7c8d8abc.js";import"./isVisible-ba0f3bfc.js";import"./motion-343f592f.js";import"./roundedArrow-77f12b90.js";import"./reactNode-c432c2b0.js";import"./Compact-42703e7c.js";import"./button-26c76043.js";import"./omit-8a9b0517.js";import"./index-62e8e9d6.js";import"./asyncToGenerator-668af2b4.js";import"./compact-item-d72b0080.js";import"./index-a71e9642.js";import"./context-39b5ed41.js";import"./index-56618587.js";import"./useVariants-83590930.js";import"./CloseCircleFilled-abb829f0.js";import"./SearchOutlined-271c449e.js";import"./row-14c4df27.js";import"./index-db9ecc54.js";import"./CloseOutlined-4f476cb1.js";import"./CheckOutlined-a3c23fa5.js";import"./index-620bd655.js";import"./CheckCircleFilled-7f76e67f.js";import"./ExclamationCircleFilled-58384750.js";import"./InfoCircleFilled-2d19b084.js";import"./PurePanel-6fb313a7.js";import"./useLocale-33ca30a9.js";import"./index-d2de7fbe.js";import"./index-dedc9109.js";import"./SaveOutlined-e8216011.js";import"./Button-93954864.js";import"./styled-components.browser.esm-9d5760e0.js";import"./Label-89c6965c.js";import"./Separator-e058fa2e.js";import"./FieldSet-0fd87775.js";import"./Dropdown-b0cd9461.js";import"./FormigaConfig-2f30d381.js";import"./RightOutlined-34caf72f.js";import"./Overflow-38d9e44a.js";import"./slide-66cc5359.js";import"./collapse-97de76d4.js";import"./DropdownButton-a5f14b29.js";import"./DownOutlined-e1dc5b74.js";import"./Field-b1918ba5.js";import"./BooleanInput-5577c396.js";import"./index-dd1e9912.js";import"./BooleanValue-a3d45417.js";import"./BooleanSearch-392e77a9.js";import"./SelectionInput-49036de0.js";import"./SelectionValue-320cacef.js";import"./CharInput-32d7aa7a.js";import"./CharSearch-b4a21718.js";import"./CharValue-c620fcc1.js";import"./DateInput-b7c3d447.js";import"./index-ed394e36.js";import"./DateSearch-60b967e7.js";import"./DateSearch.types-d0dadd73.js";import"./DateTimeSearch-bae94b94.js";import"./ImageValue-0866ffb4.js";import"./TextInput-84d71237.js";import"./isIP-6df5f0c5.js";import"./EmailInput-8bad501d.js";import"./UrlInput-5a60e934.js";import"./ProgressBarValue-cd1f6a51.js";import"./Many2OneDummy-cc05f5d2.js";import"./Many2OneValue-f083d95e.js";import"./Many2OneInput-9f7c412f.js";import"./index-ac790217.js";const Ht={title:"Work in progress/Widgets/Float/FloatSearch",component:n},c=t=>{const[u,o]=p.useState(t.value);return p.useEffect(()=>{o(t.value)},[t.value]),l.jsx(n,{...t,value:u,onChange:m=>{var i;o(m),(i=t.onChange)==null||i.call(t,m)}})},r=c.bind({});r.args={decimalDigits:2,value:[3.3,10.09]};var e,a,s;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <FloatSearch {...args} value={value} onChange={(value: [number, number]) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const It=["Basic"];export{r as Basic,It as __namedExportsOrder,Ht as default};
