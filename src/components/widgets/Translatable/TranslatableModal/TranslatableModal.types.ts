import { LocaleType } from "@/index";

export type TranslatableModalBaseProps = {
  model: string;
  id: number;
};

export type TranslatableDataMethods = {
  onGetLangs: () => Promise<Lang[]>;
  onUpdateValues: (opts: OnUpdateValuesOpts) => Promise<void>;
  onError: (err: any) => void;
  onGetValuesForLangs: (
    opts: OnGetValuesForLangsOpts
  ) => Promise<ValuesForLangs>;
  onSucceed?: () => void;
};

export type TranslatableModalProps = LocaleType &
  TranslatableDataMethods & {
    onClose: () => void;
    visible: boolean;
    name: string;
    id?: number;
    model: string;
  };

export type OnGetValuesForLangsOpts = TranslatableModalBaseProps & {
  name: string;
  langs: Lang[];
};

export type OnUpdateValuesOpts = TranslatableModalBaseProps & {
  name: string;
  langCode: string;
  values: any;
};

export type Lang = {
  code: string;
  name: string;
};

export type ValuesForLangs = {
  [key: string]: string;
};
