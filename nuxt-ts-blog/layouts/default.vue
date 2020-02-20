<template>
  <div class="font-sans leading-normal tracking-normal" :style="{ 'padding-bottom': pb + 'px' }">
    <!--Nav-->
    <Nav />
    <!--slide in nav-->
    <Slide />
    <Nuxt />
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
    this.pb = document.getElementById('footer').clientHeight + 10

    window.onload = function() {
      document.addEventListener('gesturestart', function(e) {
        e.preventDefault()
      })
      document.addEventListener('dblclick', function(e) {
        e.preventDefault()
      })
      document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
          event.preventDefault()
        }
      })
      let lastTouchEnd = 0
      document.addEventListener(
        'touchend',
        function(event) {
          const now = new Date().getTime()
          if (now - lastTouchEnd <= 300) {
            event.preventDefault()
          }
          lastTouchEnd = now
        },
        false
      )
    }
  }
}
</script>
