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
    const sizeOptions = getPageSizeOptions(maxPageSize).map((size) => ({
      value: size,
      label: `${size} ${itemsPerPageText}`,
    }));

    if (showAllOption) {
      sizeOptions.push({
        value: -1,
        label: allOptionText,
      });
    }

    return sizeOptions;
  }, [maxPageSize, itemsPerPageText, showAllOption, allOptionText]);

  return (
    <Select
      value={pageSize}
      onChange={onChange}
      options={options}
      disabled={disabled}
      className={className}
      style={{ minWidth: 90, ...style }}
      dropdownMatchSelectWidth={false}
    />
  );
}
