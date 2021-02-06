<template>
  <div>
    <h3>Basic teams placeholder for routing</h3>
    <h3>{{ $route.params.id }}</h3>

    <v-row dense>
      <v-col cols="12">
        <v-container>
          <v-card v-for="submition in allSubmitions" :key="submition.team">
            <v-card-title>{{ submition.team }}</v-card-title>
            <v-divider></v-divider>
            <v-list dense>
              <v-list-item v-for="item in fields" :key="item.name" link>
                <v-list-item-content>
                  {{ item.name }}
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
          <br />
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  mounted() {
    console.log(this.$route.params.id);
  },
  data() {
    return {
      fields: [
        // TODO: Fix these descriptions and split them up into their categories
        { name: "Matches" },
        { name: "Alliance" },
        { name: "Start Position" },
        { name: "Moves off Line" },
        { name: "Scores Balls" },
        { name: "Ball Port" },
        { name: "Score Acc" },
        { name: "Ball Collection" },
        { name: "Ball Capacity" },
        { name: "T Ball Port" },
        { name: "T Ball Acc" },
        { name: "Trench Run" },
        { name: "# of Trench Runs" },
        { name: "Can go through Generator" },
        { name: "Spin Control Panel" },
        { name: "# of CP spin to wins" },
        { name: "Defensive" },
        { name: "Foud Number" },
        { name: "Foul Type" },
        { name: "Hang" },
        { name: "Time of death" },
        { name: "Hang location" },
        { name: "Alliance hangs" },
        { name: "Generator Balanced?" },
        { name: "Driver Quality" },
        { name: "Comments" },
      ],
    };
  },
  methods: {
    ...mapActions(["fetchAllData"]),
  },
  computed: mapGetters(["allSubmitions"]),
  created() {
    this.fetchAllData();
  },
};
</script>

<style scoped></style>
