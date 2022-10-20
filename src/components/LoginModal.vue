<template>
  <div class="modal-wrapping" id="modal-login">
    <div class="overlay">
      <form
        class="modal-wrapping"
        @submit.prevent="logIn(loginEmail, loginPassword)"
      >
        <div class="close-modal" @click="closeModal">
          <i class="fa fa-2x fa-times"></i>
        </div>
        <p class="modal-wrapping__title">ログイン</p>
        <div class="modal-wrapping__name">メールアドレス</div>
        <input
          type="email"
          class="modal-wrapping__formcontrol login-email"
          v-model="loginEmail"
        />
        <!-- <div class="modal-msgbox"><p class="modal-errormsg" v-show="errormsgInvalid">無効なメールアドレスです</p></div> -->
        <div class="modal-wrapping__name">パスワード</div>
        <input
          type="password"
          class="modal-wrapping__formcontrol login-password"
          v-model="loginPassword"
        />
        <!-- <div class="modal-msgbox"><p class="modal-errormsg" v-show="errormsg">メールアドレスかパスワードが間違っています..</p></div> -->
        <button type="submit" class="modal-wrapping__submit">ログイン</button>
      </form>
    </div>
  </div>
</template>
<!--
<template>
  <div class="modal-wrapping" id="modal-login">
    <div class="overlay">
      <form class="modal-wrapping" @submit.prevent="logIn(loginEmail,loginPassword)">
        <div class="close-modal" @click="closeModal"><i class="fa fa-2x fa-times"></i></div>
        <p class="modal-wrapping__title">ログイン</p>
        <div class="modal-wrapping__name">メールアドレス</div>
        <input type="email" class="modal-wrapping__formcontrol login-email" v-model="loginEmail" @keyup="checkEmail">
        <div class="modal-msgbox"><p class="modal-errormsg" v-show="errormsgInvalid">無効なメールアドレスです</p></div>
        <div class="modal-wrapping__name">パスワード</div>
        <input type="password" class="modal-wrapping__formcontrol login-password" v-model="loginPassword" @keyup="checkPassword">
        <div class="modal-msgbox"><p class="modal-errormsg" v-show="errormsg">メールアドレスかパスワードが間違っています..</p></div>
        <button type="submit" class="modal-wrapping__submit" :disabled="addDisabled">ログイン</button>
      </form>
    </div>
  </div>
</template>
-->

<script>
import { firebaseApp } from "@/main.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "LoginModal",

  data() {
    return {
      loginEmail: "",
      loginPassword: "",
    };
  },

  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
    logIn(email, pass) {
      const auth = getAuth(firebaseApp);
      signInWithEmailAndPassword(auth, email, pass)
        .then((user) => {
          console.log("ログインしました", user);
          this.$router.push("usertop");
        })
        .catch((error) => {
          console.error("ログインエラー", error);
          //this.errormsg = true
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/_base.scss";
@import "../assets/css/_modules.scss";
</style>
