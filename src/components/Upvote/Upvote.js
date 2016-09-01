import React, {PropTypes, Component} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Upvote.scss'
import {defineMessages, injectIntl, FormattedMessage} from 'react-intl'
import {connect} from 'react-redux'
import {upvote, downvote} from '../../actions/stories'
import {FaAngleUp, FaAngleDown} from 'react-icons/lib/fa'

const messages = defineMessages({
  upvoteText: {
    id: 'upvote.upvoteLikes',
    defaultMessage: '{likes} Likes',
    description: 'Amount of likes'
  },
  upvote: {
    id: 'upvote.upvote',
    defaultMessage: 'Like',
    description: 'Add like'
  },
  downvote: {
    id: 'upvote.downvote',
    defaultMessage: 'Remove Like',
    description: 'Remove Like'
  }
})

class Upvote extends Component {
  constructor (props) {
    super(props)
  }
  getLikes () {
    // intl is not showing 0
    return this.props.upvotes.length > 0 ? this.props.upvotes.length : '0'
  }
  render () {
    let upvote = () => {
      this.props.upvote(this.props.storyId)
    }
    let downvote = () => {
      this.props.downvote(this.props.storyId)
    }
    return (
      <div className={ s.root }>
        <FormattedMessage
          { ...messages.upvoteText }
          values={ {likes: this.getLikes()} }
        />
        <FaAngleUp color={ 'black' }
          onClick={ upvote }
        />
        <FaAngleDown color={ 'black' }
          onClick={ downvote }
        />
      </div>
    )
  }
}

Upvote.propTypes = {
  upvotes: PropTypes.arrayOf(React.PropTypes.object),
  storyId: PropTypes.string.isRequired
}


function mapStateToProps () {
  return {
  }
}

function mapDispatchToProps () {
  return {
    upvote,
    downvote
  }
}

export default connect(mapStateToProps, mapDispatchToProps())((injectIntl(withStyles(s)(Upvote))))
