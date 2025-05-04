import axios from "axios";

class HttpService {
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL;
  }

  getDataWithoutToken = async (url, services = "PAYYME_BASE_URL") => {
    return axios.get(`${this.baseUrl[`${services}`]}${url}`);
  };
  postDataWithoutToken = async (payload, url, services = "PAYYME_BASE_URL") => {
    return axios.post(`${this.baseUrl[`${services}`]}${url}`, payload);
  };
}
export default HttpService;
