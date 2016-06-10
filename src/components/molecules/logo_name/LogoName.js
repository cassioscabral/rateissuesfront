import React from 'react'
import Logo from 'components/atoms/logo/Logo'
import AppName from 'components/atoms/app_name/AppName'

require('./stylesheets/logo_name.scss')

class LogoName extends React.Component {
  render () {
    return (
      <div className='logo-name-component'>
        <Logo />
        <AppName />
      </div>
    )
  }
}

LogoName.displayName = 'MoleculeLogoName'

export default LogoName
