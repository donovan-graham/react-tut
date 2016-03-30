import React, { Component, PropTypes } from 'react';
// import DevTools from './DevTools';
// import pureRender from 'pure-render-decorator';

// @pureRender
export default class CommentBox extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    const { name } = this.props;
    return (
      <div className="commentBox">
        Hello, world! I am {name}!
      </div>
    );
  }
}
