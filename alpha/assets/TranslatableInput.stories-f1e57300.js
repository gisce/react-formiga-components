import{j as S}from"./jsx-runtime-f6d73c06.js";import{r as l}from"./index-8ee6c85d.js";import{T as i}from"./TranslatableInput-0a3d7f6d.js";import{B as f}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./LocaleContext-58eb36ec.js";import"./theme-ac0bd082.js";import"./ButtonWithTooltip-164b0bc8.js";import"./index-68d6b468.js";import"./index-b03af66d.js";import"./assertThisInitialized-601f600e.js";import"./index-8eb238e3.js";import"./index-fb0b6330.js";import"./toArray-cadbd5cb.js";import"./isVisible-972dbae1.js";import"./motion-343f592f.js";import"./roundedArrow-9acedcf0.js";import"./reactNode-b58523ea.js";import"./Compact-929b86a9.js";import"./button-c94e87ef.js";import"./omit-afa65c0b.js";import"./index-e1b85e37.js";import"./asyncToGenerator-098b8a85.js";import"./compact-item-d6c7d423.js";import"./index-d4e64ab6.js";import"./context-ccc1de45.js";import"./index-06d3f492.js";import"./useVariants-f34488a3.js";import"./useCSSVarCls-b1a1e215.js";import"./CloseCircleFilled-02876ee0.js";import"./SearchOutlined-21a685c2.js";import"./ModalBottomBar-5e23abeb.js";import"./row-645cbbc7.js";import"./index-3369e555.js";import"./CloseOutlined-16733440.js";import"./CheckOutlined-efeb2520.js";import"./index-930e7738.js";import"./CheckCircleFilled-475de80e.js";import"./ExclamationCircleFilled-bdc38af8.js";import"./PurePanel-270ef2ff.js";import"./pickAttrs-95892129.js";import"./index-420315d8.js";import"./index-e18906dc.js";const le={title:"Work in progress/Widgets/Translatable/TranslatableInput",component:i,argTypes:{...f,isPassword:{description:"The input is a password",table:{defaultValue:{summary:!1},category:"Char specific"}},locale:{table:{disable:!0}}}},v=e=>{const[s,r]=l.useState(e.value);return l.useEffect(()=>{r(e.value)},[e.value]),S.jsx(i,{...e,value:s,onChange:t=>{var a;r(t),(a=e.onChange)==null||a.call(e,t)}})},n=v.bind({});n.args={required:!1,readOnly:!1,showButton:!0,locale:"ca_ES"};const o=e=>{const[s,r]=l.useState("Initial translated text");return S.jsx(i,{name:"translatable_field",value:s,onChange:t=>{var a;r(t),(a=e.onChange)==null||a.call(e,t)},locale:"en_US",modalOpts:{model:"company",id:37},onGetLangs:async()=>[{code:"en_US",name:"English"},{code:"ca_ES",name:"Catalan"}],onGetValuesForLangs:async t=>({en_US:"Translated text",ca_ES:"Text traduït"}),onSucceed:()=>{},onError:t=>{alert(JSON.stringify(t))},onUpdateValues:async t=>{}})};var p,m,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(g=(d=o.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const ie=["WithButton","Default"];export{o as Default,n as WithButton,ie as __namedExportsOrder,le as default};
