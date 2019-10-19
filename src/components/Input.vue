<template>
  <v-text-field
    v-model="value"
    :label="label"
    color="secondary"
    class="mt-2"
    elevation="20"
    solo
    outlined
    hide-details
    @change="change"
  >
    <template v-slot:append>
      <v-icon color="secondary" class="pr-2 py-4" @click="change">
        fa fa-plus
      </v-icon>
    </template>
  </v-text-field>
</template>

<script>
export default {
  name: "Input",
  props: ["add", "label"],
  data() {
    return {
      value: ""
    };
  },
  methods: {
    change() {
      if (!this.value) return;

      this.add(this.value[0].toUpperCase() + this.value.slice(1).toLowerCase());
      this.value = "";
    }
  }
};
</script>
