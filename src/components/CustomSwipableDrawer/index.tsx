import { useToggle } from "react-use";
import * as S from "./CustomSwipableDrawer.style";
import { ReactNode, useRef } from "react";

interface CustomSwipableDrawerProps {
  children: ReactNode;
}
export default function CustomSwipableDrawer({
  children,
}: CustomSwipableDrawerProps) {
  const [open, toggleDrawer] = useToggle(false);
  const bleedingWidth = useRef<number>(20);
  const width = useRef<number>(450);

  return (
    <S.CustomSwipableDrawer
      variant="permanent"
      open={open}
      swipeAreaWidth={bleedingWidth.current}
      onClose={() => toggleDrawer(false)}
      onOpen={() => toggleDrawer(true)}
      ModalProps={{
        keepMounted: true,
      }}
      width={width.current}
    >
      <S.SwipeButton
        onClick={toggleDrawer}
        bleedingWidth={bleedingWidth.current}
      >
        <S.Puller />
      </S.SwipeButton>
      {children}
    </S.CustomSwipableDrawer>
  );
}
