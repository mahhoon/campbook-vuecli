<template>
  <div>
    <section id="toppage">
      <!--KV-->
      <div id="headercontent" class="container">
        <h1 class="pc"><img src="@/assets/img/title.svg" alt="キャンプノシオリ"></h1>
        <h1 class="sp"><img src="@/assets/img/title-sp.svg" alt="キャンプノシオリ"></h1>
        <p>キャンプ行ってますかー？<br>キャンプの準備アプリ作ってみました！　<br class="sp">ちょっとだけ準備に役立つ？かも？<br>良かったら使ってみてください！
        <div class="loginbuttons">
            <div class="btn-basic loginbuttons__login" @click="openLoginModal">ログイン</div>
            <div class="btn-basic loginbuttons__signup" @click="openSignupModal">新規登録</div>
        </div>
      </div>
      <!--ログインモーダル-->
      <LoginModal v-show="loginModalShow" @close-modal="closeModal"></LoginModal>
      <SignupModal v-show="signupModalShow" @close-modal="closeModal" @set-uname="setUserName"></SignupModal>
      <!--機能紹介-->
      <div id="introduction" class="container">
        <h2 class="introduction__title">こんなことができます</h2>
        <p class="introduction__p">ログインが必要です</p>
        <div class="introduction_contents">
          <ul class="introitems-wrap" >
            <li class="intro-item" data-aos="fade-right" data-aos-duration="800" data-aos-delay="100" data-aos-once="true">
              <span class="intro-icon"><i class="fas fa-map-marked-alt"></i></span>
              <div class="intro-text">
                <h3>キャンプ場情報表示</h3>
                <p>行く予定のキャンプ場を登録すると、天気予報・地図を表示します。</p>
              </div>
            </li>
            <li class="intro-item" data-aos="fade-right" data-aos-duration="800" data-aos-delay="300" data-aos-once="true">
              <span class="intro-icon"><i class="fas fa-check-circle"></i></span>
              <div class="intro-text">
                <h3>持ち物チェックリスト作成</h3>
                <p>独自の持ち物リストを作成できます。キャンプ用品のカテゴリ分けで見やすく！ チェックマークはパッキングと車への積載完了の２種類用意しました。</p>
              </div>
            </li>
            <li class="intro-item" data-aos="fade-right" data-aos-duration="800" data-aos-delay="500" data-aos-once="true">
              <span class="intro-icon"><i class="far fa-list-alt"></i></span>
              <div class="intro-text">
                <h3>MEMO機能</h3>
                <p>TODOリストやキャンセルポリシー、備忘録などに。</p>
              </div>
            </li>
            <li class="intro-item" data-aos="fade-right" data-aos-duration="800" data-aos-delay="700" data-aos-once="true">
              <span class="intro-icon bookmark"><i class="fas fa-bookmark"></i></span>
              <div class="intro-text">
                <h3>お役立ちリンク集を作れる</h3>
                <p>ギアのマニュアルや近隣施設など自分用のブックマークに。</p>
              </div>
            </li>
          </ul>
          <div class="intro-img"><img src="@/assets/img/appimg.png" data-aos="zoom-out-left" data-aos-duration="1500" data-aos-delay="100" data-aos-once="true"></div>
        </div>
        <div class="introduction-author" data-aos="fade" data-aos-duration="1500" data-aos-easing="ease-out" data-aos-delay="600" data-aos-once="true">
          <img src="@/assets/img/faceicon.svg">
          <span class="about-author">制作者について</span>
        </div>
        <div class="author-msg">
          <p>
            キャンプ好き、スノーボード好き。プログラミングの勉強を始めたら楽しくなり、どうせならとキャンプのアプリ制作に挑戦（無謀・・！）
            小踊りしたり絶望したりを繰り返すこと４ヶ月。やっとお見せできるかなというところまで辿り着きました。まだまだですが、ご感想、アドバイスなどいただけると嬉しいです！（2021/10）<br>
            Vue.js（CDN）＋Firebaseで作りました。
          </p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
  import Footer from "@/modules/Footer.vue";
  import LoginModal from "@/components/LoginModal.vue";
  import SignupModal from "@/components/SignupModal.vue";

  export default {
    components: {
      Footer,
      LoginModal,
      SignupModal,
    },

    data() {
      return {
        loginModalShow: false,
        signupModalShow: false,
      }
    },

    methods: {
      openLoginModal() {
        this.loginModalShow = true;
      },
      openSignupModal() {
        this.signupModalShow = true;
      },
      closeModal() {
        this.loginModalShow = false;
        this.signupModalShow = false;
      }
    }

  }
</script>