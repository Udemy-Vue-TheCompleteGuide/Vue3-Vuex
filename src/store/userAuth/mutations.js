import {
  USER_AUTH_IS_AUTHENTICATED,
} from '@/store/storeTypes/mutation_types';

export default {
  [USER_AUTH_IS_AUTHENTICATED](state, payload) {
    state.isAuthenticated = payload.isAuthenticated;
  },
};
