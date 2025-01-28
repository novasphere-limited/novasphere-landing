import axios from "axios";

class HttpService {
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL;
  }

  getDataWithoutToken = async (url, services = "PAYYME_BASE_URL") => {
    return axios.get(`${this.baseUrl[`${services}`]}${url}`);
  };
}
export default HttpService;
