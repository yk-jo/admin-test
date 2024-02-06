import { SideBarMenu } from "@/types/config";
import PathContants from "@/routers/pathConstants";
import { mdiAccount } from "@mdi/js";
import MdiIcon from "@/components/MdiIcon";

const _SidebarMenus: SideBarMenu[] = [
  {
    label: "화원 관리",
    to: PathContants.UserMng,
    icon: <MdiIcon path={mdiAccount} />,
  },
  // {
  //   label: "GA 링크",
  //   to: PathContants.GoogleAnalyticsPath,
  //   icon: <MdiIcon path={mdiGoogleAnalytics} />,
  //   isHttp: true,
  // },
];

export default _SidebarMenus;
