'use strict';

import React from 'react';

require('./stylesheets/user_feed_item.scss');

class UserFeedItem extends React.Component {
  render() {
    return (
      <div className='user-feed-item-component'>
        Please edit src/components/molecules/user_feed_item/UserFeedItem.js to update this component!
      </div>
    );
  }
}

UserFeedItem.displayName = 'MoleculeUserFeedItem';

// Uncomment properties you need
// UserFeedItem.propTypes = {};
// UserFeedItem.defaultProps = {};

export default UserFeedItem;
