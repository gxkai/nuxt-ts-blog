<template>
  <div class="text-center pt-16 md:pt-32">
    <p class="text-sm md:text-base text-teal font-bold">
      - {{ curDate }} -<span class="text-black"></span>
    </p>
    <!--    <h1 class="break-normal text-3xl md:text-5xl">-->
    <!--      Ghostwind CSS (Vue) - By-->
    <!--      <a-->
    <!--        class="text-grey-darkest hover:text-teal no-underline border-b-2 border-teal"-->
    <!--        href="https://github.com/diomed"-->
    <!--        >@diomed</a-->
    <!--      >-->
    <!--    </h1>-->
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import dayjs from 'dayjs'
@Component
export default class Title extends Vue {
  curDate = '1978 - 2020'
}
</script>

<style scoped></style>
