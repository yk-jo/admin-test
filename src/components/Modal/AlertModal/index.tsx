import DefaultModal from "@/components/ModalContainer/DefaultModal";
import { ModalPropsType } from "@/stores/modalStore";
import * as S from "./AlertModal.style";
import { Button } from "@mui/material";
import { ReactNode } from "react";

export interface AlertModalProps extends ModalPropsType {
  message: ReactNode;
}
export default function AlertModal({
  message,
  onClose,
  onSubmit,
}: AlertModalProps) {
  const Content = () => {
    return (
      <S.AlertModalContent>
        <p>{message}</p>
      </S.AlertModalContent>
    );
  };

  const Footer = () => {
    return (
      <S.AlertModalFooter>
        <Button variant="contained" onClick={onSubmit}>
          확인
        </Button>
      </S.AlertModalFooter>
    );
  };

  return (
    <DefaultModal
      title="알림"
      content={<Content />}
      footer={<Footer />}
      onClose={onClose}
    />
  );
}
