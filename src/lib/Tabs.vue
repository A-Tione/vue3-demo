<template>
  <div class="ree-tabs">
    <div class="ree-tabs-nav">
      <div class="ree-tabs-nav-item" :class="{selected: t === selected}" @click="select(t)" v-for="(t, index) in titles" :key="index">{{ t }}</div>
    </div>
    <div class="ree-tabs-comtent">
      <component class="ree-tabs-content-item" :is="current" :key="selected"/>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import Tab from './Tab.vue';
export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    console.log(context.slots.default?.());
    
    const defaults = context.slots.default?.() || []
    defaults.forEach(element => {
      if (element.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab!')
      }
    });
    const titles = defaults.map((element) => {
      return element?.props?.title
    })
    const current = computed(() => {
      return defaults.filter(item => item?.props?.title === props.selected)[0]
    })
    const select = (title: string) => {
      context.emit('update:selected', title)
    }

    return {
      defaults,
      titles,
      current,
      select
    }
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.ree-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>