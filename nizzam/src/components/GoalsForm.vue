<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      width="900"      
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          class="mb-3"
          v-bind="props"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card width="700">
        <v-card-title class="justify-center">
          <div class="text-h4 text-center pa-3">Add To Do Item</div>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12"
              >
                <v-text-field
                  label="Legal first name*"
                  required
                  width="700"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            :text="false"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="warning"
            flat  
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
  }),
};
</script>