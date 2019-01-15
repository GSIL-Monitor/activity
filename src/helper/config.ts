const dirBaseApiUrl = {
  // 开发环境 配置
  development: {
    SHARE_URL: "http://172.20.10.2:3000/my-invitation",
    url: "https://api.app.aixiangdao.tech",
    branch: "develop",
    sa_url: "https://sensors.aixiangdao.tech/sa?project=defalut",
    sa_enable: false,
    BONUS_SCENE: true,
    fundebug: false
  },
  // 线上部署 配置
  production: {
    SHARE_URL: "http://172.20.10.2:3000/my-invitation",
    url: "https://api.aixiangdao.tech",
    branch: "master",
    sa_url: "https://sensors.aixiangdao.tech/sa?project=production",
    sa_enable: true,
    BONUS_SCENE: false,
    fundebug: true
  }
};
const AppConfig = {
  ...dirBaseApiUrl[process.env.NODE_ENV!],
  APP_DOWNLOAD: "http://d.xiaojukeji.com/c/73852",
  APPID: "wx2564586383eb7cd2",
  AppSecret: "e4ad4648624c5e25a848ba394d0b1454",
  SHARE_URL: "http://172.20.10.2:3000/my-invitation"
};

export { AppConfig };
