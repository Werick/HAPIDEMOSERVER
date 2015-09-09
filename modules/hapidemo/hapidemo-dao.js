"use strict";

var db = require('./hapidemo-db');

//Testing some simple stuff
//Test DAO
module.exports = function() {
	return {
		getEncounterById: function getEncounterById(params, callback) {

			var values = [
				params.encounter_id
			];

			var sql = "select taskId, description from task"+
					" where encounter_id = ?"

			db.queryServer({
				sql : sql, 
				values: values,
				callback : callback
			});
		},
		getAllEncounters: function getAllEncounters(params, callback) {

				var values = [
				
			];

			var sql = "select encounter_datetime, encounter_id, encounter_type, creator, uuid from encounter ";					


			db.queryServer({
				sql : sql, 
				values: values,
				callback : callback
			});
		}
	};
}();