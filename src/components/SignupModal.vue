<template>
  <div class="overlay">
    <form class="modal-wrapping" @submit.prevent="signUp">
      <div class="close-modal" @click="closeModal">
        <i class="fa fa-2x fa-times"></i>
      </div>
      <p class="modal-wrapping__title">新規登録</p>
      <div class="modal-wrapping__name">ニックネーム（8文字以内）</div>
      <input
        type="text"
        class="modal-wrapping__formcontrol login-nickname"
        v-model="nickname"
        @keyup="checkNickname"
      />
      <div class="modal-wrapping__name">メールアドレス</div>
      <input
        type="e-mail"
        class="modal-wrapping__formcontrol login-email"
        v-model="email"
        @keyup="checkEmail"
      />
      <div class="modal-msgbox">
        <p class="modal-errormsg" v-if="errormsgInvalid">
          無効なメールアドレスです
        </p>
      </div>
      <div class="modal-wrapping__name">パスワード（6文字以上）</div>
      <input
        type="password"
        class="modal-wrapping__formcontrol login-password"
        v-model="password"
        @keyup="checkPassword"
      />
      <div class="modal-msgbox">
        <p class="modal-errormsg" v-if="errormsgPass">
          パスワードは6文字以上にしてください
        </p>
        <p class="modal-errormsg" v-else-if="errormsgDuplicate">
          既に登録されているメールアドレスです
        </p>
      </div>
      <button type="submit" class="modal-wrapping__submit">新規登録</button>
    </form>
  </div>
</template>
<!--
<template>
  <div class="overlay">
    <form class="modal-wrapping" v-on:submit.prevent="signUp(signupEmail,signupPassword)">
        <div class="close-modal" v-on:click="closeModal"><i class="fa fa-2x fa-times"></i></div>
        <p class="modal-wrapping__title">新規登録</p>
        <div class="modal-wrapping__name">ニックネーム（8文字以内）</div>
        <input type="text" class="modal-wrapping__formcontrol login-nickname" v-model="signupNickname" v-on:keyup="checkNickname">
        <div class="modal-wrapping__name">メールアドレス</div>
        <input type="e-mail" class="modal-wrapping__formcontrol login-email" v-model="signupEmail" v-on:keyup="checkEmail">
        <div class="modal-msgbox">
        <p class="modal-errormsg" v-if="errormsgInvalid">無効なメールアドレスです</p>
        </div>
        <div class="modal-wrapping__name">パスワード（6文字以上）</div>
        <input type="password" class="modal-wrapping__formcontrol login-password" v-model="signupPassword" v-on:keyup="checkPassword">
        <div class="modal-msgbox">
        <p class="modal-errormsg" v-if="errormsgPass">パスワードは6文字以上にしてください</p>
        <p class="modal-errormsg" v-else-if="errormsgDuplicate">既に登録されているメールアドレスです</p>
        </div>
        <button type="submit" class="modal-wrapping__submit" v-bind:disabled=addDisabled v-on:click="signUpfromChild">新規登録</button>                    
    </form>
  </div>
</template>
-->

<script>
import { auth } from "@/main.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import v8n from "v8n";

export default {
  name: "SignupModal",

  data() {
    return {
      email: "",
      password: "",
      nickname: "",
      errormsgInvalid: false,
      errormsgPass: false,
      errormsgDuplicate: false,
      addDisabled: true,
    };
  },

  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
    //バリデーション
    checkNickname() {
      this.toggledisabled();
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
      const check = v8n()
        .not.null()
        .string() // 文字列
        .minLength(6)
        .test(this.password); // 検証
      console.log(check);
      if (!check) {
        this.errormsgPass = true;
      } else {
        this.errormsgPass = false;
      }
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
    //登録
    signUp() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((result) => {
          console.log("登録しました", result);
          updateProfile(result.user, { displayName: this.nickname }).then(
            () => {
              this.$store.dispatch(
                "auth/updateNickname",
                result.user.displayName
              );
              this.$store.dispatch("auth/updateUid", result.user.uid);
              this.$store.dispatch("auth/updateEmail", result.user.email);
            }
          );
          this.$router.push("usertop");
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code === "auth/email-already-in-use") {
            this.errormsgDuplicate = true;
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/css/global" as global;
@use "@/assets/css/modules" as modules;
</style>
