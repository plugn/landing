<template>
  <div
    class="alm-modal-root"
    :hidden="hideModal"
	>
    <div class="alm-fader alm-modal-outer">
      <div
				class="alm-modal-middle"
				@click.self="onClose()"
			>
        <div class="alm-modal-inner alm-auth-container alm-anchor">
          <div
						class="alm-modal-close"
						@click="onClose()"
					/>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import Icon from 'components/base/Icon';

const { mapState, mapMutations } = createNamespacedHelpers('modal');

export default {
  name: 'Modal',
  computed: mapState({
    hideModal: state => !state.modal.active
  }),
  methods: {
    // ...mapMutations(['toggleModal']),
    onClose() {
      this.$emit('close');
    }
  }
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
		display: table;
		// position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
	}

	.alm-modal-middle {
		display: table-cell;
		vertical-align: middle;
	}

	.alm-modal-inner {
		margin-left: auto;
		margin-right: auto;
		width: 400px;
		/* whatever width you want */
	}

	.alm-auth-container {
		width: 340px;
		min-height: 200px;
		max-height: 580px;
		background: #ffffff;
		border-radius: 4px;
	}
</style>
