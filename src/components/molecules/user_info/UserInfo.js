'use strict';

import React from 'react';
import ProfileImage from 'components/atoms/profile_image/ProfileImage';
import Username from 'components/atoms/username/Username';

require('./stylesheets/user_info.scss');

class UserInfo extends React.Component {
  render() {
    return (
      <div className='user-info-component'>
        <ProfileImage email='cassioscabral@gmail.com'/>
        <Username username='cassioscabral' />
      </div>
    );
  }
}

UserInfo.displayName = 'MoleculeUserInfo';

// Uncomment properties you need
// UserInfo.propTypes = {};
// UserInfo.defaultProps = {};

export default UserInfo;
