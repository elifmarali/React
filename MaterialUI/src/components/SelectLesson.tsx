import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
function SelectLesson() {
  // const [selected, setSelected] = useState("");
  const [selectedArray, setSelectedArray] = useState<string[]>([]);
  // console.log(selected);
  console.log(selectedArray);

  return (
    <Box width="250px">
      {/* <TextField
        select
        label="Ulke seciniz"
        fullWidth
        onChange={(e) => setSelected(e.target.value)}
        value={selected}
      >
        <MenuItem value="tr">Turkiye</MenuItem>
        <MenuItem value="us">ABD</MenuItem>
        <MenuItem value="fr">France</MenuItem>
      </TextField> */}
      <TextField
        SelectProps={{ multiple: true }}
        select
        label="Ulke seciniz"
        fullWidth
        onChange={(e) =>
          setSelectedArray(
            typeof e.target.value === "string"
              ? e.target.value.split(",")
              : e.target.value
          )
        }
        value={selectedArray}
      >
        <MenuItem value="tr">Turkiye</MenuItem>
        <MenuItem value="us">ABD</MenuItem>
        <MenuItem value="fr">France</MenuItem>
      </TextField>
    </Box>
  );
}

export default SelectLesson;
