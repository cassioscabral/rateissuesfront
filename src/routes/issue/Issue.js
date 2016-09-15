import React, {Component, PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Issue.scss'

class Issue extends Component {
  static contextTypes = {
    setTitle: PropTypes.func.isRequired
  };

  static propTypes = {
    path: PropTypes.string.isRequired
  };

  componentWillMount () {
    this.context.setTitle(this.props.path)
  }

  render () {
    return (
      <div className={ s.root }>
        <div className={ s.container }>
          <p>issue</p>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(Issue)
