<template>
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
  <Button @click="showDialog">打开Dialog</Button>
</template>

<script lang="ts">
import { ref, h } from 'vue';
import Button from '../lib/Button.vue';
import Dialog from '../lib/Dialog.vue'
import {openDialog} from '../lib/openDialog.ts'

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
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        ok() {
          console.log('ok');
        },
        cancel() {
          console.log('cancel');
        }
      })
    }
    return {
      xxx,
      toggle,
      ok,
      cancel,
      showDialog
    }
  }
}
</script>