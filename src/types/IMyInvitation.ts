import { City } from "../api";

export interface IMyInvitation {
  cities: City[];
  currentCity: City;
  friends: any;
}
