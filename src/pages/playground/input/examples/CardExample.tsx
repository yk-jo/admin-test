import { Box } from "@mui/material";
import Card from "@/components/Card";
import Label from "@/components/Label";
import { DatePicker } from "@/components/Date";
import RadioGroup from "@/components/RadioGroup";
import { Input, PhoneInput } from "@/components/Input";

export default function CardExample() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={1}
    >
      <Card title="기본정보">
        <Box display={"flex"} flexDirection={"column"} gap={1}>
          <Label text="이름" required>
            <Input />
          </Label>
          <Label text="생년월일" required>
            <DatePicker fullWidth />
          </Label>
          <Label text="성별" required>
            <RadioGroup
              items={[
                { label: "남자", value: "male" },
                { label: "여자", value: "female" },
              ]}
              value="male"
            />
          </Label>
          <Label text="이메일" description="설명 테스트">
            <Input />
          </Label>
          <Label text="휴대폰 번호">
            <PhoneInput digitOptions={["02"]} digitValue="02" />
          </Label>
        </Box>
      </Card>
    </Box>
  );
}
