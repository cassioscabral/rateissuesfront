'use strict'

import React from 'react'
// import {FontIcon} from 'material-ui'

require('./stylesheets/logo.scss')

class Logo extends React.Component {
  render() {
    return (
      <div className='logo-component'>
        {/* <FontIcon className='material-icons' color='grey'>home</FontIcon>*/}
      </div>
    )
  }
}

Logo.displayName = 'AtomLogo'

// Uncomment properties you need
// Logo.propTypes = {};
// Logo.defaultProps = {};

export default Logo
