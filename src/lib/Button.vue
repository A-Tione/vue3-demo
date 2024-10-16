<template>
    <button class="ree-button"
    :class="{[`ree-button-${theme}`]: theme}"
  >
      <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Button',
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: 'button'
    }
  },
  // setup(props, context) {
  //   const {size, theme, ...restProps} = context.attrs
  //   return {
  //     size,
  //     theme,
  //     restProps
  //   } 
  // }
}

</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.ree-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.ree-button-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.ree-button-text {
    border-color: transparent;
    box-shadow: none;
    color: $color;
    &:hover,
    &:focus {
      color: darken($blue, 10%);
    }
  }
}
</style>