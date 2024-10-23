<demo>常规使用</demo>
<template>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="xxx" :isClickCoverClose="false" :ok="ok" :cancel="cancel">
    <template v-slot:title>
      <strong>title</strong>
    </template>
    <template v-slot:content>
      <strong>Hello</strong>
      <div>123123</div>
    </template>
  </Dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Button from '../lib/Button.vue'
import Dialog from '../lib/Dialog.vue';

const xxx = ref(false)
const toggle = () => {
  xxx.value = !xxx.value
}
const ok = () => {
      console.log('点击 ok');
      return false;
    }
const cancel = () => {
  console.log('点击 cancel');
}

</script>