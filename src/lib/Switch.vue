<template>
  <button @click='toggle' class="ree-switch" :class="{'ree-switch-checked': checked}">
    <span></span>
  </button>
</template>

<script lang='ts'>

 export default {
  props: {
    checked: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:checked', !props.checked);
    }
    return { toggle }
  }
}
</script>

<style lang="scss">
  $h: 22px;
  $h2: $h - 4px;
  .ree-switch {
    height: calc($h);
    width: calc($h * 2);
    border: none;
    background: #bfbfbf;
    border-radius: calc($h2 / 2);
    position: relative;
  }
  span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: calc($h2);
    width: calc($h2);
    background:white;
    border-radius: calc($h2 / 2);
    transition: all 250ms;
  } 
  .ree-switch-checked{
    background: #1890ff;
  }
  .ree-switch-checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
  .ree-switch:focus{
    outline: none;
  }
  .ree-switch:active{
    > span {width: $h2 + 4px;}
  }
  .ree-switch-checked:active{
    > span {width: $h2 + 4px; margin-left: -4px;}
  }
</style>