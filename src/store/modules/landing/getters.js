export default {
  getNavigationElements: state => id => (
    state.navigationElements[id]
  ),
  getSection: state => name => (
    state.sections[name]
  ),
  getLandingPage: state => id => (
    state.landingPage[id]
  ),
  getGoodsBanner: state => name => (
    state.banners[name]
  ),
};
