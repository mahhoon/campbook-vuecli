<template>
  <section>
    <div class="user-heading container">
      <h1 class="pc"><img src="@/assets/img/logo-small.svg" /></h1>
      <div class="user pc">
        <p class="username">{{ currentUser.nickname }}さん、こんにちは</p>
        <p class="logout" @click="logOut">ログアウト</p>
      </div>

      <!-- <h1 class="sp"><img src="@/assets/img/logo-small.svg" /></h1> -->
      <!-- <div class="toggle-wrap sp">
        <div class="togglebtn" @click="showToggleMenu">
          <span><i class="fas fa-bars"></i></span>
        </div>
      </div> -->
    </div>
    <!-- <div :class="[togglemenu, { 'togglemenu-show': isActive }, sp]"> -->
    <!-- <p @click="showUserGoodsLists">
        <span class="icon"><i class="fas fa-check-circle"></i></span
        >持ち物リストの編集
      </p> -->
    <!-- <p class="non-active">
        <span class="icon"><i class="fas fa-camera"></i></span>写真投稿
      </p> -->
    <!-- <p @click="logOut">
        <span class="icon"><i class="fas fa-sign-out-alt"></i></span>ログアウト
      </p> -->
    <!-- </div> -->
    <div class="username-sp container">
      <p class="sp">{{ currentUser.nickname }}さん、こんにちは</p>
    </div>
  </section>
</template>

<script>
import { auth } from "@/main.js";
import { signOut } from "firebase/auth";

export default {
  data() {
    return {
      togglemenu: "togglemenue",
      sp: "sp",
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters["auth/getUser"];
    },
  },
  methods: {
    logOut() {
      signOut(auth).then(() => {
        console.log("ログアウトしました");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/css/global" as global;
@use "@/assets/css/base" as base;
</style>
