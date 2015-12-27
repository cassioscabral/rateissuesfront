'use strict';

import React from 'react';

require('./stylesheets/logo.scss');

class Logo extends React.Component {
  render() {
    return (
      <div className='logo-component'>
        <img src='https://placeholdit.imgix.net/~text?txtsize=5&txt=40%C3%9740&w=40&h=40' />
      </div>
    );
  }
}

Logo.displayName = 'AtomLogo';

// Uncomment properties you need
// Logo.propTypes = {};
// Logo.defaultProps = {};

export default Logo;
