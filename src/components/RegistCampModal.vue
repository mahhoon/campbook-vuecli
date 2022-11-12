<template>
  <div class="overlay">
    <form class="modal-wrapping">
      <div class="close-modal" @click="closeModal">
        <i class="fa fa-2x fa-times"></i>
      </div>
      <p class="modal-wrapping__title" v-show="newCamp">
        今度行くキャンプの登録をします
      </p>
      <p class="modal-wrapping__title" v-show="editCamp">
        キャンプ計画を変更します
      </p>
      <div class="modal-wrapping__name">キャンプ場名</div>
      <input
        type="text"
        class="modal-wrapping__formcontrol campsite"
        v-model="campRegisterData.campsiteName"
      />
      <div class="modal-wrapping__name">公式サイト</div>
      <input
        type="url"
        class="modal-wrapping__formcontrol campsiteurl"
        v-model="campRegisterData.campsiteUrl"
      />
      <div class="modal-wrapping__name">電話番号</div>
      <input
        type="tel"
        class="modal-wrapping__formcontrol campsitetel"
        v-model="campRegisterData.campsiteTel"
      />
      <div class="modal-wrapping__name">いつから</div>
      <input
        type="date"
        class="modal-wrapping__formcontrol campdate"
        v-model="campRegisterData.fromCampDate"
      />
      <div class="modal-wrapping__name">いつまで</div>
      <input
        type="date"
        class="modal-wrapping__formcontrol campdate"
        v-model="campRegisterData.toCampDate"
      />
      <div class="modal-wrapping__name">イメージ画像（サムネイル表示用）</div>
      <input
        type="file"
        accept=".png, .jpg, .jpeg"
        class="modal-wrapping__formcontrol campdimg"
        ref="selectedFileInput"
        v-on:change="selectedFile"
      />
      <div
        type="submit"
        class="modal-wrapping__submit"
        v-on:click="registCampdata"
        v-show="newCamp"
      >
        シオリ作成
      </div>
      <div
        type="submit"
        class="modal-wrapping__submit"
        v-on:click="editCampData"
        v-show="editCamp"
      >
        シオリ更新
      </div>
    </form>
  </div>
</template>

<script>
// import { database } from "@/main.js";
// import { pushDatabase } from "firebase/database";

export default {
  data() {
    return {
      campRegisterData: {
        campsiteName: "",
        campsiteUrl: "",
        campsiteTel: "",
        fromCampDate: "",
        toCampDate: "",
        downloadCampImage: "",
      },
    };
  },

  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/_base.scss";
@import "../assets/css/_modules.scss";
</style>
