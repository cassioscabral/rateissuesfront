'use strict';

import React from 'react';

require('./stylesheets/users_feed.scss');

class UsersFeed extends React.Component {
  render() {
    return (
      <div className='users-feed-component'>
        Please edit src/components/molecules/users_feed/UsersFeed.js to update this component!
      </div>
    );
  }
}

UsersFeed.displayName = 'MoleculeUsersFeed';

// Uncomment properties you need
// UsersFeed.propTypes = {};
// UsersFeed.defaultProps = {};

export default UsersFeed;
