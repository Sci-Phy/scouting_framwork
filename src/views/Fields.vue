<template>
  <div>
    <v-form>
      <v-container>
        <v-card>
          <v-card-title>Info</v-card-title>
          <v-divider></v-divider>

          <v-card-actions>
            <v-container fluid>
              <v-text-field
                v-model="d[0].match"
                label="Match Number"
                placeholder="####"
              ></v-text-field>
            </v-container>
            <v-container fluid>
              <v-text-field
                v-model="d[0].team"
                label="Team Number"
                placeholder="####"
              ></v-text-field>
            </v-container>
            <v-container fluid>
              <h4>Alliance</h4>
              <v-btn-toggle v-model="d[0].alliance" tile group>
                <v-btn value="red" color="red">Red</v-btn>
                <v-btn value="blue" color="blue">Blue</v-btn>
              </v-btn-toggle>
            </v-container>
          </v-card-actions>
          <p>{{ d[0].match }}</p>
        </v-card>
        <br />
        <v-card>
          <v-card-title>Auton</v-card-title>
          <v-divider></v-divider>

          <v-card-actions>
            <v-container>
              <h4>Starting Position</h4>
              <v-btn-toggle v-model="d[0].a_start_pos" tile group>
                <v-btn value="left">Left</v-btn>
                <v-btn value="middle">Middle</v-btn>
                <v-btn value="right">Right</v-btn>
              </v-btn-toggle>
            </v-container>
            <v-container>
              <v-checkbox
                v-model="d[0].a_movement"
                label="Robot moves off starting line"
              ></v-checkbox>
              <v-checkbox label="The robot scores balls"></v-checkbox>
            </v-container>
            <v-container>
              <h4>Ball port scored in</h4>
              <v-btn-toggle v-model="d[0].a_port" tile group>
                <v-btn value="high">High</v-btn>
                <v-btn value="low">Low</v-btn>
              </v-btn-toggle>
            </v-container>
            <v-container>
              <v-slider
                v-model="d[0].a_accuracy"
                :label="ex.label"
                :thumb-color="ex.color"
                min="0"
                max="100"
              ></v-slider>
            </v-container>
          </v-card-actions>
        </v-card>
        <br />
        <v-card>
          <v-card-title>Teleop</v-card-title>
          <v-divider></v-divider>

          <v-row>
            <v-col cols="12">
              <v-card-actions> </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
        <br />
        <v-card>
          <v-card-title>Endgame</v-card-title>
          <v-divider></v-divider>

          <v-row>
            <v-col cols="12">
              <v-card-actions> </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
        <br />
        <v-card>
          <v-card-title>Misc</v-card-title>
          <v-divider></v-divider>

          <v-row>
            <v-col cols="12">
              <v-card-actions> </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
        <br />
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
/*
import Info from "@/components/form/Info.vue";
import Auton from "@/components/form/Auton.vue";
import Teleop from "@/components/form/Teleop.vue";
import Endgame from "@/components/form/Endgame.vue";
import Misc from "@/components/form/Misc.vue";
*/

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    /*
    Info,
    Auton,
    Teleop,
    Endgame,
    Misc,
    */
  },
  data() {
    return {
      d: [
        {
          match: "",
          team: "",
          alliance: "red",
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
      ex: { label: "Auton Score Accuracy", val: 50, color: "primary" },
    };
  },
  methods: {
    ...mapActions(["fetchAllData"]),
    ...mapActions(["submitForm"]),
    appendIconCallback() {},
    prependIconCallback() {},
    sendData(e) {
      e.preventDefault();
      this.submitForm(this.d);
    },
  },
  computed: mapGetters(["allSubmitions"]),
  created() {
    this.fetchAllData();
  },
};
</script>

<style scoped></style>
