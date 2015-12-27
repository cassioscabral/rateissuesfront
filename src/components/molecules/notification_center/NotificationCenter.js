'use strict';

import React from 'react';

require('./stylesheets/notification_center.scss');

class NotificationCenter extends React.Component {
  render() {
    return (
      <div className='notification-center-component'>
        Please edit src/components/molecules/notification_center/NotificationCenter.js to update this component!
      </div>
    );
  }
}

NotificationCenter.displayName = 'MoleculeNotificationCenter';

// Uncomment properties you need
// NotificationCenter.propTypes = {};
// NotificationCenter.defaultProps = {};

export default NotificationCenter;
