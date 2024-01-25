import DefaultLayout from "@/layout/DefaultLayout";
import { RouteObject } from "react-router-dom";
import AuthGuard from "./AuthGuard";
import PathContants from "./pathConstants";
import PlaygroundLayout from "@/layout/PlaygroundLayout";
import PlaygroundHome from "@/pages/playground/home";
import PlaygroundInput from "@/pages/playground/input";
import PlaygroundSampleLogin from "@/pages/playground/sample/login";
import Users from "@/pages/admin/users";
import ContentHearingLoss from "@/pages/admin/contents/hearing-loss";
import ContentCognitive from "@/pages/admin/contents/cognitive";
import ContentStress from "@/pages/admin/contents/stress";
import Results from "@/pages/admin/results";
import Payments from "@/pages/admin/payments";
import Terms from "@/pages/admin/terms";
import Faq from "@/pages/admin/faq";
import Version from "@/pages/admin/version";
import PlaygroundSampleStarter from "@/pages/playground/sample/starter";
import UserDetail from "@/pages/admin/users/detail";
import Error404 from "@/pages/admin/error/error404";
import PlaygroundChartBar from "@/pages/playground/chart/bar";
import PlaygroundChartLine from "@/pages/playground/chart/line";
import PlaygroundChartOther from "@/pages/playground/chart/other";
import PlaygroundIcon from "@/pages/playground/icon";
import PlaygroundSamplePageView from "@/pages/playground/sample/\bpage-view";
import PlaygroundSamplePageViewDetail from "@/pages/playground/sample/\bpage-view/detail";
import PlaygroundDashboardView from "@/pages/playground/sample/dashboard-view";

export const routes: RouteObject[] = [
  {
    element: (
      <AuthGuard>
        <DefaultLayout />
      </AuthGuard>
    ),
    errorElement: <Error404 />,
    children: [
      { path: PathContants.Home, element: null },
      {
        path: PathContants.UserMng,
        children: [
          { index: true, element: <Users /> },
          { path: PathContants.UserDetail, element: <UserDetail /> },
        ],
      },
      {
        path: PathContants.ContentMng,
        children: [
          {
            path: PathContants.ContentHearingLoss,
            element: <ContentHearingLoss />,
          },
          {
            path: PathContants.ContentCognitive,
            element: <ContentCognitive />,
          },
          {
            path: PathContants.ContentStress,
            element: <ContentStress />,
          },
        ],
      },
      {
        path: PathContants.ResultMng,
        element: <Results />,
      },
      {
        path: PathContants.PaymentMng,
        element: <Payments />,
      },
      {
        path: PathContants.TermsMng,
        element: <Terms />,
      },
      {
        path: PathContants.FaqMng,
        element: <Faq />,
      },
      {
        path: PathContants.VersionMng,
        element: <Version />,
      },
    ],
  },
  // 개발용 화면
  {
    path: PathContants.PlaygroundHome,
    element: <PlaygroundLayout />,
    children: [
      {
        index: true,
        element: <PlaygroundHome />,
      },
      {
        path: PathContants.PlaygroundInput,
        element: <PlaygroundInput />,
      },
      {
        path: PathContants.PlaygroundIcon,
        element: <PlaygroundIcon />,
      },
      // 차트
      {
        children: [
          {
            path: PathContants.PlaygroundChartBar,
            element: <PlaygroundChartBar />,
          },
          {
            path: PathContants.PlaygroundChartLine,
            element: <PlaygroundChartLine />,
          },
          {
            path: PathContants.PlaygroundChartOther,
            element: <PlaygroundChartOther />,
          },
        ],
      },
      // 샘플페이지
      {
        children: [
          {
            path: PathContants.PlaygroundSampleLogin,
            element: <PlaygroundSampleLogin />,
          },
          {
            path: PathContants.PlaygroundSampleStarter,
            element: <PlaygroundSampleStarter />,
          },
          {
            path: PathContants.PlaygroundSamplePageView,
            children: [
              {
                index: true,
                element: <PlaygroundSamplePageView />,
              },
              {
                path: PathContants.PlaygroundSamplePageViewDetail,
                element: <PlaygroundSamplePageViewDetail />,
              },
            ],
          },
          {
            path: PathContants.PlaygroundSampleDashboardView,
            element: <PlaygroundDashboardView/>
          }
        ],
      },
    ],
  },
];
