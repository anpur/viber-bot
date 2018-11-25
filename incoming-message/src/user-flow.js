const Messanger = require('./messenger');
const Secrets = require('./secrets');

module.exports = {
    "onMessage": async body => {
        return await Messanger.sendMessage(
            Secrets.viberAuthKey, 
            body.sender.id, 
            'Hi ' + body.sender.name + ' user!');
    }
};
