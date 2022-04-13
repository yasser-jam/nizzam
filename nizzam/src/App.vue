<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" lg="4">
            <todo-list></todo-list>
          </v-col>
          <v-col cols="12" lg="8">
            <year-goals></year-goals>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TodoList from './components/TodoList.vue'
import YearGoals from './components/YearGoals.vue'
export default {
  data: () => ({
    drawer: null,
    
  }),
  components: {
    TodoList,
    YearGoals
  }
};
</script>

<style>
label {
  color: #111;
  opacity: 1;
}
</style>