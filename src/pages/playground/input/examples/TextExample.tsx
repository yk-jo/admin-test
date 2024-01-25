import { Box } from "@mui/material";
import Input from "@/components/Input";
import PhoneInput from "@/components/Input/PhoneInput";
import AddressInput from "@/components/Input/AddressInput";
import { useState } from "react";

export default function TextExample() {
  const [input, setInput] = useState<string>("");
  const [phone, setPhone] = useState({ digit: "02", text: "" });

  return (
    <Box display={"flex"} flexDirection={"column"} gap={1}>
      일반 텍스트
      <Input
        placeholder="검색어를 입력하세요."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Input
        placeholder="검색어를 입력하세요."
        value={"수정못함"}
        onChange={(e) => setInput(e.target.value)}
        disabled
      />
      <Input
        placeholder="검색어를 입력하세요."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        multiline
      />
      전화번호 입력
      <PhoneInput
        digitOptions={["02", "032", "010"]}
        digitValue={phone.digit}
        value={phone.text}
        onChange={(e) => setPhone({ ...e })}
        disabled
      />
      주소 입력
      <AddressInput />
    </Box>
  );
}
