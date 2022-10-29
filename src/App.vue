<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

    <router-view />
    <!-- リンクに応じたコンポーネントが入る -->
  </div>
</template>

<script>
// import { firebaseApp } from "@/main.js";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  mounted() {},
};
// mounted(): {
//   const auth = getAuth();
//   onAuthStateChenged (auth, (user) => {
//     if (user) {
//       console.log('login', user);
//     }
//   })
</script>

<style lang="scss">
// @import "./assets/css/main.css";
</style>
