<template>
  <div>
    <section id="toppage">
      <!-- KV -->
      <div id="headercontent" class="container">
        <h1 class="pc">
          <img src="@/assets/img/title.svg" alt="キャンプノシオリ" />
        </h1>
        <h1 class="sp">
          <img src="@/assets/img/title-sp.svg" alt="キャンプノシオリ" />
        </h1>
        <p>
          キャンプ行ってますかー？<br />キャンプの準備アプリ作ってみました！<br
            class="sp"
          />ちょっとだけ準備に役立つ？かも？<br />良かったら使ってみてください！
        </p>
        <div class="loginbuttons">
          <div class="btn-basic loginbuttons__login" @click="openLoginModal">
            ログイン
          </div>
          <div class="btn-basic loginbuttons__signup" @click="openSignupModal">
            新規登録
          </div>
        </div>
      </div>
      <!-- /KV -->

      <!--ログインモーダル-->
      <LoginModal
        v-show="loginModalShow"
        @close-modal="closeModal"
      ></LoginModal>
      <SignupModal
        v-show="signupModalShow"
        @close-modal="closeModal"
      ></SignupModal>
      <!-- <SignupModal v-show="signupModalShow" @close-modal="closeModal" @set-uname="setUserName"></SignupModal> -->

      <!--機能紹介-->
      <div id="introduction" class="container">
        <h2 class="introduction__title">こんなことができます</h2>
        <p class="introduction__p">ログインが必要です</p>
        <div class="introduction_contents">
          <ul class="introitems-wrap">
            <li
              class="intro-item"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <span class="intro-icon"
                ><i class="fas fa-map-marked-alt"></i
              ></span>
              <div class="intro-text">
                <h3>キャンプ場情報表示</h3>
                <p>
                  行く予定のキャンプ場を登録すると、天気予報・地図を表示します。
                </p>
              </div>
            </li>
            <li
              class="intro-item"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <span class="intro-icon"
                ><i class="fas fa-check-circle"></i
              ></span>
              <div class="intro-text">
                <h3>持ち物チェックリスト作成</h3>
                <p>
                  独自の持ち物リストを作成できます。キャンプ用品のカテゴリ分けで見やすく！
                  チェックマークはパッキングと車への積載完了の２種類用意しました。
                </p>
              </div>
            </li>
            <li
              class="intro-item"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <span class="intro-icon"><i class="far fa-list-alt"></i></span>
              <div class="intro-text">
                <h3>MEMO機能</h3>
                <p>TODOリストやキャンセルポリシー、備忘録などに。</p>
              </div>
            </li>
            <li
              class="intro-item"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="700"
              data-aos-once="true"
            >
              <span class="intro-icon bookmark"
                ><i class="fas fa-bookmark"></i
              ></span>
              <div class="intro-text">
                <h3>お役立ちリンク集を作れる</h3>
                <p>ギアのマニュアルや近隣施設など自分用のブックマークに。</p>
              </div>
            </li>
          </ul>
          <div class="intro-img">
            <img
              src="@/assets/img/appimg.png"
              data-aos="zoom-out-left"
              data-aos-duration="1500"
              data-aos-delay="100"
              data-aos-once="true"
            />
          </div>
        </div>
        <div
          class="introduction-author"
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-easing="ease-out"
          data-aos-delay="600"
          data-aos-once="true"
        >
          <img src="@/assets/img/faceicon.svg" />
          <span class="about-author">制作者について</span>
        </div>
        <div class="author-msg">
          <p>
            キャンプ好き、スノーボード好き。プログラミングの勉強を始めたら楽しくなり、どうせならとキャンプのアプリ制作に挑戦（無謀・・！）
            小踊りしたり絶望したりを繰り返すこと４ヶ月。やっとお見せできるかなというところまで辿り着きました。まだまだですが、ご感想、アドバイスなどいただけると嬉しいです！（2021/10）<br />
            Vue.js（CDN）＋Firebaseで作りました。
          </p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
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
    };
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
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/css/global" as global;
@use "@/assets/css/modules" as modules;

