<demo>支持 disabled</demo>
<template>
  <Switch v-model:checked="bool" disabled />
  </template>
  <script lang="ts" setup>
  import Switch from '../lib/Switch.vue'
  import {ref} from 'vue'

  const bool = ref(false)

  </script>