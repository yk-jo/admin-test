import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";

interface RadioGroupProps {
  direction?: "row" | "column";
  items: { label: string; value: string }[];
  selectedRows?: string[];
  disabled?: boolean;
  onChange?: (selectedRows: string[]) => void;
}
export default function CheckboxGroup({
  direction = "row",
  items,
  selectedRows: _selectedRows = [],
  disabled,
  onChange,
}: RadioGroupProps) {
  const [selectedRows, setSelectedRows] = useState<string[]>(_selectedRows);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.target;
    if (checked) setSelectedRows((p) => [...p, name]);
    else setSelectedRows((p) => p.filter((id) => name !== id));
  };

  useEffect(() => {
    onChange?.(selectedRows);
  }, [selectedRows]);

  return (
    <FormGroup row={direction === "row"}>
      {items.map((item) => (
        <FormControlLabel
          key={item.value}
          control={<Checkbox name={item.value} onChange={handleChange} />}
          label={item.label}
          disabled={disabled}
          checked={selectedRows.includes(String(item.value))}
        />
      ))}
    </FormGroup>
  );
}
