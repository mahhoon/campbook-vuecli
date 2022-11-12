export const auth = {
  namespaced: true, //忘れずに
  state: {
    user: {
      uid: "",
      nickname: "",
      email: "",
    },
  },
  mutations: {
    //データの書き換えを実行する人
    updateNickname(state, nickname) {
      state.user.nickname = nickname;
    },
    updateUid(state, uid) {
      state.user.uid = uid;
    },
    updateEmail(state, email) {
      state.user.email = email;
    },
  },
  actions: {
    //mutationを実行させる人（コンポーネントからdispatchで呼ばれる）
    updateNickname({ commit }, nickname) {
      commit("updateNickname", nickname); //commitはmutationを実行する関数（実行するmutation名, 渡す値）
    },
    updateUid({ commit }, uid) {
      commit("updateUid", uid);
    },
    updateEmail({ commit }, email) {
      commit("updateEmail", email);
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
};
