import UsersDAO from "../dao/usersDAO.js";

export default class UsersController {
  static async apiAddUser(req, res, next) {
    try {
      const userId = req.body.userId;
      const userName = req.body.userName;
      const password = req.body.password;
      const UserResponse = await UsersDAO.addUser(
        userId,
        userName,
        password
      );

      res.json({ status: "success" });
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
