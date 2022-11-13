<template>
  <footer class="container">
    <div class="footerimg"></div>
  </footer>
</template>

<style lang="scss" scoped>
@use "@/assets/css/global" as global;
@use "@/assets/css/modules" as modules;

footer {
  margin-top: 10px;
  width: 80%;
  height: 80px;
  background-image: url(../assets/img/footerimg.svg);
  background-repeat: no-repeat;
  @include global.sp {
    background-image: url(../assets/img/footerimg-sp.svg);
  }
}
</style>
