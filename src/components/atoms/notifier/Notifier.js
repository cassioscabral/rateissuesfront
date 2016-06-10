import React from 'react'
import MdInbox from 'react-icons/md/inbox'
import MdNotifications from 'react-icons/md/notifications'

require('./stylesheets/notifier.scss')

class Notifier extends React.Component {
  _getIcon (){
    let size = 24
    let color = 'white'
    if (this.props.icon === 'notifications') {
      return <MdNotifications
        size={ size }
        color={ color } />
    }else{
      return <MdInbox
        size={ size }
        color={ color } />
    }
  }
  render () {
    return (
      <div className='notifier-component'>
        { this._getIcon() }
      </div>
    )
  }
}

Notifier.displayName = 'AtomNotifier'

export default Notifier
