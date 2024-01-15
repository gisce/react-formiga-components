import{j as A}from"./jsx-runtime-f6d73c06.js";import{r as p}from"./index-8ee6c85d.js";import{E as B}from"./EmailInput-daeb1fac.js";import{B as T}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./isIP-87992bac.js";import"./styled-components.browser.esm-e721a1b2.js";import"./index-7b090294.js";import"./assertThisInitialized-f89cd6ac.js";import"./index-8eb238e3.js";import"./Field-86784413.js";import"./Label-d9373612.js";import"./index-d760291f.js";import"./toArray-f9441672.js";import"./isVisible-f24c26d5.js";import"./index-fbe8605a.js";import"./motion-343f592f.js";import"./roundedArrow-d4d9ea1f.js";import"./reactNode-c432c2b0.js";import"./Compact-d63c1d22.js";import"./LocaleContext-58eb36ec.js";import"./context-4f71b533.js";import"./asyncToGenerator-ae37becc.js";import"./omit-c5f18c7c.js";import"./collapse-97de76d4.js";import"./useCSSVarCls-313dcfc7.js";import"./row-31b109c6.js";import"./useLocale-3708b049.js";import"./CheckCircleFilled-a5402013.js";import"./CloseCircleFilled-8482a999.js";import"./ExclamationCircleFilled-47ac793a.js";import"./compact-item-99530beb.js";import"./index-fe8159f5.js";import"./index-e5acbb5f.js";import"./useVariants-78dc91e2.js";import"./SearchOutlined-f9428929.js";import"./button-da513854.js";import"./index-5c8aaf67.js";import"./CheckOutlined-33d49c68.js";import"./EditOutlined-91290e76.js";const Ce={title:"Work in progress/Widgets/Link/EmailInput",component:B,argTypes:{...T,locale:{table:{disable:!0}}}},a=e=>{const[j,l]=p.useState(e.value);return p.useEffect(()=>{l(e.value)},[e.value]),A.jsx(B,{...e,value:j,onChange:i=>{var m;l(i),(m=e.onChange)==null||m.call(e,i)}})},r=a.bind({});r.args={required:!1,readOnly:!1};const s=a.bind({});s.args={required:!0,readOnly:!1};const t=a.bind({});t.args={required:!1,readOnly:!0,value:"satoshi@ondori.dev"};const n=a.bind({});n.args={required:!1,readOnly:!1,value:"satoshi@ondori.dev"};const u=a.bind({});u.args={required:!1,readOnly:!1,value:"random"};const o=a.bind({});o.args={required:!1,readOnly:!0,value:"random"};var g,c,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <EmailInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(v=(c=r.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var d,f,V;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <EmailInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(V=(f=s.parameters)==null?void 0:f.docs)==null?void 0:V.source}}};var h,E,C;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <EmailInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(C=(E=t.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var S,y,W;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <EmailInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(W=(y=n.parameters)==null?void 0:y.docs)==null?void 0:W.source}}};var O,I,b;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <EmailInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(b=(I=u.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var q,R,x;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <EmailInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(x=(R=o.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};const Se=["Basic","Required","ReadOnly","WithValue","WithWrongValue","WithWrongValueAndReadOnly"];export{r as Basic,t as ReadOnly,s as Required,n as WithValue,u as WithWrongValue,o as WithWrongValueAndReadOnly,Se as __namedExportsOrder,Ce as default};
