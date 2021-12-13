import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* firebase start */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzQ9Lya1ysM3s9nJg3WV1DD2GlT6i79L0",
  authDomain: "camp-booklet-4944c.firebaseapp.com",
  databaseURL: "https://camp-booklet-4944c-default-rtdb.firebaseio.com",
  projectId: "camp-booklet-4944c",
  storageBucket: "camp-booklet-4944c.appspot.com",
  messagingSenderId: "778773079794",
  appId: "1:778773079794:web:13a7766fe2bff0fc51526b"
};

// Initialize Firebase
 export const firebaseApp = initializeApp(firebaseConfig);

/* firebase end */


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
