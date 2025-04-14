import{j as B}from"./jsx-runtime-f6d73c06.js";import{r as m}from"./index-8ee6c85d.js";import{U as w}from"./UrlInput-b9f747c9.js";import{B as j}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./isIP-d795ad97.js";import"./styled-components.browser.esm-8d5db3cb.js";import"./index-7e3d7086.js";import"./index-f2765735.js";import"./assertThisInitialized-68330e5d.js";import"./extends-4c19d496.js";import"./index-8eb238e3.js";import"./Field-c130abcd.js";import"./Label-a0758a30.js";import"./QuestionCircleOutlined-040d7c9d.js";import"./AntdIcon-f4df470f.js";import"./index-b9328d6e.js";import"./index-7fae86d9.js";import"./toArray-66e39049.js";import"./isVisible-2ef80b15.js";import"./motion-343f592f.js";import"./roundedArrow-c768ecf1.js";import"./reactNode-c432c2b0.js";import"./Compact-1edd4e66.js";import"./LocaleContext-1c35ce14.js";import"./context-29a3839d.js";import"./asyncToGenerator-aa14e566.js";import"./omit-f8286760.js";import"./collapse-97de76d4.js";import"./row-1c3eec31.js";import"./useLocale-8ec28e87.js";import"./CheckCircleFilled-f858369c.js";import"./CloseCircleFilled-53e5d3ad.js";import"./ExclamationCircleFilled-95aa70b7.js";import"./LoadingOutlined-8eb7bab6.js";import"./index-ba0b8bee.js";import"./index-7fe11ddc.js";import"./compact-item-43eba85b.js";import"./TextArea-0261af0a.js";import"./useVariants-2f2c5e71.js";import"./EyeOutlined-a0dd78d5.js";import"./SearchOutlined-061923d8.js";import"./button-2909d44f.js";import"./index-eab29bb3.js";import"./EditOutlined-317b89bc.js";import"./CheckOutlined-c598d246.js";const Ie={title:"Work in progress/Widgets/Link/UrlInput",component:w,argTypes:{...j,locale:{table:{disable:!0}}}},a=e=>{const[x,l]=m.useState(e.value);return m.useEffect(()=>{l(e.value)},[e.value]),B.jsx(w,{...e,value:x,onChange:i=>{var p;l(i),(p=e.onChange)==null||p.call(e,i)}})},r=a.bind({});r.args={required:!1,readOnly:!1};const s=a.bind({});s.args={required:!0,readOnly:!1};const t=a.bind({});t.args={required:!1,readOnly:!0,value:"https://www.gisce.dev"};const n=a.bind({});n.args={required:!1,readOnly:!1,value:"https://www.gisce.dev"};const u=a.bind({});u.args={required:!1,readOnly:!1,value:"random"};const o=a.bind({});o.args={required:!1,readOnly:!0,value:"random"};var g,c,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
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
}`,...(R=(q=o.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};const be=["Basic","Required","ReadOnly","WithValue","WithWrongValue","WithWrongValueAndReadOnly"];export{r as Basic,t as ReadOnly,s as Required,n as WithValue,u as WithWrongValue,o as WithWrongValueAndReadOnly,be as __namedExportsOrder,Ie as default};
