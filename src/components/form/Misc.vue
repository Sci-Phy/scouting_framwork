<template>
  <div>
    <v-card>
      <v-card-title>Misc</v-card-title>
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
      defensive: false,
      foul_number: 0,
      foul_type: "",
      human: "mid",
      driver: "mid",
      comments: ""
    };
  }
};
</script>

<style scoped></style>
