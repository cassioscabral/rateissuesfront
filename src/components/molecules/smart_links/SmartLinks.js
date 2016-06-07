/* global Auth0Lock */
'use strict'

import React from 'react'
import Settings from 'components/atoms/settings/Settings'

require('./stylesheets/smart_links.scss')
const CLIENT_ID = require('./API_KEY.js').CLIENT_ID // File is ignored by git
const CLIENT_DOMAIN = require('./API_KEY.js').CLIENT_DOMAIN // File is ignored by git

class SmartLinks extends React.Component {
  componentWillMount() {
    this.lock = new Auth0Lock(CLIENT_ID, CLIENT_DOMAIN)
    this.setState({idToken: this.getIdToken()})
  }
  componentDidMount() {
    // In this case, the lock and token are retrieved from the parent component
    // If these are available locally, use `this.lock` and `this.idToken`
    this.lock.getProfile(this.state.idToken, function(err, profile) {
      if (err) {
        console.log('Error loading the Profile', err)
        return
      }
      this.setState({profile: profile})
      localStorage.setItem('userProfile', JSON.stringify(profile))

    }.bind(this))
  }
  getIdToken() {
    var idToken = localStorage.getItem('userToken')
    var authHash = this.lock.parseHash(window.location.hash)
    if (!idToken && authHash) {
      if (authHash.id_token) {
        idToken = authHash.id_token
        localStorage.setItem('userToken', authHash.id_token)
      }
      if (authHash.error) {
        console.log('Error signing in', authHash)
        return null
      }
    }
    return idToken
  }
  showLock() {
    // We receive lock from the parent component in this case
    // If you instantiate it in this component, just do this.lock.show()
    this.lock.show({}, function(err, profile) {
      // Popup automatically set to true in this case
      // auth0 already catch errors
      localStorage.setItem('userProfile', JSON.stringify(profile))
    })
  }
  logout() {
    localStorage.removeItem('userToken')
    this.setState({idToken: null})
  }
  render() {
    if (this.state.idToken) {
      return (
        <div className='smart-links-component'>
          <a href='#'><Settings /></a>
          <a href='#'>about</a>
          <a href='#'>help</a>
          <a href='#' onClick={ this.logout.bind(this) }>Logout</a>
        </div>
      )
    } else {
      return (
        <div className='smart-links-component'>
          <a href='#'>about</a>
          <a href='#'>help</a>
          <a href='#' onClick={ this.showLock.bind(this) }>Sign In</a>
        </div>
      )
    }
  }
}

SmartLinks.displayName = 'MoleculeSmartLinks'

// Uncomment properties you need
// SmartLinks.propTypes = {}
// SmartLinks.defaultProps = {}

export default SmartLinks
