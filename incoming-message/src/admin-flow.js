const Messanger = require('./messenger');
const Secrets = require('./secrets');

module.exports = {
    "onMessage": async body => {
        if (body.text === 'Administrator') {
            return await Messanger.sendContact(
                Secrets.viberAuthKey,
                body.sender.id,
                '',
                '');
        } else {
            return await Messanger.sendMessage(
                Secrets.viberAuthKey, 
                body.sender.id, 
                'Hi ' + body.sender.name + ' admin!');
        }        
    }
};


