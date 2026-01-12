import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as F}from"./index-76fb7be0.js";import{D as Ke,T as Pe}from"./DateMaskedInput-e1b7fdac.js";import{M as Qe}from"./DateInput-78a135e2.js";import{d as Xe}from"./useRequiredStyle-3e233289.js";import{D as E}from"./index-5f48d75f.js";import{F as w}from"./index-dfc37164.js";import"./_commonjsHelpers-de833af9.js";import"./Link-bcf6968b.js";import"./assertThisInitialized-11245cea.js";import"./EditOutlined-401a1613.js";import"./AntdIcon-eb4d8409.js";import"./genStyleUtils-28a6e765.js";import"./index-86654eeb.js";import"./index-356ca88b.js";import"./index-da03a860.js";import"./index-6141dcc2.js";import"./context-b387624d.js";import"./wrapNativeSuper-e3a961e5.js";import"./useLocale-8b2da478.js";import"./index-df709f45.js";import"./Compact-a3364df5.js";import"./useSize-06920fd3.js";import"./reactNode-9d24d027.js";import"./EnterOutlined-e9c5832e.js";import"./KeyCode-6413d982.js";import"./TextArea-4f362629.js";import"./CloseCircleFilled-d4e8e9a6.js";import"./CloseCircleFilled-257b815e.js";import"./useVariants-6604f14b.js";import"./useCSSVarCls-56ee7f0e.js";import"./index-8c4dacd9.js";import"./compact-item-869a41a4.js";import"./LoadingOutlined-722c611a.js";import"./CheckOutlined-e9194b0d.js";import"./CheckOutlined-c7cbec95.js";import"./CopyOutlined-d9215ad4.js";import"./index-8d47fad6.js";import"./styled-components.browser.esm-a237e5f9.js";import"./index-3f9a60cd.js";import"./CloseCircleFilled-6d245257.js";import"./SwapRightOutlined-6c6c9e02.js";import"./AntdIcon-16889e64.js";import"./PurePanel-dc31f1e9.js";import"./SearchOutlined-a215f538.js";import"./SearchOutlined-11b57711.js";import"./Overflow-77a29d28.js";import"./useIcons-d6980080.js";import"./CloseOutlined-55cb7de5.js";import"./CloseOutlined-9385a5da.js";import"./DownOutlined-3b14e6aa.js";import"./button-a7ab0380.js";import"./index-eacc853e.js";import"./LocaleContext-6a38b50b.js";import"./collapse-97de76d4.js";import"./row-8e2bb960.js";import"./QuestionCircleOutlined-04e9cd25.js";import"./CheckCircleFilled-f46cad22.js";import"./CheckCircleFilled-1392c7ce.js";import"./ExclamationCircleFilled-b40e1c9f.js";import"./ExclamationCircleFilled-eba6e68e.js";const{Text:S}=Pe,rt={title:"Components/Widgets/Date/DateMaskedInput/Comparison",parameters:{layout:"centered"}},n=Ge=>{const{storyName:Je,value:d,timezone:h,showTime:O,required:N=!1,readOnly:$=!1}=Ge,[t,C]=F.useState(d),[a,q]=F.useState(d);F.useEffect(()=>{C(d),q(d)},[d]);const R=O?"datetime":"date";return e.jsxs("div",{style:{width:700},children:[e.jsxs(S,{strong:!0,style:{fontSize:16,marginBottom:16,display:"block"},children:["Story: ",Je]}),e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsxs("div",{style:{flex:1},children:[e.jsx(E,{orientation:"left",children:"DateInput (Old)"}),e.jsx(w,{layout:"vertical",children:e.jsx(w.Item,{label:"Date",children:e.jsx(Qe,{id:"old-input",value:t,onChange:M=>C(M||void 0),showTime:O,required:N,readOnly:$,timezone:h})})}),e.jsxs("div",{style:{padding:12,background:"#f5f5f5",borderRadius:6,fontSize:12},children:[e.jsx(S,{strong:!0,children:"Debug:"}),e.jsx("pre",{style:{margin:"8px 0 0 0"},children:`value: ${t||"(empty)"}
timezone: ${h}
showTime: ${O}`})]})]}),e.jsxs("div",{style:{flex:1},children:[e.jsx(E,{orientation:"left",children:"DateMaskedInput (New)"}),e.jsx(w,{layout:"vertical",children:e.jsx(w.Item,{label:"Date",children:e.jsx(Ke,{id:"new-input",type:R,value:a,onChange:M=>q(M||void 0),required:N,readOnly:$,timezone:h})})}),e.jsxs("div",{style:{padding:12,background:"#f5f5f5",borderRadius:6,fontSize:12},children:[e.jsx(S,{strong:!0,children:"Debug:"}),e.jsx("pre",{style:{margin:"8px 0 0 0"},children:`value: ${a||"(empty)"}
timezone: ${h}
type: ${R}`})]})]})]}),e.jsxs("div",{style:{marginTop:16,padding:12,background:t===a?"#f6ffed":"#fff2f0",border:`1px solid ${t===a?"#b7eb8f":"#ffccc7"}`,borderRadius:6},children:[e.jsxs(S,{strong:!0,children:["Values match:"," ",t===a?"✅ YES":"❌ NO"]}),t!==a&&e.jsxs("div",{style:{marginTop:8,fontSize:12},children:[e.jsxs("div",{children:["Old: ",e.jsx("code",{children:t||"(empty)"})]}),e.jsxs("div",{children:["New: ",e.jsx("code",{children:a||"(empty)"})]})]})]})]})},i=n.bind({});i.args={storyName:"Basic",value:"2024-03-10 14:30:00",timezone:"Europe/Madrid",showTime:!0};const u=n.bind({});u.args={storyName:"Required",value:"2024-03-10 14:30:00",timezone:"Europe/Madrid",showTime:!0,required:!0};const r=n.bind({});r.args={storyName:"ReadOnly",value:Xe().format("YYYY-MM-DD HH:mm:ss"),timezone:"Europe/Madrid",showTime:!0,readOnly:!0};const s=n.bind({});s.args={storyName:"InvalidDate",value:"invalid-date",timezone:"Europe/Madrid",showTime:!0};const o=n.bind({});o.args={storyName:"DateOnly",value:"2024-03-10",timezone:"Europe/Madrid",showTime:!1};const l=n.bind({});l.args={storyName:"TimezoneInOouiMadrid",value:"2025-05-26 12:00:00",timezone:"Europe/Madrid",showTime:!0};const p=n.bind({});p.args={storyName:"TimezoneInOouiTokyo",value:"2025-05-26 21:00:00",timezone:"Asia/Tokyo",showTime:!0};const m=n.bind({});m.args={storyName:"TimezoneInOouiUTC",value:"2025-05-26 12:00:00",timezone:"UTC",showTime:!0};const v=n.bind({});v.args={storyName:"DSTStartMadrid",value:"2025-03-30 01:59:59",timezone:"Europe/Madrid",showTime:!0};const y=n.bind({});y.args={storyName:"DSTEndMadrid",value:"2025-10-26 02:59:59",timezone:"Europe/Madrid",showTime:!0};const f=n.bind({});f.args={storyName:"UTCReference",value:"2025-03-30 00:59:59",timezone:"UTC",showTime:!0};const I=n.bind({});I.args={storyName:"DSTMadridSpringForward",value:"2025-03-30 02:00:00",timezone:"Europe/Madrid",showTime:!0};const c=n.bind({});c.args={storyName:"DSTMadridFallBackFirst",value:"2025-10-26 02:00:00",timezone:"Europe/Madrid",showTime:!0};const g=n.bind({});g.args={storyName:"DSTMadridFallBackSecond",value:"2025-10-26 02:00:00",timezone:"Europe/Madrid",showTime:!0};const T=n.bind({});T.args={storyName:"DSTUtcSpringForward",value:"2025-03-30 01:00:00",timezone:"UTC",showTime:!0};const k=n.bind({});k.args={storyName:"DSTUtcFallBack",value:"2025-10-26 01:00:00",timezone:"UTC",showTime:!0};const V=n.bind({});V.args={storyName:"SpecificUTCTime",value:"2023-03-26 02:00:00",timezone:"UTC",showTime:!0};const D=n.bind({});D.args={storyName:"UTCToMadridDST",value:"2023-03-26 02:00:00",timezone:"Europe/Madrid",showTime:!0};const x=n.bind({});x.args={storyName:"UTCMidnightTransition",value:"2023-03-26 00:00:00",timezone:"UTC",showTime:!0};const b=n.bind({});b.args={storyName:"UTCToTokyoNextDay",value:"2023-03-26 15:00:00",timezone:"Asia/Tokyo",showTime:!0};const z=n.bind({});z.args={storyName:"UTCLastSecond",value:"2023-03-26 23:59:59",timezone:"UTC",showTime:!0};var B,U,j;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const {
    storyName,
    value,
    timezone,
    showTime,
    required = false,
    readOnly = false
  } = args;

  // DateInput state
  const [dateInputValue, setDateInputValue] = useState<string | undefined>(value);

  // DateMaskedInput state
  const [maskedInputValue, setMaskedInputValue] = useState<string | undefined>(value);

  // Sync initial values when args change
  useEffect(() => {
    setDateInputValue(value);
    setMaskedInputValue(value);
  }, [value]);
  const maskedType = showTime ? "datetime" : "date";
  return <div style={{
    width: 700
  }}>
      <Text strong style={{
      fontSize: 16,
      marginBottom: 16,
      display: "block"
    }}>
        Story: {storyName}
      </Text>

      <div style={{
      display: "flex",
      gap: 24
    }}>
        {/* DateInput (Old) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateInput (Old)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateInput id="old-input" value={dateInputValue} onChange={v => setDateInputValue(v || undefined)} showTime={showTime} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${dateInputValue || "(empty)"}
timezone: \${timezone}
showTime: \${showTime}\`}
            </pre>
          </div>
        </div>

        {/* DateMaskedInput (New) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateMaskedInput (New)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateMaskedInput id="new-input" type={maskedType} value={maskedInputValue} onChange={v => setMaskedInputValue(v || undefined)} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${maskedInputValue || "(empty)"}
timezone: \${timezone}
type: \${maskedType}\`}
            </pre>
          </div>
        </div>
      </div>

      {/* Comparison result */}
      <div style={{
      marginTop: 16,
      padding: 12,
      background: dateInputValue === maskedInputValue ? "#f6ffed" : "#fff2f0",
      border: \`1px solid \${dateInputValue === maskedInputValue ? "#b7eb8f" : "#ffccc7"}\`,
      borderRadius: 6
    }}>
        <Text strong>
          Values match:{" "}
          {dateInputValue === maskedInputValue ? "✅ YES" : "❌ NO"}
        </Text>
        {dateInputValue !== maskedInputValue && <div style={{
        marginTop: 8,
        fontSize: 12
      }}>
            <div>
              Old: <code>{dateInputValue || "(empty)"}</code>
            </div>
            <div>
              New: <code>{maskedInputValue || "(empty)"}</code>
            </div>
          </div>}
      </div>
    </div>;
}`,...(j=(U=i.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var Y,_,L;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`args => {
  const {
    storyName,
    value,
    timezone,
    showTime,
    required = false,
    readOnly = false
  } = args;

  // DateInput state
  const [dateInputValue, setDateInputValue] = useState<string | undefined>(value);

  // DateMaskedInput state
  const [maskedInputValue, setMaskedInputValue] = useState<string | undefined>(value);

  // Sync initial values when args change
  useEffect(() => {
    setDateInputValue(value);
    setMaskedInputValue(value);
  }, [value]);
  const maskedType = showTime ? "datetime" : "date";
  return <div style={{
    width: 700
  }}>
      <Text strong style={{
      fontSize: 16,
      marginBottom: 16,
      display: "block"
    }}>
        Story: {storyName}
      </Text>

      <div style={{
      display: "flex",
      gap: 24
    }}>
        {/* DateInput (Old) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateInput (Old)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateInput id="old-input" value={dateInputValue} onChange={v => setDateInputValue(v || undefined)} showTime={showTime} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${dateInputValue || "(empty)"}
timezone: \${timezone}
showTime: \${showTime}\`}
            </pre>
          </div>
        </div>

        {/* DateMaskedInput (New) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateMaskedInput (New)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateMaskedInput id="new-input" type={maskedType} value={maskedInputValue} onChange={v => setMaskedInputValue(v || undefined)} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${maskedInputValue || "(empty)"}
timezone: \${timezone}
type: \${maskedType}\`}
            </pre>
          </div>
        </div>
      </div>

      {/* Comparison result */}
      <div style={{
      marginTop: 16,
      padding: 12,
      background: dateInputValue === maskedInputValue ? "#f6ffed" : "#fff2f0",
      border: \`1px solid \${dateInputValue === maskedInputValue ? "#b7eb8f" : "#ffccc7"}\`,
      borderRadius: 6
    }}>
        <Text strong>
          Values match:{" "}
          {dateInputValue === maskedInputValue ? "✅ YES" : "❌ NO"}
        </Text>
        {dateInputValue !== maskedInputValue && <div style={{
        marginTop: 8,
        fontSize: 12
      }}>
            <div>
              Old: <code>{dateInputValue || "(empty)"}</code>
            </div>
            <div>
              New: <code>{maskedInputValue || "(empty)"}</code>
            </div>
          </div>}
      </div>
    </div>;
}`,...(L=(_=u.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var A,H,W;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  const {
    storyName,
    value,
    timezone,
    showTime,
    required = false,
    readOnly = false
  } = args;

  // DateInput state
  const [dateInputValue, setDateInputValue] = useState<string | undefined>(value);

  // DateMaskedInput state
  const [maskedInputValue, setMaskedInputValue] = useState<string | undefined>(value);

  // Sync initial values when args change
  useEffect(() => {
    setDateInputValue(value);
    setMaskedInputValue(value);
  }, [value]);
  const maskedType = showTime ? "datetime" : "date";
  return <div style={{
    width: 700
  }}>
      <Text strong style={{
      fontSize: 16,
      marginBottom: 16,
      display: "block"
    }}>
        Story: {storyName}
      </Text>

      <div style={{
      display: "flex",
      gap: 24
    }}>
        {/* DateInput (Old) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateInput (Old)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateInput id="old-input" value={dateInputValue} onChange={v => setDateInputValue(v || undefined)} showTime={showTime} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${dateInputValue || "(empty)"}
timezone: \${timezone}
showTime: \${showTime}\`}
            </pre>
          </div>
        </div>

        {/* DateMaskedInput (New) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateMaskedInput (New)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateMaskedInput id="new-input" type={maskedType} value={maskedInputValue} onChange={v => setMaskedInputValue(v || undefined)} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${maskedInputValue || "(empty)"}
timezone: \${timezone}
type: \${maskedType}\`}
            </pre>
          </div>
        </div>
      </div>

      {/* Comparison result */}
      <div style={{
      marginTop: 16,
      padding: 12,
      background: dateInputValue === maskedInputValue ? "#f6ffed" : "#fff2f0",
      border: \`1px solid \${dateInputValue === maskedInputValue ? "#b7eb8f" : "#ffccc7"}\`,
      borderRadius: 6
    }}>
        <Text strong>
          Values match:{" "}
          {dateInputValue === maskedInputValue ? "✅ YES" : "❌ NO"}
        </Text>
        {dateInputValue !== maskedInputValue && <div style={{
        marginTop: 8,
        fontSize: 12
      }}>
            <div>
              Old: <code>{dateInputValue || "(empty)"}</code>
            </div>
            <div>
              New: <code>{maskedInputValue || "(empty)"}</code>
            </div>
          </div>}
      </div>
    </div>;
}`,...(W=(H=r.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var G,J,K;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`args => {
  const {
    storyName,
    value,
    timezone,
    showTime,
    required = false,
    readOnly = false
  } = args;

  // DateInput state
  const [dateInputValue, setDateInputValue] = useState<string | undefined>(value);

  // DateMaskedInput state
  const [maskedInputValue, setMaskedInputValue] = useState<string | undefined>(value);

  // Sync initial values when args change
  useEffect(() => {
    setDateInputValue(value);
    setMaskedInputValue(value);
  }, [value]);
  const maskedType = showTime ? "datetime" : "date";
  return <div style={{
    width: 700
  }}>
      <Text strong style={{
      fontSize: 16,
      marginBottom: 16,
      display: "block"
    }}>
        Story: {storyName}
      </Text>

      <div style={{
      display: "flex",
      gap: 24
    }}>
        {/* DateInput (Old) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateInput (Old)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateInput id="old-input" value={dateInputValue} onChange={v => setDateInputValue(v || undefined)} showTime={showTime} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${dateInputValue || "(empty)"}
timezone: \${timezone}
showTime: \${showTime}\`}
            </pre>
          </div>
        </div>

        {/* DateMaskedInput (New) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateMaskedInput (New)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateMaskedInput id="new-input" type={maskedType} value={maskedInputValue} onChange={v => setMaskedInputValue(v || undefined)} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${maskedInputValue || "(empty)"}
timezone: \${timezone}
type: \${maskedType}\`}
            </pre>
          </div>
        </div>
      </div>

      {/* Comparison result */}
      <div style={{
      marginTop: 16,
      padding: 12,
      background: dateInputValue === maskedInputValue ? "#f6ffed" : "#fff2f0",
      border: \`1px solid \${dateInputValue === maskedInputValue ? "#b7eb8f" : "#ffccc7"}\`,
      borderRadius: 6
    }}>
        <Text strong>
          Values match:{" "}
          {dateInputValue === maskedInputValue ? "✅ YES" : "❌ NO"}
        </Text>
        {dateInputValue !== maskedInputValue && <div style={{
        marginTop: 8,
        fontSize: 12
      }}>
            <div>
              Old: <code>{dateInputValue || "(empty)"}</code>
            </div>
            <div>
              New: <code>{maskedInputValue || "(empty)"}</code>
            </div>
          </div>}
      </div>
    </div>;
}`,...(K=(J=s.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var P,Q,X;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  const {
    storyName,
    value,
    timezone,
    showTime,
    required = false,
    readOnly = false
  } = args;

  // DateInput state
  const [dateInputValue, setDateInputValue] = useState<string | undefined>(value);

  // DateMaskedInput state
  const [maskedInputValue, setMaskedInputValue] = useState<string | undefined>(value);

  // Sync initial values when args change
  useEffect(() => {
    setDateInputValue(value);
    setMaskedInputValue(value);
  }, [value]);
  const maskedType = showTime ? "datetime" : "date";
  return <div style={{
    width: 700
  }}>
      <Text strong style={{
      fontSize: 16,
      marginBottom: 16,
      display: "block"
    }}>
        Story: {storyName}
      </Text>

      <div style={{
      display: "flex",
      gap: 24
    }}>
        {/* DateInput (Old) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateInput (Old)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateInput id="old-input" value={dateInputValue} onChange={v => setDateInputValue(v || undefined)} showTime={showTime} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${dateInputValue || "(empty)"}
timezone: \${timezone}
showTime: \${showTime}\`}
            </pre>
          </div>
        </div>

        {/* DateMaskedInput (New) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateMaskedInput (New)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateMaskedInput id="new-input" type={maskedType} value={maskedInputValue} onChange={v => setMaskedInputValue(v || undefined)} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${maskedInputValue || "(empty)"}
timezone: \${timezone}
type: \${maskedType}\`}
            </pre>
          </div>
        </div>
      </div>

      {/* Comparison result */}
      <div style={{
      marginTop: 16,
      padding: 12,
      background: dateInputValue === maskedInputValue ? "#f6ffed" : "#fff2f0",
      border: \`1px solid \${dateInputValue === maskedInputValue ? "#b7eb8f" : "#ffccc7"}\`,
      borderRadius: 6
    }}>
        <Text strong>
          Values match:{" "}
          {dateInputValue === maskedInputValue ? "✅ YES" : "❌ NO"}
        </Text>
        {dateInputValue !== maskedInputValue && <div style={{
        marginTop: 8,
        fontSize: 12
      }}>
            <div>
              Old: <code>{dateInputValue || "(empty)"}</code>
            </div>
            <div>
              New: <code>{maskedInputValue || "(empty)"}</code>
            </div>
          </div>}
      </div>
    </div>;
}`,...(X=(Q=o.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ne;l.parameters={...l.parameters,docs:{...(Z=l.parameters)==null?void 0:Z.docs,source:{originalSource:`args => {
  const {
    storyName,
    value,
    timezone,
    showTime,
    required = false,
    readOnly = false
  } = args;

  // DateInput state
  const [dateInputValue, setDateInputValue] = useState<string | undefined>(value);

  // DateMaskedInput state
  const [maskedInputValue, setMaskedInputValue] = useState<string | undefined>(value);

  // Sync initial values when args change
  useEffect(() => {
    setDateInputValue(value);
    setMaskedInputValue(value);
  }, [value]);
  const maskedType = showTime ? "datetime" : "date";
  return <div style={{
    width: 700
  }}>
      <Text strong style={{
      fontSize: 16,
      marginBottom: 16,
      display: "block"
    }}>
        Story: {storyName}
      </Text>

      <div style={{
      display: "flex",
      gap: 24
    }}>
        {/* DateInput (Old) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateInput (Old)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateInput id="old-input" value={dateInputValue} onChange={v => setDateInputValue(v || undefined)} showTime={showTime} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${dateInputValue || "(empty)"}
timezone: \${timezone}
showTime: \${showTime}\`}
            </pre>
          </div>
        </div>

        {/* DateMaskedInput (New) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateMaskedInput (New)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateMaskedInput id="new-input" type={maskedType} value={maskedInputValue} onChange={v => setMaskedInputValue(v || undefined)} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${maskedInputValue || "(empty)"}
timezone: \${timezone}
type: \${maskedType}\`}
            </pre>
          </div>
        </div>
      </div>

      {/* Comparison result */}
      <div style={{
      marginTop: 16,
      padding: 12,
      background: dateInputValue === maskedInputValue ? "#f6ffed" : "#fff2f0",
      border: \`1px solid \${dateInputValue === maskedInputValue ? "#b7eb8f" : "#ffccc7"}\`,
      borderRadius: 6
    }}>
        <Text strong>
          Values match:{" "}
          {dateInputValue === maskedInputValue ? "✅ YES" : "❌ NO"}
        </Text>
        {dateInputValue !== maskedInputValue && <div style={{
        marginTop: 8,
        fontSize: 12
      }}>
            <div>
              Old: <code>{dateInputValue || "(empty)"}</code>
            </div>
            <div>
              New: <code>{maskedInputValue || "(empty)"}</code>
            </div>
          </div>}
      </div>
    </div>;
}`,...(ne=(ee=l.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ae,de;p.parameters={...p.parameters,docs:{...(te=p.parameters)==null?void 0:te.docs,source:{originalSource:`args => {
  const {
    storyName,
    value,
    timezone,
    showTime,
    required = false,
    readOnly = false
  } = args;

  // DateInput state
  const [dateInputValue, setDateInputValue] = useState<string | undefined>(value);

  // DateMaskedInput state
  const [maskedInputValue, setMaskedInputValue] = useState<string | undefined>(value);

  // Sync initial values when args change
  useEffect(() => {
    setDateInputValue(value);
    setMaskedInputValue(value);
  }, [value]);
  const maskedType = showTime ? "datetime" : "date";
  return <div style={{
    width: 700
  }}>
      <Text strong style={{
      fontSize: 16,
      marginBottom: 16,
      display: "block"
    }}>
        Story: {storyName}
      </Text>

      <div style={{
      display: "flex",
      gap: 24
    }}>
        {/* DateInput (Old) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateInput (Old)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateInput id="old-input" value={dateInputValue} onChange={v => setDateInputValue(v || undefined)} showTime={showTime} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${dateInputValue || "(empty)"}
timezone: \${timezone}
showTime: \${showTime}\`}
            </pre>
          </div>
        </div>

        {/* DateMaskedInput (New) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateMaskedInput (New)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateMaskedInput id="new-input" type={maskedType} value={maskedInputValue} onChange={v => setMaskedInputValue(v || undefined)} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${maskedInputValue || "(empty)"}
timezone: \${timezone}
type: \${maskedType}\`}
            </pre>
          </div>
        </div>
      </div>

      {/* Comparison result */}
      <div style={{
      marginTop: 16,
      padding: 12,
      background: dateInputValue === maskedInputValue ? "#f6ffed" : "#fff2f0",
      border: \`1px solid \${dateInputValue === maskedInputValue ? "#b7eb8f" : "#ffccc7"}\`,
      borderRadius: 6
    }}>
        <Text strong>
          Values match:{" "}
          {dateInputValue === maskedInputValue ? "✅ YES" : "❌ NO"}
        </Text>
        {dateInputValue !== maskedInputValue && <div style={{
        marginTop: 8,
        fontSize: 12
      }}>
            <div>
              Old: <code>{dateInputValue || "(empty)"}</code>
            </div>
            <div>
              New: <code>{maskedInputValue || "(empty)"}</code>
            </div>
          </div>}
      </div>
    </div>;
}`,...(de=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:de.source}}};var ie,ue,re;m.parameters={...m.parameters,docs:{...(ie=m.parameters)==null?void 0:ie.docs,source:{originalSource:`args => {
  const {
    storyName,
    value,
    timezone,
    showTime,
    required = false,
    readOnly = false
  } = args;

  // DateInput state
  const [dateInputValue, setDateInputValue] = useState<string | undefined>(value);

  // DateMaskedInput state
  const [maskedInputValue, setMaskedInputValue] = useState<string | undefined>(value);

  // Sync initial values when args change
  useEffect(() => {
    setDateInputValue(value);
    setMaskedInputValue(value);
  }, [value]);
  const maskedType = showTime ? "datetime" : "date";
  return <div style={{
    width: 700
  }}>
      <Text strong style={{
      fontSize: 16,
      marginBottom: 16,
      display: "block"
    }}>
        Story: {storyName}
      </Text>

      <div style={{
      display: "flex",
      gap: 24
    }}>
        {/* DateInput (Old) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateInput (Old)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateInput id="old-input" value={dateInputValue} onChange={v => setDateInputValue(v || undefined)} showTime={showTime} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${dateInputValue || "(empty)"}
timezone: \${timezone}
showTime: \${showTime}\`}
            </pre>
          </div>
        </div>

        {/* DateMaskedInput (New) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateMaskedInput (New)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateMaskedInput id="new-input" type={maskedType} value={maskedInputValue} onChange={v => setMaskedInputValue(v || undefined)} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${maskedInputValue || "(empty)"}
timezone: \${timezone}
type: \${maskedType}\`}
            </pre>
          </div>
        </div>
      </div>

      {/* Comparison result */}
      <div style={{
      marginTop: 16,
      padding: 12,
      background: dateInputValue === maskedInputValue ? "#f6ffed" : "#fff2f0",
      border: \`1px solid \${dateInputValue === maskedInputValue ? "#b7eb8f" : "#ffccc7"}\`,
      borderRadius: 6
    }}>
        <Text strong>
          Values match:{" "}
          {dateInputValue === maskedInputValue ? "✅ YES" : "❌ NO"}
        </Text>
        {dateInputValue !== maskedInputValue && <div style={{
        marginTop: 8,
        fontSize: 12
      }}>
            <div>
              Old: <code>{dateInputValue || "(empty)"}</code>
            </div>
            <div>
              New: <code>{maskedInputValue || "(empty)"}</code>
            </div>
          </div>}
      </div>
    </div>;
}`,...(re=(ue=m.parameters)==null?void 0:ue.docs)==null?void 0:re.source}}};var se,oe,le;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`args => {
  const {
    storyName,
    value,
    timezone,
    showTime,
    required = false,
    readOnly = false
  } = args;

  // DateInput state
  const [dateInputValue, setDateInputValue] = useState<string | undefined>(value);

  // DateMaskedInput state
  const [maskedInputValue, setMaskedInputValue] = useState<string | undefined>(value);

  // Sync initial values when args change
  useEffect(() => {
    setDateInputValue(value);
    setMaskedInputValue(value);
  }, [value]);
  const maskedType = showTime ? "datetime" : "date";
  return <div style={{
    width: 700
  }}>
      <Text strong style={{
      fontSize: 16,
      marginBottom: 16,
      display: "block"
    }}>
        Story: {storyName}
      </Text>

      <div style={{
      display: "flex",
      gap: 24
    }}>
        {/* DateInput (Old) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateInput (Old)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateInput id="old-input" value={dateInputValue} onChange={v => setDateInputValue(v || undefined)} showTime={showTime} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${dateInputValue || "(empty)"}
timezone: \${timezone}
showTime: \${showTime}\`}
            </pre>
          </div>
        </div>

        {/* DateMaskedInput (New) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateMaskedInput (New)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateMaskedInput id="new-input" type={maskedType} value={maskedInputValue} onChange={v => setMaskedInputValue(v || undefined)} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${maskedInputValue || "(empty)"}
timezone: \${timezone}
type: \${maskedType}\`}
            </pre>
          </div>
        </div>
      </div>

      {/* Comparison result */}
      <div style={{
      marginTop: 16,
      padding: 12,
      background: dateInputValue === maskedInputValue ? "#f6ffed" : "#fff2f0",
      border: \`1px solid \${dateInputValue === maskedInputValue ? "#b7eb8f" : "#ffccc7"}\`,
      borderRadius: 6
    }}>
        <Text strong>
          Values match:{" "}
          {dateInputValue === maskedInputValue ? "✅ YES" : "❌ NO"}
        </Text>
        {dateInputValue !== maskedInputValue && <div style={{
        marginTop: 8,
        fontSize: 12
      }}>
            <div>
              Old: <code>{dateInputValue || "(empty)"}</code>
            </div>
            <div>
              New: <code>{maskedInputValue || "(empty)"}</code>
            </div>
          </div>}
      </div>
    </div>;
}`,...(le=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var pe,me,ve;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`args => {
  const {
    storyName,
    value,
    timezone,
    showTime,
    required = false,
    readOnly = false
  } = args;

  // DateInput state
  const [dateInputValue, setDateInputValue] = useState<string | undefined>(value);

  // DateMaskedInput state
  const [maskedInputValue, setMaskedInputValue] = useState<string | undefined>(value);

  // Sync initial values when args change
  useEffect(() => {
    setDateInputValue(value);
    setMaskedInputValue(value);
  }, [value]);
  const maskedType = showTime ? "datetime" : "date";
  return <div style={{
    width: 700
  }}>
      <Text strong style={{
      fontSize: 16,
      marginBottom: 16,
      display: "block"
    }}>
        Story: {storyName}
      </Text>

      <div style={{
      display: "flex",
      gap: 24
    }}>
        {/* DateInput (Old) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateInput (Old)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateInput id="old-input" value={dateInputValue} onChange={v => setDateInputValue(v || undefined)} showTime={showTime} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${dateInputValue || "(empty)"}
timezone: \${timezone}
showTime: \${showTime}\`}
            </pre>
          </div>
        </div>

        {/* DateMaskedInput (New) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateMaskedInput (New)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateMaskedInput id="new-input" type={maskedType} value={maskedInputValue} onChange={v => setMaskedInputValue(v || undefined)} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${maskedInputValue || "(empty)"}
timezone: \${timezone}
type: \${maskedType}\`}
            </pre>
          </div>
        </div>
      </div>

      {/* Comparison result */}
      <div style={{
      marginTop: 16,
      padding: 12,
      background: dateInputValue === maskedInputValue ? "#f6ffed" : "#fff2f0",
      border: \`1px solid \${dateInputValue === maskedInputValue ? "#b7eb8f" : "#ffccc7"}\`,
      borderRadius: 6
    }}>
        <Text strong>
          Values match:{" "}
          {dateInputValue === maskedInputValue ? "✅ YES" : "❌ NO"}
        </Text>
        {dateInputValue !== maskedInputValue && <div style={{
        marginTop: 8,
        fontSize: 12
      }}>
            <div>
              Old: <code>{dateInputValue || "(empty)"}</code>
            </div>
            <div>
              New: <code>{maskedInputValue || "(empty)"}</code>
            </div>
          </div>}
      </div>
    </div>;
}`,...(ve=(me=y.parameters)==null?void 0:me.docs)==null?void 0:ve.source}}};var ye,fe,Ie;f.parameters={...f.parameters,docs:{...(ye=f.parameters)==null?void 0:ye.docs,source:{originalSource:`args => {
  const {
    storyName,
    value,
    timezone,
    showTime,
    required = false,
    readOnly = false
  } = args;

  // DateInput state
  const [dateInputValue, setDateInputValue] = useState<string | undefined>(value);

  // DateMaskedInput state
  const [maskedInputValue, setMaskedInputValue] = useState<string | undefined>(value);

  // Sync initial values when args change
  useEffect(() => {
    setDateInputValue(value);
    setMaskedInputValue(value);
  }, [value]);
  const maskedType = showTime ? "datetime" : "date";
  return <div style={{
    width: 700
  }}>
      <Text strong style={{
      fontSize: 16,
      marginBottom: 16,
      display: "block"
    }}>
        Story: {storyName}
      </Text>

      <div style={{
      display: "flex",
      gap: 24
    }}>
        {/* DateInput (Old) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateInput (Old)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateInput id="old-input" value={dateInputValue} onChange={v => setDateInputValue(v || undefined)} showTime={showTime} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${dateInputValue || "(empty)"}
timezone: \${timezone}
showTime: \${showTime}\`}
            </pre>
          </div>
        </div>

        {/* DateMaskedInput (New) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateMaskedInput (New)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateMaskedInput id="new-input" type={maskedType} value={maskedInputValue} onChange={v => setMaskedInputValue(v || undefined)} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${maskedInputValue || "(empty)"}
timezone: \${timezone}
type: \${maskedType}\`}
            </pre>
          </div>
        </div>
      </div>

      {/* Comparison result */}
      <div style={{
      marginTop: 16,
      padding: 12,
      background: dateInputValue === maskedInputValue ? "#f6ffed" : "#fff2f0",
      border: \`1px solid \${dateInputValue === maskedInputValue ? "#b7eb8f" : "#ffccc7"}\`,
      borderRadius: 6
    }}>
        <Text strong>
          Values match:{" "}
          {dateInputValue === maskedInputValue ? "✅ YES" : "❌ NO"}
        </Text>
        {dateInputValue !== maskedInputValue && <div style={{
        marginTop: 8,
        fontSize: 12
      }}>
            <div>
              Old: <code>{dateInputValue || "(empty)"}</code>
            </div>
            <div>
              New: <code>{maskedInputValue || "(empty)"}</code>
            </div>
          </div>}
      </div>
    </div>;
}`,...(Ie=(fe=f.parameters)==null?void 0:fe.docs)==null?void 0:Ie.source}}};var ce,ge,Te;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`args => {
  const {
    storyName,
    value,
    timezone,
    showTime,
    required = false,
    readOnly = false
  } = args;

  // DateInput state
  const [dateInputValue, setDateInputValue] = useState<string | undefined>(value);

  // DateMaskedInput state
  const [maskedInputValue, setMaskedInputValue] = useState<string | undefined>(value);

  // Sync initial values when args change
  useEffect(() => {
    setDateInputValue(value);
    setMaskedInputValue(value);
  }, [value]);
  const maskedType = showTime ? "datetime" : "date";
  return <div style={{
    width: 700
  }}>
      <Text strong style={{
      fontSize: 16,
      marginBottom: 16,
      display: "block"
    }}>
        Story: {storyName}
      </Text>

      <div style={{
      display: "flex",
      gap: 24
    }}>
        {/* DateInput (Old) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateInput (Old)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateInput id="old-input" value={dateInputValue} onChange={v => setDateInputValue(v || undefined)} showTime={showTime} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${dateInputValue || "(empty)"}
timezone: \${timezone}
showTime: \${showTime}\`}
            </pre>
          </div>
        </div>

        {/* DateMaskedInput (New) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateMaskedInput (New)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateMaskedInput id="new-input" type={maskedType} value={maskedInputValue} onChange={v => setMaskedInputValue(v || undefined)} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${maskedInputValue || "(empty)"}
timezone: \${timezone}
type: \${maskedType}\`}
            </pre>
          </div>
        </div>
      </div>

      {/* Comparison result */}
      <div style={{
      marginTop: 16,
      padding: 12,
      background: dateInputValue === maskedInputValue ? "#f6ffed" : "#fff2f0",
      border: \`1px solid \${dateInputValue === maskedInputValue ? "#b7eb8f" : "#ffccc7"}\`,
      borderRadius: 6
    }}>
        <Text strong>
          Values match:{" "}
          {dateInputValue === maskedInputValue ? "✅ YES" : "❌ NO"}
        </Text>
        {dateInputValue !== maskedInputValue && <div style={{
        marginTop: 8,
        fontSize: 12
      }}>
            <div>
              Old: <code>{dateInputValue || "(empty)"}</code>
            </div>
            <div>
              New: <code>{maskedInputValue || "(empty)"}</code>
            </div>
          </div>}
      </div>
    </div>;
}`,...(Te=(ge=I.parameters)==null?void 0:ge.docs)==null?void 0:Te.source}}};var ke,Ve,De;c.parameters={...c.parameters,docs:{...(ke=c.parameters)==null?void 0:ke.docs,source:{originalSource:`args => {
  const {
    storyName,
    value,
    timezone,
    showTime,
    required = false,
    readOnly = false
  } = args;

  // DateInput state
  const [dateInputValue, setDateInputValue] = useState<string | undefined>(value);

  // DateMaskedInput state
  const [maskedInputValue, setMaskedInputValue] = useState<string | undefined>(value);

  // Sync initial values when args change
  useEffect(() => {
    setDateInputValue(value);
    setMaskedInputValue(value);
  }, [value]);
  const maskedType = showTime ? "datetime" : "date";
  return <div style={{
    width: 700
  }}>
      <Text strong style={{
      fontSize: 16,
      marginBottom: 16,
      display: "block"
    }}>
        Story: {storyName}
      </Text>

      <div style={{
      display: "flex",
      gap: 24
    }}>
        {/* DateInput (Old) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateInput (Old)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateInput id="old-input" value={dateInputValue} onChange={v => setDateInputValue(v || undefined)} showTime={showTime} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${dateInputValue || "(empty)"}
timezone: \${timezone}
showTime: \${showTime}\`}
            </pre>
          </div>
        </div>

        {/* DateMaskedInput (New) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateMaskedInput (New)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateMaskedInput id="new-input" type={maskedType} value={maskedInputValue} onChange={v => setMaskedInputValue(v || undefined)} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${maskedInputValue || "(empty)"}
timezone: \${timezone}
type: \${maskedType}\`}
            </pre>
          </div>
        </div>
      </div>

      {/* Comparison result */}
      <div style={{
      marginTop: 16,
      padding: 12,
      background: dateInputValue === maskedInputValue ? "#f6ffed" : "#fff2f0",
      border: \`1px solid \${dateInputValue === maskedInputValue ? "#b7eb8f" : "#ffccc7"}\`,
      borderRadius: 6
    }}>
        <Text strong>
          Values match:{" "}
          {dateInputValue === maskedInputValue ? "✅ YES" : "❌ NO"}
        </Text>
        {dateInputValue !== maskedInputValue && <div style={{
        marginTop: 8,
        fontSize: 12
      }}>
            <div>
              Old: <code>{dateInputValue || "(empty)"}</code>
            </div>
            <div>
              New: <code>{maskedInputValue || "(empty)"}</code>
            </div>
          </div>}
      </div>
    </div>;
}`,...(De=(Ve=c.parameters)==null?void 0:Ve.docs)==null?void 0:De.source}}};var xe,be,ze;g.parameters={...g.parameters,docs:{...(xe=g.parameters)==null?void 0:xe.docs,source:{originalSource:`args => {
  const {
    storyName,
    value,
    timezone,
    showTime,
    required = false,
    readOnly = false
  } = args;

  // DateInput state
  const [dateInputValue, setDateInputValue] = useState<string | undefined>(value);

  // DateMaskedInput state
  const [maskedInputValue, setMaskedInputValue] = useState<string | undefined>(value);

  // Sync initial values when args change
  useEffect(() => {
    setDateInputValue(value);
    setMaskedInputValue(value);
  }, [value]);
  const maskedType = showTime ? "datetime" : "date";
  return <div style={{
    width: 700
  }}>
      <Text strong style={{
      fontSize: 16,
      marginBottom: 16,
      display: "block"
    }}>
        Story: {storyName}
      </Text>

      <div style={{
      display: "flex",
      gap: 24
    }}>
        {/* DateInput (Old) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateInput (Old)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateInput id="old-input" value={dateInputValue} onChange={v => setDateInputValue(v || undefined)} showTime={showTime} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${dateInputValue || "(empty)"}
timezone: \${timezone}
showTime: \${showTime}\`}
            </pre>
          </div>
        </div>

        {/* DateMaskedInput (New) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateMaskedInput (New)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateMaskedInput id="new-input" type={maskedType} value={maskedInputValue} onChange={v => setMaskedInputValue(v || undefined)} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${maskedInputValue || "(empty)"}
timezone: \${timezone}
type: \${maskedType}\`}
            </pre>
          </div>
        </div>
      </div>

      {/* Comparison result */}
      <div style={{
      marginTop: 16,
      padding: 12,
      background: dateInputValue === maskedInputValue ? "#f6ffed" : "#fff2f0",
      border: \`1px solid \${dateInputValue === maskedInputValue ? "#b7eb8f" : "#ffccc7"}\`,
      borderRadius: 6
    }}>
        <Text strong>
          Values match:{" "}
          {dateInputValue === maskedInputValue ? "✅ YES" : "❌ NO"}
        </Text>
        {dateInputValue !== maskedInputValue && <div style={{
        marginTop: 8,
        fontSize: 12
      }}>
            <div>
              Old: <code>{dateInputValue || "(empty)"}</code>
            </div>
            <div>
              New: <code>{maskedInputValue || "(empty)"}</code>
            </div>
          </div>}
      </div>
    </div>;
}`,...(ze=(be=g.parameters)==null?void 0:be.docs)==null?void 0:ze.source}}};var he,we,Se;T.parameters={...T.parameters,docs:{...(he=T.parameters)==null?void 0:he.docs,source:{originalSource:`args => {
  const {
    storyName,
    value,
    timezone,
    showTime,
    required = false,
    readOnly = false
  } = args;

  // DateInput state
  const [dateInputValue, setDateInputValue] = useState<string | undefined>(value);

  // DateMaskedInput state
  const [maskedInputValue, setMaskedInputValue] = useState<string | undefined>(value);

  // Sync initial values when args change
  useEffect(() => {
    setDateInputValue(value);
    setMaskedInputValue(value);
  }, [value]);
  const maskedType = showTime ? "datetime" : "date";
  return <div style={{
    width: 700
  }}>
      <Text strong style={{
      fontSize: 16,
      marginBottom: 16,
      display: "block"
    }}>
        Story: {storyName}
      </Text>

      <div style={{
      display: "flex",
      gap: 24
    }}>
        {/* DateInput (Old) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateInput (Old)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateInput id="old-input" value={dateInputValue} onChange={v => setDateInputValue(v || undefined)} showTime={showTime} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${dateInputValue || "(empty)"}
timezone: \${timezone}
showTime: \${showTime}\`}
            </pre>
          </div>
        </div>

        {/* DateMaskedInput (New) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateMaskedInput (New)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateMaskedInput id="new-input" type={maskedType} value={maskedInputValue} onChange={v => setMaskedInputValue(v || undefined)} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${maskedInputValue || "(empty)"}
timezone: \${timezone}
type: \${maskedType}\`}
            </pre>
          </div>
        </div>
      </div>

      {/* Comparison result */}
      <div style={{
      marginTop: 16,
      padding: 12,
      background: dateInputValue === maskedInputValue ? "#f6ffed" : "#fff2f0",
      border: \`1px solid \${dateInputValue === maskedInputValue ? "#b7eb8f" : "#ffccc7"}\`,
      borderRadius: 6
    }}>
        <Text strong>
          Values match:{" "}
          {dateInputValue === maskedInputValue ? "✅ YES" : "❌ NO"}
        </Text>
        {dateInputValue !== maskedInputValue && <div style={{
        marginTop: 8,
        fontSize: 12
      }}>
            <div>
              Old: <code>{dateInputValue || "(empty)"}</code>
            </div>
            <div>
              New: <code>{maskedInputValue || "(empty)"}</code>
            </div>
          </div>}
      </div>
    </div>;
}`,...(Se=(we=T.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var Oe,Me,Fe;k.parameters={...k.parameters,docs:{...(Oe=k.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => {
  const {
    storyName,
    value,
    timezone,
    showTime,
    required = false,
    readOnly = false
  } = args;

  // DateInput state
  const [dateInputValue, setDateInputValue] = useState<string | undefined>(value);

  // DateMaskedInput state
  const [maskedInputValue, setMaskedInputValue] = useState<string | undefined>(value);

  // Sync initial values when args change
  useEffect(() => {
    setDateInputValue(value);
    setMaskedInputValue(value);
  }, [value]);
  const maskedType = showTime ? "datetime" : "date";
  return <div style={{
    width: 700
  }}>
      <Text strong style={{
      fontSize: 16,
      marginBottom: 16,
      display: "block"
    }}>
        Story: {storyName}
      </Text>

      <div style={{
      display: "flex",
      gap: 24
    }}>
        {/* DateInput (Old) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateInput (Old)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateInput id="old-input" value={dateInputValue} onChange={v => setDateInputValue(v || undefined)} showTime={showTime} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${dateInputValue || "(empty)"}
timezone: \${timezone}
showTime: \${showTime}\`}
            </pre>
          </div>
        </div>

        {/* DateMaskedInput (New) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateMaskedInput (New)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateMaskedInput id="new-input" type={maskedType} value={maskedInputValue} onChange={v => setMaskedInputValue(v || undefined)} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${maskedInputValue || "(empty)"}
timezone: \${timezone}
type: \${maskedType}\`}
            </pre>
          </div>
        </div>
      </div>

      {/* Comparison result */}
      <div style={{
      marginTop: 16,
      padding: 12,
      background: dateInputValue === maskedInputValue ? "#f6ffed" : "#fff2f0",
      border: \`1px solid \${dateInputValue === maskedInputValue ? "#b7eb8f" : "#ffccc7"}\`,
      borderRadius: 6
    }}>
        <Text strong>
          Values match:{" "}
          {dateInputValue === maskedInputValue ? "✅ YES" : "❌ NO"}
        </Text>
        {dateInputValue !== maskedInputValue && <div style={{
        marginTop: 8,
        fontSize: 12
      }}>
            <div>
              Old: <code>{dateInputValue || "(empty)"}</code>
            </div>
            <div>
              New: <code>{maskedInputValue || "(empty)"}</code>
            </div>
          </div>}
      </div>
    </div>;
}`,...(Fe=(Me=k.parameters)==null?void 0:Me.docs)==null?void 0:Fe.source}}};var Ne,$e,Ce;V.parameters={...V.parameters,docs:{...(Ne=V.parameters)==null?void 0:Ne.docs,source:{originalSource:`args => {
  const {
    storyName,
    value,
    timezone,
    showTime,
    required = false,
    readOnly = false
  } = args;

  // DateInput state
  const [dateInputValue, setDateInputValue] = useState<string | undefined>(value);

  // DateMaskedInput state
  const [maskedInputValue, setMaskedInputValue] = useState<string | undefined>(value);

  // Sync initial values when args change
  useEffect(() => {
    setDateInputValue(value);
    setMaskedInputValue(value);
  }, [value]);
  const maskedType = showTime ? "datetime" : "date";
  return <div style={{
    width: 700
  }}>
      <Text strong style={{
      fontSize: 16,
      marginBottom: 16,
      display: "block"
    }}>
        Story: {storyName}
      </Text>

      <div style={{
      display: "flex",
      gap: 24
    }}>
        {/* DateInput (Old) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateInput (Old)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateInput id="old-input" value={dateInputValue} onChange={v => setDateInputValue(v || undefined)} showTime={showTime} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${dateInputValue || "(empty)"}
timezone: \${timezone}
showTime: \${showTime}\`}
            </pre>
          </div>
        </div>

        {/* DateMaskedInput (New) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateMaskedInput (New)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateMaskedInput id="new-input" type={maskedType} value={maskedInputValue} onChange={v => setMaskedInputValue(v || undefined)} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${maskedInputValue || "(empty)"}
timezone: \${timezone}
type: \${maskedType}\`}
            </pre>
          </div>
        </div>
      </div>

      {/* Comparison result */}
      <div style={{
      marginTop: 16,
      padding: 12,
      background: dateInputValue === maskedInputValue ? "#f6ffed" : "#fff2f0",
      border: \`1px solid \${dateInputValue === maskedInputValue ? "#b7eb8f" : "#ffccc7"}\`,
      borderRadius: 6
    }}>
        <Text strong>
          Values match:{" "}
          {dateInputValue === maskedInputValue ? "✅ YES" : "❌ NO"}
        </Text>
        {dateInputValue !== maskedInputValue && <div style={{
        marginTop: 8,
        fontSize: 12
      }}>
            <div>
              Old: <code>{dateInputValue || "(empty)"}</code>
            </div>
            <div>
              New: <code>{maskedInputValue || "(empty)"}</code>
            </div>
          </div>}
      </div>
    </div>;
}`,...(Ce=($e=V.parameters)==null?void 0:$e.docs)==null?void 0:Ce.source}}};var qe,Re,Ee;D.parameters={...D.parameters,docs:{...(qe=D.parameters)==null?void 0:qe.docs,source:{originalSource:`args => {
  const {
    storyName,
    value,
    timezone,
    showTime,
    required = false,
    readOnly = false
  } = args;

  // DateInput state
  const [dateInputValue, setDateInputValue] = useState<string | undefined>(value);

  // DateMaskedInput state
  const [maskedInputValue, setMaskedInputValue] = useState<string | undefined>(value);

  // Sync initial values when args change
  useEffect(() => {
    setDateInputValue(value);
    setMaskedInputValue(value);
  }, [value]);
  const maskedType = showTime ? "datetime" : "date";
  return <div style={{
    width: 700
  }}>
      <Text strong style={{
      fontSize: 16,
      marginBottom: 16,
      display: "block"
    }}>
        Story: {storyName}
      </Text>

      <div style={{
      display: "flex",
      gap: 24
    }}>
        {/* DateInput (Old) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateInput (Old)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateInput id="old-input" value={dateInputValue} onChange={v => setDateInputValue(v || undefined)} showTime={showTime} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${dateInputValue || "(empty)"}
timezone: \${timezone}
showTime: \${showTime}\`}
            </pre>
          </div>
        </div>

        {/* DateMaskedInput (New) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateMaskedInput (New)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateMaskedInput id="new-input" type={maskedType} value={maskedInputValue} onChange={v => setMaskedInputValue(v || undefined)} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${maskedInputValue || "(empty)"}
timezone: \${timezone}
type: \${maskedType}\`}
            </pre>
          </div>
        </div>
      </div>

      {/* Comparison result */}
      <div style={{
      marginTop: 16,
      padding: 12,
      background: dateInputValue === maskedInputValue ? "#f6ffed" : "#fff2f0",
      border: \`1px solid \${dateInputValue === maskedInputValue ? "#b7eb8f" : "#ffccc7"}\`,
      borderRadius: 6
    }}>
        <Text strong>
          Values match:{" "}
          {dateInputValue === maskedInputValue ? "✅ YES" : "❌ NO"}
        </Text>
        {dateInputValue !== maskedInputValue && <div style={{
        marginTop: 8,
        fontSize: 12
      }}>
            <div>
              Old: <code>{dateInputValue || "(empty)"}</code>
            </div>
            <div>
              New: <code>{maskedInputValue || "(empty)"}</code>
            </div>
          </div>}
      </div>
    </div>;
}`,...(Ee=(Re=D.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source}}};var Be,Ue,je;x.parameters={...x.parameters,docs:{...(Be=x.parameters)==null?void 0:Be.docs,source:{originalSource:`args => {
  const {
    storyName,
    value,
    timezone,
    showTime,
    required = false,
    readOnly = false
  } = args;

  // DateInput state
  const [dateInputValue, setDateInputValue] = useState<string | undefined>(value);

  // DateMaskedInput state
  const [maskedInputValue, setMaskedInputValue] = useState<string | undefined>(value);

  // Sync initial values when args change
  useEffect(() => {
    setDateInputValue(value);
    setMaskedInputValue(value);
  }, [value]);
  const maskedType = showTime ? "datetime" : "date";
  return <div style={{
    width: 700
  }}>
      <Text strong style={{
      fontSize: 16,
      marginBottom: 16,
      display: "block"
    }}>
        Story: {storyName}
      </Text>

      <div style={{
      display: "flex",
      gap: 24
    }}>
        {/* DateInput (Old) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateInput (Old)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateInput id="old-input" value={dateInputValue} onChange={v => setDateInputValue(v || undefined)} showTime={showTime} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${dateInputValue || "(empty)"}
timezone: \${timezone}
showTime: \${showTime}\`}
            </pre>
          </div>
        </div>

        {/* DateMaskedInput (New) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateMaskedInput (New)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateMaskedInput id="new-input" type={maskedType} value={maskedInputValue} onChange={v => setMaskedInputValue(v || undefined)} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${maskedInputValue || "(empty)"}
timezone: \${timezone}
type: \${maskedType}\`}
            </pre>
          </div>
        </div>
      </div>

      {/* Comparison result */}
      <div style={{
      marginTop: 16,
      padding: 12,
      background: dateInputValue === maskedInputValue ? "#f6ffed" : "#fff2f0",
      border: \`1px solid \${dateInputValue === maskedInputValue ? "#b7eb8f" : "#ffccc7"}\`,
      borderRadius: 6
    }}>
        <Text strong>
          Values match:{" "}
          {dateInputValue === maskedInputValue ? "✅ YES" : "❌ NO"}
        </Text>
        {dateInputValue !== maskedInputValue && <div style={{
        marginTop: 8,
        fontSize: 12
      }}>
            <div>
              Old: <code>{dateInputValue || "(empty)"}</code>
            </div>
            <div>
              New: <code>{maskedInputValue || "(empty)"}</code>
            </div>
          </div>}
      </div>
    </div>;
}`,...(je=(Ue=x.parameters)==null?void 0:Ue.docs)==null?void 0:je.source}}};var Ye,_e,Le;b.parameters={...b.parameters,docs:{...(Ye=b.parameters)==null?void 0:Ye.docs,source:{originalSource:`args => {
  const {
    storyName,
    value,
    timezone,
    showTime,
    required = false,
    readOnly = false
  } = args;

  // DateInput state
  const [dateInputValue, setDateInputValue] = useState<string | undefined>(value);

  // DateMaskedInput state
  const [maskedInputValue, setMaskedInputValue] = useState<string | undefined>(value);

  // Sync initial values when args change
  useEffect(() => {
    setDateInputValue(value);
    setMaskedInputValue(value);
  }, [value]);
  const maskedType = showTime ? "datetime" : "date";
  return <div style={{
    width: 700
  }}>
      <Text strong style={{
      fontSize: 16,
      marginBottom: 16,
      display: "block"
    }}>
        Story: {storyName}
      </Text>

      <div style={{
      display: "flex",
      gap: 24
    }}>
        {/* DateInput (Old) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateInput (Old)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateInput id="old-input" value={dateInputValue} onChange={v => setDateInputValue(v || undefined)} showTime={showTime} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${dateInputValue || "(empty)"}
timezone: \${timezone}
showTime: \${showTime}\`}
            </pre>
          </div>
        </div>

        {/* DateMaskedInput (New) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateMaskedInput (New)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateMaskedInput id="new-input" type={maskedType} value={maskedInputValue} onChange={v => setMaskedInputValue(v || undefined)} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${maskedInputValue || "(empty)"}
timezone: \${timezone}
type: \${maskedType}\`}
            </pre>
          </div>
        </div>
      </div>

      {/* Comparison result */}
      <div style={{
      marginTop: 16,
      padding: 12,
      background: dateInputValue === maskedInputValue ? "#f6ffed" : "#fff2f0",
      border: \`1px solid \${dateInputValue === maskedInputValue ? "#b7eb8f" : "#ffccc7"}\`,
      borderRadius: 6
    }}>
        <Text strong>
          Values match:{" "}
          {dateInputValue === maskedInputValue ? "✅ YES" : "❌ NO"}
        </Text>
        {dateInputValue !== maskedInputValue && <div style={{
        marginTop: 8,
        fontSize: 12
      }}>
            <div>
              Old: <code>{dateInputValue || "(empty)"}</code>
            </div>
            <div>
              New: <code>{maskedInputValue || "(empty)"}</code>
            </div>
          </div>}
      </div>
    </div>;
}`,...(Le=(_e=b.parameters)==null?void 0:_e.docs)==null?void 0:Le.source}}};var Ae,He,We;z.parameters={...z.parameters,docs:{...(Ae=z.parameters)==null?void 0:Ae.docs,source:{originalSource:`args => {
  const {
    storyName,
    value,
    timezone,
    showTime,
    required = false,
    readOnly = false
  } = args;

  // DateInput state
  const [dateInputValue, setDateInputValue] = useState<string | undefined>(value);

  // DateMaskedInput state
  const [maskedInputValue, setMaskedInputValue] = useState<string | undefined>(value);

  // Sync initial values when args change
  useEffect(() => {
    setDateInputValue(value);
    setMaskedInputValue(value);
  }, [value]);
  const maskedType = showTime ? "datetime" : "date";
  return <div style={{
    width: 700
  }}>
      <Text strong style={{
      fontSize: 16,
      marginBottom: 16,
      display: "block"
    }}>
        Story: {storyName}
      </Text>

      <div style={{
      display: "flex",
      gap: 24
    }}>
        {/* DateInput (Old) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateInput (Old)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateInput id="old-input" value={dateInputValue} onChange={v => setDateInputValue(v || undefined)} showTime={showTime} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${dateInputValue || "(empty)"}
timezone: \${timezone}
showTime: \${showTime}\`}
            </pre>
          </div>
        </div>

        {/* DateMaskedInput (New) */}
        <div style={{
        flex: 1
      }}>
          <Divider orientation="left">DateMaskedInput (New)</Divider>
          <Form layout="vertical">
            <Form.Item label="Date">
              <DateMaskedInput id="new-input" type={maskedType} value={maskedInputValue} onChange={v => setMaskedInputValue(v || undefined)} required={required} readOnly={readOnly} timezone={timezone} />
            </Form.Item>
          </Form>
          <div style={{
          padding: 12,
          background: "#f5f5f5",
          borderRadius: 6,
          fontSize: 12
        }}>
            <Text strong>Debug:</Text>
            <pre style={{
            margin: "8px 0 0 0"
          }}>
              {\`value: \${maskedInputValue || "(empty)"}
timezone: \${timezone}
type: \${maskedType}\`}
            </pre>
          </div>
        </div>
      </div>

      {/* Comparison result */}
      <div style={{
      marginTop: 16,
      padding: 12,
      background: dateInputValue === maskedInputValue ? "#f6ffed" : "#fff2f0",
      border: \`1px solid \${dateInputValue === maskedInputValue ? "#b7eb8f" : "#ffccc7"}\`,
      borderRadius: 6
    }}>
        <Text strong>
          Values match:{" "}
          {dateInputValue === maskedInputValue ? "✅ YES" : "❌ NO"}
        </Text>
        {dateInputValue !== maskedInputValue && <div style={{
        marginTop: 8,
        fontSize: 12
      }}>
            <div>
              Old: <code>{dateInputValue || "(empty)"}</code>
            </div>
            <div>
              New: <code>{maskedInputValue || "(empty)"}</code>
            </div>
          </div>}
      </div>
    </div>;
}`,...(We=(He=z.parameters)==null?void 0:He.docs)==null?void 0:We.source}}};const st=["Basic","Required","ReadOnly","InvalidDate","DateOnly","TimezoneInOouiMadrid","TimezoneInOouiTokyo","TimezoneInOouiUTC","DSTStartMadrid","DSTEndMadrid","UTCReference","DSTMadridSpringForward","DSTMadridFallBackFirst","DSTMadridFallBackSecond","DSTUtcSpringForward","DSTUtcFallBack","SpecificUTCTime","UTCToMadridDST","UTCMidnightTransition","UTCToTokyoNextDay","UTCLastSecond"];export{i as Basic,y as DSTEndMadrid,c as DSTMadridFallBackFirst,g as DSTMadridFallBackSecond,I as DSTMadridSpringForward,v as DSTStartMadrid,k as DSTUtcFallBack,T as DSTUtcSpringForward,o as DateOnly,s as InvalidDate,r as ReadOnly,u as Required,V as SpecificUTCTime,l as TimezoneInOouiMadrid,p as TimezoneInOouiTokyo,m as TimezoneInOouiUTC,z as UTCLastSecond,x as UTCMidnightTransition,f as UTCReference,D as UTCToMadridDST,b as UTCToTokyoNextDay,st as __namedExportsOrder,rt as default};
