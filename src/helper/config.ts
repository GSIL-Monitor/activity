const dirBaseApiUrl = {
  // 开发环境 配置
  development: {
    url: "https://api.app.aixiangdao.tech",
    branch: "develop",
    sa_url: "https://sensors.aixiangdao.tech/sa?project=defalut",
    sa_enable: false,
    BONUS_SCENE: true,
    fundebug: false
  },
  // 线上部署 配置
  production: {
    url: "https://api.aixiangdao.tech",
    branch: "master",
    sa_url: "https://sensors.aixiangdao.tech/sa?project=production",
    sa_enable: true,
    BONUS_SCENE: false,
    fundebug: true
  }
};
const AppConfig = { ...dirBaseApiUrl[process.env.NODE_ENV!] };

export { AppConfig };
