import{j as q}from"./jsx-runtime-f6d73c06.js";import{r as l}from"./index-8ee6c85d.js";import{p as x,a as C}from"./FloatTime.helper-f755c1c2.js";import{s as I}from"./styled-components.browser.esm-f71162e2.js";import{R}from"./Field-a7cc5509.js";import{A}from"./index-7f6f4650.js";import{B}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./index-f36c3419.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./Label-07df3c1d.js";import"./index-d8bbe3ff.js";import"./toArray-d3285e7a.js";import"./isVisible-28761958.js";import"./index-f3897118.js";import"./motion-343f592f.js";import"./roundedArrow-eeec1c6c.js";import"./reactNode-c432c2b0.js";import"./Compact-f42963ce.js";import"./LocaleContext-e44580cc.js";import"./context-1cb86123.js";import"./asyncToGenerator-70b03fb5.js";import"./omit-c2a66ff4.js";import"./collapse-97de76d4.js";import"./row-a9151da8.js";import"./useLocale-cc382a13.js";import"./CheckCircleFilled-a3a9ebd2.js";import"./CloseCircleFilled-8383c3aa.js";import"./ExclamationCircleFilled-72a8eb89.js";import"./compact-item-c03ebbb7.js";import"./index-8a2d9a84.js";import"./useVariants-98bbef89.js";import"./SearchOutlined-84e5fa13.js";import"./button-5dad7698.js";import"./index-2c809c7b.js";const i=I(A)`
  width: 100%;
`,d=I(i)`
  ${R}
`;try{i.displayName="Input",i.__docgenInfo={description:"",displayName:"Input",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{d.displayName="RequiredInput",d.__docgenInfo={description:"",displayName:"RequiredInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const p=e=>{const{readOnly:u,required:o,value:t,onChange:a}=e,T=o&&!u?d:i,b=l.useRef(),[m,c]=l.useState();l.useEffect(()=>{c(x(t))},[t]);const F=s=>{a==null||a(s)};function E(s){b.current=s.target.value,c(s.target.value)}function S(){F(C(m))}return q.jsx(T,{value:m,disabled:u,placeholder:"00:00",onChange:E,onBlur:S})};try{p.displayName="FloatTimeInput",p.__docgenInfo={description:"",displayName:"FloatTimeInput",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"enum",value:[{value:'"en_US"'},{value:'"es_ES"'},{value:'"ca_ES"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: number) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}}}}}catch{}const ve={title:"Work in progress/Widgets/FloatTime/FloatTimeInput",component:p,argTypes:{...B,locale:{table:{disable:!0}}}},h=e=>{const[u,o]=l.useState(e.value);return l.useEffect(()=>{o(e.value)},[e.value]),q.jsx(p,{...e,value:u,onChange:t=>{var a;o(t),(a=e.onChange)==null||a.call(e,t)}})},r=h.bind({});r.args={required:!1,readOnly:!1};const n=h.bind({});n.args={required:!1,readOnly:!1,value:2.5};var f,v,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
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
}`,...(V=(_=n.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};const ye=["Basic","WithValue"];export{r as Basic,n as WithValue,ye as __namedExportsOrder,ve as default};