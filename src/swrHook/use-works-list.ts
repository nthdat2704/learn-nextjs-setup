import { workApi } from "@/api-client";
import { queryKeys } from "@/constants";
import { ListParams } from "@/models";
import useSWR, { SWRConfiguration } from "swr";
export interface UseWorkListProps {
  params: Partial<ListParams>;
  options?: SWRConfiguration;
  enabled?: boolean;
}
export const useWorkList = ({ params, options }: UseWorkListProps) => {
  const swrResponse = useSWR(
    [queryKeys.GET_WORK_LIST, params],
    () => workApi.getAll(params),
    {
      dedupingInterval: 60 * 1000, // 30s
      fallbackData: {
        data: [],
        pagination: {
          _page: 1,
          _limit: 3,
          totalRows: 0,
        },
      },
      keepPreviousData: true,
      ...options,
    }
  );
  return swrResponse;
};
