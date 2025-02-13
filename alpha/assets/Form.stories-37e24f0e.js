import{j as p}from"./jsx-runtime-f6d73c06.js";import{F as l,a as u,I as P,b,c}from"./ExportModal-e7aadddf.js";import{u as f,F as g}from"./Field-bf48cf23.js";import"./Button-8b62cb42.js";import"./Label-81c42596.js";import"./Separator-c1b7b7c4.js";import"./FieldSet-ea21f50d.js";import"./Dropdown-b6b19b2c.js";import"./DropdownButton-8aa04bf7.js";import"./PaginationHeader-5df943a7.js";import"./SelectAllRecordsRow-5b967f94.js";import{B as x}from"./BooleanInput-b9c9c53b.js";import"./BooleanSearch-c5bdda3f.js";import{C as o}from"./CharInput-123bce88.js";import"./CharSearch-c8505e68.js";import"./CharValue-c620fcc1.js";import{D as m}from"./DateInput-0f3831ae.js";import"./DateSearch-979eed3b.js";import"./DateTimeSearch-f4a4a3c5.js";import"./ImageValue-0866ffb4.js";import{T as w}from"./TextInput-40282f5f.js";import{S as y}from"./SelectionInput-8fb27b15.js";import"./SelectionValue-320cacef.js";import"./isIP-81fa1166.js";import"./EmailInput-11a5578c.js";import"./UrlInput-120587e8.js";import"./ProgressBarValue-e84272aa.js";import"./TranslatableInput-0a4d2e95.js";import"./Many2OneDummy-da27af59.js";import"./Many2OneValue-fc60d488.js";import"./Many2OneInput-bf90efab.js";import"./HTMLPreview-24212570.js";import"./LocaleContext-02870291.js";import"./FormigaConfig-4316f169.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./button-6d884b97.js";import"./index-916df0c6.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./omit-db8b152c.js";import"./index-d8807b5c.js";import"./isVisible-c2160674.js";import"./reactNode-c432c2b0.js";import"./asyncToGenerator-5190802c.js";import"./Compact-11981144.js";import"./toArray-08f3fa85.js";import"./LoadingOutlined-74a4b1e9.js";import"./index-9c320998.js";import"./compact-item-43eba85b.js";import"./SaveOutlined-fd4092c9.js";import"./BooleanValue-4eb83b44.js";import"./index-a702c3c1.js";import"./context-4be339a9.js";import"./styled-components.browser.esm-f5d1b584.js";import"./row-35453298.js";import"./index-af8800a2.js";import"./CheckCircleFilled-363e340b.js";import"./CloseCircleFilled-33e5256a.js";import"./ExclamationCircleFilled-3599e5f5.js";import"./InfoCircleFilled-0b03cadd.js";import"./motion-343f592f.js";import"./CloseOutlined-e9b63884.js";import"./KeyCode-6413d982.js";import"./PurePanel-5fd7e678.js";import"./useLocale-7291e1d6.js";import"./index-71762a4a.js";import"./roundedArrow-35bcc62e.js";import"./index-c95a45d0.js";import"./index-a34c119a.js";import"./index-b67453a2.js";import"./TextArea-f4011b25.js";import"./useVariants-3e3137fc.js";import"./SearchOutlined-0dad7535.js";import"./index-7cedb0b2.js";import"./CheckOutlined-42026b46.js";import"./index-fce1f0c7.js";import"./index-850ee6f4.js";import"./Overflow-3bd2f60e.js";import"./slide-5b44b169.js";import"./DownOutlined-753a30af.js";import"./collapse-97de76d4.js";import"./RightOutlined-ec7eb7b5.js";import"./LeftOutlined-7fdbb18c.js";import"./ButtonWithTooltip-4239f9c8.js";import"./index-ac790217.js";import"./EditOutlined-a488172a.js";import"./EnterOutlined-006f821b.js";import"./theme-ac0bd082.js";import"./index-88c67c55.js";import"./DateSearch.types-d0dadd73.js";const ae={title:"Work in progress/Form/Form",component:l,argTypes:{children:{table:{disable:!0},control:{disable:!0}},onFieldsChange:{control:{disable:!0}}}},F=t=>{const[r]=f();return p.jsx(l,{...t,form:r,initialValues:{name:"Hohn"}})},I=[{type:o,baseProps:{required:!0},fieldProps:{name:"name",labelOpts:{text:"Name"}},widgetProps:{}},{type:o,baseProps:{required:!0},fieldProps:{name:"surnames",labelOpts:{text:"Surnames"}},widgetProps:{}},{type:o,baseProps:{required:!0},fieldProps:{name:"password",labelOpts:{text:"Password"}},widgetProps:{isPassword:!0}},{type:o,baseProps:{required:!0},fieldProps:{name:"repeat_password",labelOpts:{text:"Repeat password"}},widgetProps:{isPassword:!0}},{type:x,baseProps:{},fieldProps:{name:"subscribe_to_newsletter",labelOpts:{text:"Receive news"}},widgetProps:{}},{type:u,baseProps:{},fieldProps:{name:"cv",labelOpts:{text:"Resume"}},widgetProps:{}},{type:P,baseProps:{},fieldProps:{name:"profile_image",labelOpts:{text:"Profile image"}},widgetProps:{}},{type:m,baseProps:{},fieldProps:{name:"birthdate",labelOpts:{text:"Birth date"}},widgetProps:{}},{type:w,baseProps:{},fieldProps:{name:"notes",labelOpts:{text:"Additional notes"}},widgetProps:{}},{type:b,baseProps:{},fieldProps:{name:"years_of_experience",labelOpts:{text:"Years of experience"}},widgetProps:{}},{type:c,baseProps:{},fieldProps:{name:"expected_salary",labelOpts:{text:"Expected salary (USD)"}},widgetProps:{decimalDigits:2}},{type:m,baseProps:{},fieldProps:{name:"meeting_date",labelOpts:{text:"Approximate meeting timeframe"}},widgetProps:{showTime:!0}},{type:y,baseProps:{required:!0},fieldProps:{name:"role",labelOpts:{text:"Role"}},widgetProps:{selectionValues:{1:"Developer",2:"Designer",3:"Manager"}}}];function O(){return I.map(t=>h(t))}function h({type:t,baseProps:r,fieldProps:i,widgetProps:d}){return p.jsx(g,{...r,...i,children:p.jsx(t,{...r,...d})},i.name)}const e=F.bind({initialValues:{name:"John"}});e.args={children:O()};var s,a,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`Template.bind({
  initialValues: {
    name: "John"
  }
})`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const ne=["Basic"];export{e as Basic,ne as __namedExportsOrder,ae as default};
