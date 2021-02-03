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
import Info from "@/components/Form/Info.vue";
import Auton from "@/components/Form/Auton.vue";
import Teleop from "@/components/Form/Teleop.vue";
import Endgame from "@/components/Form/Endgame.vue";
import Misc from "@/components/Form/Misc.vue";

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
    prependIconCallback() {}
  }
};
</script>

<style scoped></style>
