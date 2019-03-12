export default {
  getNavigationElements: state => id => (
    state.navigationElements[id]
  ),
  getSection: state => name => (
    state.sections[name]
  ),
  getKits: state => id => (
    state.kits[id].hasMoreItems
  ),
  getLandingPage: state => id => (
    state.landingPage[id]
  ),
  getGoodsBanner: state => name => (
    state.banners[name]
  ),
};
