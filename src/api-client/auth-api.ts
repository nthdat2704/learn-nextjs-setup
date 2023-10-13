import axiosClient from "./httpRequest";
import { LoginPayload } from "@/models/auth";
export const authApi = {
  login(payload: LoginPayload) {
    return axiosClient.post("/login", payload);
  },
  logout() {
    return axiosClient.post("/logout");
  },
  getProfile(payload: any) {
    return axiosClient.get("/profile");
  },
};
