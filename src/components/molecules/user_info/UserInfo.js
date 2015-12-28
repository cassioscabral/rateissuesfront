'use strict';

import React from 'react';
import ProfileImage from 'components/atoms/profile_image/ProfileImage';
import Username from 'components/atoms/username/Username';
import Badges from 'components/molecules/badges/Badges';

require('./stylesheets/user_info.scss');

class UserInfo extends React.Component {
  render() {
    return (
      <div className='user-info-component'>
        <ProfileImage email='cassioscabral@gmail.com' />
        <div className='column'>
          <Username username='cassioscabral' />
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
