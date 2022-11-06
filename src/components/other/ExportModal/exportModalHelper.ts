import { ExportField } from "./ExportModal.types";

export const filterOption = (inputValue: string, option: ExportField) =>
  option.title.toLowerCase().indexOf(inputValue.toLowerCase()) > -1 ||
  option.key.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;

export const isChecked = (
  selectedKeys: (string | number)[],
  eventKey: string | number
) => selectedKeys.includes(eventKey);

export const updateTreeData = (
  list: ExportField[],
  key: React.Key,
  children: ExportField[]
): ExportField[] =>
  list.map((node) => {
    if (node.key === key) {
      return {
        ...node,
        children,
      };
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, key, children),
      };
    }
    return node;
  });

export const flatten = (dataSource: ExportField[]) => {
  const transferDataSource: ExportField[] = [];

  function innerFlatten(list: ExportField[] = []) {
    list.forEach((item) => {
      transferDataSource.push(item as ExportField);
      innerFlatten(item.children);
    });
  }

  innerFlatten(dataSource);
  return transferDataSource;
};

export const generateLeftTree = ({
  treeNodes = [],
  checkedKeys = [],
  searchText,
}: {
  treeNodes: ExportField[];
  checkedKeys: string[];
  searchText?: string;
}): ExportField[] => {
  if (searchText) {
    const output = flatten(treeNodes)
      .filter((item) => filterOption(searchText, item))
      .map(({ children, ...props }) => ({
        ...props,
        disabled: checkedKeys.includes(props.key as string),
      }));
    return output;
  }

  return treeNodes.map(({ children, ...props }) => ({
    ...props,
    disabled: checkedKeys.includes(props.key as string),
    children: generateLeftTree({
      treeNodes: children,
      checkedKeys,
      searchText,
    }),
  }));
};

export const generateRightTree = ({
  treeNodes = [],
  checkedKeys = [],
  searchText,
}: {
  treeNodes: ExportField[];
  checkedKeys: string[];
  searchText?: string;
}): ExportField[] => {
  if (searchText) {
    return flatten(treeNodes)
      .filter((item) => filterOption(searchText, item))
      .map(({ children, ...props }) => ({
        ...props,
        disabled: checkedKeys.includes(props.key as string),
        isLeaf: true,
        children: generateRightTree({
          treeNodes: children,
          checkedKeys,
          searchText,
        }),
      }));
  }

  return flatten(treeNodes)
    .filter((node) => checkedKeys.indexOf(node.key) !== -1)
    .map(({ children, ...props }) => ({
      ...props,
      isLeaf: true,
      children: generateRightTree({
        treeNodes: children,
        checkedKeys,
        searchText,
      }),
    }));
};
