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
import i18n from "./i18n";

const { cookies } = useCookies();
axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://dongquoctranh.pythonanywhere.com/api/"
    : "http://127.0.0.1:8000/api/";

// Unauthenticated
axios.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    return config;
  },
  function (err) {
    alert(err.request.data.message);
    return Promise.reject(err);
  }
);
axios.interceptors.response.use(
  function (config) {
    return config.data;
  },
  function (err) {
    alert(err.response.data.message);
    return Promise.reject(err);
  }
);
// Authenticated
authAxios.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    config.headers.Authorization = "Bearer " + cookies.get(EToken.ACCESS);
    return config;
  },
  function (err) {
    alert(err.request.data.message);
    return Promise.reject(err);
  }
);
authAxios.interceptors.response.use(
  function (config: { data: any }) {
    return config.data;
  },
  async function (err: {
    response: { status: number; data: { message: string } };
    config: any;
    message: any;
  }) {
    if (err.response.status === 401) {
      if (cookies.get(EToken.REFRESH)) {
        await store.dispatch(ESAuth.A_REFRESH);
        if (cookies.get(EToken.ACCESS)) return authAxios(err.config);
      }
      store.commit(ESAuth.M_REMOVE_CURRENT_USER);
      router.push(ERouter.SIGNIN);
      return;
    }
    alert(err.response.data.message);
    return Promise.reject(err);
  }
);

createApp(App).use(i18n).use(store).use(router).mount("#app");
