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
            <v-btn v-for="submition in allSubmitions" :key="submition.match">
              {{ submition.match }}
            </v-btn>
          </v-container>
          <v-container>
            <span>
              <v-btn @click="submit" block outlined tile color="accent"
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
    Misc
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchAllData"]),
    appendIconCallback() {},
    prependIconCallback() {},
    submit: function() {
      console.log("Submit Successful");
      console.log(this.allSubmitions);
    }
  },
  computed: mapGetters(["allSubmitions"]),
  create() {
    this.fetchAllData();
  }
};
</script>

<style scoped></style>
