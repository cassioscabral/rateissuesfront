import React from 'react'
import MdSettings from 'react-icons/md/settings'

require('./stylesheets/settings.scss')

class Settings extends React.Component {
  constructor (props) {
    super(props)
    this.state = {active: false, color: 'grey'}
  }
  handleClick () {
    if (this.props.onClick) {
      if (this.props.changeComponentTo) {
        this.props.onClick(this.props.changeComponentTo)
        this.setState({active: !this.state.active})
      }
    }
  }
  render () {
    return (
      <div className='settings-component'
        onClick={ this.handleClick.bind(this) }>
        <MdSettings
          size='24'
          color={ this.state.color } />
      </div>
    )
  }
}

Settings.displayName = 'AtomSettings'

export default Settings
