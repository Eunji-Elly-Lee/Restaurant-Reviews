import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 8000;
const MongoClient = mongodb.MongoClient;
MongoClient.connect(
  process.env.RESTREVIEWS_DB_URI,
  {
    wtimeout: 2500
  }
).catch(err => {
    console.error(err.stack);
    process.exit(1);
}).then(async client => {
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    })
});
