<template>
  <div class="modal-wrapping" id="modal-login">
    <div class="overlay">
      <form class="modal-wrapping" @submit.prevent="logIn">
        <div class="close-modal" @click="closeModal">
          <i class="fa fa-2x fa-times"></i>
        </div>
        <p class="modal-wrapping__title">ログイン</p>
        <div class="modal-wrapping__name">メールアドレス</div>
        <input
          type="email"
          class="modal-wrapping__formcontrol login-email"
          v-model="email"
          @keyup="checkEmail"
        />
        <div class="modal-msgbox">
          <p class="modal-errormsg" v-show="errormsgInvalid">
            無効なメールアドレスです
          </p>
        </div>
        <div class="modal-wrapping__name">パスワード</div>
        <input
          type="password"
          class="modal-wrapping__formcontrol login-password"
          v-model="password"
          @keyup="checkPassword"
        />
        <div class="modal-msgbox">
          <p class="modal-errormsg" v-show="errormsg">
            メールアドレスかパスワードが間違っています..
          </p>
        </div>
        <button
          type="submit"
          class="modal-wrapping__submit"
          :disabled="isDisabled"
        >
          ログイン
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { auth } from "@/main.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import v8n from "v8n";

export default {
  name: "LoginModal",

  data() {
    return {
      email: "",
      password: "",
      errormsgInvalid: false,
      isDisabled: true,
      errormsg: false,
    };
  },

  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
    checkEmail() {
      const check = v8n()
        .not.null()
        .string() // 文字列
        .minLength(5) // a@b.c を想定して最低5文字
        .pattern(/[^\s@]+@[^\s@]+\.[^\s@]+/) // eメール用の正規表現
        .test(this.email); // 検証
      console.log(check);
      if (!check) {
        this.errormsgInvalid = true;
      } else {
        this.errormsgInvalid = false;
      }
      this.toggledisabled();
    },
    checkPassword() {
      this.toggledisabled();
    },
    toggledisabled() {
      if (this.email.length !== 0 && this.password.length !== 0) {
        if (!this.errormsgInvalid) {
          this.isDisabled = false;
        }
      }
      if (
        this.email.length === 0 ||
        this.password.length === 0 ||
        this.errormsgInvalid
      ) {
        this.isDisabled = true;
      }
    },
    logIn() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((user) => {
          console.log("ログインしました", user);
          this.$router.push("usertop");
        })
        .catch((error) => {
          console.error("ログインエラー", error);
          this.errormsg = true;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/css/global" as global;
@use "@/assets/css/modules" as modules;
</style>