#headercontent {
  background-image: url(../assets/img/mainbg.jpg);
  background-position: 50% 0%;
  background-size: 100%;
  background-repeat: no-repeat;
  text-align: center;
  padding: 20px 0 50px;
  height: 600px;
  @include global.sp {
    height: auto;
    padding-bottom: 30px;
    img {
      width: 200px;
      padding-bottom: 0px;
      text-align: left;
    }
    background-size: cover;
  }

  p {
    padding-top: 20px;
    @include global.sp {
      line-height: 22px;
      padding: 5px;
      font-size: 12px;
      font-weight: 700;
    }
  }

  .loginbuttons {
    margin-top: 20px;
    @include global.sp {
      margin-top: 20px;
    }
    .btn-basic {
      @include global.basic-btn;
      display: inline-block;
      margin: 0 20px;

      @include global.sp {
        width: 30%;
        margin: 0 10px;
        font-size: 15px;
      }
    }
  }
}
//機能紹介
#introduction {
  padding: 0 40px 30px;
  @include global.sp {
    padding: 40px 20px 20px 20px;
  }

  .introduction__title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 24px;
    &::after {
      content: "";
      margin-left: 20px;
      width: 2px;
      height: 24px;
      background-color: #333;
      transform: rotate(35deg);
    }
    &::before {
      content: "";
      margin-right: 20px;
      width: 2px;
      height: 24px;
      background-color: #333;
      transform: rotate(-35deg);
    }
    @include global.sp {
      font-size: 18px;
      &::after,
      &::before {
        height: 20px;
      }
    }
  }
  .introduction__p {
    text-align: center;
    padding-top: 10px;
    font-size: 14px;
  }

  .introduction_contents {
    @include global.pc {
      margin-top: 20px;
      @include global.flex;
    }
    .intro-img {
      width: 35%;
      img {
        width: 100%;
        border: 1px solid #ddd;
        box-shadow: 4px 4px 6px #ddd;
        border-radius: 6px;
      }
      @include global.sp {
        width: 80%;
        margin: 0 auto;
      }
    }
  }
  .introitems-wrap {
    width: 60%;
    padding-left: 20px;
    @include global.sp {
      margin: 20px 0;
      width: 100%;
      padding-left: 0;
    }

    .intro-item {
      padding: 20px 20px;
      margin: 0 auto;
      @include global.flex;
      //justify-content: flex-start;
      @include global.sp {
        width: 100%;
        padding: 10px 0;
      }

      .intro-icon {
        .fa-map-marked-alt,
        .fa-check-circle,
        .fa-list-alt,
        .fa-bookmark {
          color: global.$violet;
          font-size: 35px;
          position: relative;
          top: 4px;
          @include global.sp {
            font-size: 25px;
          }
        }
      }
      .bookmark {
        padding-left: 4px;
      }
      .intro-text {
        width: 88%;
        @include global.sp {
          width: 82%;
        }
      }
      h3 {
        font-weight: 700;
        color: global.$violet;
      }
      p {
        font-size: 14px;
        line-height: 1.5rem;
        @include global.sp {
          font-size: 13px;
        }
      }
    }
  }
  .introduction-author {
    margin-left: 40px;
    cursor: pointer;
    display: inline-block;
    @include global.sp {
      margin: 60px 0 0 0;
    }
    img {
      width: 50px;
      vertical-align: middle;
      @include global.sp {
        width: 40px;
      }
    }
    .about-author {
      vertical-align: middle;
      border-bottom: 1px dotted #333;
      font-size: 13px;
      @include global.sp {
        font-size: 13px;
      }
    }
  }
  .author-msg {
    margin-top: 5px;
    margin-left: 40px;
    display: none;
    position: relative;
    width: 80%;
    color: global.$violet;
    padding: 10px 15px;
    font-size: 13px;
    line-height: 1.5rem;
    border: 1px solid global.$violet;
    border-radius: 6px;

    @include global.sp {
      width: 100%;
      margin-left: 0;
    }

    //吹き出し三角
    &::before {
      content: "";
      position: absolute;
      left: 70px;
      top: -10px;
      display: block;
      width: 0;
      height: 0;
      border-right: 8px solid transparent;
      border-bottom: 10px solid global.$violet;
      border-left: 8px solid transparent;
    }
    &::after {
      content: "";
      position: absolute;
      left: 70px;
      top: -8px;
      display: block;
      width: 0;
      height: 0;
      border-right: 8px solid transparent;
      border-bottom: 10px solid #fff;
      border-left: 8px solid transparent;
    }
  }
}
</style>
