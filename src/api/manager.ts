// tslint:disable

import fetch from "portable-fetch";
import { getBranch } from "../helper/RegExp";
import { AppConfig } from "../helper/config";
import {
  ActivityApi,
  BasicApi,
  ManagerApi,
  MerchantApi,
  OrderApi,
  PointsMallApi,
  ProductApi,
  SystemConfigApi,
  UserApi
} from "./api";
import { Configuration } from "./configuration";

// import Proxy2 from 'proxy-polyfill/src/proxy';

let userToken: string = "";
function setUserToken(token: string) {
  userToken = token;
}

export interface IResponse {
  data?: any;
  httpCode?: number;
  errorCode?: string;
}
// export interface IResponse {
//   data?: any;
//   httpCode?: number;
//   errorCode?: string;
// }

function getUserToken(): string {
  return userToken;
}

const apiKey = (name: string) => userToken;

interface IAPI {
  merchant: MerchantApi;
  activity: ActivityApi;
  product: ProductApi;
  user: UserApi;
  basic: BasicApi;
  order: OrderApi;
  manager: ManagerApi;
  pointMall: PointsMallApi;
  systemConfig: SystemConfigApi;
}

let API: IAPI;
function setBranchName() {
  const val = localStorage.getItem("branchName");

  let basePath;
  // tslint:disable-next-line:prefer-conditional-expression
  if (val && val.indexOf("http") === 0) {
    basePath = val;
  } else {
    basePath = AppConfig.BASE_API_TECH;
  }

  const { path, branch } = getBranch(basePath);
  const cfg = new Configuration({
    apiKey,
    basePath: path,
    headers: {
      version: AppConfig.VERSION,
      clientType: AppConfig.CLENT_TYPE,
      branch: branch || AppConfig.DEFAULT_BRANCH
    }
  });
  const args = [cfg, undefined, fetch];
  const basic = new BasicApi(...args);
  const user = new UserApi(...args);
  const merchant = new MerchantApi(...args);
  const activity = new ActivityApi(...args);
  const product = new ProductApi(...args);
  const order = new OrderApi(...args);
  const manager = new ManagerApi(...args);
  const pointMall = new PointsMallApi(...args);
  const systemConfig = new SystemConfigApi(...args);

  API = {
    merchant,
    activity,
    product,
    user,
    basic,
    order,
    manager,
    pointMall,
    systemConfig
  };
}

setBranchName();

export { setUserToken, getUserToken, API, setBranchName };
