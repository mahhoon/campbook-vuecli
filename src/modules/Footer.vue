<template>
  <footer class="container">
    <div class="footerimg"></div>
  </footer>
</template>

<style lang="scss" scoped>
  @import "../assets/css/_base.scss";
  @import "../assets/css/_modules.scss";

  footer {
    margin-top: 10px;
    width: 80%;
    height: 80px;
    background-image: url(../assets/img/footerimg.svg);
    background-repeat: no-repeat;
    @include sp {
        background-image: url(../assets/img/footerimg-sp.svg);

    }
}

</style>