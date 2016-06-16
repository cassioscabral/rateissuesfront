if (process.env.NODE_ENV === 'development') {
  module.exports = require('./development.env') // eslint-disable-line global-require
} else if (process.env.NODE_ENV === 'production') {
  module.exports = require('./production.env') // eslint-disable-line global-require
} else {
  module.exports = require('./base.env') // eslint-disable-line global-require
}
