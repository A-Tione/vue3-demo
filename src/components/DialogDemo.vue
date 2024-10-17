<template>
  <div style="position: relative; z-index: 1;">

    <div>Dialog 示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="xxx" :isClickCoverClose="false" :ok="ok" :cancel="cancel">
      <template v-slot:title>
        <strong>title</strong>
      </template>
      <template v-slot:content>
        <strong>hello</strong>
        <div>123123</div>
      </template>
    </Dialog>
  </div>
  <div style="position: relative; z-index: 2; width: 300px; height: 300px; background: red;"></div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Button from '../lib/Button.vue';
import Dialog from '../lib/Dialog.vue'

export default {
  components: {
    Dialog,
    Button
  },

  setup() {
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
    return {
      xxx,
      toggle,
      ok,
      cancel,
    }
  }
}
</script>