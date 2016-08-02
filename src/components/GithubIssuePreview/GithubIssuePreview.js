import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './GithubIssuePreview.scss'
import {connect} from 'react-redux'


function GithubIssuePreview ({url}) {
  return (
    <div className={ s.root }>
      This is a Github Issue Preview
      { url }
    </div>
  )
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
