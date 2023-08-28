import authAxios from "@/auth_axios";
import { EAItem } from "@/enums/api";
import { IAListRes } from "@/interfaces/api";
import { IFMenuItem } from "@/interfaces/menu";
import axios from "axios";

export interface IFState {
  items: Array<IFMenuItem>;
  meals: Array<any>;
}

export default {
  namespaced: true,
  state: {
    items: [],
    meals: [],
  },
  getters: {
    items: (state: IFState) => state.items,
    meals: (state: IFState) => state.meals,
  },
  actions: {
    async getItems({ state }: { state: IFState }) {
      const res: IAListRes = await axios.get(EAItem.LIST);
      state.items = res.results as IFMenuItem[];
      state.meals = state.items;
    },
    async addMeal({ state }: { state: IFState }, meal: IFMenuItem) {
      const res: IFMenuItem = await authAxios.post(EAItem.CREATE, meal);
      state.items.push(res);
    },
    searchMeal({ state }: { state: IFState }, keyword: string) {
      state.meals = state.items.filter((meal: any) =>
        meal.name.toLowerCase().includes(keyword.toLowerCase())
      );
    },
  },
};
