'use strict';

import React from 'react';

require('./stylesheets/logo.scss');

class Logo extends React.Component {
  render() {
    return (
      <div className='logo-component'>
        Please edit src/components/atoms/logo/Logo.js to update this component!
      </div>
    );
  }
}

Logo.displayName = 'AtomLogo';

// Uncomment properties you need
// Logo.propTypes = {};
// Logo.defaultProps = {};

export default Logo;
