<template>
  <div>
    <video
      id="video"
      src="/kobe.mp4"
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
