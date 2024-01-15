import { Input, Spin } from "antd";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  BaseDropdownProps,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "./Dropdown.types";

const { Search } = Input;

export const DropdownMenu = ({
  onRetrieveData,
  searchable,
  onItemClick,
}: BaseDropdownProps) => {
  const inputRef = useRef<any>(null);
  const [searchValue, setSearchValue] = useState<string>();
  const [data, setData] = useState<DropdownMenuGroup[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => (inputRef.current as any)?.select());
  }, []);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const data = await onRetrieveData?.();
    setData(data);
    setIsLoading(false);
  }, [onRetrieveData]);

  const allItemsFromGroups = flattenDropdownItems(data);

  const mustShowSearch =
    searchable === true ||
    (searchable === "auto" && allItemsFromGroups.length > 3);

  const onSearch = useCallback((value?: string) => {
    const sanitizedValue = value?.trim();
    if (sanitizedValue && sanitizedValue.length > 0) {
      setSearchValue(sanitizedValue);
      return;
    }
    setSearchValue(undefined);
  }, []);

  const filteredData = useMemo(() => {
    if (searchValue) {
      return data
        .map((group) => {
          return {
            ...group,
            items: group.items.filter((item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase()),
            ),
          };
        })
        .filter((group) => group.items.length > 0);
    }
    return data;
  }, [data, searchValue]);

  if (isLoading) {
    return (
      <Root>
        <div
          style={{
            padding: 15,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spin />
        </div>
      </Root>
    );
  }

  return (
    <Root>
      {mustShowSearch && (
        <div style={{ padding: 5 }}>
          <Search
            ref={inputRef}
            onChange={(e) => onSearch(e.target.value)}
            onSearch={onSearch}
            allowClear
          />
        </div>
      )}
      <div
        style={{
          width: 300,
          overflowY: "auto",
        }}
      >
        {filteredData.map((group, idx) => (
          <Group key={`${group.label}-${idx}`} title={group.label}>
            {group.items.map((item) => (
              <Item
                key={item.id}
                item={item}
                onClick={() => onItemClick?.(item)}
              />
            ))}
          </Group>
        ))}
      </div>
    </Root>
  );
};

const Root = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      className={
        "ant-dropdown-menu ant-dropdown-menu-root ant-dropdown-menu-vertical ant-dropdown-menu-light"
      }
      style={{
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

const Item = ({
  item,
  onClick,
}: {
  item: any;
  onClick?: (item: any) => void;
}) => {
  const content = (
    <li
      className="ant-dropdown-menu-item ant-dropdown-menu-item-only-child"
      role="menuitem"
      onClick={onClick}
    >
      <span className="ant-dropdown-menu-title-content">{item.name}</span>
    </li>
  );

  return content;
};

const Group = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) => {
  return (
    <li role="presentation" className="ant-dropdown-menu-item-group">
      <div
        role="presentation"
        className="ant-dropdown-menu-item-group-title"
        title={title}
      >
        {title}
      </div>
      <ul role="group" className="ant-dropdown-menu-item-group-list">
        {children}
      </ul>
    </li>
  );
};

export const flattenDropdownItems = (
  data: DropdownMenuGroup[],
): DropdownMenuItem[] => {
  return data.reduce<DropdownMenuItem[]>(
    (acc, group) => [...acc, ...group.items],
    [],
  );
};
