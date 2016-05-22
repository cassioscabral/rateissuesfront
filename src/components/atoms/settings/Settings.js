'use strict'

import React from 'react'
// import {FontIcon} from 'material-ui'

require('./stylesheets/settings.scss')

class Settings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {active: false, color: 'grey'}
  }
  handleClick() {
    if (this.props.onClick) {
      if (this.props.changeComponentTo) {
        this.props.onClick(this.props.changeComponentTo)
        this.setState({active: !this.state.active})
      }
    }
  }
  render() {
    return (
      <div className='settings-component' onClick={this.handleClick.bind(this)}>
        {/*<FontIcon className='material-icons' color={this.state.color}>
          settings
        </FontIcon>*/}
      </div>
    )
  }
}

Settings.displayName = 'AtomSettings'

// Uncomment properties you need
// Settings.propTypes = {};
// Settings.defaultProps = {};

export default Settings
