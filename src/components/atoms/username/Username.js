'use strict';

import React from 'react';

require('./stylesheets/username.scss');

class Username extends React.Component {
  render() {
    return (
      <div className='username-component'>
        Please edit src/components/atoms/username/Username.js to update this component!
      </div>
    );
  }
}

Username.displayName = 'AtomUsername';

// Uncomment properties you need
// Username.propTypes = {};
// Username.defaultProps = {};

export default Username;
