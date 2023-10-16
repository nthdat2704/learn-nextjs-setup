import { workApi } from "@/api-client";
import { queryKeys } from "@/constants";
import { ListParams } from "@/models";
import useSWR, { SWRConfiguration } from "swr";
export interface UseWorkListProps {
  params: Partial<ListParams>;
  options?: SWRConfiguration;
  enabled?: boolean;
}
export const useWorkList = ({ params, options, enabled }: UseWorkListProps) => {
  const swrResponse = useSWR(
    enabled ? [queryKeys.GET_WORK_LIST, params] : null,
    () => workApi.getAll(params),
    {
      dedupingInterval: 60 * 1000, // 30s
      fallbackData: {
        data: [],
        pagination: {
          _page: 1,
          _limit: 10,
          totalRows: 0,
        },
      },
      keepPreviousData: true,
      ...options,
    }
  );
  return swrResponse;
};
