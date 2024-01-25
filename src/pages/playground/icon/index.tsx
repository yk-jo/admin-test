import Card from "@/components/Card";
import MdiIcon from "@/components/MdiIcon";
import { Box, Link, Typography } from "@mui/material";
import classNames from "classnames";
import { icons } from "./icon.data";

export default function PlaygroundIcon() {
  return (
    <Card title="아이콘 목록">
      <Box>
        <Typography fontWeight={700} sx={{ marginBottom: 1 }}>
          React Component
        </Typography>
        <Box
          display={"grid"}
          gridTemplateColumns={{
            lg: "repeat(4, 1fr)",
            md: "repeat(3, 1fr)",
            sm: "repeat(2, 1fr)",
            sx: "repeat(1, 1fr)",
          }}
          gap={1}
        >
          {icons.map((icon) => (
            <Box display={"flex"} alignItems={"center"} gap={1} height={30}>
              <MdiIcon path={icon.mdi} />
              <Typography>{icon.name}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box>
        <Typography fontWeight={700} sx={{ marginBottom: 1 }}>
          Css Content
        </Typography>
        <Box
          display={"grid"}
          gridTemplateColumns={{
            lg: "repeat(4, 1fr)",
            md: "repeat(3, 1fr)",
            sm: "repeat(2, 1fr)",
            sx: "repeat(1, 1fr)",
          }}
          gap={1}
        >
          {icons.map((icon) => (
            <Box display={"flex"} alignItems={"center"} gap={1} height={30}>
              <span
                className={classNames("mdi", icon.name)}
                style={{ fontSize: "24px" }}
              />
              <Typography>{icon.name}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box>
        <Typography>이하 다른 아이콘들은 해당 사이트를 확인할 것.</Typography>
        <Link href="https://pictogrammers.com/library/mdi/">
          https://pictogrammers.com/library/mdi/
        </Link>
      </Box>
    </Card>
  );
}
