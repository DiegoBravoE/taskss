const {db,DataTypes}=require('../utils/database.utils')


//crear modelo users
const Tasks = db.define('task',{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
    },
    title:{
       type:DataTypes.STRING,
       allowNull:false,
       unique:true,
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    limitDate: {
		type: DataTypes.DATE,
		allowNull: false,
	},
    startDate: {
		type: DataTypes.DATE,
		allowNull: false,
	},
    finishDate: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	status: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'active',
	},



});
module.exports={Tasks}