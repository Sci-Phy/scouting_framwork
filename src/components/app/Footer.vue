<template>
  <v-app>
    <v-footer app v-bind="localAttrs" :padless="padless">
      <v-card flat tile width="100%" class="red lighten-1 text-center">
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-home", "mdi-email", "mdi-calendar", "mdi-delete"],
    padless: true,
    variant: "absolute"
  }),
  computed: {
    localAttrs() {
      const attrs = {};
      return attrs;
    }
  }
};
</script>

<style scoped></style>
