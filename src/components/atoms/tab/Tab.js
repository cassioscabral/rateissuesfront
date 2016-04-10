'use strict'
var classNames = require('classnames')

import React from 'react'
require('./stylesheets/tab.scss')

class Tab extends React.Component {
  alterate() {
    this.props.onClick(this.props.name)
  }
  render() {
    let tabClass = classNames({
      'tab-component': true,
      'active': this.props.activeTab == this.props.name
    })
    return (
      <div className={tabClass} onClick={this.alterate.bind(this)}>
        <span>{this.props.name}</span>
      </div>
    )
  }
}

Tab.displayName = 'AtomTab'

// Uncomment properties you need
// Tab.propTypes = {};
// Tab.defaultProps = {};

export default Tab
