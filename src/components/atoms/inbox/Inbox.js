'use strict';

import React from 'react';

require('./stylesheets/inbox.scss');

class Inbox extends React.Component {
  render() {
    return (
      <div className='inbox-component'>
        Please edit src/components/atoms/inbox/Inbox.js to update this component!
      </div>
    );
  }
}

Inbox.displayName = 'AtomInbox';

// Uncomment properties you need
// Inbox.propTypes = {};
// Inbox.defaultProps = {};

export default Inbox;
