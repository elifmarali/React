import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
function TextFieldLesson() {
  const [password, setPassword] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Ad" />
        <TextField variant="outlined" />
        <TextField variant="filled" />
        <TextField variant="standard" />
        <TextField variant="outlined" size="small" color="error" />
        <TextField
          variant="outlined"
          size="small"
          color="error"
          helperText="Lutfen isminizi giriniz"
          label="Ad"
        />
        <TextField
          variant="outlined"
          size="small"
          color="error"
          helperText="Please enter password"
          label="Password"
          type="password"
        />
        <TextField
          variant="outlined"
          size="small"
          helperText="Please enter password"
          label="Password"
          type="password"
          disabled
        />
        <TextField
          variant="outlined"
          size="small"
          helperText="Please enter password"
          label="Password"
          type="password"
          InputProps={{ readOnly: true }}
        />
        <TextField
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">TL</InputAdornment>
            ),
          }}
          label="Toplam"
        />
      </Stack>
      <Stack direction="row">
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          helperText={
            !password ? "Sifre giriniz" : "Sifrenizi kimseyle paylasmayiniz"
          }
        />
      </Stack>
    </Stack>
  );
}

export default TextFieldLesson;
