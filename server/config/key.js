if (process.env.NODE_ENV === 'pruduction') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
