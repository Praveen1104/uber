const mongoose = require("mongoose");

function ConnectToDb() {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log("DB Connected Successfully");
    })
    .catch((err) => console.log(err));
}

module.exports = ConnectToDb;
