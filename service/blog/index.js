import { routes } from "../apiroutes";
import HttpService from "../httpServices";
import useFetchItem from "../useFetchItem";

const httpService = new HttpService();

export const useGetBlogPosts = () => {
  const { isLoading, error, data, refetch, setFilter, filter } = useFetchItem({
    queryKey: ["fetchblogposts"],
    queryFn: (queryParams) => {
      return httpService.getDataWithoutToken(routes.getBlogs(queryParams));
    },
    retry: 1,
    staleTime: 0,
  });

  return {
    blogsContentIsLoading: isLoading,
    blogsContentData: data?.data?.data || [],
    blogsContentFilter: filter,
    refetchBlogContent: refetch,
    setBlogContentFilter: setFilter,
  };
};

export const useGetBlogInfo = ({ enabled = false }) => {
  const { isFetched, isLoading, error, data, refetch, isFetching, setFilter } =
    useFetchItem({
      queryKey: ["blogInfo"],
      queryFn: (id) => {
        return httpService.getDataWithoutToken(routes.getBlog(id));
      },
      enabled,
      retry: 2,
      staleTime: 0,
    });

  return {
    getBlogInfoIsfetching: isFetching,
    getBlogInfoIsFetched: isFetched,
    getBlogInfoIsLoading: isLoading,
    getBlogInfoData: data?.data?.data || {},
    getBlogError: error,
    refreshGetBlogInfo: refetch,
    filterGetBlogInfo: setFilter,
  };
};
