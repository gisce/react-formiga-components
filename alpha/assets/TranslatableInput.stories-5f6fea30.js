import{j as S}from"./jsx-runtime-f6d73c06.js";import{r as l}from"./index-8ee6c85d.js";import{T as i}from"./TranslatableInput-0a281323.js";import{B as f}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./LocaleContext-948e5f1f.js";import"./theme-ac0bd082.js";import"./ButtonWithTooltip-d9f6ae03.js";import"./index-7d371500.js";import"./index-4cbabd78.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./index-8d7211d9.js";import"./toArray-fde42edc.js";import"./isVisible-21091144.js";import"./motion-343f592f.js";import"./roundedArrow-1c6c6973.js";import"./reactNode-c432c2b0.js";import"./Compact-5059a700.js";import"./button-459101f3.js";import"./omit-699eb5ab.js";import"./index-71ed9248.js";import"./asyncToGenerator-0e679def.js";import"./compact-item-5948db7d.js";import"./index-5a0ad9a9.js";import"./context-4b385781.js";import"./index-ab145b10.js";import"./useVariants-a5c7fa8d.js";import"./CloseCircleFilled-f91b490c.js";import"./SearchOutlined-4644c241.js";import"./row-0fcba45e.js";import"./index-69ef4711.js";import"./CloseOutlined-af1a420e.js";import"./CheckOutlined-49492fbe.js";import"./index-f50e3e48.js";import"./CheckCircleFilled-69f018f7.js";import"./ExclamationCircleFilled-7836cda2.js";import"./InfoCircleFilled-b082ae24.js";import"./PurePanel-fe490c6d.js";import"./useLocale-4d1812fe.js";import"./index-5ffe6588.js";import"./index-948b151c.js";const se={title:"Work in progress/Widgets/Translatable/TranslatableInput",component:i,argTypes:{...f,isPassword:{description:"The input is a password",table:{defaultValue:{summary:!1},category:"Char specific"}},locale:{table:{disable:!0}}}},v=e=>{const[s,r]=l.useState(e.value);return l.useEffect(()=>{r(e.value)},[e.value]),S.jsx(i,{...e,value:s,onChange:t=>{var a;r(t),(a=e.onChange)==null||a.call(e,t)}})},n=v.bind({});n.args={required:!1,readOnly:!1,showButton:!0,locale:"ca_ES"};const o=e=>{const[s,r]=l.useState("Initial translated text");return S.jsx(i,{name:"translatable_field",value:s,onChange:t=>{var a;r(t),(a=e.onChange)==null||a.call(e,t)},locale:"en_US",modalOpts:{model:"company",id:37},onGetLangs:async()=>[{code:"en_US",name:"English"},{code:"ca_ES",name:"Catalan"}],onGetValuesForLangs:async t=>({en_US:"Translated text",ca_ES:"Text traduït"}),onSucceed:()=>{},onError:t=>{alert(JSON.stringify(t))},onUpdateValues:async t=>{}})};var p,m,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <TranslatableInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var c,d,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [value, setValue] = useState("Initial translated text");
  return <TranslatableInput name={"translatable_field"} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} locale="en_US" modalOpts={{
    model: "company",
    id: 37
  }} onGetLangs={async () => {
    return [{
      code: "en_US",
      name: "English"
    }, {
      code: "ca_ES",
      name: "Catalan"
    }];
  }} onGetValuesForLangs={async opts => {
    const {
      model,
      id,
      name,
      langs
    } = opts;
    return {
      en_US: "Translated text",
      ca_ES: "Text traduït"
    };
  }} onSucceed={() => {}} onError={error => {
    alert(JSON.stringify(error));
  }} onUpdateValues={async opts => {}} />;
}`,...(g=(d=o.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const le=["WithButton","Default"];export{o as Default,n as WithButton,le as __namedExportsOrder,se as default};
