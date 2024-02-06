import AutoCompleteList from "@/components/AutoCompleteList";
import { Box } from "@mui/material";

const options = [
  {
    label: "test1",
    id: 1,
  },
  { label: "test2", id: 2 },
  { label: "테스트3", id: 3 },
];

export default function ListExample() {
  return (
    <Box>
      300px
      <Box maxWidth={300}>
        <AutoCompleteList options={options} />
        <Box height={20} />
        <AutoCompleteList options={options} errorText="error text" />
      </Box>
      <Box height={40} />
      fullWidth
      <AutoCompleteList options={options} />
      <Box height={20} />
      <AutoCompleteList options={options} errorText="error text" />
    </Box>
  );
}
