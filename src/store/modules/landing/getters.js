export default {
  getSection: state => name => (
    state.sections[name]
  ),
  getMainBanner: state => id => (
    state.mainBanner[id]
  ),
  getGoodsBanner: state => name => (
    state.banners[name]
  ),
};
