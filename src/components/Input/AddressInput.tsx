import { Box, Button, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";

type AddressType = {
  zone: string;
  address: string;
  extraAddress: string;
};
interface AddressInputProps {
  onChange?: (address: AddressType) => void;
  errorText?: AddressType;
}
export default function AddressInput({
  errorText,
  onChange,
}: AddressInputProps) {
  const open = useDaumPostcodePopup();
  const [address, setAddress] = useState<string>("");
  const [extraAddress, setExtraAddress] = useState<string>("");
  const [zone, setZone] = useState<string>("");

  const handleComplete = (data: Address) => {
    setZone(data.zonecode);
    setAddress(data.address);

    onChange?.({ zone: data.zonecode, address: data.address, extraAddress });
  };

  const handleChangeExtra = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setExtraAddress(e.target.value);
    onChange?.({ zone, address, extraAddress: e.target.value });
  };

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Box display="flex" gap={1} alignItems={"flex-start"}>
        <TextField
          disabled
          size="small"
          value={zone}
          error={Boolean(errorText?.zone)}
          helperText={errorText?.zone}
        />
        <Button
          variant="contained"
          color="inherit"
          disableElevation
          onClick={() => open({ onComplete: handleComplete })}
          sx={{ whiteSpace: "pre" }}
        >
          우편번호 찾기
        </Button>
      </Box>
      <TextField
        disabled
        value={address}
        error={Boolean(errorText?.address)}
        helperText={errorText?.address}
        sx={{ maxWidth: "400px" }}
      />
      <TextField
        value={extraAddress}
        onChange={handleChangeExtra}
        fullWidth
        error={Boolean(errorText?.extraAddress)}
        helperText={errorText?.extraAddress}
      />
    </Box>
  );
}
