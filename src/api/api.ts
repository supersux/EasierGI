import { request } from "./axios";

export async function test(params = {}) {
  // 接口一
  return request("https://api.ambr.top/v2/chs/avatar?vh=43F2", params, "GET");
}

export async function requestUigf(params = {}) {
  // 接口一
  return request("https://api.uigf.org/dict/genshin/jp.json", params, "GET");
}

export async function requestMys(params = {}) {
  // 接口一
  return request("https://bbs-api-static.miyoushe.com/apihub/wapi/webHome", params, "GET");
}
