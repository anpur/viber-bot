const Messanger = require('./src/messenger');
const Credentials = require('./src/credentials.json');

Messanger.sendMessage(Credentials.viberAuthKey, Credentials.viberTestAccount, "test")
    .then(response => console.log('Got response: ' + response))
    .catch(err => console.error(err));