import { Avatar, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
function Signup() {
  const paperStyle = {
    padding: 20,
    /*height: "44vh",*/
    width: 320,
    margin: "20px auto",
  };
  const headerStyle = {
    margin: "5px 0 ",
  };
  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={{ backgroundColor: "#1bbd7e" }}>
              <PersonIcon />
            </Avatar>
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant="caption">
              Please fill this form to create an account!
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}

export default Signup;
