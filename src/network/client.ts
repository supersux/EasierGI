import { AxiosInstance } from "axios";
import axios from "axios";

class AxiosClient {
  client: AxiosInstance;
  constructor(url: string) {
    this.client = axios.create({
      baseURL: url,
    });
  }

  request(path: string, params = {}) {
    return new Promise((resolve, reject) => {
      this.client({
        method: "GET",
        url: path,
        params: params,
      })
        .then((res) => {
          resolve(res?.data?.data);
        })
        .catch((err) => {
          reject({
            method: "GET",
            dest: this.client.getUri() + path,
            code: err?.code,
            msg: err?.message,
          });
        });
    });
  }

  send(path: string, data: any) {
    return new Promise((resolve, reject) => {
      this.client({
        method: "POST",
        url: path,
        data: data,
      })
        .then((res) => {
          resolve(res?.data?.data || res?.data || res);
        })
        .catch((err) => {
          reject({
            method: "POST",
            dest: this.client.getUri() + path,
            code: err?.code,
            msg: err?.message,
          });
        });
    });
  }
}

class PRAmberClient extends AxiosClient {
  constructor() {
    super("https://api.ambr.top/v2");
  }
}

export { PRAmberClient };
