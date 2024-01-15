import{j as l}from"./jsx-runtime-f6d73c06.js";import{r as m}from"./index-8ee6c85d.js";import{b as n}from"./TranslatableValue-16f3a120.js";import{B as c}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./Field-86784413.js";import"./Label-d9373612.js";import"./styled-components.browser.esm-e721a1b2.js";import"./index-7b090294.js";import"./assertThisInitialized-f89cd6ac.js";import"./index-8eb238e3.js";import"./index-d760291f.js";import"./toArray-f9441672.js";import"./isVisible-f24c26d5.js";import"./index-fbe8605a.js";import"./motion-343f592f.js";import"./roundedArrow-d4d9ea1f.js";import"./reactNode-c432c2b0.js";import"./Compact-d63c1d22.js";import"./LocaleContext-58eb36ec.js";import"./context-4f71b533.js";import"./asyncToGenerator-ae37becc.js";import"./omit-c5f18c7c.js";import"./collapse-97de76d4.js";import"./useCSSVarCls-313dcfc7.js";import"./row-31b109c6.js";import"./useLocale-3708b049.js";import"./CheckCircleFilled-a5402013.js";import"./CloseCircleFilled-8482a999.js";import"./ExclamationCircleFilled-47ac793a.js";import"./compact-item-99530beb.js";import"./Button-6506dc31.js";import"./ButtonWithTooltip-6f1b0480.js";import"./button-da513854.js";import"./index-5c8aaf67.js";import"./Separator-eefcfd95.js";import"./index-81b09b0c.js";import"./FieldSet-b7de6a70.js";import"./index-c4e31686.js";import"./Dropdown-235a492a.js";import"./index-da324853.js";import"./index-fe8159f5.js";import"./index-e5acbb5f.js";import"./useVariants-78dc91e2.js";import"./SearchOutlined-f9428929.js";import"./CloseOutlined-0c9b81b5.js";import"./InfoCircleFilled-a570e26c.js";import"./pickAttrs-217b3c15.js";import"./index-96d27e2f.js";import"./RightOutlined-96fd9c5c.js";import"./PurePanel-673b028b.js";import"./Overflow-c373506c.js";import"./slide-282c9264.js";import"./DropdownButton-d0d15dba.js";import"./DownOutlined-bb199e6a.js";import"./BooleanInput-fc94cedd.js";import"./index-db0cc856.js";import"./BooleanValue-a025d74e.js";import"./BooleanSearch-14c41263.js";import"./SelectionInput-c43e38f2.js";import"./index-483b84f9.js";import"./CheckOutlined-33d49c68.js";import"./SelectionValue-320cacef.js";import"./CharInput-d7e864c0.js";import"./theme-ac0bd082.js";import"./CharSearch-223aa0ef.js";import"./CharValue-c620fcc1.js";import"./DateInput-299e620d.js";import"./index-194acb2f.js";import"./DateSearch-00ca803b.js";import"./DateSearch.types-d0dadd73.js";import"./DateTimeSearch-685cfcdf.js";import"./ImageValue-0866ffb4.js";import"./TextInput-4d684754.js";import"./isIP-87992bac.js";import"./EditOutlined-91290e76.js";import"./EmailInput-daeb1fac.js";import"./UrlInput-9bb6e95c.js";import"./ProgressBarValue-fde1d091.js";import"./TranslatableInput-7376753b.js";import"./ModalBottomBar-9a56d019.js";import"./index-cb0a08a9.js";import"./ExportModal-02f32910.js";import"./SaveOutlined-f296fc59.js";import"./FolderOpenOutlined-feafc8ba.js";import"./EnterOutlined-e47c2b48.js";import"./index-ac790217.js";const Pt={title:"Work in progress/Widgets/Integer/IntegerInput",component:n,argTypes:{...c,locale:{table:{disable:!0}}}},g=t=>{const[u,o]=m.useState(t.value);return m.useEffect(()=>{o(t.value)},[t.value]),l.jsx(n,{...t,value:u,onChange:p=>{var i;o(p),(i=t.onChange)==null||i.call(t,p)}})},r=g.bind({});r.args={required:!1,readOnly:!1,value:2};var e,a,s;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <IntegerInput {...args} value={value} onChange={(value: number) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const Qt=["Basic"];export{r as Basic,Qt as __namedExportsOrder,Pt as default};
