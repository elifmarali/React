import React from "react";
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "44vh",
    width: 320,
    margin: "20px auto",
  };
  const avatarStyle = {
    backgroundColor: "#1bbd7e",
  };
  return (
    <Container
      style={{
        height: "100%",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <HttpsOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
            variant="filled"
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            fullWidth
            required
            type="password"
            variant="filled"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember Me"
          />
          <Button
            type="submit"
            color="primary"
            fullWidth
            variant="contained"
            sx={{ margin: "20px 0" }}
          >
            Sign In
          </Button>
          <Link href="#" underline="none">
            Forgot Password?
          </Link>
          <Grid
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>Do you have an account?</Typography>
            <Link href="#" underline="hover">
              Sign Up
            </Link>
          </Grid>
        </Paper>
      </Grid>
    </Container>
  );
};
export default Login;
