import { Button } from "antd";
import styled from "styled-components";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const Container = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 2%;
`;

export type EMTransferOperationsProps = {
  toLeftDisabled: boolean;
  toRightDisabled: boolean;
  onToLeft: () => void;
  onToRight: () => void;
  disabled?: boolean;
};

export const EMTransferOperations = (props: EMTransferOperationsProps) => {
  const {
    toLeftDisabled,
    toRightDisabled,
    onToLeft,
    onToRight,
    disabled = false,
  } = props;
  return (
    <Container>
      <Button
        icon={<RightOutlined />}
        disabled={toRightDisabled || disabled}
        onClick={onToRight}
      />
      <Button
        icon={<LeftOutlined />}
        disabled={toLeftDisabled || disabled}
        onClick={onToLeft}
      />
    </Container>
  );
};
