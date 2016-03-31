import { connect } from 'react-redux';
import App from 'components/App';

function mapStateToProps(state) {
  return {
    username: state.session.username,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick() {
      dispatch({ type: 'FETCH_REQUESTED' });
    },
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
