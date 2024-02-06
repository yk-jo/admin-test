import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver } from "react-hook-form";
import * as Yup from "yup";

export type FormShape = "testViewForm";

const formShape: { [schema in FormShape]: any } = {
  testViewForm: {
    gubun: Yup.string().oneOf(["2"]).required("하나를 선택해주세요"),
    place: Yup.string()
      .oneOf(["2222", "1111", "3333"])
      .required("하나를 선택해주세요"),
    email: Yup.string()
      .required("이메일 주소를 입력해 주세요")
      .email("이메일 형식이 아닙니다"),
    password: Yup.string()
      .required("비밀번호를 입력해 주세요")
      .min(4, "최소 4자 이상 입력하세요")
      .max(12, "최대 12자까지 가능합니다"),
    address: Yup.object()
      .shape({
        zone: Yup.string().required("우편번호 찾기를 진행해주세요"),
        address: Yup.string().required("우변번호 찾기를 진행해주세요2"),
        extraAddress: Yup.string().required("상세 주소를 입력해주세요"),
      })
      .required("주소를 입력해주세요"),
  },
};
export default function getResolverBySchemaName(
  schemaName: FormShape
): Resolver<any, any> | undefined {
  if (!Yup) return;

  if (!formShape[schemaName]) return;

  return yupResolver(Yup.object().shape(formShape[schemaName]));
}
