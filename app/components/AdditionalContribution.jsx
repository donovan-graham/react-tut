import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';

const AdditionalContribution = ({
  step,
  fields: {
    firstName,
    lastName,
    email,
  },
  handleSubmit,
  resetForm,
  submitting,
}) => (
  <div>
    <h1>Additional Contribution: Step {step}</h1>

    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input type="text" placeholder="First Name" {...firstName} />
        {firstName.touched && firstName.error && <div>{firstName.error}</div>}
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" placeholder="Last Name" {...lastName} />
        {lastName.touched && lastName.error && <div>{lastName.error}</div>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" placeholder="Email" {...email} />
        {email.touched && email.error && <div>{email.error}</div>}
      </div>

      <button type="submit" disabled={submitting}>Submit</button>
      <button disabled={submitting} onClick={resetForm}>Reset</button>

    </form>
  </div>
);


AdditionalContribution.propTypes = {
  // state
  step: PropTypes.number.isRequired,

  // redux-form
  fields: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
};


const validate = values => {
  const errors = {};

  // firstName
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length < 3) {
    errors.firstName = 'Must be 3 characters or more';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  // lastName
  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length < 3) {
    errors.lastName = 'Must be 3 characters or more';
  } else if (values.lastName.length > 15) {
    errors.lastName = 'Must be 15 characters or less';
  }

  // email
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};


export default reduxForm({
  form: 'additionalContribution',
  fields: ['firstName', 'lastName', 'email'],
  validate,
})(AdditionalContribution);

