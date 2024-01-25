import AppBar from "@/components/AppBar";
import SideBar from "@/components/SideBar";
import PathContants from "@/routers/pathConstants";
import { useModalStoreClear } from "@/stores/modalStore";
import { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import Logo from "@/assets/images/logo.png";
import LogoIcon from "@/assets/images/logo-icon.png";
import { PlaygroundSideMenu } from "@/config";
import { Box } from "@mui/material";
import Footer from "@/components/Footer";
import * as S from "./layout.style";

const isDev = true; // import.meta.env.DEV;

export default function PlaygroundLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const clear = useModalStoreClear();

  useEffect(() => clear(), [location]);

  // 개발환경에서만 UI 샘플을 확인할 수 있음
  return isDev ? (
    <Box component="main">
      {location.pathname === PathContants.PlaygroundSampleLogin ? (
        <Outlet />
      ) : (
        <>
          <SideBar
            src={{ logo: Logo, icon: LogoIcon }}
            menuItems={PlaygroundSideMenu}
            enableSubHeader
          >
            <S.PageWrapper display="flex" flexDirection="column">
              <AppBar
                onClickLogout={() =>
                  navigate(PathContants.PlaygroundSampleLogin)
                }
              />
              <S.ContentWrapper>
                <Outlet />
              </S.ContentWrapper>
              <Footer />
            </S.PageWrapper>
          </SideBar>
        </>
      )}
    </Box>
  ) : (
    <Navigate to={PathContants.Home} replace />
  );
}
