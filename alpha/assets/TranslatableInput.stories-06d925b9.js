import{j as S}from"./jsx-runtime-f6d73c06.js";import{r as l}from"./index-8ee6c85d.js";import{T as i}from"./TranslatableInput-0a4d2e95.js";import{B as f}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./LocaleContext-02870291.js";import"./theme-ac0bd082.js";import"./ButtonWithTooltip-4239f9c8.js";import"./index-71762a4a.js";import"./index-916df0c6.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./index-9c320998.js";import"./toArray-08f3fa85.js";import"./isVisible-c2160674.js";import"./motion-343f592f.js";import"./roundedArrow-35bcc62e.js";import"./reactNode-c432c2b0.js";import"./Compact-11981144.js";import"./button-6d884b97.js";import"./omit-db8b152c.js";import"./index-d8807b5c.js";import"./asyncToGenerator-5190802c.js";import"./LoadingOutlined-74a4b1e9.js";import"./compact-item-43eba85b.js";import"./TextArea-f4011b25.js";import"./CloseCircleFilled-33e5256a.js";import"./useVariants-3e3137fc.js";import"./context-4be339a9.js";import"./index-b67453a2.js";import"./row-35453298.js";import"./index-c95a45d0.js";import"./CloseOutlined-e9b63884.js";import"./CheckOutlined-42026b46.js";import"./index-af8800a2.js";import"./CheckCircleFilled-363e340b.js";import"./ExclamationCircleFilled-3599e5f5.js";import"./InfoCircleFilled-0b03cadd.js";import"./KeyCode-6413d982.js";import"./PurePanel-5fd7e678.js";import"./useLocale-7291e1d6.js";import"./index-fce1f0c7.js";import"./index-7cedb0b2.js";import"./index-a34c119a.js";import"./SearchOutlined-0dad7535.js";const pe={title:"Work in progress/Widgets/Translatable/TranslatableInput",component:i,argTypes:{...f,isPassword:{description:"The input is a password",table:{defaultValue:{summary:!1},category:"Char specific"}},locale:{table:{disable:!0}}}},v=e=>{const[s,r]=l.useState(e.value);return l.useEffect(()=>{r(e.value)},[e.value]),S.jsx(i,{...e,value:s,onChange:t=>{var a;r(t),(a=e.onChange)==null||a.call(e,t)}})},n=v.bind({});n.args={required:!1,readOnly:!1,showButton:!0,locale:"ca_ES"};const o=e=>{const[s,r]=l.useState("Initial translated text");return S.jsx(i,{name:"translatable_field",value:s,onChange:t=>{var a;r(t),(a=e.onChange)==null||a.call(e,t)},locale:"en_US",modalOpts:{model:"company",id:37},onGetLangs:async()=>[{code:"en_US",name:"English"},{code:"ca_ES",name:"Catalan"}],onGetValuesForLangs:async t=>({en_US:"Translated text",ca_ES:"Text traduït"}),onSucceed:()=>{},onError:t=>{alert(JSON.stringify(t))},onUpdateValues:async t=>{}})};var p,m,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(g=(d=o.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const me=["WithButton","Default"];export{o as Default,n as WithButton,me as __namedExportsOrder,pe as default};
