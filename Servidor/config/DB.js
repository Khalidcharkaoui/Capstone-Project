const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI,
      { useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
      }
      );

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Salir con un código de estado distinto de cero para indicar un error
  }
};

module.exports = connectDB;

