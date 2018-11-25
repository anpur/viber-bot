const request = require('request');

const parseResponse = (response, resolve, reject) => {
    try {
        let body = JSON.parse(response.body);
        if ('status' in body == false) {
            reject(new Error('Can\'t parse response: ' + response.body));
        }
        if (body.status != 0) {
            reject(new Error('Message was rejected: ' + response.body));
        }

        resolve(body);
    } catch (err) {
        reject(new Error('Can\'t parse response: ' + response.body));
    }
}

module.exports = {
    "sendMessage": async (authKey, receiver, text) => {
        var options = { 
            method: 'POST',
            url: 'https://chatapi.viber.com/pa/send_message',
            headers: {
                'x-viber-auth-token': authKey
            },
            body: JSON.stringify({
                'receiver': receiver,
                'min_api_version': 1,
                'type':"text",
                'text': text
            })
        };
        return new Promise((resolve, reject) => {
            request(options, function (error, response, body) {
                if (error) { 
                    reject(error); 
                } else {
                    parseResponse(response, resolve, reject);
                }
            });
        });
    }
};