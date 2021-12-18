export const user = {
  state: {
    isLogged: false,
    user: {}
  },
  mutations: {
    changeIsLogged(state, isLogged){
      state.isLogged = isLogged;
    },
    updateUser(state, user){
      state.user = user
    }
  },
  actions: {
    update() {
      firebase.update().then(this.commit('user/updateUser'), user)
    },
    login(){
      this.commit('user/changeIsLogged', true);
    },
    logout(){
      this.commit('user/changeIsLogged', false);
    }
  },
}