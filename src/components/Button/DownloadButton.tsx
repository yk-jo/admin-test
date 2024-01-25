import { Button } from "@mui/material";
import MdiIcon from "../MdiIcon";
import { mdiTrayArrowDown } from "@mdi/js";

interface DownloadButtonProps {
  text?: string;
  small?: boolean;
  onClick?: () => void;
}
export default function DownloadButton({
  text = "다운로드",
  small,
  onClick,
}: DownloadButtonProps) {
  return (
    <Button
      variant="contained"
      size={small ? "small" : undefined}
      color="inherit"
      startIcon={<MdiIcon path={mdiTrayArrowDown} />}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
