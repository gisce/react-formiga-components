import { Col, Input, Row, Spin } from "antd";
import {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  BaseDropdownProps,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "./Dropdown.types";
import cls from "classnames";
import { CheckOutlined } from "@ant-design/icons";
import { useLocale } from "@/context";
import { removeAccents } from "@/helpers";

const { Search } = Input;

const DROPDOWN_MENU_FIXED_WIDTH = 300;

export const DropdownMenu = ({
  onRetrieveData,
  searchable,
  onItemClick,
  maxHeight,
  header = null,
}: BaseDropdownProps) => {
  const inputRef = useRef<any>(null);
  const [searchValue, setSearchValue] = useState<string>();
  const [data, setData] = useState<DropdownMenuGroup[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLocale();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const data = await onRetrieveData?.();
    setData(data);
    setIsLoading(false);
    setTimeout(() => (inputRef.current as any)?.select());
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
            items: group.sticky
              ? group.items
              : group.items.filter(
                  (item) =>
                    item.name &&
                    removeAccents(item.name.toLowerCase()).includes(
                      removeAccents(searchValue.toLowerCase()),
                    ),
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
      {header}
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
          width: mustShowSearch ? DROPDOWN_MENU_FIXED_WIDTH : "auto",
          overflowY: "auto",
          maxHeight,
        }}
      >
        {filteredData.map((group, idx) => (
          <Group key={`group-${group.label}-${idx}`} data={group}>
            {group.items.map((item) =>
              item.type === "divider" ? (
                <Divider key={item.id} />
              ) : (
                <Item
                  key={item.id}
                  item={item}
                  onClick={() => onItemClick?.(item)}
                />
              ),
            )}
          </Group>
        ))}
        {flattenDropdownItems(filteredData.filter((group) => !group.sticky))
          .length === 0 && (
          <Group
            key={"no-data-group"}
            data={{ label: t("noMatches"), items: [] }}
          />
        )}
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
      className={cls({
        "ant-dropdown-menu-item": true,
        "ant-dropdown-menu-item-only-child": !item.disabled,
        "ant-dropdown-menu-item-disabled": item.disabled,
      })}
      role="menuitem"
      style={item.disableClick && { cursor: "default" }}
      onClick={item.disableClick ? undefined : onClick}
    >
      <span className="ant-dropdown-menu-title-content">
        <Row wrap={false}>
          {item.icon && (
            <Col flex="none" style={{ paddingRight: 20 }}>
              {item.icon}
            </Col>
          )}
          <Col flex="auto" style={{ paddingRight: 20 }}>
            {item.name}
          </Col>
          {item.selected && (
            <Col flex="none">
              <CheckOutlined />
            </Col>
          )}
          {item.right && <Col flex="none">{item.right}</Col>}
        </Row>
      </span>
    </li>
  );

  return content;
};

const Group = ({
  data,
  children,
}: {
  data: DropdownMenuGroup;
  children?: React.ReactNode;
}) => {
  const { icon, label } = data;
  if (!label) {
    return <Fragment>{children}</Fragment>;
  }

  return (
    <li role="presentation" className="ant-dropdown-menu-item-group">
      <div
        role="presentation"
        className="ant-dropdown-menu-item-group-title"
        title={label}
      >
        <Row wrap={false}>
          {icon && (
            <Col flex="none" style={{ paddingRight: 20 }}>
              {icon}
            </Col>
          )}
          <Col flex="auto">{label}</Col>
        </Row>
      </div>
      <ul role="group" className="ant-dropdown-menu-item-group-list">
        {children}
      </ul>
    </li>
  );
};

const Divider = () => {
  return <li role="separator" className="ant-dropdown-menu-item-divider" />;
};

export const flattenDropdownItems = (
  data: DropdownMenuGroup[],
): DropdownMenuItem[] => {
  return data
    .reduce<DropdownMenuItem[]>((acc, group) => [...acc, ...group.items], [])
    .filter((item) => item.type !== "divider");
};
