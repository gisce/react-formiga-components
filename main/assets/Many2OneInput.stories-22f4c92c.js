import{j as s}from"./jsx-runtime-f6d73c06.js";import{r as l}from"./index-8ee6c85d.js";import{I as T,v as b}from"./preview-errors-dde4324f.js";import{M as d}from"./Many2OneInput-4825de99.js";import{B as A}from"./BaseField.argTypes-d72d00ba.js";import{M as C}from"./index-3b9fbcf0.js";import"./_commonjsHelpers-de833af9.js";import"./index-356e4a49.js";import"./Many2OneDummy-9eb534f6.js";import"./styled-components.browser.esm-8d5db3cb.js";import"./index-7e3d7086.js";import"./index-f2765735.js";import"./assertThisInitialized-68330e5d.js";import"./extends-4c19d496.js";import"./index-8eb238e3.js";import"./Field-da9895b3.js";import"./Label-a0758a30.js";import"./QuestionCircleOutlined-040d7c9d.js";import"./AntdIcon-f4df470f.js";import"./index-b9328d6e.js";import"./index-7fae86d9.js";import"./toArray-66e39049.js";import"./isVisible-2ef80b15.js";import"./motion-343f592f.js";import"./roundedArrow-c768ecf1.js";import"./reactNode-c432c2b0.js";import"./Compact-1edd4e66.js";import"./LocaleContext-751eec81.js";import"./context-29a3839d.js";import"./asyncToGenerator-aa14e566.js";import"./omit-f8286760.js";import"./collapse-97de76d4.js";import"./row-1c3eec31.js";import"./useLocale-8ec28e87.js";import"./CheckCircleFilled-f858369c.js";import"./CloseCircleFilled-53e5d3ad.js";import"./ExclamationCircleFilled-95aa70b7.js";import"./LoadingOutlined-8eb7bab6.js";import"./index-ba0b8bee.js";import"./index-7fe11ddc.js";import"./compact-item-43eba85b.js";import"./TextArea-0261af0a.js";import"./useVariants-2f2c5e71.js";import"./EyeOutlined-a0dd78d5.js";import"./SearchOutlined-061923d8.js";import"./button-2909d44f.js";import"./index-eab29bb3.js";import"./Button-0e005045.js";import"./ButtonWithTooltip-4a4c058d.js";import"./FormigaConfig-df3f0c22.js";import"./FolderOpenOutlined-38e7df5a.js";import"./InfoCircleFilled-99d8f615.js";import"./CloseOutlined-9873f370.js";import"./KeyCode-6413d982.js";import"./PurePanel-3a5c693e.js";const{addons:M}=__STORYBOOK_MODULE_PREVIEW_API__,{global:y}=__STORYBOOK_MODULE_GLOBAL__;var x="storybook/actions",B=`${x}/action-event`,N={depth:10,clearOnStoryChange:!0,limit:50},D=(e,o)=>{let t=Object.getPrototypeOf(e);return!t||o(t)?t:D(t,o)},W=e=>!!(typeof e=="object"&&e&&D(e,o=>/^Synthetic(?:Base)?Event$/.test(o.constructor.name))&&typeof e.persist=="function"),J=e=>{if(W(e)){let o=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));o.persist();let t=Object.getOwnPropertyDescriptor(o,"view"),r=t==null?void 0:t.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(o,"view",{...t,value:Object.create(r.constructor.prototype)}),o}return e},K=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?b():Date.now().toString(36)+Math.random().toString(36).substring(2);function p(e,o={}){let t={...N,...o},r=function(...i){var g,f;if(o.implicit){let S=(g="__STORYBOOK_PREVIEW__"in y?y.__STORYBOOK_PREVIEW__:void 0)==null?void 0:g.storyRenders.find(c=>c.phase==="playing"||c.phase==="rendering");if(S){let c=!((f=window==null?void 0:window.FEATURES)!=null&&f.disallowImplicitActionsInRenderV8),v=new T({phase:S.phase,name:e,deprecated:c});if(c)console.warn(v);else throw v}}let n=M.getChannel(),a=K(),P=5,h=i.map(J),V=i.length>1?h:h[0],j={id:a,count:0,data:{name:e,args:V},options:{...t,maxDepth:P+(t.depth||3),allowFunction:t.allowFunction||!1}};n.emit(B,j)};return r.isAction=!0,r}const{info:F}=C,Ue={title:"Work in progress/Widgets/Many2One/Many2OneInput",component:d,argTypes:{...A}},L=e=>{const[o,t]=l.useState(e.value),[r,i]=l.useState(e.searching);return l.useEffect(()=>{t(e.value)},[e.value]),s.jsx(d,{...e,searching:r,value:o,onChange:n=>{var a;t(n),(a=e.onChange)==null||a.call(e,n)},onSearchForResult:async n=>{p("onSearchForResult")(n),i(!0),await new Promise(a=>setTimeout(a,1e3)),t({id:43,name:"Company found nº 312"}),i(!1)},onShowResultDetails:n=>{p("onShowResultDetails")(n),F({title:"Item details",centered:!0,content:s.jsx(s.Fragment,{children:JSON.stringify(n,null,2)})})}})},u=L.bind({});u.args={required:!1,readOnly:!1,value:{id:58,name:"Test"},searching:!1};const Y=e=>{const[o,t]=l.useState(e.value),[r,i]=l.useState(e.searching);return l.useEffect(()=>{t(e.value)},[e.value]),s.jsx(d,{...e,searching:r,value:o,onChange:n=>{var a;t(n),(a=e.onChange)==null||a.call(e,n)},onSearchForResult:async n=>{p("onSearchForResult")(n),i(!0),await new Promise(a=>setTimeout(a,1e3)),t({id:void 0,name:n}),i(!1)},onShowResultDetails:n=>{p("onShowResultDetails")(n),F({title:"Item details",centered:!0,content:s.jsx(s.Fragment,{children:JSON.stringify(n,null,2)})})}})},m=Y.bind({});m.args={required:!1,readOnly:!1,searching:!1};var O,R,w;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
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
}`,...(E=(I=m.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};const qe=["Basic","NotFoundResult"];export{u as Basic,m as NotFoundResult,qe as __namedExportsOrder,Ue as default};
