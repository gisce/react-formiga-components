import{j as e}from"./jsx-runtime-f6d73c06.js";import{r as h}from"./index-8ee6c85d.js";import{a as d}from"./chunk-WFFRPTHA-a68c42c5.js";import{M as G}from"./Many2OneDummy-35df1b97.js";import{B as K}from"./BaseField.argTypes-d72d00ba.js";import{M as H,T as Q,P as X}from"./Many2OneSuffix-bfe4f4b5.js";import{M as g,E as Y}from"./EnterOutlined-8a939df2.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";import"./styled-components.browser.esm-e721a1b2.js";import"./index-7b090294.js";import"./assertThisInitialized-f89cd6ac.js";import"./index-8eb238e3.js";import"./Field-3d8bab67.js";import"./Label-e0ed68ba.js";import"./index-5400b74c.js";import"./toArray-f9441672.js";import"./isVisible-f24c26d5.js";import"./index-45663ff8.js";import"./motion-343f592f.js";import"./roundedArrow-d4d9ea1f.js";import"./reactNode-c432c2b0.js";import"./Compact-7e23d0f8.js";import"./LocaleContext-58eb36ec.js";import"./context-4f71b533.js";import"./asyncToGenerator-ae37becc.js";import"./omit-c5f18c7c.js";import"./collapse-97de76d4.js";import"./useCSSVarCls-313dcfc7.js";import"./row-0ae67c61.js";import"./useLocale-3708b049.js";import"./CheckCircleFilled-d8efb997.js";import"./CloseCircleFilled-4563a35c.js";import"./ExclamationCircleFilled-4441be00.js";import"./compact-item-82d41e68.js";import"./index-4107e8f6.js";import"./index-bb107a08.js";import"./useVariants-c4b9294e.js";import"./SearchOutlined-1fd672bc.js";import"./button-0d65e38a.js";import"./index-5c8aaf67.js";import"./Button-fab7e477.js";import"./ButtonWithTooltip-efe41802.js";import"./FolderOpenOutlined-66e2d7d0.js";import"./index-13526d7b.js";import"./RightOutlined-d0bb63a3.js";import"./PurePanel-673b028b.js";import"./Overflow-5aeccf27.js";import"./slide-41340aab.js";import"./index-d7cf21a7.js";const Qe={title:"Work in progress/Widgets/Many2One/Many2OneDummy",component:G,argTypes:{...K}},r=a=>{const[J,p]=h.useState(a.value);return h.useEffect(()=>{p(a.value)},[a.value]),e.jsx(G,{...a,value:J,onChange:v=>{var f;p(v),(f=a.onChange)==null||f.call(a,v)}})},s=r.bind({});s.args={readOnly:!1,required:!1,locale:"en_US",showFolderButton:!0,showSearchButton:!0,searching:!1,disableFolderButton:!1,disableSearchButton:!1};const t=r.bind({});t.args={readOnly:!1,required:!0,locale:"en_US",showFolderButton:!0,showSearchButton:!0,searching:!1,disableFolderButton:!1,disableSearchButton:!1};const n=r.bind({});n.args={readOnly:!0,required:!1,showFolderButton:!0,showSearchButton:!0,searching:!1,disableFolderButton:!1,disableSearchButton:!1,value:"Customer # 1"};const u=r.bind({});u.args={readOnly:!1,required:!1,showFolderButton:!0,showSearchButton:!0,searching:!0,disableFolderButton:!1,disableSearchButton:!1,value:"Customer # 1"};const o=r.bind({});o.args={readOnly:!1,required:!0,showFolderButton:!0,showSearchButton:!0,searching:!0,disableFolderButton:!1,disableSearchButton:!1,value:"Customer # 1"};const l=r.bind({});l.args={readOnly:!1,required:!0,showFolderButton:!1,showSearchButton:!1,searching:!1,disableFolderButton:!1,disableSearchButton:!1,value:"Customer # 1"};const i=r.bind({});i.args={readOnly:!1,required:!1,locale:"en_US",showFolderButton:!0,showSearchButton:!0,searching:!1,disableFolderButton:!0,disableSearchButton:!0};const c=r.bind({});c.args={readOnly:!1,required:!1,locale:"en_US",showFolderButton:!0,showSearchButton:!0,searching:!1,disableFolderButton:!0,disableSearchButton:!0,suffix:e.jsx(H,{loading:!0,menuItems:e.jsx(e.Fragment,{}),onMenuItemClicked:a=>{d("onMenuItemClicked")(a)},onSuffixExpandClicked:()=>{d("onSuffixExpandClicked")}})};const m=r.bind({});m.args={readOnly:!1,required:!1,locale:"en_US",showFolderButton:!0,showSearchButton:!0,searching:!1,disableFolderButton:!0,disableSearchButton:!0,suffix:e.jsx(H,{loading:!1,menuItems:e.jsxs(e.Fragment,{children:[e.jsx(g.Item,{icon:e.jsx(Q,{}),children:"action_1"},"action_1"),e.jsx(g.Item,{icon:e.jsx(X,{}),children:"action_2"},"action_2"),e.jsx(g.Item,{icon:e.jsx(Y,{}),children:"action_3"},"action_3")]}),onMenuItemClicked:a=>{d("onMenuItemClicked")(a)},onSuffixExpandClicked:()=>{d("onSuffixExpandClicked")()}})};var S,B,y;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <Many2OneDummy {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(y=(B=s.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var C,x,b;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <Many2OneDummy {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var O,V,M;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <Many2OneDummy {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(M=(V=n.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var F,E,w;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <Many2OneDummy {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(w=(E=u.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var D,_,j;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <Many2OneDummy {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(j=(_=o.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var q,k,I;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <Many2OneDummy {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(I=(k=l.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var W,R,T;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <Many2OneDummy {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(T=(R=i.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var U,L,N;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <Many2OneDummy {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(N=(L=c.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var P,A,z;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <Many2OneDummy {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(z=(A=m.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};const Xe=["Basic","Required","ReadOnly","Searching","SearchingRequired","NoButtons","ButtonsDisabled","WithSuffixLoading","WithSuffixWithOptions"];export{s as Basic,i as ButtonsDisabled,l as NoButtons,n as ReadOnly,t as Required,u as Searching,o as SearchingRequired,c as WithSuffixLoading,m as WithSuffixWithOptions,Xe as __namedExportsOrder,Qe as default};
