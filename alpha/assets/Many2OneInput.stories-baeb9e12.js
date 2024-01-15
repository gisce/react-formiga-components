import{j as u}from"./jsx-runtime-f6d73c06.js";import{r as o}from"./index-8ee6c85d.js";import{a as f}from"./chunk-WFFRPTHA-a68c42c5.js";import{M as F}from"./Many2OneDummy-d90f0cc1.js";import{B as w}from"./BaseField.argTypes-d72d00ba.js";import{M as O}from"./index-930e7738.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";import"./styled-components.browser.esm-b0ed5b60.js";import"./index-b03af66d.js";import"./assertThisInitialized-601f600e.js";import"./index-8eb238e3.js";import"./Field-edb022fd.js";import"./Label-72a39789.js";import"./index-fb0b6330.js";import"./toArray-cadbd5cb.js";import"./isVisible-972dbae1.js";import"./index-68d6b468.js";import"./motion-343f592f.js";import"./roundedArrow-9acedcf0.js";import"./reactNode-b58523ea.js";import"./Compact-929b86a9.js";import"./LocaleContext-58eb36ec.js";import"./context-ccc1de45.js";import"./asyncToGenerator-098b8a85.js";import"./omit-afa65c0b.js";import"./collapse-97de76d4.js";import"./useCSSVarCls-b1a1e215.js";import"./row-645cbbc7.js";import"./useVariants-f34488a3.js";import"./CheckCircleFilled-475de80e.js";import"./CloseCircleFilled-02876ee0.js";import"./ExclamationCircleFilled-bdc38af8.js";import"./compact-item-d6c7d423.js";import"./index-d4e64ab6.js";import"./index-06d3f492.js";import"./SearchOutlined-21a685c2.js";import"./button-c94e87ef.js";import"./index-e1b85e37.js";import"./Button-966758bf.js";import"./ButtonWithTooltip-164b0bc8.js";import"./FolderOpenOutlined-602d4e6f.js";import"./CloseOutlined-16733440.js";import"./PurePanel-270ef2ff.js";import"./pickAttrs-95892129.js";const p=n=>{const{value:t,onChange:r,onSearchForResult:i,onShowResultDetails:s,searching:e=!1,...a}=n,m=t?{id:t.id||void 0,name:t.name||void 0}:{id:void 0,name:""},l=o.useRef(m.name);return o.useEffect(()=>{l.current=t&&t.name||""},[t]),u.jsx(F,{...a,searching:e,value:l.current,onChange:h=>{if(t&&t.id){l.current="",r({id:void 0,name:""});return}l.current=h,r({id:void 0,name:h})},disableFolderButton:!(m&&m.id!==void 0),disableSearchButton:e,onClickFolderButton:()=>{s(m)},onClickSearchButton:()=>{i(l.current)},onEnterPressed:()=>{m.id!==void 0||e||i(l.current)},onElementLostFocus:()=>{m.id!==void 0||e||i(l.current)}})};try{p.displayName="Many2OneInput",p.__docgenInfo={description:"",displayName:"Many2OneInput",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"enum",value:[{value:'"en_US"'},{value:'"es_ES"'},{value:'"ca_ES"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"ItemPair"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: ItemPair) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},onShowResultDetails:{defaultValue:null,description:"",name:"onShowResultDetails",required:!1,type:{name:"((item: ItemPair) => void)"}},onSearchForResult:{defaultValue:null,description:"",name:"onSearchForResult",required:!1,type:{name:"((name: string) => void)"}},searching:{defaultValue:null,description:"",name:"searching",required:!1,type:{name:"boolean"}}}}}catch{}const{info:V}=O,Re={title:"Work in progress/Widgets/Many2One/Many2OneInput",component:p,argTypes:{...w}},q=n=>{const[t,r]=o.useState(n.value),[i,s]=o.useState(n.searching);return o.useEffect(()=>{r(n.value)},[n.value]),u.jsx(p,{...n,searching:i,value:t,onChange:e=>{var a;r(e),(a=n.onChange)==null||a.call(n,e)},onSearchForResult:async e=>{f("onSearchForResult")(e),s(!0),await new Promise(a=>setTimeout(a,1e3)),r({id:43,name:"Company found nº 312"}),s(!1)},onShowResultDetails:e=>{f("onShowResultDetails")(e),V({title:"Item details",centered:!0,content:u.jsx(u.Fragment,{children:JSON.stringify(e,null,2)})})}})},c=q.bind({});c.args={required:!1,readOnly:!1,value:{id:58,name:"Test"},searching:!1};const x=n=>{const[t,r]=o.useState(n.value),[i,s]=o.useState(n.searching);return o.useEffect(()=>{r(n.value)},[n.value]),u.jsx(p,{...n,searching:i,value:t,onChange:e=>{var a;r(e),(a=n.onChange)==null||a.call(n,e)},onSearchForResult:async e=>{f("onSearchForResult")(e),s(!0),await new Promise(a=>setTimeout(a,1e3)),r({id:void 0,name:e}),s(!1)},onShowResultDetails:e=>{f("onShowResultDetails")(e),V({title:"Item details",centered:!0,content:u.jsx(u.Fragment,{children:JSON.stringify(e,null,2)})})}})},d=x.bind({});d.args={required:!1,readOnly:!1,searching:!1};var v,g,S;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
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
}`,...(I=(R=d.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};const Ie=["Basic","NotFoundResult"];export{c as Basic,d as NotFoundResult,Ie as __namedExportsOrder,Re as default};
