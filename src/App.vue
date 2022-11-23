<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

    <router-view />
    <!-- リンクに応じたコンポーネントが入る -->
  </div>
</template>

<script>
import { auth } from "@/main.js";
import { database } from "@/main.js";
import { onAuthStateChanged } from "firebase/auth";
import { ref, onValue } from "firebase/database";

export default {
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.displayName);

        this.$store.dispatch("auth/updateUser", {
          propertyName: "nickname", //プロパティ名も文字列で渡す
          updateValue: user.displayName,
        });
        this.$store.dispatch("auth/updateUser", {
          propertyName: "uid",
          updateValue: user.uid,
        });
        this.$store.dispatch("auth/updateUser", {
          propertyName: "email",
          updateValue: user.email,
        });

        onValue(ref(database, `campbooks/${user.uid}`), (snapshot) => {
          console.log(snapshot.val());
          this.$store.dispatch("camp/updateCampData", snapshot.val());
        });
      } else {
        this.$store.dispatch("auth/updateNickname", "");
        this.$store.dispatch("auth/updateUid", "");
        this.$store.dispatch("auth/updateEmail", "");
        // this.$store.dispatch("camp/updateCampData", "");
        this.$router.push("/");
      }
    });
  },
};
</script>
