import{j as A}from"./jsx-runtime-ffb262ed.js";import{r as p}from"./index-76fb7be0.js";import{E as B}from"./EmailInput-8e979941.js";import{B as T}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./isIP-5bf8ed55.js";import"./styled-components.browser.esm-a41aca50.js";import"./index-86654eeb.js";import"./genStyleUtils-4c750380.js";import"./assertThisInitialized-11245cea.js";import"./Field-757014d2.js";import"./Label-0f0993ff.js";import"./QuestionCircleOutlined-35a42c77.js";import"./AntdIcon-16889e64.js";import"./index-e099d46d.js";import"./index-44aff1ee.js";import"./index-da03a860.js";import"./index-c37db011.js";import"./context-6c51d9c0.js";import"./wrapNativeSuper-e3a961e5.js";import"./roundedArrow-41889a6b.js";import"./Compact-ed5db0a3.js";import"./useSize-df4503b4.js";import"./motion-51d3501a.js";import"./reactNode-9d24d027.js";import"./LocaleContext-7544963d.js";import"./useCSSVarCls-ca025b2e.js";import"./collapse-97de76d4.js";import"./row-6d32b871.js";import"./AntdIcon-ea1fce5f.js";import"./useLocale-3c71a553.js";import"./CheckCircleFilled-dcde5778.js";import"./CheckCircleFilled-1392c7ce.js";import"./CloseCircleFilled-fdd1b8d7.js";import"./CloseCircleFilled-257b815e.js";import"./ExclamationCircleFilled-010d4309.js";import"./ExclamationCircleFilled-eba6e68e.js";import"./compact-item-155773d1.js";import"./LoadingOutlined-722c611a.js";import"./index-8ba7b037.js";import"./index-f2bdf006.js";import"./TextArea-4e9509a8.js";import"./useVariants-7a1f75bf.js";import"./SearchOutlined-d33d127e.js";import"./SearchOutlined-11b57711.js";import"./EyeInvisibleOutlined-4021859d.js";import"./button-139d7539.js";import"./index-dc4a3e04.js";import"./EditOutlined-da0c6f00.js";import"./EditOutlined-401a1613.js";import"./CheckOutlined-50c2f25f.js";import"./CheckOutlined-c7cbec95.js";const Ae={title:"Work in progress/Widgets/Link/EmailInput",component:B,argTypes:{...T,locale:{table:{disable:!0}}}},a=e=>{const[j,l]=p.useState(e.value);return p.useEffect(()=>{l(e.value)},[e.value]),A.jsx(B,{...e,value:j,onChange:i=>{var m;l(i),(m=e.onChange)==null||m.call(e,i)}})},r=a.bind({});r.args={required:!1,readOnly:!1};const t=a.bind({});t.args={required:!0,readOnly:!1};const s=a.bind({});s.args={required:!1,readOnly:!0,value:"satoshi@ondori.dev"};const n=a.bind({});n.args={required:!1,readOnly:!1,value:"satoshi@ondori.dev"};const o=a.bind({});o.args={required:!1,readOnly:!1,value:"random"};const u=a.bind({});u.args={required:!1,readOnly:!0,value:"random"};var g,c,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <EmailInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(v=(c=r.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var d,f,V;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <EmailInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(V=(f=t.parameters)==null?void 0:f.docs)==null?void 0:V.source}}};var h,E,C;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <EmailInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(C=(E=s.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var S,y,W;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <EmailInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(W=(y=n.parameters)==null?void 0:y.docs)==null?void 0:W.source}}};var O,I,b;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <EmailInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(b=(I=o.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var q,R,x;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <EmailInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(x=(R=u.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};const Te=["Basic","Required","ReadOnly","WithValue","WithWrongValue","WithWrongValueAndReadOnly"];export{r as Basic,s as ReadOnly,t as Required,n as WithValue,o as WithWrongValue,u as WithWrongValueAndReadOnly,Te as __namedExportsOrder,Ae as default};
