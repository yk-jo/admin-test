import {
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import { ReactNode, useEffect, useRef } from "react";
import MdiIcon from "../MdiIcon";
import { mdiChevronDown } from "@mdi/js";
import { useToggle } from "react-use";

interface DropdownButtonProps<T extends string | number | symbol> {
  children: ReactNode;
  size?: "small" | "medium";
  menu: { [key in T]: string };
  onChange?: (value: T) => void;
}
export default function DropdownButton<T extends string | number | symbol>({
  children,
  size,
  menu,
  onChange,
}: DropdownButtonProps<T>) {
  const [open, toggleOpen] = useToggle(false);
  const prevOpen = useRef(open);
  const anchorRef = useRef<HTMLButtonElement>(null);
  
  const handleSelect = (e: Event | React.SyntheticEvent, value: T) => {
    onChange?.(value);
    handleClose(e);
  };

  const handleClose = (e: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(e.target as HTMLElement)
    ) {
      return;
    }

    toggleOpen(false);
  };
  
  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Tab") {
      event.preventDefault();
      toggleOpen(false);
    } else if (event.key === "Escape") {
      toggleOpen(false);
    }
  };

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <Button
        ref={anchorRef}
        variant="contained"
        color="inherit"
        size={size}
        onClick={toggleOpen}
        endIcon={<MdiIcon path={mdiChevronDown} />}
      >
        {children}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom"
        transition
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} onKeyDown={handleListKeyDown}>
                  {Object.keys(menu).map((k) => (
                    <MenuItem
                      key={k}
                      onClick={(e) => handleSelect(e, k as T)}
                      disableRipple
                    >
                      {menu[k as T]}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
