import React, {PropTypes, Component} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './PreviewUrl.scss'
import {connect} from 'react-redux'
import GithubIssuePreview from '../GithubIssuePreview'

function isDomain (domain, url) {
    var pat = '^https?://(?:[^/@:]*:[^/@]*@)?(?:[^/:]+\.)?' + domain + '(?=[/:]|$)'
    var re = new RegExp(pat, 'i')
    return re.test(url)
}

class PreviewUrl extends Component {
  constructor (props) {
    super(props)
  }
  /*
    identify url website
    switch between types of url previews
    call component based on that
  */
  identifyURL (url) {
    if (isDomain('github.com', url)) {
      return <GithubIssuePreview url={ url }></GithubIssuePreview>
    }

    return url
  }
  render () {
    let {url} = this.props
    return (
      <div className={ s.root }>
        { this.identifyURL(url) }
      </div>
    )
  }
}

PreviewUrl.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)((withStyles(s)(PreviewUrl)))
