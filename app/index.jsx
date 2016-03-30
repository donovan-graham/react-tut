import React from 'react';
import ReactDOM from 'react-dom';

import CommentBox from './components/comment-box';

// const pair = ['Trainspotting', '28 Days Later'];

// const CommentBox = React.createClass({
//   render() {
//     return (
//       <div className="commentBox">
//         Hello, world! I am a CommentBox !!!!!!
//       </div>
//     );
//   }
// });


ReactDOM.render(
  <CommentBox name="Donovan" />,
  document.getElementById('app')
);
