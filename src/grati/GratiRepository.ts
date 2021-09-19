import { env } from "./env";
import axios, { AxiosResponse } from "axios";

interface GratiResponse {
  status: string;
  loginId?: string;
  data?: any;
}

class GratiRepository {
  private url = env.server;

  private processResponse = (response: AxiosResponse<GratiResponse>) => {
    // TODO handle error and format response
    console.log("status", response.status);
    return response;
  };

  /**
   * LOG IN
   *
   * @param username
   * @param password
   *
   */
  public login = async (username: string, password: string) => {
    return await axios
      .get(`${this.url}`, {
        params: {
          username,
          password,
        },
      })
      .then((response) => this.processResponse(response));
  };
}
export default new GratiRepository();
