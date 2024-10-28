<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="ree-dialog-overlay" @click="onClickCoverClose"></div>
      <div class="ree-dialog-wrapper">
        <div class="ree-dialog">
          <header>
            <slot name="title"></slot>
            <span @click="close" class="ree-dialog-close"></span>
          </header>
          <main>
            <slot name="content"></slot>
          </main>
          <footer>
            <Button @click="onClickOk" level="main">OK</Button>
            <Button @click="onClickCancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import Button from './Button.vue';

export default {
  components: {
    Button
  },
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    isClickCoverClose: {
      type: Boolean,
      default: true
    },
    onClickOk: {
      type: Function
    },
    onClickCancel: {
      type: Function
    }
  },

  setup(props, context) {
    const onClickCoverClose = () => {
      if (props.isClickCoverClose) {
        context.emit('update:visible', false)
      }
    }
    const close = () => {
      context.emit('update:visible', false)
    }
    const onClickOk = () => {
      if(props.onClickOk && props.onClickOk() !== false) {
        close()
      }
    }
    const onClickCancel = () => {
      context.emit('cancel')
      close()
    }

    return {
      onClickCoverClose,
      close,
      onClickOk,
      onClickCancel
    }
  }
}
</script>


<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.ree-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  >header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  >main {
    padding: 12px 16px;
  }
  >footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}

</style>