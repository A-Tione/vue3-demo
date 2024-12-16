<demo>常规用法</demo>
<template>
  <Switch v-model:checked="bool" />
</template>
<script lang="ts" setup>
  import {Switch} from '../lib'
  import {ref} from 'vue'

  const bool = ref(false)

</script>