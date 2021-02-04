//import axios from "axios";

import axios from "axios";

const state = {
  submitions: [
    {
      match: "1",
      team: "2",
      alliance: "red"
    },
    {
      match: "2",
      team: "2",
      alliance: "blue"
    }
  ]
};

// TODO this needs to be switched over for analysis.
// also need to implement server and saving data before this will work for submitions
const getters = {
  allSubmitions: state => state.submitions
};
const actions = {
  async fetchAllData({ commit }) {
    var response = await axios.get("/reports");
    commit("setData", response.data);
  }
};
const mutations = {
  setData: (state, newSubmition) => (state.submitions = newSubmition)
};

export default {
  state,
  getters,
  actions,
  mutations
};
