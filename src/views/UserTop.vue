<template>
    <section id="userindex">
      <!-- <section id="userindex" v-show="usertop"> -->
      <!-- <user-header v-bind:current-uname='currentUname'></user-header> -->
      <div class="user-heading container">
          <h1 class="pc"><img src="@/assets/img/logo-small.svg"></h1>
          <div class="user pc">
              <p class="username">{{ currentUname }}さん、こんにちは</p>
              <p class="logout" v-on:click="logOut">ログアウト</p>
          </div>

          <h1 class="sp"><img src="@/assets/img/logo-small.svg"></h1>
          <div class="toggle-wrap sp">
              <div class="togglebtn" v-on:click="showToggleMenu">
                  <span><i class="fas fa-bars"></i></span>
              </div>
          </div>
      </div>
      <div v-bind:class="[togglemenu, {'togglemenu-show':isActive}, sp]">
          <p v-on:click="showUserGoodsLists"><span class="icon"><i class="fas fa-check-circle"></i></span>持ち物リストの編集</p>
          <!-- <p class="non-active"><span class="icon"><i class="fas fa-camera"></i></span>写真投稿</p> -->
          <p v-on:click="logOut"><span class="icon"><i class="fas fa-sign-out-alt"></i></span>ログアウト</p>
      </div>
      <div class="username-sp container"><p class="sp">{{ currentUname }}さん、こんにちは</p></div>
      
      <div class="personal-link container pc">
          <P v-on:click="showUserGoodsLists" class="editgoodsbtn"><span class="icon"><i class="fas fa-check-circle"></i></span>基本の持ち物リストを編集</P>
          <!-- <p class="non-active"><span class="icon"><i class="fas fa-camera"></i></span>写真投稿</p> -->
      </div>
      <div id="addcampplan" v-on:click="openNewcampModal">NEXT CAMP PLAN<br><span><i class="fas fa-plus-circle"></i></span></div>
      <div id="campcards">
          <ul class="campcards-wrap container">
              <li class="campcard" v-for="(value, key) in campData" v-on:click="expandPage(value, key)">
                  <img v-if="value.downloadCampImage.length === 0" src="img/campimg.png">
                  <img v-else v-bind:src="value.downloadCampImage">
                  <div class="campcard__text">
                      <p class="campcard__place">{{value.campsiteName}}</p>
                      <p class="campcard__data">{{value.fromCampDate}}〜{{value.toCampDate}}</p>
                  </div>
              </li>
          </ul>
      </div>
      <Footer />
  </section>
</template>

<script>
  import Footer from "@/modules/Footer.vue";

  export default {
    components: {
      Footer,
    },

    data() {
      return {
        togglemenu: 'togglemenu',
        sp: 'sp',
      }
  }
  }

</script>