import React from "react";
import { Form as AntForm } from "antd";
import { FormProps } from "./Form.types";

export const Form = (props: FormProps) => {
  const { onFieldsChange, children, initialValues } = props;
  const [antForm] = AntForm.useForm();

  return (
    <AntForm
      form={antForm}
      initialValues={initialValues}
      onFieldsChange={() => {
        onFieldsChange?.();
      }}
      component={false}
    >
      {children}
    </AntForm>
  );
};
