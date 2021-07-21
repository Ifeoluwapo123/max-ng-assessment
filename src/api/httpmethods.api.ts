import axios, { AxiosResponse, AxiosError } from "axios";
import { ApiProps } from "../interfaces/IApiProps";
import { httpMethods } from "../enums/HttpMethods";

const apiAxiosCalls = async (params: ApiProps) => {
  params.method = params.method.toUpperCase();

  const { url, method, body } = params;

  switch (method) {
    case httpMethods.GET:
      return await axios({
        method,
        url,
      });
    case httpMethods.POST:
      return {};
    default:
      return {};
  }
};

export default apiAxiosCalls;
