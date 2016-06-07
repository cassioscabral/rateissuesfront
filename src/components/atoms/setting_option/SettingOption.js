'use strict'

import React from 'react'

require('./stylesheets/setting_option.scss')

class SettingOption extends React.Component {
  render () {
    return (
      <div className='setting-option-component'>
        { this.props.label }
      </div>
    )
  }
}

SettingOption.displayName = 'AtomSettingOption'

// Uncomment properties you need
// SettingOption.propTypes = {};
// SettingOption.defaultProps = {};

export default SettingOption
