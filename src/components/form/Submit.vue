<template>
  <div>
    <v-card>
      <v-container>
        <span>
          <v-btn @click="submit" block outlined tile color="accent"
            >SUBMIT</v-btn
          >
        </span>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  methods: {
    submit: function() {
      console.log("SUBMIT WAS SUCCESSFUL");
    }
  }
};
</script>

<style scoped></style>
