import styled from "styled-components";
import { useState } from "react";
import { Spin } from "antd";
import Link from "antd/es/typography/Link";
import { useLocale } from "@/context";
import type { SelectAllRecordsRowProps } from "./SelectAllRecordsRow.types";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SelectAllRecordsRow = (props: SelectAllRecordsRowProps) => {
  const {
    numberOfVisibleSelectedRows,
    totalRecords,
    numberOfTotalRows,
    onSelectAllRecords,
    numberOfRealSelectedRows,
  } = props;
  const [loading, setLoading] = useState(false);
  const { t } = useLocale();

  const translations = {
    recordsSelected: t("recordsSelected"),
    selectAllRecords: t("selectAllRecords"),
    allRecordsSelected: t("allRecordsSelected"),
  };

  if (numberOfTotalRows === 0) {
    return null;
  }

  if (
    numberOfVisibleSelectedRows < numberOfTotalRows &&
    numberOfRealSelectedRows <= numberOfTotalRows
  ) {
    return null;
  }

  if (totalRecords === numberOfVisibleSelectedRows) {
    return null;
  }

  const handleClick = async (event: any) => {
    event.preventDefault(); // prevent the default action (navigation) from happening
    event.stopPropagation();
    setLoading(true);
    await onSelectAllRecords();
    setLoading(false);
  };

  const selectRowsComponent = (
    <span>
      {translations.recordsSelected.replace(
        "{numberOfSelectedRows}",
        numberOfVisibleSelectedRows.toString(),
      ) + " "}

      {loading ? (
        <Spin />
      ) : (
        <Link onClick={handleClick} style={{ fontWeight: 600 }}>
          {translations.selectAllRecords.replace(
            "{totalRecords}",
            totalRecords.toString(),
          )}
        </Link>
      )}
    </span>
  );

  const allRowsAreSelected = (
    <span style={{ fontWeight: 600 }}>
      {translations.allRecordsSelected.replace(
        "{totalRecords}",
        numberOfRealSelectedRows.toString(),
      ) + " "}
    </span>
  );

  return (
    <Container>
      {numberOfRealSelectedRows > numberOfTotalRows
        ? allRowsAreSelected
        : selectRowsComponent}
    </Container>
  );
};
