import { BaseFieldProps } from "@/components/form/Field";
import React from "react";
import { O2MTopBarButtonBasicOpt } from "../One2ManyTopBar/One2ManyTopBar.types";

export type One2ManyItem = {
  operation:
    | "original"
    | "pendingRemove"
    | "pendingUpdate"
    | "pendingCreate"
    | "pendingLink";
  id?: number;
  values?: any;
};

export type O2MViewMode = string;

export type O2MTopBarOpts = {
  create: O2MTopBarButtonBasicOpt;
  delete: O2MTopBarButtonBasicOpt;
  search?: O2MTopBarButtonBasicOpt;
  navigator?: { show?: boolean };
};

export type One2ManyInputProps = BaseFieldProps<One2ManyItem[]> & {
  title: string;
  viewModes: O2MViewMode[];
  initialViewMode: O2MViewMode;
  onChangeViewMode: (viewMode: O2MViewMode) => Promise<void>;
  onRenderMode: (viewMode: O2MViewMode) => React.ReactNode;
  topBarOptions: O2MTopBarOpts;
};
