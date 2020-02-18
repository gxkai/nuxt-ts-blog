<template>
  <nav class="bg-indigo-darkest p-4 mt-0 w-full">
    <div class="container mx-auto flex items-center">
      <div class="flex text-white font-extrabold">
        <nuxt-link
          class="flex text-white text-base no-underline hover:text-white hover:no-underline"
          to="/"
        >
          👻 <span class="hidden w-0 md:w-auto md:block pl-1">顾旭凯的个人博客</span>
        </nuxt-link>
      </div>
      <div class="flex pl-4 text-sm">
        <ul class="list-none flex justify-between flex-1 md:flex-none items-center">
          <li class="mr-2">
            <nuxt-link class="inline-block py-2 px-2 text-white no-underline" to="/"
              >HOME</nuxt-link
            >
          </li>
          <li class="mr-2">
            <nuxt-link class="inline-block py-2 px-2 text-white no-underline" to="/about"
              >About</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { Vue } from 'vue-property-decorator'
import { Component } from '~/node_modules/vue-property-decorator'
@Component
export default class Nav extends Vue {}
</script>
