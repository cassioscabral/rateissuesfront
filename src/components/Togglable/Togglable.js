import React, {Component} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Togglable.scss'

class Togglable extends Component {
  constructor (props) {
    super(props)
    this.state = {toggled: this.props.toggled || false}
  }
  toggle () {
    this.setState({toggled: !this.state.toggled})
  }
  render () {
    return (
      <div className={ s.root } >
        <div className={ s.togglableComponent }
          onClick={ this.toggle.bind(this) }
          >
          { this.props.toggleComponent }
        </div>
        { this.state.toggled ? this.props.children : false }
      </div>
    )
  }
}

export default withStyles(s)(Togglable)
