const { config } = require('../config');
module.exports = {
  '/api': {
    'target': `http://${config.host}:${config.port}`,
    'secure': false,
  },
};
