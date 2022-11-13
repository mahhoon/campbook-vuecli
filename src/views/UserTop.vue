<template>
  <section id="userindex">
    <!-- <section id="userindex" v-show="usertop"> -->
    <!-- <user-header v-bind:current-uname='currentUname'></user-header> -->
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

    <!-- <div class="personal-link container pc">
      <P @click="showUserGoodsLists" class="editgoodsbtn"
        ><span class="icon"><i class="fas fa-check-circle"></i></span
        >基本の持ち物リストを編集</P
      > -->
    <!-- <p class="non-active"><span class="icon"><i class="fas fa-camera"></i></span>写真投稿</p> -->
    <!-- </div> -->
    <div id="addcampplan" @click="openNewCampModal">
      NEXT CAMP PLAN<br /><span><i class="fas fa-plus-circle"></i></span>
    </div>
    <div id="campcards">
      <ul class="campcards-wrap container">
        <li class="campcard" v-for="(campData, key) in campDatas" :key="key">
          <img
            v-if="campData.downloadCampImage.length === 0"
            src="@/assets/img/campimg.png"
          />
          <img v-else :src="campData.downloadCampImage" />
          <div class="campcard__text">
            <p class="campcard__place">{{ campData.campsiteName }}</p>
            <p class="campcard__date">
              {{ campData.fromCampDate }}〜{{ campData.toCampDate }}
            </p>
          </div>
        </li>
        <!-- <li
          class="campcard"
          v-for="(item, key) in campData"
          :key="key"
          @click="expandPage(item, key)"
        >
          <img
            v-if="item.downloadCampImage.length === 0"
            src="img/campimg.png"
          />
          <img v-else :src="item.downloadCampImage" />
          <div class="campcard__text">
            <p class="campcard__place">{{ item.campsiteName }}</p>
            <p class="campcard__data">
              {{ item.fromCampDate }}〜{{ item.toCampDate }}
            </p>
          </div>
        </li> -->
      </ul>
    </div>
    <!-- キャンプ登録モーダル -->
    <RegistCampModal v-show="registCampModalShow"></RegistCampModal>

    <Footer />
  </section>
</template>

<script>
import { auth } from "@/main.js";
import { signOut } from "firebase/auth";
import Footer from "@/components/Footer.vue";
import RegistCampModal from "@/components/RegistCampModal.vue";

export default {
  components: {
    RegistCampModal,
    Footer,
  },

  data() {
    return {
      togglemenu: "togglemenu",
      sp: "sp",
      registCampModalShow: false,
    };
  },

  computed: {
    currentUser() {
      return this.$store.getters["auth/getUser"];
    },
    campDatas() {
      return this.$store.getters["camp/getCampData"];
    },
  },

  methods: {
    logOut() {
      signOut(auth).then(() => {
        console.log("ログアウトしました");
      });
    },
    openNewCampModal() {
      this.registCampModalShow = true;
      console.log("動いているよ");
    },
    // closeModal() {
    //   this.registCampModalShow = false;
    // },
    // showUserGoodsLists() {
    //   this.$router.push("");
    // }
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/css/global" as global;
@use "@/assets/css/modules" as modules;

#userindex {
  padding-top: 20px;
  @include global.sp {
    padding-top: 10px;
  }
}

.personal-link {
  padding-right: 80px;
  margin: 0 auto 30px;
  text-align: right;

  cursor: pointer;
  @include global.sp {
    margin: 0;
    padding-right: 20px;
  }
  .icon {
    padding-right: 5px;
  }
  .fa-check-circle,
  .editgoodsbtn {
    color: global.$violet;
  }
}
#addcampplan {
  clear: both;
  @include global.basic-btn;
  border-radius: 0;
  text-align: center;
  margin: 0 auto;
  width: 400px;
  cursor: pointer;
  @include global.sp {
    width: 90%;
  }
  .fa-plus-circle {
    font-size: 20px;
    color: #fff;
  }
}
#campcards {
  background-color: lighten(global.$violet, 30%);
  padding: 40px;
  margin: 50px 0;
  .campcards-wrap {
    @include global.flex;
    padding: 0 40px;
    .campcard {
      width: 30%;
      height: 160px;
      border-radius: 8px;
      box-shadow: 2px 2px 2px #777;
      position: relative;
      cursor: pointer;
      margin-bottom: 30px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;

        &:hover {
          opacity: 0.8;
        }
      }
      &__text {
        text-align: center;
        position: absolute;
        top: 60px;
        width: 100%;
        z-index: 1;
      }
      &__place {
        color: #fff;
        font-size: 22px;
      }
      &__date {
        color: #fff;
        font-size: 15px;
      }
    }
  }
  //最後の行のスペース対策
  .campcards-wrap:after {
    content: "";
    display: block;
    width: 30%;
  }

  @include global.sp {
    padding: 20px;
    margin: 20px 0;
    .campcards-wrap {
      padding: 0;
      .campcard {
        width: 100%;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
