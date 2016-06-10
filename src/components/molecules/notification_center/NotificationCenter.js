import React from 'react'
import Notifier from 'components/atoms/notifier/Notifier'

require('./stylesheets/notification_center.scss')

class NotificationCenter extends React.Component {
  render () {
    return (
      <div className='notification-center-component'>
        <Notifier
          name='inbox'
          icon='inbox' />
        <Notifier
          name='notifications'
          icon='notifications' />
      </div>
    )
  }
}

NotificationCenter.displayName = 'MoleculeNotificationCenter'

export default NotificationCenter
