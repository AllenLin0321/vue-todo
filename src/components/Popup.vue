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
        <v-form class="px-3" ref="form">
          <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
          <v-textarea label="Infomation" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>

          <v-menu full-width max-width="290">
            <template v-slot:activator="{on}">
              <v-text-field
                v-on="on"
                label="Due day"
                :value="computedDateFormattedDatefns"
                prepend-icon="date_range"
              ></v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>

          <v-btn flat class="success mt-3 mx-0" @click="submit" :loading="loading">Add project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from "date-fns/format";
import db from "@/fb";
export default {
  data() {
    return {
      dialog: false,
      title: "",
      content: "",
      due: "",
      inputRules: [v => v.length >= 3 || "Minimun length is 3 characters"],
      loading: false
    };
  },
  computed: {
    computedDateFormattedDatefns() {
      return this.due ? format(this.due, "Do MMMM YYYY") : "";
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const project = {
          title: this.title,
          content: this.content,
          due: format(this.due, "Do MMM YYYY"),
          person: "Allen Lin",
          status: "ongoing"
        };
        db.collection("projects")
          .add(project)
          .then(res => {
            this.dialog = false;
            this.loading = false;
          });
      } else {
        alert("輸入資料錯誤");
      }
    }
  }
};
</script>
