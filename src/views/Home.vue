<template>
  <div>

    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>阿嚏 UI</h1>
        <h2>一个厉害的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com/A-Tione/vue3-demo/tree/main">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3 class="title">基于 Vue 3</h3>
          <p class="text">使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3 class="title">基于 TypeScript </h3>
          <p class="text">源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3 class="title">代码易读</h3>
          <p class="text">每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
  </template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>
<style lang="scss" scoped>
$purple: #865dc0;
$border-radius: 4px;
$color: #211730;

.topnavAndBanner {
  background: linear-gradient(90deg, rgba(123,224,255,1) 0%, rgba(196,85,255,1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}

.features {
  margin: 64px auto;
  max-width: 400px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  >ul {
    display: flex;
    flex-wrap: wrap;
    >li {
      max-width: 400px;
      margin: 16px;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      >h3 {
        grid-area: title;
        font-size: 28px;
      }
      >p {
        grid-area: text
      }
    }
  }
}

.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: $purple;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>