'use strict';

import React from 'react';
import ProfileImage from 'components/atoms/profile_image/ProfileImage';
import Username from 'components/atoms/username/Username';
import Badges from 'components/molecules/badges/Badges';

require('./stylesheets/user_info.scss');

class UserInfo extends React.Component {
  getUserProfile() {
    return JSON.parse(localStorage.getItem('userProfile'));
  }
  render() {

    let userProfile = this.getUserProfile();
    return (
      <div className='user-info-component'>
        <ProfileImage email={userProfile.email} />
        <div className='column'>
          <Username username={userProfile.nickname} />
          <Badges points='500' />
        </div>
      </div>
    );
  }
}

UserInfo.displayName = 'MoleculeUserInfo';

// Uncomment properties you need
// UserInfo.propTypes = {};
// UserInfo.defaultProps = {};

export default UserInfo;
