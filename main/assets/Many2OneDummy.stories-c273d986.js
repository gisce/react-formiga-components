import{j as e}from"./jsx-runtime-f6d73c06.js";import{r as h}from"./index-8ee6c85d.js";import{a as d}from"./chunk-WFFRPTHA-a68c42c5.js";import{M as G}from"./Many2OneDummy-44eb1ad3.js";import{B as K}from"./BaseField.argTypes-d72d00ba.js";import{M as H,T as Q,P as X}from"./Many2OneSuffix-e67193c5.js";import{M as g,E as Y}from"./EnterOutlined-0c6ddbcb.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";import"./styled-components.browser.esm-53a58144.js";import"./index-4e0f86e8.js";import"./assertThisInitialized-601f600e.js";import"./index-8eb238e3.js";import"./Field-c705a0bb.js";import"./Label-5271abfa.js";import"./index-1e0e3486.js";import"./toArray-66fc3202.js";import"./isVisible-b65992d0.js";import"./index-1416ecc3.js";import"./motion-343f592f.js";import"./roundedArrow-562bcbc7.js";import"./reactNode-b58523ea.js";import"./Compact-f5d517ab.js";import"./LocaleContext-58eb36ec.js";import"./context-0e2d5d5e.js";import"./asyncToGenerator-4dda2c7d.js";import"./omit-c7331b12.js";import"./collapse-97de76d4.js";import"./useCSSVarCls-d323ff87.js";import"./row-d1e0dc1e.js";import"./statusUtils-ea7713be.js";import"./CheckCircleFilled-864fc55d.js";import"./CloseCircleFilled-d9375026.js";import"./ExclamationCircleFilled-456d0c53.js";import"./compact-item-0cc18453.js";import"./index-a7dcd279.js";import"./index-42c1687a.js";import"./SearchOutlined-820a599b.js";import"./button-32bdd4e0.js";import"./index-b1f5ed01.js";import"./Button-2f0948b7.js";import"./ButtonWithTooltip-e3b7089d.js";import"./FolderOpenOutlined-6321ede0.js";import"./index-30a5eed1.js";import"./RightOutlined-c589ab74.js";import"./PurePanel-e84627ff.js";import"./Overflow-90777bac.js";import"./slide-2e0b60dc.js";import"./index-8d36bdd2.js";const Ke={title:"Components/Widgets/Many2One/Many2OneDummy",component:G,argTypes:{...K}},r=a=>{const[J,p]=h.useState(a.value);return h.useEffect(()=>{p(a.value)},[a.value]),e.jsx(G,{...a,value:J,onChange:v=>{var f;p(v),(f=a.onChange)==null||f.call(a,v)}})},s=r.bind({});s.args={readOnly:!1,required:!1,locale:"en_US",showFolderButton:!0,showSearchButton:!0,searching:!1,disableFolderButton:!1,disableSearchButton:!1};const t=r.bind({});t.args={readOnly:!1,required:!0,locale:"en_US",showFolderButton:!0,showSearchButton:!0,searching:!1,disableFolderButton:!1,disableSearchButton:!1};const n=r.bind({});n.args={readOnly:!0,required:!1,showFolderButton:!0,showSearchButton:!0,searching:!1,disableFolderButton:!1,disableSearchButton:!1,value:"Customer # 1"};const u=r.bind({});u.args={readOnly:!1,required:!1,showFolderButton:!0,showSearchButton:!0,searching:!0,disableFolderButton:!1,disableSearchButton:!1,value:"Customer # 1"};const o=r.bind({});o.args={readOnly:!1,required:!0,showFolderButton:!0,showSearchButton:!0,searching:!0,disableFolderButton:!1,disableSearchButton:!1,value:"Customer # 1"};const l=r.bind({});l.args={readOnly:!1,required:!0,showFolderButton:!1,showSearchButton:!1,searching:!1,disableFolderButton:!1,disableSearchButton:!1,value:"Customer # 1"};const i=r.bind({});i.args={readOnly:!1,required:!1,locale:"en_US",showFolderButton:!0,showSearchButton:!0,searching:!1,disableFolderButton:!0,disableSearchButton:!0};const c=r.bind({});c.args={readOnly:!1,required:!1,locale:"en_US",showFolderButton:!0,showSearchButton:!0,searching:!1,disableFolderButton:!0,disableSearchButton:!0,suffix:e.jsx(H,{loading:!0,menuItems:e.jsx(e.Fragment,{}),onMenuItemClicked:a=>{d("onMenuItemClicked")(a)},onSuffixExpandClicked:()=>{d("onSuffixExpandClicked")}})};const m=r.bind({});m.args={readOnly:!1,required:!1,locale:"en_US",showFolderButton:!0,showSearchButton:!0,searching:!1,disableFolderButton:!0,disableSearchButton:!0,suffix:e.jsx(H,{loading:!1,menuItems:e.jsxs(e.Fragment,{children:[e.jsx(g.Item,{icon:e.jsx(Q,{}),children:"action_1"},"action_1"),e.jsx(g.Item,{icon:e.jsx(X,{}),children:"action_2"},"action_2"),e.jsx(g.Item,{icon:e.jsx(Y,{}),children:"action_3"},"action_3")]}),onMenuItemClicked:a=>{d("onMenuItemClicked")(a)},onSuffixExpandClicked:()=>{d("onSuffixExpandClicked")()}})};var S,B,y;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
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
}`,...(j=(_=o.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var q,I,k;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <Many2OneDummy {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(k=(I=l.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var R,W,T;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <Many2OneDummy {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(T=(W=i.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var U,L,N;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
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
}`,...(z=(A=m.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};const Qe=["Basic","Required","ReadOnly","Searching","SearchingRequired","NoButtons","ButtonsDisabled","WithSuffixLoading","WithSuffixWithOptions"];export{s as Basic,i as ButtonsDisabled,l as NoButtons,n as ReadOnly,t as Required,u as Searching,o as SearchingRequired,c as WithSuffixLoading,m as WithSuffixWithOptions,Qe as __namedExportsOrder,Ke as default};
