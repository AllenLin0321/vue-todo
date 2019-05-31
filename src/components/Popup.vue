<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn flat v-on="on" class="success">Add new project</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a new project</h2>
      </v-card-title>

      <v-card-text>
        <v-form class="px-3">
          <v-text-field label="Title" v-model="title" prepend-icon="folder"></v-text-field>
          <v-textarea label="Infomation" v-model="content" prepend-icon="edit"></v-textarea>

          <v-menu full-width max-width="290">
            <template v-slot:activator="{on}">
              <v-text-field v-on="on" label="Due day" :value="computedDateFormattedDatefns" prepend-icon="date_range"></v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>

          <v-btn flat class="success mt-3 mx-0" @click="submit">Add project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from "date-fns/format";
export default {
  data() {
    return {
      dialog: false,
      title: "",
      content: "",
      due: ""
    };
  },
  computed: {
      computedDateFormattedDatefns() {
          return this.due ? format(this.due, 'Do MMMM YYYY') : ''

      }
  },
  methods: {
    submit() {
      this.dialog = false;
      console.log(this.title, this.content);
    }
  }
};
</script>
