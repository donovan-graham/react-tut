import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { pathForBoom, pathForAdditionalContribution } from 'routes/paths';


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
        <li style={liStyle}><Link to={pathForBoom()}>Boom</Link></li>
        <li style={liStyle}><Link to={pathForAdditionalContribution()}>Additional Contribution</Link></li>
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
