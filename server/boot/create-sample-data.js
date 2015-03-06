var async = require('async')
module.exports = function (app){
	var mongoDs = app.dataSources.MongoDs;

	mongoDs.automigrate('Member', function (err){
		if (err) throw err;
		var Member = app.models.Member;
		Member.create([
			{"email":"a@b.com","password":"a"},
			{"email":"b@b.com","password":"b"}
		], function (err, mems) {
			if (err) throw err;
			var ids = mems.map(function (mem){return mem.id});
			console.log('members created', ids);
			// set their member ids
			/*async.map(mems, function (mem, cb){
				mem.userId = mem.id;
				mem.save(cb);
			}, function(err, newMems){
				if (err) throw err;
				console.log('memberId prop added');
			})*/
		})
	})
}