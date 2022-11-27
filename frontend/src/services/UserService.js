import http from "../http-common";

class UserService {
  get(data) {
    return http.get("/user", data);
  }

  addUser(data) {
    return http.post("/user", data);
  }
}

export default new UserService();
