const mongoose = require("mongoose");

async function connectToMongooDB(url) {
  return mongoose.connect(url, { bufferCommands: false });
}

module.exports = {
  connectToMongooDB,
};
