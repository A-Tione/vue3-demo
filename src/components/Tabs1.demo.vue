<demo>常规用法</demo>
<template>
  <Tabs v-model:selected="xxx">
    <Tab title="导航 1">内容 1</Tab>
    <Tab title="导航 22222222">内容 222222</Tab>
  </Tabs>
</template>
<script lang="ts" setup>
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import { ref } from 'vue';

const xxx = ref('导航 22222222')

</script>