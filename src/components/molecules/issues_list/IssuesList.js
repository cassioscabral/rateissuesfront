'use strict'

import React from 'react'
import Issue from 'components/molecules/issue/Issue'

require('./stylesheets/issues_list.scss')

class IssuesList extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className='issues-list-component'>
        { this.props.issues.map(issue => <Issue
          key={ issue.id }
          issue={ issue }
         />)
        }
      </div>
    )
  }
}

IssuesList.displayName = 'MoleculeIssuesList'

// Uncomment properties you need
// IssuesList.propTypes = {};
// IssuesList.defaultProps = {};

export default IssuesList
