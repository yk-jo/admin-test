import { Box, Button } from "@mui/material";
import Card from "../Card";
import * as S from "./SearchFilter.style";
import DropdownButton from "../DropdownButton";
import { useRef, useState, Children, cloneElement, ReactElement } from "react";
import FilterRow from "./FilterRow";
import { InputRefType } from "@/types/common";

const limits: { [key: number]: string } = {
  10: "10개씩 보기",
  20: "20개씩 보기",
  50: "50개씩 보기",
  100: "100개씩 보기",
  500: "500개씩 보기",
};

interface SearchFilterProps {
  children: ReactElement | ReactElement[];
  onSearch?: () => void;
}
function SearchFilter({ children, onSearch }: SearchFilterProps) {
  const [limit, setLimit] = useState<number>(10);
  const childrenRef = useRef<InputRefType[]>([]);

  const addRef = (ref: InputRefType) => {
    if (ref && !childrenRef.current.includes(ref)) {
      childrenRef.current.push(ref);
    }
  };

  const handleClickRenew = () => {
    childrenRef.current.forEach((ref) => ref?.clear());
  };

  return (
    <Card
      title="검색 필터"
      action={<S.RenewIconButton onClick={handleClickRenew} />}
    >
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        {Children.map(children, (child) => {
          return cloneElement(child, {
            ref: (el: InputRefType) => addRef(el),
          });
        })}
        <Box
          sx={(theme) => ({
            display: "flex",
            justifyContent: "flex-end",
            gap: theme.spacing(1),
            marginTop: theme.spacing(2),
          })}
        >
          <Button variant="contained" size="small" onClick={onSearch}>
            검색
          </Button>
          <DropdownButton
            menu={limits}
            size="small"
            onChange={(v) => setLimit(v)}
          >
            {limits[limit]}
          </DropdownButton>
        </Box>
      </Box>
    </Card>
  );
}

export default Object.assign(SearchFilter, { Row: FilterRow });
