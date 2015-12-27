'use strict';

import React from 'react';

require('./stylesheets/badge.scss');

class Badge extends React.Component {
  render() {
    return (
      <div className='badge-component'>
        Please edit src/components/atoms/badge/Badge.js to update this component!
      </div>
    );
  }
}

Badge.displayName = 'AtomBadge';

// Uncomment properties you need
// Badge.propTypes = {};
// Badge.defaultProps = {};

export default Badge;
