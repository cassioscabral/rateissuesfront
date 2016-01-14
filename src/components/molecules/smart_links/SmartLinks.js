'use strict';

import React from 'react';

require('./stylesheets/smart_links.scss');

class SmartLinks extends React.Component {
  render() {
    return (
      <div className='smart-links-component'>
        <a href='#'>about</a>
        <a href='#'>help</a>
      </div>
    );
  }
}

SmartLinks.displayName = 'MoleculeSmartLinks';

// Uncomment properties you need
// SmartLinks.propTypes = {};
// SmartLinks.defaultProps = {};

export default SmartLinks;
