<template>
  <div class="article-item">
    <div class="post-preview" @click="onClick">
      <h2 class="post-title">
        {{title}}
      </h2>
      <h3 class="post-subtitle">
        {{ subTitle }}
      </h3>
      <div class="post-content-preview">
        {{ preview }}
      </div>
      <p class="post-meta">
          Posted by {{ author }} on {{ createdTime }}
      </p>
    </div>
     <hr/>
</div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    id: {
      required: true,
      type: Number
    },
    name: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    },
    subTitle: {
      type: String
    },
    preview: {
      required: true,
      type: String
    },
    author: {
      required: true,
      type: String
    },
    createdTime: {
      required: true,
      type: String
    }
  }
})
export default class ArticleItem extends Vue {
  onClick () {
    this.$router.push({name: this.$props.name})
  }
}
</script>
<style>
  .article-item{
    cursor: pointer;
  }
  .article-item:hover{
    opacity: .6;
  }
</style>
