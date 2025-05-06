import{j as S}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{T as p}from"./TranslatableInput-cd2409b9.js";import{B as f}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./LocaleContext-7544963d.js";import"./theme-ac0bd082.js";import"./ButtonWithTooltip-9202dad7.js";import"./index-1db4924e.js";import"./index-86654eeb.js";import"./assertThisInitialized-11245cea.js";import"./genStyleUtils-4eaa55a5.js";import"./index-c0ac072d.js";import"./index-da03a860.js";import"./index-95593828.js";import"./context-13a51095.js";import"./wrapNativeSuper-e3a961e5.js";import"./roundedArrow-b7d508f7.js";import"./Compact-f37358d5.js";import"./motion-892812ba.js";import"./reactNode-9d24d027.js";import"./button-49751c25.js";import"./index-7367e026.js";import"./compact-item-2b086764.js";import"./LoadingOutlined-722c611a.js";import"./AntdIcon-24fbe913.js";import"./TextArea-e8e3a399.js";import"./CloseCircleFilled-2df2155f.js";import"./CloseCircleFilled-257b815e.js";import"./useVariants-af39c24c.js";import"./useCSSVarCls-aaef417d.js";import"./index-bde92207.js";import"./row-0e75f3e7.js";import"./index-489d3d00.js";import"./TranslationOutlined-f18a9657.js";import"./CloseOutlined-9385a5da.js";import"./AntdIcon-16889e64.js";import"./LoadingOutlined-50148ceb.js";import"./CheckOutlined-50c2f25f.js";import"./CheckOutlined-c7cbec95.js";import"./index-3a957ad7.js";import"./CheckCircleFilled-6dfa65f4.js";import"./CheckCircleFilled-1392c7ce.js";import"./ExclamationCircleFilled-04a5fe30.js";import"./ExclamationCircleFilled-eba6e68e.js";import"./InfoCircleFilled-e64602d3.js";import"./InfoCircleFilled-baaa675e.js";import"./CloseOutlined-bab4fc90.js";import"./KeyCode-6413d982.js";import"./SearchOutlined-26e8fa80.js";import"./SearchOutlined-11b57711.js";import"./useLocale-5eb46448.js";import"./PurePanel-c2d1df7c.js";import"./index-79070d4a.js";import"./index-2ae41709.js";import"./index-0a5b12e1.js";import"./EyeInvisibleOutlined-4021859d.js";const Et={title:"Work in progress/Widgets/Translatable/TranslatableInput",component:p,argTypes:{...f,isPassword:{description:"The input is a password",table:{defaultValue:{summary:!1},category:"Char specific"}},locale:{table:{disable:!0}}}},v=t=>{const[s,n]=i.useState(t.value);return i.useEffect(()=>{n(t.value)},[t.value]),S.jsx(p,{...t,value:s,onChange:e=>{var a;n(e),(a=t.onChange)==null||a.call(t,e)}})},r=v.bind({});r.args={required:!1,readOnly:!1,showButton:!0,locale:"ca_ES"};const o=t=>{const[s,n]=i.useState("Initial translated text");return S.jsx(p,{name:"translatable_field",value:s,onChange:e=>{var a;n(e),(a=t.onChange)==null||a.call(t,e)},locale:"en_US",modalOpts:{model:"company",id:37},onGetLangs:async()=>[{code:"en_US",name:"English"},{code:"ca_ES",name:"Catalan"}],onGetValuesForLangs:async e=>({en_US:"Translated text",ca_ES:"Text traduït"}),onSucceed:()=>{},onError:e=>{alert(JSON.stringify(e))},onUpdateValues:async e=>{}})};var l,m,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
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
}`,...(g=(d=o.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const Tt=["WithButton","Default"];export{o as Default,r as WithButton,Tt as __namedExportsOrder,Et as default};
