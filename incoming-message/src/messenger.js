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

const sendMessageInternal = (authKey, payload) => {
    var options = { 
        method: 'POST',
        url: 'https://chatapi.viber.com/pa/send_message',
        headers: {
            'x-viber-auth-token': authKey
        },
        body: JSON.stringify(payload)
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
};

module.exports = {
    "sendMessage": async (authKey, receiver, text) => {
        return sendMessageInternal(authKey,
            {
                'receiver': receiver,
                'type':"text",
                'text': text
            });
    },
    "sendContact": async (authKey, receiver, name, phone) => {
        return sendMessageInternal(authKey,
            {
                'receiver': receiver,
                'type': 'contact',
                'contact':{
                    'name': name,
                    'phone_number': phone
                 }
            });
    }
};