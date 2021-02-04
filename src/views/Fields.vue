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
    appendIconCallback() {},
    prependIconCallback() {},
    submit: function() {
      console.log("Submit Successful");
      console.log(this.allSubmitions);
    }
  },
  computed: mapGetters(["allSubmitions"])
};
</script>

<style scoped></style>
