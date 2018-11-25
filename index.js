const Messanger = require('./src/messenger');
const Secrets = require('./src/secrets');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request!');
    context.log('Request: ' + JSON.stringify(req, null, "    "));

    if (req.body && req.body.event === 'message') {
        let response = await Messanger.sendMessage(
            Secrets.viberAuthKey, 
            req.body.sender.id, 
            'Привет уважаемый ' + req.body.sender.name + '!');

        context.log('Message result: ' + JSON.stringify(response, null, "    "));
    }

    context.res = { status: 200 };
};