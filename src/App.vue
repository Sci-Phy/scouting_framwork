<template>
  <v-app id="app">
    <SideBar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "@/components/App/SideBar.vue";
//import Footer from "@/components/App/Footer.vue";

export default {
  name: "App",

  components: {
    SideBar
    //Footer
  },

  data: () => ({}),
  computed: {}
};
</script>
