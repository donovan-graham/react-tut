import { connect } from 'react-redux';
import Home from 'components/Home';
import { fetchRequested } from 'actions';


function mapStateToProps(state) {
  return {
    username: state.session.username,
    isLoading: state.session.isLoading,
  };
}

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(fetchRequested());
  },
});


// function mapDispatchToProps(dispatch) {
//   return {
//     onClick(isLoading) {
//       if (isLoading) { return; }
//       dispatch({ type: 'FETCH_REQUESTED' });
//     },
//   };
// }


export default connect(mapStateToProps, mapDispatchToProps)(Home);
