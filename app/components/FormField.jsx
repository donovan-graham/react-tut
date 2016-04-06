import React, { PropTypes } from 'react';


const FormField = ({ field, label, prompt }) => {
  const hasError = field.touched && field.error;

  return (
    <div className="ag-field">
      {label && <label>{label}</label>}
      <input type="text" placeholder={prompt} {...field} />
      {hasError && <div className="error">{field.error}</div>}
    </div>
  );
};

FormField.propTypes = {
  field: PropTypes.object.isRequired,
  label: PropTypes.string,
  prompt: PropTypes.string,
};

export default FormField;
