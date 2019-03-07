import Vue from 'vue';

const HANDLER = 'SELECT_ON_ENTER';

export default {
  bind(el, binding, vNode) {
    const input = el.querySelector('input[type="text"]');

    // Provided expression must evaluate to a function.
    if (typeof binding.value !== 'function') {
      const compName = vNode.context.name;
      let warn = `[${HANDLER}] provided expression '${
        binding.expression
      }' is not a function, but has to be`;
      if (compName) {
        warn += `Found in component '${compName}'`;
      }
      Vue.util.warn(warn);
    }

    function keypressHandler(event) {
      if (event.which === 13 || event.keyCode === 13) {
        const { value } = event.target;
        vNode.context[binding.expression](value);
      }
    }
    // eslint-disable-next-line no-param-reassign
    el[HANDLER] = keypressHandler;

    input.addEventListener('keydown', el[HANDLER]);
  },
  unbind(el) {
    const input = el.querySelector('input[type="text"]');
    input.removeEventListener('keydown', el[HANDLER]);
  },
};
