import * as moduleStates from "./moduleStates";
export default {
  modules: {
    a: moduleStates.moduleA,
    b: moduleStates.moduleB
  },
  state: {
    count: 0,
    name: "",
    age: null,
    todos: [{ id: 1, text: "a", done: true }, { id: 2, text: "b", done: false }]
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    someMutation(state) {
      state.name = "mutationA";
    },
    someOtherMutation(state) {
      state.age = 20;
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    },
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id);
    }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 1000);
    },
    actionA({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit("someMutation");
          resolve();
        }, 1000);
      });
    },
    actionB({ dispatch, commit }) {
      return dispatch("actionA").then(() => {
        commit("someOtherMutation");
      });
    }
  }
};
