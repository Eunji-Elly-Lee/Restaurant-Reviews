import mongodb from "mongodb";
const ObjectId = mongodb.ObjectID;
let users;

export default class UsersDAO {
  static async injectDB(conn) {
    if (users) {
      return;
    }

    try {
      users = await conn.db(process.env.RESTREVIEWS_NS).collection("users");
    } catch (e) {
      console.error(`Unable to establish collection handles in usersDAO: ${e}`);
    }
  }

  static async addUser(userId, userName, password) {
    try {
      const userDoc = {
          user_id: userId,          
          name: userName,
          password: password
      };
      return await users.insertOne(userDoc);
    } catch (e) {
      console.error(`Unable to post user: ${e}`);
      return { error: e };
    }
  }

  static async getUser(userId, password) {
    let loginUser = null;

    try {
      const user = await users.findOne({ user_id: userId });

      if(user && user.password === password) {
        loginUser = user;
      }
      
      return loginUser;
    } catch (e) {
      console.error(`Unable to get user: ${e}`);
      return { error: e };
    }
  }
}
