import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

interface PhoneNumberProps {
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
export const PhoneNumber = ({ value, onChange }: PhoneNumberProps) => {
  return (
    <div className="phone-number">
      <h2>Телефон</h2>
      <Box sx={{ width: "100%" }}>
        <TextField
          variant="outlined"
          value={value}
          onChange={onChange}
          style={{ width: "200px" }}
        />
      </Box>
    </div>
  );
};
