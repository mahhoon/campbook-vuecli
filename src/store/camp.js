export const camp = {
  namespaced: true, //忘れずに
  state: {
    camp: {},
  },
  mutations: {
    updateCampData(state, campData) {
      state.camp = { ...campData };
    },
  },
  actions: {
    updateCampData({ commit }, campData) {
      commit("updateCampData", campData);
    },
  },
  getters: {
    getCampData(state) {
      return state.camp;
    },
  },
};
