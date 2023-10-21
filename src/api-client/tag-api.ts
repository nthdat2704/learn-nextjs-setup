import { ListParams, ListResponse } from "@/models";
import axiosClient from "./httpRequest";
export const tagApi = {
  getAll(params: Partial<ListParams>): Promise<ListResponse<string>> {
    return axiosClient.get("/tags", { params });
  },
};
