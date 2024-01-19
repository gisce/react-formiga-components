import{j as S}from"./jsx-runtime-f6d73c06.js";import{r as l}from"./index-8ee6c85d.js";import{T as i}from"./TranslatableInput-92f68db2.js";import{B as f}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./LocaleContext-58eb36ec.js";import"./theme-ac0bd082.js";import"./ButtonWithTooltip-e3b7089d.js";import"./index-1416ecc3.js";import"./index-4e0f86e8.js";import"./assertThisInitialized-601f600e.js";import"./index-8eb238e3.js";import"./index-1e0e3486.js";import"./toArray-66fc3202.js";import"./isVisible-b65992d0.js";import"./motion-343f592f.js";import"./roundedArrow-562bcbc7.js";import"./reactNode-b58523ea.js";import"./Compact-f5d517ab.js";import"./button-32bdd4e0.js";import"./omit-c7331b12.js";import"./index-b1f5ed01.js";import"./asyncToGenerator-4dda2c7d.js";import"./compact-item-0cc18453.js";import"./index-a7dcd279.js";import"./context-0e2d5d5e.js";import"./index-42c1687a.js";import"./CloseCircleFilled-d9375026.js";import"./statusUtils-ea7713be.js";import"./useCSSVarCls-d323ff87.js";import"./SearchOutlined-820a599b.js";import"./ModalBottomBar-3ce90dc3.js";import"./row-d1e0dc1e.js";import"./index-8d36bdd2.js";import"./CloseOutlined-9f6bbc94.js";import"./CheckOutlined-3c6140f7.js";import"./index-5a2046e1.js";import"./CheckCircleFilled-864fc55d.js";import"./ExclamationCircleFilled-456d0c53.js";import"./PurePanel-e84627ff.js";import"./pickAttrs-36fe86de.js";import"./index-30a5eed1.js";import"./index-4d2ecf55.js";const le={title:"Work in progress/Widgets/Translatable/TranslatableInput",component:i,argTypes:{...f,isPassword:{description:"The input is a password",table:{defaultValue:{summary:!1},category:"Char specific"}},locale:{table:{disable:!0}}}},v=e=>{const[s,r]=l.useState(e.value);return l.useEffect(()=>{r(e.value)},[e.value]),S.jsx(i,{...e,value:s,onChange:t=>{var a;r(t),(a=e.onChange)==null||a.call(e,t)}})},n=v.bind({});n.args={required:!1,readOnly:!1,showButton:!0,locale:"ca_ES"};const o=e=>{const[s,r]=l.useState("Initial translated text");return S.jsx(i,{name:"translatable_field",value:s,onChange:t=>{var a;r(t),(a=e.onChange)==null||a.call(e,t)},locale:"en_US",modalOpts:{model:"company",id:37},onGetLangs:async()=>[{code:"en_US",name:"English"},{code:"ca_ES",name:"Catalan"}],onGetValuesForLangs:async t=>({en_US:"Translated text",ca_ES:"Text traduït"}),onSucceed:()=>{},onError:t=>{alert(JSON.stringify(t))},onUpdateValues:async t=>{}})};var p,m,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
