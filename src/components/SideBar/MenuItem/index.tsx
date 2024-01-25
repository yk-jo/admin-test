import { SideBarMenu } from "@/types/config";
import { Collapse, Box } from "@mui/material";
import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./MenuItem.style";
import { publish } from "@/utils/events";
import MdiIcon from "@/components/MdiIcon";
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";

interface MenuItemProps {
  items: SideBarMenu[];
  deps?: number;
  rootBarOpen: boolean;
  enableSubHeader?: boolean;
}
export default function MenuItem({
  items,
  deps = 1,
  rootBarOpen,
  enableSubHeader,
}: MenuItemProps) {
  const [collapseId, setCollapseId] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (item: SideBarMenu) => {
    if (!rootBarOpen) {
      publish("onToggleSideBar", true);
    } else {
      if (item.children) {
        setCollapseId((p) => (p !== item.label ? item.label : null));
      } else {
        publish("onToggleSideBar", false);
        if (item.to) {
          if (item.isHttp) window.open(item.to, "_blank");
          else navigate(item.to);
        }
      }
    }
  };

  const currentPath = useMemo(() => location.pathname, [location]);

  return items.map((item, index) => {
    const collapse = rootBarOpen ? collapseId === item.label : false;
    return (
      <Box
        key={`sidebar-menu-${index}`}
        sx={{
          marginLeft: deps > 2 ? `${(deps - 1) * 5}px` : undefined,
        }}
      >
        {enableSubHeader ? (
          <>
            {rootBarOpen ? (
              <S.MenuSubheader>{item.label}</S.MenuSubheader>
            ) : (
              index > 0 && <S.MenuDivider />
            )}
            {item.children?.length && (
              <MenuItem
                items={item.children}
                deps={deps + 1}
                rootBarOpen={rootBarOpen}
              />
            )}
          </>
        ) : (
          <div key={item.label}>
            <S.MenuItemButton
              selected={currentPath === item.to}
              onClick={() => handleClick(item)}
              rootBarOpen={rootBarOpen}
            >
              <S.MenuItemIcon>{item.icon}</S.MenuItemIcon>
              <S.MenuItemText
                secondary={item.label}
                rootBarOpen={rootBarOpen}
              />

              {rootBarOpen && item.children?.length && (
                <MdiIcon path={collapse ? mdiChevronUp : mdiChevronDown} />
              )}
            </S.MenuItemButton>
            {item.children && (
              <Collapse in={collapse} timeout="auto" unmountOnExit>
                <MenuItem
                  items={item.children}
                  deps={deps + 1}
                  rootBarOpen={rootBarOpen}
                />
              </Collapse>
            )}
          </div>
        )}
      </Box>
    );
  });
}
