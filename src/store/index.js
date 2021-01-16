import { createStore } from 'vuex';

export default createStore({
  state: () => ({
    counter: 0,
  }),
  getters: {
    getCounter: (state) => state.counter,
  },
  mutations: {
    add: (state) => {
      state.counter += 1;
    },
    subtract: (state) => {
      state.counter -= 1;
    },
  },
  actions: {
    addOne: (ctx) => {
      ctx.commit('add');
    },
    subtractOne: (ctx) => {
      ctx.commit('subtract');
    },
  },
  modules: {
  },
});
