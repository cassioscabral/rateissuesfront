'use strict';

import React from 'react';

require('./stylesheets/feed.scss');

class Feed extends React.Component {
  render() {
    var feed = this.props.feed;
    return (
      <div className='feed-component'>
        {this.props.for}
        {feed.map(feedItem => <FeedItem item={feedItem} />)}
      </div>
    );
  }
}

Feed.displayName = 'MoleculeFeed';

// Uncomment properties you need
// Feed.propTypes = {};
// Feed.defaultProps = {};

export default Feed;
