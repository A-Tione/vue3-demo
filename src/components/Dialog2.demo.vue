<demo>支持一键打开 Dialog</demo>
<template>
  <Button @click="showDialog">一键打开Dialog</Button>
</template>

<script lang="ts" setup>
import { h } from 'vue';
import {Button, openDialog} from '../lib'

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

</script>