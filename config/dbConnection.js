const mongoose = require('mongoose');

const dbConnectionHandler = async () => {
  await mongoose
    .connect(`mongodb://0.0.0.0/serverSide`)
    .then(() => {
      console.log("DB Connected Successfully ");
    })
    .catch((error) => {
      console.log("Error While Connecting With Database ! ", error);
    });
};

module.exports = dbConnectionHandler;
