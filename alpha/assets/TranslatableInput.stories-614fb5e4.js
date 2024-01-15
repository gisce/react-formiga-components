import{j as S}from"./jsx-runtime-f6d73c06.js";import{r as l}from"./index-8ee6c85d.js";import{T as i}from"./TranslatableInput-7376753b.js";import{B as f}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./LocaleContext-58eb36ec.js";import"./theme-ac0bd082.js";import"./ButtonWithTooltip-6f1b0480.js";import"./index-fbe8605a.js";import"./index-7b090294.js";import"./assertThisInitialized-f89cd6ac.js";import"./index-8eb238e3.js";import"./index-d760291f.js";import"./toArray-f9441672.js";import"./isVisible-f24c26d5.js";import"./motion-343f592f.js";import"./roundedArrow-d4d9ea1f.js";import"./reactNode-c432c2b0.js";import"./Compact-d63c1d22.js";import"./button-da513854.js";import"./omit-c5f18c7c.js";import"./index-5c8aaf67.js";import"./asyncToGenerator-ae37becc.js";import"./compact-item-99530beb.js";import"./index-fe8159f5.js";import"./context-4f71b533.js";import"./index-e5acbb5f.js";import"./useVariants-78dc91e2.js";import"./useCSSVarCls-313dcfc7.js";import"./CloseCircleFilled-8482a999.js";import"./SearchOutlined-f9428929.js";import"./ModalBottomBar-9a56d019.js";import"./row-31b109c6.js";import"./index-c4e31686.js";import"./CloseOutlined-0c9b81b5.js";import"./CheckOutlined-33d49c68.js";import"./index-cb0a08a9.js";import"./CheckCircleFilled-a5402013.js";import"./ExclamationCircleFilled-47ac793a.js";import"./InfoCircleFilled-a570e26c.js";import"./PurePanel-673b028b.js";import"./pickAttrs-217b3c15.js";import"./useLocale-3708b049.js";import"./index-da324853.js";import"./index-81b09b0c.js";const pe={title:"Work in progress/Widgets/Translatable/TranslatableInput",component:i,argTypes:{...f,isPassword:{description:"The input is a password",table:{defaultValue:{summary:!1},category:"Char specific"}},locale:{table:{disable:!0}}}},v=e=>{const[s,r]=l.useState(e.value);return l.useEffect(()=>{r(e.value)},[e.value]),S.jsx(i,{...e,value:s,onChange:t=>{var a;r(t),(a=e.onChange)==null||a.call(e,t)}})},n=v.bind({});n.args={required:!1,readOnly:!1,showButton:!0,locale:"ca_ES"};const o=e=>{const[s,r]=l.useState("Initial translated text");return S.jsx(i,{name:"translatable_field",value:s,onChange:t=>{var a;r(t),(a=e.onChange)==null||a.call(e,t)},locale:"en_US",modalOpts:{model:"company",id:37},onGetLangs:async()=>[{code:"en_US",name:"English"},{code:"ca_ES",name:"Catalan"}],onGetValuesForLangs:async t=>({en_US:"Translated text",ca_ES:"Text traduït"}),onSucceed:()=>{},onError:t=>{alert(JSON.stringify(t))},onUpdateValues:async t=>{}})};var p,m,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
