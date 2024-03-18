import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";
function RadioGroupLesson() {
  const [selectedWage, setSelectedWage] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedWage(e.target.value);
  };
  console.log(selectedWage);

  return (
    <FormControl>
      <FormLabel>Maas Beklentinizi Giriniz</FormLabel>
      <RadioGroup row value={selectedWage} onChange={handleChange}>
        <FormControlLabel
          label="2000$"
          control={<Radio color="error" />}
          value="2000"
          color="secondary"
        />
        <FormControlLabel
          label="3000$"
          control={<Radio color="error" />}
          value="3000"
          color="secondary"
        />
        <FormControlLabel
          label="4000$"
          control={<Radio color="error" />}
          value="4000"
          color="secondary"
        />
      </RadioGroup>
      <FormHelperText>Yanlis Secim</FormHelperText>
    </FormControl>
  );
}

export default RadioGroupLesson;
