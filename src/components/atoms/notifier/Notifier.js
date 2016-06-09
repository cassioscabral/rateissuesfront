'use strict'

import React from 'react'
import MdInbox from 'react-icons/md/inbox'
import MdNotifications from 'react-icons/md/notifications'


require('./stylesheets/notifier.scss')

class Notifier extends React.Component {
  _getIcon (){
    if (this.props.icon === 'notifications') {
      return <MdNotifications
        size='24'
        color='white' />
    }else{
      return <MdInbox
        size='24'
        color='white' />
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

// Uncomment properties you need
// Notifier.propTypes = {};
// Notifier.defaultProps = {};

export default Notifier
