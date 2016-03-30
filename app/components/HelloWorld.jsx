import React, { PropTypes } from 'react';

const HelloWorld = ({ username }) => (
  <div className="hello-world">
    Hello, world! I am {username}!!!
  </div>
);

HelloWorld.propTypes = {
  username: PropTypes.string.isRequired,
};

export default HelloWorld;
