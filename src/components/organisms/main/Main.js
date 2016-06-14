import React from 'react'
import IssuesList from 'components/molecules/issues_list/IssuesList'
import IssuesTabs from 'components/molecules/issues_tabs/IssuesTabs'
// TODO update github-api
import Github from 'github-api'
import GithubQueryBuilder from '../../helpers/GithubQueryBuilder'
import Filters from 'components/molecules/filters/Filters'
import classNames from 'classnames'

require('./stylesheets/main.scss')

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      issues: [],
      activeTab: 'hot',
      githubQuery: new GithubQueryBuilder(),
      currentComponent: 'IssuesList'
    }
    // default language on filters TODO move to a proper function
    localStorage.setItem('languages', 'Javascript')
  }
  setGithubQuery (tab) {
    this.state.githubQuery.applyFilter(tab)
  }
  componentDidMount () {
    this.requestGithub()
  }
  changeTab (tab) {
    this.setState({activeTab: tab})
    this.state.githubQuery.applyFilter(tab)
    this.requestGithub()
  }
  requestGithub () {
    let github = new Github({})
    let search = github.getSearch(this.state.githubQuery.getQuery())

    search.issues(null, (err, issues) => {
      this.setState({
        issues: issues.items
      })
    })
  }
  currentComponentClass (component) {
    let componentClass = classNames({
      'component': true,
      'active': this.state.currentComponent === component
    })
    return componentClass
  }
  changeCurrentComponent (component) {
    this.setState({currentComponent: component})
  }
  render () {
    return (
      <div className='main-component column'>
        <div className={ this.currentComponentClass('IssuesList') }>
          <IssuesTabs
            className='issues-tabs-component'
            changeTab={ this.changeTab.bind(this) }
            activeTab={ this.state.activeTab }
            changeCurrentComponent={ this.changeCurrentComponent.bind(this) } />
          <IssuesList issues={ this.state.issues }
            activeTab={ this.state.activeTab } />
        </div>
        <div className={ this.currentComponentClass('Filters') }>
          <Filters changeComponentTo='IssuesList'
            onClick={ this.changeCurrentComponent.bind(this) } />
        </div>
      </div>
    )
  }
}

Main.displayName = 'OrganismMain'

export default Main
