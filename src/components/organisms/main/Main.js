'use strict';

import React from 'react';
import IssuesList from 'components/molecules/issues_list/IssuesList';
import IssuesTabs from 'components/molecules/issues_tabs/IssuesTabs';
import Settings from 'components/atoms/settings/Settings';
import Tab from 'components/atoms/tab/Tab';

_ = require('lodash');
require('./stylesheets/main.scss');

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: 'hot'};
  }
  changeTab(tab) {
    this.setState({activeTab: tab});
  }
  render() {
    return (
      <div className='main-component column'>
        <div className='issues-tabs-component'>
          <header>
            <h4>{_.capitalize(this.state.activeTab)} Issues</h4>
          </header>
          <div className='row tabs'>
            <Tab name='hot' onClick={this.changeTab.bind(this)} activeTab={this.state.activeTab}/>
            <Tab name='trending' onClick={this.changeTab.bind(this)} activeTab={this.state.activeTab} />
            <Tab name='fresh' onClick={this.changeTab.bind(this)} activeTab={this.state.activeTab} />
          </div>
        </div>
        <IssuesList activeTab={this.state.activeTab}/>
        <Settings />
      </div>
    );
  }
}

Main.displayName = 'OrganismMain';

// Uncomment properties you need
// Main.propTypes = {};
// Main.defaultProps = {};

export default Main;
