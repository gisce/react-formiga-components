import React, { ReactNode } from "react";
import { NotificationApi } from "./Notification.types";
interface NotificationProviderProps {
    children: ReactNode;
}
export declare const NotificationProvider: React.FC<NotificationProviderProps>;
export declare const useNotificationContext: () => NotificationApi;
export {};
//# sourceMappingURL=NotificationProvider.d.ts.map