import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';

const AdditionalContribution = ({
  step,
  fields: {
    firstName,
    lastName,
    email,
    holdings,
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

      <br />
      <br />
      <br />


      {!holdings.length && <div>No holdings</div>}
      {holdings.map((holding, index) =>
        <div key={index}>
          <label>Holdings #{index + 1}</label>
          <div>
            <input type="text" placeholder="Fund" {...holding.fund} />
            {holding.fund.touched && holding.fund.error && <div>{holding.fund.error}</div>}
          </div>
          <div>
            <input type="text" placeholder="Amount" {...holding.amount} />
            {holding.amount.touched && holding.amount.error && <div>{holding.amount.error}</div>}
          </div>
          <button type="button" onClick={() => holdings.removeField(index)}>Remove</button>
        </div>
      )}
      <div>
        <button type="button" onClick={() => holdings.addField()}>Add</button>
      </div>

      <br />
      <br />
      <br />

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


const validateHolding = holding => {
  const errors = {};

  // fund
  if (!holding.fund) {
    errors.fund = 'Required';
  }

  // amount
  if (!holding.amount) {
    errors.amount = 'Required';
  }

  return errors;
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


  // holdings
  errors.holdings = values.holdings.map(validateHolding);

  return errors;
};


export default reduxForm({
  form: 'additionalContribution',
  fields: [
    'firstName',
    'lastName',
    'email',
    'holdings[].fund',
    'holdings[].amount',
  ],
  validate,
})(AdditionalContribution);

