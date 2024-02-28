import React from "react";
import { useFormik } from "formik";
import "../styles/GeneralForm.css";
import { basicSchema } from "../schemas/index.jsx";
import { Link } from "react-router-dom";
function GeneralForm() {
  const onSubmit = async (values, actions) => {
    console.log(values, actions);
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
  };
  const { handleSubmit, handleChange, values, errors, isSubmitting } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit,
      validationSchema: basicSchema,
    });

  return (
    <form onSubmit={handleSubmit} className="formContainer">
      <div className="formItem">
        <label>E-Mail</label>
        <input
          type="email"
          placeholder="Mail adresinizi giriniz"
          name="email"
          onChange={handleChange}
          value={values.email}
          className={errors.email ? "errorInput" : ""}
        />
        {errors.email && <span className="errorText">{errors.email}</span>}
      </div>
      <div className="formItem">
        <label>Yas</label>
        <input
          type="number"
          placeholder="Yasinizi giriniz"
          name="age"
          onChange={handleChange}
          value={values.age}
          className={errors.age ? "errorInput" : ""}
        />
        {errors.age && <span className="errorText">{errors.age}</span>}
      </div>
      <div className="formItem">
        <label>Sifre</label>
        <input
          type="password"
          placeholder="Sifrenizi giriniz"
          name="password"
          onChange={handleChange}
          autoComplete="on"
          value={values.password}
          className={errors.password ? "errorInput" : ""}
        />
        {errors.password && (
          <span className="errorText">{errors.password}</span>
        )}
      </div>
      <div className="formItem">
        <label>Sifre Tekrar</label>
        <input
          type="password"
          placeholder="Sifrenizi tekrar giriniz"
          name="confirmPassword"
          onChange={handleChange}
          autoComplete="on"
          value={values.confirmPassword}
          className={errors.confirmPassword ? "errorInput" : ""}
        />
        {errors.confirmPassword && (
          <span className="errorText">{errors.confirmPassword}</span>
        )}
      </div>
      <button type="submit" className="saveButton" disabled={isSubmitting}>
        Kaydet
      </button>
      <Link to="/portal">Portala Git</Link>
    </form>
  );
}

export default GeneralForm;
