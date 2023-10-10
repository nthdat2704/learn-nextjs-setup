import { authApi } from "@/api-client";
import { UserProfile } from "@/models/auth";
import useSWR, { SWRConfiguration } from "swr";

export const useAuth = (options?: Partial<SWRConfiguration>) => {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR<UserProfile | null>("/profile", {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    ...options,
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
