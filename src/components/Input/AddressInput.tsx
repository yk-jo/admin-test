import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { Address, useDaumPostcodePopup } from "react-daum-postcode";

export default function AddressInput() {
  const open = useDaumPostcodePopup();
  const [address, setAddress] = useState<string>("");
  const [extraAddress, setExtraAddress] = useState<string>("");
  const [zone, setZone] = useState<string>("");

  const handleComplete = (data: Address) => {
    setZone(data.zonecode);
    setAddress(data.address);
  };

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Box display="flex" gap={1}>
        <TextField disabled size="small" value={zone} />
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
      <TextField disabled value={address} sx={{ maxWidth: "400px" }} />
      <TextField
        value={extraAddress}
        onChange={(e) => setExtraAddress(e.target.value)}
        fullWidth
      />
    </Box>
  );
}
