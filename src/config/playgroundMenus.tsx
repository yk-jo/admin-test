import MdiIcon from "@/components/MdiIcon";
import PathContants from "@/routers/pathConstants";
import { SideBarMenu } from "@/types/config";
import {
  mdiAlphabeticalVariant,
  mdiChartBar,
  mdiFileDocument,
  mdiFolder,
  mdiLogin,
} from "@mdi/js";

// 샘플 메뉴
export const _SidebarMenus: SideBarMenu[] = [
  {
    label: "대시보드",
    children: [
      {
        label: "대시보드",
        to: PathContants.PlaygroundHome,
        icon: <MdiIcon path={mdiFileDocument} />,
      },
    ],
  },
  {
    label: "Components",
    children: [
      {
        label: "기본 UI",
        children: [
          {
            label: "Input",
            to: PathContants.PlaygroundInput.replace(":type", "input"),
          },
          {
            label: "Button",
            to: PathContants.PlaygroundInput.replace(":type", "button"),
          },
          {
            label: "Radio Group",
            to: PathContants.PlaygroundInput.replace(":type", "radio"),
          },
          {
            label: "Checkbox Group",
            to: PathContants.PlaygroundInput.replace(":type", "checkbox"),
          },
          {
            label: "Select",
            to: PathContants.PlaygroundInput.replace(":type", "select"),
          },
          {
            label: "Date Picker",
            to: PathContants.PlaygroundInput.replace(":type", "datepicker"),
          },
          {
            label: "Search Filter",
            to: PathContants.PlaygroundInput.replace(":type", "search-filter"),
          },
          {
            label: "Wysiwyg Editor",
            to: PathContants.PlaygroundInput.replace(":type", "wysiwyg"),
          },
          {
            label: "Table",
            to: PathContants.PlaygroundInput.replace(":type", "table"),
          },
          {
            label: "Switch",
            to: PathContants.PlaygroundInput.replace(":type", "switch"),
          },
          {
            label: "Chip",
            to: PathContants.PlaygroundInput.replace(":type", "chip"),
          },
          {
            label: "File Upload",
            to: PathContants.PlaygroundInput.replace(":type", "upload"),
          },
          {
            label: "Tab",
            to: PathContants.PlaygroundInput.replace(":type", "tab"),
          },
          {
            label: "TreeView",
            to: PathContants.PlaygroundInput.replace(":type", "tree-view"),
          },
        ],
        icon: <MdiIcon path={mdiFileDocument} />,
      },
      {
        label: "아이콘",
        to: PathContants.PlaygroundIcon,
        icon: <MdiIcon path={mdiFileDocument} />,
      },
      {
        label: "차트",
        icon: <MdiIcon path={mdiChartBar} />,
        children: [
          {
            label: "Bar",
            to: PathContants.PlaygroundChartBar,
          },
          {
            label: "Line",
            to: PathContants.PlaygroundChartLine,
          },
          {
            label: "Other",
            to: PathContants.PlaygroundChartOther,
          },
        ],
      },
    ],
  },
  {
    label: "Pages",
    icon: <MdiIcon path={mdiAlphabeticalVariant} />,
    children: [
      {
        label: "Authentication",
        icon: <MdiIcon path={mdiFolder} />,
        children: [
          {
            label: "Login",
            to: PathContants.PlaygroundSampleLogin,
            icon: <MdiIcon path={mdiLogin} />,
          },
          {
            label: "Starter Page",
            to: PathContants.PlaygroundSampleStarter,
            icon: <MdiIcon path={mdiFileDocument} />,
          },
        ],
      },
      {
        label: "Page View",
        to: PathContants.PlaygroundSamplePageView,
        icon: <MdiIcon path={mdiFileDocument} />,
      },
      {
        label: "Dashboard View",
        to: PathContants.PlaygroundSampleDashboardView,
        icon: <MdiIcon path={mdiFileDocument} />,
      },
    ],
  },
];

export default _SidebarMenus;
