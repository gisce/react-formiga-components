import{j as A}from"./jsx-runtime-ffb262ed.js";import{r as p}from"./index-76fb7be0.js";import{E as B}from"./EmailInput-4c41f167.js";import{B as T}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./isIP-fad012f7.js";import"./styled-components.browser.esm-837c5936.js";import"./index-86654eeb.js";import"./genStyleUtils-4eaa55a5.js";import"./assertThisInitialized-11245cea.js";import"./Field-2cd6e552.js";import"./Label-5306f0c8.js";import"./QuestionCircleOutlined-35a42c77.js";import"./AntdIcon-16889e64.js";import"./index-1db4924e.js";import"./index-c0ac072d.js";import"./index-da03a860.js";import"./index-95593828.js";import"./context-13a51095.js";import"./wrapNativeSuper-e3a961e5.js";import"./roundedArrow-b7d508f7.js";import"./Compact-f37358d5.js";import"./motion-892812ba.js";import"./reactNode-9d24d027.js";import"./LocaleContext-7544963d.js";import"./useCSSVarCls-aaef417d.js";import"./collapse-97de76d4.js";import"./row-0e75f3e7.js";import"./AntdIcon-24fbe913.js";import"./useLocale-5eb46448.js";import"./CheckCircleFilled-6dfa65f4.js";import"./CheckCircleFilled-1392c7ce.js";import"./CloseCircleFilled-2df2155f.js";import"./CloseCircleFilled-257b815e.js";import"./ExclamationCircleFilled-04a5fe30.js";import"./ExclamationCircleFilled-eba6e68e.js";import"./compact-item-2b086764.js";import"./LoadingOutlined-722c611a.js";import"./index-0a5b12e1.js";import"./index-bde92207.js";import"./TextArea-e8e3a399.js";import"./useVariants-af39c24c.js";import"./SearchOutlined-26e8fa80.js";import"./SearchOutlined-11b57711.js";import"./EyeInvisibleOutlined-4021859d.js";import"./button-49751c25.js";import"./index-7367e026.js";import"./EditOutlined-da0c6f00.js";import"./EditOutlined-401a1613.js";import"./CheckOutlined-50c2f25f.js";import"./CheckOutlined-c7cbec95.js";const je={title:"Work in progress/Widgets/Link/EmailInput",component:B,argTypes:{...T,locale:{table:{disable:!0}}}},a=e=>{const[j,l]=p.useState(e.value);return p.useEffect(()=>{l(e.value)},[e.value]),A.jsx(B,{...e,value:j,onChange:i=>{var m;l(i),(m=e.onChange)==null||m.call(e,i)}})},r=a.bind({});r.args={required:!1,readOnly:!1};const t=a.bind({});t.args={required:!0,readOnly:!1};const s=a.bind({});s.args={required:!1,readOnly:!0,value:"satoshi@ondori.dev"};const n=a.bind({});n.args={required:!1,readOnly:!1,value:"satoshi@ondori.dev"};const o=a.bind({});o.args={required:!1,readOnly:!1,value:"random"};const u=a.bind({});u.args={required:!1,readOnly:!0,value:"random"};var g,c,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
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
}`,...(x=(R=u.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};const Ae=["Basic","Required","ReadOnly","WithValue","WithWrongValue","WithWrongValueAndReadOnly"];export{r as Basic,s as ReadOnly,t as Required,n as WithValue,o as WithWrongValue,u as WithWrongValueAndReadOnly,Ae as __namedExportsOrder,je as default};
