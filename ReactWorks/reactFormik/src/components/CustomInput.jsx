import { useField } from "formik";
import React from "react";
import "../styles/PortalForm.css";

function CustomInput({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="formItem">
      <label>{label}</label>
      <input
        type="text"
        {...field}
        {...props}
        className={meta.error ? "errorInput" : ""}
      />
      {meta.error && <span className="errorText">{meta.error}</span>}
    </div>
  );
}

export default CustomInput;
