import React, { PropTypes } from 'react';
import HelloWorld from 'components/HelloWorld';

const App = ({ username, isLoading, onClick }) => (
  <div onClick={() => !isLoading && onClick()}>
    <HelloWorld username={username} />
    {isLoading && <div>fetching data ...</div>}
  </div>
);

App.propTypes = {
  username: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default App;
