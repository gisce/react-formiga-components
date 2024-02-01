import{j as s}from"./jsx-runtime-f6d73c06.js";import{r as l}from"./index-8ee6c85d.js";import{I as T,v as b}from"./preview-errors-dde4324f.js";import{M as d}from"./Many2OneInput-b393eddb.js";import{B as A}from"./BaseField.argTypes-d72d00ba.js";import{M as C}from"./index-620bd655.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./Many2OneDummy-7e06ba65.js";import"./styled-components.browser.esm-9d5760e0.js";import"./index-d66c9264.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./Field-be3812e4.js";import"./Label-51d2131b.js";import"./index-99f8f215.js";import"./toArray-7c8d8abc.js";import"./isVisible-ba0f3bfc.js";import"./index-fa6ed0a5.js";import"./motion-343f592f.js";import"./roundedArrow-77f12b90.js";import"./reactNode-c432c2b0.js";import"./Compact-42703e7c.js";import"./LocaleContext-5ea78dca.js";import"./context-39b5ed41.js";import"./asyncToGenerator-668af2b4.js";import"./omit-8a9b0517.js";import"./collapse-97de76d4.js";import"./row-14c4df27.js";import"./useLocale-33ca30a9.js";import"./CheckCircleFilled-7f76e67f.js";import"./CloseCircleFilled-abb829f0.js";import"./ExclamationCircleFilled-58384750.js";import"./compact-item-d72b0080.js";import"./index-a71e9642.js";import"./index-56618587.js";import"./useVariants-83590930.js";import"./SearchOutlined-271c449e.js";import"./button-26c76043.js";import"./index-62e8e9d6.js";import"./Button-93954864.js";import"./ButtonWithTooltip-520fa07d.js";import"./FormigaConfig-2f30d381.js";import"./InfoCircleFilled-2d19b084.js";import"./CloseOutlined-4f476cb1.js";import"./PurePanel-6fb313a7.js";const{addons:M}=__STORYBOOK_MODULE_PREVIEW_API__,{global:y}=__STORYBOOK_MODULE_GLOBAL__;var x="storybook/actions",B=`${x}/action-event`,N={depth:10,clearOnStoryChange:!0,limit:50},D=(e,o)=>{let t=Object.getPrototypeOf(e);return!t||o(t)?t:D(t,o)},W=e=>!!(typeof e=="object"&&e&&D(e,o=>/^Synthetic(?:Base)?Event$/.test(o.constructor.name))&&typeof e.persist=="function"),J=e=>{if(W(e)){let o=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));o.persist();let t=Object.getOwnPropertyDescriptor(o,"view"),r=t==null?void 0:t.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(o,"view",{...t,value:Object.create(r.constructor.prototype)}),o}return e},K=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?b():Date.now().toString(36)+Math.random().toString(36).substring(2);function p(e,o={}){let t={...N,...o},r=function(...i){var g,f;if(o.implicit){let S=(g="__STORYBOOK_PREVIEW__"in y?y.__STORYBOOK_PREVIEW__:void 0)==null?void 0:g.storyRenders.find(c=>c.phase==="playing"||c.phase==="rendering");if(S){let c=!((f=window==null?void 0:window.FEATURES)!=null&&f.disallowImplicitActionsInRenderV8),v=new T({phase:S.phase,name:e,deprecated:c});if(c)console.warn(v);else throw v}}let n=M.getChannel(),a=K(),P=5,h=i.map(J),V=i.length>1?h:h[0],j={id:a,count:0,data:{name:e,args:V},options:{...t,maxDepth:P+(t.depth||3),allowFunction:t.allowFunction||!1}};n.emit(B,j)};return r.isAction=!0,r}const{info:F}=C,xe={title:"Work in progress/Widgets/Many2One/Many2OneInput",component:d,argTypes:{...A}},L=e=>{const[o,t]=l.useState(e.value),[r,i]=l.useState(e.searching);return l.useEffect(()=>{t(e.value)},[e.value]),s.jsx(d,{...e,searching:r,value:o,onChange:n=>{var a;t(n),(a=e.onChange)==null||a.call(e,n)},onSearchForResult:async n=>{p("onSearchForResult")(n),i(!0),await new Promise(a=>setTimeout(a,1e3)),t({id:43,name:"Company found nº 312"}),i(!1)},onShowResultDetails:n=>{p("onShowResultDetails")(n),F({title:"Item details",centered:!0,content:s.jsx(s.Fragment,{children:JSON.stringify(n,null,2)})})}})},u=L.bind({});u.args={required:!1,readOnly:!1,value:{id:58,name:"Test"},searching:!1};const Y=e=>{const[o,t]=l.useState(e.value),[r,i]=l.useState(e.searching);return l.useEffect(()=>{t(e.value)},[e.value]),s.jsx(d,{...e,searching:r,value:o,onChange:n=>{var a;t(n),(a=e.onChange)==null||a.call(e,n)},onSearchForResult:async n=>{p("onSearchForResult")(n),i(!0),await new Promise(a=>setTimeout(a,1e3)),t({id:void 0,name:n}),i(!1)},onShowResultDetails:n=>{p("onShowResultDetails")(n),F({title:"Item details",centered:!0,content:s.jsx(s.Fragment,{children:JSON.stringify(n,null,2)})})}})},m=Y.bind({});m.args={required:!1,readOnly:!1,searching:!1};var O,R,w;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
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
}`,...(E=(I=m.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};const Be=["Basic","NotFoundResult"];export{u as Basic,m as NotFoundResult,Be as __namedExportsOrder,xe as default};
