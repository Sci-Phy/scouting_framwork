<template>
  <div>
    <v-card>
      <v-card-title>Teleop</v-card-title>
      <v-divider></v-divider>

      <v-row>
        <v-col cols="12">
          <v-card-actions> </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      t_pickup: "",
      t_ball_cap: 0,
      t_port: "",
      t_accuracy: 50,
      t_trench_run: false,
      t_trench_runs_made: 0,
      t_through_generator: false,
      t_cp_spin_2_win: false,
      t_cp_spins: 0
    };
  }
};
</script>

<style scoped></style>
