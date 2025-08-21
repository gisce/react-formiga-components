import{j as i}from"./jsx-runtime-ffb262ed.js";import{r as d}from"./index-76fb7be0.js";import{E as l}from"./ExportModal-776bda1f.js";import{B as m}from"./button-b6c4a6d6.js";import"./_commonjsHelpers-de833af9.js";import"./TranslatableInput-cbf4df15.js";import"./LocaleContext-6a38b50b.js";import"./theme-ac0bd082.js";import"./ButtonWithTooltip-89661251.js";import"./index-2a201fcf.js";import"./index-86654eeb.js";import"./assertThisInitialized-11245cea.js";import"./genStyleUtils-28a6e765.js";import"./index-fe67bf5a.js";import"./index-356ca88b.js";import"./index-da03a860.js";import"./context-f193351c.js";import"./wrapNativeSuper-e3a961e5.js";import"./Compact-a3364df5.js";import"./useSize-06920fd3.js";import"./reactNode-9d24d027.js";import"./TextArea-80c99f7a.js";import"./CloseCircleFilled-1312d6f5.js";import"./CloseCircleFilled-257b815e.js";import"./AntdIcon-2900fcfe.js";import"./useVariants-a27d5c24.js";import"./useCSSVarCls-56ee7f0e.js";import"./index-e1a7f8dc.js";import"./compact-item-3b95daf6.js";import"./LoadingOutlined-722c611a.js";import"./row-8e2bb960.js";import"./index-a91dba4b.js";import"./TranslationOutlined-f18a9657.js";import"./CloseOutlined-9385a5da.js";import"./AntdIcon-16889e64.js";import"./LoadingOutlined-50148ceb.js";import"./CheckOutlined-50c2f25f.js";import"./CheckOutlined-c7cbec95.js";import"./index-81c92931.js";import"./index-64a5fe42.js";import"./CheckCircleFilled-e37ba4c2.js";import"./CheckCircleFilled-1392c7ce.js";import"./ExclamationCircleFilled-e4581600.js";import"./ExclamationCircleFilled-eba6e68e.js";import"./InfoCircleFilled-952135fa.js";import"./InfoCircleFilled-baaa675e.js";import"./CloseOutlined-94224ba0.js";import"./KeyCode-6413d982.js";import"./SearchOutlined-7d2c8869.js";import"./SearchOutlined-11b57711.js";import"./useLocale-8b2da478.js";import"./PurePanel-de2e11b4.js";import"./index-09ae880d.js";import"./index-5f48d75f.js";import"./index-2bdda7d5.js";import"./EyeInvisibleOutlined-4021859d.js";import"./SaveOutlined-2cbe660a.js";import"./LeftOutlined-9040821c.js";import"./Button-b885b3b8.js";import"./styled-components.browser.esm-06c7d463.js";import"./Label-6c2684e5.js";import"./QuestionCircleOutlined-6633361d.js";import"./QuestionCircleOutlined-04e9cd25.js";import"./Separator-2a6ae6ce.js";import"./FieldSet-a9929433.js";import"./index-3f9a60cd.js";import"./Dropdown-1d9ea233.js";import"./FormigaConfig-ef065f1e.js";import"./index-ac790217.js";import"./LeftOutlined-434cf76c.js";import"./Overflow-efce0dc7.js";import"./MobileOutlined-0a25c820.js";import"./EnterOutlined-e9c5832e.js";import"./collapse-97de76d4.js";import"./DropdownButton-995f95e2.js";import"./DownOutlined-a1c00498.js";import"./DownOutlined-3b14e6aa.js";import"./index-acf736be.js";import"./Field-3a1bf3c0.js";import"./PaginationHeader-df648702.js";import"./SelectAllRecordsRow-96757ef5.js";import"./EditOutlined-401a1613.js";import"./CheckOutlined-feb7e862.js";import"./CopyOutlined-d9215ad4.js";import"./CustomPageSizeOptions-d0dbd508.js";import"./index-9b7a409a.js";import"./useIcons-6263ac83.js";import"./DoubleRightOutlined-2bc158a0.js";import"./Icon-f6565432.js";import"./SwapRightOutlined-6c6c9e02.js";import"./EditOutlined-da0c6f00.js";import"./FolderOpenOutlined-fe949aba.js";import"./SearchOutlined-9f8470fd.js";import"./iframe-1db9074f.js";import"../sb-preview/runtime.js";import"./BooleanInput-04f3107c.js";import"./index-1f86069e.js";import"./BooleanValue-d1fa0e4f.js";import"./BooleanSearch-21b43c47.js";import"./SelectionInput-d39953ab.js";import"./SelectionValue-96da39fb.js";import"./CharInput-5d56035c.js";import"./CharSearch-6d1cb1ea.js";import"./CharValue-93e6e3fc.js";import"./DateInput-4403be64.js";import"./ImageValue-d61a2ca6.js";import"./TextInput-7b98bebc.js";import"./isIP-9e76eb58.js";import"./EmailInput-5466489c.js";import"./UrlInput-598df502.js";import"./ProgressBarValue-faa54a22.js";import"./Many2OneDummy-f963d69a.js";import"./Many2OneValue-7a1afd0b.js";import"./Many2OneInput-c39670c8.js";import"./HTMLPreview-55c4d4c8.js";const gt={title:"Components/Export/ExportModal",component:l},o=()=>{const[p,n]=d.useState(!1);return i.jsxs(i.Fragment,{children:[i.jsx(m,{onClick:()=>{n(!0)},children:"Open modal"}),i.jsx(l,{visible:p,onCancel:()=>{n(!1)},onSucceed:async e=>{await new Promise(t=>setTimeout(t,1e3)),n(!1),console.log(e)},locale:"en_US",selectedKeys:[],totalRegisters:92348,visibleRegisters:8,selectedRegistersToExport:32,onGetFieldChilds:async e=>(console.log("onGetFieldChilds: "+e),await new Promise(t=>setTimeout(t,1e3)),e==="active"?[{key:"active/contador",title:"Activo/Contador",tooltip:"Help",isLeaf:!0},{key:"active/code",title:"Activo/Código",isLeaf:!0,required:!0}]:e==="parent1"?[{key:"parent1/parent2",title:"parent1/parent2",tooltip:"Help",isLeaf:!1}]:e==="parent1/parent2"?[{key:"parent1/parent2/test",title:"parent1/parent2/test",tooltip:"Help",isLeaf:!0}]:[]),onGetFields:async()=>(await new Promise(e=>setTimeout(e,1e3)),[{key:"active",title:"Activo",isLeaf:!1},{key:"parent1",title:"Parent1",isLeaf:!1},{key:"address/id",title:"Contactos",isLeaf:!1},{key:"bank_ids/id",title:"Bancos",isLeaf:!1},{key:"category_id/id",title:"Categorías",isLeaf:!1},{key:"child_ids/id",title:"Ref. empresa",isLeaf:!1},{key:"cifnif",title:"CIF/NIF",isLeaf:!0},{key:"city",title:"Ciudad",isLeaf:!0},{key:"codigo_contable",title:"Código contable",isLeaf:!0},{key:"comercial",title:"Nombre comercial",isLeaf:!0},{key:"comment",title:"Notas",isLeaf:!0},{key:"credit",title:"Total a cobrar",tooltip:"Importe total que este cliente le debe.",isLeaf:!0},{key:"credit_limit",title:"Crédito concedido",isLeaf:!0},{key:"customer",title:"Cliente",tooltip:"Marque esta opción si la empresa es un cliente.",isLeaf:!0},{key:"date",title:"Fecha",isLeaf:!0},{key:"debit",title:"Total a pagar",tooltip:"Importe total que debe pagar a este proveedor.",isLeaf:!0},{key:"debit_limit",title:"Límite a pagar",isLeaf:!0},{key:"ean13",title:"EAN13",isLeaf:!0},{key:"emails",title:"Emails",isLeaf:!0},{key:"energy_sector",title:"Sector de energía",isLeaf:!0},{key:"events/id",title:"Eventos",isLeaf:!1},{key:"has_debt",title:"Tiene deuda",isLeaf:!0},{key:"lang",title:"Idioma",tooltip:"Si el idioma seleccionado está instalado en el sistema, todos los documentos relacionados con esta empresa serán mostrados en este idioma. Si no, serán mostrados en inglés.",isLeaf:!0},{key:"name",title:"Nombre",required:!0,isLeaf:!0},{key:"ov_users_ids/id",title:"Usuarios Oficina Virtual",isLeaf:!1},{key:"parent_id/id",title:"Empresa principal",isLeaf:!1},{key:"payment_type_customer/id",title:"Tipo de pago de cliente",tooltip:"Tipo de pago como cliente.",isLeaf:!1},{key:"payment_type_supplier/id",title:"Tipo de pago de proveedor",tooltip:"Tipo de pago como proveedor.",isLeaf:!1},{key:"ref",title:"Código",isLeaf:!0},{key:"ref2",title:"Ref2",isLeaf:!0},{key:"ref_companies/id",title:"Compañías que se refieren a la empresa",isLeaf:!1},{key:"representante_id/id",title:"Representante",isLeaf:!1},{key:"supplier",title:"Proveedor",tooltip:"Marque esta opción si la empresa es un proveedor. Si no está marcada no será visible al introducir un pedido de compra.",isLeaf:!0},{key:"title",title:"Título",isLeaf:!0},{key:"total_debt",title:"Deuda Total",tooltip:"Cantidad total que este cliente le debe.",isLeaf:!0},{key:"user_id/id",title:"Comercial dedicado",tooltip:"\uFEFFEl usuario interno que se encarga de comunicarse con esta empresa si hay.",isLeaf:!1},{key:"vat",title:"CIF/NIF",tooltip:"Número CIF/NIF. Marque esta caja si la empresa está sujeta al IVA. Se utiliza para la declaración legal del IVA.",isLeaf:!0},{key:"vat_subjected",title:"Declaración Legal del NIF",tooltip:"Marque esta casilla si el partner está sujeto al NIF. Se utilizará para la declaración legal del NIF.",isLeaf:!0},{key:"website",title:"Sitio web",isLeaf:!0}]),onGetPredefinedExports:async()=>(console.log("onGetPredefinedExports"),await new Promise(e=>setTimeout(e,1e3)),console.log("onGetPredefinedExports 2"),{predefinedExports:[{id:3,name:"Exportación de prueba 3",fields:[{key:"active/contador"},{key:"parent1/parent2/test"}]},{id:1,name:"Exportación de prueba",fields:[{key:"active"}]},{id:2,name:"Exportación de prueba 2",fields:[{key:"city"}]}],keysWithChilds:[]}),onSavePredefinedExport:async e=>(await new Promise(t=>setTimeout(t,3e3)),console.log("onSavePredefinedExport: "+JSON.stringify(e,null,2)),{...e,id:e.id?e.id:Math.floor(Math.random()*1e3)}),onRemovePredefinedExport:async e=>(console.log("onRemovePredefinedExport: "+JSON.stringify(e,null,2)),await new Promise(t=>setTimeout(t,3e3)))})]})};var r,a,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(false);
  return <>
      <Button onClick={() => {
      setVisible(true);
    }}>
        Open modal
      </Button>
      <ExportModal visible={visible} onCancel={() => {
      setVisible(false);
    }} onSucceed={async (options: ExportOptions) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      // throw new Error("Example error");
      setVisible(false);
      console.log(options);
      return;
    }} locale="en_US"
    // selectedKeys={["active"]}
    selectedKeys={[]} totalRegisters={92348} visibleRegisters={8} selectedRegistersToExport={32} onGetFieldChilds={async (key: string) => {
      console.log("onGetFieldChilds: " + key);
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (key === "active") {
        return [{
          key: "active/contador",
          title: "Activo/Contador",
          tooltip: "Help",
          isLeaf: true
        }, {
          key: "active/code",
          title: "Activo/Código",
          isLeaf: true,
          required: true
        }];
      } else if (key === "parent1") {
        return [{
          key: "parent1/parent2",
          title: "parent1/parent2",
          tooltip: "Help",
          isLeaf: false
        }];
      } else if (key === "parent1/parent2") {
        return [{
          key: "parent1/parent2/test",
          title: "parent1/parent2/test",
          tooltip: "Help",
          isLeaf: true
        }];
      }
      return [];
    }} onGetFields={async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return [{
        key: "active",
        title: "Activo",
        isLeaf: false
      }, {
        key: "parent1",
        title: "Parent1",
        isLeaf: false
      }, {
        key: "address/id",
        title: "Contactos",
        isLeaf: false
      }, {
        key: "bank_ids/id",
        title: "Bancos",
        isLeaf: false
      }, {
        key: "category_id/id",
        title: "Categorías",
        isLeaf: false
      }, {
        key: "child_ids/id",
        title: "Ref. empresa",
        isLeaf: false
      }, {
        key: "cifnif",
        title: "CIF/NIF",
        isLeaf: true
      }, {
        key: "city",
        title: "Ciudad",
        isLeaf: true
      }, {
        key: "codigo_contable",
        title: "Código contable",
        isLeaf: true
      }, {
        key: "comercial",
        title: "Nombre comercial",
        isLeaf: true
      }, {
        key: "comment",
        title: "Notas",
        isLeaf: true
      }, {
        key: "credit",
        title: "Total a cobrar",
        tooltip: "Importe total que este cliente le debe.",
        isLeaf: true
      }, {
        key: "credit_limit",
        title: "Crédito concedido",
        isLeaf: true
      }, {
        key: "customer",
        title: "Cliente",
        tooltip: "Marque esta opción si la empresa es un cliente.",
        isLeaf: true
      }, {
        key: "date",
        title: "Fecha",
        isLeaf: true
      }, {
        key: "debit",
        title: "Total a pagar",
        tooltip: "Importe total que debe pagar a este proveedor.",
        isLeaf: true
      }, {
        key: "debit_limit",
        title: "Límite a pagar",
        isLeaf: true
      }, {
        key: "ean13",
        title: "EAN13",
        isLeaf: true
      }, {
        key: "emails",
        title: "Emails",
        isLeaf: true
      }, {
        key: "energy_sector",
        title: "Sector de energía",
        isLeaf: true
      }, {
        key: "events/id",
        title: "Eventos",
        isLeaf: false
      }, {
        key: "has_debt",
        title: "Tiene deuda",
        isLeaf: true
      }, {
        key: "lang",
        title: "Idioma",
        tooltip: "Si el idioma seleccionado está instalado en el sistema, todos los documentos relacionados con esta empresa serán mostrados en este idioma. Si no, serán mostrados en inglés.",
        isLeaf: true
      }, {
        key: "name",
        title: "Nombre",
        required: true,
        isLeaf: true
      }, {
        key: "ov_users_ids/id",
        title: "Usuarios Oficina Virtual",
        isLeaf: false
      }, {
        key: "parent_id/id",
        title: "Empresa principal",
        isLeaf: false
      }, {
        key: "payment_type_customer/id",
        title: "Tipo de pago de cliente",
        tooltip: "Tipo de pago como cliente.",
        isLeaf: false
      }, {
        key: "payment_type_supplier/id",
        title: "Tipo de pago de proveedor",
        tooltip: "Tipo de pago como proveedor.",
        isLeaf: false
      }, {
        key: "ref",
        title: "Código",
        isLeaf: true
      }, {
        key: "ref2",
        title: "Ref2",
        isLeaf: true
      }, {
        key: "ref_companies/id",
        title: "Compañías que se refieren a la empresa",
        isLeaf: false
      }, {
        key: "representante_id/id",
        title: "Representante",
        isLeaf: false
      }, {
        key: "supplier",
        title: "Proveedor",
        tooltip: "Marque esta opción si la empresa es un proveedor. Si no está marcada no será visible al introducir un pedido de compra.",
        isLeaf: true
      }, {
        key: "title",
        title: "Título",
        isLeaf: true
      }, {
        key: "total_debt",
        title: "Deuda Total",
        tooltip: "Cantidad total que este cliente le debe.",
        isLeaf: true
      }, {
        key: "user_id/id",
        title: "Comercial dedicado",
        tooltip: "\uFEFFEl usuario interno que se encarga de comunicarse con esta empresa si hay.",
        isLeaf: false
      }, {
        key: "vat",
        title: "CIF/NIF",
        tooltip: "Número CIF/NIF. Marque esta caja si la empresa está sujeta al IVA. Se utiliza para la declaración legal del IVA.",
        isLeaf: true
      }, {
        key: "vat_subjected",
        title: "Declaración Legal del NIF",
        tooltip: "Marque esta casilla si el partner está sujeto al NIF. Se utilizará para la declaración legal del NIF.",
        isLeaf: true
      }, {
        key: "website",
        title: "Sitio web",
        isLeaf: true
      }];
    }} onGetPredefinedExports={async () => {
      console.log("onGetPredefinedExports");
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("onGetPredefinedExports 2");
      return {
        predefinedExports: [{
          id: 3,
          name: "Exportación de prueba 3",
          fields: [{
            key: "active/contador"
          }, {
            key: "parent1/parent2/test"
          }]
        }, {
          id: 1,
          name: "Exportación de prueba",
          fields: [{
            key: "active"
          }]
        }, {
          id: 2,
          name: "Exportación de prueba 2",
          fields: [{
            key: "city"
          }]
        }],
        keysWithChilds: []
      };
    }} onSavePredefinedExport={async (options: PredefinedExport) => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      console.log("onSavePredefinedExport: " + JSON.stringify(options, null, 2));
      return {
        ...options,
        id: options.id ? options.id : Math.floor(Math.random() * 1000)
      };
    }} onRemovePredefinedExport={async (options: PredefinedExport) => {
      console.log("onRemovePredefinedExport: " + JSON.stringify(options, null, 2));
      return await new Promise(resolve => setTimeout(resolve, 3000));
    }} />
    </>;
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const vt=["Default"];export{o as Default,vt as __namedExportsOrder,gt as default};
