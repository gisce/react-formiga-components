import { LocaleType } from "@/index";

export type TranslatableModalBaseProps = {
  model: string;
  id: number;
};

export type TranslatableDataMethods = {
  onGetLangs: () => Promise<Lang[]>;
  onClose: () => void;
  onUpdateValues: (opts: OnUpdateValuesOpts) => Promise<void>;
  onSucceed: () => void;
  onError: (err: any) => void;
  onGetValuesForLangs: (
    opts: OnGetValuesForLangsOpts
  ) => Promise<ValuesForLangs>;
};

export type TranslatableModalProps = LocaleType &
  TranslatableModalBaseProps &
  TranslatableDataMethods & {
    visible: boolean;
    name: string;
  };

type OnGetValuesForLangsOpts = TranslatableModalBaseProps & {
  name: string;
  langs: Lang[];
};

type OnUpdateValuesOpts = TranslatableModalBaseProps & {
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
