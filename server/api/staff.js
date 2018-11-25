'use strict';

const SetupEndpoint = require('./setup');

module.exports = SetupEndpoint({
    name: 'staff',
    urls: [{
        params: '/{id}',
        requests: [{
            method: 'GET',
            response: '/response-files/getStaff.json'
        }]
    }, {
        params: '/authenticate',
        requests: [{
            method: ['POST'],
            response: '/response-files/login.json'
            
        }, {
            method: 'DELETE',
            response: {
                deleted: true
            }
        }]
    }]
});
