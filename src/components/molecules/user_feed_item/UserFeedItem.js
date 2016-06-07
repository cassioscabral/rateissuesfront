'use strict'

import React from 'react'
import ProfileImage from 'components/atoms/profile_image/ProfileImage'

require('./stylesheets/user_feed_item.scss')

class UserFeedItem extends React.Component {
  render() {
    var imageUrl = this.props.imageUrl
    var activity = this.props.activity
    // TODO make this activity look better in a separated component
    return (
      <div className='user-feed-item-component'>
        <div className='row'>
          <ProfileImage url={ imageUrl } />
          <span>{ activity }</span>
        </div>
      </div>
    )
  }
}

UserFeedItem.displayName = 'MoleculeUserFeedItem'

// Uncomment properties you need
// UserFeedItem.propTypes = {};
// UserFeedItem.defaultProps = {};

export default UserFeedItem
