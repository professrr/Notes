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
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display&family=Roboto&display=swap');

a, p, span, input[type="text"] {
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
}

h1 {
  font-size: 42px;
  font-family: 'Red Hat Display', sans-serif;
  cursor: default;
}

h2 {
  font-size: 24px;
  font-family: 'Red Hat Display', sans-serif;
  cursor: default;
}

html, body, #app {
  min-height: 100vh;
}
body {
  display: flex;
  justify-content: center;

  background: #CEC7E9;
}
p, h1, h2, h3, h4, html, body {
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
  max-width: 840px;
  width: 90%;
}
</style>
