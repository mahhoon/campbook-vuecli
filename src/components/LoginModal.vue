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
            <button type="submit" class="modal-wrapping__submit" v-bind:disabled="addDisabled">ログイン</button>
        </form>
      </div>
    </div>
</template>

<script>
export default {
    name: 'LoginModal',

    methods: {
        closeModal() {
            this.$emit('close-modal')
        }
    }


}
</script>