import Vue from "vue";
import Vuex from "vuex";
import { auth } from "@/store/auth.js";
import { camp } from "@/store/camp.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    camp,
  },
});
