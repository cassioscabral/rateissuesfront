'use strict';

import React from 'react';

require('./stylesheets/logo_name.scss');

class LogoName extends React.Component {
  render() {
    return (
      <div className='logo-name-component'>
        Please edit src/components/molecules/logo_name/LogoName.js to update this component!
      </div>
    );
  }
}

LogoName.displayName = 'MoleculeLogoName';

// Uncomment properties you need
// LogoName.propTypes = {};
// LogoName.defaultProps = {};

export default LogoName;
