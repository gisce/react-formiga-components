import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ExportModal } from "./ExportModal";
import { Button } from "antd";
import { ExportOptions, PredefinedExport } from "./ExportModal.types";

export default {
  title: "Components/Other/ExportModal",
  component: ExportModal,
} as ComponentMeta<typeof ExportModal>;

export const Default: ComponentStory<typeof ExportModal> = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        Open modal
      </Button>
      <ExportModal
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
        onSucceed={async (options: ExportOptions) => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          // throw new Error("Example error");
          setVisible(false);
          console.log(options);
          return;
        }}
        locale="en_US"
        // selectedKeys={["active"]}
        selectedKeys={[]}
        totalRegisters={92348}
        visibleRegisters={8}
        selectedRegistersToExport={32}
        onGetFieldChilds={async ({ key }: any) => {
          console.log("onGetFieldChilds: " + key);
          await new Promise((resolve) => setTimeout(resolve, 1000));

          if (key === "active") {
            return [
              {
                key: "active/contador",
                title: "Activo/Contador",
                tooltip: "Help",
                isLeaf: true,
              },
              {
                key: "active/code",
                title: "Activo/Código",
                isLeaf: true,
                required: true,
              },
            ];
          } else if (key === "parent1") {
            return [
              {
                key: "parent1/parent2",
                title: "parent1/parent2",
                tooltip: "Help",
                isLeaf: false,
              },
            ];
          } else if (key === "parent1/parent2") {
            return [
              {
                key: "parent1/parent2/test",
                title: "parent1/parent2/test",
                tooltip: "Help",
                isLeaf: true,
              },
            ];
          }
          return [];
        }}
        onGetFields={async () => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          return [
            {
              key: "active",
              title: "Activo",
              isLeaf: false,
            },
            {
              key: "parent1",
              title: "Parent1",
              isLeaf: false,
            },
            {
              key: "address/id",
              title: "Contactos",
              isLeaf: false,
            },
            {
              key: "bank_ids/id",
              title: "Bancos",
              isLeaf: false,
            },
            {
              key: "category_id/id",
              title: "Categorías",
              isLeaf: false,
            },
            {
              key: "child_ids/id",
              title: "Ref. empresa",
              isLeaf: false,
            },
            {
              key: "cifnif",
              title: "CIF/NIF",
              isLeaf: true,
            },
            {
              key: "city",
              title: "Ciudad",
              isLeaf: true,
            },
            {
              key: "codigo_contable",
              title: "Código contable",
              isLeaf: true,
            },
            {
              key: "comercial",
              title: "Nombre comercial",
              isLeaf: true,
            },
            {
              key: "comment",
              title: "Notas",
              isLeaf: true,
            },
            {
              key: "credit",
              title: "Total a cobrar",
              tooltip: "Importe total que este cliente le debe.",
              isLeaf: true,
            },
            {
              key: "credit_limit",
              title: "Crédito concedido",
              isLeaf: true,
            },
            {
              key: "customer",
              title: "Cliente",
              tooltip: "Marque esta opción si la empresa es un cliente.",
              isLeaf: true,
            },
            {
              key: "date",
              title: "Fecha",
              isLeaf: true,
            },
            {
              key: "debit",
              title: "Total a pagar",
              tooltip: "Importe total que debe pagar a este proveedor.",
              isLeaf: true,
            },
            {
              key: "debit_limit",
              title: "Límite a pagar",
              isLeaf: true,
            },
            {
              key: "ean13",
              title: "EAN13",
              isLeaf: true,
            },
            {
              key: "emails",
              title: "Emails",
              isLeaf: true,
            },
            {
              key: "energy_sector",
              title: "Sector de energía",
              isLeaf: true,
            },
            {
              key: "events/id",
              title: "Eventos",
              isLeaf: false,
            },
            {
              key: "has_debt",
              title: "Tiene deuda",
              isLeaf: true,
            },
            {
              key: "lang",
              title: "Idioma",
              tooltip:
                "Si el idioma seleccionado está instalado en el sistema, todos los documentos relacionados con esta empresa serán mostrados en este idioma. Si no, serán mostrados en inglés.",
              isLeaf: true,
            },
            {
              key: "name",
              title: "Nombre",
              required: true,
              isLeaf: true,
            },
            {
              key: "ov_users_ids/id",
              title: "Usuarios Oficina Virtual",
              isLeaf: false,
            },
            {
              key: "parent_id/id",
              title: "Empresa principal",
              isLeaf: false,
            },
            {
              key: "payment_type_customer/id",
              title: "Tipo de pago de cliente",
              tooltip: "Tipo de pago como cliente.",
              isLeaf: false,
            },
            {
              key: "payment_type_supplier/id",
              title: "Tipo de pago de proveedor",
              tooltip: "Tipo de pago como proveedor.",
              isLeaf: false,
            },
            {
              key: "ref",
              title: "Código",
              isLeaf: true,
            },
            {
              key: "ref2",
              title: "Ref2",
              isLeaf: true,
            },
            {
              key: "ref_companies/id",
              title: "Compañías que se refieren a la empresa",
              isLeaf: false,
            },
            {
              key: "representante_id/id",
              title: "Representante",
              isLeaf: false,
            },
            {
              key: "supplier",
              title: "Proveedor",
              tooltip:
                "Marque esta opción si la empresa es un proveedor. Si no está marcada no será visible al introducir un pedido de compra.",
              isLeaf: true,
            },
            {
              key: "title",
              title: "Título",
              isLeaf: true,
            },
            {
              key: "total_debt",
              title: "Deuda Total",
              tooltip: "Cantidad total que este cliente le debe.",
              isLeaf: true,
            },
            {
              key: "user_id/id",
              title: "Comercial dedicado",
              tooltip:
                "﻿El usuario interno que se encarga de comunicarse con esta empresa si hay.",
              isLeaf: false,
            },
            {
              key: "vat",
              title: "CIF/NIF",
              tooltip:
                "Número CIF/NIF. Marque esta caja si la empresa está sujeta al IVA. Se utiliza para la declaración legal del IVA.",
              isLeaf: true,
            },
            {
              key: "vat_subjected",
              title: "Declaración Legal del NIF",
              tooltip:
                "Marque esta casilla si el partner está sujeto al NIF. Se utilizará para la declaración legal del NIF.",
              isLeaf: true,
            },
            {
              key: "website",
              title: "Sitio web",
              isLeaf: true,
            },
          ];
        }}
        onGetPredefinedExports={async () => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          return [
            {
              id: 3,
              name: "Exportación de prueba 3",
              fields: [
                {
                  key: "active/contador",
                  title: "Activo/Contador",
                },
                {
                  key: "parent1/parent2/test",
                  title: "Parent1/Parent2/test",
                },
              ],
            },
            {
              id: 1,
              name: "Exportación de prueba",
              fields: [
                {
                  key: "active",
                  title: "Activo",
                },
              ],
            },
            {
              id: 2,
              name: "Exportación de prueba 2",
              fields: [
                {
                  key: "city",
                  title: "Ciudad",
                },
              ],
            },
          ];
        }}
        onSavePredefinedExport={async (options: PredefinedExport) => {
          new Promise((resolve) => setTimeout(resolve, 1000));
          return;
        }}
        onRemovePredefinedExport={async (id: number) => {
          new Promise((resolve) => setTimeout(resolve, 1000));
          return;
        }}
      />
    </>
  );
};
