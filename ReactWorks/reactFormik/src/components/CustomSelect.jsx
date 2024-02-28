import { useField } from "formik";
import React from "react";
import "../styles/PortalForm.css";
function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="formItem">
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.error ? "errorInput" : ""}
      ></select>
      {meta.error && <span className="errorText">{meta.error}</span>}
    </div>
  );
}

export default CustomSelect;
