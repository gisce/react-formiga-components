import{j as S}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{T as p}from"./TranslatableInput-cb13bee4.js";import{B as f}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./LocaleContext-7544963d.js";import"./theme-ac0bd082.js";import"./ButtonWithTooltip-d27c6359.js";import"./index-e099d46d.js";import"./index-86654eeb.js";import"./assertThisInitialized-11245cea.js";import"./genStyleUtils-4c750380.js";import"./index-44aff1ee.js";import"./index-da03a860.js";import"./index-c37db011.js";import"./context-6c51d9c0.js";import"./wrapNativeSuper-e3a961e5.js";import"./roundedArrow-41889a6b.js";import"./Compact-ed5db0a3.js";import"./useSize-df4503b4.js";import"./motion-51d3501a.js";import"./reactNode-9d24d027.js";import"./button-139d7539.js";import"./index-dc4a3e04.js";import"./compact-item-155773d1.js";import"./LoadingOutlined-722c611a.js";import"./AntdIcon-ea1fce5f.js";import"./TextArea-4e9509a8.js";import"./CloseCircleFilled-fdd1b8d7.js";import"./CloseCircleFilled-257b815e.js";import"./useVariants-7a1f75bf.js";import"./useCSSVarCls-ca025b2e.js";import"./index-f2bdf006.js";import"./row-6d32b871.js";import"./index-b3b86c08.js";import"./TranslationOutlined-f18a9657.js";import"./CloseOutlined-9385a5da.js";import"./AntdIcon-16889e64.js";import"./LoadingOutlined-50148ceb.js";import"./CheckOutlined-50c2f25f.js";import"./CheckOutlined-c7cbec95.js";import"./index-96cc02b4.js";import"./CheckCircleFilled-dcde5778.js";import"./CheckCircleFilled-1392c7ce.js";import"./ExclamationCircleFilled-010d4309.js";import"./ExclamationCircleFilled-eba6e68e.js";import"./InfoCircleFilled-1ac45539.js";import"./InfoCircleFilled-baaa675e.js";import"./CloseOutlined-d92f8b7e.js";import"./KeyCode-6413d982.js";import"./SearchOutlined-d33d127e.js";import"./SearchOutlined-11b57711.js";import"./useLocale-3c71a553.js";import"./PurePanel-8bd72482.js";import"./index-61377301.js";import"./index-7676c0df.js";import"./index-8ba7b037.js";import"./EyeInvisibleOutlined-4021859d.js";const Tt={title:"Work in progress/Widgets/Translatable/TranslatableInput",component:p,argTypes:{...f,isPassword:{description:"The input is a password",table:{defaultValue:{summary:!1},category:"Char specific"}},locale:{table:{disable:!0}}}},v=t=>{const[s,n]=i.useState(t.value);return i.useEffect(()=>{n(t.value)},[t.value]),S.jsx(p,{...t,value:s,onChange:e=>{var a;n(e),(a=t.onChange)==null||a.call(t,e)}})},r=v.bind({});r.args={required:!1,readOnly:!1,showButton:!0,locale:"ca_ES"};const o=t=>{const[s,n]=i.useState("Initial translated text");return S.jsx(p,{name:"translatable_field",value:s,onChange:e=>{var a;n(e),(a=t.onChange)==null||a.call(t,e)},locale:"en_US",modalOpts:{model:"company",id:37},onGetLangs:async()=>[{code:"en_US",name:"English"},{code:"ca_ES",name:"Catalan"}],onGetValuesForLangs:async e=>({en_US:"Translated text",ca_ES:"Text traduït"}),onSucceed:()=>{},onError:e=>{alert(JSON.stringify(e))},onUpdateValues:async e=>{}})};var l,m,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(g=(d=o.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const xt=["WithButton","Default"];export{o as Default,r as WithButton,xt as __namedExportsOrder,Tt as default};
