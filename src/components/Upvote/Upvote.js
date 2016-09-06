import React, {PropTypes, Component} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Upvote.scss'
import {connect} from 'react-redux'
import {upvote, downvote} from '../../actions/stories'
import {FaAngleUp, FaAngleDown} from 'react-icons/lib/fa'

class Upvote extends Component {
  constructor (props) {
    super(props)
    this.state = {upvoted: false}
  }
  upvoted () {
    return this.state.upvoted
  }
  render () {
    let upvote = () => {
      this.props.upvote(this.props.storyId)
      this.setState({upvoted: true})
    }
    let downvote = () => {
      this.props.downvote(this.props.storyId)
      this.setState({upvoted: false})
    }
    let upvotes = this.props.upvotes.length || 0
    return (
      <div className={ s.root }>
        <FaAngleUp
          color={ this.upvoted() ? 'green' : 'black' }
          size={ 24 }
          style={
            {
              cursor: 'pointer'
            }
          }
          onClick={ this.upvoted() ? downvote : upvote }
        />
        <div className="upvotes-counter">
          { upvotes }
        </div>
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

export default
connect(mapStateToProps, mapDispatchToProps()) ((withStyles(s)(Upvote)))
