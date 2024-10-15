<template>
  <router-view/>
</template>

<script lang="ts">
import { provide, ref } from 'vue';
import { router } from './router.ts'
export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth
    const menuVisible = ref(false)
    provide('menuVisivle', menuVisible)
    router.afterEach(() => {
      menuVisible.value = false
    })
    
  }
}
</script>
