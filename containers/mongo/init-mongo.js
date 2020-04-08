db.createUser(
	{
		user  : "mongo",
		pwd   : "root",
		roles : [
			role : "readWrite",
			db   : "test"
		]
	}
)
