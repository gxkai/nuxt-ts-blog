<template>
  <nav class="bg-indigo-darkest p-4 mt-0 w-full">
    <div class="container mx-auto flex items-center">
      <div class="flex text-white font-extrabold">
        <nuxt-link
          class="flex text-white text-base no-underline hover:text-white hover:no-underline"
          to="/"
        >
          👻 <span class="pl-1 text-green-500 hidden w-0 md:w-auto md:block">顾旭凯的个人博客</span>
        </nuxt-link>
      </div>
      <div class="hidden md:flex pl-4 text-sm">
        <ul class="list-none flex flex-1 md:flex-none items-center flex-wrap">
          <li class="mr-2">
            <nuxt-link class="inline-block py-2 px-2 text-white no-underline" to="/"
              >Home</nuxt-link
            >
          </li>
          <li class="mr-2">
            <nuxt-link class="inline-block py-2 px-2 text-white no-underline" to="/about"
              >About</nuxt-link
            >
          </li>
        </ul>
      </div>
      <div class="m-auto  search-bar">
        <input v-model="keyword" type="text" class="search-input" placeholder="搜索文章" />

        <div v-show="searchResult.length > 0" class="search-result">
          <nuxt-link
            v-for="(post, index) in searchResult"
            :key="index"
            tag="a"
            class="search-result-item"
            :to="'/posts/' + post.slugifiedFilename"
            >{{ post.title }}</nuxt-link
          >
        </div>
      </div>
      <span
        class="md:hidden mdi text-white text-lg dropdown-menu-toggle ml-4"
        :class="menutoggleClass"
        @click="toggleDropdownMenu"
      />
    </div>
    <ul
      v-if="dropdownMenuVisible"
      class="sm:flex sm:flex-col md:hidden w-full bg-transparent mt-5 list-none p-0"
    >
      <li class="text-center">
        <nuxt-link class="inline-block py-2 text-white no-underline" to="/">Home</nuxt-link>
      </li>
      <li class="text-center">
        <nuxt-link class="inline-block py-2 text-white no-underline" to="/about">About</nuxt-link>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { orderBy } from 'lodash'
import Fuse from 'fuse.js'
import { Component, Watch, Vue } from 'vue-property-decorator'

interface Post {
  filename: string
  // eslint-disable-next-line
    top_img: string

  [key: string]: any
}

@Component
export default class Nav extends Vue {
  posts: Post[] = []
  keyword: string = ''
  searchResult: Post[] = []
  fuse: any = null
  dropdownMenuVisible = false

  get menutoggleClass() {
    return this.dropdownMenuVisible ? 'mdi-close' : 'mdi-menu'
  }

  async mounted() {
    let { default: posts } = await import('~/posts/posts.json')

    // 按发布时间排序
    posts = orderBy(posts, 'date', 'desc')

    this.posts = posts

    // 第几页
    const options: Fuse.FuseOptions<Post> = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ['title'],
    }
    this.fuse = new Fuse(this.posts, options)
  }

  @Watch('keyword')
  onKeywordChange(val: string) {
    this.searchResult = this.fuse.search(val)
  }

  @Watch('$route')
  onRouteChange() {
    this.keyword = ''
    this.toggleDropdownMenu()
  }

  toggleDropdownMenu() {
    this.dropdownMenuVisible = !this.dropdownMenuVisible
  }
}
</script>

<style scoped lang="scss">
$nav-bg: #242424;
$nav-height: 45px;

.nav {
  height: $nav-height;
  background-color: $nav-bg;
}

.search-bar {
  position: relative;

  .search-input {
    font-size: 0.85rem;
    border-radius: 100vh;
    padding: 0.25em 0.8em;
    background-color: lighten($nav-bg, 8%);
    border: solid 1px lighten($nav-bg, 30%);
    outline: none;
    appearance: none;
    color: #fff;

    &::placeholder {
      color: #ababab;
      text-align: center;
    }
  }

  .search-result {
    display: block;
    margin: 0;
    padding: 1rem;
    width: 300px;
    position: absolute;
    top: 30px;
    background-color: #fff;
    border-radius: 5px;
    list-style: none;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);

    &-item {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0.5em 0;
      color: #333;
      text-decoration: none;

      &:hover {
        color: #f00;
        text-decoration: underline;
      }
    }
  }
}

.dropdown-menu {
  position: fixed;
  width: 100%;
  top: $nav-height;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 100;
  flex-direction: column;

  .dropdown-menu-item {
    color: #445566;
    text-decoration: none;
    font-size: 0.85rem;
    padding: 0.25rem 0;
  }
}
</style>
