<template>
  <v-text-field
    v-model="value"
    class="mt-2"
    color="secondary"
    :label="label"
    solo
    outlined
    hide-details
    @change="handleChange"
  >
    <template #append>
      <v-icon color="secondary" @click="handleChange">fa-plus</v-icon>
    </template>
  </v-text-field>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: { type: String, required: true }
  },
  data: () => ({
    value: ""
  }),
  methods: {
    handleChange() {
      const { value } = this.$data;

      if (!value.trim()) return;
      this.$emit("change", { value });

      this.$data.value = "";
    }
  }
};
</script>
