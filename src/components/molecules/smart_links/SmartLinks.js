import React from 'react'
import Auth0Lock from 'auth0-lock'

require('./stylesheets/smart_links.scss')

const API_KEYS = require('./API_KEY.js') // File is ignored by git

class SmartLinks extends React.Component {
  componentWillMount () {
    this.lock = new Auth0Lock(API_KEYS.CLIENT_ID, API_KEYS.CLIENT_DOMAIN)
  }
  showLock () {
    // We receive lock from the parent component in this case
    // If you instantiate it in this component, just do this.lock.show()
    this.lock.show({}, (err, profile, idToken) => {
      // Popup automatically set to true in this case
      // auth0 already catch errors
      if (!err){
        // fix logged pop up error
        this.lock.hide(() => {})

        localStorage.setItem('userProfile', JSON.stringify(profile))
        localStorage.setItem('userToken', idToken)
        this.props.setProfile(profile)
      }
    })
  }
  logout () {
    localStorage.removeItem('userProfile')
    localStorage.removeItem('userToken')
    this.props.setProfile(null)
  }
  render () {
    if (this.props.profile) {
      return (
        <div className='smart-links-component'>
          <a href='#'>about</a>
          <a href='#'>help</a>
          <a href='#'
            onClick={ this.logout.bind(this) }>Logout</a>
        </div>
      )
    } else {
      return (
        <div className='smart-links-component'>
          <a href='#'>about</a>
          <a href='#'>help</a>
          <a href='#'
            onClick={ this.showLock.bind(this) }>Sign In</a>
        </div>
      )
    }
  }
}

SmartLinks.displayName = 'MoleculeSmartLinks'

export default SmartLinks
