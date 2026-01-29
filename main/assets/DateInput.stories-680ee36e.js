import{j as n}from"./jsx-runtime-ffb262ed.js";import{r as U}from"./index-76fb7be0.js";import{M as k}from"./DateInput-26923b3c.js";import{d as tn}from"./useRequiredStyle-3e233289.js";import{L as sn}from"./LocaleContext-6a38b50b.js";import{F as d}from"./index-dfc37164.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-73af44a0.js";import"./index-86654eeb.js";import"./genStyleUtils-28a6e765.js";import"./assertThisInitialized-11245cea.js";import"./index-df709f45.js";import"./index-6141dcc2.js";import"./index-356ca88b.js";import"./index-da03a860.js";import"./context-b387624d.js";import"./wrapNativeSuper-e3a961e5.js";import"./Compact-a3364df5.js";import"./useSize-06920fd3.js";import"./reactNode-9d24d027.js";import"./PurePanel-dc31f1e9.js";import"./SwapRightOutlined-6c6c9e02.js";import"./AntdIcon-eb4d8409.js";import"./SearchOutlined-a215f538.js";import"./SearchOutlined-11b57711.js";import"./Overflow-77a29d28.js";import"./useVariants-6604f14b.js";import"./useCSSVarCls-56ee7f0e.js";import"./index-8c4dacd9.js";import"./compact-item-869a41a4.js";import"./LoadingOutlined-722c611a.js";import"./useIcons-d6980080.js";import"./CheckOutlined-e9194b0d.js";import"./CheckOutlined-c7cbec95.js";import"./CloseCircleFilled-d4e8e9a6.js";import"./CloseCircleFilled-257b815e.js";import"./CloseOutlined-55cb7de5.js";import"./CloseOutlined-9385a5da.js";import"./DownOutlined-3b14e6aa.js";import"./button-a7ab0380.js";import"./index-eacc853e.js";import"./useLocale-8b2da478.js";import"./index-3f9a60cd.js";import"./collapse-97de76d4.js";import"./row-8e2bb960.js";import"./QuestionCircleOutlined-04e9cd25.js";import"./CheckCircleFilled-f46cad22.js";import"./CheckCircleFilled-1392c7ce.js";import"./ExclamationCircleFilled-b40e1c9f.js";import"./ExclamationCircleFilled-eba6e68e.js";const ir={title:"Components/Widgets/Date/DateInput",component:k,parameters:{layout:"centered"},argTypes:{timezone:{control:"select",options:["UTC","Europe/Madrid","Europe/London","America/New_York","Asia/Tokyo","Australia/Sydney"],description:"Timezone for the date picker",defaultValue:"Europe/Madrid"},showTime:{control:"boolean",description:"Whether to show time picker",defaultValue:!1},required:{control:"boolean",description:"Whether the field is required",defaultValue:!1},readOnly:{control:"boolean",description:"Whether the field is read-only",defaultValue:!1}}},r=e=>{var m,l,g;const[i]=d.useForm(),a=e.id||"dateField",[j,t]=U.useState(e.value);U.useEffect(()=>{e.value&&(i.setFieldsValue({[a]:e.value}),t(e.value))},[e.value,i,a]);const L=f=>{var B;i.setFieldValue(a,f),t(f||void 0),(B=e.onChange)==null||B.call(e,f)};return n.jsx("div",{style:{width:300},children:n.jsxs(d,{form:i,initialValues:{[a]:e.value},onFieldsChange:()=>{const f=i.getFieldValue(a);t(f)},children:[n.jsx(d.Item,{name:a,label:"Date",children:n.jsx(k,{id:a,value:i.getFieldValue(a),onChange:L,showTime:e.showTime,required:e.required,readOnly:e.readOnly,timezone:e.timezone})}),n.jsxs("div",{style:{marginTop:20},children:[n.jsx("strong",{children:"Debug Information:"}),n.jsxs("pre",{children:["String value: ",j]}),n.jsxs("pre",{children:["timezone: ",e.timezone]}),n.jsxs("pre",{children:["showTime: ",(m=e.showTime)==null?void 0:m.toString()]}),n.jsxs("pre",{children:["required: ",(l=e.required)==null?void 0:l.toString()]}),n.jsxs("pre",{children:["readOnly: ",(g=e.readOnly)==null?void 0:g.toString()]})]})]})})},c=r.bind({});c.args={id:"basic-date",value:"2024-03-10 14:30:00",showTime:!0,required:!1,readOnly:!1,timezone:"Europe/Madrid"};const p=r.bind({});p.args={id:"required-date",value:"2024-03-10 14:30:00",showTime:!0,required:!0,readOnly:!1,timezone:"Europe/Madrid"};const v=r.bind({});v.args={id:"readonly-date",value:tn().format("YYYY-MM-DD HH:mm:ss"),showTime:!0,required:!1,readOnly:!0,timezone:"Europe/Madrid"};const h=r.bind({});h.args={id:"invalid-date",value:"invalid-date",showTime:!0,required:!1,readOnly:!1,timezone:"Europe/Madrid"};const V=r.bind({});V.args={id:"date-only",value:"2024-03-10",showTime:!1,required:!1,readOnly:!1,timezone:"Europe/Madrid"};const F=r.bind({});F.args={id:"madrid-tz",value:"2025-05-26 12:00:00",showTime:!0,required:!1,readOnly:!1,timezone:"Europe/Madrid"};const C=r.bind({});C.args={id:"tokyo-tz",value:"2025-05-26 21:00:00",showTime:!0,required:!1,readOnly:!1,timezone:"Asia/Tokyo"};const w=r.bind({});w.args={id:"utc-tz",value:"2025-05-26 12:00:00",showTime:!0,required:!1,readOnly:!1,timezone:"UTC"};const N=r.bind({});N.args={id:"dst-start-madrid",value:"2025-03-30 01:59:59",showTime:!0,required:!1,readOnly:!1,timezone:"Europe/Madrid"};const T=r.bind({});T.args={id:"dst-end-madrid",value:"2025-10-26 02:59:59",showTime:!0,required:!1,readOnly:!1,timezone:"Europe/Madrid"};const S=r.bind({});S.args={id:"utc-reference",value:"2025-03-30 00:59:59",showTime:!0,required:!1,readOnly:!1,timezone:"UTC"};const y=r.bind({});y.args={id:"dst-madrid-spring",value:"2025-03-30 02:00:00",showTime:!0,required:!1,readOnly:!1,timezone:"Europe/Madrid"};const z=r.bind({});z.args={id:"dst-madrid-fall-first",value:"2025-10-26 02:00:00",showTime:!0,required:!1,readOnly:!1,timezone:"Europe/Madrid"};const O=r.bind({});O.args={id:"dst-madrid-fall-second",value:"2025-10-26 02:00:00",showTime:!0,required:!1,readOnly:!1,timezone:"Europe/Madrid"};const q=r.bind({});q.args={id:"dst-utc-spring",value:"2025-03-30 01:00:00",showTime:!0,required:!1,readOnly:!1,timezone:"UTC"};const I=r.bind({});I.args={id:"dst-utc-fall",value:"2025-10-26 01:00:00",showTime:!0,required:!1,readOnly:!1,timezone:"UTC"};const D=r.bind({});D.args={id:"specific-utc",value:"2023-03-26 02:00:00",showTime:!0,required:!1,readOnly:!1,timezone:"UTC"};const b=r.bind({});b.args={id:"utc-to-madrid-dst",value:"2023-03-26 02:00:00",showTime:!0,required:!1,readOnly:!1,timezone:"Europe/Madrid"};const E=r.bind({});E.args={id:"utc-midnight",value:"2023-03-26 00:00:00",showTime:!0,required:!1,readOnly:!1,timezone:"UTC"};const M=r.bind({});M.args={id:"utc-to-tokyo",value:"2023-03-26 15:00:00",showTime:!0,required:!1,readOnly:!1,timezone:"Asia/Tokyo"};const x=r.bind({});x.args={id:"utc-last-second",value:"2023-03-26 23:59:59",showTime:!0,required:!1,readOnly:!1,timezone:"UTC"};const _=e=>{var m;const[i]=d.useForm(),a=e.id||"dateField",[j,t]=U.useState(e.value);U.useEffect(()=>{e.value&&(i.setFieldsValue({[a]:e.value}),t(e.value))},[e.value,i,a]);const L=l=>{var g;i.setFieldValue(a,l),t(l||void 0),(g=e.onChange)==null||g.call(e,l)};return n.jsx(sn,{locale:e.locale,children:n.jsx("div",{style:{width:300},children:n.jsxs(d,{form:i,initialValues:{[a]:e.value},onFieldsChange:()=>{const l=i.getFieldValue(a);t(l)},children:[n.jsx(d.Item,{name:a,label:"Date",children:n.jsx(k,{id:a,value:i.getFieldValue(a),onChange:L,showTime:e.showTime,required:e.required,readOnly:e.readOnly,timezone:e.timezone})}),n.jsxs("div",{style:{marginTop:20},children:[n.jsx("strong",{children:"Debug Information:"}),n.jsxs("pre",{children:["String value: ",j]}),n.jsxs("pre",{children:["locale: ",e.locale]}),n.jsxs("pre",{children:["timezone: ",e.timezone]}),n.jsxs("pre",{children:["showTime: ",(m=e.showTime)==null?void 0:m.toString()]})]})]})})})},s=_.bind({});s.args={id:"locale-spanish",value:"2024-03-10 14:30:00",showTime:!0,required:!1,readOnly:!1,timezone:"Europe/Madrid",locale:"es_ES"};s.storyName="Locale: Spanish (es_ES)";const o=_.bind({});o.args={id:"locale-catalan",value:"2024-03-10 14:30:00",showTime:!0,required:!1,readOnly:!1,timezone:"Europe/Madrid",locale:"ca_ES"};o.storyName="Locale: Catalan (ca_ES)";const u=_.bind({});u.args={id:"locale-english",value:"2024-03-10 14:30:00",showTime:!0,required:!1,readOnly:!1,timezone:"Europe/Madrid",locale:"en_US"};u.storyName="Locale: English (en_US)";var P,R,A;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateField";
  const [currentValue, setCurrentValue] = useState<string | undefined>(args.value);

  // Set initial values when args.value changes
  useEffect(() => {
    if (args.value) {
      form.setFieldsValue({
        [fieldName]: args.value
      });
      setCurrentValue(args.value);
    }
  }, [args.value, form, fieldName]);
  const handleChange = (value: string | null | undefined) => {
    form.setFieldValue(fieldName, value);
    setCurrentValue(value || undefined);
    args.onChange?.(value);
  };
  return <div style={{
    width: 300
  }}>
      <Form form={form} initialValues={{
      [fieldName]: args.value
    }} onFieldsChange={() => {
      const newValue = form.getFieldValue(fieldName);
      setCurrentValue(newValue);
    }}>
        <Form.Item name={fieldName} label="Date">
          <DateInput id={fieldName} value={form.getFieldValue(fieldName)} onChange={handleChange} showTime={args.showTime} required={args.required} readOnly={args.readOnly} timezone={args.timezone} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {currentValue}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>showTime: {args.showTime?.toString()}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(A=(R=c.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var Y,W,H;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateField";
  const [currentValue, setCurrentValue] = useState<string | undefined>(args.value);

  // Set initial values when args.value changes
  useEffect(() => {
    if (args.value) {
      form.setFieldsValue({
        [fieldName]: args.value
      });
      setCurrentValue(args.value);
    }
  }, [args.value, form, fieldName]);
  const handleChange = (value: string | null | undefined) => {
    form.setFieldValue(fieldName, value);
    setCurrentValue(value || undefined);
    args.onChange?.(value);
  };
  return <div style={{
    width: 300
  }}>
      <Form form={form} initialValues={{
      [fieldName]: args.value
    }} onFieldsChange={() => {
      const newValue = form.getFieldValue(fieldName);
      setCurrentValue(newValue);
    }}>
        <Form.Item name={fieldName} label="Date">
          <DateInput id={fieldName} value={form.getFieldValue(fieldName)} onChange={handleChange} showTime={args.showTime} required={args.required} readOnly={args.readOnly} timezone={args.timezone} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {currentValue}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>showTime: {args.showTime?.toString()}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(H=(W=p.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var G,J,K;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateField";
  const [currentValue, setCurrentValue] = useState<string | undefined>(args.value);

  // Set initial values when args.value changes
  useEffect(() => {
    if (args.value) {
      form.setFieldsValue({
        [fieldName]: args.value
      });
      setCurrentValue(args.value);
    }
  }, [args.value, form, fieldName]);
  const handleChange = (value: string | null | undefined) => {
    form.setFieldValue(fieldName, value);
    setCurrentValue(value || undefined);
    args.onChange?.(value);
  };
  return <div style={{
    width: 300
  }}>
      <Form form={form} initialValues={{
      [fieldName]: args.value
    }} onFieldsChange={() => {
      const newValue = form.getFieldValue(fieldName);
      setCurrentValue(newValue);
    }}>
        <Form.Item name={fieldName} label="Date">
          <DateInput id={fieldName} value={form.getFieldValue(fieldName)} onChange={handleChange} showTime={args.showTime} required={args.required} readOnly={args.readOnly} timezone={args.timezone} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {currentValue}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>showTime: {args.showTime?.toString()}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateField";
  const [currentValue, setCurrentValue] = useState<string | undefined>(args.value);

  // Set initial values when args.value changes
  useEffect(() => {
    if (args.value) {
      form.setFieldsValue({
        [fieldName]: args.value
      });
      setCurrentValue(args.value);
    }
  }, [args.value, form, fieldName]);
  const handleChange = (value: string | null | undefined) => {
    form.setFieldValue(fieldName, value);
    setCurrentValue(value || undefined);
    args.onChange?.(value);
  };
  return <div style={{
    width: 300
  }}>
      <Form form={form} initialValues={{
      [fieldName]: args.value
    }} onFieldsChange={() => {
      const newValue = form.getFieldValue(fieldName);
      setCurrentValue(newValue);
    }}>
        <Form.Item name={fieldName} label="Date">
          <DateInput id={fieldName} value={form.getFieldValue(fieldName)} onChange={handleChange} showTime={args.showTime} required={args.required} readOnly={args.readOnly} timezone={args.timezone} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {currentValue}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>showTime: {args.showTime?.toString()}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(Z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,ne;V.parameters={...V.parameters,docs:{...($=V.parameters)==null?void 0:$.docs,source:{originalSource:`args => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateField";
  const [currentValue, setCurrentValue] = useState<string | undefined>(args.value);

  // Set initial values when args.value changes
  useEffect(() => {
    if (args.value) {
      form.setFieldsValue({
        [fieldName]: args.value
      });
      setCurrentValue(args.value);
    }
  }, [args.value, form, fieldName]);
  const handleChange = (value: string | null | undefined) => {
    form.setFieldValue(fieldName, value);
    setCurrentValue(value || undefined);
    args.onChange?.(value);
  };
  return <div style={{
    width: 300
  }}>
      <Form form={form} initialValues={{
      [fieldName]: args.value
    }} onFieldsChange={() => {
      const newValue = form.getFieldValue(fieldName);
      setCurrentValue(newValue);
    }}>
        <Form.Item name={fieldName} label="Date">
          <DateInput id={fieldName} value={form.getFieldValue(fieldName)} onChange={handleChange} showTime={args.showTime} required={args.required} readOnly={args.readOnly} timezone={args.timezone} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {currentValue}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>showTime: {args.showTime?.toString()}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(ne=(ee=V.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,ae,ie;F.parameters={...F.parameters,docs:{...(re=F.parameters)==null?void 0:re.docs,source:{originalSource:`args => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateField";
  const [currentValue, setCurrentValue] = useState<string | undefined>(args.value);

  // Set initial values when args.value changes
  useEffect(() => {
    if (args.value) {
      form.setFieldsValue({
        [fieldName]: args.value
      });
      setCurrentValue(args.value);
    }
  }, [args.value, form, fieldName]);
  const handleChange = (value: string | null | undefined) => {
    form.setFieldValue(fieldName, value);
    setCurrentValue(value || undefined);
    args.onChange?.(value);
  };
  return <div style={{
    width: 300
  }}>
      <Form form={form} initialValues={{
      [fieldName]: args.value
    }} onFieldsChange={() => {
      const newValue = form.getFieldValue(fieldName);
      setCurrentValue(newValue);
    }}>
        <Form.Item name={fieldName} label="Date">
          <DateInput id={fieldName} value={form.getFieldValue(fieldName)} onChange={handleChange} showTime={args.showTime} required={args.required} readOnly={args.readOnly} timezone={args.timezone} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {currentValue}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>showTime: {args.showTime?.toString()}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(ie=(ae=F.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var le,te,se;C.parameters={...C.parameters,docs:{...(le=C.parameters)==null?void 0:le.docs,source:{originalSource:`args => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateField";
  const [currentValue, setCurrentValue] = useState<string | undefined>(args.value);

  // Set initial values when args.value changes
  useEffect(() => {
    if (args.value) {
      form.setFieldsValue({
        [fieldName]: args.value
      });
      setCurrentValue(args.value);
    }
  }, [args.value, form, fieldName]);
  const handleChange = (value: string | null | undefined) => {
    form.setFieldValue(fieldName, value);
    setCurrentValue(value || undefined);
    args.onChange?.(value);
  };
  return <div style={{
    width: 300
  }}>
      <Form form={form} initialValues={{
      [fieldName]: args.value
    }} onFieldsChange={() => {
      const newValue = form.getFieldValue(fieldName);
      setCurrentValue(newValue);
    }}>
        <Form.Item name={fieldName} label="Date">
          <DateInput id={fieldName} value={form.getFieldValue(fieldName)} onChange={handleChange} showTime={args.showTime} required={args.required} readOnly={args.readOnly} timezone={args.timezone} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {currentValue}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>showTime: {args.showTime?.toString()}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(se=(te=C.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var oe,ue,de;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`args => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateField";
  const [currentValue, setCurrentValue] = useState<string | undefined>(args.value);

  // Set initial values when args.value changes
  useEffect(() => {
    if (args.value) {
      form.setFieldsValue({
        [fieldName]: args.value
      });
      setCurrentValue(args.value);
    }
  }, [args.value, form, fieldName]);
  const handleChange = (value: string | null | undefined) => {
    form.setFieldValue(fieldName, value);
    setCurrentValue(value || undefined);
    args.onChange?.(value);
  };
  return <div style={{
    width: 300
  }}>
      <Form form={form} initialValues={{
      [fieldName]: args.value
    }} onFieldsChange={() => {
      const newValue = form.getFieldValue(fieldName);
      setCurrentValue(newValue);
    }}>
        <Form.Item name={fieldName} label="Date">
          <DateInput id={fieldName} value={form.getFieldValue(fieldName)} onChange={handleChange} showTime={args.showTime} required={args.required} readOnly={args.readOnly} timezone={args.timezone} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {currentValue}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>showTime: {args.showTime?.toString()}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(de=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,ge,fe;N.parameters={...N.parameters,docs:{...(me=N.parameters)==null?void 0:me.docs,source:{originalSource:`args => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateField";
  const [currentValue, setCurrentValue] = useState<string | undefined>(args.value);

  // Set initial values when args.value changes
  useEffect(() => {
    if (args.value) {
      form.setFieldsValue({
        [fieldName]: args.value
      });
      setCurrentValue(args.value);
    }
  }, [args.value, form, fieldName]);
  const handleChange = (value: string | null | undefined) => {
    form.setFieldValue(fieldName, value);
    setCurrentValue(value || undefined);
    args.onChange?.(value);
  };
  return <div style={{
    width: 300
  }}>
      <Form form={form} initialValues={{
      [fieldName]: args.value
    }} onFieldsChange={() => {
      const newValue = form.getFieldValue(fieldName);
      setCurrentValue(newValue);
    }}>
        <Form.Item name={fieldName} label="Date">
          <DateInput id={fieldName} value={form.getFieldValue(fieldName)} onChange={handleChange} showTime={args.showTime} required={args.required} readOnly={args.readOnly} timezone={args.timezone} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {currentValue}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>showTime: {args.showTime?.toString()}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(fe=(ge=N.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var ce,pe,ve;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`args => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateField";
  const [currentValue, setCurrentValue] = useState<string | undefined>(args.value);

  // Set initial values when args.value changes
  useEffect(() => {
    if (args.value) {
      form.setFieldsValue({
        [fieldName]: args.value
      });
      setCurrentValue(args.value);
    }
  }, [args.value, form, fieldName]);
  const handleChange = (value: string | null | undefined) => {
    form.setFieldValue(fieldName, value);
    setCurrentValue(value || undefined);
    args.onChange?.(value);
  };
  return <div style={{
    width: 300
  }}>
      <Form form={form} initialValues={{
      [fieldName]: args.value
    }} onFieldsChange={() => {
      const newValue = form.getFieldValue(fieldName);
      setCurrentValue(newValue);
    }}>
        <Form.Item name={fieldName} label="Date">
          <DateInput id={fieldName} value={form.getFieldValue(fieldName)} onChange={handleChange} showTime={args.showTime} required={args.required} readOnly={args.readOnly} timezone={args.timezone} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {currentValue}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>showTime: {args.showTime?.toString()}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(ve=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:ve.source}}};var he,Ve,Fe;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`args => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateField";
  const [currentValue, setCurrentValue] = useState<string | undefined>(args.value);

  // Set initial values when args.value changes
  useEffect(() => {
    if (args.value) {
      form.setFieldsValue({
        [fieldName]: args.value
      });
      setCurrentValue(args.value);
    }
  }, [args.value, form, fieldName]);
  const handleChange = (value: string | null | undefined) => {
    form.setFieldValue(fieldName, value);
    setCurrentValue(value || undefined);
    args.onChange?.(value);
  };
  return <div style={{
    width: 300
  }}>
      <Form form={form} initialValues={{
      [fieldName]: args.value
    }} onFieldsChange={() => {
      const newValue = form.getFieldValue(fieldName);
      setCurrentValue(newValue);
    }}>
        <Form.Item name={fieldName} label="Date">
          <DateInput id={fieldName} value={form.getFieldValue(fieldName)} onChange={handleChange} showTime={args.showTime} required={args.required} readOnly={args.readOnly} timezone={args.timezone} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {currentValue}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>showTime: {args.showTime?.toString()}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(Fe=(Ve=S.parameters)==null?void 0:Ve.docs)==null?void 0:Fe.source}}};var Ce,we,Ne;y.parameters={...y.parameters,docs:{...(Ce=y.parameters)==null?void 0:Ce.docs,source:{originalSource:`args => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateField";
  const [currentValue, setCurrentValue] = useState<string | undefined>(args.value);

  // Set initial values when args.value changes
  useEffect(() => {
    if (args.value) {
      form.setFieldsValue({
        [fieldName]: args.value
      });
      setCurrentValue(args.value);
    }
  }, [args.value, form, fieldName]);
  const handleChange = (value: string | null | undefined) => {
    form.setFieldValue(fieldName, value);
    setCurrentValue(value || undefined);
    args.onChange?.(value);
  };
  return <div style={{
    width: 300
  }}>
      <Form form={form} initialValues={{
      [fieldName]: args.value
    }} onFieldsChange={() => {
      const newValue = form.getFieldValue(fieldName);
      setCurrentValue(newValue);
    }}>
        <Form.Item name={fieldName} label="Date">
          <DateInput id={fieldName} value={form.getFieldValue(fieldName)} onChange={handleChange} showTime={args.showTime} required={args.required} readOnly={args.readOnly} timezone={args.timezone} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {currentValue}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>showTime: {args.showTime?.toString()}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(Ne=(we=y.parameters)==null?void 0:we.docs)==null?void 0:Ne.source}}};var Te,Se,ye;z.parameters={...z.parameters,docs:{...(Te=z.parameters)==null?void 0:Te.docs,source:{originalSource:`args => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateField";
  const [currentValue, setCurrentValue] = useState<string | undefined>(args.value);

  // Set initial values when args.value changes
  useEffect(() => {
    if (args.value) {
      form.setFieldsValue({
        [fieldName]: args.value
      });
      setCurrentValue(args.value);
    }
  }, [args.value, form, fieldName]);
  const handleChange = (value: string | null | undefined) => {
    form.setFieldValue(fieldName, value);
    setCurrentValue(value || undefined);
    args.onChange?.(value);
  };
  return <div style={{
    width: 300
  }}>
      <Form form={form} initialValues={{
      [fieldName]: args.value
    }} onFieldsChange={() => {
      const newValue = form.getFieldValue(fieldName);
      setCurrentValue(newValue);
    }}>
        <Form.Item name={fieldName} label="Date">
          <DateInput id={fieldName} value={form.getFieldValue(fieldName)} onChange={handleChange} showTime={args.showTime} required={args.required} readOnly={args.readOnly} timezone={args.timezone} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {currentValue}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>showTime: {args.showTime?.toString()}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(ye=(Se=z.parameters)==null?void 0:Se.docs)==null?void 0:ye.source}}};var ze,Oe,qe;O.parameters={...O.parameters,docs:{...(ze=O.parameters)==null?void 0:ze.docs,source:{originalSource:`args => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateField";
  const [currentValue, setCurrentValue] = useState<string | undefined>(args.value);

  // Set initial values when args.value changes
  useEffect(() => {
    if (args.value) {
      form.setFieldsValue({
        [fieldName]: args.value
      });
      setCurrentValue(args.value);
    }
  }, [args.value, form, fieldName]);
  const handleChange = (value: string | null | undefined) => {
    form.setFieldValue(fieldName, value);
    setCurrentValue(value || undefined);
    args.onChange?.(value);
  };
  return <div style={{
    width: 300
  }}>
      <Form form={form} initialValues={{
      [fieldName]: args.value
    }} onFieldsChange={() => {
      const newValue = form.getFieldValue(fieldName);
      setCurrentValue(newValue);
    }}>
        <Form.Item name={fieldName} label="Date">
          <DateInput id={fieldName} value={form.getFieldValue(fieldName)} onChange={handleChange} showTime={args.showTime} required={args.required} readOnly={args.readOnly} timezone={args.timezone} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {currentValue}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>showTime: {args.showTime?.toString()}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(qe=(Oe=O.parameters)==null?void 0:Oe.docs)==null?void 0:qe.source}}};var Ie,De,be;q.parameters={...q.parameters,docs:{...(Ie=q.parameters)==null?void 0:Ie.docs,source:{originalSource:`args => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateField";
  const [currentValue, setCurrentValue] = useState<string | undefined>(args.value);

  // Set initial values when args.value changes
  useEffect(() => {
    if (args.value) {
      form.setFieldsValue({
        [fieldName]: args.value
      });
      setCurrentValue(args.value);
    }
  }, [args.value, form, fieldName]);
  const handleChange = (value: string | null | undefined) => {
    form.setFieldValue(fieldName, value);
    setCurrentValue(value || undefined);
    args.onChange?.(value);
  };
  return <div style={{
    width: 300
  }}>
      <Form form={form} initialValues={{
      [fieldName]: args.value
    }} onFieldsChange={() => {
      const newValue = form.getFieldValue(fieldName);
      setCurrentValue(newValue);
    }}>
        <Form.Item name={fieldName} label="Date">
          <DateInput id={fieldName} value={form.getFieldValue(fieldName)} onChange={handleChange} showTime={args.showTime} required={args.required} readOnly={args.readOnly} timezone={args.timezone} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {currentValue}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>showTime: {args.showTime?.toString()}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(be=(De=q.parameters)==null?void 0:De.docs)==null?void 0:be.source}}};var Ee,Me,xe;I.parameters={...I.parameters,docs:{...(Ee=I.parameters)==null?void 0:Ee.docs,source:{originalSource:`args => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateField";
  const [currentValue, setCurrentValue] = useState<string | undefined>(args.value);

  // Set initial values when args.value changes
  useEffect(() => {
    if (args.value) {
      form.setFieldsValue({
        [fieldName]: args.value
      });
      setCurrentValue(args.value);
    }
  }, [args.value, form, fieldName]);
  const handleChange = (value: string | null | undefined) => {
    form.setFieldValue(fieldName, value);
    setCurrentValue(value || undefined);
    args.onChange?.(value);
  };
  return <div style={{
    width: 300
  }}>
      <Form form={form} initialValues={{
      [fieldName]: args.value
    }} onFieldsChange={() => {
      const newValue = form.getFieldValue(fieldName);
      setCurrentValue(newValue);
    }}>
        <Form.Item name={fieldName} label="Date">
          <DateInput id={fieldName} value={form.getFieldValue(fieldName)} onChange={handleChange} showTime={args.showTime} required={args.required} readOnly={args.readOnly} timezone={args.timezone} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {currentValue}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>showTime: {args.showTime?.toString()}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(xe=(Me=I.parameters)==null?void 0:Me.docs)==null?void 0:xe.source}}};var Ue,je,Le;D.parameters={...D.parameters,docs:{...(Ue=D.parameters)==null?void 0:Ue.docs,source:{originalSource:`args => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateField";
  const [currentValue, setCurrentValue] = useState<string | undefined>(args.value);

  // Set initial values when args.value changes
  useEffect(() => {
    if (args.value) {
      form.setFieldsValue({
        [fieldName]: args.value
      });
      setCurrentValue(args.value);
    }
  }, [args.value, form, fieldName]);
  const handleChange = (value: string | null | undefined) => {
    form.setFieldValue(fieldName, value);
    setCurrentValue(value || undefined);
    args.onChange?.(value);
  };
  return <div style={{
    width: 300
  }}>
      <Form form={form} initialValues={{
      [fieldName]: args.value
    }} onFieldsChange={() => {
      const newValue = form.getFieldValue(fieldName);
      setCurrentValue(newValue);
    }}>
        <Form.Item name={fieldName} label="Date">
          <DateInput id={fieldName} value={form.getFieldValue(fieldName)} onChange={handleChange} showTime={args.showTime} required={args.required} readOnly={args.readOnly} timezone={args.timezone} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {currentValue}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>showTime: {args.showTime?.toString()}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(Le=(je=D.parameters)==null?void 0:je.docs)==null?void 0:Le.source}}};var ke,_e,Be;b.parameters={...b.parameters,docs:{...(ke=b.parameters)==null?void 0:ke.docs,source:{originalSource:`args => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateField";
  const [currentValue, setCurrentValue] = useState<string | undefined>(args.value);

  // Set initial values when args.value changes
  useEffect(() => {
    if (args.value) {
      form.setFieldsValue({
        [fieldName]: args.value
      });
      setCurrentValue(args.value);
    }
  }, [args.value, form, fieldName]);
  const handleChange = (value: string | null | undefined) => {
    form.setFieldValue(fieldName, value);
    setCurrentValue(value || undefined);
    args.onChange?.(value);
  };
  return <div style={{
    width: 300
  }}>
      <Form form={form} initialValues={{
      [fieldName]: args.value
    }} onFieldsChange={() => {
      const newValue = form.getFieldValue(fieldName);
      setCurrentValue(newValue);
    }}>
        <Form.Item name={fieldName} label="Date">
          <DateInput id={fieldName} value={form.getFieldValue(fieldName)} onChange={handleChange} showTime={args.showTime} required={args.required} readOnly={args.readOnly} timezone={args.timezone} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {currentValue}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>showTime: {args.showTime?.toString()}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(Be=(_e=b.parameters)==null?void 0:_e.docs)==null?void 0:Be.source}}};var Pe,Re,Ae;E.parameters={...E.parameters,docs:{...(Pe=E.parameters)==null?void 0:Pe.docs,source:{originalSource:`args => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateField";
  const [currentValue, setCurrentValue] = useState<string | undefined>(args.value);

  // Set initial values when args.value changes
  useEffect(() => {
    if (args.value) {
      form.setFieldsValue({
        [fieldName]: args.value
      });
      setCurrentValue(args.value);
    }
  }, [args.value, form, fieldName]);
  const handleChange = (value: string | null | undefined) => {
    form.setFieldValue(fieldName, value);
    setCurrentValue(value || undefined);
    args.onChange?.(value);
  };
  return <div style={{
    width: 300
  }}>
      <Form form={form} initialValues={{
      [fieldName]: args.value
    }} onFieldsChange={() => {
      const newValue = form.getFieldValue(fieldName);
      setCurrentValue(newValue);
    }}>
        <Form.Item name={fieldName} label="Date">
          <DateInput id={fieldName} value={form.getFieldValue(fieldName)} onChange={handleChange} showTime={args.showTime} required={args.required} readOnly={args.readOnly} timezone={args.timezone} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {currentValue}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>showTime: {args.showTime?.toString()}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(Ae=(Re=E.parameters)==null?void 0:Re.docs)==null?void 0:Ae.source}}};var Ye,We,He;M.parameters={...M.parameters,docs:{...(Ye=M.parameters)==null?void 0:Ye.docs,source:{originalSource:`args => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateField";
  const [currentValue, setCurrentValue] = useState<string | undefined>(args.value);

  // Set initial values when args.value changes
  useEffect(() => {
    if (args.value) {
      form.setFieldsValue({
        [fieldName]: args.value
      });
      setCurrentValue(args.value);
    }
  }, [args.value, form, fieldName]);
  const handleChange = (value: string | null | undefined) => {
    form.setFieldValue(fieldName, value);
    setCurrentValue(value || undefined);
    args.onChange?.(value);
  };
  return <div style={{
    width: 300
  }}>
      <Form form={form} initialValues={{
      [fieldName]: args.value
    }} onFieldsChange={() => {
      const newValue = form.getFieldValue(fieldName);
      setCurrentValue(newValue);
    }}>
        <Form.Item name={fieldName} label="Date">
          <DateInput id={fieldName} value={form.getFieldValue(fieldName)} onChange={handleChange} showTime={args.showTime} required={args.required} readOnly={args.readOnly} timezone={args.timezone} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {currentValue}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>showTime: {args.showTime?.toString()}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(He=(We=M.parameters)==null?void 0:We.docs)==null?void 0:He.source}}};var Ge,Je,Ke;x.parameters={...x.parameters,docs:{...(Ge=x.parameters)==null?void 0:Ge.docs,source:{originalSource:`args => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateField";
  const [currentValue, setCurrentValue] = useState<string | undefined>(args.value);

  // Set initial values when args.value changes
  useEffect(() => {
    if (args.value) {
      form.setFieldsValue({
        [fieldName]: args.value
      });
      setCurrentValue(args.value);
    }
  }, [args.value, form, fieldName]);
  const handleChange = (value: string | null | undefined) => {
    form.setFieldValue(fieldName, value);
    setCurrentValue(value || undefined);
    args.onChange?.(value);
  };
  return <div style={{
    width: 300
  }}>
      <Form form={form} initialValues={{
      [fieldName]: args.value
    }} onFieldsChange={() => {
      const newValue = form.getFieldValue(fieldName);
      setCurrentValue(newValue);
    }}>
        <Form.Item name={fieldName} label="Date">
          <DateInput id={fieldName} value={form.getFieldValue(fieldName)} onChange={handleChange} showTime={args.showTime} required={args.required} readOnly={args.readOnly} timezone={args.timezone} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {currentValue}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>showTime: {args.showTime?.toString()}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(Ke=(Je=x.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Qe,Xe,Ze;s.parameters={...s.parameters,docs:{...(Qe=s.parameters)==null?void 0:Qe.docs,source:{originalSource:`args => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateField";
  const [currentValue, setCurrentValue] = useState<string | undefined>(args.value);
  useEffect(() => {
    if (args.value) {
      form.setFieldsValue({
        [fieldName]: args.value
      });
      setCurrentValue(args.value);
    }
  }, [args.value, form, fieldName]);
  const handleChange = (value: string | null | undefined) => {
    form.setFieldValue(fieldName, value);
    setCurrentValue(value || undefined);
    args.onChange?.(value);
  };
  return <LocaleContextProvider locale={args.locale}>
      <div style={{
      width: 300
    }}>
        <Form form={form} initialValues={{
        [fieldName]: args.value
      }} onFieldsChange={() => {
        const newValue = form.getFieldValue(fieldName);
        setCurrentValue(newValue);
      }}>
          <Form.Item name={fieldName} label="Date">
            <DateInput id={fieldName} value={form.getFieldValue(fieldName)} onChange={handleChange} showTime={args.showTime} required={args.required} readOnly={args.readOnly} timezone={args.timezone} />
          </Form.Item>
          <div style={{
          marginTop: 20
        }}>
            <strong>Debug Information:</strong>
            <pre>String value: {currentValue}</pre>
            <pre>locale: {args.locale}</pre>
            <pre>timezone: {args.timezone}</pre>
            <pre>showTime: {args.showTime?.toString()}</pre>
          </div>
        </Form>
      </div>
    </LocaleContextProvider>;
}`,...(Ze=(Xe=s.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var $e,en,nn;o.parameters={...o.parameters,docs:{...($e=o.parameters)==null?void 0:$e.docs,source:{originalSource:`args => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateField";
  const [currentValue, setCurrentValue] = useState<string | undefined>(args.value);
  useEffect(() => {
    if (args.value) {
      form.setFieldsValue({
        [fieldName]: args.value
      });
      setCurrentValue(args.value);
    }
  }, [args.value, form, fieldName]);
  const handleChange = (value: string | null | undefined) => {
    form.setFieldValue(fieldName, value);
    setCurrentValue(value || undefined);
    args.onChange?.(value);
  };
  return <LocaleContextProvider locale={args.locale}>
      <div style={{
      width: 300
    }}>
        <Form form={form} initialValues={{
        [fieldName]: args.value
      }} onFieldsChange={() => {
        const newValue = form.getFieldValue(fieldName);
        setCurrentValue(newValue);
      }}>
          <Form.Item name={fieldName} label="Date">
            <DateInput id={fieldName} value={form.getFieldValue(fieldName)} onChange={handleChange} showTime={args.showTime} required={args.required} readOnly={args.readOnly} timezone={args.timezone} />
          </Form.Item>
          <div style={{
          marginTop: 20
        }}>
            <strong>Debug Information:</strong>
            <pre>String value: {currentValue}</pre>
            <pre>locale: {args.locale}</pre>
            <pre>timezone: {args.timezone}</pre>
            <pre>showTime: {args.showTime?.toString()}</pre>
          </div>
        </Form>
      </div>
    </LocaleContextProvider>;
}`,...(nn=(en=o.parameters)==null?void 0:en.docs)==null?void 0:nn.source}}};var rn,an,ln;u.parameters={...u.parameters,docs:{...(rn=u.parameters)==null?void 0:rn.docs,source:{originalSource:`args => {
  const [form] = Form.useForm();
  const fieldName = args.id || "dateField";
  const [currentValue, setCurrentValue] = useState<string | undefined>(args.value);
  useEffect(() => {
    if (args.value) {
      form.setFieldsValue({
        [fieldName]: args.value
      });
      setCurrentValue(args.value);
    }
  }, [args.value, form, fieldName]);
  const handleChange = (value: string | null | undefined) => {
    form.setFieldValue(fieldName, value);
    setCurrentValue(value || undefined);
    args.onChange?.(value);
  };
  return <LocaleContextProvider locale={args.locale}>
      <div style={{
      width: 300
    }}>
        <Form form={form} initialValues={{
        [fieldName]: args.value
      }} onFieldsChange={() => {
        const newValue = form.getFieldValue(fieldName);
        setCurrentValue(newValue);
      }}>
          <Form.Item name={fieldName} label="Date">
            <DateInput id={fieldName} value={form.getFieldValue(fieldName)} onChange={handleChange} showTime={args.showTime} required={args.required} readOnly={args.readOnly} timezone={args.timezone} />
          </Form.Item>
          <div style={{
          marginTop: 20
        }}>
            <strong>Debug Information:</strong>
            <pre>String value: {currentValue}</pre>
            <pre>locale: {args.locale}</pre>
            <pre>timezone: {args.timezone}</pre>
            <pre>showTime: {args.showTime?.toString()}</pre>
          </div>
        </Form>
      </div>
    </LocaleContextProvider>;
}`,...(ln=(an=u.parameters)==null?void 0:an.docs)==null?void 0:ln.source}}};const lr=["Basic","Required","ReadOnly","InvalidDate","DateOnly","TimezoneInOouiMadrid","TimezoneInOouiTokyo","TimezoneInOouiUTC","DSTStartMadrid","DSTEndMadrid","UTCReference","DSTMadridSpringForward","DSTMadridFallBackFirst","DSTMadridFallBackSecond","DSTUtcSpringForward","DSTUtcFallBack","SpecificUTCTime","UTCToMadridDST","UTCMidnightTransition","UTCToTokyoNextDay","UTCLastSecond","LocaleSpanish","LocaleCatalan","LocaleEnglish"];export{c as Basic,T as DSTEndMadrid,z as DSTMadridFallBackFirst,O as DSTMadridFallBackSecond,y as DSTMadridSpringForward,N as DSTStartMadrid,I as DSTUtcFallBack,q as DSTUtcSpringForward,V as DateOnly,h as InvalidDate,o as LocaleCatalan,u as LocaleEnglish,s as LocaleSpanish,v as ReadOnly,p as Required,D as SpecificUTCTime,F as TimezoneInOouiMadrid,C as TimezoneInOouiTokyo,w as TimezoneInOouiUTC,x as UTCLastSecond,E as UTCMidnightTransition,S as UTCReference,b as UTCToMadridDST,M as UTCToTokyoNextDay,lr as __namedExportsOrder,ir as default};
