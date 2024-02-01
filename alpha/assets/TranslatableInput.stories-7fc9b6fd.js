import{j as S}from"./jsx-runtime-f6d73c06.js";import{r as l}from"./index-8ee6c85d.js";import{T as i}from"./TranslatableInput-199cc72b.js";import{B as f}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./LocaleContext-5ea78dca.js";import"./theme-ac0bd082.js";import"./ButtonWithTooltip-520fa07d.js";import"./index-fa6ed0a5.js";import"./index-d66c9264.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./index-99f8f215.js";import"./toArray-7c8d8abc.js";import"./isVisible-ba0f3bfc.js";import"./motion-343f592f.js";import"./roundedArrow-77f12b90.js";import"./reactNode-c432c2b0.js";import"./Compact-42703e7c.js";import"./button-26c76043.js";import"./omit-8a9b0517.js";import"./index-62e8e9d6.js";import"./asyncToGenerator-668af2b4.js";import"./compact-item-d72b0080.js";import"./index-a71e9642.js";import"./context-39b5ed41.js";import"./index-56618587.js";import"./useVariants-83590930.js";import"./CloseCircleFilled-abb829f0.js";import"./SearchOutlined-271c449e.js";import"./row-14c4df27.js";import"./index-db9ecc54.js";import"./CloseOutlined-4f476cb1.js";import"./CheckOutlined-a3c23fa5.js";import"./index-620bd655.js";import"./CheckCircleFilled-7f76e67f.js";import"./ExclamationCircleFilled-58384750.js";import"./InfoCircleFilled-2d19b084.js";import"./PurePanel-6fb313a7.js";import"./useLocale-33ca30a9.js";import"./index-d2de7fbe.js";import"./index-dedc9109.js";const se={title:"Work in progress/Widgets/Translatable/TranslatableInput",component:i,argTypes:{...f,isPassword:{description:"The input is a password",table:{defaultValue:{summary:!1},category:"Char specific"}},locale:{table:{disable:!0}}}},v=e=>{const[s,r]=l.useState(e.value);return l.useEffect(()=>{r(e.value)},[e.value]),S.jsx(i,{...e,value:s,onChange:t=>{var a;r(t),(a=e.onChange)==null||a.call(e,t)}})},n=v.bind({});n.args={required:!1,readOnly:!1,showButton:!0,locale:"ca_ES"};const o=e=>{const[s,r]=l.useState("Initial translated text");return S.jsx(i,{name:"translatable_field",value:s,onChange:t=>{var a;r(t),(a=e.onChange)==null||a.call(e,t)},locale:"en_US",modalOpts:{model:"company",id:37},onGetLangs:async()=>[{code:"en_US",name:"English"},{code:"ca_ES",name:"Catalan"}],onGetValuesForLangs:async t=>({en_US:"Translated text",ca_ES:"Text traduït"}),onSucceed:()=>{},onError:t=>{alert(JSON.stringify(t))},onUpdateValues:async t=>{}})};var p,m,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
