import "../App.css";
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
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
function Signup() {
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    gender: "female",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  };
  const paperStyle = {
    padding: 20,
    /*height: "44vh",*/
    width: 320,
    //margin: "20px auto",
  };
  const headerStyle = {
    margin: "5px 0 ",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Required...")
      .min(3, "Must be 3 characters or more"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Required..."),
    phoneNumber: Yup.string()
      .required("Required")
      .max(11, "Must be 11 characters or less")
      .min(10, "Must be 10 characters or more"),
    gender: Yup.string().required("Required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Please requires a symbol")
      .required("Required"),
    confirmPassword: Yup.string()
      .required("Required...")
      .oneOf([Yup.ref("password"), null], "Must match 'password' field value"),
    termsAndConditions: Yup.boolean()
      .oneOf([true], "You must accept the terms and conditions")
      .required("Required"),
  });

  const onSubmit = (values, props) => {
    console.log(values);
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
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ errors, values, touched }) => (
              <Form>
                <Stack spacing={2}>
                  <Field
                    as={TextField}
                    name="name"
                    label="Name"
                    fullWidth
                    size="small"
                    placeholder="Enter your name"
                    helperText={errors.name && touched.name && errors.name}
                    error={errors.name && touched.name}
                  />
                  {/* <ErrorMessage
                    name="name"
                    className="errorMessage"
                    component={Typography}
                  /> */}
                  <Field
                    as={TextField}
                    name="email"
                    label="Email"
                    fullWidth
                    size="small"
                    placeholder="Enter your email"
                    helperText={errors.email && touched.email && errors.email}
                    error={errors.email && touched.email}
                  />
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                      Gender
                    </FormLabel>
                    <Field
                      as={RadioGroup}
                      name="gender"
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      style={{ display: "inline" }}
                      helperText={
                        errors.gender && touched.gender && errors.gender
                      }
                      error={errors.gender && touched.gender}
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
                    </Field>
                  </FormControl>
                  <Field
                    as={TextField}
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    size="small"
                    placeholder="Enter your phone number"
                    helperText={
                      errors.phoneNumber &&
                      touched.phoneNumber &&
                      errors.phoneNumber
                    }
                    error={errors.phoneNumber && touched.phoneNumber}
                  />
                  <Field
                    as={TextField}
                    name="password"
                    label="Password"
                    fullWidth
                    size="small"
                    placeholder="Enter your password"
                    error={errors.password && touched.password}
                    helperText={
                      errors.password && touched.password && errors.password
                    }
                  />
                  <Field
                    as={TextField}
                    name="confirmPassword"
                    label="Confirm Password"
                    fullWidth
                    size="small"
                    placeholder="Enter your confirm password"
                    helperText={
                      errors.confirmPassword &&
                      touched.confirmPassword &&
                      errors.confirmPassword
                    }
                    error={errors.confirmPassword && touched.confirmPassword}
                  />
                  <FormControlLabel
                    control={<Field as={Checkbox} name="termsAndConditions" />}
                    label="I accept the terms and conditions"
                  />
                  <ErrorMessage
                    name="termsAndConditions"
                    component="div"
                    style={{
                      color: "#d32f2f",
                      fontSize: "0.8rem",
                      margin: "0 0 0 20px",
                    }}
                  />

                  <Button type="submit" variant="contained" fullWidth>
                    Sign Up
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </>
  );
}

export default Signup;
