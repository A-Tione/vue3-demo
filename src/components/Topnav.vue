<template>
  <div class="topnav" :class="{active: toggleMenuButtonVisible}">
    <RouterLink to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-a-homezhuyefangzijia"></use>
      </svg>
    </RouterLink>
    <ul class="menu">
      <li><a href="https://github.com/A-Tione/vue3-demo/tree/main">GitHub</a></li>
      <li><a href="https://www.zhihu.com/column/c_1073599338588073984">Blob</a></li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
    <use xlink:href="#icon-menu"></use>
  </svg>
  </div>
</template>
<script lang="ts" setup>
import { inject, Ref } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps<{
  toggleMenuButtonVisible: boolean;
}>();

const menuVisible = inject<Ref<boolean>>("menuVisible");

const toggleMenu = () => {
  if (menuVisible) {
    menuVisible.value = !menuVisible.value;
  }
};
</script>

<style lang="scss" scoped>
$color: #0d3e22;

.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  &.active {
    background-color: #62b3cc;
  }
  > .logo {
    max-width: 6em;
    margin-right: auto;
    >svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    background: fade-out($color: #000000, $amount: 0.9);
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>