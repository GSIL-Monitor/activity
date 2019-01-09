import fetch from "portable-fetch";
import WechatJSSDK from "wechat-jssdk/dist/client";
import { AppConfig } from "./config";

export default class WX {
  public config = {
    // 前4个是微信验证签名必须的参数
    appId: "gh_72de8bd89232",
    nonceStr: "aixiangdao",
    signature: "xxx",
    timestamp: +new Date(),
    jsApiList: ["getLocation"]
  };
  public constructor() {
    this.getToken();
    const data = new WechatJSSDK(this.config);
    console.log(data);
  }

  public getToken = () => {
    fetch(
      `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${
        AppConfig.APPID
      }&secret=${AppConfig.AppSecret}
    `
    );
  };
}
