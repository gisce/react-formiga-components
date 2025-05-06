import{j as B}from"./jsx-runtime-ffb262ed.js";import{r as m}from"./index-76fb7be0.js";import{U as w}from"./UrlInput-229af9cc.js";import{B as j}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./isIP-fad012f7.js";import"./styled-components.browser.esm-837c5936.js";import"./index-86654eeb.js";import"./genStyleUtils-4eaa55a5.js";import"./assertThisInitialized-11245cea.js";import"./Field-2cd6e552.js";import"./Label-5306f0c8.js";import"./QuestionCircleOutlined-35a42c77.js";import"./AntdIcon-16889e64.js";import"./index-1db4924e.js";import"./index-c0ac072d.js";import"./index-da03a860.js";import"./index-95593828.js";import"./context-13a51095.js";import"./wrapNativeSuper-e3a961e5.js";import"./roundedArrow-b7d508f7.js";import"./Compact-f37358d5.js";import"./motion-892812ba.js";import"./reactNode-9d24d027.js";import"./LocaleContext-7544963d.js";import"./useCSSVarCls-aaef417d.js";import"./collapse-97de76d4.js";import"./row-0e75f3e7.js";import"./AntdIcon-24fbe913.js";import"./useLocale-5eb46448.js";import"./CheckCircleFilled-6dfa65f4.js";import"./CheckCircleFilled-1392c7ce.js";import"./CloseCircleFilled-2df2155f.js";import"./CloseCircleFilled-257b815e.js";import"./ExclamationCircleFilled-04a5fe30.js";import"./ExclamationCircleFilled-eba6e68e.js";import"./compact-item-2b086764.js";import"./LoadingOutlined-722c611a.js";import"./index-0a5b12e1.js";import"./index-bde92207.js";import"./TextArea-e8e3a399.js";import"./useVariants-af39c24c.js";import"./SearchOutlined-26e8fa80.js";import"./SearchOutlined-11b57711.js";import"./EyeInvisibleOutlined-4021859d.js";import"./button-49751c25.js";import"./index-7367e026.js";import"./EditOutlined-da0c6f00.js";import"./EditOutlined-401a1613.js";import"./CheckOutlined-50c2f25f.js";import"./CheckOutlined-c7cbec95.js";const xe={title:"Work in progress/Widgets/Link/UrlInput",component:w,argTypes:{...j,locale:{table:{disable:!0}}}},r=e=>{const[x,l]=m.useState(e.value);return m.useEffect(()=>{l(e.value)},[e.value]),B.jsx(w,{...e,value:x,onChange:i=>{var p;l(i),(p=e.onChange)==null||p.call(e,i)}})},a=r.bind({});a.args={required:!1,readOnly:!1};const t=r.bind({});t.args={required:!0,readOnly:!1};const s=r.bind({});s.args={required:!1,readOnly:!0,value:"https://www.gisce.dev"};const n=r.bind({});n.args={required:!1,readOnly:!1,value:"https://www.gisce.dev"};const u=r.bind({});u.args={required:!1,readOnly:!1,value:"random"};const o=r.bind({});o.args={required:!1,readOnly:!0,value:"random"};var g,c,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <UrlInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(v=(c=a.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var d,f,V;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <UrlInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(V=(f=t.parameters)==null?void 0:f.docs)==null?void 0:V.source}}};var h,C,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <UrlInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var y,W,O;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <UrlInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(O=(W=n.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var E,U,I;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <UrlInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(I=(U=u.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var b,q,R;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <UrlInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(R=(q=o.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};const Be=["Basic","Required","ReadOnly","WithValue","WithWrongValue","WithWrongValueAndReadOnly"];export{a as Basic,s as ReadOnly,t as Required,n as WithValue,u as WithWrongValue,o as WithWrongValueAndReadOnly,Be as __namedExportsOrder,xe as default};
