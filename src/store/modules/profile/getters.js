import isEmpty from 'lodash.isempty';
import get from 'lodash.get';

export default {
  userCart(state) {
    return get(state, 'userCart');
  },
  hasCart(state, getters) {
    return !isEmpty(getters.userCart);
  },
  cartCount(state, getters) {
    return getters.hasCart ? getters.userCart : '';
  },
  userProfile(state) {
    return get(state, 'userProfile');
  },
  isLoggedIn(state, getters) {
    return !isEmpty(getters.userProfile);
  },
  userName(state, getters) {
    const profile = getters.userProfile;
    // eslint-disable-next-line no-mixed-operators
    return profile && (profile.first_name || profile.last_name || profile.email) || 'Гость';
  },
};
