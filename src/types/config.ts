export type SideBarMenu = {
  label: string;
  icon?: JSX.Element;
  to?: string;
  children?: SideBarMenu[];
  isHttp?:boolean;
};
