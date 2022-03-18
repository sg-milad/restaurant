const mongoose = require("mongoose");
const connect = async () => {
  try {
    await mongoose
      .connect(process.env.URI_mongo, () => console.log("connect"))
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
};

connect();
