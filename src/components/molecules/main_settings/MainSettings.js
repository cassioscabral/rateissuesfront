'use strict'

import React from 'react'
import SettingOption from 'components/atoms/setting_option/SettingOption'

require('./stylesheets/main_settings.scss')

class MainSettings extends React.Component {
  render() {
    var style = {
      display: this.props.show ? 'flex' : 'none'
    }
    var settingsOptions = [
      'Tag Edit',
      'Other Settings',
      'Issues Preferences',
      'Project Watching',
      'Exit'
    ]
    return (
      <div className='main-settings-component column'
        style={ style }>
        { settingsOptions.map(option => <SettingOption
          label={ option } />)
        }
      </div>
    )
  }
}

MainSettings.displayName = 'MoleculeMainSettings'

// Uncomment properties you need
// MainSettings.propTypes = {};
// MainSettings.defaultProps = {};

export default MainSettings
