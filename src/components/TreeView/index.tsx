import { TreeView as MUITreeView } from "@mui/x-tree-view";
import { useEffect, useState } from "react";
import { TreeNodeType } from "@/types/treeView";
import TreeItem from "./TreeItem";
import MdiIcon from "../MdiIcon";
import { mdiChevronDown, mdiChevronRight } from "@mdi/js";

interface TreeViewProps {
  graph: TreeNodeType[];
  onChange?: (ids: string[]) => void;
}
export default function TreeView({ graph, onChange }: TreeViewProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  useEffect(() => {
    onChange?.(selectedIds);
  }, [selectedIds]);

  return (
    <MUITreeView
      multiSelect
      defaultCollapseIcon={<MdiIcon path={mdiChevronDown} />}
      defaultExpandIcon={<MdiIcon path={mdiChevronRight} />}
      selected={selectedIds}
    >
      {graph.map((node) => (
        <TreeItem
          {...{
            key: node.id,
            rootGraph: graph,
            node,
            selectedIds,
            setSelectedIds,
          }}
        />
      ))}
    </MUITreeView>
  );
}
