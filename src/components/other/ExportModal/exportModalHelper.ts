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
  targetKeys = [],
  searchText,
}: {
  treeNodes: ExportField[];
  targetKeys: string[];
  searchText?: string;
}): ExportField[] => {
  return treeNodes
    .filter((item) => (searchText ? filterOption(searchText, item) : true))
    .map(({ children, ...props }) => ({
      ...props,
      disabled: targetKeys.includes(props.key as string),
      children: generateLeftTree({
        treeNodes: children,
        targetKeys,
        searchText: undefined,
      }),
    }));
};

export const generateRightTree = ({
  treeNodes = [],
  targetKeys = [],
  searchText,
}: {
  treeNodes: ExportField[];
  targetKeys: string[];
  searchText?: string;
}): ExportField[] => {
  const flattenNodes = flatten(treeNodes);

  if (flattenNodes.length === 0) {
    return [];
  }

  return targetKeys
    .map((key) => {
      const node = flattenNodes.find((item) => item.key === key);
      return {
        ...node,
        disabled: false,
        isLeaf: true,
        children: undefined,
      };
    })
    .filter((item) => (searchText ? filterOption(searchText, item) : true));
};

export const getParentKeys = (key: string) => {
  // Keys are in format parent/child/child2/child3
  // We want a list of all parent keys, like [parent, parent/child, parent/child/child2]
  // And also we want them to be sorted by number of levels, like [parent, parent/child, parent/child/child2]
  const keys = key.split("/");
  const parentKeys = [];
  for (let i = 1; i < keys.length; i++) {
    parentKeys.push(keys.slice(0, i).join("/"));
  }
  return parentKeys;
};

export const getTreeDataForOrphanTargetKeys = async ({
  treeData,
  targetKeys,
  onGetFieldChilds,
}) => {
  let updatedTreeData = treeData;

  let keysToRetrieve = [];

  // Check if we have target keys that are not in the first level of the tree
  // If so, we need to load the data for those keys
  const targetKeysNotInFirstLevel = targetKeys.filter((key) => {
    const found =
      flatten(treeData)?.find((item) => item.key === key) !== undefined;
    return !found;
  });

  targetKeysNotInFirstLevel.forEach((key: string) => {
    keysToRetrieve = [...keysToRetrieve, ...getParentKeys(key)];
  });

  // We must remove duplicates
  keysToRetrieve = [...new Set(keysToRetrieve)];

  // We must sort targetKeysNotInFirstLevel by number of levels
  keysToRetrieve.sort((a, b) => {
    return a.split("/").length - b.split("/").length;
  });

  // We must get the title for each key
  for (const key of keysToRetrieve) {
    const item = flatten(updatedTreeData).find((item) => item.key === key);
    console.log({ key, item });
    const childs = await onGetFieldChilds({
      key,
      title: item!.title,
    });
    updatedTreeData = updateTreeData(updatedTreeData, key, childs);
  }

  return updatedTreeData;
};
