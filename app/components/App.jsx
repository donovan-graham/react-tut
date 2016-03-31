import React, { PropTypes } from 'react';
import HelloWorld from 'components/HelloWorld';

const App = ({ username, onClick }) => (
  <div onClick={onClick}>
    <HelloWorld username={username} />
  </div>
);

App.propTypes = {
  username: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default App;
