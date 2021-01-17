import {
  COUNTER_GETCOUNTER,
} from '@/store/storeTypes/getter_types';

export default {
  [COUNTER_GETCOUNTER](state) {
    return state.counter;
  },
};
