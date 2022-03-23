const { connect } = require("mongoose");

const connectDB = () => {
  try {
    connect(
      "mongodb+srv://guillermodv:Inicio00!@cluster0.dxecr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    ).then(() => console.log("Connected to mongo"));
  } catch (error) {
    console.log("Error trying to connect to mongo", error);
  }
};

module.exports = { connectDB };
