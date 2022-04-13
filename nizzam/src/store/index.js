const Store = {
  state: () => ({
    tasks: [
      { id: 1, text: "Finish homework", val: "" },
      { id: 2, text: "Make Youtube video", val: "" },
      { id: 3, text: "Go to work", val: "" },
    ],
  }),

  getters: {
    tasks(state) {
      return state.tasks;
    },
  },

  mutations: {
    addTask(state, task) {
      state.tasks.push(task)
    },
  },

  actions: {},
};

export default Store;
