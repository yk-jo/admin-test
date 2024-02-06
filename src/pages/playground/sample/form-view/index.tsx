import { Box, Button } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import RadioGroup from "@/components/RadioGroup";
import Label from "@/components/Label";
import Select from "@/components/Select";
import { AddressInput, Input } from "@/components/Input";
import { useEffect } from "react";
import Card from "@/components/Card";
import getResolverBySchemaName from "@/utils/formResolver";
import { TestScheme } from "@/types/formResolver";

const gubunOptions = [
  { label: "첫번째", value: "1" },
  { label: "두번째", value: "2" },
];

const selectOptions = [
  { label: "1111", value: "1" },
  { label: "2222", value: "2" },
  { label: "3333", value: "3" },
  { label: "4444", value: "4" },
  { label: "5555", value: "5" },
];

export default function PlaygroundFormView() {
  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<TestScheme>({
    mode: "onChange",
    defaultValues: {
      gubun: "1",
      place: "1",
      email: "",
      password: "",
    },
    resolver: getResolverBySchemaName("testViewForm"),
  });

  const onSubmit: SubmitHandler<TestScheme> = (data) => console.log(data);

  useEffect(() => {
    console.log(watch());
  }, [watch()]);

  useEffect(() => {
    console.log("err:", errors);
  }, [errors]);
  return (
    <Box>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label text="구분">
            <Controller
              control={control}
              name="gubun"
              render={({ field, fieldState: { error } }) => (
                <RadioGroup
                  items={gubunOptions}
                  value={field.value}
                  onChange={field.onChange}
                  errorText={error?.message}
                />
              )}
            />
          </Label>
          <Label text="place">
            <Controller
              control={control}
              name="place"
              render={({ field, fieldState: { error } }) => (
                <Select
                  items={selectOptions}
                  value={field.value}
                  onChange={field.onChange}
                  errorText={error?.message}
                />
              )}
            />
          </Label>
          <Label text="이메일">
            <Controller
              control={control}
              name="email"
              render={({ field, fieldState: { error } }) => (
                <Input
                  value={field.value}
                  onChange={field.onChange}
                  errorText={error?.message}
                />
              )}
            />
          </Label>
          <Label text="패스워드">
            <Controller
              control={control}
              name="password"
              render={({ field, fieldState: { error } }) => (
                <Input
                  value={field.value}
                  onChange={field.onChange}
                  type="password"
                  errorText={error?.message}
                />
              )}
            />
          </Label>

          <Label text="주소">
            <Controller
              control={control}
              name="address"
              render={({ field, fieldState: { error } }) => (
                <AddressInput
                  onChange={field.onChange}
                  errorText={{
                    zone: (error as any)?.zone?.message,
                    address: (error as any)?.address?.message,
                    extraAddress: (error as any)?.extraAddress?.message,
                  }}
                />
              )}
            />
          </Label>
          <Box height={50} />
          <Button type="submit" variant="contained">
            제출
          </Button>
        </form>
      </Card>
    </Box>
  );
}
