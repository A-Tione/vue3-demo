<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

interface Props {
  path: string
}

const props = defineProps<Props>()
const content = ref<string>('')
onMounted(async () => {
  import(props.path).then(result => {
    content.value = result.default
  })
})

</script>