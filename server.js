const { app } = require('./app');

// Utils
const { db } = require('./utils/database.utils');

const { User } = require("./models/user.models");
const { Tasks } = require("./models/tasks.models");

db.authenticate()
	.then(() => console.log('Db authenticated'))
	.catch(err => console.log(err));

	  // Establish model's relations
User.hasMany(Tasks, { foreignKey: "userId" });
Tasks.belongsTo(User);

db.sync()
	.then(() => console.log('Db synced'))
	.catch(err => console.log(err));

app.listen(4000, () => {
	console.log('Express app running!!');
});
