<template>
  <div class="header-bac" :style="{url: url}">
    <div class="blog-header">
      <h1 class="blog-title" style="color: #fff;">{{title}}</h1>
      <p class="lead blog-description">{{subTitle}}</p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
    },
    backgroundUrl: {
      type: String,
      default: 'http://ww2.sinaimg.cn/large/0060lm7Tly1fo8w4pll9rj31kw11x43e.jpg'
    }
  }
})
export default class ImageHeader extends Vue {
  get url () {
    return `url(${this.$props.backgroundUrl})`
  }
}
</script>
<style scoped>
.blog-title{
  color: #fff;
}
</style>

