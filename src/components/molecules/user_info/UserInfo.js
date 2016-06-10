import React from 'react'
import ProfileImage from 'components/atoms/profile_image/ProfileImage'
import Username from 'components/atoms/username/Username'
import Badges from 'components/molecules/badges/Badges'

require('./stylesheets/user_info.scss')

class UserInfo extends React.Component {

  render () {
    let profile = this.props.profile || {email:'', nickname:''}
    return (
      <div className='user-info-component'>
        <ProfileImage email={ profile.email } />
        <div className='column'>
          <Username username={ profile.nickname } />
          <Badges points='500' />
        </div>
      </div>
    )
  }
}

UserInfo.displayName = 'MoleculeUserInfo'

export default UserInfo
