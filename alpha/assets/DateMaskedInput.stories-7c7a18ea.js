import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as P}from"./index-76fb7be0.js";import{D as d,T as yn}from"./DateMaskedInput-e1b7fdac.js";import{L as hn}from"./LocaleContext-6a38b50b.js";import{F as s}from"./index-dfc37164.js";import{D as U}from"./index-5f48d75f.js";import{S as B}from"./index-a91dba4b.js";import"./_commonjsHelpers-de833af9.js";import"./Link-bcf6968b.js";import"./assertThisInitialized-11245cea.js";import"./EditOutlined-401a1613.js";import"./AntdIcon-eb4d8409.js";import"./genStyleUtils-28a6e765.js";import"./index-86654eeb.js";import"./index-356ca88b.js";import"./index-da03a860.js";import"./index-6141dcc2.js";import"./context-b387624d.js";import"./wrapNativeSuper-e3a961e5.js";import"./useLocale-8b2da478.js";import"./index-df709f45.js";import"./Compact-a3364df5.js";import"./useSize-06920fd3.js";import"./reactNode-9d24d027.js";import"./EnterOutlined-e9c5832e.js";import"./KeyCode-6413d982.js";import"./TextArea-4f362629.js";import"./CloseCircleFilled-d4e8e9a6.js";import"./CloseCircleFilled-257b815e.js";import"./useVariants-6604f14b.js";import"./useCSSVarCls-56ee7f0e.js";import"./index-8c4dacd9.js";import"./compact-item-869a41a4.js";import"./LoadingOutlined-722c611a.js";import"./CheckOutlined-e9194b0d.js";import"./CheckOutlined-c7cbec95.js";import"./CopyOutlined-d9215ad4.js";import"./useRequiredStyle-3e233289.js";import"./PurePanel-dc31f1e9.js";import"./SwapRightOutlined-6c6c9e02.js";import"./SearchOutlined-a215f538.js";import"./SearchOutlined-11b57711.js";import"./Overflow-77a29d28.js";import"./useIcons-d6980080.js";import"./CloseOutlined-55cb7de5.js";import"./CloseOutlined-9385a5da.js";import"./DownOutlined-3b14e6aa.js";import"./button-a7ab0380.js";import"./index-eacc853e.js";import"./index-3f9a60cd.js";import"./index-8d47fad6.js";import"./styled-components.browser.esm-a237e5f9.js";import"./CloseCircleFilled-6d245257.js";import"./AntdIcon-16889e64.js";import"./collapse-97de76d4.js";import"./row-8e2bb960.js";import"./QuestionCircleOutlined-04e9cd25.js";import"./CheckCircleFilled-f46cad22.js";import"./CheckCircleFilled-1392c7ce.js";import"./ExclamationCircleFilled-b40e1c9f.js";import"./ExclamationCircleFilled-eba6e68e.js";const{Text:r,Title:mn,Paragraph:Sn}=yn,Mr={title:"Components/Widgets/Date/DateMaskedInput",component:d,parameters:{layout:"centered",actions:{disable:!0}},argTypes:{type:{control:"select",options:["date","datetime","time"],description:"Type of input"},timezone:{control:"select",options:["UTC","Europe/Madrid","Europe/London","America/New_York","Asia/Tokyo","Australia/Sydney"],description:"Timezone (for date/datetime)"},required:{control:"boolean",description:"Shows yellow background when required"},readOnly:{control:"boolean",description:"Disables the input"},useZeros:{control:"boolean",description:"For time type: use 00:00:00 instead of current time"}}},t=n=>{var l,a;const[u,i]=P.useState(n.value),{onChange:o,...c}=n;return e.jsx("div",{style:{width:300},children:e.jsxs(s,{layout:"vertical",children:[e.jsx(s.Item,{label:"Date",children:e.jsx(d,{...c,value:u,onChange:p=>i(p||void 0)})}),e.jsxs("div",{style:{marginTop:20},children:[e.jsx("strong",{children:"Debug Information:"}),e.jsxs("pre",{children:["String value: ",u]}),e.jsxs("pre",{children:["timezone: ",n.timezone]}),e.jsxs("pre",{children:["type: ",n.type]}),e.jsxs("pre",{children:["required: ",(l=n.required)==null?void 0:l.toString()]}),e.jsxs("pre",{children:["readOnly: ",(a=n.readOnly)==null?void 0:a.toString()]})]})]})})},y=t.bind({});y.args={type:"datetime",id:"basic-date",value:"2024-03-10 14:30:00",required:!1,readOnly:!1,timezone:"Europe/Madrid"};const h=t.bind({});h.args={type:"datetime",id:"required-date",value:"2024-03-10 14:30:00",required:!0,readOnly:!1,timezone:"Europe/Madrid"};const S=t.bind({});S.args={type:"datetime",id:"readonly-date",value:"2024-03-10 14:30:00",required:!1,readOnly:!0,timezone:"Europe/Madrid"};const C=t.bind({});C.args={type:"datetime",id:"invalid-date",value:"invalid-date",required:!1,readOnly:!1,timezone:"Europe/Madrid"};const f=t.bind({});f.args={type:"date",id:"date-only",value:"2024-03-10",required:!1,readOnly:!1,timezone:"Europe/Madrid"};const x=t.bind({});x.args={type:"datetime",id:"madrid-tz",value:"2025-05-26 12:00:00",timezone:"Europe/Madrid"};const T=t.bind({});T.args={type:"datetime",id:"tokyo-tz",value:"2025-05-26 21:00:00",timezone:"Asia/Tokyo"};const I=t.bind({});I.args={type:"datetime",id:"utc-tz",value:"2025-05-26 12:00:00",timezone:"UTC"};const D=t.bind({});D.args={type:"datetime",id:"dst-start-madrid",value:"2025-03-30 01:59:59",timezone:"Europe/Madrid"};const b=t.bind({});b.args={type:"datetime",id:"dst-end-madrid",value:"2025-10-26 02:59:59",timezone:"Europe/Madrid"};const F=t.bind({});F.args={type:"datetime",id:"utc-reference",value:"2025-03-30 00:59:59",timezone:"UTC"};const k=t.bind({});k.args={type:"datetime",id:"dst-madrid-spring",value:"2025-03-30 02:00:00",timezone:"Europe/Madrid"};const M=t.bind({});M.args={type:"datetime",id:"dst-madrid-fall-first",value:"2025-10-26 02:00:00",timezone:"Europe/Madrid"};const j=t.bind({});j.args={type:"datetime",id:"dst-madrid-fall-second",value:"2025-10-26 02:00:00",timezone:"Europe/Madrid"};const z=t.bind({});z.args={type:"datetime",id:"dst-utc-spring",value:"2025-03-30 01:00:00",timezone:"UTC"};const w=t.bind({});w.args={type:"datetime",id:"dst-utc-fall",value:"2025-10-26 01:00:00",timezone:"UTC"};const V=t.bind({});V.args={type:"datetime",id:"specific-utc",value:"2023-03-26 02:00:00",timezone:"UTC"};const A=t.bind({});A.args={type:"datetime",id:"utc-to-madrid-dst",value:"2023-03-26 02:00:00",timezone:"Europe/Madrid"};const O=t.bind({});O.args={type:"datetime",id:"utc-midnight",value:"2023-03-26 00:00:00",timezone:"UTC"};const q=t.bind({});q.args={type:"datetime",id:"utc-to-tokyo",value:"2023-03-26 15:00:00",timezone:"Asia/Tokyo"};const E=t.bind({});E.args={type:"datetime",id:"utc-last-second",value:"2023-03-26 23:59:59",timezone:"UTC"};const Cn=()=>{const[n,u]=P.useState({}),i=(o,c)=>{u(l=>({...l,[o]:c||void 0}))};return e.jsxs("div",{style:{width:550},children:[e.jsx(mn,{level:4,children:"Autocomplete Scenarios"}),e.jsx(Sn,{type:"secondary",children:"Type partial values and press Enter to see autocomplete in action."}),e.jsx(U,{orientation:"left",children:"Date"}),e.jsxs(B,{direction:"vertical",style:{width:"100%"},children:[e.jsxs(s.Item,{label:e.jsxs(e.Fragment,{children:["Type ",e.jsx(r,{code:!0,children:"15"})," → autocompletes month/year"]}),style:{marginBottom:8},children:[e.jsx(d,{type:"date",id:"auto-date-1",value:n.date1,onChange:o=>i("date1",o)}),n.date1&&e.jsxs(r,{type:"success",children:[" → ",n.date1]})]}),e.jsxs(s.Item,{label:e.jsxs(e.Fragment,{children:["Type ",e.jsx(r,{code:!0,children:"15/06"})," → autocompletes year"]}),style:{marginBottom:8},children:[e.jsx(d,{type:"date",id:"auto-date-2",value:n.date2,onChange:o=>i("date2",o)}),n.date2&&e.jsxs(r,{type:"success",children:[" → ",n.date2]})]})]}),e.jsx(U,{orientation:"left",children:"DateTime"}),e.jsx(B,{direction:"vertical",style:{width:"100%"},children:e.jsxs(s.Item,{label:e.jsxs(e.Fragment,{children:["Type ",e.jsx(r,{code:!0,children:"15/06/2024 14"})," → autocompletes min:sec"]}),style:{marginBottom:8},children:[e.jsx(d,{type:"datetime",id:"auto-datetime-1",value:n.datetime1,onChange:o=>i("datetime1",o)}),n.datetime1&&e.jsxs(r,{type:"success",children:[" → ",n.datetime1]})]})}),e.jsx(U,{orientation:"left",children:"Time"}),e.jsxs(B,{direction:"vertical",style:{width:"100%"},children:[e.jsxs(s.Item,{label:e.jsxs(e.Fragment,{children:["Type ",e.jsx(r,{code:!0,children:"14"})," → autocompletes min:sec"]}),style:{marginBottom:8},children:[e.jsx(d,{type:"time",id:"auto-time-1",value:n.time1,onChange:o=>i("time1",o)}),n.time1&&e.jsxs(r,{type:"success",children:[" → ",n.time1]})]}),e.jsxs(s.Item,{label:e.jsxs(e.Fragment,{children:["Type ",e.jsx(r,{code:!0,children:"14:30"})," → autocompletes seconds"]}),style:{marginBottom:8},children:[e.jsx(d,{type:"time",id:"auto-time-2",value:n.time2,onChange:o=>i("time2",o)}),n.time2&&e.jsxs(r,{type:"success",children:[" → ",n.time2]})]})]})]})},_=Cn.bind({});_.parameters={docs:{description:{story:"Interactive demo showing autocomplete for all input types. Users can enter partial values and the component fills in the rest from current date/time."}}};const fn=()=>{const[n,u]=P.useState({clear:"2024-06-15"}),[i,o]=P.useState([]),c=a=>{o(p=>[...p.slice(-9),`${new Date().toLocaleTimeString()}: ${a}`])},l=(a,p)=>{u(vn=>({...vn,[a]:p||void 0})),c(`${a}: ${p??"null"}`)};return e.jsxs("div",{style:{width:550},children:[e.jsx(mn,{level:4,children:"Keyboard & Mouse Behavior"}),e.jsxs(s,{layout:"vertical",children:[e.jsxs(s.Item,{label:e.jsxs(e.Fragment,{children:[e.jsx(r,{strong:!0,children:"1. Enter Key"}),e.jsx(r,{type:"secondary",children:' - Type "23" then Enter'})]}),children:[e.jsx(d,{type:"date",id:"test-enter",value:n.enter,onChange:a=>l("enter",a)}),n.enter&&e.jsxs(r,{type:"success",children:[" → ",n.enter]})]}),e.jsxs(s.Item,{label:e.jsxs(e.Fragment,{children:[e.jsx(r,{strong:!0,children:"2. Blur"}),e.jsxs(r,{type:"secondary",children:[" ",'- Type "10" then click outside']})]}),children:[e.jsx(d,{type:"date",id:"test-blur",value:n.blur,onChange:a=>l("blur",a)}),n.blur&&e.jsxs(r,{type:"success",children:[" → ",n.blur]})]}),e.jsxs(s.Item,{label:e.jsxs(e.Fragment,{children:[e.jsx(r,{strong:!0,children:"3. Double-click"}),e.jsxs(r,{type:"secondary",children:[" ",'- Type "25/12" then double-click']})]}),children:[e.jsx(d,{type:"date",id:"test-dblclick",value:n.dblclick,onChange:a=>l("dblclick",a)}),n.dblclick&&e.jsxs(r,{type:"success",children:[" → ",n.dblclick]})]}),e.jsxs(s.Item,{label:e.jsxs(e.Fragment,{children:[e.jsx(r,{strong:!0,children:"4. Clear value"}),e.jsxs(r,{type:"secondary",children:[" ","- Select all, backspace, blur (or hover + click X)"]})]}),children:[e.jsx(d,{type:"date",id:"test-clear",value:n.clear,onChange:a=>l("clear",a)}),e.jsxs(r,{type:n.clear?"success":"warning",children:[" ","→ ",n.clear||"(empty)"]})]})]}),e.jsxs("div",{style:{marginTop:16,padding:12,background:"#f0f0f0",borderRadius:6,fontFamily:"monospace",fontSize:12,maxHeight:120,overflowY:"auto"},children:[e.jsx(r,{strong:!0,children:"Event Log:"}),i.length===0?e.jsx("div",{style:{color:"#888"},children:"No events yet..."}):i.map((a,p)=>e.jsx("div",{children:a},p))]})]})},L=fn.bind({});L.parameters={docs:{description:{story:`
Test keyboard and mouse behaviors:
- **Enter**: Autocomplete and commit
- **Escape**: Commit and move to next element
- **Blur**: Autocomplete and commit
- **Double-click**: Autocomplete and commit
- **Clear**: Delete content + blur, or hover + click X icon
      `}}};const R=n=>{const[u,i]=P.useState(n.value),{onChange:o,...c}=n;return e.jsx(hn,{locale:n.locale,children:e.jsx("div",{style:{width:300},children:e.jsxs(s,{layout:"vertical",children:[e.jsx(s.Item,{label:"Date",children:e.jsx(d,{...c,value:u,onChange:l=>i(l||void 0)})}),e.jsxs("div",{style:{marginTop:20},children:[e.jsx("strong",{children:"Debug Information:"}),e.jsxs("pre",{children:["String value: ",u]}),e.jsxs("pre",{children:["locale: ",n.locale]}),e.jsxs("pre",{children:["timezone: ",n.timezone]}),e.jsxs("pre",{children:["type: ",n.type]})]})]})})})},g=R.bind({});g.args={type:"datetime",id:"locale-spanish",value:"2024-03-10 14:30:00",required:!1,readOnly:!1,timezone:"Europe/Madrid",locale:"es_ES"};g.storyName="Locale: Spanish (es_ES)";const m=R.bind({});m.args={type:"datetime",id:"locale-catalan",value:"2024-03-10 14:30:00",required:!1,readOnly:!1,timezone:"Europe/Madrid",locale:"ca_ES"};m.storyName="Locale: Catalan (ca_ES)";const v=R.bind({});v.args={type:"datetime",id:"locale-english",value:"2024-03-10 14:30:00",required:!1,readOnly:!1,timezone:"Europe/Madrid",locale:"en_US"};v.storyName="Locale: English (en_US)";var N,$,K;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | undefined>(args.value);
  // Exclude auto-generated onChange action from args to avoid conflicts
  const {
    onChange: _onChange,
    ...restArgs
  } = (args as DateMaskedInputProps & {
    onChange?: unknown;
  });
  return <div style={{
    width: 300
  }}>
      <Form layout="vertical">
        <Form.Item label="Date">
          <DateMaskedInput {...restArgs} value={value} onChange={v => setValue(v || undefined)} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {value}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>type: {args.type}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(K=($=y.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var X,Y,H;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | undefined>(args.value);
  // Exclude auto-generated onChange action from args to avoid conflicts
  const {
    onChange: _onChange,
    ...restArgs
  } = (args as DateMaskedInputProps & {
    onChange?: unknown;
  });
  return <div style={{
    width: 300
  }}>
      <Form layout="vertical">
        <Form.Item label="Date">
          <DateMaskedInput {...restArgs} value={value} onChange={v => setValue(v || undefined)} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {value}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>type: {args.type}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(H=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:H.source}}};var W,Z,G;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | undefined>(args.value);
  // Exclude auto-generated onChange action from args to avoid conflicts
  const {
    onChange: _onChange,
    ...restArgs
  } = (args as DateMaskedInputProps & {
    onChange?: unknown;
  });
  return <div style={{
    width: 300
  }}>
      <Form layout="vertical">
        <Form.Item label="Date">
          <DateMaskedInput {...restArgs} value={value} onChange={v => setValue(v || undefined)} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {value}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>type: {args.type}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(G=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};var J,Q,ee;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | undefined>(args.value);
  // Exclude auto-generated onChange action from args to avoid conflicts
  const {
    onChange: _onChange,
    ...restArgs
  } = (args as DateMaskedInputProps & {
    onChange?: unknown;
  });
  return <div style={{
    width: 300
  }}>
      <Form layout="vertical">
        <Form.Item label="Date">
          <DateMaskedInput {...restArgs} value={value} onChange={v => setValue(v || undefined)} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {value}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>type: {args.type}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(ee=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var ne,re,te;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | undefined>(args.value);
  // Exclude auto-generated onChange action from args to avoid conflicts
  const {
    onChange: _onChange,
    ...restArgs
  } = (args as DateMaskedInputProps & {
    onChange?: unknown;
  });
  return <div style={{
    width: 300
  }}>
      <Form layout="vertical">
        <Form.Item label="Date">
          <DateMaskedInput {...restArgs} value={value} onChange={v => setValue(v || undefined)} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {value}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>type: {args.type}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(te=(re=f.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ae,oe,se;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | undefined>(args.value);
  // Exclude auto-generated onChange action from args to avoid conflicts
  const {
    onChange: _onChange,
    ...restArgs
  } = (args as DateMaskedInputProps & {
    onChange?: unknown;
  });
  return <div style={{
    width: 300
  }}>
      <Form layout="vertical">
        <Form.Item label="Date">
          <DateMaskedInput {...restArgs} value={value} onChange={v => setValue(v || undefined)} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {value}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>type: {args.type}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(se=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,de,le;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | undefined>(args.value);
  // Exclude auto-generated onChange action from args to avoid conflicts
  const {
    onChange: _onChange,
    ...restArgs
  } = (args as DateMaskedInputProps & {
    onChange?: unknown;
  });
  return <div style={{
    width: 300
  }}>
      <Form layout="vertical">
        <Form.Item label="Date">
          <DateMaskedInput {...restArgs} value={value} onChange={v => setValue(v || undefined)} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {value}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>type: {args.type}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(le=(de=T.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var ue,pe,ce;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | undefined>(args.value);
  // Exclude auto-generated onChange action from args to avoid conflicts
  const {
    onChange: _onChange,
    ...restArgs
  } = (args as DateMaskedInputProps & {
    onChange?: unknown;
  });
  return <div style={{
    width: 300
  }}>
      <Form layout="vertical">
        <Form.Item label="Date">
          <DateMaskedInput {...restArgs} value={value} onChange={v => setValue(v || undefined)} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {value}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>type: {args.type}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(ce=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var ge,me,ve;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | undefined>(args.value);
  // Exclude auto-generated onChange action from args to avoid conflicts
  const {
    onChange: _onChange,
    ...restArgs
  } = (args as DateMaskedInputProps & {
    onChange?: unknown;
  });
  return <div style={{
    width: 300
  }}>
      <Form layout="vertical">
        <Form.Item label="Date">
          <DateMaskedInput {...restArgs} value={value} onChange={v => setValue(v || undefined)} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {value}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>type: {args.type}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(ve=(me=D.parameters)==null?void 0:me.docs)==null?void 0:ve.source}}};var ye,he,Se;b.parameters={...b.parameters,docs:{...(ye=b.parameters)==null?void 0:ye.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | undefined>(args.value);
  // Exclude auto-generated onChange action from args to avoid conflicts
  const {
    onChange: _onChange,
    ...restArgs
  } = (args as DateMaskedInputProps & {
    onChange?: unknown;
  });
  return <div style={{
    width: 300
  }}>
      <Form layout="vertical">
        <Form.Item label="Date">
          <DateMaskedInput {...restArgs} value={value} onChange={v => setValue(v || undefined)} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {value}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>type: {args.type}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(Se=(he=b.parameters)==null?void 0:he.docs)==null?void 0:Se.source}}};var Ce,fe,xe;F.parameters={...F.parameters,docs:{...(Ce=F.parameters)==null?void 0:Ce.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | undefined>(args.value);
  // Exclude auto-generated onChange action from args to avoid conflicts
  const {
    onChange: _onChange,
    ...restArgs
  } = (args as DateMaskedInputProps & {
    onChange?: unknown;
  });
  return <div style={{
    width: 300
  }}>
      <Form layout="vertical">
        <Form.Item label="Date">
          <DateMaskedInput {...restArgs} value={value} onChange={v => setValue(v || undefined)} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {value}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>type: {args.type}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(xe=(fe=F.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var Te,Ie,De;k.parameters={...k.parameters,docs:{...(Te=k.parameters)==null?void 0:Te.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | undefined>(args.value);
  // Exclude auto-generated onChange action from args to avoid conflicts
  const {
    onChange: _onChange,
    ...restArgs
  } = (args as DateMaskedInputProps & {
    onChange?: unknown;
  });
  return <div style={{
    width: 300
  }}>
      <Form layout="vertical">
        <Form.Item label="Date">
          <DateMaskedInput {...restArgs} value={value} onChange={v => setValue(v || undefined)} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {value}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>type: {args.type}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(De=(Ie=k.parameters)==null?void 0:Ie.docs)==null?void 0:De.source}}};var be,Fe,ke;M.parameters={...M.parameters,docs:{...(be=M.parameters)==null?void 0:be.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | undefined>(args.value);
  // Exclude auto-generated onChange action from args to avoid conflicts
  const {
    onChange: _onChange,
    ...restArgs
  } = (args as DateMaskedInputProps & {
    onChange?: unknown;
  });
  return <div style={{
    width: 300
  }}>
      <Form layout="vertical">
        <Form.Item label="Date">
          <DateMaskedInput {...restArgs} value={value} onChange={v => setValue(v || undefined)} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {value}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>type: {args.type}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(ke=(Fe=M.parameters)==null?void 0:Fe.docs)==null?void 0:ke.source}}};var Me,je,ze;j.parameters={...j.parameters,docs:{...(Me=j.parameters)==null?void 0:Me.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | undefined>(args.value);
  // Exclude auto-generated onChange action from args to avoid conflicts
  const {
    onChange: _onChange,
    ...restArgs
  } = (args as DateMaskedInputProps & {
    onChange?: unknown;
  });
  return <div style={{
    width: 300
  }}>
      <Form layout="vertical">
        <Form.Item label="Date">
          <DateMaskedInput {...restArgs} value={value} onChange={v => setValue(v || undefined)} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {value}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>type: {args.type}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(ze=(je=j.parameters)==null?void 0:je.docs)==null?void 0:ze.source}}};var we,Ve,Ae;z.parameters={...z.parameters,docs:{...(we=z.parameters)==null?void 0:we.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | undefined>(args.value);
  // Exclude auto-generated onChange action from args to avoid conflicts
  const {
    onChange: _onChange,
    ...restArgs
  } = (args as DateMaskedInputProps & {
    onChange?: unknown;
  });
  return <div style={{
    width: 300
  }}>
      <Form layout="vertical">
        <Form.Item label="Date">
          <DateMaskedInput {...restArgs} value={value} onChange={v => setValue(v || undefined)} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {value}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>type: {args.type}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(Ae=(Ve=z.parameters)==null?void 0:Ve.docs)==null?void 0:Ae.source}}};var Oe,qe,Ee;w.parameters={...w.parameters,docs:{...(Oe=w.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | undefined>(args.value);
  // Exclude auto-generated onChange action from args to avoid conflicts
  const {
    onChange: _onChange,
    ...restArgs
  } = (args as DateMaskedInputProps & {
    onChange?: unknown;
  });
  return <div style={{
    width: 300
  }}>
      <Form layout="vertical">
        <Form.Item label="Date">
          <DateMaskedInput {...restArgs} value={value} onChange={v => setValue(v || undefined)} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {value}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>type: {args.type}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(Ee=(qe=w.parameters)==null?void 0:qe.docs)==null?void 0:Ee.source}}};var _e,Le,Pe;V.parameters={...V.parameters,docs:{...(_e=V.parameters)==null?void 0:_e.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | undefined>(args.value);
  // Exclude auto-generated onChange action from args to avoid conflicts
  const {
    onChange: _onChange,
    ...restArgs
  } = (args as DateMaskedInputProps & {
    onChange?: unknown;
  });
  return <div style={{
    width: 300
  }}>
      <Form layout="vertical">
        <Form.Item label="Date">
          <DateMaskedInput {...restArgs} value={value} onChange={v => setValue(v || undefined)} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {value}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>type: {args.type}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(Pe=(Le=V.parameters)==null?void 0:Le.docs)==null?void 0:Pe.source}}};var Ue,Be,Re;A.parameters={...A.parameters,docs:{...(Ue=A.parameters)==null?void 0:Ue.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | undefined>(args.value);
  // Exclude auto-generated onChange action from args to avoid conflicts
  const {
    onChange: _onChange,
    ...restArgs
  } = (args as DateMaskedInputProps & {
    onChange?: unknown;
  });
  return <div style={{
    width: 300
  }}>
      <Form layout="vertical">
        <Form.Item label="Date">
          <DateMaskedInput {...restArgs} value={value} onChange={v => setValue(v || undefined)} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {value}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>type: {args.type}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(Re=(Be=A.parameters)==null?void 0:Be.docs)==null?void 0:Re.source}}};var Ne,$e,Ke;O.parameters={...O.parameters,docs:{...(Ne=O.parameters)==null?void 0:Ne.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | undefined>(args.value);
  // Exclude auto-generated onChange action from args to avoid conflicts
  const {
    onChange: _onChange,
    ...restArgs
  } = (args as DateMaskedInputProps & {
    onChange?: unknown;
  });
  return <div style={{
    width: 300
  }}>
      <Form layout="vertical">
        <Form.Item label="Date">
          <DateMaskedInput {...restArgs} value={value} onChange={v => setValue(v || undefined)} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {value}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>type: {args.type}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(Ke=($e=O.parameters)==null?void 0:$e.docs)==null?void 0:Ke.source}}};var Xe,Ye,He;q.parameters={...q.parameters,docs:{...(Xe=q.parameters)==null?void 0:Xe.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | undefined>(args.value);
  // Exclude auto-generated onChange action from args to avoid conflicts
  const {
    onChange: _onChange,
    ...restArgs
  } = (args as DateMaskedInputProps & {
    onChange?: unknown;
  });
  return <div style={{
    width: 300
  }}>
      <Form layout="vertical">
        <Form.Item label="Date">
          <DateMaskedInput {...restArgs} value={value} onChange={v => setValue(v || undefined)} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {value}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>type: {args.type}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(He=(Ye=q.parameters)==null?void 0:Ye.docs)==null?void 0:He.source}}};var We,Ze,Ge;E.parameters={...E.parameters,docs:{...(We=E.parameters)==null?void 0:We.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | undefined>(args.value);
  // Exclude auto-generated onChange action from args to avoid conflicts
  const {
    onChange: _onChange,
    ...restArgs
  } = (args as DateMaskedInputProps & {
    onChange?: unknown;
  });
  return <div style={{
    width: 300
  }}>
      <Form layout="vertical">
        <Form.Item label="Date">
          <DateMaskedInput {...restArgs} value={value} onChange={v => setValue(v || undefined)} />
        </Form.Item>
        <div style={{
        marginTop: 20
      }}>
          <strong>Debug Information:</strong>
          <pre>String value: {value}</pre>
          <pre>timezone: {args.timezone}</pre>
          <pre>type: {args.type}</pre>
          <pre>required: {args.required?.toString()}</pre>
          <pre>readOnly: {args.readOnly?.toString()}</pre>
        </div>
      </Form>
    </div>;
}`,...(Ge=(Ze=E.parameters)==null?void 0:Ze.docs)==null?void 0:Ge.source}}};var Je,Qe,en;_.parameters={..._.parameters,docs:{...(Je=_.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  const [values, setValues] = useState<Record<string, string | undefined>>({});
  const updateValue = (key: string, value: string | null | undefined) => {
    setValues(prev => ({
      ...prev,
      [key]: value || undefined
    }));
  };
  return <div style={{
    width: 550
  }}>
      <Title level={4}>Autocomplete Scenarios</Title>
      <Paragraph type="secondary">
        Type partial values and press Enter to see autocomplete in action.
      </Paragraph>

      <Divider orientation="left">Date</Divider>
      <Space direction="vertical" style={{
      width: "100%"
    }}>
        <Form.Item label={<>
              Type <Text code>15</Text> → autocompletes month/year
            </>} style={{
        marginBottom: 8
      }}>
          <DateMaskedInput type="date" id="auto-date-1" value={values["date1"]} onChange={v => updateValue("date1", v)} />
          {values["date1"] && <Text type="success"> → {values["date1"]}</Text>}
        </Form.Item>
        <Form.Item label={<>
              Type <Text code>15/06</Text> → autocompletes year
            </>} style={{
        marginBottom: 8
      }}>
          <DateMaskedInput type="date" id="auto-date-2" value={values["date2"]} onChange={v => updateValue("date2", v)} />
          {values["date2"] && <Text type="success"> → {values["date2"]}</Text>}
        </Form.Item>
      </Space>

      <Divider orientation="left">DateTime</Divider>
      <Space direction="vertical" style={{
      width: "100%"
    }}>
        <Form.Item label={<>
              Type <Text code>15/06/2024 14</Text> → autocompletes min:sec
            </>} style={{
        marginBottom: 8
      }}>
          <DateMaskedInput type="datetime" id="auto-datetime-1" value={values["datetime1"]} onChange={v => updateValue("datetime1", v)} />
          {values["datetime1"] && <Text type="success"> → {values["datetime1"]}</Text>}
        </Form.Item>
      </Space>

      <Divider orientation="left">Time</Divider>
      <Space direction="vertical" style={{
      width: "100%"
    }}>
        <Form.Item label={<>
              Type <Text code>14</Text> → autocompletes min:sec
            </>} style={{
        marginBottom: 8
      }}>
          <DateMaskedInput type="time" id="auto-time-1" value={values["time1"]} onChange={v => updateValue("time1", v)} />
          {values["time1"] && <Text type="success"> → {values["time1"]}</Text>}
        </Form.Item>
        <Form.Item label={<>
              Type <Text code>14:30</Text> → autocompletes seconds
            </>} style={{
        marginBottom: 8
      }}>
          <DateMaskedInput type="time" id="auto-time-2" value={values["time2"]} onChange={v => updateValue("time2", v)} />
          {values["time2"] && <Text type="success"> → {values["time2"]}</Text>}
        </Form.Item>
      </Space>
    </div>;
}`,...(en=(Qe=_.parameters)==null?void 0:Qe.docs)==null?void 0:en.source}}};var nn,rn,tn;L.parameters={...L.parameters,docs:{...(nn=L.parameters)==null?void 0:nn.docs,source:{originalSource:`() => {
  const [values, setValues] = useState<Record<string, string | undefined>>({
    clear: "2024-06-15"
  });
  const [logs, setLogs] = useState<string[]>([]);
  const addLog = (msg: string) => {
    setLogs(prev => [...prev.slice(-9), \`\${new Date().toLocaleTimeString()}: \${msg}\`]);
  };
  const updateValue = (key: string, value: string | null | undefined) => {
    setValues(prev => ({
      ...prev,
      [key]: value || undefined
    }));
    addLog(\`\${key}: \${value ?? "null"}\`);
  };
  return <div style={{
    width: 550
  }}>
      <Title level={4}>Keyboard & Mouse Behavior</Title>

      <Form layout="vertical">
        <Form.Item label={<>
              <Text strong>1. Enter Key</Text>
              <Text type="secondary"> - Type &quot;23&quot; then Enter</Text>
            </>}>
          <DateMaskedInput type="date" id="test-enter" value={values["enter"]} onChange={v => updateValue("enter", v)} />
          {values["enter"] && <Text type="success"> → {values["enter"]}</Text>}
        </Form.Item>

        <Form.Item label={<>
              <Text strong>2. Blur</Text>
              <Text type="secondary">
                {" "}
                - Type &quot;10&quot; then click outside
              </Text>
            </>}>
          <DateMaskedInput type="date" id="test-blur" value={values["blur"]} onChange={v => updateValue("blur", v)} />
          {values["blur"] && <Text type="success"> → {values["blur"]}</Text>}
        </Form.Item>

        <Form.Item label={<>
              <Text strong>3. Double-click</Text>
              <Text type="secondary">
                {" "}
                - Type &quot;25/12&quot; then double-click
              </Text>
            </>}>
          <DateMaskedInput type="date" id="test-dblclick" value={values["dblclick"]} onChange={v => updateValue("dblclick", v)} />
          {values["dblclick"] && <Text type="success"> → {values["dblclick"]}</Text>}
        </Form.Item>

        <Form.Item label={<>
              <Text strong>4. Clear value</Text>
              <Text type="secondary">
                {" "}
                - Select all, backspace, blur (or hover + click X)
              </Text>
            </>}>
          <DateMaskedInput type="date" id="test-clear" value={values["clear"]} onChange={v => updateValue("clear", v)} />
          <Text type={values["clear"] ? "success" : "warning"}>
            {" "}
            → {values["clear"] || "(empty)"}
          </Text>
        </Form.Item>
      </Form>

      <div style={{
      marginTop: 16,
      padding: 12,
      background: "#f0f0f0",
      borderRadius: 6,
      fontFamily: "monospace",
      fontSize: 12,
      maxHeight: 120,
      overflowY: "auto"
    }}>
        <Text strong>Event Log:</Text>
        {logs.length === 0 ? <div style={{
        color: "#888"
      }}>No events yet...</div> : logs.map((log, i) => <div key={i}>{log}</div>)}
      </div>
    </div>;
}`,...(tn=(rn=L.parameters)==null?void 0:rn.docs)==null?void 0:tn.source}}};var an,on,sn;g.parameters={...g.parameters,docs:{...(an=g.parameters)==null?void 0:an.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | undefined>(args.value);
  const {
    onChange: _onChange,
    ...restArgs
  } = (args as LocaleStoryArgs & {
    onChange?: unknown;
  });
  return <LocaleContextProvider locale={args.locale}>
      <div style={{
      width: 300
    }}>
        <Form layout="vertical">
          <Form.Item label="Date">
            <DateMaskedInput {...restArgs} value={value} onChange={v => setValue(v || undefined)} />
          </Form.Item>
          <div style={{
          marginTop: 20
        }}>
            <strong>Debug Information:</strong>
            <pre>String value: {value}</pre>
            <pre>locale: {args.locale}</pre>
            <pre>timezone: {args.timezone}</pre>
            <pre>type: {args.type}</pre>
          </div>
        </Form>
      </div>
    </LocaleContextProvider>;
}`,...(sn=(on=g.parameters)==null?void 0:on.docs)==null?void 0:sn.source}}};var dn,ln,un;m.parameters={...m.parameters,docs:{...(dn=m.parameters)==null?void 0:dn.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | undefined>(args.value);
  const {
    onChange: _onChange,
    ...restArgs
  } = (args as LocaleStoryArgs & {
    onChange?: unknown;
  });
  return <LocaleContextProvider locale={args.locale}>
      <div style={{
      width: 300
    }}>
        <Form layout="vertical">
          <Form.Item label="Date">
            <DateMaskedInput {...restArgs} value={value} onChange={v => setValue(v || undefined)} />
          </Form.Item>
          <div style={{
          marginTop: 20
        }}>
            <strong>Debug Information:</strong>
            <pre>String value: {value}</pre>
            <pre>locale: {args.locale}</pre>
            <pre>timezone: {args.timezone}</pre>
            <pre>type: {args.type}</pre>
          </div>
        </Form>
      </div>
    </LocaleContextProvider>;
}`,...(un=(ln=m.parameters)==null?void 0:ln.docs)==null?void 0:un.source}}};var pn,cn,gn;v.parameters={...v.parameters,docs:{...(pn=v.parameters)==null?void 0:pn.docs,source:{originalSource:`args => {
  const [value, setValue] = useState<string | undefined>(args.value);
  const {
    onChange: _onChange,
    ...restArgs
  } = (args as LocaleStoryArgs & {
    onChange?: unknown;
  });
  return <LocaleContextProvider locale={args.locale}>
      <div style={{
      width: 300
    }}>
        <Form layout="vertical">
          <Form.Item label="Date">
            <DateMaskedInput {...restArgs} value={value} onChange={v => setValue(v || undefined)} />
          </Form.Item>
          <div style={{
          marginTop: 20
        }}>
            <strong>Debug Information:</strong>
            <pre>String value: {value}</pre>
            <pre>locale: {args.locale}</pre>
            <pre>timezone: {args.timezone}</pre>
            <pre>type: {args.type}</pre>
          </div>
        </Form>
      </div>
    </LocaleContextProvider>;
}`,...(gn=(cn=v.parameters)==null?void 0:cn.docs)==null?void 0:gn.source}}};const jr=["Basic","Required","ReadOnly","InvalidDate","DateOnly","TimezoneInOouiMadrid","TimezoneInOouiTokyo","TimezoneInOouiUTC","DSTStartMadrid","DSTEndMadrid","UTCReference","DSTMadridSpringForward","DSTMadridFallBackFirst","DSTMadridFallBackSecond","DSTUtcSpringForward","DSTUtcFallBack","SpecificUTCTime","UTCToMadridDST","UTCMidnightTransition","UTCToTokyoNextDay","UTCLastSecond","Autocomplete","KeyboardBehavior","LocaleSpanish","LocaleCatalan","LocaleEnglish"];export{_ as Autocomplete,y as Basic,b as DSTEndMadrid,M as DSTMadridFallBackFirst,j as DSTMadridFallBackSecond,k as DSTMadridSpringForward,D as DSTStartMadrid,w as DSTUtcFallBack,z as DSTUtcSpringForward,f as DateOnly,C as InvalidDate,L as KeyboardBehavior,m as LocaleCatalan,v as LocaleEnglish,g as LocaleSpanish,S as ReadOnly,h as Required,V as SpecificUTCTime,x as TimezoneInOouiMadrid,T as TimezoneInOouiTokyo,I as TimezoneInOouiUTC,E as UTCLastSecond,O as UTCMidnightTransition,F as UTCReference,A as UTCToMadridDST,q as UTCToTokyoNextDay,jr as __namedExportsOrder,Mr as default};
