import AppBar from "@/components/AppBar";
import SideBar from "@/components/SideBar";
import PathContants from "@/routers/pathConstants";
import { useModalStoreClear } from "@/stores/modalStore";
import { Box } from "@mui/material";
import { useEffect, useMemo } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import * as S from "./layout.style";
import { SidebarMenus } from "@/config";
import Footer from "@/components/Footer";

export default function DefaultLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const clear = useModalStoreClear();

  useEffect(() => clear(), [location]);

  const isHome = useMemo(
    () => location.pathname === PathContants.Home,
    [location]
  );

  if (isHome) return <Navigate to={PathContants.UserMng} replace />;

  return (
    <Box component="main">
      {location.pathname === PathContants.PlaygroundSampleLogin ? (
        <Outlet />
      ) : (
        <>
          <SideBar menuItems={SidebarMenus}>
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
  );
}
