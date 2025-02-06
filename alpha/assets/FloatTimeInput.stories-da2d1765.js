import{j as q}from"./jsx-runtime-f6d73c06.js";import{r as l}from"./index-8ee6c85d.js";import{p as x,a as C}from"./FloatTime.helper-f755c1c2.js";import{s as I}from"./styled-components.browser.esm-f5d1b584.js";import{R}from"./Field-bf48cf23.js";import{A}from"./index-a34c119a.js";import{B}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./index-916df0c6.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./Label-81c42596.js";import"./index-9c320998.js";import"./toArray-08f3fa85.js";import"./isVisible-c2160674.js";import"./index-71762a4a.js";import"./motion-343f592f.js";import"./roundedArrow-35bcc62e.js";import"./reactNode-c432c2b0.js";import"./Compact-11981144.js";import"./LocaleContext-02870291.js";import"./context-4be339a9.js";import"./asyncToGenerator-5190802c.js";import"./omit-db8b152c.js";import"./collapse-97de76d4.js";import"./row-35453298.js";import"./useLocale-7291e1d6.js";import"./CheckCircleFilled-363e340b.js";import"./CloseCircleFilled-33e5256a.js";import"./ExclamationCircleFilled-3599e5f5.js";import"./LoadingOutlined-74a4b1e9.js";import"./index-b67453a2.js";import"./compact-item-43eba85b.js";import"./TextArea-f4011b25.js";import"./useVariants-3e3137fc.js";import"./SearchOutlined-0dad7535.js";import"./button-6d884b97.js";import"./index-d8807b5c.js";const s=I(A)`
  width: 100%;
`,m=I(s)`
  ${R}
`;try{s.displayName="Input",s.__docgenInfo={description:"",displayName:"Input",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{m.displayName="RequiredInput",m.__docgenInfo={description:"",displayName:"RequiredInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const p=e=>{const{readOnly:u,required:o,value:t,onChange:a}=e,T=o&&!u?m:s,b=l.useRef(),[d,c]=l.useState();l.useEffect(()=>{c(x(t))},[t]);const F=i=>{a==null||a(i)};function E(i){b.current=i.target.value,c(i.target.value)}function S(){F(C(d))}return q.jsx(T,{value:d,disabled:u,placeholder:"00:00",onChange:E,onBlur:S})};try{p.displayName="FloatTimeInput",p.__docgenInfo={description:"",displayName:"FloatTimeInput",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"enum",value:[{value:'"en_US"'},{value:'"es_ES"'},{value:'"ca_ES"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: number) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}}}}}catch{}const ge={title:"Work in progress/Widgets/FloatTime/FloatTimeInput",component:p,argTypes:{...B,locale:{table:{disable:!0}}}},h=e=>{const[u,o]=l.useState(e.value);return l.useEffect(()=>{o(e.value)},[e.value]),q.jsx(p,{...e,value:u,onChange:t=>{var a;o(t),(a=e.onChange)==null||a.call(e,t)}})},r=h.bind({});r.args={required:!1,readOnly:!1};const n=h.bind({});n.args={required:!1,readOnly:!1,value:2.5};var f,v,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <FloatTimeInput {...args} value={value} onChange={(value: number) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var g,_,V;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <FloatTimeInput {...args} value={value} onChange={(value: number) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(V=(_=n.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};const _e=["Basic","WithValue"];export{r as Basic,n as WithValue,_e as __namedExportsOrder,ge as default};
