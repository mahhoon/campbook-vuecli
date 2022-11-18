export const camp = {
  namespaced: true, //忘れずに
  state: {
    camp: {},
    currentCamp: "",
  },
  mutations: {
    updateCampData(state, campData) {
      state.camp = { ...campData };
    },
    updateCurrentCamp(state, currentCamp) {
      state.currentCamp = currentCamp;
    },
    // updateCurrentCampData(state, currentCampData) {
    //   state.currentCampKey = { ...currentCampData };
    // },
  },
  actions: {
    updateCampData({ commit }, campData) {
      commit("updateCampData", campData);
    },
    updateCurrentCamp({ commit }, currentCamp) {
      commit("updateCurrentCamp", currentCamp);
    },
  },
  getters: {
    getCampData(state) {
      return state.camp;
    },
    getCurrentCamp(state) {
      return state.currentCamp;
    },
  },
};
