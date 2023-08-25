import { createApp } from "vue";
import axios, { InternalAxiosRequestConfig } from "axios";
import { useCookies } from "vue3-cookies";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import authAxios from "./auth_axios";
import { EToken } from "./enums/common";
import { ESAuth } from "./enums/store";
import { ERouter } from "./enums/routers";

const { cookies } = useCookies();
axios.defaults.baseURL = "https://dongquoctranh.pythonanywhere.com/api/";

// Unauthenticated
axios.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    return config;
  },
  function (error) {
    alert(error.message);
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  function (config) {
    return config.data;
  },
  function (error) {
    alert(error.message);
    return Promise.reject(error);
  }
);
// Authenticated
authAxios.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    config.headers.Authorization = "Bearer " + cookies.get(EToken.ACCESS);
    return config;
  },
  function (error: { message: any }) {
    alert(error.message);
    return Promise.reject(error);
  }
);
authAxios.interceptors.response.use(
  function (config: { data: any }) {
    return config.data;
  },
  async function (error: {
    response: { status: number };
    config: any;
    message: any;
  }) {
    if (error.response.status === 401) {
      if (cookies.get(EToken.REFRESH)) {
        await store.dispatch(ESAuth.A_REFRESH);
        if (cookies.get(EToken.ACCESS)) return authAxios(error.config);
      }
      store.commit(ESAuth.M_REMOVE_CURRENT_USER);
      router.push(ERouter.SIGNIN);
      return;
    }
    alert(error.message);
    return Promise.reject(error);
  }
);

createApp(App).use(store).use(router).mount("#app");
