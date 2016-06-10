'use strict'

import React from 'react'
import MdHome from 'react-icons/md/home'

require('./stylesheets/logo.scss')

class Logo extends React.Component {
  render () {
    return (
      <div className='logo-component'>
        <MdHome
          size='24'
          color='grey' />
      </div>
    )
  }
}

Logo.displayName = 'AtomLogo'

export default Logo
