import{j as u}from"./jsx-runtime-f6d73c06.js";import{r as o}from"./index-8ee6c85d.js";import{a as f}from"./chunk-WFFRPTHA-a68c42c5.js";import{M as F}from"./Many2OneDummy-5b4963e2.js";import{B as w}from"./BaseField.argTypes-d72d00ba.js";import{M as O}from"./index-7ef71671.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";import"./styled-components.browser.esm-f33cca5c.js";import"./index-d0686b25.js";import"./assertThisInitialized-601f600e.js";import"./index-8eb238e3.js";import"./Field-d4acf822.js";import"./Label-1f509d27.js";import"./index-c0c995ae.js";import"./toArray-702c099d.js";import"./isVisible-10508b7a.js";import"./index-ebc937d3.js";import"./motion-343f592f.js";import"./roundedArrow-12957d20.js";import"./reactNode-b58523ea.js";import"./Compact-190860f8.js";import"./LocaleContext-58eb36ec.js";import"./context-b943a423.js";import"./asyncToGenerator-738c820e.js";import"./omit-05916825.js";import"./collapse-97de76d4.js";import"./useCSSVarCls-2e83a7af.js";import"./row-556c4485.js";import"./useLocale-e5a33693.js";import"./CheckCircleFilled-8092a51e.js";import"./CloseCircleFilled-2f02bec5.js";import"./ExclamationCircleFilled-e0925294.js";import"./compact-item-4a97683c.js";import"./index-33abafc5.js";import"./index-a92188ed.js";import"./useVariants-fa326d5c.js";import"./SearchOutlined-98c63492.js";import"./button-2157679a.js";import"./index-077eff47.js";import"./Button-bbecdc00.js";import"./ButtonWithTooltip-f255cb51.js";import"./FolderOpenOutlined-f3429b72.js";import"./CloseOutlined-bc95787e.js";import"./PurePanel-1447b435.js";import"./pickAttrs-d6bf1a4e.js";const p=n=>{const{value:t,onChange:r,onSearchForResult:i,onShowResultDetails:s,searching:e=!1,...a}=n,m=t?{id:t.id||void 0,name:t.name||void 0}:{id:void 0,name:""},l=o.useRef(m.name);return o.useEffect(()=>{l.current=t&&t.name||""},[t]),u.jsx(F,{...a,searching:e,value:l.current,onChange:h=>{if(t&&t.id){l.current="",r({id:void 0,name:""});return}l.current=h,r({id:void 0,name:h})},disableFolderButton:!(m&&m.id!==void 0),disableSearchButton:e,onClickFolderButton:()=>{s(m)},onClickSearchButton:()=>{i(l.current)},onEnterPressed:()=>{m.id!==void 0||e||i(l.current)},onElementLostFocus:()=>{m.id!==void 0||e||i(l.current)}})};try{p.displayName="Many2OneInput",p.__docgenInfo={description:"",displayName:"Many2OneInput",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"enum",value:[{value:'"en_US"'},{value:'"es_ES"'},{value:'"ca_ES"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"ItemPair"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: ItemPair) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},onShowResultDetails:{defaultValue:null,description:"",name:"onShowResultDetails",required:!1,type:{name:"((item: ItemPair) => void)"}},onSearchForResult:{defaultValue:null,description:"",name:"onSearchForResult",required:!1,type:{name:"((name: string) => void)"}},searching:{defaultValue:null,description:"",name:"searching",required:!1,type:{name:"boolean"}}}}}catch{}const{info:V}=O,Ie={title:"Work in progress/Widgets/Many2One/Many2OneInput",component:p,argTypes:{...w}},q=n=>{const[t,r]=o.useState(n.value),[i,s]=o.useState(n.searching);return o.useEffect(()=>{r(n.value)},[n.value]),u.jsx(p,{...n,searching:i,value:t,onChange:e=>{var a;r(e),(a=n.onChange)==null||a.call(n,e)},onSearchForResult:async e=>{f("onSearchForResult")(e),s(!0),await new Promise(a=>setTimeout(a,1e3)),r({id:43,name:"Company found nº 312"}),s(!1)},onShowResultDetails:e=>{f("onShowResultDetails")(e),V({title:"Item details",centered:!0,content:u.jsx(u.Fragment,{children:JSON.stringify(e,null,2)})})}})},c=q.bind({});c.args={required:!1,readOnly:!1,value:{id:58,name:"Test"},searching:!1};const x=n=>{const[t,r]=o.useState(n.value),[i,s]=o.useState(n.searching);return o.useEffect(()=>{r(n.value)},[n.value]),u.jsx(p,{...n,searching:i,value:t,onChange:e=>{var a;r(e),(a=n.onChange)==null||a.call(n,e)},onSearchForResult:async e=>{f("onSearchForResult")(e),s(!0),await new Promise(a=>setTimeout(a,1e3)),r({id:void 0,name:e}),s(!1)},onShowResultDetails:e=>{f("onShowResultDetails")(e),V({title:"Item details",centered:!0,content:u.jsx(u.Fragment,{children:JSON.stringify(e,null,2)})})}})},d=x.bind({});d.args={required:!1,readOnly:!1,searching:!1};var v,g,S;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
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
}`,...(S=(g=c.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var y,R,I;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
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
}`,...(I=(R=d.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};const Ve=["Basic","NotFoundResult"];export{c as Basic,d as NotFoundResult,Ve as __namedExportsOrder,Ie as default};
