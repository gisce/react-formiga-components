import{j as n}from"./jsx-runtime-f6d73c06.js";import{C as j}from"./CharInput-c088eebe.js";import{A as q,F as E}from"./Field-cb880632.js";import{B as I}from"./BaseField.argTypes-d72d00ba.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-53a58144.js";import"./index-4e0f86e8.js";import"./assertThisInitialized-601f600e.js";import"./index-8eb238e3.js";import"./index-a7dcd279.js";import"./context-0e2d5d5e.js";import"./asyncToGenerator-4dda2c7d.js";import"./toArray-66fc3202.js";import"./omit-c7331b12.js";import"./index-42c1687a.js";import"./compact-item-0cc18453.js";import"./index-1e0e3486.js";import"./isVisible-b65992d0.js";import"./CloseCircleFilled-d9375026.js";import"./statusUtils-ea7713be.js";import"./Compact-f5d517ab.js";import"./useCSSVarCls-d323ff87.js";import"./SearchOutlined-820a599b.js";import"./reactNode-b58523ea.js";import"./button-32bdd4e0.js";import"./index-b1f5ed01.js";import"./theme-ac0bd082.js";import"./Label-89cde609.js";import"./index-1416ecc3.js";import"./motion-343f592f.js";import"./roundedArrow-562bcbc7.js";import"./LocaleContext-58eb36ec.js";import"./collapse-97de76d4.js";import"./row-d1e0dc1e.js";import"./CheckCircleFilled-864fc55d.js";import"./ExclamationCircleFilled-456d0c53.js";const l="Field",S=["* **`text`**: `string`. Text to show inside the label","* **`tooltip`**: `string`. Description of the tooltip. Hidden by default","* **`layout`**: `vertical` | `horizontal`. Show label and field inline (horizontal) or vertically separated. Default `horizontal`","* **`alignLabel`**: `left` | `center` | `right`. Only applies when field is in vertical mode. Alignment of the label. Default `horizontal`"],T=["* **`type`**: `string | number | array | ...`. Primitive type of the field. More type to ref [here](https://github.com/yiminghe/async-validator#type).","* **`validator`**: `(value: any) => Promise<void | any> | void>`. Function that receives the value and throw error if validation doesn't pass"],be={title:"Work in progress/Form/Field",component:j,argTypes:{...I,name:{description:"Name or unique key of the field for referencing it while inside a form",table:{category:l}},valuePropName:{description:"Props of children node, for example, the prop of a Checkbox is 'checked'",table:{defaultValue:{summary:"value"},category:l}},labelOpts:{description:S.join(`
`),table:{category:l}},validatorOpts:{description:T.join(`
`),table:{category:l}},isPassword:{table:{disable:!0}}}},e=p=>n.jsx(q,{children:n.jsx(E,{...p,children:n.jsx(j,{...p})})}),r=e.bind({});r.args={name:"field_id",required:!1,readOnly:!1};const a=e.bind({});a.args={name:"field_id",labelOpts:{text:"Example form field"},required:!1,readOnly:!1};const t=e.bind({});t.args={name:"field_id",labelOpts:{text:"Example form field",tooltip:"Tooltip value"},required:!1,readOnly:!1};const i=e.bind({});i.args={name:"field_id",labelOpts:{text:"Example form field",layout:"vertical",align:"left"},required:!1,readOnly:!1};const o=e.bind({});o.args={name:"field_id",labelOpts:{text:"Example form field",layout:"vertical",align:"center"},required:!1,readOnly:!1};const s=e.bind({});s.args={name:"field_id",labelOpts:{text:"Example form field",layout:"vertical",align:"right"},required:!1,readOnly:!1};var m,d,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => <Form>
    <Field {...args}>
      <CharInput {...args} />
    </Field>
  </Form>`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var f,u,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`args => <Form>
    <Field {...args}>
      <CharInput {...args} />
    </Field>
  </Form>`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,b,F;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => <Form>
    <Field {...args}>
      <CharInput {...args} />
    </Field>
  </Form>`,...(F=(b=t.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var y,x,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`args => <Form>
    <Field {...args}>
      <CharInput {...args} />
    </Field>
  </Form>`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var O,B,L;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`args => <Form>
    <Field {...args}>
      <CharInput {...args} />
    </Field>
  </Form>`,...(L=(B=o.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var C,W,_;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`args => <Form>
    <Field {...args}>
      <CharInput {...args} />
    </Field>
  </Form>`,...(_=(W=s.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const Fe=["Basic","BasicWithLabel","BasicWithLabelAndTooltip","BasicWithLabelVerticalLeft","BasicWithLabelVerticalCenter","BasicWithLabelVerticalRight"];export{r as Basic,a as BasicWithLabel,t as BasicWithLabelAndTooltip,o as BasicWithLabelVerticalCenter,i as BasicWithLabelVerticalLeft,s as BasicWithLabelVerticalRight,Fe as __namedExportsOrder,be as default};
