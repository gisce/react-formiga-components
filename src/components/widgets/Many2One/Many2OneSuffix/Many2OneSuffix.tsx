import { Dropdown } from "@/components/ui/Dropdown";
import { RightCircleOutlined } from "@ant-design/icons";
import { Many2OneSuffixProps } from "./Many2OneSuffix.types";

export const Many2OneSuffix = ({
  onRetrieveData,
  onItemClick,
  onOpenChange,
}: Many2OneSuffixProps) => {
  return (
    <Dropdown
      onRetrieveData={onRetrieveData}
      onItemClick={onItemClick}
      maxHeight={300}
      trigger={["click"]}
      onOpenChange={onOpenChange}
    >
      <RightCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
    </Dropdown>
  );
};
