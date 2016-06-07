'use strict'

import React from 'react'
import UserFeedItem from 'components/molecules/user_feed_item/UserFeedItem'

require('./stylesheets/users_feed.scss')

class UsersFeed extends React.Component {
  render () {
    var items = this.props.userActivities
    return (
      <div className='users-feed-component'>
        { items.map(userFeedItem => <UserFeedItem
          activity={ userFeedItem.activity }
          imageUrl={ userFeedItem.imageUrl } />)
        }
      </div>
    )
  }
}

UsersFeed.displayName = 'MoleculeUsersFeed'

// Uncomment properties you need
// UsersFeed.propTypes = {};
// UsersFeed.defaultProps = {};

export default UsersFeed
