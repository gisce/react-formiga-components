import { Form as AntForm } from "antd";
import { FormProps } from "./Form.types";

export const Form = (props: FormProps) => {
  const { onFieldsChange, children, initialValues, form: formProps } = props;
  const [newForm] = AntForm.useForm();
  const form = formProps || newForm;

  return (
    <AntForm
      form={form}
      initialValues={initialValues}
      onFieldsChange={onFieldsChange}
      component={false}
    >
      {children}
    </AntForm>
  );
};
