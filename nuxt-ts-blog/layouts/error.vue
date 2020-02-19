<template>
  <div class="text-center">
    <h1>{{ error.statusCode }}</h1>
    <nuxt-link to="/">Back Home</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: Object,
  },
}
</script>

<style></style>
