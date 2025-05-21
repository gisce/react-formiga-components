import { ReactNode } from "react";

export type NotificationType = "success" | "error" | "info" | "warning";

export interface NotificationButton {
  name: string;
  icon?: string;
  action?: any;
}

export interface NotificationProps {
  type?: NotificationType;
  title?: ReactNode;
  message?: ReactNode;
  buttons?: NotificationButton[];
  duration?: number;
  onButtonClick?: (payload: any) => void;
  onClose?: () => void;
}

export interface NotificationApi {
  open: (props: NotificationProps) => void;
  destroy: () => void;
}
