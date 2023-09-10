const cookieSession = require('cookie-session');

function Session() {
  return cookieSession ({ 
     name: 'teste',
     keys: ['teste'],
     

  })
}

module.exports = Session();
