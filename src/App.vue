<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import headerVue from "./components/header.vue";

export default {
  components: {
    "app-header": headerVue,
  },
};
</script>

<style>
</style>
