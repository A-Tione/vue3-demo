<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script lang="ts" setup>
interface Props {
  content: string
}

const props = defineProps<Props>()
const content = props.content

</script>