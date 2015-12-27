'use strict';

import React from 'react';

require('./stylesheets/profile_image.scss');

class ProfileImage extends React.Component {
  render() {
    return (
      <div className='profile-image-component'>
        Please edit src/components/atoms/profile_image/ProfileImage.js to update this component!
      </div>
    );
  }
}

ProfileImage.displayName = 'AtomProfileImage';

// Uncomment properties you need
// ProfileImage.propTypes = {};
// ProfileImage.defaultProps = {};

export default ProfileImage;
