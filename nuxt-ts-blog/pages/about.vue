<template>
  <div class="container mx-auto">
    <Title />
    <ImageCom />
    <!--    <ContainerCom />-->
    <h4>
      <span class="bg-green-200 px-2 py-1">顾旭凯</span>
      <span class="bg-blue-200 px-2 py-1">全栈工程师</span>
      <span class="bg-orange-200 px-2 py-1">四年工作经验</span>
      <span class="bg-yellow-200 px-2 py-1">南京信息工程大学</span>
    </h4>
    <h4>
      <span class="bg-green-200 px-2 py-1">江苏昆山</span>
      <span class="bg-blue-200 px-2 py-1">祥云平台</span>
      <span class="bg-orange-200 px-2 py-1">微信： weixin_gxk</span>
    </h4>
    <h4>
      <span class="bg-green-200 px-2 py-1">Vue</span>
      <span class="bg-blue-200 px-2 py-1">Flutter</span>
      <span class="bg-orange-200 px-2 py-1">Node</span>
      <span class="bg-yellow-200 px-2 py-1">Java</span>
      <span class="bg-purple-200 px-2 py-1">Java</span>
    </h4>
    <h4>
      <span class="bg-green-200 px-2 py-1"
        >Github: <a href="https://github.com/gxkai" target="_blank">gxkai</a></span
      >
      <span class="bg-blue-200 px-2 py-1">意向： 全栈工程师 15-18K</span>
    </h4>
    <h4>
      <span class="bg-green-200 px-2 py-1">写写代码，看看比赛</span>
      <span class="bg-blue-200 px-2 py-1">永远年轻，永远热泪盈眶</span>
    </h4>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Title from '~/components/Title.vue'
import ImageCom from '~/components/ImageCom.vue'
import ContainerCom from '~/components/ContainerCom.vue'

export default Vue.extend({
  components: { ContainerCom, ImageCom, Title },

  async asyncData(app) {},

  data() {
    return {
      msg: 'hello',
    }
  },
})
</script>

<style></style>
