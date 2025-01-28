import { routes } from "../apiroutes";
import HttpService from "../httpServices";
import useFetchItem from "../useFetchItem";

const httpService = new HttpService();

export const useGetFeaturedIn = () => {
  const { isLoading, error, data, refetch, setFilter, filter } = useFetchItem({
    queryKey: ["fetchfeaturedposts"],
    queryFn: (queryParams) => {
      return httpService.getDataWithoutToken(
        routes.getFeaturedIns(queryParams)
      );
    },
    retry: 1,
    staleTime: 0,
  });

  return {
    featuredContentsIsLoading: isLoading,
    featuredContentsData: data?.data?.data || [],
    featuredContentsFilter: filter,
    refetchFeaturedContents: refetch,
    setFeaturedContentsFilter: setFilter,
  };
};

export const useGetFeaturedInfo = ({ enabled = false }) => {
  const { isFetched, isLoading, error, data, refetch, isFetching, setFilter } =
    useFetchItem({
      queryKey: ["featuredInfo"],
      queryFn: (id) => {
        return httpService.getDataWithoutToken(routes.getFeaturedIn(id));
      },
      enabled,
      retry: 2,
      staleTime: 0,
    });

  return {
    getFeaturedInfoIsfetching: isFetching,
    getFeaturedInfoIsFetched: isFetched,
    getFeaturedInfoIsLoading: isLoading,
    getFeaturedInfoData: data?.data?.data || {},
    getFeaturedError: error,
    refreshGetFeaturedInfo: refetch,
    filterGetFeaturedInfo: setFilter,
  };
};
