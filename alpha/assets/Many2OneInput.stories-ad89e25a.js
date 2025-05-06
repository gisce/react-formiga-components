import{j as s}from"./jsx-runtime-ffb262ed.js";import{r as l}from"./index-76fb7be0.js";import{I as T,v as b}from"./preview-errors-dde4324f.js";import{M as d}from"./Many2OneInput-480845b0.js";import{B as A}from"./BaseField.argTypes-d72d00ba.js";import{M as C}from"./index-3a957ad7.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./Many2OneDummy-d35cc791.js";import"./styled-components.browser.esm-837c5936.js";import"./index-86654eeb.js";import"./genStyleUtils-4eaa55a5.js";import"./assertThisInitialized-11245cea.js";import"./Field-2cd6e552.js";import"./Label-5306f0c8.js";import"./QuestionCircleOutlined-35a42c77.js";import"./AntdIcon-16889e64.js";import"./index-1db4924e.js";import"./index-c0ac072d.js";import"./index-da03a860.js";import"./index-95593828.js";import"./context-13a51095.js";import"./wrapNativeSuper-e3a961e5.js";import"./roundedArrow-b7d508f7.js";import"./Compact-f37358d5.js";import"./motion-892812ba.js";import"./reactNode-9d24d027.js";import"./LocaleContext-7544963d.js";import"./useCSSVarCls-aaef417d.js";import"./collapse-97de76d4.js";import"./row-0e75f3e7.js";import"./AntdIcon-24fbe913.js";import"./useLocale-5eb46448.js";import"./CheckCircleFilled-6dfa65f4.js";import"./CheckCircleFilled-1392c7ce.js";import"./CloseCircleFilled-2df2155f.js";import"./CloseCircleFilled-257b815e.js";import"./ExclamationCircleFilled-04a5fe30.js";import"./ExclamationCircleFilled-eba6e68e.js";import"./compact-item-2b086764.js";import"./LoadingOutlined-722c611a.js";import"./index-0a5b12e1.js";import"./index-bde92207.js";import"./TextArea-e8e3a399.js";import"./useVariants-af39c24c.js";import"./SearchOutlined-26e8fa80.js";import"./SearchOutlined-11b57711.js";import"./EyeInvisibleOutlined-4021859d.js";import"./button-49751c25.js";import"./index-7367e026.js";import"./Button-d44b6a4b.js";import"./ButtonWithTooltip-9202dad7.js";import"./LoadingOutlined-50148ceb.js";import"./FormigaConfig-9cbca869.js";import"./SearchOutlined-9f8470fd.js";import"./FolderOpenOutlined-fe949aba.js";import"./InfoCircleFilled-e64602d3.js";import"./InfoCircleFilled-baaa675e.js";import"./CloseOutlined-bab4fc90.js";import"./CloseOutlined-9385a5da.js";import"./KeyCode-6413d982.js";import"./PurePanel-c2d1df7c.js";const{addons:M}=__STORYBOOK_MODULE_PREVIEW_API__,{global:y}=__STORYBOOK_MODULE_GLOBAL__;var x="storybook/actions",B=`${x}/action-event`,N={depth:10,clearOnStoryChange:!0,limit:50},D=(e,o)=>{let t=Object.getPrototypeOf(e);return!t||o(t)?t:D(t,o)},W=e=>!!(typeof e=="object"&&e&&D(e,o=>/^Synthetic(?:Base)?Event$/.test(o.constructor.name))&&typeof e.persist=="function"),J=e=>{if(W(e)){let o=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));o.persist();let t=Object.getOwnPropertyDescriptor(o,"view"),r=t==null?void 0:t.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(o,"view",{...t,value:Object.create(r.constructor.prototype)}),o}return e},K=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?b():Date.now().toString(36)+Math.random().toString(36).substring(2);function p(e,o={}){let t={...N,...o},r=function(...a){var g,f;if(o.implicit){let S=(g="__STORYBOOK_PREVIEW__"in y?y.__STORYBOOK_PREVIEW__:void 0)==null?void 0:g.storyRenders.find(c=>c.phase==="playing"||c.phase==="rendering");if(S){let c=!((f=window==null?void 0:window.FEATURES)!=null&&f.disallowImplicitActionsInRenderV8),v=new T({phase:S.phase,name:e,deprecated:c});if(c)console.warn(v);else throw v}}let n=M.getChannel(),i=K(),P=5,h=a.map(J),V=a.length>1?h:h[0],j={id:i,count:0,data:{name:e,args:V},options:{...t,maxDepth:P+(t.depth||3),allowFunction:t.allowFunction||!1}};n.emit(B,j)};return r.isAction=!0,r}const{info:F}=C,Xe={title:"Work in progress/Widgets/Many2One/Many2OneInput",component:d,argTypes:{...A}},L=e=>{const[o,t]=l.useState(e.value),[r,a]=l.useState(e.searching);return l.useEffect(()=>{t(e.value)},[e.value]),s.jsx(d,{...e,searching:r,value:o,onChange:n=>{var i;t(n),(i=e.onChange)==null||i.call(e,n)},onSearchForResult:async n=>{p("onSearchForResult")(n),a(!0),await new Promise(i=>setTimeout(i,1e3)),t({id:43,name:"Company found nº 312"}),a(!1)},onShowResultDetails:n=>{p("onShowResultDetails")(n),F({title:"Item details",centered:!0,content:s.jsx(s.Fragment,{children:JSON.stringify(n,null,2)})})}})},u=L.bind({});u.args={required:!1,readOnly:!1,value:{id:58,name:"Test"},searching:!1};const Y=e=>{const[o,t]=l.useState(e.value),[r,a]=l.useState(e.searching);return l.useEffect(()=>{t(e.value)},[e.value]),s.jsx(d,{...e,searching:r,value:o,onChange:n=>{var i;t(n),(i=e.onChange)==null||i.call(e,n)},onSearchForResult:async n=>{p("onSearchForResult")(n),a(!0),await new Promise(i=>setTimeout(i,1e3)),t({id:void 0,name:n}),a(!1)},onShowResultDetails:n=>{p("onShowResultDetails")(n),F({title:"Item details",centered:!0,content:s.jsx(s.Fragment,{children:JSON.stringify(n,null,2)})})}})},m=Y.bind({});m.args={required:!1,readOnly:!1,searching:!1};var O,R,w;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
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
}`,...(E=(I=m.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};const Ze=["Basic","NotFoundResult"];export{u as Basic,m as NotFoundResult,Ze as __namedExportsOrder,Xe as default};
