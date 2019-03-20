<template>
  <nav class="dropdown-list">
    <h2 class="sr-only">
      Drowdown Navigation
    </h2>
    <div
      v-for="(item, index) in items"
      :key="item.id"
      class="dropdown-list__item"
      :class="index === items.length-1 ? 'dropdown-list__item--danger' : ''"
      @click="handleClick(item)"
    >
      {{ item.text }}
    </div>
  </nav>
</template>

<script>
export default {
  name: 'DropdownList',
  props: {
    items: {
      type: Array,
      default() {
        return [
          {
            id: 0,
            text: 'item list',
          },
        ];
      },
    },
  },
  methods: {
    handleClick(item) {
      this.$emit('on-click', item);
    },
  },
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';
  @import '~styles/variables';

  .dropdown-list {
    @include element(item) {
      align-items: center;
      color: var(--body-font);
      cursor: pointer;
      display: flex;
      font-size: 14px;
      line-height: 20px;
      padding: 10px 15px;
      text-decoration: none;
      transition: all .1s ease-in-out;
      &:hover {
        background: rgba(45, 82, 218, .05);
      }
      @include modifier(danger) {
        color: #f34;
      }
    }
  }

</style>
