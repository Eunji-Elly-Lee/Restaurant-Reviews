import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
dotenv.config();
import RestaurantsDAO from "./dao/restaurantsDAO.js";
import ReviewsDAO from "./dao/reviewsDAO.js";
import UsersDAO from "./dao/usersDAO.js";

const port = process.env.PORT || 8000;
const MongoClient = mongodb.MongoClient;
MongoClient.connect(
  process.env.RESTREVIEWS_DB_URI,
  {
    wtimeoutMS: 2500
  }
).catch(err => {
  console.error(err.stack);
  process.exit(1);
}).then(async client => {
  await RestaurantsDAO.injectDB(client);
  await ReviewsDAO.injectDB(client);
  await UsersDAO.injectDB(client);
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
});
