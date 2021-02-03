<template>
  <v-navigation-drawer app permanent>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Scouting CnC
        </v-list-item-title>
        <v-list-item-subtitle>
          V 0.1.0
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>{{ user.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ user.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <router-link :to="item.location">
            <span>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </span>
          </router-link>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
//import SideBar from "@/components/App/SideBar.vue";

export default {
  components: {},

  data() {
    return {
      drawer: false,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", location: "/" },
        { title: "Form", icon: "mdi-view-dashboard", location: "/form" },
        {
          title: "Analysis",
          icon: "mdi-view-dashboard",
          location: "/analysis"
        },
        { title: "Teams", icon: "mdi-view-dashboard", location: "/teams" },
        { title: "About", icon: "mdi-help-box", location: "/about" }
      ],
      right: null,
      user: { title: "User", icon: "mdi-view-dashboard" }
    };
  }
};
</script>
