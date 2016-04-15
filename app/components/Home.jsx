import React, { PropTypes } from 'react';

import HelloWorld from 'components/HelloWorld';

// const Home = ({ username, isLoading, onClick }) => (
//   <div onClick={() => !isLoading && onClick()}>
//     <HelloWorld username={username} />
//     {isLoading && <div>fetching data ...</div>}
//   </div>
// );

class Home extends React.Component {

  componentWillMount() {
    // debugger;
    // this.props.location;
    // this.props.params;

    // do you want to do something here
    // this.context.router.replace('/some-url');
  }

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

Home.contextTypes = {
  router: PropTypes.object.isRequired,
};

Home.propTypes = {
  username: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleFetch: PropTypes.func.isRequired,
};


export default Home;
