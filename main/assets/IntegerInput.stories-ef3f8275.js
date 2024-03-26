import{j as l}from"./jsx-runtime-f6d73c06.js";import{r as m}from"./index-8ee6c85d.js";import{b as n}from"./TranslatableValue-3d4b1721.js";import{B as c}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./Field-c705a0bb.js";import"./Label-5271abfa.js";import"./styled-components.browser.esm-53a58144.js";import"./index-4e0f86e8.js";import"./assertThisInitialized-601f600e.js";import"./index-8eb238e3.js";import"./index-1e0e3486.js";import"./toArray-66fc3202.js";import"./isVisible-b65992d0.js";import"./index-1416ecc3.js";import"./motion-343f592f.js";import"./roundedArrow-562bcbc7.js";import"./reactNode-b58523ea.js";import"./Compact-f5d517ab.js";import"./LocaleContext-58eb36ec.js";import"./context-0e2d5d5e.js";import"./asyncToGenerator-4dda2c7d.js";import"./omit-c7331b12.js";import"./collapse-97de76d4.js";import"./useCSSVarCls-d323ff87.js";import"./row-d1e0dc1e.js";import"./statusUtils-ea7713be.js";import"./CheckCircleFilled-864fc55d.js";import"./CloseCircleFilled-d9375026.js";import"./ExclamationCircleFilled-456d0c53.js";import"./compact-item-0cc18453.js";import"./Button-2f0948b7.js";import"./ButtonWithTooltip-e3b7089d.js";import"./button-32bdd4e0.js";import"./index-b1f5ed01.js";import"./Separator-50a90e56.js";import"./index-4d2ecf55.js";import"./FieldSet-ff87c70b.js";import"./index-8d36bdd2.js";import"./BooleanInput-b18e60bd.js";import"./index-c5f461f6.js";import"./BooleanValue-21fc9b33.js";import"./BooleanSearch-7b89ff44.js";import"./SelectionInput-a3f8fc4e.js";import"./index-107d9b63.js";import"./PurePanel-e84627ff.js";import"./pickAttrs-36fe86de.js";import"./Overflow-90777bac.js";import"./slide-2e0b60dc.js";import"./CheckOutlined-3c6140f7.js";import"./CloseOutlined-9f6bbc94.js";import"./SearchOutlined-820a599b.js";import"./SelectionValue-320cacef.js";import"./CharInput-836e2d86.js";import"./index-a7dcd279.js";import"./index-42c1687a.js";import"./theme-ac0bd082.js";import"./CharSearch-313ab29a.js";import"./CharValue-c620fcc1.js";import"./DateInput-358c0c96.js";import"./index-333501d3.js";import"./DateSearch-67bdacd8.js";import"./DateSearch.types-d0dadd73.js";import"./DateTimeSearch-e692e2ec.js";import"./ImageValue-0866ffb4.js";import"./TextInput-22bef52a.js";import"./isIP-3e46c95c.js";import"./EditOutlined-710abf7e.js";import"./EmailInput-e000297e.js";import"./UrlInput-ab920521.js";import"./ProgressBarValue-e5ce17b8.js";import"./TranslatableInput-92f68db2.js";import"./ModalBottomBar-3ce90dc3.js";import"./index-5a2046e1.js";import"./index-30a5eed1.js";import"./ExportModal-822a1ba2.js";import"./SaveOutlined-3c854932.js";import"./EnterOutlined-0c6ddbcb.js";import"./RightOutlined-c589ab74.js";import"./FolderOpenOutlined-6321ede0.js";import"./index-ac790217.js";const Ht={title:"Work in progress/Widgets/Integer/IntegerInput",component:n,argTypes:{...c,locale:{table:{disable:!0}}}},g=t=>{const[u,o]=m.useState(t.value);return m.useEffect(()=>{o(t.value)},[t.value]),l.jsx(n,{...t,value:u,onChange:p=>{var i;o(p),(i=t.onChange)==null||i.call(t,p)}})},r=g.bind({});r.args={required:!1,readOnly:!1,value:2};var e,a,s;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <IntegerInput {...args} value={value} onChange={(value: number) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const Jt=["Basic"];export{r as Basic,Jt as __namedExportsOrder,Ht as default};