import React, {PropTypes, Component} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './UpVote.scss'
import {defineMessages, injectIntl, FormattedMessage} from 'react-intl'
import {connect} from 'react-redux'
import {addUpVote, removeUpVote} from '../../actions/stories'

const messages = defineMessages({
  upVoteText: {
    id: 'upVote.upVoteLikes',
    defaultMessage: '{likes} Likes',
    description: 'Amount of likes'
  },
  addUpVote: {
    id: 'upVote.addUpVote',
    defaultMessage: 'Like',
    description: 'Add like'
  },
  removeUpVote: {
    id: 'upVote.removeUpVote',
    defaultMessage: 'Remove Like',
    description: 'Remove Like'
  }
})

class UpVote extends Component {
  constructor (props) {
    super(props)
  }
  getLikes () {
    // intl is not showing 0
    return this.props.upvotes.length > 0 ? this.props.upvotes.length : '0'
  }
  render () {
    return (
      <div className={ s.root }>
        <FormattedMessage
          { ...messages.upVoteText }
          values={ {likes: this.getLikes()} }
        />
        <button onClick={ () => {
          this.props.addUpVote(this.props.storyId)
        } } >
          <FormattedMessage { ...messages.addUpVote }  />
        </button>
        <button onClick={ () => {
          this.props.removeUpVote(this.props.storyId)
        } } >
          <FormattedMessage { ...messages.removeUpVote }  />
        </button>
      </div>
    )
  }
}

UpVote.propTypes = {
  upvotes: PropTypes.arrayOf(React.PropTypes.object),
  storyId: PropTypes.string.isRequired
}


function mapStateToProps () {
  return {
  }
}

function mapDispatchToProps () {
  return {
    addUpVote,
    removeUpVote
  }
}

export default connect(mapStateToProps, mapDispatchToProps())((injectIntl(withStyles(s)(UpVote))))
