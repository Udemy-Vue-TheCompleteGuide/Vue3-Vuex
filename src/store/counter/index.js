import getters from '@/store/counter/getters';
import mutations from '@/store/counter/mutations';
import actions from '@/store/counter/actions';

export default {
  state: () => ({
    counter: 0,
  }),
  getters,
  mutations,
  actions,
};
