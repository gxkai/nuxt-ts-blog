<template>
  <div class="container mx-auto">
    <Title />
    <ImageCom />
    <ContainerCom />
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
