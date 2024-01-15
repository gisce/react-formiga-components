import{j as A}from"./jsx-runtime-f6d73c06.js";import{r as p}from"./index-8ee6c85d.js";import{E as B}from"./EmailInput-e000297e.js";import{B as T}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./isIP-3e46c95c.js";import"./styled-components.browser.esm-53a58144.js";import"./index-4e0f86e8.js";import"./assertThisInitialized-601f600e.js";import"./index-8eb238e3.js";import"./Field-c705a0bb.js";import"./Label-5271abfa.js";import"./index-1e0e3486.js";import"./toArray-66fc3202.js";import"./isVisible-b65992d0.js";import"./index-1416ecc3.js";import"./motion-343f592f.js";import"./roundedArrow-562bcbc7.js";import"./reactNode-b58523ea.js";import"./Compact-f5d517ab.js";import"./LocaleContext-58eb36ec.js";import"./context-0e2d5d5e.js";import"./asyncToGenerator-4dda2c7d.js";import"./omit-c7331b12.js";import"./collapse-97de76d4.js";import"./useCSSVarCls-d323ff87.js";import"./row-d1e0dc1e.js";import"./statusUtils-ea7713be.js";import"./CheckCircleFilled-864fc55d.js";import"./CloseCircleFilled-d9375026.js";import"./ExclamationCircleFilled-456d0c53.js";import"./compact-item-0cc18453.js";import"./index-a7dcd279.js";import"./index-42c1687a.js";import"./SearchOutlined-820a599b.js";import"./button-32bdd4e0.js";import"./index-b1f5ed01.js";import"./CheckOutlined-3c6140f7.js";import"./EditOutlined-710abf7e.js";const Ee={title:"Work in progress/Widgets/Link/EmailInput",component:B,argTypes:{...T,locale:{table:{disable:!0}}}},a=e=>{const[j,l]=p.useState(e.value);return p.useEffect(()=>{l(e.value)},[e.value]),A.jsx(B,{...e,value:j,onChange:i=>{var m;l(i),(m=e.onChange)==null||m.call(e,i)}})},r=a.bind({});r.args={required:!1,readOnly:!1};const s=a.bind({});s.args={required:!0,readOnly:!1};const t=a.bind({});t.args={required:!1,readOnly:!0,value:"satoshi@ondori.dev"};const n=a.bind({});n.args={required:!1,readOnly:!1,value:"satoshi@ondori.dev"};const u=a.bind({});u.args={required:!1,readOnly:!1,value:"random"};const o=a.bind({});o.args={required:!1,readOnly:!0,value:"random"};var g,c,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
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
}`,...(x=(R=o.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};const Ce=["Basic","Required","ReadOnly","WithValue","WithWrongValue","WithWrongValueAndReadOnly"];export{r as Basic,t as ReadOnly,s as Required,n as WithValue,u as WithWrongValue,o as WithWrongValueAndReadOnly,Ce as __namedExportsOrder,Ee as default};
