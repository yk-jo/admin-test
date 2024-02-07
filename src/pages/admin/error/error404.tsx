import { copyright } from "@/config";
import { Typography, Button, Box } from "@mui/material";
import * as S from "./error.style";
import { useNavigate, useRouteError } from "react-router-dom";
import Logo from "@/assets/images/mobble-logo.png";

export default function Error404() {
  const navigate = useNavigate();
  const error = useRouteError();

  console.error(error);

  return (
    <S.Background>
      <S.PageBox>
        <S.PageBoxHeader>
          <img src={Logo} alt="logo" />
        </S.PageBoxHeader>
        <S.PageBoxBody>
          <S.Text404 variant="h1">
            4<span className="mdi mdi-emoticon-sad" />4
          </S.Text404>
          <Typography
            variant="h5"
            fontWeight={600}
            sx={(theme) => ({ color: theme.palette.error.main })}
          >
            PAGE NOT FOUND
          </Typography>
          <Typography>
            페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.
          </Typography>

          <Box height={"40px"} />
          <Button variant="contained" onClick={() => navigate(-1)}>
            <span className="mdi mdi-reply" />
            이전으로 돌아가기
          </Button>
        </S.PageBoxBody>
      </S.PageBox>
      <Typography>{copyright}</Typography>
    </S.Background>
  );
}
