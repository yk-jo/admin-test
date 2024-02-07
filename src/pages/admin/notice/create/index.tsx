import Card from "@/components/Card";
import { DateRangePicker } from "@/components/Date";
import GridSystem from "@/components/GridSystem";
import { Input } from "@/components/Input";
import Label from "@/components/Label";
import MdiIcon from "@/components/MdiIcon";
import PageHeader from "@/components/PageHeader";
import Select from "@/components/Select";
import { ImageUploadGroup } from "@/components/Upload";
import PathContants from "@/routers/pathConstants";
import { mdiFormatListBulleted } from "@mdi/js";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

export default function NoticeCreate() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <Box>
      <Box>
        <PageHeader
          title="공지사항 신규등록"
          breadcrumbItems={[
            { label: "홈" },
            { label: "공지사항", to: PathContants.BoardNotice, isLink: true },
          ]}
        />
        {/* Buttons */}
        <Box
          sx={(theme) => ({
            display: "flex",
            justifyContent: "space-between",
            marginBottom: theme.spacing(3),
          })}
        >
          <Button variant="contained">저장</Button>
          <Button
            variant="outlined"
            onClick={() => navigate(PathContants.BoardNotice)}
          >
            <MdiIcon path={mdiFormatListBulleted} />
          </Button>
        </Box>
        {/* Grid */}
        <GridSystem>
          <GridSystem.Item md={7}>
            <Card title="기본 정보">
              <Label text="사업장">
                <Select
                  items={[{ label: "선택하세요", value: "1" }]}
                  value="1"
                />
              </Label>
              <Label text="고객사">
                <Select items={[{ label: "전체", value: "1" }]} value="1" />
              </Label>
              <Label text="제목" required>
                <Input placeholder="공지사항 제목을 입력하세요" />
              </Label>
              <Label text="첨부파일">
                <Box width={"100%"} maxWidth={400}>
                  <ImageUploadGroup />
                </Box>
              </Label>
              <Label text="내용" required>
                <Input
                  multiline
                  multilineRow={20}
                  placeholder="내용을 입력하세요"
                />
              </Label>
            </Card>
          </GridSystem.Item>
          <GridSystem.Item md={5}>
            <Card title="공지사항 팝업">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Checkbox /> <Typography>팝업 여부</Typography>
              </Box>
              <Label text="공지일시">
                <DateRangePicker />
              </Label>
            </Card>
            <Card title="공지사항 팝업 (사용자 앱)">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Checkbox /> <Typography>팝업 여부</Typography>
              </Box>
              <Label text="공지일시">
                <DateRangePicker />
              </Label>
            </Card>
          </GridSystem.Item>
        </GridSystem>
      </Box>
    </Box>
  );
}
