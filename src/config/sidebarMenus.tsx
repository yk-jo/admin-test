import { SideBarMenu } from "@/types/config";
import PathContants from "@/routers/pathConstants";
import {
  mdiAccount,
  mdiCreditCardOutline,
  mdiFileDocumentCheck,
  mdiFileSign,
  mdiFrequentlyAskedQuestions,
  mdiGoogleAnalytics,
  mdiHistory,
  mdiStethoscope,
} from "@mdi/js";
import MdiIcon from "@/components/MdiIcon";

const _SidebarMenus: SideBarMenu[] = [
  {
    label: "화원 관리",
    to: PathContants.UserMng,
    icon: <MdiIcon path={mdiAccount} />,
  },
  {
    label: "검사용 컨텐츠 관리",
    icon: <MdiIcon path={mdiStethoscope} />,
    children: [
      {
        label: "난청 검사",
        to: PathContants.ContentHearingLoss,
      },
      {
        label: "인지 검사",
        to: PathContants.ContentCognitive,
      },
      {
        label: "스트레스 검사",
        to: PathContants.ContentStress,
      },
    ],
  },
  {
    label: "검사 결과 관리",
    to: PathContants.ResultMng,
    icon: <MdiIcon path={mdiFileDocumentCheck} />,
  },
  {
    label: "결제 내역",
    to: PathContants.PaymentMng,
    icon: <MdiIcon path={mdiCreditCardOutline} />,
  },
  {
    label: "약관 문서 관리",
    to: PathContants.TermsMng,
    icon: <MdiIcon path={mdiFileSign} />,
  },
  {
    label: "FAQ 관리",
    to: PathContants.FaqMng,
    icon: <MdiIcon path={mdiFrequentlyAskedQuestions} />,
  },
  {
    label: "버전 관리",
    to: PathContants.VersionMng,
    icon: <MdiIcon path={mdiHistory} />,
  },
  {
    label: "GA 링크",
    to: PathContants.GoogleAnalyticsPath,
    icon: <MdiIcon path={mdiGoogleAnalytics} />,
    isHttp: true,
  },
];

export default _SidebarMenus;
