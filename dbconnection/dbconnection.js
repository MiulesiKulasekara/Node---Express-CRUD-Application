const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = mongoose.connection;
