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
      let userId = req.body.userId;
      let password = req.body.password;
      let user = await UsersDAO.getUser(userId, password);

      if (!user) {
        res.status(404).json({ error: "Not found" });
        return;
      }

      res.json(user);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
