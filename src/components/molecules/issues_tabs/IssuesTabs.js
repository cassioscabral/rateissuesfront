'use strict'

import React from 'react'
import Tab from 'components/atoms/tab/Tab'
_ = require('lodash')
require('./stylesheets/issues_tabs.scss')

class IssuesTabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {activeTab: 'hot'}
  }
  changeTab(tab) {
    this.setState({activeTab: tab})
  }
  render() {
    return (
      <div className='issues-tabs-component'>
        <header>
          <h4>{_.capitalize(this.state.activeTab)} Issues</h4>
        </header>
        <div className='row tabs'>
          <Tab name='hot' onClick={this.changeTab.bind(this)}
               activeTab={this.state.activeTab}/>
          <Tab name='trending'
               onClick={this.changeTab.bind(this)}
               activeTab={this.state.activeTab} />
          <Tab name='fresh' onClick={this.changeTab.bind(this)}
               activeTab={this.state.activeTab} />
        </div>
      </div>
    )
  }
}

IssuesTabs.displayName = 'MoleculeIssuesTabs'

// Uncomment properties you need
// IssuesTabs.propTypes = {};
IssuesTabs.defaultProps = {activeTab: 'hot'}

export default IssuesTabs
