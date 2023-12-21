import { FormInstance } from "antd";

export type FormProps = {
  onFieldsChange?: () => void;
  children?: React.ReactNode;
  initialValues?: any;
  form?: FormInstance;
  onMounted?: (args: OnMountedArgs) => void;
};

export type OnMountedArgs = { antForm: FormInstance };
