import{j as B}from"./jsx-runtime-f6d73c06.js";import{r as m}from"./index-8ee6c85d.js";import{U as w}from"./UrlInput-5ff1948c.js";import{B as j}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./isIP-7a611c0e.js";import"./styled-components.browser.esm-f71162e2.js";import"./index-f36c3419.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./Field-0e3b0538.js";import"./Label-517a773f.js";import"./index-d8bbe3ff.js";import"./toArray-d3285e7a.js";import"./isVisible-28761958.js";import"./index-f3897118.js";import"./motion-343f592f.js";import"./roundedArrow-eeec1c6c.js";import"./reactNode-c432c2b0.js";import"./Compact-f42963ce.js";import"./LocaleContext-e44580cc.js";import"./context-1cb86123.js";import"./asyncToGenerator-70b03fb5.js";import"./omit-c2a66ff4.js";import"./collapse-97de76d4.js";import"./row-a9151da8.js";import"./useLocale-cc382a13.js";import"./CheckCircleFilled-a3a9ebd2.js";import"./CloseCircleFilled-8383c3aa.js";import"./ExclamationCircleFilled-72a8eb89.js";import"./compact-item-c03ebbb7.js";import"./index-7f6f4650.js";import"./index-8a2d9a84.js";import"./useVariants-98bbef89.js";import"./SearchOutlined-84e5fa13.js";import"./button-5dad7698.js";import"./index-2c809c7b.js";import"./EditOutlined-73a4ba58.js";import"./CheckOutlined-9e94d9a6.js";const Ce={title:"Work in progress/Widgets/Link/UrlInput",component:w,argTypes:{...j,locale:{table:{disable:!0}}}},a=e=>{const[x,l]=m.useState(e.value);return m.useEffect(()=>{l(e.value)},[e.value]),B.jsx(w,{...e,value:x,onChange:i=>{var p;l(i),(p=e.onChange)==null||p.call(e,i)}})},r=a.bind({});r.args={required:!1,readOnly:!1};const s=a.bind({});s.args={required:!0,readOnly:!1};const t=a.bind({});t.args={required:!1,readOnly:!0,value:"https://www.gisce.dev"};const n=a.bind({});n.args={required:!1,readOnly:!1,value:"https://www.gisce.dev"};const u=a.bind({});u.args={required:!1,readOnly:!1,value:"random"};const o=a.bind({});o.args={required:!1,readOnly:!0,value:"random"};var g,c,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
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
}`,...(R=(q=o.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};const Se=["Basic","Required","ReadOnly","WithValue","WithWrongValue","WithWrongValueAndReadOnly"];export{r as Basic,t as ReadOnly,s as Required,n as WithValue,u as WithWrongValue,o as WithWrongValueAndReadOnly,Se as __namedExportsOrder,Ce as default};
