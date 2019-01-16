import { API, City } from "../api";
import { IMyInvitation } from "../types";

const obj = {
  mobile: 13276075623,
  status: "已注册",
  img:
    "https://mmbiz.qpic.cn/mmbiz_jpg/KAoRSGLatAR4icY8FnxYcL2j5LzFIpddlH5ErRLAvc95PmkqruibHpDoZSXuTUGepAM4MPh8XNeoLw1EeEIXcQicQ/640?wx_fmt=jpeg"
};
const friends = new Array(18).fill(obj);
export const myInvitation = {
  state: {
    cities: [],
    currentCity: {},
    friends
  },
  reducers: {
    setState(state: IMyInvitation, payload: City) {
      return { ...state, ...payload };
    }
  },
  effects: (dispatch: any) => ({
    async getCities() {
      const { data } = await API.basic.getCities();
      dispatch.myInvitation.setState(data);
      console.log(data);
    }
  })
};
