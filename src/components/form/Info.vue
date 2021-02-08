<template>
  <div>
    <v-card>
      <v-card-title>Info</v-card-title>
      <v-divider></v-divider>

      <v-card-actions>
        <v-container fluid>
          <v-text-field
            v-model="match"
            label="Match Number"
            placeholder="####"
          ></v-text-field>
        </v-container>
        <v-container fluid>
          <v-text-field
            v-model="team"
            label="Team Number"
            placeholder="####"
          ></v-text-field>
        </v-container>
        <v-container fluid>
          <h4>Alliance</h4>
          <v-btn-toggle v-model="alliance" tile group>
            <v-btn value="red" color="red">Red</v-btn>
            <v-btn value="blue" color="blue">Blue</v-btn>
          </v-btn-toggle>
        </v-container>
      </v-card-actions>
      <p>{{ match }}</p>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      match: "",
      team: "",
      alliance: "",
    };
  },
};
</script>

<style scoped></style>
