import React from "react";

import "./AppFormInput.css";

const AppFormInput = ({
  placeholder,
  value,
  onChange,
  keyboardType,
  multiline,
  secureTextEntry,
  onBlur,
  name,
  error,
}) => {
  return (
    <div className="AppFormInput">
      {error && (
        <p className="error_text" role="alert">
          {error}
        </p>
      )}
      <div className="container">
        <input
          className="input"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={secureTextEntry ? "password" : "text"}
          keyboardType={keyboardType}
          multiline={multiline}
          onBlur={onBlur}
          name={name}
          aria-invalid={Boolean(error)}
        />
      </div>
    </div>
  );
};

export default AppFormInput;
