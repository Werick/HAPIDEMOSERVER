
"use strict";
var testDao = require('./hapidemo-dao');
console.log('modules');
console.log('+++++Test Dao', testDao)

module.exports = function() {
	return [
		{
			method: 'GET',
			path: '/',
			config : {
				handler: function (request, reply) {
        			reply('Hello, World! HAPI Demo Server');
    			}

			}
		},
		{
			method: 'GET',
			path: '/api/{name}',
			config : {
				handler: function (request, reply) {
        			reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    			}

			}
		},
		{
			method: 'GET',
			path: '/api/encounter',
			config : {
				handler: function (request, reply) {
        			//reply('Hello, Details Coming!');
        			testDao.getAllEncounters(null, reply);
    			}
			}
		},
		{
			method: 'GET',
			path: '/api/encounter/{id}',
			config : {
				handler: function (request, reply) {
        			//reply('Hello, Details Coming!');
        			testDao.getEncounterById(request, reply);
    			}
			}
		},
		{
			method: 'GET',
			path: '/api/data/{userParams*3}', // this url is similar too /api/data/{param1}/{param2}/{param3}
			config : {
				handler: function (request, reply) {
        			// console.log('Hello, Details Coming!', request);
        			testDao.getData(request, reply);
    			}
			}
		}
	];
}();
