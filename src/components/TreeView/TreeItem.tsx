import { Dispatch, MouseEvent, SetStateAction } from "react";
import { TreeNodeType } from "@/types/treeView";
import { Box, Checkbox, Typography } from "@mui/material";
import { TreeItem as MUITreeItem } from "@mui/x-tree-view";

interface TreeItemProps {
  rootGraph: TreeNodeType[];
  node: TreeNodeType;
  selectedIds: string[];
  setSelectedIds: Dispatch<SetStateAction<string[]>>;
}
export default function TreeItem({
  rootGraph,
  node,
  selectedIds,
  setSelectedIds,
}: TreeItemProps) {
  // 특정 노드의 모든 자식 아이디들을 한 리스트에 담아서 반환
  const getAllChild = (id: string) => {
    const getAllIds = (node: TreeNodeType | null, idList: string[] = []) => {
      if (node) {
        idList.push(node.id);
        if (node.children) {
          node.children.forEach((child) => getAllIds(child, idList));
        }
      }

      return idList;
    };

    return getAllIds(bfsSearch(rootGraph, id));
  };

  // 특정 노드의 부모 아이디들을 한 리스트에 담아서 반환
  const getAllParents: (id: string, list?: string[]) => string[] = (
    id: string,
    list: string[] = []
  ) => {
    const node = bfsSearch(rootGraph, id);
    if (node && node.parent) {
      list.push(node.parent);

      return getAllParents(node.parent, list);
    }

    return list;
  };

  function isAllChildrenChecked(node: TreeNodeType | null, list: string[]) {
    if (node) {
      const allChild = getAllChild(node.id);
      const nodeIdIndex = allChild.indexOf(node.id);
      allChild.splice(nodeIdIndex, 1);

      return allChild.every((nodeId) =>
        selectedIds.concat(list).includes(nodeId)
      );
    }
    return false;
  }

  const handleExpandClick = (e: MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
  };

  const handleNodeSelect = (
    e: MouseEvent<HTMLButtonElement>,
    nodeId: string
  ) => {
    e.stopPropagation();
    const allChild = getAllChild(nodeId);
    const parents = getAllParents(nodeId);

    if (selectedIds.includes(nodeId)) {
      setSelectedIds((prev) =>
        prev.filter((id) => !allChild.concat(parents).includes(id))
      );
    } else {
      const toBeChecked = [...allChild];
      for (let i = 0; i < parents.length; ++i) {
        const parentNode = bfsSearch(rootGraph, parents[i]);
        if (isAllChildrenChecked(parentNode, toBeChecked)) {
          toBeChecked.push(parents[i]);
        }
      }
      setSelectedIds((prev) => [...prev].concat(toBeChecked));
    }
  };

  return (
    <MUITreeItem
      key={node.id}
      nodeId={node.id}
      onClick={handleExpandClick}
      label={
        <Box display={"flex"} alignItems={"center"}>
          <Checkbox
            checked={selectedIds.indexOf(node.id) !== -1}
            tabIndex={-1}
            disableRipple
            onClick={(e) => handleNodeSelect(e, node.id)}
          />
          <Typography>{node.name}</Typography>
        </Box>
      }
    >
      {Array.isArray(node.children)
        ? node.children.map((node) => (
            <TreeItem
              key={node.id}
              {...{ rootGraph, node, selectedIds, setSelectedIds }}
            />
          ))
        : null}
    </MUITreeItem>
  );
}

function bfsSearch(graph: TreeNodeType[], targetId: string) {
  const queue = [...graph];

  while (queue.length > 0) {
    const currNode = queue.shift();
    if (currNode?.id === targetId) {
      return currNode;
    }
    if (currNode?.children) {
      queue.push(...currNode.children);
    }
  }
  return null;
}
