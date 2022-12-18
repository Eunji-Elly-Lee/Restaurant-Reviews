import http from "../http-common";

class UserService {
  get(data) {
    return http.get(`/user?userId=${data.userId}&password=${data.password}`);
  }

  add(data) {
    return http.post(
      `/user?userId=${data.userId}&userName=${data.userName}&password=${data.password}`
    );
  }
}

export default new UserService();
