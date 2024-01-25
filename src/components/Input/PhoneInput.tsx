import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

interface PhoneInputProps {
  digitOptions: string[];
  digitValue: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: { digit: string; text: string }) => void;
}

export default function PhoneInput({
  value,
  digitValue,
  placeholder,
  disabled,
  onChange,
  digitOptions,
}: PhoneInputProps) {
  const handleChangeDigit = (e: SelectChangeEvent<string>) => {
    onChange?.({ digit: e.target.value, text: value || "" });
  };

  const handleKeyDownText = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      const curValue = value || "";
      if (curValue.length < 10) {
        onChange?.({
          digit: digitValue,
          text: curValue.replace(/-/g, "").replace(/(\d{3})(\d{4})/, "$1-$2"),
        });
      } else {
        return;
      }
    }
  };
  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    let text = e.target.value;
    const numCheck = Number(text.replace("-", ""));
    if (isNaN(numCheck)) return;

    if (text.length === 7) {
      text = text.replace(/(\d{3})(\d{4})/, "$1-$2");
    }
    if (text.length === 9) {
      text = text.replace(/-/g, "").replace(/(\d{4})(\d{4})/, "$1-$2");
    }

    onChange?.({ digit: digitValue, text });
  };

  return (
    <Box display="flex" gap={1}>
      <Select
        value={digitValue}
        onChange={handleChangeDigit}
        disabled={disabled}
      >
        {digitOptions.map((digit) => (
          <MenuItem key={digit} value={digit}>
            {digit}
          </MenuItem>
        ))}
      </Select>
      <TextField
        variant="outlined"
        placeholder={placeholder}
        value={value}
        onChange={handleChangeText}
        onKeyDown={handleKeyDownText}
        fullWidth
        disabled={disabled}
        inputProps={{ maxLength: 9 }}
      />
    </Box>
  );
}
