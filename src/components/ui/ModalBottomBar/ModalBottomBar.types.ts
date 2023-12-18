import { Locale } from "@/context/LocaleContext";

export type ModalBottomBarProps = {
  onClose: () => void;
  onConfirm: () => void;
  locale: Locale;
  loading: boolean;
  left?: React.ReactNode;
  rightAdditionalButtons?: React.ReactNode;
  okText?: string;
};
