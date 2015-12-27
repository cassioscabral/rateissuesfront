'use strict';

import React from 'react';

require('./stylesheets/notifier.scss');

class Notifier extends React.Component {
  render() {
    return (
      <div className='notifier-component'>
        Please edit src/components/atoms/notifier/Notifier.js to update this component!
      </div>
    );
  }
}

Notifier.displayName = 'AtomNotifier';

// Uncomment properties you need
// Notifier.propTypes = {};
// Notifier.defaultProps = {};

export default Notifier;
