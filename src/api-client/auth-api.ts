import axiosClient from "./httpRequest";

export const authApi = {
  login(payload: any) {
    return axiosClient.post("/login", payload);
  },
  logout() {
    return axiosClient.post("/logout");
  },
  getProfile(payload: any) {
    return axiosClient.get("/profile");
  },
};
