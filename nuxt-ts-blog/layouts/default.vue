<template>
  <!--  <div>-->
  <!--    <Header />-->
  <!--    <nuxt />-->
  <!--    <Footer />-->
  <!--    <BackToTop />-->
  <!--  </div>-->
  <div class="font-sans leading-normal tracking-normal" :style="{ 'padding-bottom': pb + 'px' }">
    <!--Nav-->
    <Nav />
    <!--slide in nav-->
    <Slide />
    <Nuxt />

    <!--    &lt;!&ndash;Container&ndash;&gt;-->
    <!--    <ContainerCom />-->
    <!--    <div id="app" class="bg-grey-lighter">-->
    <!--      <div class="container w-full max-w-2xl mx-auto px-2 py-8">-->
    <!--        <div class=" flex flex-wrap -mx-2">-->
    <!--          <div v-for="(item, index) in content" :key="index" class="w-full md:w-1/3 px-2 pb-12">-->
    <!--            <div class=" bg-white rounded shadow-md hover:shadow-lg relative smooth">-->
    <!--              <span class="no-underline hover:no-underline">-->
    <!--                <template>-->
    <!--                  <img :src=`https://source.unsplash.com/${item.unsplash}` class="h-48 w-full-->
    <!--                  rounded-t shadow"/>-->
    <!--                </template>-->

    <!--                <div class="p-6 h-auto ">-->
    <!--                  <p class="text-grey-dark text-xs md:text-sm">{{ item.category }}</p>-->
    <!--                  <div class="font-bold text-xl text-black">{{ item.title }}</div>-->
    <!--                  <p class="text-grey-darkest font-serif text-base mb-5">-->
    <!--                    {{ item.article }}-->
    <!--                  </p>-->
    <!--                </div>-->
    <!--                <div class="flex items-center justify-between pin-x pin-b p-6">-->
    <!--                  <img-->
    <!--                    class="w-8 h-8 rounded-full mr-4"-->
    <!--                    src="http://i.pravatar.cc/300"-->
    <!--                    alt="Avatar"-->
    <!--                  />-->
    <!--                  <p class="text-grey-dark text-xs md:text-sm">{{ item.min }} MIN READ</p>-->
    <!--                </div>-->
    <!--              </span>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->

    <Footer />
    <BackToTop />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import Nav from '../components/Nav'
import Slide from '../components/Slide'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import Title from '~/components/Title'
import ImageCom from '~/components/ImageCom'
import ContainerCom from '~/components/ContainerCom'
// import Header from '../components/Header'
/* Progress bar */
// Source: https://alligator.io/js/progress-bar-javascript-css-variables/
@Component({
  components: {
    Footer,
    BackToTop,
    Nav,
    Slide,
  },
})
export default class Deaf extends Vue {
  pb = 0
  mounted() {
    /* Progress bar */
    // Source: https://alligator.io/js/progress-bar-javascript-css-variables/
    const h = document.documentElement
    const b = document.body
    const st = 'scrollTop'
    const sh = 'scrollHeight'
    const progress = document.querySelector('#progress')
    let scroll
    let scrollpos = window.scrollY
    const header = document.getElementById('header')

    document.addEventListener('scroll', function() {
      /* Refresh scroll % width */
      scroll = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
      progress.style.setProperty('--scroll', scroll + '%')

      /* Apply classes for slide in bar */
      scrollpos = window.scrollY

      if (scrollpos > 100) {
        header.classList.remove('hidden')
        header.classList.remove('fadeOutUp')
        header.classList.add('slideInDown')
      } else {
        header.classList.remove('slideInDown')
        header.classList.add('fadeOutUp')
        header.classList.add('hidden')
      }
    })
    this.pb = document.getElementById('footer').clientHeight
  }
}
</script>
