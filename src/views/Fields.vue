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
              <h4>Ball port scored in</h4>
              <v-btn-toggle v-model="d[0].a_port" multiple tile group>
                <v-btn value="high">High</v-btn>
                <v-btn value="low">Low</v-btn>
              </v-btn-toggle>
            </v-container>
            <v-container>
              <v-checkbox
                v-model="d[0].a_movement"
                label="Robot moves off starting line"
              ></v-checkbox>
              <v-checkbox
                v-model="d[0].a_score"
                label="The robot scores balls"
              ></v-checkbox>
            </v-container>
            <v-container>
              <v-slider
                v-model="d[0].a_accuracy"
                label="Auton Score Accuracy"
                thumb-label
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

          <v-card-actions>
            <v-row>
              <v-container>
                <h4>Pickup Method</h4>
                <v-btn-toggle v-model="d[0].t_pickup" multiple tile group>
                  <v-btn value="floor">Floor</v-btn>
                  <v-btn value="station">station</v-btn>
                </v-btn-toggle>
                <h4>Ball port scored in</h4>
                <v-btn-toggle v-model="d[0].t_port" multiple tile group>
                  <v-btn value="high">high</v-btn>
                  <v-btn value="low">low</v-btn>
                </v-btn-toggle>
              </v-container>
              <v-container>
                <v-slider
                  v-model="d[0].t_ball_cap"
                  thumb-label
                  min="0"
                  max="10"
                  label="Robot ball capacity"
                ></v-slider>
              </v-container>
            </v-row>
            <v-row>
              <v-container>
                <v-slider
                  v-model="d[0].t_accuracy"
                  thumb-label
                  min="0"
                  max="100"
                  step="5"
                  label="Shooting accuracy"
                ></v-slider>
              </v-container>
              <v-container>
                <v-checkbox
                  v-model="d[0].t_trench_run"
                  label="Robot can do trench run"
                ></v-checkbox>
              </v-container>
              <v-container>
                <v-slider
                  v-model="d[0].t_trench_runs_made"
                  thumb-label
                  min="0"
                  max="20"
                  label="Number of trench runs made"
                ></v-slider>
              </v-container>
            </v-row>
            <v-row>
              <v-container>
                <v-checkbox
                  v-model="d[0].t_through_generator"
                  label="Robot can go through generator"
                ></v-checkbox>
              </v-container>
              <v-container>
                <v-checkbox
                  v-model="d[0].t_cp_spin_2_win"
                  label="Robot spins pizza"
                ></v-checkbox>
              </v-container>
              <v-container>
                <v-slider
                  v-model="d[0].t_cp_spins"
                  thumb-label
                  min="0"
                  max="20"
                  label="Number of Pizza Spins"
                ></v-slider>
              </v-container>
            </v-row>
          </v-card-actions>
        </v-card>
        <br />
        <v-card>
          <v-card-title>Endgame</v-card-title>
          <v-divider></v-divider>

          <v-row>
            <v-col cols="12">
              <v-card-actions>
                <v-container>
                  <h4>Hang</h4>
                  <v-btn-toggle v-model="d[0].e_hang" tile group>
                    <v-btn value="attempt">Attempt</v-btn>
                    <v-btn value="success">Success</v-btn>
                  </v-btn-toggle>
                </v-container>
                <v-container>
                  <v-slider
                    v-model="d[0].e_time_to_hang"
                    thumb-label
                    min="0"
                    max="20"
                    label="Time to hang"
                  ></v-slider>
                </v-container>
                <v-container>
                  <h4>Hang location</h4>
                  <v-btn-toggle v-model="d[0].e_hang_loc" tile group>
                    <v-btn value="left">Left</v-btn>
                    <v-btn value="middle">Middle</v-btn>
                    <v-btn value="right">Right</v-btn>
                  </v-btn-toggle>
                </v-container>
                <v-container>
                  <v-checkbox
                    v-model="d[0].e_balanced"
                    label="Generator balanced"
                  ></v-checkbox>
                </v-container>
                <v-container>
                  <v-slider
                    v-model="d[0].e_robot_hang_total"
                    thumb-label
                    min="0"
                    max="3"
                    label="Robots hanging"
                  ></v-slider>
                </v-container>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
        <br />
        <v-card>
          <v-card-title>Misc</v-card-title>
          <v-divider></v-divider>

          <v-row>
            <v-col cols="12">
              <v-card-actions>
                <v-container>
                  <v-checkbox
                    v-model="d[0].defensive"
                    label="Robot was defensive"
                  ></v-checkbox>
                </v-container>
                <v-container>
                  <v-slider
                    v-model="d[0].foul_number"
                    thumb-label
                    min="0"
                    max="3"
                    label="Number of fouls"
                  ></v-slider>
                </v-container>
                <v-container>
                  <h4>Foul Type</h4>
                  <v-btn-toggle v-model="d[0].foul_type" multiple tile group>
                    <v-btn value="tech">Tech</v-btn>
                    <v-btn value="yellow">Yellow</v-btn>
                    <v-btn value="red">Red</v-btn>
                  </v-btn-toggle>
                </v-container>
                <v-container>
                  <h4>Driver skill</h4>
                  <v-btn-toggle v-model="d[0].driver" tile group>
                    <v-btn value="abbominable">Abbominable</v-btn>
                    <v-btn value="bad">Bad</v-btn>
                    <v-btn value="mid">Mid</v-btn>
                    <v-btn value="good">Good</v-btn>
                    <v-btn value="godly">Godly</v-btn>
                  </v-btn-toggle>
                </v-container>
                <v-container>
                  <v-textarea
                    v-model="comments"
                    solo
                    label="Comments"
                  ></v-textarea>
                </v-container>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
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
          a_port: [],
          a_accuracy: 50,

          t_pickup: [],
          t_ball_cap: 0,
          t_port: [],
          t_accuracy: 50,
          t_trench_run: false,
          t_trench_runs_made: 0,
          t_through_generator: false,
          t_cp_spin_2_win: false,
          t_cp_spins: 0,

          defensive: false,
          foul_number: 0,
          foul_type: [],

          e_hang: "",
          e_time_to_hang: -1,
          e_hang_loc: "",
          e_robot_hang_total: 0,
          e_balanced: false,

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
