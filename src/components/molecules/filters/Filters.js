'use strict'

import React from 'react'
// import {FontIcon} from 'material-ui'


require('./stylesheets/filters.scss')

class Filters extends React.Component {
  handleClick() {
    if (this.props.onClick) {
      if (this.props.changeComponentTo) {
        this.props.onClick(this.props.changeComponentTo)
      }
    }
  }
  render() {
    return (
      <div className='filters-component'>
        <span>Filters Component</span>
        {/* <FontIcon className='material-icons clickable' color='grey'
                  onClick={this.handleClick.bind(this)} >
          close
        </FontIcon>*/}
      </div>
    )
  }
}

Filters.displayName = 'MoleculeFilters'

// Uncomment properties you need
// Filters.propTypes = {};
// Filters.defaultProps = {};

export default Filters
