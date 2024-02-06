import { Box } from "@mui/material";
import {
  Input,
  PhoneInput,
  AddressInput,
  SortingNumber,
} from "@/components/Input";
import { useState } from "react";
import useModal from "@/hooks/useModal";
import AlertModal from "@/components/Modal/AlertModal";

export default function TextExample() {
  const [input, setInput] = useState<string>("");
  const [phone, setPhone] = useState({ digit: "02", text: "" });
  const { openModal } = useModal();
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
        errorText={"Lorem ipsum dolor sit amet."}
      />
      멀티라인 텍스트
      <Input
        placeholder="검색어를 입력하세요."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        multiline
      />
      <Input
        placeholder="검색어를 입력하세요."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        multiline
        disabled
      />
      <Input
        placeholder="검색어를 입력하세요."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        multiline
        errorText="Lorem ipsum dolor sit amet."
      />
      전화번호 입력
      <PhoneInput
        digitOptions={["02", "032", "010"]}
        digitValue={phone.digit}
        value={phone.text}
        onChange={(e) => setPhone({ ...e })}
      />
      <PhoneInput
        digitOptions={["02", "032", "010"]}
        digitValue={phone.digit}
        value={phone.text}
        onChange={(e) => setPhone({ ...e })}
        disabled
      />
      <PhoneInput
        digitOptions={["02", "032", "010"]}
        digitValue={phone.digit}
        value={phone.text}
        onChange={(e) => setPhone({ ...e })}
        errorText="Lorem ipsum dolor sit amet."
      />
      주소 입력
      <AddressInput />
      <AddressInput
        errorText={{
          zone: "zone error",
          address: "address error",
          extraAddress: "extraAddress error",
        }}
      />
      노출순서 UI
      <SortingNumber
        onSave={(value) => {
          openModal(AlertModal, { message: `저장버튼 누름 : ${value}` });
        }}
      />
      <SortingNumber errorText="Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet." />
    </Box>
  );
}
