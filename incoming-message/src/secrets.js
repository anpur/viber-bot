const fs = require('fs');

const credentialsFile = './src/credentials.json';

if (!fs.existsSync(credentialsFile) && !process.env['viberAuthKey']) {
    throw new Error('Can find neither ' + credentialsFile + ' nor viberAuthKey environment variable');
}

module.exports = fs.existsSync(credentialsFile)
    ? JSON.parse(fs.readFileSync(credentialsFile))
    : {
        'viberAuthKey': process.env['viberAuthKey'],
        'viberAdminAccounts': JSON.parse(process.env['viberAdminAccounts'])
    };
