'use strict'

import React from 'react'
import marked from 'marked'
import classNames from 'classnames'

require('./stylesheets/issue.scss')

class Issue extends React.Component {
  constructor (props) {
    super(props)
    this.state = {active:  false}
  }
  rawMarkup (sanitizedHTMLAfterMarked) {
    return {__html: sanitizedHTMLAfterMarked}
  }
  parseMarkdown (text) {
    // Default values
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    })
    return marked(text)
  }
  getRepoName (repoUrl) {
    let splittedUrl = repoUrl.split('/')

    return `${splittedUrl[splittedUrl.length - 1]}`
  }
  toggleIssue () {
    this.setState({active: !this.state.active})
  }
  render () {
    var issue = this.props.issue
    var issueClasses = classNames({
     'issue-component': true,
     'row': true,
     'active': this.state.active,
     'no-body': issue.body === '' || issue.body === null
   })
    return (
      <div className={ issueClasses }>
        <div className='description column'>
          <header>
            <h4 onClick={ this.toggleIssue.bind(this) }>
              { issue.title }
            </h4>
            <br />
            <small><b>Repo:  { this.getRepoName(issue.repository_url) }</b></small>
            <img title={ issue.user.login }
              className='issue-creator-profile'
              src={ issue.user.avatar_url }
              alt='user that created this issue'
              width='30px'
              height='30px' />

            <br />
            <smalll className='github-html-url'><a href={ issue.html_url }
              target='_blank'>View on Github</a></smalll>
          </header>
          <div className='summary column'
            dangerouslySetInnerHTML={ this.rawMarkup(marked(issue.body || '')) }>
          </div>
        </div>
      </div>
    )
  }
}

Issue.displayName = 'MoleculeIssue'

// Uncomment properties you need
// Issue.propTypes = {};
// Issue.defaultProps = {};

export default Issue
