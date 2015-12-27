'use strict';

import React from 'react';

require('./stylesheets/user_info.scss');

class UserInfo extends React.Component {
  render() {
    return (
      <div className='user-info-component'>
        Please edit src/components/molecules/user_info/UserInfo.js to update this component!
      </div>
    );
  }
}

UserInfo.displayName = 'MoleculeUserInfo';

// Uncomment properties you need
// UserInfo.propTypes = {};
// UserInfo.defaultProps = {};

export default UserInfo;
