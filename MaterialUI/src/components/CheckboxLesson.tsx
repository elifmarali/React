import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Box,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
function CheckboxLesson() {
  const [isAccept, setIsAccept] = useState(false);
  const [frameworks, setFrameworks] = useState<string[]>([]);

  const handleFrameworksChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const index = frameworks.indexOf(event.target.value);
    if (index === -1) {
      setFrameworks([...frameworks, event.target.value]);
    } else {
      setFrameworks(frameworks.filter((item) => item !== event.target.value));
    }
  };

  console.log(frameworks);

  return (
    <Box>
      <FormControl>
        <FormLabel>Egitim Durumu</FormLabel>
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox />}
            label="Lise"
            disabled
          ></FormControlLabel>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Universite"
          ></FormControlLabel>
          <FormControlLabel
            control={<Checkbox />}
            label="Ilkokul"
          ></FormControlLabel>
        </FormGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Egitim Durumu</FormLabel>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => setIsAccept(e.target.checked)}
                checked={isAccept}
              />
            }
            label="Kullanim kosullarini kabul ediyor musunuz?"
          ></FormControlLabel>
        </FormGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Frontend Frameworks</FormLabel>
        <FormGroup row>
          <FormControlLabel
            value="react"
            control={
              <Checkbox
                checked={frameworks.includes("react")}
                onChange={handleFrameworksChange}
              />
            }
            label="React Js"
          ></FormControlLabel>
          <FormControlLabel
            value="angular"
            control={
              <Checkbox
                checked={frameworks.includes("angular")}
                onChange={handleFrameworksChange}
              />
            }
            label="Angular"
          ></FormControlLabel>
          <FormControlLabel
            value="vue"
            control={
              <Checkbox
                checked={frameworks.includes("vue")}
                onChange={handleFrameworksChange}
              />
            }
            label="Vue Js"
          ></FormControlLabel>
        </FormGroup>
      </FormControl>
    </Box>
  );
}

export default CheckboxLesson;
