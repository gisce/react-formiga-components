import { FormInstance } from "antd";

export type FormProps = {
  onFieldsChange?: () => void;
  children: React.ReactNode;
  initialValues: any;
  form: FormInstance;
};
