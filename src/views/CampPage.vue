<template>
  <section id="camppage">
    <div class="user-heading container">
      <!--pc-->
      <h1 class="pc" v-on:click="goUserIndex">
        <img src="@/assets/img/logo-small.svg" />
      </h1>
      <div class="user pc">
        <p class="username">{{ currentUser.nickname }}さん、こんにちは</p>
        <p class="logout" v-on:click="logOut">ログアウト</p>
      </div>
      <!--sp-->
      <!-- <h1 class="sp" v-on:click="goUserIndex">
        <img src="img/logo-small.svg" />
      </h1> -->
      <!--ハンバーガーメニュー-->
      <!-- <div class="toggle-wrap sp">
        <div class="togglebtn" v-on:click="showToggleMenu">
          <span><i class="fas fa-bars"></i></span>
        </div>
      </div> -->
      <!-- <div v-bind:class="[togglemenu, { 'togglemenu-show': isActive }, sp]">
        <p v-on:click="editCampModalShow">
          <span class="icon"><i class="fas fa-edit"></i></span>行程を編集
        </p>
        <p v-on:click="deleteCampData(currentCampId)">
          <span class="icon"><i class="far fa-trash-alt"></i></span
          >このシオリを削除
        </p>
        <p v-on:click="goUserIndex">
          <span class="icon"
            ><i
              class="fas fa-angle-double-left"
              v-on:click="goUserIndex"
            ></i></span
          >キャンプ一覧ページへ
        </p>
        <p v-on:click="logOut">
          <span class="icon"><i class="fas fa-sign-out-alt"></i></span
          >ログアウト
        </p>
      </div> -->
      <!--ハンバーガーメニューここまで-->
    </div>
    <!-- <div class="heroimg">
      <img
        class="headimg"
        v-if="currentCampData.downloadCampImage.length === 0"
        src="img/campimg.svg"
      />
      <img
        class="headimg"
        v-else
        v-bind:src="currentCampData.downloadCampImage"
      />
    </div>
    <div class="camppage__heading container">
      <div>
        <h2 class="camppage__title">{{ currentCampData.campsiteName }}</h2>
        <p class="camppage__date">
          <span class="icon"><i class="far fa-calendar"></i></span
          >{{ currentCampData.fromCampDate }}〜{{ currentCampData.toCampDate }}
        </p>
        <a v-bind:href="currentCampData.campsiteUrl" target="_blank"
          >公式サイト</a
        >
        <p class="campsite__tel">
          <span class="icon"><i class="fas fa-phone"></i></span
          ><a v-bind:href="`tel:${currentCampData.campsiteTel}`">{{
            currentCampData.campsiteTel
          }}</a>
        </p> -->
    <!--sp持ち物ボタン-->
    <!-- <P v-on:click="showUserGoodsLists" class="editgoodsbtn_sp"
          ><span class="icon"><i class="fas fa-check-circle"></i></span
          >基本の持ち物リストを編集</P
        > -->
    <!-- </div> -->

    <!--pc メニューボタン-->
    <!-- <ul class="camppage__navlinks pc">
        <li v-on:click="editCampModalShow">
          <span class="icon"><i class="fas fa-edit"></i></span>行程を編集
        </li>
        <li v-on:click="deleteCampData(currentCampId)">
          <span class="icon"><i class="far fa-trash-alt"></i></span
          >このシオリを削除
        </li>
        <li v-on:click="goUserIndex">
          <span class="icon"><i class="fas fa-angle-double-left"></i></span
          >キャンプ一覧ページへ戻る
        </li>
        <P v-on:click="showUserGoodsLists" class="editgoodsbtn"
          ><span class="icon"><i class="fas fa-check-circle"></i></span
          >基本の持ち物リストを編集</P
        >
      </ul> -->
    <!--pc メニューボタンここまで-->
    <!-- </div> -->

    <!-- <div class="camppage_content container"> -->
    <!-- <div class="campcontent_wrap"> -->
    <!--1カラム-->
    <!-- <div class="campcontent_menubar">Weather&Map</div>
        <div class="contentarea__weather-map"> -->
    <!--天気予報-->
    <!-- <div id="weatherarea">
            <p class="contentarea__subtitle">3日先までの天気</p>
            <div> -->
    <!-- <ul id="forecastwrap">
                                    <li class="forecast" v-for="(value, key) in forecast3days">
                                        <p>{{value.day}}</p>
                                        <img v-bind:src=value.icon>
                                        <p>{{value.description}}</p>
                                        <p>{{value.temphigh}}°c / {{value.templow}}°c</p>
                                    </li>
                                </ul> -->
    <!-- </div> -->
    <!-- <a
              href="https://openweathermap.org/"
              target="_blank"
              class="contentarea_a-small"
              >*by OpenWeatherMap</a
            >
          </div> -->
    <!--map-->
    <!-- <div class="map">
            <div id="maparea"></div>
            <a
              target="_blank"
              v-bind:href="`http://maps.google.com/maps?q=${campDetailData.campsiteName}`"
              class="contentarea_a-small"
              >GoogleMapアプリで見る</a
            >
          </div> -->
    <!-- </div> -->
    <!-- </div> -->
    <!-- <div class="campcontent_flexlayout"> -->
    <!--2カラム-->
    <!-- <div class="campcontent_wrap column2">
          <div class="campcontent_menubar">持ち物リスト</div>
          <goods-list
            v-bind:current-camp-id="currentCampId"
            v-bind:current-uid="currentUid"
            v-bind:camp-goods="campGoods"
            v-on:show-user-goods-lists="showUserGoodsLists"
          ></goods-list>
        </div>
        <div class="column2">
          <div class="campcontent_wrap">
            <div class="campcontent_menubar">MEMO</div>
            <todo-list
              v-bind:current-camp-id="currentCampId"
              v-bind:current-uid="currentUid"
              v-bind:todo-items.sync="todoItems"
            ></todo-list>
          </div>
          <div class="campcontent_wrap">
            <div class="campcontent_menubar">お役立ちリンク集</div>
            <bookmarks
              v-bind:current-camp-id="currentCampId"
              v-bind:current-uid="currentUid"
              v-bind:camp-bookmarks="campBookmarks"
            ></bookmarks>
          </div> -->
    <!-- <div class="campcontent_wrap">
                            <div class="campcontent_menubar">キャンプご飯</div>
                            <div class="contentarea"></div>
                        </div> -->
    <!-- </div> -->
    <!-- </div> -->
    <!-- </div> -->
  </section>
</template>

<script>
import { auth } from "@/main.js";
import { signOut } from "firebase/auth";

export default {
  data() {
    return {};
  },
  computed: {
    currentUser() {
      return this.$store.getters["auth/getUser"];
    },
    currentCampData() {
      return this.$store.getters["camp/getCurrentCamp"];
    },
  },
  methods: {
    goUserIndex() {
      this.$router.push("usertop");
    },
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
