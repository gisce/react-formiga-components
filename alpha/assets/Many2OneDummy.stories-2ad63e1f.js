import{j as e}from"./jsx-runtime-f6d73c06.js";import{r as h}from"./index-8ee6c85d.js";import{a as d}from"./chunk-WFFRPTHA-a68c42c5.js";import{M as G}from"./Many2OneDummy-5b4963e2.js";import{B as K}from"./BaseField.argTypes-d72d00ba.js";import{M as H,T as Q,P as X}from"./Many2OneSuffix-a66f3396.js";import{M as g}from"./index-420ab320.js";import{E as Y}from"./EnterOutlined-453ad0ef.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";import"./styled-components.browser.esm-f33cca5c.js";import"./index-d0686b25.js";import"./assertThisInitialized-601f600e.js";import"./index-8eb238e3.js";import"./Field-d4acf822.js";import"./Label-1f509d27.js";import"./index-c0c995ae.js";import"./toArray-702c099d.js";import"./isVisible-10508b7a.js";import"./index-ebc937d3.js";import"./motion-343f592f.js";import"./roundedArrow-12957d20.js";import"./reactNode-b58523ea.js";import"./Compact-190860f8.js";import"./LocaleContext-58eb36ec.js";import"./context-b943a423.js";import"./asyncToGenerator-738c820e.js";import"./omit-05916825.js";import"./collapse-97de76d4.js";import"./useCSSVarCls-2e83a7af.js";import"./row-556c4485.js";import"./useLocale-e5a33693.js";import"./CheckCircleFilled-8092a51e.js";import"./CloseCircleFilled-2f02bec5.js";import"./ExclamationCircleFilled-e0925294.js";import"./compact-item-4a97683c.js";import"./index-33abafc5.js";import"./index-a92188ed.js";import"./useVariants-fa326d5c.js";import"./SearchOutlined-98c63492.js";import"./button-2157679a.js";import"./index-077eff47.js";import"./Button-bbecdc00.js";import"./ButtonWithTooltip-f255cb51.js";import"./FolderOpenOutlined-f3429b72.js";import"./index-d4fe2cfb.js";import"./RightOutlined-200f9669.js";import"./PurePanel-1447b435.js";import"./Overflow-dccf6226.js";import"./slide-b4f9f988.js";import"./index-3727660c.js";const Xe={title:"Work in progress/Widgets/Many2One/Many2OneDummy",component:G,argTypes:{...K}},r=a=>{const[J,p]=h.useState(a.value);return h.useEffect(()=>{p(a.value)},[a.value]),e.jsx(G,{...a,value:J,onChange:v=>{var f;p(v),(f=a.onChange)==null||f.call(a,v)}})},s=r.bind({});s.args={readOnly:!1,required:!1,locale:"en_US",showFolderButton:!0,showSearchButton:!0,searching:!1,disableFolderButton:!1,disableSearchButton:!1};const t=r.bind({});t.args={readOnly:!1,required:!0,locale:"en_US",showFolderButton:!0,showSearchButton:!0,searching:!1,disableFolderButton:!1,disableSearchButton:!1};const n=r.bind({});n.args={readOnly:!0,required:!1,showFolderButton:!0,showSearchButton:!0,searching:!1,disableFolderButton:!1,disableSearchButton:!1,value:"Customer # 1"};const u=r.bind({});u.args={readOnly:!1,required:!1,showFolderButton:!0,showSearchButton:!0,searching:!0,disableFolderButton:!1,disableSearchButton:!1,value:"Customer # 1"};const o=r.bind({});o.args={readOnly:!1,required:!0,showFolderButton:!0,showSearchButton:!0,searching:!0,disableFolderButton:!1,disableSearchButton:!1,value:"Customer # 1"};const l=r.bind({});l.args={readOnly:!1,required:!0,showFolderButton:!1,showSearchButton:!1,searching:!1,disableFolderButton:!1,disableSearchButton:!1,value:"Customer # 1"};const i=r.bind({});i.args={readOnly:!1,required:!1,locale:"en_US",showFolderButton:!0,showSearchButton:!0,searching:!1,disableFolderButton:!0,disableSearchButton:!0};const c=r.bind({});c.args={readOnly:!1,required:!1,locale:"en_US",showFolderButton:!0,showSearchButton:!0,searching:!1,disableFolderButton:!0,disableSearchButton:!0,suffix:e.jsx(H,{loading:!0,menuItems:e.jsx(e.Fragment,{}),onMenuItemClicked:a=>{d("onMenuItemClicked")(a)},onSuffixExpandClicked:()=>{d("onSuffixExpandClicked")}})};const m=r.bind({});m.args={readOnly:!1,required:!1,locale:"en_US",showFolderButton:!0,showSearchButton:!0,searching:!1,disableFolderButton:!0,disableSearchButton:!0,suffix:e.jsx(H,{loading:!1,menuItems:e.jsxs(e.Fragment,{children:[e.jsx(g.Item,{icon:e.jsx(Q,{}),children:"action_1"},"action_1"),e.jsx(g.Item,{icon:e.jsx(X,{}),children:"action_2"},"action_2"),e.jsx(g.Item,{icon:e.jsx(Y,{}),children:"action_3"},"action_3")]}),onMenuItemClicked:a=>{d("onMenuItemClicked")(a)},onSuffixExpandClicked:()=>{d("onSuffixExpandClicked")()}})};var S,B,y;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
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
}`,...(z=(A=m.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};const Ye=["Basic","Required","ReadOnly","Searching","SearchingRequired","NoButtons","ButtonsDisabled","WithSuffixLoading","WithSuffixWithOptions"];export{s as Basic,i as ButtonsDisabled,l as NoButtons,n as ReadOnly,t as Required,u as Searching,o as SearchingRequired,c as WithSuffixLoading,m as WithSuffixWithOptions,Ye as __namedExportsOrder,Xe as default};
