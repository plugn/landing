<template>
  <div
    class="alm-modal-root"
    :hidden="!isOpen"
  >
    <div
      class="alm-fader alm-modal-outer"
      @click.self="handleClose()"
    >
      <div
        :class="{
          'alm-modal-middle': !noContainer
        }"
      >
        <div
          class="alm-anchor"
          :class="{
            'alm-modal-inner': !noContainer,
            'alm-auth-container': !noContainer,
          }"
        >
          <div
            class="alm-modal-close"
            @click="handleClose()"
          />
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Modal',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    noContainer: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClose() {
      this.$emit('on-close');
    },
  },
};
</script>

<style lang="scss">
.alm-fader {
  background: rgba(24, 25, 32, 0.6);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1500;
}

.alm-modal-outer {
  // position: absolute;
  display: table;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
}

.alm-modal-middle {
  display: table-cell;
  vertical-align: middle;
}

.alm-modal-inner {
  /* whatever width you want */
  margin-left: auto;
  margin-right: auto;
  width: 400px;
}

.alm-auth-container {
  background: #ffffff;
  border-radius: 4px;
  max-height: 580px;
  min-height: 200px;
  width: 340px;
}

.alm-modal-close {
  position: absolute;
  top: -16px;
  right: -17px;
  cursor: pointer;
  width: 12px;
  height: 12px;
  background: url('/static/svg/icons/modal-close-btn.svg') center no-repeat;
}

.alm-modal-close:hover {
  // background-image: url('../../assets/svg/icons/modal-close-hover-btn.svh');
}
</style>
