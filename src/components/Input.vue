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
  props: ["label"],
  data: () => ({
    value: ""
  }),
  methods: {
    change() {
      const { value } = this.$data;

      if (!value.trim()) return;
      this.$emit("addItem", { value });

      this.value = "";
    }
  }
};
</script>
