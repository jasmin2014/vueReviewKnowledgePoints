export const moduleA = {
  namespaced: true,
  state: {
    testCount: 3
  },
  mutations: {
    incrementModuleStateA(state) {
      state.testCount++;
    },
    decrementModuleStateA(state) {
      state.testCount--;
    }
  },
  actions: {
    incrementFromStateAIfOdd({ state, commit }) {
      if (state.testCount % 2 === 1) {
        commit("incrementModuleStateA");
      }
    }
  },
  getters: {
    doubleMoudleStateACount(state) {
      return state.testCount * 2;
    }
  }
};
export const moduleB = {
  state: {
    testCount: 8
  },
  mutations: {},
  getters: {},
  actions: {}
};
