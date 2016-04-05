import { connect } from 'react-redux';
import AdditionalContribution from 'components/AdditionalContribution';


const mapStateToProps = (state) => ({
  step: state.additionalContribution.currentStep,
  isLoading: state.additionalContribution.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => {
    console.log("Submitted: ", data);
    // dispatch(saveAccount(account));
    // dispatch(routeActions.push(streamPath()));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalContribution);
