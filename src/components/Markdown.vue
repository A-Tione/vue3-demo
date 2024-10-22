<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface Props {
  path: string
}

const props = defineProps<Props>()
const content = ref<string>('')
import(props.path).then(result => {
  content.value = result.default
})

</script>