/* eslint-disable react/prop-types */
import React, {
  createContext,
  useContext,
  ReactNode,
  useMemo,
  useCallback,
} from "react";
import { Button, Space, notification, theme } from "antd";
import { Icon } from "../Icon";
import {
  NotificationApi,
  NotificationProps,
  NotificationButton,
} from "./Notification.types";

interface NotificationContextType {
  notificationApi: NotificationApi;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined,
);

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const {
    token: { colorError, colorInfo, colorSuccess, colorWarning },
  } = theme.useToken();

  const [api, contextHolder] = notification.useNotification({
    stack: {
      threshold: 1,
    },
  });

  const open = useCallback(
    (props: NotificationProps) => {
      const {
        type = "info",
        title,
        message,
        buttons = [],
        duration = 4.5,
        onClose,
        onButtonClick,
      } = props;

      const onButtonClickHandler = (payload: any) => {
        onButtonClick?.(payload);
        api.destroy();
      };

      const buttonsComponent = buttons.length > 0 && (
        <Space>
          {buttons.map((button: NotificationButton) => {
            return (
              <Button
                key={button.name}
                icon={<Icon icon={button.icon} />}
                size="small"
                onClick={() => {
                  onButtonClickHandler(button.action);
                }}
              >
                {button.name}
              </Button>
            );
          })}
        </Space>
      );

      (api as any)[type]({
        message: title || "Notification",
        description: message,
        duration,
        style: {
          borderLeft: `8px solid ${
            type === "success"
              ? colorSuccess
              : type === "error"
              ? colorError
              : type === "warning"
              ? colorWarning
              : colorInfo
          }`,
        },
        btn: buttonsComponent,
        onClose,
        showProgress: true,
        pauseOnHover: true,
      });
    },
    [api, colorError, colorInfo, colorSuccess, colorWarning],
  );

  const notificationApi: NotificationApi = useMemo(
    () => ({
      open,
      destroy: api.destroy,
    }),
    [open, api.destroy],
  );

  const contextValue = useMemo(
    () => ({
      notificationApi,
    }),
    [notificationApi],
  );

  return (
    <NotificationContext.Provider value={contextValue}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = (): NotificationApi => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotificationContext must be used within a NotificationProvider",
    );
  }
  return context.notificationApi;
};
