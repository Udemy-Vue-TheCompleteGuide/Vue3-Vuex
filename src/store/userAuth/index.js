import mutations from '@/store/userAuth/mutations';
import actions from '@/store/userAuth/actions';

export default {
  state: () => ({
    isAuthenticated: false,
  }),
  mutations,
  actions,
};
