import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import "../styles/PortalForm.css";
import { advencedSchema } from "../schemas/index";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { Link } from "react-router-dom";
function PortalForm() {
  const onSubmit = async (values, actions) => {
    console.log(values, actions);
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{ username: "", university: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advencedSchema}
      >
        {(isSubmitting) => (
          <Form className="formContainer">
            <CustomInput
              label="Kullanici Adi"
              name="username"
              type="text"
              placeholder="Kullanici adinizi giriniz "
            ></CustomInput>
            <CustomSelect
              label="Universite"
              name="university"
              placeholder="Universite seciniz"
            >
              <option value="">Lutfen Universitenizi Seciniz</option>
              <option value="bogazici">Bogazici Universtesi</option>
              <option value="gsu">Galatasaray Universitesi</option>
              <option value="odtu">ODTU</option>
              <option value="itu">Istanbul Teknik Universitesi</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="isAccepted"></CustomCheckbox>
            <button
              type="submit"
              className="saveButton"
              disabled={isSubmitting}
            >
              Kaydet
            </button>
          </Form>
        )}
      </Formik>
      <Link to="/">Ana Sayfaya Git</Link>
    </>
  );
}

export default PortalForm;
