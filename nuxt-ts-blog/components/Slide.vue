<template>
  <div
    id="header"
    class="bg-white fixed w-full z-10 pin-t hidden animated top-0"
    style="opacity: .95;"
  >
    <div class="bg-white">
      <div class="flex flex-wrap items-center content-center">
        <div class="flex w-1/2 justify-start text-white font-extrabold">
          <nuxt-link
            tag="a"
            class="flex text-black no-underline hover:text-black hover:no-underline pl-2"
            to="/"
          >
            👻 <span class="pl-1 text-green-500">{{ $store.state.motto }}</span>
          </nuxt-link>
        </div>
        <div class="flex w-1/2 justify-end content-center">
          <p class="hidden sm:block mr-3 text-center h-14 p-4 text-xs">
            <span class="pr-2"></span>
          </p>
        </div>
      </div>
    </div>
    <!--Progress bar-->
    <div
      id="progress"
      class="h-1 bg-white shadow"
      style="background:linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0);"
    ></div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Slide extends Vue {}
</script>

<style scoped></style>
