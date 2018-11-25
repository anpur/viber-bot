const Messanger = require('./src/messenger');
const Secrets = require('./src/secrets');
const AdminFlow = require('./src/admin-flow');

const body = {
    "event": "message",
    "sender": {
        "id": Secrets.viberAdminAccounts[0],
        "name": "TestRequest"
    },
    "text": "Administrator"
};

AdminFlow.onMessage(body)
    .then(response => console.log('Got response'))
    .catch(err => console.error(err));
