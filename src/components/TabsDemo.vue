<template>
  <div>Tabs 示例</div>
  <h1>示例 1</h1>
  <Tabs v-model:selected="xxx">
    <Tab title="导航 1">内容 1</Tab>
    <Tab title="导航 22222222">内容 222222</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import { ref } from 'vue';

export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const xxx = ref('导航 1')

    return {
      xxx
    }
  }
}
</script>