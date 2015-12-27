'use strict';

import React from 'react';

require('./stylesheets/notification.scss');

class Notification extends React.Component {
  render() {
    return (
      <div className='notification-component'>
        Please edit src/components/atoms/notification/Notification.js to update this component!
      </div>
    );
  }
}

Notification.displayName = 'AtomNotification';

// Uncomment properties you need
// Notification.propTypes = {};
// Notification.defaultProps = {};

export default Notification;
