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
    this.state = {issue: {}}
  }
  componentDidMount () {
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
  render () {
    return (
      <div className={ s.root }>
        *This is a Github Issue Preview*
        <br />
        { /* Title: { issue1.title || '' } | State: { issue1.state || '' } | User: { issue1.user.login || '' } */}
      </div>
    )
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
