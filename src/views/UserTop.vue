<template>
    <section id="userindex">
      <!-- <section id="userindex" v-show="usertop"> -->
      <!-- <user-header v-bind:current-uname='currentUname'></user-header> -->
      <div class="user-heading container">
          <h1 class="pc"><img src="@/assets/img/logo-small.svg"></h1>
          <div class="user pc">
<!--            ログイン後にコンソールにエラーがたくさん出てるのは、-->
<!--            このvueファイル上でcurrentUnameとかのプロパティとかメソッドが定義されてないから出ているだけなので-->
<!--            それらをちゃんと実装してやれば直るので問題なし!-->
              <p class="username">{{ currentUname }}さん、こんにちは</p>
              <p class="logout" @click="logout">ログアウト</p>
          </div>

          <h1 class="sp"><img src="@/assets/img/logo-small.svg"></h1>
          <div class="toggle-wrap sp">
              <div class="togglebtn" @click="showToggleMenu">
                  <span><i class="fas fa-bars"></i></span>
              </div>
          </div>
      </div>
<!--      ここのクラス指定玄人っぽい！-->
      <div :class="[togglemenu, {'togglemenu-show':isActive}, sp]">
          <p @click="showUserGoodsLists"><span class="icon"><i class="fas fa-check-circle"></i></span>持ち物リストの編集</p>
          <!-- <p class="non-active"><span class="icon"><i class="fas fa-camera"></i></span>写真投稿</p> -->
          <p @click="logout"><span class="icon"><i class="fas fa-sign-out-alt"></i></span>ログアウト</p>
      </div>
      <div class="username-sp container"><p class="sp">{{ currentUname }}さん、こんにちは</p></div>
      
      <div class="personal-link container pc">
          <P @click="showUserGoodsLists" class="editgoodsbtn"><span class="icon"><i class="fas fa-check-circle"></i></span>基本の持ち物リストを編集</P>
          <!-- <p class="non-active"><span class="icon"><i class="fas fa-camera"></i></span>写真投稿</p> -->
      </div>
      <div id="addcampplan" @click="openNewcampModal">NEXT CAMP PLAN<br><span><i class="fas fa-plus-circle"></i></span></div>
      <div id="campcards">
          <ul class="campcards-wrap container">
              <li class="campcard" v-for="(item, key) in campData" :key="key" @click="expandPage(item, key)">
                <!--:key="key"はありだっけ？ →一応、"campcard-" + key 的な感じにするのがいいらしいけど、正直 :key="key"みたいに適当にやること多いですw-->
                  <img v-if="item.downloadCampImage.length === 0" src="img/campimg.png">
                  <img v-else :src="item.downloadCampImage">
                  <div class="campcard__text">
                      <p class="campcard__place">{{item.campsiteName}}</p>
                      <p class="campcard__data">{{item.fromCampDate}}〜{{item.toCampDate}}</p>
                  </div>
              </li>
          </ul>
      </div>
      <Footer />
  </section>
</template>

<script>
import { auth } from "@/main.js";
  import { signOut } from "firebase/auth";
  import Footer from "@/modules/Footer.vue";

  export default {
    components: {
      Footer,
    },

    data() {
      return {
        togglemenu: 'togglemenu',
        // このspという名前は何が入ってるデータなのか分かりにくいかも
        sp: 'sp',
      }
    },

    methods: {
      // onAuthStateChangedというメソッドでユーザーのログイン状態を監視して、
      // ログアウトしてたらトップに遷移するように書いておけば良さそうですね
      logout() {
        signOut(auth)
        .then( () => {
          console.log('ログアウトしました');
        })
      }
    }

  }

</script>

<style lang="scss" scoped>
  @import "../assets/css/_base.scss";
  @import "../assets/css/_modules.scss";

  #userindex {
      padding-top: 20px;
      @include sp {
          padding-top: 10px;
      }
  }

  .personal-link {
      padding-right: 80px;
      margin: 0 auto 30px;
      text-align: right;
      
      cursor: pointer;
      @include sp {
          margin: 0;
          padding-right: 20px;
      }
      .icon {
          padding-right: 5px;
      }
      .fa-check-circle, .editgoodsbtn {
        color: $violet;
      }
  }
  #addcampplan {
      clear: both;
      @include basic-btn;
      border-radius: 0;
      text-align: center;
      margin: 0 auto;
      width: 400px;
      cursor: pointer;
      @include sp {
          width: 90%;
      }
      .fa-plus-circle {
          font-size: 20px;
          color:#fff
      }
      
  }
  #campcards {
      background-color: lighten($violet, 30%);
      padding: 40px;
      margin: 50px 0;
      .campcards-wrap{
          @include flex;
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
              .campcard__text {
                  text-align: center;
                  color:#fff;
                  position: absolute;
                  top: 60px;
                  width: 100%;
                  z-index: 1;
                  .campcard__place {
                      font-size: 22px;
                  }
                  .campcard__date {
                      font-size: 13px;
                  }
              }

          }
      }
      //最後の行のスペース対策
      .campcards-wrap:after {
          content: "";
          display: block;
          width: 30%;
      }
      
      @include sp {
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