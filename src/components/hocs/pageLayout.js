import Vue from 'vue';
import Header from 'core/Header';
import Footer from 'core/Footer';

export default function pageLayout(Component) {
  const content = h => h('div', {
    class: 'layout container px-0 layou__content',
  },
  [
    h(Component),
  ]);
  return Vue.component('pageLayout', {
    render(h) {
      return h('main', [
        h(Header),
        content(h),
        h(Footer),
      ]);
    },
  });
}
