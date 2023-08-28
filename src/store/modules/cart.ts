import { IFMenuItem } from "@/interfaces/menu";

export interface IFState {
  meals: any;
  menuList: IFMenuItem[];
}

export default {
  namespaced: true,
  state: {
    menuList: [],
    meals: [],
  } as IFState,
  getters: {
    isInCart: (state: IFState) => (menuID: number) =>
      state.menuList.find((item) => item?.id === menuID),
    meals: (state: IFState) => state.meals,
  },
  actions: {
    addMeal({ state }: { state: IFState }, newMeal: any) {
      state.meals.push({ ...newMeal, quantity: 1 });
    },
    changeQuantity(
      { state }: { state: IFState },
      params: { id: number; quantity: number }
    ) {
      const { id, quantity } = params;
      const meal = state.meals.find((m: any) => m.id === id);
      if (+quantity > 0) {
        meal.quantity = quantity;
      } else {
        meal.quantity = 1;
      }
    },
    remove({ state }: { state: IFState }, id: number) {
      state.meals = state.meals.filter((m: any) => m.id !== id);
    },
  },
};
