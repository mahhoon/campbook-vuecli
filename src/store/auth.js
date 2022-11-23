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
    updateUser(state, updateData) {
      state.user[updateData.propertyName] = updateData.updateValue; //userオブジェクトのkeyを文字列で指定する場合は[]
    },
  },
  actions: {
    //mutationを実行させる人（コンポーネントからdispatchで呼ばれる）
    updateUser({ commit }, updateData) {
      //コンポーネントから渡ってきてるのはオブジェクト
      commit("updateUser", updateData); //commitはmutationを実行する関数（実行するmutation名, 渡す値）
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
};
