import React, {PropTypes, Component} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Ranking.scss'
import {defineMessages, injectIntl, FormattedMessage} from 'react-intl'
import {connect} from 'react-redux'
import {addLike, removeLike} from '../../actions/stories'

const messages = defineMessages({
  rankingText: {
    id: 'ranking.rankingLikes',
    defaultMessage: '{likes} Likes',
    description: 'Amount of likes'
  },
  addLike: {
    id: 'ranking.addLike',
    defaultMessage: 'Like',
    description: 'Add like'
  },
  removeLike: {
    id: 'ranking.removeLike',
    defaultMessage: 'Remove Like',
    description: 'Remove Like'
  }
})

class Ranking extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className={ s.root }>
        <FormattedMessage
          { ...messages.rankingText }
          values={ {likes: this.props.rankings.length} }
        />
        <button onClick={ () => {
          this.props.addLike(this.props.storyId)
        } } >
          <FormattedMessage { ...messages.addLike }  />
        </button>
        <button onClick={ () => {
          this.props.removeLike(this.props.storyId)
        } } >
          <FormattedMessage { ...messages.removeLike }  />
        </button>
      </div>
    )
  }
}

Ranking.propTypes = {
  rankings: PropTypes.arrayOf(React.PropTypes.object),
  storyId: PropTypes.string.isRequired
}


function mapStateToProps () {
  return {
  }
}

function mapDispatchToProps () {
  return {
    addLike,
    removeLike
  }
}

export default connect(mapStateToProps, mapDispatchToProps())((injectIntl(withStyles(s)(Ranking))))
