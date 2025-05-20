import { Button, Space, notification, theme } from "antd";
import { Icon } from "../Icon";
import { NotificationProps, NotificationApi } from "./Notification.types";

export const useNotification = (): NotificationApi => {
  const {
    token: { colorError, colorInfo, colorSuccess, colorWarning },
  } = theme.useToken();

  const open = (props: NotificationProps) => {
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
      notification.destroy();
    };

    const buttonsComponent = buttons.length > 0 && (
      <Space>
        {buttons.map((button) => {
          return (
            <Button
              key={button.name}
              icon={<Icon icon={button.icon} />}
              size="small"
              onClick={onButtonClickHandler}
            >
              {button.name}
            </Button>
          );
        })}
      </Space>
    );

    notification[type]({
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
    });
  };

  return {
    open,
    destroy: notification.destroy,
  };
};
