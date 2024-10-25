<template>
  <div>
    <div class="demo">
      <h2>{{Component.__sourceCodeTitle}}</h2>
      <div class="demo-component">
        <Switch1Demo/>
        <Component :is="component" />
      </div>
      <div class="demo-actions">
        <Button v-if="!toggle" @click="toggle = !toggle">查看代码</Button>
        <Button v-else="toggle" @click="toggle = !toggle">隐藏代码</Button>
      </div>
      <div v-if="toggle" class="demo-code">
        <pre class="language-html" v-html="html" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Button} from '../lib'
import 'prismjs';
import 'prismjs/themes/prism.css'
import { Component, computed, ref } from 'vue';

interface Props {
  component: Component
}

const html = computed(() => {
  return Prism.highlight(Component.__sourceCode, Prism.languages.html, 'html')
})

const toggle = ref(false)

const props = defineProps<Props>()

const Component = props.component as any;

const Prism = (window as any).Prism

</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
      ::v-deep span {
        position: initial;
        background-color: initial;
      }
    }
  }
}
</style>
