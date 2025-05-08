import{j as S}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{T as p}from"./TranslatableInput-5fd8e0e6.js";import{B as f}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./LocaleContext-7544963d.js";import"./theme-ac0bd082.js";import"./ButtonWithTooltip-258604a1.js";import"./index-6179d90a.js";import"./index-86654eeb.js";import"./assertThisInitialized-11245cea.js";import"./genStyleUtils-d6a45a29.js";import"./index-d7c29613.js";import"./index-da03a860.js";import"./index-ed1c3b01.js";import"./context-6d1b332f.js";import"./wrapNativeSuper-e3a961e5.js";import"./roundedArrow-d6561726.js";import"./Compact-cceb4eea.js";import"./useSize-4ffb0e60.js";import"./motion-bd90a81e.js";import"./reactNode-9d24d027.js";import"./button-a839f4af.js";import"./index-6fce385f.js";import"./compact-item-b07e9fb6.js";import"./LoadingOutlined-722c611a.js";import"./AntdIcon-2c3fcfd3.js";import"./TextArea-294b3566.js";import"./CloseCircleFilled-0d882928.js";import"./CloseCircleFilled-257b815e.js";import"./useVariants-911433c9.js";import"./useCSSVarCls-e631847e.js";import"./index-7d845360.js";import"./row-29336662.js";import"./index-6855c02b.js";import"./TranslationOutlined-f18a9657.js";import"./CloseOutlined-9385a5da.js";import"./AntdIcon-16889e64.js";import"./LoadingOutlined-50148ceb.js";import"./CheckOutlined-50c2f25f.js";import"./CheckOutlined-c7cbec95.js";import"./index-aa7d34db.js";import"./CheckCircleFilled-b250ff1c.js";import"./CheckCircleFilled-1392c7ce.js";import"./ExclamationCircleFilled-866a3ba1.js";import"./ExclamationCircleFilled-eba6e68e.js";import"./InfoCircleFilled-b3f1fed2.js";import"./InfoCircleFilled-baaa675e.js";import"./CloseOutlined-3cbc20fa.js";import"./KeyCode-6413d982.js";import"./SearchOutlined-dde1385d.js";import"./SearchOutlined-11b57711.js";import"./useLocale-c6a3bdb5.js";import"./PurePanel-4203f4df.js";import"./index-6694d78a.js";import"./index-251fb585.js";import"./index-19b540cb.js";import"./EyeInvisibleOutlined-4021859d.js";const Tt={title:"Work in progress/Widgets/Translatable/TranslatableInput",component:p,argTypes:{...f,isPassword:{description:"The input is a password",table:{defaultValue:{summary:!1},category:"Char specific"}},locale:{table:{disable:!0}}}},v=t=>{const[s,n]=i.useState(t.value);return i.useEffect(()=>{n(t.value)},[t.value]),S.jsx(p,{...t,value:s,onChange:e=>{var a;n(e),(a=t.onChange)==null||a.call(t,e)}})},r=v.bind({});r.args={required:!1,readOnly:!1,showButton:!0,locale:"ca_ES"};const o=t=>{const[s,n]=i.useState("Initial translated text");return S.jsx(p,{name:"translatable_field",value:s,onChange:e=>{var a;n(e),(a=t.onChange)==null||a.call(t,e)},locale:"en_US",modalOpts:{model:"company",id:37},onGetLangs:async()=>[{code:"en_US",name:"English"},{code:"ca_ES",name:"Catalan"}],onGetValuesForLangs:async e=>({en_US:"Translated text",ca_ES:"Text traduït"}),onSucceed:()=>{},onError:e=>{alert(JSON.stringify(e))},onUpdateValues:async e=>{}})};var l,m,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
