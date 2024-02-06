import AppBar from "@/components/AppBar";
import SideBar from "@/components/SideBar";
import PathContants from "@/routers/pathConstants";
import { useModalStoreClear } from "@/stores/modalStore";
import { Box } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import * as S from "./layout.style";
import { SidebarMenus } from "@/config";
import Footer from "@/components/Footer";

export default function DefaultLayout() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const clear = useModalStoreClear();

  useEffect(() => clear(), [location]);

  const isFull = useMemo(() => false, [location]);
  const isHideAll = useMemo(() => false, [location]);

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
          <SideBar
            menuItems={SidebarMenus}
            onOpen={setSidebarOpen}
            enableSubHeader
          >
            <S.PageWrapper
              display="flex"
              flexDirection="column"
              fold={!sidebarOpen}
            >
              <AppBar />
              <S.ContentWrapper full={isFull}>
                <Outlet />
              </S.ContentWrapper>
              {!isFull && <Footer />}
            </S.PageWrapper>
          </SideBar>
        </>
      )}
    </Box>
  );
}
