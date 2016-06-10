import React from 'react'
import Issue from 'components/molecules/issue/Issue'

require('./stylesheets/issues_list.scss')

class IssuesList extends React.Component {
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

export default IssuesList
