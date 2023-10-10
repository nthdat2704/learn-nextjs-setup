import { authApi } from "@/api-client";
import useSWR from "swr";
import { PublicConfiguration } from "swr/_internal";

export const useAuth = (options?: Partial<PublicConfiguration>) => {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR("/profile", {
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
    mutate({}, false);
  }
  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  };
};
