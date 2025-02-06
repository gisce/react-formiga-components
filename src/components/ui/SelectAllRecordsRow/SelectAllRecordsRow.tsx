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

const SelectAllRecordsRowComponent = (props: SelectAllRecordsRowProps) => {
  const {
    currentPageSelectedCount,
    currentPageTotalCount,
    totalRecordsCount,
    totalSelectedCount,
    onSelectAllRecords,
  } = props;

  const [loading, setLoading] = useState(false);
  const { t } = useLocale();

  // Memoize translations to avoid recalculating on every render
  const translations = useMemo(
    () => ({
      recordsSelected: t("recordsSelected"),
      selectAllRecords: t("selectAllRecords"),
      allRecordsSelected: t("allRecordsSelected"),
    }),
    [t],
  );

  // Don't show anything if the current page is not fully selected
  if (currentPageSelectedCount < currentPageTotalCount) {
    return null;
  }

  // Don't show anything if we don't have more records than the current page
  if (totalRecordsCount <= currentPageTotalCount) {
    return null;
  }

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

  // If all records across all pages are selected, show the total count
  if (totalSelectedCount === totalRecordsCount) {
    return (
      <Container>
        <span style={{ fontWeight: 600 }}>
          {translations.allRecordsSelected.replace(
            "{totalRecords}",
            totalSelectedCount.toString(),
          )}
        </span>
      </Container>
    );
  }

  // Show option to select all records when current page is selected but not all pages
  return (
    <Container>
      <span>
        {translations.recordsSelected.replace(
          "{numberOfSelectedRows}",
          currentPageSelectedCount.toString(),
        ) + " "}

        {loading ? (
          <Spin />
        ) : (
          <Link onClick={handleClick} style={{ fontWeight: 600 }}>
            {translations.selectAllRecords.replace(
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
