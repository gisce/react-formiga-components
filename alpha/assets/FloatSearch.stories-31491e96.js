import{j as l}from"./jsx-runtime-f6d73c06.js";import{r as p}from"./index-8ee6c85d.js";import{d as n}from"./TranslatableValue-3bc27296.js";import"./_commonjsHelpers-de833af9.js";import"./Field-edb022fd.js";import"./Label-72a39789.js";import"./styled-components.browser.esm-b0ed5b60.js";import"./index-b03af66d.js";import"./assertThisInitialized-601f600e.js";import"./index-8eb238e3.js";import"./index-fb0b6330.js";import"./toArray-cadbd5cb.js";import"./isVisible-972dbae1.js";import"./index-68d6b468.js";import"./motion-343f592f.js";import"./roundedArrow-9acedcf0.js";import"./reactNode-b58523ea.js";import"./Compact-929b86a9.js";import"./LocaleContext-58eb36ec.js";import"./context-ccc1de45.js";import"./asyncToGenerator-098b8a85.js";import"./omit-afa65c0b.js";import"./collapse-97de76d4.js";import"./useCSSVarCls-b1a1e215.js";import"./row-645cbbc7.js";import"./useVariants-f34488a3.js";import"./CheckCircleFilled-475de80e.js";import"./CloseCircleFilled-02876ee0.js";import"./ExclamationCircleFilled-bdc38af8.js";import"./compact-item-d6c7d423.js";import"./Button-966758bf.js";import"./ButtonWithTooltip-164b0bc8.js";import"./button-c94e87ef.js";import"./index-e1b85e37.js";import"./Separator-e553e747.js";import"./index-e18906dc.js";import"./FieldSet-07d681e4.js";import"./index-3369e555.js";import"./BooleanInput-665981e9.js";import"./index-08044435.js";import"./BooleanValue-834ff4c3.js";import"./BooleanSearch-be0b5da8.js";import"./SelectionInput-5c924854.js";import"./index-e98f2b77.js";import"./PurePanel-270ef2ff.js";import"./pickAttrs-95892129.js";import"./Overflow-597a9b64.js";import"./slide-4aa58205.js";import"./CheckOutlined-efeb2520.js";import"./CloseOutlined-16733440.js";import"./SearchOutlined-21a685c2.js";import"./SelectionValue-320cacef.js";import"./CharInput-3d61c520.js";import"./index-d4e64ab6.js";import"./index-06d3f492.js";import"./theme-ac0bd082.js";import"./CharSearch-e7241a30.js";import"./CharValue-c620fcc1.js";import"./DateInput-873e993e.js";import"./index-40fbea16.js";import"./DateSearch-b2005856.js";import"./DateSearch.types-d0dadd73.js";import"./DateTimeSearch-58bdeb7e.js";import"./ImageValue-0866ffb4.js";import"./TextInput-4cfd2c1f.js";import"./isIP-c7c791e1.js";import"./EditOutlined-f44ee1e3.js";import"./EmailInput-387ebdc9.js";import"./UrlInput-083f576b.js";import"./ProgressBarValue-27bbacbd.js";import"./TranslatableInput-0a3d7f6d.js";import"./ModalBottomBar-5e23abeb.js";import"./index-930e7738.js";import"./index-420315d8.js";import"./ExportModal-ba9f247e.js";import"./SaveOutlined-dd2b415b.js";import"./EnterOutlined-467fc920.js";import"./RightOutlined-54189f8f.js";import"./FolderOpenOutlined-602d4e6f.js";import"./index-ac790217.js";const Gt={title:"Work in progress/Widgets/Float/FloatSearch",component:n},c=t=>{const[u,o]=p.useState(t.value);return p.useEffect(()=>{o(t.value)},[t.value]),l.jsx(n,{...t,value:u,onChange:m=>{var i;o(m),(i=t.onChange)==null||i.call(t,m)}})},r=c.bind({});r.args={decimalDigits:2,value:[3.3,10.09]};var e,a,s;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <FloatSearch {...args} value={value} onChange={(value: [number, number]) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const Ht=["Basic"];export{r as Basic,Ht as __namedExportsOrder,Gt as default};
