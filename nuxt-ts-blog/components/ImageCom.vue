<template>
  <div>
    <div
      class="container w-full  mx-auto bg-white bg-cover  mt-8 rounded hidden md:block"
      style="background-image:url('/kobe.JPG'); height: 75vh;"
    ></div>
    <img src="/kobe.JPG" class="w-full md:hidden z-0" />
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class ImageCom extends Vue {}
</script>

<style scoped></style>
