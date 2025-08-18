import { Select } from "antd";
import React, { useMemo } from "react";
import type { CustomPageSizeOptionsProps } from "./CustomPageSizeOptions.types";

const getPageSizeOptions = (max: number): number[] => {
  const options: number[] = [10, 20, 50, 100].filter((step) => step <= max);

  let last = options.length > 0 ? options[options.length - 1] : 10;
  while (last * 2 <= max) {
    last *= 2;
    options.push(last);
  }

  if (options[options.length - 1] < max) {
    options.push(max);
  }

  return options;
};

export function CustomPageSizeOptions({
  pageSize = 10,
  maxPageSize = 100,
  showAllOption = false,
  allOptionText = "All",
  itemsPerPageText = "/ page",
  onChange,
  disabled,
  className,
  style,
}: CustomPageSizeOptionsProps) {
  const options = useMemo(() => {
    // Get standard options
    let sizeOptions = getPageSizeOptions(maxPageSize);

    // Add current pageSize if it's not in the list and it's not -1 (All)
    if (
      !sizeOptions.includes(pageSize) &&
      pageSize !== -1 &&
      pageSize <= maxPageSize
    ) {
      sizeOptions.push(pageSize);
      // Sort numbers in ascending order
      sizeOptions.sort((a, b) => a - b);
    }

    // Convert to Select options format
    const selectOptions = sizeOptions.map((size) => ({
      value: size,
      label: `${size} ${itemsPerPageText}`,
    }));

    // Add "All" option if enabled
    if (showAllOption) {
      selectOptions.push({
        value: -1,
        label: allOptionText,
      });
    }

    return selectOptions;
  }, [maxPageSize, pageSize, itemsPerPageText, showAllOption, allOptionText]);

  return (
    <Select
      value={pageSize}
      onChange={onChange}
      options={options}
      disabled={disabled}
      className={className}
      style={{ minWidth: 90, maxWidth: 100, ...style }}
      dropdownMatchSelectWidth={false}
      showSearch
      filterOption={(input, option) => {
        // Allow filtering by the number or the full label
        const label = option?.label?.toString().toLowerCase() || "";
        const value = option?.value?.toString().toLowerCase() || "";
        const searchText = input.toLowerCase();
        return label.includes(searchText) || value.includes(searchText);
      }}
    />
  );
}
