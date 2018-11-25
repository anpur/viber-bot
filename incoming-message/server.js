const Messanger = require('./src/messenger');
const Secrets = require('./src/secrets');

Messanger.sendMessage(Secrets.viberAuthKey, Secrets.viberTestAccount, "test")
    .then(response => console.log('Got response: ' + response))
    .catch(err => console.error(err));