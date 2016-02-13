'use strict';
var classNames = require('classnames');

import React from 'react';
require('./stylesheets/tab.scss');

class Tab extends React.Component {
  render() {
    let tabClass = classNames({
      'tab-component': true,
      'active': this.props.active
    });
    return (
      <div className={tabClass}>
        <span>{this.props.name}</span>
      </div>
    );
  }
}

Tab.displayName = 'AtomTab';

// Uncomment properties you need
// Tab.propTypes = {};
// Tab.defaultProps = {};

export default Tab;
