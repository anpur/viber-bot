const Secrets = require('./src/secrets');
const UserFlow = require('./src/user-flow');
const AdminFlow = require('./src/admin-flow');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request!');
    context.log('Request: ' + JSON.stringify(req.body, null, "    "));

    if (req.body.event === 'message') {
        const isAdmin = Secrets.viberAdminAccounts.includes(req.body.sender.id);

        if (isAdmin) {
            await AdminFlow.onMessage(req.body);
        } else {
            await UserFlow.onMessage(req.body);
        }
    }

    context.res = { status: 200 };
};