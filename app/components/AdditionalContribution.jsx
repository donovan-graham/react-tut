import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import FormField from 'components/FormField';


const AdditionalContribution = ({
  step,
  fields: {
    firstName,
    lastName,
    email,
    depositAmount,
    holdings,
  },
  handleSubmit,
  resetForm,
  submitting,
}) => {
  const totalHoldings = holdings.reduce((prev, holding) => {
    if (holding && holding.amount) {
      return prev + (parseInt(holding.amount.value, 0) || 0);
    }
    return prev;
  }, 0);

  return (
    <div>
      <h1>Additional Contribution: Step {step}</h1>

      <form onSubmit={handleSubmit}>

        <FormField field={firstName} label="First Name" prompt="Fill in your first name" />
        <FormField field={lastName} label="Last Name" prompt="Fill in your last name" />
        <FormField field={email} label="Email" prompt="Fill in your email" />
        <FormField field={depositAmount} label="Despoit amount" prompt="Fill in how much you want to deposit" type="number" />

        <br />
        <br />
        <br />

        {!holdings.length && <div>No holdings</div>}
        {holdings.map((holding, index) =>
          <div key={index}>
            <label>Holdings #{index + 1}</label>
            <div>
              <input type="text" placeholder="Fund" {...holding.fund} />
              {holding.fund.touched && holding.fund.error &&
                <div className="error">{holding.fund.error}</div>}
            </div>
            <div>
              <input type="text" placeholder="Amount" {...holding.amount} />
              {holding.amount.touched && holding.amount.error &&
                <div className="error">{holding.amount.error}</div>}
            </div>
            <button type="button" onClick={() => holdings.removeField(index)}>Remove</button>
          </div>
        )}

        <div>
          <label>Holding Total</label> &nbsp; &nbsp; &nbsp; &nbsp;
          <strong>{totalHoldings}</strong>
        </div>


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
};

AdditionalContribution.propTypes = {
  // state
  step: PropTypes.number.isRequired,

  // redux-form
  fields: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
};


/* validation */
const isMissing = (value) => !value || !value.trim();

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

  const firstName = values.firstName;
  if (isMissing(firstName)) {
    errors.firstName = 'Your first name is needed';
  } else if (firstName.length < 3) {
    errors.firstName = 'Must be 3 characters or more';
  } else if (firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  const lastName = values.lastName;
  if (isMissing(lastName)) {
    errors.lastName = 'Your last name is needed';
  } else if (lastName.length < 3) {
    errors.lastName = 'Must be 3 characters or more';
  } else if (lastName.length > 15) {
    errors.lastName = 'Must be 15 characters or less';
  }

  const email = values.email;
  if (isMissing(email)) {
    errors.email = 'Your email is needed';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  const holdings = values.holdings;
  errors.holdings = holdings.map(validateHolding);

  const depositAmount = values.depositAmount;
  if (isMissing(depositAmount)) {
    errors.depositAmount = 'Your deposit amount is needed';
  } else {
    const totalHoldings = holdings.reduce((prev, holding) => {
      if (holding && holding.amount) {
        return prev + (parseInt(holding.amount, 0) || 0);
      }
      return prev;
    }, 0);

    if (parseInt(totalHoldings, 0) !== parseInt(depositAmount, 0)) {
      errors.depositAmount = 'Your deposit amount does equal your holdings';
    }
  }

  return errors;
};


export default reduxForm({
  form: 'additionalContribution',
  fields: [
    'firstName',
    'lastName',
    'email',
    'depositAmount',
    'holdings[].fund',
    'holdings[].amount',
  ],
  validate,
})(AdditionalContribution);

