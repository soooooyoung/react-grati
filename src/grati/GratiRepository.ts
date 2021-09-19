import { env } from "./env";
import axios, { AxiosResponse } from "axios";
import { LoginParams } from "../models";

interface GratiResponse {
  status: string;
  loginId?: string;
  data?: any;
}

class GratiRepository {
  private url?: string;
  constructor() {
    this.url = env.server;
  }

  private processResponse = (response: AxiosResponse<GratiResponse>) => {
    // TODO handle error and format response
    return response;
  };

  /**
   * LOG IN
   *
   * @param username
   * @param password
   *
   */
  public login = async (params: LoginParams) => {
    return await axios
      .post(`${this.url}/api/v1/signin`, {
        Headers: {
          "Content-Type": "application/json",
        },
        ...params,
      })
      .then((response) => this.processResponse(response));
  };
}
export default new GratiRepository();
