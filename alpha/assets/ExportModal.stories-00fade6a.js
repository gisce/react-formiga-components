import{j as i}from"./jsx-runtime-ffb262ed.js";import{r as d}from"./index-76fb7be0.js";import{E as l}from"./ExportModal-bbb2c4a4.js";import{B as m}from"./button-a839f4af.js";import"./_commonjsHelpers-de833af9.js";import"./TranslatableInput-5fd8e0e6.js";import"./LocaleContext-7544963d.js";import"./theme-ac0bd082.js";import"./ButtonWithTooltip-258604a1.js";import"./index-6179d90a.js";import"./index-86654eeb.js";import"./assertThisInitialized-11245cea.js";import"./genStyleUtils-d6a45a29.js";import"./index-d7c29613.js";import"./index-da03a860.js";import"./index-ed1c3b01.js";import"./context-6d1b332f.js";import"./wrapNativeSuper-e3a961e5.js";import"./roundedArrow-d6561726.js";import"./Compact-cceb4eea.js";import"./useSize-4ffb0e60.js";import"./motion-bd90a81e.js";import"./reactNode-9d24d027.js";import"./TextArea-294b3566.js";import"./CloseCircleFilled-0d882928.js";import"./CloseCircleFilled-257b815e.js";import"./AntdIcon-2c3fcfd3.js";import"./useVariants-911433c9.js";import"./useCSSVarCls-e631847e.js";import"./index-7d845360.js";import"./compact-item-b07e9fb6.js";import"./LoadingOutlined-722c611a.js";import"./row-29336662.js";import"./index-6855c02b.js";import"./TranslationOutlined-f18a9657.js";import"./CloseOutlined-9385a5da.js";import"./AntdIcon-16889e64.js";import"./LoadingOutlined-50148ceb.js";import"./CheckOutlined-50c2f25f.js";import"./CheckOutlined-c7cbec95.js";import"./index-aa7d34db.js";import"./index-6fce385f.js";import"./CheckCircleFilled-b250ff1c.js";import"./CheckCircleFilled-1392c7ce.js";import"./ExclamationCircleFilled-866a3ba1.js";import"./ExclamationCircleFilled-eba6e68e.js";import"./InfoCircleFilled-b3f1fed2.js";import"./InfoCircleFilled-baaa675e.js";import"./CloseOutlined-3cbc20fa.js";import"./KeyCode-6413d982.js";import"./SearchOutlined-dde1385d.js";import"./SearchOutlined-11b57711.js";import"./useLocale-c6a3bdb5.js";import"./PurePanel-4203f4df.js";import"./index-6694d78a.js";import"./index-251fb585.js";import"./index-19b540cb.js";import"./EyeInvisibleOutlined-4021859d.js";import"./SaveOutlined-2cbe660a.js";import"./LeftOutlined-9040821c.js";import"./Button-4a78d3ea.js";import"./styled-components.browser.esm-19c13f0d.js";import"./Label-9d33cffb.js";import"./QuestionCircleOutlined-35a42c77.js";import"./Separator-d3a61139.js";import"./FieldSet-9a505fc9.js";import"./Dropdown-e4132023.js";import"./FormigaConfig-9cbca869.js";import"./index-ac790217.js";import"./LeftOutlined-70f24ca2.js";import"./Overflow-155bdf1c.js";import"./MobileOutlined-0a25c820.js";import"./EnterOutlined-e9c5832e.js";import"./collapse-97de76d4.js";import"./DropdownButton-65280483.js";import"./DownOutlined-a1c00498.js";import"./DownOutlined-3b14e6aa.js";import"./Field-c75a7856.js";import"./PaginationHeader-7e9b7c15.js";import"./SelectAllRecordsRow-e31b52e9.js";import"./EditOutlined-401a1613.js";import"./CheckOutlined-5e306298.js";import"./CopyOutlined-d9215ad4.js";import"./CustomPageSizeOptions-87fa5508.js";import"./index-e9f47af8.js";import"./useIcons-f929f770.js";import"./DoubleRightOutlined-2bc158a0.js";import"./Icon-9eeb88f1.js";import"./SwapRightOutlined-6c6c9e02.js";import"./EditOutlined-da0c6f00.js";import"./FolderOpenOutlined-fe949aba.js";import"./SearchOutlined-9f8470fd.js";import"./iframe-c81296a1.js";import"../sb-preview/runtime.js";import"./BooleanInput-1bb47799.js";import"./index-82f64fd7.js";import"./BooleanValue-21c313d0.js";import"./BooleanSearch-ac16313a.js";import"./SelectionInput-cf04eecc.js";import"./SelectionValue-96da39fb.js";import"./CharInput-d094b3c3.js";import"./CharSearch-47579e42.js";import"./CharValue-93e6e3fc.js";import"./DateInput-1e5d7837.js";import"./index-789d72b6.js";import"./DateSearch-7e52941a.js";import"./DateSearch.types-d0dadd73.js";import"./DateTimeSearch-d8cbc8c5.js";import"./ImageValue-d61a2ca6.js";import"./TextInput-e168b865.js";import"./isIP-55c6479a.js";import"./EmailInput-0f4c8629.js";import"./UrlInput-82d19e25.js";import"./ProgressBarValue-6d7b36e7.js";import"./Many2OneDummy-e1fa32c1.js";import"./Many2OneValue-fe6d5f3a.js";import"./Many2OneInput-939deb08.js";import"./HTMLPreview-55c4d4c8.js";const bt={title:"Components/Export/ExportModal",component:l},o=()=>{const[p,n]=d.useState(!1);return i.jsxs(i.Fragment,{children:[i.jsx(m,{onClick:()=>{n(!0)},children:"Open modal"}),i.jsx(l,{visible:p,onCancel:()=>{n(!1)},onSucceed:async e=>{await new Promise(t=>setTimeout(t,1e3)),n(!1),console.log(e)},locale:"en_US",selectedKeys:[],totalRegisters:92348,visibleRegisters:8,selectedRegistersToExport:32,onGetFieldChilds:async e=>(console.log("onGetFieldChilds: "+e),await new Promise(t=>setTimeout(t,1e3)),e==="active"?[{key:"active/contador",title:"Activo/Contador",tooltip:"Help",isLeaf:!0},{key:"active/code",title:"Activo/Código",isLeaf:!0,required:!0}]:e==="parent1"?[{key:"parent1/parent2",title:"parent1/parent2",tooltip:"Help",isLeaf:!1}]:e==="parent1/parent2"?[{key:"parent1/parent2/test",title:"parent1/parent2/test",tooltip:"Help",isLeaf:!0}]:[]),onGetFields:async()=>(await new Promise(e=>setTimeout(e,1e3)),[{key:"active",title:"Activo",isLeaf:!1},{key:"parent1",title:"Parent1",isLeaf:!1},{key:"address/id",title:"Contactos",isLeaf:!1},{key:"bank_ids/id",title:"Bancos",isLeaf:!1},{key:"category_id/id",title:"Categorías",isLeaf:!1},{key:"child_ids/id",title:"Ref. empresa",isLeaf:!1},{key:"cifnif",title:"CIF/NIF",isLeaf:!0},{key:"city",title:"Ciudad",isLeaf:!0},{key:"codigo_contable",title:"Código contable",isLeaf:!0},{key:"comercial",title:"Nombre comercial",isLeaf:!0},{key:"comment",title:"Notas",isLeaf:!0},{key:"credit",title:"Total a cobrar",tooltip:"Importe total que este cliente le debe.",isLeaf:!0},{key:"credit_limit",title:"Crédito concedido",isLeaf:!0},{key:"customer",title:"Cliente",tooltip:"Marque esta opción si la empresa es un cliente.",isLeaf:!0},{key:"date",title:"Fecha",isLeaf:!0},{key:"debit",title:"Total a pagar",tooltip:"Importe total que debe pagar a este proveedor.",isLeaf:!0},{key:"debit_limit",title:"Límite a pagar",isLeaf:!0},{key:"ean13",title:"EAN13",isLeaf:!0},{key:"emails",title:"Emails",isLeaf:!0},{key:"energy_sector",title:"Sector de energía",isLeaf:!0},{key:"events/id",title:"Eventos",isLeaf:!1},{key:"has_debt",title:"Tiene deuda",isLeaf:!0},{key:"lang",title:"Idioma",tooltip:"Si el idioma seleccionado está instalado en el sistema, todos los documentos relacionados con esta empresa serán mostrados en este idioma. Si no, serán mostrados en inglés.",isLeaf:!0},{key:"name",title:"Nombre",required:!0,isLeaf:!0},{key:"ov_users_ids/id",title:"Usuarios Oficina Virtual",isLeaf:!1},{key:"parent_id/id",title:"Empresa principal",isLeaf:!1},{key:"payment_type_customer/id",title:"Tipo de pago de cliente",tooltip:"Tipo de pago como cliente.",isLeaf:!1},{key:"payment_type_supplier/id",title:"Tipo de pago de proveedor",tooltip:"Tipo de pago como proveedor.",isLeaf:!1},{key:"ref",title:"Código",isLeaf:!0},{key:"ref2",title:"Ref2",isLeaf:!0},{key:"ref_companies/id",title:"Compañías que se refieren a la empresa",isLeaf:!1},{key:"representante_id/id",title:"Representante",isLeaf:!1},{key:"supplier",title:"Proveedor",tooltip:"Marque esta opción si la empresa es un proveedor. Si no está marcada no será visible al introducir un pedido de compra.",isLeaf:!0},{key:"title",title:"Título",isLeaf:!0},{key:"total_debt",title:"Deuda Total",tooltip:"Cantidad total que este cliente le debe.",isLeaf:!0},{key:"user_id/id",title:"Comercial dedicado",tooltip:"\uFEFFEl usuario interno que se encarga de comunicarse con esta empresa si hay.",isLeaf:!1},{key:"vat",title:"CIF/NIF",tooltip:"Número CIF/NIF. Marque esta caja si la empresa está sujeta al IVA. Se utiliza para la declaración legal del IVA.",isLeaf:!0},{key:"vat_subjected",title:"Declaración Legal del NIF",tooltip:"Marque esta casilla si el partner está sujeto al NIF. Se utilizará para la declaración legal del NIF.",isLeaf:!0},{key:"website",title:"Sitio web",isLeaf:!0}]),onGetPredefinedExports:async()=>(console.log("onGetPredefinedExports"),await new Promise(e=>setTimeout(e,1e3)),console.log("onGetPredefinedExports 2"),{predefinedExports:[{id:3,name:"Exportación de prueba 3",fields:[{key:"active/contador"},{key:"parent1/parent2/test"}]},{id:1,name:"Exportación de prueba",fields:[{key:"active"}]},{id:2,name:"Exportación de prueba 2",fields:[{key:"city"}]}],keysWithChilds:[]}),onSavePredefinedExport:async e=>(await new Promise(t=>setTimeout(t,3e3)),console.log("onSavePredefinedExport: "+JSON.stringify(e,null,2)),{...e,id:e.id?e.id:Math.floor(Math.random()*1e3)}),onRemovePredefinedExport:async e=>(console.log("onRemovePredefinedExport: "+JSON.stringify(e,null,2)),await new Promise(t=>setTimeout(t,3e3)))})]})};var r,a,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const Ft=["Default"];export{o as Default,Ft as __namedExportsOrder,bt as default};
