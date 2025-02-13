import{j as i}from"./jsx-runtime-f6d73c06.js";import{r as d}from"./index-8ee6c85d.js";import{E as l}from"./ExportModal-e7aadddf.js";import{B as m}from"./button-6d884b97.js";import"./_commonjsHelpers-de833af9.js";import"./TranslatableInput-0a4d2e95.js";import"./LocaleContext-02870291.js";import"./theme-ac0bd082.js";import"./ButtonWithTooltip-4239f9c8.js";import"./index-71762a4a.js";import"./index-916df0c6.js";import"./assertThisInitialized-4fab7dd0.js";import"./index-8eb238e3.js";import"./index-9c320998.js";import"./toArray-08f3fa85.js";import"./isVisible-c2160674.js";import"./motion-343f592f.js";import"./roundedArrow-35bcc62e.js";import"./reactNode-c432c2b0.js";import"./Compact-11981144.js";import"./TextArea-f4011b25.js";import"./CloseCircleFilled-33e5256a.js";import"./useVariants-3e3137fc.js";import"./context-4be339a9.js";import"./asyncToGenerator-5190802c.js";import"./omit-db8b152c.js";import"./index-b67453a2.js";import"./compact-item-43eba85b.js";import"./row-35453298.js";import"./index-c95a45d0.js";import"./CloseOutlined-e9b63884.js";import"./LoadingOutlined-74a4b1e9.js";import"./CheckOutlined-42026b46.js";import"./index-af8800a2.js";import"./index-d8807b5c.js";import"./CheckCircleFilled-363e340b.js";import"./ExclamationCircleFilled-3599e5f5.js";import"./InfoCircleFilled-0b03cadd.js";import"./KeyCode-6413d982.js";import"./PurePanel-5fd7e678.js";import"./useLocale-7291e1d6.js";import"./index-fce1f0c7.js";import"./index-7cedb0b2.js";import"./index-a34c119a.js";import"./SearchOutlined-0dad7535.js";import"./SaveOutlined-fd4092c9.js";import"./Button-8b62cb42.js";import"./styled-components.browser.esm-f5d1b584.js";import"./Label-81c42596.js";import"./Separator-c1b7b7c4.js";import"./FieldSet-ea21f50d.js";import"./Dropdown-b6b19b2c.js";import"./FormigaConfig-4316f169.js";import"./index-ac790217.js";import"./RightOutlined-ec7eb7b5.js";import"./Overflow-3bd2f60e.js";import"./slide-5b44b169.js";import"./collapse-97de76d4.js";import"./DropdownButton-8aa04bf7.js";import"./DownOutlined-753a30af.js";import"./Field-bf48cf23.js";import"./PaginationHeader-5df943a7.js";import"./SelectAllRecordsRow-5b967f94.js";import"./EditOutlined-a488172a.js";import"./EnterOutlined-006f821b.js";import"./LeftOutlined-7fdbb18c.js";import"./index-850ee6f4.js";import"./BooleanInput-b9c9c53b.js";import"./index-a702c3c1.js";import"./BooleanValue-4eb83b44.js";import"./BooleanSearch-c5bdda3f.js";import"./SelectionInput-8fb27b15.js";import"./SelectionValue-320cacef.js";import"./CharInput-123bce88.js";import"./CharSearch-c8505e68.js";import"./CharValue-c620fcc1.js";import"./DateInput-0f3831ae.js";import"./index-88c67c55.js";import"./DateSearch-979eed3b.js";import"./DateSearch.types-d0dadd73.js";import"./DateTimeSearch-f4a4a3c5.js";import"./ImageValue-0866ffb4.js";import"./TextInput-40282f5f.js";import"./isIP-81fa1166.js";import"./EmailInput-11a5578c.js";import"./UrlInput-120587e8.js";import"./ProgressBarValue-e84272aa.js";import"./Many2OneDummy-da27af59.js";import"./Many2OneValue-fc60d488.js";import"./Many2OneInput-bf90efab.js";import"./HTMLPreview-24212570.js";const Qe={title:"Components/Export/ExportModal",component:l},n=()=>{const[p,o]=d.useState(!1);return i.jsxs(i.Fragment,{children:[i.jsx(m,{onClick:()=>{o(!0)},children:"Open modal"}),i.jsx(l,{visible:p,onCancel:()=>{o(!1)},onSucceed:async e=>{await new Promise(t=>setTimeout(t,1e3)),o(!1),console.log(e)},locale:"en_US",selectedKeys:[],totalRegisters:92348,visibleRegisters:8,selectedRegistersToExport:32,onGetFieldChilds:async e=>(console.log("onGetFieldChilds: "+e),await new Promise(t=>setTimeout(t,1e3)),e==="active"?[{key:"active/contador",title:"Activo/Contador",tooltip:"Help",isLeaf:!0},{key:"active/code",title:"Activo/Código",isLeaf:!0,required:!0}]:e==="parent1"?[{key:"parent1/parent2",title:"parent1/parent2",tooltip:"Help",isLeaf:!1}]:e==="parent1/parent2"?[{key:"parent1/parent2/test",title:"parent1/parent2/test",tooltip:"Help",isLeaf:!0}]:[]),onGetFields:async()=>(await new Promise(e=>setTimeout(e,1e3)),[{key:"active",title:"Activo",isLeaf:!1},{key:"parent1",title:"Parent1",isLeaf:!1},{key:"address/id",title:"Contactos",isLeaf:!1},{key:"bank_ids/id",title:"Bancos",isLeaf:!1},{key:"category_id/id",title:"Categorías",isLeaf:!1},{key:"child_ids/id",title:"Ref. empresa",isLeaf:!1},{key:"cifnif",title:"CIF/NIF",isLeaf:!0},{key:"city",title:"Ciudad",isLeaf:!0},{key:"codigo_contable",title:"Código contable",isLeaf:!0},{key:"comercial",title:"Nombre comercial",isLeaf:!0},{key:"comment",title:"Notas",isLeaf:!0},{key:"credit",title:"Total a cobrar",tooltip:"Importe total que este cliente le debe.",isLeaf:!0},{key:"credit_limit",title:"Crédito concedido",isLeaf:!0},{key:"customer",title:"Cliente",tooltip:"Marque esta opción si la empresa es un cliente.",isLeaf:!0},{key:"date",title:"Fecha",isLeaf:!0},{key:"debit",title:"Total a pagar",tooltip:"Importe total que debe pagar a este proveedor.",isLeaf:!0},{key:"debit_limit",title:"Límite a pagar",isLeaf:!0},{key:"ean13",title:"EAN13",isLeaf:!0},{key:"emails",title:"Emails",isLeaf:!0},{key:"energy_sector",title:"Sector de energía",isLeaf:!0},{key:"events/id",title:"Eventos",isLeaf:!1},{key:"has_debt",title:"Tiene deuda",isLeaf:!0},{key:"lang",title:"Idioma",tooltip:"Si el idioma seleccionado está instalado en el sistema, todos los documentos relacionados con esta empresa serán mostrados en este idioma. Si no, serán mostrados en inglés.",isLeaf:!0},{key:"name",title:"Nombre",required:!0,isLeaf:!0},{key:"ov_users_ids/id",title:"Usuarios Oficina Virtual",isLeaf:!1},{key:"parent_id/id",title:"Empresa principal",isLeaf:!1},{key:"payment_type_customer/id",title:"Tipo de pago de cliente",tooltip:"Tipo de pago como cliente.",isLeaf:!1},{key:"payment_type_supplier/id",title:"Tipo de pago de proveedor",tooltip:"Tipo de pago como proveedor.",isLeaf:!1},{key:"ref",title:"Código",isLeaf:!0},{key:"ref2",title:"Ref2",isLeaf:!0},{key:"ref_companies/id",title:"Compañías que se refieren a la empresa",isLeaf:!1},{key:"representante_id/id",title:"Representante",isLeaf:!1},{key:"supplier",title:"Proveedor",tooltip:"Marque esta opción si la empresa es un proveedor. Si no está marcada no será visible al introducir un pedido de compra.",isLeaf:!0},{key:"title",title:"Título",isLeaf:!0},{key:"total_debt",title:"Deuda Total",tooltip:"Cantidad total que este cliente le debe.",isLeaf:!0},{key:"user_id/id",title:"Comercial dedicado",tooltip:"\uFEFFEl usuario interno que se encarga de comunicarse con esta empresa si hay.",isLeaf:!1},{key:"vat",title:"CIF/NIF",tooltip:"Número CIF/NIF. Marque esta caja si la empresa está sujeta al IVA. Se utiliza para la declaración legal del IVA.",isLeaf:!0},{key:"vat_subjected",title:"Declaración Legal del NIF",tooltip:"Marque esta casilla si el partner está sujeto al NIF. Se utilizará para la declaración legal del NIF.",isLeaf:!0},{key:"website",title:"Sitio web",isLeaf:!0}]),onGetPredefinedExports:async()=>(console.log("onGetPredefinedExports"),await new Promise(e=>setTimeout(e,1e3)),console.log("onGetPredefinedExports 2"),{predefinedExports:[{id:3,name:"Exportación de prueba 3",fields:[{key:"active/contador"},{key:"parent1/parent2/test"}]},{id:1,name:"Exportación de prueba",fields:[{key:"active"}]},{id:2,name:"Exportación de prueba 2",fields:[{key:"city"}]}],keysWithChilds:[]}),onSavePredefinedExport:async e=>(await new Promise(t=>setTimeout(t,3e3)),console.log("onSavePredefinedExport: "+JSON.stringify(e,null,2)),{...e,id:e.id?e.id:Math.floor(Math.random()*1e3)}),onRemovePredefinedExport:async e=>(console.log("onRemovePredefinedExport: "+JSON.stringify(e,null,2)),await new Promise(t=>setTimeout(t,3e3)))})]})};var r,a,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(s=(a=n.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const Xe=["Default"];export{n as Default,Xe as __namedExportsOrder,Qe as default};
