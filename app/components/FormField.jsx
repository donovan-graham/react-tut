import React, { PropTypes } from 'react';


const FormField = ({ field, label = '', prompt = '', type = 'text' }) => {
  const showError = field.touched && field.error;

  return (
    <div className="ag-field">
      {label && <label>{label}</label>}
      <input type={type} placeholder={prompt} {...field} />
      {showError && <div className="error">{field.error}</div>}
    </div>
  );
};

FormField.propTypes = {
  field: PropTypes.object.isRequired,
  label: PropTypes.string,
  prompt: PropTypes.string,
  type: PropTypes.string,
};

export default FormField;
