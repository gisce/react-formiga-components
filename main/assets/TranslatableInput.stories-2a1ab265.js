import{j as S}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{T as p}from"./TranslatableInput-fd34c30d.js";import{B as f}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./LocaleContext-6a38b50b.js";import"./theme-ac0bd082.js";import"./ButtonWithTooltip-62614510.js";import"./index-df709f45.js";import"./index-86654eeb.js";import"./assertThisInitialized-11245cea.js";import"./genStyleUtils-28a6e765.js";import"./index-6141dcc2.js";import"./index-356ca88b.js";import"./index-da03a860.js";import"./context-b387624d.js";import"./wrapNativeSuper-e3a961e5.js";import"./Compact-a3364df5.js";import"./useSize-06920fd3.js";import"./reactNode-9d24d027.js";import"./button-a7ab0380.js";import"./index-eacc853e.js";import"./compact-item-869a41a4.js";import"./LoadingOutlined-722c611a.js";import"./AntdIcon-eb4d8409.js";import"./TextArea-4f362629.js";import"./CloseCircleFilled-d4e8e9a6.js";import"./CloseCircleFilled-257b815e.js";import"./useVariants-6604f14b.js";import"./useCSSVarCls-56ee7f0e.js";import"./index-8c4dacd9.js";import"./row-8e2bb960.js";import"./index-a91dba4b.js";import"./TranslationOutlined-f18a9657.js";import"./CloseOutlined-9385a5da.js";import"./AntdIcon-16889e64.js";import"./LoadingOutlined-50148ceb.js";import"./CheckOutlined-50c2f25f.js";import"./CheckOutlined-c7cbec95.js";import"./index-857d5c02.js";import"./CheckCircleFilled-f46cad22.js";import"./CheckCircleFilled-1392c7ce.js";import"./ExclamationCircleFilled-b40e1c9f.js";import"./ExclamationCircleFilled-eba6e68e.js";import"./InfoCircleFilled-9abc254c.js";import"./InfoCircleFilled-baaa675e.js";import"./CloseOutlined-55cb7de5.js";import"./KeyCode-6413d982.js";import"./SearchOutlined-a215f538.js";import"./SearchOutlined-11b57711.js";import"./useLocale-8b2da478.js";import"./PurePanel-dc31f1e9.js";import"./index-096eb9fb.js";import"./index-5f48d75f.js";import"./index-45c0c470.js";import"./EyeInvisibleOutlined-4021859d.js";const yt={title:"Work in progress/Widgets/Translatable/TranslatableInput",component:p,argTypes:{...f,isPassword:{description:"The input is a password",table:{defaultValue:{summary:!1},category:"Char specific"}},locale:{table:{disable:!0}}}},v=t=>{const[s,n]=i.useState(t.value);return i.useEffect(()=>{n(t.value)},[t.value]),S.jsx(p,{...t,value:s,onChange:e=>{var a;n(e),(a=t.onChange)==null||a.call(t,e)}})},r=v.bind({});r.args={required:!1,readOnly:!1,showButton:!0,locale:"ca_ES"};const o=t=>{const[s,n]=i.useState("Initial translated text");return S.jsx(p,{name:"translatable_field",value:s,onChange:e=>{var a;n(e),(a=t.onChange)==null||a.call(t,e)},locale:"en_US",modalOpts:{model:"company",id:37},onGetLangs:async()=>[{code:"en_US",name:"English"},{code:"ca_ES",name:"Catalan"}],onGetValuesForLangs:async e=>({en_US:"Translated text",ca_ES:"Text traduït"}),onSucceed:()=>{},onError:e=>{alert(JSON.stringify(e))},onUpdateValues:async e=>{}})};var l,m,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return <TranslatableInput {...args} value={value} onChange={(value: string) => {
    setValue(value);
    args.onChange?.(value);
  }} />;
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var c,d,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
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
}`,...(g=(d=o.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const Et=["WithButton","Default"];export{o as Default,r as WithButton,Et as __namedExportsOrder,yt as default};
