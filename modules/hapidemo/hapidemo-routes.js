
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
			path: '/api/tasks',
			config : {
				handler: function (request, reply) {
        			//reply('Hello, Details Coming!');
        			testDao.getAllEncounters(null, reply);
    			}
			}
		}
	];
}();