<template>
  <v-text-field
    v-model="value"
    :label="label"
    append-icon="fa fa-plus"
    @change="change"
    @click:append="change"
  ></v-text-field>
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
