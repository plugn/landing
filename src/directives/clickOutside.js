import Vue from 'vue';

const HANDLER = '_vue_click-outside_handler';

export default {
  bind(el, binding, vNode) {
    // Provided expression must evaluate to a function.
    if (typeof binding.value !== 'function') {
      const compName = vNode.context.name;
      let warn = `[Vue-click-outside:] provided expression '${
        binding.expression
      }' is not a function, but has to be`;
      if (compName) {
        warn += `Found in component '${compName}'`;
      }
      Vue.util.warn(warn);
    }
    // Define Handler and cache it on the element
    // const { bubble } = binding.modifiers;
    const handler = function handler(evt) {
      // here I check that click was outside the el and his childrens
      if (!(el === evt.target || el.contains(evt.target))) {
        // and if it did, call method provided in attribute value
        vNode.context[binding.expression](evt);
      }
    };
    // eslint-disable-next-line no-param-reassign
    el[HANDLER] = handler;

    document.addEventListener('click', el[HANDLER]);
  },
  unbind(el) {
    // Remove Event Listeners
    document.removeEventListener('click', el[HANDLER]);
    // eslint-disable-next-line no-param-reassign
    el[HANDLER] = null;
  },
};
