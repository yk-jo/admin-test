import { ReactNode } from "react";
import { ModalPropsType } from "@/stores/modalStore";
import * as S from "./DefaultModal.style";
import { Typography } from "@mui/material";
import MdiIcon from "../MdiIcon";
import { mdiClose } from "@mdi/js";

interface DefaultModalProps extends ModalPropsType {
  title: string;
  content: ReactNode;
  footer?: ReactNode;
}
export default function DefaultModal({
  onClose,
  title,
  content,
  footer,
}: DefaultModalProps) {
  return (
    <S.ModalWrapper>
      <S.ModalBody>
        {/* 제목 */}
        <S.ModalTitle>
          <Typography variant="h6" fontWeight={700}>
            {title || "title"}
          </Typography>
          <S.CloseButton disableRipple onClick={onClose}>
            <MdiIcon path={mdiClose} />
          </S.CloseButton>
        </S.ModalTitle>
        {/* 내용 */}
        <S.ModalContent>{content}</S.ModalContent>
        {/* 푸터 */}
        <S.ModalFooter>{footer}</S.ModalFooter>
      </S.ModalBody>
    </S.ModalWrapper>
  );
}
