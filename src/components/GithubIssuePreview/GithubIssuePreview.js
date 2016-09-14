import React, {Component, PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './GithubIssuePreview.scss'
import GitHub from 'github-api'

class GithubIssuePreview extends Component {
  constructor (props) {
    super(props)
    this.state = {issue: null}
  }
  getGithubRequestLimit (githubInstance) {
    githubInstance.getRateLimit().getRateLimit()
    .then(function (resp) {
        console.log('Limit remaining: ' + resp.data.rate.remaining)
        // date constructor takes epoch milliseconds and we get epoch seconds
        console.log('Reset date: ' + new Date(resp.data.rate.reset * 1000))
    }).catch(function (error) {
        console.log('Error fetching rate limit', error.message)
    })
  }
  componentWillMount () {
    const gh = new GitHub()
    this.getGithubRequestLimit(gh)
    let {username, repository, issueNumber} = this.getInfoFromURL(this.props.url)

    gh
    .getIssues(username, repository)
    .getIssue(issueNumber)
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
  getRepoName (url) {
    let splittedUrl = url.split('/')
    return splittedUrl[splittedUrl.length - 1]
  }
  // 'https://github.com/cassioscabral/rateissuesfront/issues/1'
  getInfoFromURL (url) {
    let splittedUrl = url.split('/')
    return {
      username: splittedUrl[splittedUrl.length - 4],
      issueNumber: splittedUrl[splittedUrl.length - 1],
      repository: splittedUrl[splittedUrl.length - 3]
    }
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
  url: PropTypes.string.isRequired
}

export default (withStyles(s)(GithubIssuePreview))
