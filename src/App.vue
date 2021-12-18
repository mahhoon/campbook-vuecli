<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
  // import { firebaseApp } from "@/main.js";
  import { getAuth, onAuthStateChanged } from "firebase/auth";

  export default {
    mounted() {
      // vuex stateとactionの呼び出し方
      console.log(this.$store.state.user)
      this.$store.dispatch('user/login', param)

      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log('login', user);
          // this.$router.push('usertop')
        }else {
          console.log('logout')
        }
      })
    }
  }

</script>


<style lang="scss">
  // @import "./assets/css/main.css";

</style>
