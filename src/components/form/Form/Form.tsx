import { Form as AntForm } from "antd";
import { useEffect } from "react";
import { FormProps } from "./Form.types";

export const Form = (props: FormProps) => {
  const { onFieldsChange, children, initialValues, onMounted } = props;
  const [antForm] = AntForm.useForm();

  useEffect(() => {
    onMounted?.({ antForm });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AntForm
      form={antForm}
      initialValues={initialValues}
      onFieldsChange={onFieldsChange}
      component={false}
    >
      {children}
    </AntForm>
  );
};
