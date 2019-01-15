import { IVisible } from "../types";
export const visible = {
  state: { InvitationQRCode: false, ShareActions: false, ActivityRules: false },
  reducers: {
    setState(state: IVisible, payload: IVisible | any) {
      return { ...state, ...payload };
    }
  },
  effects: {}
};
