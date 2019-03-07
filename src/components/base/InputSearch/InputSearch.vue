<template>
  <div class="input-search">
    <Suggestions
      v-model="searchQuery"
      :options="options"
      :on-item-selected="onSearchItemSelected"
      :on-input-change="onInputChange"
    >
      <div
        slot="item"
        slot-scope="props"
        class="single-item"
      >
        <span class="name">
          {{ props.item.value }}
        </span>
      </div>
    </Suggestions>
    <img
      class="input-search__icon"
      src="@/assets/svg/icons/search-black.svg"
    >
  </div>
</template>

<script>
import Suggestions from 'v-suggestions';

import { api } from '@/api';
// eslint-disable-next-line
import 'v-suggestions/dist/v-suggestions.css';

export default {
  name: 'InputSearch',
  components: {
    Suggestions,
  },
  data() {
    return {
      searchQuery: '',
      selectedSearchItem: null,
      options: {
        inputClass: 'input-search__input',
        placeholder: 'Looking for something?',
      },
    };
  },
  methods: {
    onInputChange(query) {
      if (query.trim().length === 0) {
        return null;
      }
      const url = `goods/v1.0/search/autocomplete/?q=${query}`;
      return new Promise((resolve) => {
        api.get(url).then((response) => {
          const items = [];
          // response.data.RelatedTopics.forEach((item) => {
          response.data.hints.forEach((item) => {
            if (item.value) {
              items.push(item);
            } /* else if (item.Topics && item.Topics.length > 0) {
              item.Topics.forEach(topic => (
                items.push(topic)
              ));
            } */
          });
          resolve(items);
        });
      });
    },
    onSearchItemSelected(item) {
      this.selectedSearchItem = item;
    },
  },
};
</script>

<style lang="scss">
  @import '~styles/functions/px-to-rem';
  @import '~styles/mixins';

  .input-search {
    position: relative;
    width: 100%;

    div.suggestions {
      // box-shadow: 0 20px 30px 0 rgba(24,25,32,.05), 0 0 0 1px hsla(0,0%,100%,.5);
      max-height: 30rem;
      overflow-y: scroll;
    }

    @include element(input) {
      align-items: center;
      background-color: #fff;
      border-radius: px-to-rem(4);
      border: 1px solid rgba(24, 25, 32, .1);
      display: flex;
      height: px-to-rem(40);
      outline: none !important;
      padding: 9px 50px 9px 14px;
      transition: all .1s ease-in-out;
      width: 100%;
    }

    @include element(icon) {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      @include size(px-to-rem(24));
      margin: 7px 9px 9px;
      justify-content: center;
      align-items: center;
      opacity: .3;
      color: #181920;
      font-size: 24px;
      line-height: 24px;
    }

  }

</style>
