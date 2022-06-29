import { createStore } from "vuex";

export default createStore({
  state: () => ({
    unselectedFaculties: [],
    selectedFaculties: [],
    loadingStatus: false,
  }),
  mutations: {
    addFaculties(state, data) {
      state.unselectedFaculties = data;
    },
    selectFaculty(state, id) {
      state.selectedFaculties.push(
        ...state.unselectedFaculties.splice(
          state.unselectedFaculties.findIndex((item) => {
            return item.id === id;
          }),
          1
        )
      );
    },
    unselectFaculty(state, id) {
      state.unselectedFaculties.push(
        ...state.selectedFaculties.splice(
          state.selectedFaculties.findIndex((item) => {
            return item.id === id;
          }),
          1
        )
      );
    },
  },
  actions: {
    // fake api
    async fetchFaculties({ commit, state }) {
      state.loadingStatus = true;
      let faculties = await import("@/faculties");
      commit("addFaculties", faculties.default);
      state.loadingStatus = false;
    },
  },
  getters: {
    getUnselectedFaculties(state) {
      return state.unselectedFaculties;
    },
    getSelectedFaculties(state) {
      return state.selectedFaculties;
    },
    getLoadingStatus(state) {
      return state.loadingStatus;
    },
  },
});
