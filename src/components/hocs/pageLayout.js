import Vue from 'vue';
import Header from 'core/Header';
import Footer from 'core/Footer';

export default function pageLayout(Component) {
  const content = h => h('div', {
    class: 'layout__content',
  },
  [
    h(Component),
  ]);
  return Vue.component('pageLayout', {
    render(h) {
      return h('main', {
        class: 'container px-0 layout',
      },
      [
        h(Header),
        content(h),
        h(Footer),
      ]);
    },
  });
}
