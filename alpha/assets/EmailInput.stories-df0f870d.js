import{j as A}from"./jsx-runtime-f6d73c06.js";import{r as p}from"./index-8ee6c85d.js";import{E as B}from"./EmailInput-387ebdc9.js";import{B as T}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./isIP-c7c791e1.js";import"./styled-components.browser.esm-b0ed5b60.js";import"./index-b03af66d.js";import"./assertThisInitialized-601f600e.js";import"./index-8eb238e3.js";import"./Field-edb022fd.js";import"./Label-72a39789.js";import"./index-fb0b6330.js";import"./toArray-cadbd5cb.js";import"./isVisible-972dbae1.js";import"./index-68d6b468.js";import"./motion-343f592f.js";import"./roundedArrow-9acedcf0.js";import"./reactNode-b58523ea.js";import"./Compact-929b86a9.js";import"./LocaleContext-58eb36ec.js";import"./context-ccc1de45.js";import"./asyncToGenerator-098b8a85.js";import"./omit-afa65c0b.js";import"./collapse-97de76d4.js";import"./useCSSVarCls-b1a1e215.js";import"./row-645cbbc7.js";import"./useVariants-f34488a3.js";import"./CheckCircleFilled-475de80e.js";import"./CloseCircleFilled-02876ee0.js";import"./ExclamationCircleFilled-bdc38af8.js";import"./compact-item-d6c7d423.js";import"./index-d4e64ab6.js";import"./index-06d3f492.js";import"./SearchOutlined-21a685c2.js";import"./button-c94e87ef.js";import"./index-e1b85e37.js";import"./CheckOutlined-efeb2520.js";import"./EditOutlined-f44ee1e3.js";const Ee={title:"Work in progress/Widgets/Link/EmailInput",component:B,argTypes:{...T,locale:{table:{disable:!0}}}},a=e=>{const[j,l]=p.useState(e.value);return p.useEffect(()=>{l(e.value)},[e.value]),A.jsx(B,{...e,value:j,onChange:i=>{var m;l(i),(m=e.onChange)==null||m.call(e,i)}})},r=a.bind({});r.args={required:!1,readOnly:!1};const s=a.bind({});s.args={required:!0,readOnly:!1};const t=a.bind({});t.args={required:!1,readOnly:!0,value:"satoshi@ondori.dev"};const n=a.bind({});n.args={required:!1,readOnly:!1,value:"satoshi@ondori.dev"};const u=a.bind({});u.args={required:!1,readOnly:!1,value:"random"};const o=a.bind({});o.args={required:!1,readOnly:!0,value:"random"};var g,c,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
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
