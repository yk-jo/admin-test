import { Button, Typography } from "@mui/material";
import { Input } from "@/components/Input";
import Label from "@/components/Label";
import { copyright } from "@/config";
import * as S from "./login.style";
import { useNavigate } from "react-router-dom";
import PathContants from "@/routers/pathConstants";
import Logo from "@/assets/images/logo.png";

export default function PlaygroundSampleLogin() {
  const navigate = useNavigate();

  return (
    <S.Background>
      <S.LoginBox>
        <S.LoginBoxHeader>
          <img src={Logo} alt="logo" />
        </S.LoginBoxHeader>
        <S.LoginBoxBody>
          <Typography variant="h5" fontWeight={800}>
            관리자 페이지 로그인
          </Typography>

          <Label text="아이디">
            <Input placeholder="아이디를 입력하세요." />
          </Label>
          <Label text="패스워드">
            <Input placeholder="패스워드를 입력하세요." type="password" />
          </Label>
          <Button
            variant="contained"
            onClick={() => navigate(PathContants.PlaygroundHome)}
          >
            로그인
          </Button>
        </S.LoginBoxBody>
      </S.LoginBox>
      <Typography>{copyright}</Typography>
    </S.Background>
  );
}
