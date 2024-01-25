export type TreeNodeType = {
  id: string;
  parent?: string;
  name: string;
  children?: TreeNodeType[];
};
