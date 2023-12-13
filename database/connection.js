const mongoose = require("mongoose");

const db = process.env.MONGO_URL;
const dbConnection = async () => {
  mongoose
    .connect(`${db}`)
    .then(() => console.log("Database succesfully connected with server..."))
    .catch((err) => console.log(err));
};

module.exports = dbConnection;
