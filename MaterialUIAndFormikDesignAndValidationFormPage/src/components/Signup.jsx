import {
  Avatar,
  Button,
  Checkbox,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
function Signup() {
  const paperStyle = {
    padding: 20,
    /*height: "44vh",*/
    width: 320,
    //margin: "20px auto",
  };
  const headerStyle = {
    margin: "5px 0 ",
  };
  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center" mb={3}>
            <Avatar style={{ backgroundColor: "#1bbd7e" }}>
              <PersonIcon />
            </Avatar>
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant="caption">
              Please fill this form to create an account!
            </Typography>
          </Grid>
          <form>
            <Stack spacing={2}>
              <TextField
                label="Name"
                fullWidth
                size="small"
                placeholder="Enter your name"
              />
              <TextField
                label="Email"
                fullWidth
                size="small"
                placeholder="Enter your email"
              />
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  style={{ display: "inline" }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                label="Phone Number"
                fullWidth
                size="small"
                placeholder="Enter your phone number"
              />
              <TextField
                label="Password"
                fullWidth
                size="small"
                placeholder="Enter your password"
              />
              <TextField
                label="Confirm Password"
                fullWidth
                size="small"
                placeholder="Enter your confirm password"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="I accept the terms and conditions"
              />
              <Button type="submit" variant="contained" fullWidth>
                Sign Up
              </Button>
            </Stack>
          </form>
        </Paper>
      </Grid>
    </>
  );
}

export default Signup;
