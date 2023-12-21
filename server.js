const app = require("./app");

const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://sanya7derenj:JxVL9pBrzFDcg8Xd@cluster0.bvyfido.mongodb.net/contacts_reader?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    // console.log("Database connection successful");

    app.listen(3001, () => {
      // console.log("Server is running");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
