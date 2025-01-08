import{j as l}from"./jsx-runtime-f6d73c06.js";import{r as m}from"./index-8ee6c85d.js";import{b as n}from"./ExportModal-309bbd96.js";import{B as c}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./TranslatableInput-0a281323.js";import"./LocaleContext-948e5f1f.js";import"./theme-ac0bd082.js";import"./ButtonWithTooltip-d9f6ae03.js";import"./index-7d371500.js";import"./index-4cbabd78.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./index-8d7211d9.js";import"./toArray-fde42edc.js";import"./isVisible-21091144.js";import"./motion-343f592f.js";import"./roundedArrow-1c6c6973.js";import"./reactNode-c432c2b0.js";import"./Compact-5059a700.js";import"./button-459101f3.js";import"./omit-699eb5ab.js";import"./index-71ed9248.js";import"./asyncToGenerator-0e679def.js";import"./compact-item-5948db7d.js";import"./index-5a0ad9a9.js";import"./context-4b385781.js";import"./index-ab145b10.js";import"./useVariants-a5c7fa8d.js";import"./CloseCircleFilled-f91b490c.js";import"./SearchOutlined-4644c241.js";import"./row-0fcba45e.js";import"./index-69ef4711.js";import"./CloseOutlined-af1a420e.js";import"./CheckOutlined-49492fbe.js";import"./index-f50e3e48.js";import"./CheckCircleFilled-69f018f7.js";import"./ExclamationCircleFilled-7836cda2.js";import"./InfoCircleFilled-b082ae24.js";import"./PurePanel-fe490c6d.js";import"./useLocale-4d1812fe.js";import"./index-5ffe6588.js";import"./index-948b151c.js";import"./SaveOutlined-1f5784db.js";import"./Button-00b9a78d.js";import"./styled-components.browser.esm-d9ff1479.js";import"./Label-3ebc22b0.js";import"./Separator-21935941.js";import"./FieldSet-cdb9e7f1.js";import"./Dropdown-7b319933.js";import"./FormigaConfig-f7ae0498.js";import"./index-ac790217.js";import"./RightOutlined-fc99e5a4.js";import"./Overflow-e03fd39c.js";import"./slide-b3bda38b.js";import"./collapse-97de76d4.js";import"./DropdownButton-cacd5d3c.js";import"./DownOutlined-b6216cc5.js";import"./Field-c5431efa.js";import"./BooleanInput-fad38d58.js";import"./index-d25c37d5.js";import"./BooleanValue-d07918bd.js";import"./BooleanSearch-8f89f448.js";import"./SelectionInput-d95f03bb.js";import"./SelectionValue-320cacef.js";import"./CharInput-309722ee.js";import"./CharSearch-e778e6c4.js";import"./CharValue-c620fcc1.js";import"./DateInput-d843926f.js";import"./index-1b4b00c5.js";import"./DateSearch-4ad04d4c.js";import"./DateSearch.types-d0dadd73.js";import"./DateTimeSearch-16073751.js";import"./ImageValue-0866ffb4.js";import"./TextInput-346029f1.js";import"./isIP-5b389ff0.js";import"./EmailInput-27bf168f.js";import"./UrlInput-7869cea6.js";import"./ProgressBarValue-815e9c2c.js";import"./Many2OneDummy-7155aa1a.js";import"./Many2OneValue-eef73e49.js";import"./Many2OneInput-262fea11.js";import"./HTMLPreview-24212570.js";const Kt={title:"Work in progress/Widgets/Integer/IntegerInput",component:n,argTypes:{...c,locale:{table:{disable:!0}}}},g=t=>{const[u,o]=m.useState(t.value);return m.useEffect(()=>{o(t.value)},[t.value]),l.jsx(n,{...t,value:u,onChange:p=>{var i;o(p),(i=t.onChange)==null||i.call(t,p)}})},r=g.bind({});r.args={required:!1,readOnly:!1,value:2};var e,a,s;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <IntegerInput {...args} value={value} onChange={(value: number) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const Lt=["Basic"];export{r as Basic,Lt as __namedExportsOrder,Kt as default};
