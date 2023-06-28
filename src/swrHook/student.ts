//@ts-nocheck
import useSWR from "swr";
export const useStudent = (options: any) => {
  const { url } = options;
  const { data, mutate } = useSWR(url);
  console.log("oday", data);

  const result = {
    data,
    mutate,
  };

  return result;
};
