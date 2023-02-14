<template lang="pug">
div#parent-div()
  q-toolbar#main-app-toolbar(elevated)
    span#main-app-title Node App
    q-tabs#route-tabs(v-model="tab")
      q-route-tab(name="home" label="Home" to="/" exact)
      q-route-tab(name="about" label="About" to="/about" exact)
    q-space
  RouterView
</template>

<script setup>
import { RouterView } from "vue-router";
import { ref } from 'vue'
import router from './router/index.js';

const tab = ref("home");

function navTo(route) {
  router.push('/' + route);
  console.log(route);
}
</script>

<style scoped>
#parent-div {
  height: 100vh;
  width: 100vw;
  background-color: #DDFFF7;
}

#main-app-toolbar {
  background-color: #848586;
}

#main-app-title {
  font-size: large;
  margin-left: 1rem;
  margin-right: 2rem;
}

#route-tabs {
  background-color: #5635c434;
}

</style>
