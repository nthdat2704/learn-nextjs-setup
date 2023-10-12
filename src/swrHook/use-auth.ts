import { authApi } from "@/api-client";
import { UserProfile } from "@/models/auth";
import useSWR, { SWRConfiguration } from "swr";
import { StorageKeys } from "@/constants";
const getUserInfo = () => {
  try {
    console.log(JSON.parse(localStorage.getItem(StorageKeys.USER_INFO) || ""));

    return JSON.parse(localStorage.getItem(StorageKeys.USER_INFO) || "");
  } catch (error) {
    return null;
  }
};

export const useAuth = (options?: Partial<SWRConfiguration>) => {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR<UserProfile | null>("/profile", {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    ...options,
    fallbackData: getUserInfo(),
    onSuccess(data, key, config) {
      localStorage.setItem(StorageKeys.USER_INFO, JSON.stringify(data));
    },
    onError(err, key, config) {
      localStorage.removeItem(StorageKeys.USER_INFO);
      logout();
    },
  });
  const firstLoading = profile === undefined && error === undefined;
  async function login(payload: any) {
    await authApi.login(payload);
    await mutate();
  }
  async function logout() {
    await authApi.logout();
    mutate(null, false);
  }
  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  };
};
