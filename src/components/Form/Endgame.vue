<template>
  <div>
    <v-card>
      <v-card-title>Endgame</v-card-title>
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
      e_hang: "",
      e_time_to_hang: 0,
      e_hang_loc: "",
      e_robot_hang_total: 0,
      e_balanced: false
    };
  }
};
</script>

<style scoped></style>
