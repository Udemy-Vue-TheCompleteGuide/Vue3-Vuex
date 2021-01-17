import {
  USERAUTH_LOGIN,
  USERAUTH_LOGOUT,
} from '@/store/storeTypes/action_types';
import {
  USER_AUTH_IS_AUTHENTICATED,
} from '@/store/storeTypes/mutation_types';

export default {
  [USERAUTH_LOGIN](ctx) {
    ctx.commit(USER_AUTH_IS_AUTHENTICATED, { isAuthenticated: true });
  },
  [USERAUTH_LOGOUT](ctx) {
    ctx.commit(USER_AUTH_IS_AUTHENTICATED, { isAuthenticated: false });
  },
};
