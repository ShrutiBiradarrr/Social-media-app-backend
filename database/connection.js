const mongoose = require("mongoose");


const database = "mongodb+srv://shrutibiradar818:eJcCSJJqAiXfKpog@cluster1.50ig38a.mongodb.net/dbuser?retryWrites=true&w=majority";
const dbConnection = ()=>{

    mongoose.connect(`${database}`)
    .then(() => console.log("Database succesfully connected with server..."))
    .catch((err) => console.log(err));
};

module.exports = dbConnection;
