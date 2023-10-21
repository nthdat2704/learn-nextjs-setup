import { tagApi, workApi } from "@/api-client";
import { queryKeys } from "@/constants";
import { ListParams } from "@/models";
import useSWR, { SWRConfiguration } from "swr";
export interface UseWorkListProps {
  params?: Partial<ListParams>;
  options?: SWRConfiguration;
}
export const useTagList = ({
  params = { _page: 1, _limit: 30 },
  options,
}: UseWorkListProps) => {
  const swrResponse = useSWR(
    [queryKeys.GET_TAG_LIST, params],
    () => tagApi.getAll(params),
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
