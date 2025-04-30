import { ReactNode } from "react";
export type NotificationType = "success" | "error" | "info" | "warning";
export interface NotificationButton {
    label: string;
    icon?: string;
    payload?: any;
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
//# sourceMappingURL=Notification.types.d.ts.map