import React from 'react'
import Tab from 'components/atoms/tab/Tab'
import Settings from 'components/atoms/settings/Settings'
import _ from 'lodash'

require('./stylesheets/issues_tabs.scss')

class IssuesTabs extends React.Component {
  render () {
    return (
      <div className='issues-tabs-component'>
        <header>
          <h4>{ _.capitalize(this.props.activeTab) } Issues</h4>
        </header>
        <div className='row tabs'>
          <Tab name='hot'
            onClick={ this.props.changeTab }
            activeTab={ this.props.activeTab } />
          <Tab name='trending'
            onClick={ this.props.changeTab }
            activeTab={ this.props.activeTab } />
          <Tab name='fresh'
            onClick={ this.props.changeTab }
            activeTab={ this.props.activeTab } />
          <Settings changeComponentTo='Filters'
            onClick={ this.props.changeCurrentComponent.bind(this) } />
        </div>
      </div>
    )
  }
}

IssuesTabs.displayName = 'MoleculeIssuesTabs'

export default IssuesTabs
