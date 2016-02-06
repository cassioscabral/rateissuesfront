'use strict';

import React from 'react';

require('./stylesheets/smart_links.scss');

class SmartLinks extends React.Component {
  componentWillMount() {
    this.lock = new Auth0Lock('wrongAuth', 'rateissues.auth0.com');
  }
  showLock() {
    // We receive lock from the parent component in this case
    // If you instantiate it in this component, just do this.lock.show()
    this.lock.show();
  }
  render() {
    return (
      <div className='smart-links-component'>
        <a href='#'>about</a>
        <a href='#'>help</a>
        <a href='#' onClick={this.showLock.bind(this)}>Sign In</a>
      </div>
    );
  }
}

SmartLinks.displayName = 'MoleculeSmartLinks';

// Uncomment properties you need
// SmartLinks.propTypes = {};
// SmartLinks.defaultProps = {};

export default SmartLinks;
