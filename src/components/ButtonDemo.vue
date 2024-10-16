<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button>默认按钮</Button>
    <Button theme="button">默认按钮</Button>
    <Button theme="link">默认按钮</Button>
    <Button theme="text">默认按钮</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'

export default {
  components: {Button},
  setup() {
    const onClick = () => {
      console.log('onClick')
    }
    return {
      onClick,
    }
  }
}
</script>