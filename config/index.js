const { connect } = require("mongoose");

const connectDB = () => {
  try {
    connect(process.env.MONGOURL).then(() => console.log("Connected to mongo"));
  } catch (error) {
    console.log("Error trying to connect to mongo", error);
  }
};

module.exports = { connectDB };
