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
import { auth } from "@/main.js";
import { onAuthStateChanged } from "firebase/auth";

export default {
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.displayName);
        this.$store.dispatch("auth/updateNickname", user.displayName);
      } else {
        this.$router.push("/");
        this.$store.dispatch("auth/updateNickname", "");
      }
    });
  },
};
</script>

<style lang="scss">
// @import "./assets/css/main.css";
</style>
