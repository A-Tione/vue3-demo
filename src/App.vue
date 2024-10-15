<template>
  <div>导航栏 | 
    <router-link to="/">Yang1</router-link> |
    <router-link to="/yang2">Yang2</router-link>
  </div>
  <RouterView/>
</template>

<script>
import { RouterView } from 'vue-router';


export default {
  name: 'App',
  components: {
  }
}
</script>
