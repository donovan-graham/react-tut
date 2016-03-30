import React, { PropTypes } from 'react';
import HelloWorld from 'components/HelloWorld';

const App = ({ username }) => (
  <div>
    <HelloWorld username={username} />
  </div>
);

App.propTypes = {
  username: PropTypes.string.isRequired,
};

export default App;
