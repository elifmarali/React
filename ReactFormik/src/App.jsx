import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { indigo } from "@mui/material/colors";
import "./App.css";
import React from "react";
import { Field, Form, Formik } from "formik";
import { Typography, TextField, FormControl, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

import * as Yup from "yup";
function App() {
  const SignupValidation = Yup.object().shape({
    name: Yup.string()
      .min(2, "Çok kısa...")
      .max(20, "Çok uzun")
      .required("İsim alanı boş bırakılamaz..."),
    surname: Yup.string()
      .min(2, "Çok kısa...")
      .max(20, "Çok uzun")
      .required("Soyisim alanı boş bırakılamaz..."),
    address: Yup.string().required("Adres alanı boş bırakılamaz..."),
    country: Yup.string().required("Ülke alanı boş bırakılamaz..."),
    city: Yup.string().required("Şehir alanı boş bırakılamaz..."),
    district: Yup.string().required("İlçe alanı boş bırakılamaz..."),
    postalCode: Yup.number().required("Posta kodu alanı boş bırakılamaz..."),
    eMail: Yup.string()
      .email("Geçerli bir email giriniz...")
      .required("EMail alanı boş bırakılamaz..."),
    phoneNumber: Yup.string().required(
      "Telefon numarası alanı boş bırakılamaz..."
    ),
    date: Yup.string().required("Tarih alanı boş bırakılamaz..."),
    password: Yup.string().required("Şifre alanı boş bırakılamaz..."),
    passwordAgain: Yup.string().required(
      "Şifre tekrar alanı boş bırakılamaz..."
    ),
    agree: Yup.boolean()
      .oneOf([true])
      .required("Adres alanı boş bırakılamaz..."),
  });
  return (
    <Grid
      container
      alignItems="center"
      height={"100%"}
      margin="100px 200px"
      border={"1px solid"}
      borderColor={indigo[500]}
      borderRadius={5}
      padding={10}
      gap={20}
    >
      <Grid
        xs={12}
        md={4}
        lg={5}
        height={"100%"}
        columnSpacing={5}
        columnGap={4}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" marginBottom={6} color={indigo[900]}>
          Magic Form
        </Typography>
        <Typography variant="subtitle" color={indigo[600]}>
          Formlarınızı Magic Form ile hızlıca oluşturun...
        </Typography>
      </Grid>
      <Grid xs={12} md={8} lg={7} height="100%" alignItems="flex-start">
        <Typography variant="h4" marginBottom={6} color={indigo[900]}>
          Kayıt Ol!
        </Typography>
        <Formik
          initialValues={{
            name: "",
            surname: "",
            address: "",
            country: "",
            city: "",
            district: "",
            postalCode: "",
            eMail: "",
            phoneNumber: "",
            date: "",
            password: "",
            passwordAgain: "",
            agree: false,
          }}
          validationSchema={SignupValidation}
          onSubmit={(values) => {
            console.log("abcs");
            console.log("Form Values:", JSON.stringify(values, null, 2));
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <FormControl>
                  <TextField
                    label="İsim"
                    name="name"
                    size="small"
                    onChange={handleChange}
                    error={Boolean(errors.name && touched.name)}
                    helperText={errors.name}
                    value={values.name}
                  />
                </FormControl>
                <Button type="submit">Gönder</Button>
              </Form>
            );
          }}
        </Formik>
      </Grid>
    </Grid>
  );
}

export default App;
