import {
  COUNTER_ADD_ONE,
  COUNTER_SUBTRACT_ONE,
} from '@/store/storeTypes/action_types';
import {
  COUNTER_ADD,
  COUNTER_SUBTRACT,
} from '@/store/storeTypes/mutation_types';

export default {
  [COUNTER_ADD_ONE]: (ctx) => {
    ctx.commit(COUNTER_ADD);
  },
  [COUNTER_SUBTRACT_ONE]: (ctx) => {
    ctx.commit(COUNTER_SUBTRACT);
  },
};
