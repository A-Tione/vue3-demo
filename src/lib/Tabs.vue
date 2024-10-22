<template>
  <div class="ree-tabs">
    <div class="ree-tabs-nav" ref="container">
      <div
        v-for="(t, index) in titles" 
        :key="index"
        :ref="e => {if(t === selected) selectedItem = e}"
        class="ree-tabs-nav-item" 
        :class="{selected: t === selected}" 
        @click="select(t)" 
      >
        {{ t }}
      </div>
      <div class="ree-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="ree-tabs-comtent">
      <component :is="current" :key="selected"/>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue';
import Tab from './Tab.vue';
export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement | null> (null)
    const indicator = ref<HTMLDivElement | null> (null)
    const container = ref<HTMLDivElement | null> (null)
    onMounted(() => {
      watchEffect(() => {
        const {width} = selectedItem.value!.getBoundingClientRect()
        indicator.value!.style.width = width + 'px'
        const {
          left: left1
        } = container.value!.getBoundingClientRect()
        const {
          left: left2
        } = selectedItem.value!.getBoundingClientRect()
        const left = left2 - left1
        indicator.value!.style.left = left + 'px'
      }, {flush: 'post'})
    })
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
      selectedItem,
      current,
      select,
      indicator,
      container,
      onMounted,
      watchEffect,

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
    position: relative;
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
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>