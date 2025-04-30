import{j as i}from"./jsx-runtime-f6d73c06.js";import{r as d}from"./index-8ee6c85d.js";import{E as l}from"./ExportModal-0319380d.js";import{B as m}from"./button-2909d44f.js";import"./_commonjsHelpers-de833af9.js";import"./TranslatableInput-d8995e89.js";import"./LocaleContext-1c35ce14.js";import"./theme-ac0bd082.js";import"./ButtonWithTooltip-4a4c058d.js";import"./index-b9328d6e.js";import"./index-7e3d7086.js";import"./extends-4c19d496.js";import"./index-7fae86d9.js";import"./index-f2765735.js";import"./assertThisInitialized-68330e5d.js";import"./index-8eb238e3.js";import"./toArray-66e39049.js";import"./AntdIcon-f4df470f.js";import"./isVisible-2ef80b15.js";import"./motion-343f592f.js";import"./roundedArrow-c768ecf1.js";import"./reactNode-c432c2b0.js";import"./Compact-1edd4e66.js";import"./TextArea-0261af0a.js";import"./CloseCircleFilled-53e5d3ad.js";import"./useVariants-2f2c5e71.js";import"./context-29a3839d.js";import"./asyncToGenerator-aa14e566.js";import"./omit-f8286760.js";import"./index-7fe11ddc.js";import"./compact-item-43eba85b.js";import"./row-1c3eec31.js";import"./index-e8805335.js";import"./CloseOutlined-9873f370.js";import"./LoadingOutlined-8eb7bab6.js";import"./CheckOutlined-c598d246.js";import"./index-3b9fbcf0.js";import"./index-eab29bb3.js";import"./CheckCircleFilled-f858369c.js";import"./ExclamationCircleFilled-95aa70b7.js";import"./InfoCircleFilled-99d8f615.js";import"./KeyCode-6413d982.js";import"./PurePanel-3a5c693e.js";import"./useLocale-8ec28e87.js";import"./index-a06260e4.js";import"./index-5a2dee05.js";import"./index-ba0b8bee.js";import"./EyeOutlined-a0dd78d5.js";import"./SearchOutlined-061923d8.js";import"./TranslationOutlined-3ef0e566.js";import"./SaveOutlined-588b3b07.js";import"./Button-0e005045.js";import"./styled-components.browser.esm-8d5db3cb.js";import"./Label-a0758a30.js";import"./QuestionCircleOutlined-040d7c9d.js";import"./Separator-6ec5805e.js";import"./FieldSet-0bcc7235.js";import"./Dropdown-59363ef2.js";import"./FormigaConfig-18203694.js";import"./index-ac790217.js";import"./RightOutlined-3577b038.js";import"./Overflow-ab5219ad.js";import"./MobileOutlined-6746e333.js";import"./slide-576a84f6.js";import"./collapse-97de76d4.js";import"./DropdownButton-72f9ff93.js";import"./DownOutlined-94332e23.js";import"./Field-c130abcd.js";import"./PaginationHeader-9f7a7582.js";import"./SelectAllRecordsRow-080fa8eb.js";import"./CopyOutlined-c7dbe84a.js";import"./EditOutlined-317b89bc.js";import"./EnterOutlined-4d824f6a.js";import"./CustomPageSizeOptions-906cd28f.js";import"./index-ac1caf15.js";import"./DoubleRightOutlined-64e70b30.js";import"./LeftOutlined-571ca123.js";import"./Icon-d25147a3.js";import"./SwapRightOutlined-51331692.js";import"./FolderOpenOutlined-38e7df5a.js";import"./iframe-8ec279c1.js";import"../sb-preview/runtime.js";import"./BooleanInput-78f0d9a5.js";import"./index-46c27e92.js";import"./BooleanValue-57cb4b47.js";import"./BooleanSearch-01fef309.js";import"./SelectionInput-87427970.js";import"./SelectionValue-320cacef.js";import"./CharInput-1af9f6db.js";import"./CharSearch-6dc12644.js";import"./CharValue-c620fcc1.js";import"./DateInput-45ec953b.js";import"./index-6c96d8c1.js";import"./DateSearch-b8c1eea5.js";import"./DateSearch.types-d0dadd73.js";import"./DateTimeSearch-7eeeafe5.js";import"./ImageValue-0866ffb4.js";import"./TextInput-3c3f7bae.js";import"./isIP-d795ad97.js";import"./EmailInput-7384f805.js";import"./UrlInput-b9f747c9.js";import"./ProgressBarValue-a1cecb86.js";import"./Many2OneDummy-cd76af86.js";import"./Many2OneValue-59216ee8.js";import"./Many2OneInput-929379cf.js";import"./HTMLPreview-24212570.js";const dt={title:"Components/Export/ExportModal",component:l},n=()=>{const[p,o]=d.useState(!1);return i.jsxs(i.Fragment,{children:[i.jsx(m,{onClick:()=>{o(!0)},children:"Open modal"}),i.jsx(l,{visible:p,onCancel:()=>{o(!1)},onSucceed:async e=>{await new Promise(t=>setTimeout(t,1e3)),o(!1),console.log(e)},locale:"en_US",selectedKeys:[],totalRegisters:92348,visibleRegisters:8,selectedRegistersToExport:32,onGetFieldChilds:async e=>(console.log("onGetFieldChilds: "+e),await new Promise(t=>setTimeout(t,1e3)),e==="active"?[{key:"active/contador",title:"Activo/Contador",tooltip:"Help",isLeaf:!0},{key:"active/code",title:"Activo/Código",isLeaf:!0,required:!0}]:e==="parent1"?[{key:"parent1/parent2",title:"parent1/parent2",tooltip:"Help",isLeaf:!1}]:e==="parent1/parent2"?[{key:"parent1/parent2/test",title:"parent1/parent2/test",tooltip:"Help",isLeaf:!0}]:[]),onGetFields:async()=>(await new Promise(e=>setTimeout(e,1e3)),[{key:"active",title:"Activo",isLeaf:!1},{key:"parent1",title:"Parent1",isLeaf:!1},{key:"address/id",title:"Contactos",isLeaf:!1},{key:"bank_ids/id",title:"Bancos",isLeaf:!1},{key:"category_id/id",title:"Categorías",isLeaf:!1},{key:"child_ids/id",title:"Ref. empresa",isLeaf:!1},{key:"cifnif",title:"CIF/NIF",isLeaf:!0},{key:"city",title:"Ciudad",isLeaf:!0},{key:"codigo_contable",title:"Código contable",isLeaf:!0},{key:"comercial",title:"Nombre comercial",isLeaf:!0},{key:"comment",title:"Notas",isLeaf:!0},{key:"credit",title:"Total a cobrar",tooltip:"Importe total que este cliente le debe.",isLeaf:!0},{key:"credit_limit",title:"Crédito concedido",isLeaf:!0},{key:"customer",title:"Cliente",tooltip:"Marque esta opción si la empresa es un cliente.",isLeaf:!0},{key:"date",title:"Fecha",isLeaf:!0},{key:"debit",title:"Total a pagar",tooltip:"Importe total que debe pagar a este proveedor.",isLeaf:!0},{key:"debit_limit",title:"Límite a pagar",isLeaf:!0},{key:"ean13",title:"EAN13",isLeaf:!0},{key:"emails",title:"Emails",isLeaf:!0},{key:"energy_sector",title:"Sector de energía",isLeaf:!0},{key:"events/id",title:"Eventos",isLeaf:!1},{key:"has_debt",title:"Tiene deuda",isLeaf:!0},{key:"lang",title:"Idioma",tooltip:"Si el idioma seleccionado está instalado en el sistema, todos los documentos relacionados con esta empresa serán mostrados en este idioma. Si no, serán mostrados en inglés.",isLeaf:!0},{key:"name",title:"Nombre",required:!0,isLeaf:!0},{key:"ov_users_ids/id",title:"Usuarios Oficina Virtual",isLeaf:!1},{key:"parent_id/id",title:"Empresa principal",isLeaf:!1},{key:"payment_type_customer/id",title:"Tipo de pago de cliente",tooltip:"Tipo de pago como cliente.",isLeaf:!1},{key:"payment_type_supplier/id",title:"Tipo de pago de proveedor",tooltip:"Tipo de pago como proveedor.",isLeaf:!1},{key:"ref",title:"Código",isLeaf:!0},{key:"ref2",title:"Ref2",isLeaf:!0},{key:"ref_companies/id",title:"Compañías que se refieren a la empresa",isLeaf:!1},{key:"representante_id/id",title:"Representante",isLeaf:!1},{key:"supplier",title:"Proveedor",tooltip:"Marque esta opción si la empresa es un proveedor. Si no está marcada no será visible al introducir un pedido de compra.",isLeaf:!0},{key:"title",title:"Título",isLeaf:!0},{key:"total_debt",title:"Deuda Total",tooltip:"Cantidad total que este cliente le debe.",isLeaf:!0},{key:"user_id/id",title:"Comercial dedicado",tooltip:"\uFEFFEl usuario interno que se encarga de comunicarse con esta empresa si hay.",isLeaf:!1},{key:"vat",title:"CIF/NIF",tooltip:"Número CIF/NIF. Marque esta caja si la empresa está sujeta al IVA. Se utiliza para la declaración legal del IVA.",isLeaf:!0},{key:"vat_subjected",title:"Declaración Legal del NIF",tooltip:"Marque esta casilla si el partner está sujeto al NIF. Se utilizará para la declaración legal del NIF.",isLeaf:!0},{key:"website",title:"Sitio web",isLeaf:!0}]),onGetPredefinedExports:async()=>(console.log("onGetPredefinedExports"),await new Promise(e=>setTimeout(e,1e3)),console.log("onGetPredefinedExports 2"),{predefinedExports:[{id:3,name:"Exportación de prueba 3",fields:[{key:"active/contador"},{key:"parent1/parent2/test"}]},{id:1,name:"Exportación de prueba",fields:[{key:"active"}]},{id:2,name:"Exportación de prueba 2",fields:[{key:"city"}]}],keysWithChilds:[]}),onSavePredefinedExport:async e=>(await new Promise(t=>setTimeout(t,3e3)),console.log("onSavePredefinedExport: "+JSON.stringify(e,null,2)),{...e,id:e.id?e.id:Math.floor(Math.random()*1e3)}),onRemovePredefinedExport:async e=>(console.log("onRemovePredefinedExport: "+JSON.stringify(e,null,2)),await new Promise(t=>setTimeout(t,3e3)))})]})};var r,a,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(s=(a=n.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const mt=["Default"];export{n as Default,mt as __namedExportsOrder,dt as default};
