'use strict';

import React from 'react';
import IssuesList from 'components/molecules/issues_list/IssuesList';
import IssuesTabs from 'components/molecules/issues_tabs/IssuesTabs';
import Tab from 'components/atoms/tab/Tab';
import Github from 'github-api';
import GithubQueryBuilder from '../../helpers/GithubQueryBuilder';

_ = require('lodash');
require('./stylesheets/main.scss');

class Main extends React.Component {
  constructor(props) {
    super(props);
    // TODO associate creation of query with tab passing the value on the constructor
    this.state = {issues: [], activeTab: 'hot', githubQuery: new GithubQueryBuilder()};
  }
  setGithubQuery() {
    this.state.githubQuery.applyFilter(tab);
  }
  componentDidMount() {
    this.requestGithub();
  }
  changeTab(tab) {
    this.setState({activeTab: tab});
    this.state.githubQuery.applyFilter(tab);
    this.requestGithub();
  }
  requestGithub() {
    let github = new Github({});
    let search = github.getSearch(this.state.githubQuery.getQuery());
    var that = this;

    search.issues(null, function(err, issues) {
      var oldIssues = that.state.issues;

      // oldIssues.push(...issues.items);
      that.setState({
        issues: issues.items
      });
      console.log(oldIssues[0]);
      console.log(oldIssues[1]);
    });
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
        <IssuesList issues={this.state.issues} activeTab={this.state.activeTab}/>
      </div>
    );
  }
}

Main.displayName = 'OrganismMain';

// Uncomment properties you need
// Main.propTypes = {};
// Main.defaultProps = {};

export default Main;
