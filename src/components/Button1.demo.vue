<demo>常规使用</demo>
<template>
  <div>
    <Button @click="onClick" class="test">默认按钮</Button>
    <Button theme="button">默认按钮</Button>
    <Button theme="link">默认按钮</Button>
    <Button theme="text">默认按钮</Button>
  </div>
</template>

<script lang="ts" setup>
import Button from '../lib/Button.vue'

const onClick = ()=> {
  console.log('点击了');
}

</script>