export const user = {
  namespaced: true, //忘れずに
  state: {
    user: {
      nickname: "",
    },
  },
  mutations: {
    //データの書き換えを実行する人
    updateNickname(state, nickname) {
      state.user.nickname = nickname;
    },
  },
  actions: {
    //mutationを実行させる人（コンポーネントからdispatchで呼ばれる）
    updateNickname({ commit }, nickname) {
      commit("updateNickname", nickname); //commitはmutationを実行する関数（実行するmutation名, 渡す値）
    },
  },
  getters: {},
};
