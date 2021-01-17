import {
  COUNTER_ADD,
  COUNTER_SUBTRACT,
} from '@/store/storeTypes/mutation_types';

export default {
  [COUNTER_ADD]: (state) => {
    state.counter += 1;
  },
  [COUNTER_SUBTRACT]: (state) => {
    state.counter -= 1;
  },
};
