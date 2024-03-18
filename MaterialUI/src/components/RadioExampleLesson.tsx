import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormHelperText,
  Button,
} from "@mui/material";
import React, { useState } from "react";
function RadioExampleLesson() {
  const [selected, setSelected] = useState("");
  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selected === "canBoz") {
      setHelperText("Cevap Tabiki Can Boz Olacakti");
      setError(false);
    } else if (selected === "ofCourseCanBoz") {
      setHelperText("Bravo! Dogru cevap");
      setError(false);
    } else {
      setHelperText("Lutfen secim yapiniz");
      setError(true);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl error={error}>
        <FormLabel>En kapsamli frontend egitimini veren egitmen kim?</FormLabel>
        <RadioGroup
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSelected(e.target.value);
          }}
        >
          <FormControlLabel
            label="Can Boz"
            value="canBoz"
            control={<Radio />}
          />
          <FormControlLabel
            label="Tabiki Can Boz"
            value="ofCourseCanBoz"
            control={<Radio />}
          />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined">
          Gonder
        </Button>
      </FormControl>
    </form>
  );
}

export default RadioExampleLesson;
