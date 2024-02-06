import DefaultLayout from "@/layout/DefaultLayout";
import { RouteObject } from "react-router-dom";
import AuthGuard from "./AuthGuard";
import PathContants from "./pathConstants";
import PlaygroundLayout from "@/layout/PlaygroundLayout";
import PlaygroundHome from "@/pages/playground/home";
import PlaygroundInput from "@/pages/playground/input";
import PlaygroundSampleLogin from "@/pages/playground/sample/login";
import Users from "@/pages/admin/users";
import PlaygroundSampleStarter from "@/pages/playground/sample/starter";
import UserDetail from "@/pages/admin/users/detail";
import Error404 from "@/pages/admin/error/error404";
import PlaygroundChartBar from "@/pages/playground/chart/bar";
import PlaygroundChartLine from "@/pages/playground/chart/line";
import PlaygroundChartOther from "@/pages/playground/chart/other";
import PlaygroundIcon from "@/pages/playground/icon";
import PlaygroundSamplePageView from "@/pages/playground/sample/page-view";
import PlaygroundSamplePageViewDetail from "@/pages/playground/sample/page-view/detail";
import PlaygroundDashboardView from "@/pages/playground/sample/dashboard-view";
import PlaygroundFormView from "@/pages/playground/sample/form-view";
import PlaygroundNaverMap from "@/pages/playground/sample/naver-map";
import RoadView from "@/pages/playground/sample/naver-map/RoadView";

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
            element: <PlaygroundDashboardView />,
          },
          {
            path: PathContants.PlaygroundSampleFormView,
            element: <PlaygroundFormView />,
          },
          {
            path: PathContants.PlaygroundNaverMap,
            children: [
              {
                index: true,
                element: <PlaygroundNaverMap />,
              },
              {
                path: PathContants.PlaygroundNaverMap_RoadView,
                element: <RoadView />,
              },
            ],
          },
        ],
      },
    ],
  },
];
