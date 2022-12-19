import UsersDAO from "../dao/usersDAO.js";

export default class UsersController {
  static async apiAddUser(req, res, next) {
    try {
      const userId = req.query.userId;
      const userName = req.query.userName;
      const password = req.query.password;
      const UserResponse = await UsersDAO.addUser(
        userId,
        userName,
        password
      );

      res.json(UserResponse);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiGetUser(req, res, next) {
    try {
      let userId = req.query.userId;
      let password = req.query.password;
      let user = await UsersDAO.getUser(userId, password);

      res.json(user);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
