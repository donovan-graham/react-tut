import { connect } from 'react-redux';
import App from 'components/App';

function mapStateToProps(state) {
  return {
    username: state.session.username,
    isLoading: state.session.isLoading,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({ type: 'FETCH_REQUESTED' });
    },
  };
};


// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     onClick(isLoading) {
//       if (isLoading) { return; }
//       dispatch({ type: 'FETCH_REQUESTED' });
//     },
//   };
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       dispatch(setVisibilityFilter(ownProps.filter))
//     }
//   }
// }


export default connect(mapStateToProps, mapDispatchToProps)(App);
