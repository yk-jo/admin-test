import { PlaygroundSideMenu, SidebarMenus } from "@/config";
import { SideBarMenu } from "@/types/config";

export function getMenuTitle(pathname: string, isPlayground?: boolean) {
  const targetMenus = isPlayground ? PlaygroundSideMenu : SidebarMenus;

  return recurMenuTitle(pathname, targetMenus)?.label;
}

function recurMenuTitle(pathname: string, targets: SideBarMenu[], lv = 0) {
  for (const menu of targets) {
    if (menu.children && menu.children.length) {
      return recurMenuTitle(pathname, menu.children, lv++);
    }
    if (menu.to === pathname) {
      return menu;
    }
  }
}
