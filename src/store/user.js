export const user = {
  namespaced: true, //忘れずに
  state: {
    user: {
      currentUid: "001",
      currentUname: "test",
    },
  },
  mutations: {
    //データの書き換えを実行する人
    updateName(state, name) {
      state.user.currentUname = name;
    },
  },
  actions: {
    //mutationを実行させる人（コンポーネントからdispatchで呼ばれる）
    updateName({ commit }, name) {
      commit("updateName", name); //commitはmutationを実行する関数（実行するmutation名, 渡す値
    },
  },
  getters: {},
};
