'use strict';

import React from 'react';

require('./stylesheets/feed.scss');

class Feed extends React.Component {
  render() {
    return (
      <div className='feed-component'>
        Please edit src/components/molecules/feed/Feed.js to update this component!
      </div>
    );
  }
}

Feed.displayName = 'MoleculeFeed';

// Uncomment properties you need
// Feed.propTypes = {};
// Feed.defaultProps = {};

export default Feed;
