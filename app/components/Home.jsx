import React, { PropTypes } from 'react';

import HelloWorld from 'components/HelloWorld';

// const Home = ({ username, isLoading, onClick }) => (
//   <div onClick={() => !isLoading && onClick()}>
//     <HelloWorld username={username} />
//     {isLoading && <div>fetching data ...</div>}
//   </div>
// );

class Home extends React.Component {
  componentDidMount() {
    this.props.handleFetch();
  }

  render() {
    const { isLoading, username, handleFetch } = this.props;
    return (
      <div onClick={() => !isLoading && handleFetch()}>
        <HelloWorld username={username} />
        {isLoading && <div>fetching data ...</div>}
      </div>
    );
  }
}

Home.propTypes = {
  username: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleFetch: PropTypes.func.isRequired,
};


export default Home;
