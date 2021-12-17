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

<script>
  export default {
    name: 'SignupModal',

    methods: {
      closeModal() {
        this.$emit('close-modal')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/css/_base.scss";
  @import "../assets/css/_modules.scss";
</style>