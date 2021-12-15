import React from "react";
import { Form as AntForm } from "antd";
import { FormProps } from "./Form.types";

export const Form = (props: FormProps) => {
  const { onFieldsChange, children } = props;
  const [antForm] = AntForm.useForm();

  return (
    <AntForm
      form={antForm}
      onFieldsChange={() => {
        onFieldsChange?.();
      }}
      component={false}
      preserve={false}
    >
      {children}
    </AntForm>
  );
};
