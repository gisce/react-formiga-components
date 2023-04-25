import { BaseFieldProps } from "@/components/form/Field";
import React from "react";

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

export type One2ManyInputProps = BaseFieldProps<One2ManyItem[]> & {
  viewModes: O2MViewMode[];
  initialViewMode: O2MViewMode;
  onChangeViewMode: (viewMode: O2MViewMode) => Promise<void>;
  onRenderMode: (viewMode: O2MViewMode) => React.ReactNode;
};
