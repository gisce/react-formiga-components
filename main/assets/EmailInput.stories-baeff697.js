import{j as A}from"./jsx-runtime-f6d73c06.js";import{r as p}from"./index-8ee6c85d.js";import{E as B}from"./EmailInput-8bad501d.js";import{B as T}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./isIP-6df5f0c5.js";import"./styled-components.browser.esm-9d5760e0.js";import"./index-d66c9264.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./Field-b1918ba5.js";import"./Label-89c6965c.js";import"./index-99f8f215.js";import"./toArray-7c8d8abc.js";import"./isVisible-ba0f3bfc.js";import"./index-fa6ed0a5.js";import"./motion-343f592f.js";import"./roundedArrow-77f12b90.js";import"./reactNode-c432c2b0.js";import"./Compact-42703e7c.js";import"./LocaleContext-5ea78dca.js";import"./context-39b5ed41.js";import"./asyncToGenerator-668af2b4.js";import"./omit-8a9b0517.js";import"./collapse-97de76d4.js";import"./row-14c4df27.js";import"./useLocale-33ca30a9.js";import"./CheckCircleFilled-7f76e67f.js";import"./CloseCircleFilled-abb829f0.js";import"./ExclamationCircleFilled-58384750.js";import"./compact-item-d72b0080.js";import"./index-a71e9642.js";import"./index-56618587.js";import"./useVariants-83590930.js";import"./SearchOutlined-271c449e.js";import"./button-26c76043.js";import"./index-62e8e9d6.js";import"./CheckOutlined-a3c23fa5.js";const he={title:"Work in progress/Widgets/Link/EmailInput",component:B,argTypes:{...T,locale:{table:{disable:!0}}}},a=e=>{const[j,l]=p.useState(e.value);return p.useEffect(()=>{l(e.value)},[e.value]),A.jsx(B,{...e,value:j,onChange:i=>{var m;l(i),(m=e.onChange)==null||m.call(e,i)}})},r=a.bind({});r.args={required:!1,readOnly:!1};const s=a.bind({});s.args={required:!0,readOnly:!1};const t=a.bind({});t.args={required:!1,readOnly:!0,value:"satoshi@ondori.dev"};const n=a.bind({});n.args={required:!1,readOnly:!1,value:"satoshi@ondori.dev"};const u=a.bind({});u.args={required:!1,readOnly:!1,value:"random"};const o=a.bind({});o.args={required:!1,readOnly:!0,value:"random"};var g,c,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
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
}`,...(x=(R=o.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};const Ee=["Basic","Required","ReadOnly","WithValue","WithWrongValue","WithWrongValueAndReadOnly"];export{r as Basic,t as ReadOnly,s as Required,n as WithValue,u as WithWrongValue,o as WithWrongValueAndReadOnly,Ee as __namedExportsOrder,he as default};
