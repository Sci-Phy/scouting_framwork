//import axios from "axios";

import axios from "axios";

const state = {
  submitions: [{}],
};

// TODO this needs to be switched over for analysis.
// also need to implement server and saving data before this will work for submitions
const getters = {
  allSubmitions: (state) => state.submitions,
};
const actions = {
  async fetchAllData({ commit }) {
    const response = await axios.get("http://localhost:80/api");
    console.log(response);
    commit("apiToState", response.data);
  },
  async submitForm({ commit }, data) {
    const response = await axios.post("http://localhost:80/api", data);
    console.log(response);
    commit("stateToApi", response.data);
  },
};
const mutations = {
  apiToState: (state, newSubmition) => (state.submitions = newSubmition),
  stateToApi: (state, submition) => state.submitions.push(submition),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
