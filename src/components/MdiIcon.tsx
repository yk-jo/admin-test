import Icon from "@mdi/react";

interface MdiIconProps {
  path: string;
  size?: string | number | null;
}
export default function MdiIcon({ path, size = 0.8 }: MdiIconProps) {
  return <Icon path={path} size={size} />;
}
