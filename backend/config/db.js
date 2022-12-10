const mongoose = require("mongoose");

const ConnectDB = async ()=>{
 try{
    await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
			useUnifiedTopology: true
    });
    console.log("database Connected");
 }catch(err){
    console.log(err.message);
    process.exit(1);
 }
};

module.exports = ConnectDB;