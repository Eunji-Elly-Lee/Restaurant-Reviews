import http from "../http-common";

class RestaurantService {
  getAll(page = 0) {
    return http.get(`?page=${page}`);
  }

  get(id) {
    return http.get(`/id/${id}`);
  }

  find(query, by = "name", page = 0) {
    return http.get(`?${by}=${query}&page=${page}`);
  }

  createReview(data) {
    return http.post(
      `/review?restaurant_id=${data.restaurant_id}&text=${data.text}&name=${data.name}&user_id=${data.user_id}`
    );
  }

  updateReview(data) {
    return http.put(`/review?review_id=${data.review_id}&text=${data.text}&user_id=${data.user_id}`);
  }

  deleteReview(id, userId) {
    return http.delete(`/review?id=${id}`, { data: { user_id: userId } });
  }

  getCuisines() {
    return http.get(`/cuisines`);
  }
}

export default new RestaurantService();
