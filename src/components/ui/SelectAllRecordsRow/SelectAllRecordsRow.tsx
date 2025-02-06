import styled from "styled-components";
import { useState, useCallback, memo, useMemo } from "react";
import { Spin } from "antd";
import Link from "antd/es/typography/Link";
import { useLocale } from "@/context";
import type { SelectAllRecordsRowProps } from "./SelectAllRecordsRow.types";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SelectAllRecordsRowComponent = ({
  currentPageSelectedCount,
  currentPageSize,
  totalRecordsCount,
  totalSelectedCount,
  onSelectAllRecords,
}: SelectAllRecordsRowProps) => {
  const [loading, setLoading] = useState(false);
  const { t } = useLocale();

  const handleClick = useCallback(
    async (event: React.MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      setLoading(true);
      try {
        await onSelectAllRecords();
      } finally {
        setLoading(false);
      }
    },
    [onSelectAllRecords],
  );

  // Don't render anything if there are no records
  if (totalRecordsCount === 0) {
    return null;
  }

  // Don't render if current page is not fully selected
  if (currentPageSelectedCount < currentPageSize) {
    return null;
  }

  // Don't render if we don't have more records than current page
  if (totalRecordsCount <= currentPageSize) {
    return null;
  }

  // If all records are selected, show the total count message
  if (totalSelectedCount === totalRecordsCount) {
    return (
      <Container>
        <span style={{ fontWeight: 600 }}>
          {t("allRecordsSelected").replace(
            "{totalRecords}",
            totalSelectedCount.toString(),
          )}
        </span>
      </Container>
    );
  }

  // Show the select all option
  return (
    <Container>
      <span>
        {t("recordsSelected").replace(
          "{numberOfSelectedRows}",
          currentPageSelectedCount.toString(),
        ) + " "}

        {loading ? (
          <Spin />
        ) : (
          <Link onClick={handleClick} style={{ fontWeight: 600 }}>
            {t("selectAllRecords").replace(
              "{totalRecords}",
              totalRecordsCount.toString(),
            )}
          </Link>
        )}
      </span>
    </Container>
  );
};

export const SelectAllRecordsRow = memo(SelectAllRecordsRowComponent);
