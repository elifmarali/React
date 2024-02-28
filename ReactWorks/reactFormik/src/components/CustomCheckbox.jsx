import { useField } from "formik";
import React from "react";
import "../styles/PortalForm.css";
function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="formItem">
      <div className="formItemCheckbox">
        {" "}
        <input
          {...field}
          {...props}
          className={meta.error ? "errorInput" : ""}
        ></input>
        <div>Kullanici kosullarini kabul ediniz</div>
      </div>
      {meta.error && <span className="errorText">{meta.error}</span>}
    </div>
  );
}

export default CustomSelect;
