'use strict'

import React from 'react'
import FontIcon from 'material-ui/lib/font-icon'

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
        <div className='row'>
          <h2 className='padding-box'>Filters Component</h2>
          <FontIcon className='material-icons clickable padding-box'
                    color='#6F1D1D'
                    style={{fontSize: '34px'}}
                    onClick={this.handleClick.bind(this)}>
            close
          </FontIcon>
        </div>
      </div>
    )
  }
}

Filters.displayName = 'MoleculeFilters'

// Uncomment properties you need
// Filters.propTypes = {};
// Filters.defaultProps = {};

export default Filters
