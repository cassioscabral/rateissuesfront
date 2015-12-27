'use strict';

import React from 'react';

require('./stylesheets/profile_image.scss');
let md5 = require('md5');

class ProfileImage extends React.Component {
  render() {
    return (
      <div className='profile-image-component'>
        <img src={'http://www.gravatar.com/avatar/' + md5(this.props.email)} width='40px' height='40px'/>
      </div>
    );
  }
}

ProfileImage.displayName = 'AtomProfileImage';

// Uncomment properties you need
// ProfileImage.propTypes = {};
// ProfileImage.defaultProps = {};

export default ProfileImage;
