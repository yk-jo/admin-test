import PageHeader from "@/components/PageHeader";
import PathContants from "@/routers/pathConstants";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Card from "@/components/Card";
import Label from "@/components/Label";
import RadioGroup from "@/components/RadioGroup";
import GridSystem from "@/components/GridSystem";
import Input from "@/components/Input";
import DatePicker from "@/components/Date/DatePicker";
import PhoneInput from "@/components/Input/PhoneInput";
import MdiIcon from "@/components/MdiIcon";
import { mdiFormatListBulleted } from "@mdi/js";

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <Box>
      <PageHeader
        title="회원 정보"
        breadcrumbItems={[
          { label: "Home" },
          { label: "Users", to: PathContants.UserMng, isLink: true },
          { label: id || "" },
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
        <Button variant="contained" color="secondary">
          수정
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => navigate(PathContants.UserMng)}
        >
          <MdiIcon path={mdiFormatListBulleted} />
        </Button>
      </Box>
      {/* Grid */}
      <GridSystem>
        <GridSystem.Item md={7}>
          <Card title="계정 정보">
            <Label text="활성 상태" required>
              <RadioGroup
                items={[
                  { label: "활성", value: "enable" },
                  { label: "비활성", value: "disable" },
                ]}
                value="enable"
              />
            </Label>
          </Card>
          <Card title="기본 정보">
            <Label text="이름" required>
              <Input placeholder="이름을 입력해주세요." />
            </Label>
            <Label text="생년월일" required>
              <DatePicker />
            </Label>
            <Label text="성별" required>
              <RadioGroup
                items={[
                  { label: "남자", value: "1" },
                  { label: "여자", value: "2" },
                ]}
                value="1"
              />
            </Label>
            <Label text="이메일">
              <Input type="email" />
            </Label>
            <Label text="휴대폰 번호">
              <PhoneInput digitOptions={["010", "011"]} digitValue="010" />
            </Label>
          </Card>
        </GridSystem.Item>
        <GridSystem.Item md={5}>
          <Card title="약관 정보">
            <Label text="서비스 이용약관 동의" required>
              <RadioGroup
                items={[
                  { label: "동의", value: "1" },
                  { label: "미동의", value: "2" },
                ]}
                value="2"
              />
            </Label>
            <Label text="개인정보 수집이용 동의" required>
              <RadioGroup
                items={[
                  { label: "동의", value: "1" },
                  { label: "미동의", value: "2" },
                ]}
                value="1"
              />
            </Label>
            <Label text="개인정보 제3자 제공 동의">
              <RadioGroup
                items={[
                  { label: "동의", value: "1" },
                  { label: "미동의", value: "2" },
                ]}
                value="2"
              />
            </Label>
          </Card>
          <Card title="메타 정보">
            <Label text="가입일">
              <Typography>2024년 01월 18일 12:00:00</Typography>
            </Label>
          </Card>
        </GridSystem.Item>
      </GridSystem>
    </Box>
  );
}
