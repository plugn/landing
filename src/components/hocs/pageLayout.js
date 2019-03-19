import Vue from 'vue';
import Header from '@/components/core/Header';
import Footer from '@/components/core/Footer';
import FooterMobile from '@/components/core/FooterMobile';

export default function pageLayout(Component,
  { container } = { container: true }) {
  const content = h => h('div', {
    class: `layout ${container ? 'container px-lg-0' : ''} layout__content`,
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
        h(FooterMobile),
      ]);
    },
  });
}
