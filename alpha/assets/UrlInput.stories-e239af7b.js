import{j as B}from"./jsx-runtime-f6d73c06.js";import{r as m}from"./index-8ee6c85d.js";import{U as w}from"./UrlInput-1aaaf5cb.js";import{B as j}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./isIP-7097191f.js";import"./styled-components.browser.esm-e721a1b2.js";import"./index-7b090294.js";import"./assertThisInitialized-f89cd6ac.js";import"./index-8eb238e3.js";import"./Field-fb66e5ef.js";import"./Label-e0ed68ba.js";import"./index-5400b74c.js";import"./toArray-f9441672.js";import"./isVisible-f24c26d5.js";import"./index-45663ff8.js";import"./motion-343f592f.js";import"./roundedArrow-d4d9ea1f.js";import"./reactNode-c432c2b0.js";import"./Compact-7e23d0f8.js";import"./LocaleContext-e44580cc.js";import"./context-4f71b533.js";import"./asyncToGenerator-ae37becc.js";import"./omit-c5f18c7c.js";import"./collapse-97de76d4.js";import"./useCSSVarCls-313dcfc7.js";import"./row-0ae67c61.js";import"./useLocale-3708b049.js";import"./CheckCircleFilled-d8efb997.js";import"./CloseCircleFilled-4563a35c.js";import"./ExclamationCircleFilled-4441be00.js";import"./compact-item-82d41e68.js";import"./index-4107e8f6.js";import"./index-bb107a08.js";import"./useVariants-c4b9294e.js";import"./SearchOutlined-1fd672bc.js";import"./button-0d65e38a.js";import"./index-5c8aaf67.js";import"./EditOutlined-415fe9e0.js";import"./CheckOutlined-1950666f.js";const Se={title:"Work in progress/Widgets/Link/UrlInput",component:w,argTypes:{...j,locale:{table:{disable:!0}}}},a=e=>{const[x,l]=m.useState(e.value);return m.useEffect(()=>{l(e.value)},[e.value]),B.jsx(w,{...e,value:x,onChange:i=>{var p;l(i),(p=e.onChange)==null||p.call(e,i)}})},r=a.bind({});r.args={required:!1,readOnly:!1};const s=a.bind({});s.args={required:!0,readOnly:!1};const t=a.bind({});t.args={required:!1,readOnly:!0,value:"https://www.gisce.dev"};const n=a.bind({});n.args={required:!1,readOnly:!1,value:"https://www.gisce.dev"};const u=a.bind({});u.args={required:!1,readOnly:!1,value:"random"};const o=a.bind({});o.args={required:!1,readOnly:!0,value:"random"};var g,c,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <UrlInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(v=(c=r.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var d,f,V;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <UrlInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(V=(f=s.parameters)==null?void 0:f.docs)==null?void 0:V.source}}};var h,C,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <UrlInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(S=(C=t.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var y,W,O;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
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
}`,...(R=(q=o.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};const ye=["Basic","Required","ReadOnly","WithValue","WithWrongValue","WithWrongValueAndReadOnly"];export{r as Basic,t as ReadOnly,s as Required,n as WithValue,u as WithWrongValue,o as WithWrongValueAndReadOnly,ye as __namedExportsOrder,Se as default};
