import{j as S}from"./jsx-runtime-f6d73c06.js";import{r as l}from"./index-8ee6c85d.js";import{T as i}from"./TranslatableInput-f2dfb8e9.js";import{B as f}from"./BaseField.argTypes-d72d00ba.js";import"./_commonjsHelpers-de833af9.js";import"./LocaleContext-751eec81.js";import"./theme-ac0bd082.js";import"./ButtonWithTooltip-4a4c058d.js";import"./index-b9328d6e.js";import"./index-7e3d7086.js";import"./extends-4c19d496.js";import"./index-7fae86d9.js";import"./index-f2765735.js";import"./assertThisInitialized-68330e5d.js";import"./index-8eb238e3.js";import"./toArray-66e39049.js";import"./AntdIcon-f4df470f.js";import"./isVisible-2ef80b15.js";import"./motion-343f592f.js";import"./roundedArrow-c768ecf1.js";import"./reactNode-c432c2b0.js";import"./Compact-1edd4e66.js";import"./button-2909d44f.js";import"./omit-f8286760.js";import"./index-eab29bb3.js";import"./asyncToGenerator-aa14e566.js";import"./LoadingOutlined-8eb7bab6.js";import"./compact-item-43eba85b.js";import"./TextArea-0261af0a.js";import"./CloseCircleFilled-53e5d3ad.js";import"./useVariants-2f2c5e71.js";import"./context-29a3839d.js";import"./index-7fe11ddc.js";import"./row-1c3eec31.js";import"./index-e8805335.js";import"./CloseOutlined-9873f370.js";import"./CheckOutlined-c598d246.js";import"./index-3b9fbcf0.js";import"./CheckCircleFilled-f858369c.js";import"./ExclamationCircleFilled-95aa70b7.js";import"./InfoCircleFilled-99d8f615.js";import"./KeyCode-6413d982.js";import"./PurePanel-3a5c693e.js";import"./useLocale-8ec28e87.js";import"./index-a06260e4.js";import"./index-5a2dee05.js";import"./index-ba0b8bee.js";import"./EyeOutlined-a0dd78d5.js";import"./SearchOutlined-061923d8.js";import"./TranslationOutlined-3ef0e566.js";const gt={title:"Work in progress/Widgets/Translatable/TranslatableInput",component:i,argTypes:{...f,isPassword:{description:"The input is a password",table:{defaultValue:{summary:!1},category:"Char specific"}},locale:{table:{disable:!0}}}},v=t=>{const[s,r]=l.useState(t.value);return l.useEffect(()=>{r(t.value)},[t.value]),S.jsx(i,{...t,value:s,onChange:e=>{var a;r(e),(a=t.onChange)==null||a.call(t,e)}})},n=v.bind({});n.args={required:!1,readOnly:!1,showButton:!0,locale:"ca_ES"};const o=t=>{const[s,r]=l.useState("Initial translated text");return S.jsx(i,{name:"translatable_field",value:s,onChange:e=>{var a;r(e),(a=t.onChange)==null||a.call(t,e)},locale:"en_US",modalOpts:{model:"company",id:37},onGetLangs:async()=>[{code:"en_US",name:"English"},{code:"ca_ES",name:"Catalan"}],onGetValuesForLangs:async e=>({en_US:"Translated text",ca_ES:"Text traduït"}),onSucceed:()=>{},onError:e=>{alert(JSON.stringify(e))},onUpdateValues:async e=>{}})};var p,m,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
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
}`,...(g=(d=o.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const St=["WithButton","Default"];export{o as Default,n as WithButton,St as __namedExportsOrder,gt as default};
