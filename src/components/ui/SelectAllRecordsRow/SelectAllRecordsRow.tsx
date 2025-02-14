import styled from "styled-components";
import { useState, useCallback, memo } from "react";
import { Spin } from "antd";
import Link from "antd/es/typography/Link";
import { useLocale } from "@/context";
import type { SelectAllRecordsRowProps } from "./SelectAllRecordsRow.types";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const shouldShowSelectionRow = ({
  currentPageSelectedCount,
  currentPageSize,
  totalRecordsCount,
  totalSelectedCount,
  currentPage,
}: {
  currentPageSelectedCount: number;
  currentPageSize: number;
  totalRecordsCount: number;
  totalSelectedCount: number;
  currentPage: number;
}) => {
  // Don't show if there are no records
  if (totalRecordsCount === 0) return false;

  // Calculate the actual number of records on the current page
  const totalPages = Math.ceil(totalRecordsCount / currentPageSize);
  const isLastPage = currentPage === totalPages;
  const currentPageRecords = isLastPage
    ? totalRecordsCount - (totalPages - 1) * currentPageSize
    : currentPageSize;

  // Don't show if current page is not fully selected
  if (currentPageSelectedCount < currentPageRecords) return false;

  // Don't show if we don't have more records than current page
  if (totalRecordsCount <= currentPageSize) return false;

  // Show either the "select all" option or the "all selected" message
  return true;
};

const SelectAllRecordsRowComponent = (props: SelectAllRecordsRowProps) => {
  const [loading, setLoading] = useState(false);
  const { t } = useLocale();

  const {
    shouldShow,
    totalRecordsCount,
    currentPageSelectedCount,
    totalSelectedCount,
    onSelectAllRecords,
  } = props;

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

  if (!shouldShow) return null;

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
