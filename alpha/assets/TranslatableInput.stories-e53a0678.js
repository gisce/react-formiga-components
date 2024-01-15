import{j as S}from"./jsx-runtime-f6d73c06.js";import{r as l}from"./index-8ee6c85d.js";import{T as i}from"./TranslatableInput-4d404dd8.js";import{B as f}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./LocaleContext-58eb36ec.js";import"./theme-ac0bd082.js";import"./ButtonWithTooltip-f255cb51.js";import"./index-ebc937d3.js";import"./index-d0686b25.js";import"./assertThisInitialized-601f600e.js";import"./index-8eb238e3.js";import"./index-c0c995ae.js";import"./toArray-702c099d.js";import"./isVisible-10508b7a.js";import"./motion-343f592f.js";import"./roundedArrow-12957d20.js";import"./reactNode-b58523ea.js";import"./Compact-190860f8.js";import"./button-2157679a.js";import"./omit-05916825.js";import"./index-077eff47.js";import"./asyncToGenerator-738c820e.js";import"./compact-item-4a97683c.js";import"./index-33abafc5.js";import"./context-b943a423.js";import"./index-a92188ed.js";import"./useVariants-fa326d5c.js";import"./useCSSVarCls-2e83a7af.js";import"./CloseCircleFilled-2f02bec5.js";import"./SearchOutlined-98c63492.js";import"./ModalBottomBar-ed45e66b.js";import"./row-556c4485.js";import"./index-3727660c.js";import"./CloseOutlined-bc95787e.js";import"./CheckOutlined-d31a79fc.js";import"./index-7ef71671.js";import"./CheckCircleFilled-8092a51e.js";import"./ExclamationCircleFilled-e0925294.js";import"./PurePanel-1447b435.js";import"./pickAttrs-d6bf1a4e.js";import"./useLocale-e5a33693.js";import"./index-d4fe2cfb.js";import"./index-2f9ff895.js";const ie={title:"Work in progress/Widgets/Translatable/TranslatableInput",component:i,argTypes:{...f,isPassword:{description:"The input is a password",table:{defaultValue:{summary:!1},category:"Char specific"}},locale:{table:{disable:!0}}}},v=e=>{const[s,r]=l.useState(e.value);return l.useEffect(()=>{r(e.value)},[e.value]),S.jsx(i,{...e,value:s,onChange:t=>{var a;r(t),(a=e.onChange)==null||a.call(e,t)}})},n=v.bind({});n.args={required:!1,readOnly:!1,showButton:!0,locale:"ca_ES"};const o=e=>{const[s,r]=l.useState("Initial translated text");return S.jsx(i,{name:"translatable_field",value:s,onChange:t=>{var a;r(t),(a=e.onChange)==null||a.call(e,t)},locale:"en_US",modalOpts:{model:"company",id:37},onGetLangs:async()=>[{code:"en_US",name:"English"},{code:"ca_ES",name:"Catalan"}],onGetValuesForLangs:async t=>({en_US:"Translated text",ca_ES:"Text traduït"}),onSucceed:()=>{},onError:t=>{alert(JSON.stringify(t))},onUpdateValues:async t=>{}})};var p,m,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(g=(d=o.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const pe=["WithButton","Default"];export{o as Default,n as WithButton,pe as __namedExportsOrder,ie as default};
