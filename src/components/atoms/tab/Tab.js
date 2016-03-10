'use strict';
let classNames = require('classnames');

import React from 'react';
import CustomFilter from 'components/molecules/custom_filter/CustomFilter';

require('./stylesheets/tab.scss');

class Tab extends React.Component {
  alterate() {
    this.props.onClick(this.props.name);
  }
  render() {
    let tabClass = classNames({
      'tab-component': true,
      'active': this.props.activeTab === this.props.name
    });
    if (this.props.name === 'custom') {
      return (
          <div className={tabClass} onClick={this.alterate.bind(this)}>
            <span>{this.props.name}</span>
            <CustomFilter activeTab={this.props.activeTab}></CustomFilter>
          </div>
        );
    } else {
      return (
        <div className={tabClass} onClick={this.alterate.bind(this)}>
          <span>{this.props.name}</span>
        </div>
      );
    }
  }
}

Tab.displayName = 'AtomTab';

// Uncomment properties you need
// Tab.propTypes = {};
// Tab.defaultProps = {};

export default Tab;
