import{j as s}from"./jsx-runtime-ffb262ed.js";import{r as l}from"./index-76fb7be0.js";import{I as T,v as b}from"./preview-errors-dde4324f.js";import{M as d}from"./Many2OneInput-d69c0525.js";import{B as A}from"./BaseField.argTypes-d72d00ba.js";import{M as C}from"./index-857d5c02.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./Many2OneDummy-edb89093.js";import"./styled-components.browser.esm-06c7d463.js";import"./index-86654eeb.js";import"./genStyleUtils-28a6e765.js";import"./assertThisInitialized-11245cea.js";import"./Field-55945548.js";import"./Label-dc770157.js";import"./QuestionCircleOutlined-6633361d.js";import"./QuestionCircleOutlined-04e9cd25.js";import"./AntdIcon-16889e64.js";import"./index-df709f45.js";import"./index-6141dcc2.js";import"./index-356ca88b.js";import"./index-da03a860.js";import"./context-b387624d.js";import"./wrapNativeSuper-e3a961e5.js";import"./Compact-a3364df5.js";import"./useSize-06920fd3.js";import"./reactNode-9d24d027.js";import"./LocaleContext-6a38b50b.js";import"./index-dfc37164.js";import"./useCSSVarCls-56ee7f0e.js";import"./collapse-97de76d4.js";import"./row-8e2bb960.js";import"./AntdIcon-eb4d8409.js";import"./useLocale-8b2da478.js";import"./CheckCircleFilled-f46cad22.js";import"./CheckCircleFilled-1392c7ce.js";import"./CloseCircleFilled-d4e8e9a6.js";import"./CloseCircleFilled-257b815e.js";import"./ExclamationCircleFilled-b40e1c9f.js";import"./ExclamationCircleFilled-eba6e68e.js";import"./compact-item-869a41a4.js";import"./LoadingOutlined-722c611a.js";import"./index-45c0c470.js";import"./index-8c4dacd9.js";import"./TextArea-4f362629.js";import"./useVariants-6604f14b.js";import"./SearchOutlined-a215f538.js";import"./SearchOutlined-11b57711.js";import"./EyeInvisibleOutlined-4021859d.js";import"./button-a7ab0380.js";import"./index-eacc853e.js";import"./Button-95ac85a7.js";import"./ButtonWithTooltip-62614510.js";import"./LoadingOutlined-50148ceb.js";import"./FormigaConfig-ef065f1e.js";import"./SearchOutlined-9f8470fd.js";import"./FolderOpenOutlined-fe949aba.js";import"./InfoCircleFilled-9abc254c.js";import"./InfoCircleFilled-baaa675e.js";import"./CloseOutlined-55cb7de5.js";import"./CloseOutlined-9385a5da.js";import"./KeyCode-6413d982.js";import"./PurePanel-dc31f1e9.js";const{addons:M}=__STORYBOOK_MODULE_PREVIEW_API__,{global:y}=__STORYBOOK_MODULE_GLOBAL__;var x="storybook/actions",B=`${x}/action-event`,N={depth:10,clearOnStoryChange:!0,limit:50},D=(e,o)=>{let t=Object.getPrototypeOf(e);return!t||o(t)?t:D(t,o)},W=e=>!!(typeof e=="object"&&e&&D(e,o=>/^Synthetic(?:Base)?Event$/.test(o.constructor.name))&&typeof e.persist=="function"),J=e=>{if(W(e)){let o=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));o.persist();let t=Object.getOwnPropertyDescriptor(o,"view"),r=t==null?void 0:t.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(o,"view",{...t,value:Object.create(r.constructor.prototype)}),o}return e},K=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?b():Date.now().toString(36)+Math.random().toString(36).substring(2);function p(e,o={}){let t={...N,...o},r=function(...a){var g,f;if(o.implicit){let S=(g="__STORYBOOK_PREVIEW__"in y?y.__STORYBOOK_PREVIEW__:void 0)==null?void 0:g.storyRenders.find(c=>c.phase==="playing"||c.phase==="rendering");if(S){let c=!((f=window==null?void 0:window.FEATURES)!=null&&f.disallowImplicitActionsInRenderV8),v=new T({phase:S.phase,name:e,deprecated:c});if(c)console.warn(v);else throw v}}let n=M.getChannel(),i=K(),P=5,h=a.map(J),V=a.length>1?h:h[0],j={id:i,count:0,data:{name:e,args:V},options:{...t,maxDepth:P+(t.depth||3),allowFunction:t.allowFunction||!1}};n.emit(B,j)};return r.isAction=!0,r}const{info:F}=C,Ze={title:"Work in progress/Widgets/Many2One/Many2OneInput",component:d,argTypes:{...A}},L=e=>{const[o,t]=l.useState(e.value),[r,a]=l.useState(e.searching);return l.useEffect(()=>{t(e.value)},[e.value]),s.jsx(d,{...e,searching:r,value:o,onChange:n=>{var i;t(n),(i=e.onChange)==null||i.call(e,n)},onSearchForResult:async n=>{p("onSearchForResult")(n),a(!0),await new Promise(i=>setTimeout(i,1e3)),t({id:43,name:"Company found nº 312"}),a(!1)},onShowResultDetails:n=>{p("onShowResultDetails")(n),F({title:"Item details",centered:!0,content:s.jsx(s.Fragment,{children:JSON.stringify(n,null,2)})})}})},u=L.bind({});u.args={required:!1,readOnly:!1,value:{id:58,name:"Test"},searching:!1};const Y=e=>{const[o,t]=l.useState(e.value),[r,a]=l.useState(e.searching);return l.useEffect(()=>{t(e.value)},[e.value]),s.jsx(d,{...e,searching:r,value:o,onChange:n=>{var i;t(n),(i=e.onChange)==null||i.call(e,n)},onSearchForResult:async n=>{p("onSearchForResult")(n),a(!0),await new Promise(i=>setTimeout(i,1e3)),t({id:void 0,name:n}),a(!1)},onShowResultDetails:n=>{p("onShowResultDetails")(n),F({title:"Item details",centered:!0,content:s.jsx(s.Fragment,{children:JSON.stringify(n,null,2)})})}})},m=Y.bind({});m.args={required:!1,readOnly:!1,searching:!1};var O,R,w;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  const [searching, setSearching] = useState(args.searching);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <Many2OneInput {...args} searching={searching} value={value} onChange={(value: ItemPair) => {
    setValue(value);
    args.onChange?.(value);
  }} onSearchForResult={async (value: string) => {
    action("onSearchForResult")(value);
    setSearching(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setValue({
      id: 43,
      name: "Company found nº 312"
    });
    setSearching(false);
  }} onShowResultDetails={(item: ItemPair) => {
    action("onShowResultDetails")(item);
    info({
      title: "Item details",
      centered: true,
      content: <>{JSON.stringify(item, null, 2)}</>
    });
  }} />;
}`,...(w=(R=u.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var _,I,E;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  const [searching, setSearching] = useState(args.searching);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <Many2OneInput {...args} searching={searching} value={value} onChange={(value: ItemPair) => {
    setValue(value);
    args.onChange?.(value);
  }} onSearchForResult={async (value: string) => {
    action("onSearchForResult")(value);
    setSearching(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setValue({
      id: undefined,
      name: value
    });
    setSearching(false);
  }} onShowResultDetails={(item: ItemPair) => {
    action("onShowResultDetails")(item);
    info({
      title: "Item details",
      centered: true,
      content: <>{JSON.stringify(item, null, 2)}</>
    });
  }} />;
}`,...(E=(I=m.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};const et=["Basic","NotFoundResult"];export{u as Basic,m as NotFoundResult,et as __namedExportsOrder,Ze as default};
