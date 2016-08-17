import React, {Component, PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './GithubIssuePreview.scss'
import {connect} from 'react-redux'
import GitHub from 'github-api'

// let issue = new Issue('cassioscabral/rateissuesfront')
// TODO make this a react component and use componentDidMount for request the issue
class GithubIssuePreview extends Component {
  constructor (props) {
    super(props)
    this.state = {issue: null}
  }
  componentWillMount () {
    console.log('componentDidMount')
    const gh = new GitHub()
    gh.getRateLimit().getRateLimit()
    .then(function (resp) {
        console.log('Limit remaining: ' + resp.data.rate.remaining)
        // date constructor takes epoch milliseconds and we get epoch seconds
        console.log('Reset date: ' + new Date(resp.data.rate.reset * 1000))
    }).catch(function (error) {
        console.log('Error fetching rate limit', error.message)
    })
    console.log('getting issues', gh.getIssues('cassioscabral', 'rateissuesfront'))
    gh.getIssues('cassioscabral', 'rateissuesfront').getIssue(1)
    .then((response) => {
      console.log('issue 1 response', response) // response data have the issue
      this.setState({issue: response.data})
    })
  }
  showIssueText () {
    let issue = this.state.issue
    return `Title: ${issue.title || ''} | State: ${issue.state || ''} | User: ${issue.user? issue.user.login : 'none'}`
  }
  // "https://api.github.com/repos/cassioscabral/rateissuesfront" => "rateissuesfront"
  getRepoName (repositoryUrl) {
    let splittedUrl = repositoryUrl.split('/')
    return splittedUrl[splittedUrl.length - 1]
  }
  render () {
    let issue = this.state.issue
    return issue ? (
      <div className={ s.root }>
        <div className={ s.header }>
          <div className={ s.issueTitle }>
            { issue.title }
          </div>
          <div className={ s.issueAuthorAvatar }>
            <img
              className={ s.issueAuthorAvatarImage }
              src={ issue.user.avatar_url }
              alt="Issue author avatar"
              />
          </div>
        </div>
        <div className={ s.issueBody }>
          body:
          <br />
          { issue.body }
        </div>
        <div className={ s.footer }>
          <div className={ s.issueRepository }>
            Repository:
            <a href={ issue.html_url }
              target="_blank">
              { this.getRepoName(issue.repository_url) }
            </a>
          </div>
        </div>
      </div>
    ) : null
  }
}

GithubIssuePreview.propTypes = {
  // JS primitive: array  bool  func  number  object  string  symbol
  // React element: element
  // more: https://facebook.github.io/react/docs/reusable-components.html#prop-validation

  // simple example
  url: PropTypes.string.isRequired
}

function mapStateToProps (state) {
  return {
  }
}

function mapDispatchToProps () {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)((withStyles(s)(GithubIssuePreview)))
