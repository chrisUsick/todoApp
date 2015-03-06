module.exports = function(TodoList) {
	TodoList.beforeRemote('create', function (context, user, next){
		var req = context.req;
		req.body.userId = req.accessToken.userId;
		next();
	})
};
