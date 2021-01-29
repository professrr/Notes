<template>
  <router-view :key="$route.fullPath"/>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
html, body, #app {
  height: 100%;
}
p, h1, h2, h3, h4, html, body {
  margin: 0;
  padding: 0;
}
#app {
  background: #C7CEE9;
}
</style>
