<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TestComponent />
    <HelloWorld msg="Welcome to Your Vue.js App" />

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import TestComponent from '@/modules/TestComponent.vue'

export default {
  name: "Home",
  components: {
    HelloWorld,
    TestComponent,
  },
};
</script>
