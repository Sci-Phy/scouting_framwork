<template>
  <div>
    <v-card>
      <v-card-title>Auton</v-card-title>
      <v-divider></v-divider>

      <v-card-actions>
        <v-container>
          <h4>Starting Position</h4>
          <v-btn-toggle v-model="a_start_pos" tile group>
            <v-btn value="left">Left</v-btn>
            <v-btn value="middle">Middle</v-btn>
            <v-btn value="right">Right</v-btn>
          </v-btn-toggle>
        </v-container>
        <v-container>
          <v-checkbox
            v-model="a_movement"
            label="Robot moves off starting line"
          ></v-checkbox>
          <v-checkbox
            v-model="a_score"
            label="The robot scores balls"
            thumb-label
          ></v-checkbox>
        </v-container>
        <v-container>
          <h4>Ball port scored in</h4>
          <v-btn-toggle v-model="a_port" multiple tile group>
            <v-btn value="high">High</v-btn>
            <v-btn value="low">Low</v-btn>
          </v-btn-toggle>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      a_start_pos: "",
      a_movement: false,
      a_score: false,
      a_port: "",
      a_accuracy: 50,
    };
  },
};
</script>

<style scoped></style>
