<template>
  <div>
    <v-form>
      <v-container>
        <Info />
        <br />
        <Auton />
        <br />
        <Teleop />
        <br />
        <Endgame />
        <br />
        <Misc />
        <br />
        <v-card>
          <v-container>
            <span>
              <v-btn @click="sendData" block outlined tile color="accent"
                >SUBMIT</v-btn
              >
            </span>
          </v-container>
        </v-card>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import Info from "@/components/form/Info.vue";
import Auton from "@/components/form/Auton.vue";
import Teleop from "@/components/form/Teleop.vue";
import Endgame from "@/components/form/Endgame.vue";
import Misc from "@/components/form/Misc.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Info,
    Auton,
    Teleop,
    Endgame,
    Misc,
  },
  data() {
    return {
      poggerino: [
        {
          id: "123456789",
          pogchamp: "true",
          match: "666",
          team: "666",
          color: "red",
          a_start_pos: "",
          a_movement: false,
          a_score: false,
          a_port: "",
          a_accuracy: 50,
          t_pickup: "",
          t_ball_cap: 0,
          t_port: "",
          t_accuracy: 50,
          t_trench_run: false,
          t_trench_runs_made: 0,
          t_through_generator: false,
          t_cp_spin_2_win: false,
          t_cp_spins: 0,
          defensive: false,
          foul_number: 0,
          foul_type: "",
          e_hang: "",
          e_time_to_hang: 0,
          e_hang_loc: "",
          e_robot_hang_total: 0,
          e_balanced: false,
          human: "mid",
          driver: "mid",
          comments: "",
        },
      ],
    };
  },
  methods: {
    ...mapActions(["fetchAllData"]),
    ...mapActions(["submitForm"]),
    appendIconCallback() {},
    prependIconCallback() {},
    sendData(e) {
      e.preventDefault();
      this.submitForm(this.poggerino);
    },
  },
  computed: mapGetters(["allSubmitions"]),
  created() {
    this.fetchAllData();
  },
};
</script>

<style scoped></style>
