import { routes } from "../apiroutes";
import useMutateItem from "../useMutateItem";
import HttpService from "../httpServices";
import { toast } from "sonner";

const httpService = new HttpService();

export const useContactForm = (handleSuccess) => {
  const { data, error, isPending, mutateAsync } = useMutateItem({
    mutationFn: (payload) =>
      httpService.postDataWithoutToken(payload, routes.contact()),
    onSuccess: (requestParams) => {
      const resData = requestParams?.data?.result || {};
      handleSuccess(resData);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "An error occured!");
    },
  });

  return {
    contactData: data,
    contactDataIsLoading: isPending,
    contactDataPayload: (requestPayload) => mutateAsync(requestPayload),
  };
};

export const useSubscribe = (handleSuccess) => {
  const { data, error, isPending, mutateAsync } = useMutateItem({
    mutationFn: (payload) =>
      httpService.postDataWithoutToken(payload, routes.subscribe()),
    onSuccess: (requestParams) => {
      const resData = requestParams?.data?.result || {};
      handleSuccess(resData);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "An error occured!");
    },
  });

  return {
    subscribeData: data,
    subscribeDataIsLoading: isPending,
    subscribeDataPayload: (requestPayload) => mutateAsync(requestPayload),
  };
};
