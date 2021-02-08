<template>
  <div>
    <v-card>
      <v-card-title>Teleop</v-card-title>
      <v-divider></v-divider>

      <v-row>
        <v-col cols="12">
          <v-card-actions>
            <v-container>
              <h4>Pickup Method</h4>
              <v-btn-toggle v-model="t_pickup" multiple tile group>
                <v-btn value="floor">Floor</v-btn>
                <v-btn value="station">station</v-btn>
              </v-btn-toggle>
            </v-container>
            <v-container>
              <v-slider v-model="t_ball_cap" thumb-label min="0" max="10"
                >Robot ball capacity</v-slider
              >
            </v-container>
            <v-container>
              <h4>Ball port scored in</h4>
              <v-btn-toggle v-model="t_port" multiple tile group>
                <v-btn value="high">high</v-btn>
                <v-btn value="low">low</v-btn>
              </v-btn-toggle>
            </v-container>
            <v-container>
              <v-slider
                v-model="t_accuracy"
                thumb-label
                min="0"
                max="100"
                step="5"
                >Shooting accuracy</v-slider
              >
            </v-container>
            <v-container>
              <v-checkbox
                v-model="t_trench_run"
                label="Robot can do trench run"
              ></v-checkbox>
            </v-container>
            <v-container>
              <v-slider
                v-model="t_trench_runs_made"
                thumb-label
                min="0"
                max="20"
                >Number of trench runs made</v-slider
              >
            </v-container>
            <v-container>
              <v-checkbox
                v-model="t_through_generator"
                label="Robot can go through generator"
              ></v-checkbox>
            </v-container>
            <v-container>
              <v-checkbox
                v-model="t_cp_spin_2_win"
                label="Robot spins pizza"
              ></v-checkbox>
            </v-container>
            <v-container>
              <v-slider v-model="t_cp_spins" thumb-label min="0" max="20"
                >Number of Pizza Spins</v-slider
              >
            </v-container>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      t_pickup: [],
      t_ball_cap: 0,
      t_port: [],
      t_accuracy: 50,
      t_trench_run: false,
      t_trench_runs_made: 0,
      t_through_generator: false,
      t_cp_spin_2_win: false,
      t_cp_spins: 0,
    };
  },
};
</script>

<style scoped></style>
