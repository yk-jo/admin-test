import TreeView from "@/components/TreeView";
import { TreeNodeType } from "@/types/treeView";
import { Box } from "@mui/material";

export default function TreeExample() {
  return (
    <Box display={"flex"} gap={1}>
      <TreeView graph={data} />
    </Box>
  );
}

const data: TreeNodeType[] = [
  {
    id: "1",
    name: "Parent 1",
    children: [
      {
        id: "2",
        name: "Child 1",
        parent: "1",
        children: [
          {
            id: "5",
            name: "Grandchild 1",
            parent: "2",
            children: [
              {
                id: "9",
                name: "Great-grandchild 1",
                parent: "5",
              },
              {
                id: "10",
                name: "Great-grandchild 2",
                parent: "5",
              },
            ],
          },
          {
            id: "6",
            name: "Grandchild 2",
            parent: "2",
            children: [
              {
                id: "11",
                name: "Great-grandchild 3",
                parent: "6",
              },
              {
                id: "12",
                name: "Great-grandchild 4",
                parent: "6",
              },
            ],
          },
        ],
      },
      {
        id: "3",
        name: "Child 2",
        parent: "1",
        children: [
          {
            id: "7",
            name: "Grandchild 3",
            parent: "3",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Parent 2",
    children: [
      {
        id: "8",
        name: "Child 3",
        parent: "4",
        children: [
          {
            id: "13",
            name: "Grandchild 4",
            parent: "8",
            children: [
              {
                id: "14",
                name: "Great-grandchild 5",
                parent: "13",
              },
              {
                id: "15",
                name: "Great-grandchild 6",
                parent: "13",
              },
            ],
          },
          {
            id: "16",
            name: "Grandchild 5",
            parent: "8",
            children: [
              {
                id: "17",
                name: "Great-grandchild 7",
                parent: "16",
              },
              {
                id: "18",
                name: "Great-grandchild 8",
                parent: "16",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "19",
    name: "Parent 3",
    children: [
      {
        id: "20",
        name: "Child 4",
        parent: "19",
        children: [
          {
            id: "21",
            name: "Grandchild 6",
            parent: "20",
            children: [
              {
                id: "22",
                name: "Great-grandchild 9",
                parent: "21",
              },
              {
                id: "23",
                name: "Great-grandchild 10",
                parent: "21",
              },
            ],
          },
          {
            id: "24",
            name: "Grandchild 7",
            parent: "20",
          },
        ],
      },
    ],
  },
];
