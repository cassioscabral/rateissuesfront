import React from 'react'
import md5 from 'md5'

require('./stylesheets/profile_image.scss')

class ProfileImage extends React.Component {
  render () {
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

export default ProfileImage
