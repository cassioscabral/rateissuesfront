'use strict'

import React from 'react'

require('./stylesheets/profile_image.scss')
let md5 = require('md5')

class ProfileImage extends React.Component {
  render() {
    var imageUrl = undefined
    if (this.props.email !== undefined) {
      imageUrl = 'http://www.gravatar.com/avatar/' + md5(this.props.email)
    } else if (this.props.url !== undefined) {
      imageUrl = this.props.url
    }
    return (
      <div className='profile-image-component'>
        <img src={ imageUrl }
          width='40px'
          height='40px' />
      </div>
    )
  }
}

ProfileImage.displayName = 'AtomProfileImage'

// Uncomment properties you need
// ProfileImage.propTypes = {};
// ProfileImage.defaultProps = {};

export default ProfileImage
