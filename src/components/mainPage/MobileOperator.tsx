import Box from "@mui/material/Box";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface MobileOperatorProps {
  value: string;
  onChange?: (event: SelectChangeEvent<string>, child: React.ReactNode) => void;
}
export const MobileOperator = ({ value, onChange }: MobileOperatorProps) => {
  return (
    <div className="mobile-operator">
      <h2>Оператор</h2>
      <Box sx={{ width: "100%" }}>
        <Select value={value} onChange={onChange} style={{ width: "200px" }}>
          <MenuItem value={"Megafon"}>Мегафон</MenuItem>
          <MenuItem value={"Beeline"}>Билайн</MenuItem>
          <MenuItem value={"MTS"}>МТС</MenuItem>
        </Select>
      </Box>
    </div>
  );
};
