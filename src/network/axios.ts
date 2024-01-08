import axios from "axios";
import { showMessage } from "./status";

// 超时时间设置
axios.defaults.timeout = 60000;

axios.defaults.baseURL = import.meta.env.VITE_API_DOMAIN;

axios.interceptors.request.use(
  (config) => {
    //'Content-Type':'application/x-www-form-urlencoded',   // 传参方式表单
    config.headers["Content-Type"] =
      "application/x-www-form-urlencoded; charset=UTF-8";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      showMessage(response.status); // 传入响应码，匹配响应码对应信息
      return Promise.reject(response.data);
    } else {
      console.warn("网络连接异常,请稍后再试!");
    }
  }
);

// 封装 GET POST 请求并导出
export function request(url = "", params = {}, type = "POST") {
  //设置 url params type 的默认值
  return new Promise((resolve, reject) => {
    let promise;
    if (type.toUpperCase() === "GET") {
      promise = axios({
        url,
        params,
      });
    } else if (type.toUpperCase() === "POST") {
      promise = axios({
        method: "POST",
        url,
        data: params,
      });
    }
    //处理返回
    promise
      ?.then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
