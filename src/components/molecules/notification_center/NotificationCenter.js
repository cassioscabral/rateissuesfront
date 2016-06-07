'use strict'

import React from 'react'
import Notifier from 'components/atoms/notifier/Notifier'
require('./stylesheets/notification_center.scss')

class NotificationCenter extends React.Component {
  render() {
    return (
      <div className='notification-center-component'>
        <Notifier name='inbox'
          icon='inbox'></Notifier>
        <Notifier name='notifications'
          icon='notifications'></Notifier>
      </div>
    )
  }
}

NotificationCenter.displayName = 'MoleculeNotificationCenter'

// Uncomment properties you need
// NotificationCenter.propTypes = {};
// NotificationCenter.defaultProps = {};

export default NotificationCenter
