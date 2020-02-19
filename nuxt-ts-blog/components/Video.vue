<template>
  <div>
    <video
      id="video"
      src="//f.video.weibocdn.com/003jXCUelx07wmTAcnsI0104120a0wMI0E040.mp4?label=mp4_ld&template=640x360.24.0&trans_finger=78679548d3dda0964ec12b81fbdd99c2&Expires=1582082378&ssig=A8t%2BDSu8sl&KID=unistore,video"
      controls="true"
      poster="/kobe.JPG"
      preload="auto"
      webkit-playsinline="true"
      playsinline="true"
      x-webkit-airplay="allow"
      x5-video-player-type="h5"
      x5-video-player-fullscreen="true"
      x5-video-orientation="portraint"
      style="object-fit:fill"
      class="container mx-auto"
    ></video>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Video extends Vue {}
</script>

<style scoped></style>
