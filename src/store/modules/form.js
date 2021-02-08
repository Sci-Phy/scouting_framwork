//import axios from "axios";

import axios from "axios";

const state = {
  submitions: [],
  fields: [
    {
      match: "",
      team: "",
      alliance: "red",
      a_start_pos: "",
      a_movement: false,
      a_score: false,
      a_port: "",
      a_accuracy: 0,
      t_pickup: "",
      t_ball_cap: 0,
      t_port: "",
      t_accuracy: 0,
      t_trench_run: false,
      t_trench_runs_made: 0,
      t_through_generator: false,
      t_cp_spins: 0,
      defensive: false,
      foul_number: 0,
      foul_type: "",
      e_hang: "",
      e_time_to_hang: 0,
      e_hang_loc: "",
      e_robot_hang_total: 0,
      e_balanced: true,
      human: "",
      driver: "",
      comments: "",
    },
  ],
};

// TODO this needs to be switched over for analysis.
const getters = {
  allSubmitions: (state) => state.submitions,
};
const actions = {
  async fetchAllData({ commit }) {
    const response = await axios.get("http://localhost:80/api");
    commit("apiToState", response.data);
  },
  async submitForm({ commit }, data) {
    const response = await axios.post("http://localhost:80/api", data);
    commit("stateToApi", response.data);
  },
};
const mutations = {
  apiToState: (state, newData) => (state.submitions = newData),
  stateToApi: (state, submition) => state.submitions.push(submition),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
