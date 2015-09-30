"use strict";

var db = require('./hapidemo-db');

//Testing some simple stuff
//Test DAO
module.exports = function() {
	return {
		getEncounterById: function getEncounterById(request, callback) {

			var values = [
				request.params.id
			];

			var sql = "select * from encounter " +
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

			var sql = "select encounter_datetime, encounter_id, encounter_type, creator, uuid "
				sql += "from encounter ";					


			db.queryServer({
				sql : sql, 
				values: values,
				callback : callback
			});
		}
		,
		getData: function getData(request, callback) {
			// console.log('Params ', request.params.userParams)
			var passed_params = request.params.userParams.split('/');
			var table = passed_params[0];
			var	column_name = passed_params[1];
			var	column_value = passed_params[2];
			// console.log('table: ', table)
			// console.log('column: ', column_name)
			// console.log('value: ', column_value)
			var values = [				
				column_value //pass only elements in the where clause
			];

			var sql = "select uuid "
				sql += "from " + table 
				sql += " where " + column_name + " = ? ";	
			
			console.log('SQL ', sql)				


			db.queryServer({
				sql : sql, 
				values: values,
				callback : callback
			});
		}
	};
}();