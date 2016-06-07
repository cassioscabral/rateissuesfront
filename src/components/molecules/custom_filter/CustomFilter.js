'use strict'

import React from 'react'

require('./stylesheets/custom_filter.scss')
let classNames = require('classnames')

class CustomFilter extends React.Component {
  render() {
    let customFilterClass = classNames({
      'custom-filter-component': true,
      'active': this.props.activeTab === 'custom'
    })
    return (
      <div className={ customFilterClass }>
        <div className='custom-filters'>
          <div className='custom-filter'>
            <h4>Languages</h4>
          </div>
          <div className='custom-filter'>
            <h4>Favorite Projects</h4>
          </div>
          <div className='custom-filter'>
            Others
          </div>
        </div>
      </div>
    )
  }
}

CustomFilter.displayName = 'MoleculeCustomFilter'

// Uncomment properties you need
// CustomFilter.propTypes = {};
// CustomFilter.defaultProps = {};

export default CustomFilter
