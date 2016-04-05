import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const ulStyle = {
  listStyleType: 'none',
  margin: '0 0 20px 0',
  padding: 0,
};

const liStyle = {
  display: 'inline',
  paddingRight: '10px',
};


const AppLayout = ({ children }) => (
  <div>
    <div>
      <ul style={ulStyle}>
        <li style={liStyle}><Link to="/">Home</Link></li>
        <li style={liStyle}><Link to="/boom">Boom</Link></li>
      </ul>
    </div>

    <div>
      {children}
    </div>
  </div>
);

AppLayout.propTypes = {
  children: PropTypes.any,
};

export default AppLayout;
