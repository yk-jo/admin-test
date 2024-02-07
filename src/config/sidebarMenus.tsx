import { SideBarMenu } from "@/types/config";
import PathContants from "@/routers/pathConstants";
import { mdiClipboardOutline, mdiMapMarkerRadiusOutline } from "@mdi/js";
import MdiIcon from "@/components/MdiIcon";

const _SidebarMenus: SideBarMenu[] = [
  {
    label: "",
    children: [
      {
        label: "운행 현황",
        icon: <MdiIcon path={mdiMapMarkerRadiusOutline} />,
        children: [
          {
            label: "실시간 위치 관제",
            icon: <MdiIcon path={mdiMapMarkerRadiusOutline} />,
            to: PathContants.RealTimeLocation,
          },
        ],
      },
      {
        label: "게시판 관리",
        to: PathContants.UserMng,
        icon: <MdiIcon path={mdiClipboardOutline} />,
      },
    ],
  },
];

export default _SidebarMenus;
