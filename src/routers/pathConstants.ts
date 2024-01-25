const playground = "/playground";

const PathContants = {
  Home: "/",
  Login: "/login",
  UserMng: "/users",
  UserDetail: "/users/detail/:id",
  ContentMng: "/contents",
  ContentHearingLoss: "/contents/hearing-loss",
  ContentCognitive: "/contents/cognitive",
  ContentStress: "/contents/stress",
  ResultMng: "/results",
  ResultDetail: "/results/detail",
  PaymentMng: "/payments",
  TermsMng: "/terms",
  TermsDetail: "/terms/detail",
  CreateTerms: "/terms/create",
  UpdateTerms: "/terms/update",
  FaqMng: "/faq",
  FaqDetail: "/faq/detail",
  CreateFaq: "/faq/create",
  UpdateFaq: "/faq/update",
  VersionMng: "/version",
  VersionDetail: "/version/detail",
  CreateVersion: "/version/create",
  UpdateVersion: "/version/update",
  GoogleAnalyticsPath: "https://www.google.com",

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
};

export default PathContants;
