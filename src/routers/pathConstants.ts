const playground = "/playground";

const PathContants = {
  Home: "/",
  Login: "/login",
  UserMng: "/users",
  UserDetail: "/users/detail/:id",

  RealTimeLocation: "/loc-control/real-time-location",
  BoardNotice:"/board/notice",

  //
  PlaygroundHome: `${playground}`,
  PlaygroundInput: `${playground}/input/:type`,
  PlaygroundIcon: `${playground}/icon`,

  PlaygroundFeedback: `${playground}/feedback`,
  PlaygroundSurfaces: `${playground}/surfaces`,
  PlaygroundNavigation: `${playground}/navigation`,

  PlaygroundChartBar: `${playground}/chart/bar`,
  PlaygroundChartLine: `${playground}/chart/line`,
  PlaygroundChartOther: `${playground}/chart/other`,

  PlaygroundSampleLogin: `${playground}/sample/login`,
  PlaygroundSampleStarter: `${playground}/sample/starter`,
  PlaygroundSamplePageView: `${playground}/sample/page-view`,
  PlaygroundSamplePageViewDetail: `${playground}/sample/page-view/:id`,
  PlaygroundSampleDashboardView: `${playground}/sample/dashboard-view`,
  PlaygroundSampleFormView: `${playground}/sample/form-view`,

  PlaygroundNaverMap: `${playground}/sample/naver-map`,
  PlaygroundNaverMap_RoadView: `${playground}/sample/naver-map/roadview`,
};

export default PathContants;
