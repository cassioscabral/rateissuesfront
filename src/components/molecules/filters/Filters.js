import React from 'react'
import MdClose from 'react-icons/md/close'


require('./stylesheets/filters.scss')

class Filters extends React.Component {
  handleClick () {
    if (this.props.onClick) {
      if (this.props.changeComponentTo) {
        this.props.onClick(this.props.changeComponentTo)
      }
    }
  }
  render () {
    return (
      <div className='filters-component'>
        <span>Filters Component</span>
        <MdClose
          size='24'
          color='grey'
          onClick={ this.handleClick.bind(this) } />
      </div>
    )
  }
}

Filters.displayName = 'MoleculeFilters'

export default Filters
