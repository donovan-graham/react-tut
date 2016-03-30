import { connect } from 'react-redux';
import App from 'components/App';

function mapStateToProps(state) {
  return {
    username: state.session.username,
  };
}

export default connect(mapStateToProps)(App);
