import isEmpty from 'lodash.isempty';

export default {
  isLoggedIn(state) {
    return !isEmpty(state, 'userProfile');
  },
};
