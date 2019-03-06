export default {
  getSection: state => name => (
    state.sections[name]
  ),
  getMainBanner: state => id => (
    state.mainBanner[id]
  ),
};
