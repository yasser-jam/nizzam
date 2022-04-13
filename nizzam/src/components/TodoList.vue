<template>
  <v-card class="mx-auto" max-width="374">
    <v-toolbar>
      <v-toolbar-title>To Do List</v-toolbar-title>
    </v-toolbar>
    <v-card-text class="pt-0">
      <v-list>
        <v-list-item v-for="task in tasks" :key="task.id" height="36px" class="my-3">
          <v-checkbox v-model="task.val" hide-details>
            <template v-slot:label>
              <div class="font-weight-bold" :class="task.val ? 'text-decoration-line-through' : ''">{{task.text}}</div>
            </template>
          </v-checkbox>
        </v-list-item>
      </v-list>
      <goals-form></goals-form>

    </v-card-text>

  </v-card>
</template>

<script>
import GoalsForm from './GoalsForm.vue'
export default {
  data: () => (
    { 
      tasks: [
      { id: 1, text: "Finish homework", val: '' },
      { id: 2, text: "Make Youtube video", val: '' },
      { id: 3, text: "Go to work", val: '' },
    ],
    }
  ), 
  components: {
    GoalsForm
  }
};
</script>

<style>
</style>