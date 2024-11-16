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
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const Login = ({ setTab }) => {
  const initialValues = {
    username: "",
    password: "",
    rememberMe: false,
  };
  const paperStyle = {
    padding: 20,
    height: "48vh",
    width: 320,
    // margin: "20px auto",
  };
  const avatarStyle = {
    backgroundColor: "#1bbd7e",
  };

  const onSubmit = (values, props) => {
    console.log("values : ", values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
    console.log(`props : ${JSON.stringify(props, null, 2)}`);
    console.log(`isSubmitting : ${props.isSubmitting}`);
  };

  const controllers = Yup.object({
    username: Yup.string()
      .email("Enter a valid email address")
      .required("This is a required field"),
    password: Yup.string().required("This is a required field"),
    rememberMe: Yup.boolean().oneOf([true, false]),
  });
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
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={controllers}
          >
            {({
              values,
              handleBlur,
              handleChange,
              handleSubmit,
              handleReset,
              isSubmitting,
              status,
              touched,
              errors,
            }) => (
              <Form>
                <Field
                  as={TextField}
                  label="Username"
                  placeholder="Enter username"
                  fullWidth
                  variant="filled"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  helperText={
                    errors.username && touched.username && errors.username
                  }
                  error={errors.username && touched.username}
                />
                <Field
                  as={TextField}
                  label="Password"
                  placeholder="Enter password"
                  fullWidth
                  type="password"
                  variant="filled"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  helperText={
                    errors.password && touched.password && errors.password
                  }
                  error={errors.password && touched.password}
                />
                <Field
                  as={FormControlLabel}
                  control={
                    <Checkbox
                      value={values.rememberMe}
                      onChange={handleChange}
                      helperText={
                        errors.rememberMe &&
                        touched.rememberMe &&
                        errors.rememberMe
                      }
                      error={errors.rememberMe && touched.rememberMe}
                    />
                  }
                  label="Remember Me"
                  name="rememberMe"
                />
                <Button
                  type="submit"
                  color="primary"
                  fullWidth
                  variant="contained"
                  sx={{ margin: "20px 0" }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? `Loading...` : `Sign In`}
                </Button>
              </Form>
            )}
          </Formik>
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
            <Link
              href="#"
              underline="hover"
              onClick={() => {
                setTab("register");
              }}
            >
              Sign Up
            </Link>
          </Grid>
        </Paper>
      </Grid>
    </Container>
  );
};
export default Login;
